# LaserScan

来自平面激光测距仪的单次扫描数据

## 面板支持

`LaserScan` 在[三维面板](../panel/2-3d-panel)和[图像面板](../panel/image-panel)中使用。

## 数据结构

| 字段         | 类型                                                                      | 描述 |
| ------------ | ------------------------------------------------------------------------- | ---- |
| timestamp    | [`time`](./built-in%20types#time)        | 扫描的时间戳 |
| frame_id     | [`string`](./built-in%20types#string)      | 参考坐标系 |
| pose         | [`pose`](./pose)        | 相对于参考坐标系的扫描原点；点位于相对于此原点的 x-y 平面中；角度被解释为绕 z 轴的逆时针旋转，0 弧度表示 +x 方向 |
| start_angle  | [`float64`](./built-in%20types#float64)     | 第一个点的方位角，以弧度表示 |
| end_angle    | [`float64`](./built-in%20types#float64)     | 最后一个点的方位角，以弧度表示 |
| ranges       | [`float64[]`](./built-in%20types#float64)   | 检测点到原点的距离；假设这些点在 `start_angle` 和 `end_angle` 之间均匀分布 |
| intensities  | [`float64[]`](./built-in%20types#float64)   | 检测点的强度 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码         | 数据结构                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LaserScan.msg)       |
| ROS 2       | [foxglove_msgs/msg/LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LaserScan.msg)   |
| JSON        | [foxglove.LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LaserScan.json)      |
| Protobuf    | [foxglove.LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LaserScan.proto) |
| FlatBuffers | [foxglove.LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LaserScan.fbs)       |
| OMG IDL     | [foxglove::LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LaserScan.idl) |

您必须使用上述指定的数据结构名称，以便可视化能够识别该数据结构。
