# CylinderPrimitive

Represents a primitive for a cylinder, elliptical cylinder, or truncated cone.

## Parent Data Structure

`CylinderPrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field        | Type                                    | Description                                                                                                      |
| :----------- | :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| pose         | [`Pose`](./pose)                        | Position of the cylinder center and orientation of the cylinder. Planes (faces) are perpendicular to the z axis. |
| size         | [`Vector3`](./vector-3)                 | Size of the cylinder's bounding box                                                                              |
| bottom_scale | [`float64`](./built-in%20types#float64) | 0-1, ratio of the cylinder bottom face (minimum z value) diameter to the bottom of the bounding box              |
| top_scale    | [`float64`](./built-in%20types#float64) | 0-1, ratio of the cylinder top face (maximum z value) diameter to the top of the bounding box                    |
| color        | [`Color`](./color)                      | Color of the cylinder                                                                                            |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CylinderPrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CylinderPrimitive.msg)    |
| JSON        | [foxglove.CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CylinderPrimitive.json)      |
| Protobuf    | [foxglove.CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CylinderPrimitive.proto) |
| FlatBuffers | [foxglove.CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CylinderPrimitive.fbs)       |
| OMG IDL     | [foxglove::CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CylinderPrimitive.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
