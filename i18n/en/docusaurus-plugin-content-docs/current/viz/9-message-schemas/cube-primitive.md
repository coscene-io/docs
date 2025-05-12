# CubePrimitive

Represents a primitive for a cube or rectangular prism

## Parent Data Structure

`CubePrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field | Type                    | Description                                             |
| ----- | ----------------------- | ------------------------------------------------------- |
| pose  | [`Pose`](./pose)        | Position of the cube center and orientation of the cube |
| size  | [`Vector3`](./vector-3) | Dimensions of the cube along each axis                  |
| color | [`Color`](./color)      | Color of the cube                                       |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CubePrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CubePrimitive.msg)    |
| JSON        | [foxglove.CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CubePrimitive.json)      |
| Protobuf    | [foxglove.CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CubePrimitive.proto) |
| FlatBuffers | [foxglove.CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CubePrimitive.fbs)       |
| OMG IDL     | [foxglove::CubePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CubePrimitive.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
