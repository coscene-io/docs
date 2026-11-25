# Create a Ray Action

In an environment with Ray enabled, you can run the same Python pipeline on multiple records. This example counts the files in each record and prints the count in the step log.

1. Build your image from the Ray worker base image provided for your environment. It includes compatible versions of Python, Ray, and the Matrix Action SDK. Put the following function in a module named `steps.py` and make sure the module is importable inside the image. Push the image to a registry accessible to your project.

   ```python
   from matrix_action_sdk import current_context


   def count_files() -> int:
       files = current_context().record.files_dir
       count = sum(1 for path in files.rglob("*") if path.is_file())
       print(f"file_count={count}", flush=True)
       return count
   ```

2. In your project, open **Automation → Actions**, click **Create Action**, enter `count-files` as the action name, and select **Use Ray**.
3. Enter the worker image address and set **Concurrent records** to `2`. Up to two records can be in the pipeline at the same time. All Python steps use this image.
4. Name the step `count`, enter `steps.count_files` as its **Python target**, and select 1 CPU and 2 GiB of memory. These resources apply to one execution of the step.
5. Save the action, then [select records and invoke the action](../5-invocation.md). Open the `count` step log for each record and look for `file_count=...`. The function reads the current record through its read-only input directory.
