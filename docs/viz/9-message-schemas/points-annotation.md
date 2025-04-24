# PointsAnnotation

二维图像上的点数组

## 父级数据结构

`PointsAnnotation` 出现在 [ImageAnnotations](/) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [time](/) | 标注的时间戳 |
| type | [PointsAnnotationType](/) | 要绘制的点标注类型 |
| points | [Point2\[\]](/) | 二维图像坐标（像素）中的点 |
| outline_color | [Color](/) | 轮廓颜色 |
| outline_colors | [Color\[\]](/) | 如果 `type` 是 `POINTS`，则为每个点的颜色；如果 `type` 是 `LINE_LIST`、`LINE_STRIP` 或 `LINE_LOOP`，则为每个线段的描边颜色。 |
| fill_color | [Color](/) | 填充颜色 |
| thickness | [float64](/) | 描边粗细（像素） |

### `points`

这些坐标使用图像左上角像素的左上角作为原点。

## 参考实现

Foxglove 数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码        | 数据结构                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PointsAnnotation.msg)       |
| ROS 2       | [foxglove_msgs/msg/PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PointsAnnotation.msg)   |
| JSON        | [foxglove.PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PointsAnnotation.json)      |
| Protobuf    | [foxglove.PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PointsAnnotation.proto) |
| FlatBuffers | [foxglove.PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PointsAnnotation.fbs)       |
| OMG IDL     | [foxglove::PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PointsAnnotation.idl) |

您必须使用上面指定的数据结构名称，以便 Foxglove 能够识别该数据结构。
