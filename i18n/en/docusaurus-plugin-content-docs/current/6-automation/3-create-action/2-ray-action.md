# Create a Ray Action

This action computes the SHA-256 digest of each file in a record. Each record runs independently. The step logs one JSON line per file with its relative path, size in bytes, and digest.

## Write a Ray Task and a Ray Actor

Matrix selects the execution mode from each step’s Python target and schedules the work. Define synchronous functions or classes with typed step inputs and returns. You can omit `@ray.remote`.

**Ray Task** suits independent work on each record. Create `checksums.py` in an empty directory and add this top-level function. Each call reads one record, logs file digests, and returns the file count to the next step.

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
    summary = json.dumps({"files": count, "bytes": total})
    (current_context().outputs_dir / "summary.json").write_text(summary, encoding="utf-8")
    print(summary, flush=True)
    return count
```

The record input directory, `current_context().record.files_dir`, is read-only. The function returns the file count to the next step, uses `print` for the step log, and writes `summary.json` to `current_context().outputs_dir` as an output file for this record’s JobRun.

**Ray Actor** suits steps that reuse a model, rules, or a connection across records. Append this top-level class to `checksums.py` and create `rules.json` alongside it containing `{"minimum_files": 1}`. Each instance loads the rules once in `setup()`, then processes its assigned records one at a time in `run()`. The class must support construction without arguments and implement `run()`. The optional `setup()` and `close()` methods initialize and release resources.

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

## Build and push the worker image

This example targets a Matrix head running CPython 3.12.16 and Ray 2.51.1. Before building, confirm the target head versions with your platform administrator. Match the worker’s Python interpreter down to the patch version and use the same Ray version. You can version your application code independently.

At build time, `ray-runner check-image` checks the image against the SDK requirements. At startup, Ray checks the worker against the actual head. A mismatch prevents that worker from joining the cluster or executing your Python target. Rebuild and push a compatible image, update the action’s `ray.image`, and invoke it again.

Configure your GitHub username and a token with read access to `coscene-io/matrix` in the build host’s `~/.netrc` entry for `github.com`, then run `chmod 600 ~/.netrc`.

Create a `Dockerfile` in the same directory. BuildKit mounts `.netrc` only for the dependency installation step. pip installs the Matrix Action SDK from a pinned Git commit over HTTPS.

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

Set `image` to a registry path you can push to and the project can pull from. Sign in to that registry, then build, check, and push the image.

```bash
image='registry.example.com/my-team/ray-sha256:v1'
docker buildx build --platform linux/amd64 --secret id=netrc,src="$HOME/.netrc" \
  --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## Configure and invoke the action

1. In your project, open **Automation → Actions**, click **Create Action**, name the action `record-checksums`, and select **Use Ray**.
2. Enter the full image reference you pushed in the worker image field (`ray.image`). Set **Concurrent records** to `2` to process up to two records at once. All Python steps use this image.
3. Name the step `checksum`, enter `checksums.sha256_files` as its **Python target** (`jobs[].python.target`), and select 1 CPU and 2 GiB of memory.
4. Add a step named `check` with `checksum` as its dependency. Set its **Python target** to the class name `checksums.FileCountCheck` and select the same resources.
5. Save the action, then [select records and invoke it](../5-invocation.md). In each record’s `checksum` step log, check the `file`, `bytes`, and `sha256` fields. The final line reports the total file count and bytes for that record.

The equivalent Action YAML is shown below. Replace `ray.image` with the image reference you pushed.

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

For each record, `depends: [checksum]` makes `check` wait for that record’s Task. The SDK passes the returned file count to the matching parameter in `run(self, checksum: int)`. For a record with two files, the `check` log contains `{"files": 2, "passed": true}`.

With `ray.concurrency: 2`, up to two records can be in the pipeline at once. Matrix creates two independent instances for this Actor step. Each loads its own rules and can process further records in the same action run. Store reusable resources on the instance and keep record-specific data in local variables inside `run()`.

See [explicit input bindings and Actor resource usage](../6-action-runtime.md#ray-steps).

## Verify a trial run

With the example rule `minimum_files: 1`, select one record containing files and one empty record. For each JobRun, compare the file count and byte total in the `checksum` log and the output file `summary.json`. The `check` log should show `"passed": true` for the first record and `"passed": false` for the empty record. Both JobRuns should complete successfully because `False` is a valid boolean result.

To fail the current JobRun when the record is empty, add the following inside `run()`, before `return passed`:

```python
if not passed:
    raise ValueError(f"Expected at least {self.minimum} files, got {checksum}")
```
