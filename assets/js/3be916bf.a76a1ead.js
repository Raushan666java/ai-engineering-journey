"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35251],{

/***/ 77981
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_07_system_design_10_design_url_shortener_md_3be_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-07-system-design-10-design-url-shortener-md-3be.json
const site_docs_courses_ai_engineering_placement_07_system_design_10_design_url_shortener_md_3be_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/system-design/10-design-url-shortener","title":"Design URL Shortener — Hashing, Redirects, Analytics","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/07-system-design/10-design-url-shortener.md","sourceDirName":"courses/ai-engineering-placement/07-system-design","slug":"/ai-engineering-placement/07-system-design/10-design-url-shortener","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/10-design-url-shortener","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":98,"frontMatter":{"id":"10-design-url-shortener","slug":"/ai-engineering-placement/07-system-design/10-design-url-shortener","title":"Design URL Shortener — Hashing, Redirects, Analytics","sidebar_label":"Design URL Shortener — Hashing, Redirects, Analytics","sidebar_position":98},"sidebar":"placementSidebar","previous":{"title":"Monitoring & Observability — Metrics, Logging, Tracing, SLIs","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/09-monitoring-and-observability"},"next":{"title":"Design ChatGPT — Streaming, Context Window, Prompt Caching","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/11-design-chatgpt"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/07-system-design/10-design-url-shortener.md


