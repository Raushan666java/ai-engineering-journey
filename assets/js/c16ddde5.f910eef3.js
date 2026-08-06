"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7975],{

/***/ 2465
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_20_scaling_laravel_md_c16_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-20-scaling-laravel-md-c16.json
const site_docs_courses_laravel_20_scaling_laravel_md_c16_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/20-scaling-laravel","title":"Chapter 20: Scaling Laravel","description":"---","source":"@site/docs/courses/laravel/20-scaling-laravel.md","sourceDirName":"courses/laravel","slug":"/laravel/20-scaling-laravel","permalink":"/ai-engineering-journey/laravel/20-scaling-laravel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"20-scaling-laravel","slug":"/laravel/20-scaling-laravel","title":"Chapter 20: Scaling Laravel","sidebar_label":"Chapter 20: Scaling Laravel","sidebar_position":20},"sidebar":"coursesSidebar","previous":{"title":"Chapter 19: Laravel Application Architecture Patterns","permalink":"/ai-engineering-journey/laravel/19-architecture-patterns"},"next":{"title":"Chapter 21: System Design: Laravel at Enterprise Scale","permalink":"/ai-engineering-journey/laravel/21-system-design-scale"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/20-scaling-laravel.md


const frontMatter = {
	id: '20-scaling-laravel',
	slug: '/laravel/20-scaling-laravel',
	title: 'Chapter 20: Scaling Laravel',
	sidebar_label: 'Chapter 20: Scaling Laravel',
	sidebar_position: 20
};
const contentTitle = 'Chapter 20: Scaling Laravel';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. Horizontal Scaling Fundamentals",
  "id": "1-horizontal-scaling-fundamentals",
  "level": 3
}, {
  "value": "Stateless Application Design",
  "id": "stateless-application-design",
  "level": 4
}, {
  "value": "Shared Nothing Architecture",
  "id": "shared-nothing-architecture",
  "level": 4
}, {
  "value": "Session Management",
  "id": "session-management",
  "level": 4
}, {
  "value": "Cache as Central State",
  "id": "cache-as-central-state",
  "level": 4
}, {
  "value": "Database Read Replicas",
  "id": "database-read-replicas",
  "level": 4
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "2. Laravel Vapor (Serverless)",
  "id": "2-laravel-vapor-serverless",
  "level": 3
}, {
  "value": "Vapor Configuration (<code>vapor.yml</code>)",
  "id": "vapor-configuration-vaporyml",
  "level": 4
}, {
  "value": "Deployment Flow",
  "id": "deployment-flow",
  "level": 4
}, {
  "value": "Auto-Scaling Behavior",
  "id": "auto-scaling-behavior",
  "level": 4
}, {
  "value": "Database Connection Pooling",
  "id": "database-connection-pooling",
  "level": 4
}, {
  "value": "Vapor Cache",
  "id": "vapor-cache",
  "level": 4
}, {
  "value": "Vapor Queues (SQS)",
  "id": "vapor-queues-sqs",
  "level": 4
}, {
  "value": "Vapor Cron Jobs",
  "id": "vapor-cron-jobs",
  "level": 4
}, {
  "value": "3. Laravel Cloud",
  "id": "3-laravel-cloud",
  "level": 3
}, {
  "value": "Cloud Environment Configuration",
  "id": "cloud-environment-configuration",
  "level": 4
}, {
  "value": "Auto-Scaling Databases",
  "id": "auto-scaling-databases",
  "level": 4
}, {
  "value": "CI/CD Integration",
  "id": "cicd-integration",
  "level": 4
}, {
  "value": "4. Octane Performance Tuning",
  "id": "4-octane-performance-tuning",
  "level": 3
}, {
  "value": "Swoole vs RoadRunner Comparison",
  "id": "swoole-vs-roadrunner-comparison",
  "level": 4
}, {
  "value": "Starting Octane",
  "id": "starting-octane",
  "level": 4
}, {
  "value": "In-Memory State Management",
  "id": "in-memory-state-management",
  "level": 4
}, {
  "value": "Service Bootstrapping",
  "id": "service-bootstrapping",
  "level": 4
}, {
  "value": "Event Listeners for Octane",
  "id": "event-listeners-for-octane",
  "level": 4
}, {
  "value": "Dangerous Patterns in Octane",
  "id": "dangerous-patterns-in-octane",
  "level": 4
}, {
  "value": "5. Redis Cluster",
  "id": "5-redis-cluster",
  "level": 3
}, {
  "value": "Redis Cluster Architecture",
  "id": "redis-cluster-architecture",
  "level": 4
}, {
  "value": "Configuring Laravel for Redis Cluster",
  "id": "configuring-laravel-for-redis-cluster",
  "level": 4
}, {
  "value": "Redis Sentinel for High Availability",
  "id": "redis-sentinel-for-high-availability",
  "level": 4
}, {
  "value": "Redis for Multiple Concerns",
  "id": "redis-for-multiple-concerns",
  "level": 4
}, {
  "value": "6. Database Read Replicas",
  "id": "6-database-read-replicas",
  "level": 3
}, {
  "value": "Read/Write Connection Separation",
  "id": "readwrite-connection-separation",
  "level": 4
}, {
  "value": "Usage Pattern",
  "id": "usage-pattern",
  "level": 4
}, {
  "value": "Read Replicas for Reporting and AI Queries",
  "id": "read-replicas-for-reporting-and-ai-queries",
  "level": 4
}, {
  "value": "Replication Lag Handling",
  "id": "replication-lag-handling",
  "level": 4
}, {
  "value": "7. Queue Scaling",
  "id": "7-queue-scaling",
  "level": 3
}, {
  "value": "Multiple Queue Workers on Multiple Servers",
  "id": "multiple-queue-workers-on-multiple-servers",
  "level": 4
}, {
  "value": "Horizon Balancing",
  "id": "horizon-balancing",
  "level": 4
}, {
  "value": "SQS for Virtually Unlimited Scale",
  "id": "sqs-for-virtually-unlimited-scale",
  "level": 4
}, {
  "value": "Job Prioritization",
  "id": "job-prioritization",
  "level": 4
}, {
  "value": "8. CDN (Content Delivery Network)",
  "id": "8-cdn-content-delivery-network",
  "level": 3
}, {
  "value": "CloudFront / Cloudflare Configuration",
  "id": "cloudfront--cloudflare-configuration",
  "level": 4
}, {
  "value": "Image Optimization Pipeline",
  "id": "image-optimization-pipeline",
  "level": 4
}, {
  "value": "CDN for Downloadable Content",
  "id": "cdn-for-downloadable-content",
  "level": 4
}, {
  "value": "9. Session Scaling",
  "id": "9-session-scaling",
  "level": 3
}, {
  "value": "Redis Session Driver",
  "id": "redis-session-driver",
  "level": 4
}, {
  "value": "Sticky Sessions vs Stateless Tokens",
  "id": "sticky-sessions-vs-stateless-tokens",
  "level": 4
}, {
  "value": "Sanctum for Stateless Authentication",
  "id": "sanctum-for-stateless-authentication",
  "level": 4
}, {
  "value": "10. Monitoring at Scale",
  "id": "10-monitoring-at-scale",
  "level": 3
}, {
  "value": "Laravel Pulse",
  "id": "laravel-pulse",
  "level": 4
}, {
  "value": "Custom CloudWatch/Datadog Metrics",
  "id": "custom-cloudwatchdatadog-metrics",
  "level": 4
}, {
  "value": "Key Metrics Dashboard",
  "id": "key-metrics-dashboard",
  "level": 4
}, {
  "value": "Nightwatch for Production Errors",
  "id": "nightwatch-for-production-errors",
  "level": 4
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
    details: "details",
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
        id: "chapter-20-scaling-laravel",
        children: "Chapter 20: Scaling Laravel"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design horizontally scalable Laravel applications with stateless architecture, shared-nothing principles, and Redis-backed session management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and configure Laravel Vapor for serverless AWS Lambda hosting with auto-scaling, database pooling, and queue workers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize Laravel Octane applications using Swoole or RoadRunner with in-memory state management and persistent service bootstrapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale Redis beyond a single instance using Redis Cluster hashing, Sentinel failover, and multi-purpose Redis usage for sessions, cache, queues, rate limiting, and broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure database read replicas with read/write connection separation and handle replication lag in application code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale queue workers across multiple servers using Horizon balancing, Redis Cluster backends, and SQS for unlimited throughput"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement CDN strategies for static assets, image optimization pipelines, and geo-distributed content delivery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor production Laravel applications at scale using Pulse, Nightwatch, CloudWatch, and Datadog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/laravel/20-scaling-laravel/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/20-scaling-laravel/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/20-scaling-laravel/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/20-scaling-laravel/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/20-scaling-laravel/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/20-scaling-laravel/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/20-scaling-laravel.png",
        alt: "Scaling Laravel"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-horizontal-scaling-fundamentals",
      children: "1. Horizontal Scaling Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Horizontal scaling adds more servers to distribute load, while vertical scaling upgrades a single server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizontal scaling adds more application servers rather than making a single server larger. Laravel applications must be designed as stateless, share-nothing processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stateless-application-design",
      children: "Stateless Application Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A horizontally scalable Laravel instance stores zero important data in local memory or local files:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────┐  ┌─────────────┐  ┌─────────────┐\n│  App Node 1  │  │  App Node 2  │  │  App Node 3  │\n│  (ephemeral) │  │  (ephemeral) │  │  (ephemeral) │\n└──────┬───────┘  └──────┬───────┘  └──────┬───────┘\n       │                 │                 │\n       └─────────────────┼─────────────────┘\n                         │\n          ┌──────────────┴──────────────┐\n          │         Redis (state)        │\n          │  sessions · cache · queues   │\n          └──────────────┬──────────────┘\n                         │\n          ┌──────────────┴──────────────┐\n          │    Database (persistence)    │\n          │  primary + read replicas     │\n          └─────────────────────────────┘\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where to Store"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis or database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File session (local disk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis or Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File cache (local disk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uploaded files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3, Cloud Storage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Local ", (0,jsx_runtime.jsx)(_components.code, {
              children: "storage/app/public"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudWatch, DataDog, Papertrail"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Local ", (0,jsx_runtime.jsx)(_components.code, {
              children: "storage/logs/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queued jobs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis, SQS, Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync driver"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiter state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "shared-nothing-architecture",
      children: "Shared Nothing Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each request must be self-contained. Avoid:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Anti-pattern: storing state in static properties\nclass UserService\n{\n    private static array $cache = [];\n\n    public function find(int $id): User\n    {\n        if (!isset(self::$cache[$id])) {\n            self::$cache[$id] = User::find($id);\n        }\n        return self::$cache[$id];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use Redis for all cross-request state:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class UserService\n{\n    public function __construct(\n        private \\Illuminate\\Contracts\\Cache\\Repository $cache\n    ) {}\n\n    public function find(int $id): User\n    {\n        return $this->cache->remember(\"user.{$id}\", 3600, function () use ($id) {\n            return User::findOrFail($id);\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "session-management",
      children: "Session Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure session driver for horizontal scaling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/session.php\n'driver' => env('SESSION_DRIVER', 'redis'),\n\n'connection' => 'session',\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "database"
      }), " driver also works but increases latency:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'driver' => 'database', // Works across servers, slower than Redis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-as-central-state",
      children: "Cache as Central State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/cache.php\n'default' => env('CACHE_DRIVER', 'redis'),\n\n'stores' => [\n    'redis' => [\n        'driver' => 'redis',\n        'connection' => 'cache',\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-read-replicas",
      children: "Database Read Replicas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizontal scaling requires read replicas to prevent the database from becoming the bottleneck:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/database.php\n'mysql' => [\n    'driver' => 'mysql',\n    'read' => [\n        'host' => [\n            env('DB_READ_HOST_1', '127.0.0.1'),\n            env('DB_READ_HOST_2', '127.0.0.1'),\n        ],\n    ],\n    'write' => [\n        'host' => [\n            env('DB_WRITE_HOST', '127.0.0.1'),\n        ],\n    ],\n    'database' => env('DB_DATABASE', 'forge'),\n    // ...\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Horizontal Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add more servers to handle increased load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use load balancers and auto-scaling groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Vapor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless Laravel on AWS Lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scales from zero to thousands of requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Octane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swoole/RR-based performance boost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persist framework in memory between requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Redis for caching and sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Redis Cluster for multi-node caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate read DB connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure read/write connections in database.php"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple queue workers across servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Horizon for queue monitoring and scaling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[User] --> B[Load Balancer]     B --> C[Web Server Pool]     C --> D[App Servers - Octane]     D --> E[Redis Cluster]     D --> F[DB Primary]     F --> G[Read Replicas]     D --> H[Queue Workers]     C --> I[CDN]     J[Vapor] --> C "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-laravel-vapor-serverless",
      children: "2. Laravel Vapor (Serverless)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Vapor runs Laravel on AWS Lambda, auto-scaling from zero to thousands of concurrent requests."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vapor runs Laravel on AWS Lambda, abstracting server management entirely."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "vapor-configuration-vaporyml",
      children: ["Vapor Configuration (", (0,jsx_runtime.jsx)(_components.code, {
        children: "vapor.yml"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "id: 12345\nname: my-production-app\nenvironments:\n  production:\n    domain: api.example.com\n    memory: 1024\n    runtime: 'php-8.3:al2'\n    storage: my-production-storage-bucket\n    assets:\n      - url: /\n        directory: public\n      - url: /storage\n        directory: storage/app/public\n    databases:\n      - name: my-production-db\n        type: mysql\n        capacity: STANDARD\n        high_availability: true\n        auto_scale: true\n        max_scale: 16\n        min_scale: 2\n    cache:\n      - name: my-production-cache\n        type: redis\n        capacity: 1\n        high_availability: true\n    queues:\n      - name: default\n        type: sqs\n        concurrency: 10\n      - name: high\n        type: sqs\n        concurrency: 5\n    cli: php artisan my:custom-command\n    warm: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deployment-flow",
      children: "Deployment Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Deploy to Vapor\nvapor deploy production\n\n# Vapor handles:\n#   1. Builds PHP Lambda layer\n#   2. Uploads assets to S3 + CloudFront\n#   3. Runs database migrations\n#   4. Configures API Gateway\n#   5. Warms N concurrent Lambda containers\n#   6. Switches traffic to new version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "auto-scaling-behavior",
      children: "Auto-Scaling Behavior"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scaling Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Timeframe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent requests > provisioned concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda allocates more instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database CPU > 80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aurora auto-scales read replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache memory > 75%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticache scales vertically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue backlog depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda workers scale to process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-connection-pooling",
      children: "Database Connection Pooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vapor uses RDS Proxy between Lambda and Aurora:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Lambda Instance → RDS Proxy → Aurora Cluster\n     │                             │\n     │  Connection pooling         │  Read/write replicas\n     │  IAM authentication         │  Auto-scaling\n     │  Minimal cold start latency  │  Multi-AZ\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure the proxy in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/database.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'mysql' => [\n    'driver' => 'mysql',\n    'host' => env('DB_HOST'),\n    'port' => env('DB_PORT', 3306),\n    'database' => env('DB_DATABASE'),\n    'username' => env('DB_USERNAME'),\n    'password' => env('DB_PASSWORD'),\n    'engine' => 'mysql',\n    'unix_socket' => env('DB_SOCKET', ''),\n    'charset' => 'utf8mb4',\n    'collation' => 'utf8mb4_unicode_ci',\n    'prefix' => '',\n    'prefix_indexes' => true,\n    'strict' => true,\n    'options' => extension_loaded('pdo_mysql') ? array_filter([\n        PDO::ATTR_EMULATE_PREPARES => false,\n        PDO::MYSQL_ATTR_LOCAL_INFILE => false,\n        PDO::MYSQL_ATTR_MAX_BUFFER_SIZE => 1024 * 1024 * 100,\n        PDO::ATTR_PERSISTENT => true,\n    ]) : [],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vapor-cache",
      children: "Vapor Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Stored in ElastiCache Redis — persists across Lambda executions\nCache::store('vapor')->put('key', 'value', 3600);\n$value = Cache::store('vapor')->get('key');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vapor-queues-sqs",
      children: "Vapor Queues (SQS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Dispatches to SQS, processed by Lambda workers\ndispatch(new ProcessPodcast($podcast))->onQueue('default');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Vapor processes queue jobs via Lambda workers\n// Each job runs in its own Lambda invocation\n// Concurrency set in vapor.yml\nclass ProcessPodcast implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public int $timeout = 120;\n\n    public function handle(): void\n    {\n        // Job logic here — each invocation is isolated\n        // Database connections managed by RDS Proxy\n        // Cache available via Vapor cache store\n    }\n\n    public function failed(\\Throwable $e): void\n    {\n        Log::error('Podcast processing failed', [\n            'podcast_id' => $this->podcast->id,\n            'error' => $e->getMessage(),\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vapor-cron-jobs",
      children: "Vapor Cron Jobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# vapor.yml\nschedules:\n  - command: subscriptions:process-recurring\n    rate: everyMinute\n    name: Process recurring subscriptions\n  - command: reports:generate-daily\n    rate: '0 2 * * *'\n    name: Generate daily reports\n  - command: cleanup:expired-tokens\n    rate: '0 */6 * * *'\n    name: Clean expired tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use Vapor vapor.yml deploy file to define build commands, worker counts, and environment variables per environment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-laravel-cloud",
      children: "3. Laravel Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel Cloud provides managed hosting with auto-scaling, databases, queues, and domains."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel Cloud is a managed PaaS with LAN-connected services, auto-scaling databases, and native CI/CD."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cloud-environment-configuration",
      children: "Cloud Environment Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .cloud/production.yaml\nid: 12345\nname: production\nregion: us-east-1\ndatabase:\n  type: aurora\n  engine: mysql\n  min: 2\n  max: 16\n  auto_pause: false\ncache:\n  type: redis\n  size: 3\n  high_availability: true\nqueue:\n  type: sqs\n  concurrency: 10\nassets:\n  type: s3-cloudfront\n  cdn: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LAN-connected services eliminate network latency between app, database, cache, and queue:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "App Container ──LAN──→ Aurora Database\n     │                  (sub-millisecond latency)\n     ├──LAN──→ ElastiCache Redis\n     ├──LAN──→ SQS Queue\n     └──LAN──→ S3 Assets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "auto-scaling-databases",
      children: "Auto-Scaling Databases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aurora Serverless v2 scales from 0 to 256 ACU (Aurora Capacity Units). Configure min/max in the Cloud dashboard or YAML. Zero capacity when paused (cost savings), resume in ~30 seconds on first request."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cicd-integration",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .cloud/ci.yaml\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      mysql:\n        image: mysql:8.0\n        env:\n          MYSQL_ALLOW_EMPTY_PASSWORD: yes\n          MYSQL_DATABASE: testing\n    steps:\n      - uses: actions/checkout@v4\n      - uses: ./.cloud/actions/setup\n      - run: vendor/bin/phpunit\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: cloud deploy production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-octane-performance-tuning",
      children: "4. Octane Performance Tuning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Octane boots Laravel once and keeps it in memory using Swoole or RoadRunner workers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel Octane boots your application once and keeps it in memory across requests using Swoole or RoadRunner."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "swoole-vs-roadrunner-comparison",
      children: "Swoole vs RoadRunner Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swoole"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RoadRunner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP extension (swoole.so)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go binary (standalone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coroutine-based async I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goroutine-per-request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pecl install swoole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary download, no PHP extension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage per worker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30-50 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~25-40 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via plugin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (coroutine stack traces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (sync per request)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very mature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature, growing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "starting-octane",
      children: "Starting Octane"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Swoole\nphp artisan octane:start --server=swoole --host=0.0.0.0 --port=8080 --workers=8\n\n# RoadRunner\nphp artisan octane:start --server=roadrunner --host=0.0.0.0 --port=8080 --workers=8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/octane.php"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'workers' => env('OCTANE_WORKERS', 8),\n'max_requests' => 500,\n'task_workers' => env('OCTANE_TASK_WORKERS', 4),\n'max_request_time' => 30,\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "in-memory-state-management",
      children: "In-Memory State Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Octane keeps state in memory across requests. Use Octane's state management intentionally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Laravel\\Octane\\Facades\\Octane;\n\n// Get or set application-level state\n$counter = Octane::get('request_counter', 0);\nOctane::set('request_counter', ++$counter);\n\n// Table storage (pre-allocated fixed-size tables)\nOctane::table('api_keys', 1000, 255);\nOctane::table('api_keys')->set('user_1', ['key' => 'abc123', 'hits' => 0]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "service-bootstrapping",
      children: "Service Bootstrapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Services that should be created once and reused across requests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/octane.php\n'listeners' => [\n    // Services to warm on boot\n    \\App\\Services\\PaymentGateway::class => fn () => app(\\App\\Services\\PaymentGateway::class),\n],\n\n'warm' => [\n    ...,\n    \\App\\Services\\PaymentGateway::class,\n    \\App\\Services\\GeocodingService::class,\n    \\App\\Services\\RecommendationEngine::class,\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-listeners-for-octane",
      children: "Event Listeners for Octane"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Octane emits lifecycle events for connection and request management:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Providers;\n\nuse Illuminate\\Support\\ServiceProvider;\nuse Laravel\\Octane\\Events\\RequestReceived;\nuse Laravel\\Octane\\Events\\RequestHandled;\nuse Laravel\\Octane\\Events\\WorkerStarting;\nuse Laravel\\Octane\\Events\\WorkerStopping;\n\nclass OctaneServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        // Runs once when each worker starts\n        Event::listen(WorkerStarting::class, function ($event) {\n            config(['app.worker_id' => $event->workerId]);\n            Log::info(\"Worker {$event->workerId} starting\");\n        });\n\n        // Runs before each request\n        Event::listen(RequestReceived::class, function ($event) {\n            $event->sandbox->singleton(\n                \\App\\Services\\CurrentRequestContext::class,\n                fn () => new \\App\\Services\\CurrentRequestContext()\n            );\n        });\n\n        // Runs after each request\n        Event::listen(RequestHandled::class, function ($event) {\n            // Cleanup per-request state\n            if ($event->sandbox->resolved(\\App\\Services\\CurrentRequestContext::class)) {\n                $event->sandbox->make(\\App\\Services\\CurrentRequestContext::class)->reset();\n            }\n        });\n\n        // Runs when worker stops\n        Event::listen(WorkerStopping::class, function ($event) {\n            Log::info(\"Worker {$event->workerId} stopping after {$event->requests} requests\");\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dangerous-patterns-in-octane",
      children: "Dangerous Patterns in Octane"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────────────────┐\n│                        Octane Anti-Patterns                            │\n├─────────────────────────────────────────────────────────────────────────┤\n│                                      │                                 │\n│  Global state in static properties    →  Shared across requests         │\n│  Facade with deferred resolution       →  Resolution happens once        │\n│  Locally scoped cache without flush    →  Stale data persists forever    │\n│  Unclosed database transactions        →  Held across requests           │\n│  Memory accumulation in arrays         →  Worker grows over time         │\n│  Singletons with mutable state         →  Corrupted by concurrent reqs  │\n│                                                                         │\n└─────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Octane requires careful attention to static state. Avoid storing request-specific data in class properties or singletons."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-redis-cluster",
      children: "5. Redis Cluster"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Redis Cluster distributes data across multiple nodes for high-availability caching at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a single Redis instance can't keep up with memory or throughput demands, Redis Cluster distributes data across multiple nodes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-cluster-architecture",
      children: "Redis Cluster Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client\n  │\n  ├── Hash slot 0-5460   → Redis Node A (master + replica)\n  ├── Hash slot 5461-10922 → Redis Node B (master + replica)\n  └── Hash slot 10923-16383 → Redis Node C (master + replica)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key routing uses CRC16 modulo 16384:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "slot = CRC16(\"user:12345\") % 16384\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuring-laravel-for-redis-cluster",
      children: "Configuring Laravel for Redis Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/database.php\n'redis' => [\n    'client' => 'phpredis',\n    'options' => [\n        'cluster' => 'redis',\n    ],\n    'clusters' => [\n        'default' => [\n            [\n                'host' => env('REDIS_CLUSTER_HOST_1', '127.0.0.1'),\n                'port' => env('REDIS_CLUSTER_PORT_1', 6379),\n                'database' => 0,\n            ],\n            [\n                'host' => env('REDIS_CLUSTER_HOST_2', '127.0.0.1'),\n                'port' => env('REDIS_CLUSTER_PORT_2', 6379),\n                'database' => 0,\n            ],\n            [\n                'host' => env('REDIS_CLUSTER_HOST_3', '127.0.0.1'),\n                'port' => env('REDIS_CLUSTER_PORT_3', 6379),\n                'database' => 0,\n            ],\n        ],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-sentinel-for-high-availability",
      children: "Redis Sentinel for High Availability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sentinel provides automatic failover:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────┐\n│                   Sentinel                      │\n│  Monitors: Node A (master), Node B (slave),     │\n│  Node C (slave). If A fails, promote B.         │\n└─────────────────────────────────────────────────┘\n\nLaravel config connects via sentinel service:\n\n'sentinel' => [\n    'hosts' => [\n        env('SENTINEL_HOST_1', '10.0.0.1:26379'),\n        env('SENTINEL_HOST_2', '10.0.0.2:26379'),\n        env('SENTINEL_HOST_3', '10.0.0.3:26379'),\n    ],\n    'service' => 'mymaster',\n    'options' => [\n        'parameters' => ['password' => env('REDIS_PASSWORD', '')],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-for-multiple-concerns",
      children: "Redis for Multiple Concerns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Separate Redis connections for different concerns\n'redis' => [\n    'client' => 'phpredis',\n    'default' => [\n        'host' => env('REDIS_HOST', '127.0.0.1'),\n        'password' => env('REDIS_PASSWORD'),\n        'port' => env('REDIS_PORT', 6379),\n        'database' => 0, // Sessions\n    ],\n    'cache' => [\n        'host' => env('REDIS_HOST', '127.0.0.1'),\n        'password' => env('REDIS_PASSWORD'),\n        'port' => env('REDIS_PORT', 6379),\n        'database' => 1, // Cache\n    ],\n    'queue' => [\n        'host' => env('REDIS_HOST', '127.0.0.1'),\n        'password' => env('REDIS_PASSWORD'),\n        'port' => env('REDIS_PORT', 6379),\n        'database' => 2, // Queues\n    ],\n    'broadcast' => [\n        'host' => env('REDIS_HOST', '127.0.0.1'),\n        'password' => env('REDIS_PASSWORD'),\n        'port' => env('REDIS_PORT', 6379),\n        'database' => 3, // Broadcasting\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-database-read-replicas",
      children: "6. Database Read Replicas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Read replicas offload SELECT queries from the primary database, improving write throughput."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read replicas offload SELECT queries from the primary database, preserving write capacity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "readwrite-connection-separation",
      children: "Read/Write Connection Separation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/database.php\n'mysql' => [\n    'read' => [\n        'host' => [\n            env('DB_READ_HOST_1', 'replica1.example.com'),\n            env('DB_READ_HOST_2', 'replica2.example.com'),\n        ],\n    ],\n    'write' => [\n        'host' => [\n            env('DB_WRITE_HOST', 'primary.example.com'),\n        ],\n    ],\n    'sticky' => env('DB_STICKY', true), // Important for replication lag\n    'driver' => 'mysql',\n    'database' => env('DB_DATABASE'),\n    'username' => env('DB_USERNAME'),\n    'password' => env('DB_PASSWORD'),\n    'charset' => 'utf8mb4',\n    'collation' => 'utf8mb4_unicode_ci',\n    'prefix' => '',\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sticky"
      }), " option ensures that writes are followed by reads on the same connection for the duration of the request, preventing the user from seeing stale data immediately after a write."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "usage-pattern",
      children: "Usage Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel automatically routes queries:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Goes to the WRITE connection\nUser::create([...]);\nUser::where('id', 5)->update([...]);\nDB::insert(...);\nDB::update(...);\n\n// Goes to a READ connection\nUser::find(5);\nUser::where('status', 'active')->get();\nDB::select('SELECT * FROM users');\n\n// Explicitly force write for stale-sensitive reads:\n$user = DB::connection('mysql::write')->select('SELECT ...');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read-replicas-for-reporting-and-ai-queries",
      children: "Read Replicas for Reporting and AI Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heavy analytical queries should explicitly use the read connection:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Services\\Reporting;\n\nuse Illuminate\\Support\\Facades\\DB;\n\nclass RevenueReportService\n{\n    public function monthlyRevenueByPlan(int $year): array\n    {\n        return DB::connection('mysql_read')\n            ->table('subscriptions')\n            ->selectRaw(\"\n                plan_id,\n                MONTH(created_at) as month,\n                COUNT(*) as new_subscriptions,\n                SUM(amount) as revenue\n            \")\n            ->whereYear('created_at', $year)\n            ->groupBy('plan_id', 'month')\n            ->get()\n            ->toArray();\n    }\n\n    public function churnRate(\\Carbon\\Carbon $start, \\Carbon\\Carbon $end): float\n    {\n        $result = DB::connection('mysql_read')\n            ->table('subscriptions')\n            ->selectRaw(\"\n                (SELECT COUNT(*) FROM subscriptions\n                 WHERE status = 'canceled'\n                 AND canceled_at BETWEEN ? AND ?) * 100.0 /\n                NULLIF((SELECT COUNT(*) FROM subscriptions\n                 WHERE created_at < ?), 0) as churn_rate\n            \", [$start, $end, $end])\n            ->first();\n\n        return round($result->churn_rate, 2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "replication-lag-handling",
      children: "Replication Lag Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Replication lag means a read replica may be seconds behind the primary. Strategies:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sticky"
            }), " option"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session sticks to write connection after write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra connection per user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-after-write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache the written data for immediate reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route after delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send reads to primary for N seconds after write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write connection overload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eventually-consistent UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show \"saving...\" indicator, accept stale data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UX complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SubscriptionService\n{\n    public function create(array $data): Subscription\n    {\n        $subscription = Subscription::create($data);\n\n        // Cache the result for immediate reads\n        Cache::put(\"subscription.{$subscription->id}\", $subscription, 60);\n\n        return $subscription;\n    }\n\n    public function find(int $id): ?Subscription\n    {\n        // Check cache first (written on create)\n        return Cache::remember(\"subscription.{$id}\", 60, function () use ($id) {\n            return Subscription::find($id); // May lag, but cache covers it\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Configure separate read/write connections in config/database.php using the read key to specify replica hosts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-queue-scaling",
      children: "7. Queue Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Multiple queue workers across servers process jobs in parallel; Horizon manages the fleet."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queue throughput determines how fast asynchronous work processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multiple-queue-workers-on-multiple-servers",
      children: "Multiple Queue Workers on Multiple Servers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─ App Server 1 ─┐    ┌─ Worker Pool A ─┐\n│  Web requests   │    │  php artisan    │\n│  + dispatch jobs│    │  queue:work     │\n└─────────────────┘    └────────┬────────┘\n                               │\n                    ┌──────────┴──────────┐\n                    │       Redis/SQS      │\n                    │    (queue backend)   │\n                    └──────────┬──────────┘\n                               │\n┌──────────────────────────────┼──────────────────────────┐\n│         Worker Pool B        │       Worker Pool C      │\n│  php artisan queue:work      │  php artisan queue:work  │\n│  --queue=high,default        │  --queue=default,low     │\n└──────────────────────────────┴──────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each worker server runs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Supervisor configuration\n[program:laravel-worker]\nprocess_name=%(program_name)s_%(process_num)02d\ncommand=php /var/www/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600\nautostart=true\nautorestart=true\nnumprocs=8\nuser=forge\nredirect_stderr=true\nstdout_logfile=/var/log/supervisor/worker.log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "horizon-balancing",
      children: "Horizon Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Horizon provides a dashboard and auto-scaling worker configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/horizon.php\n'environments' => [\n    'production' => [\n        'supervisor-1' => [\n            'connection' => 'redis',\n            'queue' => ['high', 'default', 'low'],\n            'balance' => 'auto',          // Auto-balance across workers\n            'autoScaling' => true,         // Scale workers based on workload\n            'minProcesses' => 3,\n            'maxProcesses' => 20,\n            'tries' => 3,\n            'timeout' => 60,\n        ],\n        'supervisor-2' => [\n            'connection' => 'redis',\n            'queue' => ['reports', 'exports'],\n            'balance' => 'simple',         // Fixed worker count\n            'processes' => 5,\n            'tries' => 1,\n            'timeout' => 600,\n        ],\n    ],\n],\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Balance Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "simple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed workers per queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjusts workers by queue backlog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default round-robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sqs-for-virtually-unlimited-scale",
      children: "SQS for Virtually Unlimited Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQS has no upper limit on throughput. Queues scale to handle any number of messages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/queue.php\n'connections' => [\n    'sqs' => [\n        'driver' => 'sqs',\n        'key' => env('AWS_ACCESS_KEY_ID'),\n        'secret' => env('AWS_SECRET_ACCESS_KEY'),\n        'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account'),\n        'queue' => env('SQS_QUEUE', 'default'),\n        'suffix' => env('SQS_SUFFIX'),\n        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),\n        'after_commit' => false,\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "job-prioritization",
      children: "Job Prioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// High priority\ndispatch(new ProcessPayment($payment))->onQueue('high');\n\n// Default priority\ndispatch(new SendWelcomeEmail($user))->onQueue('default');\n\n// Low priority\ndispatch(new GenerateReport($report))->onQueue('low');\n\n// Worker picks in order: high → default → low\nphp artisan queue:work redis --queue=high,default,low\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-cdn-content-delivery-network",
      children: "8. CDN (Content Delivery Network)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CDNs cache static assets at edge locations, reducing origin server load and latency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CDN distributes static assets geographically, reducing latency and origin server load."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cloudfront--cloudflare-configuration",
      children: "CloudFront / Cloudflare Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User in Tokyo\n    │\n    ├── CloudFront Edge (Tokyo)  ──cache hit──→  User gets asset\n    │       │\n    │       └── cache miss\n    │           │\n    │           └── Origin (us-east-1 S3 / App Server)\n    │\n    ├── CloudFront Edge (London)  ──cache hit──→  Other user\n    │\n    └── CloudFront Edge (São Paulo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel Mix / Vite integration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// vite.config.js\nimport { defineConfig } from 'vite';\nimport laravel from 'laravel-vite-plugin';\n\nexport default defineConfig({\n    plugins: [\n        laravel({\n            input: ['resources/css/app.css', 'resources/js/app.js'],\n            refresh: true,\n        }),\n    ],\n    build: {\n        // Use absolute CDN URLs in production\n        base: process.env.APP_ENV === 'production'\n            ? 'https://d2u3w4c5.cloudfront.net/build/'\n            : '/build/',\n    },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set CDN URLs in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ASSET_URL=https://d2u3w4c5.cloudfront.net\nMIX_ASSET_URL=\"${ASSET_URL}\"\nVITE_ASSET_URL=\"${ASSET_URL}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "image-optimization-pipeline",
      children: "Image Optimization Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Services\\Media;\n\nuse Illuminate\\Support\\Facades\\Storage;\nuse Intervention\\Image\\ImageManager;\nuse Illuminate\\Http\\UploadedFile;\n\nclass ImageOptimizer\n{\n    public function __construct(\n        private ImageManager $manager,\n        private string $cdnDisk = 's3-cdn'\n    ) {}\n\n    public function optimizeAndUpload(\n        UploadedFile $file,\n        string $path,\n        array $sizes = [\n            'sm' => 320,\n            'md' => 768,\n            'lg' => 1200,\n            'xl' => 1920,\n        ]\n    ): array {\n        $source = $this->manager->read($file);\n        $paths = [];\n\n        foreach ($sizes as $label => $width) {\n            $resized = $source->scale(width: $width);\n            $filename = \"{$path}/{$label}-{$file->hashName()}\";\n\n            // Optimize with 80% quality\n            $encoded = (string) $resized->toWebp(quality: 80);\n\n            Storage::disk($this->cdnDisk)->put(\n                $filename,\n                $encoded,\n                'public'\n            );\n\n            $paths[$label] = Storage::disk($this->cdnDisk)->url($filename);\n        }\n\n        return $paths;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cdn-for-downloadable-content",
      children: "CDN for Downloadable Content"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate signed CloudFront URLs for protected content:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Storage;\n\nclass DownloadService\n{\n    public function signedDownloadUrl(string $path, int $expiresInMinutes = 60): string\n    {\n        $disk = Storage::disk('s3');\n\n        // CloudFront signed URL with key pair\n        $client = $disk->getClient();\n        $cloudFrontClient = new \\Aws\\CloudFront\\CloudFrontClient([\n            'region' => 'us-east-1',\n            'version' => 'latest',\n        ]);\n\n        $resourceKey = config('filesystems.disks.s3.cdn_url') . '/' . $path;\n        $expires = now()->addMinutes($expiresInMinutes)->timestamp;\n\n        $signedUrl = $cloudFrontClient->getSignedUrl([\n            'url' => $resourceKey,\n            'expires' => $expires,\n            'private_key' => storage_path('cloudfront-private-key.pem'),\n            'key_pair_id' => config('filesystems.cloudfront_key_pair_id'),\n        ]);\n\n        return $signedUrl;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-session-scaling",
      children: "9. Session Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Centralized Redis sessions allow any web server to handle any user request."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple application servers must share session state."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis-session-driver",
      children: "Redis Session Driver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/session.php\n'driver' => 'redis',\n'connection' => 'sessions',\n'lifetime' => 120,\n'expire_on_close' => true,\n'encrypt' => true, // Encrypt session data at rest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sticky-sessions-vs-stateless-tokens",
      children: "Sticky Sessions vs Stateless Tokens"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Con"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sticky sessions (ELB cookie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, no code changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uneven load, server loss kills sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even load, fault-tolerant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis is a dependency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sanctum API tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully stateless, no server affinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token revocation requires a check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sanctum-for-stateless-authentication",
      children: "Sanctum for Stateless Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/sanctum.php\n'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(\n    '%s%s',\n    'localhost,localhost:3000,localhost:8000,::1',\n    env('APP_URL') ? ',' . parse_url(env('APP_URL'), PHP_URL_HOST) : ''\n))),\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API token authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Generate token on login\n$token = $user->createToken('api-token', ['read', 'write'])->plainTextToken;\n\n// Return to client\nreturn response()->json(['token' => $token]);\n\n// Middleware handles verification — no session storage needed\n// Token is hashed and stored in DB, verified on every request\nRoute::middleware('auth:sanctum')->group(function () {\n    Route::get('/user', fn (Request $r) => $r->user());\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-monitoring-at-scale",
      children: "10. Monitoring at Scale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel Pulse, Horizon, and third-party tools provide real-time insights into application health."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without monitoring, scaling decisions are guesses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "laravel-pulse",
      children: "Laravel Pulse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pulse provides real-time application monitoring:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/pulse.php\n'recorders' => [\n    \\Laravel\\Pulse\\Recorders\\CacheInteractions::class => [\n        'enabled' => env('PULSE_CACHE_ENABLED', true),\n    ],\n    \\Laravel\\Pulse\\Recorders\\SlowJobs::class => [\n        'enabled' => true,\n        'threshold' => 1000, // ms\n    ],\n    \\Laravel\\Pulse\\Recorders\\SlowOutgoingRequests::class => [\n        'enabled' => true,\n        'threshold' => 500,\n    ],\n    \\Laravel\\Pulse\\Recorders\\SlowQueries::class => [\n        'enabled' => true,\n        'threshold' => 100, // ms\n    ],\n    \\Laravel\\Pulse\\Recorders\\UserRequests::class => [\n        'enabled' => true,\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Capture custom Pulse records:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Laravel\\Pulse\\Facades\\Pulse;\n\nclass SubscriptionService\n{\n    public function create(array $data): Subscription\n    {\n        $start = microtime(true);\n\n        $subscription = Subscription::create($data);\n\n        // Record custom metric\n        Pulse::record('subscription_creation_time', (microtime(true) - $start) * 1000)\n            ->avg()\n            ->max();\n\n        // Increment counter per plan\n        Pulse::increment('subscription_count', $data['plan_id']);\n\n        return $subscription;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "custom-cloudwatchdatadog-metrics",
      children: "Custom CloudWatch/Datadog Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Services\\Monitoring;\n\nuse Aws\\CloudWatch\\CloudWatchClient;\n\nclass CloudWatchMetrics\n{\n    public function __construct(\n        private CloudWatchClient $cloudwatch\n    ) {}\n\n    public function recordQueueDepth(string $queue, int $depth): void\n    {\n        $this->cloudwatch->putMetricData([\n            'Namespace' => 'Laravel/Production',\n            'MetricData' => [\n                [\n                    'MetricName' => 'QueueDepth',\n                    'Dimensions' => [\n                        ['Name' => 'Queue', 'Value' => $queue],\n                    ],\n                    'Value' => $depth,\n                    'Unit' => 'Count',\n                    'Timestamp' => now()->toIso8601String(),\n                ],\n            ],\n        ]);\n    }\n\n    public function recordResponseTime(float $milliseconds, string $route): void\n    {\n        $this->cloudwatch->putMetricData([\n            'Namespace' => 'Laravel/Production',\n            'MetricData' => [\n                [\n                    'MetricName' => 'ResponseTime',\n                    'Dimensions' => [\n                        ['Name' => 'Route', 'Value' => $route],\n                    ],\n                    'Value' => $milliseconds,\n                    'Unit' => 'Milliseconds',\n                ],\n            ],\n        ]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-metrics-dashboard",
      children: "Key Metrics Dashboard"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Warning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests/min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+50% baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+200% baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P95 response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize query/route"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5xx responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback or investigate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backlog depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">10000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">80% pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">95% pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS Proxy / scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hit rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review cache strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">128MB/req"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">256MB/req"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile memory leaks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nightwatch-for-production-errors",
      children: "Nightwatch for Production Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/nightwatch.php\nreturn [\n    'api_key' => env('NIGHTWATCH_API_KEY'),\n    'environment' => env('APP_ENV'),\n    'ingest' => [\n        'exceptions' => true,\n        'logs' => true,\n        'queries' => [\n            'enabled' => true,\n            'slow' => 100, // ms — captures slow queries\n        ],\n        'requests' => true,\n        'schedule' => true,\n        'jobs' => true,\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nightwatch captures and groups production errors with full stack traces, request context, and database queries — critical for post-deployment monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vapor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless Lambda execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scales to zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cold start latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Octane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent in-memory app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatic throughput increase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static state risks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Laravel platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero ops overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor lock-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operational complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan octane:start --server=swoole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start Octane with Swoole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan vapor:deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy to Laravel Vapor"
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
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vapor/Cloud + Octane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling, high throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica lag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low global latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is Laravel Octane's primary optimization?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Faster database queries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Persistent in-memory application across requests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Compressed responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Async database connections"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Octane boots Laravel once and keeps it in memory using Swoole or RoadRunner workers."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Laravel deployment platform runs on AWS Lambda?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Laravel Forge"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Laravel Vapor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Laravel Cloud"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Laravel Envoyer"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Laravel Vapor runs on AWS Lambda with auto-scaling serverless infrastructure."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the recommended approach for scaling sessions across multiple web servers?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) File-based sessions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Database sessions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Centralized Redis sessions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Cookie-based sessions"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Centralized Redis sessions allow any web server to handle any user request."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What tool provides real-time application monitoring for Laravel?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Telescope"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Horizon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Pulse"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** Pulse provides real-time metrics, Horizon monitors queues, and Telescope debugs requests."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Horizontal scaling requires stateless application design with all shared state stored in Redis, database, or S3 — never in local memory or files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel Vapor abstracts server management entirely by running on AWS Lambda, with SQS queues, RDS Proxy connection pooling, and ElastiCache Redis for state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laravel Cloud provides a managed PaaS with LAN-connected services, auto-scaling Aurora databases, and native CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Octane boots the framework once and serves thousands of requests per worker using Swoole or RoadRunner, but requires careful management of in-memory state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis Cluster distributes data across multiple nodes using CRC16 hash slots, while Redis Sentinel provides automatic failover for high availability"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Database read replicas offload SELECT queries from the primary; the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sticky"
        }), " option and caching strategies mitigate replication lag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Queue workers scale by adding more servers running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "queue:work"
        }), ", with Horizon providing auto-balancing across queues based on backlog depth"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CDNs reduce latency and origin load by serving static assets from edge locations; signed URLs protect private downloadable content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session scaling requires a shared Redis backend or stateless API tokens; Sanctum tokens eliminate server affinity entirely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitoring at scale requires real-time metrics from Pulse, production error tracking from Nightwatch, and custom CloudWatch/Datadog metrics for queue depth, response time, and throughput"
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
          children: "Explain the difference between sticky sessions and Redis-backed sessions in the context of horizontal scaling. Under what conditions would each approach fail?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare Swoole and RoadRunner as Octane backends. Why might a team choose RoadRunner over Swoole for an existing Laravel application?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does RDS Proxy solve the database connection problem in serverless Laravel (Vapor)? What would happen without it when Lambda scales to 100 concurrent invocations?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the CRC16 hash slot mechanism in Redis Cluster? How does it determine which node stores a given key, and what happens when a node is added or removed?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the difference between Laravel Pulse and Nightwatch. What type of monitoring problem does each tool solve?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a scaling strategy for a SaaS application"
          }), ": A Laravel SaaS application receives 5,000 requests/second at peak, stores 2TB of user-uploaded images, has 500K active users with sessions, runs 200K queued jobs daily, and generates 50MB of logs per hour. Design the full infrastructure with specific services, instance counts, Redis memory sizing, and database topology."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Horizon for a multi-tenant queue"
          }), ": A platform serves 50 tenants with varying traffic. Each tenant has \"critical\" jobs (sub-second latency needed) and \"background\" jobs (up to 5 minutes). Write the Horizon configuration that auto-scales workers per tenant and prioritizes critical jobs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement replication-lag-safe reporting"
          }), ": A reporting module queries subscription data for CEO-facing dashboards. The data must be no more than 30 seconds stale. The application grows at 10K new subscriptions per hour. Design and implement the query strategy using read replicas with a fallback mechanism that switches to the primary when lag exceeds the threshold."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A rapidly growing Laravel marketplace handles 50,000 orders per hour, 2 million product views per day, and serves users across North America, Europe, and Asia. The current architecture is a single large server with a monolith codebase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a complete scaling architecture that includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-region active-active deployment with read replicas in each region"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A global Redis Cluster handling sessions, cache, queues, and rate limiting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An Octane-powered web tier with 16 workers per node across 10 nodes per region"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQS queues with tiered job prioritization (real-time inventory > order processing > email notifications > analytics aggregation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CloudFront CDN for product images with WebP conversion pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A CloudWatch-based dashboard monitoring P50/P95/P99 latency, error rate, queue backlog per priority tier, cache hit rate per region, and database connection pool utilization across all read replicas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provide the specific configuration files (database.php, horizon.php, octane.php, vapor.yml, cloud.yaml), the server count per region based on throughput estimates, Redis memory sizing, database connection pooling calculations, and the monitoring dashboard layout with threshold alarms."
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