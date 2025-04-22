---
sidebar_position: 1
---

# 介绍

 coScene 通常要求传入的消息遵循特定结构，以便正确进行可视化。使用 [Foxglove 架构](https://github.com/foxglove/foxglove-sdk)可充分利用平台内置的可视化功能。

 ## 支持的格式

- [Protobuf](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/proto/foxglove)
- [JSON Schema](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/jsonschema)
- [ROS 1](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/ros1)
- [ROS 2](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/ros2)
- [TypeScript](https://github.com/foxglove/foxglove-sdk/tree/main/typescript/schemas/src/types)
- [FlatBuffers](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/flatbuffer)

如果您已经编写了自定义消息，可以使用[消息转换器](插入文档链接)扩展将其转换为 coScene 支持的模式。

## Protobuf 和 JSON 架构类型

将所需的 [`.proto`文件](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/proto/foxglove) 或[ `.json` 文件](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/jsonschema)直接复制到您的项目中，并通过 coScene WebSocket 连接发布数据，或记录到[MCAP文件](https://mcap.dev/)中。

**注意：** 

对于 Protobuf 数据，类型为 [`google.protobuf.Timestamp`](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp) 或 [`google.protobuf.Duration`](https://protobuf.dev/reference/protobuf/google.protobuf/#duration) 的时间值，在[用户脚本](插入文档链接)、[消息转换器](插入文档链接)和 coScene 的其他部分中，将以 `sec` 和 `nsec` 字段表示，而不是 `seconds` 和 `nanos`，以与其他数据格式中的时间和持续时间类型保持一致。

您还可以通过[ `@foxglove/schemas` npm 包](https://www.npmjs.com/package/@foxglove/schemas)导入 JSON 模式：
```typescript
import { CompressedImage } from "@foxglove/schemas/jsonschema";
```
我们提供用于实时数据的 WebSocket 库（[Python](https://github.com/foxglove/ws-protocol/tree/main/python)、[JavaScript](https://github.com/foxglove/ws-protocol/tree/main/typescript/ws-protocol-examples)、[C++](https://github.com/foxglove/ws-protocol/tree/main/cpp)），以及用于预录数据文件的 MCAP 写入器（[Python](https://github.com/foxglove/mcap/tree/main/python)、[JavaScript](https://github.com/foxglove/mcap/tree/main/typescript)、[C++](https://github.com/foxglove/mcap/tree/main/cpp)）。

请参阅关于使用 MCAP C++ 写入器记录您的 Protobuf 数据的示例博客文章：[Recording Robocar Data with MCAP](https://foxglove.dev/blog/recording-robocar-data-with-mcap)。

## 无架构类型的 JSON

MCAP 支持在不指定架构类型的情况下写入 JSON 消息。要写入不带架构类型的 JSON 消息数据，请将通道的消息编码设置为`json` 并将架构类型 ID 设置为 0。这表示该通道没有架构类型。详细信息请参阅：[https://mcap.dev/spec#channel-op0x04](https://mcap.dev/spec#channel-op0x04)

## ROS

安装 `foxglove_msgs` 包
```typescript
sudo apt install ros-noetic-foxglove-msgs # For ROS 1
sudo apt install ros-galactic-foxglove-msgs # For ROS 2
```
然后，在您的 ROS 项目中导入所需的 schemas 以开始发布数据：
```typescript
from foxglove_msgs.msg import Vector2

msg = Vector2()
msg.x = 0.5
msg.y = 0.7
```

## TypeScript

将 coScene 消息架构作为 TypeScript 类型导入，以进行类型检查。

在 coScene 的[用户脚本面板](插入文章链接)中，您可以使用 `Message<"foxglove.[SchemaName]"> `指定所需的架构类型：
```typescript
sudo apt install ros-noetic-foxglove-msgs # For ROS 1
sudo apt install ros-galactic-foxglove-msgs # For ROS 2
```
然后，在您的 ROS 项目中导入所需的 schemas 以开始发布数据：
```typescript
import { Input, Message } from "./types";

type Output = Message<"foxglove.Point2">;

export const inputs = ["/input/topic"];
export const output = "/studio_script/output_topic";

export default function script(event: Input<"/input/topic">): Output {
  return { x: 1, y: 2 };
}
```

对于您自己的 TypeScript 项目，可以直接从 [@foxglove/schemas](https://www.npmjs.com/package/@foxglove/schemas) npm 包中导入类型：

```typescript
import { Point2 } from "@foxglove/schemas";
const myPoint: Point2 = { x: 1, y: 2 };
```

在处理 JavaScript WebSocket 或 MCAP 项目，或在 coScene 的[用户脚本面板](插入文章链接)中编写自定义数据转换脚本时，请导入这些类型。