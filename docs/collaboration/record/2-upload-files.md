---
sidebar_position: 2
---

# 上传文件

在 coScene 中，文件的上传方式有两种：**本地上传、URL 上传**

## 本地文件上传

> 本地文件上传包括：本地文件上传、本地文件夹上传

用户在一条记录中，可以通过拖拽文件，或点击【上传文件】按钮，将本地的文件上传到记录中。

## URL 文件上传

> URL 文件上传包括：OSS 文件上传、普通链接上传

用户在一条记录中，可以通过粘贴文件 URL 的方式，将远程文件导入到记录中。

第一步：在「记录详情页面」，点击【上传文件】，选择【Link】。

![record-upload](./img/record-upload.png)

![upload-file-by-url-1](./img/upload-file-by-url-1.png)

第二步：粘贴需要上传的文件链接。

![upload-file-by-url-2](./img/upload-file-by-url-3.png)

第三步：校验文件基本信息后，点击【确定】，即可将 URL 中的文件导入到记录中。

![upload-file-by-url-3](./img/upload-file-by-url-3.png)

## 文件的可视化

> 暂时只支持 Rosbag 文件的查看

在「文件列表」中，选择文件并点击文件名称，即跳转到「可视化界面」进行播放：

![file-1](./img/file-1.png)

## 文件的管理

### 搜索

在「文件列表」中的搜索框中输入关键字，可以对文件名称进行搜索：

![file-2](./img/file-2.png)

### 下载

在「文件列表」中，点击文件的【下载】按钮，可以将文件下载到本地：

![file-3](./img/file-3.png)

### 删除

在「文件列表」中，点击文件的【删除】按钮，可以将文件删除：

> 删除的文件不可恢复；但可以通过回溯版本找到并下载

![file-4](./img/file-4.png)
