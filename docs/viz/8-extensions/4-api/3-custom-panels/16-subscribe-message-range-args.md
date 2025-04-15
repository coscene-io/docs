---
sidebar_position: 16
---

# SubscribeMessageRangeArgs

```typescript
type SubscribeMessageRangeArgs = object;
```

此类型表示传递给 PanelExtensionContext.subscribeMessageRange 的参数。

## 属性

### topic

```typescript
topic: string;
```

要订阅的主题。

---

### convertTo?

```typescript
optional convertTo: string;
```

在传递给订阅者之前将消息转换为此模式。

订阅的 MessageEvents 将包含转换后的消息和一个包含原始消息事件的 `originalMessageEvent` 字段。如果未指定 `convertTo` 模式，则不会使用任何消息转换器。如果没有将原始模式转换为 `convertTo` 模式的消息转换器，则不会为此订阅传递任何消息。

---

### onNewRangeIterator()

```typescript
onNewRangeIterator: (batchIterator) => Promise<void>;
```

`onNewRangeIterator` 是一个函数，当订阅上有消息数据可用时，它会接收一个异步可迭代对象。

要读取消息，您的函数应该遍历提供的异步可迭代对象。可迭代对象的每个项目都是订阅主题的消息事件批次。这些批次和消息按_日志时间_顺序排列。当没有更多消息可读时，迭代器将结束。

```typescript
async function onNewRangeIterator(batchIterator) {
  for await (const batch of batchIterator) {
    //...
  }
}
```

当上游主题数据发生变化时，会再次调用 `onNewRangeIterator`。例如，订阅用户脚本输出主题时用户脚本发生变化，或订阅别名主题时别名发生变化。当主题数据发生变化时，之前的迭代器将结束，其数据不再有效。当调用 `onNewRangeIterator` 时，您应该丢弃之前接收的数据。

如果您的 `onNewRangeIterator` 函数抛出错误，迭代器将结束，在再次调用 `onNewRangeIterator` 之前，您将不会收到任何更多消息。您的错误将显示在问题侧边栏中，以便用户查看。

#### 参数

| 参数          | 类型                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| batchIterator | AsyncIterable\<[Immutable](../6-other/2-immutable.md)\<[MessageEvent](../6-other/1-app-setting-value.md)\[\]\>\> |

#### 返回

`Promise`\<`void`\>

---

### ~~onReset()?~~

```typescript
optional onReset: (batchIterator) => Promise<void>;
```

#### 参数

| 参数          | 类型                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| batchIterator | AsyncIterable\<[Immutable](../6-other/2-immutable.md)\<[MessageEvent](../6-other/1-app-setting-value.md)\[\]\>\> |

#### 返回

`Promise`\<`void`\>

#### 已弃用

此方法已重命名。使用 `onNewRangeIterator`。 