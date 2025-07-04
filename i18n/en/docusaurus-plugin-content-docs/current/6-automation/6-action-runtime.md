# Action Runtime Information

When an action is running, it automatically prepares some environment variables and upstream helper steps to facilitate data exchange between the action and the platform.

## Environment Variables {#environment-variables}

Define environment variables in an action for the program to read and use during runtime.

When defining environment variables, please avoid using the names preset by the platform to prevent unexpected errors in the program. The platform's preset environment variables are as follows:

| Environment Variable Name | Value            | Description                                        |
| ------------------------- | ---------------- | -------------------------------------------------- |
| `COS_FILE_VOLUME`         | `/cos/files`     | Mount directory for records                        |
| `COS_CODE_VOLUME`         | `/cos/codes`     | Mount directory for code                           |
| `COS_BIN_VOLUME`          | `/cos/bins`      | Mount directory for binary files                   |
| `COS_BUNDLE_VOLUME`       | `/cos/bundles`   | Mount directory for test programs in batch testing |
| `COS_ARTIFACT_VOLUME`     | `/cos/artifacts` | Artifact directory for batch testing               |
| `COS_OUTPUT_VOLUME`       | `/cos/outputs`   | Output file directory for batch testing            |
| `COS_ORGID`               | ORG UUID         | ORG ID                                             |
| `COS_USERID`              | USER UUID        | USER ID                                            |
| `COS_WAREHOUSEID`         | WAREHOUSE UUID   | Warehouse ID                                       |
| `COS_PROJECT`             | PROJECT SLUG     | Current Action Running Project SLUG                |
| `COS_PROJECTID`           | PROJECT UUID     | Current Action Running Project ID                  |
| `COS_RECORDID`            | RECORD UUID      | Record ID                                          |
| `COS_ENDPOINT`            | API URL          | coScene API Endpoint                               |
| `COS_TOKEN`               |                  | CLI and API Token                                  |

Some of the above environment variables have empty values, which are optional. If they exist, their values are in UUID format; if not, they are empty.
