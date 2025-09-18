---
sidebar_position: 10
---

# User Scripts panel

User scripts are custom in-app scripts (written in TypeScript) that transform messages. A user script can transform both playback and range-loaded. The result is output to a new topic.

- Playback data – Messages streaming frame-by-frame into Foxglove; e.g. data for the [Raw Messages](./9-raw-messages.md) or [3D panel](./2-3d-panel.md)
- Range-loaded data – Messages for the entire data range being played back; e.g. data for the [Plot](./4-plot-panel.md) or State Transitions panels

When transforming range-loaded data, Foxglove creates two instances of the running user script – one handles the full data range, while the other handles just the current playback frame of messages. Each instance of the user script receives the messages in log time order.

> **Tip**
>
> User scripts are local to a layout. Use a [message converter](../8-extensions/1-introduction.md#message-converters) to transform messages in a way that will apply to all layouts.

## Getting started
User Scripts are written in TypeScript.

> **Info**
>
> TypeScript is a superset of JavaScript, so you can Google syntactic questions (e.g. how to manipulate arrays, or access object properties) using JavaScript terms, and semantic questions (e.g. how to make an object property optional) using TypeScript terms.

### Writing your first script
Every script must declare 3 exports:

- `inputs` – An array of input topics to transform
- `output` – Name of the transformed output topic
- `script` – A function that takes messages from input topics, transforms them, and then publishes messages on the output topic; must be the [default export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#description)

Here is a basic script that echoes its input on a new output topic, `/coscene_script/echo`:

```typescript
import { Input, Message } from "./types";


export const inputs = ["/rosout"];
export const output = "/coscene_script/echo";


export default function script(event: Input<"/rosout">): Message<"rosgraph_msgs/Log"> {
  return event.message;
}
```

If you open a recording with a `/rosout` topic, you can now inspect the `/studio_script/echo` topic in the [Raw Messages panel](./9-raw-messages.md).

When you create a new script, you’ll be presented with some boilerplate:

```typescript
import { Input, Message } from "./types";

type Output = { hello: string };

export const inputs = ["/input/topic"];
export const output = "/studio_script/output_topic";

export default function script(event: Input<"/input/topic">): Output {
  return { hello: "world!" };
}
```

You’ll notice a few things:

- The `Input` and `Message` types are imported from the `./types` module, which provides helper types for your Input events and messages
- The `Output` type has some default properties that the `script` function's output must adhere to

`Input` is a generic type, meaning that it takes a parameter in order to be used. It is left empty on purpose as you'll need to populate it with the name of your input topic, e.g. `Input<"/rosout">`.

> **Note**
>
> The input event is read-only. Do not modify the event object.

As for the `Output` type, you can either manually type out your output with the properties you care about (i.e. what is available in the boilerplate) or use one of the dynamically generated types from the `Message` type imported above. For instance, if you want to publish an array of markers, you can return the type `Message<"visualization_msgs/MarkerArray">`.

It's not always obvious how message properties affect the visualized output – strictly typing your scripts helps you debug issues at compile time rather than at runtime. With that said, you can disable Typescript checks when working on a rough draft of your script by adding `// @ts-expect-error` on the line above the one you want to ignore.

### Using multiple input topics
In some cases, you will want to define multiple input topics:

```typescript
import { Input, Message } from "./types";

export const inputs = ["/rosout", "/tf"];
export const output = "/coscene_script/echo";

export default function script(event: Input<"/rosout"> | Input<"/tf">): { data: number[] } {
  if (event.topic === "/rosout") {
    // read event.message fields expected for /rosout messages
  } else {
    // read event.message fields expected for /tf messages
  }

  return { data: [] };
}
```

This snippet uses union types to assert that the message in the `script` function can take either a `/rosout` or `/tf` topic. Use an if/else clause to differentiate between incoming topics' schema names when manipulating messages.

To combine messages from multiple topics, create a variable in your script's global scope to reference every time your `script` function is invoked. Check timestamps to make sure you are not publishing out-of-sync data.

```typescript
import { Input, Message, Time } from "./types";

export const inputs = ["/rosout", "/tf"];
export const output = "/coscene_script/echo";

let lastReceiveTime: Time = { sec: 0, nsec: 0 };
const myScope: { tf?: Message<"tf2_msgs/TFMessage">; rosout?: Message<"rosgraph_msgs/Log"> } = {};

export default function script(
  event: Input<"/rosout"> | Input<"/tf">,
): { data: number[] } | undefined {
  const { receiveTime } = message;
  let inSync = true;

  if (receiveTime.sec !== lastReceiveTime.sec || receiveTime.nsec !== lastReceiveTime.nsec) {
    lastReceiveTime = receiveTime;
    inSync = false;
  }

  if (message.topic === "/rosout") {
    myScope.rosout = event.message;
  } else {
    myScope.tf = event.message;
  }

  if (!inSync) {
    return { data: [] };
  }
}
```

### Using global variables
The `script` function will receive all of the variables as an object every time it is called. Each time a new message is received, the `script` function will be re-run with the latest variable values:

> **Note**
>
> Global variables are read-only on user-scripts. Do not modify the globalVars parameter.

```typescript
import { Input, Message } from "./types";

type Output = {};
type GlobalVariables = { someNumericaVar: number };

export const inputs = [];
export const output = "/coscene_script/";

export default function script(event: Input<"/foo_marker">, globalVars: GlobalVariables): Output {
  if (event.message.id === globalVars.someNumericaVar) {
    // Message's id matches $someNumericaVar
  }

  return { data: [] };
}
```

### Debugging
User scripts are not executed unless the output topic is being used somewhere within your layout.

To debug your script, first add a Raw Messages panel subscribing to the output topic to your layout. From there, you can either inspect the incoming topic directly, or invoke `log(someValue)` throughout the user script to print values to the Logs section at the bottom of the panel.

The only value you cannot `log()` is one that is, or contains, a function definition. You can also log multiple values at once, e.g. `log(someValue, anotherValue, yetAnotherValue)`.

The following log statements will not produce any errors:

```typescript
const addNums = (a: number, b: number): number => a + b;
log(50, "ABC", null, undefined, { abc: 2, def: false });
log(1 + 2, addNums(1, 2));
```

But these containing function definitions will:

```typescript
log(() => {});
log(addNums);
log({ subtractNums: (a: number, b: number): number => a - b });
```

Invoking `log()` outside your `script` function will invoke it once, when your script is registered. Invoking `log()` inside your `script` function will log that value every time your `script` function is called.

> **Tip**
> 
> For topics publishing at a high rate, using `log()` can slow down the user script.
>
> Because a Plot panel will invoke the user script across all messages in the rendered time-range, `log()` output is not shown when plotting the output of a user script. In this case, use a Raw Messages panel to view the output message instead.

### Skipping output
Do an early (or late) `return` in your function body when you don't want to publish. For example, let's say you only wanted to publish messages when a constant in the input is not 3:

```typescript
import { Input } from "./types";

export const inputs = ["/state"];
export const output = "/coscene_script/manual_metrics";

export default function script(event: Input<"/state">): { metrics: number } | undefined {
  if (event.message.constant === 3) {
    // Do not publish any message
    return;
  }
  return {
    // Your data here
  };
}
```

In Typescript, if you return without a value, it will implicitly return `undefined`. Note the union return type for the `script` function – we've indicated to Typescript that this function can return `undefined`.

### Using @foxglove/schemas
Import and use types from the [@foxglove/schemas](https://github.com/foxglove/foxglove-sdk) package in user scripts:

```typescript
import { Input } from "./types";
import { Color } from "@foxglove/schemas";

export const inputs = ["/imu"];
export const output = "/s_script/json_data";

export default function script(event: Input<"/imu">): Color {
  return {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
  };
}
```

## Utilities and templates
The sidebar's "Utilities" tab includes functions that can be imported for use in any script (e.g. `import { compare } from "./time.ts"`). The `types.ts` utility file is generated from the currently loaded data source, and contains type definitions for all found schemas.

We currently do not allow importing 3rd-party packages, but let us know if there are packages that would be useful to you!

The Templates tab includes boilerplate for writing common scripts, like one that publishes a `MarkerArray`. If you have any other use cases that would work well as a template, please let us know.

## Settings

| General |   |
| --- | --- |
| Auto-format on save | Auto-format the code in your script on save |

## Controls and shortcuts
Press `Cmd` + `s` to save script changes.

## TypeScript Resources

- [Basic Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Gitbook](https://basarat.gitbook.io/typescript/getting-started/why-typescript)

## When to use a user script or a topic converter extension
User scripts and [topic converter extensions](../8-extensions/1-introduction.md#message-converters) have similar capabilities, but there are key differences in how they are authored, shared, and how they support third-party packages.

|   | User scripts | Topic converters |
| --- | --- | --- |
| Data transformation | ✅ | ✅ |
| Create new topics | ✅ | ✅ |
| Edit directly | ✅ | ❌ |
| Scoped to a layout | ✅ | ❌ |
| Reusable across layouts | ❌ | ✅ |
| Shareable with your team | ❌ | ✅ |
| Written in your IDE | ❌ | ✅ |
| Part of your codebase | ❌ | ✅ |
| Use third-party packages | ❌ | ✅ |