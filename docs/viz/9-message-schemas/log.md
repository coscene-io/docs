# Log

日志消息

## 面板支持

`Log` 消息类型在[日志面板](../panel/log-panel)中使用。

## 数据结构

| 字段      | 类型                                                                | 描述                  |
| --------- | ------------------------------------------------------------------- | --------------------- |
| timestamp | [time](/)     | 日志消息的时间戳      |
| level     | [LogLevel](/)           | 日志级别              |
| message   | [string](/) | 日志消息内容          |
| name      | [string](/) | 进程或节点名称        |
| file      | [string](/) | 文件名                |
| line      | [uint32](/) | 文件中的行号          |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Log.msg)       |
| ROS 2       | [foxglove\_msgs/msg/Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Log.msg)   |
| JSON        | [foxglove.Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Log.json)      |
| Protobuf    | [foxglove.Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Log.proto) |
| FlatBuffers | [foxglove.Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Log.fbs)       |
| OMG IDL     | [foxglove::Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Log.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
