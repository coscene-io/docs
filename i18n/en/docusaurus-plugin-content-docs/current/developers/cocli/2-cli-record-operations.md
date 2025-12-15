---
slug: record-operations
sidebar_position: 2
---

# Record and File Operations

Records are a core concept in the coScene platform. This document lists common operations for records and their files, with simple examples.

:::warning
For detailed parameters of specific commands, use `cocli [command] [subcommand] -h` to view them. This document only lists commonly used commands, parameters, and usage.
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

## Record Operations {#record-operations}

### Create a Record {#create-record}

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

### List Records in a Project {#list-records}

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

The list command will display records in the project, showing 100 records per page by default. You can use pagination options to browse all records:

```bash
# Use page-token for pagination (recommended)
cocli record list --page-size 10 --page-token "TOKEN_FROM_PREVIOUS_RESPONSE"

# Or use --all to get all records
cocli record list --all
```

You can also use filter options to filter records:

```bash
# Filter by labels
cocli record list --labels "label1,label2"

# Filter by title keywords
cocli record list --keywords "keyword1,keyword2"

# Include archived records
cocli record list --include-archive
```

### Upload Files to a Record {#upload-files-to-record}

You can upload any specified files or files within a directory to a specific record.

```bash
# Create a temporary file
touch episode-1.mcap

# Upload the file to the previously created Record
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

### Download Files from a Record {#download-files-from-record}

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

The CLI tool will package all files in the record into a folder named after the record ID. This feature helps maintain the independence of files when you need to download multiple records, making them easier to manage.

### Delete a Record {#delete-record}

The CLI tool can also be used to delete records. Deleting a record is a very dangerous operation, so please manually confirm whether you really need to delete the record or use the `-f` flag to force delete.

```bash
cocli record delete 9c9177f6-8194-4d69-8536-3cfebce6fc23
```

```bash
Are you sure you want to delete the record? (y/n) y
Record successfully deleted.
```

### View Record Information {#view-record}

The CLI tool can use the `describe` or `view` command to view detailed information about a record. The `describe` command outputs detailed information about the record, while the `view` command outputs the URL of the record.

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
If the record is associated with a device or contains custom field values, this information will also be displayed in the `describe` command output.
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

### Update Record Information {#update-record}

The CLI also supports changing the record's name, description, and other information. For a complete list of updates, please check the help documentation.

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af -d "Object movement process, mechanical arm torque did not reach expected level, failed" # Update record description
```

```
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

## Managing Moments {#manage-moments}

Moments are an important concept in records, representing a point in time or an event within a record. Through the CLI tool, we can manage moments in records.

### Create a Moment {#create-moment}

```bash
cocli record moment create bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 -n "first trigger" -D 120 -T 1753271704
```

```bash
INFO created moment: projects/b3d9cb59-aeff-4448-aded-808b27608675/events/17a9c804-6306-4da2-ab77-7765fac7023d
INFO upserted task: projects/b3d9cb59-aeff-4448-aded-808b27608675/tasks/5a650b42-8cf8-4583-a419-82d9b063c65f
```

### List Moments {#list-moments}

View the list of moments in a record:

```bash
cocli record moment list bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6
```

```bash
NAME              TRIGGER TIME                  DURATION
first trigger     2025-07-23T19:55:04+08:00     2m0s
intersection      2025-07-21T19:55:04+08:00     1m30s
traffic light     2025-07-20T19:55:04+08:00     1m15s
```

For processing moment data in scripts, you can use JSON format output:

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

### Download Moment Data {#download-moments}

Download moment data as a `moments.json` file to a local directory:

```bash
# Download to a specified directory (creates a subfolder named after the record-id)
cocli record moment download bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 ./output

# Download directly to the current directory (without creating a subfolder)
cocli record moment download bcdcb5f5-0246-4416-b9a4-4b1df7aa48c6 . --flat
```

## Managing Record Labels

Labels are an important means of managing and querying records. By adding and removing labels from records, we can easily distinguish different data during batch processing and automation.

### Add Labels

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af --append-labels "end-effector,wheels"
```

```bash
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

### Delete Labels

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af --delete-labels "end-effector"
```

```bash
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

### Replace All Labels

```bash
cocli record update 52c5afac-22ca-4ab5-b9cf-fc069053b1af --update-labels "end-effector,pick-and-place"
```

```bash
Successfully updated record projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

Finally, let's confirm that the record's labels have been updated.

```bash
cocli record describe 52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

```bash
Field                    Value
ID:                      52c5afac-22ca-4ab5-b9cf-fc069053b1af
Name:                    projects/b3d9cb59-aeff-4448-aded-808b27608675/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
Title:                   humanoid-episode-100
Description:             Object movement process, mechanical arm torque did not reach expected level, failed
Labels:                  pick-and-place, end-effector
Create Time:             2025-07-17T21:58:43+08:00
Update Time:             2025-07-18T15:21:07+08:00
Archived:                false
URL:                     https://coscene.cn/coscene-lark/docs/records/52c5afac-22ca-4ab5-b9cf-fc069053b1af
```

## File Operations {#file-operations}

The CLI tool provides rich file management features, including listing, deleting, copying, and moving files.

### List Files {#list-files}

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

You can also use additional options to filter and view files:

```bash
# Recursively list all files (including subdirectories)
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af -R

# List files in a specific directory
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af --dir "logs/"

# Use JSON format output (for script processing)
cocli record file list 52c5afac-22ca-4ab5-b9cf-fc069053b1af -o json
```

### Delete Files {#delete-file}

```bash
cocli record file delete 52c5afac-22ca-4ab5-b9cf-fc069053b1af node-logs.log
```

```
Are you sure you want to delete the file 'node-logs.log' from record? (y/n) y
File 'node-logs.log' successfully deleted.
```

### Copy Files {#copy-file}

You can copy a file from one record to another:

```bash
cocli record file copy <source-record-id> <target-record-id> <filename>
```

### Move Files {#move-file}

You can also move a file from one record to another:

```bash
cocli record file move <source-record-id> <target-record-id> <filename>
```
