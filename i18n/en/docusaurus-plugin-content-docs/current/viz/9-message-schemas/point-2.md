# Point2

Represents a position point in two-dimensional space

## Parent Schema

`Point2` appears in the [`CircleAnnotation`](./circle-annotation), [`PointsAnnotation`](./points-annotation), and [`TextAnnotation`](./text-annotation) message schemas.

## Schema Definition

| Field | Type                                    | Description           |
| ----- | --------------------------------------- | --------------------- |
| x     | [`float64`](./built-in%20types#float64) | x coordinate position |
| y     | [`float64`](./built-in%20types#float64) | y coordinate position |

## Reference Implementation

The visualization schema is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Point2.msg)        |
| ROS 2       | [foxglove_msgs/msg/Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Point2.msg)    |
| JSON        | [foxglove.Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Point2.json)      |
| Protobuf    | [foxglove.Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Point2.proto) |
| FlatBuffers | [foxglove.Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Point2.fbs)       |
| OMG IDL     | [foxglove::Point2](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Point2.idl) |

You must use the schema names specified above for the visualization to recognize the schema.
