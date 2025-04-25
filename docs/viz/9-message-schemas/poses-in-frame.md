# PosesInFrame

表示对象或参考系在 3D 空间中的一系列带时间戳的位姿

## 面板支持

`PosesInFrame` 在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段      | 类型                                                                | 描述                                          |
| --------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| timestamp | [`time`](./built-in%20types#time)     | 位姿的时间戳                                    |
| frame_id  | [`string`](./built-in%20types#string) | 位姿位置和方向的参考系 |
| poses     | [`Pose[]`](./pose)                | 3D 空间中的位姿                                    |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PosesInFrame.msg)       |
| ROS 2       | [foxglove\_msgs/msg/PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PosesInFrame.msg)   |
| JSON        | [foxglove.PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PosesInFrame.json)      |
| Protobuf    | [foxglove.PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PosesInFrame.proto) |
| FlatBuffers | [foxglove.PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PosesInFrame.fbs)       |
| OMG IDL     | [foxglove::PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PosesInFrame.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