const frontMatter = {
	id: '10-design-url-shortener',
	slug: '/ai-engineering-placement/07-system-design/10-design-url-shortener',
	title: 'Design URL Shortener — Hashing, Redirects, Analytics',
	sidebar_label: 'Design URL Shortener — Hashing, Redirects, Analytics',
	sidebar_position: 98
};
const contentTitle = 'Design URL Shortener — Hashing, Redirects, Analytics';

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
  "value": "10.1 Requirements &amp; Constraints",
  "id": "101-requirements--constraints",
  "level": 2
}, {
  "value": "10.2 Key Generation",
  "id": "102-key-generation",
  "level": 2
}, {
  "value": "10.3 Storage Schema",
  "id": "103-storage-schema",
  "level": 2
}, {
  "value": "10.4 Redirection Logic",
  "id": "104-redirection-logic",
  "level": 2
}, {
  "value": "10.5 Analytics Pipeline",
  "id": "105-analytics-pipeline",
  "level": 2
}, {
  "value": "10.6 Security &amp; Abuse Prevention",
  "id": "106-security--abuse-prevention",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
    blockquote: "blockquote",
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
    input: "input",
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
        id: "design-url-shortener--hashing-redirects-analytics",
        children: "Design URL Shortener — Hashing, Redirects, Analytics"
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
            children: "Understand URL shortener requirements and system constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a key generation system with collision handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement redirection logic with 301 vs 302 trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build click analytics tracking with real-time aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale the system to handle billions of URLs and redirects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address security concerns: spam, phishing, rate limiting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "System design interviews test your ability to architect large-scale systems. Caching, load balancing, message queues, and database sharding are patterns you will apply daily. This module prepares you for both interviews and production."
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
      children: "Understanding design url shortener is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how design url shortener works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "10.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements & Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write ratio, length limits, scale targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base62 encoding, hash-based, counter-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational vs NoSQL, sharding strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirection Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "301 permanent vs 302 temporary, caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Click tracking, aggregation, real-time dashboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security & Abuse Prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting, URL validation, spam detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Client] --> B{Generate Short URL}\n    B --> C[Validate Long URL]\n    C --> D[Generate Unique Key]\n    D --> E[Store in Database]\n    E --> F[Return Short URL]\n    F --> G[Client Stores Short URL]\n    G --> H{Access Short URL}\n    H --> I[Lookup Key in Cache]\n    I --> J{Cache Hit?}\n    J -->|Yes| K[Redirect to Long URL]\n    J -->|No| L[Lookup in DB]\n    L --> M[Update Cache]\n    M --> K\n    K --> N[Record Analytics Event]\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-requirements--constraints",
      children: "10.1 Requirements & Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional requirements"
      }), ": Generate a short URL for any long URL, redirect short URL to original URL, track click analytics, handle billions of URLs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional requirements"
      }), ": Low latency redirects (<10ms), high availability (99.99%), scalability (100M+ URLs/month), durability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface URLShortenerConfig {\n  maxKeyLength: number;\n  encodingBase: number;\n  allowedChars: string;\n  cacheTTL: number;\n  rateLimitPerIP: number;\n}\n\nconst DEFAULT_CONFIG: URLShortenerConfig = {\n  maxKeyLength: 7,\n  encodingBase: 62,\n  allowedChars: \"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\",\n  cacheTTL: 3600,\n  rateLimitPerIP: 100,\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scale estimation"
      }), ": 100M URLs/month = ~3.3M/day = ~38/sec writes. 1B redirects/month = ~33M/day = ~380/sec reads. Read to write ratio is about 10:1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Length trade-offs"
      }), ": 7 chars in base62 = 62^7 = ~3.5 trillion unique keys. 6 chars = ~56 billion. For most systems, 7 characters provides sufficient capacity with room for growth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-key-generation",
      children: "10.2 Key Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three primary approaches for generating short URL keys:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Base62 encoding"
      }), ": Convert an integer ID to base62 using alphanumeric characters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Base62Encoder {\n  private chars = \"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\";\n\n  encode(id: number): string {\n    if (id === 0) return this.chars[0];\n    let result = \"\";\n    while (id > 0) {\n      result = this.chars[id % 62] + result;\n      id = Math.floor(id / 62);\n    }\n    return result;\n  }\n\n  decode(short: string): number {\n    let id = 0;\n    for (const char of short) {\n      id = id * 62 + this.chars.indexOf(char);\n    }\n    return id;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash-based"
      }), ": Hash the long URL using MD5 or SHA-256, take first 7 bytes, encode to base62. Collision risk requires resolution (append counter, retry with salt)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Counter-based"
      }), ": Use a distributed counter (Redis INCR, Snowflake ID, database sequence) and encode the counter value. Simple, no collisions, but requires a reliable counter service."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class KeyGenerator {\n  private encoder = new Base62Encoder();\n\n  async generate(longUrl: string, userId?: string): Promise<string> {\n    const id = await this.getNextId();\n    return this.encoder.encode(id);\n  }\n\n  private async getNextId(): Promise<number> {\n    // Using Redis INCR for simplicity\n    return this.redis.incr(\"url:counter\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended approach"
      }), ": Counter-based with Redis INCR (or Snowflake for distributed setup). Pre-generate batches of IDs for lower latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-storage-schema",
      children: "10.3 Storage Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational (PostgreSQL)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE urls (\n    id BIGSERIAL PRIMARY KEY,\n    short_key VARCHAR(10) UNIQUE NOT NULL,\n    long_url TEXT NOT NULL,\n    user_id VARCHAR(50),\n    created_at TIMESTAMP DEFAULT NOW(),\n    expires_at TIMESTAMP,\n    is_active BOOLEAN DEFAULT TRUE\n);\n\nCREATE INDEX idx_short_key ON urls(short_key);\n\nCREATE TABLE click_events (\n    id BIGSERIAL,\n    url_id BIGINT REFERENCES urls(id),\n    clicked_at TIMESTAMP DEFAULT NOW(),\n    ip_address VARCHAR(45),\n    user_agent TEXT,\n    referer TEXT,\n    country VARCHAR(2),\n    device_type VARCHAR(20)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NoSQL (DynamoDB/Cassandra)"
      }), ": Partition key = short_key, with long_url as sort key or attribute. Click events stored in separate time-series table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface URLRecord {\n  shortKey: string;\n  longUrl: string;\n  userId?: string;\n  createdAt: Date;\n  expiresAt?: Date;\n  isActive: boolean;\n  clickCount: number;\n}\n\nclass URLRepository {\n  async save(record: URLRecord): Promise<void> {\n    await db.urls.insertOne(record);\n  }\n\n  async findByShortKey(key: string): Promise<URLRecord | null> {\n    const cached = await cache.get(`url:${key}`);\n    if (cached) return JSON.parse(cached);\n    const record = await db.urls.findOne({ shortKey: key });\n    if (record) {\n      await cache.set(`url:${key}`, JSON.stringify(record), \"EX\", 3600);\n    }\n    return record;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding strategy"
      }), ": Shard by short_key using consistent hashing. Co-locate URL record and its click events on the same shard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-redirection-logic",
      children: "10.4 Redirection Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "301 Moved Permanently vs 302 Found"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "301"
        }), ": Browser caches the redirect permanently. Good for SEO — search engines update their indexes. Bad for analytics — browser skips your server on subsequent visits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "302"
        }), ": Temporary redirect. Browser always checks with your server. Good for analytics. Bad for SEO."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RedirectHandler {\n  private repository: URLRepository;\n\n  async handleRedirect(req: any, res: any): Promise<void> {\n    const shortKey = req.params.key;\n\n    // Validate key format\n    if (!/^[0-9a-zA-Z]{6,10}$/.test(shortKey)) {\n      return res.status(404).send(\"Invalid short URL\");\n    }\n\n    const record = await this.repository.findByShortKey(shortKey);\n    if (!record || !record.isActive) {\n      return res.status(404).send(\"URL not found\");\n    }\n\n    if (record.expiresAt && record.expiresAt < new Date()) {\n      return res.status(410).send(\"URL has expired\");\n    }\n\n    // Async analytics (don't block redirect)\n    this.recordClick(shortKey, req).catch((err) =>\n      console.error(\"Analytics error:\", err)\n    );\n\n    // Use 302 for analytics tracking, 301 for permanent URLs\n    const use301 = record.clickCount > 1000;\n    res.status(use301 ? 301 : 302);\n    res.setHeader(\"Location\", record.longUrl);\n    res.setHeader(\"Cache-Control\", use301 ? \"public, max-age=86400\" : \"no-cache\");\n    res.end();\n  }\n\n  private async recordClick(shortKey: string, req: any): Promise<void> {\n    await db.clickEvents.insertOne({\n      shortKey,\n      timestamp: new Date(),\n      ip: req.ip,\n      userAgent: req.headers[\"user-agent\"],\n      referer: req.headers[\"referer\"],\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caching strategy"
      }), ": Cache URL mappings in Redis with TTL (1 hour). Use CDN (CloudFront, Cloudflare) for frequently accessed URLs. Consider stale-while-revalidate for cache hits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-analytics-pipeline",
      children: "10.5 Analytics Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Analytics data flows from redirect servers through a pipeline to provide real-time and historical insights."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ClickAnalytics {\n  totalClicks: number;\n  uniqueVisitors: number;\n  clicksByCountry: Map<string, number>;\n  clicksByDevice: Map<string, number>;\n  clicksByHour: Map<string, number>;\n  topReferrers: Array<{ source: string; count: number }>;\n}\n\nclass AnalyticsAggregator {\n  private counter: Map<string, number> = new Map();\n\n  async recordEvent(shortKey: string, event: any): Promise<void> {\n    // Push to message queue for async processing\n    await queue.publish(\"click-events\", { shortKey, ...event });\n  }\n\n  async getAnalytics(shortKey: string): Promise<ClickAnalytics> {\n    const pipeline = [\n      { $match: { shortKey } },\n      {\n        $group: {\n          _id: null,\n          totalClicks: { $sum: 1 },\n          uniqueVisitors: { $addToSet: \"$ip\" },\n        },\n      },\n    ];\n    const result = await db.clickEvents.aggregate(pipeline).toArray();\n    return {\n      totalClicks: result[0]?.totalClicks ?? 0,\n      uniqueVisitors: result[0]?.uniqueVisitors?.length ?? 0,\n      clicksByCountry: await this.countBy(shortKey, \"country\"),\n      clicksByDevice: await this.countBy(shortKey, \"deviceType\"),\n      clicksByHour: await this.countByHour(shortKey),\n      topReferrers: await this.getTopReferrers(shortKey),\n    };\n  }\n\n  private async countBy(shortKey: string, field: string): Promise<Map<string, number>> {\n    const results = await db.clickEvents\n      .aggregate([\n        { $match: { shortKey } },\n        { $group: { _id: `$${field}`, count: { $sum: 1 } } },\n      ])\n      .toArray();\n    return new Map(results.map((r: any) => [r._id, r.count]));\n  }\n\n  private async countByHour(shortKey: string): Promise<Map<string, number>> {\n    const results = await db.clickEvents\n      .aggregate([\n        { $match: { shortKey } },\n        {\n          $group: {\n            _id: { $dateToString: { format: \"%Y-%m-%dT%H:00:00Z\", date: \"$timestamp\" } },\n            count: { $sum: 1 },\n          },\n        },\n        { $sort: { _id: 1 } },\n      ])\n      .toArray();\n    return new Map(results.map((r: any) => [r._id, r.count]));\n  }\n\n  private async getTopReferrers(\n    shortKey: string,\n    limit = 10\n  ): Promise<Array<{ source: string; count: number }>> {\n    return db.clickEvents\n      .aggregate([\n        { $match: { shortKey } },\n        { $group: { _id: \"$referer\", count: { $sum: 1 } } },\n        { $sort: { count: -1 } },\n        { $limit: limit },\n      ])\n      .toArray();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture"
      }), ": Redirect servers emit click events to Kafka/Kinesis. Stream processor aggregates data into time-series database (ClickHouse, InfluxDB). API server queries aggregated data for analytics dashboards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-security--abuse-prevention",
      children: "10.6 Security & Abuse Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL shorteners are commonly abused for phishing, spam, and malware distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class URLValidator {\n  private blockedDomains = [\n    \"malware.example.com\",\n    \"phishing.example.com\",\n  ];\n  private blockedPatterns = [\n    /bit\\.ly\\/.*/i,\n    /tinyurl\\.com\\/.*/i,\n    /login\\./i,\n  ];\n\n  async validate(longUrl: string): Promise<ValidationResult> {\n    try {\n      const parsed = new URL(longUrl);\n\n      // Block known malicious domains\n      if (this.blockedDomains.includes(parsed.hostname)) {\n        return { valid: false, reason: \"Domain is blocked\" };\n      }\n\n      // Block recursive shortening\n      for (const pattern of this.blockedPatterns) {\n        if (pattern.test(longUrl)) {\n          return { valid: false, reason: \"Recursive URL shortening detected\" };\n        }\n      }\n\n      // Reject non-HTTP(S) protocols\n      if (![\"http:\", \"https:\"].includes(parsed.protocol)) {\n        return { valid: false, reason: \"Only HTTP/HTTPS URLs allowed\" };\n      }\n\n      // Check URL reachability (optional)\n      const reachable = await this.checkReachability(longUrl);\n      if (!reachable) {\n        return { valid: false, reason: \"URL is not reachable\" };\n      }\n\n      return { valid: true };\n    } catch {\n      return { valid: false, reason: \"Invalid URL format\" };\n    }\n  }\n\n  private async checkReachability(url: string): Promise<boolean> {\n    try {\n      const res = await fetch(url, { method: \"HEAD\", signal: AbortSignal.timeout(5000) });\n      return res.ok;\n    } catch {\n      return false;\n    }\n  }\n}\n\ninterface ValidationResult {\n  valid: boolean;\n  reason?: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional security measures"
      }), ": Rate limiting per IP (100 URLs/hour), user authentication for URL creation, click-through warnings for suspicious URLs, URL expiration policies, real-time scanning against threat intelligence feeds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class URLShortenerService {\n  private encoder = new Base62Encoder();\n  private repository: URLRepository;\n  private validator: URLValidator;\n  private cache: Map<string, string> = new Map();\n\n  async createShortUrl(longUrl: string, userId?: string): Promise<string> {\n    const validation = await this.validator.validate(longUrl);\n    if (!validation.valid) throw new Error(validation.reason);\n\n    const id = await this.getNextId();\n    const shortKey = this.encoder.encode(id);\n\n    await this.repository.save({\n      shortKey,\n      longUrl,\n      userId,\n      createdAt: new Date(),\n      isActive: true,\n      clickCount: 0,\n    });\n\n    this.cache.set(shortKey, longUrl);\n    return `https://short.url/${shortKey}`;\n  }\n\n  async resolveShortUrl(shortKey: string): Promise<string | null> {\n    const cached = this.cache.get(shortKey);\n    if (cached) return cached;\n\n    const record = await this.repository.findByShortKey(shortKey);\n    if (!record || !record.isActive) return null;\n\n    this.cache.set(shortKey, record.longUrl);\n    return record.longUrl;\n  }\n\n  private async getNextId(): Promise<number> {\n    // In production, use Redis INCR or Snowflake\n    return Date.now();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URL shortener requires ~10:1 read/write ratio with sub-10ms redirect latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key generation options: Base62 encoding of counter IDs, hash-based with collision handling, or pre-generated key batches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7 characters in base62 provides ~3.5 trillion unique keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use 302 redirect for trackable links (analytics), 301 for permanent well-known links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache URL mappings in Redis with CDN for high-traffic URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click analytics pipeline uses message queue + stream processor + time-series DB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security measures: URL validation, rate limiting, phishing detection, URL expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shard by short_key using consistent hashing for horizontal scaling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-generate key batches and warm cache for popular URLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor redirect latency and analytics pipeline health as key SLIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter-based with Base62 encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD5 hash (collision risk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "302 for analytics, 301 for permanent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always 301 (lose analytics)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis + CDN with 1-hour TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No caching (DB overload)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async message queue + stream processor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous analytics (blocks redirect)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL validation + rate limiting + threat scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No validation (phishing risk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing + pre-generated keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single DB for all URLs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How would you design a URL shortener for 100M URLs and 1B redirects per month?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Key components: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Key generation service"
          }), " using distributed counter (Redis INCR or Snowflake) with Base62 encoding. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Storage"
          }), ": DynamoDB or Cassandra sharded by short_key. PostgreSQL with Citus for relational needs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Cache"
          }), ": Redis cluster for hot URLs, CDN for popular redirects. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Redirect service"
          }), ": Stateless, horizontally scalable, returns 301/302 with Location header. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Analytics"
          }), ": Click events to Kafka, processed by Spark/Flink, stored in ClickHouse. Scale to 380 reads/sec is moderate; the main challenge is the analytics pipeline at 1B events/month."]
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
      "data-qid": "sd07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Compare 301 vs 302 redirect. When would you use each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "301 (Moved Permanently)"
          }), ": Browser caches the redirect. Subsequent requests go directly to the target URL without hitting the shortener. Good for SEO (search engines update index) and reduces server load. Bad for analytics — you lose click tracking after the first request. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "302 (Found)"
          }), ": Browser always requests the short URL, gets redirected each time. Better for analytics but adds latency and server load. Use 302 for most cases (analytics matter). Switch to 301 for URLs with >1000 clicks (SEO benefit outweighs analytics loss)."]
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
      "data-qid": "sd07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you generate unique short URL keys at scale?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Three approaches: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Counter-based"
          }), ": Use a distributed unique ID generator (Redis INCR, Snowflake, database sequence) and encode the ID to Base62. No collisions. Requires a highly-available ID service. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Hash-based"
          }), ": Hash the long URL (MD5/SHA-256), take 7-8 bytes, encode to Base62. Collisions possible but rare. Handle by appending a counter to the input. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Pre-generated keys"
          }), ": Batch-generate keys offline, mark them available. On creation, assign the next available key. Fast creation time at the cost of batching logic. I recommend counter-based for simplicity and deterministic behavior."]
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
      "data-qid": "sd07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you handle URL spam and abuse?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Multi-layered approach: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Creation time"
          }), ": Validate URL format, check against blocklists, verify domain resolves, rate limit per IP/user (100 URLs/hour). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Storage time"
          }), ": Scan URLs against threat intelligence feeds (Google Safe Browsing, PhishTank). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Redirect time"
          }), ": Show interstitial warning for flagged URLs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Analytics"
          }), ": Monitor for suspicious patterns — high click-through from unknown referrers, geographically distributed clicks in short time. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Reporting"
          }), ": Allow users to report abusive URLs. Automated take-down when confirmed. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Expiration"
          }), ": Automatically expire URLs after 30 days of inactivity."]
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
      "data-qid": "sd07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you design the analytics system for a URL shortener?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Decoupled architecture: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Event production"
          }), ": Redirect servers emit click events (timestamp, IP, user agent, referer) to a message queue (Kafka/Kinesis). Non-blocking — redirect is served in <5ms, analytics is async. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Stream processing"
          }), ": Apache Flink or Spark Streaming aggregates events in micro-batches. Pre-computes counts by URL, country, device, hour. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Storage"
          }), ": Write-optimized time-series DB (ClickHouse, InfluxDB) for click events. Aggregated data in PostgreSQL or Elasticsearch. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Serving"
          }), ": REST API queries aggregated data. Cache popular analytics results. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Real-time"
          }), ": Use Redis sorted sets for real-time click counters with leaderboard-style querying."]
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
      "data-qid": "sd07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is the optimal key length for a URL shortener?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Base62 with 7 characters gives 62^7 = ~3.5 trillion combinations. 6 chars = ~56 billion. 8 chars = ~218 trillion. For most systems, 7 characters is optimal: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Too short (4-5 chars)"
          }), ": 62^4 = 15M, too few; 62^5 = 916M, likely insufficient. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Too long (8-10)"
          }), ": Unnecessary length with diminishing capacity returns. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7 chars"
          }), ": Good balance of sufficient capacity (3.5T) and short length. At 100M URLs/year, 7 chars supports 35,000 years. You can also make keys variable length for a more polished UX: start with 5 chars and extend when needed."]
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
      "data-qid": "sd07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you shard the URL database for a URL shortener?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Shard by short_key using consistent hashing. Benefits: even distribution across shards, minimal data movement during resharding, fast lookup (direct shard routing). Alternative: directory-based sharding with a lookup table mapping key ranges to shards. For click analytics data, shard by short_key AND time range (year-month) to keep recent data hot and enable efficient time-range queries. Use co-location: URL metadata and its click events on the same shard. For read-heavy workloads, add read replicas per shard."
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
      "data-qid": "sd07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you handle custom short URLs (vanity URLs)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Custom URLs (e.g., short.url/black-friday-sale) have different requirements: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Key generation"
          }), ": User provides the key instead of auto-generating. Need to check uniqueness across all keys. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Validation"
          }), ": Restrict to alphanumeric + hyphens, length 5-20 chars. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Rate limiting"
          }), ": Stricter limits on custom URLs to prevent squatting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Reservation"
          }), ": Reserved keywords (api, admin, help) should be blocked. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Expiration"
          }), ": Custom URLs typically have annual renewal. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Storage"
          }), ": Same table with a flag or separate table. Use unique index on short_key regardless."]
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
      "data-qid": "sd07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you make the URL shortener highly available?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seven 9s (99.99999%) availability requires: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Stateless redirect servers"
          }), " behind load balancer, auto-scaling group. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Database multi-region replication"
          }), ": Primary in one region, read replicas in other regions. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Cache redundancy"
          }), ": Redis Cluster with replica shards. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) CDN"
          }), ": Serve popular redirects from edge. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Graceful degradation"
          }), ": Cache URL mappings aggressively. If DB is down, serve from cache (possibly stale). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Key generation HA"
          }), ": Multiple ID generation services with conflict detection. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Analytics decoupling"
          }), ": Queue-based analytics so redirect is never blocked by analytics pipeline."]
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
      "data-qid": "sd07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you design the database schema for a URL shortener?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Two main tables: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "URLs table"
          }), ": short_key (PK, VARCHAR(10)), long_url (TEXT), user_id (VARCHAR(50), indexed), created_at, expires_at, is_active, click_count (denormalized counter). Index: short_key unique index. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Click events table"
          }), ": id (BIGSERIAL), short_key (FK, VARCHAR(10)), clicked_at, ip_address, user_agent, referer, country, device_type. Partition click_events by month for performance. For NoSQL (DynamoDB): URLs table with short_key as partition key, long_url as attribute. Click events as a separate table with short_key as PK and clicked_at as sort key for time-range queries."]
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
      }), ": What is the read-to-write ratio typically expected for a URL shortener?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 1:1\nb) 10:1\nc) 100:1\nd) 1:10"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 10:1"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "URL shorteners typically have far more reads (redirects) than writes (creation). A 10:1 ratio is common."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": How many unique keys can 7 characters of Base62 represent?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 62 million\nb) 3.5 trillion\nc) 56 billion\nd) 1 billion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 3.5 trillion"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "62^7 = approximately 3.5 trillion unique combinations."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which HTTP redirect status code is best for analytics tracking?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 301\nb) 302\nc) 307\nd) 308"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 302"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "302 redirect always goes through the server, enabling click tracking on every request."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the main advantage of counter-based key generation?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) URL-dependent keys\nb) No collisions\nc) Faster encoding\nd) Shorter keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) No collisions"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Counter-based generation guarantees unique keys without collision checking."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which approach is recommended for scaling click analytics?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Synchronous database writes\nb) Async message queue + stream processor\nc) In-memory counters only\nd) Write to log files and batch process weekly"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sd07-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Async message queue + stream processor"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Async processing ensures redirects are fast and analytics pipeline is decoupled from the critical path."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a Base62 encoder/decoder in TypeScript that converts integers to alphanumeric strings and back."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a URL validator that checks for valid format, HTTP/HTTPS protocol, and blocks known malicious domains."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a URL shortener service with Redis-backed counter for key generation and Redis caching for URL lookups. Include 302 redirect logic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a click analytics tracker that records events to a queue and aggregates clicks by URL, country, and device type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design and implement a distributed key generation service that pre-generates batches of unique IDs and hands them out atomically to multiple application instances."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a complete URL shortener with all components: key generation, storage (SQLite), caching (in-memory LRU), 301/302 redirect logic, rate limiting per IP, and basic click analytics."]
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the time and space trade-offs of 07-system-design. When would you choose one approach over another?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a system that efficiently handles 07-system-design at scale (millions of requests/second)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you had to optimize a system related to 07-system-design. What was your approach and what was the result?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain 07-system-design to a non-technical stakeholder?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does 07-system-design integrate with enterprise systems and cloud architectures?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the security implications of 07-system-design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize 07-system-design for GPU-accelerated computing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What parallel processing patterns apply to 07-system-design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement 07-system-design in a cost-effective, scalable way for a startup?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the fastest way to prototype a solution using 07-system-design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List 07-system-design under relevant technical skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented 07-system-design to [specific outcome], reducing [metric] by [X]%\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Include 07-system-design in your skills section for ATS optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review core concepts of 07-system-design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice 3-5 problems related to 07-system-design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare 2 real-world examples of using 07-system-design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know the time/space complexity of common 07-system-design operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have questions ready about how the company uses 07-system-design> ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/11-design-chatgpt",
          children: "Design ChatGPT"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Design URL Shortener — Hashing, Redirects, Analytics builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Design URL Shortener — Hashing, Redirects, Analytics before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Design URL Shortener — Hashing, Redirects, Analytics is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Design URL Shortener — Hashing, Redirects, Analytics in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Design URL Shortener — Hashing, Redirects, Analytics chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Design URL Shortener — Hashing, Redirects, Analytics is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Design URL Shortener — Hashing, Redirects, Analytics is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Design URL Shortener — Hashing, Redirects, Analytics is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Design URL Shortener — Hashing, Redirects, Analytics issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Design URL Shortener — Hashing, Redirects, Analytics in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Design URL Shortener — Hashing, Redirects, Analytics that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Design URL Shortener — Hashing, Redirects, Analytics is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Design URL Shortener — Hashing, Redirects, Analytics in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Design URL Shortener — Hashing, Redirects, Analytics and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Design URL Shortener — Hashing, Redirects, Analytics on an empty input?"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Advanced\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 45-60 minutes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Complete understanding of previous modules recommended"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Start with the basics — understand the fundamental concepts before moving to advanced topics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Practice actively — don't just read, implement the code examples yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Connect to prior knowledge — relate new concepts to what you learned in previous modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Focus on understanding, not memorizing — understand why things work, not just how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Review regularly — revisit key concepts after a few days to reinforce learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym Method"
        }), ": Create acronyms for lists of concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        }), ": Draw diagrams to visualize abstract concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach someone else"
        }), ": Explaining concepts to others reinforces your understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to real-world"
        }), ": Relate technical concepts to everyday experiences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking"
        }), ": Break complex topics into smaller, manageable pieces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation and language specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"System Design Interview\" by Alex Xu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"AI Engineering\" by Chip Huyen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers and blog posts from leading AI labs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How this connects to System Design fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prerequisites for advanced topics in this module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications in AI engineering systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview questions that test deep understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How long does it take to master design url shortener?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: Do I need to memorize all the details?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Focus on understanding the core principles. Details can be looked up, but understanding cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: What's the best way to practice?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement the code examples, then modify them to solve different problems. Build small projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How often should I review this material?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Review after 1 day, 3 days, 1 week, and 1 month for long-term retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Understanding the fundamentals is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Don't skip the exercises — they reinforce critical concepts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This topic frequently appears in technical interviews at top companies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": In real systems, these concepts are used daily by AI engineers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Evolution of this technology reflects decades of research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the evolution of design url shortener helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Validation"
        }), ": Always validate and sanitize inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Don't expose internal details in error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Limits"
        }), ": Set appropriate limits to prevent denial of service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Ensure proper authentication and authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Protection"
        }), ": Handle sensitive data according to security best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering, understanding design url shortener at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of design url shortener like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply design url shortener concepts in a mini-project\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Build a small application that demonstrates understanding of core principles\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), ": 2-4 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Working implementation with documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 1"
      }), ": What is the core concept of design url shortener?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply design url shortener in real systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": When building production AI systems that require reliability, scalability, and maintainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 3"
      }), ": What are the common pitfalls to avoid?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Over-engineering, ignoring edge cases, and not considering production requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Academic papers and conference proceedings (NeurIPS, ICML, ICLR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry whitepapers from leading AI companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical blogs from Google, Meta, OpenAI, Anthropic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source implementations and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), ": Framework for building LLM-powered applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), ": Data framework for connecting LLMs with external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face Transformers"
        }), ": State-of-the-art ML models and datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights & Biases"
        }), ": Experiment tracking and model evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), ": Open-source platform for ML lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus + Grafana"
        }), ": Monitoring and observability stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Issues"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check input validation and data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify API keys and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor resource usage (CPU, memory, GPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs for stack traces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the issue with minimal input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add logging at key points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check external dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with known-good inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Fire Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the core concept of System Design?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use this in production?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the trade-offs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does this scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are common pitfalls?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize this for 10x scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What monitoring would you add?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you test this in production?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Design URL Shortener — Hashing, Redirects, Analytics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Design URL Shortener — Hashing, Redirects, Analytics logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy, Precision, Recall, F1-Score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLEU, ROUGE for text generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency, Throughput, Cost per inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate and availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource utilization (CPU, memory, GPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google: Search ranking, translation, autocomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon: Product recommendations, Alexa, fraud detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix: Content recommendations, personalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla: Autonomous driving, computer vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI: ChatGPT, DALL-E, Codex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After mastering System Design, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique."
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