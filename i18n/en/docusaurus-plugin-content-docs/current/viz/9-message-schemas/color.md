---
sidebar_position: 6
title: Color
---

# Color

Color in RGBA format.

## Panel Support

`Color` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Parent Schema

`Color` appears in the [`ArrowPrimitive`](./arrow-primitive), [`CircleAnnotation`](./circle-annotation), [`CubePrimitive`](./cube-primitive), [`CylinderPrimitive`](./cylinder-primitive), [`LinePrimitive`](./line-primitive), [`ModelPrimitive`](./model-primitive), [`PointsAnnotation`](./points-annotation), [`SpherePrimitive`](./sphere-primitive), [`TextAnnotation`](./text-annotation), [`TextPrimitive`](./text-primitive), [`TriangleListPrimitive`](./triangle-list-primitive) message schemas.

## Field Definitions

| Field Name | Type                                    | Description                                 |
| ---------- | --------------------------------------- | ------------------------------------------- |
| `r`        | [`float64`](./built-in%20types#float64) | Red, value between 0 and 1                  |
| `g`        | [`float64`](./built-in%20types#float64) | Green, value between 0 and 1                |
| `b`        | [`float64`](./built-in%20types#float64) | Blue, value between 0 and 1                 |
| `a`        | [`float64`](./built-in%20types#float64) | Alpha (transparency), value between 0 and 1 |

## References

coScene's schema types are framework-independent and can be implemented using any supported message encoding format.

| Encoding Format | Schema Name                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| ROS 1           | [`foxglove_msgs/Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Color.msg)        |
| ROS 2           | [`foxglove_msgs/msg/Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Color.msg)    |
| JSON            | [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Color.json)      |
| Protobuf        | [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Color.proto) |
| FlatBuffers     | [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Color.fbs)       |
| OMG IDL         | [`foxglove::Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Color.idl) |

> **Note**: You must use the schema names specified above for coScene to recognize them correctly.
