---
sidebar_position: 3
---

# PanelExtensionContext

```typescript
type PanelExtensionContext = object;
```

`PanelExtensionContext` exposes properties and methods used for writing custom panels. The context provides methods for subscribing to messages, receiving updates, configuring panel settings, and rendering the panel to the UI.

The `initPanel` function used in `registerPanel` accepts a `PanelExtensionContext` parameter. This parameter contains properties and methods for accessing panel data and rendering UI updates. The `initPanel` function can also return an optional cleanup function that runs when the extension's `panelElement` unmounts.

For detailed information, see the [Creating Custom Panels Guide](../../../../category/extensions/custom-panels).

## Properties

### panelElement

```typescript
readonly panelElement: HTMLDivElement;
```

The root element of the panel. Add panel elements as children to this element.

---

### initialState

```typescript
readonly initialState: unknown;
```

The initial panel state.

---

### layout

```typescript
readonly layout: LayoutActions;
```

Actions that the panel can perform related to the user's current layout. See [LayoutActions](./2-layout-actions.md) for details.

---

### dataSourceProfile?

```typescript
readonly optional dataSourceProfile: string;
```

Identifies the semantics of the data being played, such as which topics or parameters are semantically meaningful, or which normalization conventions are used. This typically maps to a shorthand identifier for a robotics framework like "ros1", "ros2", or "ulog". See [MCAP profiles concept](https://mcap.dev/spec/registry#well-known-profiles) for details.

---

### onRender()?

```typescript
optional onRender: (renderState, done) => void;
```

Set this property to a function during panel initialization.

The visualization will run `context.onRender` when it needs to re-render the panel during playback. The function accepts `renderState` and `done` callback as parameters. Render events occur frequently (60hz, 30hz, etc.).

**Note**: Your `onRender` function **must** call `done` after rendering to indicate the panel is ready to render the next set of data. The exact placement of the `done` call will vary by framework and the logic of different extensions.

```typescript
context.onRender = (renderState, done) => {
  // Render UI updates using fields from RenderState

  // Call done when you have rendered all UI for this renderState.
  // If your UI framework delays rendering, call done after the rendering has actually occurred.
  done();
};
```

#### Parameters

| Parameter   | Type                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------- |
| renderState | [Immutable](../6-other/2-immutable.md)\<[RenderState](../3-custom-panels/4-render-state.md)\> |
| done        | () => void                                                                                    |

#### Returns

`void`

---

### subscribeMessageRange()?

```typescript
optional subscribeMessageRange: (args) => () => void;
```

Subscribe to receive messages for the entire time range of the given topic in the current data source.

See [SubscribeMessageRangeArgs](../3-custom-panels/16-subscribe-message-range-args.md) for details on behavior.

Note: This does not read messages from live sources like foxglove_bridge, rosbridge, or ROS 1 native connections. For those messages, you still need to use `context.subscribe()` and `watch("currentFrame")`.

#### Parameters

| Parameter | Type                                                                               |
| --------- | ---------------------------------------------------------------------------------- |
| args      | [SubscribeMessageRangeArgs](../3-custom-panels/16-subscribe-message-range-args.md) |

#### Returns

`Function`

A function that will unsubscribe from the topic, cancel the active async iterator, and prevent onNewRangeIterator from being called again.

##### Returns

`void`

---

### ~~UNSTABLE_subscribeMessageRange()?~~

```typescript
optional UNSTABLE_subscribeMessageRange: (args) => () => void;
```

#### Parameters

| Parameter | Type                                                                               |
| --------- | ---------------------------------------------------------------------------------- |
| args      | [SubscribeMessageRangeArgs](../3-custom-panels/16-subscribe-message-range-args.md) |

#### Returns

`Function`

##### Returns

`void`

#### Deprecated

Renamed to `subscribeMessageRange`. Please use that method instead.

## Methods

### watch()

#### Call Signature

```typescript
watch(field): void
```

Subscribe to updates for this field in the render state. It will only be called when this field changes.

Use `context.watch` to indicate which fields in the RenderState (such as `currentFrame`, `currentTime`, `previewTime`, `parameters`, `topics`) should trigger panel re-rendering when their values change.

```typescript
context.watch('topics');
context.watch('currentFrame');
context.watch('parameters');
context.watch('currentTime');
```

##### Parameters

| Parameter | Type                                                      |
| --------- | --------------------------------------------------------- |
| field     | keyof [RenderState](../3-custom-panels/4-render-state.md) |

##### Returns

`void`

#### Call Signature

```typescript
watch(field): void
```

Subscribe to updates for this field in the render state. It will only be called when this field changes.

##### Parameters

| Parameter | Type        |
| --------- | ----------- |
| field     | "allFrames" |

##### Returns

`void`

##### Deprecated

Calling `watch` with `allFrames` is deprecated. Please use PanelExtensionContext.subscribeMessageRange instead.

---

### saveState()

```typescript
saveState(state): void
```

Use `context.saveState` to persist any object as panel settings (also called panel settings) in the current layout.

```typescript
context.initialState = undefined; // The initial state of the panel

context.saveState({ myNum: 2, myBool: false, myStr: 'abc' });
```

##### Parameters

| Parameter | Type               | Description                                                |
| --------- | ------------------ | ---------------------------------------------------------- |
| state     | Partial\<unknown\> | The state to save. This value should be JSON serializable. |

##### Returns

`void`

---

### setParameter()

```typescript
setParameter(name, value): void
```

Use `context.setParameter` to set the parameter `name` to any valid `value` (i.e., basic types, dates, `Uint8Array`, and arrays or objects containing these values).

```typescript
context.setParameter('/param1', 'value1');
```

##### Parameters

| Parameter | Type                                              | Description                       |
| --------- | ------------------------------------------------- | --------------------------------- |
| name      | string                                            | The name of the parameter to set. |
| value     | [ParameterValue](../6-other/4-parameter-value.md) | The new value of the parameter.   |

##### Returns

`void`

---

### setSharedPanelState()

```typescript
setSharedPanelState(state): void
```

Set temporary state shared by the same type of panel calling this function. This will not be saved in the layout.

##### Parameters

| Parameter | Type                                   |
| --------- | -------------------------------------- |
| state     | undefined \| Record\<string, unknown\> |

##### Returns

`void`

---

### setVariable()

```typescript
setVariable(name, value): void
```

Use `context.setVariable` to set the variable `name` to any valid variable `value`.

```typescript
context.setVariable('myVar', 55);

context.onRender = (renderState: RenderState, done) => {
  // Read variable values from renderState
  const variableValues = renderState.variables;
  const myVarValue = variableValues.myVar;

  // Call done when you have rendered all UI for this renderState.
  // If your UI framework delays rendering, call done after the rendering has actually occurred.
  done();
};
```

##### Parameters

| Parameter | Type                                            | Description                      |
| --------- | ----------------------------------------------- | -------------------------------- |
| name      | string                                          | The name of the variable to set. |
| value     | [VariableValue](../6-other/8-variable-value.md) | The new value of the variable.   |

##### Returns

`void`

---

### setPreviewTime()

```typescript
setPreviewTime(time): void
```

Set active preview time. Setting preview time to undefined will clear the preview time.

##### Parameters

| Parameter | Type                |
| --------- | ------------------- |
| time      | undefined \| number |

##### Returns

`void`

---

### seekPlayback()?

```typescript
optional seekPlayback(time): void
```

Move playback to the given time. The behavior is like the user clicking the play bar to seek.

##### Parameters

| Parameter | Type   |
| --------- | ------ |
| time      | number |

##### Returns

`void`

---

### subscribe()

```typescript
subscribe(topic, options): () => void
```

Use `context.subscribe` to subscribe to a topic to receive messages. Returns an unsubscribe function that will be called when messages are no longer needed.

```typescript
const unsubscribe = context.subscribe('/my_topic', {
  preload: true,
});

// Unsubscribe later
unsubscribe();
```

##### Parameters

| Parameter | Type                                                                   | Description                                                                                                |
| --------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| topic     | string                                                                 | The name of the topic to subscribe to.                                                                     |
| options   | [SubscribeOptions](../3-custom-panels/17-subscription.md) \| undefined | Subscription options. For more information, see [SubscribeOptions](../3-custom-panels/17-subscription.md). |

##### Returns

`Function`

A function that will unsubscribe from the topic when called.

---

### unsubscribeAll()

```typescript
unsubscribeAll(): void
```

Unsubscribe from all topics.

```typescript
context.unsubscribeAll();
```

##### Returns

`void`

---

### subscribeAppSettings()

```typescript
subscribeAppSettings(): () => void
```

Use `context.subscribeAppSettings` to subscribe to application settings updates. Returns an unsubscribe function that will be called when settings updates are no longer needed.

```typescript
const unsubscribe = context.subscribeAppSettings();

// Unsubscribe later
unsubscribe();
```

##### Returns

`Function`

A function that will unsubscribe from application settings updates when called.

---

### advertise()?

```typescript
optional advertise(topic, datatype, options): void
```

Use `context.advertise` to publish messages on a topic. This must be called before using `context.publish` to publish messages.

```typescript
context.advertise('/my_topic', 'std_msgs/String');
```

##### Parameters

| Parameter  | Type                      | Description                                                              |
| ---------- | ------------------------- | ------------------------------------------------------------------------ |
| topic      | string                    | The name of the topic to publish messages on.                            |
| schemaName | string                    | The name of the pattern the published messages will follow.              |
| options    | Record\<string, unknown\> | Options to pass to the current data source for additional configuration. |

##### Returns

`void`

---

### unadvertise()?

```typescript
optional unadvertise(topic): void
```

Indicates that you no longer want to publish on this topic.

```typescript
context.unadvertise('/my_image_topic');
```

If the current data source does not support publishing, this property may be `undefined`.

##### Parameters

| Parameter | Type   |
| --------- | ------ |
| topic     | string |

##### Returns

`void`

---

### publish()?

```typescript
optional publish(topic, message): void
```

Use `context.publish` to publish messages on a topic that has been previously published. (You must first call advertise to publish the topic before you can publish.) If the topic has not been published or is otherwise incorrectly formatted, the function will throw an error.

```typescript
context.advertise('/my_color_topic', 'std_msgs/ColorRGBA');
context.publish('/my_color_topic', { r: 0, g: 1, b: 0, a: 1 });
```

If the current data source does not support publishing, this property may be `undefined`.

##### Parameters

| Parameter | Type    | Description                                   |
| --------- | ------- | --------------------------------------------- |
| topic     | string  | The name of the topic to publish messages on. |
| message   | unknown | The message to publish.                       |

##### Returns

`void`

---

### callService()?

```typescript
optional callService(service, request): Promise<unknown>
```

Use `context.callService` to send a service call to the specified `service` with a request payload.

```typescript
context.callService('my_service', { foo: 'bar' });
```

If the current data source does not support services, this property may be `undefined`.

##### Parameters

| Parameter | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| service   | string  | The name of the service to call.          |
| request   | unknown | The request payload for the service call. |

##### Returns

`Promise`\<`unknown`\>

A Promise that resolves when the result is available or rejects if an error occurs

---

### updatePanelSettingsEditor()

```typescript
updatePanelSettingsEditor(settings): void
```

Call the `updatePanelSettingsEditor` method on the PanelExtensionContext instance to define or update its settings.

```typescript
const panelSettings: SettingsTree = {
  nodes: { ... },
  actionHandler: (action: SettingsTreeAction) => { ... }
};

context.updatePanelSettingsEditor(panelSettings);
```

`settings` parameter must be a valid SettingsTree and must contain 2 required properties – `nodes` and `actionHandler`:

- `nodes` - A hierarchy where each node can contain input fields, display fields, or even other nodes
- `actionHandler` - A function that will be called when a user interacts with the settings UI; it contains logic to handle interactions and update the panel or settings tree

It can also contain the following optional properties:

- `enableFilter` – A boolean to set whether a filter control should be displayed
- `focusedPath` – A node to scroll to and highlight in the editor (temporary one-time effect)

The following example tree has a `title` text input field within the `General` section, and an `actionHandler` to respond to updates to the `title` field.

```typescript
const panelSettings: SettingsTree = {
  nodes: {
    general: {
      label: 'General',
      fields: {
        title: {
          label: 'Title',
          input: 'string',
          // `panelTitle` refers to the value in the panel configuration
          value: panelTitle,
        },
      },
    },
  },
  actionHandler: (action: SettingsTreeAction) => {
    switch (action.action) {
      case 'perform-node-action':
        // Handle user actions defined for nodes in the settings tree
        break;
      case 'update':
        if (action.payload.path[0] === 'general' && action.payload.path[1] === 'title') {
          // Read action.payload.value for the new panel title value
          panelTitle = action.payload.value;

          // Update panel state accordingly
        }
        break;
    }
  },
};

context.updatePanelSettingsEditor(panelSettings);
```

#### `SettingsTreeAction`

SettingsTreeAction describes how the settings UI should update when a user interacts with a field.

Each `SettingsTreeAction` has a `payload` with a `path` pointing to the field to be updated (e.g., `["general", "title"]`).

The `update` operation corresponds to a user setting a new value for a field (e.g., "My new title").

#### Special Node Attributes

There are two special SettingsTreeNode attributes, `label` and `visibility`. The value you specify for `label` will control the label displayed in the settings editor. If you set the `renamable` node attribute to `true`, users can edit the node `label` – you will receive an `update` `SettingsTreeAction` with a path ending in `label`.

Also, if you specify a boolean for the node `visibility`, the settings editor will provide a button to toggle the node's visibility, and you will receive an `update` operation with a path ending in `visibility`.

For examples of how to use these special attributes, see the panel settings example extension.

#### Input Types

In addition to the `string` input type in the above example, the panel API provides multiple types for extending panel input fields.

Each input type has different properties you can configure:

- `autocomplete`
- `boolean`
- `rgb`
- `rgba`
- `gradient`
- `messagepath`
- `select`
- `string`
- `toggle`
- `vec3`
- `vec2`

#### Parameters

| Parameter              | Type                                                                                                         | Description                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| settings               | \{ actionHandler: (action) => void; enableFilter: boolean; focusedPath: readonly string\[\]; nodes: \{\}; \} | -                                                                                                                                                                              |
| settings.actionHandler | (action) => void                                                                                             | The handler for all operations on the settings tree initiated by the UI.                                                                                                       |
| settings.enableFilter? | boolean                                                                                                      | If the settings editor should display a filter control, then true.                                                                                                             |
| settings.focusedPath?  | readonly string\[\]                                                                                          | This will have a one-time effect, scrolling the editor to the node at the path and highlighting it. This is a temporary effect, so it does not need to be subsequently un-set. |
| settings.nodes         | {}                                                                                                           | The root node of the settings tree. Updates to these will automatically reflect in the editor UI.                                                                              |

#### Returns

`void`

---

### setDefaultPanelTitle()

```typescript
setDefaultPanelTitle(defaultTitle): void
```

Use `context.setDefaultPanelTitle` to override the default title of the panel. Users can always override the default title manually. If no override is set or the default title, the panel will only display its type (e.g., "Image").

```typescript
// Override default panel title
context.setDefaultPanelTitle(`Plot of ${config.topicName}`);
```

##### Parameters

| Parameter    | Type                |
| ------------ | ------------------- |
| defaultTitle | undefined \| string |

##### Returns

`void`
