# SpherePrimitive

表示球体或椭球体的图元

## 父级数据结构

`SpherePrimitive` 出现在 [SceneEntity](/) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| pose | [Pose](/) | 球体中心的位置和球体的方向 |
| size | [Vector3](/) | 球体沿每个轴的尺寸（直径） |
| color | [Color](/) | 球体的颜色 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SpherePrimitive.msg) |
| ROS 2 | [foxglove_msgs/msg/SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SpherePrimitive.msg) |
| JSON | [foxglove.SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SpherePrimitive.json) |
| Protobuf | [foxglove.SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SpherePrimitive.proto) |
| FlatBuffers | [foxglove.SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SpherePrimitive.fbs) |
| OMG IDL | [foxglove::SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SpherePrimitive.idl) |

你必须使用上述指定的数据结构名称，这样可视化才能识别该数据结构。
