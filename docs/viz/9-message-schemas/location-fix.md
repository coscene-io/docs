# LocationFix

用于任何全球导航卫星系统的导航卫星定位信息。

## 面板支持

`LocationFix` 在地图面板中使用。

## 数据结构

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| timestamp | [`time`](./built-in%20types#time) | 消息的时间戳 |
| frame_id | [`string`](./built-in%20types#string) | 传感器的坐标系。纬度和经度读数位于该坐标系的原点。 |
| latitude | [`float64`](./built-in%20types#float64) | 纬度（度） |
| longitude | [`float64`](./built-in%20types#float64) | 经度（度） |
| altitude | [`float64`](./built-in%20types#float64) | 高度（米） |
| position_covariance | [`float64[9]`](./built-in%20types#float64) | 位置协方差（平方米），相对于通过报告位置的切平面定义。分量按行优先顺序排列为东、北、上（ENU）。 |
| position_covariance_type | [`PositionCovarianceType`](./enum-position-covariance-type) | 如果提供了 position_covariance，则必须设置 position_covariance_type 以指示协方差的类型。 |

## 参考实现

可视化数据结构与框架无关，可以使用任何支持的消息编码实现：

| 编码 | 数据结构 |
| --- | --- |
| ROS 1 | [foxglove_msgs/LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LocationFix.msg) |
| ROS 2 | [foxglove_msgs/msg/LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LocationFix.msg) |
| JSON | [foxglove.LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LocationFix.json) |
| Protobuf | [foxglove.LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LocationFix.proto) |
| FlatBuffers | [foxglove.LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LocationFix.fbs) |
| OMG IDL | [foxglove::LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LocationFix.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
