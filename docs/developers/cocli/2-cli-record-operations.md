---
slug: record-operations
sidebar_position: 2
---

# 操作记录和文件

记录是刻行平台中的核心概念，本文列举了记录和其中文件的常见操作，并附简单的例子。

关于具体命令的的详细参数，可以使用 `cocli [command] -h` 来查看。

```bash
cocli record -h
```

```bash
Work with coScene record.

Usage:
  cocli record [command]

Available Commands:
  copy          Copy a record to target project/record
  create        Create a new record
  create-moment Create moment in the record
  delete        Delete a record
  describe      Describe record metadata.
  download      Download files from record to directory.
  file          Manage files in records
  list          List records in the project.
  list-moments  List moments in the record
  update        Update record.
  upload        Upload files in directory to a record in coScene.
  view          View record.

Flags:
  -h, --help   help for record

Global Flags:
      --config string      config file path (default "/Users/yujing/.cocli.yaml")
      --log-level string   log level, one of: trace|debug|info|warn|error (default "info")

Use "cocli record [command] --help" for more information about a command.
```

## 记录操作

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
Note: Showing first 100 records (default page size). Use --all to list all records or --page-size to specify page size.

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
```

List 命令会将项目中的所有记录列出，当记录数量增长到一定程度后，也可以通过指定 `page` 和 `page size` 来对记录列表进行分页查询。

```bash
cocli record list --page-size 10 --page 2
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

```bash
cocli record describe 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
The record url is: https://coscene.cn/coscene-lark/docs/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

### 更新记录信息 {#update-record}

命令行也支持更改记录的名字、描述等信息，完整的更新列表请查看帮助。

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af -d "物体运行过程中，机械臂扭矩未达到预期，失败" # 更新记录描述
```

```
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
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
