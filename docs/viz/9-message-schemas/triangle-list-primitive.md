# TriangleListPrimitive

表示一组三角形或由三角形平铺而成的表面的图元

## 父级数据结构

`TriangleListPrimitive` 出现在 [SceneEntity](/) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| pose | [Pose](/) | 三角形相对于参考坐标系的原点 |
| points | [Point3[]](/) | 用于三角形的顶点，解释为三元组列表（0-1-2, 3-4-5, ...） |
| color | [Color](/) | 用于整个形状的纯色。必须提供 color 或 colors 之一。 |
| colors | [Color[]](/) | 每个顶点的颜色（如果指定，必须与 points 长度相同）。必须提供 color 或 colors 之一。 |
| indices | [uint32[]](/) | 指向 points 和 colors 属性数组的索引，可用于避免重复属性数据。 |

### `indices`

如果省略或为空，则不使用索引。这种默认行为等同于为索引指定 [0, 1, ..., N-1]（其中 N 是提供的 `points` 数量）。

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TriangleListPrimitive.msg) |
| ROS 2 | [foxglove_msgs/msg/TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TriangleListPrimitive.msg) |
| JSON | [foxglove.TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TriangleListPrimitive.json) |
| Protobuf | [foxglove.TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TriangleListPrimitive.proto) |
| FlatBuffers | [foxglove.TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TriangleListPrimitive.fbs) |
| OMG IDL | [foxglove::TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TriangleListPrimitive.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
