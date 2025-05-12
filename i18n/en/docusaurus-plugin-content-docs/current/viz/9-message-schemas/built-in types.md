---
sidebar_position: 2
title: Built-in Types
---

# Built-in Types

Built-in types are the building blocks of coScene's message schemas.

Each field in a message has a type. This type can be another message schema type, an enum, or one of the following built-in types:

### `boolean`

A boolean value, which can be `true` or `false`.

### `bytes`

Raw binary data, represented as a `Uint8Array` in JavaScript.

### `enum`

An enum, which is a set of named constants.

### `float64`

A 64-bit floating-point number.

### `string`

A string value encoded in UTF-8.

### `time`

| Field  | Type   | Required | Description                  |
| ------ | ------ | -------- | ---------------------------- |
| `sec`  | uint32 | ✓        | Seconds since the Unix epoch |
| `nsec` | uint32 | ✓        | Additional nanoseconds       |

> **Note**:

coScene's Protobuf schema uses [`google.protobuf.Timestamp`](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp) to represent the `time` type, with fields `seconds` and `nanos`. However, in [user scripts](/), [message converters](/), and other parts of coScene, the values will be represented as `sec` and `nsec` fields to maintain consistency with other data formats.

### `duration`

| Field | Type   | Required | Description                   |
| ----- | ------ | -------- | ----------------------------- |
| sec   | int32  | ✓        | Seconds offset                |
| nsec  | uint32 | ✓        | Additional nanoseconds offset |

> **Note**:

coScene's Protobuf schema uses [`google.protobuf.Duration`](https://protobuf.dev/reference/protobuf/google.protobuf/#duration) to represent the `duration` type, with fields `seconds` and `nanos`. However, in [user scripts](/), [message converters](/), and other parts of coScene, the values will be represented as `sec` and `nsec` fields to maintain consistency with other data formats.

### `uint32`

A non-negative integer ranging from `0` to `4294967295` (2^32 - 1).

### `int32`

An integer ranging from `-2147483648` (2^31) to `2147483647` (2^31 - 1).
