---
sidebar_position: 2
---

# Installing coScene Software via APT

## Add coScene GPG key

``` bash
curl -fsSL https://apt.coscene.cn/coscene.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/coscene.gpg
```

## Add Repository to Source List

``` bash
echo "deb [signed-by=/etc/apt/trusted.gpg.d/coscene.gpg] https://apt.coscene.cn $(. /etc/os-release && echo $UBUNTU_CODENAME) main stable" | sudo tee /etc/apt/sources.list.d/coscene.list
```

## Update APT Repository

```bash
sudo apt update
```

## Install Software

After updating the APT repository, you can install coScene software.

* coStudio

  ![Install coStudio](./img/2-install-costudio.png)
  ```bash
  sudo apt install coStudio 
  ```
  
* coBridge

  ![Install coBridge](./img/2-install-cobridge.png)
  ```bash
  sudo apt install ros-${ROS_DISTRO}-cobridge
  ```

* coListener

  ![Install coListener](./img/2-install-colistener.png)
  ```bash
  sudo apt install ros-${ROS_DISTRO}-colistener
  ```
  