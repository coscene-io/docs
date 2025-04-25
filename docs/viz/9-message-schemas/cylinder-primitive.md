# CylinderPrimitive

表示圆柱体、椭圆圆柱体或截锥的图元。

## 父级数据结构

`CylinderPrimitive` 出现在 [`SceneEntity`](./scene-entity) 消息数据结构中。

## 数据结构

| 字段 | 类型 | 描述 |
|:---|:---|:---|
| pose | [`pose`](./pose) | 圆柱体中心的位置和圆柱体的方向。平面（面）垂直于 z 轴。 |
| size | [`Vector3`](./vector-3) | 圆柱体边界框的大小 |
| bottom_scale | [`float64`](./built-in%20types#float64) | 0-1，圆柱体底面（最小 z 值）直径与边界框底部的比率 |
| top_scale | [`float64`](./built-in%20types#float64) | 0-1，圆柱体顶面（最大 z 值）直径与边界框顶部的比率 |
| color | [`color`](./color) | 圆柱体的颜色 |

## 参考实现

可视化数据结构是框架无关的，可以使用任何支持的消息编码来实现：

| 编码方式    | 数据结构                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CylinderPrimitive.msg)       |
| ROS 2       | [foxglove_msgs/msg/CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CylinderPrimitive.msg)   |
| JSON        | [foxglove.CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CylinderPrimitive.json)      |
| Protobuf    | [foxglove.CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CylinderPrimitive.proto) |
| FlatBuffers | [foxglove.CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CylinderPrimitive.fbs)       |
| OMG IDL     | [foxglove::CylinderPrimitive](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CylinderPrimitive.idl) |

您必须使用上述指定的数据结构名称，以便可视化能够识别该数据结构。
