---
sidebar_position: 1
---

# 关于数据自动采集与诊断

数据自动采集与诊断是针对设备数据提供的运维服务。根据预定义的规则，通过实时监测设备日志，采集目标数据、执行自动诊断，实现设备故障的自动分析与潜在风险的提前探测。

# 基本元素

数据自动采集与诊断流程有三个基本要素，分别为：触发对象、触发条件、触发后的操作。

- **触发对象**：设备和项目中的日志与 bag 数据
- **触发条件**：日志中发生的事件与预定义的规则相匹配
- **触发后的操作**：上传数据、创建一刻、创建&指派任务等

# 使用流程

1. **配置规则**：定义触发数据采集与诊断的条件，以及触发后的操作
2. **配置数采设备信息**：定义需要监控的设备日志所在目录、设备信息文件的存放目录等
3. **注册设备**：将设备注册到刻行平台，设备启用后即可按照规则采集数据
4. **查看实例**：在项目中查看自动采集的数据，以及诊断结果
