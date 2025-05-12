---
sidebar_position: 6
---

# SettingsTree

```typescript
type SettingsTree = {
  actionHandler: (action: SettingsTreeAction) => void;
  nodes: Record<string, SettingsTreeNode>;
};
```

SettingsTree is a data structure used to define panel settings.

## Properties

### actionHandler

```typescript
actionHandler: (action: SettingsTreeAction) => void;
```

The action handler is called when a user interacts with a settings field, such as changing a value or clicking a button.

#### Parameters

| Parameter | Type                                              |
| --------- | ------------------------------------------------- |
| action    | [SettingsTreeAction](./7-settings-tree-action.md) |

#### Returns

`void`

---

### nodes

```typescript
nodes: Record<string, SettingsTreeNode>;
```

A map of settings tree node IDs to nodes. Each node represents a group of related settings.

## Example

```typescript
const settingsTree: SettingsTree = {
  nodes: {
    general: {
      label: 'General',
      fields: {
        displayMode: {
          label: 'Display Mode',
          input: 'select',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          value: 'auto',
        },
        showLabels: {
          label: 'Show Labels',
          input: 'boolean',
          value: true,
        },
      },
    },
    advanced: {
      label: 'Advanced',
      fields: {
        maxPoints: {
          label: 'Maximum Points',
          input: 'number',
          value: 100,
          min: 1,
          max: 1000,
          step: 1,
        },
      },
    },
  },
  actionHandler: (action) => {
    // Handle settings changes
    if (action.action === 'update') {
      // Update panel state based on the changed settings
      const { path, value } = action.payload;
      console.log(`Setting ${path.join('.')} changed to ${value}`);
    }
  },
};
```
