# Create a Ray Action

This action samples camera frames from MCAP files and detects objects such as bottles, chairs, and bicycles on CPU. A Ray Task samples each record. Each Ray Actor loads MobileNet-SSD once and reuses it across its assigned records.

## Write the sampling Task

Prepare a ROS 2 MCAP with JPEG or PNG images on `/camera/image/compressed`, encoded as CDR messages of type `sensor_msgs/msg/CompressedImage`. Change `TOPIC` if your camera uses another topic. In an empty directory, create `camera.py` with the following synchronous function.

The function takes frames 1, 31, 61, 91, and 121 from each MCAP when available. It reads the record’s read-only input, writes frames and a manifest to the shared JobRun output directory, and passes the manifest path downstream.

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

## Write the detection Actor

Append this code to `camera.py`. Each instance loads the pretrained model from the image in `setup()`. Each call to `run()` processes one record. The dictionary maps selected PASCAL VOC class IDs to output labels. Adjust it to keep the classes you need.

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

    def run(self, sample: str) -> int:
        manifest = Path(sample)
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

## Build and push the worker image

This example targets a Matrix head running CPython 3.12.16 and Ray 2.51.1. Before building, confirm the target head versions with your platform administrator. Match the worker’s Python interpreter down to the patch version and use the same Ray version. You can version your application code independently.

At build time, `ray-runner check-image` checks the image against the SDK requirements. At startup, Ray checks the worker against the actual head. A mismatch prevents that worker from joining the cluster or executing your Python target. Rebuild and push a compatible image, update the action’s `ray.image`, and invoke it again.

Configure your GitHub username and a token with read access to `coscene-io/matrix` in the build host’s `~/.netrc` entry for `github.com`, then run `chmod 600 ~/.netrc`.

Download the pinned model configuration and weights alongside `camera.py`. Docker copies both files into the image so the workers can run inference offline.

```bash
mkdir -p model
base=https://raw.githubusercontent.com/chuanqi305/MobileNet-SSD/bb17b6c3eef36d80be441ae8e5339be66e8e3b7a
curl -fL "$base/deploy.prototxt" -o model/deploy.prototxt
curl -fL "$base/mobilenet_iter_73000.caffemodel" -o model/weights.caffemodel
```

Create a `Dockerfile` in the same directory. BuildKit mounts `.netrc` only for the dependency installation step. pip installs the Matrix Action SDK from a pinned Git commit over HTTPS.

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

This example pushes the image to the Huiyang organization in the Volcengine environment. For another organization, update the image reference in both the build command and the Action YAML.

```bash
docker login cr.volc.coscene.cn
image='cr.volc.coscene.cn/coscene-hy/mcap-object-detection:v1'
docker buildx build --platform linux/amd64 --secret id=netrc,src="$HOME/.netrc" \
  --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## Configure and invoke the action

Under **Automation → Actions**, create an action named `camera-detection`, select **Use Ray**, enter the worker image reference you pushed, and set concurrent records to 2. Create two steps with 1 CPU and 2 GiB of memory each:

1. For `sample`, enter the function `camera.sample_frames` as the Python target.
2. For `detect`, select `sample` as its dependency and enter the class `camera.ObjectDetector` as its target. Matrix recognizes functions as Tasks and classes as Actors. The SDK passes the returned manifest path to the matching argument in `run(self, sample: str)`.

The equivalent Action YAML uses the image pushed in the previous step.

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
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
```

With concurrency set to 2, up to two records can be in the pipeline. The detection step has two independent Actor instances, each holding one model and processing its assigned records sequentially. Frames and detection results belong to the individual JobRun. [Explicit bindings and Actor resource usage](../6-action-runtime.md#ray-steps)

## Verify a trial run

Save the action and [invoke it on a record with camera data](../5-invocation.md). Check the sampled frame count in the `sample` log. In the JobRun outputs, `frames/manifest.json` lists the MCAP file, timestamp, and sampled image name. Each line of `detections.jsonl` corresponds to one frame. Match the image names and check the boxes using their top-left coordinates, widths, and heights.

Each detection includes a class label, confidence score, and a box in original image pixels (left, top, width, height). Try a frame containing one of the selected objects. Frames without a selected detection at or above the 0.5 threshold still produce a line with an empty `objects` array. If the record has no frames on the target topic, `sample` raises an exception and `detect` does not run for that record.
