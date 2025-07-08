# Action Runtime Information

When an action is running, it automatically prepares some environment variables and upstream helper steps to facilitate data exchange between the action and the platform.

## Environment Variables {#environment-variables}

In addition to the system-reserved variables listed below, you may define your own variables for use at runtime.

**Avoid** naming collisions with the reserved variables to prevent unexpected errors.

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

## COS_TOKEN

`COS_TOKEN` is automatically injected at startup.

Its permissions **mirror those of the user who triggered the action**. When performing **cross-project** operations, ensure the triggering user holds the required permissions on the target project; otherwise, related API calls will fail.
