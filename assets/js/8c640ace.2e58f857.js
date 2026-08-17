"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32907],{

/***/ 20073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_interview_preparation_03_system_design_interview_md_8c6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-interview-preparation-03-system-design-interview-md-8c6.json
const site_docs_courses_interview_preparation_03_system_design_interview_md_8c6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/interview-preparation/03-system-design-interview","title":"Chapter 3: System Design Interview","description":"Learning Objectives","source":"@site/docs/courses/interview-preparation/03-system-design-interview.md","sourceDirName":"courses/interview-preparation","slug":"/interview-preparation/03-system-design-interview","permalink":"/ai-engineering-journey/interview-preparation/03-system-design-interview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-system-design-interview","slug":"/interview-preparation/03-system-design-interview","title":"Chapter 3: System Design Interview","sidebar_label":"Chapter 3: System Design Interview","sidebar_position":3},"sidebar":"course-interview-preparation","previous":{"title":"Chapter 2: Coding Problem Solving","permalink":"/ai-engineering-journey/interview-preparation/02-coding-problem-solving"},"next":{"title":"Chapter 4: Database and SQL Interview","permalink":"/ai-engineering-journey/interview-preparation/04-database-sql-interview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/interview-preparation/03-system-design-interview.md


const frontMatter = {
	id: '03-system-design-interview',
	slug: '/interview-preparation/03-system-design-interview',
	title: 'Chapter 3: System Design Interview',
	sidebar_label: 'Chapter 3: System Design Interview',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: System Design Interview';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "System Design Interview Framework",
  "id": "system-design-interview-framework",
  "level": 2
}, {
  "value": "Step-by-Step Framework",
  "id": "step-by-step-framework",
  "level": 3
}, {
  "value": "Step 1: Requirements Clarification (5 minutes)",
  "id": "step-1-requirements-clarification-5-minutes",
  "level": 4
}, {
  "value": "Step 2: Scale Estimation (5 minutes)",
  "id": "step-2-scale-estimation-5-minutes",
  "level": 4
}, {
  "value": "Step 3: Data Model &amp; API Design (10 minutes)",
  "id": "step-3-data-model--api-design-10-minutes",
  "level": 4
}, {
  "value": "Step 4: High-Level Architecture (15 minutes)",
  "id": "step-4-high-level-architecture-15-minutes",
  "level": 4
}, {
  "value": "Step 5: Deep Dive on Components (15 minutes)",
  "id": "step-5-deep-dive-on-components-15-minutes",
  "level": 4
}, {
  "value": "Step 6: Trade-offs Discussion (5 minutes)",
  "id": "step-6-trade-offs-discussion-5-minutes",
  "level": 4
}, {
  "value": "Key Scalability Concepts",
  "id": "key-scalability-concepts",
  "level": 2
}, {
  "value": "1. Load Balancing",
  "id": "1-load-balancing",
  "level": 3
}, {
  "value": "2. Caching Strategies",
  "id": "2-caching-strategies",
  "level": 3
}, {
  "value": "3. Database Scaling",
  "id": "3-database-scaling",
  "level": 3
}, {
  "value": "4. Message Queues",
  "id": "4-message-queues",
  "level": 3
}, {
  "value": "5. CDN (Content Delivery Network)",
  "id": "5-cdn-content-delivery-network",
  "level": 3
}, {
  "value": "Section 1: Case Study — URL Shortener (tinyurl.com)",
  "id": "section-1-case-study--url-shortener-tinyurlcom",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Scale Estimation",
  "id": "scale-estimation",
  "level": 3
}, {
  "value": "Design",
  "id": "design",
  "level": 3
}, {
  "value": "API Design",
  "id": "api-design",
  "level": 3
}, {
  "value": "Database Schema",
  "id": "database-schema",
  "level": 3
}, {
  "value": "Short Code Generation",
  "id": "short-code-generation",
  "level": 3
}, {
  "value": "Deep Dive: Cache Strategy",
  "id": "deep-dive-cache-strategy",
  "level": 3
}, {
  "value": "Trade-offs",
  "id": "trade-offs",
  "level": 3
}, {
  "value": "Section 2: Case Study — Chat System (WhatsApp)",
  "id": "section-2-case-study--chat-system-whatsapp",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-1",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 3
}, {
  "value": "Database Schema (Cassandra)",
  "id": "database-schema-cassandra",
  "level": 3
}, {
  "value": "WebSocket vs Polling",
  "id": "websocket-vs-polling",
  "level": 3
}, {
  "value": "Deep Dive: Message Delivery Guarantees",
  "id": "deep-dive-message-delivery-guarantees",
  "level": 3
}, {
  "value": "Trade-offs",
  "id": "trade-offs-1",
  "level": 3
}, {
  "value": "Section 3: Case Study — Ride-Sharing (Uber/Ola)",
  "id": "section-3-case-study--ride-sharing-uberola",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-2",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-1",
  "level": 3
}, {
  "value": "Geographic Indexing (QuadTree)",
  "id": "geographic-indexing-quadtree",
  "level": 3
}, {
  "value": "Matching Algorithm",
  "id": "matching-algorithm",
  "level": 3
}, {
  "value": "Deep Dive: Surge Pricing",
  "id": "deep-dive-surge-pricing",
  "level": 3
}, {
  "value": "Section 4: Case Study — Social Media Feed (Facebook/Instagram)",
  "id": "section-4-case-study--social-media-feed-facebookinstagram",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-3",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-2",
  "level": 3
}, {
  "value": "Feed Generation Approaches",
  "id": "feed-generation-approaches",
  "level": 3
}, {
  "value": "Section 5: Case Study — Payment System (Razorpay/PayPal)",
  "id": "section-5-case-study--payment-system-razorpaypaypal",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-4",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-3",
  "level": 3
}, {
  "value": "Two-Phase Commit (Simplified)",
  "id": "two-phase-commit-simplified",
  "level": 3
}, {
  "value": "Idempotency Key",
  "id": "idempotency-key",
  "level": 3
}, {
  "value": "Section 6: Case Study — Video Streaming (YouTube/Netflix)",
  "id": "section-6-case-study--video-streaming-youtubenetflix",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-5",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-4",
  "level": 3
}, {
  "value": "Adaptive Bitrate Streaming (ABR)",
  "id": "adaptive-bitrate-streaming-abr",
  "level": 3
}, {
  "value": "Section 7: Case Study — E-Commerce Platform (Amazon/Flipkart)",
  "id": "section-7-case-study--e-commerce-platform-amazonflipkart",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-6",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-5",
  "level": 3
}, {
  "value": "Inventory Reservation Pattern",
  "id": "inventory-reservation-pattern",
  "level": 3
}, {
  "value": "Section 8: Case Study — Notification System",
  "id": "section-8-case-study--notification-system",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-7",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-6",
  "level": 3
}, {
  "value": "Rate Limiting &amp; Deduplication",
  "id": "rate-limiting--deduplication",
  "level": 3
}, {
  "value": "Section 9: Case Study — Rate Limiter",
  "id": "section-9-case-study--rate-limiter",
  "level": 2
}, {
  "value": "Algorithms",
  "id": "algorithms",
  "level": 3
}, {
  "value": "Token Bucket Implementation",
  "id": "token-bucket-implementation",
  "level": 3
}, {
  "value": "Section 10: Case Study — Distributed Web Crawler",
  "id": "section-10-case-study--distributed-web-crawler",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements-8",
  "level": 3
}, {
  "value": "Architecture",
  "id": "architecture-7",
  "level": 3
}, {
  "value": "Polite Crawler Implementation",
  "id": "polite-crawler-implementation",
  "level": 3
}, {
  "value": "Quick Reference Tables",
  "id": "quick-reference-tables",
  "level": 2
}, {
  "value": "System Design Concepts Summary",
  "id": "system-design-concepts-summary",
  "level": 3
}, {
  "value": "Database Choice Guide",
  "id": "database-choice-guide",
  "level": 3
}, {
  "value": "Non-Functional Requirement Targets",
  "id": "non-functional-requirement-targets",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-3-system-design-interview",
        children: "Chapter 3: System Design Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the complete system design interview framework covering both HLD and LLD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand scalability concepts: load balancing, caching, database sharding, CDN, message queues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design database schemas and APIs for real-world applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze 10 comprehensive case studies with architecture diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop the ability to discuss trade-offs between different design choices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn to structure your system design interview response effectively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system-design-interview-framework",
      children: "System Design Interview Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Understand Requirements] --> B[Functional Requirements]\n    A --> C[Non-Functional Requirements]\n    B --> D[Estimate Scale]\n    C --> D\n    D --> E[Data Model Design]\n    E --> F[Database Schema]\n    E --> G[API Design]\n    F --> H[High-Level Design]\n    G --> H\n    H --> I[Component Diagram]\n    H --> J[Data Flow]\n    H --> K[System Architecture]\n    I --> L[Deep Dive]\n    J --> L\n    K --> L\n    L --> M[Database Deep Dive]\n    L --> N[Caching Strategy]\n    L --> O[Scaling Strategy]\n    M --> P[Trade-offs & Alternatives]\n    N --> P\n    O --> P\n    P --> Q[Wrap Up & Next Steps]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-framework",
      children: "Step-by-Step Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-requirements-clarification-5-minutes",
      children: "Step 1: Requirements Clarification (5 minutes)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What features are needed? Who are the users?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-functional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected traffic? Latency requirements? Consistency vs availability?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget? Timezone? Regulatory?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-scale-estimation-5-minutes",
      children: "Step 2: Scale Estimation (5 minutes)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Calculation Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Daily active users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume 100M DAU for a global product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requests per second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(DAU × avg requests per user) / 86400"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(write rate × data size × retention period)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(requests per second × response size)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-data-model--api-design-10-minutes",
      children: "Step 3: Data Model & API Design (10 minutes)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define entities, relationships, and schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design RESTful or GraphQL APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider indexing and query patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-high-level-architecture-15-minutes",
      children: "Step 4: High-Level Architecture (15 minutes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Client[Client] --> LB[Load Balancer]\n    LB --> WS[Web Servers]\n    WS --> AS[Application Servers]\n    WS --> Cache[Redis Cache]\n    AS --> DB[(Primary DB)]\n    AS --> MQ[Message Queue]\n    MQ --> Workers[Background Workers]\n    Workers --> Analytics[(Analytics DB)]\n    AS --> CDN[CDN]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-deep-dive-on-components-15-minutes",
      children: "Step 5: Deep Dive on Components (15 minutes)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database: sharding, replication, indexing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caching: Redis/Memcached, cache eviction, cache-aside"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scaling: horizontal vs vertical, auto-scaling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Availability: failover, redundancy, SLAs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-6-trade-offs-discussion-5-minutes",
      children: "Step 6: Trade-offs Discussion (5 minutes)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency vs Availability (CAP theorem)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL vs NoSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synchronous vs async processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monolithic vs microservices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-scalability-concepts",
      children: "Key Scalability Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-load-balancing",
      children: "1. Load Balancing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How it Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Round Robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributes requests sequentially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal-capacity servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Least Connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends to server with fewest active connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable request processing time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses client IP to determine server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted Round Robin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servers have weights based on capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heterogeneous server capacities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-caching-strategies",
      children: "2. Caching Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Aside"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application checks cache first, falls back to DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache layer automatically loads from DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write Through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to cache and DB simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write Behind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to cache, async write to DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy, tolerance for data loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh Ahead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache automatically refreshes before expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable access patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache Eviction Policies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evicts least recently used items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LFU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evicts least frequently used items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evicts items in order they were added"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evicts items after time-to-live expires"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-database-scaling",
      children: "3. Database Scaling"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple read-only copies of DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal partition across DBs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More powerful hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (temporary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Federation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split DBs by feature/domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding Strategies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash-based: hash(user_id) % num_shards\nRange-based: user_id 1-10000 → shard 1, 10001-20000 → shard 2\nDirectory-based: Lookup table mapping keys to shards\nGeographic: Users in India → India shard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-message-queues",
      children: "4. Message Queues"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kafka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RabbitMQ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pub-sub log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO option"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory/Disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event streaming, analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task queues, RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple queuing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-cdn-content-delivery-network",
      children: "5. CDN (Content Delivery Network)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caches static content at edge locations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces latency for global users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles DDoS protection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Popular CDNs: CloudFront, Cloudflare, Akamai"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-case-study--url-shortener-tinyurlcom",
      children: "Section 1: Case Study — URL Shortener (tinyurl.com)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Generate short URL, redirect to original, custom alias, analytics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 10M URLs/day, read-heavy (99% reads), low latency (<100ms redirect)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scale-estimation",
      children: "Scale Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write: 10M × 100 bytes = 1 GB/day → 365 GB/year\nRead: 10M × 99 reads/1 write = 990M reads/day\nRPS: 10M/86400 ≈ 116 writes/sec, 11,458 reads/sec\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design",
      children: "Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Client[Client] --> LB[Load Balancer]\n    LB --> WS[Web Server]\n    WS --> Cache[(Redis Cache)]\n    WS --> DB[(Relational DB)]\n    WS --> K[(Kafka)]\n    K --> Analytics[Analytics Worker]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-design",
      children: "API Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "POST /shorten\n{\n  \"url\": \"https://example.com/very/long/url\",\n  \"customAlias\": \"optional\", // null for auto\n  \"ttl\": \"30d\"               // optional expiry\n}\n→ { \"shortUrl\": \"https://short.ly/abc123\" }\n\nGET /{shortCode}\n→ 302 Redirect to original URL\n\nGET /{shortCode}/analytics\n→ { \"clicks\": 42000, \"referrers\": {...}, \"timeline\": [...] }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-schema",
      children: "Database Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE urls (\n    id BIGINT PRIMARY KEY AUTO_INCREMENT,\n    short_code VARCHAR(10) UNIQUE NOT NULL,\n    original_url TEXT NOT NULL,\n    user_id INT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    expires_at TIMESTAMP NULL,\n    INDEX idx_short_code (short_code)\n);\n\nCREATE TABLE clicks (\n    id BIGINT PRIMARY KEY AUTO_INCREMENT,\n    short_code VARCHAR(10) NOT NULL,\n    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    referrer VARCHAR(500),\n    user_agent TEXT,\n    ip_address VARCHAR(45),\n    country VARCHAR(100),\n    INDEX idx_short_code_ts (short_code, clicked_at)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "short-code-generation",
      children: "Short Code Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Base62 encoding (a-z, A-Z, 0-9) = 62^7 ≈ 3.5 trillion combinations\nconst BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n\nfunction generateShortCode(id: number): string {\n  let code = '';\n  while (id > 0) {\n    code = BASE62[id % 62] + code;\n    id = Math.floor(id / 62);\n  }\n  return code.padStart(7, 'a'); // 7 chars minimum\n}\n\n// Snowflake-style ID generator\nfunction generateUniqueId(): number {\n  const timestamp = Date.now();\n  const workerId = 1;\n  const sequence = 0; // Increment for same-millisecond requests\n  return (timestamp << 22) | (workerId << 12) | sequence;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-cache-strategy",
      children: "Deep Dive: Cache Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write: Cache-aside. On URL creation, write to DB and set cache (TTL: 24h).\nRead: Check Redis cache first. On miss, fetch from DB and populate cache.\nEviction: LRU for old URLs. Most popular URLs stay cached.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trade-offs",
      children: "Trade-offs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL vs NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID, joins for analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling reads requires read replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5ms redirects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache miss penalty, consistency lag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base62 vs Hash (MD5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need ID generator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monolithic vs Micro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited scalability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-case-study--chat-system-whatsapp",
      children: "Section 2: Case Study — Chat System (WhatsApp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-1",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " 1:1 messaging, group chat, online status, message delivery status, media sharing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 1B users, <100ms delivery, high availability, end-to-end encryption."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[User A] --> WS1[WebSocket Server]\n    B[User B] --> WS2[WebSocket Server]\n    WS1 --> MQ[Message Queue]\n    WS2 --> MQ\n    MQ --> MS1[Message Service]\n    MQ --> MS2[Message Service]\n    MS1 --> Cache[(Redis)]\n    MS1 --> DB[(Cassandra)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-schema-cassandra",
      children: "Database Schema (Cassandra)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- For message ordering by time\nCREATE TABLE messages_by_chat (\n    chat_id UUID,\n    message_id TIMEUUID,  -- Allows time-based sorting\n    sender_id UUID,\n    content TEXT,\n    message_type TEXT,     -- text, image, video\n    status TEXT,           -- sent, delivered, read\n    created_at TIMESTAMP,\n    PRIMARY KEY (chat_id, message_id)\n) WITH CLUSTERING ORDER BY (message_id DESC);\n\n-- For user's inbox\nCREATE TABLE user_inbox (\n    user_id UUID,\n    last_message_id TIMEUUID,\n    chat_id UUID,\n    unread_count INT,\n    PRIMARY KEY (user_id, last_message_id DESC)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "websocket-vs-polling",
      children: "WebSocket vs Polling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// WebSocket implementation\nclass ChatWebSocket {\n  private ws: WebSocket;\n  \n  connect(userId: string): void {\n    this.ws = new WebSocket(`wss://chat.app/ws?userId=${userId}`);\n    \n    this.ws.onmessage = (event) => {\n      const message = JSON.parse(event.data);\n      this.displayMessage(message);\n      this.sendDeliveryAck(message.id);\n    };\n  }\n  \n  sendMessage(chatId: string, content: string): void {\n    const message = {\n      type: 'message',\n      chatId,\n      content,\n      timestamp: Date.now()\n    };\n    this.ws.send(JSON.stringify(message));\n  }\n  \n  private sendDeliveryAck(messageId: string): void {\n    this.ws.send(JSON.stringify({\n      type: 'ack',\n      messageId\n    }));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-message-delivery-guarantees",
      children: "Deep Dive: Message Delivery Guarantees"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. User A sends message\n2. WebSocket server receives → queue → message service\n3. Message service writes to Cassandra\n4. If User B is online: push via WebSocket\n5. If User B is offline: store for push notification\n6. Delivery acknowledgment sent back to User A\n7. Read receipts (blue ticks) sent when User B opens chat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trade-offs-1",
      children: "Trade-offs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra for messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-optimized, time-series data, horizontal scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket for real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent connection, bidirectional, low latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy, regulatory compliance (Signal Protocol)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-case-study--ride-sharing-uberola",
      children: "Section 3: Case Study — Ride-Sharing (Uber/Ola)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-2",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Real-time driver tracking, ride booking, fare calculation, driver-rider matching, trip history."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 10s of millions daily rides, <5s matching, millisecond location updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-1",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Rider[Rider App] --> LB[Load Balancer]\n    Driver[Driver App] --> LB\n    LB --> API[REST API]\n    LB --> WS[WebSocket]\n    WS --> LS[Location Service]\n    LS --> Geo[(Geo Index)]\n    LS --> MQ[Message Queue]\n    MQ --> Matching[Matching Service]\n    Matching --> Apollo[Apollo/Redis]\n    API --> Ride[Ride Service]\n    Ride --> DB[(PostgreSQL)]\n    Ride --> Payment[Payment Service]\n    Matching --> Notification[Push Notification]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geographic-indexing-quadtree",
      children: "Geographic Indexing (QuadTree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simple grid-based approach for finding nearby drivers\nclass GeoHashService {\n  private static readonly PRECISION = 7; // ~76m × ~76m cells\n\n  encodeGeoHash(lat: number, lng: number): string {\n    const latRange = [-90, 90];\n    const lngRange = [-180, 180];\n    let hash = '';\n    \n    for (let i = 0; i < GeoHashService.PRECISION; i++) {\n      let lngMid = (lngRange[0] + lngRange[1]) / 2;\n      let bit = lng >= lngMid ? 1 : 0;\n      hash += bit;\n      lngRange[bit ? 0 : 1] = bit ? lngMid : lngRange[1 - bit];\n      if (bit) lngRange[0] = lngMid;\n      else lngRange[1] = lngMid;\n      \n      let latMid = (latRange[0] + latRange[1]) / 2;\n      bit = lat >= latMid ? 1 : 0;\n      hash += bit;\n      latRange[bit ? 0 : 1] = bit ? latMid : latRange[1 - bit];\n      if (bit) latRange[0] = latMid;\n      else latRange[1] = latMid;\n    }\n    \n    return hash;\n  }\n\n  findDrivers(riderLat: number, riderLng: number, radius: number): Driver[] {\n    const riderHash = this.encodeGeoHash(riderLat, riderLng);\n    const neighborHashes = this.getNeighborHashes(riderHash);\n    \n    return this.queryDriversByHashes(neighborHashes, riderLat, riderLng, radius);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "matching-algorithm",
      children: "Matching Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RideRequest {\n  riderId: string;\n  pickup: Location;\n  dropoff: Location;\n  rideType: 'economy' | 'premium' | 'xl';\n}\n\ninterface Driver {\n  id: string;\n  location: Location;\n  status: 'available' | 'busy' | 'offline';\n  rating: number;\n  distanceToRider: number;\n}\n\nfunction findBestDriver(request: RideRequest, availableDrivers: Driver[]): Driver | null {\n  // Filter by availability and type\n  let candidates = availableDrivers.filter(d => d.status === 'available');\n  \n  // Sort by distance (closest first)\n  candidates.sort((a, b) => a.distanceToRider - b.distanceToRider);\n  \n  // Consider surge pricing, driver rating, ETA\n  const threshold: Record<string, number> = {\n    economy: 5,    // 5km radius\n    premium: 10,\n    xl: 15\n  };\n  \n  return candidates.find(d => d.distanceToRider <= threshold[request.rideType]) || null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-surge-pricing",
      children: "Deep Dive: Surge Pricing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Monitor supply/demand ratio in each geo-region\n2. If demand > supply for >5 min → activate surge (multiplier: 1.2x to 3x)\n3. Surge deters demand, attracts more drivers to area\n4. Dynamic pricing equation: multiplier = Demand × elasticity / Supply\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-case-study--social-media-feed-facebookinstagram",
      children: "Section 4: Case Study — Social Media Feed (Facebook/Instagram)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-3",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " View timeline feed, post content, like/comment/share, follow/unfollow, infinite scroll."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 2B users, <500ms feed load, high availability, eventual consistency for feed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-2",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    User[User] --> App[App Server]\n    App --> Feed[Feed Service]\n    Feed --> Cache[(Redis Fanout Cache)]\n    App --> Post[Post Service]\n    Post --> DB[(PostgreSQL)]\n    Post --> Photo[Photo/CDN]\n    App --> Graph[Social Graph Service]\n    Graph --> GraphDB[(Neo4j)]\n    App --> Notification[Notification Service]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feed-generation-approaches",
      children: "Feed Generation Approaches"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fanout on Write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fanout on Read"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "How it works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-compute feed for each follower when post is created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute feed when user opens app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read: O(1), Write: O(followers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read: O(following), Write: O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need feed cache per user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No feed cache needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Celebrities (<10K followers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular users (<1000 following)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Celebrities: Fanout-on-Read, Regular: Fanout-on-Write"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Hybrid Feed Service\nclass FeedService {\n  private readonly CELEBRITY_THRESHOLD = 10000;\n\n  async createPost(userId: string, content: string): Promise<void> {\n    const postId = await this.postRepo.create(userId, content);\n    const followerCount = await this.userRepo.getFollowerCount(userId);\n    \n    if (followerCount < this.CELEBRITY_THRESHOLD) {\n      // Fanout on write: Pre-compute for all followers\n      await this.fanoutOnWrite(postId, userId);\n    } else {\n      // Celebrity: Just mark, fanout on read\n      await this.celebrityPostRepo.add(userId, postId);\n    }\n  }\n\n  async getFeed(userId: string, page: number, pageSize: number): Promise<Post[]> {\n    // Try loading from cache first\n    let feed = await this.feedCache.get(userId, page, pageSize);\n    \n    if (!feed || feed.length === 0) {\n      // Mix pre-computed + celebrity posts\n      feed = await this.fanoutOnRead(userId, page, pageSize);\n      await this.feedCache.set(userId, page, feed);\n    }\n    \n    return feed;\n  }\n\n  private async fanoutOnWrite(postId: string, userId: string): Promise<void> {\n    const followers = await this.userRepo.getFollowerIds(userId);\n    \n    // Batch insert into Redis sorted sets\n    const pipeline = this.redis.multi();\n    for (const followerId of followers) {\n      pipeline.zadd(`feed:${followerId}`, Date.now(), postId);\n    }\n    await pipeline.exec();\n  }\n\n  private async fanoutOnRead(userId: string, page: number, pageSize: number): Promise<Post[]> {\n    const following = await this.userRepo.getFollowingIds(userId);\n    const celebrities = following.filter(id => /* is celebrity */);\n    \n    const posts: Post[] = [];\n    for (const celebId of celebrities) {\n      const celebPosts = await this.celebrityPostRepo.getRecent(celebId, pageSize);\n      posts.push(...celebPosts);\n    }\n    \n    // Merge with cached feed\n    const cachedPosts = await this.feedCache.get(userId, page, pageSize);\n    return this.mergeAndSort(posts, cachedPosts);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-5-case-study--payment-system-razorpaypaypal",
      children: "Section 5: Case Study — Payment System (Razorpay/PayPal)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-4",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Process payments (cards, UPI, netbanking), payment status tracking, refunds, reconciliation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 99.99% uptime, exactly-once processing, <5s transaction, PCI compliance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-3",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Client[Client] --> API[Payment API]\n    API --> Tokenizer[Token Service]\n    API --> PSP[Payment Service Provider]\n    API --> Fraud[Fraud Detection]\n    API --> Ledger[Ledger Service]\n    API --> DB[(Transaction DB)]\n    API --> MQ[Message Queue]\n    MQ --> Settlement[Settlement Service]\n    MQ --> Notification[Notification Service]\n    MQ --> Reconciliation[Reconciliation Service]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "two-phase-commit-simplified",
      children: "Two-Phase Commit (Simplified)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum PaymentState {\n  INITIATED = 'INITIATED',\n  AUTHORIZED = 'AUTHORIZED',\n  CAPTURED = 'CAPTURED',\n  FAILED = 'FAILED',\n  REFUNDED = 'REFUNDED',\n  CANCELLED = 'CANCELLED'\n}\n\nasync function processPayment(payment: Payment): Promise<PaymentResult> {\n  const stateMachine = new StateMachine(PaymentState.INITIATED);\n  \n  try {\n    // Phase 1: Authorize (reserve funds)\n    const authResult = await paymentGateway.authorize(payment);\n    stateMachine.transition(PaymentState.AUTHORIZED);\n    \n    // Phase 2: Capture (actually charge)\n    const captureResult = await paymentGateway.capture(authResult.transactionId);\n    stateMachine.transition(PaymentState.CAPTURED);\n    \n    // Update ledger\n    await ledgerService.createEntry({\n      userId: payment.userId,\n      amount: payment.amount,\n      type: 'debit',\n      transactionId: captureResult.transactionId\n    });\n    \n    return { success: true, transactionId: captureResult.transactionId };\n    \n  } catch (error) {\n    // Rollback\n    if (stateMachine.current === PaymentState.AUTHORIZED) {\n      await paymentGateway.void(authResult.transactionId);\n    }\n    stateMachine.transition(PaymentState.FAILED);\n    return { success: false, error: error.message };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "idempotency-key",
      children: "Idempotency Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Ensure exactly-once processing\nasync function handlePaymentRequest(\n  request: PaymentRequest,\n  idempotencyKey: string\n): Promise<PaymentResult> {\n  // Check if already processed\n  const existing = await cache.get(`idempotency:${idempotencyKey}`);\n  if (existing) {\n    return existing; // Return same result for duplicate request\n  }\n  \n  const result = await processPayment(request);\n  \n  // Store result for 24 hours\n  await cache.set(`idempotency:${idempotencyKey}`, result, { ttl: 86400 });\n  \n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-6-case-study--video-streaming-youtubenetflix",
      children: "Section 6: Case Study — Video Streaming (YouTube/Netflix)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-5",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Upload videos, stream video, search, recommendations, comments/likes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 2B users, <5s startup time, adaptive bitrate streaming, global CDN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-4",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Upload[Upload Service] --> Transcoder[Video Transcoder]\n    Transcoder --> ObjectStore[(Object Store - S3)]\n    Transcoder --> CDN[CDN]\n    \n    View[View Request] --> LB[Load Balancer]\n    LB --> Stream[Stream Service]\n    Stream --> CDN\n    Stream --> Recommendation[Recommendation Engine]\n    Recommendation --> ML[ML Model]\n    Recommendation --> UserDB[(User Profile)]\n    Stream --> Metadata[(Metadata DB)]\n    View --> Analytics[Analytics Pipeline]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adaptive-bitrate-streaming-abr",
      children: "Adaptive Bitrate Streaming (ABR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VideoManifest {\n  segments: Segment[];\n  qualities: Quality[];\n}\n\ninterface Quality {\n  label: string;        // 1080p, 720p, 480p, 360p\n  bitrate: number;      // 5000kbps, 2500kbps, 1000kbps, 500kbps\n  resolution: string;   // 1920x1080, 1280x720, etc.\n}\n\nclass AdaptiveBitrateSelector {\n  private readonly BUFFER_THRESHOLD_SECONDS = 10;\n  private readonly BANDWIDTH_SAFETY_FACTOR = 0.8;\n\n  selectQuality(\n    availableQualities: Quality[],\n    currentBandwidth: number,\n    bufferLevel: number\n  ): Quality {\n    // If buffer is low, downgrade quality\n    if (bufferLevel < this.BUFFER_THRESHOLD_SECONDS) {\n      return this.findBestQuality(availableQualities, \n                                  currentBandwidth * 0.5 * this.BANDWIDTH_SAFETY_FACTOR);\n    }\n    \n    // Otherwise, select highest quality within 80% of bandwidth\n    return this.findBestQuality(availableQualities, \n                                currentBandwidth * this.BANDWIDTH_SAFETY_FACTOR);\n  }\n\n  private findBestQuality(qualities: Quality[], maxBitrate: number): Quality {\n    return qualities\n      .filter(q => q.bitrate <= maxBitrate)\n      .sort((a, b) => b.bitrate - a.bitrate)[0];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-7-case-study--e-commerce-platform-amazonflipkart",
      children: "Section 7: Case Study — E-Commerce Platform (Amazon/Flipkart)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-6",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Product catalog, cart, checkout, payment, order tracking, inventory management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 1M products, 100K concurrent users, <500ms search, high availability during sales."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-5",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Client[Client] --> LB[Load Balancer]\n    LB --> API[API Gateway]\n    API --> Product[Product Service]\n    API --> Cart[Cart Service]\n    API --> Order[Order Service]\n    API --> Inventory[Inventory Service]\n    API --> Payment[Payment Service]\n    API --> Search[Search Service]\n    \n    Product --> Cache[(Redis)]\n    Product --> DB[(Product DB)]\n    Search --> Elastic[(ElasticSearch)]\n    Cart --> Redis[(Redis)]\n    Order --> MQ[Message Queue]\n    MQ --> InvWorker[Inventory Worker]\n    MQ --> ShipWorker[Shipping Worker]\n    Order --> OrderDB[(Order DB)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inventory-reservation-pattern",
      children: "Inventory Reservation Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function addToCart(userId: string, productId: string, quantity: number): Promise<boolean> {\n  const key = `inventory:${productId}`;\n  \n  // Atomic decrement to reserve inventory (prevent overselling)\n  const available = await redis.decrBy(key, quantity);\n  \n  if (available < 0) {\n    // Rollback: release reserved inventory\n    await redis.incrBy(key, quantity);\n    return false; // Not enough stock\n  }\n  \n  // Add to cart\n  await redis.hincrBy(`cart:${userId}`, productId, quantity);\n  \n  // Set TTL for abandoned carts (30 min)\n  await redis.expire(`cart:${userId}`, 1800);\n  \n  return true;\n}\n\n// Order confirmation releases permanent deduction\nasync function placeOrder(userId: string): Promise<Order> {\n  const cartItems = await redis.hgetall(`cart:${userId}`);\n  \n  // Start distributed transaction\n  const order = await orderService.create(userId, cartItems);\n  \n  // Schedule inventory deduction for confirmation window\n  await mq.send('inventory:confirm', { \n    items: cartItems, \n    orderId: order.id \n  });\n  \n  // Clear cart\n  await redis.del(`cart:${userId}`);\n  \n  return order;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-8-case-study--notification-system",
      children: "Section 8: Case Study — Notification System"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-7",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Push notifications, email, SMS, in-app notifications, preference management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 1M notifications/min, <100ms delivery, 99.9% deliverability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-6",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Services[Services] --> MQ[Message Queue]\n    MQ --> Router[Notification Router]\n    Router --> EmailQ[Email Queue]\n    Router --> SMSQ[SMS Queue]\n    Router --> PushQ[Push Queue]\n    Router --> InAppQ[In-App Queue]\n    \n    EmailQ --> Email[Email Service<br/>SendGrid/AWS SES]\n    SMSQ --> SMS[SMS Service<br/>Twilio]\n    PushQ --> Push[Push Service<br/>FCM/APNs]\n    InAppQ --> InApp[WebSocket Service]\n    \n    Email --> Analytics[Analytics]\n    SMS --> Analytics\n    Push --> Analytics\n    InApp --> Analytics\n    \n    Router --> UserPref[User Preference<br/>DB]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rate-limiting--deduplication",
      children: "Rate Limiting & Deduplication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NotificationService {\n  private readonly RATE_LIMITS = {\n    email: { perMinute: 5, perHour: 50 },\n    sms: { perHour: 10 },\n    push: { perDay: 100 }\n  };\n\n  async send(userId: string, notification: Notification): Promise<boolean> {\n    const channel = notification.channel;\n    const limits = this.RATE_LIMITS[channel];\n    \n    // Rate limit check\n    const key = `ratelimit:${channel}:${userId}`;\n    const count = await redis.incr(key);\n    \n    if (count === 1) {\n      await redis.expire(key, 3600); // 1 hour TTL\n    }\n    \n    if (count > limits.perHour) {\n      return false; // Rate limited\n    }\n    \n    // Deduplication (same content within 5 min)\n    const dedupKey = `dedup:${userId}:${this.hashContent(notification)}`;\n    const exists = await redis.setnx(dedupKey, '1');\n    if (exists === 0) {\n      return false; // Duplicate\n    }\n    await redis.expire(dedupKey, 300);\n    \n    // Respect user preferences\n    const prefs = await this.userPreferences.get(userId);\n    if (!prefs.channels.includes(channel)) {\n      return false; // Channel disabled by user\n    }\n    \n    // Route to appropriate queue\n    await this.routeToQueue(notification);\n    return true;\n  }\n\n  private hashContent(notification: Notification): string {\n    return crypto.createHash('sha256')\n      .update(`${notification.type}:${notification.title}:${notification.body}`)\n      .digest('hex')\n      .slice(0, 16);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-9-case-study--rate-limiter",
      children: "Section 9: Case Study — Rate Limiter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithms",
      children: "Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How it Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens added at fixed rate, consumed per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth burst handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex parameter tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaky Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests processed at fixed rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drops burst requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter resets at window boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burst at boundary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window Log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp-based sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most accurate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory heavy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines fixed window + counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good accuracy + efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-bucket-implementation",
      children: "Token Bucket Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TokenBucket {\n  private tokens: Map<string, { count: number; lastRefill: number }> = new Map();\n  \n  constructor(\n    private maxTokens: number,\n    private refillRate: number,      // tokens per second\n    private refillInterval: number    // in ms\n  ) {}\n\n  allow(key: string): boolean {\n    const now = Date.now();\n    let bucket = this.tokens.get(key);\n    \n    if (!bucket) {\n      bucket = { count: this.maxTokens, lastRefill: now };\n      this.tokens.set(key, bucket);\n    }\n    \n    // Refill tokens\n    const elapsed = now - bucket.lastRefill;\n    const tokensToAdd = Math.floor(elapsed / this.refillInterval) * this.refillRate;\n    \n    if (tokensToAdd > 0) {\n      bucket.count = Math.min(this.maxTokens, bucket.count + tokensToAdd);\n      bucket.lastRefill = now;\n    }\n    \n    // Check if allowed\n    if (bucket.count > 0) {\n      bucket.count--;\n      return true;\n    }\n    \n    return false;\n  }\n}\n\n// Usage: 10 requests per second\nconst rateLimiter = new TokenBucket(10, 1, 100);\nif (rateLimiter.allow(`user:${userId}`)) {\n  // Process request\n} else {\n  // Return 429 Too Many Requests\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-10-case-study--distributed-web-crawler",
      children: "Section 10: Case Study — Distributed Web Crawler"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements-8",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional:"
      }), " Crawl websites, extract content, detect duplicates, respect robots.txt, schedule recrawls."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional:"
      }), " 10B pages, distributed, polite (respect crawl delay), fault-tolerant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-7",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    URLStore[(URL Frontier<br/>Redis/S3)] --> Fetcher[Crawler Fetchers]\n    Fetcher --> Parser[HTML Parser]\n    Parser --> Dedup[Deduplication]\n    Parser --> Extractor[Link Extractor]\n    Extractor --> URLQueue[URL Queue]\n    URLQueue --> URLStore\n    Parser --> Storage[(Content Store)]\n    Parser --> Indexer[Search Indexer]\n    \n    Scheduler[Crawl Scheduler] --> URLStore\n    Scheduler --> Robots[Robots.txt Cache]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "polite-crawler-implementation",
      children: "Polite Crawler Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CrawlJob {\n  url: string;\n  domain: string;\n  depth: number;\n  priority: number;\n}\n\nclass PoliteCrawler {\n  private domainDelays: Map<string, number> = new Map();\n  private lastCrawl: Map<string, number> = new Map();\n  \n  constructor(private defaultDelay: number = 1000) {}\n\n  async crawl(job: CrawlJob): Promise<void> {\n    const { url, domain } = job;\n    \n    // Respect Crawl-Delay from robots.txt\n    const delay = this.domainDelays.get(domain) || this.defaultDelay;\n    const lastTime = this.lastCrawl.get(domain) || 0;\n    const elapsed = Date.now() - lastTime;\n    \n    if (elapsed < delay) {\n      await this.sleep(delay - elapsed); // Wait before crawling\n    }\n    \n    try {\n      const response = await fetch(url, {\n        headers: { 'User-Agent': 'Crawler/1.0' }\n      });\n      \n      if (response.ok) {\n        const html = await response.text();\n        const links = this.extractLinks(html, url);\n        \n        // Check robots.txt\n        const allowedLinks = await this.filterByRobotsTxt(links, domain);\n        \n        // Send discovered URLs to frontier\n        await this.urlFrontier.add(allowedLinks);\n        \n        // Deduplicate content\n        const contentHash = this.hashContent(html);\n        if (!await this.dedupStore.exists(contentHash)) {\n          await this.dedupStore.store(contentHash);\n          await this.contentStore.store(url, html);\n        }\n      }\n      \n      this.lastCrawl.set(domain, Date.now());\n      \n    } catch (error) {\n      // Retry with exponential backoff\n      await this.scheduleRetry(job);\n    }\n  }\n\n  private hashContent(html: string): string {\n    // Normalize whitespace, strip tags\n    const normalized = html.replace(/\\s+/g, ' ').replace(/<[^>]*>/g, '');\n    return crypto.createHash('sha256').update(normalized).digest('hex');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-tables",
      children: "Quick Reference Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-design-concepts-summary",
      children: "System Design Concepts Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round Robin, Least Connections, IP Hash, Weighted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Aside, Write-Through, Write-Behind, LRU, LFU, TTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replicas, Sharding, Partitioning, Federation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL vs NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID vs BASE, Schema vs Schema-less, Joins vs Denormalized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAP Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP (consistency), AP (availability), pick 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka (log), RabbitMQ (broker), SQS (managed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge caching, DDoS protection, Geo-distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong vs Eventual vs Read-your-writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly-once processing, idempotency keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token Bucket, Leaky Bucket, Sliding Window"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-choice-guide",
      children: "Database Choice Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended DB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions, complex queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payments, banking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy, simple queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL + Read Replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time series, high write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat messages, logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, session store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document, flexible schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMS, catalogs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search, analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neo4j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social graph, recommendations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirement-targets",
      children: "Non-Functional Requirement Targets"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9% (3 nines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.77 hours downtime/year"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99% (4 nines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52.6 minutes downtime/year"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.999% (5 nines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.26 minutes downtime/year"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency P99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API: <200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99th percentile response time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web page: <2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to interactive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests per second (RPS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong: Read-after-write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linearizability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual: seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation delay"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the complete system design interview preparation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework:"
        }), " 6-step structured approach (Requirements → Scale → Data Model → HLD → Deep Dive → Trade-offs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability Concepts:"
        }), " Load balancing, caching (LRU/LFU/TTL), database scaling (sharding/replicas), message queues, CDN"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10 Case Studies:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "URL Shortener — Base62 encoding, cache-aside, redirect"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Chat System — WebSocket, Cassandra, message ordering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ride-Sharing — Geohash/QuadTree, matching, surge pricing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Social Feed — Fanout-on-write vs read, hybrid approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Payment System — State machine, idempotency, 2-phase commit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Video Streaming — Adaptive bitrate, transcoding, CDN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "E-Commerce — Inventory reservation, cart management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Notification System — Multi-channel routing, rate limiting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rate Limiter — Token bucket, distributed rate limiting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Web Crawler — Polite crawling, deduplication, robots.txt"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structure your answer:"
          }), " Always follow the 6-step framework. Never jump to architecture without clarifying requirements."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Start with estimation:"
          }), " Calculate QPS, storage, and bandwidth. This shows engineering maturity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Draw boundaries first:"
          }), " Define the scope. What are we building? What are we NOT building?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mention trade-offs:"
          }), " Every design choice has pros and cons. Explicitly discuss them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use realistic numbers:"
          }), " 1M DAU, 10K QPS, 1TB/day — practice making reasonable approximations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Go deep on one component:"
          }), " Choose the most interesting part (database, caching, or specific service) and dive into details."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "⭐ Must-know for interviews:"
          }), " URL Shortener, Chat System, Ride-Sharing, and Social Feed — appear in 80% of system design rounds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "For government system design interviews (NIC, DRDO):"
          }), " Focus on reliability, security, and handling failure scenarios rather than extreme scale."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Practice drawing diagrams:"
          }), " Use the Mermaid diagrams in this chapter as templates. Practice drawing them on whiteboard."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Common mistakes to avoid:"
          }), " Over-engineering (start simple), missing non-functional requirements, not considering failure scenarios, designing without numbers."]
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