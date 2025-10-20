# RawImage

Raw image data

## Panel Support

`RawImage` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Data Structure

| Field     | Type                                  | Description                                                                                                                                                                                          |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp | [`time`](./built-in%20types#time)     | Image timestamp                                                                                                                                                                                      |
| frame_id  | [`string`](./built-in%20types#string) | Image reference coordinate system. The origin of the coordinate system is the optical center of the camera. +x points to the right of the image, +y points down, and +z points into the image plane. |
| width     | [`uint32`](./built-in%20types#uint32) | Image width                                                                                                                                                                                          |
| height    | [`uint32`](./built-in%20types#uint32) | Image height                                                                                                                                                                                         |
| encoding  | [`string`](./built-in%20types#string) | Original image data encoding format                                                                                                                                                                  |
| step      | [`uint32`](./built-in%20types#uint32) | Length of a single line in bytes                                                                                                                                                                     |
| data      | [`bytes`](./built-in%20types#bytes)   | Original image data                                                                                                                                                                                  |

### `encoding`

Supported formats: `8UC1`, `8UC3`, `16UC1` (Little Endian), `32FC1` (Little Endian), `bayer_bggr8`, `bayer_gbrg8`, `bayer_grbg8`, `bayer_rggb8`, `bgr8`, `bgra8`, `mono8`, `mono16`, `rgb8`, `rgba8`, `uyvy` or `yuv422`, `yuyv` or `yuv422_yuy2`

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding method:

| Encoding Method | Data Structure                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [foxglove_msgs/RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/RawImage.msg)        |
| ROS 2           | [foxglove_msgs/msg/RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/RawImage.msg)    |
| JSON            | [foxglove.RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/RawImage.json)      |
| Protobuf        | [foxglove.RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/RawImage.proto) |
| FlatBuffers     | [foxglove.RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/RawImage.fbs)       |
| OMG IDL         | [foxglove::RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/RawImage.idl) |

You must use the data structure names specified above so that the visualization can recognize the data structure.
