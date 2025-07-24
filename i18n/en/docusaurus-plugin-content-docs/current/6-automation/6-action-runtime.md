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

## Using Output Directory to Create and Update Records

During action runtime, you can use `COS_TOKEN` to call OpenAPI or coCLI to perform almost all platform operations.

For common operations like creating and updating records, you can also output files according to a specified file structure, and the action runtime environment will automatically complete record creation and updates.

After the action finishes running, the platform will automatically scan the specific directory structure under `COS_OUTPUT_VOLUME` and automatically create or update records based on configuration files, while uploading related files.

### Directory Structure Convention {#directory-convention}

Please organize files according to the following structure within the mounted `COS_OUTPUT_VOLUME` directory:

```
$COS_OUTPUT_VOLUME
└── records
    ├── record-directory-1/      # Any name
    │   ├── front-001.jpg        # Files to be uploaded
    │   ├── front-002.jpg
    │   └── .cos/
    │       └── record.patch.json
    └── record-directory-2/
        ├── rear-001.jpg
        ├── rear-002.jpg
        └── .cos/
            └── record.patch.json
```

Key requirements:

- Each first-level subdirectory under `/records` represents a record operation.
- Each record directory must contain a `.cos/` subdirectory.
- The `.cos/` directory must contain a `record.patch.json` file.
- Other files in the record directory will be automatically uploaded to the corresponding record.

### Declaration File Format {#declaration-file-schema}

`record.patch.json` defines record creation or update operations in the following format:

```json
{
  "projectSlug": "project-slug", // Optional, defaults to current project
  "id": "record UUID", // Required for update or delete operations
  "labels": [],
  "title": "Record Title", // Required when creating records
  "description": "Record Description", // Optional
  // Other record properties, optional
  "patch": [
    // RFC 6902 JSON Patch standard
    { "op": "replace", "path": "/title", "value": "Cam-front (night)" },
    { "op": "add", "path": "/labels/-", "value": "night-run" },
    { "op": "remove", "path": "/labels/0" },
    { "op": "add", "path": "/files/path/to/file", "value": "../1.jpg" }
  ]
}
```

This JSON file mainly contains three parts:

- Special properties: If you need to perform cross-project operations, specify `projectSlug`.
- Regular properties: Describe basic record information. When no `id` is specified, it indicates creating a new record.
- patch array: Provides fine-grained property modification control, following the RFC 6902 standard.
