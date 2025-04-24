# FrameTransforms

FrameTransform 消息的数组

## 数据结构

| 字段       | 类型                                                                      | 描述           |
| ---------- | ------------------------------------------------------------------------- | -------------- |
| transforms | [FrameTransform\[\]](/docs/visualization/message-schemas/frame-transform) | 变换数组       |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码       | 数据结构                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| ROS 1      | [foxglove\_msgs/FrameTransforms](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/FrameTransforms.msg)       |
| ROS 2      | [foxglove\_msgs/msg/FrameTransforms](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/FrameTransforms.msg)   |
| JSON       | [foxglove.FrameTransforms](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/FrameTransforms.json)      |
| Protobuf   | [foxglove.FrameTransforms](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/FrameTransforms.proto) |
| FlatBuffers| [foxglove.FrameTransforms](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/FrameTransforms.fbs)       |
| OMG IDL    | [foxglove::FrameTransforms](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/FrameTransforms.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
