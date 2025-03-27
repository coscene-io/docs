---
sidebar_position: 1
---

# Connect to Devices w/ coBridge

[coBridge](https://github.com/coscene-io/coBridge) is an open-source edge software provided by coScene, currently supporting **ros1** `noetic`, **ros2** `foxy` and `humble` versions. coBridge runs as a ros node on the robot side and interacts with the cloud through websocket connections. After establishing a connection with the cloud, coBridge can subscribe to ros topics and call ros services based on cloud commands, enabling real-time robot status monitoring, remote command deployment, and other functionalities.

## Install coBridge

On the device side, open a terminal and follow these steps to install coBridge.

1. Import the public key.

```bash
  wget https://download.coscene.cn/cobridge/coscene.gpg && sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/coscene.gpg coscene.gpg
```

2. Add the source.

```bash
  echo "deb [signed-by=/etc/apt/trusted.gpg.d/coscene.gpg] https://download.coscene.cn/cobridge $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/cobridge.list
```

3. Update apt and install.

```bash
  sudo apt update
  # Note: If ROS_DISTRO is not in your environment variables, ${ROS_DISTRO} should be replaced with 'noetic', 'foxy' or 'humble'
  sudo apt install ros-${ROS_DISTRO}-cobridge -y
```

4. Run coBridge.

```bash
  source /opt/ros/${ROS_DISTRO}/setup.bash

  # for ros 1 distribution
  roslaunch cobridge cobridge.launch

  # for ros 2 distribution
  ros2 launch cobridge cobridge_launch.xml
```

## Real-time Device Visualization Using coStudio

1. Download [coStudio](https://www.coscene.cn/download).
2. After launching coStudio, select the "Open Connection" feature.
   ![Open Connection](./img/1-open-connection.png)
3. Choose the coScene Websocket option and enter the connection address in the WebSocket URL field. `ws://localhost:21274` **(21274 is the default port for coBridge)**.
   ![Select Connection](./img/1-select-connection.png)
4. Once connected, you can use different panels for real-time device data visualization.
   ![Real-time Visualization](./img/1-realtime-viz.png)

## Visualization Reference Links

- Panel Settings: [Panel Settings](https://docs.coscene.cn/docs/category/panel)
- Layout Settings: [Layout](https://docs.coscene.cn/docs/viz/layout)
