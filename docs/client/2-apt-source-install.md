---
sidebar_position: 2
---

# 通过 APT 安装 coScene 软件

## 添加 coScene GPG key

``` bash
curl -fsSL https://apt.coscene.cn/coscene.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/coscene.gpg
```

## 添加仓库到源列表

``` bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/trusted.gpg.d/coscene.gpg] https://apt.coscene.cn $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/coscene.list
```

## 更新 APT 仓库

```bash
sudo apt update
```

## 安装软件

APT 仓库更新后，你就可以安装 coScene 的软件了。

* coStudio

  ![安装coStudio](./img/2-install-costudio.png)
  ```bash
  sudo apt install coStudio 
  ```
  
* coBridge

  ![安装coBridge](./img/2-install-cobridge.png)
  ```bash
  sudo apt install ros-${ROS_DISTRO}-cobridge
  ```

* coListener

  ![安装coListener](./img/2-install-colistener.png)
  ```bash
  sudo apt install ros-${ROS_DISTRO}-colistener
  ```
  