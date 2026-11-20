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

  // A full build renders 1,419 documents through a 309 MB server bundle. Webpack
  // holds that module graph in the JS heap, so by the time static generation
  // starts V8 is already at 9.7 GB of live objects and aborts (exit 134) before
  // writing a single HTML file. Rspack keeps the bundle graph in Rust instead,
  // SWC replaces Babel, and mdxCrossCompilerCache compiles each MDX file once
  // for both client and server. Measured effect: the build completes inside an
  // 8 GB heap on this 12 GB machine.
  future: {
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  },

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
          // Trust signal on a 1,400-page study site: a reader can see when a
          // chapter was last touched, and "Edit this page" invites corrections.
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/',
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
      // A wrong hash here is not cosmetic: the browser refuses to APPLY a
      // stylesheet whose integrity check fails, so every formula renders as
      // unstyled HTML. The previous value was a fabricated repeating pattern
      // (63 chars, sha384 needs 64) and blocked KaTeX site-wide.
      // To refresh: download the file, SHA-384 it, base64 it, prefix "sha384-".
      integrity: 'sha384-1vdNCNel6Tx/NQa8IR1mGOGKsbGreCkOPfbtPPnUURJ5Tu2PRVfQ/7KLZC+Pi1p1',
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
    // Default social card for every page that does not override it. Without
    // this, twitter:card=summary_large_image ships with no og:image and every
    // shared link renders as a blank grey box.
    image: 'img/social-card.png',
    metadata: [
      {name: 'author', content: 'Raushan Kumar'},
      {
        name: 'description',
        content:
          'AI engineering and placement course by Raushan Kumar: 59 courses, 1,400+ chapters on Python, SQL, ML, RAG, LLM applications and system design.',
      },
      {name: 'theme-color', content: '#1a1b23'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'AI Engineering Journey'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
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
          // A docSidebar link resolves to the *first* document of that
          // sidebar. When building in parts, sidebars.ts aliases
          // placementSidebar to whatever course is being built, so every
          // part emitted a different target for this one navbar item and the
          // merged site ended up with 1,017 pages whose "Placement Course"
          // went to java/01-jvm-memory or web-development/01-html. Pin the
          // route instead so every part renders the same href.
          to: '/ai-engineering-placement',
          activeBasePath: '/ai-engineering-placement',
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
        {
          to: '/about',
          label: 'About',
          position: 'right',
          className: 'navbar-about-link',
        },
        {
          to: '/about#contact',
          label: 'Hire me',
          position: 'right',
          className: 'navbar-hire-button',
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
          title: 'About',
          items: [
            {label: 'About Raushan', to: '/about'},
            {label: 'Contact', to: '/about#contact'},
            {label: 'All courses', to: '/courses'},
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
      copyright: `Copyright ${new Date().getFullYear()} Raushan Kumar. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
