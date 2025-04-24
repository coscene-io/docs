# Vector3

表示仅包含方向的三维空间向量

## 父数据结构

`Vector3` 出现在以下数据结构中：[CubePrimitive](/)、[CylinderPrimitive](/)、[FrameTransform](/)、[ModelPrimitive](/)、[Pose](/) 和 [SpherePrimitive](/)。

## 数据结构

| 字段 | 类型                                                                  | 描述         |
| ----- | --------------------------------------------------------------------- | ------------------- |
| x     | [float64](/) | x 坐标长度 |
| y     | [float64](/) | y 坐标长度 |
| z     | [float64](/) | z 坐标长度 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| ROS 1       | [geometry_msgs/Vector3](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Vector3.html)          |
| ROS 2       | [geometry_msgs/msg/Vector3](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Vector3.html)           |
| JSON        | [foxglove.Vector3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Vector3.json)      |
| Protobuf    | [foxglove.Vector3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Vector3.proto) |
| FlatBuffers | [foxglove.Vector3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Vector3.fbs)       |
| OMG IDL     | [foxglove::Vector3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Vector3.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
