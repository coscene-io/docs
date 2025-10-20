# LinePrimitive

A primitive representing a series of points connected by lines

## Parent Data Structure

`LinePrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field           | Type                                    | Description                                                                                                                                 |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| type            | [`LineType`](./enum-line-type)          | Drawing primitive used for the lines                                                                                                        |
| pose            | [`Pose`](./pose)                        | Origin of the lines relative to the reference frame                                                                                         |
| thickness       | [`float64`](./built-in%20types#float64) | Thickness of the lines                                                                                                                      |
| scale_invariant | [`boolean`](./built-in%20types#boolean) | Indicates whether thickness is fixed size in screen pixels (true) or specified in world coordinates and scales with camera distance (false) |
| points          | [`Point3[]`](./point-3)                 | Points on the lines                                                                                                                         |
| color           | [`Color`](./color)                      | Solid color for the entire line. Either color or colors must be provided.                                                                   |
| colors          | [`Color[]`](./color)                    | Color for each point (if specified, length must match points). Either color or colors must be provided.                                     |
| indices         | [`uint32[]`](./built-in%20types#uint32) | Indices into the points and colors attribute arrays, which can be used to avoid duplicating attribute data.                                 |

### `indices`

If omitted or empty, no indices are used. This default behavior is equivalent to specifying [0, 1, ..., N-1] for indices (where N is the number of `points` provided).

## Reference Implementation

The visualization schema is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LinePrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LinePrimitive.msg)    |
| JSON        | [foxglove.LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LinePrimitive.json)      |
| Protobuf    | [foxglove.LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LinePrimitive.proto) |
| FlatBuffers | [foxglove.LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LinePrimitive.fbs)       |
| OMG IDL     | [foxglove::LinePrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LinePrimitive.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
