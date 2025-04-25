---
sidebar_position: 5
title: CircleAnnotation
---

# 圆形标注

在二维图像上的圆形标注。

## 父级架构

`CircleAnnotation` 出现在 [`ImageAnnotations`](/image-annotations) 消息模式中。

## 字段定义

| 字段名 | 类型 | 描述 |
|:------|:-----|:-----|
| `timestamp` | [`time`](./built-in%20types#time) | 圆形的时间戳 |
| `position` | [`Point 2`](./point-2) | 圆心在图像中的二维像素坐标位置 |
| `diameter` | [`float64`](./built-in%20types#float64) | 圆的直径（单位：像素） |
| `thickness` | [`float64`](./built-in%20types#float64) | 线条粗细（单位：像素） |
| `fill_color` | [`color`](./color) | 填充颜色 |
| `outline_color` | [`color`](./color) | 边框颜色 |

### `position`

该坐标系以图像左上角像素的左上角为原点。

## 参考

coScene 的架构类型（schemas）是与框架无关的，可以使用任何受支持的消息编码格式来实现。

| 编码格式     | Schema 名称                     |
|--------------|----------------------------------|
| ROS 1        | [`foxglove_msgs/CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CircleAnnotation.msg) |
| ROS 2        | [`foxglove_msgs/msg/CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CircleAnnotation.msg) |
| JSON         | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CircleAnnotation.json)      |
| Protobuf     | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CircleAnnotation.proto)      |
| FlatBuffers  | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CircleAnnotation.fbs)      |
| OMG IDL      | [`foxglove::CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CircleAnnotation.idl)     |

> **注意**：必须使用上述指定的 schema 名称，coScene 才能正确识别。
