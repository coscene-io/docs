import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', 'ca4'),
    exact: true
  },
  {
    path: '/changelog',
    component: ComponentCreator('/changelog', '81c'),
    exact: true
  },
  {
    path: '/download',
    component: ComponentCreator('/download', 'b81'),
    exact: true
  },
  {
    path: '/legal/privacy',
    component: ComponentCreator('/legal/privacy', '52a'),
    exact: true
  },
  {
    path: '/legal/terms',
    component: ComponentCreator('/legal/terms', '236'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/security/data-security-solution',
    component: ComponentCreator('/security/data-security-solution', '132'),
    exact: true
  },
  {
    path: '/security/security-white-paper',
    component: ComponentCreator('/security/security-white-paper', '5b3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fa5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e49'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'af6'),
            routes: [
              {
                path: '/docs/browser-support',
                component: ComponentCreator('/docs/browser-support', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/3rd-party-integration',
                component: ComponentCreator('/docs/category/3rd-party-integration', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/action',
                component: ComponentCreator('/docs/category/action', '615'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/cocli',
                component: ComponentCreator('/docs/category/cocli', '8cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/collaboration',
                component: ComponentCreator('/docs/category/collaboration', 'fa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-concepts',
                component: ComponentCreator('/docs/category/core-concepts', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/costudio',
                component: ComponentCreator('/docs/category/costudio', '311'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/data-collection-and-diagnosis',
                component: ComponentCreator('/docs/category/data-collection-and-diagnosis', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/developer',
                component: ComponentCreator('/docs/category/developer', 'b13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/device',
                component: ComponentCreator('/docs/category/device', 'd81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/image',
                component: ComponentCreator('/docs/category/image', '9cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/openapi',
                component: ComponentCreator('/docs/category/openapi', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/organization-and-team',
                component: ComponentCreator('/docs/category/organization-and-team', '354'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/panel',
                component: ComponentCreator('/docs/category/panel', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/project-collaboration',
                component: ComponentCreator('/docs/category/project-collaboration', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/record',
                component: ComponentCreator('/docs/category/record', 'e5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/regression',
                component: ComponentCreator('/docs/category/regression', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/sim-and-tests',
                component: ComponentCreator('/docs/category/sim-and-tests', '50b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/use-case',
                component: ComponentCreator('/docs/category/use-case', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/viz',
                component: ComponentCreator('/docs/category/viz', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/workflow',
                component: ComponentCreator('/docs/category/workflow', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/integration/jira-integration',
                component: ComponentCreator('/docs/collaboration/integration/jira-integration', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/integration/teambition-integration',
                component: ComponentCreator('/docs/collaboration/integration/teambition-integration', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/organization/organizations',
                component: ComponentCreator('/docs/collaboration/organization/organizations', '414'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/project-collaboration/add-comment-to-record',
                component: ComponentCreator('/docs/collaboration/project-collaboration/add-comment-to-record', '1d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/project-collaboration/general-task',
                component: ComponentCreator('/docs/collaboration/project-collaboration/general-task', '8eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/project-collaboration/project',
                component: ComponentCreator('/docs/collaboration/project-collaboration/project', 'd8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/record/create-record',
                component: ComponentCreator('/docs/collaboration/record/create-record', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/record/manage-file',
                component: ComponentCreator('/docs/collaboration/record/manage-file', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/record/manage-records',
                component: ComponentCreator('/docs/collaboration/record/manage-records', 'fa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/record/quick-start-record',
                component: ComponentCreator('/docs/collaboration/record/quick-start-record', 'fbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/collaboration/record/upload-files',
                component: ComponentCreator('/docs/collaboration/record/upload-files', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/costudio/connect-by-cobridge',
                component: ComponentCreator('/docs/costudio/connect-by-cobridge', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/concepts/auth-models',
                component: ComponentCreator('/docs/developers/concepts/auth-models', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/concepts/data-models',
                component: ComponentCreator('/docs/developers/concepts/data-models', '57d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/concepts/workflow',
                component: ComponentCreator('/docs/developers/concepts/workflow', 'a54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/coSceneCli/action-operations',
                component: ComponentCreator('/docs/developers/coSceneCli/action-operations', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/coSceneCli/advanced-features',
                component: ComponentCreator('/docs/developers/coSceneCli/advanced-features', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/coSceneCli/auto-complete',
                component: ComponentCreator('/docs/developers/coSceneCli/auto-complete', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/coSceneCli/common-batch-tasks',
                component: ComponentCreator('/docs/developers/coSceneCli/common-batch-tasks', '8ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/coSceneCli/install',
                component: ComponentCreator('/docs/developers/coSceneCli/install', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/coSceneCli/record-operations',
                component: ComponentCreator('/docs/developers/coSceneCli/record-operations', 'bcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/openapi/apikey',
                component: ComponentCreator('/docs/developers/openapi/apikey', '834'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/openapi/intro',
                component: ComponentCreator('/docs/developers/openapi/intro', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/openapi/openapi-endpoint',
                component: ComponentCreator('/docs/developers/openapi/openapi-endpoint', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developers/openapi/postman',
                component: ComponentCreator('/docs/developers/openapi/postman', '08e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/batch-device-operations',
                component: ComponentCreator('/docs/device/batch-device-operations', '09a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/change-device-guide',
                component: ComponentCreator('/docs/device/change-device-guide', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/create-device',
                component: ComponentCreator('/docs/device/create-device', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/device',
                component: ComponentCreator('/docs/device/device', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/device-collector',
                component: ComponentCreator('/docs/device/device-collector', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/device-remote-control',
                component: ComponentCreator('/docs/device/device-remote-control', '60f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device/manage-device',
                component: ComponentCreator('/docs/device/manage-device', '2df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/quick-start',
                component: ComponentCreator('/docs/get-started/quick-start', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/image/about-docker-image',
                component: ComponentCreator('/docs/image/about-docker-image', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/image/build-image',
                component: ComponentCreator('/docs/image/build-image', '840'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/image/image-management',
                component: ComponentCreator('/docs/image/image-management', '583'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/image/push-image',
                component: ComponentCreator('/docs/image/push-image', '2ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', '218'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sim-and-tests/regression/config-management',
                component: ComponentCreator('/docs/sim-and-tests/regression/config-management', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sim-and-tests/regression/intro',
                component: ComponentCreator('/docs/sim-and-tests/regression/intro', '38e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sim-and-tests/regression/run',
                component: ComponentCreator('/docs/sim-and-tests/regression/run', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sim-and-tests/regression/status-and-output',
                component: ComponentCreator('/docs/sim-and-tests/regression/status-and-output', 'd6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sim-and-tests/regression/test-bundle-management',
                component: ComponentCreator('/docs/sim-and-tests/regression/test-bundle-management', '7b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sim-and-tests/regression/yaml-sample',
                component: ComponentCreator('/docs/sim-and-tests/regression/yaml-sample', '32e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/automated-data-collection',
                component: ComponentCreator('/docs/use-case/automated-data-collection', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/automated-data-processing',
                component: ComponentCreator('/docs/use-case/automated-data-processing', '153'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/common-task',
                component: ComponentCreator('/docs/use-case/common-task', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/data-diagnosis/add-rule',
                component: ComponentCreator('/docs/use-case/data-diagnosis/add-rule', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/data-diagnosis/get-started',
                component: ComponentCreator('/docs/use-case/data-diagnosis/get-started', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/data-diagnosis/intro',
                component: ComponentCreator('/docs/use-case/data-diagnosis/intro', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/use-case/data-diagnosis/manage-rule-group',
                component: ComponentCreator('/docs/use-case/data-diagnosis/manage-rule-group', '231'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/about-viz',
                component: ComponentCreator('/docs/viz/about-viz', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/create-moment-viz',
                component: ComponentCreator('/docs/viz/create-moment-viz', '95f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/frame-rate-optimization',
                component: ComponentCreator('/docs/viz/frame-rate-optimization', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/layout',
                component: ComponentCreator('/docs/viz/layout', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/options',
                component: ComponentCreator('/docs/viz/options', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/2-3d-panel',
                component: ComponentCreator('/docs/viz/panel/2-3d-panel', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/image-panel',
                component: ComponentCreator('/docs/viz/panel/image-panel', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/log-panel',
                component: ComponentCreator('/docs/viz/panel/log-panel', 'c37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/panel-overview',
                component: ComponentCreator('/docs/viz/panel/panel-overview', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/plot-panel',
                component: ComponentCreator('/docs/viz/panel/plot-panel', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/publish-panel',
                component: ComponentCreator('/docs/viz/panel/publish-panel', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/service-panel',
                component: ComponentCreator('/docs/viz/panel/service-panel', 'e3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/panel/teleop-panel',
                component: ComponentCreator('/docs/viz/panel/teleop-panel', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/viz/use-3d-viz',
                component: ComponentCreator('/docs/viz/use-3d-viz', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/workflow/action/learn-coscene-action',
                component: ComponentCreator('/docs/workflow/action/learn-coscene-action', '6b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/workflow/action/quickstart',
                component: ComponentCreator('/docs/workflow/action/quickstart', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
