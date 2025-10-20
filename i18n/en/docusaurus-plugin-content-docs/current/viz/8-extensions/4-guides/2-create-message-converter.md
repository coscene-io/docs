---
sidebar_position: 2
---

# Create a Message Converter

Build a simple message converter to transform custom GPS messages into messages conforming to the `foxglove.LocationFix` schema, so they can be visualized in the map panel of the visualization.

## Setup

In your terminal window, `cd` to the directory where your source code resides, then run the following command:

```
npm init coscene-extension@latest myExtensionName
```

This will use create-coscene-extension to create a `myExtensionName` directory containing the source code for a sample message converter.

## Registering the Converter

The `index.ts` file in your project's `src` folder is the entry point for your extension source code. It must export an `activate` function that accepts an `extensionContext` parameter of type ExtensionContext.

To register a message converter, call `registerMessageConverter` on the `extensionContext` parameter, passing three arguments: the source schema type, the target schema type, and the actual `converter` function.

```
import { MessageEvent } from "@coscene/extension";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "...",
    toSchemaName: "...",
    converter: (inputMessage: MyInputType, messageEvent: MessageEvent<MyInputType>) => {
      // ...
    },
  });
}
```

The `converter` function accepts two arguments – the input topic message and the full message event. The message event can be used to access other relevant information, such as the message's `publishTime`, `receiveTime`, and `topic` name.

## Writing the Converter

Suppose our data contains GPS messages of type `sensors.MyGps`, which include `lat` and `lon` fields.

```
type MyGps = {
  lat: number;
  lon: number;
};
```

To visualize GPS coordinates, the map panel requires messages in the foxglove.LocationFix format. In short, our converter needs to transform `MyGps` messages into messages conforming to the `foxglove.LocationFix` schema.

First, specify the _from_ schema (`sensors.MyGps`) and the _to_ schema (`foxglove.LocationFix`) to inform the visualization that the converter we register will convert `sensors.MyGps` messages into `foxglove.LocationFix` messages.

Then, write the `converter` function. In our example, we remap the `lat` and `lon` fields to the `latitude` and `longitude` fields expected by the `foxglove.LocationFix` schema:

```
export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "sensors.MyGps",
    toSchemaName: "foxglove.LocationFix",
    converter: (myGps: MyGps, messageEvent: MessageEvent<MyGps>) => {
      return {
        latitude: myGps.lat,
        longitude: myGps.lon,
      };
    },
  });
}
```

## Testing

Once you have packaged and installed the extension, load any data source containing `sensors.MyGps` messages in the visualization, and visualize them in the map panel or raw message panel by clicking the schema dropdown and selecting the output schema you returned as `toSchema`.

Note

Message converters only run on-demand when panels subscribe to topics.
