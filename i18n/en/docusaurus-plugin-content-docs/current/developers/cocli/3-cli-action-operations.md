---
slug: action-operations
sidebar_position: 3
---

# Managing Actions with CLI Tools

The coScene action system can be used to trigger complex calculations and processing tasks. By scripting with the CLI tool, you can greatly enhance the automation in your workflow. For detailed help on using the CLI to operate actions, refer to

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

# List Actions in the Current Project

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

## Trigger an Action

After finding the action we want to execute, we can directly trigger it from the command line to achieve full automation.

Here, we have prepared an action that will list the files in the current directory and output the result.

Actions require data from records to run. We first find the required action ID and record ID, and then use these IDs to trigger the action.

:::tip Recommend Using JSON Output
Using JSON output with the `jq` tool to extract IDs is more reliable and stable.
:::

```bash
# Use JSON output to get record and action, e.g., to run the coScene-test action on the first record
RECORD_NAME=$(cocli record list -o json | jq -r '.records[0].name')
ACTION_NAME=$(cocli action list -o json | jq -r '.actions[] | select(.spec.name | contains("coScene-test")) | .name')
cocli action run $ACTION_NAME $RECORD_NAME
```

```
The final parameters in the action run to be created:
Action run created successfully.
```

Executing an action is a resource-intensive operation. Without the `-f` flag, you need to manually confirm the execution. If you do not need manual confirmation for the current operation, you can use the `-f` flag to skip it. This is very useful when processing large amounts of data in bulk.

```bash
cocli action run $ACTION_NAME $RECORD_NAME -f
```

```
The final parameters in the action run to be created:
Action run created successfully.
```

More complex actions may require additional parameters for customization. You can provide these parameters using the `-p` flag.

```bash
cocli action run $ACTION_NAME $RECORD_NAME -f -p parameter1=123 -p parameter2=456
```

Please note that in this calling mode, if there are parameters other than `parameter1` and `parameter2`, the remaining parameters will use the default values defined in the action if not explicitly provided.

### View Action Invocation History

After successfully triggering an action, you can view the invocation history to see the actions you have triggered.

```bash
cocli action list-run
```

For more detailed information or for script processing, you can use JSON format output:

```bash
cocli action list-run -o json
```
