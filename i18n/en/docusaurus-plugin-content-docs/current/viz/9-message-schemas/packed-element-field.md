# PackedElementField

Defines a field within each element of a packed byte array

## Parent Data Structure

`PackedElementField` appears in the [`Grid`](./grid) and [`PointCloud`](./point-cloud) message data structures.

## Data Structure

| Field  | Type                                  | Description                                                                     |
| ------ | ------------------------------------- | ------------------------------------------------------------------------------- |
| name   | [`string`](./built-in%20types#string) | The name of the field                                                           |
| offset | [`uint32`](./built-in%20types#uint32) | The byte offset from the data buffer                                            |
| type   | [`NumericType`](./enum-numeric-type)  | The type of data in the field. Integers are stored in little-endian byte order. |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PackedElementField.msg)        |
| ROS 2       | [foxglove_msgs/msg/PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PackedElementField.msg)    |
| JSON        | [foxglove.PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PackedElementField.json)      |
| Protobuf    | [foxglove.PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PackedElementField.proto) |
| FlatBuffers | [foxglove.PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PackedElementField.fbs)       |
| OMG IDL     | [foxglove::PackedElementField](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PackedElementField.idl) |

You must use the data structure name specified above so that the visualization can recognize the data structure.
