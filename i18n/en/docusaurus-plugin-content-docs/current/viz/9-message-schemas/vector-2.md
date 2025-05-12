# Vector2

Represents a vector in two-dimensional space that indicates direction only.

## Parent Data Structure

`Vector2` appears in the [`Grid`](./grid) message data structure.

## Data Structure

| Field | Type                                    | Description         |
| ----- | --------------------------------------- | ------------------- |
| x     | [`float64`](./built-in%20types#float64) | x coordinate length |
| y     | [`float64`](./built-in%20types#float64) | y coordinate length |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Vector2.msg)        |
| ROS 2       | [foxglove_msgs/msg/Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Vector2.msg)    |
| JSON        | [foxglove.Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Vector2.json)      |
| Protobuf    | [foxglove.Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Vector2.proto) |
| FlatBuffers | [foxglove.Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Vector2.fbs)       |
| OMG IDL     | [foxglove::Vector2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Vector2.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
