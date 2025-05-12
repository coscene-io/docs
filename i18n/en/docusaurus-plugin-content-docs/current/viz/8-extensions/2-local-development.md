---
sidebar_position: 2
---

# Local Development

Build and test your custom visualization extensions locally before publishing.

## Installation

To build and install your extension to the local coStudio extensions folder, run `npm run local-install`. This will create a folder under your user home directory (e.g., `~/.coStudio/extensions/unknown.myExtensionName-0.0.0`) containing your compiled extension.

Open the latest version of the coStudio desktop application. You should now see `myExtensionName` in the list of installed extensions in the application settings.

After installation, you should be able to open the "Add Panel" menu and see an option called `ExamplePanel`. You have successfully loaded your first visualization extension!

(🏗️ Work in progress, expected to launch in May 2025)
To install local extensions on the web application, you must first package your extension, then drag and drop the `.coe` file onto an open visualization page. You can also open `.coe` files in the desktop application by dragging and dropping or double-clicking.

## Development

Every time you make changes to your extension, you must run `npm run local-install` to build it into the local extensions folder.

Reload or restart coStudio to execute the latest version of your extension code in the application. Alternatively, you can simply run `npm run build` to confirm that your code compiles without installing it locally.
