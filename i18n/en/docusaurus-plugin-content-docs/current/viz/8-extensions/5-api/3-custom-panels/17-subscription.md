---
sidebar_position: 17
---

# Subscription

```typescript
type Subscription = object;
```

A Subscription represents a connection to a data source for receiving messages on a specific topic.

## Methods

### unsubscribe()

```typescript
unsubscribe(): void
```

Unsubscribes from the topic, stopping the flow of messages.

#### Returns

`void`

## Example

```typescript
// Subscribe to a topic
const subscription = context.subscribe(['/robot/status']);

// Later, unsubscribe when you no longer need the data
subscription.unsubscribe();
```

## Remarks

Subscriptions are created using the `PanelExtensionContext.subscribe()` method. The returned subscription object can be used to unsubscribe when the panel no longer needs to receive updates on that topic.

Make sure to unsubscribe from topics when your panel is unmounted or when you no longer need the data to avoid memory leaks and unnecessary processing.

## Properties

### topic

```typescript
topic: string;
```

---

### convertTo?

```typescript
optional convertTo: string;
```

If a topic has an additional schema name, specifying the schema name will use the registered message converter to convert messages on that topic to the convertTo schema. The MessageEvents for this subscription will include the converted message and an originalMessageEvent field containing the original message event.

---

### ~~preload?~~

```typescript
optional preload: boolean;
```

Setting preload to _true_ hints to the data source that it should attempt to load all available messages for the topic. The default behavior is to only load messages for the current frame.

**Only** topics with `preload: true` can be used in the `allFrames` render state.

#### Deprecated

Please use `PanelExtensionContext.subscribeMessageRange` instead.
