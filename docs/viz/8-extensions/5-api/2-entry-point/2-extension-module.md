---
sidebar_position: 2
---

# ExtensionModule

ExtensionModule 描述了你的扩展模块必须导出的接口。这通常对应于你的 `index.ts` 文件。

你可以使用 `default` 导出或命名导出语法：

```typescript
export function activate(context: ExtensionContext) {
  // ... 调用 extensionContext 上的方法来扩展 Foxglove
}
```

```typescript
function activate(context: ExtensionContext) {
  // ... 调用 extensionContext 上的方法来扩展 Foxglove
}
export default { activate };
```

## 属性

### activate()

```typescript
activate: (extensionContext) => void;
```

当你的扩展被加载时，这个函数将被调用。在这个函数中，你可以注册你的自定义面板或其他类型的扩展功能。

#### 参数

| 参数             | 类型                                                           |
| ---------------- | -------------------------------------------------------------- |
| extensionContext | [ExtensionContext](/docs/viz/extensions/api/entry-point/extension-context) |

#### 返回值

`void` 