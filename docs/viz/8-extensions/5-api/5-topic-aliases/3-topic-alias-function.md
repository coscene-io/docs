# TopicAliasFunction()

```typescript
type TopicAliasFunction = (args) => TopicAlias[];
```

TopicAliasFunction 接收数据源主题和变量列表，并输出别名主题列表。使用 ExtensionContext.registerTopicAliases 注册此函数。

## 参数

| 参数 | 类型 |
| --- | --- |
| args | [Immutable](/extension-api/type-aliases/Immutable)\<\{ topics: [BaseTopic](/extension-api/type-aliases/BaseTopic)[]; globalVariables: Readonly\<Record\<string, [VariableValue](/extension-api/type-aliases/VariableValue)\>\>; \}\> |

## 返回值

TopicAlias[] 