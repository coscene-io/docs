# CompressedVideo

A single frame of a compressed video bitstream

## Panel Support

`CompressedVideo` is used in the [3D Panel](../panel/2-3d-panel) and [Image Panel](../panel/image-panel).

## Data Structure

| Field       | Type                                  | Description                              |
| ----------- | ------------------------------------- | ---------------------------------------- |
| `timestamp` | [`time`](./built-in%20types#time)     | Timestamp of the video frame             |
| `frame_id`  | [`string`](./built-in%20types#string) | Reference coordinate system of the video |
| `data`      | [`bytes`](./built-in%20types#bytes)   | Compressed video frame data              |
| `format`    | [`string`](./built-in%20types#string) | Video format                             |

### `frame_id`

The origin of the frame is the optical center of the camera. +x points to the right side of the video, +y points downward, and +z points into the video plane.

### `data`

For packet-based video codecs, this data must begin and end on packet boundaries (no partial packets), and must contain enough video packets to decode exactly one image (key frame or incremental frame). Note: Foxglove does not support video streams that contain B-frames because they require lookahead.

Specifically, the requirements for different `format` values are as follows:

- `h264`
  - Data using Annex B format
  - Each CompressedVideo message should contain enough NAL units to decode exactly one video frame
  - Each message containing a key frame (IDR) must also include the SPS NAL unit

### `format`

Supported values: `h264`.

Note: Compressed video support is affected by hardware limitations and patent licensing, so not all platforms support all encodings.

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CompressedVideo.msg)        |
| ROS 2       | [foxglove_msgs/msg/CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CompressedVideo.msg)    |
| JSON        | [foxglove.CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CompressedVideo.json)      |
| Protobuf    | [foxglove.CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CompressedVideo.proto) |
| FlatBuffers | [foxglove.CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CompressedVideo.fbs)       |
| OMG IDL     | [foxglove::CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CompressedVideo.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
