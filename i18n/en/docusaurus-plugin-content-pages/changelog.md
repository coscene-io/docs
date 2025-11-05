---
title: coScene Changelog
id: changelog
---

# Release History

## [25.45.0] - 2025-11-05

### [Added]

- Added coStudio configuration features
  - Support for project selection to directly use project layouts
  - Support for configuring allowed login domains
  - Support for automatic LAN connection for real-time visualization

### [Improved]

- Enhanced visualization chart panels
  - Support for one-click expand/collapse all data series
  - Support for adding new data series directly under any existing data series
- Improved description and comment styles
  - Enhanced display styles for descriptions and comments in records, projects, and tasks
  - Support for direct import and rendering of Markdown content
- Improved batch test report display
  - Optimized test report page structure: changed from directly displaying test suites and test cases to default showing test suites, with corresponding test cases viewable upon click
- Improved project settings structure
  - Moved project descriptions to unified management in project overview introduction
  - Removed description editing entry from project settings
- Improved sidebar interaction: removed expansion state

---

## [25.42.0] - 2025-10-15

### [Added]

- Added "User Script Panel": Support for custom scripts in the visualization interface to transform input messages and output to new topics, see [documentation](/docs/viz/panel/user-scripts)
- Added "Real-time Visualization Playback" feature: During device real-time visualization, you can switch to playback mode via the timeline to review the most recent 30 seconds of data
- Added "Action System Error Display" feature: When an action execution fails, you can view the corresponding error information in the step details of the invocations

### [Improved]

- Improved record filtering functionality:
  - Added "Moment" filtering feature
  - Enhanced logical operation support (AND/OR condition combinations)
  - Support filtering based on condition groups
- Improved record loading mechanism: Changed from page-based loading to scroll-based loading
- Improved layout management functionality:
  - Streamlined to personal layouts and project layouts, retired organization layouts and record layouts (migrated to project layouts)
  - Support cross-project layout copying
  - Support managing layouts with folders
- Improved action editing interface: Support directly selecting images from the organization when editing actions, no manual input required

---

## [25.37.0] - 2025-9-12

### [Added]

- Added message-by-message playback feature:
  - Support viewing messages one by one in the raw message and table panels
  - Support custom playback step size: On the right side of the visualization timeline, you can adjust the forward/backward duration when paused
- Added S3 storage functionality: Support connecting to projects within the organization via the S3 protocol to perform read/write operations. See [S3 Documentation](/docs/developers/s3/s3-authentication)
- Added device ID anomaly detection: Real-time detection of duplicate IDs and inconsistencies between device-side and web-side IDs
- Added file search functionality: Support keyword search when previewing text files
- Added Data Collection Client v1.1.10:
  - Added IP reporting functionality: View device IP addresses on the device details page
  - Fixed issue with delayed upload resumption on devices under weak network conditions
  - Fixed issue where linked files could not be uploaded after changes in symbolic link mode

### [Improved]

- Improved device real-time operation entry permissions, closed organization-level real-time visualization and web SSH entry, only supporting real-time operation of devices within projects
- Improved visualization playback loading logic, supporting parallel loading of multi-tab data

---

## [25.34.0] - 2025-8-20

### 【Added】

- Added display and filtering features for "more basic record information"
  - In the record list, you can now view file count, record size, net playable time, and time span of the record
  - In the record details, you can view the overall topic information within the record
  - In the record’s More filter options, you can now filter by file count, record size, net playable time, record time span, topic, schema, and more
- Added configuration for "Real-time visualization inactivity timeout"
  - In the Visualization → My Settings page, you can configure the auto-disconnect duration. By default, if there is no activity for 30 minutes, the real-time visualization session will automatically disconnect. You can also set it to never disconnect
- Added display of "more fields for public project records"
  - In the public project record list, new fields are now displayed: record label, file count, record size, net playable time, and time span
- Added Data Collection Client v1.1.9:
  - In device auto-collection rules, content from topic messages can now be used as label variables and attached file variables
- Added pause/resume upload APIs, allowing devices to pause/resume file uploads via API calls

### 【Improved】

- Improved the device data collection dialog, now supports choosing collection mode: collect by time range / collect by file path
- Improved the project member adding dialog, now supports batch selecting users to add to a project

### 【Fixed】

- Fixed an issue where visualization playback of H264 data did not support AUD frames

---

## [25.31.0] - 2025-7-31

### [Added]

- Added "Action Execution on Filtered Records" feature:
  - After filtering records by conditions, you can use the current filter as input to batch execute actions
