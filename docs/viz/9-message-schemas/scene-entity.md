# SceneEntity

3D 场景中的视觉元素。一个实体可以由多个共享相同参考系的图元组成。

## 父级数据结构

`SceneEntity` 出现在 SceneUpdate 消息数据结构中。

## 数据结构
| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [time](/) | 实体的时间戳 |
| frame_id | [string](/) | 参考系 |
| id | [string](/) | 实体的标识符。一个实体将替换同一主题上具有相同 id 的任何先前实体。 |
| lifetime | [duration](/) | 实体应自动移除的时间长度（相对于时间戳）。零值表示实体应保持可见，直到它被替换或删除。 |
| frame_locked | [boolean](/) | 实体是否应保持在固定框架中的位置（false）或跟随 frame_id 中指定的框架相对于固定框架移动（true） |
| metadata | [KeyValuePair[]](/) | 与实体关联的额外用户提供的元数据。键必须唯一。 |
| arrows | [ArrowPrimitive[]](/) | 箭头图元 |
| cubes | [CubePrimitive[]](/) | 立方体图元 |
| spheres | [SpherePrimitive[]](/) | 球体图元 |
| cylinders | [CylinderPrimitive[]](/) | 圆柱体图元 |
| lines | [LinePrimitive[]](/) | 线条图元 |
| triangles | [TriangleListPrimitive[]](/) | 三角形列表图元 |
| texts | [TextPrimitive[]](/) | 文本图元 |
| models | [ModelPrimitive[]](/) | 模型图元 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码实现：

| 编码    | 数据结构                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntity.msg)       |
| ROS 2       | [foxglove_msgs/msg/SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntity.msg)   |
| JSON        | [foxglove.SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntity.json)      |
| Protobuf    | [foxglove.SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntity.proto) |
| FlatBuffers | [foxglove.SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntity.fbs)       |
| OMG IDL     | [foxglove::SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntity.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
