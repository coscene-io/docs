# PackedElementField

打包元素字节数组中每个元素内存在的一个字段定义

## 父级数据结构

`PackedElementField` 出现在 Grid 和 PointCloud 消息的数据结中。

## 数据结构

| 字段   | 类型                                                                 | 描述                                                                 |
| ------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| name   | [`string`](./built-in%20types#string)  | 字段的名称                                                           |
| offset | [`uint32`](./built-in%20types#uint32)  | 从数据缓冲区开始的字节偏移量                                         |
| type   | [`NumericType`](./enum-numeric-type)      | 字段中数据的类型。整数使用小端字节序存储。                           |

## 参考实现

可视化数据结与框架无关，可以使用任何支持的消息编码来实现：

| 编码        | 数据结构                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PackedElementField.msg)       |
| ROS 2       | [foxglove\_msgs/msg/PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PackedElementField.msg)   |
| JSON        | [foxglove.PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PackedElementField.json)      |
| Protobuf    | [foxglove.PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PackedElementField.proto) |
| FlatBuffers | [foxglove.PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PackedElementField.fbs)       |
| OMG IDL     | [foxglove::PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PackedElementField.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
