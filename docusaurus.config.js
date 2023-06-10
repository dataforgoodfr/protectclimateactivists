// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Protect Climate Activists',
  tagline: 'Join us in fighting for the safety and freedom of those who risk everything for our planet.',
  deploymentBranch:"gh_pages",
  favicon: 'img/graphics/fist2.png',
  trailingSlash: true,
  // Set the production url of your site here
  url: 'https://www.protectclimateactivists.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dataforgoodfr', // Usually your GitHub org/user name.
  projectName: 'protectclimateactivists', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      image: 'img/graphics/degrade.png',
      navbar: {
        title: 'Protect Climate Activists',
        logo: undefined,
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: 'https://collectif-eclaircies.notion.site/8496aafc51444e53b4ff10808fb1e367?v=71276a673067454fa98b0b852dcbdc5f', label: 'Nos projets', position: 'left'},
          {to: '/#about', label: 'About the cause', position: 'right'},
          {to: '/#stories', label: 'Their stories', position: 'right'},
          {to: '/freehong', label: '#freehong', position: 'right'},
          {to: '/freehong/#what-can-i-do-to-support-hong-hoang',label: 'What can I do', position: 'right'}
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'protectclimateactivists.com',
            items: [
              {label: 'Regroop Instagram',href: 'https://www.instagram.com/regroop.club/'},
            ],
          },
          {
            title: 'Partners',
            items: [
              {label: 'Regroop',href: 'https://regroop.club/'},
              {label: 'Data For Good',href: 'https://dataforgood.fr'},
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     // {
          //     //   label: 'GitHub',
          //     //   href: 'https://github.com/facebook/docusaurus',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} protectclimateactivists.com`,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
