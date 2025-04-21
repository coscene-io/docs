---
sidebar_position: 12
---

# SettingsTreeNode

```typescript
type SettingsTreeNode = object;
```

一个节点代表设置树中的单个项目或项目组。

## 属性

### actions?

```typescript
optional actions: SettingsTreeNodeAction[];
```

可以在此节点上执行的操作数组。

---

### children?

```typescript
optional children: SettingsTreeChildren;
```

嵌套在此节点下的其他设置树节点。

---

### defaultExpansionState?

```typescript
optional defaultExpansionState: "collapsed" | "expanded";
```

如果节点应该初始折叠，则设置为 collapsed。

---

### error?

```typescript
optional error: string;
```

表示节点任何错误状态的可选消息。

---

### fields?

```typescript
optional fields: SettingsTreeFields;
```

直接附加到此节点的字段输入。

---

### icon?

```typescript
optional icon: SettingsIcon;
```

显示在节点标签旁边的可选图标。

---

### label?

```typescript
optional label: string;
```

显示在此节点顶部的可选标签。

---

### renamable?

```typescript
optional renamable: boolean;
```

如果为 true，则用户可编辑节点标签。

---

### order?

```typescript
optional order: number | string;
```

可选排序顺序，用于覆盖自然对象排序。所有具有排序顺序的节点将在没有排序顺序的节点之前渲染。

没有明确顺序的节点将按照 ECMA 对象排序规则进行排序。

https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys

---

### visible?

```typescript
optional visible: boolean;
```

可选可见性状态。如果未定义，节点编辑器将显示可见性切换按钮并向操作处理程序发送更新操作。

---

### enableVisibilityFilter?

```typescript
optional enableVisibilityFilter: boolean;
```

按可见性状态过滤子节点 