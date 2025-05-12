# ModelPrimitive

表示从外部 URL 或嵌入数据加载的 3D 模型文件的原始类型。

## 父级数据结构

`ModelPrimitive` 出现在 [`SceneEntity`](./scene-entity) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| pose | [`pose`](./pose) | 相对于参考系的模型原点 |
| scale | [`Vector3`](./vector-3) | 沿每个轴应用于模型的缩放因子 |
| color | [`color`](./color) | 如果 override_color 为 true，则用于整个模型的纯色 |
| override_color | [`boolean`](./built-in%20types#boolean) | 是否使用 color 中指定的颜色，而不是原始模型中嵌入的任何材质 |
| url | [`string`](./built-in%20types#string) | 指向模型文件的 URL。应提供 url 或 data 之一 |
| media_type | [`string`](./built-in%20types#string) | 嵌入模型的[媒体类型](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)（例如 model/gltf-binary）。如果提供 data 而不是 url，则需要此字段。如果提供了 url，则覆盖推断的媒体类型 |
| data | [`bytes`](./built-in%20types#bytes) | 嵌入的模型。应提供 url 或 data 之一。如果提供了 data，则必须设置 media_type 以指示数据的类型 |

## 参考实现

可视化数据结构与框架无关，可以使用任何支持的消息编码来实现：

| 编码    | 数据结构                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ModelPrimitive.msg)       |
| ROS 2       | [foxglove_msgs/msg/ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ModelPrimitive.msg)   |
| JSON        | [foxglove.ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ModelPrimitive.json)      |
| Protobuf    | [foxglove.ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ModelPrimitive.proto) |
| FlatBuffers | [foxglove.ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ModelPrimitive.fbs)       |
| OMG IDL     | [foxglove::ModelPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ModelPrimitive.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
