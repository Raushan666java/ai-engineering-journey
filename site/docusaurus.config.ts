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
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.18.1/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-MGSJqY4DN3IeBT2FaTa1bQ8GhO6H3l5a3cS2D/2Q3Y2S2Q3Y2S2Q3Y2S2Q3Y2S2',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: {light: 'default', dark: 'dark'},
    },
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
          to: '/courses',
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
            {label: 'Placement Course', to: '/ai-engineering-placement'},
            {label: 'Python', to: '/python-programming'},
            {label: 'Machine Learning', to: '/machine-learning'},
            {label: 'System Design', to: '/system-design'},
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
