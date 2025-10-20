---
sidebar_position: 2
---

# Create an Action

When you need to execute a specific task, you can create an action in the project. Here are two ways to create an action:

1. Create an action by adding blank steps
2. Create an action by copying steps from an existing action

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
