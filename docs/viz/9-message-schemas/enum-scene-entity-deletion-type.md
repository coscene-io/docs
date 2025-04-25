# SceneEntityDeletionType

一个枚举类型，用于指示哪些实体应该匹配 [`SceneEntityDeletion`](./scene-entity-deletion) 命令。

## 父类型

`SceneEntityDeletionType` 出现在 [`SceneEntityDeletion`](./scene-entity-deletion) 数据结构中。

## 值

| 名称         | 值 | 描述                                                           |
| ------------ | ----- | --------------------------------------------------------------------- |
| MATCHING_ID | 0     | 删除同一主题下具有指定 ID 的现有实体 |
| ALL          | 1     | 删除同一主题下的所有现有实体                        |
