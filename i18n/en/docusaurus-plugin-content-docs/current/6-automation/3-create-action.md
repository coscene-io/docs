---
sidebar_position: 2
---

# Create an Action

When you need to execute a specific task, you can create an action in the project. Choose how to create the action:

1. Create an action by adding blank steps
2. [Create a Ray action](#create-ray-action)
3. Create an action by copying steps from an existing action

## Create an Action by Adding Blank Steps

Take creating an action for "Unzipping Files" as an example to illustrate how to create an action by adding a "Image Code Execution" step.

1. Enter the project, go to the "Automation - Actions" page, and click the "Create Action" button.

   ![action_1](./img/action_1.png)

2. On the action creation page, fill in information such as the action name and steps.

- Action name: Unzip Files

  ![action_2](./img/action_2.png)

- Add a "Image Code Execution" step:

  ![action_3](./img/action_3.png)

- Step name: unzip
- Image: registry-vpc.cn-hangzhou.aliyuncs.com/coscene/cos:2025-02-06-v25.6.1
  - This image is provided by Kehang Space-Time, with the `icos` tool built - in. It only supports use within the platform. Learn more about [images](../image/1-about-docker-image.md).
- Command: icos fs decompress f \*.zip -i /cos/files -o /cos/files
  - Call the `icos` tool to decompress files whose names match `*.zip` in the `/cos/files` directory (record), and output the results to the original record.
  - You need to fill in one parameter per line. For example, fill in `icos` on the first line, `fs` on the second line, and so on.

  ![action_4](./img/action_4.png)

- Record file mount permission: Read/Write
  - Allow this action to read from and write to the original record during execution.

  ![action_5](./img/action_5.png)

3. Click the "Create Action" button to complete the action creation. Calling this action can decompress files whose names match `*.zip` in the record.

   ![action_6](./img/action_6.png)

## Create a Ray action {#create-ray-action}

In an environment with Ray enabled, you can run the same Python pipeline on multiple records. This example counts the files in each record and prints the count in the step log.

1. Build your image from the Ray worker base image provided for your environment. It includes compatible versions of Python, Ray, and the Matrix Action SDK. Put the following function in a module named `steps.py` and make sure the module is importable inside the image. Push the image to a registry accessible to your project.

   ```python
   from matrix_action_sdk import current_context


   def count_files() -> int:
       files = current_context().record.files_dir
       count = sum(1 for path in files.rglob("*") if path.is_file())
       print(f"file_count={count}", flush=True)
       return count
   ```

2. In your project, open **Automation → Actions**, click **Create Action**, enter `count-files` as the action name, and select **Use Ray**.
3. Enter the worker image address and set **Concurrent records** to `2`. Up to two records can be in the pipeline at the same time. All Python steps use this image.
4. Name the step `count`, enter `steps.count_files` as its **Python target**, and select 1 CPU and 2 GiB of memory. These resources apply to one execution of the step.
5. Save the action, then [select records and invoke the action](./5-invocation.md). Open the `count` step log for each record and look for `file_count=...`. The function reads the current record through its read-only input directory.

## Create an Action by Copying Steps from an Existing Action

Take creating an action for "Unzipping Files" as an example to illustrate how to create an action by copying steps from an existing action.

1. Enter the project, go to the "Automation - Actions" page, and click the "Create Action" button.

   ![action_1](./img/action_1.png)

2. On the action creation page, fill in the action name and copy steps from an existing action.

- Action name: Unzip Files
- Add a step: Copy the "main" step from the existing system action "Unzip Files".

  <img src={require('./img/action-copy_1.png').default} alt="action-copy_1" width="500" />

- Add a parameter: Add the parameter `filename` with a value of `*.zip` for the command `{{parameters.filename}}` to reference this parameter, indicating that files whose names match `*.zip` in the specified directory will be decompressed.

  ![action-copy_2](./img/action-copy_2.png)

3. Click the "Create Action" button to complete the action creation. Calling this action can decompress files whose names match `*.zip` in the record and output the results to the "Output" page of the "Invocation Details".
