---
sidebar_position: 2
---

# 本地开发

在发布之前，在本地构建和测试自定义 Foxglove 扩展。

## 安装

要将您的扩展构建并安装到本地 Foxglove 扩展文件夹中，请运行 `npm run local-install`。这将在您的用户主目录下创建一个文件夹（例如 `~/.foxglove-studio/extensions/unknown.myExtensionName-0.0.0`），其中包含您编译好的扩展。

打开最新版本的 Foxglove 桌面应用。现在，您应该能在应用设置中的已安装扩展列表中看到 `myExtensionName`。

安装后，您应该能够打开"添加面板"菜单，并看到一个名为 `ExamplePanel` 的选项。您已成功加载了您的第一个 Foxglove 扩展！

要在 Web 应用上安装本地扩展，您必须首先打包您的扩展，然后将 `.foxe` 文件拖放到打开的可视化页面上。您也可以通过拖放或双击在桌面应用中打开 `.foxe` 文件。

## 开发

每次对扩展进行更改时，您都必须运行 `npm run local-install` 将其构建到本地扩展文件夹中。

重新加载或重启 Foxglove 以在应用中执行最新版本的扩展代码。或者，您可以通过简单地运行 `npm run build` 来确认您的代码可以编译，而无需在本地安装它。
