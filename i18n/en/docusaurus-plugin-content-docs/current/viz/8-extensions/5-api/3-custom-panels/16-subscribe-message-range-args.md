---
sidebar_position: 16
---

# SubscribeMessageRangeArgs

```typescript
type SubscribeMessageRangeArgs = object;
```

This type represents the arguments passed to PanelExtensionContext.subscribeMessageRange.

## Properties

### topic

```typescript
topic: string;
```

The topic to subscribe to.

### convertTo?

```typescript
optional convertTo: string;
```

Convert messages to this schema before passing to the subscriber.

Subscribed MessageEvents will contain the converted message and an `originalMessageEvent` field containing the original message event. If no `convertTo` schema is specified, no message converter will be used. If there is no message converter from the original schema to the `convertTo` schema, no messages will be passed for this subscription.

### preload?

```typescript
optional preload: boolean;
```

If true, data will begin loading immediately, even before the iterator is accessed. Default is false.

### start?

```typescript
optional start: Time;
```

The start time for the subscription range. If not provided, it will use the beginning of the data source.

### end?

```typescript
optional end: Time;
```

The end time for the subscription range. If not provided, it will use the end of the data source.

## Functions

### onNewRangeIterator()

```typescript
onNewRangeIterator: (itemIterator: AsyncIterableIterator&lt;Range&lt;MessageEvent&gt;&gt;) => void;
```

`onNewRangeIterator` is a function that receives an async iterable when message data is available on the subscription.

To read messages, your function should iterate through the provided async iterable. Each item from the iterable is a batch of message events for the subscribed topic. These batches and messages are ordered by _log time_. The iterator will end when there are no more messages to read.

```typescript
async function onNewRangeIterator(batchIterator) {
  for await (const batch of batchIterator) {
    //...
  }
}
```

`onNewRangeIterator` will be called again when upstream topic data changes. For example, when a user script changes for a user script output topic subscription, or when an alias changes for an alias topic subscription. When topic data changes, the previous iterator will end, and its data is no longer valid. When `onNewRangeIterator` is called, you should discard previously received data.

If your `onNewRangeIterator` function throws an error, the iterator will end, and you will not receive any more messages until `onNewRangeIterator` is called again. Your error will be shown in the problems sidebar for the user to see.

#### Parameters

| Parameter    | Type                                                   |
| ------------ | ------------------------------------------------------ |
| itemIterator | AsyncIterableIterator&lt;Range&lt;MessageEvent&gt;&gt; |

#### Returns

`void`

## Example

```typescript
function ExampleSubscription(context) {
  // Subscribe to a specific topic's message range
  const unsubscribe = context.subscribeMessageRange({
    topic: '/robot/sensors/imu',
    start: { sec: 10, nsec: 0 },
    end: { sec: 20, nsec: 0 },
    onNewRangeIterator: async (iterator) => {
      // Process message ranges as they come in
      for await (const range of iterator) {
        for (const message of range.items) {
          console.log('Received message:', message);
        }
      }
    },
  });

  // Later, you can unsubscribe when done
  // unsubscribe();
}
```

### ~~onReset()?~~

```typescript
optional onReset: (batchIterator) => Promise<void>;
```

#### Parameters

| Parameter     | Type                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| batchIterator | AsyncIterable of Array of MessageEvent objects (using Immutable wrapper) |

#### Returns

`Promise<void>`

#### Deprecated

This method has been renamed. Use `onNewRangeIterator` instead.
