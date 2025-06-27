# LaserScan

Single scan data from a planar laser rangefinder

## Panel Support

`LaserScan` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Data Structure

| Field       | Type                                      | Description                                                                                                                                                                                                                       |
| ----------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp   | [`time`](./built-in%20types#time)         | Timestamp of the scan                                                                                                                                                                                                             |
| frame_id    | [`string`](./built-in%20types#string)     | Reference coordinate system                                                                                                                                                                                                       |
| pose        | [`Pose`](./pose)                          | Scan origin relative to the reference coordinate system; points lie in the x-y plane relative to this origin; angles are interpreted as counterclockwise rotations around the z axis, with 0 radians pointing in the +x direction |
| start_angle | [`float64`](./built-in%20types#float64)   | Azimuth of the first point in radians                                                                                                                                                                                             |
| end_angle   | [`float64`](./built-in%20types#float64)   | Azimuth of the last point in radians                                                                                                                                                                                              |
| ranges      | [`float64[]`](./built-in%20types#float64) | Distances from the origin to detected points; assumed to be evenly distributed between `start_angle` and `end_angle`                                                                                                              |
| intensities | [`float64[]`](./built-in%20types#float64) | Intensities of the detected points                                                                                                                                                                                                |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LaserScan.msg)        |
| ROS 2       | [foxglove_msgs/msg/LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LaserScan.msg)    |
| JSON        | [foxglove.LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LaserScan.json)      |
| Protobuf    | [foxglove.LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LaserScan.proto) |
| FlatBuffers | [foxglove.LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LaserScan.fbs)       |
| OMG IDL     | [foxglove::LaserScan](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LaserScan.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
