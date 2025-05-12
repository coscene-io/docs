---
title: ImageAnnotations
---

# ImageAnnotations

An array of annotations for 2D images

## Panel Support

`ImageAnnotations` is used in the [Image Panel](../panel/image-panel).

## Data Structure

| Field   | Type                                          | Description        |
| ------- | --------------------------------------------- | ------------------ |
| circles | [`CircleAnnotation\[\]`](./circle-annotation) | Circle annotations |
| points  | [`PointsAnnotation\[\]`](./points-annotation) | Point annotations  |
| texts   | [`TextAnnotation\[\]`](./text-annotation)     | Text annotations   |

## Reference Implementation

The visualization data structure is framework-independent and can be implemented using any supported message encoding:

| Encoding    | Data Structure                                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [foxglove_msgs/ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ImageAnnotations.msg)        |
| ROS 2       | [foxglove_msgs/msg/ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ImageAnnotations.msg)    |
| JSON        | [foxglove.ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ImageAnnotations.json)      |
| Protobuf    | [foxglove.ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ImageAnnotations.proto) |
| FlatBuffers | [foxglove.ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ImageAnnotations.fbs)       |
| OMG IDL     | [foxglove::ImageAnnotations](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ImageAnnotations.idl) |

You must use the data structure names specified above for the visualization to recognize the data structure.
