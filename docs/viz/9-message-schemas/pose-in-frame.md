# PoseInFrame

表示 3D 空间中对象或参考框架的带时间戳的位姿

## 面板支持

`PoseInFrame` 在[三维面板](../4-panel/2-3d-panel.md)和[图像面板](../4-panel/5-image-panel.md)中使用。

## 数据结构

| 字段      | 类型                                  | 描述                     |
| --------- | ------------------------------------- | ------------------------ |
| timestamp | [`time`](./built-in%20types#time)     | 位姿的时间戳             |
| frame_id  | [`string`](./built-in%20types#string) | 位姿位置和方向的参考框架 |
| pose      | [`pose`](./pose)                      | 3D 空间中的位姿          |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PoseInFrame.msg)        |
| ROS 2       | [foxglove_msgs/msg/PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PoseInFrame.msg)    |
| JSON        | [foxglove.PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PoseInFrame.json)      |
| Protobuf    | [foxglove.PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PoseInFrame.proto) |
| FlatBuffers | [foxglove.PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PoseInFrame.fbs)       |
| OMG IDL     | [foxglove::PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PoseInFrame.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
