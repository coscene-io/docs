---
sidebar_position: 5
---

# Time

```typescript
type Time = object;
```

具有纳秒精度的时间戳。

时间戳通常是自 UNIX 纪元以来的纳秒数，但可能相对于其他事件（如系统启动时间或模拟开始时间），具体取决于上下文。

## 属性

### sec

```typescript
sec: number;
```

---

### nsec

```typescript
nsec: number;
``` 