# TextAnnotation

Text labels on 2D images

## Parent Data Structure

`TextAnnotation` appears in the [`ImageAnnotations`](./image-annotations) message data structure.

## Data Structure

| Field            | Type                                    | Description                                                          |
| ---------------- | --------------------------------------- | -------------------------------------------------------------------- |
| timestamp        | [`time`](./built-in%20types#time)       | Timestamp of the annotation                                          |
| position         | [`Point2`](./point-2)                   | Lower-left origin of the text label in 2D image coordinates (pixels) |
| text             | [`string`](./built-in%20types#string)   | Text to display                                                      |
| font_size        | [`float64`](./built-in%20types#float64) | Font size (pixels)                                                   |
| text_color       | [`color`](./color)                      | Text color                                                           |
| background_color | [`color`](./color)                      | Background fill color                                                |

### `position`

Coordinates use the top-left corner of the top-left pixel of the image as the origin.

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TextAnnotation.msg)        |
| ROS 2       | [foxglove_msgs/msg/TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TextAnnotation.msg)    |
| JSON        | [foxglove.TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TextAnnotation.json)      |
| Protobuf    | [foxglove.TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TextAnnotation.proto) |
| FlatBuffers | [foxglove.TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TextAnnotation.fbs)       |
| OMG IDL     | [foxglove::TextAnnotation](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TextAnnotation.idl) |

You must use the data structure names specified above so that visualizations can recognize the data structure.
