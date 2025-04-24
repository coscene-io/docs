# FrameTransform

3D 空间中两个参考坐标系之间的变换

## 面板支持

`FrameTransform` 在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 父级数据结构

`FrameTransform` 出现在 [FrameTransforms](/) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
|:---|:---|:---|
| timestamp | [time](/) | 变换的时间戳 |
| parent_frame_id | [string](/) | 父坐标系的名称 |
| child_frame_id | [string](/) | 子坐标系的名称 |
| translation | [Vector3](/) | 变换的平移分量 |
| rotation | [Quaternion](/) | 变换的旋转分量 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/FrameTransform.msg)       |
| ROS 2       | [foxglove_msgs/msg/FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/FrameTransform.msg)   |
| JSON        | [foxglove.FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/FrameTransform.json)      |
| Protobuf    | [foxglove.FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/FrameTransform.proto) |
| FlatBuffers | [foxglove.FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/FrameTransform.fbs)       |
| OMG IDL     | [foxglove::FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/FrameTransform.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
