---
sidebar_position: 1
---

# coScene Extension API

`@coscene/extension` contains the type definitions required to write coScene extensions.

See [Extension Introduction](../introduction) for more information.

## Getting Started

Your extension's default export must be an `ExtensionModule`. When the extension is loaded, the `activate` function will be called, and you can use the functionality of `ExtensionContext`.
