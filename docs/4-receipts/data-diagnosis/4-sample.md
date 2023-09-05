---
sidebar_position: 4
---
# 查看采集与诊断的实例
> 当项目中配置完规则后，已准入的设备就会按照规则进行数据的采集与诊断

<br/>

## 前提条件

请确认组织中存在已准入的设备，详情参见[设备准入](https://docs.coscene.cn/docs/receipts/device/device-authorize)。

<br/>

## 查看采集与诊断的实例

设定场景：当设备 A 的 Ros log 中出现字段「error 1」时，上传 log，并在字段出现的时间点创建一刻

<br/>

1. 首先在项目 X 中添加规则（具体操作参见在项目中添加规则）：

```yaml
- when:
    - has(msg.message, "error 1")  # 当 log 中出现字段「error 1」    
  actions:
    - upload() # 上传 log
    - create_moment('定位丢失') # 在字段出现的时间点创建一刻 
```

2. 配置数采设备信息（具体操作参见配置数采设备信息）：

```yaml
data_sources:
- type: log_files  # 数据类型为 log
  path: /root/logs # log 的存储地址
device_id_file: /root/device-id.txt # 设备 id 文件的存储地址
```

3. 注册设备（具体操作参见设备注册）

4. 审核设备（具体操作参见设备审核）

5. 设备 A 生成的示例 Ros log 如下：

```
2023-09-01 11:28:47.000 INFO "Demo Log message 1"
2023-09-01 11:28:48.000 INFO "Demo Log message 2"
2023-09-01 11:28:49.000 INFO "Demo Log message 3"
2023-09-01 11:28:50.000 WARN "Demo Log message 4"
2023-09-01 11:28:51.000 INFO "Demo Log message 5"
2023-09-01 11:28:52.000 INFO "Demo Log message 6"
2023-09-01 11:28:53.000 ERROR "Demo Log message 7 error 1"
2023-09-01 11:28:54.000 INFO "Demo Log message 8"
2023-09-01 11:28:55.000 INFO "Demo Log message 9"
2023-09-01 11:28:56.000 INFO "Demo Log message 10"
2023-09-01 11:28:57.000 WARN "Demo Log message 11"
2023-09-01 11:28:58.000 ERROR "Demo Log message 12 error 1"
2023-09-01 11:28:59.000 INFO "Demo Log message 13"
2023-09-01 11:29:00.000 INFO "Demo Log message 14"
2023-09-01 11:29:01.000 INFO "Demo Log message 15"
2023-09-01 11:29:02.000 INFO "Demo Log message 16"
2023-09-01 11:29:03.000 INFO "Demo Log message 17"
2023-09-01 11:29:04.000 INFO "Demo Log message 18"
2023-09-01 11:29:05.000 INFO "Demo Log message 19"
2023-09-01 11:29:06.000 INFO "Demo Log message 20"
```

6. 当设备 A 的 Ros log 中出现字段「error 1」时：

   a. 自动在项目 X 中创建记录

   b. 将对应时间段的设备数据进行上传

   c. 在触发时间点创建一刻

  
  
