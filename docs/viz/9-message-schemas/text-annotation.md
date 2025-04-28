# TextAnnotation

在 2D 图像上的文本标签

## 父级数据结构

`TextAnnotation` 出现在 [`ImageAnnotations`](./image-annotations) 消息数据结构中。

## 数据结构
 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [`time`](./built-in%20types#time) | 注释的时间戳 |
| position | [`Point2`](./point-2) | 文本标签在 2D 图像坐标（像素）中的左下角原点 |
| text | [`string`](./built-in%20types#string) | 要显示的文本 |
| font_size | [`float64`](./built-in%20types#float64) | 字体大小（像素） |
| text_color | [`color`](./color) | 文本颜色 |
| background_color | [`color`](./color) | 背景填充颜色 |

### `position`

坐标使用图像左上角像素的左上角作为原点。

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码    | 数据结构                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TextAnnotation.msg)       |
| ROS 2       | [foxglove_msgs/msg/TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TextAnnotation.msg)   |
| JSON        | [foxglove.TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TextAnnotation.json)      |
| Protobuf    | [foxglove.TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TextAnnotation.proto) |
| FlatBuffers | [foxglove.TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TextAnnotation.fbs)       |
| OMG IDL     | [foxglove::TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TextAnnotation.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
