import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Building every course in one pass needs more heap than a 12 GB laptop can
// give: the static-generation phase drives V8's old space past 8 GB and exits
// 134. Setting BUILD_ONLY=<course-dir> restricts a build to one course so the
// site can be assembled from parts. See scripts/build-in-parts.ps1.
const buildOnly = process.env.BUILD_ONLY?.trim();

const docsInclude = buildOnly
  // Markdown only. A bare `courses/<x>/**` also matches the .html and .svg
  // files under visual/ directories, and Docusaurus then loads them as docs,
  // which collides on doc id ("found docs sharing the same id") and fails the
  // build. The default full build never hits this because its matcher is
  // already restricted to markdown.
  ? [`courses/${buildOnly}/**/*.{md,mdx}`, 'index.md']
  : undefined;

const config: Config = {
  title: 'AI Engineering Journey',
  tagline: 'Complete Learning Path - Backend + AI Engineer',
  favicon: 'img/favicon.ico',

  // Required for ```mermaid blocks to render. themeConfig.mermaid below only
  // styles an already-registered theme; without this entry Mermaid is never
  // loaded and every diagram renders as a literal code block. This affected
  // 2,988 diagrams across the site.
  themes: ['@docusaurus/theme-mermaid'],

  url: 'https://raushan666java.github.io',
  baseUrl: '/ai-engineering-journey/',

  organizationName: 'Raushan666java',
  projectName: 'ai-engineering-journey',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
    // The themes entry above only registers the <Mermaid> React component.
    // @docusaurus/mdx-loader gates its mermaid remark transform -- the step
    // that rewrites ```mermaid fences into <Mermaid value=.../> -- on this
    // flag (mdx-loader/lib/processor.js: `options.markdownConfig.mermaid`).
    // Without it every fence stays a Prism code block and no component is ever
    // rendered, which is why all 2,988 diagrams showed up as literal source.
    mermaid: true,
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
          ...(docsInclude ? {include: docsInclude} : {}),
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
