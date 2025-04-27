// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import { themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'coScene',
  staticDirectories: ['public', 'static'],
  tagline: 'User Docs',
  url: 'https://docs.coscene.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  scripts: [{ src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.coscene.cn' }],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coScene', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude: process.env.DOCUSAURUS_CURRENT_LOCALE === 'en' ? ['**/viz/8-extension/**'] : [],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'coScene',
        logo: {
          alt: 'coScene Logo',
          src: 'img/logo.svg',
          width: '135px',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: '文档',
          },
          { to: '/changelog', label: '更新历史', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          { href: 'https://www.coscene.cn', label: '官方网站', position: 'right' },
          { href: 'https://github.com/coscene-io', label: 'GitHub', position: 'right' },
          {
            href: 'https://petstore.swagger.io/?url=https://download.coscene.cn/openapi/openapi.yaml',
            label: 'OpenAPI',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //   ],
          // },
          {
            title: '法律协议',
            items: [
              {
                label: '隐私政策',
                href: '/legal/privacy',
                target: '_blank',
              },
              {
                label: '服务协议',
                href: '/legal/terms',
                target: '_blank',
              },
            ],
          },
          {
            title: '数据安全',
            items: [
              {
                label: '刻行数据安全白皮书',
                href: '/security/security-white-paper',
                target: '_blank',
              },
              {
                label: '刻行数据安全方案',
                href: '/security/data-security-solution',
                target: '_blank',
              },
            ],
          },
          {
            title: '更多相关链接',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/coscene-io',
              },
              {
                label: '刻行时空官网',
                href: 'https://www.coscene.cn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} coScene`,
      },
      prism: {
        theme: themes.oceanicNext,
        darkTheme: themes.dracula,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },

      algolia: {
        appId: process.env.ALGOLIA_APP_ID || '1TFD6DKASB',
        apiKey: process.env.ALGOLIA_API_KEY || '6340803417c38ec67854ac4ae37c55ce',
        indexName: process.env.ALGOLIA_INDEX_NAME || 'coscene',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },

      // 只在开发环境中显示公告栏
      ...(process.env.DEPLOY_ENV === 'development' && {
        announcementBar: {
          id: 'dev_environment',
          content: '⚠️ 这是开发环境版本 / This is Development Environment Version ⚠️',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          isCloseable: false,
        },
      }),
    }),
  customFields: {
    // Add custom field to identify environment
    isDevEnvironment: process.env.NODE_ENV !== 'production',
  },
};

export default config;