- Added "ROS Suite" installation feature:
  - When registering a device, you can choose to install the ROS Suite to support real-time fault monitoring and device visualization. See [Add Device](/docs/device/create-device) for details
- Added "Visualization Task Panel":
  - In record playback and real-time visualization, a task panel is visible on the left, showing the current user's tasks in the current project
  - During real-time visualization, when a task is highlighted, the records collected in the data collection panel will be automatically associated with the highlighted task
- Added "Select Device When Creating Task" feature: When creating a general task, you can directly select "Associated device"
- Added "Cross-Organization Record Copy" feature: Select records and call "System Action - Copy records" to copy records to projects in the target organization
- Added "Action Log Download" feature: Support downloading invocation logs after action execution is completed
- Added "User Feedback" feature: Support user issue reporting
- Added Data Collection Client v1.1.8: Support proxy forwarding functionality

### [Improved]

- Improved device-related module display
  - In projects, moved the collection capability from "Tasks - Collection Tasks" to the "Devices" page, showing corresponding collection history in "Devices - Execution history"
  - Moved the original "Data Collection & Diagnostics" module to the "Devices - Rules & matching" page
- Improved automation module display: Moved actions, triggers, and invocations from the sidebar to the list page
- Improved "File Preview" feature: When previewing bag and mcap files, more file information is available
- Improved slug definition and display
  - Project slug now supports `-` and `_` input
  - Organization slug and project slug can be quickly obtained on the organization homepage and in projects, for use with command-line tool [coCLI](/docs/developers/cocli/install) and other scenarios
- Optimized table information display
  - Tables remember the number of entries displayed per page on your computer, showing the same number on your next visit
  - Improved mouse hover style when viewing tags

---

## [25.28.0] - 2025-7-9

### [Added]

