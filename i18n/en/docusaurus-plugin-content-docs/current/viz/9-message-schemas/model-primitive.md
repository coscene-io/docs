# ModelPrimitive

Represents the original type of a 3D model file loaded from an external URL or embedded data

## Parent Data Structure

`ModelPrimitive` appears in the [`SceneEntity`](./scene-entity) message data structure.

## Data Structure

| Field          | Type                                    | Description                                                                                                                                                                                                                                                                 |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pose           | [`pose`](./pose)                        | The origin of the model relative to the reference frame                                                                                                                                                                                                                     |
| scale          | [`Vector3`](./vector-3)                 | The scale factor applied to the model along each axis                                                                                                                                                                                                                       |
| color          | [`color`](./color)                      | The pure color used for the entire model if `override_color` is true                                                                                                                                                                                                        |
| override_color | [`boolean`](./built-in%20types#boolean) | Whether to use the color specified in `color` instead of any embedded materials in the original model                                                                                                                                                                       |
| url            | [`string`](./built-in%20types#string)   | The URL pointing to the model file. Either `url` or `data` must be provided.                                                                                                                                                                                                |
| media_type     | [`string`](./built-in%20types#string)   | The [media type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the embedded model (e.g. `model/gltf-binary`). If `data` is provided instead of `url`, this field is required. If `url` is provided, it overrides the inferred media type. |
| data           | [`bytes`](./built-in%20types#bytes)     | The embedded model. Either `url` or `data` must be provided. If `data` is provided, `media_type` must be set to indicate the type of data.                                                                                                                                  |

## Reference Implementation

Visualization data structures are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ModelPrimitive.msg)        |
| ROS 2       | [foxglove_msgs/msg/ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ModelPrimitive.msg)    |
| JSON        | [foxglove.ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ModelPrimitive.json)      |
| Protobuf    | [foxglove.ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ModelPrimitive.proto) |
| FlatBuffers | [foxglove.ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ModelPrimitive.fbs)       |
| OMG IDL     | [foxglove::ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ModelPrimitive.idl) |

You must use the data structure name specified above so that the visualization can recognize the data structure.
