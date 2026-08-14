"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[49301],{

/***/ 465
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_17_performance_md_98d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-17-performance-md-98d.json
const site_docs_courses_web_development_17_performance_md_98d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/17-performance","title":"Chapter 17: Performance Optimization","description":"Previous 18-fullstack-project","source":"@site/docs/courses/web-development/17-performance.md","sourceDirName":"courses/web-development","slug":"/web-development/17-performance","permalink":"/ai-engineering-journey/web-development/17-performance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"17-performance","slug":"/web-development/17-performance","title":"Chapter 17: Performance Optimization","sidebar_label":"Chapter 17: Performance Optimization","sidebar_position":17},"sidebar":"course-web-development","previous":{"title":"Chapter 16: Testing","permalink":"/ai-engineering-journey/web-development/16-testing-web"},"next":{"title":"Chapter 18: Building a Full-Stack Application","permalink":"/ai-engineering-journey/web-development/18-fullstack-project"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/17-performance.md


const frontMatter = {
	id: '17-performance',
	slug: '/web-development/17-performance',
	title: 'Chapter 17: Performance Optimization',
	sidebar_label: 'Chapter 17: Performance Optimization',
	sidebar_position: 17
};
const contentTitle = 'Chapter 17: Performance Optimization';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "17.1 Core Web Vitals",
  "id": "171-core-web-vitals",
  "level": 2
}, {
  "value": "17.2 Lighthouse Auditing",
  "id": "172-lighthouse-auditing",
  "level": 2
}, {
  "value": "17.3 Code Splitting",
  "id": "173-code-splitting",
  "level": 2
}, {
  "value": "17.4 Bundle Analysis",
  "id": "174-bundle-analysis",
  "level": 2
}, {
  "value": "17.5 Image Optimization",
  "id": "175-image-optimization",
  "level": 2
}, {
  "value": "17.6 Caching Strategies",
  "id": "176-caching-strategies",
  "level": 2
}, {
  "value": "17.7 React Performance Patterns",
  "id": "177-react-performance-patterns",
  "level": 2
}, {
  "value": "17.8 Font Optimization",
  "id": "178-font-optimization",
  "level": 2
}, {
  "value": "Performance Budgets",
  "id": "performance-budgets",
  "level": 3
}, {
  "value": "Lighthouse CI Budget",
  "id": "lighthouse-ci-budget",
  "level": 3
}, {
  "value": "requestAnimationFrame and Frame Rate Optimization",
  "id": "requestanimationframe-and-frame-rate-optimization",
  "level": 3
}, {
  "value": "Resource Hints for Faster Navigation",
  "id": "resource-hints-for-faster-navigation",
  "level": 3
}, {
  "value": "17.9 Database Performance",
  "id": "179-database-performance",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: Lighthouse Score Analyzer &amp; PWA Manifest Builder",
  "id": "typescript-lighthouse-score-analyzer--pwa-manifest-builder",
  "level": 3
}, {
  "value": "TypeScript Implementation: Bundle Analyzer, Lazy Load Scheduler, Memoization Cache, Performance Marker",
  "id": "typescript-implementation-bundle-analyzer-lazy-load-scheduler-memoization-cache-performance-marker",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-17-performance-optimization",
        children: "Chapter 17: Performance Optimization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/16-testing-web",
          children: "16-testing-web"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/18-fullstack-project",
          children: "18-fullstack-project"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Core Web Vitals (LCP, FID, CLS) measure real user experience and are Google ranking factors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/17-performance/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/17-performance/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/17-performance/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/17-performance/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/17-performance/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/17-performance/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Lighthouse provides automated performance, accessibility, and SEO scoring for continuous improvement."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Web Vitals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCP (<2.5s), FID (<100ms), CLS (<0.1) measure real user experience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track Web Vitals in production with RUM (Real User Monitoring) — lab tests alone are insufficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lighthouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated auditing tool scoring performance, accessibility, SEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run Lighthouse CI in the pipeline to catch regressions before deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Splitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split bundles by route and component to reduce initial payload"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "React.lazy"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Suspense"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next/dynamic"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ssr: false"
            }), " for client-only components"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsive images with WebP/AVIF, lazy loading, blur placeholders"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use next/image or the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<picture>"
            }), " element with multiple source formats for broad compatibility"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service workers cache assets; CDNs cache at edge; HTTP caching headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer caches — CDN for static assets, SW for offline, memory cache for API data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "memo"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useMemo"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useCallback"
            }), ", and virtual scrolling prevent wasted renders"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile with React DevTools before optimizing — don't add memoization prematurely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Perf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query optimization, selective columns, batch operations, connection pooling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "select"
            }), " to fetch only needed columns, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "createMany"
            }), " for batch inserts"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Code splitting reduces initial bundle size by loading code only when needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Core Web Vitals]\n    B[Lighthouse Auditing]\n    A --> B\n    C[Code Splitting]\n    B --> C\n    D[Bundle Analysis]\n    C --> D\n    E[Image Optimization]\n    D --> E\n    F[Caching Strategies]\n    E --> F\n    G[React Performance Patterns]\n    F --> G\n    H[Virtual Scrolling]\n    G --> H\n    I[Database Performance]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure and optimize Core Web Vitals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement lazy loading and code splitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize images, fonts, and bundle sizes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure caching strategies with CDNs and service workers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use performance monitoring and profiling tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply React-specific performance patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "171-core-web-vitals",
      children: "17.1 Core Web Vitals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Image optimization with WebP/AVIF, responsive sizes, and lazy loading saves significant bandwidth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/17-performance.png",
        alt: "Performance Optimization Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Web Vitals measurement\n// app/reportWebVitals.ts\n\"use client\";\n\nimport { useReportWebVitals } from \"next/web-vitals\";\n\nexport function WebVitals() {\n  useReportWebVitals((metric) => {\n    console.log(metric); // LCP, FID, CLS, FCP, TTFB\n\n    // Send to analytics\n    const body = JSON.stringify({\n      name: metric.name,\n      value: metric.value,\n      rating: metric.rating,\n      delta: metric.delta,\n      id: metric.id,\n    });\n    navigator.sendBeacon(\"/api/vitals\", body);\n  });\n  return null;\n}\n\n// LCP (Largest Contentful Paint) - < 2.5s\n// FID (First Input Delay) - < 100ms\n// CLS (Cumulative Layout Shift) - < 0.1\n// FCP (First Contentful Paint) - < 1.8s\n// TTFB (Time to First Byte) - < 800ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "172-lighthouse-auditing",
      children: "17.2 Lighthouse Auditing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Layered caching (CDN, service worker, memory) reduces latency at every level."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# CLI audit with Lighthouse\nnpx lighthouse https://example.com --view\n\n# Programmatic audit\nimport lighthouse from \"lighthouse\";\nimport * as chromeLauncher from \"chrome-launcher\";\n\nconst chrome = await chromeLauncher.launch();\nconst options = { logLevel: \"info\", output: \"json\", port: chrome.port };\nconst runnerResult = await lighthouse(\"https://example.com\", options);\n\nconst { performance, accessibility, \"best-practices\": bp, seo } = runnerResult.lhr.categories;\nconsole.log(`Performance: ${performance.score * 100}`);\nconsole.log(`Accessibility: ${accessibility.score * 100}`);\nawait chrome.kill();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "173-code-splitting",
      children: "17.3 Code Splitting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " React patterns like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memo"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), ", and virtual scrolling prevent unnecessary re-renders on complex UIs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Dynamic imports with React.lazy\nimport { lazy, Suspense } from \"react\";\n\nconst HeavyComponent = lazy(() => import(\"./HeavyComponent\"));\nconst ChartDashboard = lazy(() => import(\"./ChartDashboard\"));\n\nfunction Dashboard() {\n  return (\n    <Suspense fallback={<LoadingSpinner />}>\n      <HeavyComponent />\n      <ChartDashboard />\n    </Suspense>\n  );\n}\n\n// Named exports with dynamic import\nconst { formatDistance } = await import(\"date-fns\");\n\n// Route-level code splitting in Next.js\n// Next.js automatically splits by route - no config needed\n// pages/blog/[slug].js -> separate chunk\n\n// Component-level with next/dynamic\nimport dynamic from \"next/dynamic\";\n\nconst DynamicEditor = dynamic(() => import(\"../components/Editor\"), {\n  loading: () => <p>Loading editor...</p>,\n  ssr: false, // Disable SSR for client-only components\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "174-bundle-analysis",
      children: "17.4 Bundle Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Analyze bundle with Vite\nnpm run build && npx vite-bundle-analyzer\n\n# Analyze Next.js bundle\nANALYZE=true npm run build\n\n# Check individual package sizes\nnpx cost-of-modules\n\n# Tree-shaking verification\n# Check that imports only pull what's needed\nimport { format } from \"date-fns\"; // Good - tree-shakeable\nimport * as dateFns from \"date-fns\"; // Bad - imports everything\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "175-image-optimization",
      children: "17.5 Image Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Responsive images with srcSet\nimport Image from \"next/image\";\n\nfunction HeroImage() {\n  return (\n    <Image\n      src=\"/hero.webp\"\n      alt=\"Hero\"\n      width={1200}\n      height={600}\n      sizes=\"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\"\n      loading=\"lazy\" // Lazy load below-the-fold images\n      decoding=\"async\"\n      quality={80}\n      placeholder=\"blur\"\n      blurDataURL=\"data:image/webp;base64,...\"\n    />\n  );\n}\n\n// CSS background image optimization\n.hero {\n  background-image: image-set(\n    url(\"/hero-small.webp\") 1x,\n    url(\"/hero-large.webp\") 2x\n  );\n}\n\n// Image format selection\n// Prefer WebP/AVIF over JPEG/PNG\n// Use <picture> for format fallbacks\n<picture>\n  <source srcSet=\"/hero.avif\" type=\"image/avif\" />\n  <source srcSet=\"/hero.webp\" type=\"image/webp\" />\n  <img src=\"/hero.jpg\" alt=\"Hero\" loading=\"lazy\" />\n</picture>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "176-caching-strategies",
      children: "17.6 Caching Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Service worker with Workbox\n// sw.ts\nimport { precacheAndRoute } from \"workbox-precaching\";\nimport { registerRoute } from \"workbox-routing\";\nimport { CacheFirst, NetworkFirst, StaleWhileRevalidate } from \"workbox-strategies\";\n\n// Precache static assets\nprecacheAndRoute(self.__WB_MANIFEST);\n\n// Cache images with Cache First\nregisterRoute(\n  /\\.(?:png|jpg|jpeg|svg|gif|webp)$/,\n  new CacheFirst({\n    cacheName: \"images\",\n    plugins: [\n      { expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 } },\n    ],\n  })\n);\n\n// Cache API responses with Network First\nregisterRoute(\n  /\\/api\\/.*\\.json/,\n  new NetworkFirst({\n    cacheName: \"api-responses\",\n    plugins: [{ expiration: { maxEntries: 100, maxAgeSeconds: 300 } }],\n  })\n);\n\n// Cache static assets with Stale-While-Revalidate\nregisterRoute(\n  /\\.(?:css|js)$/,\n  new StaleWhileRevalidate({\n    cacheName: \"static-assets\",\n  })\n);\n\n// CDN Cache headers (server-side)\napp.use(\n  \"/api/posts\",\n  (req, res, next) => {\n    res.set(\"Cache-Control\", \"public, max-age=60, stale-while-revalidate=300\");\n    res.set(\"CDN-Cache-Control\", \"public, max-age=300\");\n    next();\n  },\n  postsHandler\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "177-react-performance-patterns",
      children: "17.7 React Performance Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { memo, useMemo, useCallback } from \"react\";\n\n// React.memo - prevent re-renders when props haven't changed\nconst ExpensiveList = memo(function ExpensiveList({ items }: { items: Item[] }) {\n  return items.map((item) => <ExpensiveItem key={item.id} item={item} />);\n});\n\n// useMemo - memoize expensive computations\nfunction Dashboard({ tasks }: { tasks: Task[] }) {\n  const stats = useMemo(\n    () => ({\n      total: tasks.length,\n      completed: tasks.filter((t) => t.status === \"DONE\").length,\n      overdue: tasks.filter(\n        (t) => t.dueDate && new Date(t.dueDate) < new Date()\n      ).length,\n      byPriority: {\n        high: tasks.filter((t) => t.priority === \"HIGH\").length,\n        medium: tasks.filter((t) => t.priority === \"MEDIUM\").length,\n        low: tasks.filter((t) => t.priority === \"LOW\").length,\n      },\n    }),\n    [tasks]\n  );\n\n  return <StatsPanel stats={stats} />;\n}\n\n// useCallback - memoize callbacks\nfunction TaskList({ tasks, onStatusChange }: TaskListProps) {\n  const handleStatusChange = useCallback(\n    (taskId: string, status: string) => {\n      onStatusChange(taskId, status);\n    },\n    [onStatusChange]\n  );\n\n  return tasks.map((task) => (\n    <TaskItem key={task.id} task={task} onStatusChange={handleStatusChange} />\n  ));\n}\n\n// Virtual scrolling for large lists\nimport { FixedSizeList } from \"react-window\";\n\nfunction VirtualTaskList({ tasks }: { tasks: Task[] }) {\n  return (\n    <FixedSizeList\n      height={600}\n      itemCount={tasks.length}\n      itemSize={72}\n      width=\"100%\"\n    >\n      {({ index, style }) => (\n        <div style={style}>\n          <TaskItem task={tasks[index]} />\n        </div>\n      )}\n    </FixedSizeList>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "178-font-optimization",
      children: "17.8 Font Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom fonts can significantly impact performance if not loaded correctly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Preload critical fonts\n// In <head>:\n<link\n  rel=\"preload\"\n  href=\"/fonts/Inter-Variable.woff2\"\n  as=\"font\"\n  type=\"font/woff2\"\n  crossorigin=\"anonymous\"\n/>\n\n// CSS with font-display: swap\n@font-face {\n  font-family: 'Inter';\n  src: url('/fonts/Inter-Variable.woff2') format('woff2');\n  font-weight: 100 900;\n  font-display: swap; /* Show fallback text immediately */\n  unicode-range: U+0000-00FF; /* Limit character set */\n}\n\n// In Next.js, use next/font for automatic optimization\nimport { Inter } from \"next/font/google\";\n\nconst inter = Inter({\n  subsets: [\"latin\"],\n  display: \"swap\",\n  preload: true,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-budgets",
      children: "Performance Budgets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A performance budget sets thresholds your app must not exceed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// performance-budget.ts\ninterface Budget {\n  maxBundleSizeKB: number;\n  maxImageSizeKB: number;\n  maxRequests: number;\n  maxLCP: number; // ms\n  maxTBT: number; // ms (Total Blocking Time)\n}\n\nconst BUDGET: Budget = {\n  maxBundleSizeKB: 300,\n  maxImageSizeKB: 200,\n  maxRequests: 25,\n  maxLCP: 2500,\n  maxTBT: 200,\n};\n\n// CI check\nasync function checkBundleSize(): Promise<boolean> {\n  const fs = await import(\"fs/promises\");\n  const stats = await fs.stat(\".next/static/chunks/pages\");\n  const totalKB = stats.size / 1024;\n  if (totalKB > BUDGET.maxBundleSizeKB) {\n    console.error(`Bundle size ${totalKB}KB exceeds budget ${BUDGET.maxBundleSizeKB}KB`);\n    process.exit(1);\n  }\n  return true;\n}\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lighthouse-ci-budget",
      children: "Lighthouse CI Budget"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"ci\": {\n    \"assert\": {\n      \"categories:performance\": [\"error\", { \"minScore\": 0.9 }],\n      \"categories:accessibility\": [\"error\", { \"minScore\": 0.9 }]\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestanimationframe-and-frame-rate-optimization",
      children: "requestAnimationFrame and Frame Rate Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smooth animations run at 60fps (16.6ms per frame). Avoid long tasks that push frame budget."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Defer non-critical work\nfunction scheduleIdleTask(task: () => void, timeout = 1000) {\n  if (typeof requestIdleCallback !== \"undefined\") {\n    requestIdleCallback(() => task(), { timeout });\n  } else {\n    setTimeout(task, 1);\n  }\n}\n\n// Batch DOM reads/writes to avoid layout thrashing\nconst scheduledUpdates = new Map<string, () => void>();\nlet rafScheduled = false;\n\nfunction batchUpdate(key: string, update: () => void) {\n  scheduledUpdates.set(key, update);\n  if (!rafScheduled) {\n    rafScheduled = true;\n    requestAnimationFrame(() => {\n      // Read phase first (all gets)\n      // Then write phase (all sets)\n      for (const [, fn] of scheduledUpdates) fn();\n      scheduledUpdates.clear();\n      rafScheduled = false;\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-hints-for-faster-navigation",
      children: "Resource Hints for Faster Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- DNS prefetch for cross-origin resources -->\n<link rel=\"dns-prefetch\" href=\"//api.example.com\" />\n\n<!-- Preconnect for critical third-party origins -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n<link rel=\"preconnect\" href=\"https://api.example.com\" crossorigin />\n\n<!-- Prefetch for likely-next pages -->\n<link rel=\"prefetch\" href=\"/dashboard\" as=\"document\" />\n\n<!-- Preload for critical above-the-fold resources -->\n<link rel=\"preload\" href=\"/styles/critical.css\" as=\"style\" />\n<link rel=\"preload\" href=\"/hero.webp\" as=\"image\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "179-database-performance",
      children: "17.9 Database Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Efficient queries\n// BAD: Selecting all columns\nconst users = await prisma.user.findMany({});\n\n// GOOD: Select only needed columns\nconst users = await prisma.user.findMany({\n  select: { id: true, name: true, email: true },\n});\n\n// Batch operations\n// BAD: N+1 individual creates\nfor (const item of items) {\n  await prisma.item.create({ data: item });\n}\n\n// GOOD: Bulk create\nawait prisma.item.createMany({ data: items });\n\n// Connection pooling for production\nconst pool = new Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 20, // Max connections\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 2000,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx web-vitals"
        }), " in your app to track real Core Web Vitals from actual users — Lighthouse gives lab data but real-user metrics reveal the true experience."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nPremature optimization adds complexity without measurable benefit. Always profile first with React DevTools or Chrome Performance tab, then optimize the actual bottleneck."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nThe single biggest performance win for most web apps is reducing JavaScript bundle size. Analyze your bundles regularly — a 100KB savings in JS often beats any memoization optimization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCP vs FID vs CLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loading performance (largest element)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactivity (first input delay)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "React.memo"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useMemo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents component re-render"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caches computation result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CacheFirst"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NetworkFirst"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serves from cache, falls back to network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tries network first, falls back to cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG vs WebP vs AVIF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widest support, larger files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good support, ~30% smaller than JPEG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "react-window"
            }), " vs native scroll"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual rendering, constant DOM nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All items in DOM, memory-heavy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Vital Thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCP < 2.5s, FID < 100ms, CLS < 0.1, FCP < 1.8s, TTFB < 800ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy Loading"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "React.lazy(() => import('./Comp'))"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next/dynamic"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "loading='lazy'"
            }), " on images"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Strategies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CacheFirst"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NetworkFirst"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "StaleWhileRevalidate"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NetworkOnly"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVIF (best), WebP (good fallback), JPEG/PNG (universal fallback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Profiling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["React DevTools Profiler, Chrome Performance tab, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "why-did-you-render"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image optimization, CDN caching for product images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast product browsing and checkout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "News Site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR for articles, service worker for offline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant article loads, offline reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual scrolling, memo for chart components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth performance with thousands of rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code splitting by route, lazy image loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast initial load, infinite scroll performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle analysis, selective imports, tree shaking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast page loads even with many dependencies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What is the recommended LCP (Largest Contentful Paint) threshold?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) < 1.0s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) < 2.5s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) < 4.0s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) < 5.0s"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Google recommends LCP under 2.5 seconds. LCP measures when the largest content element (image, video, text block) becomes visible."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CacheFirst"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NetworkFirst"
        }), " strategies?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) CacheFirst returns cached content first; NetworkFirst tries the network first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) CacheFirst always fetches from network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) NetworkFirst only caches images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CacheFirst"
            }), " serves cached content immediately (falling back to network), ideal for static assets. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NetworkFirst"
            }), " tries the network first (falling back to cache), ideal for API responses where freshness matters."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. When should you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useMemo"
        }), " in React?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) For every computed value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Only after profiling shows an expensive computation causing performance issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) For all function definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Never — it is deprecated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useMemo"
            }), " adds memory and complexity overhead. Only use it when profiling identifies a computation that is expensive enough to impact frame rate or render time."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. What is the primary benefit of image format AVIF over JPEG?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) AVIF is supported in all browsers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) AVIF provides ~50% better compression than JPEG at similar quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) AVIF is easier to encode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) AVIF supports animation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) AVIF (AV1 Image Format) offers significantly better compression than JPEG — typically 50% smaller file sizes at equivalent quality, reducing bandwidth and improving load times."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-lighthouse-score-analyzer--pwa-manifest-builder",
      children: "TypeScript: Lighthouse Score Analyzer & PWA Manifest Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LighthouseScores { performance: number; accessibility: number; seo: number; bestPractices: number; }\nclass LighthouseAnalyzer {\n  static grade(scores: LighthouseScores): Record<string, string> {\n    const grade = (n: number) => n >= 90 ? \"Good\" : n >= 50 ? \"Needs work\" : \"Poor\";\n    return Object.fromEntries(Object.entries(scores).map(([k, v]) => [k, grade(v)]));\n  }\n  static recommendations(scores: LighthouseScores): string[] {\n    const recs: string[] = [];\n    if (scores.performance < 90) recs.push(\"Optimize images, minify JS, enable compression\");\n    if (scores.accessibility < 90) recs.push(\"Add aria labels, improve color contrast, fix heading hierarchy\");\n    if (scores.seo < 90) recs.push(\"Add meta description, improve heading structure, add alt text\");\n    if (scores.bestPractices < 90) recs.push(\"Use HTTPS, avoid deprecated APIs, add doctype\");\n    return recs;\n  }\n}\n\nclass PWAManifestGenerator {\n  static create(config: { name: string; shortName: string; startUrl: string; themeColor: string; bgColor: string; icons: { src: string; sizes: string; type: string }[] }): Record<string, any> {\n    return {\n      name: config.name, short_name: config.shortName,\n      start_url: config.startUrl, display: \"standalone\",\n      theme_color: config.themeColor, background_color: config.bgColor,\n      icons: config.icons,\n    };\n  }\n}\n\nclass BundleAnalyzer {\n  static estimateSize(imports: string[]): { total: number; large: string[] } {\n    const sizeMap: Record<string, number> = { \"react-dom\": 130, \"react\": 7, \"lodash\": 71, \"axios\": 14, \"chart.js\": 60, \"d3\": 250 };\n    let total = 0;\n    const large: string[] = [];\n    imports.forEach(pkg => {\n      const size = sizeMap[pkg] ?? 10;\n      total += size;\n      if (size > 50) large.push(pkg);\n    });\n    return { total, large };\n  }\n}\n\nconsole.log(\"Grade:\", LighthouseAnalyzer.grade({ performance: 65, accessibility: 85, seo: 92, bestPractices: 78 }));\nconsole.log(\"PWA:\", JSON.stringify(PWAManifestGenerator.create({ name: \"MyApp\", shortName: \"App\", startUrl: \"/\", themeColor: \"#000\", bgColor: \"#fff\", icons: [{ src: \"/icon.png\", sizes: \"192x192\", type: \"image/png\" }] })));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-bundle-analyzer-lazy-load-scheduler-memoization-cache-performance-marker",
      children: "TypeScript Implementation: Bundle Analyzer, Lazy Load Scheduler, Memoization Cache, Performance Marker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BundleSizeAnalyzer {\n    static estimate(source: string): { totalBytes: number; totalKb: string; gzippedKb: string; lines: number } {\n        const bytes = new TextEncoder().encode(source).length;\n        const lines = source.split(\"\\n\").length;\n        const gzipRatio = 0.35;\n        return {\n            totalBytes: bytes,\n            totalKb: (bytes / 1024).toFixed(1),\n            gzippedKb: (bytes * gzipRatio / 1024).toFixed(1),\n            lines\n        };\n    }\n\n    static analyzeImports(source: string): { module: string; specifiers: string[] }[] {\n        const imports: { module: string; specifiers: string[] }[] = [];\n        const pattern = /import\\s+(?:(\\{[^}]*\\}|[^;]+))\\s+from\\s+[\"']([^\"']+)[\"']/g;\n        let match;\n        while ((match = pattern.exec(source)) !== null) {\n            const specifiers = match[1].replace(/[{}]/g, \"\").split(\",\").map(s => s.trim()).filter(Boolean);\n            imports.push({ module: match[2], specifiers });\n        }\n        return imports;\n    }\n\n    static treeShakeable(imports: { specifiers: string[]; module: string }[]): { treeShakeable: boolean; reasons: string[] } {\n        const reasons: string[] = [];\n        const sideEffectFree = imports.every(i => {\n            const isCSS = i.module.endsWith(\".css\");\n            const isSideEffect = i.specifiers.length === 0;\n            if (isCSS) reasons.push(`${i.module}: CSS imports cannot be tree-shaken`);\n            if (isSideEffect) reasons.push(`${i.module}: Side-effect import`);\n            return !isCSS && !isSideEffect;\n        });\n        return { treeShakeable: sideEffectFree, reasons };\n    }\n}\n\nclass LazyLoadScheduler {\n    private loaded: Set<string> = new Set();\n    private pending: Map<string, { priority: number; loader: () => Promise<any> }> = new Map();\n\n    register(name: string, loader: () => Promise<any>, priority: number = 5): void {\n        this.pending.set(name, { priority, loader });\n    }\n\n    async loadNow(name: string): Promise<any> {\n        const entry = this.pending.get(name);\n        if (!entry) return null;\n        this.pending.delete(name);\n        this.loaded.add(name);\n        return entry.loader();\n    }\n\n    async loadBatch(threshold: number = 3): Promise<void> {\n        const sorted = [...this.pending.entries()]\n            .sort(([, a], [, b]) => a.priority - b.priority)\n            .slice(0, threshold);\n        await Promise.all(sorted.map(([name]) => this.loadNow(name)));\n    }\n\n    async loadOnIdle(name: string): Promise<any> {\n        return new Promise(resolve => {\n            if (typeof requestIdleCallback !== \"undefined\") {\n                requestIdleCallback(() => this.loadNow(name).then(resolve));\n            } else {\n                setTimeout(() => this.loadNow(name).then(resolve), 1);\n            }\n        });\n    }\n\n    getStats(): { registered: number; loaded: number; pending: number } {\n        return { registered: this.pending.size + this.loaded.size, loaded: this.loaded.size, pending: this.pending.size };\n    }\n}\n\nclass MemoizationCache {\n    private cache = new Map<string, { value: any; timestamp: number }>();\n    private maxSize: number;\n    private ttlMs: number;\n\n    constructor(maxSize: number = 100, ttlMs: number = 60000) { this.maxSize = maxSize; this.ttlMs = ttlMs; }\n\n    private key(args: any[]): string { return args.map(a => JSON.stringify(a)).join(\"::\"); }\n\n    get<T>(fn: (...args: any[]) => T, ...args: any[]): T {\n        const k = this.key(args);\n        const existing = this.cache.get(k);\n        if (existing && Date.now() - existing.timestamp < this.ttlMs) return existing.value as T;\n\n        const value = fn(...args);\n        this.set(k, value);\n        return value;\n    }\n\n    async getAsync<T>(fn: (...args: any[]) => Promise<T>, ...args: any[]): Promise<T> {\n        const k = this.key(args);\n        const existing = this.cache.get(k);\n        if (existing && Date.now() - existing.timestamp < this.ttlMs) return existing.value as T;\n\n        const value = await fn(...args);\n        this.set(k, value);\n        return value;\n    }\n\n    private set(key: string, value: any): void {\n        if (this.cache.size >= this.maxSize) {\n            const oldest = this.cache.entries().next().value?.[0];\n            if (oldest) this.cache.delete(oldest);\n        }\n        this.cache.set(key, { value, timestamp: Date.now() });\n    }\n\n    invalidate(...args: any[]): void {\n        if (args.length === 0) { this.cache.clear(); return; }\n        const k = this.key(args);\n        this.cache.delete(k);\n    }\n}\n\nclass PerformanceMarker {\n    private marks: Map<string, number> = new Map();\n    private measures: { name: string; duration: number; startMark: string; endMark: string }[] = [];\n\n    start(name: string): void { this.marks.set(name, performance.now()); }\n\n    end(name: string): number {\n        const start = this.marks.get(name);\n        if (!start) return 0;\n        const duration = performance.now() - start;\n        this.measures.push({ name, duration, startMark: name, endMark: `${name}-end` });\n        return duration;\n    }\n\n    measure(name: string, startMark: string, endMark: string): number {\n        const start = this.marks.get(startMark);\n        const end = this.marks.get(endMark);\n        if (!start || !end) return 0;\n        const duration = end - start;\n        this.measures.push({ name, duration, startMark, endMark });\n        return duration;\n    }\n\n    getReport(): { measures: { name: string; duration: number }[]; total: number; avg: number } {\n        const durations = this.measures.map(m => m.duration);\n        return {\n            measures: this.measures.map(m => ({ name: m.name, duration: Math.round(m.duration * 100) / 100 })),\n            total: Math.round(durations.reduce((a, b) => a + b, 0) * 100) / 100,\n            avg: durations.length > 0 ? Math.round((durations.reduce((a, b) => a + b, 0) / durations.length) * 100) / 100 : 0\n        };\n    }\n}\n\n// Demo\nconst code = `import { useState, useEffect } from \"react\";\\nimport { Button } from \"./Button\";\\nimport \"./styles.css\";\\nconst App = () => { return <div>Hello</div>; };`;\nconsole.log(\"Bundle:\", BundleSizeAnalyzer.estimate(code));\nconsole.log(\"Imports:\", BundleSizeAnalyzer.analyzeImports(code));\nconsole.log(\"Tree-shakeable:\", BundleSizeAnalyzer.treeShakeable(BundleSizeAnalyzer.analyzeImports(code)));\n\nconst cache = new MemoizationCache(10, 5000);\nconst expensive = (n: number) => n * 2;\nconsole.log(\"Cache:\", cache.get(expensive, 5), cache.get(expensive, 5));\n\nconst perf = new PerformanceMarker();\nperf.start(\"render\");\nsetTimeout(() => { perf.end(\"render\"); console.log(\"Perf:\", perf.getReport()); }, 10);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// performance\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'performance', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web performance optimization spans the entire stack. Core Web Vitals (LCP, FID, CLS) measure user experience. Code splitting reduces initial bundle size. Image optimization saves bandwidth. Caching strategies at CDN, browser, and service worker levels reduce latency. React.memo, useMemo, and useCallback prevent unnecessary re-renders. Database query optimization with proper indexing and batch operations handles data at scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are Core Web Vitals and why do they matter?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does code splitting improve initial page load?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When should you use useMemo versus useCallback?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add lazy loading to images in a photo gallery"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement virtual scrolling for a data table with 10,000+ rows"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set up a service worker for offline-first caching"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add resource hints (preconnect, prefetch, preload) to improve page load time for a multi-page application."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Optimize web font loading using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "font-display: swap"
          }), " and subsetting to reduce the critical render path."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a performance budget CI check that fails the build if bundle size exceeds 300KB or Lighthouse performance score drops below 90."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a requestAnimationFrame-based batching system that groups DOM reads and writes into separate frames to eliminate layout thrashing."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimize a web application achieving 95+ Lighthouse performance score by implementing: code splitting at route and component level, responsive images with WebP/AVIF, CDN caching with stale-while-revalidate, service worker for offline support, virtual scrolling for large lists, database query optimization with proper indexes, and real user monitoring (RUM) to track Core Web Vitals in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measure before optimizing"
        }), " — always profile with Lighthouse, React DevTools, or the Chrome Performance tab before adding complexity. Premature optimization is the root of all evil."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduce JavaScript bundle size first"
        }), " — the single biggest performance win is shipping less JS. Analyze bundles regularly, use dynamic imports, and tree-shake unused exports."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimize images aggressively"
        }), " — use AVIF/WebP with responsive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "srcSet"
        }), " and lazy loading. Images are typically the largest assets on a page."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layer your caches"
        }), " — CDN for static assets, service worker for offline, browser cache for API responses, and in-memory cache for computed data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use resource hints"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preload"
        }), " critical resources, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preconnect"
        }), " to third-party origins, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prefetch"
        }), " likely-next pages to eliminate network wait times."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);