# KeyValuePair

一个键值对，包含一个键及其关联的值。

## 父级数据结构

`KeyValuePair` 出现在 [`SceneEntity`](./scene-entity) 消息数据结构中。

## 数据结构

| 字段  | 类型                                                                 | 描述 |
| ----- | -------------------------------------------------------------------- | ---- |
| key   | [`string`](./built-in%20types#string)  | 键   |
| value | [`string`](./built-in%20types#string)  | 值   |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码        | 数据结构                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/KeyValuePair.msg)     |
| ROS 2       | [foxglove\_msgs/msg/KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/KeyValuePair.msg) |
| JSON        | [foxglove.KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/KeyValuePair.json)    |
| Protobuf    | [foxglove.KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/KeyValuePair.proto) |
| FlatBuffers | [foxglove.KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/KeyValuePair.fbs)     |
| OMG IDL     | [foxglove::KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/KeyValuePair.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
