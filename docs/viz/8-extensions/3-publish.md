---
sidebar_position: 3
---

# 发布

发布自定义扩展，帮助团队成员或其他 Foxglove 用户在他们的工作流程中利用您的贡献。

## 定义元数据

在 `package.json` 文件中设置扩展的元数据字段：

* `name`（名称）
* `publisher`（发布者）
* `version`（版本）
* `description`（描述）

## 打包扩展

当您准备好分发扩展时，运行 `npm run package` 来生成一个包含扩展清单和编译代码的 ZIP 归档文件，扩展名为 `.foxe` — 例如 `myExtensionName-0.0.0.foxe`。

## 与团队共享

免费版

团队版

企业版

发布到您组织的扩展会自动为每个成员安装，任何不再列在组织注册表中的已安装扩展也会自动卸载。

注意

只有管理员可以发布和删除组织的扩展。

### 在扩展设置中

访问您账户中的组织扩展设置来发布或删除扩展：

### 使用 Foxglove CLI

使用 foxglove CLI 发布扩展，供组织中的其他成员在 Foxglove 中使用：

```
foxglove extensions publish ./my-extension.1.0.0.foxe
```

显示组织中当前的扩展列表：

```
foxglove extensions list
```

取消发布扩展，导致它自动从 Foxglove 安装中移除：

```
foxglove extensions unpublish [ID]
```

## 公开共享

通过将扩展添加到扩展注册表，与所有 Foxglove 用户共享您的扩展（通过注册表安装扩展仅支持桌面应用）。

将您的 `.foxe` 文件发布到某个公共位置 – 我们建议将其与您的代码一起发布在 GitHub releases 上。然后，在仓库中打开一个 PR 来更新 extensions.json 和此 README 的"扩展"部分，添加您的扩展信息。

一旦我们合并了您的 PR，您的扩展将可供任何人在 Foxglove 的_设置_中安装。
