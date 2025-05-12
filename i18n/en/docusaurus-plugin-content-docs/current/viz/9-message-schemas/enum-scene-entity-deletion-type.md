# SceneEntityDeletionType

An enumeration type used to indicate which entities should match the [`SceneEntityDeletion`](./scene-entity-deletion) command.

## Parent Type

`SceneEntityDeletionType` appears in the [`SceneEntityDeletion`](./scene-entity-deletion) data structure.

## Values

| Name        | Value | Description                                                      |
| ----------- | ----- | ---------------------------------------------------------------- |
| MATCHING_ID | 0     | Delete existing entities with the specified ID on the same topic |
| ALL         | 1     | Delete all existing entities on the same topic                   |
