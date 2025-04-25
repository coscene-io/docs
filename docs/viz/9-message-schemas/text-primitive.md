# TextPrimitive

表示文本标签的图元

## 父级数据结构

`TextPrimitive` 出现在 [`SceneEntity`](./scene-entity) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| pose | [`pose`](./pose) | 文本框中心的位置和文本的方向。单位方向表示文本在 xy 平面中，从 -x 流向 +x |
| billboard | [`boolean`](./built-in%20types#boolean) | 文本是否应该遵循 pose.orientation（false）或始终面向相机（true） |
| font_size | [`float64`](./built-in%20types#float64) | 字体大小（一行文本的高度） |
| scale_invariant | [`boolean`](./built-in%20types#boolean) | 表示 font_size 是屏幕像素中的固定大小（true），还是以世界坐标指定并随相机距离缩放（false） |
| color | [`color`](./color) | 文本颜色 |
| text | [`string`](./built-in%20types#string) | 文本内容 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码    | 数据结构                                                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| ROS 1   | [foxglove_msgs/TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TextPrimitive.msg)       |
| ROS 2   | [foxglove_msgs/msg/TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TextPrimitive.msg)   |
| JSON    | [foxglove.TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TextPrimitive.json)      |
| Protobuf| [foxglove.TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TextPrimitive.proto) |
| FlatBuffers | [foxglove.TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TextPrimitive.fbs)       |
| OMG IDL | [foxglove::TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TextPrimitive.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
