---
sidebar_position: 2
---

# 本地开发

使用 Node.js 24，在扩展项目根目录执行下面的命令。新项目可通过 `npm init coscene-extension@1.1.0 my-extension` 创建；该命令会安装依赖。已有项目使用 `npm ci` 按提交的 lockfile 安装。

## 构建与检查 {#build}

```bash
npm run lint:ci
npm run build
```

`build` 验证扩展能否编译。React 19 项目应同时检查运行时、类型、组件库和打包边界，见 [React 19 兼容与迁移](./3-react-19-migration.md)。

## 在桌面应用中开发 {#desktop}

```bash
npm run local-install
```

该命令构建扩展并将输出复制到本地 coStudio 扩展目录，例如 `~/.coStudio/extensions/unknown.my-extension-0.0.0`。打开目标版本的 coStudio，在扩展列表和“添加面板”中确认扩展已加载。

每次修改代码后重新运行 `npm run local-install`，然后重载或重启 coStudio。此命令只安装到本机桌面应用，不会更新浏览器中的扩展。

## 在 Web 应用中验证 {#web}

```bash
npm run package
```

命令生成 `.coe` 文件。通过[扩展安装](./extensions-install.mdx)中的本地文件方式将其安装到目标 Web 应用。发布新版本时更新扩展自己的 `version`，重新打包，再安装新产物；不要将脚手架版本与扩展自己的版本混淆。

## 运行时验证 {#runtime-validation}

在实际需要支持的 Web 和桌面版本中验证：

1. 首次添加面板，选择数据源和话题，检查初始状态与消息显示。
2. 播放、暂停、跳转并切换话题，确认每次 `onRender` 都在对应 UI 更新完成后调用 `done`。
3. 修改设置并重载，确认 `initialState` 恢复已保存的内容。
4. 多次移除、重新添加或替换面板，检查是否出现重复消息、残留 Worker、定时器或监听器。
5. 实际操作扩展中的编辑器、canvas、拖放等第三方组件，检查控制台是否有 React 错误。

面板关闭时，宿主会立即使 context 失效。应在活动期间保存状态，清理函数只负责卸载与释放资源。检查构建产物时，确认 React、ReactDOM 和 JSX runtime 随扩展打包，没有从宿主解析这些依赖。

测试通过后，将源码、`package.json` 和 lockfile 一起提交，并分发验证过的 `.coe`。
