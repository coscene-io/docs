---
sidebar_position: 3
title: ArrowPrimitive
---

# Primitive Representing an Arrow

`ArrowPrimitive` is a primitive that represents an arrow.

## Parent Schema

`ArrowPrimitive` appears in the [`SceneEntity`](./scene-entity) message schema.

## Schema Definition

| Field            | Type                                    | Description                                                                                                           |
| ---------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pose`           | [`Pose`](./pose)                        | Position of the arrow tail and orientation of the arrow. Unit orientation means the arrow points in the +x direction. |
| `shaft_length`   | [`float64`](./built-in%20types#float64) | Length of the arrow shaft                                                                                             |
| `shaft_diameter` | [`float64`](./built-in%20types#float64) | Diameter of the arrow shaft                                                                                           |
| `head_length`    | [`float64`](./built-in%20types#float64) | Length of the arrow head                                                                                              |
| `head_diameter`  | [`float64`](./built-in%20types#float64) | Diameter of the arrow head                                                                                            |
| `color`          | [`Color`](./color)                      | Color of the arrow                                                                                                    |

## References

coScene's schema types are framework-independent and can be implemented using any supported message encoding format.
| Encoding Format | Schema Name |
|------|--------------------------------|
| ROS 1 | [`foxglove_msgs/ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ArrowPrimitive.msg) |
| ROS 2 | [`foxglove_msgs/msg/ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ArrowPrimitive.msg)|
| JSON | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ArrowPrimitive.json) |
| Protobuf | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ArrowPrimitive.proto) |
| FlatBuffers | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ArrowPrimitive.fbs) |
|OMG IDL | [`foxglove::ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ArrowPrimitive.idl) |

> **Note**: You must use the schema names specified above for coScene to recognize them correctly.
