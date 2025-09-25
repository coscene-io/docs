---
sidebar_position: 2
---

# S3 Operations

In a project, you can perform operations such as uploading and downloading records and resources through S3.

## Storage Paths

1. **Records**

    The path of files in records within the corresponding S3 bucket is `records/<record-id>/files/<file-name>`.

    For example, if the record ID is `123456` and the file name is `example.txt`, the file path would be `records/123456/files/example.txt`.

    ![s3-record](./img/s3-record.png)

2. **Resources**

    The path of files in resources within the corresponding S3 bucket is `files/<file-name>`.

    For example, if the file name in resources is `example.txt`, the file path would be `files/example.txt`.

    ![s3-resource](./img/s3-resource.png)

## Operation Examples
Using the [AIStor Client(mc)](https://docs.min.io/enterprise/aistor-object-store/reference/cli/) tool as an example. Assume the project bucket is `coscene.01`, the record ID is `123456`, the file name is `example.txt`, and the S3 configuration alias is `coscene`.

### List Files

1. List files in a record

    ```bash
    mc ls coscene/coscene.01/records/123456/files/
    ```

2. List files in resources

    ```bash
    mc ls coscene/coscene.01/files/
    ```

### Upload Files

1. Upload a file to a record:

    ```bash
    mc put example.txt coscene/coscene.01/records/123456/files/
    ```

2. Upload a file to resources:

    ```bash
    mc put example.txt coscene/coscene.01/files/
    ```

### Download Files

1. Download a file from a record

    ```bash
    mc get coscene/coscene.01/records/123456/files/example.txt .
    ```

2. Download a file from resources

    ```bash
    mc get coscene/coscene.01/files/example.txt .
    ```