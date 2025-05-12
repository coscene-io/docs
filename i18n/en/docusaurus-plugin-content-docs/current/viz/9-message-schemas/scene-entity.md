# SceneEntity

A visual element in a 3D scene. An entity can be composed of multiple primitives that share the same reference frame.

## Parent Data Structure

`SceneEntity` appears in the [`SceneUpdate`](./scene-update) message data structure.

## Data Structure

| Field        | Type                                                   | Description                                                                                                                                                                   |
| ------------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp    | [`time`](./built-in%20types#time)                      | Entity timestamp                                                                                                                                                              |
| frame_id     | [`string`](./built-in%20types#string)                  | Reference frame                                                                                                                                                               |
| id           | [`string`](./built-in%20types#string)                  | Entity identifier. An entity will replace any previous entity with the same id on the same topic.                                                                             |
| lifetime     | [`duration`](./built-in%20types#duration)              | The length of time the entity should be automatically removed (relative to the timestamp). Zero value means the entity should remain visible until it is replaced or deleted. |
| frame_locked | [`boolean`](./built-in%20types#boolean)                | Whether the entity should remain in a fixed frame (false) or follow the frame specified in frame_id (true) relative to a fixed frame.                                         |
| metadata     | [`KeyValuePair[]`](./key-value-pair)                   | Additional user-provided metadata associated with the entity. Keys must be unique.                                                                                            |
| arrows       | [`ArrowPrimitive[]`](./arrow-primitive)                | Arrow primitives                                                                                                                                                              |
| cubes        | [`CubePrimitive[]`](./cube-primitive)                  | Cube primitives                                                                                                                                                               |
| spheres      | [`SpherePrimitive[]`](./sphere-primitive)              | Sphere primitives                                                                                                                                                             |
| cylinders    | [`CylinderPrimitive[]`](./cylinder-primitive)          | Cylinder primitives                                                                                                                                                           |
| lines        | [`LinePrimitive[]`](./line-primitive)                  | Line primitives                                                                                                                                                               |
| triangles    | [`TriangleListPrimitive[]`](./triangle-list-primitive) | Triangle list primitives                                                                                                                                                      |
| texts        | [`TextPrimitive[]`](./text-primitive)                  | Text primitives                                                                                                                                                               |
| models       | [`ModelPrimitive[]`](./model-primitive)                | Model primitives                                                                                                                                                              |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntity.msg)        |
| ROS 2       | [foxglove_msgs/msg/SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntity.msg)    |
| JSON        | [foxglove.SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntity.json)      |
| Protobuf    | [foxglove.SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntity.proto) |
| FlatBuffers | [foxglove.SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntity.fbs)       |
| OMG IDL     | [foxglove::SceneEntity](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntity.idl) |

You must use the data structure names specified above so that visualizations can recognize the data structure.
