---
title: Grid
---

# Grid

A two-dimensional grid of data.

## Panel Support

`Grid` is used in the [3D Panel](../panel/2-3d-panel) and [Image Panel](../panel/image-panel).

## Data Structure

| Field        | Type                                             | Description                                                                                                                              |
| ------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp    | [`time`](./built-in%20types#time)                | Timestamp of the grid                                                                                                                    |
| frame_id     | [`string`](./built-in%20types#string)            | Reference coordinate system                                                                                                              |
| pose         | [`Pose`](./pose)                                 | Position of the grid origin relative to the reference coordinate system; the grid is positioned in the x-y plane relative to this origin |
| column_count | [`uint32`](./built-in%20types#uint32)            | Number of columns in the grid                                                                                                            |
| cell_size    | [`Vector2`](./vector-2)                          | Size of a single grid cell along the x and y axes, relative to the pose                                                                  |
| row_stride   | [`uint32`](./built-in%20types#uint32)            | Number of bytes between rows in the data                                                                                                 |
| cell_stride  | [`uint32`](./built-in%20types#uint32)            | Number of bytes between cells within a row in the data                                                                                   |
| fields       | [`PackedElementField[]`](./packed-element-field) | Fields in the data. red, green, blue, and alpha are optional for customizing the color of the grid                                       |
| data         | [`bytes`](./built-in%20types#bytes)              | Grid cell data, interpreted using fields, arranged in row-major (y-major) order                                                          |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Grid.msg)        |
| ROS 2       | [foxglove_msgs/msg/Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Grid.msg)    |
| JSON        | [foxglove.Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Grid.json)      |
| Protobuf    | [foxglove.Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Grid.proto) |
| FlatBuffers | [foxglove.Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Grid.fbs)       |
| OMG IDL     | [foxglove::Grid](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Grid.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
