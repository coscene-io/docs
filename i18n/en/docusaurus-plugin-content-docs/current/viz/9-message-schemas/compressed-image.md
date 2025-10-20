---
sidebar_position: 6
title: CompressedImage
---

# Compressed Image

## Panel Support

`CompressedImage` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Field Definitions

| Field Name  | Type                                  | Description                                                                                                                                                                                                 |
| ----------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in%20types#time)     | Timestamp of the image                                                                                                                                                                                      |
| `frame_id`  | [`string`](./built-in%20types#string) | Reference coordinate system of the image. The origin of the coordinate system is the optical center of the camera. +x points to the right in the image, +y points down, and +z points into the image plane. |
| `data`      | [`byte`](./built-in%20types#bytes)    | Compressed image data                                                                                                                                                                                       |
| `format`    | [`string`](./built-in%20types#string) | Image format                                                                                                                                                                                                |

### `format`

Supported values: Picture media types supported by Chrome, such as `webp`, `jpeg`, `png`

## References

coScene's schema types are framework-independent and can be implemented using any supported message encoding format.

| Encoding Format | Schema Name                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [`foxglove_msgs/CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CompressedImage.msg)        |
| ROS 2           | [`foxglove_msgs/msg/CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CompressedImage.msg)    |
| JSON            | [`foxglove.CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CompressedImage.json)      |
| Protobuf        | [`foxglove.CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CompressedImage.proto) |
| FlatBuffers     | [`foxglove.CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CompressedImage.fbs)       |
| OMG IDL         | [`foxglove::CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CompressedImage.idl) |

> **Note**: You must use the schema names specified above for coScene to recognize them correctly.
