---
sidebar_position: 15
---

# SettingsTreeNodeActionItem

```typescript
type SettingsTreeNodeActionItem = {
  type: 'action';
  id: string;
  label: string;
  icon?: SettingsIcon;
  tooltip?: string;
};
```

SettingsTreeNodeActionItem represents an action item in a node action menu.

## Properties

### type

```typescript
type: 'action';
```

The type of the action item.

### id

```typescript
id: string;
```

The unique identifier for the action.

### label

```typescript
label: string;
```

The label displayed for the action.

### icon?

```typescript
optional icon: SettingsIcon;
```

The icon to display for the action.

### tooltip?

```typescript
optional tooltip: string;
```

The tooltip to display when hovering over the action.
