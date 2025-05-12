---
sidebar_position: 2
title: Immutable<Type>
---

# Immutable\<Type\>

```typescript
type Immutable<Type> = Type extends Exclude<Builtin, Error> ? Type : Type extends Map<infer Keys, infer Values> ? ReadonlyMap<Immutable<Keys>, Immutable<Values>> : Type extends ReadonlyMap<infer Keys, infer Values> ? ReadonlyMap<Immutable<Keys>, Immutable<Values>> : Type extends WeakMap<infer Keys, infer Values> ? WeakMap<Immutable<Keys>, Immutable<Values>> : Type extends Set<infer Values> ? ReadonlySet<Immutable<Values>> : Type extends ReadonlySet<infer Values> ? ReadonlySet<Immutable<Values>> : Type extends WeakSet<infer Values> ? WeakSet<Immutable<Values>> : Type extends Promise<infer Value> ? Promise<Immutable<Value>> : Type extends AnyArray<infer Values> ? Type extends IsTuple<...> ? { readonly [Key in (...)]: (...) } : ReadonlyArray<...> : Type extends object ? { readonly [Key in (...)]: (...) } : ... extends ... ? ... : ...;
```

## 类型参数

| 类型参数 |
| -------- |
| Type     |
