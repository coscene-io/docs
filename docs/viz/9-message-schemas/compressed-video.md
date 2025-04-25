# CompressedVideo

压缩视频比特流的单帧

## 面板支持

`CompressedVideo` 在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段       | 类型                                                                  | 描述                     |
| ---------- | --------------------------------------------------------------------- | ------------------------ |
| `timestamp`  | [`time`](./built-in%20types#time)       | 视频帧的时间戳           |
| `frame_id`   | [`string`](./built-in%20types#string)   | 视频的参考坐标系         |
| `data`       | [`bytes`](./built-in%20types#bytes)     | 压缩视频帧数据           |
| `format`     | [`string`](./built-in%20types#string)   | 视频格式                 |

### `frame_id`

帧的原点是相机的光学中心。+x 指向视频的右侧，+y 指向下方，+z 指向视频平面的内部。

### `data`

对于基于数据包的视频编解码器，此数据必须在数据包边界开始和结束（没有部分数据包），并且必须包含足够的视频数据包来解码恰好一个图像（关键帧或增量帧）。注意：Foxglove 不支持包含 B 帧的视频流，因为它们需要前瞻。

具体来说，不同 `format` 值的要求如下：

* `h264`  
   * 使用 Annex B 格式的数据  
   * 每个 CompressedVideo 消息应包含足够的 NAL 单元来解码恰好一个视频帧  
   * 每个包含关键帧（IDR）的消息还必须包含 SPS NAL 单元

### `format`

支持的值：`h264`。

注意：压缩视频支持受硬件限制和专利许可的影响，因此并非所有平台都支持所有编码。

## 参考实现

可视化数据结构与框架无关，可以使用任何支持的消息编码来实现：

| 编码       | 数据结构                                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| ROS 1      | [foxglove_msgs/CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CompressedVideo.msg)       |
| ROS 2      | [foxglove_msgs/msg/CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CompressedVideo.msg)   |
| JSON       | [foxglove.CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CompressedVideo.json)      |
| Protobuf   | [foxglove.CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CompressedVideo.proto) |
| FlatBuffers| [foxglove.CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CompressedVideo.fbs)       |
| OMG IDL    | [foxglove::CompressedVideo](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CompressedVideo.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
