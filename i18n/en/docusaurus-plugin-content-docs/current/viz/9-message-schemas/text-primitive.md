# TextPrimitive

A primitive representing text labels

## Parent Data Structure

`TextPrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field           | Type                                    | Description                                                                                                                                    |
| --------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| pose            | [`pose`](./pose)                        | Position of the text box center and orientation of the text. Unit orientation means text flows in the xy-plane, from -x toward +x              |
| billboard       | [`boolean`](./built-in%20types#boolean) | Whether the text should follow pose.orientation (false) or always face the camera (true)                                                       |
| font_size       | [`float64`](./built-in%20types#float64) | Font size (height of a line of text)                                                                                                           |
| scale_invariant | [`boolean`](./built-in%20types#boolean) | Indicates whether font_size is a fixed size in screen pixels (true), or specified in world coordinates and scales with camera distance (false) |
| color           | [`color`](./color)                      | Text color                                                                                                                                     |
| text            | [`string`](./built-in%20types#string)   | Text content                                                                                                                                   |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TextPrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TextPrimitive.msg)    |
| JSON        | [foxglove.TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TextPrimitive.json)      |
| Protobuf    | [foxglove.TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TextPrimitive.proto) |
| FlatBuffers | [foxglove.TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TextPrimitive.fbs)       |
| OMG IDL     | [foxglove::TextPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TextPrimitive.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
