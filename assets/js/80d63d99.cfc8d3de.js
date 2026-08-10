"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[57138],{

/***/ 28234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_18_advanced_md_80d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-18-advanced-md-80d.json
const site_docs_courses_algorithms_18_advanced_md_80d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/18-advanced","title":"Chapter 18: Advanced Topics","description":"Prerequisites Randomized Algorithms — Probabilistic analysis and algorithm design | Next: Course Complete","source":"@site/docs/courses/algorithms/18-advanced.md","sourceDirName":"courses/algorithms","slug":"/algorithms/18-advanced","permalink":"/ai-engineering-journey/algorithms/18-advanced","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-advanced","slug":"/algorithms/18-advanced","title":"Chapter 18: Advanced Topics","sidebar_label":"Chapter 18: Advanced Topics","sidebar_position":18},"sidebar":"coursesSidebar","previous":{"title":"Chapter 17: Randomized Algorithms","permalink":"/ai-engineering-journey/algorithms/17-randomized"},"next":{"title":"C Programming — Complete University Textbook","permalink":"/ai-engineering-journey/c-programming"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/18-advanced.md


const frontMatter = {
	id: '18-advanced',
	slug: '/algorithms/18-advanced',
	title: 'Chapter 18: Advanced Topics',
	sidebar_label: 'Chapter 18: Advanced Topics',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Advanced Topics';

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
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Why Advanced Topics Matter",
  "id": "why-advanced-topics-matter",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "18.1 Online Algorithms",
  "id": "181-online-algorithms",
  "level": 3
}, {
  "value": "18.1.1 Paging (Caching)",
  "id": "1811-paging-caching",
  "level": 4
}, {
  "value": "18.1.2 Ski Rental",
  "id": "1812-ski-rental",
  "level": 4
}, {
  "value": "18.2 Bloom Filters",
  "id": "182-bloom-filters",
  "level": 3
}, {
  "value": "18.3 Skip Lists",
  "id": "183-skip-lists",
  "level": 3
}, {
  "value": "18.4 Streaming Algorithms",
  "id": "184-streaming-algorithms",
  "level": 3
}, {
  "value": "18.4.1 Reservoir Sampling",
  "id": "1841-reservoir-sampling",
  "level": 4
}, {
  "value": "18.4.2 Count-Min Sketch",
  "id": "1842-count-min-sketch",
  "level": 4
}, {
  "value": "18.5 External Memory Algorithms",
  "id": "185-external-memory-algorithms",
  "level": 3
}, {
  "value": "18.6 Parallel Algorithms",
  "id": "186-parallel-algorithms",
  "level": 3
}, {
  "value": "18.6.1 Parallel Prefix Sum (Scan)",
  "id": "1861-parallel-prefix-sum-scan",
  "level": 4
}, {
  "value": "18.6.2 Parallel Sorting",
  "id": "1862-parallel-sorting",
  "level": 4
}, {
  "value": "18.7 Algorithmic Paradigms Summary",
  "id": "187-algorithmic-paradigms-summary",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Online and Streaming Summary Table",
  "id": "online-and-streaming-summary-table",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Common Interview Questions",
  "id": "common-interview-questions",
  "level": 3
}, {
  "value": "Applications",
  "id": "applications",
  "level": 2
}, {
  "value": "Where Advanced Algorithms Are Used in Practice",
  "id": "where-advanced-algorithms-are-used-in-practice",
  "level": 3
}, {
  "value": "Online Algorithms in Industry",
  "id": "online-algorithms-in-industry",
  "level": 3
}, {
  "value": "Probabilistic Data Structures in Modern Systems",
  "id": "probabilistic-data-structures-in-modern-systems",
  "level": 3
}, {
  "value": "Parallel Algorithms in Modern Hardware",
  "id": "parallel-algorithms-in-modern-hardware",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 18.1: Reservoir Sampling in C++",
  "id": "example-181-reservoir-sampling-in-c",
  "level": 3
}, {
  "value": "Example 18.2: Bloom Filter in C++",
  "id": "example-182-bloom-filter-in-c",
  "level": 3
}, {
  "value": "Example 18.3: Parallel Prefix Sum (Conceptual)",
  "id": "example-183-parallel-prefix-sum-conceptual",
  "level": 3
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
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
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
        id: "chapter-18-advanced-topics",
        children: "Chapter 18: Advanced Topics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/17-randomized",
          children: "Chapter 17: Randomized Algorithms"
        }), " — Probabilistic analysis and algorithm design | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Course Complete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/algorithms/18-advanced/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/18-advanced/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/18-advanced/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/18-advanced/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/18-advanced/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/18-advanced/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze online algorithms using the competitive ratio framework."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement paging and ski rental algorithms and compute their competitive ratios."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and analyze streaming algorithms including reservoir sampling and Bloom filters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand parallel algorithm design principles and analyze work and depth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Online Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Irrevocable decisions without future knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive ratio compares against optimal offline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Paging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU is k-competitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Belady's algorithm (OPT) is the optimal offline strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ski Rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy vs rent decision under uncertainty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic competitive analysis example"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-pass processing with limited memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sublinear space at cost of approximate answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform random sample from unknown-length stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) space for k samples from arbitrary-length stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic set membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positives possible; false negatives impossible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min Sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency estimation in sublinear space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always overestimates; error bounded by εN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple processors for speedup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work-depth model: T_P ≤ W/P + D"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Advanced Topics] --> B[Online Algorithms]\n    A --> C[Streaming Algorithms]\n    A --> D[Parallel Algorithms]\n    A --> E[Bloom Filters]\n    A --> F[Skip Lists]\n    A --> G[External Memory]\n    B --> H[Paging LRU]\n    B --> I[Ski Rental]\n    C --> J[Reservoir Sampling]\n    C --> K[Count-Min Sketch]\n    D --> L[Work & Depth Model]\n    D --> M[PRAM]\n    E --> N[Probabilistic Membership]\n    F --> O[Randomized Linked List]\n    G --> P[B-Tree & External Sort]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-advanced-topics-matter",
      children: "Why Advanced Topics Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A librarian managing a million-book collection does not rearrange every shelf when a new book arrives. Instead, she keeps a quick-reference card catalog (Bloom filter equivalent), a \"recently returned\" shelf near the entrance (LRU cache), and a filing system that groups books by category so only a few shelves need rearranging per book (B-tree / external memory). She does not need to know every book's exact location — she just needs fast answers with limited time and space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the algorithms that make modern large-scale systems possible:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google Search:"
        }), " Uses Bloom filters in Bigtable to avoid costly disk lookups for non-existent rows. A Bloom filter check costs microseconds; a disk seek costs milliseconds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redis:"
        }), " Uses skip lists for sorted sets (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ZADD"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ZRANGE"
        }), "). The skiplist's O(log n) operations with simple code beat balanced trees for concurrent access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cassandra / HBase:"
        }), " Use Bloom filters for all read paths. Before fetching a row from an SSTable on disk, check the Bloom filter — if it says \"not present,\" skip the entire I/O."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databases:"
        }), " External merge sort sorts terabytes of data that cannot fit in RAM. B-trees organize on-disk indexes for O(log_B n) page accesses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network monitoring:"
        }), " Count-Min sketches track the heaviest flows through a router using tiny memory. Cisco and Juniper routers use sketches for traffic analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stream processing:"
        }), " Apache Flink and Kafka Streams use variants of reservoir sampling and Count-Min sketches for real-time analytics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operating systems:"
        }), " LRU paging decides which memory pages to keep in RAM. Every OS kernel implements some form of online paging algorithm."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Advanced algorithms trade one resource for another — Bloom filters trade accuracy for space, online algorithms trade optimality for immediacy, streaming algorithms trade exactness for memory. Always understand what you are giving up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Advanced algorithm design tackles real-world constraints — limited memory, no future knowledge, and massive data sizes — through probabilistic, online, and external-memory techniques."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch18-advanced.png",
        alt: "Advanced Topics Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-online-algorithms",
      children: "18.1 Online Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You are day-trading stocks. You must decide whether to buy or sell now, without knowing tomorrow's price. Every decision is irrevocable. If you sell too early, you miss gains; if you hold too long, you lose everything. This is the essence of online algorithms — make decisions without future knowledge and accept that you will never match the optimal hindsight strategy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 18.1."
      }), " An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "online algorithm"
      }), " processes input in sequence, making irrevocable decisions without knowledge of future inputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 18.2."
      }), " An online algorithm ( A ) has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "competitive ratio"
      }), " ( \\rho ) if for all input sequences:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nC_A(\\sigma) \\le \\rho \\cdot C_{\\text{OPT}}(\\sigma) + b\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where ( C_A(\\sigma) ) is the cost of the algorithm, ( C_{\\text{OPT}}(\\sigma) ) is the optimal offline cost, and ( b ) is a constant."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The competitive ratio measures an online algorithm against an optimal offline algorithm that sees the entire input in advance. A ratio of k means the online algorithm costs at most k times the optimal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The additive constant b allows the ratio to hold for all input lengths. For paging, the competitive ratio is exactly k."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Online algorithms make irrevocable decisions without future knowledge; the competitive ratio quantifies performance relative to optimal offline hindsight."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1811-paging-caching",
      children: "18.1.1 Paging (Caching)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A cache holds ( k ) pages. When a page is requested, it must be in the cache. If not (a cache miss), the page must be loaded from main memory, possibly evicting an existing page. The goal is to minimize the number of cache misses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Your desk can hold 5 textbooks. When you need a new book, you must swap one from your desk with one from the bookshelf across the room. Paging algorithms decide which book to swap out. LRU (least recently used) says: \"Swap out the book you have not opened in the longest time.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classic online algorithms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LRU (Least Recently Used):"
        }), " Evict the page that was used longest ago."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FIFO (First In, First Out):"
        }), " Evict the page that has been in the cache the longest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LFU (Least Frequently Used):"
        }), " Evict the page with the fewest references."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (LRU):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On page request:\na. If page is in cache: move it to the most-recently-used position (cache hit).\nb. If page is not in cache (cache miss):\ni. If cache is full, evict the least-recently-used page.\nii. Load the requested page into cache at the most-recently-used position."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LRU(page_requests, k):\n    cache = empty list of size k\n    misses = 0\n    for each page in page_requests:\n        if page in cache:\n            move page to front of cache (most recent)\n        else:\n            misses++\n            if cache is full:\n                remove last element (least recent)\n            insert page at front of cache\n    return misses\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " k = 3 cache, requests = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache State (MRU → LRU)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hit/Miss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evicted"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 3, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 4, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 1, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 5, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 1, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 3, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 18.1."
      }), " LRU and FIFO are ( k )-competitive for paging. No deterministic online paging algorithm can be better than ( k )-competitive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of lower bound:"
      }), " Consider ( k+1 ) pages. An adversary always requests the page that the algorithm just evicted. The optimal offline algorithm (MIN, by Belady) evicts the page that will be used farthest in the future, incurring one miss per ( k ) requests. The online algorithm incurs a miss on every request, giving ratio ( k )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Randomized paging:"
      }), " The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "random-marking"
      }), " algorithm achieves ( O(\\log k) ) competitive ratio, which is optimal for randomized online paging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Misses"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LRU worst-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k times optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Belady (optimal offline)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Random marking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log k) × optimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple and intuitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic: k-competitive lower bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well in practice (temporal locality)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-competitive can be poor for large k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per operation with hash table + doubly-linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs metadata updates on every hit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = 1:"
        }), " Only one page fits. Every new page is a miss. Trivial."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thrashing:"
        }), " When working set > cache size, every access is a miss."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefetching:"
        }), " LRU does not distinguish between demand loads and prefetches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1812-ski-rental",
      children: "18.1.2 Ski Rental"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " You are going skiing for an unknown number of days. You can either rent skis for $1 per day or buy them for $B. The decision is online: you do not know how many days you will ski."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Should you subscribe to a gym membership ($50/month) or pay per visit ($10/visit)? If you go once, per-visit is cheaper. If you go 10 times, the membership is cheaper. But you do not know how many times you will actually go."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Deterministic):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rent for the first B-1 days."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On day B, buy the skis."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SkiRental(B, days_unknown):\n    total_cost = 0\n    for day = 1 to unknown_N:\n        if day < B:\n            total_cost += 1   // rent\n        elif day == B:\n            total_cost += B   // buy\n        // after buying, no more cost\n    return total_cost\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Competitive ratio:"
      }), " ( 2 - 1/B ). Proof: if the total days ( N < B ), the algorithm pays ( N ), optimal pays ( N ), ratio 1. If ( N \\ge B ), the algorithm pays ( (B-1) + B = 2B - 1 ), optimal pays ( B ), ratio ( 2 - 1/B )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Randomized algorithm:"
      }), " Choose a threshold ( T ) randomly according to a specific distribution. Competitive ratio ( e/(e-1) \\approx 1.58 )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, intuitive decision rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic ratio approaches 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized version improves to 1.58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes buy cost is one-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive ratio independent of N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only two actions (rent/buy)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B = 1:"
        }), " Buy immediately (trivially optimal)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N = 0:"
        }), " No cost, algorithm never starts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large B:"
        }), " Ratio approaches 2 for deterministic, e/(e-1) for randomized."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-bloom-filters",
      children: "18.2 Bloom Filters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You are at a festival with 10,000 attendees. You want to check if a person is a VIP. Instead of carrying a full list of 500 VIP names, you give each VIP a colored wristband — but there are only 100 colors, so some non-VIPs might accidentally get a matching wristband (false positive). However, anyone without the correct color combination is guaranteed not to be a VIP (no false negatives)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Test set membership with small space, allowing false positives but no false negatives."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data structure:"
      }), " A bit array ( B ) of size ( m ), and ( h ) independent hash functions ( h_1, \\ldots, h_k ) mapping elements to positions ( [0, m-1] )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Create a bit array of size m, all bits set to 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert(x):"
        }), " For each hash function h_i, set B[h_i(x)] = 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query(y):"
        }), " For each hash function h_i, check B[h_i(y)]. If any bit is 0, y is definitely not in the set. If all bits are 1, y is probably in the set."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BloomFilter:\n    bits = array of m bits, all 0\n    hashes = k hash functions\n\n    Insert(element):\n        for i = 1 to k:\n            bits[hashes[i](element)] = 1\n\n    Contains(element):\n        for i = 1 to k:\n            if bits[hashes[i](element)] == 0:\n                return false       // definitely not present\n        return true                // probably present\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " m = 10 bits, k = 3 hash functions. Insert \"cat\" and \"dog\", query \"fox\"."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Outputs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bit Array State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,0,0,0,0,0,0,0,0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert \"cat\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h₁=\"cat\"→2, h₂→5, h₃→8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,1,0,0,1,0,0,1,0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert \"dog\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h₁=\"dog\"→3, h₂→5, h₃→9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,1,1,0,1,0,0,1,1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query \"fox\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h₁=\"fox\"→2, h₂→7, h₃→9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check: bits[2]=1, bits[7]=0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not present"
            }), " (true)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query \"cat\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h₁=\"cat\"→2, h₂→5, h₃→8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check: bits[2]=1, bits[5]=1, bits[8]=1 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "probably present"
            }), " (true)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "False positive probability:"
      }), " After inserting ( n ) elements:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\np = \\left(1 - \\left(1 - \\frac{1}{m}\\right)^{kn}\\right)^k \\approx \\left(1 - e^{-kn/m}\\right)^k\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimal number of hash functions:"
      }), " ( k = (m/n) \\ln 2 ), giving ( p \\approx (1/2)^k \\approx 0.6185^{m/n} )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) — compute k hashes, set k bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) — compute k hashes, check k bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "False positive rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≈ (1 - e^{-kn/m})^k"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space efficient (bits per element ~2-10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No deletions (unless counting variant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No false negatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False positives exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) insert and query time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot enumerate elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k hash functions can be parallelized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filter size must be pre-determined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for cache-blocking with disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash collisions cause false positives"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty filter:"
        }), " Query of any element returns false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full filter (all bits = 1):"
        }), " Every query returns true. Useless."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "m too small:"
        }), " False positive rate approaches 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "k = 0:"
        }), " No bits set (if 0 hash functions — defined as never setting bits)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " Bits at k positions = 1; all other queries have false positive probability (1 - (1 - 1/m)^k)^k."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <functional>\n\nclass BloomFilter {\n    std::vector<bool> bits;\n    size_t m, k;\n    std::vector<std::hash<std::string>> hashers;\n\n    size_t hash(const std::string& s, size_t seed) const {\n        std::hash<std::string> h;\n        return (h(s) ^ (seed * 0x9e3779b9)) % m;\n    }\n\npublic:\n    BloomFilter(size_t m, size_t k) : bits(m, false), m(m), k(k), hashers(k) {}\n\n    void insert(const std::string& s) {\n        for (size_t i = 0; i < k; ++i)\n            bits[hash(s, i)] = true;\n    }\n\n    bool contains(const std::string& s) const {\n        for (size_t i = 0; i < k; ++i)\n            if (!bits[hash(s, i)]) return false;\n        return true;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import mmh3\nimport math\n\nclass BloomFilter:\n    def __init__(self, n, fp_prob):\n        self.fp_prob = fp_prob\n        self.bit_size = int(-n * math.log(fp_prob) / (math.log(2) ** 2))\n        self.hash_count = int(self.bit_size * math.log(2) / n)\n        self.bit_array = [0] * self.bit_size\n\n    def insert(self, item):\n        for i in range(self.hash_count):\n            digest = mmh3.hash(item, i) % self.bit_size\n            self.bit_array[digest] = 1\n\n    def contains(self, item):\n        for i in range(self.hash_count):\n            digest = mmh3.hash(item, i) % self.bit_size\n            if self.bit_array[digest] == 0:\n                return False\n        return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.BitSet;\nimport java.util.Random;\n\npublic class BloomFilter {\n    private BitSet bits;\n    private int m, k;\n\n    public BloomFilter(int m, int k) {\n        this.m = m;\n        this.k = k;\n        this.bits = new BitSet(m);\n    }\n\n    private int hash(String s, int seed) {\n        int h = s.hashCode() ^ (seed * 0x9e3779b9);\n        return (h & 0x7fffffff) % m;\n    }\n\n    public void insert(String s) {\n        for (int i = 0; i < k; i++)\n            bits.set(hash(s, i));\n    }\n\n    public boolean contains(String s) {\n        for (int i = 0; i < k; i++)\n            if (!bits.get(hash(s, i))) return false;\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Bloom filters have zero false negatives — if a query says not present, it is guaranteed absent. Optimal hash count k = (m/n) * ln(2) minimizes the false positive rate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Choose m (bits) and k (hash functions) based on your target false positive rate p and expected element count n. m = -n ln(p) / (ln 2)^2 is the optimal bit count."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-skip-lists",
      children: "18.3 Skip Lists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Imagine a multi-level highway system. On the ground level, you drive through every small town. On the express lane above, you skip every other town. On the top-level express, you skip most towns entirely. When you need to reach a specific town, you take the highest expressway that does not overshoot, then drop to lower levels for fine-grained navigation. This is exactly how skip lists work — multiple levels of \"express lanes\" over a sorted linked list."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Implement a sorted dictionary with O(log n) expected search, insert, and delete."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data structure:"
      }), " A multi-level linked list where each node appears on level i with probability 1/2^i. The bottom level is a full sorted linked list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Search):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at the highest level's head."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While not at the bottom level:\na. While the next node at current level exists and its key < target, move forward.\nb. Drop down one level."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At the bottom level, the next node is either the target or not present."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SkipList:\n    head = list of level heads\n    max_level = MAX_LEVEL\n\n    Insert(key):\n        update = array of nodes to update at each level\n        current = head\n        for level = max_level down to 0:\n            while current.forward[level] != nil and current.forward[level].key < key:\n                current = current.forward[level]\n            update[level] = current\n        new_level = random_level()   // geometric distribution\n        new_node = Node(key, new_level)\n        for level = 0 to new_level:\n            new_node.forward[level] = update[level].forward[level]\n            update[level].forward[level] = new_node\n\n    Search(key):\n        current = head\n        for level = max_level down to 0:\n            while current.forward[level] != nil and current.forward[level].key < key:\n                current = current.forward[level]\n        current = current.forward[0]\n        if current != nil and current.key == key:\n            return current.value\n        return nil\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      }), " Search for key 7 in a skip list with keys [1, 3, 4, 7, 9, 10]."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node Walk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 (top)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head(∞) → 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 > 7 → drop to level 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head(∞) → 4 → 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 < 7, move to 4; 9 > 7 → drop to level 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 → 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 == 7 → found!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst-case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler to implement than AVL/Red-Black trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) expected, not worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) sequential iteration (bottom-level list)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No O(log n) worst-case guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good concurrent performance (lock-free variants exist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher constant factor than B-tree for in-memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No rebalancing needed (randomization handles it)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random number generation overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries are efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case space O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty list:"
        }), " No search can succeed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " One node at bottom and possibly higher levels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All elements at same level:"
        }), " Degenerates to a linked list (rare — probability 2^-n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate keys:"
        }), " Need a policy (allow or reject duplicates)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\nclass SkipListNode:\n    def __init__(self, key, level):\n        self.key = key\n        self.forward = [None] * (level + 1)\n\nclass SkipList:\n    def __init__(self, max_level=16):\n        self.max_level = max_level\n        self.head = SkipListNode(None, max_level)\n        self.level = 0\n\n    def random_level(self):\n        level = 0\n        while random.random() < 0.5 and level < self.max_level:\n            level += 1\n        return level\n\n    def insert(self, key):\n        update = [None] * (self.max_level + 1)\n        curr = self.head\n        for i in range(self.level, -1, -1):\n            while curr.forward[i] and curr.forward[i].key < key:\n                curr = curr.forward[i]\n            update[i] = curr\n        new_level = self.random_level()\n        if new_level > self.level:\n            for i in range(self.level + 1, new_level + 1):\n                update[i] = self.head\n            self.level = new_level\n        new_node = SkipListNode(key, new_level)\n        for i in range(new_level + 1):\n            new_node.forward[i] = update[i].forward[i]\n            update[i].forward[i] = new_node\n\n    def search(self, key):\n        curr = self.head\n        for i in range(self.level, -1, -1):\n            while curr.forward[i] and curr.forward[i].key < key:\n                curr = curr.forward[i]\n        curr = curr.forward[0]\n        return curr is not None and curr.key == key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "184-streaming-algorithms",
      children: "18.4 Streaming Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streaming algorithms process a sequence of elements using sublinear memory (typically ( O(\\log^c n) ) or ( O(n^\\alpha) ) for ( \\alpha < 1 ))."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You stand at the entrance of a stadium counting attendees as they enter. You have only a small notepad (limited memory) and cannot remember every person who walks by. Yet you still need to answer: \"How many distinct people have entered?\" (distinct count), \"How many times has person X entered?\" (frequency estimation), or \"Pick a random person from those who entered\" (random sampling)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1841-reservoir-sampling",
      children: "18.4.1 Reservoir Sampling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Select ( k ) elements uniformly at random from a stream of unknown length ( n )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A radio station wants to select 10 random callers from an unknown number of callers. They cannot store all caller IDs. Instead, they keep 10 slots — when caller 37 calls, they place them in slot 1 with probability 10/37, etc. Remarkably, this gives each caller exactly equal probability of being in the final sample."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fill reservoir with first k elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For element at position i (i > k):\na. Generate j = random(1, i).\nb. If j ≤ k, replace reservoir[j-1] with current element."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Correctness:"
      }), " At step i, each of the first i elements has probability k/i of being in the reservoir. Proof by induction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ReservoirSampling(stream, k):\n    reservoir = first k elements of stream\n    i = k\n    while stream has more elements:\n        i++\n        j = random(1, i)\n        if j <= k:\n            reservoir[j-1] = current element\n    return reservoir\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly uniform random sample"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> reservoirSampling(const std::vector<int>& stream, int k) {\n    std::vector<int> reservoir(stream.begin(), stream.begin() + k);\n    for (size_t i = k; i < stream.size(); ++i) {\n        int j = std::rand() % (i + 1);\n        if (j < k) reservoir[j] = stream[i];\n    }\n    return reservoir;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1842-count-min-sketch",
      children: "18.4.2 Count-Min Sketch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Estimate the frequency of each element in a stream using sublinear space."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A network router tracks which IP addresses are sending the most traffic. It cannot store a counter for every possible IP (2³²). Instead, it uses a 2D array of counters and hashes each IP to one counter per row. The minimum counter value across all rows gives a reliable (over)estimate of the true frequency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data structure:"
      }), " A 2D array of counters ( C[d][w] ), with ( d ) hash functions ( h_1, \\ldots, h_d : [n] \\to [w] )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize all counters to 0."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update(x, Δ):"
        }), " For each hash function h_i, increment C[i][h_i(x)] by Δ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query(x):"
        }), " Return min over i of C[i][h_i(x)]."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CountMinSketch:\n    d = number of rows (depth)\n    w = number of columns (width)\n    C = 2D array of counters, initialized to 0\n    hash_functions = d hash functions\n\n    Update(element, delta = 1):\n        for i = 1 to d:\n            C[i][hash_functions[i](element)] += delta\n\n    Query(element):\n        min_count = INFINITY\n        for i = 1 to d:\n            min_count = min(min_count, C[i][hash_functions[i](element)])\n        return min_count\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guarantee:"
      }), " With ( w = \\lceil e/\\epsilon \\rceil ) and ( d = \\lceil \\ln (1/\\delta) \\rceil ), the estimate satisfies ( \\hat{f}(x) \\le f(x) + \\epsilon N ) with probability ( 1 - \\delta ), where ( N ) is the total stream length."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sublinear space: O((1/ε) log(1/δ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only overestimates (never underestimates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) update and query time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot support deletions (unless using Count-Mean-Min)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mergable across distributed nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy depends on stream length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for massive streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot enumerate heavy hitters directly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty stream:"
        }), " Every query returns 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element dominating:"
        }), " All other queries get noise from hash collisions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative updates:"
        }), " Point query may under-report; use Count-Mean-Min variant."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "185-external-memory-algorithms",
      children: "18.5 External Memory Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You need to sort a shipping warehouse's worth of packages but your conveyor belt (RAM) can only hold 10 boxes at a time. You must repeatedly bring batches onto the belt, sort them, return them to the warehouse shelves, then merge sorted batches. The bottleneck is the time spent moving boxes between belt and shelves (I/O), not the sorting itself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Process data too large to fit in RAM, minimizing disk I/O."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "External Merge Sort:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run generation:"
        }), " Read M records into RAM, sort, write to disk as a sorted run. Repeat for all data. Creates ceil(N/M) sorted runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge:"
        }), " Repeatedly merge runs using k-way merge. Each pass reads and writes all data once."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity (I/O operations):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2N/B ) (read + write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge (passes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2(N/B) \\log_{k} (N/M) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O((N/B) \\log_{k} (N/M)) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where B = block size, M = RAM size, N = total data size, k = merge fan-in."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles data larger than RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O dominated — RAM speed irrelevant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B-trees provide O(log_B n) tree operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to tune (block size, fan-in)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External sort optimal in I/O model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for random-access workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of database operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead of managing disk storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data fits in RAM:"
        }), " Use normal in-memory sort; external sort is overkill."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element per page:"
        }), " Terrible block utilization; pad or restructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable-length records:"
        }), " Complicates block layout; use slotted pages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deletes:"
        }), " B-tree deletion requires merging underfull nodes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "186-parallel-algorithms",
      children: "18.6 Parallel Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Work-depth model:"
      }), " For a parallel algorithm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work"
        }), " ( W(n) ): total number of operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth"
        }), " ( D(n) ): longest chain of dependencies (critical path)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Brent's theorem:"
      }), " A parallel algorithm with work ( W ) and depth ( D ) can be simulated on ( P ) processors in time:\n[\nT_P \\le \\frac{W}{P} + D.\n]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Building a house: work = total person-hours (welding, framing, painting), depth = longest dependency chain (you cannot paint before framing). Adding more workers reduces time, but never below the depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1861-parallel-prefix-sum-scan",
      children: "18.6.1 Parallel Prefix Sum (Scan)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Compute all prefix sums ( S[i] = \\sum_{j=0}^{i-1} A[j] )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sequential:"
      }), " ( O(n) ). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel:"
      }), " Use a balanced binary tree."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Up-sweep phase:"
        }), " Compute partial sums at each level of the tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Down-sweep phase:"
        }), " Distribute partial sums to produce final prefix sums."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Work:"
      }), " ( O(n) ). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth:"
      }), " ( O(\\log n) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) depth — excellent parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twice as many operations as sequential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for many parallel algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bank conflicts on GPU shared memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any associative operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization overhead at each tree level"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1862-parallel-sorting",
      children: "18.6.2 Parallel Sorting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bitonic sort:"
      }), " A sorting network with depth ( O(\\log^2 n) ) and work ( O(n \\log^2 n) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample sort:"
      }), " A divide-and-conquer parallel sorting algorithm that uses random sampling to find splitters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel merge sort:"
      }), " Divide the array in half (constant time), recursively sort (parallel), then merge. Merge of two sorted arrays can be done in ( O(\\log n) ) depth using binary search to find element positions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "187-algorithmic-paradigms-summary",
      children: "18.7 Algorithmic Paradigms Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This table connects all 18 chapters of the algorithms course:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Paradigm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Brute Force"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try all possibilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small input size (n ≤ 20)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Divide & Conquer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split, solve recursively, combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent subproblems, O(n log n) sorts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Greedy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locally optimal choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matroid problems, fractional knap, MST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic Programming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal substructure + overlapping subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization with dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph Algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS, DFS, shortest paths, MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network, routing, social graph problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "String Matching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching in text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text processing, bioinformatics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NP-Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No polynomial solution known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reductions, approximation or heuristics needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approximation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed near-optimal solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-hard problems with quality guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Randomized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomness to avoid worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primality, load balancing, sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Online"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Irrevocable decisions, no future"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, resource provisioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sublinear space, one pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive data, network monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple processors, work-depth model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale computation, GPU"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Property"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Online"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU (paging)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-competitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evict least recently used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Online"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ski rental (det.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-competitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buy at break-even"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Online"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ski rental (rand.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.58-competitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) per op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No false negatives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((1/ε) log(1/δ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only overestimates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform random sample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n/B) blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_B n) I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced tree on disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N/B) blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((N/B) log(N/M)) I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitonic sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log² n) work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log² n) depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting network"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Competitive Ratio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online cost / optimal offline cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LRU Paging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-competitive; optimal deterministic; O(log k) randomized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ski Rental"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-competitive det.; 1.58 randomized; rent vs buy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bloom Filter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP = (1 - e^{-kn/m})^k; optimal k = (m/n) ln 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skip List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random level ~ Geo(1/2); search/insert/delete O(log n) expected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reservoir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with prob k/i; O(k) space; exact uniform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Count-Min"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(x) ≤ estimate ≤ f(x) + εN; min over d rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((N/B) log_{k} (N/M)) I/O; B = block, M = RAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Work-Depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W = total ops, D = critical path; T_P ≤ W/P + D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel Scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) depth via up-sweep + down-sweep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitonic: O(log² n) depth; Sample sort: random splitters"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Online/Paging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncommon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS cache management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ski Rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncommon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud provisioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir Sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data science sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, caches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min Sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skip Lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis sorted sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncommon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Databases, file systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncommon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU, distributed computing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "online-and-streaming-summary-table",
      children: "Online and Streaming Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Guarantee"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( k )-competitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ski rental (det.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rent vs. buy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2 )-competitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ski rental (rand.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rent vs. buy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1.58 )-competitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact uniform sample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(m) ) bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP: ( (1 - e^{-kn/m})^k )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\frac{1}{\\epsilon} \\log \\frac{1}{\\delta}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error ( \\le \\epsilon N )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skip list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted dictionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) ) expected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-questions",
      children: "Common Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Bloom Filter Variations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Question:"
          }), " \"How would you implement a Bloom filter that supports deletions?\"\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "Answer:"
          }), " Use a counting Bloom filter — replace each bit with a multi-bit counter. Insert increments, delete decrements, query checks > 0. Requires 2-4 bits per counter to avoid overflow."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Question:"
          }), " \"How would you estimate the optimal filter size for 1M elements at 1% false positive rate?\"\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "Answer:"
          }), " m = -n ln(p) / (ln 2)² = -10⁶ × ln(0.01) / (0.48) ≈ 10⁶ × 4.605 / 0.48 ≈ 9.6 million bits ≈ 1.15 MB. k = (m/n) ln 2 ≈ 6.6 → 7 hash functions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Question:"
          }), " \"Can you resize a Bloom filter dynamically?\"\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "Answer:"
          }), " Use a scalable Bloom filter — maintain a series of filters with geometrically growing capacities. Query checks all filters; insert goes to the current one."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Skip List vs Balanced BST"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Skip List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Balanced BST (AVL/RB)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k) — linked list at bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k) — in-order traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent — lock-free variants exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult — rebalancing needs locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150-200 lines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointer chasing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (pointer chasing)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Interview answer:"
        }), " \"Skip lists are simpler to implement (no rebalancing) and offer excellent concurrent performance. Redis uses them for sorted sets. Balanced BSTs provide worst-case guarantees that skip lists cannot.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Competitive Ratio Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Problem:"
        }), " \"Prove that no deterministic online paging algorithm can beat k-competitive.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Problem:"
        }), " \"Design an online algorithm for the secretary problem.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Problem:"
        }), " \"What is the optimal strategy for online parking (choose a spot without knowing future availability)?\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. External Memory Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Problem:"
          }), " \"Sort 100 GB of data with 1 GB of RAM.\" Walk through external merge sort: run generation (100 runs of 1 GB), then merge passes. Each merge pass with fan-in 100 produces 1 run per pass: ceil(log_100(100)) = 1 pass. Total I/O: 2 × 100 GB (run gen) + 2 × 100 GB (merge) = 400 GB read + 400 GB write."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Problem:"
          }), " \"Why does B-tree have height O(log_B n) instead of O(log₂ n)?\""]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Streaming Algorithm Questions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Problem:"
          }), " \"Estimate the number of distinct elements in a stream using O(log n) space.\" Discuss the Flajolet-Martin (HyperLogLog) algorithm: hash each element, track the maximum number of leading zeros in binary, estimate cardinality as 2^{max_zeros}."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Problem:"
          }), " \"Find the top-k most frequent elements in a stream.\" Discuss the Count-Min Sketch + heap approach: sketch tracks frequencies approximately, heap keeps top-k estimated items."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications",
      children: "Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "where-advanced-algorithms-are-used-in-practice",
      children: "Where Advanced Algorithms Are Used in Practice"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cassandra / HBase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip SSTable reads for non-existent rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted set operations (ZADD, ZRANGE, ZRANK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY on tables larger than RAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Bigtable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce disk I/O for row lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apache Kafka"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reservoir sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer group rebalancing, metrics sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cisco routers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy-hitter detection, traffic measurement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU (clock algorithm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page replacement in virtual memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL / InnoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index organization on disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apache Spark"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shuffle operations, sortBy transformations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloom filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache blocking, spell checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud provisioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ski rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved vs on-demand instance decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GPU computing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel prefix sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream compaction, radix sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiredTiger storage engine indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Splunk / Elasticsearch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count-Min sketch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log frequency analysis, query acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CDNs (Cloudflare, Akamai)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU / LFU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content caching at edge nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "online-algorithms-in-industry",
      children: "Online Algorithms in Industry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud auto-scaling (AWS / Azure):"
        }), " Add or remove instances based on current load without knowing future traffic. Competitive ratio analysis guides provisioning strategies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ad serving:"
        }), " Select which ad to show in real time based on limited user history. Online bipartite matching algorithms (like BALANCE) achieve competitive ratios close to 1 - 1/e."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network routing:"
        }), " OSPF and BGP make routing decisions based on current topology without knowing future link failures. Online shortest-path algorithms handle dynamic graph updates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "probabilistic-data-structures-in-modern-systems",
      children: "Probabilistic Data Structures in Modern Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apache Cassandra:"
        }), " Bloom filters on every SSTable. Each read first checks the Bloom filter — if it says \"not present,\" Cassandra skips reading that SSTable entirely. This reduces disk I/O by 90%+ for random read workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redis Stack (RedisBloom):"
        }), " Native Bloom filter and Count-Min sketch modules for real-time analytics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL (pg_cmsketch):"
        }), " Count-Min sketch extension for approximate query optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google's Sawzall / BigQuery:"
        }), " HyperLogLog (distinct count) and Count-Min sketch (frequency) for interactive analytics on petabytes of data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parallel-algorithms-in-modern-hardware",
      children: "Parallel Algorithms in Modern Hardware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU sorting:"
        }), " Bitonic sort and GPU radix sort achieve 100-1000× speedup over CPU for sorting large arrays."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MapReduce / Hadoop:"
        }), " Parallel merge sort on distributed data. The shuffle phase is essentially a parallel sort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TensorFlow / PyTorch:"
        }), " Parallel prefix sum (scan) is used for softmax, cumulative sums, and attention mechanisms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-181-reservoir-sampling-in-c",
      children: "Example 18.1: Reservoir Sampling in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <cstdlib>\n\nstd::vector<int> reservoirSampling(const std::vector<int>& stream, int k) {\n    std::vector<int> reservoir(stream.begin(), stream.begin() + k);\n    for (size_t i = k; i < stream.size(); ++i) {\n        int j = std::rand() % (i + 1);\n        if (j < k) reservoir[j] = stream[i];\n    }\n    return reservoir;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-182-bloom-filter-in-c",
      children: "Example 18.2: Bloom Filter in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <functional>\n\nclass BloomFilter {\n    std::vector<bool> bits;\n    size_t m, k;\n    std::vector<std::hash<std::string>> hashers;\n\n    size_t hash(const std::string& s, size_t seed) const {\n        std::hash<std::string> h;\n        return (h(s) ^ (seed * 0x9e3779b9)) % m;\n    }\n\npublic:\n    BloomFilter(size_t m, size_t k) : bits(m, false), m(m), k(k), hashers(k) {}\n\n    void insert(const std::string& s) {\n        for (size_t i = 0; i < k; ++i)\n            bits[hash(s, i)] = true;\n    }\n\n    bool contains(const std::string& s) const {\n        for (size_t i = 0; i < k; ++i)\n            if (!bits[hash(s, i)]) return false;\n        return true;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-183-parallel-prefix-sum-conceptual",
      children: "Example 18.3: Parallel Prefix Sum (Conceptual)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ParallelPrefixSum(A):\n    n = len(A)\n    // Up-sweep\n    for d = 0 to log2(n) - 1:\n        for each i where i % 2^(d+1) == 2^(d+1) - 1 in parallel:\n            A[i] = A[i - 2^d] + A[i]\n    // A[n-1] now contains total sum\n    // Down-sweep\n    A[n-1] = 0\n    for d = log2(n) - 1 down to 0:\n        for each i where i % 2^(d+1) == 2^(d+1) - 1 in parallel:\n            t = A[i]\n            A[i] = A[i - 2^d] + A[i]\n            A[i - 2^d] = t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Online algorithms"
        }), " make irrevocable decisions with incomplete information; the competitive ratio measures performance against the optimal offline algorithm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bloom filters"
        }), " provide space-efficient probabilistic set membership with false positives but no false negatives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skip lists"
        }), " achieve O(log n) expected operations with simple randomized node levels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Streaming algorithms"
        }), " process massive data with sublinear memory, trading accuracy for space efficiency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External memory algorithms"
        }), " (B-trees, external sort) minimize I/O cost for disk-bound data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel algorithms"
        }), " leverage multiple processors; the work-depth model captures both total operations and the critical path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brent's theorem"
        }), " bounds parallel execution time: T_P ≤ W/P + D."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the competitive ratio for an online algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why LRU achieves competitive ratio k for paging."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a Bloom filter's false positive rate and false negative rate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State Brent's theorem for parallel algorithm performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a skip list achieve O(log n) expected search time?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the optimal number of hash functions for a Bloom filter, and why?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the randomized ski-rental algorithm with competitive ratio ( e/(e-1) )."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an online algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "secretary problem"
        }), ": hire the best candidate from a stream of candidates, interviewing one at a time with immediate decisions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a Count-Min sketch and estimate frequencies for a stream of 10,000 integers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a parallel algorithm for matrix-vector multiplication in the work-depth model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a skip list with insert, search, and delete operations in Python."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a Bloom filter and measure empirical false positive rates against theoretical values."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a streaming algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "heavy hitters"
        }), " problem: find all elements whose frequency exceeds ( \\phi N ) in a stream of length ( N ) using ( O(1/\\phi) ) space."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the competitive ratio of deterministic ski rental (buy cost = B)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 2 - 1/B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) e/(e-1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) k"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Rent for B-1 days then buy gives cost 2B-1 when N ≥ B, vs optimal of B, so ratio = 2 - 1/B.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the key property of a Bloom filter?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) No false positives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) No false negatives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Exact set membership"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Supports deletions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Bloom filters have no false negatives — if a query returns false, the element is definitely absent. False positives are possible.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In the work-depth model, what does Brent's theorem state?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) W(n) = O(D(n))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) T_P ≤ W/P + D"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) T_P = W * D"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) D must equal W"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) On P processors, the time is at most W/P + D, where W is total work and D is critical path depth.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What data structure does Redis use for sorted set operations?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) AVL tree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Red-Black tree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Skip list"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) B+ tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Redis uses skip lists for sorted set operations (ZADD, ZRANGE, ZRANK).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the expected time complexity of a skip list search?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) O(log n) expected. The random level assignment (geometric distribution) creates an expected O(log n) search path.\n"
      })]
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