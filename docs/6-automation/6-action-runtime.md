# 动作运行时信息

在动作执行期间，刻行平台会自动注入一些环境变量，并提供相应的辅助步骤，方便动作与平台进行数据交互。

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

进行**跨项目**操作时，请确保动作触发者拥有目标项目的相应权限，否则相关 API 调用将失败。

## 使用输出目录创建和更新现有记录

在 Action 的运行时，可以使用 COS_TOKEN 来调用 OpenAPI 或 coCLI 来完成几乎所有的平台操作。

对于创建和更新记录的常见操作，也可以按指定的文件结构输出，动作运行环境自动完成记录创建和更新。

当动作运行结束后，平台会自动扫描 COS_OUTPUT_VOLUME 下的特定目录结构，并根据配置文件自动创建或更新记录，同时上传相关文件。

### 目录结构规范 {#directory-convention}

请在挂载的 COS_OUTPUT_VOLUME 目录内，按照以下结构存放文件：

```
$COS_OUTPUT_VOLUME
└── records
    ├── 记录目录1/                # 任意命名
    │   ├── front-001.jpg        # 待上传的文件
    │   ├── front-002.jpg
    │   └── .cos/
    │       └── record.patch.json
    └── 记录目录2/
        ├── rear-001.jpg
        ├── rear-002.jpg
        └── .cos/
            └── record.patch.json
```

关键要求：

- /records 下每个一级子目录表示一个记录操作。
- 每个记录目录内必须包含一个 .cos/ 子目录。
- .cos/ 目录必须包含一个 record.patch.json 文件。
- 记录目录中的其他文件会自动上传至对应记录。

### 声明文件格式 {#declaration-file-schema}

`record.patch.json` 定义记录的创建或更新操作，格式如下：

```json
{
  "projectSlug": "项目slug", // 可选，默认使用当前项目
  "id": "记录的 UUID", // 更新或删除操作时必填
  "labels": [],
  "title": "记录标题", // 创建记录时必填
  "description": "记录描述", // 可选
  // 其他 record 属性，可选
  "patch": [
    // RFC 6902 JSON Patch 标准
    { "op": "replace", "path": "/title", "value": "Cam-front (night)" },
    { "op": "add", "path": "/labels/-", "value": "night-run" },
    { "op": "remove", "path": "/labels/0" },
    { "op": "add", "path": "/files/path/to/file", "value": "../1.jpg" }
  ]
}
```

该 JSON 文件主要包含三个部分：

- 特殊属性：如需要进行跨项目操作，请指定 `projectSlug`。
- 常规属性：描述记录的基本信息，未指定 id 时表示创建新记录。
- patch 数组：提供细粒度的属性修改控制，格式遵循 RFC 6902 标准。

## Ray 步骤的输入绑定和资源 {#ray-steps}

在[创建 Ray 动作](./3-create-action/2-ray-action.md)中，`sample` 返回当前记录的抽帧清单路径。`detect` 用 `depends` 声明执行顺序，并通过 `python.bindings` 指定参数的来源：键 `manifest_path` 是 Python 方法的参数名，值 `sample` 是产生该值的步骤名。如果将参数也命名为 `sample`，SDK 可按名称自动绑定这个直接依赖的返回值，此时可以省略 `bindings`。

```yaml
- name: detect
  depends: [sample]
  python:
    target: camera.ObjectDetector
    bindings:
      manifest_path: sample
    resources:
      cpu: CPU_QUOTA_1C
      memory: MEMORY_QUOTA_2G
```

每个 Actor 步骤有独立的实例池，实例数等于 `ray.concurrency`。如果 `setup()` 加载一个模型，并发度为 2 时，这个步骤会加载两份模型。按单个实例执行时的峰值配置步骤资源；提高并发度时，按实例数估算总内存，以及模型在 GPU 上运行时所需的总显存。

### 获取当前步骤的上下文 {#ray-step-context}

在 Task 函数或 Actor 的 `run` 方法中调用 `ctx = current_context()`。这个 SDK 函数无需传参。运行时会在每次调用步骤时设置上下文，因此 Actor 处理多条记录时，应在每次进入 `run` 时获取当前记录的上下文。在 Actor 构造函数中调用会抛出 `RuntimeError`。

| 属性 | 类型 | 用途 |
| --- | --- | --- |
| `ctx.action_run_id` | `str` | 本次动作调用的 ID。 |
| `ctx.job_run_id` | `str` | 本次调用中处理当前记录的 JobRun ID。 |
| `ctx.step` | `str` | 当前步骤在动作 YAML 中的名称，例如 `detect`。 |
| `ctx.record.id` | `str` | 当前输入记录的 ID。 |
| `ctx.record.files_dir` | `pathlib.Path` | 当前记录的只读文件目录，可从这里打开 MCAP。 |
| `ctx.outputs_dir` | `pathlib.Path` | 当前 JobRun 的可写输出目录，同一条记录的多个步骤可在这里共享文件。 |
| `ctx.parameters` | 只读映射 | 本次动作调用的参数，按参数名读取。通过 `python.bindings` 绑定的上游返回值则通过步骤函数或方法的形参接收。 |
| `ctx.logger` | `logging.LoggerAdapter` | 写入携带 ActionRun ID、JobRun ID、记录 ID 和步骤名的日志。 |
