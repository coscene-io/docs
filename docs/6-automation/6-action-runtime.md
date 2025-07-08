# 动作运行时信息

在动作执行期间，平台会自动注入一系列环境变量，并准备上／下游辅助步骤，方便动作与平台之间进行数据交换。

## 环境变量 {#environment-variables}

除了系统预设的环境变量，你也可以在动作中自行定义其他变量，供程序在运行过程中读取使用。

请务必 **避免** 与平台保留名称冲突，以免引发意外错误。系统保留变量如下表所示：

| 环境变量名称          | 默认值           | 描述                         |
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

## COS_TOKEN

`COS_TOKEN` 会在动作启动时自动注入到环境变量中，其权限与触发者账号 **完全一致**。

在例如 **跨项目** 等操作场景下，请确保触发者对目标项目拥有所需权限，否则相关 API 调用将会失败。
