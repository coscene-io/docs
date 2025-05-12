---
sidebar_position: 7
---

# SettingsTreeAction

```typescript
type SettingsTreeAction = object;
```

SettingsTreeAction represents an action that can be performed on a settings tree.

## Update

```typescript
{
  action: "update";
  payload: {
    path: string[];
    value: SettingsTreeFieldValue;
  };
}
```

The update action is triggered when a user changes the value of a settings field.

## Call

```typescript
{
  action: "call";
  payload: {
    path: string[];
  };
}
```

The call action is triggered when a user clicks a button in the settings tree.
