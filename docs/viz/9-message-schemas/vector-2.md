# Vector2

表示二维空间中的向量，仅表示方向

## 父级数据结构

`Vector2` 出现在 [`Grid`](./grid) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| x | [`float64`](./built-in%20types#float64) | x 坐标长度 |
| y | [`float64`](./built-in%20types#float64) | y 坐标长度 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Vector2.msg) |
| ROS 2 | [foxglove_msgs/msg/Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Vector2.msg) |
| JSON | [foxglove.Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Vector2.json) |
| Protobuf | [foxglove.Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Vector2.proto) |
| FlatBuffers | [foxglove.Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Vector2.fbs) |
| OMG IDL | [foxglove::Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Vector2.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
