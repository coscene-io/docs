---
sidebar_position: 13
---

# SettingsTreeNodeActionItem

```typescript
type SettingsTreeNodeActionItem = object;
```

设置节点操作菜单中包含的操作项。

## 属性

### type

```typescript
type: "action";
```

---

### id

```typescript
id: string;
```

操作的唯一标识符。

---

### label

```typescript
label: string;
```

操作的描述性标签。

---

### icon?

```typescript
optional icon: SettingsIcon;
```

可选的操作图标。

---

### display?

```typescript
optional display: "menu" | "inline";
```

指定操作项是作为内联操作还是上下文菜单项进行渲染。如果未指定，默认为 "menu"。内联项只有在指定了图标时才会显示为图标。 