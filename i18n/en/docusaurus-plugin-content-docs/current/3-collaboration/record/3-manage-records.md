---
sidebar_position: 3
---

# Managing Records

Records support the following operations:

- **Basic operations**: view, edit, copy, move, archive, delete
- **Data processing**: invoke actions, annotation
- **Search and statistics**: search filtering, label statistics

## Basic Operations

### View

On the record list page, you can view record information including name, thumbnail, device, labels, recent actions, custom fields, etc.

- Click the record name to enter the record details page
- Click the thumbnail to view it in full size
- Click the device ID to enter the project device details page
- Click recent actions to view details of the most recent action
- Click the [Settings] button in the upper right corner of the table to set the display fields and sorting method

  ![record-list_1](./img/record-list_1.png)

### Edit

On the record details page, you can edit record information such as name, description, device, labels, etc.

1. Click to directly edit the record name and description.

   ![edit-record_1](./img/edit-record_1.png)

2. In the record basic information section, you can select devices and labels.

- Device: Select the project device associated with the record
- labels: add, edit, and delete labels

  ![edit-record_2](./img/edit-record_2.png)

### Copy and Move

Copy/move records to specified projects for data reclassification and organization.

1. In the more operations menu of the record details, select [Copy to]/[Move to].

   ![create-record_7](./img/create-record_7.png)

2. Select the target project in the popup window, click [OK] to view the corresponding record in the target project.

   ![create-record_8](./img/create-record_8.png)

### Archive

The archive function can convert analyzed data to read-only status and remove it from the active list for long-term management of historical data. Use cases include:

- Data analysis is complete and results need long-term preservation
- Phase experimental data needs to be archived
- Historical data needs to be managed separately from active data
- Important data needs protection from accidental modifications

1. Select [Archive] from more operations in record details. The record will be archived after secondary confirmation.

   ![manage-record_7](./img/manage-record_7.png)

2. View archived records in the archive column of the record list.

   ![manage-record_8](./img/manage-record_8.png)

3. In archived record details, click [Unarchive] in the "More" operations to convert the record from archived to active status.

   ![manage-record_9](./img/manage-record_9.png)

### Delete

> After deletion, records cannot be recovered.

Select [Delete] from more operations in record details. The record will be deleted after secondary confirmation.

![manage-record_10](./img/manage-record_10.png)

### Batch Operations

On the record list page, select records to perform batch operations like editing labels, copying, moving, archiving, deleting, etc.

![manage-record_11](./img/manage-record_11.png)

## Data Processing

### Invoke Actions

On the record details page, you can invoke actions to process records, such as: data trimming, automatic diagnostics, data comparison, etc.

1. On the record details page, click the [Invoke Action] button and select the operation to perform on the record.

   ![manage-record_2](./img/manage-record_2.png)

2. When the action is complete, you can view the results in the "Invocations". See [Automated Actions](../../6-automation/1-quick-start-workflow.md) chapter for details.

### Annotation

> Only available for projects configured with annotation integration. Contact coScene for details.

On the record list page, select records to annotate and click the [Create Annotation Task] button to generate annotation tasks on the corresponding annotation platform.

![manage-record_3](./img/manage-record_3.png)

## Search and Statistics

### Search and Filter

- **Search**

  Enter keywords in the search box of the record list to search record names, descriptions and labels:

  ![manage-record_5](./img/manage-record_5.png)

- **Filter**

  In the filter items of the record list, you can filter by record labels, creator, device, record custom fields, device custom fields and other properties:

  ![manage-record_6](./img/manage-record_6.png)

### Label Statistics

Click the [Statistics] button in the record list to view the number of records under each label:

![manage-record_4](./img/manage-record_4.png)
