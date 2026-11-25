# 创建 Ray 动作

在已启用 Ray 的环境中，可以用同一组 Python 步骤并行处理多条记录。下面以「统计文件数」为例，每条记录独立执行一次，结果打印到对应的步骤日志。

## 构建并推送 worker 镜像

向平台管理员获取目标环境的 Ray head 镜像完整地址（配置项 `actionScheduling.ray.headImage`）。下面用它作为 worker 的基础镜像，复用环境中匹配的 Python、Ray 和 Matrix Action SDK。

1. 新建目录，将以下函数保存为 `steps.py`。

   ```python
   from matrix_action_sdk import current_context


   def count_files() -> int:
       files = current_context().record.files_dir
       count = sum(1 for path in files.rglob("*") if path.is_file())
       print(f"file_count={count}", flush=True)
       return count
   ```

2. 在同一目录创建 `Dockerfile`。基础镜像已将 `/opt/matrix` 加入 Python 模块搜索路径。构建时先检查运行时版本，再验证示例函数能否导入。

   ```dockerfile
   ARG MATRIX_RAY_BASE
   FROM ${MATRIX_RAY_BASE}
   COPY --chmod=0444 steps.py /opt/matrix/steps.py
   RUN ray-runner check-image && python -c "from steps import count_files"
   ```

3. 登录所需的镜像仓库。在该目录执行以下命令，将 `base` 替换为管理员提供的镜像地址，将 `image` 替换为你可以推送、项目可以拉取的完整镜像地址。示例面向 Linux AMD64 worker。

   ```bash
   base='registry.example.com/platform/matrix-ray-head:VERSION'
   image='registry.example.com/my-team/count-files:v1'
   docker buildx build --platform linux/amd64 \
     --build-arg MATRIX_RAY_BASE="$base" \
     --tag "$image" --push .
   ```

## 配置并调用动作

1. 在项目的「自动化 → 动作」页面点击【创建动作】，填写动作名称 `count-files`，勾选【使用 Ray】。
2. 在 worker 镜像字段填写上一步推送的完整 `image` 地址，将【记录并发度】设为 `2`，表示同一时间最多有两条记录处于流水线中。这个动作的所有 Python 步骤共用该镜像。
3. 将步骤命名为 `count`，在【Python 入口】填写 `steps.count_files`，选择 1 核 CPU 和 2 GiB 内存。这组资源用于该步骤的一次执行。
4. 保存动作，然后[选择记录并调用动作](../5-invocation.md)。在每条记录对应的 `count` 步骤日志中查看 `file_count=...`。函数通过只读输入目录统计当前记录的文件。
