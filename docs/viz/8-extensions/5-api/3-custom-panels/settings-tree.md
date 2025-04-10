---
sidebar_position: 3
---

# SettingsTree

```typescript
type SettingsTree = object;
```

SettingsTree 是一个用于在面板设置侧边栏中显示和编辑面板设置的树形结构。

树中的节点和字段可以通过字符串路径引用，该路径收集从根节点到子节点或字段的每个节点的键。

例如，对于以下树结构：

```typescript
root: {
  children: {
    a: {
      children: {
        b: {
          fields: {
            toggleMe: {
              label: "切换开关",
              input: "boolean",
              value: false,
            },
          },
        },
      },
    },
  },
}
```

到节点 `b` 的路径将是 `["a", "b"]`，到 `toggleMe` 字段的路径将是 `["a", "b", "toggleMe"]`。这些路径在 `actionHandler` 中使用，用于响应树中值的更新，也在 `focusedPath` 中使用，用于将编辑器 UI 聚焦到树中的特定节点。

## 属性

### actionHandler

```typescript
actionHandler: (action) => void;
```

处理由 UI 发起的设置树上的所有操作的处理程序。

#### 参数

| 参数   | 类型                    |
| ------ | ----------------------- |
| action | SettingsTreeAction      |

#### 返回值

`void`

### enableFilter

```typescript
optional enableFilter: boolean;
```

如果为 true，设置编辑器将显示过滤控件。

### focusedPath

```typescript
optional focusedPath: readonly string[];
```

设置此属性将产生一次性效果，将编辑器滚动到路径处的节点并高亮显示它。这是一个瞬态效果，因此不需要随后取消设置此属性。

### nodes

```typescript
nodes: object;
```

设置树的根节点。对这些节点的更新将自动反映在编辑器 UI 中。

#### 索引签名

```typescript
[key: string]: undefined | SettingsTreeNode
```
