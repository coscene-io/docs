---
sidebar_position: 2.2
---

# React 19 Compatibility and Migration

Panels created by `create-coscene-extension@1.1.0` use React / ReactDOM **19.3.1**, React types **19.3.0**, and the automatic JSX transform. This guide applies to visualization builds containing the React 19 upgrade. For older deployments, validate the extension in the target Web or desktop application first.

## Which extensions need migration? {#compatibility}

The visualization integrates with an extension through the `@coscene/extension` SDK, data callbacks, and `context.panelElement`. Each extension creates its React root in its own DOM container. React elements, hooks, and contexts stay within that renderer.

| Extension type                                                      | Compatibility requirements                                                                                                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Panel bundling React 18 and matching ReactDOM                       | The host does not reject installation based on the React major version. A host upgrade alone does not require a rewrite; validate the features the extension uses. |
| Panel bundling React 19 and matching ReactDOM                       | Use the 1.1.0 template or follow the migration below, and check third-party components for React 19 support.                                                       |
| Custom bundle externalizing React / ReactDOM to the host            | Remove those externals and rebuild a self-contained extension. The host provides neither shims for removed rendering APIs nor new shared React module mappings.    |
| Converter, topic alias, or native DOM panel that does not use React | There is no need to add or upgrade React.                                                                                                                          |

The SDK remains `@coscene/extension` 1.x and the `.coe` archive format is unchanged. Publishing a new generator does not rebuild or update extensions already distributed.

## Create a new extension {#create}

Use **Node.js 24**, matching the generator CI validation environment.

```bash
npm init coscene-extension@1.1.0 my-extension
cd my-extension
npm run build
```

The initialization command installs dependencies. Keep the generated lockfile and commit it with `package.json`. See [Create a Custom Panel](./4-guides/1-create-custom-panel.md) for a complete panel example.

## Upgrade an existing React panel {#upgrade}

Install matching runtime and type packages in the extension project root:

```bash
npm install --save-dev --save-exact create-coscene-extension@1.1.0 react@19.3.1 react-dom@19.3.1 @types/react@19.3.0 @types/react-dom@19.3.0
```

Then review these changes:

- Use `createRoot` from `react-dom/client`, render with `root.render()`, and return a cleanup function calling `root.unmount()` from `initPanel`. Replace removed APIs such as `ReactDOM.render`, `unmountComponentAtNode`, and `findDOMNode`.
- Keep `jsx: "react-jsx"` in `tsconfig.json`. Projects inheriting the generator’s shared configuration already enable this option.
- Replace global `JSX.Element` annotations with an imported `ReactElement` or `React.JSX.Element`.
- Supply an initial value to `useRef`, for example `useRef<HTMLDivElement | null>(null)`. Zero-argument `useState` remains supported.
- Have ref callbacks return `void` unless they intentionally return a cleanup function. Avoid implicitly returning a DOM element. Replace function-component `defaultProps` with parameter defaults.
- Give the outermost element in a mapped list a stable `key`. Use `<Fragment key={...}>` for multiple nodes.

See the [official React upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) for additional API and type changes.

## Keep React bundled with the extension {#bundling}

The default webpack configuration externalizes only `@coscene/extension`. When customizing `config.ts`, keep React, ReactDOM, `react-dom/client`, `react/jsx-runtime`, and `react/jsx-dev-runtime` in the bundle.

Dependency patches used inside the host are not automatically included in an extension. Check your own component libraries and transitive dependencies. Host support for React 19 does not establish compatibility for every third-party component in a plugin.

The example acceptance checks used `@microlink/react-json-view@1.26.1`; the older 1.23.4 dependency chain had a React 17 peer restriction. The Monaco example uses `@monaco-editor/react@4.7.0` and packages the editor, workers, styles, and font inside its `.coe` to work with the host CSP that blocks the default CDN. Its configuration does not modify the host’s `MonacoEnvironment`. These versions are validation baselines for the corresponding examples, not a general compatibility claim for third-party libraries. Revalidate after upgrades.

## Render completion and cleanup {#lifecycle}

Every `initPanel` call has its own render session. Registering `context.onRender` in a React effect is supported: the host delivers the latest state once the handler is ready.

For each delivered `onRender`, call its `done` callback after the corresponding React update commits. React may not have committed when `setState` or `root.render()` returns. Store the callback in state and invoke it in a `useEffect` depending on that callback, as shown in the [panel example](./4-guides/1-create-custom-panel.md).

While rendering is busy, new input is coalesced into a pending update instead of accumulating every historical frame indefinitely. Do not rely on the timeout to guarantee delivery of every frame, and do not mutate incoming messages or arrays.

When a panel is removed or replaced, its context becomes inactive immediately, and the host releases subscriptions, publishers, and playback waits. The host then invokes the extension’s cleanup outside its own React commit. Return synchronous, idempotent cleanup that directly unmounts the root and releases the extension’s timers, workers, listeners, and GPU resources. Do not add another delayed unmount. Save state while the panel is active; do not rely on `saveState` or `publish` during cleanup.

Set `context.onRender = undefined` in the cleanup of the effect that registers it. Old asynchronous callbacks must stop operating on an inactive context.

## Validate before distribution {#validation}

```bash
npm run lint:ci
npm run build
npm run package
```

Install the resulting `.coe` in the actual target build and validate each supported Web and desktop environment:

1. Open the panel, subscribe to messages, play, pause, and seek. Confirm UI updates without stalls waiting for `done`.
2. Change settings, reload, and confirm saved state is restored.
3. Repeatedly remove, reopen, or replace the panel. Check console errors, duplicate subscriptions, and continuously growing resources.
4. Exercise the editor, canvas, drag/drop, workers, and other third-party features the extension uses.

A successful build does not establish runtime compatibility. See [Extension Installation](./extensions-install.mdx) for installation methods.
