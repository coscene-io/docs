# Pose

表示物体或参考系在三维空间中的位置和方向

## 父数据结构

`Pose` 出现在以下数据结构中：[ArrowPrimitive](/)、[CubePrimitive](/)、[CylinderPrimitive](/)、[Grid](/)、[LaserScan](/)、[LinePrimitive](/)、[ModelPrimitive](/)、[PointCloud](/)、[PoseInFrame](/)、[PosesInFrame](/)、[SpherePrimitive](/)、[TextPrimitive](/) 和 [TriangleListPrimitive](/)。

## 数据结构

| 字段         | 类型                                                         | 描述                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------ |
| position     | [Vector3](/)      | 表示三维空间中的位置点               |
| orientation  | [Quaternion](/) | 表示三维空间中的方向四元数           |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式     | 数据结构                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| ROS 1        | [geometry_msgs/Pose](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Pose.html)              |
| ROS 2        | [geometry_msgs/msg/Pose](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Pose.html)               |
| JSON         | [foxglove.Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Pose.json)        |
| Protobuf     | [foxglove.Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Pose.proto)   |
| FlatBuffers  | [foxglove.Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Pose.fbs)         |
| OMG IDL      | [foxglove::Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Pose.idl)   |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
