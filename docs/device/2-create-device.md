---
sidebar_position: 2
---

# 添加设备

当企业或团队期望实现设备远程数据采集、实时可视化、远程连接等能力时，可在平台中创建一台与线下真实设备相对应的设备。

平台提供以下 3 种设备添加方式：

| 添加方式 | 适用场景 |
| --- | --- |
| 命令行安装 | 少量设备逐一安装 |
| 离线安装 | 设备出厂批量安装 |
| 手动录入 | 快速创建仅用于数据管理的设备，不与平台通信 |

## 版本支持{#supported-versions}
> 当前仅支持 Linux 设备，其他操作系统的设备暂不支持

在设备上执行以下命令，快速进行设备自检，获得对应系统信息：

```
bash <(wget --no-check-certificate -qO - https://download.coscene.cn/cosbinary/script/beta/device-check.sh)
```

| 硬件架构 | 操作系统 | ROS 版本 | 安装说明 |
| -------- | -------- | -------- | -------- |
| AMD64 | Ubuntu 14.04 | ROS1 Indigo | 仅支持手动采集数据、监听文件/topic 自动采集数据、结合 coStudio 局域网实时可视化设备 |
| AMD64 | Ubuntu 16.04 | 任意版本 | 仅支持手动采集数据、监听文件自动采集数据 |
| AMD64 | Ubuntu 18.04 | ROS1 Melodic | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AMD64 | Ubuntu 20.04 | ROS1 Noetic | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AMD64 | Ubuntu 20.04 | ROS2 Foxy | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AMD64 | Ubuntu 22.04 | ROS2 Humble | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AMD64 | Ubuntu 24.04 | ROS2 Jazzy | 仅支持手动采集数据、监听文件自动采集数据、实时可视化设备 |
| AArch64 | Ubuntu 18.04 | ROS1 Melodic | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AArch64 | Ubuntu 20.04 | ROS1 Noetic | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AArch64 | Ubuntu 20.04 | ROS2 Foxy | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| AArch64 | Ubuntu 22.04 | ROS2 Humble | 支持手动采集数据、监听文件/topic 自动采集数据、实时可视化设备、远程 SSH 设备 |
| ARMv7 | Ubuntu 14.04 | ROS1 Indigo | 仅支持手动采集数据、监听文件/topic 自动采集数据、结合 coStudio 局域网实时可视化设备 |

*注意：其他非官方支持版本安装客户端后，可能无法正常使用。

## 命令行安装 {#add-device-from-device}

### 适用情况与入口

此方式适用于少量设备逐次接入平台。用户需在真实设备上打开终端，执行相应的注册命令。

入口位于「组织管理」页面的「设备」分页，点击【添加设备】按钮，进入添加设备弹窗

![添加设备入口](./img/4-3-add-device-button.png)

![添加设备弹窗](./img/4-3-add-device-popup.png)

### 设备 ID 配置

设备 ID 是设备在平台中的唯一标识，注册后不可修改。设备 ID 的生成方式如下：
- 从设备端获取设备的唯一标识码（推荐使用设备 SN）
- 由系统自动生成随机 ID

