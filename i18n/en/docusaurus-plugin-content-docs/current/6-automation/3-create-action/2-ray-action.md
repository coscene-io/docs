# Create a Ray Action

This action computes the SHA-256 digest of each file in a record. Each record runs independently. The step logs one JSON line per file with its relative path, size in bytes, and digest.

## Build and push the worker image

This example targets a Matrix head running CPython 3.12.16 and Ray 2.51.1. Confirm the versions in your environment before building. In an empty directory, use Python 3.12 and a GitHub SSH identity with read access to `coscene-io/matrix` to build the SDK wheel from the pinned commit on `main`.

```bash
python3.12 -m pip wheel --no-deps --wheel-dir wheels \
  'matrix-action-sdk @ git+ssh://git@github.com/coscene-io/matrix.git@48868eaaa042b2650827621ca2c69676c289416a#subdirectory=ray-runtime'
```

Save the following step in `checksums.py` in the same directory.

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

Save this `Dockerfile` alongside `checksums.py`. It installs the wheel and Ray into the worker image. Git authentication takes place on the build host.

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

Set `image` to a registry path you can push to and the project can pull from. Sign in to that registry, then build, check, and push the image.

```bash
image='registry.example.com/my-team/ray-sha256:v1'
docker buildx build --platform linux/amd64 --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## Configure and invoke the action

1. In your project, open **Automation → Actions**, click **Create Action**, name the action `record-checksums`, and select **Use Ray**.
2. Enter the full image reference you pushed in the worker image field (`ray.image`). Set **Concurrent records** to `2` to process up to two records at once. All Python steps use this image.
3. Name the step `checksum`, enter `checksums.sha256_files` as its **Python target** (`jobs[].python.target`), and select 1 CPU and 2 GiB of memory.
4. Save the action, then [select records and invoke it](../5-invocation.md). In each record’s `checksum` step log, check the `file`, `bytes`, and `sha256` fields. The final line reports the total file count and bytes for that record.

To run your own function, replace `checksums.py` with your module, update the Dockerfile’s `COPY` and import check, and install any additional business dependencies. Rebuild and push the image, then update the action’s image reference and Python target.
