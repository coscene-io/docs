---
sidebar_position: 6
---

# Topic

```typescript
type Topic = object;
```

A named message channel.

## Properties

### name

```typescript
name: string;
```

The name of the topic, e.g. "/some/topic"

### ~~datatype~~

```typescript
datatype: string;
```

#### Deprecated

Renamed to `schemaName`. `datatype` will be removed in a future version.

### schemaName

```typescript
schemaName: string;
```

The schema name is the identifier for the message type on this topic. Typically this is the fully qualified name of the message schema. The fully qualified name depends on the data source and the data loaded by the data source.

For example, `package.Message` in protobuf class serialization or `pkg/Msg` in ROS systems.

### convertibleTo?

```typescript
optional convertibleTo: readonly string[];
```

List any other schema names that the topic subscribers may be interested in. When subscribing to a topic, the panel can use the Subscription.convertTo option to request message auto-conversion from schemaName to one of the schemas in convertibleTo.
