---
sidebar_position: 10
---

# 用户脚本面板

用户脚本面板支持用户编写自定义脚本（使用 TypeScript），对输入消息进行转换并输出到新的主题（topic）。该功能支持对回放数据和范围加载数据进行处理，适用于快速数据转换与调试。

- 回放数据：逐帧流式传入的消息，例如[原始消息面板](./9-raw-messages.md)或 [三维面板](./2-3d-panel.md)的数据。
- 范围加载数据：一次性加载整个回放范围内的消息，例如[图表面板](./4-plot-panel.md)或状态转换面板的数据。

注意：用户脚本仅作用于当前布局。若需要在所有布局中统一转换消息，请使用[消息转换器](../8-extensions/1-introduction.md#message-converters)。

## 快速开始
用户脚本使用 TypeScript 编写。
> **提示**
>
> TypeScript 是 JavaScript 的超集，因此可通过 JavaScript 术语搜索语法问题（如操作数组或访问对象属性），通过 TypeScript 术语搜索语义问题（如设置可选对象属性）。

### 编写第一个脚本
每个脚本必须声明以下 3 个导出项：

- `inputs` - 待转换的输入 topic 数组
- `output` - 转换后的输出 topic 名称
- `script` - 处理输入消息并发布到输出 topic 的函数（必须是[默认导出](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#description)） 

示例脚本（将 `/rosout` 消息原样输出到 `/coscene_script/echo`）：

```typescript
import { Input, Message } from "./types";


export const inputs = ["/rosout"];
export const output = "/coscene_script/echo";


export default function script(event: Input<"/rosout">): Message<"rosgraph_msgs/Log"> {
  return event.message;
}
```

若可视化中包含 `/rosout` topic，则可在[原始消息面板](./9-raw-messages.md)中查看 `/studio_script/echo` topic。

当创建一个新脚本时，系统会自动生成示例模板代码：

```typescript
import { Input, Message } from "./types";

type Output = { hello: string };

export const inputs = ["/input/topic"];
export const output = "/studio_script/output_topic";

export default function script(event: Input<"/input/topic">): Output {
  return { hello: "world!" };
}
```

其中：

- `Input` 和 `Message` 类型是从 `./types` 模块中导入的，该模块为输入事件和消息提供了辅助类型。
- `Output` 类型包含一些默认属性，脚本函数的输出必须符合这些属性要求。
- `Input` 是一个泛型类型，需要传入参数才能使用。这里故意留空，你需要填入输入 topic 的名称，例如：`Input<"/rosout">`。
- 输入 `event` 为只读。请勿修改该 `event` 对象。

关于 **Output** 类型，你有两种方式：

* 手动定义你关心的输出属性（即模板代码里提供的那些属性）；
* 或者使用上面引入的 **Message** 类型中动态生成的类型。例如，如果你想发布一个 marker 数组，可以返回 `Message<"visualization_msgs/MarkerArray">` 类型。

需要注意的是，消息属性对可视化结果的影响并不总是直观可见。通过严格类型约束，你可以在编译时发现问题，而不是等到运行时才暴露。

当然，在写脚本草稿时，如果你不想被 Typescript 校验打断，可以在想忽略的那行代码前加上 `// @ts-expect-error` 来关闭类型检查。

### 使用多输入 topic
通过联合类型处理多个输入 topic 的消息：

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

这段代码片段使用了联合类型（union types），用来声明脚本函数中的消息既可以来自 `/rosout` topic，也可以来自 `/tf` topic。处理消息时，可以通过 `if/else` 判断不同的 schema 名称，从而区分具体是哪个 topic 的消息。

如果你需要合并多个 topic 的消息，可以在脚本的全局作用域中创建一个变量，并在每次脚本函数被调用时引用它。同时要检查时间戳，确保不会发布不同步的数据。

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

### 使用全局变量
脚本函数在每次执行时，都会以对象的形式接收所有变量。每当有新消息到来，脚本函数都会用最新的变量值重新运行。

> **注意**
>
> 用户脚本中的全局变量是只读的，请勿修改 `globalVars` 参数。


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

### 调试
用户脚本只有在布局中有使用其输出 topic 时才会被执行。

要调试脚本，先在布局中添加一个订阅输出 topic 的原始消息面板。然后，你可以直接查看输入 topic 的消息，或者在脚本中使用 `log(someValue)` 将值打印到面板底部的 Logs 区域。

唯一不能使用 `log()` 打印的值是函数本身，或者包含函数定义的值。你也可以一次打印多个值，例如：`log(someValue, anotherValue, yetAnotherValue)`。

以下 log 语句不会产生任何错误：

```typescript
const addNums = (a: number, b: number): number => a + b;
log(50, "ABC", null, undefined, { abc: 2, def: false });
log(1 + 2, addNums(1, 2));
```

但包含函数定义的值会报错：

```typescript
log(() => {});
log(addNums);
log({ subtractNums: (a: number, b: number): number => a - b });
```

在脚本函数外调用 `log()` 会在脚本注册时执行一次；在脚本函数内部调用 `log()`，则会在每次脚本函数被调用时打印该值。

> **注意**
>
> 对于高频发布的 topic，使用 `log()` 可能会降低用户脚本的执行效率。
>
> 此外，由于图表面板会对渲染时间范围内的所有消息调用用户脚本，当在图表面板中查看用户脚本输出时，`log()` 的内容不会显示。这种情况下，可以使用原始消息面板来查看输出消息。

### 跳过输出
当你不希望发布消息时，可以在函数体内提前（或延迟）返回。例如，假设你只想在输入中的某个常量不等于 3 时才发布消息：

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

在 TypeScript 中，如果你直接 `return` 而不带返回值，函数会隐式返回 `undefined`。请注意脚本函数的联合返回类型——我们已经告诉 TypeScript，该函数可能返回 `undefined`。

### 使用 @foxglove/schemas
在用户脚本中，可以从 [@foxglove/schemas](https://github.com/foxglove/foxglove-sdk) 包导入并使用类型：

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

## 工具与模板

- **Utilities 标签页**：包含可在任意脚本中导入使用的函数（例如：`import { compare } from "./time.ts"`）。`types.ts` 工具文件会根据当前加载的数据源生成，包含所有已发现 schema 的类型定义。
- **Templates 标签页**：包含常见脚本模板，如发布 `MarkerArray` 的脚本 

## 设置

| 通用 |   |
| --- | --- |
| 保存时自动格式化 | 保存时自动格式化脚本中的代码 |

## 快捷键
输入 `Cmd` + `S` 保存脚本 

## TypeScript 资源

- [Basic Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Gitbook](https://basarat.gitbook.io/typescript/getting-started/why-typescript)

## 用户脚本 vs Topic Converter 扩展
用户脚本和 [topic converter 扩展](../8-extensions/1-introduction.md#message-converters)功能相似，但在编写方式、共享方式以及对第三方包的支持上存在关键区别。

| 功能 | 用户脚本 | Topic Converter 扩展 |
| --- | --- | --- |
| 数据转换 | ✅ | ✅ |
| 创建新 topic | ✅ | ✅ |
| 直接编辑 | ✅ | ❌ |
| 作用于一个布局 | ✅ | ❌ |
| 跨布局复用 | ❌ | ✅ |
| 团队共享 | ❌ | ✅ |
| 在你的 IDE 中编辑 | ❌ | ✅ |
| 你代码库的一部分 | ❌ | ✅ |
| 使用第三方包 | ❌ | ✅ |
