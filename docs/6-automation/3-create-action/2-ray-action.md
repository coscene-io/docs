# 创建 Ray 动作

下面以计算文件 SHA-256 为例。动作按记录并行处理，每个文件在步骤日志中输出一行 JSON，包含相对路径、字节数和 SHA-256 摘要。

## 构建并推送 worker 镜像

准备与目标环境匹配的 Matrix 运行时源码。使用 `ray-runtime/examples/sha256/` 下以 `FROM python:3.11.14-slim-bookworm` 开头的独立构建示例。如果没有这版源码，可向平台管理员获取。

示例 Dockerfile 从官方 Python 镜像开始，按 `requirements.lock` 安装 Ray 及其依赖，从源码安装 Matrix Action SDK，再把业务模块复制到 `/opt/action`。最后以 worker 用户身份检查运行时并导入 Python 入口。

```dockerfile
FROM python:3.11.14-slim-bookworm
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 PYTHONPATH=/opt/action
WORKDIR /opt/sdk
COPY requirements.lock .
RUN python -m pip install --only-binary=:all: --require-hashes --no-cache-dir -r requirements.lock
COPY pyproject.toml .
COPY matrix_action_sdk ./matrix_action_sdk
RUN python -m pip install --no-index --no-build-isolation --no-cache-dir . && python -m pip check

WORKDIR /opt/action
COPY examples/sha256/checksums.py .
RUN useradd --create-home --uid 10001 matrix
USER 10001
RUN ray-runner check-image && python -c "from checksums import sha256_files"
```

在 Matrix 仓库根目录执行以下命令。将 `image` 替换为你能推送、项目能拉取的完整镜像地址，并先登录该仓库。构建上下文使用整个 `ray-runtime` 目录，以便 Docker 同时读取依赖锁文件、SDK 源码和示例代码。

```bash
image='registry.example.com/my-team/ray-sha256:v1'
docker buildx build --platform linux/amd64 --load \
  -f ray-runtime/examples/sha256/Dockerfile -t "$image" ray-runtime
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## 配置并调用动作

1. 在项目的「自动化 → 动作」页面点击【创建动作】，填写动作名称 `record-checksums`，勾选【使用 Ray】。
2. 在 worker 镜像字段（`ray.image`）填写刚推送的完整镜像地址，将【记录并发度】设为 `2`，表示同时最多处理两条记录。动作中的所有 Python 步骤共用该镜像。
3. 将步骤命名为 `checksum`，在【Python 入口】（`jobs[].python.target`）填写 `checksums.sha256_files`，选择 1 核 CPU 和 2 GiB 内存。
4. 保存动作，然后[选择记录并调用动作](../5-invocation.md)。在每条记录的 `checksum` 步骤日志中查看每个文件的 `file`、`bytes` 和 `sha256` 字段。最后一行汇总当前记录的文件数和总字节数。

使用自己的函数时，将 `checksums.py` 换成业务模块，同步修改 Dockerfile 中的 `COPY` 路径和导入检查，按需安装业务依赖。重新构建并推送镜像后，在动作中更新镜像地址和 Python 入口。
