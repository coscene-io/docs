---
sidebar_position: 4
---
# 规则的结构与示例

## 规则的使用前提

规则仅对特定格式的数据生效，即：包含消息、时间戳、主题、消息类型的流数据。

其中，支持的时间戳格式如下（[参考文档](https://www.w3schools.com/python/python_datetime.asp)）：

<table>
    <tr>
        <th>时间戳类型</th><th>时间戳格式</th><th>示例</th>
    </tr>
    <tr>
        <td rowspan="4">常规<p><i>*文件中的时间戳</i></p></td><td>%m%d %H:%M:%S.%f</td><td>0212 12:12:12.548513</td>
    </tr>
    <tr>
        <td>%b %d %H:%M:%S</td><td>Dec 12 12:12:12</td>
    </tr>
    <tr>
        <td>%Y-%m-%d %H:%M:%S.%f</td><td>2023-02-12 12:12:12.548513</td>
    </tr>
    <tr>
        <td>%H:%M:%S.%f</td><td>12:12:12.548513</td>
    </tr>
    <tr>
        <td rowspan="3">特殊<p><i>*文件名/文件第一行中的时间戳</i></p><p><i>（用于文件中时间戳未全部包含年、月、日、时、分、秒的情况）</i></p></td><td>%Y-%m-%d %H:%M:%S</td><td>2023-02-12 12:12:12</td>
    </tr>
    <tr>
        <td>%Y/%m/%d %H:%M:%S</td><td>2023/02/12 12:12:12</td>
    </tr>
    <tr>
        <td>%Y%m%d%H</td><td>2023021212</td>
    </tr>
</table>

若有其他格式的时间戳，请联系刻行。

<br />

## 规则的基本结构

数据采集与诊断规则的基本结构如下：

```yaml
name: diagnosis rule
rules:
  - when:
      - msg.somevalue > 10
      - msg.othervalue < 10
    actions:
      - upload(before=5, extra_files=[...])
      - create_moment('Value is not expected')
enabled: true
version: v1
```

- **name：规则组名称**
  - 自定义规则组名称，一个规则组中可包含多个规则
    
- **when：规则触发条件**
  - 定义日志中的关键事件，例如日志中包含某个字段
  - when 中任何一个规则触发以下所有 action
    
- **actions：规则触发后的操作**
  - 定义是否触发上传数据、创建一刻、创建&指派任务等操作
  - 以上任何条件会触发 所有 actions

- **enabled：规则组是否启用**
  - true 为启用，启用规则组时，设备或项目中的数据触发规则后会执行预定义的操作
  - false 为禁用，禁用规则组后，设备及项目中的数据不再执行该规则组中的规则

- **version：规则组版本**
  - 规则组版本目前必须是 version: v1

<br />

## 常用规则条件示例
 > 以下展示了部分典型的规则触发条件

```yaml
# Error code happened
'Error code 123 happened' in log

# Check x velocity is between 4 and 10
topic == '/velocity' and 4 < msg.linear.x < 10

# Parse value from log and check it's between 4 and 10
4 < regex_search(log, 'X velocity is (\\d+)').group(1) < 10

# Robot didn't start charging after returning to base in 30 seconds
timeout(
  'Returned to base' in log,
  'charging state: CHARGING' in log,
  duration=30
)

# A command didn't finish in 10 seconds
timeout(
  set_value('cmd_id', regex_search(log, 'Sending command id (\\d+)').group(1)),
  regex_search(log, 'Command (\\d+) finished').group(1) == get_value('cmd_id'),
  duration=10
)

# If temperature rises by 5 within a minute
# Assumes the message has a `value` field
topic == '/temp' and sequential(
  set_value('start_temp', msg.value),
  msg.value - get_value('start_temp') > 5,
  duration=60
)

# Check initialization finishes in 20 seconds
timeout(
  'Initialization start' in log,
  # The three modules can finish init in any order
  any_order(
    'GPS started' in log,
    'Localization started' in log,
    'Motor online' in log),
  'Initialization finished' in log,
  duration=20
)

# Detect a topic didn't receive message for more than 20 seconds,
# for example, localization module crashed
timeout(
  topic == '/localization',
  topic == '/localization',
  duration=20
)

# Temperature higher than 40 for longer than a minute
sustained(
  topic == '/temp',
  msg.value > 40,
  duration=60
)

# Frequent timeout of chassis loop: more than 10 times per minute
repeated(
  timeout(
    'Send chassis command' in log,
    'Chassis received' in log,
    duration=1
  ),
  times=10,
  duration=60
)

# Trigger an error, but ignore following occurrances if they happen 
# within 10 seconds of each other
debounce(
  'Error 123' in log,
  duration=10
)
```
