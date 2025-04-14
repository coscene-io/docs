---
sidebar_position: 4
---

# RenderState

```typescript
type RenderState = object;
```

RenderState 是传递给面板 `onRender` 函数的信息。

要接收 RenderState 特定部分的更新，你必须先调用 `watch` 函数并指定字段名。例如，调用 `watch("currentTime")` 来接收 `currentTime` 的更新。

如果 RenderState 中缺少某个字段，可能是因为该值自上次调用 `onRender` 以来没有变化，或者你没有对该字段进行 `watch`。

## 属性

### currentFrame?

```typescript
optional currentFrame: MessageEvent[];
```

当前渲染帧的最新消息。这些是自上一个渲染帧以来的新消息。

---

### didSeek?

```typescript
optional didSeek: boolean;
```

如果数据源执行了跳转操作，则为 true。这表示某些数据可能被跳过（从未出现在 `currentFrame` 中），因此面板应清除任何过时的状态，以避免显示错误的数据。

---

### ~~allFrames?~~

```typescript
optional allFrames: MessageEvent[];
```

所有可用的消息。 尽可能列出所有可用消息。

#### 已弃用

请使用 PanelExtensionContext.subscribeMessageRange 代替。

---

### parameters?

```typescript
optional parameters: Map<string, ParameterValue>;
```

当前参数值的映射。参数是与数据源关联的键/值对，可能并非所有数据源都支持参数。例如，ROS 1 实时连接通过参数服务器支持参数。

---

### sharedPanelState?

```typescript
optional sharedPanelState: Record<string, unknown>;
```

同一类型面板之间共享的临时面板状态。这可以是面板作者希望在面板之间共享的任何数据。

---

### variables?

```typescript
optional variables: Map<string, VariableValue>;
```

当前 Studio 变量的映射。变量是键/值对，在当前布局中可被面板和脚本全局访问。有关更多信息，请参见 [变量文档](https://docs.foxglove.dev/docs/visualization/variables)。

---

### topics?

```typescript
optional topics: Topic[];
```

可用主题的列表。此列表包括已订阅和未订阅的主题。

---

### currentTime?

```typescript
optional currentTime: Time;
```

表示当前播放时间的时间戳值。

---

### startTime?

```typescript
optional startTime: Time;
```

当前数据源播放范围的开始时间戳。对于离线文件，预计会存在此值。对于实时连接，根据数据源的不同，开始时间可能存在也可能不存在。

---

### endTime?

```typescript
optional endTime: Time;
```

当前数据源播放范围的结束时间戳。对于离线文件，预计会存在此值。对于实时连接，根据数据源的不同，结束时间可能存在也可能不存在。

---

### previewTime?

```typescript
optional previewTime: number;
```

表示预览时间的秒数值。当用户悬停在搜索栏上或面板明确设置预览时间时，会设置预览时间。预览时间是播放范围内的秒数值。

例如，当用户悬停在图表上时，图表面板可能会设置预览时间，以向其他面板发出信号，表明用户当前悬停的位置，并允许它们相应地渲染。

---

### colorScheme?

```typescript
optional colorScheme: "dark" | "light";
```

当前在整个应用程序中使用的配色方案。

---

### appSettings?

```typescript
optional appSettings: Map<string, AppSettingValue>;
```

应用程序设置。这将只包含使用 @PanelExtensionContext.subscribeAppSettings 订阅的键/值。
