---
sidebar_position: 2.2
---

# React 19 兼容与迁移

`create-coscene-extension@1.1.0` 创建的面板使用 React / ReactDOM **19.3.1**、React 类型 **19.3.0**，以及自动 JSX 转换。本文适用于包含 React 19 升级的可视化版本；部署版本较旧时，请先在目标 Web 或桌面应用中验证插件。

## 哪些扩展需要迁移 {#compatibility}

可视化与扩展之间通过 `@coscene/extension` SDK、数据回调和 `context.panelElement` 对接。扩展在自己的 DOM 容器中创建 React root，不与宿主共享 React element、hook 或 context。

| 扩展类型                                           | 兼容要求                                                                                                   |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 自行打包 React 18 和对应 ReactDOM 的面板           | 宿主不会按 React 主版本拒绝安装；不必仅因宿主升级而重写，仍需验证实际使用的功能。                          |
| 自行打包 React 19 和对应 ReactDOM 的面板           | 使用 1.1.0 模板或按下文迁移，检查第三方组件的 React 19 支持。                                              |
| 将 React / ReactDOM externalize 到宿主的自定义包   | 移除这些 externals，重新构建为自包含插件。宿主没有旧渲染 API 的兼容垫片，也不提供新的共享 React 模块映射。 |
| 不使用 React 的消息转换器、主题别名或原生 DOM 面板 | 不需要添加或升级 React。                                                                                   |

SDK 仍为 `@coscene/extension` 1.x，`.coe` 文件格式未改变。发布新版脚手架不会自动重建或更新已经分发的扩展。

## 创建新扩展 {#create}

推荐使用 **Node.js 24**，与脚手架 CI 的验证环境一致。

```bash
npm init coscene-extension@1.1.0 my-extension
cd my-extension
npm run build
```

初始化命令会安装依赖。保留生成的 lockfile，并与 `package.json` 一起提交。完整面板示例见[创建自定义面板](./4-guides/1-create-custom-panel.md)。

## 升级已有 React 面板 {#upgrade}

在扩展项目根目录中安装配对的运行时和类型：

```bash
npm install --save-dev --save-exact create-coscene-extension@1.1.0 react@19.3.1 react-dom@19.3.1 @types/react@19.3.0 @types/react-dom@19.3.0
```

然后检查以下改动：

- 使用 `react-dom/client` 的 `createRoot`，用 `root.render()` 渲染，并从 `initPanel` 返回调用 `root.unmount()` 的清理函数。替换 `ReactDOM.render`、`unmountComponentAtNode` 和 `findDOMNode` 等已移除 API。
- 保留 `tsconfig.json` 中的 `jsx: "react-jsx"`；继承脚手架共享配置的项目已启用此选项。
- 将全局 `JSX.Element` 改为从 `react` 导入的 `ReactElement` 或 `React.JSX.Element`。
- 为 `useRef` 提供初始值，例如 `useRef<HTMLDivElement | null>(null)`。零参数的 `useState` 仍可使用。
- ref 回调只返回 `void`，或有意返回清理函数；避免隐式返回 DOM 元素。函数组件的 `defaultProps` 改为参数默认值。
- 数组渲染的最外层元素使用稳定的 `key`；包含多个节点时使用 `<Fragment key={...}>`。

更多 API 和类型变化见 [React 官方升级指南](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)。

## 保持 React 随扩展打包 {#bundling}

默认 webpack 配置只将 `@coscene/extension` 标记为 external。自定义 `config.ts` 时，保留 React、ReactDOM、`react-dom/client`、`react/jsx-runtime` 和 `react/jsx-dev-runtime` 的打包行为。

宿主内部对依赖使用的补丁不会自动进入扩展。检查您自己的组件库和传递依赖，不能仅凭“宿主已经支持 React 19”推断插件中的第三方组件也已兼容。

本次示例验收使用 `@microlink/react-json-view@1.26.1`；旧的 1.23.4 依赖链中存在 React 17 peer 限制。Monaco 示例使用 `@monaco-editor/react@4.7.0`，将编辑器、Worker、样式和字体打入 `.coe`，以适配宿主阻止默认 CDN 的 CSP；它的配置不修改宿主的 `MonacoEnvironment`。这些版本是对应示例的验证基线，升级后仍需回归，并非所有第三方库的通用兼容声明。

## 渲染完成与清理 {#lifecycle}

每次 `initPanel` 调用都有独立的渲染会话。在 React effect 中注册 `context.onRender` 是可行的；宿主会在处理器就绪后提供最新状态。

对每次收到的 `onRender`，在对应的 React 更新提交后调用该次 `done`。`setState` 或 `root.render()` 返回时，React 可能尚未提交更新。可将回调保存到 state，在依赖该回调的 `useEffect` 中调用，参见[面板示例](./4-guides/1-create-custom-panel.md)。

渲染未完成时，新输入会合并为待处理更新，不会无限积累每个历史帧。不要依赖超时机制保证逐帧交付，也不要修改传入的消息或数组。

面板被移除或替换时，context 会立即失效，宿主释放订阅、发布者和播放等待。随后宿主在自己的 React commit 之外调用扩展返回的清理函数。清理函数应同步且可重复安全调用，直接卸载 root，并释放扩展自己的定时器、Worker、监听器和 GPU 资源；不需要再增加一次延迟卸载。状态应在面板活动期间保存，不能依赖清理阶段的 `saveState` 或 `publish`。

在注册 `onRender` 的 effect 清理函数中设置 `context.onRender = undefined`。不要让旧面板的异步回调继续操作已经失效的 context。

## 分发前验证 {#validation}

```bash
npm run lint:ci
npm run build
npm run package
```

在实际目标版本中安装生成的 `.coe`，分别验证需要支持的 Web 和桌面环境：

1. 首次打开、订阅消息、播放、暂停和跳转，确认 UI 更新且没有等待 `done` 的卡顿。
2. 修改设置，重载后确认保存的状态恢复。
3. 反复移除、重新添加或替换面板，检查控制台错误、重复订阅及资源持续增长。
4. 检查编辑器、canvas、拖放、Worker 等扩展实际使用的第三方功能。

编译成功只能说明构建通过，不能代替运行时兼容验证。安装方法见[扩展安装](./extensions-install.mdx)。
