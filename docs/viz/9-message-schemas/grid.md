---
title: Grid
---

# Grid

一个二维数据网格。

## 面板支持

`Grid` 在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [time](/) | 网格的时间戳 |
| frame_id | [string](/) | 参考坐标系 |
| pose | [Pose](/) | 网格原点相对于参考坐标系的位置；网格在 x-y 平面上相对于此原点定位 |
| column_count | [uint32](/) | 网格列数 |
| cell_size | [Vector2](/) | 单个网格单元格沿 x 和 y 轴的大小，相对于 pose |
| row_stride | [uint32](/) | 数据中行之间的字节数 |
| cell_stride | [uint32](/) | 数据中行内单元格之间的字节数 |
| fields | [PackedElementField[]](/) | 数据中的字段。red、green、blue 和 alpha 是可选的，用于自定义网格的颜色 |
| data | [bytes](/) | 网格单元格数据，使用 fields 解释，以行优先（y 优先）顺序排列 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Grid.msg) |
| ROS 2 | [foxglove_msgs/msg/Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Grid.msg) |
| JSON | [foxglove.Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Grid.json) |
| Protobuf | [foxglove.Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Grid.proto) |
| FlatBuffers | [foxglove.Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Grid.fbs) |
| OMG IDL | [foxglove::Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Grid.idl) |

您必须使用上述指定的数据结构名称，以便可视化能够识别该数据结构。
