# PointsAnnotationType

Points annotation type

## Parent Type

`PointsAnnotationType` appears in the [`PointsAnnotation`](./points-annotation) data structure.

## Values

| Name       | Value | Description                                     |
| ---------- | ----- | ----------------------------------------------- |
| UNKNOWN    | 0     | Unknown type                                    |
| POINTS     | 1     | Independent points: 0, 1, 2, ...                |
| LINE_LOOP  | 2     | Closed polygon: 0-1, 1-2, ..., (n-1)-n, n-0     |
| LINE_STRIP | 3     | Connected line segments: 0-1, 1-2, ..., (n-1)-n |
| LINE_LIST  | 4     | Independent line segments: 0-1, 2-3, 4-5, ...   |
