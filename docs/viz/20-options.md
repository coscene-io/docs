---
sidebar_position: 20
---

# 可视化选项

可视化中还有一些其他选项，可以进行设置。

## TF 兼容模式

TF2 作为 TF 的迭代版本，对 frame_id 的命名有着更严格的规范。frame_id 不应该以斜杠（`/`）开头。TF2 移除了对 tf_prefix 的支持，采用了更简单和一致的命名策略：所有的 frame_id 都被视为 string literals。

然而在实际使用过程中，仍然可能会遇到以 `/` 开头的 frame_id，比如

- 从 TF1 迁移过来的历史代码
- 开发者使用了旧的编程习惯
- 某些 Publisher 没有严格遵循 TF2 的命名规范

这种不规范的命名会导致系统中出现命名不一致的问题。例如，同一个坐标系可能同时以 `base_link` 和 `/base_link` 的形式出现，这会影响 TF 树的正确构建，导致无法进行准确的坐标变换（transformation）。

为了解决这个问题， 刻行参考了 RViz 的处理方案，在可视化系统中加入了兼容模式。当该选项开启时，播放器会尝试统一所有 TF 消息的一致性。

官方参考: [TF Prefix Backwards Compatibility](https://wiki.ros.org/tf2/Migration#tf_prefix_backwards_compatibility)
