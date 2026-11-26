# Create a Ray Action

This action samples camera frames from each record’s MCAP files and detects pedestrians on CPU. A Ray Task handles decoding and sampling for each record. A Ray Actor loads OpenCV’s pretrained HOG pedestrian detector and reuses it across records.

## Write the sampling Task

Prepare a ROS 2 MCAP with JPEG or PNG images on `/camera/image/compressed`, encoded as CDR messages of type `sensor_msgs/msg/CompressedImage`. Change `TOPIC` if your camera uses another topic. In an empty directory, create `camera.py` with the following synchronous function.

The function takes frames 1, 31, 61, 91, and 121 from each MCAP when available. It reads the record’s read-only input, writes frames and a manifest to the shared JobRun output directory, and passes the manifest path downstream.

```python
import json
from pathlib import Path

import cv2
import numpy as np
from mcap.reader import make_reader
from mcap_ros2.decoder import DecoderFactory
from matrix_action_sdk import current_context

TOPIC = "/camera/image/compressed"


def sample_frames() -> str:
    ctx = current_context()
    root = ctx.record.files_dir
    folder = ctx.outputs_dir / "frames"
    folder.mkdir(exist_ok=True)
    frames = []
    for path in sorted(root.rglob("*.mcap")):
        with path.open("rb") as stream:
            reader = make_reader(stream, decoder_factories=[DecoderFactory()])
            messages = reader.iter_decoded_messages(topics=[TOPIC])
            for index, (schema, _, message, image) in enumerate(messages):
                if schema.name != "sensor_msgs/msg/CompressedImage":
                    raise ValueError(f"Unexpected schema on {TOPIC}: {schema.name}")
                if index % 30:
                    continue
                pixels = cv2.imdecode(np.frombuffer(bytes(image.data), np.uint8), cv2.IMREAD_COLOR)
                if pixels is None:
                    raise ValueError(f"Invalid compressed image in {path.name}")
                filename = f"{len(frames):06}.jpg"
                if not cv2.imwrite(str(folder / filename), pixels):
                    raise OSError(f"Could not write {filename}")
                frames.append({"mcap": path.relative_to(root).as_posix(),
                               "log_time_ns": message.log_time, "image": filename})
                if index == 120:
                    break
    if not frames:
        raise ValueError(f"No frames found on {TOPIC}")
    manifest = folder / "manifest.json"
    manifest.write_text(json.dumps(frames), encoding="utf-8")
    print(f"sampled_frames={len(frames)}", flush=True)
    return str(manifest)
```

## Write the detection Actor

Append this class to the same `camera.py`. Each Actor instance initializes its pretrained detector once in `setup()`. Each call to `run()` processes frames from a single record. The detector looks for upright pedestrians and returns boxes in original image pixels as `[x, y, width, height]`. OpenCV includes the model, so inference can run offline.

```python
class PersonDetector:
    def setup(self):
        self.model = cv2.HOGDescriptor()
        self.model.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

    def run(self, sample: str) -> int:
        manifest = Path(sample)
        frames = json.loads(manifest.read_text(encoding="utf-8"))
        total = 0
        output = current_context().outputs_dir / "detections.jsonl"
        with output.open("w", encoding="utf-8") as stream:
            for frame in frames:
                image = cv2.imread(str(manifest.parent / frame["image"]))
                if image is None:
                    raise ValueError(f"Cannot read {frame['image']}")
                boxes = []
                if image.shape[0] >= 128 and image.shape[1] >= 64:
                    rects, _ = self.model.detectMultiScale(image, winStride=(8, 8))
                    boxes = [list(map(int, rect)) for rect in rects]
                stream.write(json.dumps({**frame, "person_boxes": boxes}) + "\n")
                total += len(boxes)
        print(f"frames={len(frames)} person_boxes={total}", flush=True)
        return total
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
    python -m pip install --no-cache-dir "ray[default]==2.51.1" "mcap-ros2-support==0.5.7" \
      "opencv-python-headless==4.11.0.86" "numpy==2.2.6" \
      'matrix-action-sdk @ git+https://github.com/coscene-io/matrix.git@48868eaaa042b2650827621ca2c69676c289416a#subdirectory=ray-runtime' && \
    python -m pip check
COPY camera.py ./
RUN ray-runner check-image && python -c "from camera import sample_frames, PersonDetector"
```

Set `image` to a registry path you can push to and the project can pull from. Sign in to that registry, then build, check, and push the image.

```bash
image='registry.example.com/my-team/mcap-person-detection:v1'
docker buildx build --platform linux/amd64 --secret id=netrc,src="$HOME/.netrc" \
  --load -t "$image" .
docker run --rm --platform linux/amd64 "$image" ray-runner check-image
docker push "$image"
```

## Configure and invoke the action

Under **Automation → Actions**, create an action named `camera-detection`, select **Use Ray**, enter the worker image reference you pushed, and set concurrent records to 2. Create two steps with 1 CPU and 2 GiB of memory each:

1. For `sample`, enter the function `camera.sample_frames` as the Python target.
2. For `detect`, select `sample` as its dependency and enter the class `camera.PersonDetector` as its target. Matrix recognizes functions as Tasks and classes as Actors. The SDK passes the returned manifest path to the matching argument in `run(self, sample: str)`.

Replace the image reference in the equivalent Action YAML below.

```yaml
name: camera-detection
ray:
  image: registry.example.com/my-team/mcap-person-detection:v1
  concurrency: 2
jobs:
  - name: sample
    python:
      target: camera.sample_frames
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
  - name: detect
    depends: [sample]
    python:
      target: camera.PersonDetector
      resources:
        cpu: CPU_QUOTA_1C
        memory: MEMORY_QUOTA_2G
```

With concurrency set to 2, up to two records can be in the pipeline. The detection step has two independent Actor instances, each holding one model and processing its assigned records sequentially. Frames and detection results belong to the individual JobRun. [Explicit bindings and Actor resource usage](../6-action-runtime.md#ray-steps)

## Verify a trial run

Save the action and [invoke it on a record with camera data](../5-invocation.md). Check the sampled frame count in the `sample` log. In the JobRun outputs, `frames/manifest.json` lists the MCAP file, timestamp, and sampled image name. Each line of `detections.jsonl` corresponds to one frame. Match the image names and check the boxes using their top-left coordinates, widths, and heights.

Frames with no detected pedestrians still appear in the results with an empty `person_boxes` array. Frames smaller than the detection window (64 pixels wide by 128 pixels high) also produce an empty array. If the record has no frames on the target topic, `sample` raises an exception and `detect` does not run for that record.
