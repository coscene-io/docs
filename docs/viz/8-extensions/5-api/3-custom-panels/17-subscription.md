---
sidebar_position: 17
---

# Subscription

```typescript
type Subscription = object;
```

传递给 `PanelExtensionContext.subscribe` 的单个订阅。

## 属性

### topic

```typescript
topic: string;
```

---

### convertTo?

```typescript
optional convertTo: string;
```

如果一个主题有额外的 schema 名称，指定 schema 名称将使用注册的消息转换器将该主题上的消息转换为 convertTo schema。该订阅的 MessageEvents 将包含转换后的消息和一个包含原始消息事件的 originalMessageEvent 字段。

---

### ~~preload?~~

```typescript
optional preload: boolean;
```

将 preload 设置为 _true_ 提示数据源应该尝试加载该主题的所有可用消息。默认行为是只加载当前帧的消息。

**只有** 设置了 `preload: true` 的主题才能在 `allFrames` 渲染状态中使用。

#### 已弃用

请使用 `PanelExtensionContext.subscribeMessageRange` 代替。 