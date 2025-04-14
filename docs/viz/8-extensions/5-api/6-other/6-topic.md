---
sidebar_position: 6
---

# Topic

```typescript
type Topic = object;
```

Topic 是一个命名的消息通道。

## 属性

### name

```typescript
name: string;
```

主题名称，例如 "/some/topic"

### ~~datatype~~

```typescript
datatype: string;
```

#### 已弃用

已重命名为 `schemaName`。`datatype` 将在未来版本中移除。

### schemaName

```typescript
schemaName: string;
```

schema 名称是此主题上消息类型的标识符。通常这是消息 schema 的完全限定名称。完全限定名称取决于数据源和由数据源加载的数据。

例如，在 protobuf 类序列化中的 `package.Message` 或在 ROS 系统中的 `pkg/Msg`。

### convertibleTo?

```typescript
optional convertibleTo: readonly string[];
```

列出主题订阅者可用的任何其他 schema 名称。订阅主题时，面板可以使用 Subscription.convertTo 选项请求消息自动从 schemaName 转换为 convertibleTo 中的一个 schema。 