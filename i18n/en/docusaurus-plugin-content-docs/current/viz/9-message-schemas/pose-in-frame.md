# PoseInFrame

Represents a pose in 3D space with a timestamp

## Panel Support

`PoseInFrame` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Data Structure

| Field     | Type                                  | Description                       |
| --------- | ------------------------------------- | --------------------------------- |
| timestamp | [`time`](./built-in%20types#time)     | Pose timestamp                    |
| frame_id  | [`string`](./built-in%20types#string) | Reference frame for pose position |
| pose      | [`pose`](./pose)                      | Pose in 3D space                  |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding method:

| Encoding Method | Data Structure                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [foxglove_msgs/PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PoseInFrame.msg)        |
| ROS 2           | [foxglove_msgs/msg/PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PoseInFrame.msg)    |
| JSON            | [foxglove.PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PoseInFrame.json)      |
| Protobuf        | [foxglove.PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PoseInFrame.proto) |
| FlatBuffers     | [foxglove.PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PoseInFrame.fbs)       |
| OMG IDL         | [foxglove::PoseInFrame](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PoseInFrame.idl) |

You must use the data structure names specified above so that the visualization can recognize the data structure.
