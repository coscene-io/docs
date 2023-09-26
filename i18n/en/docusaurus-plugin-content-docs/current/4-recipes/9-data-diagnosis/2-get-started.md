---
sidebar_position: 2
---

# Set Up Your Data Collection

Using a preset scenario as an example, let's achieve your automatic data collection and diagnosis:

- When the "error 1" phrase appears in the log of the device 'dev-A', the log file will be uploaded to the record, and a moment will be created at the time this phrase appears.

## Prerequisites

1. Ensure you have a device ready.
2. Create a project named `auto-upload`. For more details, refer to [Creating a Project](https://docs.coscene.cn/docs/get-started/create-project-flow#3-%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE).
3. Ensure your role in the CoScene organization is set to "Administrator". If you're not an administrator, contact your organizational admin to update your role.
   ![org-role](../img/org-role.png)

## Adding Rules to Your Project

1. Navigate to the `auto-upload` project.
   ![pro-1](../img/pro-1.png)
2. Within the project, go to the 'Manage Project - Data Collection and Diagnosis Rules' page and click on "Add Rule Group".
   ![pro-rule-1](../img/pro-rule-1.png)
3. Clear any default content in the rules section. Copy the following rule and paste it into the editor:

   ```
   name: error series # Rule group name

   rules:
   - when:
         - has(msg.message, "error 1") # Trigger condition: log contains the string "error 1"
      actions:
         - upload(title="Localization lost - error 1") # Create a record named "Localization lost - error 1" and upload the log file to this record
         - create_moment(title="Localization lost") # Create a moment named "Localization lost"

   enabled: true # Rule group status: enabled

   version: v1 # The current rule group version is only v1
   ```

   \*For more rule styles, see [Structure and Examples of Rules](./4-rule-format.md).

4. Click the "Save" button.

   ![pro-rule-4](../img/pro-rule-4.png)

<br />

## Configure Data Collection Device Information

1. Go to the "Devices" tab on the organization management page, and click the "Edit Data Collection Rules" button.

   ![org-device-1](../img/org-device-1.png)

2. Clear the default content in the rules, then copy and paste the following rule into the editor:

   ```
   mod:
     name: 'default' # mod name, default is "default". For custom versions, please contact Coscene product for more details.
     conf:
       enabled: true # Whether to enable, default is true.
       base_dir: '/root/logs/' # Data monitoring directory.

   event_code: # Error code feature
     enabled: false # Whitelist configuration for error codes, default is False.

   ```

   \*For more configurations, refer to [Data Collection Rule Format](https://docs.coscene.cn/docs/receipts/device/device-authorize#%E6%95%B0%E9%87%87%E8%A7%84%E5%88%99%E6%A0%BC%E5%BC%8F)

3. Click the "Save Changes" button.

   ![org-device-7](../img/org-device-7.png)

<br />

## Authorizing Device

> Using a Linux device as an example, for other device registration methods refer to [Device Registration](https://docs.coscene.cn/docs/receipts/device/device-authorize#%E8%AE%BE%E5%A4%87%E6%B3%A8%E5%86%8C)

<br />

1. Open the device terminal, execute the following command, enter the password to switch to root.

   ```
   sudo su
   ```

2. In terminal, create folders to be monitored `/root/logs`

   ```
   mkdir logs
   ```

3. In coScene Web, enter the Device tab in the Org management page

   ![org-device](../img/org-device.png)

4. Copy the installation command, and paste it to the terminal input as Root user

   ![org-device-copy-command](../img/org-device-copy-command.png)

5. Run the script, and checkout the system logs

   ```
    journalctl -fu cos
   ```

   - when you see the following logs, the installation is completed and wait to be permitted by the admins

     ![dev-install-1](../img/dev-install-1.png)

6. In the device page of the Org settings page, find the to be permitted device, and click "Permit"

   ![org-device-authorize](../img/org-device-authorize.png)

<br />

## Write Files in the Device Monitoring Directory

1. Ensure the device has received the data collection and diagnostic rules:

   - When the following entry appears in the logs, it indicates that the rules have been successfully acquired:

     ![rule-log-1](../img/rule-log-1.png)

2. <a href="https://coscene-artifacts-prod.oss-cn-hangzhou.aliyuncs.com/docs/4-recipes/data-diagnosis/dev-A.log.zip" download>Click to download</a> the `dev-A.log` generated by device dev-A. Its contents are as follows:

   ```
   2023-09-01 11:28:47.000 INFO "Demo Log message 1"
   2023-09-01 11:28:48.000 INFO "Demo Log message 2"
   2023-09-01 11:28:49.000 INFO "Demo Log message 3"
   2023-09-01 11:28:50.000 WARN "Demo Log message 4"
   2023-09-01 11:28:51.000 INFO "Demo Log message 5"
   2023-09-01 11:28:52.000 INFO "Demo Log message 6"
   2023-09-01 11:28:53.000 INFO "Demo Log message 7"
   2023-09-01 11:28:54.000 INFO "Demo Log message 8"
   2023-09-01 11:28:55.000 INFO "Demo Log message 9"
   2023-09-01 11:28:56.000 INFO "Demo Log message 10"
   2023-09-01 11:28:57.000 WARN "Demo Log message 11"
   2023-09-01 11:28:58.000 ERROR "Demo Log message 12 error 1"
   2023-09-01 11:28:59.000 INFO "Demo Log message 13"
   2023-09-01 11:29:00.000 INFO "Demo Log message 14"
   2023-09-01 11:29:01.000 INFO "Demo Log message 15"
   2023-09-01 11:29:02.000 INFO "Demo Log message 16"
   2023-09-01 11:29:03.000 INFO "Demo Log message 17"
   2023-09-01 11:29:04.000 INFO "Demo Log message 18"
   2023-09-01 11:29:05.000 INFO "Demo Log message 19"
   2023-09-01 11:29:06.000 INFO "Demo Log message 20"
   ```

3. In your terminal, execute the command to copy the file dev-A.log to the /root/logs/ directory on the device.

   ```
   scp Downloads/dev-A.log root@ubuntu:/root/logs

   # Where Downloads/dev-A.log is the directory where the dev-A.log file is located on the local machine, and root@ubuntu is the device name. Both need to be modified accordingly.
   ```

4. Log Data Upload

   - When the following entry appears in the logs, it indicates that the log data is being uploaded to the Coscene platform.

     ![rule-log-2](../img/rule-log-2.png)

<br />

## View the Created Record

1. Enter the `auto-upload` project.

   ![pro-1](../img/pro-1.png)

2. View the automatically created record.

   ![auto-record-1](../img/auto-record-1.png)

3. Check the data uploaded in the record.

   ![auto-record-2](../img/auto-record-2.png)

4. View the moment created at the trigger time.

   ![auto-record-3](../img/auto-record-3.png)

<br />