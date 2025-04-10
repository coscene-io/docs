---
sidebar_position: 1
---

# Foxglove 扩展 API

`@foxglove/extension` 包含了编写 Foxglove 扩展所需的类型定义。

请参阅 [概念文档](https://docs.foxglove.dev/docs/visualization/extensions/introduction) 以获取更多信息。

## 入门指南

你的扩展的默认导出必须是一个 ExtensionModule。当扩展被加载时，`activate` 函数将被调用，并且可以使用 ExtensionContext 的功能。
