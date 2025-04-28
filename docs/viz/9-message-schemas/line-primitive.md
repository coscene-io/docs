# LinePrimitive

表示由线条连接的一系列点的图元

## 父级数据结构

`LinePrimitive` 出现在 [`SceneEntity`](./scene-entity) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| type | [`LineType`](./enum-line-type) | 用于线条的绘图图元 |
| pose | [`pose`](./pose) | 线条相对于参考框架的原点 |
| thickness | [`float64`](./built-in%20types#float64) | 线条粗细 |
| scale_invariant | [`boolean`](./built-in%20types#boolean) | 表示粗细是屏幕像素中的固定大小（true），还是以世界坐标指定并随相机距离缩放（false） |
| points | [`Point3[]`](./point-3) | 线条上的点 |
| color | [`color`](./color) | 用于整条线的纯色。必须提供 color 或 colors 中的一个。 |
| colors | [`Color[]`](./color) | 每个点的颜色（如果指定，长度必须与 points 相同）。必须提供 color 或 colors 中的一个。 |
| indices | [`uint32[]`](./built-in%20types#uint32) | 指向 points 和 colors 属性数组的索引，可用于避免重复属性数据。 |

### `indices`

如果省略或为空，则不使用索引。此默认行为等同于为索引指定 [0, 1, ..., N-1]（其中 N 是提供的 `points` 数量）。

## 参考实现

可视化模式与框架无关，可以使用任何支持的消息编码实现：

| 编码    | 数据结构                                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LinePrimitive.msg)       |
| ROS 2       | [foxglove_msgs/msg/LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LinePrimitive.msg)   |
| JSON        | [foxglove.LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LinePrimitive.json)      |
| Protobuf    | [foxglove.LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LinePrimitive.proto) |
| FlatBuffers | [foxglove.LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LinePrimitive.fbs)       |
| OMG IDL     | [foxglove::LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LinePrimitive.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
