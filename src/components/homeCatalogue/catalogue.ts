import { translate } from '@docusaurus/Translate';

export const CATALOGUE = [
  {
    header: { title: translate({ id: 'home.catalogue.getting-started', message: '快速开始' }) },
    docs: [
      { docLink: '/overview', title: translate({ id: 'home.catalogue.overview', message: '总览' }) },
      { docLink: '/get-started/login-to-platform', title: translate({ id: 'home.catalogue.login-to-platform', message: '登录刻行时空' }) },
      { docLink: '/get-started/create-project', title: translate({ id: 'home.catalogue.create-project', message: '创建项目' }) },
      { docLink: '/get-started/create-record-and-viz', title: translate({ id: 'home.catalogue.create-record-and-viz', message: '创建并可视化记录' }) },
      { docLink: '/get-started/create-moment-flow', title: translate({ id: 'home.catalogue.create-moment-flow', message: '创建你的第一条“一刻”' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.collaboration', message: '协作' }) },
    docs: [
      { docLink: '/category/record', title: translate({ id: 'home.catalogue.record', message: '记录操作' }) },
      { docLink: '/category/project-collaboration', title: translate({ id: 'home.catalogue.project-collaboration', message: '项目协作' }) },
      { docLink: '/category/organization-and-team', title: translate({ id: 'home.catalogue.organization-and-team', message: '组织和团队' }) },
      { docLink: '/category/3rd-party-integration', title: translate({ id: 'home.catalogue.3rd-party-integration', message: '服务集成' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.viz', message: '可视化' }) },
    docs: [
      { docLink: '/viz/about-viz', title: translate({ id: 'home.catalogue.about-viz', message: '关于数据可视化' }) },
      { docLink: '/viz/use-3d-viz', title: translate({ id: 'home.catalogue.use-3d-viz', message: '快速三维可视化数据' }) },
      { docLink: '/viz/layout', title: translate({ id: 'home.catalogue.layout', message: '布局' }) },
      { docLink: '/category/panel', title: translate({ id: 'home.catalogue.panel', message: '面板' }) },
      { docLink: '/viz/create-moment-viz', title: translate({ id: 'home.catalogue.create-moment-viz', message: '一刻' }) },
      { docLink: '/viz/options', title: translate({ id: 'home.catalogue.options', message: '可视化选项' }) },
      { docLink: '/viz/frame-rate-optimization', title: translate({ id: 'home.catalogue.frame-rate-optimization', message: '帧率优化选项' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.device', message: '设备' }) },
    docs: [
      { docLink: '/device/device', title: translate({ id: 'home.catalogue.about-device', message: '关于设备' }) },
      { docLink: '/device/create-device', title: translate({ id: 'home.catalogue.create-device', message: '添加设备' }) },
      { docLink: '/device/manage-device', title: translate({ id: 'home.catalogue.manage-device', message: '管理设备' }) },
      { docLink: '/device/device-collector', title: translate({ id: 'home.catalogue.device-collector', message: '数采客户端配置' }) },
      { docLink: '/device/change-device-guide', title: translate({ id: 'home.catalogue.change-device-guide', message: '换机、升级、卸载流程指南' }) },
      { docLink: '/device/device-remote-control', title: translate({ id: 'home.catalogue.device-remote-control', message: '远程控制设备' }) },
      { docLink: '/device/batch-device-operations', title: translate({ id: 'home.catalogue.batch-device-operations', message: '批量操作设备' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.workflow', message: '自动化' }) },
    docs: [
      { docLink: '/category/action', title: translate({ id: 'home.catalogue.automation', message: '动作' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.sim-and-tests', message: '仿真与测试' }) },
    docs: [
      { docLink: '/category/regression', title: translate({ id: 'home.catalogue.regression', message: '批量测试' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.developer', message: '开发者' }) },
    docs: [
      { docLink: '/category/core-concepts', title: translate({ id: 'home.catalogue.core-concepts', message: '概念' }) },
      { docLink: '/category/cocli', title: translate({ id: 'home.catalogue.cocli', message: '命令行工具 coCLI - Beta' }) },
      { docLink: '/category/openapi', title: translate({ id: 'home.catalogue.openapi', message: '开放平台 OpenAPI' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.use-case', message: '应用场景' }) },
    docs: [
      { docLink: '/use-case/common-task', title: translate({ id: 'home.catalogue.common-task', message: '通用数据采集' }) },
      { docLink: '/use-case/automated-data-collection', title: translate({ id: 'home.catalogue.automated-data-collection', message: '自动数据采集与诊断' }) },
      { docLink: '/use-case/automated-data-processing', title: translate({ id: 'home.catalogue.automated-data-processing', message: '自动化处理数据' }) },
      { docLink: '/category/data-collection-and-diagnosis', title: translate({ id: 'home.catalogue.data-collection-and-diagnosis', message: '数据自动采集与诊断' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.docker-images', message: 'Docker 镜像' }) },
    docs: [
      { docLink: '/image/about-docker-image', title: translate({ id: 'home.catalogue.intro-image', message: '关于镜像' }) },
      { docLink: '/image/build-image', title: translate({ id: 'home.catalogue.build-image', message: '准备镜像' }) },
      { docLink: '/image/push-image', title: translate({ id: 'home.catalogue.push-image', message: '推送镜像' }) },
      { docLink: '/image/image-management', title: translate({ id: 'home.catalogue.image-management', message: '管理镜像' }) },
    ],
  },
];
