---
sidebar_position: 1
---

# ExtensionContext

The first parameter of the `activate` function is `ExtensionContext` — this context allows you to extend the visualization to support custom workflows.

```typescript
export function activate(extensionContext: ExtensionContext) {
  // ... call methods on extensionContext to extend the visualization
}
```

## Methods

### registerPanel()

```typescript
registerPanel(params): void
```

`registerPanel` adds a new panel to the visualization interface. To register a panel, you need to provide a `name` and an `initPanel` function.

The `initPanel` function accepts a `PanelExtensionContext` parameter, which contains properties and methods for accessing panel data and rendering UI updates. It also returns an optional cleanup function that runs when the extension `panelElement` is unmounted.

For more information, see the [Creating Custom Panels](/docs/viz/extensions/guides/create-custom-panel) guide.

#### Parameters

| Parameter | Type                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| params    | [ExtensionPanelRegistration](/docs/viz/extensions/api/custom-panels/extension-panel-registration) |

#### Returns

`void`

---

### registerMessageConverter()

```typescript
registerMessageConverter<Src>(args): void
```

`registerMessageConverter` registers a function to convert messages from one schema to another.

Message converters allow you to leverage the visualization's built-in visualization panels by converting messages to formats that match the schemas supported by the visualization — for example, you can convert custom GPS messages to `foxglove.LocationFix` messages for visualization in the map panel.

The converter function runs on the original message and outputs the converted message whenever a panel subscribes to a topic using the `convertTo` option. The converted message is then provided to the panel. If the function returns `undefined`, the output is ignored and no message is provided to the panel. This is useful when you want to selectively output converted messages based on the content of the input message.

For more information, see the [Creating Message Converters](/docs/viz/extensions/guides/create-message-converter) guide.

#### Type Parameters

| Type Parameter |
| -------------- |
| `Src`          |

#### Parameters

| Parameter | Type                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| args      | [RegisterMessageConverterArgs](/docs/viz/extensions/api/custom-panels/extension-panel-registration)`\<Src\>` |

#### Returns

`void`

---

### registerTopicAliases()

```typescript
registerTopicAliases(aliasFunction): void
```

`registerTopicAliases` registers a function to compute topic aliases. The provided alias function should accept a parameter containing two fields — `topics` (containing the data source's original topics) and `globalVariables` (containing the current layout's variables) — and return a list of alias topics.

Your alias function runs whenever the data source topics or variables change. Any aliases it returns are added to the data source topics (replacing any previously returned aliases) and can be used for subscriptions or in message paths just like real topics.

#### Parameters

| Parameter     | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| aliasFunction | [TopicAliasFunction](/docs/viz/extensions/api/topic-aliases/topic-alias-function) |

#### Returns

`void`
