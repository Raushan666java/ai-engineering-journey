import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Engineering Journey',
  tagline: 'Complete Learning Path - Backend + AI Engineer',
  favicon: 'img/favicon.ico',

  url: 'https://raushan666java.github.io',
  baseUrl: '/ai-engineering-journey/',

  organizationName: 'Raushan666java',
  projectName: 'ai-engineering-journey',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'AI Engineering',
      logo: {
        alt: 'AI Engineering Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'placementSidebar',
          position: 'left',
          label: 'Placement Course',
        },
        {
          type: 'docSidebar',
          sidebarId: 'coursesSidebar',
          position: 'left',
          label: 'All Courses',
        },
        {
          href: 'https://github.com/Raushan666java/ai-engineering-journey',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Courses',
          items: [
            {label: 'Placement Course', to: '/placement'},
            {label: 'Python', to: '/courses/python-programming'},
            {label: 'Machine Learning', to: '/courses/machine-learning'},
            {label: 'System Design', to: '/courses/system-design'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/Raushan666java/ai-engineering-journey'},
            {label: 'Learning Playground', href: 'https://github.com/Raushan666java/learning-playground'},
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} AI Engineering Journey. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