- Added "Batch Add Field Enum Values" feature: When defining "selector" type fields in organization settings, you can now batch add field enum values
- Added "Copy Project": When creating a project, you can now copy the configuration information from an existing project
- Added "Organization Role Management": In the Organization Settings - Role Management page, you can now set default organization roles for new members
- Added "Collection Path Variables": When manually collecting device data, you can now use start and end time variables as file paths. You can also directly define variables in the organization device configuration. See [Manual Collection Documentation](https://docs.coscene.io/docs/device/device-collect#manual-collection) for more details
- Added Data Collection Client v1.1.7:
  - Manual/Rule-based collection now supports collecting additional folders
  - When manually collecting, file creation times are now read and can be used as an additional time judgment reference
  - Manual collection now supports collecting files pointed to by symbolic links
  - Rule-based collection now supports monitoring and collecting files within multi-level directories

### [Improved]

- Improved "Personnel Type Field Selection":
  - Optimized personnel grouping display logic, grouping by project internal/external
  - Collectors, annotators, and auditors in the project can now only view users within the project
- Improved "Visualization Page Error Handling": Errors no longer automatically redirect to the issue page
- Optimized Automation Task Title Generation: The title now supports referencing the field values of triggering content

### [Fixed]

- Fixed an issue where rule listeners did not process messages in the correct order according to the message timestamp
- Fixed a cursor misalignment issue on the organization device configuration page

---

## [25.24.0] - 2025-06-13

### [Added]

- Added "LAN Real-time Visualization" feature:
  - coStudio automatically detects LAN connections and uses local network for data transfer to reduce visualization latency (requires devices and clients on same LAN)
- Added "Project Common Resources Management":
  - Upload configuration files (URDF/TF/maps) in Project Common Resources page
  - Directly reference URDF models from Common Resources in 3D visualization panel
- Added "Multi-select Field Type":
  - Support configuring multi-select type when defining global custom fields in Organization Settings
- Added "Task Dependency Visualization":
  - View tasks that reference current task in Task Details page

### [Improved]

- Enhanced "Custom Field Filtering":
  - Added support for filtering by numeric/multi-select/time/personnel field types
- Upgraded "Data Collection Panel":
  - Added auto-scrolling for collection logs

---

## [25.22.0] - 2025-5-30

### [Added]

- Added automation trigger mechanism:
  - New trigger conditions: When record changes/When general task changes
  - Support automatic creation of general tasks through triggers
- Added HDF5 and MCAP format conversion actions: Can invoke system actions to convert HDF5 to MCAP, or MCAP to HDF5
- Added automation action template variables
  - In automation actions, support using device ID, device name, and task creation time as variables for HTTP request steps, namely: `{{device.id}}`, `{{device.display_name}}`, `{{task.create_time}}`
- Added real-time data collection feature: Added "Data Collection" panel in visualization page, supporting real-time data collection
- Added user roles:
  - Added organization-level "External Member" role (limited to accessing joined projects only)
  - Added project-level roles: Collector, Annotator, Auditor
- Added "Testing Audit" feature:
  - In Organization Management-Audit page, support filtering testing audit events: download test bundle, download artifacts, download test output events

### [Improved]

- Enhanced field management functionality:
  - Support configuring global custom fields in organization settings, applicable to devices, records, tasks, and moment scenes
- Enhanced task management functionality:
  - Support quick task creation in general tasks page
  - Support linking devices with tasks in task management
- Optimized device registration process: In project devices page, can directly copy commands to register devices and add them to projects

### [Fixed]

- Fixed the issue where example project creation was not logging audit records
- Fixed the overlapping display issue when previewing long text logs

---

## [25.18.0] - 2025-4-28

### [Added]

- Added visualization plugin, supporting customized panels in the visualization interface. See [Visualization Extensions](/docs/viz/extensions/introduction)
- Added playback support for files in subfolders within batch test outputs

### [Improved]

- Enhanced file preview functionality, supporting up/down/left/right image movement
- Improved personal token validity period settings, supporting 1-day and 360-day options
- Enhanced coCLI functionality, supporting download of moment files from records

### [Fixed]

- Fixed the issue where .active files in batch test outputs couldn't be played
- Fixed the issue where files generated from bag file map extraction and static coordinate extraction lacked file formats
- Fixed the issue where personal user organization switching cookies expired in 1 day, changed to 30 days

---

## [25.15.0] - 2025-4-10

### [Added]

- Added multi-tier subscription plans: supporting Free, Starter, Team, Enterprise, and other [subscription plans](https://www.coscene.io/pricing)
- Added public project copying feature: allowing logged-in users to copy public projects to their organizations

### [Improved]

- Optimized device access process, merged operations into:
  - Enable client: simultaneously enable data collection and remote access
  - Disable client: simultaneously disable data collection and remote access

### [Fixed]

- Fixed compatibility issues when reading device ID from files during device registration (now supporting pure numeric format)

---

## [25.12.0] - 2025-3-19

### [Added]

- Added "Personal Organization" feature
  - Support login and organization creation with regular email
  - Support inviting members to join personal organizations via email
- Added "Public Project" feature: Support viewing public datasets

### [Improved]

- Improved Data Collection Client
  - Optimized file upload logic: Ensure file writing is completed before uploading
  - Optimized device registration logic: Automatically remove line breaks and spaces when reading device IDs from specified files
  - Fixed the issue where device installation commands could not be executed repeatedly

### [Fixed]

- Fixed the issue of abnormal display of overlapping time periods when playing multiple files in visualization
- Fixed the issue where files output from actions did not automatically generate visualization indexes

---

## [25.9.0] - 2025-2-26

### [Added]

- Added "Batch Remote Command Execution" feature: In the Organization Management - Devices page, users can send commands in batch to selected devices
- Added "Teambition Integration": In the Project Settings - Service Integration page, users can configure Teambition integration to automatically create Teambition tasks when issues occur

### [Improved]

- Updated the input method for rule conditions in Collection & Diagnosis, now supporting CEL syntax input

### [Fixed]

- Fixed the issue where downloading single folders from records was not working
- Fixed issues related to rules in Collection & Diagnosis

---

## [25.6.0] - 2025-2-8

### [New]

- Added TF compatibility playback mode: When visualizing data, support automatic conversion of frame_ids starting with a slash (/) to a no-slash format, ensuring consistency across all TF message formats

### [Improvements]

- Updated Data Collection & Diagnosis Rules:
  - Event Code Table Introduction: Replaced template input fields with event code tables, supporting JSON/CSV file import for automatic parsing and application of event codes
  - Rule Condition Simplification: Replaced code input box with 3 short fields, determining event triggers based on device message field matching with specific values, supporting direct keyword input without coding
- Updated device page client status display: After device admission, the client status bar only shows two states - green "Online" and gray "Offline"

---

## [25.1.0] - 2025-1-2

### [New]

- Added "Set Map Height" feature: During visualization playback, the 3D panel supports setting the map height to adjust the position of multiple maps displayed in 3D space

### [Improvements]

- Updated browser tab names for visualization pages, making it easier to distinguish between visualization, real-time visualization, and shadow mode
- Updated account login mechanism, extending single login token validity from 7 days to 30 days

### [Fixes]

- Fixed an issue where file uploads would fail if waiting in the upload queue for over 1 hour
- Fixed inconsistency between icon and text when devices are offline
- Fixed abnormal curve display when playing multiple mcap files in visualization
- Optimized tooltip display style in visualization pages

---

## [24.51.0] - 2024-12-18

### [New]

- Added Data Collection Client v1.0.8
  - Support using system-generated IDs as device registration IDs
  - Support custom configuration of file scanning time range
  - Optimized data collection client installation location on devices
  - Fixed issue where data could not be collected when no monitoring directory was configured
- Added Automation Action Template Variables
  - In automation actions, support using task name and record link as variables in HTTP request steps, i.e., `{{task.title}}`, `{{record.link}}`
- Added Moment Fields: Added creator and associated rule fields to moments

### [Improvements]

- Updated content and style of the add organization device dialog
- Updated action command input box interaction style, supporting new line creation via enter button

### [Fixes]

- Fixed issue where file extraction and ROS2 DB3 to MCAP conversion failed due to not skipping zero-size files
- Fixed issue where projects could not be saved when only modifying project names due to URL length restrictions

---

## [24.36.0] - 2024-9-04

### [New]

- Added "Batch Operations for Organization Devices" feature:
  - Batch Data Collection Admission: Support selecting devices for batch admission to data collection, allowing devices to be added to the organization.
  - Batch Project Association: Support selecting devices for batch association with projects, adding devices to projects for subsequent data collection and classification.
- Added "Copy/Move Files" feature: In the file list of records, support selecting files to copy or move them to other records.
- Added "Text Auto-wrap" feature: Support automatic text wrapping when previewing text files in records.
- Added "Playable Time Range" field: Display the playable time range of bag, mcap, and other files in the basic information of records.
- Added "Action Invocation Duration" field: Display the duration of action invocations in the action's invocation history.
- Added "Workflow Diagrams for Various Roles": In the [Help] section at the top right of the navigation bar, display workflow diagrams for testers, operations, and development personnel.

### [Changes]

- Updated the display style of the "Data Collection & Diagnostics" page.
- Updated the style of the "Add Organization Device" dialog.
- Updated the style of the "Organization Device Details" page.
- Updated the display style of the "Moment" list in the visualization page.

### [Fixes]

- Fixed an issue where record search results were not sorted by time.
- Fixed an issue where the index generation status was not correctly displayed in the visualization page.
- Fixed an issue with abnormal display of test suite lists in batch testing.
- Fixed an issue with abnormal device traffic statistics. This can be resolved by updating the data collection client to version v1.0.2.

---

## [24.34.0] - 2024-8-20

### [New]

- Added "Star Projects" feature: On the homepage, support starring projects to pin them to the top.
- Added "Audio File Preview" feature: In the file list of records, support clicking to play audio files.

### [Changes]

- Updated the display style of the homepage.

---

## [24.32.0] - 2024-8-6

### [New]

- Added "Sample Project" feature: When creating a new project, support selecting to create a sample project.
- Added open-source projects:
  - Open-sourced the coBridge project related to real-time visualization and the coScout project related to data collection.
- Added support for Ubuntu 14.04 version in the "Data Collection Client".

### [Changes]

- Updated the auto-disconnect logic for "Real-time Visualization":
  - Automatically disconnect after 1 minute in an unfocused state.
  - Disconnect after 10 minutes in a focused state.
  - Support reconnection after returning to the page or refreshing.
- Updated the display of Jira-linked information in tasks: Tasks now show the status of linked Jira issues.

---

## [24.30.0] - 2024-7-22

### [New]

- Added "Copy Action Steps" feature: When creating an action, support copying steps from existing actions.
- Added usage introduction for "System Actions": When viewing system actions in the "Automation - Actions" page, support viewing the usage introduction of the action on the right side of the action details page.

### [Changes]

- Updated the entry point for "Data Collection & Diagnostics" feature: Moved the entry to the left navigation bar of the project.
- Updated "Collection Tasks": Collection tasks now support cancellation and termination.
- Updated tag filtering logic: Tag filtering now supports equals, contains, and does not contain operations.

### [Fixes]

- Fixed an issue with slow loading of visualization playback.

---

## [24.28.0] - 2024-7-9

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

### [New]

- Added "Annotation Task Label" feature: When creating an annotation task, support using the labels of selected records as task labels.
- Added "Test Suite Display" feature: Display the test suite used in this test on the batch test table page.
- Added "File List Pagination" feature: Support pagination display of files on the record file list page.
- Added "Task ID": Display the ID number of the task in the task table.

### [Changes]

- Update the display of the "Records" page:
  - Fix the record table name column and support horizontal scrolling.
  - Move the batch operation location after multiple records are selected to below the list.
  - Support cross-page record selection.
- Update the display of "Last Online Time" in 'Organizational Equipment', and 'Project Equipment':
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
