---
sidebar_position: 1
---

# ExtensionPanelRegistration

```typescript
type ExtensionPanelRegistration = object;
```

这个类型代表你传递给 `ExtensionContext.registerPanel` 的参数。

## 属性

### name

```typescript
name: string;
```

面板在你的扩展中的唯一名称。

**注意**：扩展中的面板名称必须是唯一的。面板名称在布局中用于标识该面板。更改面板名称将导致使用旧名称的布局无法加载你的面板。

### initPanel()

```typescript
initPanel: (context) => void | () => void;
```

当你的面板初始化时，这个函数会被调用。

#### 参数

| 参数 | 类型 |
| --- | --- |
| context | [PanelExtensionContext](./3-panel-extension-context.md) |

#### 返回值

`void` | () => `void`

（可选）一个函数，当面板被移除或替换时将被调用。在这里执行任何清理逻辑，以优雅地拆除你的面板。

返回同步、可重复安全调用的清理函数。React 面板通常在此调用 `root.unmount()`，并释放自己创建的定时器、Worker、监听器或 GPU 资源。

面板被移除或替换时，宿主先使 context 失效并撤销订阅、发布者等资源，再在宿主 React commit 之外调用此函数。因此，不应依赖清理阶段的 `saveState`、`publish` 或其他 context 修改；需要持久化的状态应在面板活动期间保存。无需自行增加第二次延迟卸载。

每次 `initPanel` 调用都应创建独立 root 和资源，不能复用已卸载的 root 或前一次调用的 context。参见 [React 19 兼容与迁移](../../3-react-19-migration.md#lifecycle)。
