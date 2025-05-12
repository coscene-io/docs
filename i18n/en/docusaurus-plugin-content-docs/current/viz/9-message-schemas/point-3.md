# Point3

Represents a point position in three-dimensional space

## Parent Data Structure

`Point3` appears in the [`LinePrimitive`](./line-primitive) and [`TriangleListPrimitive`](./triangle-list-primitive) message data structures.

## Data Structure

| Field | Type                                    | Description           |
| ----- | --------------------------------------- | --------------------- |
| x     | [`float64`](./built-in%20types#float64) | x coordinate position |
| y     | [`float64`](./built-in%20types#float64) | y coordinate position |
| z     | [`float64`](./built-in%20types#float64) | z coordinate position |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| ROS 1       | [geometry_msgs/Point](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Point.html)               |
| ROS 2       | [geometry_msgs/msg/Point](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Point.html)                |
| JSON        | [foxglove.Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Point3.json)      |
| Protobuf    | [foxglove.Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Point3.proto) |
| FlatBuffers | [foxglove.Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Point3.fbs)       |
| OMG IDL     | [foxglove::Point3](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Point3.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
