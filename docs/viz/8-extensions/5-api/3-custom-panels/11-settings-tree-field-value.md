---
sidebar_position: 11
---

# SettingsTreeFieldValue

```typescript
type SettingsTreeFieldValue = 
  | {
  input: "autocomplete";
  value: string;
  items: string[];
  placeholder: string;
 }
  | {
  input: "boolean";
  value: boolean;
 }
  | {
  input: "rgb";
  value: string;
  placeholder: string;
  hideClearButton: boolean;
 }
  | {
  input: "rgba";
  value: string;
  placeholder: string;
  hideClearButton: boolean;
 }
  | {
  input: "gradient";
  value: [string, string];
 }
  | {
  input: "messagepath";
  value: string;
  validTypes: string[];
  supportsMathModifiers: boolean;
 }
  | {
  input: "number";
  value: number;
  step: number;
  max: number;
  min: number;
  precision: number;
  placeholder: string;
 }
  | {
  input: "select";
  value: number | number[];
  options: object[];
 }
  | {
  input: "select";
  value: string | string[];
  options: object[];
 }
  | {
  input: "string";
  value: string;
  placeholder: string;
 }
  | {
  input: "toggle";
  value: string;
  options: string[] | object[];
 }
  | {
  input: "toggle";
  value: number;
  options: number[] | object[];
 }
  | {
  input: "vec3";
  value: [undefined | number, undefined | number, undefined | number];
  placeholder: [undefined | string, undefined | string, undefined | string];
  step: number;
  precision: number;
  labels: [string, string, string];
  max: number;
  min: number;
 }
  | {
  input: "vec2";
  value: [undefined | number, undefined | number];
  placeholder: [undefined | string, undefined | string];
  step: number;
  precision: number;
  labels: [string, string];
  max: number;
  min: number;
};
```

设置树字段指定了设置编辑器中的输入类型和字段值。

## 类型声明

### \{ input: "autocomplete"; value: string; items: string[]; placeholder: string; \}

#### input

```typescript
input: "autocomplete";
```

#### value?

```typescript
optional value: string;
```

#### items

```typescript
items: string[];
```

#### placeholder?

```typescript
optional placeholder: string;
```

当值为 undefined 时在字段输入中显示的占位符文本

### \{ input: "boolean"; value: boolean; \}

#### input

```typescript
input: "boolean";
```

#### value?

```typescript
optional value: boolean;
```


### \{ input: "rgb"; value: string; placeholder: string; hideClearButton: boolean; \}

#### input

```typescript
input: "rgb";
```

#### value?

```typescript
optional value: string;
```

#### placeholder?

```typescript
optional placeholder: string;
```

当值为未定义时在字段输入中显示的占位符文本

#### hideClearButton?

```typescript
optional hideClearButton: boolean;
```

如果为 true，则隐藏清除按钮


###  \{ input: "rgba"; value: string; placeholder: string; hideClearButton: boolean; \}

#### input

```typescript
input: "rgba";
```

#### value?

```typescript
optional value: string;
```

#### placeholder?

```typescript
optional placeholder: string;
```

当值为未定义时在字段输入中显示的占位符文本

#### hideClearButton?

```typescript
optional hideClearButton: boolean;
```

如果为 true，则隐藏清除按钮

### \{ input: "gradient"; value: [string, string]; \}

#### input

```typescript
input: "gradient";
```

#### value?

```typescript
optional value: [string, string];
```

### \{ input: "messagepath"; value: string; validTypes: string[]; supportsMathModifiers: boolean; \}

#### input

```typescript
input: "messagepath";
```

#### value?

```typescript
optional value: string;
```

#### validTypes?

```typescript
optional validTypes: string[];
```

#### supportsMathModifiers?

```typescript
optional supportsMathModifiers: boolean;
```

如果为 true，则允许使用数学修饰符，如 @abs

### \{ input: "number"; value: number; step: number; max: number; min: number; precision: number; placeholder: string; \}

#### input

```typescript
input: "number";
```

#### value?

```typescript
optional value: number;
```

#### step?

```typescript
optional step: number;
```

#### max?

```typescript
optional max: number;
```

#### min?

```typescript
optional min: number;
```

#### precision?

```typescript
optional precision: number;
```

#### placeholder?

```typescript
optional placeholder: string;
```

当值为未定义时在字段输入中显示的占位符文本

### \{ input: "select"; value: number | number[]; options: object[]; \}

#### input

```typescript
input: "select";
```

#### value?

```typescript
optional value: number | number[];
```

#### options

```typescript
options: object[];
```

### \{ input: "select"; value: string | string[]; options: object[]; \}

#### input

```typescript
input: "select";
```

#### value?

```typescript
optional value: string | string[];
```

#### options

```typescript
options: object[];
```

### \{ input: "string"; value: string; placeholder: string; \}

#### input

```typescript
input: "string";
```

#### value?

```typescript
optional value: string;
```

#### placeholder?

```typescript
optional placeholder: string;
```

当值为未定义时在字段输入中显示的占位符文本

### \{ input: "toggle"; value: string; options: string[] | object[]; \}

#### input

```typescript
input: "toggle";
```

#### value?

```typescript
optional value: string;
```

#### options

```typescript
options: string[] | object[];
```

### \{ input: "toggle"; value: number; options: number[] | object[]; \}

#### input

```typescript
input: "toggle";
```

#### value?

```typescript
optional value: number;
```

#### options

```typescript
options: number[] | object[];
```

### \{ input: "vec3"; value: [undefined | number, undefined | number, undefined | number]; placeholder: [undefined | string, undefined | string, undefined | string]; step: number; precision: number; labels: [string, string, string]; max: number; min: number; \}

#### input

```typescript
input: "vec3";
```

#### value?

```typescript
optional value: [undefined | number, undefined | number, undefined | number];
```

#### placeholder?

```typescript
optional placeholder: [undefined | string, undefined | string, undefined | string];
```

#### step?

```typescript
optional step: number;
```

#### precision?

```typescript
optional precision: number;
```

#### labels?

```typescript
optional labels: [string, string, string];
```

#### max?

```typescript
optional max: number;
```

#### min?

```typescript
optional min: number;
```

### \{ input: "vec2"; value: [undefined | number, undefined | number]; placeholder: [undefined | string, undefined | string]; step: number; precision: number; labels: [string, string]; max: number; min: number; \}

#### input

```typescript
input: "vec2";
```

#### value?

```typescript
optional value: [undefined | number, undefined | number];
```

#### placeholder?

```typescript
optional placeholder: [undefined | string, undefined | string];
```

#### step?

```typescript
optional step: number;
```

#### precision?

```typescript
optional precision: number;
```

#### labels?

```typescript
optional labels: [string, string];
```

#### max?

```typescript
optional max: number;
```

#### min?

```typescript
optional min: number;
``` 