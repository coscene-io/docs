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

Return synchronous, idempotent cleanup. A React panel normally calls `root.unmount()` here and releases timers, workers, listeners, or GPU resources it created.

On removal or replacement, the host first invalidates the context and revokes subscriptions, publishers, and other resources. It then invokes this function outside the host’s React commit. Do not rely on `saveState`, `publish`, or other context mutations during cleanup; persist state while the panel is active. Do not add another delayed unmount.

Each `initPanel` call should create its own root and resources. Do not reuse an unmounted root or the context from an earlier invocation. See [React 19 Compatibility and Migration](../../3-react-19-migration.md#lifecycle).
