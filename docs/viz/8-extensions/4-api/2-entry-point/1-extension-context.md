---
sidebar_position: 1
---

# ExtensionContext

`activate` 函数的第一个参数是 `ExtensionContext` — 这个上下文允许你扩展可视化以支持自定义工作流。

```typescript
export function activate(extensionContext: ExtensionContext) {
  // ... 调用 extensionContext 上的方法来扩展可视化
}
```

## 方法

### registerPanel()

```typescript
registerPanel(params): void
```

`registerPanel` 向可视化界面添加一个新的面板。要注册一个面板，你需要提供一个 `name` 和一个 `initPanel` 函数。

`initPanel` 函数接受一个 `PanelExtensionContext` 参数，该参数包含用于访问面板数据和渲染 UI 更新的属性和方法。它还返回一个可选的清理函数，在扩展 `panelElement` 卸载时运行。

有关详细信息，请参阅[创建自定义面板](../../guides/create-custom-panel)指南。

#### 参数

| 参数   | 类型                                                                                 |
| ------ | ------------------------------------------------------------------------------------ |
| params | [ExtensionPanelRegistration](../custom-panels/extension-panel-registration) |

#### 返回值

`void`

---

### registerMessageConverter()

```typescript
registerMessageConverter<Src>(args): void
```

`registerMessageConverter` 注册一个函数，用于将消息从一种模式转换为另一种模式。

消息转换器允许你通过将消息转换为符合 Foxglove 支持的模式的格式，来利用 Foxglove 的内置可视化面板 — 例如，你可以将自定义的 GPS 消息转换为 `foxglove.LocationFix` 消息，以便在地图面板中可视化。

每当面板使用 `convertTo` 选项订阅主题时，转换器函数就会在原始消息上运行并输出转换后的消息，然后将其提供给面板。如果函数返回 `undefined`，则忽略输出，并且不会向面板提供消息。这在你想根据输入消息的内容选择性地输出转换后的消息时很有用。

有关详细信息，请参阅[创建消息转换器](/extension-api/guides/creating-message-converter)指南。

#### 类型参数

| 类型参数 |
| -------- |
| `Src`      |

#### 参数

| 参数 | 类型                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------- |
| args | [RegisterMessageConverterArgs](/extension-api/type-aliases/RegisterMessageConverterArgs)`\<Src\>` |

#### 返回值

`void`

---

### registerTopicAliases()

```typescript
registerTopicAliases(aliasFunction): void
```

`registerTopicAliases` 注册一个函数来计算主题别名。提供的别名函数应该接受一个包含两个字段的参数 — `topics`（包含数据源的原始主题）和 `globalVariables`（包含当前布局的变量）— 并返回一个别名主题列表。

每当数据源主题或变量发生变化时，你的别名函数就会运行。它返回的任何别名都会被添加到数据源主题中（替换之前返回的任何别名），并且可以像真实主题一样用于订阅或在消息路径中使用。

#### 参数

| 参数          | 类型                                                                 |
| ------------- | -------------------------------------------------------------------- |
| aliasFunction | [TopicAliasFunction](/extension-api/type-aliases/TopicAliasFunction) |

#### 返回值

`void` 