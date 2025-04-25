# GeoJSON

用于在地图上进行标注的 GeoJSON 数据

## 面板支持

`GeoJSON` 用于地图面板中。

## 数据结构

| 字段    | 类型                                                                | 描述                                |
| ------- | ------------------------------------------------------------------- | ----------------------------------- |
| geojson | [`string`](./built-in%20types#string) | 以 UTF-8 字符串编码的 GeoJSON 数据 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码方式实现：

| 编码方式    | 数据结构                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove\_msgs/GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/GeoJSON.msg)       |
| ROS 2       | [foxglove\_msgs/msg/GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/GeoJSON.msg)   |
| JSON        | [foxglove.GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/GeoJSON.json)      |
| Protobuf    | [foxglove.GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/GeoJSON.proto) |
| FlatBuffers | [foxglove.GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/GeoJSON.fbs)       |
| OMG IDL     | [foxglove::GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/GeoJSON.idl) |

您必须使用上面指定的数据结构名称，以便可视化能够识别该数据结构。
