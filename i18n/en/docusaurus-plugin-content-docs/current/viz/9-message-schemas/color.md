---
sidebar_position: 6
title: Color
---

# 颜色

RGBA 格式的颜色。

## 面板支持
`Color` 用于 [三维面板](../panel/2-3d-panel) 和 [图像面板](../panel/image-panel) 中。

## 父级架构

`Color` 出现在 [`ArrowPrimitive`](./arrow-primitive)、 [`CircleAnnotation`](./circle-annotation)、 [`CubePrimitive`](./cube-primitive)、 [`CylinderPrimitive`](./cylinder-primitive)、 [`LinePrimitive`](./line-primitive)、 [`ModelPrimitive`](./model-primitive)、 [`PointsAnnotation`](./points-annotation)、 [`SpherePrimitive`](./sphere-primitive)、 [`TextAnnotation`](./text-annotation)、 [`TextPrimitive`](./text-primitive)、 [`TriangleListPrimitive`](./triangle-list-primitive) 消息模式中。

## 字段定义

| 字段名 | 类型 | 描述 |
|--------|------|------|
| `r` | [`float64`](./built-in%20types#float64) | 红色，数值介于 0 和 1 之间 |
| `g` | [`float64`](./built-in%20types#float64) | 绿色，数值介于 0 和 1 之间 |
| `b` | [`float64`](./built-in%20types#float64) | 蓝色，数值介于 0 和 1 之间 |
| `a` | [`float64`](./built-in%20types#float64) | 透明度，数值介于 0 和 1 之间 |

## 参考

coScene 的架构类型（schemas）是与框架无关的，可以使用任何受支持的消息编码格式来实现。

| 编码格式     | Schema 名称                     |
|--------------|----------------------------------|
| ROS 1        |  [`foxglove_msgs/Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Color.msg) |
| ROS 2        |  [`foxglove_msgs/msg/Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Color.msg) |
| JSON         |  [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Color.json) |
| Protobuf     |  [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Color.proto) |
| FlatBuffers  |  [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Color.fbs) |
| OMG IDL      |  [`foxglove::Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Color.idl) |

> **注意**：必须使用上述指定的 schema 名称，coScene 才能正确识别。
