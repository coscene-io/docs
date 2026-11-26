# 创建 Ray 动作

本例从每条记录的 MCAP 相机画面中抽帧，并在 CPU 上识别瓶子、椅子、自行车等物品。Ray Task 负责抽帧，Ray Actor 加载一次 MobileNet-SSD 模型，复用于分配给它的多条记录。

## 编写抽帧 Task

准备至少一份 ROS 2 MCAP：示例读取 `/camera/image/compressed` 上以 CDR 编码的 `sensor_msgs/msg/CompressedImage`（JPEG 或 PNG）。如果相机使用其他 topic，请修改 `TOPIC`。在空目录中创建 `camera.py`，写入以下同步函数。

每个 MCAP 取第 1、31、61、91、121 帧中实际存在的帧。从只读的记录输入读取图像，把抽样帧和清单写入当前 JobRun 的共享输出目录；下游步骤只需接收清单路径。

```python
import json
from pathlib import Path

import cv2
import numpy as np
from mcap.reader import make_reader
from mcap_ros2.decoder import DecoderFactory
from matrix_action_sdk import current_context

TOPIC = "/camera/image/compressed"


def sample_frames() -> str:
    ctx = current_context()
    root = ctx.record.files_dir
    folder = ctx.outputs_dir / "frames"
    folder.mkdir(exist_ok=True)
    frames = []
    for path in sorted(root.rglob("*.mcap")):
        with path.open("rb") as stream:
            reader = make_reader(stream, decoder_factories=[DecoderFactory()])
            messages = reader.iter_decoded_messages(topics=[TOPIC])
            for index, (schema, _, message, image) in enumerate(messages):
                if schema.name != "sensor_msgs/msg/CompressedImage":
                    raise ValueError(f"Unexpected schema on {TOPIC}: {schema.name}")
                if index % 30:
                    continue
                pixels = cv2.imdecode(np.frombuffer(bytes(image.data), np.uint8), cv2.IMREAD_COLOR)
                if pixels is None:
                    raise ValueError(f"Invalid compressed image in {path.name}")
                filename = f"{len(frames):06}.jpg"
                if not cv2.imwrite(str(folder / filename), pixels):
                    raise OSError(f"Could not write {filename}")
                frames.append({"mcap": path.relative_to(root).as_posix(),
                               "log_time_ns": message.log_time, "image": filename})
                if index == 120:
                    break
    if not frames:
        raise ValueError(f"No frames found on {TOPIC}")
    manifest = folder / "manifest.json"
    manifest.write_text(json.dumps(frames), encoding="utf-8")
    print(f"sampled_frames={len(frames)}", flush=True)
    return str(manifest)
```

## 编写检测 Actor

在同一份 `camera.py` 中追加以下代码。`setup()` 从镜像加载预训练模型，每次 `run()` 检测当前记录的抽样帧。字典中的编号来自该模型的 PASCAL VOC 类别表，可以按需要调整保留的类别。

```python
ITEMS = {2: "bicycle", 5: "bottle", 9: "chair", 11: "diningtable",
         16: "pottedplant", 18: "sofa", 20: "tvmonitor"}


class ObjectDetector:
    def setup(self):
        folder = Path(__file__).with_name("model")
        self.model = cv2.dnn.readNetFromCaffe(
            str(folder / "deploy.prototxt"), str(folder / "weights.caffemodel")
        )

    def detect(self, image):
        height, width = image.shape[:2]
        blob = cv2.dnn.blobFromImage(image, 0.007843, (300, 300), (127.5,) * 3)
        self.model.setInput(blob)
        objects = []
        for _, class_id, score, left, top, right, bottom in self.model.forward().reshape(-1, 7):
            label = ITEMS.get(int(class_id))
            if label is None or score < 0.5:
                continue
            x1, x2 = (np.clip([left, right], 0, 1) * width).astype(int)
            y1, y2 = (np.clip([top, bottom], 0, 1) * height).astype(int)
            if x2 > x1 and y2 > y1:
                objects.append({"label": label, "score": round(float(score), 3),
                                "box": list(map(int, (x1, y1, x2 - x1, y2 - y1)))})
        return objects

    def run(self, manifest_path: str) -> int:
        manifest = Path(manifest_path)
        frames = json.loads(manifest.read_text(encoding="utf-8"))
        total = 0
        output = current_context().outputs_dir / "detections.jsonl"
        with output.open("w", encoding="utf-8") as stream:
            for frame in frames:
                image = cv2.imread(str(manifest.parent / frame["image"]))
                if image is None:
                    raise ValueError(f"Cannot read {frame['image']}")
                objects = self.detect(image)
                stream.write(json.dumps({**frame, "objects": objects}) + "\n")
                total += len(objects)
        print(f"frames={len(frames)} objects={total}", flush=True)
        return total
```

## 构建并推送 worker 镜像

