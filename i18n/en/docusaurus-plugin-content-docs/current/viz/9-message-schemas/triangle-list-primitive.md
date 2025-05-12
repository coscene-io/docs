# TriangleListPrimitive

Represents a primitive that consists of a set of triangles or a surface tiled with triangles.

## Parent Data Structure

`TriangleListPrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field   | Type                                    | Description                                                                                                       |
| ------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| pose    | [`pose`](./pose)                        | Origin of the triangles relative to the reference coordinate frame                                                |
| points  | [`Point3[]`](./point-3)                 | Vertices for the triangles, interpreted as a list of triplets (0-1-2, 3-4-5, ...)                                 |
| color   | [`color`](./color)                      | Solid color for the entire shape. Either color or colors must be provided.                                        |
| colors  | [`Color[]`](./color)                    | Color for each vertex (if specified, must be the same length as points). Either color or colors must be provided. |
| indices | [`uint32[]`](./built-in%20types#uint32) | Indices into the points and colors attribute arrays, which can be used to avoid duplicating attribute data.       |

### `indices`

If omitted or empty, no indices are used. This default behavior is equivalent to specifying [0, 1, ..., N-1] for the indices (where N is the number of `points` provided).

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TriangleListPrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TriangleListPrimitive.msg)    |
| JSON        | [foxglove.TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TriangleListPrimitive.json)      |
| Protobuf    | [foxglove.TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TriangleListPrimitive.proto) |
| FlatBuffers | [foxglove.TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TriangleListPrimitive.fbs)       |
| OMG IDL     | [foxglove::TriangleListPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TriangleListPrimitive.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
