---
sidebar_position: 3
---

# PanelExtensionContext

```
type PanelExtensionContext = object;
```

`PanelExtensionContext` 暴露了用于编写自定义面板的属性和方法。上下文提供了订阅消息、接收更新、配置面板设置以及将面板渲染到 UI 的方法。

`registerPanel` 中使用的 `initPanel` 函数接受一个 `PanelExtensionContext` 参数。该参数包含用于访问面板数据和渲染 UI 更新的属性和方法。`initPanel` 函数还可以返回一个可选的清理函数，当扩展的 `panelElement` 卸载时运行。

有关详细信息，请参阅[创建自定义面板指南](/docs/panels/custom-panels)。

## 属性

### panelElement

```
readonly panelElement: HTMLDivElement;
```

面板的根元素。将面板元素作为子元素添加到此元素下。

---

### initialState

```
readonly initialState: unknown;
```

初始面板状态

---

### layout

```
readonly layout: LayoutActions;
```

面板可以执行的与用户当前布局相关的操作。有关详细信息，请参阅 [LayoutActions](/docs/panels/custom-panels/layout-actions)。

---

### dataSourceProfile?

```
readonly optional dataSourceProfile: string;
```

标识正在播放的数据的语义，例如哪些主题或参数在语义上有意义，或者使用哪些规范化约定。这通常映射到机器人框架的简写标识符，如 "ros1"、"ros2" 或 "ulog"。有关详细信息，请参阅 [MCAP profiles 概念](https://mcap.dev/spec/registry#well-known-profiles)。

---

### onRender()?

```
optional onRender: (renderState, done) => void;
```

在面板初始化期间将此属性设置为函数。

可视化将在播放期间需要重新渲染面板时运行 `context.onRender`。该函数接受 `renderState` 和 `done` 回调作为参数。渲染事件频繁发生（60hz、30hz 等）。

**注意**：您的 `onRender` 函数**必须**在渲染后调用 `done`，以指示面板已准备好渲染下一组数据。`done` 调用的确切位置将因框架和不同扩展的逻辑而异。

```
context.onRender = (renderState, done) => {
  // 使用 RenderState 中的字段渲染 UI 更新

  // 当您已为此 renderState 渲染完所有 UI 时调用 done。
  // 如果您的 UI 框架延迟渲染，请在渲染实际发生后调用 done。
  done();
};
```

#### 参数

| 参数        | 类型                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| renderState | [Immutable](../6-other/2-immutable.md)\<[RenderState](../3-custom-panels/4-render-state.md)\> |
| done        | () => void                                                                                                  |

#### 返回

`void`

---

### subscribeMessageRange()?

```
optional subscribeMessageRange: (args) => () => void;
```

订阅以接收当前数据源的给定主题的整个时间范围的消息。

有关行为的详细信息，请参阅 [SubscribeMessageRangeArgs](../3-custom-panels/16-subscribe-message-range-args.md)。

注意：这不会读取实时源的消息，如 foxglove_bridge、rosbridge 或 ROS 1 原生连接。对于这些消息，您仍需要使用 `context.subscribe()` 和 `watch("currentFrame")`。

#### 参数

| 参数 | 类型                                                                               |
| ---- | ---------------------------------------------------------------------------------- |
| args | [SubscribeMessageRangeArgs](../3-custom-panels/16-subscribe-message-range-args.md) |

#### 返回

`Function`

一个函数，将取消订阅主题，取消活动的异步迭代器，并防止再次调用 onNewRangeIterator。

##### 返回

`void`

---

### ~~UNSTABLE_subscribeMessageRange()?~~

```
optional UNSTABLE_subscribeMessageRange: (args) => () => void;
```

#### 参数

| 参数 | 类型                                                                               |
| ---- | ---------------------------------------------------------------------------------- |
| args | [SubscribeMessageRangeArgs](../3-custom-panels/16-subscribe-message-range-args.md) |

#### 返回

`Function`

##### 返回

`void`

#### 已弃用

已重命名为 `subscribeMessageRange`。请改用该方法。

## 方法

### watch()

#### 调用签名

```
watch(field): void
```

订阅渲染状态中此字段的更新。仅当此字段更改时才会调用渲染。

使用 `context.watch` 指示 RenderState 中的哪些字段（例如 `currentFrame`、`currentTime`、`previewTime`、`parameters`、`topics`）在包含的值更改时应触发面板重新渲染。

```
context.watch("topics");
context.watch("currentFrame");
context.watch("parameters");
context.watch("currentTime");
```

##### 参数

| 参数  | 类型                                                         |
| ----- | ------------------------------------------------------------ |
| field | keyof [RenderState](../3-custom-panels/4-render-state.md) |

##### 返回

`void`

#### 调用签名

```
watch(field): void
```

订阅渲染状态中此字段的更新。仅当此字段更改时才会调用渲染。

##### 参数

| 参数  | 类型        |
| ----- | ----------- |
| field | "allFrames" |

##### 返回

`void`

##### 已弃用

使用 `allFrames` 调用 `watch` 已弃用。请改用 PanelExtensionContext.subscribeMessageRange。

---

### saveState()

```
saveState(state): void
```

使用 `context.saveState` 将任意对象作为持久化面板状态（也称为面板设置）保存在当前布局中。您可以使用[导入/导出设置](/docs/panels/custom-panels/import-export-settings)查看当前面板状态。

```
context.initialState = undefined; // 面板的初始状态

context.saveState({ myNum: 2, myBool: false, myStr: "abc" });
```

#### 参数

| 参数  | 类型              | 描述                                                |
| ----- | ----------------- | --------------------------------------------------- |
| state | Partial\<unknown\> | 要保存的状态。此值应该是 JSON 可序列化的。          |

#### 返回

`void`

---

### setParameter()

```
setParameter(name, value): void
```

使用 `context.setParameter` 将参数 `name` 设置为任何有效的 `value`（即基本类型、日期、`Uint8Array` 以及包含这些值的数组或对象）。

```
context.setParameter("/param1", "value1");
```

#### 参数

| 参数  | 类型                                                         | 描述                       |
| ----- | ------------------------------------------------------------ | -------------------------- |
| name  | string                                                       | 要设置的参数的名称。       |
| value | [ParameterValue](../6-other/4-parameter-value.md) | 参数的新值。               |

#### 返回

`void`

---

### setSharedPanelState()

```
setSharedPanelState(state): void
```

设置由调用此函数的同一类型面板共享的临时状态。这不会保存在布局中。

#### 参数

| 参数  | 类型                                  |
| ----- | ------------------------------------- |
| state | undefined \| Record\<string, unknown\> |

#### 返回

`void`

---

### setVariable()

```
setVariable(name, value): void
```

使用 `context.setVariable` 将变量 `name` 设置为任何有效的变量 `value`。

```
context.setVariable("myVar", 55);

context.onRender = (renderState: RenderState, done) => {
  // 从 renderState 读取变量值
  const variableValues = renderState.variables;
  const myVarValue = variableValues.myVar;

  // 当您已为此 renderState 渲染完所有 UI 时调用 done。如果您的 UI 框架延迟渲染，请在渲染实际发生后调用 done。
  done();
};
```

#### 参数

| 参数  | 类型                                                       | 描述                      |
| ----- | ---------------------------------------------------------- | ------------------------- |
| name  | string                                                     | 要设置的变量的名称。      |
| value | [VariableValue](../6-other/8-variable-value.md) | 变量的新值。              |

#### 返回

`void`

---

### setPreviewTime()

```
setPreviewTime(time): void
```

设置活动预览时间。将预览时间设置为 undefined 会清除预览时间。

#### 参数

| 参数 | 类型                |
| ---- | ------------------- |
| time | undefined \| number |

#### 返回

`void`

---

### seekPlayback()?

```
optional seekPlayback(time): void
```

将播放定位到给定时间。行为就像用户点击了播放栏进行定位一样。

#### 参数

| 参数 | 类型   |
| ---- | ------ |
| time | number |

#### 返回

`void`

---

### subscribe()

```
subscribe(topic, options): () => void
```

使用 `context.subscribe` 订阅主题以接收消息。返回一个取消订阅函数，当不再需要消息时调用该函数。

```
const unsubscribe = context.subscribe("/my_topic", {
  preload: true,
});

// 稍后取消订阅
unsubscribe();
```

#### 参数

| 参数    | 类型                                                                               | 描述                                                                 |
| ------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| topic   | string                                                                             | 要订阅的主题名称。                                                   |
| options | [SubscribeOptions](../3-custom-panels/17-subscription.md) \| undefined | 订阅选项。有关详细信息，请参阅 [SubscribeOptions](../3-custom-panels/17-subscription.md)。 |

#### 返回

`Function`

一个函数，调用时将取消订阅主题。

---

### unsubscribeAll()

```
unsubscribeAll(): void
```

取消订阅所有主题。

```
context.unsubscribeAll();
```

#### 返回

`void`

---

### subscribeAppSettings()

```
subscribeAppSettings(): () => void
```

使用 `context.subscribeAppSettings` 订阅应用程序设置更新。返回一个取消订阅函数，当不再需要设置更新时调用该函数。

```
const unsubscribe = context.subscribeAppSettings();

// 稍后取消订阅
unsubscribe();
```

#### 返回

`Function`

一个函数，调用时将取消订阅应用程序设置更新。

---

### advertise()?

```
optional advertise(topic, datatype, options): void
```

使用 `context.advertise` 在主题上发布消息。这必须在使用 `context.publish` 发布消息之前调用。

```
context.advertise("/my_topic", "std_msgs/String");
```

#### 参数

| 参数     | 类型                                                                               | 描述                                                                 |
| -------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| topic    | string                                                                             | 要发布消息的主题名称。                                               |
| datatype | string                                                                             | 消息的数据类型。                                                     |
| options  | Record\<string, unknown\> | 发布选项。有关详细信息，请参阅 [AdvertiseOptions](/extension-api/type-aliases/AdvertiseOptions)。 |

#### 返回

`void`

---

### unadvertise()?

```
optional unadvertise(topic): void
```

指示您不再想在此主题上发布。

```
context.unadvertise("/my_image_topic");
```

如果当前数据源不支持发布，此属性可能为 `undefined`。

#### 参数

| 参数  | 类型   |
| ----- | ------ |
| topic | string |

#### 返回

`void`

---

### publish()?

```
optional publish(topic, message): void
```

使用 `context.publish` 在之前发布的主题上发布消息。（您必须先调用 advertise 来发布主题，然后才能发布。）如果主题未发布或以其他方式格式不正确，该函数将抛出错误。

```
context.advertise("/my_color_topic", "std_msgs/ColorRGBA");
context.publish("/my_color_topic", { r: 0, g: 1, b: 0, a: 1 });
```

如果当前数据源不支持发布，此属性可能为 `undefined`。

#### 参数

| 参数    | 类型    | 描述                                     |
| ------- | ------- | ---------------------------------------- |
| topic   | string  | 要发布消息的主题名称                     |
| message | unknown | 要发布的消息                             |

#### 返回

`void`

---

### callService()?

```
optional callService(service, request): Promise<unknown>
```

使用 `context.callService` 向指定的 `service` 发送服务调用，并带有请求负载。

```
context.callService("my_service", { foo: "bar" });
```

如果当前数据源不支持服务，此属性可能为 `undefined`。

#### 参数

| 参数    | 类型    | 描述                              |
| ------- | ------- | --------------------------------- |
| service | string  | 要调用的服务名称                  |
| request | unknown | 服务调用的请求负载                |

#### 返回

`Promise`\<`unknown`\>

一个 Promise，当结果可用时解析，或在出错时拒绝

---

### updatePanelSettingsEditor()

```
updatePanelSettingsEditor(settings): void
```

在面板的 PanelExtensionContext 实例上调用 `updatePanelSettingsEditor` 方法，以定义或更新其设置。

```
const panelSettings: SettingsTree = {
  nodes: { ... },
  actionHandler: (action: SettingsTreeAction) => { ... }
};

context.updatePanelSettingsEditor(panelSettings);
```

`settings` 参数必须是有效的 SettingsTree，并包含 2 个必需的属性 – `nodes` 和 `actionHandler`：

* `nodes` - 层次结构，其中每个节点可以包含输入字段、显示字段，甚至其他节点
* `actionHandler` - 当用户与设置 UI 交互时调用的函数；包含处理交互和更新面板或设置树的逻辑

它还可以包含以下可选属性：

* `enableFilter` – 设置是否应显示过滤器控件
* `focusedPath` – 要滚动到的节点（临时一次性效果）

下面的示例树在 `General` 部分内有一个 `title` 文本输入字段，以及一个 `actionHandler` 来响应 `title` 字段的更新。

```
const panelSettings: SettingsTree = {
  nodes: {
    general: {
      label: "General",
      fields: {
        title: {
          label: "Title",
          input: "string",
          // `panelTitle` 指的是扩展面板配置中的值
          value: panelTitle,
        },
      },
    },
  },
  actionHandler: (action: SettingsTreeAction) => {
    switch (action.action) {
      case "perform-node-action":
        // 处理用户在设置树中为节点定义的操作
        break;
      case "update":
        if (action.payload.path[0] === "general" && action.payload.path[1] === "title") {
          // 读取 action.payload.value 获取新的面板标题值
          panelTitle = action.payload.value;

          // 相应地更新面板状态
        }
        break;
    }
  },
}

context.updatePanelSettingsEditor(panelSettings);
```

#### `SettingsTreeAction`

SettingsTreeAction 描述了当用户与其字段交互时设置 UI 应如何更新。

每个 `SettingsTreeAction` 都有一个带有 `path` 的 `payload`，指向要更新的设置字段（例如 `["general", "title"]`）。

`update` 操作对应于用户为字段设置新值（例如 "My new title"）。

#### 特殊节点属性

有两个特殊的 SettingsTreeNode 属性，`label` 和 `visibility`。您为 `label` 指定的值将控制设置编辑器中显示的标签。如果您将 `renamable` 节点属性设置为 `true`，用户可以编辑节点 `label` – 您将收到一个 `update` 的 `SettingsTreeAction`，路径以 `label` 结尾。

此外，如果您为节点的 `visibility` 指定布尔值，则设置编辑器将提供一个按钮来切换节点的可见性，并且您将收到一个 `update` 操作，路径以 `visibility` 作为最终元素。

有关如何使用这些特殊属性的示例，请查看面板设置示例扩展。

#### 输入类型

除了上面示例中的 `string` 输入类型外，面板 API 还为扩展面板输入字段提供了多种类型。

每种输入类型都有不同的属性，您可以配置：

* `autocomplete`
* `boolean`
* `rgb`
* `rgba`
* `gradient`
* `messagepath`
* `select`
* `string`
* `toggle`
* `vec3`
* `vec2`

#### 参数

| 参数              | 类型                                                                                                     | 描述                                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| settings          | \{ actionHandler: (action) => void; enableFilter: boolean; focusedPath: readonly string\[\]; nodes: \{\}; \} | -                                                                                                                                                                                    |
| settings.actionHandler | (action) => void                                                                                         | 处理由 UI 发起的设置树上的所有操作的处理程序。                                                                                                                                    |
| settings.enableFilter? | boolean                                                                                                  | 如果设置编辑器应显示过滤器控件，则为 true。                                                                                                                                         |
| settings.focusedPath?  | readonly string\[\]                                                                                      | 设置这将具有一次性效果，滚动编辑器到路径处的节点并高亮显示它。这是一个临时效果，因此不需要随后取消设置。                                                                          |
| settings.nodes         | {}                                                                                                       | 设置树根节点。对这些的更新将自动反映在编辑器 UI 中。                                                                                                                                |

#### 返回

`void`

---

### setDefaultPanelTitle()

```
setDefaultPanelTitle(defaultTitle): void
```

使用 `context.setDefaultPanelTitle` 覆盖面板的默认标题。用户始终可以通过手动编辑来覆盖默认标题。如果未设置覆盖或默认标题，面板将仅显示其类型（例如 "Image"）。

```
// 覆盖默认面板标题
context.setDefaultPanelTitle(`Plot of ${config.topicName}`);
```

#### 参数

| 参数        | 类型                |
| ----------- | ------------------- |
| defaultTitle | undefined \| string |

#### 返回

`void`
