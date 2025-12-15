---
slug: record-operations
sidebar_position: 2
---

# 操作记录和文件

记录是刻行平台中的核心概念，本文列举了记录和其中文件的常见操作，并附简单的例子。

:::warning
关于具体命令的的详细参数，都以使用 `cocli [command] [subcommand] -h` 来查看。本文中只列举了常用的命令和参数及用法。
:::

```bash
cocli record -h
```

```bash
Work with coScene record.

Usage:
  cocli record [command]

Available Commands:
  copy        Copy a record to target project
  create      Create a new record
  delete      Delete a record
  describe    Describe record metadata
  download    Download all files from a record
  file        Manage files in records
  list        List records in a project
  moment      Manage moments in records
  move        Move a record to target project
  update      Update record metadata
  upload      Upload files or directory to a record
  view        View record details

Flags:
  -h, --help   help for record

Global Flags:
      --config string      config file path (default "/Users/yujing/.cocli.yaml")
      --log-level string   log level, one of: trace|debug|info|warn|error (default "info")

Use "cocli record [command] --help" for more information about a command.
```

## 记录操作 {#record-operations}

### 创建记录 {#create-record}

```bash
cocli record create -t humanoid-episode-01 -d "the first episode of data collection"
```

```bash
Record created successfully!
-------------------------------------------------------------
Field                    Value
ID:                      c5f7a2fa-a366-41e0-b1d8-1498b75348f0
Name:                    projects/b3d9cb59-aeff-4448-aded-808b27608675/records/c5f7a2fa-a366-41e0-b1d8-1498b75348f0
Title:                   humanoid-episode-01
Description:             the first episode of data collection
Create Time:             2025-07-17T21:56:07+08:00
Update Time:             2025-07-17T21:56:07+08:00
Archived:                false
URL:                     https://coscene.cn/coscene-lark/docs/records/c5f7a2fa-a366-41e0-b1d8-1498b75348f0
-------------------------------------------------------------
```

### 列举项目中的记录 {#list-records}

```bash
cocli record list
```

```bash
ID                                       TITLE                                        LABELS                        CREATE TIME
9c9177f6-8194-4d69-8536-3cfebce6fc23     humanoid-episode-200                                                       2025-07-17T21:59:04+08:00
c729f6ab-f4e8-4d1e-adf4-24d0165939e9     humanoid-episode-199                                                       2025-07-17T21:59:04+08:00
5ac02141-1ac9-4b5b-b0d0-6ea8df6bfcf4     humanoid-episode-198                                                       2025-07-17T21:59:04+08:00
ab1eab19-6f46-422a-bb54-24157e7f24b3     humanoid-episode-197                                                       2025-07-17T21:59:04+08:00
fe67cd75-6422-44cc-bd80-17a51c1f86a7     humanoid-episode-196                                                       2025-07-17T21:59:03+08:00
44bb67cb-db4f-4aa8-9ef7-7354870a8b65     humanoid-episode-195                                                       2025-07-17T21:59:03+08:00
c58469bd-6373-42cd-9bf0-e0e69adc440b     humanoid-episode-194                                                       2025-07-17T21:59:03+08:00
f1f6a93e-0d00-4c88-aadb-3483366fb864     humanoid-episode-193                                                       2025-07-17T21:59:03+08:00
662464e6-9acd-4228-908b-013a714f8491     humanoid-episode-192                                                       2025-07-17T21:59:03+08:00
72c569d8-20ba-4810-9db7-7fb6b9e928db     humanoid-episode-191                                                       2025-07-17T21:59:02+08:00
7a338e0c-619a-4b9d-8dca-c6486c6da4af     humanoid-episode-190                                                       2025-07-17T21:59:02+08:00
47f3b154-dfee-4a64-aaba-b869545fb18e     humanoid-episode-189                                                       2025-07-17T21:59:02+08:00
6b4e938c-eaa0-4e6f-9d12-d1ab79679e22     humanoid-episode-188                                                       2025-07-17T21:59:02+08:00
ed3c6fdf-9fe9-4ebe-af4f-fb2f761a27f5     humanoid-episode-187                                                       2025-07-17T21:59:02+08:00
d00077d9-65f6-4b30-a92a-61a6ec1e478e     humanoid-episode-186                                                       2025-07-17T21:59:01+08:00
fcd65058-d777-48ca-99f3-606fc02834e6     humanoid-episode-185                                                       2025-07-17T21:59:01+08:00
53ffbdfa-43ae-44bf-abcd-a99548175776     humanoid-episode-184                                                       2025-07-17T21:59:01+08:00
...

Next page available. To continue, add: --page-token "TOKEN_HERE"
```

