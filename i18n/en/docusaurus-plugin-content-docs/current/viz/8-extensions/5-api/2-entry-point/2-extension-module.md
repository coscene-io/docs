---
sidebar_position: 2
---

# ExtensionModule

ExtensionModule describes the interface that your extension module must export. This typically corresponds to your `index.ts` file.

You can use either the `default` export or named export syntax:

```typescript
export function activate(context: ExtensionContext) {
  // ... call methods on extensionContext to extend Foxglove
}
```

```typescript
function activate(context: ExtensionContext) {
  // ... call methods on extensionContext to extend Foxglove
}
export default { activate };
```

## Properties

### activate()

```typescript
activate: (extensionContext) => void;
```

This function will be called when your extension is loaded. Within this function, you can register your custom panels or other types of extension functionality.

#### Parameters

| Parameter        | Type                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| extensionContext | [ExtensionContext](/docs/viz/extensions/api/entry-point/extension-context) |

#### Return Value

`void`
