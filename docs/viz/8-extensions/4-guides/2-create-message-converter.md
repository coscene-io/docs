---
sidebar_position: 2
---

# 创建消息转换器

构建一个简单的消息转换器，用于将自定义 GPS 消息转换为符合 `foxglove.LocationFix` 架构的消息，以便在 Foxglove 的地图面板中可视化。

## 设置

在终端窗口中，`cd` 到您的源代码所在的目录，然后运行以下命令：

```
npm init foxglove-extension@latest myExtensionName
```

这将使用 create-foxglove-extension 创建一个 `myExtensionName` 目录，其中包含示例消息转换器的源代码。

## 注册转换器

项目 `src` 文件夹中的 `index.ts` 文件是扩展源代码的入口点。它必须导出一个 `activate` 函数，该函数接受一个类型为 ExtensionContext 的 `extensionContext` 参数。

要注册消息转换器，我们在 `extensionContext` 参数上调用 `registerMessageConverter`，并传入三个参数：源架构类型、目标架构类型和实际的 `converter` 函数。

```
import { MessageEvent } from "@foxglove/extension";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "...",
    toSchemaName: "...",
    converter: (inputMessage: MyInputType, messageEvent: MessageEvent<MyInputType>) => {
      // ...
    },
  });
}
```

`converter` 函数接受两个参数 – 输入主题消息和完整的消息事件。消息事件可用于访问其他相关信息 – 如消息的 `publishTime`、`receiveTime` 和 `topic` 名称。

## 编写转换器

假设我们的数据包含类型为 `sensors.MyGps` 的 GPS 消息，其中包含 `lat` 和 `lon` 字段。

```
type MyGps = {
  lat: number;
  lon: number;
};
```

要可视化 GPS 坐标，地图面板需要符合 foxglove.LocationFix 格式的消息。简而言之，我们的转换器需要将 `MyGps` 消息转换为符合 `foxglove.LocationFix` 架构的消息。

首先，指定 _from_ 架构（`sensors.MyGps`）和 _to_ 架构（`foxglove.LocationFix`），以告知 Foxglove 我们注册的转换器将把 `sensors.MyGps` 消息转换为 `foxglove.LocationFix` 消息。

然后，编写 `converter` 函数。在我们的示例中，我们将 `lat` 和 `lon` 字段重新映射到 `foxglove.LocationFix` 架构期望的 `latitude` 和 `longitude` 字段：

```
export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "sensors.MyGps",
    toSchemaName: "foxglove.LocationFix",
    converter: (myGps: MyGps, messageEvent: MessageEvent<MyGps>) => {
      return {
        latitude: myGps.lat,
        longitude: myGps.lon,
      };
    },
  });
}
```

## 测试

一旦我们打包并安装了扩展，在 Foxglove 中加载任何包含 `sensors.MyGps` 消息的数据源，并通过点击架构下拉菜单并选择您作为 `toSchema` 返回的输出架构，在地图面板或原始消息面板中可视化它们。

注意

消息转换器仅在面板订阅主题时按需运行。
