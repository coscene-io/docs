---
sidebar_position: 3
---

# 日志面板

「日志面板」是用于显示和管理机器生成的日志信息的面板，它帮助用户实时监控、过滤和分析系统运行时的各种事件和状态更新。

![viz-6-1.png](../img/viz-6-1.png)

## 日志面板中的属性值
### 通用

- 「话题」：确定日志面板中展示的具体日志来源。例如，选择 /rosout 来显示 ROS 系统中的日志信息；选择其他日志话题以显示[记录中日志文件的信息](../../collaboration/record/5-manage-file.md)。
- 「日志级别」：用于过滤日志信息，只显示指定级别及以上的日志。例如，选择 >= DEBUG 将显示 DEBUG 级别及以上的日志，包括 INFO、WARN、ERROR 等。

### Display

- 「Reverse order」：控制日志显示顺序，关闭时，日志按时间顺序显示，最旧日志在最上方

### 命名空间

- 「过滤列表」：根据不同的命名空间，只显示与该命名空间相关的日志信息，便于查找和分析特定模块或功能的日志
  例如，若只想在面板中显示 /move-base 的日志

1. 在「过滤列表」中选择列出可见

![viz-6-3.png](../img/viz-6-3.png)

2. 隐藏其他日志模块

![viz-6-4.png](../img/viz-6-4.png)

3. 查看过滤后的日志

![viz-6-5.png](../img/viz-6-5.png)

## 支持的消息类型

想要使用日志面板，你的数据源必须提供符合以下支持的消息类型。

| 框架 | 消息类型 |
| --- | --- |
| ROS 1 | [rosgraph_msgs/Log](https://docs.ros.org/en/noetic/api/rosgraph_msgs/html/msg/Log.html) |
| ROS 2 | [rcl_interfaces/msg/Log](https://github.com/ros2/rcl_interfaces/blob/master/rcl_interfaces/msg/Log.msg) |
| 自定义 | [foxglove.Log](../message-schemas/log) |
