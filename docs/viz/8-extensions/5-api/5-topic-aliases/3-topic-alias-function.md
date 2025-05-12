---
sidebar_position: 3
---

# TopicAliasFunction()

```typescript
type TopicAliasFunction = (args) => TopicAlias[];
```

TopicAliasFunction 接收数据源主题和变量列表，并输出别名主题列表。使用 ExtensionContext.registerTopicAliases 注册此函数。

## 参数

| 参数 | 类型                                                                                                                                                                                      |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| args | [Immutable](../6-other/2-immutable.md)\<\{ topics: [BaseTopic](./1-base-topic.md)[]; globalVariables: Readonly\<Record\<string, [VariableValue](../6-other/8-variable-value.md)\>\>; \}\> |

## 返回值

TopicAlias[]
