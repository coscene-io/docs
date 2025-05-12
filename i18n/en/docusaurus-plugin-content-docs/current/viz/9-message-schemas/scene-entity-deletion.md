# SceneEntityDeletion

Command used to delete previously published entities

## Parent Data Structure

`SceneEntityDeletion` appears in the [`SceneUpdate`](./scene-update) message data structure.

## Data Structure

| Field     | Type                                                           | Description                                                                                              |
| --------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| timestamp | [`time`](./built-in%20types#time)                              | Timestamp of the deletion operation. Only matching entities earlier than this timestamp will be deleted. |
| type      | [`SceneEntityDeletionType`](./enum-scene-entity-deletion-type) | Type of deletion operation to perform                                                                    |
| id        | [`string`](./built-in%20types#string)                          | Identifier that must match when `type` is `MATCHING_ID`.                                                 |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding method:

| Encoding Method | Data Structure                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [foxglove_msgs/SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntityDeletion.msg)        |
| ROS 2           | [foxglove_msgs/msg/SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntityDeletion.msg)    |
| JSON            | [foxglove.SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntityDeletion.json)      |
| Protobuf        | [foxglove.SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntityDeletion.proto) |
| FlatBuffers     | [foxglove.SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntityDeletion.fbs)       |
| OMG IDL         | [foxglove::SceneEntityDeletion](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntityDeletion.idl) |

You must use the data structure names specified above so that the visualization can recognize the data structure.