List 命令会将项目中的记录列出，默认每页显示 100 条记录。您可以使用分页选项来浏览所有记录：

```bash
# 使用 page-token 进行分页（推荐）
cocli record list --page-size 10 --page-token "TOKEN_FROM_PREVIOUS_RESPONSE"

# 或者使用 --all 获取所有记录
cocli record list --all
```

您还可以使用过滤选项来筛选记录：

```bash
# 按标签过滤
cocli record list --labels "label1,label2"

# 按标题关键字过滤
cocli record list --keywords "keyword1,keyword2"

# 包含已归档的记录
cocli record list --include-archive
```

### 上传文件到记录 {#upload-files-to-record}

您可以将任意指定的文件或者目录内的文件上传到特定记录

```bash
# 创建一个临时文件
touch episode-1.mcap

# 将该文件上传到前面创建的 Record
cocli record upload 9c9177f6-8194-4d69-8536-3cfebce6fc2 ./episode-1.mcap
```

```bash
-------------------------------------------------------------
Uploading files to record: 9c9177f6-8194-4d69-8536-3cfebce6fc23
Upload Status:
/Users/yujing/Workspace/co/docs/episode-1.mcap:                                                              Upload completed

Total: 1, Skipped: 0, Success: 1
View record at: https://coscene.cn/coscene-lark/docs/records/9c9177f6-8194-4d69-8536-3cfebce6fc2
```

### 下载记录中的文件 {#download-files-from-record}

```bash
cocli record download 9c9177f6-8194-4d69-8536-3cfebce6fc2 .
```

```
-------------------------------------------------------------
Downloading record 9c9177f6-8194-4d69-8536-3cfebce6fc23
View record at: https://coscene.cn/coscene-lark/docs/records/9c9177f6-8194-4d69-8536-3cfebce6fc23
Saving to /Users/yujing/Workspace/co/docs/9c9177f6-8194-4d69-8536-3cfebce6fc23

Downloading #1 file: episode-1.mcap

Download completed!
All 1 / 1 files are saved to /Users/yujing/Workspace/co/docs/9c9177f6-8194-4d69-8536-3cfebce6fc23
```

命令行工具会将记录中的所有文件打包在以记录 ID 为名字的文件夹内，这个功能在您之后可能会遇到的下载多个记录中帮助您保持文件的独立性，方便管理。

### 删除记录 {#delete-record}

命令行工具也可以用来删除记录，删除记录是一个非常危险的操作，请在删除时手工确认是否真的需要
删除记录，或者使用 `-f` 标记来强制删除。

```bash
cocli record delete 9c9177f6-8194-4d69-8536-3cfebce6fc23
```

```bash
Are you sure you want to delete the record? (y/n) y
Record successfully deleted.
```

### 查看记录信息 {#view-record}

命令行工具可以通过 `describe` 或者 `view` 命令来查看记录的详细信息。`describe` 命令会输出记录的详细信息，而 `view` 命令则会输出记录的 URL。

```bash
cocli record describe 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
Field         Value
ID:           52c5afac-22ca-4ab5-b9cf-fc069053b1af
Name:         projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
Title:        humanoid-episode-100
Description:  episode #100 of data collection
Create Time:  2025-07-17T21:58:43+08:00
Update Time:  2025-07-17T21:58:43+08:00
Archived:     false
URL:          https://coscene.cn/coscene-lark/docs/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

:::tip
如果记录关联了设备或包含自定义字段值，这些信息也会在 `describe` 命令的输出中显示。
:::

```bash
cocli record view 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
The record url is: https://coscene.cn/coscene-lark/docs/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
cocli record describe 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
Field                    Value
ID:                      52c5afac-22ca-4ab5-b9cf-fc069053b1af
...
URL:                     https://coscene.cn/coscene-lark/docs/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

### 更新记录信息 {#update-record}

命令行也支持更改记录的名字、描述等信息，完整的更新列表请查看帮助。

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af -d "物体运行过程中，机械臂扭矩未达到预期，失败" # 更新记录描述
```

```
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

## 管理一刻 {#manage-moments}

一刻是记录中的一个重要概念，它代表了记录中的一个时间点或事件。通过命令行工具，我们可以对记录中的一刻进行管理。

### 创建一刻 {#create-moment}

```bash
cocli record moment create bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 -n "first trigger" -D 120 -T 1753271704
```

