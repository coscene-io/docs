---
sidebar_position: 7
---

# SettingsTreeAction

```typescript
type SettingsTreeAction = 
  | {
  action: "update";
  payload: object & DistributivePick<SettingsTreeFieldValue, "input" | "value">;
 }
  | {
  action: "perform-node-action";
  payload: {
     id: string;
     path: readonly string[];
    };
};
```

表示可以分派到 SettingsTree 源的更新和编辑操作。