本例适用于 CPython 3.12.16、Ray 2.51.1 的 Matrix head。构建前，向平台管理员确认目标集群 head 的版本。worker 镜像中的 Python 解释器须与 head 匹配到补丁号，Ray 版本也须一致。业务代码可以独立更新。

构建时，`ray-runner check-image` 检查镜像是否符合 SDK 要求。启动时，Ray 再将 worker 的实际版本与 head 核对。版本不匹配时，该 worker 无法加入集群，业务入口也不会在它上面执行。使用匹配的版本重新构建并推送镜像，更新动作的 `ray.image` 后重新调用。

在构建机的 `~/.netrc` 中配置 `github.com` 的用户名和有权读取 `coscene-io/matrix` 的 token，并执行 `chmod 600 ~/.netrc`。

在 `camera.py` 所在目录下载固定版本的模型配置和权重。Docker 会将两者复制进镜像，worker 可离线推理。

```bash
mkdir -p model
base=https://raw.githubusercontent.com/chuanqi305/MobileNet-SSD/bb17b6c3eef36d80be441ae8e5339be66e8e3b7a
curl -fL "$base/deploy.prototxt" -o model/deploy.prototxt
curl -fL "$base/mobilenet_iter_73000.caffemodel" -o model/weights.caffemodel
```

在同一目录创建 `Dockerfile`。BuildKit 仅在安装依赖的步骤挂载 `.netrc`。pip 通过 Git HTTPS 从固定提交安装 Matrix Action SDK。

```dockerfile
# syntax=docker/dockerfile:1
FROM python:3.12.16-slim-bookworm
ENV PYTHONUNBUFFERED=1 PYTHONPATH=/opt/action
WORKDIR /opt/action
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*
RUN --mount=type=secret,id=netrc,target=/root/.netrc,required=true \
    python -m pip install --no-cache-dir "ray[default]==2.51.1" "mcap-ros2-support==0.5.7" \
      "opencv-python-headless==4.11.0.86" "numpy==2.2.6" \
      'matrix-action-sdk @ git+https://github.com/coscene-io/matrix.git@48868eaaa042b2650827621ca2c69676c289416a#subdirectory=ray-runtime' && \
    python -m pip check
COPY model/ ./model/
COPY camera.py ./
RUN ray-runner check-image && python -c "from camera import sample_frames, ObjectDetector"
```

以下示例将镜像推送到火山环境的惠阳组织。使用其他组织时，请同步修改构建命令和 Action YAML 中的镜像地址。

```bash
docker login cr.volc.coscene.cn
image='cr.volc.coscene.cn/coscene-hy/mcap-object-detection:v1'
docker buildx build --platform linux/amd64 --secret id=netrc,src="$HOME/.netrc" \
  --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## 配置并调用动作

在项目的「自动化 → 动作」中创建动作 `camera-detection`，勾选【使用 Ray】，填写刚推送的 worker 镜像地址，并将记录并发度设为 2。添加以下两个步骤，每步选择 1 核 CPU、2 GiB 内存：

1. `sample` 的 Python 入口填写函数 `camera.sample_frames`。
2. `detect` 的 Python 入口填写类名 `camera.ObjectDetector`。`depends: [sample]` 让它等待当前记录抽帧完成。在下方 YAML 的 `python.bindings` 中填写 `manifest_path: sample`，将 `sample` 返回的清单路径传给 Actor 的 `manifest_path` 参数。

对应的 Action YAML 使用上一步推送的镜像。

```yaml
name: camera-detection
ray:
  image: cr.volc.coscene.cn/coscene-hy/mcap-object-detection:v1
  concurrency: 2
jobs:
  - name: sample
    python:
      target: camera.sample_frames
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
  - name: detect
    depends: [sample]
    python:
      target: camera.ObjectDetector
      bindings:
        manifest_path: sample
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
```

并发度 2 表示同时最多处理两条记录。检测步骤有两个独立的 Actor 实例，每个实例各持有一份模型，并串行处理分配给它的记录。帧和检测框按 JobRun 隔离。[显式输入绑定和 Actor 资源开销](../6-action-runtime.md#ray-steps)

## 试跑并核对结果

保存动作后，[选择一条含相机数据的记录并调用](../5-invocation.md)。在 `sample` 日志查看抽帧数，再打开该 JobRun 的输出：`frames/manifest.json` 记录 MCAP 文件名、消息时间和抽样图片，`detections.jsonl` 每帧一行。按图片名对应两份文件，用左上角和宽高核对检测框。

每个检测结果包括类别 `label`、置信度 `score` 和原图像素坐标 `box`（左上角 x、y、宽、高）。选择有已配置物品的画面试跑。没有物品达到 0.5 阈值时，该帧仍输出一行，`objects` 为空数组。如果整条记录都没有目标 topic 的图像，`sample` 会抛出异常，此记录的 `detect` 步骤不会执行。
