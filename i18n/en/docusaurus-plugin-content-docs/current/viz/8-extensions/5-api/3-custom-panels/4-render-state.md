---
sidebar_position: 4
---

# RenderState

```typescript
type RenderState = object;
```

RenderState is the information passed to a panel's `onRender` function.

To receive updates for specific parts of the RenderState, you must first call the `watch` function and specify the field name. For example, call `watch("currentTime")` to receive updates for `currentTime`.

If a field is missing from the RenderState, it could be because the value hasn't changed since the last `onRender` call, or you haven't called `watch` for that field.

## Properties

### currentFrame?

```typescript
optional currentFrame: MessageEvent[];
```

The latest messages for the current render frame. These are new messages since the previous render frame.

---

### didSeek?

```typescript
optional didSeek: boolean;
```

True if the data source performed a seek operation. This indicates that some data may have been skipped (never appeared in `currentFrame`), so the panel should clear any stale state to avoid displaying incorrect data.

---

### ~~allFrames?~~

```typescript
optional allFrames: MessageEvent[];
```

All available messages. Lists all available messages when possible.

#### Deprecated

Please use PanelExtensionContext.subscribeMessageRange instead.

---

### parameters?

```typescript
optional parameters: Map<string, ParameterValue>;
```

A map of current parameter values. Parameters are key/value pairs associated with a data source, and may not be supported by all data sources. For example, ROS 1 live connections support parameters via the parameter server.

---

### sharedPanelState?

```typescript
optional sharedPanelState: Record<string, unknown>;
```

Temporary panel state shared between panels of the same type. This can be any data that panel authors wish to share between panels.

---

### variables?

```typescript
optional variables: Map<string, VariableValue>;
```

A map of current Studio variables. Variables are key/value pairs that are globally accessible by panels and scripts in the current layout.

---

### topics?

```typescript
optional topics: Topic[];
```

A list of available topics. This list includes both subscribed and unsubscribed topics.

---

### currentTime?

```typescript
optional currentTime: Time;
```

A timestamp value representing the current playback time.

---

### startTime?

```typescript
optional startTime: Time;
```

The starting timestamp of the current data source playback range. For offline files, this value is expected to be present. For live connections, the start time may or may not be present depending on the data source.

---

### endTime?

```typescript
optional endTime: Time;
```

The ending timestamp of the current data source playback range. For offline files, this value is expected to be present. For live connections, the end time may or may not be present depending on the data source.

---

### previewTime?

```typescript
optional previewTime: number;
```

A value in seconds representing the preview time. Preview time is set when a user hovers over the seek bar or when a panel explicitly sets the preview time. The preview time is a value in seconds within the playback range.

For example, a chart panel might set the preview time when the user hovers over the chart, signaling to other panels where the user is currently hovering and allowing them to render accordingly.

---

### colorScheme?

```typescript
optional colorScheme: "dark" | "light";
```

The color scheme currently used throughout the application.

---

### appSettings?

```typescript
optional appSettings: Map<string, AppSettingValue>;
```

Application settings. This will only include key/values subscribed to with @PanelExtensionContext.subscribeAppSettings.
