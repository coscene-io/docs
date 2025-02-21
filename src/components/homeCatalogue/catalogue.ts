import { translate } from '@docusaurus/Translate';

export const CATALOGUE = [
  {
    header: { title: translate({ id: 'home.catalogue.getting-started', message: '快速开始' }) },
    docs: [
      { docLink: '/viz/about-viz', title: translate({ id: 'home.catalogue.about-viz', message: '关于数据可视化' }) },
      { docLink: '/viz/prep-before-viz', title: translate({ id: 'home.catalogue.prep-before-viz', message: '可视化前的准备' }) },
      { docLink: '/viz/use-3d-viz', title: translate({ id: 'home.catalogue.use-3d-viz', message: '利用三维面板可视化你的数据' }) },
      { docLink: '/viz/panel', title: translate({ id: 'home.catalogue.panel', message: '面板' }) },
      { docLink: '/viz/5-3d-panel', title: translate({ id: 'home.catalogue.3d-panel', message: '三维面板' }) },
      { docLink: '/viz/log-panel', title: translate({ id: 'home.catalogue.log-panel', message: '日志面板' }) },
      { docLink: '/viz/plot-panel', title: translate({ id: 'home.catalogue.plot-panel', message: '图表面板' }) },
      { docLink: '/viz/image-panel', title: translate({ id: 'home.catalogue.image-panel', message: '图像面板' }) },
      { docLink: '/viz/layout', title: translate({ id: 'home.catalogue.layout', message: '布局' }) },
      { docLink: '/viz/create-moment-viz', title: translate({ id: 'home.catalogue.create-moment-viz', message: '在可视化界面中的一刻' }) },
      { docLink: '/viz/frame-rate-optimization', title: translate({ id: 'home.catalogue.frame-rate-optimization', message: '帧率优化选项' }) },
      { docLink: '/viz/publish-panel', title: translate({ id: 'home.catalogue.publish-panel', message: '发布面板' }) },
      { docLink: '/viz/service-panel', title: translate({ id: 'home.catalogue.service-panel', message: '服务调用面板' }) },
      { docLink: '/viz/teleop-panel', title: translate({ id: 'home.catalogue.teleop-panel', message: '远程操控面板' }) },
      { docLink: '/viz/options', title: translate({ id: 'home.catalogue.options', message: '可视化选项' }) },
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
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.developer', message: '开发者' }) },
    docs: [
      { docLink: '/category/core-concepts', title: translate({ id: 'home.catalogue.core-concepts', message: '概念' }) },
      { docLink: '/category/core-concepts', title: translate({ id: 'home.catalogue.cocli', message: '命令行工具 coCLI - Beta' }) },
      { docLink: '/category/openapi', title: translate({ id: 'home.catalogue.openapi', message: '开放平台 OpenAPI' }) },
    ],
  },
];
