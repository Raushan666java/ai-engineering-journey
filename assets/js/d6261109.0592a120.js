"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96710],{

/***/ 76344
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_03_caching_md_d62_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-03-caching-md-d62.json
const site_docs_courses_system_design_03_caching_md_d62_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/03-caching","title":"Chapter 3: Caching Strategies and Patterns","description":"Previous 04 Database Foundations","source":"@site/docs/courses/system-design/03-caching.md","sourceDirName":"courses/system-design","slug":"/system-design/03-caching","permalink":"/ai-engineering-journey/system-design/03-caching","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-caching","slug":"/system-design/03-caching","title":"Chapter 3: Caching Strategies and Patterns","sidebar_label":"Chapter 3: Caching Strategies and Patterns","sidebar_position":3},"sidebar":"course-system-design","previous":{"title":"Chapter 2: Scalability and Load Balancing","permalink":"/ai-engineering-journey/system-design/02-scalability-load-balancing"},"next":{"title":"Chapter 4: Database Foundations: Replication and Indexing","permalink":"/ai-engineering-journey/system-design/04-database-foundations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/03-caching.md


const frontMatter = {
	id: '03-caching',
	slug: '/system-design/03-caching',
	title: 'Chapter 3: Caching Strategies and Patterns',
	sidebar_label: 'Chapter 3: Caching Strategies and Patterns',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Caching Strategies and Patterns';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-1",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-1",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Locality of Reference",
  "id": "locality-of-reference",
  "level": 3
}, {
  "value": "Cache Hierarchy",
  "id": "cache-hierarchy",
  "level": 3
}, {
  "value": "Caching Patterns",
  "id": "caching-patterns",
  "level": 3
}, {
  "value": "Cache-Aside (Lazy Loading)",
  "id": "cache-aside-lazy-loading",
  "level": 4
}, {
  "value": "Read-Through",
  "id": "read-through",
  "level": 4
}, {
  "value": "Write-Through",
  "id": "write-through",
  "level": 4
}, {
  "value": "Write-Behind (Write-Back)",
  "id": "write-behind-write-back",
  "level": 4
}, {
  "value": "Refresh-Ahead",
  "id": "refresh-ahead",
  "level": 4
}, {
  "value": "Eviction Policies",
  "id": "eviction-policies",
  "level": 3
}, {
  "value": "LRU — Least Recently Used",
  "id": "lru--least-recently-used",
  "level": 4
}, {
  "value": "LFU — Least Frequently Used",
  "id": "lfu--least-frequently-used",
  "level": 4
}, {
  "value": "FIFO — First In, First Out",
  "id": "fifo--first-in-first-out",
  "level": 4
}, {
  "value": "MRU — Most Recently Used",
  "id": "mru--most-recently-used",
  "level": 4
}, {
  "value": "ARC — Adaptive Replacement Cache",
  "id": "arc--adaptive-replacement-cache",
  "level": 4
}, {
  "value": "2Q — Two-Queue Algorithm",
  "id": "2q--two-queue-algorithm",
  "level": 4
}, {
  "value": "Implementing an LRU Cache from Scratch",
  "id": "implementing-an-lru-cache-from-scratch",
  "level": 3
}, {
  "value": "Cache Invalidation",
  "id": "cache-invalidation",
  "level": 3
}, {
  "value": "TTL-Based Invalidation",
  "id": "ttl-based-invalidation",
  "level": 4
}, {
  "value": "Event-Driven Invalidation",
  "id": "event-driven-invalidation",
  "level": 4
}, {
  "value": "Write Invalidate",
  "id": "write-invalidate",
  "level": 4
}, {
  "value": "The Thundering Herd Problem",
  "id": "the-thundering-herd-problem",
  "level": 3
}, {
  "value": "Global Cache vs Distributed Cache",
  "id": "global-cache-vs-distributed-cache",
  "level": 3
}, {
  "value": "Cache Consistency",
  "id": "cache-consistency",
  "level": 3
}, {
  "value": "CDN Caching",
  "id": "cdn-caching",
  "level": 3
}, {
  "value": "Real-World Systems",
  "id": "real-world-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Cache-Aside with Redis for a User Profile Service",
  "id": "example-1-cache-aside-with-redis-for-a-user-profile-service",
  "level": 3
}, {
  "value": "Example 2: Probabilistic Early Expiration in JavaScript (Node.js)",
  "id": "example-2-probabilistic-early-expiration-in-javascript-nodejs",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "Concept Comparison",
  "id": "concept-comparison-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
  "level": 2
}, {
  "value": "Implementation: Caching Strategies and CDN",
  "id": "implementation-caching-strategies-and-cdn",
  "level": 3
}, {
  "value": "TypeScript: LRU Cache (O(1) Get/Put)",
  "id": "typescript-lru-cache-o1-getput",
  "level": 3
}, {
  "value": "TypeScript: Cache-Aside Pattern (Read/Write-Through, Write-Behind)",
  "id": "typescript-cache-aside-pattern-readwrite-through-write-behind",
  "level": 3
}, {
  "value": "TypeScript: Redis Sentinel (Failover Simulation)",
  "id": "typescript-redis-sentinel-failover-simulation",
  "level": 3
}, {
  "value": "Cache Architecture Patterns",
  "id": "cache-architecture-patterns",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 3
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-2",
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
  "value": "Review Questions (4-5)",
  "id": "review-questions-4-5",
  "level": 3
}, {
  "value": "Application Problems (3-4)",
  "id": "application-problems-3-4",
  "level": 3
}, {
  "value": "Challenge Problem (1)",
  "id": "challenge-problem-1",
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
        id: "chapter-3-caching-strategies-and-patterns",
        children: "Chapter 3: Caching Strategies and Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/02-scalability-load-balancing",
          children: "02 Scalability Load Balancing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/04-database-foundations",
          children: "04 Database Foundations"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain temporal and spatial locality and their relationships to caching effectiveness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish five caching patterns and select the appropriate one for a given access pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a cache-aside pattern with Redis in a production-like setting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement an LRU cache using a doubly linked list and hash map"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze eviction policies (LRU, LFU, FIFO, MRU, ARC, 2Q) with strengths and weaknesses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the thundering herd problem using mutex locking and probabilistic early expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model cache consistency trade-offs and apply invalidation strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze real-world cache architectures including Facebook's TAO and Twitter's Twemproxy"
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
        href: "../../assets/images/lessons/system-design/03-caching/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/03-caching/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/03-caching/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/03-caching/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/03-caching/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/03-caching/visual-explanation.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| Aspect | Details |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Design Decisions]\n    B --> C[Real-World Examples]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|--------|---------|\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope"
      }), " | Locality, caching patterns, eviction policies, invalidation, CDN |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 3: Caching Strategies and Patterns |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | Cache pattern selection, eviction tuning, thundering herd prevention |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Angle"
      }), " | Frequently tested in system design interviews |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locality, caching patterns, eviction policies, invalidation, CDN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-aside, read/write-through, write-behind, refresh-ahead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eviction Policies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU, LFU, FIFO, MRU, ARC, 2Q ? strengths and weaknesses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thundering Herd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutex locking and probabilistic early expiration (XFetch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invalidation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL, event-driven, write-invalidate ? consistency trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facebook TAO, Twitter Twemproxy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n    B[Concept Comparison]\n    A --> B\n    C[Quick Reference]\n    B --> C\n    D[CrossApplication Matrix]\n    C --> D\n    E[Chapter Quiz]\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/03-caching.png",
        alt: "Caching Strategies Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "locality-of-reference",
      children: "Locality of Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nCaching works because of locality of reference — the observation that accessed data is not uniformly distributed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Temporal locality:"
      }), " If a piece of data is accessed now, it is likely to be accessed again soon. Examples: a user's session data, the hot tweet in a timeline, the current page's CSS file. Temporal locality is the reason LRU (Least Recently Used) eviction works well: recently accessed items are kept, untouched items are evicted."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spatial locality:"
      }), " If a piece of data is accessed, nearby data is likely to be accessed soon. Examples: reading a contiguous block of disk sectors, iterating over an array, loading a page of search results. Spatial locality is the reason cache lines fetch 64 bytes from RAM even when only 4 are needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache effectiveness metric:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$hit_rate = \\frac{cache_hits}{cache_hits + cache_misses}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-tuned cache for an internet application achieves 90-99% hit rate. Below 85% hit rate, the cache may be doing more harm than good (serving stale data, adding operational complexity, consuming memory for negligible throughput gain)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cache-hierarchy",
      children: "Cache Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching occurs at every level of a modern system. Each level is faster, smaller, and more expensive per byte than the one below it."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Managed by"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-64 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-512 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-32 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-512 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 GB-2 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS/App"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Local memory cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-process (e.g., Guava cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis, Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-500 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database buffer pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InnoDB buffer pool, PostgreSQL shared buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-100 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 µs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cache (CloudFront, Cloudflare)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-50 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN provider"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cache miss penalty"
      }), " increases by orders of magnitude at each level. A miss in L1 (~1 ns) costs ~4 ns to fetch from L2. A miss in Redis (~5 ms) costs ~50 ms to fetch from the database. This asymmetry drives the entire caching strategy: maximize the hit rate at the fastest level possible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caching-patterns",
      children: "Caching Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Five fundamental patterns govern every cache implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-aside-lazy-loading",
      children: "Cache-Aside (Lazy Loading)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The application manages both the cache and the database. On a read:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Application checks cache for key K\n2. If found (hit): return cached value. Done.\n3. If not found (miss): query database for K\n4. Store result in cache with TTL\n5. Return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On a write:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Application writes to database\n2. Application invalidates (or updates) the cache entry for the key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def get_user(user_id):\n    # Cache-aside read\n    user = cache.get(f\"user:{user_id}\")\n    if user is not None:\n        return user\n\n    user = db.query(\"SELECT * FROM users WHERE id = ?\", user_id)\n    cache.set(f\"user:{user_id}\", user, ttl=3600)\n    return user\n\ndef update_user(user_id, data):\n    # Cache-aside write\n    db.execute(\"UPDATE users SET name = ? WHERE id = ?\", data.name, user_id)\n\n    # Invalidate, don't update — simpler and avoids race conditions\n    cache.delete(f\"user:{user_id}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple to implement. The cache only contains data that is actually requested. Cache failure does not crash the application (it degrades to direct DB reads). TTL provides natural invalidation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Three round-trips on a cache miss (check cache, query DB, write cache) increases latency for cold data. Stale data window between cache write and TTL expiry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read-through",
      children: "Read-Through"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cache layer itself is responsible for loading data from the database on a miss. The application talks only to the cache."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Application requests key K from cache\n2. Cache hit: return cached value\n3. Cache miss: cache loads value from database (transparent to application)\n4. Cache stores value and returns to application\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simplifies application code. The application is completely decoupled from the database."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " The cache must be configured with a loader/DAO for each data type. Less flexible for complex queries (joins, aggregations)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "write-through",
      children: "Write-Through"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every write goes through the cache to the database. The cache writes to the DB first, and only returns success after both writes succeed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Application writes data to cache\n2. Cache writes data to database\n3. Cache confirms to application only after DB write succeeds\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Cache is always consistent with the database (strong consistency). Read-after-write always returns the latest value from cache."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Higher write latency (must wait for DB confirmation). Unnecessary DB write if the data is never read again (wasted work). The database is the bottleneck on writes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "write-behind-write-back",
      children: "Write-Behind (Write-Back)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Writes go to the cache, which acknowledges immediately and asynchronously persists to the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Application writes data to cache\n2. Cache acknowledges success immediately\n3. Later (batch or timer): cache flushes accumulated writes to database\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Very low write latency (cache is fast). Can batch writes for DB efficiency (1000 writes batched into one 1000-row INSERT)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Data loss risk if the cache fails before flushing to DB. The cache must manage a write-back queue, which adds complexity. Consistency window: the database lags behind the cache."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "refresh-ahead",
      children: "Refresh-Ahead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cache proactively refreshes a key before it expires, based on access patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Application requests key K\n2. Cache hit: return value, check if key is near expiry\n3. If near expiry and access frequency is high: asynchronously reload from DB\n4. Cache miss: synchronous DB load, return value\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Reduces latency for hot keys (never pay the cold-start miss penalty). Smooths out DB load."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " May refetch data that is no longer needed (wasteful prediction). Complex to tune the \"near expiry\" threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eviction-policies",
      children: "Eviction Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the cache is full, something must be evicted. The choice of eviction policy is a bet on future access patterns — which entry is least likely to be needed again?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lru--least-recently-used",
      children: "LRU — Least Recently Used"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evict the item accessed furthest in the past."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " Doubly linked list + hash map. On access: move the item to head of list (O(1)). On eviction: remove from tail (O(1))."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Excellent for temporal locality. Simple O(1) implementation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Vulnerable to scan attacks (a one-time scan of many items evicts all hot data). Does not distinguish between \"frequently used but not right now\" and \"rarely used.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lfu--least-frequently-used",
      children: "LFU — Least Frequently Used"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evict the item with the lowest access frequency."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Resists scan attacks (one-time accesses have low frequency). Good for workload where popularity distribution is stable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " High implementation complexity (need frequency counters + min-heap or frequency buckets). Suffers from \"frequency inertia\" — once-hot items remain in cache even after they become cold, because their frequency counters take time to decay."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fifo--first-in-first-out",
      children: "FIFO — First In, First Out"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evict the item that was inserted earliest."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple queue implementation. No metadata updates on access (cache hits are free)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Ignores access patterns entirely. The most valuable hot item can be evicted simply because it was inserted first. Poor hit rate in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mru--most-recently-used",
      children: "MRU — Most Recently Used"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evict the most recently used item."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Counter-intuitive but useful for:"
      }), " Scenarios where older items are more likely to be reused. For example, a \"scrollable feed\" where users start at the most recent item and move backward — recent items have been seen, older ones have not."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "arc--adaptive-replacement-cache",
      children: "ARC — Adaptive Replacement Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combines LRU and LFU by maintaining four lists: recent (recency), frequent (frequency), ghost entries (evicted but tracked). Adaptively balances between recency and frequency based on observed workload."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Self-tuning — no manual configuration of recency vs frequency weight. Outperforms LRU on most real-world workloads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Complex implementation. Ghost entries consume memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2q--two-queue-algorithm",
      children: "2Q — Two-Queue Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maintains three queues: Am (FIFO, for single-access items), A1 (FIFO for recently accessed that do not appear in Am), and Am (LRU for frequently accessed items). An item starts in Am ? promoted to A1 on second access ? promoted to Am on third access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Resists scan attacks better than LRU (a single scan fills Am, not the main cache). Better hit rate than LRU for many workloads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " More complex than LRU. Additional memory for metadata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementing-an-lru-cache-from-scratch",
      children: "Implementing an LRU Cache from Scratch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An LRU cache requires O(1) get and put operations. This demands a combination of a hash map (for O(1) lookups) and a doubly linked list (for O(1) removal and re-insertion)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DLinkedNode:\n    def __init__(self, key=0, value=0):\n        self.key = key\n        self.value = value\n        self.prev = None\n        self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.size = 0\n        self.cache = dict()               # key ? DLinkedNode\n        self.head = DLinkedNode()          # dummy head (most recently used end)\n        self.tail = DLinkedNode()          # dummy tail (least recently used end)\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    def _add_node(self, node):\n        \"\"\"Add node right after head.\"\"\"\n        node.prev = self.head\n        node.next = self.head.next\n        self.head.next.prev = node\n        self.head.next = node\n\n    def _remove_node(self, node):\n        \"\"\"Remove an existing node from the linked list.\"\"\"\n        prev = node.prev\n        nxt = node.next\n        prev.next = nxt\n        nxt.prev = prev\n\n    def _move_to_head(self, node):\n        \"\"\"Move a node to the head (most recently used position).\"\"\"\n        self._remove_node(node)\n        self._add_node(node)\n\n    def _pop_tail(self):\n        \"\"\"Pop the LRU node (just before tail).\"\"\"\n        node = self.tail.prev\n        self._remove_node(node)\n        return node\n\n    def get(self, key: int) -> int:\n        node = self.cache.get(key)\n        if not node:\n            return -1\n        # Mark as recently used\n        self._move_to_head(node)\n        return node.value\n\n    def put(self, key: int, value: int) -> None:\n        node = self.cache.get(key)\n        if node:\n            # Key exists: update value and move to head\n            node.value = value\n            self._move_to_head(node)\n            return\n        # New key: create node\n        new_node = DLinkedNode(key, value)\n        self.cache[key] = new_node\n        self._add_node(new_node)\n        self.size += 1\n        if self.size > self.capacity:\n            # Evict LRU\n            tail = self._pop_tail()\n            del self.cache[tail.key]\n            self.size -= 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time complexity:"
      }), " O(1) for both get and put."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space complexity:"
      }), " O(capacity) for the linked list and hash map."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cache-invalidation",
      children: "Cache Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keeping the cache consistent with the source of truth is the hardest problem in caching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ttl-based-invalidation",
      children: "TTL-Based Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each cache entry has a Time-To-Live (TTL). After TTL expires, the entry is automatically evicted. The next read triggers a cache miss and reloads fresh data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cache.set(key, value, ttl=3600)   # valid for 1 hour\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple, automatic, no coordination needed. Bounded staleness — data is never more than TTL old."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Data can be stale within the TTL window. Short TTL reduces cache effectiveness. Choosing the right TTL is workload-dependent and requires tuning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "event-driven-invalidation",
      children: "Event-Driven Invalidation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database publishes change events (via CDC — Change Data Capture, or explicit application events). A subscriber receives the event and invalidates or updates the cache."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application update:\n  1. Write to DB\n  2. Publish event \"user:42:updated\" to Kafka/RabbitMQ\n  3. Cache consumer receives event\n  4. Cache deletes key \"user:42\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Near-instant invalidation (sub-second). TTL can be long or infinite since manual invalidation handles consistency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Requires a message broker. Eventual consistency — there is a window between DB update and cache invalidation. If the invalidation message is lost, the cache is permanently stale (until TTL fires)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "write-invalidate",
      children: "Write Invalidate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On every write to the source, explicitly delete (or update) the corresponding cache entry."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def update_user(user_id, name):\n    db.execute(\"UPDATE users SET name = ? WHERE id = ?\", name, user_id)\n    cache.delete(f\"user:{user_id}\")          # invalidate (lazy: next read fetches fresh)\n    # OR\n    user = db.execute(\"SELECT * FROM users WHERE id = ?\", user_id)\n    cache.set(f\"user:{user_id}\", user, ttl=3600)  # update (eager: cache stays hot)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Invalidate vs update:"
      }), " Invalidation is safer — writing the updated value directly to the cache risks writing a stale value if another concurrent writer commits a newer version. Invalidation causes the next read to fetch the latest value. The trade-off is one extra read (the cache miss)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-thundering-herd-problem",
      children: "The Thundering Herd Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a popular cache key expires, thousands of concurrent requests all see a miss and simultaneously query the database. This can overwhelm the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Time 0:    key \"homepage_feed\" expires\nTime 0.01: 500 requests check cache ? all miss\nTime 0.02: 500 requests query DB simultaneously\nTime 0.05: Database CPU spikes to 100%, latency degrades\nTime 0.10: Cascading failure — DB connection pool exhausted\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution 1: Mutex Locking (Cache Stampede Prevention)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only one request reloads the cache; others wait for the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def get_homepage():\n    cached = cache.get(\"homepage_feed\")\n    if cached is not None:\n        return cached\n\n    # Try to acquire a distributed lock\n    lock_key = \"lock:homepage_feed\"\n    if cache.setnx(lock_key, \"locked\", ttl=5):   # set if not exists\n        try:\n            result = db.query(\"SELECT * FROM feed ORDER BY id DESC LIMIT 100\")\n            cache.set(\"homepage_feed\", result, ttl=300)\n            return result\n        finally:\n            cache.delete(lock_key)\n    else:\n        # Another request is reloading. Wait and retry.\n        sleep(0.05)\n        return get_homepage()   # recursion — will hit cache\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution 2: Probabilistic Early Expiration (XFetch Algorithm)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refresh the cache probabilistically before the TTL actually expires. This smooths the load over time rather than concentrating it at the TTL boundary."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef should_refresh(ttl_remaining, total_ttl, beta=1.0):\n    \"\"\"XFetch algorithm: return True if we should proactively refresh.\"\"\"\n    if ttl_remaining <= 0:\n        return True\n    probability = (total_ttl - ttl_remaining) / total_ttl\n    # The probability of refreshing increases as the entry ages\n    threshold = random.random() * beta\n    return probability > threshold\n\n# Called on every cache read:\nif should_refresh(ttl_remaining=60, total_ttl=300, beta=2.0):\n    # Asynchronously reload the cache entry\n    thread_pool.submit(reload_cache_entry, key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parameter ß (beta) controls the aggressiveness: ß=0 means refresh immediately (always); ß=8 means never refresh early (pure TTL). The XFetch algorithm ensures that the expected number of concurrent recomputations at the TTL boundary is approximately 1, regardless of the number of requesting clients."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "global-cache-vs-distributed-cache",
      children: "Global Cache vs Distributed Cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Global cache (single node):"
      }), " A single cache instance shared by all application servers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pros: Simple, no consistency issues, no distribution overhead.\nCons: Single point of failure, limited by single-node memory, bottleneck for all traffic.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distributed cache (Redis Cluster, Memcached):"
      }), " Data is partitioned across multiple nodes, typically using consistent hashing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Redis Cluster:\n- Automatic sharding across 16384 hash slots\n- Keys are mapped to a slot: HASH_SLOT = CRC16(key) mod 16384\n- Each node owns a subset of slots\n- Replication: each master has 1+ replicas (for failover)\n- No central coordinator — gossip protocol for cluster state\n\nMemcached:\n- Client-side consistent hashing\n- No replication (Memcached is a cache, not a store — data loss is acceptable)\n- No persistence\n- Very low overhead (simpler than Redis, faster for simple get/set)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redis (Cluster)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memcached"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String, hash, list, set, sorted set, stream, etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String only (binary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB snapshots, AOF log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (leader-follower)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (hash slots)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side (consistent hashing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lua scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pub/Sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (overhead for data structures)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (minimal metadata)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cache-consistency",
      children: "Cache Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strong consistency"
      }), " for caches: every read returns the most recently written value. Achievable only with write-through + distributed coordination (blocking writes until all cache nodes acknowledge). Expensive and rarely used for caches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eventual consistency"
      }), " for caches: after a write, the cache converges to the updated value within a bounded time window. This is the default for most caching systems. Accept staleness up to TTL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Between these extremes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-your-writes consistency:"
        }), " After a user updates data, their subsequent reads see the new value (but other users may see stale data). Implemented by versioning or per-user cache affinity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monotonic reads:"
        }), " Once a user reads a value, they never see an older value for the same key. Requires a monotonic sequence number."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cdn-caching",
      children: "CDN Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content Delivery Networks cache static (and sometimes dynamic) content at edge nodes geographically close to users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache-Control headers"
      }), " control CDN behavior:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache-Control: public, max-age=31536000, immutable   # 1 year, never re-validate\nCache-Control: public, max-age=60, must-revalidate    # 1 minute, must check origin\nCache-Control: private, max-age=0                     # do not cache\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge caching:"
      }), " CDN nodes cache responses by URL. On a miss (not in edge cache), the edge fetches from the origin. Cache hit serves from the edge — significantly reduced latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purge strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time-based purge:"
        }), " Content expires based on Cache-Control headers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API-based purge:"
        }), " CDN API to immediately invalidate specific URLs or patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag-based purge (Surrogate-Key):"
        }), " Assign tags to responses; purge all responses with a given tag."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CDN for dynamic content:"
      }), " Modern CDNs (Cloudflare, Fastly) can cache JSON API responses with short TTLs (1-30 seconds), dramatically reducing origin server load for dynamic content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-systems",
      children: "Real-World Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Facebook's TAO — The Graph Cache at Scale."
      }), " Facebook's social graph (users, friends, pages, likes) does not fit traditional caching patterns. TAO is a geographically distributed, always-consistent graph cache layer that sits between application servers and MySQL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object association cache:"
        }), " TAO caches graph associations (friend-of-friend, page-liked-by-user), not just key-value pairs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-through to MySQL:"
        }), " Writes go to TAO, TAO writes to MySQL synchronously, then TAO broadcasts invalidation to all regions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-after-write consistency:"
        }), " A write in one region is visible to reads in all regions within milliseconds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batched API:"
        }), " TAO exposes a graph query API (get object, get associations, count associations). Applications batch many graph queries into a single TAO request."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TAO serves billions of reads per second and is the layer that makes the Facebook News Feed possible at global scale."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Twitter's Twemproxy (Nutcracker)."
      }), " A proxy layer that distributes cache requests across multiple Memcached or Redis servers. Acts as a transparent sharding layer: application servers talk to Twemproxy as if it were a single cache, and Twemproxy routes requests to the correct backend using consistent hashing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pooling:"
        }), " Aggregates connections from many app servers to fewer cache connections (reduces connection overhead)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sharding:"
        }), " Consistent-hash based routing to backend nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-ejection:"
        }), " Detects failed nodes and re-routes traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline support:"
        }), " Batches multiple cache operations into single backend calls."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Twemproxy reduced Twitter's cache connection count from millions to thousands, solving a systemic connection-exhaustion problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-cache-aside-with-redis-for-a-user-profile-service",
      children: "Example 1: Cache-Aside with Redis for a User Profile Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import redis\nimport json\nimport asyncio\n\nr = redis.Redis(host='cache-cluster.example.com', port=6379,\n                decode_responses=True)\n\nUSER_CACHE_TTL = 300  # 5 minutes\n\nasync def get_user_profile(user_id):\n    cache_key = f\"user_profile:{user_id}\"\n    cached = r.get(cache_key)\n\n    if cached is not None:\n        return json.loads(cached)\n\n    # Cache miss — load from database\n    profile = await db.fetch_one(\n        \"SELECT id, name, avatar_url, bio FROM users WHERE id = $1\",\n        user_id\n    )\n\n    if profile is None:\n        return None\n\n    profile_dict = dict(profile)\n    r.setex(cache_key, USER_CACHE_TTL, json.dumps(profile_dict))\n    return profile_dict\n\nasync def update_user_profile(user_id, updates):\n    await db.execute(\n        \"UPDATE users SET name = $1, bio = $2 WHERE id = $3\",\n        updates['name'], updates['bio'], user_id\n    )\n    # Invalidate cache — next read will fetch fresh data\n    r.delete(f\"user_profile:{user_id}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First read for user 42: cache miss ? DB query ? populate cache ? return"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Second read for user 42 (within 5 min): cache hit ? return immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update user 42: DB update ? cache delete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read after update: cache miss ? DB query (fresh data) ? repopulate cache"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-probabilistic-early-expiration-in-javascript-nodejs",
      children: "Example 2: Probabilistic Early Expiration in JavaScript (Node.js)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const redis = require('redis');\nconst client = redis.createClient();\n\nconst BETA = 1.5;\nconst TTL_SECONDS = 600;\n\nfunction shouldRefresh(ttlRemaining) {\n  if (ttlRemaining <= 0) return true;\n  const age = TTL_SECONDS - ttlRemaining;\n  const probability = age / TTL_SECONDS;\n  return probability > (Math.random() * BETA);\n}\n\nasync function getFeed(userId) {\n  const cacheKey = `feed:${userId}`;\n  const cached = await client.get(cacheKey);\n  const ttl = await client.ttl(cacheKey);\n\n  if (cached && !shouldRefresh(ttl)) {\n    return JSON.parse(cached);\n  }\n\n  if (cached && shouldRefresh(ttl)) {\n    // Asynchronously refresh in background\n    refreshFeedAsync(userId);\n    return JSON.parse(cached);\n  }\n\n  // Cold miss — synchronous reload\n  const feed = await db.queryFeed(userId);\n  await client.setEx(cacheKey, TTL_SECONDS, JSON.stringify(feed));\n  return feed;\n}\n\nasync function refreshFeedAsync(userId) {\n  const lockKey = `lock:feed:${userId}`;\n  const acquired = await client.setNX(lockKey, '1');\n  if (!acquired) return;  // another request is already refreshing\n\n  await client.expire(lockKey, 10);\n  try {\n    const feed = await db.queryFeed(userId);\n    await client.setEx(`feed:${userId}`, TTL_SECONDS, JSON.stringify(feed));\n  } finally {\n    await client.del(lockKey);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "As the cache entry ages, the probability of refresh increases smoothly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At TTL=0, refresh is guaranteed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The beta parameter controls how early refreshes begin (higher = later, more concentrated at TTL boundary)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mutex lock ensures only one background refresh runs per key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Metric"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic covered in Chapter 3: Caching Strategies and Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined by specific measurable attributes"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for Chapter 3: Caching Strategies and Patterns"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appropriate for specific system contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice involves trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which of the following best describes a key concept from this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>Refer to the chapter content for the correct answer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which of the following best describes a key concept from this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>Refer to the chapter content for the correct answer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which of the following best describes a key concept from this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>Refer to the chapter content for the correct answer."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-1",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Concept Comparison is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 3: Caching Strategies and Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental to system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick Reference is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept for Chapter 3: Caching Strategies and Patterns"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across multiple system design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each choice has trade-offs"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Chapter Quiz is a critical concept that directly impacts system design decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary trade-off discussed in this chapter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Option A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Option B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Option C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Option D"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>Refer to the chapter content</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " Which concept is most fundamental to the topic of Chapter 3"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Option A"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Option B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Option C"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Option D"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>Review the core sections</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " How does this chapter's main concept apply to real-world systems?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Option A"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Option B"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Option C"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Option D"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>See the Real-World Systems section</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "implementation-caching-strategies-and-cdn",
                  children: "Implementation: Caching Strategies and CDN"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class LRUCache { private capacity: number; private cache = new Map<string, { value: any; lastAccess: number; freq: number }>();\n  constructor(cap: number) { this.capacity = cap; }\n  get(key: string): any { if (!this.cache.has(key)) return -1; const entry = this.cache.get(key)!; entry.lastAccess = Date.now(); entry.freq++; return entry.value; }\n  put(key: string, value: any): void { if (this.cache.has(key)) { this.cache.get(key)!.value = value; return; }\n    if (this.cache.size >= this.capacity) { let oldest = \"\"; let minTime = Infinity; for (const [k, v] of this.cache) { if (v.lastAccess < minTime) { minTime = v.lastAccess; oldest = k; } } this.cache.delete(oldest); }\n    this.cache.set(key, { value, lastAccess: Date.now(), freq: 0 }); }\n}\nclass WriteThroughCache { private cache = new Map<string, any>();\n  write(key: string, value: any, dbWrite: (k: string, v: any) => void): void { this.cache.set(key, value); dbWrite(key, value); }\n  read(key: string, dbRead: (k: string) => any): any { if (this.cache.has(key)) return this.cache.get(key); const v = dbRead(key); this.cache.set(key, v); return v; }\n}\nclass CacheAside { async read<T>(key: string, fetchFromDb: (k: string) => Promise<T>, cache: LRUCache): Promise<T> { const cached = cache.get(key); if (cached !== -1) return cached; const data = await fetchFromDb(key); cache.put(key, data); return data; } }\nclass CDNNode { private cache = new Map<string, { data: string; ttl: number; createdAt: number; hits: number }>();\n  set(url: string, data: string, ttl = 3600): void { this.cache.set(url, { data, ttl, createdAt: Date.now(), hits: 0 }); }\n  get(url: string): string | null { const entry = this.cache.get(url); if (!entry) return null; if (Date.now() - entry.createdAt > entry.ttl * 1000) { this.cache.delete(url); return null; } entry.hits++; return entry.data; }\n  getStats(): { totalItems: number; totalHits: number; hitRate: number } { let hits = 0; for (const entry of this.cache.values()) hits += entry.hits; return { totalItems: this.cache.size, totalHits: hits, hitRate: this.cache.size > 0 ? hits / this.cache.size : 0 }; }\n}\nclass DistributedCache { private nodes = new Map<string, LRUCache>();\n  addNode(id: string, capacity: number): void { this.nodes.set(id, new LRUCache(capacity)); }\n  getNodeForKey(key: string): LRUCache { const ids = [...this.nodes.keys()]; const hash = [...key].reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0); return this.nodes.get(ids[Math.abs(hash) % ids.length])!; }\n  get(key: string): any { return this.getNodeForKey(key).get(key); }\n  put(key: string, value: any): void { this.getNodeForKey(key).put(key, value); }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// caching\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'caching', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// caching - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'caching' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-lru-cache-o1-getput",
                  children: "TypeScript: LRU Cache (O(1) Get/Put)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class implements a true O(1) LRU cache using a doubly linked list and a hash map — the production-grade approach used in Redis, Memcached, and database buffer pools."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class LRUCache<K, V> {\n  private capacity: number;\n  private cache: Map<K, ListNode<K, V>> = new Map();\n  private head: ListNode<K, V>;\n  private tail: ListNode<K, V>;\n\n  constructor(capacity: number) {\n    this.capacity = capacity;\n    this.head = new ListNode<K, V>(null as any, null as any);\n    this.tail = new ListNode<K, V>(null as any, null as any);\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n\n  get(key: K): V | -1 {\n    const node = this.cache.get(key);\n    if (!node) return -1;\n    this.moveToHead(node);\n    return node.value;\n  }\n\n  put(key: K, value: V): void {\n    const node = this.cache.get(key);\n    if (node) {\n      node.value = value;\n      this.moveToHead(node);\n      return;\n    }\n    const newNode = new ListNode(key, value);\n    this.cache.set(key, newNode);\n    this.addToHead(newNode);\n    if (this.cache.size > this.capacity) {\n      const removed = this.removeTail();\n      this.cache.delete(removed.key);\n    }\n  }\n\n  has(key: K): boolean { return this.cache.has(key); }\n\n  size(): number { return this.cache.size; }\n\n  clear(): void {\n    this.cache.clear();\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n\n  private addToHead(node: ListNode<K, V>): void {\n    node.prev = this.head;\n    node.next = this.head.next;\n    this.head.next!.prev = node;\n    this.head.next = node;\n  }\n\n  private removeNode(node: ListNode<K, V>): void {\n    node.prev!.next = node.next;\n    node.next!.prev = node.prev;\n  }\n\n  private moveToHead(node: ListNode<K, V>): void {\n    this.removeNode(node);\n    this.addToHead(node);\n  }\n\n  private removeTail(): ListNode<K, V> {\n    const node = this.tail.prev!;\n    this.removeNode(node);\n    return node;\n  }\n}\n\nclass ListNode<K, V> {\n  constructor(\n    public key: K,\n    public value: V,\n    public prev: ListNode<K, V> | null = null,\n    public next: ListNode<K, V> | null = null\n  ) {}\n}\n\n// -- Example ------------------------------------------------------\nconst cache = new LRUCache<string, number>(3);\ncache.put('a', 1);\ncache.put('b', 2);\ncache.put('c', 3);\nconsole.log('Get a:', cache.get('a')); // 1 — moves 'a' to head\ncache.put('d', 4); // evicts 'b' (LRU)\nconsole.log('Get b (evicted):', cache.get('b')); // -1\nconsole.log('Cache size:', cache.size()); // 3\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-cache-aside-pattern-readwrite-through-write-behind",
                  children: "TypeScript: Cache-Aside Pattern (Read/Write-Through, Write-Behind)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class implements the three major cache access patterns — cache-aside, read-through, and write-behind — with configurable TTL and batch flush."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface DataStore<K, V> {\n  get(key: K): Promise<V | null>;\n  set(key: K, value: V): Promise<void>;\n  delete(key: K): Promise<void>;\n}\n\nclass CacheAside<K, V> {\n  constructor(\n    private cache: LRUCache<K, V>,\n    private store: DataStore<K, V>,\n    private ttlMs: number = 60000\n  ) {}\n\n  async read(key: K): Promise<V | null> {\n    const cached = this.cache.get(key);\n    if (cached !== -1) return cached as V;\n    const value = await this.store.get(key);\n    if (value !== null) {\n      this.cache.put(key, value);\n      setTimeout(() => this.cache.delete(key), this.ttlMs);\n    }\n    return value;\n  }\n\n  async write(key: K, value: V): Promise<void> {\n    await this.store.set(key, value);\n    this.cache.delete(key); // invalidate, don't update (race condition safe)\n  }\n\n  async invalidate(key: K): Promise<void> {\n    this.cache.delete(key);\n  }\n}\n\nclass ReadThroughCache<K, V> {\n  constructor(\n    private cache: LRUCache<K, V>,\n    private loader: (key: K) => Promise<V | null>,\n    private ttlMs: number = 60000\n  ) {}\n\n  async get(key: K): Promise<V | null> {\n    const cached = this.cache.get(key);\n    if (cached !== -1) return cached as V;\n    const value = await this.loader(key);\n    if (value !== null) {\n      this.cache.put(key, value);\n      setTimeout(() => this.cache.delete(key), this.ttlMs);\n    }\n    return value;\n  }\n}\n\nclass WriteBehindCache<K, V> {\n  private writeQueue: Map<K, V> = new Map();\n  private flushTimer: ReturnType<typeof setInterval> | null = null;\n  private flushing = false;\n\n  constructor(\n    private cache: LRUCache<K, V>,\n    private store: DataStore<K, V>,\n    private flushIntervalMs: number = 5000,\n    private batchSize: number = 100\n  ) {\n    this.flushTimer = setInterval(() => this.flush(), this.flushIntervalMs);\n  }\n\n  async write(key: K, value: V): Promise<void> {\n    this.cache.put(key, value);\n    this.writeQueue.set(key, value);\n    if (this.writeQueue.size >= this.batchSize) {\n      await this.flush();\n    }\n  }\n\n  async read(key: K): Promise<V | null> {\n    const cached = this.cache.get(key);\n    if (cached !== -1) return cached as V;\n    return this.store.get(key);\n  }\n\n  private async flush(): Promise<void> {\n    if (this.flushing || this.writeQueue.size === 0) return;\n    this.flushing = true;\n    const batch = new Map(this.writeQueue);\n    this.writeQueue.clear();\n    for (const [key, value] of batch) {\n      try { await this.store.set(key, value); } catch (e) {\n        this.writeQueue.set(key, value); // re-queue on failure\n      }\n    }\n    this.flushing = false;\n  }\n\n  destroy(): void {\n    if (this.flushTimer) clearInterval(this.flushTimer);\n    this.flush();\n  }\n}\n\n// -- Example: Cache-aside usage ----------------------------------\n// const store: DataStore<string, string> = { get: async k => null, set: async (k, v) => {}, delete: async k => {} };\n// const aside = new CacheAside(new LRUCache(100), store, 30000);\n// const val = await aside.read('user:42');\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-redis-sentinel-failover-simulation",
                  children: "TypeScript: Redis Sentinel (Failover Simulation)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class simulates the Redis Sentinel failover process — master election, replica promotion, and quorum-based decision making."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface SentinelNode {\n  id: string;\n  alive: boolean;\n  masterId: string | null;\n  votesFor: string | null;\n  lastHeartbeat: number;\n  configEpoch: number;\n}\n\nclass RedisSentinel {\n  private sentinels: Map<string, SentinelNode> = new Map();\n  private master: string | null = null;\n  private replicas: Set<string> = new Set();\n  private failoverInProgress = false;\n\n  constructor(private quorum: number = 2) {}\n\n  addSentinel(id: string): void {\n    this.sentinels.set(id, { id, alive: true, masterId: null, votesFor: null, lastHeartbeat: Date.now(), configEpoch: 0 });\n  }\n\n  setMaster(sentinelId: string, masterId: string): void {\n    this.master = masterId;\n    const s = this.sentinels.get(sentinelId);\n    if (s) s.masterId = masterId;\n  }\n\n  addReplica(replicaId: string): void {\n    this.replicas.add(replicaId);\n  }\n\n  markDown(nodeId: string): void {\n    const s = this.sentinels.get(nodeId);\n    if (s) s.alive = false;\n  }\n\n  markUp(nodeId: string): void {\n    const s = this.sentinels.get(nodeId);\n    if (s) s.alive = true;\n  }\n\n  heartbeat(): void {\n    for (const [, s] of this.sentinels) {\n      if (s.alive) s.lastHeartbeat = Date.now();\n    }\n  }\n\n  detectFailure(timeoutMs: number = 30000): string[] {\n    const now = Date.now();\n    const failed: string[] = [];\n    for (const [id, s] of this.sentinels) {\n      if (s.alive && now - s.lastHeartbeat > timeoutMs) {\n        s.alive = false;\n        failed.push(id);\n      }\n    }\n    return failed;\n  }\n\n  startElection(): { winner: string | null; votes: Map<string, number> } {\n    const votes = new Map<string, number>();\n    const alive = [...this.sentinels.values()].filter(s => s.alive);\n\n    for (const s of alive) {\n      const votedFor = alive[Math.floor(Math.random() * alive.length)].id;\n      s.votesFor = votedFor;\n      votes.set(votedFor, (votes.get(votedFor) ?? 0) + 1);\n    }\n\n    let winner: string | null = null;\n    let maxVotes = 0;\n    for (const [candidate, count] of votes) {\n      if (count > maxVotes && count >= this.quorum) {\n        maxVotes = count;\n        winner = candidate;\n      }\n    }\n    return { winner, votes };\n  }\n\n  failover(): { success: boolean; newMaster: string | null; steps: string[] } {\n    const steps: string[] = [];\n    steps.push('SDOWN: Sentinel detected master failure');\n\n    const { winner, votes } = this.startElection();\n    steps.push(`Election: ${[...votes.entries()].map(([k, v]) => `${k}=${v}`).join(', ')}`);\n\n    if (!winner) {\n      steps.push('FAIL: No sentinel reached quorum');\n      return { success: false, newMaster: null, steps };\n    }\n\n    if (this.replicas.size === 0) {\n      steps.push('FAIL: No replicas available for promotion');\n      return { success: false, newMaster: null, steps };\n    }\n\n    const replicaList = [...this.replicas];\n    const promoted = replicaList[Math.floor(Math.random() * replicaList.length)];\n    this.master = promoted;\n    this.failoverInProgress = true;\n    steps.push(`PROMOTE: Replica ${promoted} promoted to master`);\n\n    for (const rep of replicaList) {\n      if (rep !== promoted) {\n        steps.push(`REPLICAOF: ${rep} now replicates from ${promoted}`);\n      }\n    }\n\n    this.failoverInProgress = false;\n    steps.push('OK: Failover complete');\n    return { success: true, newMaster: promoted, steps };\n  }\n\n  isHealthy(): boolean {\n    const alive = [...this.sentinels.values()].filter(s => s.alive).length;\n    return alive >= this.quorum && this.master !== null;\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst sentinel = new RedisSentinel(2);\nfor (let i = 0; i < 3; i++) sentinel.addSentinel(`sentinel-${i}`);\nsentinel.setMaster('sentinel-0', 'redis-master-0');\nsentinel.addReplica('redis-replica-1');\nsentinel.addReplica('redis-replica-2');\n\nconsole.log('=== Simulating master failure ===');\nsentinel.markDown('sentinel-0');\nconst result = sentinel.failover();\nresult.steps.forEach(s => console.log('  -', s));\nconsole.log('New master:', result.newMaster);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "cache-architecture-patterns",
                  children: "Cache Architecture Patterns"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TD\n    classDef cache fill:#4a90d9,color:#fff,stroke:#2c5f8a,stroke-width:2px\n    classDef db fill:#7ed321,color:#fff,stroke:#4a8c14,stroke-width:2px\n    classDef client fill:#f5a623,color:#fff,stroke:#c47f12,stroke-width:2px\n    classDef infra fill:#9013fe,color:#fff,stroke:#5c0e9e,stroke-width:2px\n\n    subgraph Cache_Aside\n        CA_CLIENT[Application]:::client --> CA_CACHE[Redis/Memcached]:::cache\n        CA_CLIENT --> CA_DB[(Database)]:::db\n        CA_CACHE -.->|Miss| CA_DB\n        CA_DB -.->|Populate| CA_CACHE\n    end\n\n    subgraph Read_Write_Through\n        RT_CLIENT[Application]:::client --> RT_CACHE[Cache Layer]:::cache\n        RT_CACHE --> RT_DB[(Database)]:::db\n    end\n\n    subgraph Write_Behind\n        WB_CLIENT[Application]:::client --> WB_CACHE[Cache Layer]:::cache\n        WB_CACHE -.->|Async Batch| WB_DB[(Database)]:::db\n        WB_CACHE --> WB_QUEUE[Write Queue]:::infra\n        WB_QUEUE -.->|Periodic Flush| WB_DB\n    end\n\n    subgraph Refresh_Ahead\n        RA_CLIENT[Application]:::client --> RA_CACHE[Cache Layer]:::cache\n        RA_CACHE -.->|Near Expiry| RA_DB[(Database)]:::db\n        RA_DB -.->|Async Refresh| RA_CACHE\n    end\n\n    subgraph CDN_Caching\n        CDN_USER[User Browser]:::client --> CDN_EDGE[CDN Edge]:::infra\n        CDN_EDGE --> CDN_ORIGIN[Origin Server]:::infra\n        CDN_EDGE -.->|Cache Hit| CDN_USER\n        CDN_ORIGIN -.->|Cache Miss| CDN_EDGE\n    end\n\n    subgraph Eviction_Policies\n        EV_LRU[LRU: Recently Used]:::cache\n        EV_LFU[LFU: Frequently Used]:::cache\n        EV_ARC[ARC: Adaptive]:::cache\n        EV_TTL[TTL: Time-Based]:::cache\n    end\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "practical-takeaways",
                  children: "Practical Takeaways"
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "Takeaway"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "Application"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Cache what you measure, not everything"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Profile read patterns first — cache only data with high read-to-write ratio (>10:1) and temporal locality"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Cache-aside is the safest default"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Application manages both cache and DB; cache failure degrades gracefully to direct DB reads"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "LRU works for most workloads but is vulnerable to scans"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use ARC or 2Q if your workload has periodic batch scans that would evict hot data"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Thundering herd requires both locking and early expiration"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use mutex for cold-start protection; use XFetch (ß=1.5) for smooth pre-expiration of hot keys"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Invalidate, don't update"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Cache invalidation (delete) is race-condition safe; direct cache updates risk writing stale values"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "TTL provides bounded staleness"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Set TTL = acceptable staleness window, not \"how long data is valid\""
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Multi-tier caching reduces latency by 10-100x"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "L1 (in-process) for hot keys, L2 (Redis) for warm data, L3 (DB/CDN) for cold reads"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "case-study",
                  children: "Case Study"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Twitter's Cache Architecture Evolution."
                  }), " Twitter's caching infrastructure evolved through three distinct phases as the platform grew from 10M to 330M MAU. Phase 1 (2009): A single Redis instance cached user timelines with cache-aside pattern — each tweet read went to Redis, missed tweets were fetched from MySQL. This worked until a single celebrity tweet caused 50K QPS on a single cache key, melting down the Redis instance. Phase 2 (2011): Twitter deployed Twemproxy (Nutcracker), a proxy layer that distributed cache requests across 100+ Memcached nodes using consistent hashing with virtual nodes. This solved the sharding problem but introduced connection-exhaustion issues — each of 5,000 app servers opened connections to every Memcached node, totaling 500K connections."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Phase 3 (2013-Present):"
                  }), " Twitter adopted a three-tier cache architecture. L1: Local in-process cache (Guava) on each app server for the hottest 1% of keys (5ms latency, 50MB per server). L2: Twemproxy-managed Redis Cluster with 256 nodes for warm data (5-10ms latency, 250GB total). L3: MySQL with replica reads for cache misses and cold data. The key innovation was probabilistic early expiration (XFetch with ß=1.0) combined with a distributed mutex per key — this eliminated the thundering herd problem entirely. When a key approaches TTL expiry (~80% age), each app server probabilistically decides to refresh; the mutex ensures only one server actually queries MySQL. This smoothed cache reloads from spiky (all servers at TTL boundary) to uniform across the TTL window."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Business Impact."
                  }), " The multi-tier cache reduced p99 read latency from 45ms to 8ms and cut MySQL read load by 94%. Twitter's cache infrastructure now handles 300B+ reads per day with a 98.7% overall hit rate. The Twemproxy connection aggregation reduced total cache connections from 500K to 8K, freeing OS resources and eliminating connection-timeout errors. This case demonstrates that caching at scale requires not just the right data structure (LRU with O(1) operations) but the right architecture (tiered, with XFetch for thundering herd prevention and consistent hashing for elastic scaling)."]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "chapter-quiz-2",
                  children: "Chapter Quiz"
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "#"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "Question"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "B"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "C"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "D"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "Answer"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Which caching pattern is the most common and flexible?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Write-through"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Read-through"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Cache-aside"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Write-behind"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What is the primary vulnerability of LRU eviction?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "High memory usage"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Scan attacks"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Slow performance"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Complexity"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "3"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "The XFetch algorithm prevents which problem?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Cache poisoning"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Memory fragmentation"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Thundering herd"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Cache stampede"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "4"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Why should you invalidate rather than update cache on writes?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Invalidating is faster"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Avoids race conditions"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Reduces memory usage"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Simplifies TTL"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "B"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What does Facebook's TAO cache specialize in?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Static assets"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "User sessions"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Graph associations"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "API responses"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Caching exploits temporal and spatial locality. A 90%+ hit rate indicates a well-tuned cache; below 85% the cache may be adding complexity without proportional benefit."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The five caching patterns are Cache-aside, Read-through, Write-through, Write-behind, and Refresh-ahead. Cache-aside is the most common and flexible."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "LRU eviction is the default for most systems but is vulnerable to scan attacks. LFU resists scans but suffers from frequency inertia. ARC and 2Q are self-tuning alternatives."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A production LRU cache requires O(1) operations via a doubly linked list combined with a hash map."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The thundering herd problem occurs when many clients simultaneously reload an expired cache key. Mitigation strategies include distributed mutex locks and probabilistic early expiration (XFetch)."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Cache invalidation is harder than caching. TTL provides bounded staleness; event-driven invalidation provides near-instant updates; write-invalidate is the safest write strategy."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Redis excels at data structure variety and optional persistence; Memcached excels at raw get/set throughput with minimal overhead."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "CDN caching moves content closer to users via edge nodes. Cache-Control headers, surrogate keys, and purge APIs control CDN behavior."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Facebook TAO and Twitter Twemproxy demonstrate cache architectures at global scale with billions of reads per second."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "exercises",
                  children: "Exercises"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Review Questions — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "review-questions-4-5",
                    children: "Review Questions (4-5)"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Explain the difference between temporal and spatial locality. Provide an example of each from a typical web application workload.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Temporal locality: a user's session data accessed on every page load (recently accessed, likely again soon). Spatial locality: loading a page of 50 search results from an array (adjacent data, likely accessed together)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["What is the \"scan attack\" vulnerability in LRU caches and how does LFU mitigate it?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " A scan attack iterates through many unique keys, evicting all hot data from an LRU cache. LFU mitigates this because one-time scans have low frequency counts, so hot frequently-accessed items remain cached despite the scan."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Under what conditions would you choose Write-behind (write-back) over Write-through? What risks does this choice introduce?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Choose Write-behind when write throughput is critical and some data loss is acceptable (logging, metrics, analytics). Risk: cache failure before flush causes permanent data loss. Write-behind also introduces a consistency window where DB lags behind cache."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Describe the XFetch algorithm. Why does it prevent the thundering herd problem while still providing fresh data?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " XFetch probabilistically refreshes cache entries before TTL expiry using a probability function based on entry age. With ß=1.0, the expected number of concurrent recomputations at TTL boundary ≈ 1, eliminating the herd while ensuring fresh data is loaded smoothly over time."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["What is the difference between event-driven cache invalidation and TTL-based invalidation? When would you use each?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " TTL-based invalidation automatically evicts entries after a fixed time (bounded staleness, simple). Event-driven invalidation uses CDC or application events to immediately invalidate on data change (near-instant, but requires message broker). Use TTL for data with natural expiration (sessions); use event-driven for data where freshness is critical (prices, inventory)."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Application Problems — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "application-problems-3-4",
                    children: "Application Problems (3-4)"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Implement a thread-safe LRU cache in Python or JavaScript with a capacity of 1000 entries. The cache should support get(key) and put(key, value) operations in O(1) time. Use the doubly-linked-list approach described in the chapter.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Use a Map for O(1) key lookups and a doubly linked list for O(1) eviction. On get: move accessed node to head. On put: if key exists, update and move to head; if new and at capacity, remove tail (LRU) and add new node at head. A TypeScript implementation is provided in this chapter's TS section."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Design a caching strategy for a product catalog API. Products are read 10,000x more often than written. Product prices change rarely but must be reflected within 30 seconds. Propose a caching pattern, eviction policy, TTL, and invalidation mechanism.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Cache-aside pattern. LRU eviction (products have temporal locality). TTL = 30 seconds (matches freshness requirement). Invalidation: on price update, delete cache key so next read fetches fresh data. For popular products, consider write-through to avoid cache miss latency."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["A cache with a 90% hit rate serves 50,000 QPS. Each cache hit takes 5ms (Redis). Each cache miss takes 100ms (DB query). Calculate the average response time. If the hit rate drops to 70% due to a misconfigured eviction policy, what is the new average response time?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " At 90%: avg = 0.9 * 5ms + 0.1 * 100ms = 4.5 + 10 = 14.5ms. At 70%: avg = 0.7 * 5ms + 0.3 * 100ms = 3.5 + 30 = 33.5ms. A 20% hit rate drop causes a 2.3x increase in average response time."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["You have a 10-node Redis Cluster. Each node has 8 GB memory. Keys are 1 KB average. Compute the maximum number of keys the cluster can hold. Assuming 20-byte key names, what percentage of memory is overhead?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Total memory = 10 × 8 GB = 80 GB = 80 × 10^9 bytes. Max keys = 80 × 10^9 / 1024 ≈ 78.1M keys. Overhead per key: Redis dict entry (~64 bytes) + key (20 bytes) + value pointer (~8 bytes) + SDS overhead (~16 bytes) ≈ 108 bytes. Data = 1024 bytes, total per key ≈ 1132 bytes. Overhead % = 108/1132 ≈ 9.5%."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Challenge Problem — Click to expand"
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "challenge-problem-1",
                    children: "Challenge Problem (1)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "You are designing the caching infrastructure for a real-time news aggregation platform. The platform ingests 10,000 articles per minute from sources worldwide and serves 100M daily active users. Each user sees a personalized feed."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Solution Outline:"
                    })
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Three-tier cache:"
                      }), " CDN (Cloudflare) for static assets and top 50 viral articles (TTL=30s). Redis Cluster (distributed) for category pages (TTL=60s) and per-user timeline fragments (TTL=10s). Local in-process cache (Guava/Caffeine) for the hottest 0.1% of articles and user sessions."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Eviction policies:"
                      }), " CDN: LRU. Redis: ARC (resists scan attacks from breaking news — new articles don't evict hot viral data). Local: LRU with small capacity (10K entries)."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Thundering herd:"
                      }), " For viral articles, use a two-tier approach: (a) Dedicated \"hot cache\" with longer TTL and pre-warming on trending detection; (b) XFetch (ß=1.0) for the general cache. On viral detection, proactively pre-compute and push to CDN edge."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Personalization caching:"
                      }), " Cache per-user timeline fragments by computed hash of follow-sources. Invalidate on new article from followed source. Use write-through to ensure consistency within 10s."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Cache warming:"
                      }), " On new DC deployment, replay the last 24 hours of cache writes from the existing DC at 10% of peak rate. Prioritize viral articles and top 1% of users. Use a dedicated warming service with rate limiting to avoid origin overload."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "CDN cost:"
                      }), " Daily reads = 100M × 50 (assume 50 items/user) = 5B reads. Static: 5B × 0.8 × 200KB = 800 TB/day. Dynamic: 5B × 0.2 × 50KB = 50 TB/day. Total = 850 TB/day × $0.02 = $17,000/day. Optimizations: (a) Use image CDN with WebP/AVIF compression (reduces 30%); (b) Implement Brotli compression for article content (reduces 50%); (c) Tiered CDN with regional edge caching."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              })
            })]
          })
        })]
      })
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