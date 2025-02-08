---
sidebar_position: 12
---

# publish panel

![viz-12-1.png](../img/viz-12-1.png)


The Publish Panel allows you to publish messages on a specified topic, sending information back to your robot system via [coBridge](https://github.com/coscene-io/coBridge).

## Settings Options
- Editing Mode: When enabled, you can edit the message content; when disabled, only the publish button is displayed.
- Button Title: Set the label for the publish button.
- Button Tooltip: Add hover tooltip information for the button.
- Button Color: Customize the button's color

## Interaction
1. Specify Topic: Enter the topic you wish to publish the message to, and the system will automatically infer its message schema name, generating the corresponding JSON message template in the text field.
2. Select Schema: Click on the schema name field to display a dropdown list of common ROS schemas. After selecting a schema, the text field will automatically fill in the corresponding JSON message template.
3. Edit Message: Modify the message template as needed to customize the content you wish to send back to the robot system.
4. Publish Message: Click the "Publish" button to send the message to the specified topic.

## Notes
- If the web client is not connected to a machine that supports the publishing feature, the "Publish" button will be disabled.
- When connected to a robot with coBridge installed, the coBridge configuration on the machine must declare the clientPublish capability to support publishing topic information from the web client.

**With the Publish Panel, you can easily send custom messages to the robot system, enhancing interaction capabilities with the robot system.**
