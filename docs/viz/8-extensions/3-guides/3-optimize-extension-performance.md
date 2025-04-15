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
  extensionContext.registerPanel({ name: "my-panel", initPanel: initCustomPanel });
  extensionContext.registerPanel({ name: "my-other-panel", initPanel: initAnotherCustomPanel });
  extensionContext.registerMessageConverter({
    fromSchemaName: "...",
    toSchemaName: "...",
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
