# RawImage

原始图像数据

## 面板支持

`RawImage` 在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [`time`](./built-in%20types#time) | 图像的时间戳 |
| frame_id | [`string`](./built-in%20types#string) | 图像的参考坐标系。坐标系的原点是相机的光学中心。+x 指向图像的右侧，+y 指向下方，+z 指向图像平面内部。 |
| width | [`uint32`](./built-in%20types#uint32) | 图像宽度 |
| height | [`uint32`](./built-in%20types#uint32) | 图像高度 |
| encoding | [`string`](./built-in%20types#string) | 原始图像数据的编码格式 |
| step | [`uint32`](./built-in%20types#uint32) | 单行的字节长度 |
| data | [`bytes`](./built-in%20types#bytes) | 原始图像数据 |

### `encoding`

支持的格式：`8UC1`、`8UC3`、`16UC1`（小端序(Little Endian)）、`32FC1`（小端序(Little Endian)）、`bayer_bggr8`、`bayer_gbrg8`、`bayer_grbg8`、`bayer_rggb8`、`bgr8`、`bgra8`、`mono8`、`mono16`、`rgb8`、`rgba8`、`uyvy` 或 `yuv422`、`yuyv` 或 `yuv422_yuy2`

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码格式    | 数据结构                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/RawImage.msg)       |
| ROS 2       | [foxglove_msgs/msg/RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/RawImage.msg)   |
| JSON        | [foxglove.RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/RawImage.json)      |
| Protobuf    | [foxglove.RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/RawImage.proto) |
| FlatBuffers | [foxglove.RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/RawImage.fbs)       |
| OMG IDL     | [foxglove::RawImage](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/RawImage.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
