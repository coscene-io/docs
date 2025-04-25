---
sidebar_position: 2
title: 内置类型
---

# 内置类型

基本类型是 coScene 所支持消息消息架构的构建基础。

消息中的每个字段都有一个类型。这个类型可以是另一个消息架构类型，一个枚举，或以下列出的基本类型之一：

### `boolean`
布尔值，取值为 `true` 或 `false`。

### `bytes`
原始二进制数据，在 JavaScript 中表示为 `Uint8Array`。

### `enum`
作为命名常量集合中充当键的数字。

### `float64`
64 位浮点数。

### `string`
以 UTF-8 编码的字符串值。

### `time`

| 字段 | 类型   | 必填 | 描述                 |
|------|--------|------|----------------------|
| `sec`  | uint32 | ✓    | 自 Unix 纪元起的秒数 |
| `nsec` | uint32 | ✓    | 附加的纳秒数         |

> **注意：** 

coScene 的 Protobuf schema 中使用 [`google.protobuf.Timestamp`](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp) 表示 `time` 类型，其中字段为 `seconds` 和 `nanos`。但在[用户脚本](/)、[消息转换器](/)和 coScene 其他部分中，值将表示为 `sec` 和 `nsec` 字段，以与其他数据格式保持一致。

### `duration`

| 字段 | 类型   | 必填 | 描述                   |
|------|--------|------|------------------------|
| sec  | int32  | ✓    | 秒数偏移               |
| nsec | uint32 | ✓    | 向正方向的纳秒偏移量   |

> **注意：** 

coScene 的 Protobuf schema 中使用 [`google.protobuf.Duration`](https://protobuf.dev/reference/protobuf/google.protobuf/#duration) 表示 `duration` 类型，其中字段为 `seconds` 和 `nanos`。但在[用户脚本](/)、[消息转换器](/)和 coScene 其他部分中，值将表示为 `sec` 和 `nsec` 字段，以与其他数据格式保持一致。

### `uint32`
取值范围为 `0` 到 `4294967295`（ 2 的 32 次方减 1） 的非负整数。

### `int32`
取值范围为 `-2147483648`（ −2的 31 次方 ） 到 `2147483647` （ 2 的 31 次方减 1） 的整数。
