---
title: coScene Changelog
id: changelog
---

# Release Histories

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