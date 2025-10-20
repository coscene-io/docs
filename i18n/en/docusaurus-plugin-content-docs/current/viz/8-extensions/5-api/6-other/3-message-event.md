---
sidebar_position: 3
title: MessageEvent<T>
---

# MessageEvent\<T\>

```typescript
type MessageEvent<T> = object;
```

MessageEvent represents a single message and its metadata.

Remember to import MessageEvent from `@coscene/extension`. This is different from the DOM MessageEvent class.

## Type Parameters

| Type Parameter | Default Type |
| -------------- | ------------ |
| T              | unknown      |

## Properties

### topic

```typescript
topic: string;
```

The name of the topic on which this message was received, e.g. "/some/topic"

---

### schemaName

```typescript
schemaName: string;
```

schemaName is the identifier for the message schema in the message event.

---

### receiveTime

```typescript
receiveTime: Time;
```

The time (in nanoseconds) at which this message was received. This may be set by the local system clock or by the data source, depending on the data source being used and whether time is being simulated via a /clock topic or similar mechanism. Timestamps are typically nanoseconds since the UNIX epoch, but may be relative to another event (such as system start time or simulation start time) depending on context.

---

### publishTime?

```typescript
optional publishTime: Time;
```

The time (in nanoseconds) at which this message was originally published. This is only available in some data sources. Timestamps are typically nanoseconds since the UNIX epoch, but may be relative to another event (such as system start time or simulation start time) depending on context.

---

### message

```typescript
message: T;
```

The deserialized message as a JavaScript object.

---

### sizeInBytes

```typescript
sizeInBytes: number;
```

The approximate size of this message event in its deserialized form. This is useful for statistics tracking and cache eviction.

---

### originalMessageEvent?

```typescript
optional originalMessageEvent: MessageEvent;
```

When subscribing to a topic with a `convertTo` option, the message event's `message` contains the converted message, and the `originalMessageEvent` field contains the original unconverted message event.
