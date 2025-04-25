# PointCloud

点云是一组 N 维点的集合，可能包含额外的字段信息，如法线、强度等。

## 面板支持

`PointCloud` 数据结构在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [`time`](./built-in%20types#time) | 点云的时间戳 |
| frame_id | [`string`](./built-in%20types#string) | 参考坐标系 |
| pose | [`pose`](./pose) | 点云相对于参考坐标系的原点位置 |
| point_stride | [`uint32`](./built-in%20types#uint32) | 数据中相邻点之间的字节数 |
| fields | [`PackedElementField[]`](./packed-element-field) | `data` 中的字段。每个点的位置至少需要 x、y、z 中的 2 个坐标字段；red、green、blue 和 alpha 是可选的，用于自定义每个点的颜色。 |
| data | [`bytes`](./built-in%20types#bytes) | 点数据，使用 fields 进行解释 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PointCloud.msg) |
| ROS 2 | [foxglove_msgs/msg/PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PointCloud.msg) |
| JSON | [foxglove.PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PointCloud.json) |
| Protobuf | [foxglove.PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PointCloud.proto) |
| FlatBuffers | [foxglove.PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PointCloud.fbs) |
| OMG IDL | [foxglove::PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PointCloud.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
