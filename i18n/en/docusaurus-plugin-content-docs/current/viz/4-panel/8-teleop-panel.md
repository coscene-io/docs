---
sidebar_position: 8
---

# Teleop Panel

![Teleop Panel Overview](../img/viz-14-1.png)

The Teleop Panel allows you to remotely control your robot by publishing `geometry_msgs/Twist` or `geometry_msgs/msg/Twist` messages on a specified topic. To remotely operate a connected robot using this panel, you need to establish communication with the robot via [coBridge](https://github.com/coscene-io/cobridge).

## Configuration Parameters

- Publish Rate: Control the frequency of publishing Twist messages
- Topic: Specify the topic for publishing Twist messages
- Direction Control Buttons: Configure the movement parameters for Up/Down/Left/Right buttons
  - You can set corresponding values for linear velocity (x, y, z) and angular velocity

## Supported Message Types

- ROS 1: `geometry_msgs/Twist`
- ROS 2: `geometry_msgs/msg/Twist`

## Technical Implementation

The Teleop Panel is a specialized publish panel, with its core functionality being sending control commands to the robot via coBridge. To achieve remote control functionality, the robot side needs to have corresponding components configured to process the received control messages.
