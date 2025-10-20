---
sidebar_position: 5
title: CircleAnnotation
---

# Circle Annotation

A circular annotation on a 2D image.

## Parent Schema

`CircleAnnotation` appears in the [`ImageAnnotations`](../message-schemas/image-annotations) message schema.

## Field Definitions

| Field Name      | Type                                    | Description                                                        |
| :-------------- | :-------------------------------------- | :----------------------------------------------------------------- |
| `timestamp`     | [`time`](./built-in%20types#time)       | Timestamp of the circle                                            |
| `position`      | [`Point2`](./point-2)                   | Position of the circle center in 2D pixel coordinates in the image |
| `diameter`      | [`float64`](./built-in%20types#float64) | Diameter of the circle (in pixels)                                 |
| `thickness`     | [`float64`](./built-in%20types#float64) | Thickness of the line (in pixels)                                  |
| `fill_color`    | [`Color`](./color)                      | Fill color                                                         |
| `outline_color` | [`Color`](./color)                      | Outline color                                                      |

### `position`

The coordinate system has its origin at the top-left corner of the top-left pixel of the image.

## References

coScene's schema types are framework-independent and can be implemented using any supported message encoding format.

| Encoding Format | Schema Name                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [`foxglove_msgs/CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CircleAnnotation.msg)        |
| ROS 2           | [`foxglove_msgs/msg/CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CircleAnnotation.msg)    |
| JSON            | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CircleAnnotation.json)      |
| Protobuf        | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CircleAnnotation.proto) |
| FlatBuffers     | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CircleAnnotation.fbs)       |
| OMG IDL         | [`foxglove::CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CircleAnnotation.idl) |

> **Note**: You must use the schema names specified above for coScene to recognize them correctly.
