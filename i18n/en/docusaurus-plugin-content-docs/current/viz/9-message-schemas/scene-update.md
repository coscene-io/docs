# SceneUpdate

Updates to entities displayed in the 3D scene.

## Panel Support

`SceneUpdate` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Data Structure

| Field     | Type                                               | Description                      |
| --------- | -------------------------------------------------- | -------------------------------- |
| deletions | [`SceneEntityDeletion[]`](./scene-entity-deletion) | Scene entities to delete         |
| entities  | [`SceneEntity[]`](./scene-entity)                  | Scene entities to add or replace |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneUpdate.msg)        |
| ROS 2       | [foxglove_msgs/msg/SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneUpdate.msg)    |
| JSON        | [foxglove.SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneUpdate.json)      |
| Protobuf    | [foxglove.SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneUpdate.proto) |
| FlatBuffers | [foxglove.SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneUpdate.fbs)       |
| OMG IDL     | [foxglove::SceneUpdate](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneUpdate.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
