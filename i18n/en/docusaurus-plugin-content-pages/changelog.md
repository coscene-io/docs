---
title: coScene Changelog
id: changelog
---

# Release History

### [New]

- Added "Default Rule Template" feature: In "Data Collection and Rule Diagnostics", it supports adding rules from system-provided templates.
- Added "Recent Actions of Records": In the record list, it displays the name and status of the most recently called actions.
  
### [Changed]

- Updated information about "Moment" in "Data Collection and Diagnostics Rules", supporting custom attribute names and values for "Moment".
- Updated the default status on the records page and tasks page.

---

## [24.26.0] - 2024-6-25

### [New]

- **New "Action Chain Processing" Feature**: Define multiple data processing steps within an action and execute them sequentially with a single click.
- **New "Header Settings" Feature**: Configure the table display for "Organization Device List" and "Record List".
  - **Configure Header Display Content**: Use the [Settings] button on the far right of the header to show/hide fields, adjust order, and restore defaults.
  - **Set Table Column Width**: Drag the header to adjust column width.
  - **Personalized Table Settings**: These settings are personalized and do not affect the view of other team members.
- **New "Action Help Documentation"**: View help documentation on the right side of the page while creating or editing actions.
- **New "Data Collection Client Version Information"**: Display the current version information of the data collection client in the "Device Details - Data Collection Program" section.

### [Changes]

- **Updated File Search Logic**: You can now search for all files related to a specific record on the record details page.
- **Updated Record Details Page Layout**: Changed to a card-style layout.
- **Updated "File Preview" Style on Record Details Page**:
  - Display file list in the preview window, enabling quick file switching.
  - Use keyboard arrow keys to conveniently switch between the previous and next files.
- **Invocation History** ids are now easy to understand integer numbers.

---

## [24.24.0] - 2024-6-14

### 【New】

- Added "Annotation Task Label" feature: When creating an annotation task, support using the labels of selected records as task labels.
- Added "Test Suite Display" feature: Display the test suite used in this test on the batch test table page.
- Added "File List Pagination" feature: Support pagination display of files on the record file list page.
- Added "Task ID": Display the ID number of the task in the task table.

### 【Changes】

- Update the display of the "Records" page:
  - Fix the record table name column and support horizontal scrolling.
  - Move the batch operation location after multiple records are selected to below the list.
  - Support cross-page record selection.
- Update the display of "Last Online Time" in ‘Organizational Equipment’, and ‘Project Equipment’:
  - Changed to display the online/offline status of the device.
  - Mouse hover to display the last online time.
- Update the interaction for creating/editing moments: On the timeline, support adjusting the start and end points of the moment by dragging.
- Optimize the display style of the sidebar:
  - Upgrade the sidebar navigation experience, with refreshed icons.
  - Display module names when the sidebar is collapsed.
  - Remember the user's state of expanding or collapsing.

---

## [24.14.0] - 2024-04-03

### [New]

- Now "Action Run" can update the record files it ran against

  - When defining an action and its artifacts, there are now two options
    - If you want to save artifacts to the "Action Run" output, you can have the files saved to /cos/output folder. Files under this path will automatically be saved as the "Action Run" output.
    - If you want to update the record the action ran against, like update the calibration files per the testing result, you can directly modify the original files under /cos/files. In order to use feature, you have to enable the "Modify Original Record Files" options in the action
  - In the output of the "Action Run", users can manually select files from the output and save them to a new record or the record it ran against.

- Added [Delete File Audition], in the `Organization Management` - `Audit` page, users can now see the audit events under `Change of record information` - `Delete file`
- Added [coScene Service Status]: In the login page footer and the user menu, there's
- Added [System Service Status]: Added a "System Service Status" shortcut at the login page and user dropdown menu of the platform once logged in, enabling monitoring of coScene platform service status

### [Changes]

- Updated the display style of the user dropdown menu, showing shortcuts for language switching and documentation

---

## [24.12.0] - 2024-03-21

### [New]

- Added "Search Devices by Name" feature, allowing users to search for devices in the device page's search bar by device ID or name.
- Introduced "Create Folder", which allows users to create folders in the file list of records.

### [Changes]

- Updated the display style of "File List" and "File Upload Dialog" in records.
  - Merged the entry point for uploading and copying files into the [Upload] button.
  - Removed file status and type, allowing immediate playback after successful file uploads.
  - Temporarily disabled the file tree style.
  - Added support for cancelling file uploads.
- Enhanced the file preview mode with a wider user view.
- Updated the "Run Batch Tests" dialog, now optimizing its default selection state to none.
- Discontinued the "Workflow" module, all the existing Workflows are now migrated to "Automation" module's "System Actions".
- Removed start and end times from the record detail page, with access to visualized pages through [Play Record] and time information available via the ⓘ icon at the bottom left of the playback timeline.

### [Fixes]

- Fixed an issue where data collection rules couldn't be saved after initial errors.
- Fixed the issue in real-time visualization where the subscribed topic count and frequency were not displayed correctly.

---

## [24.10.0] - 2024-03-06

### [New]

- Added "Visualization Layout Settings", supporting the configuration of organizational, project, and record layouts.
  - In the `Org Management - Visualization Layout Configuration` page, user can now set org recommended layouts:
    - In the visualization page, personal layouts can be shared with the organization.
    - Organizational administrators can set the shared organizational layout as the recommended layout.
    - During visualization playback, if there are no personal, record, or project layouts, the organization's recommended layout will be used by default, ensuring users can inspect the record in a proper view settings.
  - In the Project Management - Visualization Layout Configuration page, support is provided for setting recommended project layouts:
    - Project administrators can set the recommended project layout.
    - During visualization playback, if there are no individual or record layouts, the project's recommended layout will be used by default.
    - If there is an existing organizational recommended layout, newly created projects will automatically sync and apply this layout as the project's recommended layout.
  - At the top right of the Visualization page nav bar, where users can "Copy as Default Record Layout". This sets a dedicated layout configuration for the particular record for a more fine-grained record-visualization experience.
  - Note: Layout usage priority is: Record Layout > Personal Layout > Project Layout > Org Layout.
- When creating or editing a moment, users can select and upload images from their local device, adding more context to a Moment.

### [Fixes]

- Fixed the issue where files could not be dragged and dropped for upload.

---

## [24.08.0] - 2024-02-20

### [New]

- Introduced "Remote Device Control" feature:
  - Supports one-click installation of data collection and remote control programs on the device side through commands.

### [Changes]

- Updated the "Moment" list on the record detail page:
  - Moved the "Moment" list from the right side of the record detail page to under the "Moment" tab.
    -Now it's able to display the complete content of the moment.

---

## [24.03.0] - 2023-01-16

### [Changes]

- User Session now lasts for 7 days.
