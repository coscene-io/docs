---
sidebar_position: 3
---

# 优化扩展性能

优化您的扩展以提高生产环境中的性能，减少加载时间。

## 合并多个扩展

合并共享代码或依赖项的多个扩展可以减少文件大小，加快安装速度，并减少应用启动时的加载时间。

单个扩展的 `activate` 函数可以调用多个注册函数来添加不同的功能：

```typescript
export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({ name: 'my-panel', initPanel: initCustomPanel });
  extensionContext.registerPanel({ name: 'my-other-panel', initPanel: initAnotherCustomPanel });
  extensionContext.registerMessageConverter({
    fromSchemaName: '...',
    toSchemaName: '...',
    converter: (inputMessage: MyInputType, messageEvent: MessageEvent<MyInputType>) => {
      // ...
    },
  });
  extensionContext.registerTopicAliases((args) => {
    // ...
  });
}
```

## 禁用源码映射

默认情况下，扩展会打包源码映射（source maps）以改善调试体验。但是，源码映射会占用额外的空间，并可能减慢扩展的安装和加载速度。

如果您的扩展变得越来越大，可以考虑通过添加一个名为 `config.ts` 的文件来禁用源码映射，文件内容如下：

```typescript
module.exports = {
  webpack: (config) => {
    config.devtool = undefined; // 禁用源码映射以减少打包大小
    return config;
  },
};
```

## 保留自包含的 React 运行时 {#react-bundle}

合并扩展可以共享同一包内的依赖，但不要通过将 React、ReactDOM 或 JSX runtime 加到 webpack `externals` 来减小体积。默认配置只 externalize `@coscene/extension`；React 面板应随包携带配对的 React 与 ReactDOM，详见 [React 19 兼容与迁移](../3-react-19-migration.md#bundling)。

避免无界保存历史消息。保持传入消息只读，按实际需要计算派生结果，而不是为每帧深拷贝所有消息。面板关闭时释放自身资源，并通过反复添加、移除面板确认内存、DOM 和监听器数量没有持续增长。
