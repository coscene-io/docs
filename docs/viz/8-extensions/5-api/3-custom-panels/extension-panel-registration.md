---
sidebar_position: 1
---

# ExtensionPanelRegistration

```typescript
type ExtensionPanelRegistration = object;
```

这个类型代表你传递给 `ExtensionContext.registerPanel` 的参数。

## 属性

### name

```typescript
name: string;
```

面板在你的扩展中的唯一名称。

**注意**：扩展中的面板名称必须是唯一的。面板名称在布局中用于标识该面板。更改面板名称将导致使用旧名称的布局无法加载你的面板。

### initPanel()

```typescript
initPanel: (context) => void | () => void;
```

当你的面板初始化时，这个函数会被调用。

#### 参数

| 参数 | 类型 |
| --- | --- |
| context | [PanelExtensionContext](/extension-api/type-aliases/PanelExtensionContext) |

#### 返回值

`void` | () => `void`

（可选）一个函数，当面板被移除或替换时将被调用。在这里执行任何清理逻辑，以优雅地拆除你的面板。
