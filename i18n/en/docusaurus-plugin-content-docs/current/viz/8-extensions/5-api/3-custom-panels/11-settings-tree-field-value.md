---
sidebar_position: 11
---

# SettingsTreeFieldValue

```typescript
type SettingsTreeFieldValue = object;
```

SettingsTreeFieldValue represents the value and input type of a settings field. The exact object properties depend on the input type.

## Boolean Input

```typescript
{
  input: 'boolean';
  value: boolean;
}
```

A checkbox input that can be either true or false.

## Number Input

```typescript
{
  input: "number";
  value: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
}
```

A numeric input field.

| Property  | Description                                       |
| --------- | ------------------------------------------------- |
| min       | Optional minimum value                            |
| max       | Optional maximum value                            |
| step      | Optional step size when incrementing/decrementing |
| precision | Optional number of decimal places to display      |

## Select Input

```typescript
{
  input: 'select';
  value: string | number | boolean;
  options: {
    value: string | number | boolean;
    label: string;
  }
  [];
}
```

A dropdown select input with predefined options.

## String Input

```typescript
{
  input: "string";
  value: string;
  placeholder?: string;
}
```

A single-line text input field.

| Property    | Description               |
| ----------- | ------------------------- |
| placeholder | Optional placeholder text |

## Text Input

```typescript
{
  input: "text";
  value: string;
  placeholder?: string;
  rows?: number;
}
```

A multi-line text input field.

| Property    | Description                        |
| ----------- | ---------------------------------- |
| placeholder | Optional placeholder text          |
| rows        | Optional number of rows to display |

## Toggle Input

```typescript
{
  input: 'toggle';
  value: string | number;
  options: {
    value: string | number;
    label: string;
  }
  [];
}
```

A set of toggle buttons with predefined options.

## Vec2 Input

```typescript
{
  input: "vec2";
  value: [number, number];
  labels?: [string, string];
  min?: number | [number, number];
  max?: number | [number, number];
  step?: number | [number, number];
  precision?: number | [number, number];
}
```

An input for a 2D vector.

| Property  | Description                                  |
| --------- | -------------------------------------------- |
| labels    | Optional labels for each component           |
| min       | Optional minimum value(s)                    |
| max       | Optional maximum value(s)                    |
| step      | Optional step size(s)                        |
| precision | Optional number of decimal places to display |

## Vec3 Input

```typescript
{
  input: "vec3";
  value: [number, number, number];
  labels?: [string, string, string];
  min?: number | [number, number, number];
  max?: number | [number, number, number];
  step?: number | [number, number, number];
  precision?: number | [number, number, number];
}
```

An input for a 3D vector.

| Property  | Description                                  |
| --------- | -------------------------------------------- |
| labels    | Optional labels for each component           |
| min       | Optional minimum value(s)                    |
| max       | Optional maximum value(s)                    |
| step      | Optional step size(s)                        |
| precision | Optional number of decimal places to display |

## RGB Input

```typescript
{
  input: 'rgb';
  value: [number, number, number];
}
```

A color picker for RGB values (red, green, blue). Values range from 0 to 1.

## RGBA Input

```typescript
{
  input: 'rgba';
  value: [number, number, number, number];
}
```

A color picker for RGBA values (red, green, blue, alpha). Values range from 0 to 1.

## MessagePath Input

```typescript
{
  input: "message-path";
  value: string;
  validTypes?: readonly string[];
  supportDatasets?: boolean;
}
```

An input for selecting a message path.

| Property        | Description                           |
| --------------- | ------------------------------------- |
| validTypes      | Optional array of valid message types |
| supportDatasets | Optional flag to enable dataset paths |

## Autocomplete Input

```typescript
{
  input: "autocomplete";
  value: string;
  items: string[];
  placeholder?: string;
}
```

A text input with autocompletion suggestions.

| Property    | Description                       |
| ----------- | --------------------------------- |
| items       | Array of autocomplete suggestions |
| placeholder | Optional placeholder text         |
