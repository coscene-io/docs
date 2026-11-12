---
sidebar_position: 3
---

# Optimize Extension Performance

Optimize your extension to improve performance in production and reduce load times.

## Combine Multiple Extensions

Combining multiple extensions that share code or dependencies can reduce file size, speed up installation, and decrease load times when the application starts.

A single extension's `activate` function can call multiple registration functions to add different features:

```typescript
export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({ name: 'my-panel', initPanel: initCustomPanel });
  extensionContext.registerPanel({ name: 'my-other-panel', initPanel: initAnotherCustomPanel });
  extensionContext.registerMessageConverter({
    fromSchemaName: '...',
    toSchemaName: '...',
    converter: (inputMessage: MyInputType, messageEvent: MessageEvent<MyInputType>) => {
      // ...
    },
  });
  extensionContext.registerTopicAliases((args) => {
    // ...
  });
}
```

## Disable Source Maps

By default, extensions are bundled with source maps to improve the debugging experience. However, source maps take up extra space and may slow down extension installation and load times.

If your extension is getting large, consider disabling source maps by adding a file named `config.ts` with the following content:

```typescript
module.exports = {
  webpack: (config) => {
    config.devtool = undefined; // Disable source maps to reduce bundle size
    return config;
  },
};
```

## Keep the React runtime self-contained {#react-bundle}

Combining extensions can share dependencies within one package, but do not reduce size by adding React, ReactDOM, or JSX runtimes to webpack `externals`. The default configuration externalizes only `@coscene/extension`. React panels should bundle matching React and ReactDOM packages; see [React 19 Compatibility and Migration](../3-react-19-migration.md#bundling).

Avoid storing an unbounded message history. Treat incoming messages as read-only and compute derived results as needed instead of deep-copying every message each frame. Release resources when the panel closes, and repeatedly add and remove panels to check that memory, DOM nodes, and listeners do not grow continuously.
