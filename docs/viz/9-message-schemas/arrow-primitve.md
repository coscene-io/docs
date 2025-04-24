---
sidebar_position: 3
title: ArrowPrimitive
---

# 表示箭头的基本图形

`ArrowPrimitive` 是一种表示箭头的基本图形。

## 父架构

`ArrowPrimitive` 出现在 `SceneEntity` 消息架构中。

## 架构

| 字段 | 类型      | 描述                 |
|------|----------|----------------------|
| `pose`  | [`pose`](/)  | 箭头尾部的位置和箭头的方向。单位方向意味着箭头指向 + x 方向。 |
| `shaft_length`  | [`float64`](./built-in%20types#float64)  | 箭杆的长度 |
| `shaft_diameter`  | [`float64`](./built-in%20types#float64)  | 箭杆的直径 |
| `head_length`  | [`float64`](./built-in%20types#float64)  | 箭头的长度 |
| `head_diameter`  | [`float64`](./built-in%20types#float64)  | 箭头的直径 |
| `color`  | [`color`](./6-color.md)  | 箭头的颜色 |

## 参考
coScene 的架构类型（schemas）是与框架无关的，可以使用任何受支持的消息编码格式来实现。
| 编码格式   | Schema 名称                            |
|------|--------------------------------|
| ROS 1  | [`foxglove_msgs/ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ArrowPrimitive.msg) |
| ROS 2  | [`foxglove_msgs/msg/ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ArrowPrimitive.msg)|
| JSON  | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ArrowPrimitive.json) |
| Protobuf  | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ArrowPrimitive.proto) |
| FlatBuffers | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ArrowPrimitive.fbs) |
|OMG IDL  | [`foxglove::ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ArrowPrimitive.idl) |

> **注意**：必须使用上述指定的 schema 名称，coScene 才能正确识别。