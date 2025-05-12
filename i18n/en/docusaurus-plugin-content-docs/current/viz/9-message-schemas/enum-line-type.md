---
title: Enum LineType
---

# LineType

An enumeration type used to indicate how input points should be interpreted to create lines

## Parent Data Structure

`LineType` appears in the [`LinePrimitive`](./line-primitive) data structure.

## Values

| Name       | Value | Description                                     |
| ---------- | ----- | ----------------------------------------------- |
| LINE_STRIP | 0     | Connected line segments: 0-1, 1-2, ..., (n-1)-n |
| LINE_LOOP  | 1     | Closed polygon: 0-1, 1-2, ..., (n-1)-n, n-0     |
| LINE_LIST  | 2     | Independent line segments: 0-1, 2-3, 4-5, ...   |
