---
sidebar_position: 1
---

# Create a Custom Panel

Build a simple panel extension that subscribes to a topic, then register it so you can add it to your visualization layout.

## Setup

In your terminal window, `cd` to the directory where your source code resides, then run the following command:

```
npm init coscene-extension@latest myExtensionName
```

This will use create-coscene-extension to create a `myExtensionName` directory containing the source code for a sample custom panel.

### `index.ts`

**`index.ts` is the entry point for your extension source code.**

It must export an `activate` function that:

- **Accepts an `extensionContext` parameter** – For more information about the `ExtensionContext` type, see @coscene/extension
- **Registers the extension's panel** – In this case, `ExamplePanel`

```
export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({ name: "example-panel", initPanel: initExamplePanel });
}
```

### `ExamplePanel.tsx`

The panel file referenced in `index.ts` defines the behavior and UI of the custom panel your extension will install.

While `ExamplePanel.tsx` is written in React, panels are framework-agnostic – meaning they can be written using DOM primitives, React, or any other frontend framework. See the custom-image-extension for an example panel not written in React.

The `initPanel` function accepts a `PanelExtensionContext` parameter, which contains properties and methods for accessing panel data and rendering UI updates. It can also return an optional cleanup function that runs when the extension's `panelElement` is unmounted.

### `PanelExtensionContext`

For available properties and methods, see the PanelExtensionContext documentation.

## Troubleshooting Memory Leaks

Panels in visualization often process continuous data streams at 60 fps or higher. This processing can expose memory issues more quickly than in other "web apps."

Memory or reference issues can quickly consume available memory and lead to out-of-memory (OOM) errors. When this happens, you'll see a tab crash page (in the web app) or a crash report page (in the desktop app). If you notice the entire app crashes more frequently when using your extension, your extension may have a memory leak.

Here are some best practices for extensions to help prevent memory leaks:

- Minimize references to past message data, or aggregate message data over time.
- When aggregating message data over time, always set a maximum limit on the amount of data stored.
- Dereference large objects or arrays that are no longer needed to ensure they are garbage collected.
- Avoid storing data in the global scope.

If you encounter memory leak issues, please contact us via GitHub, Feishu, DingTalk, or other channels and provide your extension code. We are happy to help you debug the problem.
