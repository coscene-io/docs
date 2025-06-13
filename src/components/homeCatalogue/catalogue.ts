import { translate } from '@docusaurus/Translate';

export const CATALOGUE = (local: string) => [
  {
    header: { title: translate({ id: 'home.catalogue.getting-started', message: '新手入门' }) },
    docs: [
      { docLink: '/overview', title: translate({ id: 'home.catalogue.overview', message: '总览' }) },
      {
        docLink: '/get-started/quick-start',
        title: translate({ id: 'home.catalogue.quick-start', message: '快速开始' }),
      },
      {
        docLink: '/browser-support',
        title: translate({ id: 'home.catalogue.browser-support', message: '浏览器支持' }),
      },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.collaboration', message: '协作' }) },
    docs: [
      { docLink: '/category/record', title: translate({ id: 'home.catalogue.record', message: '记录操作' }) },
      {
        docLink: '/category/project-collaboration',
        title: translate({ id: 'home.catalogue.project-collaboration', message: '项目协作' }),
      },
      {
        docLink: '/category/organization-and-team',
        title: translate({ id: 'home.catalogue.organization-and-team', message: '组织和团队' }),
      },
      {
        docLink: '/category/3rd-party-integration',
        title: translate({ id: 'home.catalogue.3rd-party-integration', message: '服务集成' }),
      },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.viz', message: '可视化' }) },
    docs: [
      { docLink: '/viz/about-viz', title: translate({ id: 'home.catalogue.about-viz', message: '关于数据可视化' }) },
      {
        docLink: '/viz/use-3d-viz',
        title: translate({ id: 'home.catalogue.use-3d-viz', message: '快速三维可视化数据' }),
      },
      { docLink: '/viz/layout', title: translate({ id: 'home.catalogue.layout', message: '布局' }) },
      { docLink: '/category/panel', title: translate({ id: 'home.catalogue.panel', message: '面板' }) },
      {
        docLink: '/viz/create-moment-viz',
        title: translate({ id: 'home.catalogue.create-moment-viz', message: '一刻' }),
      },
      { docLink: '/viz/options', title: translate({ id: 'home.catalogue.options', message: '可视化选项' }) },
      {
        docLink: '/viz/frame-rate-optimization',
        title: translate({ id: 'home.catalogue.frame-rate-optimization', message: '帧率优化选项' }),
      },
      ...(local === 'zh'
        ? [
          { docLink: '/category/extensions', title: translate({ id: 'home.catalogue.extensions', message: '插件' }) },
          {
            docLink: '/viz/message-schemas',
            title: translate({ id: 'home.catalogue.message-schemas', message: '消息架构' }),
          },
        ]
        : []),
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.device', message: '设备' }) },
    docs: [
      { docLink: '/device/device', title: translate({ id: 'home.catalogue.about-device', message: '关于设备' }) },
      {
        docLink: '/device/create-device',
        title: translate({ id: 'home.catalogue.create-device', message: '添加设备' }),
      },
      {
        docLink: '/device/manage-device',
        title: translate({ id: 'home.catalogue.manage-device', message: '管理设备' }),
      },
      {
        docLink: '/device/device-collector',
        title: translate({ id: 'home.catalogue.device-collector', message: '设备配置' }),
      },
      {
        docLink: '/device/device-remote-control',
        title: translate({ id: 'home.catalogue.device-remote-control', message: '远程连接设备' }),
      },
      {
        docLink: '/device/batch-device-operations',
        title: translate({ id: 'home.catalogue.batch-device-operations', message: '批量操作设备' }),
      },
      {
        docLink: '/device/change-device-guide',
        title: translate({ id: 'home.catalogue.change-device-guide', message: '换机、升级、卸载流程指南' }),
      },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.workflow', message: '自动化' }) },
    docs: [
      {
        docLink: '/workflow/quick-start-workflow',
        title: translate({ id: 'home.catalogue.quick-start-workflow', message: '快速上手自动化' }),
      },
      { docLink: '/category/action', title: translate({ id: 'home.catalogue.action', message: '动作' }) },
      { docLink: '/workflow/trigger', title: translate({ id: 'home.catalogue.trigger', message: '触发器' }) },
      { docLink: '/workflow/invocation', title: translate({ id: 'home.catalogue.invocation', message: '调用历史' }) },
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
      {
        docLink: '/category/cocli',
        title: translate({ id: 'home.catalogue.cocli', message: '命令行工具 coCLI - Beta' }),
      },
      { docLink: '/category/openapi', title: translate({ id: 'home.catalogue.openapi', message: '开放平台 OpenAPI' }) },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.use-case', message: '应用场景' }) },
    docs: [
      {
        docLink: '/use-case/common-task',
        title: translate({ id: 'home.catalogue.common-task', message: '通用数据采集' }),
      },
      {
        docLink: '/use-case/automated-data-processing',
        title: translate({ id: 'home.catalogue.automated-data-processing', message: '自动化处理数据' }),
      },
      {
        docLink: '/use-case/online-simulation-test',
        title: translate({ id: 'home.catalogue.online-simulation-test', message: '云端仿真自动化算法验证' }),
      },
      {
        docLink: '/category/data-collection-and-diagnosis',
        title: translate({ id: 'home.catalogue.data-collection-and-diagnosis', message: '数据自动采集与诊断' }),
      },
      {
        docLink: '/use-case/heterogeneous-robot-data-factory',
        title: translate({ id: 'home.catalogue.embodied-intelligence-data-collection-solution', message: '异构机器人数据采集工厂接入' }),
      },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.docker-images', message: 'Docker 镜像' }) },
    docs: [
      {
        docLink: '/image/about-docker-image',
        title: translate({ id: 'home.catalogue.intro-image', message: '关于镜像' }),
      },
      { docLink: '/image/build-image', title: translate({ id: 'home.catalogue.build-image', message: '准备镜像' }) },
      { docLink: '/image/push-image', title: translate({ id: 'home.catalogue.push-image', message: '推送镜像' }) },
      {
        docLink: '/image/image-management',
        title: translate({ id: 'home.catalogue.image-management', message: '管理镜像' }),
      },
    ],
  },
  {
    header: { title: translate({ id: 'home.catalogue.client', message: '客户端' }) },
    docs: [
      {
        docLink: '/client/connect-by-cobridge',
        title: translate({ id: 'home.catalogue.connect-by-cobridge', message: '通过 coBridge 连接机器' }),
      },
      {
        docLink: '/client/apt-source-install',
        title: translate({ id: 'home.catalogue.apt-source-install', message: '通过 APT 安装 coScene 软件' }),
      },
    ],
  },
];
