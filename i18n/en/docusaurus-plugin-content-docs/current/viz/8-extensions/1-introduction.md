---
sidebar_position: 1
---

# Extensions Introduction

Extend visualization capabilities through custom extensions to better support your team's unique workflows. Build custom panels, convert custom messages into visualization-supported schemas, and create aliases for topic names to facilitate visualization.

Once you develop and install extensions, you can enable them in the application settings to display all available and installed extensions.

## Custom Panels

While visualization provides a set of built-in panels for robot data visualization and debugging, many users have domain-specific requirements that our out-of-the-box product cannot meet.

Custom panel extensions allow you to build complete panels. Custom panels can subscribe to messages on various topics, publish and receive messages, and display message information in a form that best suits your workflow.

Custom panels are ideal when your visualization or interaction requirements are customized and not easily addressed through built-in panels.

### Links and Resources

- Guide: Creating Custom Panels
- [Building Custom Panel Extensions (React)](./3-best-practices/2-custom-panel.md)

## Message Converters {#message-converters}

Message converter extensions allow you to transform messages from one schema to another. By converting messages to schemas supported by visualization, you can inspect them using visualization's built-in visualization features. For example, you can use a message converter to transform custom GPS messages into foxglove.LocationFix messages for visualization in the map panel.

> Note: Message converters only run on-demand when panels subscribe to topics.

### Links and Resources

- Guide: Creating Message Converters
- Writing Message Converter Extensions (Map Panel)
- Writing Message Converter Extensions (3D Panel)

## Topic Aliases

Topic alias extensions allow you to alias topics from your data source to new topics. Visualization panels can subscribe to both aliased topics and topics from the original data source.

## Writing Extensions

You can write extensions using JavaScript or TypeScript and package them into `.coe` files. You can distribute these files privately within your organization or publicly through our registry (in development) - installing extensions through the registry is only supported in the desktop application. A single extension can contain multiple panels or converters.

coScene provides a set of starter templates and commands in the [create-coscene-extension](https://github.com/coscene-io/create-coscene-extension) package to simplify extension writing.

Requirements:

- Node.js 24 (the version used by the generator CI)

To set up your extension project, navigate to the directory where you want your source code to reside, and run the following command in a terminal window:

```
npm init coscene-extension@1.1.0 my-extension-name
```

This command uses generator 1.1.0 to create a React 19.3.1 panel and install its dependencies. The extension entry point is `src/index.ts`. React and ReactDOM are bundled with the extension. For existing extensions, see [React 19 Compatibility and Migration](./3-react-19-migration.md).

The entry module follows the `ExtensionModule` interface and must export an `activate` function accepting a single `ExtensionContext` parameter.

## API Reference

- [ExtensionContext](/docs/viz/extensions/api/entry-point/extension-context)
- [`@coscene/extension` SDK](https://www.npmjs.com/package/@coscene/extension)
