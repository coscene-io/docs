# PointCloud

A collection of N-dimensional points, possibly with additional field information such as normals or intensities.

## Panel Support

`PointCloud` is used in the [3D Panel](../panel/2-3d-panel) and [Image Panel](../panel/image-panel).

## Data Structure

| Field        | Type                                             | Description                                                                                                                                                         |
| ------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp    | [`time`](./built-in%20types#time)                | Point cloud timestamp                                                                                                                                               |
| frame_id     | [`string`](./built-in%20types#string)            | Reference coordinate system                                                                                                                                         |
| pose         | [`pose`](./pose)                                 | Point cloud origin position relative to the reference coordinate system                                                                                             |
| point_stride | [`uint32`](./built-in%20types#uint32)            | Number of bytes between adjacent points in the data                                                                                                                 |
| fields       | [`PackedElementField[]`](./packed-element-field) | Fields in `data`. Each point must have at least 2 coordinate fields from x, y, z; red, green, blue, and alpha are optional for customizing the color of each point. |
| data         | [`bytes`](./built-in%20types#bytes)              | Point data, interpreted using fields                                                                                                                                |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PointCloud.msg)        |
| ROS 2       | [foxglove_msgs/msg/PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PointCloud.msg)    |
| JSON        | [foxglove.PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PointCloud.json)      |
| Protobuf    | [foxglove.PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PointCloud.proto) |
| FlatBuffers | [foxglove.PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PointCloud.fbs)       |
| OMG IDL     | [foxglove::PointCloud](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PointCloud.idl) |

You must use the data structure name specified above so that the visualization can recognize the data structure.
