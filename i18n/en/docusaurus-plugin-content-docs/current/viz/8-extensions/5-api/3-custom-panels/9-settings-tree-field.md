---
sidebar_position: 9
---

# SettingsTreeField

```typescript
type SettingsTreeField = object;
```

SettingsTreeField represents a field in a settings tree. Each field has a specific input type, such as text, number, or boolean.

## Properties

### label

```typescript
label: string;
```

The label displayed for the field.

### input

```typescript
input: 'boolean' |
  'number' |
  'select' |
  'string' |
  'text' |
  'toggle' |
  'vec2' |
  'vec3' |
  'rgb' |
  'rgba' |
  'message-path' |
  'autocomplete';
```

The type of input control to display for the field.

### help?

```typescript
optional help: string;
```

Help text to display alongside the field.

### error?

```typescript
optional error: string;
```

Error message to display if the field value is invalid.

### disabled?

```typescript
optional disabled: boolean;
```

Whether the field is disabled and cannot be edited.

### hidden?

```typescript
optional hidden: boolean;
```

Whether the field is hidden from view.

### icon?

```typescript
optional icon: SettingsIcon;
```

The icon to display alongside the field label.
