# SpherePrimitive

A primitive representing a sphere or ellipsoid

## Parent Data Structure

`SpherePrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field | Type                    | Description                                   |
| ----- | ----------------------- | --------------------------------------------- |
| pose  | [`pose`](./pose)        | Position and orientation of the sphere center |
| size  | [`Vector3`](./vector-3) | Size of the sphere along each axis (diameter) |
| color | [`color`](./color)      | Color of the sphere                           |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SpherePrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SpherePrimitive.msg)    |
| JSON        | [foxglove.SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SpherePrimitive.json)      |
| Protobuf    | [foxglove.SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SpherePrimitive.proto) |
| FlatBuffers | [foxglove.SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SpherePrimitive.fbs)       |
| OMG IDL     | [foxglove::SpherePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SpherePrimitive.idl) |

You must use the data structure names specified above so that visualizations can recognize the data structure.
