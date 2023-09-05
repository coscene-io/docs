---
sidebar_position: 3
---
# 规则的结构与格式

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
version: 1.0.0
```

- **name：规则组名称**
  - 自定义规则组名称，一个规则组中可包含多个规则
    
- **when：规则触发条件**
  - 定义日志中的关键事件，例如日志中包含某个字段
    
- **actions：规则触发后的操作**
  - 定义是否触发上传数据、创建一刻、创建&指派任务等操作

- **enabled：规则组是否启用**
  - true 为启用，启用规则组时，设备或项目中的数据触发规则后会执行预定义的操作
  - false 为禁用，禁用规则组后，设备及项目中的数据不再执行该规则组中的规则

- **version：规则组版本**
  - 规则组版本随刻行发布而更新

<br />

## 规则的标准格式

规则的参数主要分为四类：
- **对象类**：规则作用的目标对象，一般为消息、时间戳、主题、消息类型等
- **关系与逻辑运算类**：规则条件中的关系与逻辑运算
- **内容与时序判断类**：规则条件中的字段内容与时序性判断
- **公式类**：包含搜索、字符串连接、自定义值等高级功能

### 对象类参数

| 参数名称 | 说明 |
| --- | --- |
| msg | 消息 |
| msg.field | 消息中的某个字段 |
| ts | 时间戳 |
| topic | 主题 |
| msgtype | 消息类型 |
| log_text | Log 类型数据 |
| log_level | Log 类型数据的日志等级 |

- **msg：消息**

  释义：

  示例：


### 关系与逻辑运算类参数

| 参数名称 | 说明 |
| --- | --- |
| == | 等于 |
| != | 不等于 |
| > | 大于 |
| >= | 大于等于 |
| < | 小于 |
| <= | 小于等于 |
| and_ | 与 |
| or_ | 或 |
| not_ | 非 |

- **==：等于**

  释义：

  示例：

### 内容与时序判断类参数

| 参数名称 | 说明 |
| --- | --- |
| has | 包含 |
| is_none | 等于空值 |
| topic_is | 主题等于 |
| type_is | 消息类型等于 |
| sustained | 事件 a 持续发生 t 秒 |
| sequential | 在 t 秒内，按顺序发生事件 a、b、c  |
| repeated(a, n, t) | 在 t 秒内，事件 a 发生 n 次 |
| debounce | 事件 a 发生的时间间隔在 t 秒内，记为发生 1 次 |

- **has：包含**

  释义：

  示例：

### 公式类参数

| 参数名称 | 说明 |
| --- | --- |
| concat |  |
| regex_search | 正则搜索 |
| topic.upper |  |
| set_value(name, value) | 自定义值 |
| get_value(name) | 使用自定义值 |

- **concat：**

  释义：

  示例：


## 常用规则示例














