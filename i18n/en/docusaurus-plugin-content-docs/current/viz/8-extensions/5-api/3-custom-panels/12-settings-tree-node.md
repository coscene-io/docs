---
sidebar_position: 12
---

# SettingsTreeNode

```typescript
type SettingsTreeNode = object;
```

SettingsTreeNode represents a node in a settings tree. Nodes can contain fields and child nodes.

## Properties

### label

```typescript
label: string;
```

The label displayed for the node.

### children?

```typescript
optional children: SettingsTreeChildren;
```

Child nodes of this node.

### fields?

```typescript
optional fields: SettingsTreeFields;
```

Fields contained in this node.

### defaultExpansionState?

```typescript
optional defaultExpansionState: "collapsed" | "expanded";
```

The default expansion state of the node.

### error?

```typescript
optional error: string;
```

Error message to display if there's an issue with the node.

### visible?

```typescript
optional visible: boolean;
```

Whether the node is visible in the UI.

### renamable?

```typescript
optional renamable: boolean;
```

Whether the node can be renamed by the user.

### actions?

```typescript
optional actions: SettingsTreeNodeAction[];
```

Actions that can be performed on the node, displayed as buttons.

### handler?

```typescript
optional handler: (action: SettingsTreeNodeAction) => void;
```

Handler for node actions.

## Example

```typescript
const node: SettingsTreeNode = {
  label: 'Camera Settings',
  fields: {
    fov: {
      label: 'Field of View',
      input: 'number',
      value: 60,
      min: 10,
      max: 120,
    },
    near: {
      label: 'Near Clip',
      input: 'number',
      value: 0.1,
    },
    far: {
      label: 'Far Clip',
      input: 'number',
      value: 1000,
    },
  },
  children: {
    advanced: {
      label: 'Advanced',
      defaultExpansionState: 'collapsed',
      fields: {
        antialiasing: {
          label: 'Anti-aliasing',
          input: 'select',
          value: 'msaa',
          options: [
            { value: 'none', label: 'None' },
            { value: 'fxaa', label: 'FXAA' },
            { value: 'msaa', label: 'MSAA' },
          ],
        },
      },
    },
  },
};
```

---

### order?

```typescript
optional order: number | string;
```

Optional sorting order used to override natural object ordering. All nodes with a sort order will be rendered before nodes without a sort order.

Nodes without an explicit order will be sorted according to ECMA object sorting rules.

https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys

---

### enableVisibilityFilter?

```typescript
optional enableVisibilityFilter: boolean;
```

Filter child nodes by visibility state.
