---
sidebar_position: 1
---

# 开始使用

在调用接口之前，您需要先确认以下操作：

1. 取得 [地址前缀](./2-openapi-url.md)。开放接口地址会依据用户使用的平台版本而有所变化，所以请参考当前访问的平台地址使用最新的地址。
2. 通过 [获取授权](./3-apikey.md)取得 apikey。开放接口均使用 apikey 鉴权，请妥善保管，切勿上传至公开平台。

以上完成后，即可开始使用刻行平台的 OpenAPI 了。

## Swagger 

刻行提供了符合  OpenAPI 3.0.3 标准的 OpenAPI yaml 文件。具体可以通过 [OpenAPI Yaml](https://download.coscene.cn/openapi/openapi.yaml) 下载。当然也可以直接访问 [Swagger Editor](https://petstore.swagger.io/?url=https://download.coscene.cn/openapi/openapi.yaml) 在线查看相关的接口的信息。

## SDK

刻行 OpenAPI 提供了各类语言的 SDK，具体可以查看 [buf](https://buf.build/coscene-io/coscene-openapi/sdks) 了解对应语言的 SDK 信息。

## 示例

针对各类 SDK，刻行针对常用的 Go、Java、Python 提供了示例代码，具体可以参考 [openapi-example](https://github.com/coscene-io/openapi-example) 项目。若需要其他语言的代码样例，请联系刻行开发人员获取。

