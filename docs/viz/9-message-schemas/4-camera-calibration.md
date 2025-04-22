---
sidebar_position: 4
---

# 相机校准

## 面板支持

`CameraCalibration` 用于 [三维面板](../4-panel/2-3d-panel.md) 和 [图像面板](../4-panel/5-image-panel.md) 中。

## 字段定义

| 字段名            | 类型        | 描述 |
|------------------|-------------|------|
| `timestamp`       | [`time`](./built-in%20types#time)      | 标定数据的时间戳 |
| `frame_id`        | [`string`](./built-in%20types#string)    | 相机的参考坐标系。该坐标系原点为相机的光学中心，图像中 +x 指向右侧，+y 向下，+z 指向图像平面内部。 |
| `width`           | [`uint32`](./built-in%20types#uint32)    | 图像宽度 |
| `height`          | [`uint32`](./built-in%20types#uint32)    | 图像高度 |
| `distortion_model`| [`string`](./built-in%20types#string)      | 畸变模型名称 |
| `D`               | [`float64[]`](./built-in%20types#float64) | 畸变参数 |
| `K`               | [`float64[9]`](./built-in%20types#float64)| 内参矩阵（3x3 按行存储） |
| `R`               | [`float64[9]`](./built-in%20types#float64)| 校正矩阵（仅用于立体相机，3x3 按行存储） |
| `P`               | [`float64[12]`](./built-in%20types#float64)| 投影/相机矩阵（3x4 按行存储） |

### `distortion_model`

- `plumb_bob`: 参数为 k1, k2, p1, p2, k3  
- `rational_polynomial`: 参数为 k1, k2, p1, p2, k3, k4, k5, k6  

该模型基于 [OpenCV](https://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html) 的[针孔相机模型](https://en.wikipedia.org/wiki/Distortion_%28optics%29#Software_correction)，并与[ ROS 中的实现](https://docs.ros.org/en/diamondback/api/image_geometry/html/c++/pinhole__camera__model_8cpp_source.html)一致。

### `K` 内参矩阵

K 是原始（未校正）图像的 3x3 行主矩阵。

使用焦距（fx，fy）和主点（cx，cy）将相机坐标系中的 3D 点投影到 2D 像素坐标。

```
    [fx  0  cx]
K = [ 0  fy  cy]
    [ 0   0   1]
```

### `R` 校正矩阵

将相机坐标系与理想立体图像平面对齐的旋转矩阵，使得两个立体图像中的极线平行。

### `P` 投影矩阵

```
    [fx'  0   cx'  Tx]
P = [ 0   fy' cy'  Ty]
    [ 0    0    1    0]
```

此矩阵指定已处理（校正）图像的固有（相机）矩阵。也就是说，左侧 3x3 部分是校正图像的正常相机固有矩阵。

它使用焦距（fx'，fy'）和主点（cx'，cy'）将相机坐标系中的 3D 点投影到 2D 像素坐标——这些可能与 K 中的值不同。

对于单目相机：Tx = Ty = 0，通常也满足 R 为单位矩阵，P[1:3,1:3] = K。

对于立体对，第四列 [Tx Ty 0]' 与第二台摄像机的光心在第一台摄像机的坐标系中的位置相关。我们假设 Tz = 0，因此两台摄像机位于同一立体图像平面。第一台摄像机的 Tx 始终为 Ty = 0。对于水平立体对的右侧（第二台）摄像机，Ty = 0，且 Tx = -fx' * B，其中 B 是两台摄像机之间的基线。

给定一个 3D 点 `[X Y Z]'` ，该点在校正图像上的投影 `(x, y)` 可通过以下方式计算：

```
[u v w]' = P * [X Y Z 1]'
x = u / w
y = v / w
```

这对于立体对的两幅图像都适用。

## 参考

coScene 的架构类型（schemas）是与框架无关的，可以使用任何受支持的消息编码格式来实现。

| 编码格式    | Schema 名称  |
|------------|-------------|
| ROS 1      | [`foxglove_msgs/CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CameraCalibration.msg) |
| ROS 2      | [`foxglove_msgs/msg/CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CameraCalibration.msg) |
| JSON       | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CameraCalibration.json) |
| Protobuf   | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CameraCalibration.proto) |
| FlatBuffers| [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CameraCalibration.fbs) |
| OMG IDL    | [`foxglove::CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CameraCalibration.idl) |

> **注意**：必须使用上述指定的 schema 名称，coScene 才能正确识别。
