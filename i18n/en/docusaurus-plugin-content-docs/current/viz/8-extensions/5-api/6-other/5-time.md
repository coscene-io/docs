---
sidebar_position: 5
---

# Time

```typescript
type Time = object;
```

A timestamp with nanosecond precision.

Timestamps are typically nanoseconds since the UNIX epoch, but may be relative to another event (such as system start time or simulation start time) depending on context.

## Properties

### sec

```typescript
sec: number;
```

---

### nsec

```typescript
nsec: number;
```
