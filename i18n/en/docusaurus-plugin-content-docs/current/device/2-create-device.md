---
sidebar_position: 2
---

# Add Device

## Permission Requirements

:::info
🤖 Permission: Only **Organization Members** and above can add devices
:::

When an organization introduces new devices and wants to create a corresponding device on the platform, they can go to the organization devices page to add them.

## Overview of Addition Methods

The platform provides 3 ways to add new devices to an organization:

| Addition Method | Applicable Scenario |
| -------------- | ------------------ |
| Execute Command on Device | For adding a small number of devices one by one with platform communication |
| Use Offline Installation Package | For batch device access during factory setup with platform communication |
| Fill in Information | For quickly creating virtual devices for data flow without platform communication |

## Execute Command on Device {#add-device-from-device}

### Applicability and Entry

This method is suitable for adding devices one by one. Users need to manually log in to devices via SSH to execute commands. The entry point is located on the "Devices" tab of the "Organization Management" page. Click the [Add Device] button to enter the add device dialog.

![Add Device Entry](./img/4-3-add-device-button.png)

![Add Device Dialog](./img/4-3-add-device-popup.png)

### System Requirements

1. Currently only supports Linux devices, covering arm64 and x86_64 architectures;

2. Windows devices are not supported yet. Please contact the coScene team if you need Windows device access.

### Device ID Configuration

1. You can specify the location of the device's unique identifier (such as ID or SN), supporting txt, json, and yaml text file types.

   - For txt files, the system reads the entire file content.

   - For json or yaml files, you need to fill in the variable name for the ID in the input box below (e.g., if the file contains `id:123`, enter `id` here).

2. Organization administrators can preset unified ID storage location configuration in "Organization Devices - Edit Collection Rules" for automatic dialog population, with support for secondary changes.

   ![Get ID Location from Device](./img/4-3-add-device-id-01.png)

   1. If system-generated ID is selected, the platform will generate a default ID that cannot be modified after installation.

   ![System Generated ID](./img/4-3-add-device-id-02.png)

### Client Installation Options

1. **Data Collection (coScout) Client**

   After installation, devices can collect data according to project rules or collection tasks. Before installation, administrators need to configure collection monitoring directories and other information. See the Edit Collection Rules documentation for details.

2. **Remote Control (coLink) Client**

   After installation, it enables web SSH and real-time device visualization with [coBridge](https://github.com/coscene-io/coBridge). See the remote control device [documentation](https://docs.coscene.cn/docs/recipes/device/device-remote-control) for details.

3. **Initialize Client Configuration**

   Check [Initialize Client Configuration] when replacing the host computer or ID and reinstalling; uncheck for client version upgrades only. See the device replacement, upgrade, and uninstallation guide for more usage methods.

   ![Select Client Installation](./img/4-3-install-coscout-colink.png)

### Execute Installation Command

1. After completing device ID and client installation options configuration, the system generates an installation command. Users copy the command to the device's shell terminal for execution.

   ![System Generated Installation Command](./img/4-3-install-cmd.png)

2. When `Installation completed successfully 🎉` appears on the device end, the installation is successful. Due to device performance, there might be a delay in the device list page display after installation. The device is registered at this point; refer to the device access section for subsequent operations.

   ![Device Installation Success](./img/4-3-install-successfully.png)

   ![Administrator Grants Device Access on Platform](./img/4-3-access-device.png)

## Add Using Offline Installation Package

### Applicability and Related Settings

1. This method packages data collection and remote control installation packages into the device software update package, with pre-written permission and installation commands in the startup script. It's suitable for large-scale access, such as devices with pre-installed clients from the factory.

2. The "System Requirements," "Device ID Configuration," and "Client Installation Options" in this method are the same as the command execution method. See the corresponding sections for reference. The following focuses on installation method differences.

### Installation Steps

1. Assuming the user is in the `/root` directory (note path changes when switching directories), download the installation script [coscene.sh](https://download.coscene.cn/coscout/coscene.sh) and offline binary file package [cos_binaries.tar.gz](https://download.coscene.cn/coscout/tar/latest/cos_binaries.tar.gz) to the device, stored at `/root/coscene.sh` and `/root/cos_binaries.tar.gz` respectively.

2. In the root directory, grant execution permission to the installation script:

   ```plain text
   chmod +x /root/coscene.sh
   ```

3. Execute the installation command (using `cos_binaries.tar.gz` at `/root/cos_binaries.tar.gz` as an example):

   ```plain text
   ./coscene.sh --server_url=*** --project_slug=*** --virmesh_endpoint=*** --use_local=/root/cos_binaries.tar.gz
   ```

   Replace `***` in parameters `--server_url`, `--project_slug`, and `--virmesh_endpoint` according to the installation command generated in the web dialog. The `--use_local` parameter is the offline binary file package path; update this parameter when changing directory location.

   ![Add Using Offline Package](./img/4-3-offline-install-package.png)

## Add by Filling Information

### Applicability

This method creates virtual device fields in the platform database without corresponding to real devices.

### Operation Steps

1. Enter device ID and other information in the "Add Device" dialog (device ID must be unique), then click [Add] to create the device.

2. If organization administrators set custom fields, users need to complete all required fields as prompted (such as store and model in the example)

![Add by Information](./img/4-3-input-information.png)

---

Through these steps, you can successfully add devices to the platform according to your actual needs.

If you have any questions, please contact us for support.
