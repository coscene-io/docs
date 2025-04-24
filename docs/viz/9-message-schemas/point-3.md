# Point3

表示三维空间中位置的点

## 父数据结构

`Point3` 出现在 LinePrimitive 和 TriangleListPrimitive 消息数据结构中。

## 数据结构

| 字段 | 类型                                                                  | 描述           |
| ----- | --------------------------------------------------------------------- | --------------------- |
| x     | [float64](/) | x 坐标位置 |
| y     | [float64](/) | y 坐标位置 |
| z     | [float64](/) | z 坐标位置 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| ROS 1       | [geometry_msgs/Point](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Point.html)            |
| ROS 2       | [geometry_msgs/msg/Point](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Point.html)             |
| JSON        | [foxglove.Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Point3.json)      |
| Protobuf    | [foxglove.Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Point3.proto) |
| FlatBuffers | [foxglove.Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Point3.fbs)       |
| OMG IDL     | [foxglove::Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Point3.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
