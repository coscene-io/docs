# 创建 Ray 动作

下面以计算文件 SHA-256 为例。动作按记录并行处理，每个文件在步骤日志中输出一行 JSON，包含相对路径、字节数和 SHA-256 摘要。

## 编写 Ray Task 和 Ray Actor

动作根据每个步骤的 Python 入口自动选择执行方式，平台负责提交和调度。直接编写带类型注解的同步函数或类即可，无需添加 `@ray.remote`。

**Ray Task** 适合每条记录独立执行的计算。在空目录中创建 `checksums.py`，定义以下顶层函数。每次调用读取当前记录，打印文件摘要，并将文件数返回给下游步骤。

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

**Ray Actor** 适合跨记录复用模型、规则或连接。在同一个 `checksums.py` 中追加以下顶层类，并在旁边创建 `rules.json`，内容为 `{"minimum_files": 1}`。每个实例在 `setup()` 中加载一次规则，随后串行调用 `run()` 检查分配给它的记录。类须支持无参构造，必须实现 `run()`；可选的 `setup()` 和 `close()` 分别用于初始化和释放资源。

```python
from pathlib import Path


class FileCountCheck:
    def setup(self):
        with Path(__file__).with_name("rules.json").open() as stream:
            self.minimum = json.load(stream)["minimum_files"]

    def run(self, checksum: int) -> bool:
        passed = checksum >= self.minimum
        print(json.dumps({"files": checksum, "passed": passed}), flush=True)
        return passed
```

## 构建并推送 worker 镜像

本例适用于 CPython 3.12.16、Ray 2.51.1 的 Matrix head。在构建机的 `~/.netrc` 中配置 `github.com` 的用户名和有权读取 `coscene-io/matrix` 的 token，并执行 `chmod 600 ~/.netrc`。

在同一目录创建 `Dockerfile`。BuildKit 仅在安装依赖的步骤挂载 `.netrc`。pip 通过 Git HTTPS 从固定提交安装 Matrix Action SDK。

```dockerfile
# syntax=docker/dockerfile:1
FROM python:3.12.16-slim-bookworm
ENV PYTHONUNBUFFERED=1 PYTHONPATH=/opt/action
WORKDIR /opt/action
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*
RUN --mount=type=secret,id=netrc,target=/root/.netrc,required=true \
    python -m pip install --no-cache-dir "ray[default]==2.51.1" \
      'matrix-action-sdk @ git+https://github.com/coscene-io/matrix.git@48868eaaa042b2650827621ca2c69676c289416a#subdirectory=ray-runtime' && \
    python -m pip check
COPY checksums.py rules.json ./
RUN ray-runner check-image && python -c "from checksums import sha256_files, FileCountCheck"
```

将 `image` 替换为你能推送、项目能拉取的镜像地址，登录该仓库后执行以下命令。

```bash
image='registry.example.com/my-team/ray-sha256:v1'
docker buildx build --platform linux/amd64 --secret id=netrc,src="$HOME/.netrc" \
  --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## 配置并调用动作

1. 在项目的「自动化 → 动作」页面点击【创建动作】，填写动作名称 `record-checksums`，勾选【使用 Ray】。
2. 在 worker 镜像字段（`ray.image`）填写刚推送的完整镜像地址，将【记录并发度】设为 `2`，表示同时最多处理两条记录。动作中的所有 Python 步骤共用该镜像。
3. 将步骤命名为 `checksum`，在【Python 入口】（`jobs[].python.target`）填写 `checksums.sha256_files`，选择 1 核 CPU 和 2 GiB 内存。
4. 添加步骤 `check`，将依赖设为 `checksum`，【Python 入口】填写类名 `checksums.FileCountCheck`，资源同上。
5. 保存动作，然后[选择记录并调用动作](../5-invocation.md)。在每条记录的 `checksum` 步骤日志中查看每个文件的 `file`、`bytes` 和 `sha256` 字段。最后一行汇总当前记录的文件数和总字节数。

对应的 Action YAML 如下。将 `ray.image` 替换为刚推送的镜像地址。

```yaml
name: record-checksums
ray:
  image: registry.example.com/my-team/ray-sha256:v1
  concurrency: 2
jobs:
  - name: checksum
    python:
      target: checksums.sha256_files
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
  - name: check
    depends: [checksum]
    python:
      target: checksums.FileCountCheck
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
```

对每条记录，`depends: [checksum]` 让 `check` 等待该记录的 Task 完成。SDK 将 Task 返回的文件数传给同名参数 `run(self, checksum: int)`。例如，含两个文件的记录会在 `check` 的日志中输出 `{"files": 2, "passed": true}`。

`ray.concurrency: 2` 表示整个动作同时最多处理两条记录。Matrix 为这个 Actor 步骤创建两个独立实例，每个实例分别加载规则，并可在本次运行中继续处理后续记录。把可复用的资源放在实例属性里，把单条记录的数据保存在 `run()` 的局部变量里。
