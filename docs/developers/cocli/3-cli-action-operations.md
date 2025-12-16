---
slug: action-operations
sidebar_position: 3
---

# 使用命令行工具管理动作（Actions）

coScene 的动作系统可以用来触发复杂的计算和处理过程，通过使用 CLI 工具编写脚本，可以极大
的提高实际工作流程中的自动化程度。关于使用命令行操作动作的详细帮助可以参考

```bash
cocli action -h
```

```
Work with coScene action.

Usage:
  cocli action [command]

Available Commands:
  list        List actions in the current project
  list-run    List action-runs in the current project
  run         Create an action run.

Flags:
  -h, --help   help for action

Global Flags:
      --config string      config file path (default "/Users/yujing/.cocli.yaml")
      --log-level string   log level, one of: trace|debug|info|warn|error (default "info")

Use "cocli action [command] --help" for more information about a command.
```

# 列出当前项目中的动作 {#list-actions-in-the-current-project}

```bash
cocli action list
```

```
ID                                       CATEGORY    TITLE                              AUTHOR                   UPDATE TIME
5110ab15-9cc9-452b-b9d6-46be3adc7ef4     system      analysis-export                                             1970-01-01T08:00:00+08:00
c2a0f23a-0384-4de3-bed6-ee27e457c714     system      copy-record                                                 1970-01-01T08:00:00+08:00
7a605493-628e-4348-9c3d-446cc6cbfcb1     system      create-task                                                 1970-01-01T08:00:00+08:00
bf9b33a3-1f00-44a8-afb8-a9920b9b66e6     system      csv-mcap-converter                                          1970-01-01T08:00:00+08:00
a142623d-b7f9-4989-a8fe-7d12e9f66694     system      curve-comparison                                            1970-01-01T08:00:00+08:00
5ecf5286-cb74-470f-a172-6cc8f346191f     system      decompress-file                                             1970-01-01T08:00:00+08:00
73c5d00c-7c3d-41b9-b3d2-31d7b54df94e     system      event-creator                                               1970-01-01T08:00:00+08:00
a903fb83-f028-4bef-ab5a-c6a1c7df9a69     system      extraction                                                  1970-01-01T08:00:00+08:00
e99fecdb-74c5-41f9-8061-841d054d52a8     system      hdf5-mcap-converter                                         1970-01-01T08:00:00+08:00
7b48486a-b94d-4558-ac79-8c2b91ab0f50     system      mcap-hdf5-converter                                         1970-01-01T08:00:00+08:00
d8fcf7dd-b7f7-4c5d-ae4a-c45ba0321c89     system      parse-pcap-and-upload                                       1970-01-01T08:00:00+08:00
06105ba0-3a69-4fc4-9bf4-8795b423e8fe     system      record-auto-diagnosis                                       1970-01-01T08:00:00+08:00
68813bbe-d4e4-478d-acce-49f790e9cea7     system      record-clipper                                              1970-01-01T08:00:00+08:00
f9ceb8c8-63c3-4b37-a057-e9f70755e354     system      remote-file-for-record                                      1970-01-01T08:00:00+08:00
fb1bb37a-7b27-11ee-b962-0242ac120002     system      ros2-mcap-converter                                         1970-01-01T08:00:00+08:00
6cdf7cf9-d635-4cad-9333-cb58fc6a8e24     system      yw-cyber-converter                                          1970-01-01T08:00:00+08:00
```

## 触发动作 {#trigger-an-action}

找到我们想要的执行的动作之后，我们可以在命令行中，直接触发这个动作，实现全流程的自动化。

这里我们准备了一个动作，会将当前目录下文件进行 List 操作并输出。

动作需要记录的数据进行运行，我们先找到我们需要的动作 ID 和记录 ID，然后使用这两个 ID，触发动作。

:::tip 推荐使用 JSON 输出
使用 JSON 输出和 `jq` 工具来提取 ID 更加可靠和稳定。
:::

```bash
# 使用 JSON 输出获取记录和动作, 比如要在第一个记录中执行 coScene-test 动作
RECORD_NAME=$(cocli record list -o json | jq -r '.records[0].name')
ACTION_NAME=$(cocli action list -o json | jq -r '.actions[] | select(.spec.name | contains("coScene-test")) | .name')
cocli action run $ACTION_NAME $RECORD_NAME
```

```
The final parameters in the action run to be created:
Action run created successfully.
```

执行动作是一个比较消耗计算和存储资源的操作，在没有 `-f` 标识位的情况下，需要手动确认
才会真正执行。如果对当前操作不需要进行手动确认的，可以使用 `-f` 标志直接跳过。这在批量
处理大量数据的情况下非常实用。

```bash
cocli action run $ACTION_NAME $RECORD_NAME -f
```

```
The final parameters in the action run to be created:
Action run created successfully.
```

较为复杂的动作可能会需要额外的参数对动作进行定制，您可以使用 `-p` 的标志位提供这些参数

```bash
cocli action run $ACTION_NAME $RECORD_NAME -f -p 参数1=123 -p 参数2=456
```

请注意在这种调用模式下，如果有 `参数1` 和 `参数2` 之外的参数，那么剩余的这些未提供明确数值的参数会使用动作中定义的默认值

### 查看动作调用历史

成功触发之后，我们就可以在调用历史中查看我们触发的调用了。

```bash
cocli action list-run
```

如需查看更详细的信息或用于脚本处理，可以使用 JSON 格式输出：

```bash
cocli action list-run -o json
```
