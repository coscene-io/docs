# PointsAnnotation

An array of points on a 2D image.

## Parent Data Structure

`PointsAnnotation` appears in the [`ImageAnnotations`](./image-annotations) message data structure.

## Data Structure

| Field          | Type                                                    | Description                                                                                                                                     |
| -------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp      | [`time`](./built-in%20types#time)                       | Annotation timestamp                                                                                                                            |
| type           | [`PointsAnnotationType`](./enum-points-annotation-type) | Type of point annotation to draw                                                                                                                |
| points         | [`Point2[]`](./point-2)                                 | Points in 2D image coordinates (pixels)                                                                                                         |
| outline_color  | [`color`](./color)                                      | Outline color                                                                                                                                   |
| outline_colors | [`Color[]`](./color)                                    | Outline color for each point if `type` is `POINTS`; outline color for each line segment if `type` is `LINE_LIST`, `LINE_STRIP`, or `LINE_LOOP`. |
| fill_color     | [`color`](./color)                                      | Fill color                                                                                                                                      |
| thickness      | [`float64`](./built-in%20types#float64)                 | Outline thickness (pixels)                                                                                                                      |

### `points`

These coordinates use the top-left pixel of the image as the origin.

## Reference Implementation

Foxglove data structures are framework agnostic and can be implemented in any message encoding:

| Encoding    | Data Structure                                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PointsAnnotation.msg)        |
| ROS 2       | [foxglove_msgs/msg/PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PointsAnnotation.msg)    |
| JSON        | [foxglove.PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PointsAnnotation.json)      |
| Protobuf    | [foxglove.PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PointsAnnotation.proto) |
| FlatBuffers | [foxglove.PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PointsAnnotation.fbs)       |
| OMG IDL     | [foxglove::PointsAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PointsAnnotation.idl) |

You must use the data structure name specified above so that Foxglove can recognize it.
