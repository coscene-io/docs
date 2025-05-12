---
sidebar_position: 1
---

# ExtensionPanelRegistration

```typescript
type ExtensionPanelRegistration = object;
```

This type represents the parameter you pass to `ExtensionContext.registerPanel`.

## Properties

### name

```typescript
name: string;
```

The unique name of the panel in your extension.

**Note**: Panel names must be unique within your extension. The panel name is used to identify the panel in layouts. Changing the panel name will cause layouts using the old name to be unable to load your panel.

### initPanel()

```typescript
initPanel: (context) => void | () => void;
```

This function is called when your panel is initialized.

#### Parameters

| Parameter | Type                                                    |
| --------- | ------------------------------------------------------- |
| context   | [PanelExtensionContext](./3-panel-extension-context.md) |

#### Return Value

`void` | () => `void`

(Optional) A function that will be called when the panel is removed or replaced. Perform any cleanup logic here to gracefully dismantle your panel.
