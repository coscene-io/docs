---
sidebar_position: 1
title: Introduction
---

# Introduction

coScene typically requires messages to follow specific structures for proper visualization. Using the [Foxglove Schema](https://github.com/foxglove/foxglove-sdk) allows you to take full advantage of the platform's built-in visualization capabilities.

## Supported Formats

- [Protobuf](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/proto/foxglove)
- [JSON Schema](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/jsonschema)
- [ROS 1](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/ros1)
- [ROS 2](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/ros2)
- [TypeScript](https://github.com/foxglove/foxglove-sdk/tree/main/typescript/schemas/src/types)
- [FlatBuffers](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/flatbuffer)

If you have written custom messages, you can use [Message Converter](../8-extensions/4-guides/2-create-message-converter.md) extensions to convert them into schemas supported by coScene.

## Protobuf and JSON Schema Types

Copy the required [`.proto` files](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/proto/foxglove) or [`.json` files](https://github.com/foxglove/foxglove-sdk/tree/main/schemas/jsonschema) directly into your project and publish data through the coScene WebSocket connection or record to [MCAP files](https://mcap.dev/).

**Note:**

For Protobuf data, time values of type [`google.protobuf.Timestamp`](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp) or [`google.protobuf.Duration`](https://protobuf.dev/reference/protobuf/google.protobuf/#duration) will be represented with `sec` and `nsec` fields instead of `seconds` and `nanos` in [User Scripts](/), [Message Converters](/), and other parts of coScene to maintain consistency with time and duration types in other data formats.

You can also import JSON schemas through the [`@foxglove/schemas` npm package](https://www.npmjs.com/package/@foxglove/schemas):

```typescript
import { CompressedImage } from '@foxglove/schemas/jsonschema';
```

We provide WebSocket libraries for real-time data ([Python](https://github.com/foxglove/ws-protocol/tree/main/python), [JavaScript](https://github.com/foxglove/ws-protocol/tree/main/typescript/ws-protocol-examples), [C++](https://github.com/foxglove/ws-protocol/tree/main/cpp)), as well as MCAP writers for pre-recorded data files ([Python](https://github.com/foxglove/mcap/tree/main/python), [JavaScript](https://github.com/foxglove/mcap/tree/main/typescript), [C++](https://github.com/foxglove/mcap/tree/main/cpp)).

See the example blog post about recording your Protobuf data using the MCAP C++ writer: [Recording Robocar Data with MCAP](https://foxglove.dev/blog/recording-robocar-data-with-mcap).

## JSON Without Schema Type

MCAP supports writing JSON messages without specifying a schema type. To write JSON message data without a schema type, set the channel's message encoding to `json` and the schema type ID to 0. This indicates that the channel has no schema type. For details, see: [https://mcap.dev/spec#channel-op0x04](https://mcap.dev/spec#channel-op0x04)

## ROS

Install the `foxglove_msgs` package:

```bash
sudo apt install ros-noetic-foxglove-msgs # For ROS 1
sudo apt install ros-galactic-foxglove-msgs # For ROS 2
```

Then, import the required schemas in your ROS project to start publishing data:

```python
from foxglove_msgs.msg import Vector2

msg = Vector2()
msg.x = 0.5
msg.y = 0.7
```

## TypeScript

Import coScene message schemas as TypeScript types for type checking.

In coScene's [User Script Panel](/), you can specify the required schema type using `Message<"foxglove.[SchemaName]">`:

```typescript
import { Input, Message } from './types';

type Output = Message<'foxglove.Point2'>;

export const inputs = ['/input/topic'];
export const output = '/studio_script/output_topic';

export default function script(event: Input<'/input/topic'>): Output {
  return { x: 1, y: 2 };
}
```

For your own TypeScript projects, you can import types directly from the [@foxglove/schemas](https://www.npmjs.com/package/@foxglove/schemas) npm package:

```typescript
import { Point2 } from '@foxglove/schemas';
const myPoint: Point2 = { x: 1, y: 2 };
```

Import these types when working with JavaScript WebSocket or MCAP projects, or when writing custom data transformation scripts in coScene's User Script Panel.