1. **从设备端获取 ID**：从设备端指定文件中获取 ID，支持 txt、json、yaml 文本文件类型。
   - txt 文件
      - 系统会读取文件的全部内容作为设备 ID
      - 只需填写该文件在设备上的完整路径
   - json、yaml 文件
      - 系统会读取文件中指定的字段作为设备 ID
      - 除文件路径外，还需在下方输入框填写字段标识名。（如文件内容为 `id:123`，在此处填写 `id`，则会将 `123` 作为设备 ID）。
   - ID 设置
      - 为提高效率，组织管理员可在「组织设备 - 设备配置」中设置统一的设备 ID 文件路径
      - 设置后，添加设备时将自动填充该路径，用户仍可根据实际情况修改。详见[设备配置](./4-device-collector.md#存储设置mod)

   ![从设备端获取 ID 位置](./img/4-3-add-device-id-01.png)

2. **系统生成 ID**：平台生成默认 ID 号

   ![系统生成 ID](./img/4-3-add-device-id-02.png)

### 安装客户端选择

1. **数据采集**

   安装后可手动采集数据、根据规则自动采集数据，使用前需配置数采监听目录等信息，详情参考[设备配置文档](./4-device-collector.md#存储设置mod)。

2. **远程控制**

   安装后可实现网页 SSH、结合 ROS 套件实时可视化设备，详情参考[远程连接设备文档](./5-device-remote-control.md)；

3. **ROS 套件**

   用于实现更多功能：根据规则实时监听 topic 自动采集数据、可视化设备等功能。

   ![安装客户端选择](./img/4-3-install-coscout-colink.png)

### 执行安装命令
> 注意：
> - 设备端执行命令添加时，若以 root 用户执行命令，或在命令前加 `sudo`，会将 coScout 安装在 root 下；若直接使用当前用户执行命令，会将 coScout 安装在当前用户下。
> - 若需直接添加设备到项目中，可前往「项目-设备」页面添加设备

1. 选择安装场景

   默认为首次安装/升级客户端；若选择换机重装，会自动清除设备原有配置，设备安装完成后需重新启用客户端。详情参考[换机、升级、卸载流程指南](./7-change-device-guide.md)

2. 在设备终端执行安装命令

   ![系统生成安装命令](./img/4-3-install-cmd.png)

   设备端出现 `Installation completed successfully 🎉` 提示即安装成功(受设备性能影响，安装完成后设备列表页显示可能存在延迟)

   ![设备端安装成功](./img/4-3-install-successfully.png)

3. 联系组织管理员，在「组织管理-设备」页面启用客户端

   ![管理员到平台中启用设备](./img/4-3-access-device.png)

4. 在设备端启用 ROS node

   该步骤为可选操作，执行后可支持实时检测故障、实时可视化设备，若不执行，也可手动采集数据、根据规则监听文件自动采集数据、远程 SSH 设备

   - 在启动 ROS node 之前，请先 source 包含自定义消息的工作空间环境
   - 建议在设备端的启动脚本中添加 ROS node 的启动命令

   对于 ROS1 设备，执行以下命令启用 ROS node：

   ```bash
   roslaunch cobridge cobridge.launch
   ```

   ```bash
   roslaunch colistener colistener.launch
   ```

   对于 ROS2 设备，执行以下命令启用 ROS node：

   ```bash
   ros2 launch cobridge cobridge_launch.xml
   ```

   ```bash
   ros2 launch colistener colistener.launch.xml
   ```   

## 离线安装

### 适用情况与相关设置

1. 使用离线安装包添加设备：将离线安装包集成到设备的软件更新包中：
   - 适用于设备出厂批量部署场景
   - 可实现设备开箱即用，无需单独安装客户端

2. 配置说明：
   - 基础配置项（设备 ID 配置、安装客户端选择）与「命令行安装」相同，请参考上述章节了解详情
   - 下文将重点说明「离线安装」特有的安装步骤

### 安装步骤

1. 下载安装脚本 **install.sh**、安装包 **cos_binaries.tar.gz**，将其存放于至设备端。

   ![下载离线安装包](./img/4-3-download-offline-package.png)

2. 打开设备终端，在对应目录下，给安装脚本赋予执行权限：

   ```plain text
   chmod +x install.sh
   ```

3. 在设备终端，执行本地安装命令：

   ![使用离线安装包添加](./img/4-3-offline-install-package.png)

   其中，参数 `--use_local` 为离线安装包在设备上的路径，需根据实际情况进行修改。

4. 在设备端启用 ROS node
   > 若要将离线安装包合入软件版本中，强烈建议在设备端的启动脚本中添加 ROS node 的启动命令

   该步骤为可选操作，执行后可支持实时检测故障、实时可视化设备，若不执行，也可手动采集数据、根据规则监听文件自动采集数据、远程 SSH 设备

   对于 ROS1 设备，执行以下命令启用 ROS node：

   ```bash
   roslaunch cobridge cobridge.launch
   ```

   ```bash
   roslaunch colistener colistener.launch
   ```

   对于 ROS2 设备，执行以下命令启用 ROS node：

   ```bash
   ros2 launch cobridge cobridge_launch.xml
   ```

   ```bash
   ros2 launch colistener colistener.launch.xml
   ``` 

## 手动录入

### 适用情况

创建虚拟设备字段，仅用于数据管理，不与真实设备对应。

### 操作步骤

1. 在「添加设备」弹框输入设备 ID 及其他信息（设备 ID 不可重复），点击【添加】即可创建设备。

2. 若组织管理员设置了设备自定义字段，用户需按页面提示填写必填项（如示例中的机型）

![填写信息添加](./img/4-3-input-information.png)

## 后续操作
- [启用设备](./3-manage-device.md#enable-device)
- [将设备添加到项目](./3-manage-device.md#assign-devices-to-projects)
  - [手动采集数据](../use-case/1-common-task.md)
  - [根据错误码自动采集数据](../use-case/data-diagnosis/2-get-started.md)
- [远程连接设备](./5-device-remote-control.md)
  - 实时可视化
  - 网页 SSH
  - 远程下发命令
  - 端口映射

## 常见问题

1. **问：设备执行完安装命令后，在「组织管理-设备」页面未显示**

   答：设备网络良好的情况下：
   
   - 等待 1-5 分钟左右，刷新设备列表后即可看到新注册的设备
   - 确认设备 ID 对应的文件（yaml/txt）中有内容

2.  **问：执行设备安装命令后报错 `curl: (60) SSL certificate problem`**

      ```
      curl: (60) SSL certificate problem: unable to get local issuer certificate
      More details here: http://curl.haxx.se/docs/sslcerts.html

      curl performs SSL certificate verification by default, using a "bundle"
      of Certificate Authority (CA) public keys (CA certs). If the default
      bundle file isn't adequate, you can specify an alternate file
      using the --cacert option.
      If this HTTPS server uses a certificate signed by a CA represented in
      the bundle, the certificate verification probably failed due to a
      problem with the certificate (it might be expired, or the name might
      not match the domain name in the URL).
      If you'd like to turn off curl's verification of the certificate, use
      the -k (or --insecure) option.
      ```

      答：这是因为机器端证书较旧，可在执行安装命令时，增加参数，跳过 SSL 证书验证：
   
      - 将 https 前的 `fsSL` 替换为 `kfsSL`
      - 在最末尾输入 `空格` + `--skip_verify_cert` 参数
      
         示例如下：

         ```bash
         /bin/bash -c "$(curl -kfsSL https://*/install.sh)" -s --mod=* --org_slug=* --server_url=* --serial_num=* --skip_verify_cert
         ```
3. **问：在虚拟机或 Docker 中测试时，无法成功安装并启用客户端**

   答：这是因为机器不支持 systemd，可在执行命令安装时，在最末尾输入 `空格` + `--disable_service` 参数，禁用 systemd 服务。示例如下：

   ```bash
      /bin/bash -c "$(curl -fsSL https://*/install.sh)" -s --mod=* --org_slug=* --server_url=* --serial_num=* --disable_service
   ```

   安装成功后，需手动执行以下命令启动数采客户端：

   ```
    ~/.local/bin/cos daemon
   ```

4. **问：机器是 32 位的操作系统，安装时没有自动安装对应版本**

   答：可在执行命令安装时，在最末尾输入 `空格` + `--use_32bit` 参数，安装 32 位版本。示例如下：
   
   ```bash
   /bin/bash -c "$(curl -fsSL https://*/install.sh)" -s --mod=* --org_slug=* --server_url=* --serial_num=* --use_32bit
   ```