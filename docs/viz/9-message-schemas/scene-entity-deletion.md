# SceneEntityDeletion

用于删除之前发布的实体的命令

## 父数据结构

`SceneEntityDeletion` 出现在 [`SceneUpdate`](./scene-update) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [`time`](./built-in%20types#time) | 删除操作的时间戳。只有早于此时间戳的匹配实体才会被删除。 |
| type | [`SceneEntityDeletionType`](./enum-scene-entity-deletion-type) | 要执行的删除操作类型 |
| id | [`string`](./built-in%20types#string) | 当 `type` 为 `MATCHING_ID` 时必须匹配的标识符。 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntityDeletion.msg)       |
| ROS 2       | [foxglove\_msgs/msg/SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntityDeletion.msg)   |
| JSON        | [foxglove.SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntityDeletion.json)      |
| Protobuf    | [foxglove.SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntityDeletion.proto) |
| FlatBuffers | [foxglove.SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntityDeletion.fbs)       |
| OMG IDL     | [foxglove::SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntityDeletion.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
