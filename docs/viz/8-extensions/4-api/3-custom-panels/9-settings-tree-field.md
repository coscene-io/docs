---
sidebar_position: 9
---

# SettingsTreeField

```typescript
type SettingsTreeField = SettingsTreeFieldValue & object;
```

`SettingsTreeField` 指定了设置编辑器中字段的输入类型和值。

## 类型声明

### disabled?

```typescript
optional disabled: boolean;
```

如果字段被禁用，则为 true。

### help?

```typescript
optional help: string;
```

用于解释字段用途的可选帮助文本。

### label

```typescript
label: string;
```

显示在字段旁边的标签。

### readonly?

```typescript
optional readonly: boolean;
```

如果字段为只读，则为 true。

### error?

```typescript
optional error: string;
```

指示字段错误状态的可选消息。
