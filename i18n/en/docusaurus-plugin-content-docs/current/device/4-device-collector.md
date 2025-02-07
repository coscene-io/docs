---
sidebar_position: 4
---

# Data Collection Rules

> Admitted devices can automatically upload data to projects according to data collection rules. The collection rules apply to all devices using a shared configuration. If you need to set collection rules by project, please refer to [About Automated Data Collection and Diagnosis](../9-data-diagnosis/1-intro.md) to use the rule engine to meet your requirements.

## About Data Collection Rules

> Data collection rules apply to all devices in the organization and can only be edited by organization administrators

Data collection rules define the directories for monitoring device logs, device information file storage locations, etc. After device admission, devices will actively fetch the organization's configured collection rules and operate dynamically on the machine according to these rules.

## Edit Data Collection Rules

The structure format of data collection rules is described below.

Go to the "Devices" tab on the organization management page and click the [Edit Collection Rules] button.

![org-device](../img/org-device.png)

Edit the collection rules online and click [Save Changes] when configuration is complete.

![org-dev-rule-save](../img/org-dev-rule-save.png)

## Data Collection Rule Format

Data collection rules mainly configure three modules:

- **Collector Settings (collector)**: Whether to delete device-side data after collection is complete
- **Storage Settings (mod)**: Storage directory for device-side data; Location of device identifier file
- **Update Settings (updater)**: Whether to enable automatic updates for the current program

Example data collection configuration file:

```yaml
collector:
  delete_after_upload: true # Default value is False
  delete_after_interval_in_hours: 48 # Default value is -1, meaning files are not deleted
  scan_interval_in_secs: 60 # Default value: 60, scans folder every 60s

mod:
  name: 'default' # mod name, default is 'default', contact CoScene product team for custom versions
  conf:
    enabled: true # Whether enabled, default is true
    robot_file: '/root/.ros/sn.txt' # Device identifier file, stores unique device identifier like sn
    # Device-side monitoring directories, used as specified directories for data collection tasks and rule collection in projects
    base_dirs:
      - /home/bag/
      - /home/log/

updater:
  enabled: false # Enable Auto Update, default false
```

### Collector Settings

Set whether to delete device-side data after collection is complete to free up device disk storage

```yaml
# Collector settings
collector:
  delete_after_upload: true # Default value is False
  delete_after_interval_in_hours: 48 # Default value is -1 meaning files are not deleted; otherwise deletes data older than 48 hours by default
  scan_interval_in_secs: 60 # Default value: 60, scans folder every 60s
```

### Storage Settings

Set the storage location for device-side data

```yaml
# Data processing settings, customizable, contact CoScene product team for detailed process
mod:
  name: 'default' # mod name, default is 'default', contact CoScene product team for custom versions
  conf:
    enabled: true # Whether enabled, default is true
    robot_file: '/root/.ros/sn.txt' # Device identifier file, stores unique device identifier like sn
    # Device-side monitoring directories, used as specified directories for data collection tasks and rule collection in projects
    base_dirs:
      - /home/bag/
      - /home/log/
```

### Update Settings

Set whether to automatically update the collection program

```yaml
# Update settings
updater:
  enabled: true # Whether to automatically update collection program, default value is true
```
