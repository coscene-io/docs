---
sidebar_position: 1
---

# 创建自定义面板

构建一个简单的面板扩展，该扩展订阅一个主题，然后注册它，以便您可以将其添加到 Foxglove 布局中。

## 设置

在终端窗口中，`cd` 到您的源代码所在的目录，然后运行以下命令：

```
npm init foxglove-extension@latest myExtensionName
```

这将使用 create-foxglove-extension 创建一个 `myExtensionName` 目录，其中包含示例自定义面板的源代码。

### `index.ts`

**`index.ts` 是扩展源代码的入口点。**

它必须导出一个 `activate` 函数，该函数：

* **接受一个 `extensionContext` 参数** - 有关 `ExtensionContext` 类型的更多信息，请参阅 @foxglove/extension
* **注册扩展的面板** - 在这种情况下是 `ExamplePanel`  
```  
export function activate(extensionContext: ExtensionContext) {  
  extensionContext.registerPanel({ name: "example-panel", initPanel: initExamplePanel });  
}  
```

### `ExamplePanel.tsx`

**`index.ts` 中引用的面板文件定义了扩展将安装的自定义面板的行为和 UI。**

虽然 `ExamplePanel.tsx` 是用 React 编写的，但面板是框架无关的 - 即它们可以使用 DOM 原语、React 或任何其他前端框架编写。查看 custom-image-extension 以了解不使用 React 编写的示例面板。

`initPanel` 函数接受一个 `PanelExtensionContext` 参数，其中包含用于访问面板数据和渲染 UI 更新的属性和方法。它还返回一个可选的清理函数，在扩展 `panelElement` 卸载时运行。

### `PanelExtensionContext`

有关可用属性和方法，请参阅 PanelExtensionContext 文档。

## 排查内存泄漏

Foxglove 中的面板通常以 60 fps 或更高的速率处理连续的数据流。这种处理可能会比其他"Web 应用"更快地暴露内存问题。

内存或引用问题可能会迅速消耗可用内存并导致内存不足或 OOM 错误。当发生此错误时，您将看到一个标签页崩溃页面（在 Web 应用中）或崩溃报告页面（在桌面应用中）。如果您注意到在使用扩展时整个应用更频繁地崩溃，那么您的扩展可能存在内存泄漏。

以下是在扩展中使用的一些最佳实践，以帮助防止内存泄漏：

* 最小化对过去消息数据的引用，或随时间聚合消息数据。
* 随时间聚合消息数据时，始终对存储的数据量设置最大限制。
* 取消引用不再需要的大型对象或数组，以确保它们被垃圾回收。
* 避免在全局范围内存储数据。

如果您遇到内存泄漏问题，请通过 Discord 或支持渠道联系我们，并提供您的扩展代码，我们很乐意帮助您调试问题。
