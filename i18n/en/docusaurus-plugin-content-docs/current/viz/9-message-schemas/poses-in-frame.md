# PosesInFrame

Represents a series of poses in 3D space with timestamps

## Panel Support

`PosesInFrame` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Data Structure

| Field     | Type                                  | Description                      |
| --------- | ------------------------------------- | -------------------------------- |
| timestamp | [`time`](./built-in%20types#time)     | Pose timestamp                   |
| frame_id  | [`string`](./built-in%20types#string) | Pose reference coordinate system |
| poses     | [`Pose[]`](./pose)                    | Poses in 3D space                |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding method:

| Encoding Method | Data Structure                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [foxglove_msgs/PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PosesInFrame.msg)        |
| ROS 2           | [foxglove_msgs/msg/PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PosesInFrame.msg)    |
| JSON            | [foxglove.PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PosesInFrame.json)      |
| Protobuf        | [foxglove.PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PosesInFrame.proto) |
| FlatBuffers     | [foxglove.PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PosesInFrame.fbs)       |
| OMG IDL         | [foxglove::PosesInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PosesInFrame.idl) |

You must use the data structure name specified above so that the visualization can recognize the data structure.
