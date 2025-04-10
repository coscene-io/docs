# LayoutActions

面板可以通过 `context.layout` 执行与用户当前布局相关的操作。

## 方法

### addPanel()

```typescript
addPanel(params): void
```

使用 `context.layout.addPanel` 在当前面板旁边添加一个新面板。

`position` 的值必须设置为 `"sibling"`。

`type` 的值可以引用自定义扩展中的面板，格式为 `extensionname.panelname`，其中 `extensionname` 是 `package.json` 中的扩展名称，`panelname` 是扩展注册面板时提供的名称。

`getState` 设置为一个函数，该函数返回新面板的状态（也称为面板设置），或返回 `undefined` 以使用新面板的默认设置。

```typescript
// 添加新面板
context.layout.addPanel({
  position: "sibling",
  type: "MyExtension.MyPanel",
  getState: () => ({}),
});
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| params | \{ position: "sibling"; type: string; updateIfExists: boolean; getState: unknown; \} | - |
| params.position | "sibling" | 面板的位置。目前仅支持 "sibling"，表示新面板将与调用面板相邻。 |
| params.type | string | 要打开的面板类型。对于扩展面板，格式为 "extensionName.panelName"，其中 extensionName 是扩展 package.json 中的 name 字段，panelName 是提供给 registerPanel() 的名称。 |
| params.updateIfExists? | boolean | 是否更新已存在的同类型相邻面板。如果为 false 或省略，将始终添加新面板。(**已弃用** 目前此参数仅支持内置面板。) |
| params.getState | - | - |

#### 返回值

`void`
