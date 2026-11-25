# Create a Ray Action

In an environment with Ray enabled, you can run the same Python pipeline on multiple records. This example counts the files in each record and prints the count in the step log.

## Build and push the worker image

Ask your platform administrator for the full Ray head image reference used by your environment (`actionScheduling.ray.headImage`). Use it as the base for your worker image so the Python, Ray, and Matrix Action SDK versions match the cluster.

1. Create a directory and save this function as `steps.py`.

   ```python
   from matrix_action_sdk import current_context


   def count_files() -> int:
       files = current_context().record.files_dir
       count = sum(1 for path in files.rglob("*") if path.is_file())
       print(f"file_count={count}", flush=True)
       return count
   ```

2. Create a `Dockerfile` in the same directory. The base image includes `/opt/matrix` on the Python module search path. The build checks the runtime and verifies that Python can import the function.

   ```dockerfile
   ARG MATRIX_RAY_BASE
   FROM ${MATRIX_RAY_BASE}
   COPY --chmod=0444 steps.py /opt/matrix/steps.py
   RUN ray-runner check-image && python -c "from steps import count_files"
   ```

3. Sign in to the required registries. Run these commands in the same directory, replacing `base` with the image reference from your administrator and `image` with a reference you can push and your project can pull. This example targets Linux AMD64 workers.

   ```bash
   base='registry.example.com/platform/matrix-ray-head:VERSION'
   image='registry.example.com/my-team/count-files:v1'
   docker buildx build --platform linux/amd64 \
     --build-arg MATRIX_RAY_BASE="$base" \
     --tag "$image" --push .
   ```

## Configure and invoke the action

1. In your project, open **Automation → Actions**, click **Create Action**, enter `count-files` as the action name, and select **Use Ray**.
2. Enter the full `image` reference you just pushed and set **Concurrent records** to `2`. Up to two records can be in the pipeline at the same time. All Python steps use this image.
3. Name the step `count`, enter `steps.count_files` as its **Python target**, and select 1 CPU and 2 GiB of memory. These resources apply to one execution of the step.
4. Save the action, then [select records and invoke the action](../5-invocation.md). Open the `count` step log for each record and look for `file_count=...`. The function reads the current record through its read-only input directory.
