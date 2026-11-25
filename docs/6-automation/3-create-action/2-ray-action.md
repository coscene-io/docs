# 创建 Ray 动作

下面以计算文件 SHA-256 为例。动作按记录并行处理，每个文件在步骤日志中输出一行 JSON，包含相对路径、字节数和 SHA-256 摘要。

## 构建并推送 worker 镜像

本例适用于 CPython 3.12.16、Ray 2.51.1 的 Matrix head。先确认目标环境的版本。在空目录中，使用本机的 Python 3.12 和有权读取 `coscene-io/matrix` 的 GitHub SSH 身份，从 `main` 上的固定提交构建 SDK wheel。

```bash
python3.12 -m pip wheel --no-deps --wheel-dir wheels \
  'matrix-action-sdk @ git+ssh://git@github.com/coscene-io/matrix.git@48868eaaa042b2650827621ca2c69676c289416a#subdirectory=ray-runtime'
```

在同一目录中创建 `checksums.py`，定义计算入口。

```python
import hashlib
import json

from matrix_action_sdk import current_context


def sha256_files() -> int:
    root = current_context().record.files_dir
    count = total = 0
    for path in sorted(root.rglob("*")):
        if path.is_symlink() or not path.is_file():
            continue
        with path.open("rb") as stream:
            digest = hashlib.file_digest(stream, "sha256").hexdigest()
            size = path.stat().st_size
        print(json.dumps({"file": path.relative_to(root).as_posix(),
                          "bytes": size, "sha256": digest}), flush=True)
        count += 1
        total += size
    print(json.dumps({"files": count, "bytes": total}), flush=True)
    return count
```

在 `checksums.py` 旁创建以下 `Dockerfile`，安装 SDK wheel 和 Ray。Git 身份验证在宿主机完成。

```dockerfile
FROM python:3.12.16-slim-bookworm
ENV PYTHONUNBUFFERED=1 PYTHONPATH=/opt/action
WORKDIR /opt/action
COPY wheels/matrix_action_sdk-0.1.0-py3-none-any.whl /tmp/
RUN python -m pip install --no-cache-dir "ray[default]==2.51.1" \
    /tmp/matrix_action_sdk-0.1.0-py3-none-any.whl && python -m pip check
COPY checksums.py .
RUN useradd --create-home --uid 10001 matrix
USER 10001
RUN ray-runner check-image && python -c "from checksums import sha256_files"
```

将 `image` 替换为你能推送、项目能拉取的镜像地址，登录该仓库后执行以下命令。

```bash
image='registry.example.com/my-team/ray-sha256:v1'
docker buildx build --platform linux/amd64 --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## 配置并调用动作

1. 在项目的「自动化 → 动作」页面点击【创建动作】，填写动作名称 `record-checksums`，勾选【使用 Ray】。
2. 在 worker 镜像字段（`ray.image`）填写刚推送的完整镜像地址，将【记录并发度】设为 `2`，表示同时最多处理两条记录。动作中的所有 Python 步骤共用该镜像。
3. 将步骤命名为 `checksum`，在【Python 入口】（`jobs[].python.target`）填写 `checksums.sha256_files`，选择 1 核 CPU 和 2 GiB 内存。
4. 保存动作，然后[选择记录并调用动作](../5-invocation.md)。在每条记录的 `checksum` 步骤日志中查看每个文件的 `file`、`bytes` 和 `sha256` 字段。最后一行汇总当前记录的文件数和总字节数。

使用自己的函数时，将 `checksums.py` 换成业务模块，同步修改 Dockerfile 中的 `COPY` 路径和导入检查，按需安装业务依赖。重新构建并推送镜像后，在动作中更新镜像地址和 Python 入口。
