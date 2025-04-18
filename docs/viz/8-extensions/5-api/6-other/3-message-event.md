---
sidebar_position: 3
title: MessageEvent<T>
---

# MessageEvent\<T\>

```typescript
type MessageEvent<T> = object;
```

MessageEvent 表示单个消息及其元数据。

请记住从 `@coscene/extension` 导入 MessageEvent。这与 DOM MessageEvent 类不同。

## 类型参数

| 类型参数 | 默认类型 |
| -------------- | ------------ |
| T              | unknown      |

## 属性

### topic

```typescript
topic: string;
```

接收此消息的主题名称，例如 "/some/topic"

---

### schemaName

```typescript
schemaName: string;
```

schemaName 是消息事件中消息模式的标识符。

---

### receiveTime

```typescript
receiveTime: Time;
```

接收此消息的时间（纳秒）。这可能由本地系统时钟或数据源设置，具体取决于使用的数据源以及是否通过 /clock 主题或类似机制模拟时间。时间戳通常是自 UNIX 纪元以来的纳秒数，但可能相对于其他事件（如系统启动时间或模拟开始时间），具体取决于上下文。

---

### publishTime?

```typescript
optional publishTime: Time;
```

消息最初发布的时间（纳秒）。这仅在某些数据源中可用。时间戳通常是自 UNIX 纪元以来的纳秒数，但可能相对于其他事件（如系统启动时间或模拟开始时间），具体取决于上下文。

---

### message

```typescript
message: T;
```

反序列化后的消息作为 JavaScript 对象。

---

### sizeInBytes

```typescript
sizeInBytes: number;
```

此消息事件在其反序列化形式中的近似大小。这对于统计跟踪和缓存驱逐很有用。

---

### originalMessageEvent?

```typescript
optional originalMessageEvent: MessageEvent;
```

当使用 `convertTo` 选项订阅主题时，消息事件的 `message` 包含转换后的消息，而 `originalMessageEvent` 字段包含原始未转换的消息事件。 