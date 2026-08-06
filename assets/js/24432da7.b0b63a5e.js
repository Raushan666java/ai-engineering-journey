"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89440],{

/***/ 83805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_21_interview_preparation_08_system_design_interview_md_244_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-21-interview-preparation-08-system-design-interview-md-244.json
const site_docs_courses_ai_engineering_placement_21_interview_preparation_08_system_design_interview_md_244_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/interview-preparation/08-system-design-interview","title":"System Design Interview","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/21-interview-preparation/08-system-design-interview.md","sourceDirName":"courses/ai-engineering-placement/21-interview-preparation","slug":"/ai-engineering-placement/21-interview-preparation/08-system-design-interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/08-system-design-interview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":236,"frontMatter":{"id":"08-system-design-interview","slug":"/ai-engineering-placement/21-interview-preparation/08-system-design-interview","title":"System Design Interview","sidebar_label":"System Design Interview","sidebar_position":236},"sidebar":"coursesSidebar","previous":{"title":"AI Agents Interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview"},"next":{"title":"Behavioral STAR Interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/09-behavioral-star-interview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/21-interview-preparation/08-system-design-interview.md


const frontMatter = {
	id: '08-system-design-interview',
	slug: '/ai-engineering-placement/21-interview-preparation/08-system-design-interview',
	title: 'System Design Interview',
	sidebar_label: 'System Design Interview',
	sidebar_position: 236
};
const contentTitle = 'System Design Interview';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "8.1 Design Framework",
  "id": "81-design-framework",
  "level": 2
}, {
  "value": "8.2 Data Stores",
  "id": "82-data-stores",
  "level": 2
}, {
  "value": "8.3 Caching",
  "id": "83-caching",
  "level": 2
}, {
  "value": "8.4 Load Balancing",
  "id": "84-load-balancing",
  "level": 2
}, {
  "value": "8.5 Microservices &amp; APIs",
  "id": "85-microservices--apis",
  "level": 2
}, {
  "value": "8.6 Real-Time Systems",
  "id": "86-real-time-systems",
  "level": 2
}, {
  "value": "8.7 Data Systems",
  "id": "87-data-systems",
  "level": 2
}, {
  "value": "8.8 Case Studies",
  "id": "88-case-studies",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
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
        id: "system-design-interview",
        children: "System Design Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply a structured framework to approach any system design question"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design scalable data stores: SQL vs NoSQL, sharding, replication, CAP tradeoffs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architect distributed systems with load balancing, caching, CDNs, and message queues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design real-time systems: chat, live streaming, collaborative editing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design data-intensive systems: analytics pipeline, data warehouse, streaming processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whiteboard and communicate design decisions clearly under time pressure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding system design interview is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how system design interview works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements, estimation, data model, API, high-level design, deep dive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Stores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL vs NoSQL, replication, sharding, indexing strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN, Redis, cache eviction, cache-aside, write-through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms, DNS, reverse proxy, consistent hashing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices & APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gateway, service mesh, RPC, GraphQL, REST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-Time Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSockets, SSE, chat, notifications, live streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLAP vs OLTP, data warehouse, streaming, batch processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case Studies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL shortener, chat system, rate limiter, design interview walkthrough"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Design Framework] --> B[Data Stores]\n    B --> C[Caching]\n    C --> D[Load Balancing]\n    D --> E[Microservices & APIs]\n    E --> F[Real-Time Systems]\n    F --> G[Data Systems]\n    G --> H[Case Studies]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-design-framework",
      children: "8.1 Design Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A structured approach ensures you cover all aspects of the system. Follow this framework:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 — Requirements gathering (2-3 min)"
      }), ": Ask clarifying questions. Functional requirements (what the system does). Non-functional requirements (scalability, latency, availability, durability). Out-of-scope items."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — Estimation (2-3 min)"
      }), ": Traffic (DAU, requests/second, bandwidth), storage (data per entity, total storage, growth rate), compute (servers needed, CPU/memory requirements)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 — Data model (3-4 min)"
      }), ": Schema design (tables, indexes, relationships). Storage choice (SQL vs NoSQL). Data access patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 — API design (2-3 min)"
      }), ": REST/GraphQL endpoints, request/response formats, WebSocket events."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 — High-level design (5-7 min)"
      }), ": System diagram showing components (load balancer, app servers, databases, caches, queues, CDN). Data flow arrows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6 — Deep dive (10-15 min)"
      }), ": Focus on the most interesting aspect. Scaling, sharding, replication, consistency, fault tolerance, monitoring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7 — Tradeoffs and summary (2-3 min)"
      }), ": What you optimized for, what you sacrificed, alternative approaches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Estimation utility\ndef estimate_traffic(dau: int, requests_per_user_per_day: float) -> dict:\n    daily_requests = dau * requests_per_user_per_day\n    qps = daily_requests / (24 * 3600)  # queries per second\n    peak_qps = qps * 3  # assume 3x peak factor\n    return {\n        \"daily_requests\": daily_requests,\n        \"avg_qps\": qps,\n        \"peak_qps\": peak_qps,\n    }\n\ndef estimate_storage(records_per_day: int, record_size_bytes: int, retention_days: int) -> dict:\n    daily_storage = records_per_day * record_size_bytes\n    total = daily_storage * retention_days\n    return {\n        \"daily_gb\": daily_storage / (1024**3),\n        \"total_gb\": total / (1024**3),\n        \"total_tb\": total / (1024**4),\n    }\n\n## Example: Design Twitter\n\n## DAU: 200M, tweets/user/day: 2\ntraffic = estimate_traffic(200_000_000, 2)\nprint(f\"Avg QPS: {traffic['avg_qps']:.0f}, Peak QPS: {traffic['peak_qps']:.0f}\")\n\n## Avg QPS: 4,630, Peak QPS: 13,890\n\n## Storage: 400M tweets/day, 500 bytes per tweet, 5 year retention\nstorage = estimate_storage(400_000_000, 500, 365 * 5)\nprint(f\"Total storage: {storage['total_tb']:.0f} TB\")\n\n## Total storage: ~333 TB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-data-stores",
      children: "8.2 Data Stores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right data store is one of the most important design decisions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational databases (PostgreSQL, MySQL)"
      }), ": Strong consistency, ACID transactions, complex queries, joins. Best for: financial systems, user accounts, inventory, any system requiring data integrity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document stores (MongoDB, DynamoDB)"
      }), ": Flexible schema, horizontal scaling, good for hierarchical data. Best for: content management, catalogs, user profiles, gaming."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key-value stores (Redis, Memcached)"
      }), ": Ultra-fast access, simple data model. Best for: caching, session storage, real-time leaderboards."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wide-column stores (Cassandra, ScyllaDB)"
      }), ": High write throughput, eventually consistent. Best for: time-series data, IoT, event logging, recommendation engines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Search engines (Elasticsearch)"
      }), ": Full-text search, complex aggregations. Best for: log analytics, product search, site search."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Sharding strategies\nimport hashlib\n\nclass ConsistentHashRing:\n    def __init__(self, nodes: list[str], replicas: int = 100):\n        self.replicas = replicas\n        self.ring = {}\n        self.sorted_keys = []\n        for node in nodes:\n            self.add_node(node)\n\n    def add_node(self, node: str) -> None:\n        for i in range(self.replicas):\n            key = self._hash(f\"{node}:{i}\")\n            self.ring[key] = node\n            self.sorted_keys.append(key)\n        self.sorted_keys.sort()\n\n    def remove_node(self, node: str) -> None:\n        for i in range(self.replicas):\n            key = self._hash(f\"{node}:{i}\")\n            del self.ring[key]\n            self.sorted_keys.remove(key)\n\n    def get_node(self, key: str) -> str:\n        if not self.ring:\n            raise Exception(\"No nodes available\")\n        hash_key = self._hash(key)\n        for ring_key in self.sorted_keys:\n            if hash_key <= ring_key:\n                return self.ring[ring_key]\n        return self.ring[self.sorted_keys[0]]\n\n    def _hash(self, key: str) -> int:\n        return int(hashlib.md5(key.encode()).hexdigest(), 16)\n\n## Range-based sharding\nclass RangeShardManager:\n    def __init__(self, shard_ranges: list[tuple[int, int, str]]):\n        self.shards = shard_ranges  # [(min_id, max_id, shard_url), ...]\n\n    def get_shard(self, entity_id: int) -> str:\n        for min_id, max_id, url in self.shards:\n            if min_id <= entity_id <= max_id:\n                return url\n        raise ValueError(f\"No shard for id {entity_id}\")\n\n## Read replicas for scaling reads\nclass ReadWriteSplitting:\n    def __init__(self, write_master: str, read_replicas: list[str]):\n        self.master = write_master\n        self.replicas = read_replicas\n        self._replica_index = 0\n\n    def write(self, query: str, params: tuple) -> None:\n        execute(self.master, query, params)\n\n    def read(self, query: str, params: tuple) -> list:\n        replica = self.replicas[self._replica_index % len(self.replicas)]\n        self._replica_index += 1\n        return execute(replica, query, params)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication"
      }), ": Leader-follower (single leader, async/sync replication), leader-leader (multi-write, conflict resolution), quorum-based (R = read quorum, W = write quorum, N = total replicas)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-caching",
      children: "8.3 Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching reduces latency and database load. A multi-level cache strategy is essential for large-scale systems."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CDN"
      }), ": Caches static assets (images, CSS, JS, videos) at edge locations close to users. Providers: CloudFront, Cloudflare, Akamai."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In-memory cache (Redis, Memcached)"
      }), ": Caches database query results, computed data, and session state. TTL-based eviction or LRU."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application-level cache"
      }), ": In-process memory cache (lru_cache, dictionary) for frequently accessed, rarely changed data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Browser cache"
      }), ": HTTP caching headers (Cache-Control, ETag, Expires) to reduce network requests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from datetime import timedelta\nfrom typing import Optional, Any\n\n## Multi-level cache\nclass MultiLevelCache:\n    def __init__(self, l1_cache: Any, l2_cache: Any, l1_ttl: int = 60, l2_ttl: int = 3600):\n        self.l1 = l1_cache  # in-memory, fast, small\n        self.l2 = l2_cache  # Redis, slower, large\n        self.l1_ttl = l1_ttl\n        self.l2_ttl = l2_ttl\n\n    def get(self, key: str) -> Optional[str]:\n        # Check L1 first\n        result = self.l1.get(key)\n        if result is not None:\n            return result\n\n        # Check L2\n        result = self.l2.get(key)\n        if result is not None:\n            # Promote to L1\n            self.l1.set(key, result, self.l1_ttl)\n            return result\n\n        return None\n\n    def set(self, key: str, value: str) -> None:\n        self.l1.set(key, value, self.l1_ttl)\n        self.l2.set(key, value, self.l2_ttl)\n\n    def invalidate(self, key: str) -> None:\n        self.l1.invalidate(key)\n        self.l2.delete(key)\n\n## Cache-aside pattern\ndef get_user(user_id: int, cache, db) -> dict:\n    cache_key = f\"user:{user_id}\"\n\n    # Try cache\n    cached = cache.get(cache_key)\n    if cached:\n        return json.loads(cached)\n\n    # Load from database\n    user = db.query(\"SELECT * FROM users WHERE id = ?\", (user_id,))\n\n    if user:\n        cache.set(cache_key, json.dumps(user), ttl=3600)\n    return user\n\n## Write-through cache\ndef update_user(user_id: int, data: dict, cache, db) -> dict:\n    # Update database\n    db.execute(\"UPDATE users SET name = ? WHERE id = ?\", (data[\"name\"], user_id))\n\n    # Update cache (or invalidate)\n    cache.set(f\"user:{user_id}\", json.dumps({**data, \"id\": user_id}), ttl=3600)\n\n    return data\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache eviction policies"
      }), ": LRU (Least Recently Used) — most common; LFU (Least Frequently Used) — for popularity-based access; FIFO (First In First Out) — simple; TTL (Time To Live) — automatic expiration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache invalidation challenges"
      }), ": Stale data, thundering herd (many requests miss cache simultaneously after expiry). Solutions: write-through cache, early recalculation, probabilistic expiration, cache warming, stale-while-revalidate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-load-balancing",
      children: "8.4 Load Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load balancers distribute traffic across multiple servers for availability and scalability."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithms"
      }), ": Round robin (simple, equal distribution), least connections (sends to least busy server), IP hash (session persistence), weighted round robin (for heterogeneous servers)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS load balancing"
      }), ": Distribute traffic across data centers. Simple but slow to failover (TTL propagation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse proxy (Nginx, HAProxy)"
      }), ": Terminates client connections, distributes to backend servers. Can also handle SSL termination, request buffering, and health checks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 4 vs Layer 7"
      }), ": L4 (transport layer — TCP/UDP, faster, less intelligent), L7 (application layer — HTTP/HTTPS, can inspect requests, content-based routing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Simple round-robin load balancer\nclass RoundRobinLoadBalancer:\n    def __init__(self, servers: list[str]):\n        self.servers = servers\n        self.index = 0\n\n    def get_server(self) -> str:\n        server = self.servers[self.index]\n        self.index = (self.index + 1) % len(self.servers)\n        return server\n\n## Weighted round robin\nclass WeightedLoadBalancer:\n    def __init__(self, servers: dict[str, int]):\n        # servers = {\"server1\": 3, \"server2\": 1}  # server1 gets 3x traffic\n        self.pool = []\n        for server, weight in servers.items():\n            self.pool.extend([server] * weight)\n        self.index = 0\n\n    def get_server(self) -> str:\n        server = self.pool[self.index]\n        self.index = (self.index + 1) % len(self.pool)\n        return server\n\n## Least connections (simplified)\nclass LeastConnectionsBalancer:\n    def __init__(self, servers: list[str]):\n        self.connections = {s: 0 for s in servers}\n\n    def assign(self) -> str:\n        server = min(self.connections, key=self.connections.get)\n        self.connections[server] += 1\n        return server\n\n    def release(self, server: str) -> None:\n        self.connections[server] = max(0, self.connections[server] - 1)\n\n## Health check integration\nclass HealthCheckBalancer(RoundRobinLoadBalancer):\n    def __init__(self, servers: list[str], health_check_path: str = \"/health\"):\n        super().__init__(servers)\n        self.healthy = {s: True for s in servers}\n        self.health_check_path = health_check_path\n\n    async def check_health(self) -> None:\n        import httpx\n        async with httpx.AsyncClient() as client:\n            for server in self.servers:\n                try:\n                    resp = await client.get(f\"{server}{self.health_check_path}\", timeout=2)\n                    self.healthy[server] = resp.status_code == 200\n                except Exception:\n                    self.healthy[server] = False\n\n    def get_server(self) -> str:\n        healthy_servers = [s for s in self.servers if self.healthy[s]]\n        if not healthy_servers:\n            raise Exception(\"No healthy servers available\")\n        # Fall back to super to get round-robin among healthy\n        return healthy_servers[self.index % len(healthy_servers)]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistent hashing"
      }), ": When adding/removing servers, only K/N keys need to be remapped (where K = total keys, N = number of servers). Essential for distributed caches and databases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-microservices--apis",
      children: "8.5 Microservices & APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microservices decompose a system into independently deployable services. Each service owns its data and domain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "API Gateway"
      }), ": Single entry point for all clients. Handles authentication, rate limiting, routing, aggregation, and protocol translation. Alternatives: Kong, Apigee, AWS API Gateway, custom Nginx."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service mesh"
      }), ": Infrastructure layer for service-to-service communication. Handles traffic management, observability, and security. Istio, Linkerd, Consul Connect."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "gRPC"
      }), ": High-performance RPC framework using Protocol Buffers. Good for internal service-to-service communication. Supports bi-directional streaming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Service decomposition example — e-commerce platform\nSERVICES = {\n    \"user-service\": {\n        \"responsibilities\": [\"User registration\", \"Authentication\", \"Profile management\"],\n        \"data\": [\"users\", \"sessions\"],\n        \"api\": [\"POST /users\", \"GET /users/:id\", \"POST /auth/login\"],\n    },\n    \"product-service\": {\n        \"responsibilities\": [\"Product catalog\", \"Inventory\", \"Search\"],\n        \"data\": [\"products\", \"categories\", \"inventory\"],\n        \"api\": [\"GET /products\", \"GET /products/:id\", \"GET /search\"],\n    },\n    \"order-service\": {\n        \"responsibilities\": [\"Order management\", \"Cart\", \"Order lifecycle\"],\n        \"data\": [\"orders\", \"order_items\", \"carts\"],\n        \"api\": [\"POST /orders\", \"GET /orders/:id\", \"PATCH /orders/:id/status\"],\n    },\n    \"payment-service\": {\n        \"responsibilities\": [\"Payment processing\", \"Refunds\", \"Billing\"],\n        \"data\": [\"payments\", \"transactions\"],\n        \"api\": [\"POST /payments\", \"POST /refunds\"],\n    },\n    \"notification-service\": {\n        \"responsibilities\": [\"Email\", \"SMS\", \"Push notifications\"],\n        \"data\": [\"notification_templates\", \"sent_notifications\"],\n        \"api\": [\"POST /notifications/send\"],\n    },\n}\n\n## Circuit breaker pattern\nimport time\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold: int = 5, recovery_timeout: float = 30.0):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = 0.0\n        self.state = \"CLOSED\"  # CLOSED, OPEN, HALF_OPEN\n\n    async def call(self, func, *args, **kwargs):\n        if self.state == \"OPEN\":\n            if time.time() - self.last_failure_time >= self.recovery_timeout:\n                self.state = \"HALF_OPEN\"\n            else:\n                raise Exception(\"Circuit breaker is OPEN\")\n\n        try:\n            result = await func(*args, **kwargs)\n            if self.state == \"HALF_OPEN\":\n                self.state = \"CLOSED\"\n                self.failure_count = 0\n            return result\n        except Exception as e:\n            self.failure_count += 1\n            self.last_failure_time = time.time()\n            if self.failure_count >= self.failure_threshold:\n                self.state = \"OPEN\"\n            raise e\n\n## API rate limiter\nclass SlidingWindowRateLimiter:\n    def __init__(self, redis_client):\n        self.redis = redis_client\n\n    async def check_rate_limit(self, user_id: str, endpoint: str, max_requests: int, window_ms: int) -> bool:\n        key = f\"ratelimit:{user_id}:{endpoint}\"\n        now = int(time.time() * 1000)\n        window_start = now - window_ms\n\n        pipe = self.redis.pipeline()\n        pipe.zremrangebyscore(key, 0, window_start)\n        pipe.zcard(key)\n        pipe.zadd(key, {str(now): now})\n        pipe.expire(key, window_ms // 1000 + 1)\n        _, count, _, _ = pipe.execute()\n\n        return count < max_requests\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inter-service communication patterns"
      }), ": Synchronous (HTTP/gRPC — simple but creates coupling), asynchronous (message queue/event bus — decoupled, eventual consistency), hybrid (events for notification, APIs for queries)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-real-time-systems",
      children: "8.6 Real-Time Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-time features (chat, notifications, live updates) are common system design questions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WebSockets"
      }), ": Full-duplex persistent connection. Used for: chat, live notifications, collaborative editing, real-time dashboards."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server-Sent Events (SSE)"
      }), ": Server pushes events to client over HTTP. Simpler than WebSockets, unidirectional. Used for: stock tickers, status updates, news feeds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Long polling"
      }), ": Client sends a request, server holds it until data is available. Simpler to implement (no special server support) but less efficient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nfrom typing import Set\nfrom fastapi import FastAPI, WebSocket, WebSocketDisconnect\n\napp = FastAPI()\n\nclass ChatRoom:\n    def __init__(self):\n        self.connections: Set[WebSocket] = set()\n\n    async def connect(self, websocket: WebSocket):\n        await websocket.accept()\n        self.connections.add(websocket)\n\n    def disconnect(self, websocket: WebSocket):\n        self.connections.discard(websocket)\n\n    async def broadcast(self, message: str, sender: WebSocket = None):\n        for conn in self.connections:\n            if conn != sender:\n                try:\n                    await conn.send_text(message)\n                except Exception:\n                    self.disconnect(conn)\n\nroom = ChatRoom()\n\n@app.websocket(\"/ws/chat/{room_id}\")\nasync def chat_endpoint(websocket: WebSocket, room_id: str):\n    await room.connect(websocket)\n    try:\n        while True:\n            data = await websocket.receive_text()\n            await room.broadcast(data, sender=websocket)\n    except WebSocketDisconnect:\n        room.disconnect(websocket)\n\n## Notification system with fan-out\nclass NotificationService:\n    def __init__(self, db, message_queue, websocket_manager):\n        self.db = db\n        self.queue = message_queue\n        self.ws = websocket_manager\n\n    async def send_notification(self, user_id: str, notification: dict):\n        # Store in database\n        notif_id = await self.db.execute(\n            \"INSERT INTO notifications (user_id, type, content, created_at) VALUES ($1, $2, $3, NOW())\",\n            user_id, notification[\"type\"], notification[\"content\"]\n        )\n\n        # Send via WebSocket if connected\n        await self.ws.send_to_user(user_id, {\n            \"type\": \"notification\",\n            \"id\": notif_id,\n            **notification\n        })\n\n        # No WebSocket — will be fetched on next page load\n        # Push notification as fallback\n        await self.queue.publish(\"send_push\", {\n            \"user_id\": user_id,\n            \"title\": notification[\"title\"],\n            \"body\": notification[\"body\"],\n        })\n\n    async def get_notifications(self, user_id: str, limit: int = 50) -> list[dict]:\n        rows = await self.db.fetch(\n            \"SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2\",\n            user_id, limit\n        )\n        return [dict(r) for r in rows]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Presence system"
      }), ": Track online/offline status. Use Redis with TTL (heartbeat every 30 seconds). Show \"last seen\" for offline users. Handle disconnections gracefully."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-data-systems",
      children: "8.7 Data Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data-intensive systems handle large-scale data processing, analytics, and reporting."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OLTP (Online Transaction Processing)"
      }), ": Many small transactions, low latency, row-oriented storage. Standard relational databases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OLAP (Online Analytical Processing)"
      }), ": Complex queries on large datasets, column-oriented storage (ClickHouse, Redshift, BigQuery)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda architecture"
      }), ": Batch processing (accurate, high latency) + stream processing (approximate, low latency). Combines results from both paths."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kappa architecture"
      }), ": Everything is a stream. Use stream processing for all data. Simpler than Lambda, but requires replay capability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Event streaming architecture\nfrom dataclasses import dataclass\nfrom datetime import datetime\nimport json\n\n@dataclass\nclass Event:\n    event_id: str\n    event_type: str\n    entity_id: str\n    timestamp: datetime\n    data: dict\n\nclass StreamProcessor:\n    def __init__(self, kafka_producer, kafka_consumer):\n        self.producer = kafka_producer\n        self.consumer = kafka_consumer\n\n    async def emit_event(self, event: Event):\n        await self.producer.send(\n            topic=event.event_type,\n            key=event.entity_id,\n            value=json.dumps({\n                \"event_id\": event.event_id,\n                \"type\": event.event_type,\n                \"entity_id\": event.entity_id,\n                \"timestamp\": event.timestamp.isoformat(),\n                \"data\": event.data,\n            }),\n        )\n\n    async def process_stream(self, topic: str, handler):\n        async for message in self.consumer:\n            event_data = json.loads(message.value)\n            event = Event(\n                event_id=event_data[\"event_id\"],\n                event_type=event_data[\"type\"],\n                entity_id=event_data[\"entity_id\"],\n                timestamp=datetime.fromisoformat(event_data[\"timestamp\"]),\n                data=event_data[\"data\"],\n            )\n            await handler(event)\n\n## Windowed aggregation\nclass SlidingWindowAggregator:\n    def __init__(self, window_size: int = 60, slide_interval: int = 10):\n        self.window_size = window_size  # seconds\n        self.slide_interval = slide_interval\n        self.buckets: dict[int, list] = {}\n\n    def add_event(self, event: dict) -> None:\n        bucket = int(time.time() / self.slide_interval) * self.slide_interval\n        self.buckets.setdefault(bucket, []).append(event)\n        # Clean old buckets\n        cutoff = time.time() - self.window_size\n        self.buckets = {k: v for k, v in self.buckets.items() if k >= cutoff}\n\n    def get_window_stats(self) -> dict:\n        cutoff = time.time() - self.window_size\n        relevant = [e for k, v in self.buckets.items() if k >= cutoff for e in v]\n        return {\n            \"count\": len(relevant),\n            \"timestamp\": datetime.now().isoformat(),\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data pipeline design"
      }), ": Source (DB, logs, events) → Ingestion (Kafka, Kinesis) → Processing (Spark, Flink) → Storage (S3, Redshift) → Serving (BI tools, APIs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-case-studies",
      children: "8.8 Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 1: URL Shortener"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements: Generate short URLs, redirect to original, track clicks, handle 100M URLs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data model: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "urls(id BIGSERIAL, short_code VARCHAR(10) UNIQUE, original_url TEXT, created_at TIMESTAMP, user_id INT, click_count INT DEFAULT 0)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Short code: Base62 encode auto-increment ID (deterministic, no collision) or random 7-char string. For 100M URLs, 7 chars of 62 = 3.5T combinations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key design: Redirect is a simple key lookup (Redis cache with DB fallback). Click tracking is async (Kafka + batch write to DB). Cache hit ratio target: >99% for frequently accessed URLs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def base62_encode(num: int) -> str:\n    alphabet = \"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\"\n    if num == 0:\n        return alphabet[0]\n    result = []\n    while num > 0:\n        num, rem = divmod(num, 62)\n        result.append(alphabet[rem])\n    return \"\".join(reversed(result))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 2: Chat System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements: 1:1 and group chat, 50M DAU, messages delivered in <100ms, message history for 1 year."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architecture: WebSocket gateway farm (persistent connections), Redis pub/sub for message routing within a chat room, Cassandra for message history (ordered by time), S3 for media attachments."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data model: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "messages(chat_id, message_id TIMEUUID, sender_id, content, created_at)"
      }), " with partition key = chat_id."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key design: Fan-out on write for small groups (write to each member's inbox), fan-out on read for large groups (read from shared timeline). Push notifications via APNS/FCM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case Study 3: Rate Limiter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements: 100K QPS, per-user rate limiting, sliding window, configurable limits per endpoint."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architecture: Redis sorted sets (sliding window) or Redis counters (fixed window). Distributed via Redis Cluster. Local in-memory counters for hot-path decisions, synced to Redis periodically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RateLimiter:\n    def __init__(self, redis_client):\n        self.redis = redis_client\n\n    async def is_allowed(self, user_id: str, limit: int, window_ms: int) -> bool:\n        key = f\"rl:{user_id}\"\n        now = int(time.time() * 1000)\n\n        # Remove old entries\n        await self.redis.zremrangebyscore(key, 0, now - window_ms)\n\n        # Count recent requests\n        count = await self.redis.zcard(key)\n\n        if count >= limit:\n            return False\n\n        # Add current request\n        await self.redis.zadd(key, {str(now): now})\n        await self.redis.expire(key, window_ms // 1000 + 1)\n        return True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Design interview walkthrough"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarify requirements (functional + non-functional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate scale (traffic, storage, bandwidth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define data model and API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw high-level architecture diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep dive: sharding, caching, consistency, fault tolerance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summarize tradeoffs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the 7-step framework: requirements → estimation → data model → API → high-level design → deep dive → tradeoffs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose data stores based on access patterns: SQL for consistency, NoSQL for scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-level caching: CDN → Redis → local cache → database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load balancing: round robin for simplicity, consistent hashing for cache-friendly distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microservices decompose by domain; use API gateway for cross-cutting concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time systems: WebSockets for bidirectional, SSE for server push, Kafka for event streaming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data systems: OLTP for transactions, OLAP for analytics, streaming for real-time processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Practice common designs: URL shortener, chat, rate limiter, news feed, payment system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Estimating scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculate QPS and storage upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumping into design without numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL for consistency, NoSQL for scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using MongoDB for financial transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy workload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add caching layer + read replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling the write master"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High write throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append-only log + async processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous writes to relational DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-based decomposition, async communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting by technical layers only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSockets for low-latency bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polling every second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System design interview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draw and explain, not just talk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coding during system design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you approach a system design interview question?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the 7-step framework:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Clarify requirements"
            }), " (2-3 min): Ask about functional requirements (what should the system do?) and non-functional requirements (how many users, latency requirements, availability expectations)."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Estimate scale"
            }), " (2-3 min): Calculate daily active users, QPS, storage, bandwidth. Use rough numbers and round for simplicity."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data model"
            }), " (3-4 min): Define the main entities, relationships, and storage choice. Draw the schema on the whiteboard."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "API design"
            }), " (2-3 min): Define the main endpoints and their request/response format."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High-level design"
            }), " (5-7 min): Draw the system diagram with all major components and data flow."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep dive"
            }), " (10-15 min): Focus on the most interesting part — caching strategy, sharding, consistency model, fault tolerance."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Summarize"
            }), " (2-3 min): Review the design, discuss tradeoffs, and mention what you would improve."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Throughout: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "communicate clearly"
          }), ", explain tradeoffs, and engage the interviewer for feedback."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: When would you choose SQL over NoSQL for a new system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Choose SQL (PostgreSQL, MySQL) when"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Data integrity is critical (ACID transactions, foreign keys)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complex queries and joins are needed"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Schema is stable and well-defined"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consistency is more important than availability (CAP: CP)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Examples: financial systems, user accounts, inventory"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Choose NoSQL when"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Schema is flexible or evolving rapidly"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Need horizontal scaling with high write throughput"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Data is hierarchical or document-oriented"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Availability is more important than consistency (CAP: AP)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Examples: user sessions, IoT data, content catalogs, event logs"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid approach"
          }), ": Many systems use both. PostgreSQL for core business data (accounts, orders), DynamoDB/MongoDB for high-throughput access patterns (sessions, events, user-generated content)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Design a URL shortener like bit.ly.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Shorten URLs, redirect to original, track clicks, handle 100M URLs, fast redirects."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data model"
          }), ": `urls(id BIGSERIAL, short_code VARCHAR(10) UNIQUE, original_url TEXT, user_id INT, created_at TIMESTAMP, clicks INT DEFAULT 0)`. Index on short_code."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Short code generation"
          }), ": Base62 encode auto-increment ID (deterministic, no collision check needed). 7 characters → 62^7 ≈ 3.5 trillion combinations."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "API"
          }), ": POST /shorten (returns short code), GET /{code} (HTTP 301 redirect with Location header), GET /{code}/stats (clicks, referrers)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "High-level design"
          }), ": Load balancer → Web servers → Redis cache → PostgreSQL. Write path: insert URL → get ID → encode → update short_code. Read path: check Redis → if miss, check DB → populate Redis → return redirect."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scale"
          }), ": 100M URLs = ~50GB storage (500 bytes per record). Redis can handle 100K QPS. For higher scale, shard by short_code prefix."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How would you design a real-time chat application?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": 1:1 and group chat, 50M DAU, <100ms delivery, persistent message history."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WebSocket gateway"
            }), ": Elastic load balancer → WebSocket server farm. Each server handles 10K+ persistent connections."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection management"
            }), ": Redis maintains user → WebSocket server mapping. When user connects, register in Redis."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Message routing"
            }), ": Sender's WebSocket server publishes message to Redis pub/sub channel for the chat room. All servers subscribed to the channel receive and forward to connected recipients."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Message persistence"
            }), ": Cassandra for message history (partitioned by chat_id, ordered by time). TTL of 1 year."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fan-out strategy"
            }), ": Small groups (≤100 members): write message to each member's timeline in Cassandra. Large groups: read from shared timeline on demand."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key considerations"
          }), ": Handle reconnection (last seen message ID for sync), presence (heartbeat with TTL in Redis), media uploads (S3 with signed URLs), push notifications (APNS/FCM for offline users)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Explain consistent hashing and why it's important.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consistent hashing is a distributed hashing scheme that maps keys to servers on a hash ring. Each server is placed on the ring at multiple points (virtual nodes). Keys are assigned to the nearest server clockwise on the ring."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Why it matters"
          }), ": In a simple modulo-based shard (key % N), adding or removing a server causes K * (N-1)/N keys to move (almost all keys). In consistent hashing, only K/N keys move when a server changes."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Benefits"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal redistribution when scaling up/down"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hotspots are reduced by virtual nodes (each physical server maps to multiple ring positions)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports heterogeneous servers (heavier servers get more virtual nodes)"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Used in"
          }), ": Amazon DynamoDB, Cassandra, Discord, Akamai CDN."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tradeoffs"
          }), ": Lookup is O(log N) with a sorted ring (binary search). Load distribution depends on hash function quality. Virtual nodes help but add memory overhead."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you design a news feed system like Facebook or Twitter?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Show a personalized feed of recent posts from followed users/entities. 500M DAU, <500ms feed load, posts within 24 hours."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Two approaches"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fan-out on write (push)"
            }), ": When a user posts, write the post ID to each follower's feed cache (Redis list). Pros: O(1) read. Cons: write amplification for users with millions of followers (celebrities)."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fan-out on read (pull)"
            }), ": When loading the feed, fetch posts from followed users, merge and rank. Pros: O(1) write. Cons: O(n) read (n = number of followed users), slow for users following many accounts."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid approach"
          }), ": Push feed for regular users. Pull feed for celebrities (identified by follower count threshold). Or use a \"fan-out on write\" approach but limit to the most recent 500-800 feed items per user inbox."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data model"
          }), ": Post sharded by post ID. Feed stored in Redis sorted sets (score = timestamp). Background workers populate feeds asynchronously."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: Design a distributed rate limiter that handles 1M QPS.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Sliding window rate limiting per user/IP, 1M QPS, <1ms overhead."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Local (L1) counters"
            }), ": Each server maintains in-memory counters with periodic sync to Redis. Handles 99% of checks with zero network latency."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis (L2) counters"
            }), ": Distributed coordination. Use Redis Cluster for high availability."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sliding window via sorted sets"
            }), ": ZREMRANGEBYSCORE to remove old entries, ZCARD to count. Optimized with Lua scripting for atomicity."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-- Lua script for atomic rate limit check\nlocal key = KEYS[1]\nlocal now = tonumber(ARGV[1])\nlocal window = tonumber(ARGV[2])\nlocal limit = tonumber(ARGV[3])\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "redis.call('ZREMRANGEBYSCORE', key, 0, now - window)\nlocal count = redis.call('ZCARD', key)\nif count >= limit then\nreturn 0  -- denied\nend\nredis.call('ZADD', key, now, now)\nredis.call('EXPIRE', key, window // 1000 + 1)\nreturn 1  -- allowed"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimization"
          }), ": Use batch processing — combine multiple rate limit updates into one Redis call. Use local counters for hot-path decisions, synced to Redis every second."]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How would you design a payment system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Process payments, handle refunds, prevent double charges, idempotent, audit trail."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data model"
          }), ": `payments(id UUID, user_id INT, amount DECIMAL(10,2), currency VARCHAR(3), status VARCHAR(20), idempotency_key VARCHAR(64) UNIQUE, created_at TIMESTAMP)`."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Idempotency"
          }), ": Client sends an idempotency key. If the key already exists, return the existing result instead of processing again. Stored in database with unique constraint, plus Redis cache for fast lookup."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Two-phase commit pattern"
          }), ": Reserve (hold) → capture (charge) → settle. If capture fails → release the hold. Use a payment gateway adaptor pattern for provider abstraction (Stripe, PayPal, Adyen)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Consistency"
          }), ": Payment > 0 and balance check in the same transaction. Use optimistic locking for balance updates. Dead letter queue for failed payments with manual reconciliation."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security"
          }), ": PCI DSS compliance, tokenization (never store raw card numbers), encryption at rest and in transit, audit logging of all payment operations."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: Design a distributed task queue.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Enqueue tasks, execute by workers, retry on failure, scheduling, at-least-once delivery, monitoring."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis Lists"
            }), ": BRPOP for blocking dequeue. Priority: use sorted sets with score = priority."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kafka"
            }), ": For high-throughput task distribution. Each partition consumed by one worker group."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Database-backed"
            }), ": PostgreSQL with SKIP LOCKED for row-level locking (avoid contention)."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "CREATE TABLE tasks (\n    id BIGSERIAL PRIMARY KEY,\n    type VARCHAR(100) NOT NULL,\n    payload JSONB NOT NULL,\n    status VARCHAR(20) DEFAULT 'pending',\n    priority INT DEFAULT 0,\n    max_retries INT DEFAULT 3,\n    retry_count INT DEFAULT 0,\n    scheduled_at TIMESTAMP DEFAULT NOW(),\n    created_at TIMESTAMP DEFAULT NOW()\n);\nCREATE INDEX idx_tasks_status ON tasks(status, scheduled_at) WHERE status = 'pending';\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-- Worker picks up a task\nUPDATE tasks SET status = 'processing', updated_at = NOW()\nWHERE id = (\nSELECT id FROM tasks\nWHERE status = 'pending' AND scheduled_at <= NOW()\nORDER BY priority DESC, scheduled_at ASC\nLIMIT 1\nFOR UPDATE SKIP LOCKED\n)\nRETURNING *;"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Key features: Dead letter queue (tasks exceeding max_retries), heartbeat (check if worker is alive), graceful shutdown (SIGTERM → finish current task), exponential backoff for retries."
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you design a logging and monitoring system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data pipeline"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Collection"
            }), ": Filebeat/Fluentd on each server tail log files → Kafka (buffering and decoupling)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Processing"
            }), ": Logstash or custom stream processor (parse, enrich, transform)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            }), ": Elasticsearch for searchable logs (hot-warm-cold architecture), S3 for long-term cold storage"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Visualization"
            }), ": Grafana for metrics, Kibana for log search and analysis"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metrics pipeline"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Collection"
            }), ": Prometheus exporters on each service (expose /metrics endpoint)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            }), ": Prometheus (time-series database), Thanos or VictoriaMetrics for long-term retention"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alerting"
            }), ": Prometheus AlertManager with rules (latency > 500ms → critical alert)"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key metrics to track"
          }), ": Latency (p50, p95, p99), error rate, request rate, saturation (CPU, memory, connections). USE method (Utilization, Saturation, Errors) for every resource."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Distributed tracing"
          }), ": OpenTelemetry for trace propagation. Jaeger or Zipkin for trace visualization. Trace ID in all logs for correlation."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q11",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q11: Compare REST, GraphQL, and gRPC for API design.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "REST"
          }), ": Resources via URLs, HTTP methods for operations. Caching built-in. Good for public APIs and simple CRUD. Response includes all fields (over-fetching). Version via URL or headers."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GraphQL"
          }), ": Single endpoint, client specifies fields. Resolves N+1 with DataLoader. Good for complex UIs with nested data. Caching is harder. Schema is strongly typed (introspection)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "gRPC"
          }), ": Protocol Buffers, HTTP/2, streaming. Strong typing, code generation. Good for internal service-to-service communication. Bi-directional streaming. Not browser-native (needs gRPC-web proxy)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decision guide"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Public API with simple CRUD: REST"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complex frontend with nested data: GraphQL"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "High-performance internal microservices: gRPC"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Many teams use all three: gRPC internally, REST/GraphQL externally"
          }), "\n    "]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q12",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q12: How do you ensure high availability in a distributed system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redundancy"
          }), ": Multiple instances of every component (servers, load balancers, databases). Run across multiple availability zones."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Health checks"
          }), ": LB detects unhealthy servers and stops routing traffic. Auto-healing (auto-scaling group replaces failed instances)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database HA"
          }), ": Read replicas, automatic failover (Patroni for PostgreSQL, Aurora multi-AZ), cross-region replication for disaster recovery."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Caching HA"
          }), ": Redis Cluster or Sentinel for automatic failover. Cache-aside pattern — app can still run without cache (slower but functional)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Graceful degradation"
          }), ": When a dependency fails, degrade functionality instead of returning errors. Example: recommendations fail → show default products."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chaos engineering"
          }), ": Regularly test failure scenarios (kill a server, slow down a database, network partition). Netflix's Chaos Monkey, AWS Fault Injection Simulator."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SLA/SLO targets"
          }), ": Design for 99.9%+ availability. Calculate allowed downtime per month: 99.9% = ~43 min/month, 99.99% = ~4 min/month."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q13",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q13: Design a collaborative document editing system (like Google Docs).\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Multiple users edit simultaneously, changes propagate in real-time, conflict resolution, version history."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Two approaches"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Operational Transformation (OT)"
            }), ": Each operation is transformed against concurrent operations to maintain consistency. Used by Google Docs. Complex but mature."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CRDT (Conflict-free Replicated Data Types)"
            }), ": Data structure designed so concurrent updates converge automatically. Simpler than OT. Used by Figma. Growing adoption."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "WebSocket connection for real-time sync"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Server maintains document state and broadcasts operations to all connected clients"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Operation log for version history (append-only, stored in PostgreSQL or S3)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cursor positions broadcast separately (ephemeral, doesn't need persistence)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Presence awareness — who's viewing/editing each section"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key challenges"
          }), ": Conflict resolution (OT/CRDT), latency (aim for <50ms between keystrokes), scalability (document server farm with consistent hashing by document ID), persistence (periodic snapshots + operation log)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q14",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q14: How would you design a video streaming platform?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Requirements"
          }), ": Upload, transcode, store, stream videos to 10M+ users. Low latency for live streaming."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Upload path"
          }), ": User uploads → load balancer → upload servers (chunked uploads, resume support) → S3 raw storage → message queue → transcoding workers."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transcoding"
          }), ": FFmpeg workers process video into multiple resolutions (360p, 720p, 1080p, 4K) and formats (HLS, DASH). Stored in CDN origin. Generate thumbnails at intervals."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming path"
          }), ": User requests video → CDN serves HLS/DASH playlists → video chunks served from edge. CDN caches at edge locations close to users."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Live streaming"
          }), ": RTMP/WHIP ingest → transcoding pipeline (low latency) → HLS/DASH output → CDN distribution. Use chunked transfer encoding for low-latency HLS (LL-HLS)."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metadata"
          }), ": PostgreSQL for video metadata (title, description, uploader, duration). Elasticsearch for search. Redis for view counts and trending."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scale considerations"
          }), ": CDN handles 95%+ of traffic. Regional upload endpoints for faster uploads. Adaptive bitrate streaming to handle varying network conditions."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-q15",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q15: What are the key design decisions for a global social media platform?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key decisions"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data partitioning"
            }), ": Shard by user ID (consistent hashing) for user data. Shard by post ID for content. Shard by time for feed data."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Feed generation"
            }), ": Hybrid push/pull. Push for active users with moderate follower counts (fan-out on write). Pull for celebrities."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time features"
            }), ": WebSocket gateway farm for chat and notifications. Redis pub/sub for room-based message routing. Presence server (heartbeat with TTL)."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Content delivery"
            }), ": CDN for images/videos. Edge compute for personalized content (Cloudflare Workers). Multi-region deployment."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data analytics"
            }), ": Kafka for event streaming (likes, shares, views). Spark/Flink for real-time aggregation. ClickHouse or Druid for interactive analytics."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching strategy"
            }), ": CDN → Redis cluster (distributed) → local cache (LRU). Multi-tier with TTL-based invalidation. Cache user profiles, feed items, trending topics."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency model"
            }), ": Eventual consistency for most features (feed, likes, counts). Strong consistency for critical data (account settings, payments)."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regional deployment"
          }), ": Deploy in US, EU, Asia. Use DNS geo-routing. Each region has its own stack. Cross-region replication for user data. Eventual consistency across regions."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the main advantage of consistent hashing over modulo-based sharding?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Faster lookups\nb) Minimal key redistribution when servers change\nc) Better load balancing\nd) Support for transactions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Minimal key redistribution when servers change"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Consistent hashing moves only K/N keys when a server is added/removed, vs K*(N-1)/N keys with modulo-based sharding."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which cache pattern requires the application to load data from the database on a cache miss?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Write-through\nb) Write-behind\nc) Cache-aside\nd) Read-through"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Cache-aside"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "In cache-aside, the application checks the cache first, and on a miss, loads data from the database and populates the cache."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which protocol is best for real-time bidirectional communication between browser and server?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) HTTP long polling\nb) Server-Sent Events\nc) WebSockets\nd) gRPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) WebSockets"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "WebSockets provide full-duplex persistent communication over a single TCP connection, ideal for low-latency bidirectional data flow."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": In a URL shortener, what is the most space-efficient approach for generating short codes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) UUID\nb) Random alphanumeric string\nc) Base62 encode of auto-increment ID\nd) Hash of the original URL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Base62 encode of auto-increment ID"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Base62 encoding of a sequential ID guarantees uniqueness without collision checks and is space-efficient."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does CAP theorem's \"C\" stand for?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Consistency\nb) Concurrency\nc) Caching\nd) Compression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) Consistency"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Consistency means every read receives the most recent write or an error. It's one of the three guarantees in the CAP theorem."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Estimate the storage and QPS for a photo-sharing app like Instagram. Assume 500M DAU, each user uploads 0.5 photos/day, each photo is 2MB. Calculate daily storage, yearly storage, upload QPS, and view QPS (assume each user views 100 photos/day)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Design the data model for a bookmarks/tags system. Support: users save bookmarks with URLs and tags, search by tag, search by text in title/description. Write the SQL schema."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Design a notification system that supports: in-app notifications, push notifications (APNS/FCM), email notifications, and SMS. Handle 100M daily notifications. Design the data model, architecture, and delivery flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Design an e-commerce inventory system that tracks stock across multiple warehouses. Support: reserve inventory when added to cart, release when cart expires, decrement on purchase, prevent overselling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design a real-time analytics platform for tracking user events (page views, clicks, purchases) from 100M+ monthly active users. Requirements: sub-second query latency for dashboards, slice by date/user/event type, retain data for 2 years. Design the data pipeline, storage, and query layer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of System Design Interview in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates System Design Interview."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding System Design Interview. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on System Design Interview from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare System Design Interview with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on System Design Interview."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does System Design Interview behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of System Design Interview run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of System Design Interview that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name System Design Interview explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using System Design Interview\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies System Design Interview to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside System Design Interview (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of System Design Interview and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a System Design Interview-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic System Design Interview interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply System Design Interview in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " System Design Interview builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for System Design Interview before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for System Design Interview is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for System Design Interview in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the System Design Interview chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers System Design Interview is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to System Design Interview is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing System Design Interview is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug System Design Interview issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to System Design Interview in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving System Design Interview that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of System Design Interview is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain System Design Interview in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for System Design Interview and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of System Design Interview on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain System Design Interview to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of System Design Interview from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered System Design Interview when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining System Design Interview twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own System Design Interview snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of System Design Interview listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link System Design Interview to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of System Design Interview by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain System Design Interview to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of System Design Interview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on System Design Interview (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real System Design Interview problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements System Design Interview"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for System Design Interview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on System Design Interview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how System Design Interview fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how System Design Interview is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where System Design Interview is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of System Design Interview, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is System Design Interview asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Design Interview is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with System Design Interview."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Design Interview emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for System Design Interview today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about System Design Interview — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around System Design Interview changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing System Design Interview."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Design Interview appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding System Design Interview helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the System Design Interview concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, System Design Interview skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply System Design Interview to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Design Interview is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the System Design Interview skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "21interviewpreparation-08systemdesigninterview-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the main advantage of consistent hashing over modulo-based sharding?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Minimal key redistribution when servers change"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "21interviewpreparation-08systemdesigninterview-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which cache pattern requires the application to load data from the database on a cache miss?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Cache-aside"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "21interviewpreparation-08systemdesigninterview-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which protocol is best for real-time bidirectional communication between browser and server?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) WebSockets"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "21interviewpreparation-08systemdesigninterview-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    In a URL shortener, what is the most space-efficient approach for generating short codes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Base62 encode of auto-increment ID"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "21interviewpreparation-08systemdesigninterview-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does CAP theorem's \"C\" stand for?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) Consistency"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for System Design Interview (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing System Design Interview (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for System Design Interview-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running System Design Interview in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of System Design Interview code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on System Design Interview"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in System Design Interview code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the System Design Interview example code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain System Design Interview in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of System Design Interview."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a System Design Interview problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where System Design Interview is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for System Design Interview."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core System Design Interview logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain System Design Interview without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses System Design Interview daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": System Design Interview patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": System Design Interview principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": System Design Interview shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect System Design Interview to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/09-behavioral-star-interview",
        children: "Behavioral STAR Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Design Interview, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of System Design Interview depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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