# Log

Log message

## Panel Support

The `Log` message type is used in the [Log Panel](../panel/log-panel).

## Data Structure

| Field     | Type                                  | Description                  |
| --------- | ------------------------------------- | ---------------------------- |
| timestamp | [`time`](./built-in%20types#time)     | Timestamp of the log message |
| level     | [`LogLevel`](./enum-log-level)        | Log level                    |
| message   | [`string`](./built-in%20types#string) | Log message content          |
| name      | [`string`](./built-in%20types#string) | Process or node name         |
| file      | [`string`](./built-in%20types#string) | Filename                     |
| line      | [`uint32`](./built-in%20types#uint32) | Line number in file          |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Log.msg)        |
| ROS 2       | [foxglove_msgs/msg/Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Log.msg)    |
| JSON        | [foxglove.Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Log.json)      |
| Protobuf    | [foxglove.Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Log.proto) |
| FlatBuffers | [foxglove.Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Log.fbs)       |
| OMG IDL     | [foxglove::Log](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Log.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
