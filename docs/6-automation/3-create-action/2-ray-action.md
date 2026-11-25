# 创建 Ray 动作

在已启用 Ray 的环境中，可以用同一组 Python 步骤并行处理多条记录。下面以「统计文件数」为例，每条记录独立执行一次，结果打印到对应的步骤日志。

1. 以当前环境提供的 Ray worker 基础镜像构建业务镜像。基础镜像已包含兼容的 Python、Ray 和 Matrix Action SDK。将以下函数保存为 `steps.py`，确保能在镜像内执行 `from steps import count_files`，然后将镜像推送到项目可访问的镜像仓库。

   ```python
   from matrix_action_sdk import current_context


   def count_files() -> int:
       files = current_context().record.files_dir
       count = sum(1 for path in files.rglob("*") if path.is_file())
       print(f"file_count={count}", flush=True)
       return count
   ```

2. 在项目的「自动化 → 动作」页面点击【创建动作】，填写动作名称 `count-files`，勾选【使用 Ray】。
3. 填写 worker 镜像地址，将【记录并发度】设为 `2`，表示同一时间最多有两条记录处于流水线中。这个动作的所有 Python 步骤共用该镜像。
4. 将步骤命名为 `count`，在【Python 入口】填写 `steps.count_files`，选择 1 核 CPU 和 2 GiB 内存。这组资源用于该步骤的一次执行。
5. 保存动作，然后[选择记录并调用动作](../5-invocation.md)。在每条记录对应的 `count` 步骤日志中查看 `file_count=...`。函数通过只读输入目录统计当前记录的文件。
