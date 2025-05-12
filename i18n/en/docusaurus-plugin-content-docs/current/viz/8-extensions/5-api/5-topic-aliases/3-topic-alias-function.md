---
sidebar_position: 3
---

# TopicAliasFunction()

```typescript
type TopicAliasFunction = (args) => TopicAlias[];
```

TopicAliasFunction receives a data source topic and variable list, and outputs a list of alias topics. Register this function using ExtensionContext.registerTopicAliases.

## Parameters

| Parameter | Type                                                                                                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| args      | [Immutable](../6-other/2-immutable.md)\<\{ topics: [BaseTopic](./1-base-topic.md)[]; globalVariables: Readonly\<Record\<string, [VariableValue](../6-other/8-variable-value.md)\>\>; \}\> |

## Return Value

TopicAlias[]
