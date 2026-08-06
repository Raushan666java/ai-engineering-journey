"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[54974],{

/***/ 77396
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_11_caching_performance_md_975_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-11-caching-performance-md-975.json
const site_docs_courses_laravel_11_caching_performance_md_975_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/11-caching-performance","title":"Chapter 11: Caching, Performance & Octane","description":"Previous Laravel AI SDK -- Agents, Prompting & Structured Output","source":"@site/docs/courses/laravel/11-caching-performance.md","sourceDirName":"courses/laravel","slug":"/laravel/11-caching-performance","permalink":"/ai-engineering-journey/laravel/11-caching-performance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-caching-performance","slug":"/laravel/11-caching-performance","title":"Chapter 11: Caching, Performance & Octane","sidebar_label":"Chapter 11: Caching, Performance & Octane","sidebar_position":11},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Testing, Debugging & Observability","permalink":"/ai-engineering-journey/laravel/10-testing-observability"},"next":{"title":"Chapter 12: Laravel AI SDK → Agents, Prompting & Structured Output","permalink":"/ai-engineering-journey/laravel/12-ai-sdk-agents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/11-caching-performance.md


const frontMatter = {
	id: '11-caching-performance',
	slug: '/laravel/11-caching-performance',
	title: 'Chapter 11: Caching, Performance & Octane',
	sidebar_label: 'Chapter 11: Caching, Performance & Octane',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Caching, Performance & Octane';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "11.1 Cache Drivers",
  "id": "111-cache-drivers",
  "level": 3
}, {
  "value": "File",
  "id": "file",
  "level": 4
}, {
  "value": "Database",
  "id": "database",
  "level": 4
}, {
  "value": "Redis",
  "id": "redis",
  "level": 4
}, {
  "value": "DynamoDB",
  "id": "dynamodb",
  "level": 4
}, {
  "value": "Array",
  "id": "array",
  "level": 4
}, {
  "value": "Null",
  "id": "null",
  "level": 4
}, {
  "value": "11.2 Cache API",
  "id": "112-cache-api",
  "level": 3
}, {
  "value": "TTL Values",
  "id": "ttl-values",
  "level": 4
}, {
  "value": "Cache::touch() → TTL Extension (Laravel 13)",
  "id": "cachetouch--ttl-extension-laravel-13",
  "level": 4
}, {
  "value": "11.3 Cache Tags",
  "id": "113-cache-tags",
  "level": 3
}, {
  "value": "Real-World Usage",
  "id": "real-world-usage",
  "level": 4
}, {
  "value": "11.4 Atomic Locks",
  "id": "114-atomic-locks",
  "level": 3
}, {
  "value": "Blocking Locks",
  "id": "blocking-locks",
  "level": 4
}, {
  "value": "Lock Release on Exception",
  "id": "lock-release-on-exception",
  "level": 4
}, {
  "value": "Cross-Request Locking",
  "id": "cross-request-locking",
  "level": 4
}, {
  "value": "Lock Management",
  "id": "lock-management",
  "level": 4
}, {
  "value": "11.5 Redis Optimization",
  "id": "115-redis-optimization",
  "level": 3
}, {
  "value": "Redis Facade",
  "id": "redis-facade",
  "level": 4
}, {
  "value": "Redis Commands",
  "id": "redis-commands",
  "level": 4
}, {
  "value": "Publish / Subscribe",
  "id": "publish--subscribe",
  "level": 4
}, {
  "value": "Pipelines",
  "id": "pipelines",
  "level": 4
}, {
  "value": "Redis for Queues",
  "id": "redis-for-queues",
  "level": 4
}, {
  "value": "Redis for Sessions",
  "id": "redis-for-sessions",
  "level": 4
}, {
  "value": "Redis Sentinel for High Availability",
  "id": "redis-sentinel-for-high-availability",
  "level": 4
}, {
  "value": "Redis Cluster for Sharding",
  "id": "redis-cluster-for-sharding",
  "level": 4
}, {
  "value": "11.6 Database Performance",
  "id": "116-database-performance",
  "level": 3
}, {
  "value": "Query Optimization",
  "id": "query-optimization",
  "level": 4
}, {
  "value": "N+1 Detection",
  "id": "n1-detection",
  "level": 4
}, {
  "value": "Chunking Results",
  "id": "chunking-results",
  "level": 4
}, {
  "value": "Read / Write Connections",
  "id": "read--write-connections",
  "level": 4
}, {
  "value": "11.7 Eager Loading Strategies",
  "id": "117-eager-loading-strategies",
  "level": 3
}, {
  "value": "Nested Eager Loading",
  "id": "nested-eager-loading",
  "level": 4
}, {
  "value": "Lazy Eager Loading",
  "id": "lazy-eager-loading",
  "level": 4
}, {
  "value": "Default Eager Loading",
  "id": "default-eager-loading",
  "level": 4
}, {
  "value": "Global Scopes",
  "id": "global-scopes",
  "level": 4
}, {
  "value": "Constrain Eager Loads",
  "id": "constrain-eager-loads",
  "level": 4
}, {
  "value": "11.8 Laravel Octane",
  "id": "118-laravel-octane",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 4
}, {
  "value": "Octane Configuration",
  "id": "octane-configuration",
  "level": 4
}, {
  "value": "Starting Octane",
  "id": "starting-octane",
  "level": 4
}, {
  "value": "Octane State",
  "id": "octane-state",
  "level": 4
}, {
  "value": "Octane Cache",
  "id": "octane-cache",
  "level": 4
}, {
  "value": "Supervisord Configuration",
  "id": "supervisord-configuration",
  "level": 4
}, {
  "value": "Octane Events",
  "id": "octane-events",
  "level": 4
}, {
  "value": "11.9 Performance Measurement",
  "id": "119-performance-measurement",
  "level": 3
}, {
  "value": "Laravel Debugbar",
  "id": "laravel-debugbar",
  "level": 4
}, {
  "value": "Clockwork",
  "id": "clockwork",
  "level": 4
}, {
  "value": "Telescope Performance Tab",
  "id": "telescope-performance-tab",
  "level": 4
}, {
  "value": "Laravel Pulse",
  "id": "laravel-pulse",
  "level": 4
}, {
  "value": "Blackfire.io",
  "id": "blackfireio",
  "level": 4
}, {
  "value": "Xdebug Profiling",
  "id": "xdebug-profiling",
  "level": 4
}, {
  "value": "11.10 Caching Strategies",
  "id": "1110-caching-strategies",
  "level": 3
}, {
  "value": "Cache-Aside (Lazy Loading)",
  "id": "cache-aside-lazy-loading",
  "level": 4
}, {
  "value": "Write-Through Cache",
  "id": "write-through-cache",
  "level": 4
}, {
  "value": "Write-Behind (Write-Back) Cache",
  "id": "write-behind-write-back-cache",
  "level": 4
}, {
  "value": "Cache Stampede Protection",
  "id": "cache-stampede-protection",
  "level": 4
}, {
  "value": "Cache Invalidation Patterns",
  "id": "cache-invalidation-patterns",
  "level": 4
}, {
  "value": "Content Caching for Blade",
  "id": "content-caching-for-blade",
  "level": 4
}, {
  "value": "11.11 CDN &amp; Asset Optimization",
  "id": "1111-cdn--asset-optimization",
  "level": 3
}, {
  "value": "Vite Bundle Splitting",
  "id": "vite-bundle-splitting",
  "level": 4
}, {
  "value": "CSS/JS Minification",
  "id": "cssjs-minification",
  "level": 4
}, {
  "value": "Image Optimization",
  "id": "image-optimization",
  "level": 4
}, {
  "value": "Font Subsetting",
  "id": "font-subsetting",
  "level": 4
}, {
  "value": "CDN for Static Assets",
  "id": "cdn-for-static-assets",
  "level": 4
}, {
  "value": "11.12 Complete Example: Caching Strategy for an API",
  "id": "1112-complete-example-caching-strategy-for-an-api",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Cache Methods",
  "id": "quick-reference--cache-methods",
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
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
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
        id: "chapter-11-caching-performance--octane",
        children: "Chapter 11: Caching, Performance & Octane"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./10-testing-observability",
          children: "Testing, Debugging & Observability"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./12-ai-sdk-agents",
          children: "Laravel AI SDK -- Agents, Prompting & Structured Output"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure and select appropriate cache drivers for different environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the Cache API including tags, atomic locks, and TTL extension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize database queries using indexing strategies, eager loading, and chunking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement caching strategies such as cache-aside, write-through, and write-behind"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and tune Laravel Octane with Swoole or RoadRunner"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure application performance using profiling and observability tools"
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
        href: "../../assets/images/lessons/laravel/11-caching-performance/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/11-caching-performance/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/11-caching-performance/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/11-caching-performance/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/11-caching-performance/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/11-caching-performance/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Drivers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File, database, redis, dynamodb, array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "put, remember, tags, atomic locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped invalidation with Redis/Memcached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic Locks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed mutex, blocking locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commands, pub/sub, pipelines, sentinel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing, N+1 detection, chunking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eager Loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested, lazy, default, constrained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Octane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swoole/RoadRunner, state management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-aside, write-through, write-behind"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asset Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vite splitting, CDN, image optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Cache Drivers] --> B[Cache API]\n    B --> C[Cache Tags]\n    B --> D[Atomic Locks]\n    B --> E[Redis Optimization]\n    F[Database Performance] --> G[Eager Loading]\n    G --> H[Laravel Octane]\n    I[Caching Strategies] --> J[Asset Optimization]\n    H --> J\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel supports seven cache drivers and a comprehensive Cache API with tags, atomic locks, and TTL management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/11-caching-performance.png",
        alt: "Caching and Performance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-cache-drivers",
      children: "11.1 Cache Drivers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " File is simplest for development, Redis is the production workhorse with tag support, and DynamoDB offers managed serverless caching on AWS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel provides a unified API for multiple cache backends. The active driver is configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE"
      }), " (Laravel 11+) or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_DRIVER"
      }), " (Laravel 10 and earlier)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "file",
      children: "File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stores serialized cache entries as individual files in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "storage/framework/cache/data/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE=file\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No external dependencies"
        }), " → zero setup, works everywhere"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow for large caches"
        }), " → filesystem seeks degrade with thousands of entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No tag support"
        }), " → you cannot tag and flush groups of entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Best for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single-server development"
        }), " and minimal deployments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database",
      children: "Database"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stores cache entries in a database table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan cache:table\nphp artisan migrate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE=database\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Useful when no Redis or Memcached is available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each cache hit requires a database query → slower than in-memory backends"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tags"
        }), " only if you implement custom tag logic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis",
      children: "Redis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most popular production cache driver. Laravel supports both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "predis"
      }), " (PHP library) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phpredis"
      }), " (C extension)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE=redis\nREDIS_CLIENT=phpredis\n\n> **Pro Tip:** Use `phpredis` over `predis` for production. phpredis is a C extension that uses less memory, supports more Redis features (like Sentinel and Cluster natively), and is significantly faster than the pure-PHP predis library.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/database.php\n'redis' => [\n    'client' => env('REDIS_CLIENT', 'phpredis'),\n\n    'options' => [\n        'cluster' => env('REDIS_CLUSTER', 'redis'),\n        'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),\n    ],\n\n    'default' => [\n        'url' => env('REDIS_URL'),\n        'host' => env('REDIS_HOST', '127.0.0.1'),\n        'username' => env('REDIS_USERNAME'),\n        'password' => env('REDIS_PASSWORD'),\n        'port' => env('REDIS_PORT', '6379'),\n        'database' => env('REDIS_DB', '0'),\n    ],\n\n    'cache' => [\n        'url' => env('REDIS_URL'),\n        'host' => env('REDIS_HOST', '127.0.0.1'),\n        'username' => env('REDIS_USERNAME'),\n        'password' => env('REDIS_PASSWORD'),\n        'port' => env('REDIS_PORT', '6379'),\n        'database' => env('REDIS_CACHE_DB', '1'),\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In-memory, sub-millisecond reads"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tags"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "atomic locks"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pub/sub"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pipelines"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Separate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cache"
        }), " database (db 1) keeps volatile cache separate from persistent data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "phpredis"
        }), " is faster than predis; install it as a PHP extension"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dynamodb",
      children: "DynamoDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon DynamoDB-backed cache for AWS deployments."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE=dynamodb\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Managed, serverless, auto-scaling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires AWS SDK and an existing DynamoDB table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher latency than Redis but zero operational overhead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "array",
      children: "Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stores cache in a PHP array for the current request only."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE=array\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default for testing"
        }), " → entries are lost after each request"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No serialization overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never use in production"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "null",
      children: "Null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disables caching entirely."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CACHE_STORE=null\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cache::get()"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Useful for disabling cache during development without code changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-cache-api",
      children: "11.2 Cache API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Cache facade provides put, remember, forever, pull, add, many, increment, decrement, and the new touch() method for TTL extension."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache"
      }), " facade provides a comprehensive set of methods for storing and retrieving cached values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Cache;\n\n// Store a value for 60 seconds\nCache::put('key', 'value', 60);\n\n// Store indefinitely (never expires)\nCache::forever('key', 'value');\n\n// Retrieve or store if missing\n$value = Cache::remember('users.active', 3600, function () {\n    return User::where('active', true)->get();\n});\n\n// Retrieve or store forever\n$value = Cache::rememberForever('settings', function () {\n    return Setting::pluck('value', 'key');\n});\n\n// Retrieve and delete\n$value = Cache::pull('temporary_key');\n\n// Store only if key does not exist\n$added = Cache::add('unique_key', 'value', 60); // returns bool\n\n// Add multiple at once\nCache::many([\n    'key1' => 'value1',\n    'key2' => 'value2',\n]);\n\n// Delete a key\nCache::forget('key');\n\n// Delete everything\nCache::flush();\n\n// Increment / Decrement\nCache::increment('visit_count');\nCache::increment('visit_count', 5);\nCache::decrement('stock_count');\nCache::decrement('stock_count', 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ttl-values",
      children: "TTL Values"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel 11+ accepts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateTimeInterface"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateInterval"
      }), ", or seconds as integers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Carbon\\Carbon;\n\nCache::put('key', 'value', now()->addHours(2));\nCache::put('key', 'value', Carbon::tomorrow());\nCache::put('key', 'value', 3600); // 60 minutes in seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cachetouch--ttl-extension-laravel-13",
      children: "Cache::touch() → TTL Extension (Laravel 13)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel 13 introduces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache::touch()"
      }), ", which extends the TTL of an existing cache entry without retrieving and re-storing the value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Extend the TTL by 3600 seconds from now\nCache::touch('session_token', 3600);\n\n// Check if key exists and extend\nif (Cache::has('user_123_profile')) {\n    Cache::touch('user_123_profile', 1800);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "touch()"
      }), ", extending TTL required a full read-write cycle:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Old approach → still works but less efficient\n$profile = Cache::get('user_123_profile');\nif ($profile !== null) {\n    Cache::put('user_123_profile', $profile, 1800);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "touch()"
      }), " is especially useful for session-like caches where activity should extend the expiry window. It issues a single Redis ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPIRE"
      }), " command instead of a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SET"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-cache-tags",
      children: "11.3 Cache Tags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cache tags group related entries for bulk invalidation; tags require Redis or Memcached and are the preferred pattern for grouped cache."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache tags group related entries so you can flush them as a unit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Cache::tags(['people', 'artists'])->put('John', $john, 3600);\nCache::tags(['people', 'authors'])->put('Anne', $anne, 3600);\n\n$john = Cache::tags(['people', 'artists'])->get('John');\n\n// Flush all entries tagged with 'people'\nCache::tags('people')->flush();\n\n// Flush only the intersection\nCache::tags(['people', 'authors'])->flush();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag support requirements:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Driver"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tags supported"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attempting to use tags with a non-supported driver throws a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CacheException"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-usage",
      children: "Real-World Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PostController\n{\n    public function index(): View\n    {\n        $posts = Cache::tags(['posts', 'published'])\n            ->remember('posts.all', 3600, function () {\n                return Post::with('author')\n                    ->where('published', true)\n                    ->orderBy('published_at', 'desc')\n                    ->paginate(20);\n            });\n\n        return view('posts.index', compact('posts'));\n    }\n\n    public function update(Request $request, Post $post): RedirectResponse\n    {\n        $post->update($request->validated());\n\n        // Flush all post-related cache when any post changes\n        Cache::tags('posts')->flush();\n\n        return redirect()->route('posts.index');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-atomic-locks",
      children: "11.4 Atomic Locks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Atomic locks provide distributed mutex across servers, supporting blocking locks, auto-release on exceptions, and cross-request locking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Atomic locks provide mutex semantics across multiple servers using the cache backend."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Cache;\n\n$lock = Cache::lock('deploy', 10);\n\nif ($lock->get()) {\n    // Run deployment tasks\n    Process::run('php artisan migrate');\n\n    $lock->release();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "blocking-locks",
      children: "Blocking Locks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Block for up to 5 seconds waiting for the lock\n$lock = Cache::lock('report_generation', 30);\n\n$lock->block(5, function () {\n    // Generate the report → only one server at a time\n    ReportGenerator::generate();\n});\n// Lock is automatically released after the callback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lock-release-on-exception",
      children: "Lock Release on Exception"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Locks must always be released. Use the callback form for automatic release:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Cache::lock('processing', 10)->get(function () {\n    // If this throws, the lock is released\n    Process::run('long-running-job');\n}); // released here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cross-request-locking",
      children: "Cross-Request Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Prevent duplicate form submission\npublic function checkout(Request $request): JsonResponse\n{\n    $lock = Cache::lock('checkout_' . auth()->id(), 5);\n\n    if (!$lock->get()) {\n        return response()->json([\n            'message' => 'A checkout is already in progress.',\n        ], 429);\n    }\n\n    try {\n        $order = $this->orders->place($request->all());\n        return response()->json($order, 201);\n    } finally {\n        $lock->release();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lock-management",
      children: "Lock Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Force release (useful for stale locks)\nCache::lock('deploy')->forceRelease();\n\n// Check lock status\n$lock = Cache::lock('resource', 10);\nif ($lock->get()) {\n    // got the lock\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Locks work with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memcached"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DynamoDB"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "database"
      }), " cache drivers. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "file"
      }), " driver does not support atomic locks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-redis-optimization",
      children: "11.5 Redis Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Redis is the most versatile cache and data-structure server in the Laravel ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-facade",
      children: "Redis Facade"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Redis;\n\n// Default connection\nRedis::set('key', 'value');\n$value = Redis::get('key');\n\n// Select specific connection\nRedis::connection('cache')->set('key', 'value');\n\n// Connection defined in config/database.php\n'redis' => [\n    'opcache' => [\n        'host' => env('REDIS_OPCACHE_HOST', '127.0.0.1'),\n        'port' => 6379,\n        'database' => 2,\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-commands",
      children: "Redis Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Sets\nRedis::sadd('online_users', $userId);\n$isOnline = Redis::sismember('online_users', $userId);\n$count = Redis::scard('online_users');\n\n// Sorted sets → leaderboards\nRedis::zadd('leaderboard', $score, $userId);\n$top10 = Redis::zrevrange('leaderboard', 0, 9, 'WITHSCORES');\n$rank = Redis::zrevrank('leaderboard', $userId);\n\n// Hashes\nRedis::hset('user:123', 'name', 'John');\nRedis::hgetall('user:123');\nRedis::hincrby('user:123', 'visits', 1);\n\n// Expiry\nRedis::expire('temp_data', 3600);\nRedis::ttl('temp_data');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "publish--subscribe",
      children: "Publish / Subscribe"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Publisher\nRedis::publish('notifications', json_encode([\n    'user_id' => 123,\n    'message' => 'New comment on your post',\n]));\n\n// Subscriber (long-running process)\nRedis::subscribe(['notifications'], function (string $message) {\n    $data = json_decode($message, true);\n    // Send push notification to $data['user_id']\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pipelines",
      children: "Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Redis::pipeline(function ($pipe) {\n    for ($i = 0; $i < 1000; $i++) {\n        $pipe->set(\"key:$i\", \"value:$i\");\n    }\n});\n// Sends all 1000 commands in one round trip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-for-queues",
      children: "Redis for Queues"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QUEUE_CONNECTION=redis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/queue.php\n'redis' => [\n    'driver' => 'redis',\n    'connection' => 'default',\n    'queue' => env('REDIS_QUEUE', 'default'),\n    'retry_after' => 90,\n    'block_for' => null,\n    'after_commit' => true,\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Redis queues use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BLPOP"
      }), " for blocking pops, achieving microsecond latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-for-sessions",
      children: "Redis for Sessions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SESSION_DRIVER=redis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/session.php\n'connection' => env('SESSION_CONNECTION'),\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shared session storage across multiple web servers with automatic expiry."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-sentinel-for-high-availability",
      children: "Redis Sentinel for High Availability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REDIS_SENTINEL_SERVICE=myprimary\nREDIS_SENTINEL_HOSTS=10.0.0.1:26379,10.0.0.2:26379,10.0.0.3:26379\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel automatically discovers the current master from Sentinel and fails over."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-cluster-for-sharding",
      children: "Redis Cluster for Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REDIS_CLUSTER=redis\nREDIS_HOST=cluster1:6379,cluster2:6379,cluster3:6379\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keys are automatically distributed across shards. Only database 0 is available in cluster mode."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-database-performance",
      children: "11.6 Database Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Database optimization centers on composite indexing (equality columns first), N+1 prevention, chunking large datasets, and read/write connection separation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "query-optimization",
      children: "Query Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DB::enableQueryLog()"
      }), " or Telescope to capture and analyze queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Analyze a query\nDB::enableQueryLog();\n\n$users = User::where('active', true)\n    ->where('plan', 'premium')\n    ->orderBy('name')\n    ->take(20)\n    ->get();\n\ndd(DB::getQueryLog());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Indexing Strategies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Single column\nSchema::table('users', function (Blueprint $table) {\n    $table->index('email');\n});\n\n// Composite index → order matters!\nSchema::table('posts', function (Blueprint $table) {\n    // queries: WHERE status=? AND published_at BETWEEN ? AND ?\n    //         WHERE status=?\n    $table->index(['status', 'published_at']);\n});\n\n// Partial / conditional index (PostgreSQL)\nDB::statement('CREATE INDEX idx_active_users ON users (created_at) WHERE active = true');\n\n// Full-text index\nSchema::table('posts', function (Blueprint $table) {\n    $table->fullText(['title', 'body']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composite index column order rule:"
      }), " Place equality conditions first, range conditions second."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "n1-detection",
      children: "N+1 Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Problem: 1 query for posts + N queries for authors\n$posts = Post::all();\nforeach ($posts as $post) {\n    echo $post->author->name; // N+1!\n}\n\n// Solution: eager load\n$posts = Post::with('author')->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Laravel N+1 Detector package (", (0,jsx_runtime.jsx)(_components.code, {
          children: "sburina/n-plus-one-detector"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Telescope's Queries tab flags N+1 patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debugbar's queries tab shows duplicate queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Prevent lazy loading in non-production\nuse Illuminate\\Database\\Eloquent\\Model;\n\nModel::preventLazyLoading(! $this->app->isProduction());\n// In production, log instead of throwing\nModel::preventLazyLoading(false);\n// Or log to a channel (Laravel 11+)\nModel::handleLazyLoadingViolationUsing(function ($model, $relation) {\n\n> **Warning:** Enable `Model::preventLazyLoading(!$this->app->isProduction())` in AppServiceProvider. In production, use `Model::handleLazyLoadingViolationUsing()` to log violations instead of throwing exceptions. The performance cost of lazy loading is often invisible until traffic spikes.\n    Log::warning(\"Lazy loading {$relation} on \" . get_class($model));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chunking-results",
      children: "Chunking Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// chunk → loads batches of records\nPost::chunk(200, function (Collection $posts) {\n    foreach ($posts as $post) {\n        $post->indexInSearchEngine();\n    }\n});\n\n// chunkById → stable ordering for tables that change during chunking\nPost::where('published', true)\n    ->chunkById(200, function (Collection $posts) {\n        foreach ($posts as $post) {\n            $post->generateThumbnail();\n            $post->increment('processed_count');\n        }\n    });\n\n// lazy → returns LazyCollection, one record at a time\nforeach (Post::lazy(100) as $post) {\n    $post->process(); // memory-efficient\n}\n\n// cursor → uses yield, single query with cursor-based iteration\nforeach (Post::where('published', true)->cursor() as $post) {\n    $post->export();\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DB queries"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write-safe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "chunk()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "chunkById()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lazy()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursor()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read--write-connections",
      children: "Read / Write Connections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/database.php\n'mysql' => [\n    'read' => [\n        'host' => [\n            env('DB_READ_HOST_1', '192.168.1.1'),\n            env('DB_READ_HOST_2', '192.168.1.2'),\n        ],\n    ],\n    'write' => [\n        'host' => [\n            env('DB_WRITE_HOST', '196.168.1.10'),\n        ],\n    ],\n    'sticky' => true, // read from write after writes during same request\n    // ...\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "READ"
        }), " queries (", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT"
        }), ") go to read replicas"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "WRITE"
        }), " queries (", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSERT"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPDATE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DELETE"
        }), ") go to the primary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sticky: true"
        }), " ensures that after a write, the next read within the same request hits the primary to avoid replication lag"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-eager-loading-strategies",
      children: "11.7 Eager Loading Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nested-eager-loading",
      children: "Nested Eager Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Load a chain of relations in one pass\n$posts = Post::with('author.profile', 'comments.user')->get();\n\n// Each dot-separated path is a separate JOIN\n// SQL: 1 query for posts, 1 for authors+profiles, 1 for comments+users\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lazy-eager-loading",
      children: "Lazy Eager Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$posts = Post::all();\n\nif ($includeAuthor) {\n    $posts->load('author');\n\n    // Conditional nested\n    $posts->load(['comments' => function ($query) {\n        $query->where('approved', true)->orderBy('created_at');\n    }]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "default-eager-loading",
      children: "Default Eager Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Post extends Model\n{\n    protected $with = ['author'];\n\n    public function author(): BelongsTo\n    {\n        return $this->belongsTo(User::class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Post"
      }), " query automatically eager loads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "author"
      }), ". Override with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "without()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$posts = Post::without('author')->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "global-scopes",
      children: "Global Scopes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PublishedScope implements Scope\n{\n    public function apply(Builder $builder, Model $model): void\n    {\n        $builder->where('published', true);\n    }\n}\n\nclass Post extends Model\n{\n    protected static function booted(): void\n    {\n        static::addGlobalScope(new PublishedScope);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "constrain-eager-loads",
      children: "Constrain Eager Loads"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$users = User::with(['posts' => function ($query) {\n    $query->where('published', true)\n        ->orderBy('published_at', 'desc')\n        ->limit(5);\n}])->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-laravel-octane",
      children: "11.8 Laravel Octane"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Octane eliminates framework boot overhead by keeping the application in memory, with Swoole and RoadRunner as the supported application servers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Octane supercharges your application by keeping it in memory across multiple requests, eliminating framework boot time for every request."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/octane\nphp artisan octane:install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The installer prompts: Swoole or RoadRunner?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory model"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swoole"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PHP extension (", (0,jsx_runtime.jsx)(_components.code, {
              children: "ext-swoole"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared memory, coroutine-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RoadRunner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go binary + PHP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process-per-worker, no shared memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "octane-configuration",
      children: "Octane Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/octane.php\nreturn [\n    'server' => env('OCTANE_SERVER', 'roadrunner'),\n\n    'https' => env('OCTANE_HTTPS', false),\n\n    'max_execution_time' => 30,\n\n    'max_requests' => 500, // restart worker after 500 requests\n\n    'warm' => [\n        ...Octane::defaultServicesToWarm(),\n        App\\Services\\CacheWarmer::class,\n    ],\n\n    'listeners' => [\n        RequestReceived::class => [\n            LogRequest::class,\n        ],\n    ],\n\n    'watch' => [\n        'app',\n        'config',\n        'routes',\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "starting-octane",
      children: "Starting Octane"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# RoadRunner\nphp artisan octane:start --server=roadrunner --host=0.0.0.0 --port=8000\n\n# Swoole\nphp artisan octane:start --server=swoole --host=0.0.0.0 --port=8000\n\n# Watch for file changes (development)\nphp artisan octane:start --watch\n\n# Worker count\nphp artisan octane:start --workers=4 --task-workers=2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "octane-state",
      children: "Octane State"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Octane retains application state in memory between requests. This changes how you think about static properties and singletons."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// DANGER: state leaks between requests\nclass RequestCounter\n{\n    public static int $count = 0;\n}\n\n// Octane will corrupt this: each request increments the same static\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe patterns under Octane:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Store state in the request\nuse Laravel\\Octane\\Facades\\Octane;\n\nOctane::set('counter', 0);\nOctane::get('counter');\n\n// Use the container for request-scoped bindings\nApp::scoped(ReportingService::class, function () {\n    return new ReportingService(request()->user()->tenant_id);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Services to warm at boot:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/octane.php\n'warm' => [\n    ...Octane::defaultServicesToWarm(),\n    \\App\\Services\\ConfigurationService::class,\n    \\App\\Services\\FeatureFlags::class,\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bootstrapped services are resolved once at worker start, not per-request."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "octane-cache",
      children: "Octane Cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "octane:cache"
      }), " to persist bootstrapped configuration across deployments:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "php artisan octane:cache\nphp artisan octane:clear\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supervisord-configuration",
      children: "Supervisord Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "[program:laravel-octane]\nprocess_name=%(program_name)s_%(process_num)02d\ncommand=php /var/www/html/artisan octane:start --server=roadrunner --port=8000\nautostart=true\nautorestart=true\nuser=www-data\nnumprocs=1\nredirect_stderr=true\nstdout_logfile=/var/www/html/storage/logs/octane.log\nstopwaitsecs=360\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "octane-events",
      children: "Octane Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Listen for Octane events\nEvent::listen(function (\\Laravel\\Octane\\Events\\WorkerStarting $event) {\n    // Redis connection pool warmup\n});\n\nEvent::listen(function (\\Laravel\\Octane\\Events\\RequestReceived $event) {\n    // Sentry transaction start\n});\n\nEvent::listen(function (\\Laravel\\Octane\\Events\\RequestTerminated $event) {\n    // Request cleanup, metrics flush\n});\n\nEvent::listen(function (\\Laravel\\Octane\\Events\\WorkerErrorOccurred $event) {\n    // Worker restart logging\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "119-performance-measurement",
      children: "11.9 Performance Measurement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-debugbar",
      children: "Laravel Debugbar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require barryvdh/laravel-debugbar --dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In-browser toolbar with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route, controller, middleware chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All executed queries with bindings, timing, and stack traces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory usage breakdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View rendering time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session and request data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mail previews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "clockwork",
      children: "Clockwork"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require itsgoingd/clockwork\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chrome DevTools extension for server-side profiling. Shows timeline, queries, events, cache, Redis commands, and log entries in the browser's DevTools panel."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "telescope-performance-tab",
      children: "Telescope Performance Tab"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Telescope's built-in performance viewer shows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slowest requests with full SQL bindings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request duration histogram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route-level performance breakdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N+1 query detection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-pulse",
      children: "Laravel Pulse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-time production monitoring with cards for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow queries (top 20 by duration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow jobs (top 20 by processing time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow requests (top 20 by response time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache hit/miss ratio"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exception frequency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "blackfireio",
      children: "Blackfire.io"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced PHP profiling with call-graph visualization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require blackfire/player\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function-level execution time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory allocation traces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I/O wait analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance regression detection in CI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xdebug-profiling",
      children: "Xdebug Profiling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "; php.ini\nxdebug.mode=profile\nxdebug.output_dir=/tmp/profiling\nxdebug.profiler_output_name=cachegrind.out.%t.%p\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Analyze with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KCacheGrind"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "QCacheGrind"
      }), " for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inclusive vs exclusive execution time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call counts per function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller-callee relationship graphs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1110-caching-strategies",
      children: "11.10 Caching Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cache-aside is simplest, write-through keeps cache fresh but costs write latency, and write-behind absorbs traffic spikes at risk of data loss."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-aside-lazy-loading",
      children: "Cache-Aside (Lazy Loading)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The application checks the cache first. On a miss, it computes the value, stores it, and returns it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function show(Post $post): JsonResponse\n{\n    $views = Cache::remember(\"post.{$post->id}.views\", 3600, function () use ($post) {\n        return $post->views()->count();\n    });\n\n    return response()->json(['views' => $views]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Simple, only caches what is requested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Initial request pays the computation cost, cache stampede risk"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "write-through-cache",
      children: "Write-Through Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The application writes to the cache whenever it writes to the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function store(CreatePostRequest $request): JsonResponse\n{\n    $post = Post::create($request->validated());\n\n    Cache::put(\"post.{$post->id}\", $post, 3600);\n    Cache::tags('posts')->flush();\n\n    return response()->json($post, 201);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Cache always contains fresh data; no miss penalty"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Writes are slower; caches data that may never be read"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "write-behind-write-back-cache",
      children: "Write-Behind (Write-Back) Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Writes are queued and written to the database asynchronously."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function recordView(Post $post): void\n{\n    $cacheKey = \"post.{$post->id}.view_count\";\n\n    Cache::increment($cacheKey);\n\n    // Batch persist every N increments\n    if (Cache::get($cacheKey) % 100 === 0) {\n        dispatch(new PersistViewCount($post->id, Cache::get($cacheKey)));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Extremely fast writes, absorbs traffic spikes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " Data loss if cache goes down before persistence"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-stampede-protection",
      children: "Cache Stampede Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache stampede occurs when many requests simultaneously miss the cache and all recompute the value."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Use atomic lock to serialize recomputation\npublic function expensiveReport(): array\n{\n    $cacheKey = 'annual_report';\n\n    $cached = Cache::get($cacheKey);\n    if ($cached !== null) {\n        return $cached;\n    }\n\n    // Only one process recomputes\n    $lock = Cache::lock($cacheKey . '_lock', 10);\n\n    try {\n        if ($lock->get()) {\n            $data = $this->generateReport(); // expensive\n            Cache::put($cacheKey, $data, 3600);\n            return $data;\n        }\n\n        // Wait for the leader to finish\n        sleep(1);\n        return Cache::get($cacheKey);\n    } finally {\n        $lock->release();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel 13's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache::remember()"
      }), " also provides built-in stampede protection when using Redis or Memcached via the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cache stampede prevention"
      }), " mechanism → only one process recomputes while others wait."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-invalidation-patterns",
      children: "Cache Invalidation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// 1. Tag-based invalidation (preferred for grouped cache)\nCache::tags('posts')->flush();\n\n// 2. Key-pattern invalidation\n$pattern = 'post.*';\n// Requires custom iteration → not natively supported\n\n// 3. Version-based invalidation\nCache::increment('cache_version');\n$version = Cache::get('cache_version');\n$posts = Cache::remember(\"posts.v{$version}\", 3600, fn () => Post::all());\n\n// 4. Time-based (TTL expiry)\n// Simplest: cache expires after fixed time\n// Not immediate → stale data served until TTL expires\n\n// 5. Event-driven invalidation\nclass PostObserver\n{\n    public function saved(Post $post): void\n    {\n        Cache::tags(['posts', 'post.' . $post->id])->flush();\n    }\n\n    public function deleted(Post $post): void\n    {\n        Cache::forget('post.' . $post->id);\n        Cache::tags('posts')->flush();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "content-caching-for-blade",
      children: "Content Caching for Blade"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "@cache('sidebar.recent_posts', 3600)\n    <div class=\"sidebar\">\n        <h3>Recent Posts</h3>\n        <ul>\n            @foreach (Cache::remember('posts.recent', 3600, fn () => Post::recent()->get()) as $post)\n                <li>{{ $post->title }}</li>\n            @endforeach\n        </ul>\n    </div>\n@endcache\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@cache"
      }), " directive caches the rendered HTML output, not just the data. The cached fragment is served without executing any PHP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-cdn--asset-optimization",
      children: "11.11 CDN & Asset Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vite-bundle-splitting",
      children: "Vite Bundle Splitting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// vite.config.js\nimport { defineConfig } from 'vite';\nimport laravel from 'laravel-vite-plugin';\n\nexport default defineConfig({\n    plugins: [\n        laravel({\n            input: [\n                'resources/css/app.css',\n                'resources/js/app.js',\n                'resources/js/admin.js',\n                'resources/js/vendor.js',\n            ],\n            refresh: true,\n        }),\n        {\n            name: 'manual-chunks',\n            transform(code, id) {\n                if (id.includes('node_modules')) {\n                    return { module: { type: 'module' } };\n                }\n            },\n        },\n    ],\n    build: {\n        rollupOptions: {\n            output: {\n                manualChunks(id) {\n                    if (id.includes('node_modules/react')) {\n                        return 'react-vendor';\n                    }\n                    if (id.includes('node_modules/lodash')) {\n                        return 'lodash';\n                    }\n                },\n            },\n        },\n    },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Load only what the page needs --}}\n@vite(['resources/js/app.js', 'resources/js/pages/dashboard.js'])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cssjs-minification",
      children: "CSS/JS Minification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vite applies minification automatically in production builds (", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), "). Configure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// vite.config.js\nbuild: {\n    minify: 'esbuild', // default, fastest\n    // or\n    minify: 'terser',  // better compression, slower build\n    cssMinify: 'lightningcss',\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "image-optimization",
      children: "Image Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Use Laravel image manipulation packages\ncomposer require spatie/image-optimizer\n\nuse Spatie\\ImageOptimizer\\OptimizerChainFactory;\n\n$optimizerChain = OptimizerChainFactory::create();\n$optimizerChain->optimize($path);\n\n// Or use responsive images with srcset\n<img\n    src=\"{{ $post->getFirstMediaUrl('cover', 'sm') }}\"\n    srcset=\"\n        {{ $post->getFirstMediaUrl('cover', 'sm') }} 400w,\n        {{ $post->getFirstMediaUrl('cover', 'md') }} 800w,\n        {{ $post->getFirstMediaUrl('cover', 'lg') }} 1200w\n    \"\n    sizes=\"(max-width: 768px) 100vw, 800px\"\n    loading=\"lazy\"\n    alt=\"{{ $post->title }}\"\n>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "font-subsetting",
      children: "Font Subsetting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Use spatie/laravel-google-fonts for subset loading\ncomposer require spatie/laravel-google-fonts\n\n// config/google-fonts.php\nreturn [\n    'inter' => 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&subset=latin',\n    // Subset to latin only → saves ~60% font file size\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cdn-for-static-assets",
      children: "CDN for Static Assets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/filesystems.php\n'disks' => [\n    'public' => [\n        'driver' => 'local',\n        'root' => storage_path('app/public'),\n        'url' => env('APP_URL') . '/storage',\n        'visibility' => 'public',\n    ],\n\n    'cdn' => [\n        'driver' => 's3',\n        'key' => env('CDN_KEY'),\n        'secret' => env('CDN_SECRET'),\n        'region' => env('CDN_REGION'),\n        'bucket' => env('CDN_BUCKET'),\n        'url' => env('CDN_URL'), // e.g. https://cdn.example.com\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- Serve assets from CDN in production --}}\n@if(app()->environment('production'))\n    <link rel=\"stylesheet\" href=\"https://cdn.example.com/css/app.abc123.css\">\n@else\n    @vite('resources/css/app.css')\n@endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-complete-example-caching-strategy-for-an-api",
      children: "11.12 Complete Example: Caching Strategy for an API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n\nnamespace App\\Http\\Controllers\\Api;\n\nuse App\\Models\\Post;\nuse App\\Models\\Tag;\nuse Illuminate\\Http\\JsonResponse;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Cache;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass PostController extends Controller\n{\n    public function index(Request $request): JsonResponse\n    {\n        $page = $request->get('page', 1);\n        $perPage = $request->get('per_page', 20);\n\n        $posts = Cache::tags(['posts', 'published'])\n            ->remember(\"posts.index.page.{$page}\", 3600, function () use ($perPage) {\n                return Post::with('author:id,name')\n                    ->select('id', 'title', 'slug', 'excerpt', 'published_at', 'user_id')\n                    ->where('published', true)\n                    ->orderBy('published_at', 'desc')\n                    ->paginate($perPage);\n            });\n\n        return response()->json($posts);\n    }\n\n    public function show(string $slug): JsonResponse\n    {\n        $post = Cache::remember(\"post.slug.{$slug}\", 3600, function () use ($slug) {\n            return Post::with(['author', 'tags', 'comments.user'])\n                ->where('slug', $slug)\n                ->firstOrFail();\n        });\n\n        // Increment view count atomically\n        $viewsKey = \"post.{$post->id}.views\";\n        Cache::increment($viewsKey);\n\n        // Batch persist every 50 views\n        $views = Cache::get($viewsKey);\n        if ($views % 50 === 0) {\n            dispatch(function () use ($post, $views) {\n                DB::transaction(function () use ($post, $views) {\n                    $post->timestamps = false;\n                    $post->increment('views', 50);\n                    Cache::decrement(\"post.{$post->id}.views\", 50);\n                });\n            });\n        }\n\n        return response()->json([\n            'post' => $post,\n            'views' => $views,\n        ]);\n    }\n\n    public function store(CreatePostRequest $request): JsonResponse\n    {\n        $post = DB::transaction(function () use ($request) {\n            $post = auth()->user()->posts()->create(\n                $request->validated()\n            );\n\n            if ($request->tags) {\n                $tags = Tag::findOrCreate($request->tags);\n                $post->tags()->attach($tags);\n            }\n\n            return $post->load('tags');\n        });\n\n        // Write-through cache\n        Cache::put(\"post.slug.{$post->slug}\", $post, 3600);\n        Cache::tags(['posts', 'published'])->flush();\n\n> **Remember:** Cache tags only work with Redis and Memcached. Attempting to use tags with file, database, or DynamoDB drivers throws a CacheException. Always check your driver before relying on tag-based invalidation.\n\n        return response()->json($post, 201);\n    }\n\n    public function update(UpdatePostRequest $request, Post $post): JsonResponse\n    {\n        $this->authorize('update', $post);\n\n        $post->update($request->validated());\n\n        if ($request->has('tags')) {\n            $tags = Tag::findOrCreate($request->tags);\n            $post->tags()->sync($tags);\n        }\n\n        $post->load('tags');\n\n        // Flush both the individual post cache and the listing cache\n        Cache::forget(\"post.slug.{$post->slug}\");\n        Cache::tags('posts')->flush();\n\n        return response()->json($post);\n    }\n\n    public function destroy(Post $post): JsonResponse\n    {\n        $this->authorize('delete', $post);\n\n        $post->delete();\n\n        Cache::forget(\"post.slug.{$post->slug}\");\n        Cache::tags('posts')->flush();\n\n        return response()->noContent();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Hit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Miss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Freshness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Aside (Lazy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return cached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute + store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-Through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return cached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (dual write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always fresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-Behind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return cached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of loss"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--cache-methods",
      children: "Quick Reference — Cache Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::put('key', $val, 3600)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store with TTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::remember('key', 3600, fn)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get or store if missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::tags(['posts'])->flush()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush group by tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::lock('key', 10)->get(fn)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic lock with auto-release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::touch('key', 3600)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extend TTL (Laravel 13)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::increment('counter')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic increment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SaaS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-aside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product listing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order placement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-behind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usage metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "posts, categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "products, inventory, prices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tenants, plans, features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Octane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product browsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API-heavy workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which cache driver supports tags?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) File"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Redis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Array"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What does Cache::touch() do in Laravel 13?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Deletes a cache entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Extends TTL without read-write cycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Creates a new cache entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Checks if a key exists"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. What is the cache stampede problem?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Too many cache keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Multiple requests simultaneously recomputing expired cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Cache memory overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Slow cache writes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Which Octane server runs as a Go binary?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Swoole"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) RoadRunner"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) FrankenPHP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) ReactPHP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers: 1-c, 2-b, 3-b, 4-b"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel supports seven cache drivers → file, database, redis, dynamodb, array, null → each suited to different environments and requirements."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The Cache API provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "put"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remember"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rememberForever"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "add"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "many"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "forget"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flush"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "decrement"
        }), ", and the new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "touch()"
        }), " method for TTL extension without a read cycle."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache tags enable grouped invalidation but require Redis or Memcached."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomic locks provide distributed mutex semantics with blocking, auto-release, and cross-request locking capabilities."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis serves multiple roles → cache, queue, session, pub/sub → with Sentinel for HA and Cluster for horizontal scaling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database performance optimization centers on query analysis, composite indexing, N+1 prevention, chunking large datasets, and read/write connection separation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel Octane eliminates framework boot overhead by keeping the application in memory, with configuration for workers, service warmup, and request lifecycle events."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eager loading strategies (nested, lazy, default, constrained) prevent the N+1 problem across relationship depths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache stampede protection can be achieved with atomic locks or built-in stampede prevention in Redis/Memcached backends."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance measurement tools include Debugbar, Clockwork, Telescope, Pulse, Blackfire, and Xdebug profiles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Asset optimization through Vite bundle splitting, image optimization, font subsetting, and CDN distribution reduces client-side load times."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare file, database, and Redis cache drivers across three dimensions: latency, tag support, and operational overhead. When would you choose each one?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the cache stampede problem. Describe two strategies for preventing it and identify which cache drivers support each strategy."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "chunk()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "chunkById()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "lazy()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cursor()"
          }), " for processing large datasets? Which one is safe to use when the query conditions change as you iterate?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does Octane change the way you should use static properties and singletons? What mechanisms does Octane provide for request-scoped state?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the trade-offs between cache-aside, write-through, and write-behind caching strategies. Which one would you use for a leaderboard that must be accurate to within 5 seconds?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design and implement a multi-tier caching system for a news aggregation API."
          }), " The API serves articles from multiple sources, ordered by publish date. Requirements:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Article list pages must render under 50ms (P95) with 100,000+ articles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "New articles must appear within 30 seconds of publishing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Articles can be updated (title correction) → stale data accepted up to 5 minutes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each source can be tagged and flushed independently"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Popular articles (top 100 by views) should be cached with longer TTL"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::tags()"
            }), " with a fallback strategy for drivers that do not support tags"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a custom cache warmer that pre-loads the top 10 pages on deployment"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a Redis-backed rate limiter with atomic locks for an image processing microservice."
          }), " The service:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Accepts image uploads and generates 3 sizes (thumb, medium, full)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each user is limited to 10 uploads per minute"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each upload acquires a lock per user to prevent concurrent processing of the same image"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Locks must auto-release after 30 seconds (process timeout)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Queue a WebP conversion job if the original was JPEG, using a lock to ensure only one conversion per image"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use Redis sorted sets for the rate limit window"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement integer overflow protection for the increment counter"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimize a slow inventory report that queries 500K+ products across 50 warehouses."
          }), " The current query takes 45 seconds:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "SELECT p.*, w.name AS warehouse,\n       (SELECT COUNT(*) FROM stock_movements sm WHERE sm.product_id = p.id) AS movement_count\nFROM products p\nJOIN warehouses w ON w.id = p.warehouse_id\nWHERE p.active = 1 AND p.stock_level < p.reorder_point\nORDER BY p.stock_level ASC;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Your tasks:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add the correct composite indexes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Convert the correlated subquery to a join or a precomputed counter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement chunked export to CSV (10K rows per chunk) without consuming 2GB of memory"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::remember()"
            }), " with tag-based invalidation triggered by stock movements"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Apply read/write connection separation: the report reads from a replica, stock movements write to the primary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Measure the final query time using Telescope"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deploy Laravel Octane for a real-time collaboration platform."
          }), " The platform has:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "WebSocket connections via Laravel Reverb"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document editing with auto-save every 5 seconds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Presence indicators (who is viewing each document)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Broadcast events on document changes"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configuration tasks:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Install Octane with RoadRunner"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure 4 request workers and 2 task workers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move Reverb to a separate Octane instance"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Octane::set()"
            }), " for per-request state (current document, user session)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warm the document permission service at boot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure supervisor to restart workers after 1000 requests"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write an Octane event listener that flushes the Reverb connection pool on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WorkerStarting"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test that static state does NOT leak between requests by running 100 concurrent requests"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build and benchmark a fully cached e-commerce platform that handles 10,000 concurrent users."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your platform has: products (50K), categories (200), users (100K), orders (1M), inventory (500K stock entries), and a recommendation engine. Implement the entire caching and performance architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache Architecture:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "three-tier cache"
            }), ": L1 (array/request-scoped), L2 (Redis, 5-minute TTL), L3 (database, 30-minute TTL with stampede protection)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache::tags()"
            }), " with hierarchy: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "products"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "products:{id}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "categories"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "categories:{id}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inventory"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "cache warming"
            }), " via an Artisan command that loads the top 1,000 products by sales velocity, all categories, and the homepage hero section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Build a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "stampede firewall"
            }), " using atomic locks → when cache expires, only one process recomputes while others wait up to 2 seconds"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Performance:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create composite indexes for the 5 slowest queries identified by Telescope"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Split read/write connections: product browsing reads from 3 replicas, order placement writes to the primary with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sticky: true"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chunkById"
            }), " for the nightly order export (500K orders) that must not block writes"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Prevent N+1: configure ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Model::preventLazyLoading()"
            }), " in production to log violations to a dedicated channel"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a materialized view (PostgreSQL) for the product listing page that joins products, inventory, and average rating"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Octane Deployment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deploy Octane with Swoole, 8 workers, 4 task workers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure 4 separate Octane instances: web, API, admin, websockets"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max_requests"
            }), " to 1000 for web/API, 5000 for admin (less traffic, longer uptime)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warm: config cache, route cache, view cache, service container, feature flags, pricing engine"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Handle WebSocket connections via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "laravel-reverb"
            }), " on the websockets instance"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Configure supervisord with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stopwaitsecs=360"
            }), " for graceful shutdown"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write an Octane ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RequestTerminated"
            }), " listener that sends metrics (response time, memory, query count) to Prometheus"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching Strategy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Product listing:"
            }), " Cache-aside with tag-based invalidation on price change or stock update"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Search results:"
            }), " Write-through → index updates trigger cache update; use Redisearch for full-text"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cart:"
            }), " Write-behind → cart updates hit Redis immediately; persist to MySQL every 60 seconds or 10 changes"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inventory counts:"
            }), " Cache-aside with atomic decrement on order placement; reconcile with database every 5 minutes"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendations:"
            }), " Pre-computed nightly, stored in Redis sorted sets (user-specific), refreshed lazily on page load if older than 1 hour"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Category tree:"
            }), " Cached forever with event-driven invalidation when a category is created, updated, or deleted"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pricing engine:"
            }), " Atomic lock with 5-second hold; only one process computes prices for a product group at a time"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance Benchmarks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write a benchmark script that simulates 10,000 concurrent users using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "curl"
            }), " or custom PHP script"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Measure and report: p50, p95, p99 response time, throughput (req/s), memory per request, query count per request"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run the benchmark with caching ON and caching OFF; produce a comparison table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the top 3 bottlenecks and document your optimization approach for each"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure Pulse to show real-time metrics during the benchmark run"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate a Flame graph using Xdebug profiling for the product listing page, identifying the slowest function calls"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Failover & Resilience:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure Redis Sentinel for automatic failover when the primary Redis node goes down"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "cache degradation"
            }), " strategy: if Redis is unreachable, fall back to database reads with a 1-second TTL array cache (per-request dedup only)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test: kill the Redis primary node and verify the application continues serving degraded responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement cache warmup on Redis failover recovery → when Redis comes back, pre-load the top 100 hottest keys within 5 seconds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Log every cache degradation event to a dedicated Pulse entry type"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a runbook for each caching layer including cache key naming conventions, TTL decisions, and invalidation triggers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create a decision tree for developers: \"Should I cache this?\" with branches for data freshness requirements, access frequency, compute cost, and invalidation complexity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Draw a Mermaid architecture diagram showing the 3-tier cache, read/write DB split, Redis cluster, and Octane workers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Produce a report comparing pre-optimization vs post-optimization metrics (response time, throughput, query count, memory usage)"
          }), "\n"]
        }), "\n"]
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