```bash
INFO created moment: projects/b3d9cb59-aeff-4448-aded-808b27608675/events/17a9c804-6306-4da2-ab77-7765fac7023d
INFO upserted task: projects/b3d9cb59-aeff-4448-aded-808b27608675/tasks/5a650b42-8cf8-4583-a419-82d9b063c65f
```

### 列举一刻 {#list-moments}

查看记录中的一刻列表：

```bash
cocli record moment list bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6
```

```bash
NAME              TRIGGER TIME                  DURATION
first trigger     2025-07-23T19:55:04+08:00     2m0s
intersection      2025-07-21T19:55:04+08:00     1m30s
traffic light     2025-07-20T19:55:04+08:00     1m15s
```

如需在脚本中处理一刻数据，可以使用 JSON 格式输出：

```bash
cocli record moment list bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 -o json
```

```json
{
  "events": [
    {
      "name": "projects/b3d9cb59-aeff-4448-aded-808b27608675/events/17a9c804-6306-4da2-ab77-7765fac7023d",
      "displayName": "first trigger",
      "triggerTime": "2025-07-23T11:55:04Z",
      "createTime": "2025-07-23T11:55:25.600Z",
      "updateTime": "2025-07-23T11:55:25.600Z",
      "duration": "120s",
      "device": {},
      "task": {},
      "creator": "users/883c8529-1c1a-403b-960d-71eff4699aa3",
      "record": "projects/b3d9cb59-aeff-4448-aded-808b27608675/records/bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6",
      "rule": {}
    }
  ],
  "totalSize": "1"
}
```

### 下载一刻数据 {#download-moments}

将一刻数据下载为 `moments.json` 文件保存到本地目录：

```bash
# 下载到指定目录（会在目录下创建以 record-id 命名的子文件夹）
cocli record moment download bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 ./output

# 直接下载到当前目录（不创建子文件夹）
cocli record moment download bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 . --flat
```

## 管理记录的标签

标签是管理和查询记录的重要手段，通过对记录添加和删除标签，我们可以在批处理和自动化的过程中，对不同的数据进行简单的区分。

### 添加标签

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af --append-labels "end-effector,wheels"
```

```bash
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

### 删除标签

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af --delete-labels "end-effector"
```

```bash
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

### 整体替换标签

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af --update-labels "end-effector,pick-and-place"
```

```bash
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

最后我们确认下，记录的标签已经被更新了。

```bash
cocli record describe 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
Field                    Value
ID:                      52c5afac-22ca-4ab5-b9cf-fc069053b1af
Name:                    projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
Title:                   humanoid-episode-100
Description:             物体运行过程中，机械臂扭矩未达到预期，失败
Labels:                  pick-and-place, end-effector
Create Time:             2025-07-17T21:58:43+08:00
Update Time:             2025-07-18T15:21:07+08:00
Archived:                false
URL:                     https://coscene.cn/coscene-lark/docs/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

## 文件操作 {#file-operations}

命令行工具提供了丰富的文件管理功能，包括列举、删除、复制和移动文件等操作。

### 列举文件 {#list-files}

```bash
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
FILENAME          SIZE                UPDATE TIME                   CREATE TIME
episode-1.bag     500.6 MB            2025-07-18T15:25:25+08:00     2025-07-18T15:25:25+08:00
metadata.json     626 kB              2025-07-18T15:25:20+08:00     2025-07-18T15:25:20+08:00
map.png           174 kB              2025-07-18T15:25:16+08:00     2025-07-18T15:25:16+08:00
node-logs.log     522 kB              2025-07-18T15:25:12+08:00     2025-07-18T15:25:12+08:00
```

您也可以使用额外的选项来过滤和查看文件：

```bash
# 递归列举所有文件（包括子目录）
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af -R

# 列举特定目录下的文件
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af --dir "logs/"

# 使用 JSON 格式输出（便于脚本处理）
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af -o json
```

### 删除文件 {#delete-file}

```bash
cocli record file delete 52c5afac-22ca-4ab5-b9cf-fc069053b1af node-logs.log
```

```
Are you sure you want to delete the file 'node-logs.log' from record? (y/n) y
File 'node-logs.log' successfully deleted.
```

### 复制文件 {#copy-file}

您可以将文件从一个记录复制到另一个记录：

```bash
cocli record file copy <source-record-id> <target-record-id> <filename>
```

### 移动文件 {#move-file}

您也可以将文件从一个记录移动到另一个记录：

```bash
cocli record file move <source-record-id> <target-record-id> <filename>
```
