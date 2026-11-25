# Create a Ray Action

This action computes the SHA-256 digest of each file in a record. Each record runs independently. The step logs one JSON line per file with its relative path, size in bytes, and digest.

## Build and push the worker image

Start with the Matrix runtime source for your environment. Use the standalone SHA-256 example under `ray-runtime/examples/sha256/` whose Dockerfile starts with `FROM python:3.11.14-slim-bookworm`. Ask your platform administrator for this version of the runtime source if you need access.

The example Dockerfile installs Ray and its dependencies from `requirements.lock`, installs the Matrix Action SDK from source, and copies the business module into `/opt/action`. The build checks the runtime and imports the target as the worker user.

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

From the Matrix repository root, replace `image` with a registry reference you can push and your project can pull. Sign in to that registry and run the following commands. The build context is the entire `ray-runtime` directory so Docker can copy the lockfile and SDK as well as the example.

```bash
image='registry.example.com/my-team/ray-sha256:v1'
docker buildx build --platform linux/amd64 --load \
  -f ray-runtime/examples/sha256/Dockerfile -t "$image" ray-runtime
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## Configure and invoke the action

1. In your project, open **Automation → Actions**, click **Create Action**, name the action `record-checksums`, and select **Use Ray**.
2. Enter the full image reference you pushed in the worker image field (`ray.image`). Set **Concurrent records** to `2` to process up to two records at once. All Python steps use this image.
3. Name the step `checksum`, enter `checksums.sha256_files` as its **Python target** (`jobs[].python.target`), and select 1 CPU and 2 GiB of memory.
4. Save the action, then [select records and invoke it](../5-invocation.md). In each record’s `checksum` step log, check the `file`, `bytes`, and `sha256` fields. The final line reports the total file count and bytes for that record.

To run your own function, replace `checksums.py` with your module, update the Dockerfile’s `COPY` and import check, and install any additional business dependencies. Rebuild and push the image, then update the action’s image reference and Python target.
