---
sidebar_position: 6
---

# Remote Device Control

The coScene platform enables real-time remote device operations, such as remote command execution and SSH connections, enhancing operational capabilities.

## Prerequisites

1. The device has coScene client programs installed. For details, please refer to [Device Installation](./2-create-device.md#add-from-device-side).
2. The organization administrator has granted device access and permitted remote control operations. For device access, please refer to [Device Access](./3-manage-device.md#device-access).

## Real-time Visualization

After device access is granted, you can view devices in the "Devices" page under "Organization Management". A [Real-time Visualization] button will appear, which allows you to connect and view the device's real-time status.
![device realtime](./img/4-3-device-realtime.png)

![device realtime demo](./img/4-3-device-realtime-demo.png)

## Web SSH

After device access is granted, you can view devices in the "Devices" page under "Organization Management". A [Web SSH] button will appear, which opens a new browser tab to establish an SSH connection to the device.

![device ssh](./img/4-3-device-ssh.png)
![device ssh demo](./img/4-3-device-ssh-demo.png)

The page comes with [Trzsz file transfer tool](https://trzsz.github.io/cn/) by default. Users can upload local files to the remote device using the `trz file1` command, and download files from the remote device using `tsz file1 file2 file3`. For more advanced usage, please refer to the [detailed documentation](https://trzsz.github.io/cn/).

## Remote CMD

When a device is online, users can execute specific tasks by sending commands through the Remote CMD feature.

![device cmd](./img/4-3-device-cmd.png)

Click the [Remote CMD] button to enter the operation page. In this example, we execute `touch ~/hello-world.txt` to create a file named `hello-world.txt`.
![device cmd demo](./img/4-3-device-cmd-demo-1.png)

Then execute `ls ~/` to list all files. The command execution history shows that both commands were successful.
![device cmd demo](./img/4-3-device-cmd-demo-2.png)

## Port Forwarding

When a device doesn't have a public IP, users cannot directly access its ports. The port forwarding feature allows device ports to be forwarded, making them accessible over the public network. This is useful for temporarily exposing device services or debugging local connections.

![device port](./img/4-3-device-port.png)

Here's a simple example. Using the [Web SSH] feature, we connect to the remote device and run `python3 -m http.server 9000 -d ~` to start a simple HTTP Server that serves files from the `~` directory. The server listens on port 9000, which we then configure for forwarding. After this, we can access the forwarded address from our local browser to reach the device.

1. Configure port 9000 forwarding in the web interface
   ![device port demo](./img/4-3-device-port-demo-1.png)

2. Start a simple HTTP Server using Web SSH by executing `python3 -m http.server 9000 -d ~`
   ![device port demo](./img/4-3-device-port-demo-3.png)

3. Access the forwarded address in the browser to see all files in the device's `~` directory
   ![device port demo](./img/4-3-device-port-demo-2.png)

4. Check the device logs to confirm that browser requests are being forwarded and returning 200 status codes
   ![device port demo](./img/4-3-device-port-demo-3.png)