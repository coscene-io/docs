# FrameTransform

Transformation between two reference coordinate systems in 3D space

## Panel Support

`FrameTransform` is used in the [3D Panel](../panel/2-3d-panel) and [Image Panel](../panel/image-panel).

## Parent Data Structure

`FrameTransform` appears in the [`FrameTransforms`](./frame-transforms) message data structure.

## Data Structure

| Field           | Type                                  | Description                                 |
| :-------------- | :------------------------------------ | :------------------------------------------ |
| timestamp       | [`time`](./built-in%20types#time)     | Timestamp of the transformation             |
| parent_frame_id | [`string`](./built-in%20types#string) | Name of the parent coordinate system        |
| child_frame_id  | [`string`](./built-in%20types#string) | Name of the child coordinate system         |
| translation     | [`Vector3`](./vector-3)               | Translation component of the transformation |
| rotation        | [`Quaternion`](./quaternion)          | Rotation component of the transformation    |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/FrameTransform.msg)        |
| ROS 2       | [foxglove_msgs/msg/FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/FrameTransform.msg)    |
| JSON        | [foxglove.FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/FrameTransform.json)      |
| Protobuf    | [foxglove.FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/FrameTransform.proto) |
| FlatBuffers | [foxglove.FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/FrameTransform.fbs)       |
| OMG IDL     | [foxglove::FrameTransform](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/FrameTransform.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
