---
sidebar_position: 4
title: CameraCalibration
---

# CameraCalibration

## Panel Support

`CameraCalibration` is used in the [3D Panel](../4-panel/2-3d-panel.md) and [Image Panel](../4-panel/5-image-panel.md).

## Field Definitions

| Field Name         | Type                                        | Description                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timestamp`        | [`time`](./built-in%20types#time)           | Timestamp of the calibration data                                                                                                                                                                                        |
| `frame_id`         | [`string`](./built-in%20types#string)       | Reference coordinate system of the camera. The origin of this coordinate system is the optical center of the camera, with +x pointing to the right in the image, +y pointing down, and +z pointing into the image plane. |
| `width`            | [`uint32`](./built-in%20types#uint32)       | Image width                                                                                                                                                                                                              |
| `height`           | [`uint32`](./built-in%20types#uint32)       | Image height                                                                                                                                                                                                             |
| `distortion_model` | [`string`](./built-in%20types#string)       | Distortion model name                                                                                                                                                                                                    |
| `D`                | [`float64[]`](./built-in%20types#float64)   | Distortion parameters                                                                                                                                                                                                    |
| `K`                | [`float64[9]`](./built-in%20types#float64)  | Intrinsic matrix (3x3 row-major storage)                                                                                                                                                                                 |
| `R`                | [`float64[9]`](./built-in%20types#float64)  | Rectification matrix (only used for stereo cameras, 3x3 row-major storage)                                                                                                                                               |
| `P`                | [`float64[12]`](./built-in%20types#float64) | Projection/camera matrix (3x4 row-major storage)                                                                                                                                                                         |

### `distortion_model`

- `plumb_bob`: Parameters are k1, k2, p1, p2, k3
- `rational_polynomial`: Parameters are k1, k2, p1, p2, k3, k4, k5, k6

This model is based on [OpenCV's](https://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html) [pinhole camera model](https://en.wikipedia.org/wiki/Distortion_%28optics%29#Software_correction) and is consistent with [the implementation in ROS](https://docs.ros.org/en/diamondback/api/image_geometry/html/c++/pinhole__camera__model_8cpp_source.html).

### `K` Intrinsic Matrix

K is a 3x3 row-major matrix for the original (uncorrected) image.

It uses the focal lengths (fx, fy) and principal point (cx, cy) to project 3D points in the camera coordinate system to 2D pixel coordinates.

```
    [fx   0  cx]
K = [ 0  fy  cy]
    [ 0   0   1]
```

### `R` Rectification Matrix

Rotation matrix that aligns the camera coordinate system with the ideal stereo image plane, making epipolar lines in the two stereo images parallel.

### `P` Projection Matrix

```
    [fx'  0   cx'  Tx]
P = [ 0   fy' cy'  Ty]
    [ 0    0    1    0]
```

This matrix specifies the intrinsic (camera) matrix of the processed (rectified) image. That is, the left 3x3 part is the normal camera intrinsic matrix for the rectified image.

It uses the focal lengths (fx', fy') and principal point (cx', cy') to project 3D points in the camera coordinate system to 2D pixel coordinates — these may differ from the values in K.

For a monocular camera: Tx = Ty = 0, and typically R is the identity matrix with P[1:3,1:3] = K.

For a stereo pair, the fourth column [Tx Ty 0]' relates to the position of the optical center of the second camera in the coordinate system of the first camera. We assume Tz = 0 so that the two cameras are in the same stereo image plane. Tx is always 0 and Ty = 0 for the first camera. For the right (second) camera of a horizontal stereo pair, Ty = 0 and Tx = -fx' \* B, where B is the baseline between the cameras.

Given a 3D point [X Y Z]', the projection (x, y) of the point on the rectified image is calculated as:

```
[u v w]' = P * [X Y Z 1]'
x = u / w
y = v / w
```

This applies to both images of a stereo pair.

## References

coScene's schema types are framework-independent and can be implemented using any supported message encoding format.

| Encoding Format | Schema Name                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1           | [`foxglove_msgs/CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CameraCalibration.msg)        |
| ROS 2           | [`foxglove_msgs/msg/CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CameraCalibration.msg)    |
| JSON            | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CameraCalibration.json)      |
| Protobuf        | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CameraCalibration.proto) |
| FlatBuffers     | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CameraCalibration.fbs)       |
| OMG IDL         | [`foxglove::CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CameraCalibration.idl) |

> **Note**: You must use the schema names specified above for coScene to recognize them correctly.
