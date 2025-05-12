# Pose

Represents the position and orientation of an object or reference frame in three-dimensional space

## Parent Data Structure

`Pose` appears in the following data structures: [`ArrowPrimitive`](./arrow-primitive), [`CubePrimitive`](./cube-primitive), [`CylinderPrimitive`](./cylinder-primitive), [`Grid`](./grid), [`LaserScan`](./laser-scan), [`LinePrimitive`](./line-primitive), [`ModelPrimitive`](./model-primitive), [`PointCloud`](./point-cloud), [`PoseInFrame`](./pose-in-frame), [`PosesInFrame`](./poses-in-frame), [`SpherePrimitive`](./sphere-primitive), [`TextPrimitive`](./text-primitive), and [`TriangleListPrimitive`](./triangle-list-primitive).

## Data Structure

| Field       | Type                         | Description                                       |
| ----------- | ---------------------------- | ------------------------------------------------- |
| position    | [`Vector3`](./vector-3)      | Represents the position point in 3D space         |
| orientation | [`Quaternion`](./quaternion) | Represents the orientation quaternion in 3D space |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| ROS 1       | [geometry_msgs/Pose](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Pose.html)             |
| ROS 2       | [geometry_msgs/msg/Pose](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Pose.html)              |
| JSON        | [foxglove.Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Pose.json)      |
| Protobuf    | [foxglove.Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Pose.proto) |
| FlatBuffers | [foxglove.Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Pose.fbs)       |
| OMG IDL     | [foxglove::Pose](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Pose.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
