# PointsAnnotationType

点标注类型

## 父类型

`PointsAnnotationType` 出现在 [`PointsAnnotation`](./points-annotation) 数据结构中。

## 值

| 名称        | 值 | 描述                                     |
| ----------- | ----- | ----------------------------------------------- |
| UNKNOWN     | 0     | 未知类型                                                 |
| POINTS      | 1     | 独立点：0, 1, 2, ...                 |
| LINE_LOOP  | 2     | 闭合多边形：0-1, 1-2, ..., (n-1)-n, n-0     |
| LINE_STRIP | 3     | 连接的线段：0-1, 1-2, ..., (n-1)-n |
| LINE_LIST  | 4     | 独立的线段：0-1, 2-3, 4-5, ...    |
