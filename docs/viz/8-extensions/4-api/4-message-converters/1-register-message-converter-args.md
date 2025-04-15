---
sidebar_position: 1
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
| event     | [Immutable](/extension-api/type-aliases/Immutable)\<[MessageEvent](/extension-api/type-aliases/MessageEvent)\<Src\>\> |

#### 返回值

`unknown` 