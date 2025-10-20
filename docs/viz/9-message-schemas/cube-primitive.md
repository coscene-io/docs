# CubePrimitive

表示立方体或矩形棱柱的图元

## 父数据结构

`CubePrimitive` 出现在 [`SceneEntity`](./scene-entity) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| pose | [`pose`](./pose) | 立方体中心的位置和立方体的方向 |
| size | [`Vector3`](./vector-3) | 立方体沿每个轴的尺寸 |
| color | [`color`](./color) | 立方体的颜色 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CubePrimitive.msg) |
| ROS 2 | [foxglove_msgs/msg/CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CubePrimitive.msg) |
| JSON | [foxglove.CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CubePrimitive.json) |
| Protobuf | [foxglove.CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CubePrimitive.proto) |
| FlatBuffers | [foxglove.CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CubePrimitive.fbs) |
| OMG IDL | [foxglove::CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CubePrimitive.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
