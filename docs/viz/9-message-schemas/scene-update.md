# SceneUpdate

对 3D 场景中显示的实体的更新

## 面板支持

`SceneUpdate` 用于[三维面板](../4-panel/2-3d-panel.md)和[图像面板](../4-panel/5-image-panel.md)。

## 数据结构

| 字段      | 类型                                               | 描述                   |
| --------- | -------------------------------------------------- | ---------------------- |
| deletions | [`SceneEntityDeletion[]`](./scene-entity-deletion) | 要删除的场景实体       |
| entities  | [`SceneEntity[]`](./scene-entity)                  | 要添加或替换的场景实体 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneUpdate.msg)        |
| ROS 2       | [foxglove_msgs/msg/SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneUpdate.msg)    |
| JSON        | [foxglove.SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneUpdate.json)      |
| Protobuf    | [foxglove.SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneUpdate.proto) |
| FlatBuffers | [foxglove.SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneUpdate.fbs)       |
| OMG IDL     | [foxglove::SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneUpdate.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
