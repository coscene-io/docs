# KeyValuePair

A key-value pair containing a key and its associated value.

## Parent Data Structure

`KeyValuePair` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field | Type                                  | Description |
| ----- | ------------------------------------- | ----------- |
| key   | [`string`](./built-in%20types#string) | Key         |
| value | [`string`](./built-in%20types#string) | Value       |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/KeyValuePair.msg)        |
| ROS 2       | [foxglove_msgs/msg/KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/KeyValuePair.msg)    |
| JSON        | [foxglove.KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/KeyValuePair.json)      |
| Protobuf    | [foxglove.KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/KeyValuePair.proto) |
| FlatBuffers | [foxglove.KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/KeyValuePair.fbs)       |
| OMG IDL     | [foxglove::KeyValuePair](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/KeyValuePair.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
