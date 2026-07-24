import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Engineering Placement Course',
  tagline: 'Backend + AI Engineer - Complete Placement Preparation',
  favicon: 'img/favicon.ico',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;800&family=Source+Code+Pro:wght@400;500;600&display=swap',
      type: 'text/css',
    },
  ],

  future: {v4: true},

  url: 'https://raushan666java.github.io',
  baseUrl: '/ai-engineering-journey/',

  organizationName: 'Raushan666java',
  projectName: 'ai-engineering-journey',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
    format: 'detect',
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
          editUrl: 'https://github.com/Raushan666java/ai-engineering-journey/edit/main/site/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Engineering',
      logo: {
        alt: 'AI Engineering Logo',
        src: 'img/logo.svg',
      },
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'placementSidebar',
          position: 'left',
          label: 'Placement Course',
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
          title: 'Modules',
          items: [
            {label: 'Core CS', to: '/00-foundations'},
            {label: 'Python', to: '/01-python'},
            {label: 'ML', to: '/08-ml'},
            {label: 'LLMs', to: '/11-llms-prompt'},
          ],
        },
        {
          title: 'Advanced',
          items: [
            {label: 'RAG', to: '/12-rag'},
            {label: 'AI Agents', to: '/13-ai-agents'},
            {label: 'Fine-Tuning', to: '/14-fine-tuning'},
            {label: 'System Design', to: '/07-system-design'},
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
      additionalLanguages: ['python', 'bash', 'json', 'typescript', 'yaml', 'sql', 'docker', 'toml'],
    },
    mermaid: {
      theme: {light: 'default', dark: 'dark'},
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
