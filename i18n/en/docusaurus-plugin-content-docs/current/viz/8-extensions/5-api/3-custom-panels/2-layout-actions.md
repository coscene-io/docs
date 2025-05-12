---
sidebar_position: 2
---

# LayoutActions

```typescript
type LayoutActions = object;
```

The LayoutActions interface provides methods for interacting with the current layout.

## Methods

### setSelectedPanels()

```typescript
setSelectedPanels(panelIds): void
```

Sets the currently selected panels.

#### Parameters

| Parameter | Type              |
| --------- | ----------------- |
| panelIds  | readonly string[] |

#### Returns

`void`

---

### getCurrentLayoutActions()

```typescript
getCurrentLayoutActions(type): any[] | undefined
```

Gets the available actions for the current layout type.

#### Parameters

| Parameter | Type   |
| --------- | ------ |
| type      | string |

#### Returns

`any[] | undefined`

---

### callCurrentLayoutAction()

```typescript
callCurrentLayoutAction(type, actionId, payload): void
```

Calls an action for the current layout type.

#### Parameters

| Parameter | Type   |
| --------- | ------ |
| type      | string |
| actionId  | string |
| payload   | any    |

#### Returns

`void`

### addPanel()

```typescript
addPanel(params): void
```

Use `context.layout.addPanel` to add a new panel next to the current panel.

The value of `position` must be set to `"sibling"`.

The value of `type` can reference a panel in a custom extension in the format `extensionname.panelname`, where `extensionname` is the extension name in `package.json`, and `panelname` is the name provided when registering the panel in the extension.

`getState` is set to a function that returns the state of the new panel (also known as panel settings), or returns `undefined` to use the default settings of the new panel.

```typescript
// Add a new panel
context.layout.addPanel({
  position: 'sibling',
  type: 'MyExtension.MyPanel',
  getState: () => ({}),
});
```

#### Parameters

| Parameter              | Type                                                                                 | Description                                                                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| params                 | \{ position: "sibling"; type: string; updateIfExists: boolean; getState: unknown; \} | -                                                                                                                                                                                                                     |
| params.position        | "sibling"                                                                            | The position of the panel. Currently only "sibling" is supported, indicating that the new panel will be adjacent to the calling panel.                                                                                |
| params.type            | string                                                                               | The type of panel to open. For extension panels, the format is "extensionName.panelName", where extensionName is the name field in the extension package.json, and panelName is the name provided to registerPanel(). |
| params.updateIfExists? | boolean                                                                              | Whether to update an existing adjacent panel of the same type. If false or omitted, a new panel will always be added. (**Deprecated** This parameter currently only supports built-in panels.)                        |
| params.getState        | -                                                                                    | -                                                                                                                                                                                                                     |

#### Returns

`void`
