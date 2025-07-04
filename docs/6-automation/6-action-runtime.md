# 动作运行时信息

动作在运行时，会自动准备一些环境变量，和上下游帮助步骤，方便动作在运行时和平台进行数据交换。

## 环境变量 {#environment-variables}

在动作中定义环境变量，以供程序在运行过程中读取并使用。

在定义环境变量时，请避免使用平台预设的名称，防止程序出现意外错误。平台预设的环境变量如下：

| 环境变量名称          | 值               | 描述                         |
| --------------------- | ---------------- | ---------------------------- |
| `COS_FILE_VOLUME`     | `/cos/files`     | 记录的挂载目录               |
| `COS_CODE_VOLUME`     | `/cos/codes`     | 代码的挂载目录               |
| `COS_BIN_VOLUME`      | `/cos/bins`      | 二进制文件的挂载目录         |
| `COS_BUNDLE_VOLUME`   | `/cos/bundles`   | 批量测试中测试程序的挂载目录 |
| `COS_ARTIFACT_VOLUME` | `/cos/artifacts` | 批量测试的 artifact 目录     |
| `COS_OUTPUT_VOLUME`   | `/cos/outputs`   | 批量测试输出文件的目录       |
| `COS_ORGID`           |                  | 组织 ID                      |
| `COS_USERID`          |                  | 用户 ID                      |
| `COS_WAREHOUSEID`     |                  | Warehouse ID                 |
| `COS_PROJECT`         |                  | 当前 Action 运行项目 SLUG    |
| `COS_PROJECTID`       |                  | 项目 ID                      |
| `COS_RECORDID`        |                  | 记录 ID                      |
| `COS_ENDPOINT`        |                  | 刻行 API 地址                |
| `COS_TOKEN`           |                  | CLI 和 API TOKEN             |

上述环境变量中部分值为空，这些属于可选项。若存在，其值为 UUID 格式的 ID 信息；若不存在，则为空。
