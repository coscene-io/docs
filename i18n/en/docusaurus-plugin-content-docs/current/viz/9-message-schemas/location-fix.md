# LocationFix

Navigation satellite positioning information for any Global Navigation Satellite System.

## Panel Support

`LocationFix` is used in the Map Panel.

## Data Structure

| Field                    | Type                                                        | Description                                                                                                                                                                  |
| ------------------------ | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp                | [`time`](./built-in%20types#time)                           | Timestamp of the message                                                                                                                                                     |
| frame_id                 | [`string`](./built-in%20types#string)                       | Coordinate system of the sensor. The latitude and longitude readings are at the origin of this coordinate system.                                                            |
| latitude                 | [`float64`](./built-in%20types#float64)                     | Latitude (degrees)                                                                                                                                                           |
| longitude                | [`float64`](./built-in%20types#float64)                     | Longitude (degrees)                                                                                                                                                          |
| altitude                 | [`float64`](./built-in%20types#float64)                     | Altitude (meters)                                                                                                                                                            |
| position_covariance      | [`float64[9]`](./built-in%20types#float64)                  | Position covariance (square meters) relative to the tangent plane defined through the reported position. Components are ordered in row-major order as east, north, up (ENU). |
| position_covariance_type | [`PositionCovarianceType`](./enum-position-covariance-type) | If position_covariance is provided, position_covariance_type must be set to indicate the type of covariance.                                                                 |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LocationFix.msg)        |
| ROS 2       | [foxglove_msgs/msg/LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LocationFix.msg)    |
| JSON        | [foxglove.LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LocationFix.json)      |
| Protobuf    | [foxglove.LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LocationFix.proto) |
| FlatBuffers | [foxglove.LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LocationFix.fbs)       |
| OMG IDL     | [foxglove::LocationFix](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LocationFix.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
