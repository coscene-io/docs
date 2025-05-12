---
sidebar_position: 1
title: RegisterMessageConverterArgs<Src>
---

# RegisterMessageConverterArgs\<Src\>

```typescript
type RegisterMessageConverterArgs<Src> = object;
```

This type represents the parameters passed to `ExtensionContext.registerMessageConverter`.

## Type Parameters

| Type Parameter |
| -------------- |
| Src            |

## Properties

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

#### Parameters

| Parameter | Type                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------- |
| msg       | Src                                                                                            |
| event     | [Immutable](../6-other/2-immutable.md)\<[MessageEvent](../6-other/3-message-event.md)\<Src\>\> |

#### Returns

`unknown`
