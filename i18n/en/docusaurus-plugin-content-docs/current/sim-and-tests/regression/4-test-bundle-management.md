---
sidebar_position: 4
---

# Test Bundle
## Introduction
A test bundle is the code file being tested, which can be a .deb format file or a compressed file in .zip/.tgz/.tar.gz format.

![testbundle_1](./img/test-bundle_1.png)

## Managing Test Bundles
### Upload Test Bundle
1. In the project's left sidebar, select "Testing" and click to enter the "Test Bundle Management" page:

- First time uploading test bundle

  ![testbundle_2](./img/test-bundle_2.png)

- Subsequent uploads of test bundle

  ![testbundle_3](./img/test-bundle_3.png)

2. Click [Upload Test Bundle]:

    ![testbundle_4](./img/test-bundle_4.png)

3. Upload test bundle, fill in test category and version:

    <img src={require('./img/test-bundle_5.png').default} alt="testbundle_5" width="500" />

  - **Test Bundle Category**: Enter custom category information or select from existing test categories.

  - **Test Bundle Version**: Enter custom version information, such as `v0.1`
  
    Test category and version information can be used for automatic test triggering. See [Configuration Yaml Sample - Auto-Triggering Tests](./9-yaml-sample.md#auto-triggering)

4. After uploading the test bundle, when the "Status" column in the list shows "Active", it indicates that the test bundle has been successfully uploaded:

    ![testbundle_6](./img/test-bundle_6.png)

### Download
1. In the project's left sidebar, select "Testing" and click to enter the "Test Bundle Management" page:

    ![testbundle_3](./img/test-bundle_3.png)

2. Click the "Download" button for the test bundle in the list to download it:

    ![testbundle_7](./img/test-bundle_7.png)

### Usage
When running batch tests, you can select a specific version of the test bundle to execute test tasks. Test bundles can be identified by their sequence number, category, and version number.

<img src={require('./img/test-bundle_8.png').default} alt="test-bundle_8" width="500" />

## Learn More
- [Run a Cloud Test](./5-run.md)
- [Configuration Yaml Sample](./9-yaml-sample.md)
- [Managing Test Results](./6-status-and-output.md)
- [Test Suite](./3-config-management.md)