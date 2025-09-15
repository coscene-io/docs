---
sidebar_position: 9
---

# Raw Messages

Inspect a particular message path in your data source.

As new messages are received for a given path, the collapsible tree will show just the latest message. You will be able to expand and collapse keys, and have those changes persist across playback.

![raw-messages_1.png](../img/raw-messages_1.png)

## Settings

| Field | Description |
| --- | --- |
| Font Size | Font size for text display |

## Shortcuts

### Diff mode
Compare messages by showing additions (green), deletions (red), and changes (yellow) to their fields across 2 categories:

- "previous message" – Compare consecutive messages for a given message path
- "custom" – Compare different topic messages for a given timestamp

![raw-messages_2.png](../img/raw-messages_2.png)
![raw-messages_3.png](../img/raw-messages_3.png)

### Expand all
Click the icon next to the message path to expand or collapse all nested fields in the displayed message.

| Expand all | Collapse all |
| --- | --- |
| ![raw-messages_5.png](../img/raw-messages_5.png) | ![raw-messages_4.png](../img/raw-messages_4.png) |

### Frame by frame
When there are many messages, you can view them one by one using this feature.

By clicking the buttons or using the keyboard shortcuts `Up Arrow` and `Down Arrow`, you can navigate through the messages.

![raw-messages_6.png](../img/raw-messages_6.png)

### Copy message
Click "Copy msg" to copy the current topic message to your clipboard.

![raw-messages_7.png](../img/raw-messages_7.png)