# Quaternion

Represents a quaternion for rotation in three-dimensional space

## Parent Data Structure

`Quaternion` appears in the [`FrameTransform`](./frame-transform) and [`Pose`](./pose) message data structures.

## Data Structure

| Field | Type                                    | Description |
| ----- | --------------------------------------- | ----------- |
| x     | [`float64`](./built-in%20types#float64) | x value     |
| y     | [`float64`](./built-in%20types#float64) | y value     |
| z     | [`float64`](./built-in%20types#float64) | z value     |
| w     | [`float64`](./built-in%20types#float64) | w value     |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [geometry_msgs/Quaternion](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Quaternion.html)             |
| ROS 2       | [geometry_msgs/msg/Quaternion](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Quaternion.html)              |
| JSON        | [foxglove.Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Quaternion.json)      |
| Protobuf    | [foxglove.Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Quaternion.proto) |
| FlatBuffers | [foxglove.Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Quaternion.fbs)       |
| OMG IDL     | [foxglove::Quaternion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Quaternion.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
