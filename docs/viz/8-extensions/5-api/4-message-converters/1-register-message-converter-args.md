---
sidebar_position: 1
title: RegisterMessageConverterArgs<Src>
---

# RegisterMessageConverterArgs\<Src\>

```typescript
type RegisterMessageConverterArgs<Src> = object;
```

此类型表示传递给 `ExtensionContext.registerMessageConverter` 的参数。

## 类型参数

| 类型参数 |
| -------------- |
| Src            |

## 属性

### fromSchemaName

```typescript
fromSchemaName: string;
```

---

### toSchemaName

```typescript
toSchemaName: string;
```

---

### converter()

```typescript
converter: (msg, event) =\> unknown;
```

#### 参数

| 参数 | 类型                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| msg       | Src                                                                                                                |
| event     | [Immutable](../6-other/2-immutable.md)\<[MessageEvent](../6-other/3-message-event.md)\<Src\>\> |

#### 返回值

`unknown` 