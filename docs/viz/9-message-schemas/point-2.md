# Point2

表示二维空间中位置的点

## 父模式

`Point2` 出现在 [CircleAnnotation](/)、[PointsAnnotation](/) 和 [TextAnnotation](/) 消息模式中。

## 模式定义

| 字段 | 类型                                                                  | 描述           |
| ----- | --------------------------------------------------------------------- | --------------------- |
| x     | [float64](/) | x 坐标位置 |
| y     | [float64](/) | y 坐标位置 |

## 参考实现

可视化模式是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 模式                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Point2.msg)       |
| ROS 2       | [foxglove\_msgs/msg/Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Point2.msg)   |
| JSON        | [foxglove.Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Point2.json)      |
| Protobuf    | [foxglove.Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Point2.proto) |
| FlatBuffers | [foxglove.Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Point2.fbs)       |
| OMG IDL     | [foxglove::Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Point2.idl) |

您必须使用上面指定的模式名称，以便可视化能够识别该模式。
