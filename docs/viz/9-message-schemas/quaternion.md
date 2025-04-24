# Quaternion

表示三维空间中旋转的四元数(Quaternion)

## 父级数据结构

`Quaternion` 出现在 [FrameTransform](/) 和 [Pose](/) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| x | [float64](/) | x 值 |
| y | [float64](/) | y 值 |
| z | [float64](/) | z 值 |
| w | [float64](/) | w 值 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式 | 数据结构 |
| --- | --- |
| ROS 1 | [geometry_msgs/Quaternion](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Quaternion.html) |
| ROS 2 | [geometry_msgs/msg/Quaternion](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Quaternion.html) |
| JSON | [foxglove.Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Quaternion.json) |
| Protobuf | [foxglove.Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Quaternion.proto) |
| FlatBuffers | [foxglove.Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Quaternion.fbs) |
| OMG IDL | [foxglove::Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Quaternion.idl) |

您必须使用上述指定的数据结构名称，以便可视化能够识别该数据结构。
