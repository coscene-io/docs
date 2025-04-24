---
title: ImageAnnotations
---

# ImageAnnotations

用于 2D 图像的注释数组

## 面板支持

`ImageAnnotations` 在[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段     | 类型                                                                          | 描述         |
| ------- | ----------------------------------------------------------------------------- | ------------ |
| circles | [CircleAnnotation\[\]](/) | 圆形注释     |
| points  | [PointsAnnotation\[\]](/) | 点注释       |
| texts   | [TextAnnotation\[\]](/)     | 文本注释     |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码        | 数据结构                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ImageAnnotations.msg)       |
| ROS 2       | [foxglove\_msgs/msg/ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ImageAnnotations.msg)   |
| JSON        | [foxglove.ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ImageAnnotations.json)      |
| Protobuf    | [foxglove.ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ImageAnnotations.proto) |
| FlatBuffers | [foxglove.ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ImageAnnotations.fbs)       |
| OMG IDL     | [foxglove::ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ImageAnnotations.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
