---
slug: advanced-features
sidebar_position: 99
---

# 高级功能

## 切换登录凭证

刻行的命令行工具内置了登录凭证管理系统，高级用户和测试人员可以在不同的组织、项目、和环境中切换登录凭证，方便测试和管理。

在您有了默认的登录凭证之后，想要再添加一个登录凭证时，您可以使用如下命令来添加一个新的登录凭证

```bash
cocli login add -n <凭证名字> -p <项目Slug> -t <访问令牌>
```

我们可以使用如下命令来获取当前所有可用的凭证

```bash
cocli login list
```

在不同的登录凭证中间切换也非常容易

```bash
cocli login switch
```

在运行命令后的交互提示中，用箭头来选择想要切换到的登录凭证，回车确认选择

切换完成之后会提示当前激活的登录凭证，也可以用如下命令来确认

```
cocli login current
```

## 链接本地文件夹和云端记录

命令行对于云端记录和本地文件夹还提供了`链接`模式，链接之后的记录，上传和下载文件都无需再次指定记录 ID
