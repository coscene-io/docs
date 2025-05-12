# GeoJSON

GeoJSON data for annotations on maps

## Panel Support

`GeoJSON` is used in the Map Panel.

## Data Structure

| Field   | Type                                  | Description                            |
| ------- | ------------------------------------- | -------------------------------------- |
| geojson | [`string`](./built-in%20types#string) | GeoJSON data encoded as a UTF-8 string |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/GeoJSON.msg)        |
| ROS 2       | [foxglove_msgs/msg/GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/GeoJSON.msg)    |
| JSON        | [foxglove.GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/GeoJSON.json)      |
| Protobuf    | [foxglove.GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/GeoJSON.proto) |
| FlatBuffers | [foxglove.GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/GeoJSON.fbs)       |
| OMG IDL     | [foxglove::GeoJSON](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/GeoJSON.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
