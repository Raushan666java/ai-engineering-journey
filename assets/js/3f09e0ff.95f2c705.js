"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30554],{

/***/ 14475
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_21_system_design_scale_md_3f0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-21-system-design-scale-md-3f0.json
const site_docs_courses_laravel_21_system_design_scale_md_3f0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/21-system-design-scale","title":"Chapter 21: System Design: Laravel at Enterprise Scale","description":"Previous Case Study E-Commerce","source":"@site/docs/courses/laravel/21-system-design-scale.md","sourceDirName":"courses/laravel","slug":"/laravel/21-system-design-scale","permalink":"/ai-engineering-journey/laravel/21-system-design-scale","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"id":"21-system-design-scale","slug":"/laravel/21-system-design-scale","title":"Chapter 21: System Design: Laravel at Enterprise Scale","sidebar_label":"Chapter 21: System Design: Laravel at Enterprise Scale","sidebar_position":21},"sidebar":"coursesSidebar","previous":{"title":"Chapter 20: Scaling Laravel","permalink":"/ai-engineering-journey/laravel/20-scaling-laravel"},"next":{"title":"Chapter 22: Case Study — SaaS E-Commerce Platform","permalink":"/ai-engineering-journey/laravel/22-case-study-ecommerce"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/21-system-design-scale.md


const frontMatter = {
	id: '21-system-design-scale',
	slug: '/laravel/21-system-design-scale',
	title: 'Chapter 21: System Design: Laravel at Enterprise Scale',
	sidebar_label: 'Chapter 21: System Design: Laravel at Enterprise Scale',
	sidebar_position: 21
};
const contentTitle = 'Chapter 21: System Design: Laravel at Enterprise Scale';

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
  "value": "1. Design for 10M+ Users",
  "id": "1-design-for-10m-users",
  "level": 3
}, {
  "value": "DNS Routing (Route53)",
  "id": "dns-routing-route53",
  "level": 4
}, {
  "value": "Cache Replication Across Regions",
  "id": "cache-replication-across-regions",
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
  "value": "3. Global Database Sharding",
  "id": "3-global-database-sharding",
  "level": 3
}, {
  "value": "Shard Key Selection",
  "id": "shard-key-selection",
  "level": 4
}, {
  "value": "Shard Routing Middleware",
  "id": "shard-routing-middleware",
  "level": 4
}, {
  "value": "Scatter-Gather for Cross-Shard Queries",
  "id": "scatter-gather-for-cross-shard-queries",
  "level": 4
}, {
  "value": "Global Secondary Indexes",
  "id": "global-secondary-indexes",
  "level": 4
}, {
  "value": "4. Read-Heavy Optimization",
  "id": "4-read-heavy-optimization",
  "level": 3
}, {
  "value": "Multi-Level Cache Cascade",
  "id": "multi-level-cache-cascade",
  "level": 4
}, {
  "value": "Pre-Computed Views / Materialized Tables",
  "id": "pre-computed-views--materialized-tables",
  "level": 4
}, {
  "value": "5. Write-Heavy Optimization",
  "id": "5-write-heavy-optimization",
  "level": 3
}, {
  "value": "Queue-Backed Writes",
  "id": "queue-backed-writes",
  "level": 4
}, {
  "value": "Batch Processing",
  "id": "batch-processing",
  "level": 4
}, {
  "value": "6. API Rate Limiting at Scale",
  "id": "6-api-rate-limiting-at-scale",
  "level": 3
}, {
  "value": "Distributed Rate Limiting with Redis",
  "id": "distributed-rate-limiting-with-redis",
  "level": 4
}, {
  "value": "Per-User, Per-IP, Per-API-Key Buckets",
  "id": "per-user-per-ip-per-api-key-buckets",
  "level": 4
}, {
  "value": "7. SLA / SLO / SLI Definitions",
  "id": "7-sla--slo--sli-definitions",
  "level": 3
}, {
  "value": "Latency SLIs",
  "id": "latency-slis",
  "level": 4
}, {
  "value": "SLO Targets by Tier",
  "id": "slo-targets-by-tier",
  "level": 4
}, {
  "value": "8. Disaster Recovery",
  "id": "8-disaster-recovery",
  "level": 3
}, {
  "value": "RPO/RTO Definitions",
  "id": "rporto-definitions",
  "level": 4
}, {
  "value": "Backup Strategy",
  "id": "backup-strategy",
  "level": 4
}, {
  "value": "Multi-Region Failover Runbook",
  "id": "multi-region-failover-runbook",
  "level": 4
}, {
  "value": "9. Capacity Planning",
  "id": "9-capacity-planning",
  "level": 3
}, {
  "value": "Traffic Growth Modeling",
  "id": "traffic-growth-modeling",
  "level": 4
}, {
  "value": "Auto-Scaling Thresholds",
  "id": "auto-scaling-thresholds",
  "level": 4
}, {
  "value": "Database Connection Pool Sizing",
  "id": "database-connection-pool-sizing",
  "level": 4
}, {
  "value": "10. Cost Optimization",
  "id": "10-cost-optimization",
  "level": 3
}, {
  "value": "Cache Hit Rate Analysis",
  "id": "cache-hit-rate-analysis",
  "level": 4
}, {
  "value": "Cost Comparison Table",
  "id": "cost-comparison-table",
  "level": 4
}, {
  "value": "CDN Cost Savings",
  "id": "cdn-cost-savings",
  "level": 4
}, {
  "value": "11. Migration from Monolith to Services",
  "id": "11-migration-from-monolith-to-services",
  "level": 3
}, {
  "value": "Service Extraction Order",
  "id": "service-extraction-order",
  "level": 4
}, {
  "value": "Database Decomposition",
  "id": "database-decomposition",
  "level": 4
}, {
  "value": "Feature Flags for Migration Control",
  "id": "feature-flags-for-migration-control",
  "level": 4
}, {
  "value": "API Gateway Routing",
  "id": "api-gateway-routing",
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
        id: "chapter-21-system-design-laravel-at-enterprise-scale",
        children: "Chapter 21: System Design: Laravel at Enterprise Scale"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/20-scaling-laravel",
          children: "Scaling Laravel"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/22-case-study-ecommerce",
          children: "Case Study E-Commerce"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate traffic, storage, memory, and CPU requirements for Laravel applications targeting 10 million or more users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design multi-region deployment architectures with active-passive and active-active strategies, cross-region replication, and DNS routing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement global database sharding with shard key selection, routing middleware, scatter-gather queries, and rebalancing strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize read-heavy workloads with multi-level caching cascades, pre-computed views, and read replica offloading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize write-heavy workloads with queue-backed deferred processing, CQRS separation, batch operations, and eventual consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect distributed rate limiting with Redis-backed token buckets, tiered limits, and standard rate limit headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and measure SLOs, SLIs, and SLAs for latency, availability, and throughput with per-tier commitments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design disaster recovery strategies with defined RPO/RTO, multi-region failover, backup automation, and runbook testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model capacity planning with traffic growth projections, peak provisioning, and resource sizing for database connections and Redis memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute cost optimization across cache, compute, CDN, database, and logging infrastructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan and execute a monolith-to-services migration using the Strangler Fig pattern, database decomposition, and feature-flag-controlled traffic shifting"
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
        href: "../../assets/images/lessons/laravel/21-system-design-scale/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/21-system-design-scale/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/21-system-design-scale/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/21-system-design-scale/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/21-system-design-scale/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/21-system-design-scale/visual-explanation.png",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/21-system-design-scale.png",
        alt: "System Design and Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-design-for-10m-users",
      children: "1. Design for 10M+ Users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Plan for horizontal scaling, caching, sharding, CDN, async processing, and multi-region from the start."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At 10 million users, every architectural decision must be based on quantitative estimates, not intuition.\nApplication code writes to primary, reads from local:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SubscriptionController extends Controller\n{\n    public function index(Request $request)\n    {\n        // Read from local replica (low latency)\n        $subscriptions = DB::connection('mysql_local')\n            ->table('subscriptions')\n            ->where('user_id', $request->user()->id)\n            ->get();\n\n        return response()->json($subscriptions);\n    }\n\n    public function store(Request $request)\n    {\n        // Write to primary (cross-region)\n        $subscription = DB::connection('mysql_primary')\n            ->table('subscriptions')\n            ->insert([$request->all()]);\n\n        return response()->json($subscription, 201);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dns-routing-route53",
      children: "DNS Routing (Route53)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-terraform",
        children: "resource \"aws_route53_record\" \"api\" {\n  zone_id = var.zone_id\n  name    = \"api.example.com\"\n  type    = \"A\"\n  set_identifier = \"us-east-1\"\n  geolocation_routing_policy { continent = \"NA\" }\n  alias {\n    name = aws_lb.us_east.dns_name\n    zone_id = aws_lb.us_east.zone_id\n    evaluate_target_health = true\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-replication-across-regions",
      children: "Cache Replication Across Regions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class GlobalCacheService\n{\n    public function __construct(\n        private $localCache,\n        private $globalCache,\n    ) {}\n\n    public function get(string $key): mixed\n    {\n        $value = $this->localCache->get($key);\n        if ($value !== null) { return $value; }\n\n        $value = $this->globalCache->get($key);\n        if ($value !== null) {\n            $this->localCache->put($key, $value, 300);\n        }\n        return $value;\n    }\n\n    public function put(string $key, mixed $value, int $ttl = 300): void\n    {\n        $this->localCache->put($key, $value, $ttl);\n        $this->globalCache->put($key, $value, $ttl * 2);\n    }\n\n    public function invalidate(string $key): void\n    {\n        $this->localCache->forget($key);\n        $this->globalCache->forget($key);\n        event(new CacheInvalidated($key, region()));\n    }\n}\n"
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
            children: "Design for 10M+ Users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture decisions for hyper-scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan for sharding, caching, and CDN from day one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal partition data across databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard by user_id or geographic region"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-Heavy Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache aggressively, use read replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis cache + MySQL read replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-Heavy Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue writes, batch inserts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use queues and bulk insert patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Rate Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throttle API requests per user/token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Laravel RateLimiter facade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disaster Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region failover and backup strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active-passive with automated DNS failover"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[User] --> B[CDN]     B --> C[Load Balancer]     C --> D[App Servers]     D --> E[Redis Cache]     D --> F[DB Shard 1]     D --> G[DB Shard 2]     D --> H[DB Shard 3]     D --> I[Queue Workers]     D --> J[Search Service] "
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Design your data model for sharding from the start. Choosing the wrong shard key is one of the hardest things to undo at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-global-database-sharding",
      children: "3. Global Database Sharding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Horizontal sharding partitions data by key such as user_id, distributing load across databases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sharding splits data across multiple database instances by a shard key."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "shard-key-selection",
      children: "Shard Key Selection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Candidate Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cardinality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distribution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Query Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "user_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bound by user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best choice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tenant_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bound by tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "created_at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot spots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-range scans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot shard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "email_hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "geo_region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uneven"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "shard-routing-middleware",
      children: "Shard Routing Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Http\\Middleware;\n\nuse Closure;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Config;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass ShardRoute\n{\n    private const SHARD_COUNT = 128;\n\n    public function handle(Request $request, Closure $next)\n    {\n        $userId = $request->user()?->id\n            ?? $request->route('user_id')\n            ?? throw new \\RuntimeException('No user ID for shard routing');\n\n        $shardId = crc32((string) $userId) % self::SHARD_COUNT;\n\n        Config::set('database.connections.shard', [\n            'driver' => 'mysql',\n            'host' => env(\"DB_SHARD_{$shardId}_HOST\"),\n            'port' => env(\"DB_SHARD_{$shardId}_PORT\", 3306),\n            'database' => \"shard_{$shardId}\",\n        ]);\n\n        DB::purge('shard');\n        return $next($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scatter-gather-for-cross-shard-queries",
      children: "Scatter-Gather for Cross-Shard Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Services\\Sharding;\n\nuse Illuminate\\Support\\Facades\\DB;\nuse Illuminate\\Support\\Collection;\n\nclass ScatterGather\n{\n    public function __construct(private array $shardConnections) {}\n\n    public function query(string $query, array $bindings = []): Collection\n    {\n        $results = collect();\n        foreach ($this->shardConnections as $shard => $connection) {\n            $shardResults = DB::connection(\"shard_{$shard}\")\n                ->select($query, $bindings);\n            $results = $results->merge($shardResults);\n        }\n        return $results;\n    }\n\n    public function count(string $table): int\n    {\n        $total = 0;\n        foreach ($this->shardConnections as $shard => $connection) {\n            $total += DB::connection(\"shard_{$shard}\")->table($table)->count();\n        }\n        return $total;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "global-secondary-indexes",
      children: "Global Secondary Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('global_email_index', function (Blueprint $table) {\n    $table->string('email')->primary();\n    $table->unsignedBigInteger('user_id');\n    $table->unsignedSmallInteger('shard_id');\n    $table->timestamps();\n});\n\n$index = DB::connection('global_index')\n    ->table('global_email_index')->where('email', $email)->first();\n\nif ($index) {\n    $host = env(\"DB_SHARD_{$index->shard_id}_HOST\");\n    Config::set('database.connections.shard.host', $host);\n    $user = DB::connection('shard')->table('users')->find($index->user_id);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-read-heavy-optimization",
      children: "4. Read-Heavy Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Aggressive caching with Redis and database read replicas serve read-heavy workloads efficiently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most Laravel apps are 90%+ reads. Optimize aggressively."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multi-level-cache-cascade",
      children: "Multi-Level Cache Cascade"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L1: In-memory cache (Octane)   ~0.01ms\nL2: Redis (local cluster)      ~1-5ms\nL3: Redis (global cross-region) ~50-100ms\nL4: Database (read replica)    ~5-50ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MultiLevelCache\n{\n    public function __construct(\n        private $redis,\n        private $globalRedis,\n    ) {}\n\n    public function remember(string $key, int $ttl, \\Closure $callback): mixed\n    {\n        $value = \\Laravel\\Octane\\Facades\\Octane::get(\"cache.{$key}\");\n        if ($value !== null) { return $value; }\n\n        $value = $this->redis->get($key);\n        if ($value !== null) {\n            \\Laravel\\Octane\\Facades\\Octane::set(\"cache.{$key}\", $value);\n            return $value;\n        }\n\n        $value = $this->globalRedis->get($key);\n        if ($value !== null) {\n            $this->redis->put($key, $value, $ttl);\n            \\Laravel\\Octane\\Facades\\Octane::set(\"cache.{$key}\", $value);\n            return $value;\n        }\n\n        $value = $callback();\n        \\Laravel\\Octane\\Facades\\Octane::set(\"cache.{$key}\", $value);\n        $this->redis->put($key, $value, $ttl);\n        $this->globalRedis->put($key, $value, $ttl * 2);\n\n        return $value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pre-computed-views--materialized-tables",
      children: "Pre-Computed Views / Materialized Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('daily_revenue_summary', function (Blueprint $table) {\n    $table->id();\n    $table->date('date');\n    $table->foreignId('plan_id')->constrained();\n    $table->unsignedInteger('new_subscriptions');\n    $table->unsignedInteger('canceled_subscriptions');\n    $table->decimal('revenue', 12, 2);\n    $table->unsignedInteger('total_active');\n    $table->unique(['date', 'plan_id']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ComputeDailyRevenue implements ShouldQueue\n{\n    public function __invoke(): void\n    {\n        $yesterday = now()->subDay()->toDateString();\n\n        DB::table('daily_revenue_summary')->where('date', $yesterday)->delete();\n\n        DB::statement(\"\n            INSERT INTO daily_revenue_summary\n                (date, plan_id, new_subscriptions, canceled_subscriptions,\n                 revenue, total_active)\n            SELECT ?, p.id,\n                COUNT(DISTINCT ns.id), COUNT(DISTINCT cs.id),\n                COALESCE(SUM(py.amount), 0),\n                COUNT(DISTINCT sa.id)\n            FROM plans p\n            LEFT JOIN subscriptions ns ON p.id = ns.plan_id AND DATE(ns.created_at) = ?\n            LEFT JOIN subscriptions cs ON p.id = cs.plan_id AND DATE(cs.canceled_at) = ?\n            LEFT JOIN payments py ON p.id = py.plan_id AND DATE(py.created_at) = ?\n            LEFT JOIN subscriptions sa ON p.id = sa.plan_id AND sa.status = 'active'\n            GROUP BY p.id\n        \", [$yesterday, $yesterday, $yesterday, $yesterday]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read queries become instant:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$revenue = DB::connection('mysql_read')\n    ->table('daily_revenue_summary')\n    ->where('date', now()->subDay())\n    ->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-write-heavy-optimization",
      children: "5. Write-Heavy Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Defer writes to queues, batch inserts, and optimize indexes to handle high write throughput."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When writes exceed capacity, defer and batch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "queue-backed-writes",
      children: "Queue-Backed Writes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class CreateSubscriptionController extends Controller\n{\n    public function store(CreateSubscriptionRequest $request)\n    {\n        CreateSubscription::dispatch(\n            userId: $request->user()->id,\n            planId: $request->input('plan_id'),\n        );\n\n        return response()->json([\n            'message' => 'Processing subscription',\n            'status' => 'pending',\n        ], 202);\n    }\n}\n\nclass CreateSubscription implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public function __construct(\n        public int $userId,\n        public int $planId,\n    ) {}\n\n    public function handle(CreateSubscriptionAction $action): void\n    {\n        $action(new SubscriptionData(\n            userId: $this->userId,\n            planId: $this->planId,\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "batch-processing",
      children: "Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AnalyticsWriter\n{\n    private array $buffer = [];\n    private int $bufferSize = 100;\n\n    public function record(string $event, array $data = []): void\n    {\n        $this->buffer[] = [\n            'event' => $event,\n            'data' => json_encode($data),\n            'occurred_at' => now(),\n        ];\n\n        if (count($this->buffer) >= $this->bufferSize) {\n            $this->flush();\n        }\n    }\n\n    public function flush(): void\n    {\n        if (empty($this->buffer)) { return; }\n        DB::table('analytics_events')->insert($this->buffer);\n        $this->buffer = [];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-api-rate-limiting-at-scale",
      children: "6. API Rate Limiting at Scale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Laravel RateLimiter facade with Redis backend throttles API requests per user, IP, or token."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "distributed-rate-limiting-with-redis",
      children: "Distributed Rate Limiting with Redis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/cache.php\n'rate_limiter' => [\n    'driver' => 'redis',\n    'connection' => 'rate_limiter',\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Http\\Middleware;\n\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\RateLimiter;\n\nclass TieredRateLimit\n{\n    public function handle(Request $request, \\Closure $next, string $tier = 'free'): mixed\n    {\n        $key = $request->user()\n            ? 'user:' . $request->user()->id\n            : 'ip:' . $request->ip();\n\n        $maxAttempts = match ($tier) {\n            'enterprise' => 6000,\n            'pro' => 600,\n            default => 60,\n        };\n\n        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {\n            $retryAfter = RateLimiter::availableIn($key);\n            return response()->json(['message' => 'Too many requests'], 429)\n                ->header('X-RateLimit-Limit', $maxAttempts)\n                ->header('X-RateLimit-Remaining', 0)\n                ->header('Retry-After', $retryAfter);\n        }\n\n        RateLimiter::hit($key, 60);\n\n        return $next($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "per-user-per-ip-per-api-key-buckets",
      children: "Per-User, Per-IP, Per-API-Key Buckets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// AppServiceProvider\nuse Illuminate\\Cache\\RateLimiting\\Limit;\nuse Illuminate\\Support\\Facades\\RateLimiter;\n\npublic function boot(): void\n{\n    RateLimiter::for('api', function (Request $request) {\n        $user = $request->user();\n        if ($user) {\n            $max = match ($user->subscription->tier) {\n                'enterprise' => 6000, 'pro' => 600, default => 60,\n            };\n            return Limit::perMinute($max)->by('user:' . $user->id);\n        }\n        return Limit::perMinute(10)->by('ip:' . $request->ip());\n    });\n\n    RateLimiter::for('auth', function (Request $request) {\n        return Limit::perMinute(5)->by('auth:' . $request->ip());\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-sla--slo--sli-definitions",
      children: "7. SLA / SLO / SLI Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SLA is the commitment, SLO is the target, SLI is the actual measured value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "latency-slis",
      children: "Latency SLIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class LatencySLI\n{\n    private array $latencies = [];\n\n    public function record(float $ms): void { $this->latencies[] = $ms; }\n    public function p50(): float { return $this->percentile(50); }\n    public function p95(): float { return $this->percentile(95); }\n    public function p99(): float { return $this->percentile(99); }\n\n    private function percentile(int $pct): float\n    {\n        $sorted = $this->latencies;\n        sort($sorted);\n        $idx = (int) ceil(($pct / 100) * count($sorted)) - 1;\n        return $sorted[max(0, $idx)] ?? 0;\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SLI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Window"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P50 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-min rolling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P95 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95th percentile response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-min rolling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P99 latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99th percentile response time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-min rolling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5xx / total x 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-min rolling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 - (down mins / total mins) x 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "slo-targets-by-tier",
      children: "SLO Targets by Tier"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P50"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P95"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P99"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Availability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<800ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<300ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<0.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.95%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-disaster-recovery",
      children: "8. Disaster Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Active-passive multi-region with automated DNS failover ensures business continuity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rporto-definitions",
      children: "RPO/RTO Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RPO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max acceptable data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 minute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max acceptable downtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total downtime causing business failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 hours"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "backup-strategy",
      children: "Backup Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/backup.php\nreturn [\n    'backup' => [\n        'source' => ['databases' => ['mysql']],\n        'destination' => ['disks' => ['s3-backups'], 'compression' => 'gzip'],\n    ],\n    'notifications' => [\n        'notifications' => [\n            BackupWasSuccessful::class => ['mail'],\n            BackupHasFailed::class => ['mail', 'slack'],\n        ],\n    ],\n    'monitor_backups' => [\n        ['name' => 'production', 'disks' => ['s3-backups'],\n         'health_checks' => [MaximumAgeInDays::class => 30]],\n    ],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/disaster-recovery-test.yml\non:\n  schedule:\n    - cron: '0 6 * * 1'\njobs:\n  restore-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: php artisan backup:restore --disk=s3-backups --connection=mysql_test\n      - run: php artisan test --testsuite=Smoke\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multi-region-failover-runbook",
      children: "Multi-Region Failover Runbook"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Failover Runbook: us-east-1 -> eu-west-1\n## Trigger\n- Route53 health checks fail for 3 consecutive checks (30s)\n- CloudWatch alarm \"RegionDown\" fires\n## Manual Steps\n1. Verify eu-west-1 capacity\n2. Promote Aurora replica to primary\n3. Update Route53 DNS\n4. Verify app health endpoints\n5. Notify team\n## RTO: 8 minutes | RPO: < 30 seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " DR plans must be tested regularly. An untested DR plan is worse than having no plan at all."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-capacity-planning",
      children: "9. Capacity Planning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Model traffic growth, project resource needs, and budget for infrastructure scaling in advance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "traffic-growth-modeling",
      children: "Traffic Growth Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class CapacityModel\n{\n    public function projectGrowth(int $dau, float $monthlyRate, int $months): array\n    {\n        $projections = [];\n        for ($i = 0; $i <= $months; $i++) {\n            $futureDau = (int) ($dau * pow(1 + $monthlyRate, $i));\n            $qps = (int) ($futureDau * 20 / 86400 * 4);\n            $storage = round($futureDau * 0.05, 1);\n            $redis = round($futureDau * 0.025 / 1024, 1);\n\n            $projections[] = [\n                'month' => $i,\n                'dau' => $futureDau,\n                'peak_qps' => $qps,\n                'storage_gb' => $storage,\n                'redis_gb' => $redis,\n                'web_servers' => ceil($qps / 500),\n            ];\n        }\n        return $projections;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "auto-scaling-thresholds",
      children: "Auto-Scaling Thresholds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "resource \"aws_appautoscaling_target\" \"web_ecs\" {\n  service_namespace  = \"ecs\"\n  resource_id        = \"service/production/web\"\n  scalable_dimension = \"ecs:service:DesiredCount\"\n  min_capacity       = 4\n  max_capacity       = 50\n}\nresource \"aws_appautoscaling_policy\" \"web_cpu\" {\n  target_tracking_scaling_policy_configuration {\n    predefined_metric_specification {\n      predefined_metric_type = \"ECSServiceAverageCPUUtilization\"\n    }\n    target_value = 70\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-connection-pool-sizing",
      children: "Database Connection Pool Sizing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 Octane nodes x 8 workers x 5 connections/worker = 400 connections\nAurora db.r6g.8xlarge max connections: 6,000\nRDS Proxy max connections: 10,000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-cost-optimization",
      children: "10. Cost Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Right-size instances, use spot instances, enable auto-scaling, and leverage reserved capacity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-hit-rate-analysis",
      children: "Cache Hit Rate Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class CacheEfficiencyAnalyzer\n{\n    public function analyzeHitRates(): array\n    {\n        $report = [];\n        foreach (['subscriptions','users','plans','products'] as $ns) {\n            $hits = Cache::store('redis')->get(\"stats:{$ns}:hits\", 0);\n            $misses = Cache::store('redis')->get(\"stats:{$ns}:misses\", 1);\n            $rate = round($hits / ($hits + $misses) * 100, 2);\n            $report[$ns] = ['hit_rate' => $rate,\n                'recommendation' => match(true) {\n                    $rate > 95 => 'Optimal',\n                    $rate > 80 => 'Increase TTL',\n                    default => 'Check invalidation logic',\n                }];\n        }\n        return $report;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cost-comparison-table",
      children: "Cost Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monthly Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single large server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$25,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling (on-demand)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$18,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved instances (1yr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$11,700"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spot instances (workers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$5,400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vapor (serverless)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$15,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cdn-cost-savings",
      children: "CDN Cost Savings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Without CDN: 10M users x 100 MB/month x $0.09/GB = $90,000/month\nWith CDN:    10M users x 100 MB/month x $0.02/GB = $20,000/month\nSavings:     $70,000/month (78% reduction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The most expensive query is the one you don't cache. Always measure cache hit ratios before adding more database capacity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-migration-from-monolith-to-services",
      children: "11. Migration from Monolith to Services"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Strangler Fig pattern incrementally replaces monolith components with services."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Strangler Fig pattern incrementally replaces monolith functionality with services."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "service-extraction-order",
      children: "Service Extraction Order"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-contained, security critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear contract, async"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Billing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs stable auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on billing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads everything, safe to extract last"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "database-decomposition",
      children: "Database Decomposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Shared database - all tables in one schema\nStep 2: Schema separation - own schema per service\nStep 3: Database views reference service tables\nStep 4: Application-level joins via API\nStep 5: Independent databases per service\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "feature-flags-for-migration-control",
      children: "Feature Flags for Migration Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class OrderController extends Controller\n{\n    public function store(Request $request)\n    {\n        // Canary test new service with 10% of traffic\n        if (Feature::for('extract-order-service', $request->user(), 0.1)) {\n            return $this->newOrderService()->create($request);\n        }\n        return $this->legacyMonolithCreate($request);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "api-gateway-routing",
      children: "API Gateway Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "routes:\n  - path: /api/auth/*\n    service: auth-service\n  - path: /api/orders/*\n    service: monolith\n  - path: /api/billing/*\n    service: billing-service\n"
      })
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
            children: "Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal DB partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear write scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex joins across shards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request throttling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protects from abuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can block legitimate traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business continuity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High infrastructure cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strangler Fig pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-free transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long migration timeline"
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
            children: "RateLimiter::for('api', fn...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define rate limiter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache::tags(['users'])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagged caching for invalidation"
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
            children: "Read-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis + replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica lag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queues + batching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active-passive DR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disaster resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS failover delay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strangler Fig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental replacement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel maintenance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the most important factor when designing database shards?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Number of servers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Shard key selection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Total database size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Network bandwidth"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The shard key determines data distribution. A poor shard key causes hot spots and uneven load."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which pattern is recommended for migrating from a monolith to services?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Big-bang rewrite"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Strangler Fig"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Fork and replace"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Lift and shift"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The Strangler Fig pattern incrementally replaces components, reducing risk compared to a full rewrite."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What distinguishes SLA, SLO, and SLI?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are synonyms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) SLA is commitment, SLO is target, SLI is measurement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) SLA is internal, SLO is external"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) SLA is for uptime, SLO is for latency"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** SLA is the contractual commitment, SLO is the internal target, SLI is the actual measured value."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the recommended approach for multi-region disaster recovery?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Active-active with all regions live"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Active-passive with automated DNS failover"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Single region with daily backups"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Manual failover on incident"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Active-passive with automated DNS failover balances cost and recovery time for most applications."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enterprise-scale Laravel requires quantitative estimation: 10M users generates 3,700 peak QPS and 100+ TB storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-region deployment with Aurora Global Database and Route53 geolocation provides regional fault tolerance with sub-second lag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database sharding using user_id as shard key with middleware-based routing enables scaling beyond a single database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read-heavy optimization demands multi-level cache cascades and pre-computed materialized views"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write-heavy workloads require queue-backed deferred processing and batch accumulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed rate limiting with Redis enforces per-user, per-IP, per-API-key limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLO/SLA frameworks define measurable P50/P95/P99 latency, error rate, and availability targets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disaster recovery must specify RPO (<1 min) and RTO (<15 min) with automated testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capacity planning models growth projections for web servers, database ACUs, and Redis memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost optimization focuses on cache hit rates, reserved instances, CDN offloading, and Vapor Lambda costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monolith-to-services migration follows the Strangler Fig pattern with feature flags for gradual shifting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate peak QPS for 5M DAU generating 25 req/user/day. How many Octane nodes at 500 QPS/node?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare active-passive vs active-active multi-region. When is the complexity justified?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain scatter-gather for cross-shard queries. How does latency scale with shard count?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must both RPO and RTO be specified? What risks arise from a 1-minute RPO with 6-hour backups?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the Strangler Fig pattern. Why is it lower risk than a complete rewrite?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-region architecture"
          }), ": Design active-active across us-east-1, eu-west-1, ap-southeast-1 with 20% traffic each. Write DB config, Route53 routing, and read-from-local/write-to-primary application code."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Capacity model"
          }), ": 500K DAU at 8% monthly growth. Project at months 0/3/6/12/24: peak QPS, web servers (500 QPS/node), storage (35 MB/user), Redis (4 KB session + 15 KB cache), DB ACUs (1 per 80 writes/sec), workers (1 per 30 users)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shard rebalancing"
          }), ": 32 shards where shard 5 has 3x average size. Design a rebalancing plan adding shards 33-64. Include hash function update, migration pseudocode, and zero-downtime cutover."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design the complete enterprise architecture for 50 million users across 5 regions with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "99.99% availability SLA (4.38 min/month max downtime)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P99 latency under 500ms globally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50,000 requests/second peak traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GDPR data sovereignty per region"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time collaboration with sub-100ms broadcast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ML inference at 500ms P99"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disaster recovery with 5-second RPO and 2-minute RTO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$500K/month infrastructure budget"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provide: region topology, global sharding scheme, 5-region cache hierarchy with invalidation, queue architecture with regional isolation, distributed rate limiting, SLO table with burn-rate alerts, DR architecture with automated failover, cost breakdown within budget, and zero-downtime migration plan from single-region."
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