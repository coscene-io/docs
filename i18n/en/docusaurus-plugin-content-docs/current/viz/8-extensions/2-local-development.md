---
sidebar_position: 2
---

# Local Development

Use Node.js 24 and run the commands below from the extension project root. Create a new project with `npm init coscene-extension@1.1.0 my-extension`, which installs dependencies. For an existing project, use `npm ci` to install from the committed lockfile.

## Build and check {#build}

```bash
npm run lint:ci
npm run build
```

`build` checks whether the extension compiles. For React 19 projects, also review runtime packages, types, component libraries, and bundling boundaries in [React 19 Compatibility and Migration](./3-react-19-migration.md).

## Develop in the desktop application {#desktop}

```bash
npm run local-install
```

This builds the extension and copies the output into the local coStudio extension directory, for example `~/.coStudio/extensions/unknown.my-extension-0.0.0`. Open the target coStudio version and confirm the extension appears in the extension list and Add Panel menu.

After each code change, run `npm run local-install` again, then reload or restart coStudio. This command installs only into the local desktop application; it does not update extensions in the browser.

## Validate in the Web application {#web}

```bash
npm run package
```

This creates a `.coe` file. Install it in the target Web application using the local file method in [Extension Installation](./extensions-install.mdx). For a new release, update the extension’s own `version`, package it again, and install the new artifact. The generator version and the extension’s own version are separate.

## Runtime validation {#runtime-validation}

Validate the actual Web and desktop builds you need to support:

1. Add the panel, select a data source and topic, and check the initial state and displayed messages.
2. Play, pause, seek, and switch topics. Confirm that every delivered `onRender` calls `done` after the corresponding UI update commits.
3. Change settings and reload. Confirm `initialState` restores saved content.
4. Repeatedly remove, reopen, or replace the panel. Check for duplicate messages and leftover workers, timers, or listeners.
5. Exercise editors, canvas, drag/drop, and other third-party components, and check the console for React errors.

The host invalidates the context immediately when a panel closes. Save state while active; cleanup should only unmount and release resources. When checking the build artifact, confirm React, ReactDOM, and the JSX runtime are bundled with the extension rather than resolved from the host.

After validation, commit the source, `package.json`, and lockfile together, and distribute the tested `.coe`.
