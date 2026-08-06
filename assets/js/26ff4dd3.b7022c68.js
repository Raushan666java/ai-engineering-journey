"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29052],{

/***/ 94351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_12_indexing_md_26f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-12-indexing-md-26f.json
const site_docs_courses_database_management_systems_12_indexing_md_26f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/12-indexing","title":"Chapter 12: Indexing","description":"Prev Recovery System | Next Query Processing","source":"@site/docs/courses/database-management-systems/12-indexing.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/12-indexing","permalink":"/ai-engineering-journey/database-management-systems/12-indexing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-indexing","slug":"/database-management-systems/12-indexing","title":"Chapter 12: Indexing","sidebar_label":"Chapter 12: Indexing","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: Recovery System","permalink":"/ai-engineering-journey/database-management-systems/11-recovery"},"next":{"title":"Chapter 13: Query Processing and Optimization","permalink":"/ai-engineering-journey/database-management-systems/13-query-processing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/12-indexing.md


const frontMatter = {
	id: '12-indexing',
	slug: '/database-management-systems/12-indexing',
	title: 'Chapter 12: Indexing',
	sidebar_label: 'Chapter 12: Indexing',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Indexing';

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
  "value": "12.1 Why Indexes?",
  "id": "121-why-indexes",
  "level": 3
}, {
  "value": "12.2 Index Types Overview",
  "id": "122-index-types-overview",
  "level": 3
}, {
  "value": "12.3 Ordered Indices: Primary (Clustering) vs Secondary",
  "id": "123-ordered-indices-primary-clustering-vs-secondary",
  "level": 3
}, {
  "value": "12.4 Dense vs Sparse Indices",
  "id": "124-dense-vs-sparse-indices",
  "level": 3
}, {
  "value": "12.5 B-Tree Indexes",
  "id": "125-b-tree-indexes",
  "level": 3
}, {
  "value": "12.6 B+Tree Indexes",
  "id": "126-btree-indexes",
  "level": 3
}, {
  "value": "12.7 B-Tree vs B+Tree Comparison",
  "id": "127-b-tree-vs-btree-comparison",
  "level": 3
}, {
  "value": "12.8 B+Tree Order Calculation",
  "id": "128-btree-order-calculation",
  "level": 3
}, {
  "value": "12.9 ISAM (Indexed Sequential Access Method)",
  "id": "129-isam-indexed-sequential-access-method",
  "level": 3
}, {
  "value": "12.10 Hash Indexing",
  "id": "1210-hash-indexing",
  "level": 3
}, {
  "value": "12.11 Hash vs B+Tree vs Bitmap Index Comparison",
  "id": "1211-hash-vs-btree-vs-bitmap-index-comparison",
  "level": 3
}, {
  "value": "12.12 Bitmap Indexing",
  "id": "1212-bitmap-indexing",
  "level": 3
}, {
  "value": "12.13 Function-Based Indexes (Expression Indexes)",
  "id": "1213-function-based-indexes-expression-indexes",
  "level": 3
}, {
  "value": "12.14 Composite Indexes and Covering Indexes",
  "id": "1214-composite-indexes-and-covering-indexes",
  "level": 3
}, {
  "value": "12.15 Clustered vs Non-Clustered Index Comparison",
  "id": "1215-clustered-vs-non-clustered-index-comparison",
  "level": 3
}, {
  "value": "12.16 Index Selection",
  "id": "1216-index-selection",
  "level": 3
}, {
  "value": "12.17 Index-Organized Tables (IOT)",
  "id": "1217-index-organized-tables-iot",
  "level": 3
}, {
  "value": "12.18 Partial Indexes",
  "id": "1218-partial-indexes",
  "level": 3
}, {
  "value": "12.19 B+Tree Order Calculation (Detailed)",
  "id": "1219-btree-order-calculation-detailed",
  "level": 3
}, {
  "value": "12.20 Applications in Real Systems",
  "id": "1220-applications-in-real-systems",
  "level": 3
}, {
  "value": "12.21 Interview Corner",
  "id": "1221-interview-corner",
  "level": 3
}, {
  "value": "12.22 Hash Index Dry Run -- Extendable Hashing with Collision Resolution",
  "id": "1222-hash-index-dry-run----extendable-hashing-with-collision-resolution",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 3
}, {
  "value": "12.12 TypeScript B+ Tree Index Simulator",
  "id": "1212-typescript-b-tree-index-simulator",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 3
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 3
}, {
  "value": "Basic",
  "id": "basic",
  "level": 4
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 4
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 4
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
        id: "chapter-12-indexing",
        children: "Chapter 12: Indexing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/11-recovery",
          children: "Chapter 11: Recovery System"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/13-query-processing",
          children: "Chapter 13: Query Processing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the purpose of indexes in query acceleration with analogies and complexity analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between ordered (primary vs secondary) and dense vs sparse indices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe B-Tree and B+Tree structure, properties, and operations (search/insert/delete) with pseudocode and dry-run traces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement B-Tree, B+Tree, Hash index, and Bitmap index in C++ and Python"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze time/space complexity of each index type with justification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand ISAM, static/extendable/linear hashing, bitmap indexing, function-based indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design composite indexes using the leftmost prefix rule with selectivity analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply index strategies in real systems: MySQL InnoDB, PostgreSQL, MongoDB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on index internals, trade-offs, and optimization"
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
        href: "../../assets/images/lessons/database-management-systems/12-indexing/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/12-indexing/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/12-indexing/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/12-indexing/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/12-indexing/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/12-indexing/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose of Indexes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerate lookups at cost of writes + storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index columns in WHERE, JOIN, ORDER BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordered Indices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary (clustered) vs Secondary (non-clustered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One clustered per table; many secondary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dense vs Sparse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense: every row. Sparse: every page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse is smaller but requires clustered order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B-Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced multi-way tree; keys in all nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for general-purpose; internal nodes store data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys only in leaves; internal nodes route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default in MySQL/PostgreSQL; range-scan optimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static multi-level index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical; fixed structure; no self-balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) equality lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No range support; extendable/linear variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitmap Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit per distinct value per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-cardinality columns in DW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function-Based Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on expression result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOWER(email), JSON extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-column ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost prefix rule governs usability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Covering Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All query columns in index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates table access (index-only scan)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match index type to query pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor slow queries; add indexes iteratively"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Query Arrives] --> B{Full Scan?}\n    B -->|Yes| C[Sequential Read O(n)]\n    B -->|No - Use Index| D{Index Type}\n    D -->|B-Tree| E[Range / Equality / Ordering]\n    D -->|B+Tree| E2[Range / Equality / Ordering]\n    D -->|ISAM| F[Static Range / Equality]\n    D -->|Hash| G[Equality Only O(1)]\n    D -->|Bitmap| H[Boolean Combos AND/OR/NOT]\n    D -->|Composite| I[Multi-Column Leftmost Prefix]\n    D -->|Functional| J[Expression-Based Lookup]\n    E & E2 & F & G & H & I & J --> K[Page Lookup]\n    K --> L[Return Results]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch05-indexing-query.png",
        alt: "Indexing, Query Processing and Join Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-why-indexes",
      children: "12.1 Why Indexes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A book's index. Without an index, finding \"database indexing\" in a 1000-page book means reading every page (full scan). With the index at the back, you look up \"indexing' p. 342, 410, 512\" and flip directly. A database index works identically -- it maps search-key values to physical locations (page ID, row ID, or tuple pointer)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Problem:"
      }), " A full table scan on 10M rows at 100 MB/s sequential read takes ~5-10 seconds. With an index, the same lookup takes 2-4 random I/Os (~10-20 ms). That is a 500x-1000x improvement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Trade-off:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reads:"
        }), " Dramatically faster -- O(log n) vs O(n)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Writes:"
        }), " Slower -- every INSERT/UPDATE/DELETE must update each index on the table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage:"
        }), " Extra space -- each index is a separate data structure (typically 10-50% of table size)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost-Benefit Calculation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Workload"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With B+Tree Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT by PK (1 row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) full scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) ~3 I/Os"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range scan (5% of rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) full scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k) ~ log n + 0.05n leaf reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT 1 row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) index maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE 1 row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) mark + O(n) later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) index maintenance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Indexes transform full table scans (minutes) into direct lookups (milliseconds) at the cost of slower writes and extra storage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate keys:"
        }), " Indexes handle duplicates -- B+Tree leaf nodes store multiple values per key (row IDs). Hash indexes use overflow chaining."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL in index:"
        }), " Most DBMS allow NULL in index entries. NULL is treated as a distinct value (PostgreSQL places NULLs last by default)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index fragmentation:"
        }), " Over time, page splits and merges create fragmentation. Rebuilding the index (REINDEX, ALTER INDEX REBUILD) restores compactness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-index-types-overview",
      children: "12.2 Index Types Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification by Organization:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Types"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered (B-Tree, B+Tree) vs Hash (unordered)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By density"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense (every row pointer) vs Sparse (every page pointer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By clustering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustered (primary) vs Non-clustered (secondary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-based (B+Tree) vs Hash-based vs Bitmap vs Inverted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-column vs Composite (multi-column)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-table vs Partial (filtered rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "By expression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain vs Function-based (expression index)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison: Primary vs Secondary vs Dense vs Sparse"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Index (Clustered)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Secondary Index (Non-Clustered)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dense Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sparse Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sorted by key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data not sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entries per table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per block/page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1/block_factor of table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lookup speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1 I/O for data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra I/O (index + data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (direct row pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (may scan block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (random per row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (follow pointers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (fewer pointers to follow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can have multiple?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one (physical order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few (requires ordering)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-ordered-indices-primary-clustering-vs-secondary",
      children: "12.3 Ordered Indices: Primary (Clustering) vs Secondary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.3.1 Primary Index (Clustered Index)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The table data is physically ordered on disk according to the index key. The leaf level of the index is the data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- MySQL InnoDB: Primary key automatically becomes the clustered index\nCREATE TABLE employees (\n    emp_id INT PRIMARY KEY,      -- Clustered index on emp_id\n    name VARCHAR(100),\n    dept_id INT,\n    salary DECIMAL(10,2)\n);\n\n-- Leaf pages of the clustered index contain the full row data\n-- Searching for emp_id = 42 goes: Root -> Internal -> Leaf (which IS the row)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only one per table (data can only be physically sorted one way)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaves store the actual row data, not pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range scans are extremely fast (data is physically contiguous)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INSERT near the end of the key range is fast; random INSERT causes page splits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.3.2 Secondary Index (Non-Clustered Index)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A separate structure from the data. Leaves store pointers to the actual rows (row IDs or primary key values)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Creating a secondary index\nCREATE INDEX idx_emp_name ON employees(name);\n\n-- Lookup: Go through idx_emp_name B+Tree -> get PK value -> go through clustered index\n-- This is called a \"bookmark lookup\" or \"key lookup\"\nSELECT * FROM employees WHERE name = 'Alice';\n-- Plan: Index Scan on idx_emp_name -> Clustered Index Seek on PK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The \"Two I/O\" Penalty:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search for name='Alice' in secondary index:\n  1. Traverse idx_emp_name B+Tree (3 I/Os) -> find PK = 42\n  2. Traverse PK clustered B+Tree (3 I/Os) -> find full row\n  Total: 6 I/Os vs 3 I/Os for a clustered lookup\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Wider\" Secondary Indexes (InnoDB):"
      }), " In InnoDB, secondary index leaves store the PRIMARY KEY value, not a direct row pointer. If the PK is large (e.g., UUID), all secondary indexes become larger."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-dense-vs-sparse-indices",
      children: "12.4 Dense vs Sparse Indices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dense index:"
        }), " Every street address is listed in a directory -> instant find but huge book"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparse index:"
        }), " Only every 100th street is listed -> smaller book but you search within a block after finding the entry point"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.4.1 Dense Index"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An index record appears for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "every search-key value"
      }), " in the file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Data File (sorted by emp_id):\n[1, Alice] [2, Bob] [3, Carol] [4, Dave] [5, Eve] [6, Frank]\n\nDense Index:\n1 -> ptr to [1, Alice]\n2 -> ptr to [2, Bob]\n3 -> ptr to [3, Carol]\n4 -> ptr to [4, Dave]\n5 -> ptr to [5, Eve]\n6 -> ptr to [6, Frank]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faster lookup: directly locate any record"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Larger: as many entries as rows in the table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be used on unsorted data (if storing direct pointers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.4.2 Sparse Index"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An index record appears for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "each block"
      }), " (or page) of the file. Only works on ordered files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Data File (sorted by emp_id, 2 rows per block):\nBlock 1: [1, Alice] [2, Bob]\nBlock 2: [3, Carol] [4, Dave]\nBlock 3: [5, Eve] [6, Frank]\n\nSparse Index:\n1 -> Block 1\n3 -> Block 2\n5 -> Block 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search for emp_id=4:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find largest key <= 4 in sparse index -> 3 -> Block 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read Block 2 -> scan for id=4 -> found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dense Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sparse Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n/k) where k = rows per block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lookup cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n_dense) -> find exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n_sparse) + block scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must update index every row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not update (if same block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space saving"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (largest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~block_factor x smaller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (file must be sorted by key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary (clustered) indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-b-tree-indexes",
      children: "12.5 B-Tree Indexes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A phone book with hierarchical tabs. You don't read every name -- you go to the right letter tab (root), then sub-tab (internal), then find the specific name (leaf). Every tab holds some names directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.1 Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A B-Tree of order m satisfies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every node has at most m children"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every node (except root) has at least ceil(m/2) children"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root has at least 2 children (unless it is a leaf)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All leaves appear at the same depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A non-leaf node with k children contains k-1 keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keys within a node are sorted"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every node stores both keys AND data pointers"
        }), " (unlike B+Tree)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "B-Tree of order 5 (example, typically much wider):\n                    [30, 60]\n                   /    |    \\\n           [10,20]  [40,50]  [70,80,90]\n           /  |  \\   /  |  \\   /  |  |  \\\n       Data Data Data Data Data Data Data Data Data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.2 Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-balancing (all leaves at same depth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each node holds ceil(m/2)-1 to m-1 keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Height: O(log_m n) or O(log n / log m)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With m=500, height <= 3 for 125M keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal nodes contain keys + pointers to children"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data pointers are attached to every key (in both internal and leaf nodes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.3 Search Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at root node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear or binary search within the node for key K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found return the data pointer associated with K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not found choose the child pointer between the two bounding keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no child exists (leaf) -> K does not exist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat from step 2 for the child node"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function B_TREE_SEARCH(node, key):\n    i = 1\n    while i <= node.n and key > node.keys[i]:\n        i = i + 1\n    if i <= node.n and key == node.keys[i]:\n        return (node, i)  // Found with data pointer\n    if node.is_leaf:\n        return null       // Not found\n    else:\n        return B_TREE_SEARCH(node.children[i], key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Search for key = 50 in B-Tree of order 5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial tree:\n                     [30, 60]\n                    /    |    \\\n          [10,20,25]  [40,50]  [70,80,90]\n\nStep | Node Visited       | i | keys[i] | Comparison     | Action\n-----|-------------------|----|---------|----------------|----------------------\n1    | [30, 60]          | 1 | 30      | 50 > 30        | i++\n2    | [30, 60]          | 2 | 60      | 50 < 60        | Follow child[2]\n3    | [40, 50]          | 1 | 40      | 50 > 40        | i++\n4    | [40, 50]          | 2 | 50      | 50 == 50       | FOUND at (node, 2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.4 Insertion Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search for the key to find the correct leaf where it should go"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the leaf has room (n < m-1): insert key in sorted order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the leaf is full:\na. Split into two nodes (left and right), distributing keys evenly\nb. Promote the middle key to the parent\nc. If the parent is also full, repeat step 3 (split propagates upward)\nd. If the root splits, create a new root with the promoted key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function B_TREE_INSERT(root, key):\n    if root.n == m-1:\n        new_root = new Node()\n        new_root.children[1] = root\n        B_TREE_SPLIT_CHILD(new_root, 1)\n        return B_TREE_INSERT_NONFULL(new_root, key)\n    else:\n        return B_TREE_INSERT_NONFULL(root, key)\n\nfunction B_TREE_INSERT_NONFULL(node, key):\n    i = node.n\n    if node.is_leaf:\n        while i >= 1 and key < node.keys[i]:\n            node.keys[i+1] = node.keys[i]\n            i--\n        node.keys[i+1] = key\n        node.n++\n    else:\n        while i >= 1 and key < node.keys[i]:\n            i--\n        i++\n        if node.children[i].n == m-1:\n            B_TREE_SPLIT_CHILD(node, i)\n            if key > node.keys[i]:\n                i++\n        B_TREE_INSERT_NONFULL(node.children[i], key)\n\nfunction B_TREE_SPLIT_CHILD(parent, i):\n    child = parent.children[i]\n    new_child = new Node()\n    mid = ceil(m/2)\n    new_child.is_leaf = child.is_leaf\n    new_child.n = m - mid\n    for j = 1 to m - mid:\n        new_child.keys[j] = child.keys[mid + j]\n    if not child.is_leaf:\n        for j = 1 to m - mid + 1:\n            new_child.children[j] = child.children[mid + j]\n    child.n = mid - 1\n    for j = parent.n + 1 downto i + 1:\n        parent.children[j+1] = parent.children[j]\n    parent.children[i+1] = new_child\n    for j = parent.n downto i:\n        parent.keys[j+1] = parent.keys[j]\n    parent.keys[i] = child.keys[mid]\n    parent.n++\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Insert keys 10, 20, 30, 40, 50, 60 into empty B-Tree of order 5 (max 4 keys per node):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Insert 10\n  Leaf: [10]\n\nStep 2: Insert 20\n  Leaf: [10, 20]\n\nStep 3: Insert 30\n  Leaf: [10, 20, 30]\n\nStep 4: Insert 40\n  Leaf: [10, 20, 30, 40]   (full at m-1=4)\n\nStep 5: Insert 50\n  Leaf full -> Split!\n  Left:  [10, 20]    Right: [30, 40, 50]\n  Promote 30 to new root\n  Tree:\n            [30]\n           /    \\\n      [10,20]  [30,40,50]\n\nStep 6: Insert 60\n  Search: 60 > 30 -> go right\n  Right leaf has room -> [30, 40, 50, 60]\n\nStep 7: Insert 25\n  Search: 25 < 30 -> go left\n  Left leaf: [10, 20, 25]  (room, insert sorted)\n\nStep 8: Insert 5\n  Search: 5 < 30 -> go left\n  Left leaf: [5, 10, 20, 25]  (full = 4)\n  Split left leaf:\n  Left:  [5, 10]    Right: [20, 25]\n  Promote 20 to root:\n            [20, 30]\n           /    |    \\\n      [5,10]  [20,25] [30,40,50,60]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.5 Deletion Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search for the key to delete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found in an internal node:\na. Replace with predecessor (max of left subtree) or successor (min of right subtree)\nb. Delete the predecessor/successor from the leaf"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If found in a leaf:\na. Remove the key\nb. If the node has >= ceil(m/2)-1 keys done\nc. If underflow:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Try to borrow a key from a sibling (redistribution)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If no sibling can spare, merge with a sibling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merging may cause parent underflow, repeat upward"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Delete from B-Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Start with:\n                  [30]\n                 /    \\\n          [10,20]    [30,40,50,60]  (order 5, min 2 keys)\n\nDelete 60:\n  Leaf: [30, 40, 50]  (still has >=2 keys, done)\n  Tree:\n                  [30]\n                 /    \\\n          [10,20]    [30,40,50]\n\nDelete 50:\n  Leaf: [30, 40]  (still >=2, done)\n  Tree:\n                  [30]\n                 /    \\\n          [10,20]    [30,40]\n\nDelete 40:\n  Leaf: [30]  (underflow! needs 2, has 1)\n  Sibling [10,20] can spare\n  Redistribute: parent key 30 goes down to right, 20 goes up to parent\n  Tree:\n                  [20]\n                 /    \\\n          [10]        [30]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.6 B-Tree Implementation (C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass BTreeNode {\npublic:\n    std::vector<int> keys;\n    std::vector<BTreeNode*> children;\n    bool isLeaf;\n    int t; // Minimum degree\n\n    BTreeNode(int _t, bool _isLeaf) : t(_t), isLeaf(_isLeaf) {}\n\n    void traverse() {\n        int i;\n        for (i = 0; i < keys.size(); i++) {\n            if (!isLeaf) children[i]->traverse();\n            std::cout << keys[i] << \" \";\n        }\n        if (!isLeaf) children[i]->traverse();\n    }\n\n    BTreeNode* search(int key) {\n        int i = 0;\n        while (i < keys.size() && key > keys[i]) i++;\n        if (i < keys.size() && keys[i] == key) return this;\n        if (isLeaf) return nullptr;\n        return children[i]->search(key);\n    }\n\n    void insertNonFull(int key) {\n        int i = keys.size() - 1;\n        if (isLeaf) {\n            keys.push_back(0);\n            while (i >= 0 && keys[i] > key) {\n                keys[i + 1] = keys[i];\n                i--;\n            }\n            keys[i + 1] = key;\n        } else {\n            while (i >= 0 && keys[i] > key) i--;\n            i++;\n            if (children[i]->keys.size() == 2 * t - 1) {\n                splitChild(i, children[i]);\n                if (keys[i] < key) i++;\n            }\n            children[i]->insertNonFull(key);\n        }\n    }\n\n    void splitChild(int i, BTreeNode* y) {\n        BTreeNode* z = new BTreeNode(y->t, y->isLeaf);\n        z->keys.resize(t - 1);\n        for (int j = 0; j < t - 1; j++)\n            z->keys[j] = y->keys[j + t];\n        if (!y->isLeaf) {\n            z->children.resize(t);\n            for (int j = 0; j < t; j++)\n                z->children[j] = y->children[j + t];\n        }\n        y->keys.resize(t - 1);\n        children.insert(children.begin() + i + 1, z);\n        keys.insert(keys.begin() + i, y->keys[t - 1]);\n    }\n};\n\nclass BTree {\npublic:\n    BTreeNode* root;\n    int t;\n\n    BTree(int _t) : t(_t) { root = new BTreeNode(t, true); }\n\n    void insert(int key) {\n        if (root->keys.size() == 2 * t - 1) {\n            BTreeNode* newRoot = new BTreeNode(t, false);\n            newRoot->children.push_back(root);\n            newRoot->splitChild(0, root);\n            int i = 0;\n            if (newRoot->keys[0] < key) i++;\n            newRoot->children[i]->insertNonFull(key);\n            root = newRoot;\n        } else {\n            root->insertNonFull(key);\n        }\n    }\n\n    BTreeNode* search(int key) { return root ? root->search(key) : nullptr; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.7 B-Tree Implementation (Python)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BTreeNode:\n    def __init__(self, t, is_leaf):\n        self.t = t\n        self.is_leaf = is_leaf\n        self.keys = []\n        self.children = []\n\n    def search(self, key):\n        i = 0\n        while i < len(self.keys) and key > self.keys[i]:\n            i += 1\n        if i < len(self.keys) and self.keys[i] == key:\n            return (self, i)\n        if self.is_leaf:\n            return None\n        return self.children[i].search(key)\n\n    def insert_non_full(self, key):\n        i = len(self.keys) - 1\n        if self.is_leaf:\n            self.keys.append(0)\n            while i >= 0 and self.keys[i] > key:\n                self.keys[i + 1] = self.keys[i]\n                i -= 1\n            self.keys[i + 1] = key\n        else:\n            while i >= 0 and self.keys[i] > key:\n                i -= 1\n            i += 1\n            if len(self.children[i].keys) == 2 * self.t - 1:\n                self.split_child(i, self.children[i])\n                if self.keys[i] < key:\n                    i += 1\n            self.children[i].insert_non_full(key)\n\n    def split_child(self, i, y):\n        z = BTreeNode(y.t, y.is_leaf)\n        z.keys = y.keys[self.t:]\n        if not y.is_leaf:\n            z.children = y.children[self.t:]\n        y.keys = y.keys[:self.t - 1]\n        if not y.is_leaf:\n            y.children = y.children[:self.t]\n        self.children.insert(i + 1, z)\n        self.keys.insert(i, y.keys[self.t - 1] if self.t <= len(y.keys) else y.keys[-1])\n\nclass BTree:\n    def __init__(self, t):\n        self.t = t\n        self.root = BTreeNode(t, True)\n\n    def search(self, key):\n        return self.root.search(key) if self.root else None\n\n    def insert(self, key):\n        root = self.root\n        if len(root.keys) == 2 * self.t - 1:\n            new_root = BTreeNode(self.t, False)\n            new_root.children.append(root)\n            new_root.split_child(0, root)\n            i = 0\n            if new_root.keys[0] < key:\n                i += 1\n            new_root.children[i].insert_non_full(key)\n            self.root = new_root\n        else:\n            root.insert_non_full(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.8 Complexity Analysis"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n) = O(log n / log m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height <= log_{ceil(m/2)} (n+1). With m=500, height ~3 for 125M keys. Each level is one I/O."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search to leaf (log n), plus write modified nodes on path. Split propagates upward at most O(log n) times."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search + underflow fixes (borrow/merge) propagate upward at most O(log n)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each key stored once. Internal nodes add overhead: O(n / (m/2)) nodes approx O(n/m)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log_m n) not O(log_2 n)?"
      }), "\nB-Tree internal nodes hold hundreds of keys (node size approx disk page). Binary search within a node is in-memory (zero I/O cost). The real cost is the number of I/Os = tree height = log_m n. With m=500, log_500 1M ~ 2.3, vs log_2 1M ~ 20 -- a 7x improvement in I/O count."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.5.9 Advantages & Disadvantages"
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
            children: "Self-balancing automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys in internal nodes waste space (less fan-out per page)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for both equality and range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range scan requires going up and down the tree (unlike B+Tree leaf links)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No reorganization needed (grows/shrinks dynamically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More page splits due to data in internal nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent disk I/O characteristics (node = page)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower sequential access than B+Tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well for both OLTP and OLAP workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher memory overhead per key"
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
          children: "Duplicate keys:"
        }), " B-Tree typically stores duplicates by adding a unique suffix or using overflow pages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very small keys (e.g., boolean):"
        }), " Low fan-out utilization, B-Tree still works but bitmap better"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequential inserts:"
        }), " Cause many page splits (right-side splits), B+Tree handles this better with leaf linking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-btree-indexes",
      children: "12.6 B+Tree Indexes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A library with a card catalog system. The catalog drawers (internal nodes) tell you which aisle/shelf range to check. The actual book locations (leaf nodes) contain the final shelf number plus links to the next location. You go to one catalog find the range go to the aisle find the book follow the shelf link to the next book."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.1 Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B+Tree is a variant of B-Tree with two key differences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All keys reside in the leaf nodes"
        }), " -- internal nodes only contain routing keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leaf nodes are linked"
        }), " -- forming a sorted linked list for efficient range scans"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "B+Tree (order 4, leaf capacity 3):\nInternal:            [50, 90]\n                    /    |    \\\nLeaf:        [20, 35, 40] -> [50, 60, 75] -> [90, 100, 120]\n                |      |         |             |\n              Data   Data      Data          Data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.2 Key Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All leaves at same depth (balanced)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal nodes contain routing keys + child pointers (no data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaf nodes contain all keys + data pointers (or PK references)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaves form a singly/doubly linked list (sequence set)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node size matches disk page (4-16 KB) -> fan-out of 200-500"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Height: log_{fanout} n -> typically 3-4 levels for billions of rows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.3 Search Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at root"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At each internal node, binary search for the smallest key >= search key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the corresponding child pointer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until a leaf node is reached"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear scan the leaf for the exact key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found, return the data pointer; else key does not exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BPLUS_TREE_SEARCH(node, key):\n    while not node.is_leaf:\n        i = 1\n        while i <= node.n and key >= node.keys[i]:\n            i = i + 1\n        node = node.children[i]\n    // node is now a leaf\n    for i = 1 to node.n:\n        if node.keys[i] == key:\n            return (node, i)\n    return null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Search for key = 75:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "B+Tree structure:\nInternal:                [50, 90]\n                        /    |    \\\nLeaf:      L1:[20,35,40] -> L2:[50,60,75] -> L3:[90,100,120]\n\nStep | Node Type      | Node Keys | key | Action\n-----|---------------|-----------|-----|-------------------------------\n1    | Internal (Root) | [50, 90]  | 75  | 75 < 90, but >= 50 -> child[2]\n2    | Internal (could be deeper) | - | - | (skip in 2-level tree)\n3    | Leaf L2       | [50,60,75] | 75  | Scan: 50->60->75 found at pos 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Range Search (WHERE key BETWEEN 60 AND 100):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Search for lower bound 60 -> reach leaf L2\nStep 2: In L2, 60 <= key -> start collecting\nStep 3: Collect 60, 75 from L2\nStep 4: Follow leaf pointer L2 -> L3\nStep 5: Collect 90, 100 from L3 (stop at 120 > 100)\nResult: {60, 75, 90, 100} -- 4 I/Os for index search + sequential leaf reads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.4 Insertion Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search to find the correct leaf node (same as search path)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If leaf has room: insert key in sorted order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If leaf is full:\na. Split leaf into two leaves, redistribute keys evenly\nb. Copy the first key of the new leaf up to the parent as a routing key\nc. If parent is full, split propagates upward (internal node splits)\nd. If root splits, create new root, tree grows by one level"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BPLUS_TREE_INSERT(root, key):\n    leaf = FIND_LEAF(root, key)\n    if leaf has room:\n        INSERT_IN_LEAF(leaf, key)\n    else:\n        new_leaf = SPLIT_LEAF(leaf, key)\n        // leaf gets first half, new_leaf gets second half\n        promote_key = new_leaf.keys[1]  // first key of new leaf\n        INSERT_IN_PARENT(leaf, promote_key, new_leaf)\n\nfunction INSERT_IN_PARENT(left_node, key, right_node):\n    if parent is null:  // reached root\n        create new root with key and children [left, right]\n        return\n    if parent has room:\n        insert key and right_node pointer into parent\n    else:\n        split parent internal node (similar to B-Tree split)\n        recursively insert new routing key upward\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Insert keys 10, 20, 30, 40, 50 into B+Tree (leaf cap=3, internal cap=3):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Insert 10\n  Leaf: [10]\n\nStep 2: Insert 20\n  Leaf: [10, 20]\n\nStep 3: Insert 30\n  Leaf: [10, 20, 30]  (full)\n\nStep 4: Insert 40 -> leaf full, split!\n  Leaf 1: [10, 20]    Leaf 2: [30, 40]\n  Promote 30 to root (copy-up)\n  Tree:\n            [30]\n           /    \\\n      [10,20]  [30,40]\n\nStep 5: Insert 50\n  50 > 30 -> go to right leaf\n  Right leaf: [30, 40, 50] (full) -> split!\n  Leaf 1: [30, 40]    Leaf 2: [50]\n  Promote 50 to parent (copy-up)\n  Parent full: [30, 50] (internal cap=3, room)\n  Tree:\n            [30, 50]\n           /    |    \\\n      [10,20] [30,40] [50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.5 Deletion Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search to find the key in the leaf"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove the key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If leaf has >= ceil((max+1)/2) keys done"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If underflow:\na. Try to borrow from a sibling (redistribution)\nb. If no sibling can spare, merge with a sibling\nc. Remove the routing key from parent\nd. If parent underflows, repeat upward"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.6 B+Tree Implementation (C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass BPlusTreeNode {\npublic:\n    std::vector<int> keys;\n    std::vector<BPlusTreeNode*> children;\n    BPlusTreeNode* next;  // Link to next leaf\n    bool isLeaf;\n    int order;\n\n    BPlusTreeNode(int _order, bool _isLeaf)\n        : order(_order), isLeaf(_isLeaf), next(nullptr) {}\n\n    void traverse() {\n        if (isLeaf) {\n            for (int k : keys) std::cout << k << \" \";\n            if (next) std::cout << \" -> \";\n        } else {\n            for (size_t i = 0; i < children.size(); i++)\n                children[i]->traverse();\n        }\n    }\n\n    BPlusTreeNode* findLeaf(int key) {\n        if (isLeaf) return this;\n        size_t i = 0;\n        while (i < keys.size() && key >= keys[i]) i++;\n        return children[i]->findLeaf(key);\n    }\n\n    void insertInLeaf(int key) {\n        auto it = std::lower_bound(keys.begin(), keys.end(), key);\n        keys.insert(it, key);\n    }\n};\n\nclass BPlusTree {\npublic:\n    BPlusTreeNode* root;\n    int order;\n\n    BPlusTree(int _order) : order(_order) {\n        root = new BPlusTreeNode(order, true);\n    }\n\n    void insert(int key) {\n        BPlusTreeNode* leaf = root->findLeaf(key);\n        if (leaf->keys.size() < order - 1) {\n            leaf->insertInLeaf(key);\n        } else {\n            BPlusTreeNode* newLeaf = new BPlusTreeNode(order, true);\n            std::vector<int> allKeys = leaf->keys;\n            allKeys.push_back(key);\n            std::sort(allKeys.begin(), allKeys.end());\n\n            leaf->keys.clear();\n            newLeaf->keys.clear();\n            int split = (allKeys.size() + 1) / 2;\n            for (int i = 0; i < split; i++)\n                leaf->keys.push_back(allKeys[i]);\n            for (size_t i = split; i < allKeys.size(); i++)\n                newLeaf->keys.push_back(allKeys[i]);\n\n            newLeaf->next = leaf->next;\n            leaf->next = newLeaf;\n\n            int promoteKey = newLeaf->keys[0];\n            insertInParent(leaf, promoteKey, newLeaf);\n        }\n    }\n\n    void insertInParent(BPlusTreeNode* left, int key, BPlusTreeNode* right) {\n        if (left == root) {\n            BPlusTreeNode* newRoot = new BPlusTreeNode(order, false);\n            newRoot->keys.push_back(key);\n            newRoot->children.push_back(left);\n            newRoot->children.push_back(right);\n            root = newRoot;\n            return;\n        }\n        // Find parent and insert (simplified -- production code searches upward)\n    }\n\n    BPlusTreeNode* search(int key) {\n        BPlusTreeNode* leaf = root->findLeaf(key);\n        for (int k : leaf->keys)\n            if (k == key) return leaf;\n        return nullptr;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.7 B+Tree Implementation (Python)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BPlusTreeNode:\n    def __init__(self, order, is_leaf=True):\n        self.order = order\n        self.is_leaf = is_leaf\n        self.keys = []\n        self.children = []\n        self.next = None  # link to next leaf for range scan\n\n    def find_leaf(self, key):\n        if self.is_leaf:\n            return self\n        i = 0\n        while i < len(self.keys) and key >= self.keys[i]:\n            i += 1\n        return self.children[i].find_leaf(key)\n\n    def insert_key_sorted(self, key):\n        i = 0\n        while i < len(self.keys) and self.keys[i] < key:\n            i += 1\n        self.keys.insert(i, key)\n\n\nclass BPlusTree:\n    def __init__(self, order):\n        self.order = order\n        self.root = BPlusTreeNode(order, True)\n\n    def search(self, key):\n        leaf = self.root.find_leaf(key)\n        return key in leaf.keys\n\n    def insert(self, key):\n        leaf = self.root.find_leaf(key)\n        if len(leaf.keys) < self.order - 1:\n            leaf.insert_key_sorted(key)\n        else:\n            new_leaf = BPlusTreeNode(self.order, True)\n            all_keys = sorted(leaf.keys + [key])\n            mid = len(all_keys) // 2\n            leaf.keys = all_keys[:mid]\n            new_leaf.keys = all_keys[mid:]\n            new_leaf.next = leaf.next\n            leaf.next = new_leaf\n            promote_key = new_leaf.keys[0]\n            self._insert_in_parent(leaf, promote_key, new_leaf)\n\n    def _insert_in_parent(self, left, key, right):\n        if left is self.root:\n            new_root = BPlusTreeNode(self.order, False)\n            new_root.keys = [key]\n            new_root.children = [left, right]\n            self.root = new_root\n            return\n        # Find parent and insert key+right into it\n        # (simplified -- production code would walk from root)\n\n    def range_query(self, low, high):\n        result = []\n        leaf = self.root.find_leaf(low)\n        while leaf:\n            for k in leaf.keys:\n                if low <= k <= high:\n                    result.append(k)\n                elif k > high:\n                    return result\n            leaf = leaf.next\n        return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.6.8 Complexity Analysis"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree height = log_{fanout} n. Each internal node visited once. Leaf has ~50% average occupancy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find leaf (log_m n) + leaf insert (O(1) if room, O(m) if split). Splits propagate <= O(log_m n) times."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find + remove + possible merge propagation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find lower bound (log_m n) + follow leaf links for k results. Each leaf I/O retrieves ~page/2 keys."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n keys in leaves, O(n/m) internal nodes."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why B+Tree over B-Tree?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range scans:"
        }), " B+Tree leaves are linked -> sequential scan without back-tracking to parent. B-Tree requires traversing internal nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Higher fan-out:"
        }), " Internal nodes have no data pointers -> more keys per page -> shorter tree -> fewer I/Os."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predictable leaf scans:"
        }), " All data in leaves, all at same depth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-b-tree-vs-btree-comparison",
      children: "12.7 B-Tree vs B+Tree Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data pointers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In all nodes (internal + leaf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only in leaf nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store keys + data pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store only routing keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leaf nodes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store keys + data (not necessarily linked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store keys + data + linked list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fan-out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (data pointers take space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (routing only -> more keys per page)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tree height"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taller (same page size, fewer keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter (more keys per internal node)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must traverse internal nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-linked list -> sequential scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Point query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly faster (data may be in internal node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always reaches leaf (one extra level sometimes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys appear throughout the tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All keys in leaves, sorted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (duplicate routing in internal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (no data in internal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dominant use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database indexes (MySQL, PostgreSQL)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use B-Tree:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When the tree itself is small enough to fit in memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When point queries dominate and every I/O matters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded systems with smaller page sizes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use B+Tree:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disk-based databases (the dominant choice)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workloads with frequent range scans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When you want maximum fan-out per page"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "128-btree-order-calculation",
      children: "12.8 B+Tree Order Calculation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Order (m)"
      }), " = maximum number of children per node. Typically determined by page size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation for Disk-Based Design:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page size = 4096 bytes (4 KB)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key size = 8 bytes (e.g., BIGINT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pointer size = 8 bytes (row ID or page pointer)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal node entry size"
      }), " = key + pointer = 16 bytes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal node entries per page"
      }), " = 4096 / 16 = 256\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal node fan-out (order)"
      }), " = 256 (or 257 with 1 extra pointer)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Leaf node entry size"
      }), " = key + data pointer = 16 bytes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Leaf node entries per page"
      }), " = 4096 / 16 = 256"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Capacity by Tree Height (fan-out = 256):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Height (levels)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Records"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/Os for Search"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 (root = leaf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (root to leaves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 x 256 = 65,536"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 (root to internal to leaves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256^3 = 16,777,216"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256^4 = 4,294,967,296"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256^5 = 1,099,511,627,776"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "General formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Maximum keys at height h = m^(h+1) - 1\nTree height for n keys = log_m (n) = ln(n) / ln(m)\n\nFor m = 500, n = 10^9:\n  height = ln(10^9) / ln(500) = 20.7 / 6.2 = 3.3 -> 4 I/Os\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical insight:"
      }), " With typical page sizes (8-16 KB) and key sizes (4-8 bytes), a B+Tree can index billions of rows in 3-4 I/Os."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "129-isam-indexed-sequential-access-method",
      children: "12.9 ISAM (Indexed Sequential Access Method)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A book's table of contents combined with a fixed appendix. You look up a chapter in the TOC (static top-level index), then the page range is fixed -- you can't insert new chapters without reprinting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.9.1 Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ISAM is a static index structure: the index levels are built once and remain fixed. Unlike B-Trees, ISAM does not dynamically rebalance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ISAM Structure:\n                    [100, 300, 500]          <- Master Index (static)\n                   /      |       \\\n         [1..99] [100..299] [300..499] [500..999]  <- Cylinder Indexes\n          |           |\n     Overflow    Overflow\n      Area        Area\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static:"
        }), " Index is built once, not updated dynamically on insert"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequential:"
        }), " Data file is sorted by key"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overflow:"
        }), " When inserting, new records go to an overflow area (chained to the original data page)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-balanced:"
        }), " If overflow grows, performance degrades (linear search on chain)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.9.2 Operations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary search the master index -> find cylinder index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search cylinder index -> find track/block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search within the block (and its overflow chain)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the target block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If block has space, insert in order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If block is full, chain an overflow record (no split -- ISAM is static)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.9.3 ISAM vs B+Tree"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ISAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static (built once)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic (self-balancing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (no rebalance) but overflow degrades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) with splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows unbounded -> performance decay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No overflow (splits maintain structure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index rebuild"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic rebuild needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-maintaining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential (fast until overflow degrades)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-linked list (always fast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only or append-mostly workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose OLTP/OLAP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1210-hash-indexing",
      children: "12.10 Hash Indexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Parking garage valet -- you hand over your keys, they give you a ticket with a slot number (hash). When you return, you give the ticket and go directly to slot 42. No searching or range queries (\"find all cars parked between 10am and 11am\" requires checking every slot)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.10.1 Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hash indexing applies a hash function h(K) -> bucket number. Each bucket can hold one or more records."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert:"
        }), " Compute h(key) -> bucket. If bucket has room, store there. Else, handle collision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search:"
        }), " Compute h(key) -> bucket. Scan bucket for exact match. O(1) average."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range query:"
        }), " Not supported. Hash destroys ordering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL hash index\nCREATE INDEX idx_hash ON employees USING HASH(employee_id);\nSELECT * FROM employees WHERE employee_id = 1001;  -- O(1)\n\n-- Cannot use hash index for:\nSELECT * FROM employees WHERE employee_id > 1000;  -- table scan\nSELECT * FROM employees ORDER BY employee_id;      -- table scan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.10.2 Static Hashing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fixed number of buckets B. Collisions handled by chaining (each bucket -> linked list of overflow pages)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash Function: h(k) = k mod 7\nTable with B = 7 buckets:\nBucket 0: [7] -> [14]\nBucket 1: [1] -> [8] -> [15]\nBucket 2: [2] -> [9]\nBucket 3: [3] -> [10]\nBucket 4: [4]\nBucket 5: [5]\nBucket 6: [6] -> [13]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " As data grows, overflow chains lengthen. Buckets become unbalanced. Performance degrades from O(1) to O(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.10.3 Extendable Hashing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Solves the growth problem by using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directory"
      }), " that doubles in size when a bucket overflows. Only the overflowing bucket is split."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Directory of 2^d pointers (d = global depth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each directory entry points to a bucket"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each bucket has a local depth d_local <= d"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash function produces d bits -> directory index"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extendable Hashing Implementation (Python):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Bucket:\n    def __init__(self, local_depth=1):\n        self.local_depth = local_depth\n        self.keys = []\n\n    def is_full(self, bucket_size=2):\n        return len(self.keys) >= bucket_size\n\n\nclass ExtendableHash:\n    def __init__(self, bucket_size=2):\n        self.bucket_size = bucket_size\n        self.global_depth = 1\n        self.directory = [Bucket(), Bucket()]\n\n    def hash_key(self, key):\n        return key % (2 ** self.global_depth)\n\n    def find(self, key):\n        bucket = self.directory[self.hash_key(key)]\n        return key in bucket.keys\n\n    def insert(self, key):\n        idx = self.hash_key(key)\n        bucket = self.directory[idx]\n        if not bucket.is_full(self.bucket_size):\n            bucket.keys.append(key)\n            return\n        if bucket.local_depth == self.global_depth:\n            self._double_directory()\n        self._split_bucket(idx, key)\n\n    def _double_directory(self):\n        self.directory *= 2\n        self.global_depth += 1\n\n    def _split_bucket(self, idx, key):\n        old_bucket = self.directory[idx]\n        new_local = old_bucket.local_depth + 1\n        b1 = Bucket(new_local)\n        b2 = Bucket(new_local)\n        all_keys = old_bucket.keys + [key]\n        for k in all_keys:\n            if k % (2 ** new_local) == idx:\n                b1.keys.append(k)\n            else:\n                b2.keys.append(k)\n        step = 2 ** (self.global_depth - new_local)\n        base = idx - (idx % (2 ** new_local))\n        for i in range(0, 2 ** self.global_depth, step):\n            if (i >> (self.global_depth - new_local)) == (base >> (self.global_depth - new_local)):\n                if (i // step) % 2 == 0:\n                    self.directory[i] = b1\n                else:\n                    self.directory[i] = b2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.10.4 Linear Hashing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Handles growth without a directory. Buckets are added one at a time in a round-robin fashion."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintain pointer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next"
        }), " indicating which bucket to split next"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use two hash functions: h0(k) = k mod N, h1(k) = k mod 2N"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When any bucket overflows, split bucket at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next"
        }), " (not the overflowing bucket)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next"
        }), " until all original N buckets are split, then double N and reset"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Phase 1: N=4, next=0\n  Bucket 0: [0, 4, 8] -> overflow -> split bucket 0\n  Bucket 2: [2, 6]\n  Bucket 1: [1, 5]\n  Bucket 3: [3, 7]\n\nAfter split: next=1, N=4\n  Bucket 0: [0, 4]    (h0)\n  Bucket 4: [8, 12]   (h1)\n  Bucket 1: [1, 5]\n  Bucket 2: [2, 6]\n  Bucket 3: [3, 7]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      }), " No directory overhead. Gradual reorganization -- no sudden latency spikes from directory doubling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.10.5 Hash Index Collision Resolution (Dry Run)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash function: h(k) = k mod 5\nTable with 5 buckets, chaining for collisions\n\nInsert: 10, 15, 22, 17, 25\n\nKey | h(k) | Bucket | Action                     | Bucket Contents\n10  | 0    | 0      | Empty -> insert             | B0: [10]\n15  | 0    | 0      | Collision -> chain           | B0: [10] -> [15]\n22  | 2    | 2      | Empty -> insert             | B2: [22]\n17  | 2    | 2      | Collision -> chain           | B2: [22] -> [17]\n25  | 0    | 0      | Collision -> chain           | B0: [10] -> [15] -> [25]\n\nSearch for 17:\n  h(17) = 17 mod 5 = 2 -> Bucket 2\n  Scan chain: 22 != 17, 17 = 17 -> found\n\nSearch for 99:\n  h(99) = 99 mod 5 = 4 -> Bucket 4\n  Bucket 4 empty -> not found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1211-hash-vs-btree-vs-bitmap-index-comparison",
      children: "12.11 Hash vs B+Tree vs Bitmap Index Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+Tree Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bitmap Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equality lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) + bit unpack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast bitwise AND/OR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ORDER BY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n + k) (sorted walk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GROUP BY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (hash agg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (sorted agg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single key per hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple bitmaps AND"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact for low cardinality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (chain locks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (B-link variants)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (bitmap locks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (rebuild bitmap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cardinality limits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor above ~1000 distinct values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best workload"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose OLTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse dimensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE pk = 42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE date > '2024-01-01'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE gender='M' AND dept=10"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1212-bitmap-indexing",
      children: "12.12 Bitmap Indexing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant reservation seating chart. Each table (distinct value) has a row of seats (bitmap). You check who's at which table by looking at the column of lights -- AND two columns to find male diners at table 3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.12.1 Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each distinct value V in a column C, store a bitmap of N bits (N = number of rows). Bit i = 1 if row i has value V for column C."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Table: employees (1M rows, gender column: M or F)\n  gender = 'M' bitmap: 1011010010... (1M bits = 125 KB)\n  gender = 'F' bitmap: 0100101101... (1M bits = 125 KB)\n\nRow level:\n  Row 1: gender='M'   -> M[0]=1, F[0]=0\n  Row 2: gender='F'   -> M[1]=0, F[1]=1\n  Row 3: gender='M'   -> M[2]=1, F[2]=0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.12.2 Operations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Query: \"Find male employees in department 10 who earn > 100K\"\n  M_bitmap  = [1 0 1 1 0 1 0 0 ...]\n  Dept10_bitmap = [1 1 0 0 1 0 0 1 ...]\n  Salary_bitmap = [0 1 1 0 1 0 1 0 ...]\n\n  Result = M_bitmap AND Dept10_bitmap AND Salary_bitmap\n         = [0 0 0 0 0 0 0 0 ...]   (fast CPU bitwise op)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND/OR/NOT on 1M bits = ~0.01 ms (CPU-level bitwise operation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "COUNT = popcount (CPU instruction) -- O(1) per bitmap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Much faster than B+Tree index intersection for low-cardinality columns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bitmap Index Implementation (Python):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BitmapIndex:\n    def __init__(self, values):\n        \"\"\"values: list of distinct values for this column\"\"\"\n        self.values = list(values)\n        self.bitmaps = {v: bytearray() for v in self.values}\n\n    def add_row(self, row_value):\n        \"\"\"Add one row's worth of bits\"\"\"\n        for v in self.values:\n            self.bitmaps[v].append(1 if row_value == v else 0)\n\n    def query_eq(self, value):\n        \"\"\"Return rows where column = value\"\"\"\n        if value not in self.bitmaps:\n            return bytearray()\n        return self.bitmaps[value]\n\n    def query_and(self, bm1, bm2):\n        \"\"\"Bitwise AND of two bitmaps\"\"\"\n        if len(bm1) != len(bm2):\n            raise ValueError(\"Bitmap length mismatch\")\n        result = bytearray(len(bm1))\n        for i in range(len(bm1)):\n            result[i] = bm1[i] & bm2[i]\n        return result\n\n    def query_or(self, bm1, bm2):\n        \"\"\"Bitwise OR of two bitmaps\"\"\"\n        result = bytearray(len(bm1))\n        for i in range(len(bm1)):\n            result[i] = bm1[i] | bm2[i]\n        return result\n\n    def query_count(self, bitmap):\n        \"\"\"Count 1-bits in a bitmap (population count)\"\"\"\n        return sum(bin(b).count('1') for b in bitmap)\n\n    def query_between(self, bitmap):\n        \"\"\"Return list of row indices where bitmap is 1\"\"\"\n        indices = []\n        for byte_idx, byte_val in enumerate(bitmap):\n            for bit in range(8):\n                if byte_val & (1 << bit):\n                    indices.append(byte_idx * 8 + bit)\n        return indices\n\n\n# Example usage\nbitmap_idx = BitmapIndex(['M', 'F'])\ngenders = ['M', 'F', 'M', 'M', 'F', 'M', 'F', 'F', 'M', 'F']\nfor g in genders:\n    bitmap_idx.add_row(g)\n\nmale_bitmap = bitmap_idx.query_eq('M')\nprint(f\"Male rows: {bitmap_idx.query_between(male_bitmap)}\")\n# Output: Male rows: [0, 2, 3, 5, 8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.12.3 Bitmap Index Advantages & Disadvantages"
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
            children: "Extremely space-efficient for low cardinality (1 bit per row per value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space grows linearly with distinct values (bad for high cardinality)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast bitwise AND/OR/NOT operations (CPU-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates are expensive -- rebuilding bitmaps for many rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient COUNT (popcount instruction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for OLTP with frequent updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural compression (run-length encoding for consecutive 0s/1s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock contention on concurrent writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast for multi-condition WHERE clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less effective for range queries (requires conversion)"
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
          children: "High cardinality:"
        }), " For columns like salary with 10K distinct values -> 10K bitmaps -> impractical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bitmap compression:"
        }), " Real systems (Oracle, PostgreSQL) use compressed bitmaps (BBC, Word-Aligned Hybrid)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Updates:"
        }), " Changing gender from M to F = clear bit M, set bit F. If row IDs shift, all bitmaps must be updated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1213-function-based-indexes-expression-indexes",
      children: "12.13 Function-Based Indexes (Expression Indexes)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant menu organized by dietary tags. You can't easily find \"gluten-free\" options, so you create a secondary listing organized by dietary restriction (the function), even though the main menu is sorted by course."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.13.1 Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function-based index indexes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "result of an expression"
      }), " rather than the raw column value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Index on lowercased email\nCREATE INDEX idx_lower_email ON customers(LOWER(email));\n\n-- Query that uses the index:\nSELECT * FROM customers WHERE LOWER(email) = 'alice@example.com';\n\n-- Query that does NOT (different function):\nSELECT * FROM customers WHERE UPPER(email) = 'ALICE@EXAMPLE.COM';\n\n-- Multi-column expression index (PostgreSQL):\nCREATE INDEX idx_total_price ON order_items((quantity * unit_price));\n\n-- JSON field index (PostgreSQL):\nCREATE INDEX idx_order_total ON orders(((items->>'total')::DECIMAL));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.13.2 When to Use"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Case-insensitive searches: LOWER(name), UPPER(email)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Date truncation: DATE_TRUNC('month', order_date)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computed columns: (salary + bonus), (price * quantity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON field extraction: (metadata->>'key')"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Substring matching (with specific patterns): SUBSTRING(name, 1, 3)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.13.3 Limitations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The query must use the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "exact same expression"
        }), " as the index definition"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expression evaluation adds CPU cost on insert/update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not all DBMS support function-based indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statistics on expression values may be less accurate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1214-composite-indexes-and-covering-indexes",
      children: "12.14 Composite Indexes and Covering Indexes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A phone book sorted by (last_name, first_name). You can quickly find \"Smith, John\" -- but you cannot easily find everyone named John. The leftmost prefix (last_name) is mandatory for efficient lookup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.14.1 Composite Index Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A composite index on columns (A, B, C) creates a B+Tree where keys are ordered lexicographically by A, then B, then C."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Composite Index on (dept_id, hire_date, salary):\nRoot:    [(1, 2020-01-01, 50000), (2, 2021-06-15, 70000), ...]\n  |                   |                         |\nLeaf:  (1,2019,...) -> (1,2020,...) -> (1,2021,...) -> (2,2020,...) -> (2,2021,...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.14.2 The Leftmost Prefix Rule"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A composite index can be used for queries that filter on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prefix"
      }), " of the indexed columns (from left to right). You cannot skip a column."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Index: (A, B, C)\n\nUsable queries:\n  WHERE A = 1                         -> Uses first column\n  WHERE A = 1 AND B = 2               -> Uses first two columns\n  WHERE A = 1 AND B = 2 AND C = 3     -> Uses all three\n  WHERE A = 1 AND C = 3               -> Uses A only (B skipped)\n  WHERE A IN (1,2) AND B = 2          -> Uses A and B\n  WHERE A > 1 AND B = 2               -> Uses A only (range on A)\n\nNOT usable:\n  WHERE B = 2                         -> Cannot use (leftmost missing)\n  WHERE C = 3                         -> Cannot use\n  WHERE B = 2 AND C = 3               -> Cannot use\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.14.3 Column Order Strategy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1:"
      }), " Equality conditions first, range conditions after"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WHERE dept_id = 10 AND hire_date > '2024-01-01'\n-> Index on (dept_id, hire_date)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2:"
      }), " High selectivity (more distinct values) first"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Index on (gender, salary):\n  gender has 2 values -> filters 50%\n  salary has 10K values -> filters 0.01%\n\nBetter order: (salary, gender) -- salary filters more rows first\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3:"
      }), " Consider specific query patterns"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Common query: WHERE status = 'active' AND created_at > '2024-01-01'\n  -> Index on (status, created_at) -- equality then range\n\nCommon query: WHERE customer_id = 42 ORDER BY order_date DESC\n  -> Index on (customer_id, order_date DESC) -- filtering then ordering\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.14.4 Covering Index (Index-Only Scan)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A covering index contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all columns"
      }), " needed by a query. The DBMS can return results from the index alone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_covering ON employees(dept_id, last_name, first_name, salary);\n\n-- This query reads ONLY the index:\nSELECT dept_id, last_name, first_name\nFROM employees\nWHERE dept_id = 10;\n-- Plan: Index Only Scan (no table access needed)\n\n-- This also uses only the index:\nSELECT dept_id, salary\nFROM employees\nWHERE dept_id = 10 AND last_name LIKE 'S%';\n-- All columns (dept_id, last_name, salary) are in the index\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits of Covering Index:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates table access -> fewer I/Os"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces buffer pool contention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Particularly valuable for frequently repeated queries (hot queries)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost:"
      }), " Index becomes larger (more columns = more bytes per key). Write overhead increases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.14.5 Composite Index Edge Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index on (A DESC, B ASC):"
        }), " Mixed sort order -- useful for ORDER BY A DESC, B ASC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very wide index:"
        }), " More than 5-6 columns rarely useful (diminishing returns)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL handling:"
        }), " DBMS place NULLs last or first depending on sort order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index on (col1, col2) vs two single-column indexes:"
        }), " The composite helps prefix queries plus queries with both columns. Two single-column indexes help queries with either column independently"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1215-clustered-vs-non-clustered-index-comparison",
      children: "12.15 Clustered vs Non-Clustered Index Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clustered Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Clustered Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data physically sorted by index key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index order independent of data order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Count per table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (or 0, if heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (up to 999 in SQL Server)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leaf node content"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to data (PK or RID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential I/O -- very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random I/O per row -- slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INSERT cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High -- may require page split/reorg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower -- append to separate structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive -- may need to relocate row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower -- update pointer only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra (data = index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra (index is separate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Covering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always (leaf = data row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if index includes all needed columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page splits on insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range queries, PK lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many different search paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL InnoDB Specifics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always has a clustered index (on PK, or first UNIQUE, or hidden 6-byte row ID)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secondary indexes store PK values as row pointers -> need two lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PK size directly affects all secondary index sizes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PostgreSQL Specifics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses heap storage (no implicit clustered index)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All indexes are non-clustered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLUSTER command physically reorders table to match an index (one-time operation, not maintained)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heap-only tuples (HOT) optimize updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1216-index-selection",
      children: "12.16 Index Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Create an Index:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns frequently used in WHERE, JOIN, ORDER BY, GROUP BY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foreign key columns (accelerate JOINs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-selectivity columns (many distinct values -> few rows per key)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large tables where full scans are slow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queries returning < 5% of rows (index more efficient than scan)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When NOT to Create an Index:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small tables (< 1000 pages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns rarely used in queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low-selectivity columns (boolean, status with 2-3 values)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heavy write workloads (index maintenance overhead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns frequently updated (index needs updating on every change)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Monitor index usage (PostgreSQL)\nSELECT schemaname, tablename, indexname, idx_scan, idx_tup_read,\n       idx_tup_fetch\nFROM pg_stat_user_indexes\nORDER BY idx_scan;\n\n-- Find unused indexes (PostgreSQL)\nSELECT indexrelid::regclass, idx_scan\nFROM pg_stat_user_indexes\nWHERE idx_scan = 0 AND indexrelid NOT IN (\n    SELECT indexrelid FROM pg_constraint\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1217-index-organized-tables-iot",
      children: "12.17 Index-Organized Tables (IOT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some databases (Oracle, MySQL InnoDB) store the table as a clustered index:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The data IS the index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The index IS the data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- MySQL InnoDB automatically creates a clustered index on the PRIMARY KEY\nCREATE TABLE employees (\n    emp_id INTEGER PRIMARY KEY,  -- This IS the clustered index\n    name VARCHAR(100),\n    department_id INTEGER\n);\n-- Secondary indexes on name or department_id contain pointers to the primary key\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " In index-organized tables (clustered indexes), the data IS the index -- secondary indexes store primary key pointers, adding an extra lookup step."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1218-partial-indexes",
      children: "12.18 Partial Indexes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial Index:"
      }), " Indexes only a subset of rows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_active_orders ON orders(order_id)\nWHERE status NOT IN ('completed', 'cancelled');\n\nSELECT * FROM orders WHERE status = 'pending';  -- Uses the partial index\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Partial indexes reduce storage and maintenance by indexing only relevant rows (WHERE clause)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1219-btree-order-calculation-detailed",
      children: "12.19 B+Tree Order Calculation (Detailed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step calculation for a typical database page (8 KB):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Given:\n  Page size = 8,192 bytes (8 KB)\n  Key size = 8 bytes (BIGINT)\n  Pointer size = 6 bytes (page ID)\n  Per-entry overhead = 0 bytes (packed layout)\n\nInternal node entry = key + child pointer = 8 + 6 = 14 bytes\nInternal node entries per page = floor(8192 / 14) = 585\nInternal node fan-out = 585 + 1 = 586 (one extra pointer)\n\nLeaf node entry = key + row pointer = 8 + 6 = 14 bytes\nLeaf node entries per page = floor(8192 / 14) = 585\n\nCapacity at each level (fan-out = 586):\n  Level 0 (leaf level): 585 entries\n  Level 1: 586 x 585 = 342,810 entries\n  Level 2: 586^2 x 585 approx 200,886,660 entries\n  Level 3: 586^3 x 585 approx 117,719,582,760 entries\n\nKeys indexed in 3 I/Os (height 3): ~200 million\nKeys indexed in 4 I/Os (height 4): ~117 billion\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "With overhead (70% fill factor):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Typical occupancy: ~70% (due to splits and page utilization)\nEffective entries per page: 585 x 0.70 approx 409\n\nLevel 0: 409\nLevel 1: 586 x 409 approx 239,674\nLevel 2: 586^2 x 409 approx 140,448,964\nLevel 3: 586^3 x 409 approx 82,303,092,904\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is why a table with 100M rows needs only 3 I/Os for a lookup -- 2 internal levels + 1 leaf."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1220-applications-in-real-systems",
      children: "12.20 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.20.1 MySQL InnoDB"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clustered index:"
        }), " Automatically created on PRIMARY KEY. If no PK defined, uses first UNIQUE NOT NULL column. If none, creates hidden 6-byte row ID."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secondary indexes:"
        }), " Store PK value as row pointer. Lookup = secondary B+Tree -> PK -> clustered B+Tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive hash index:"
        }), " InnoDB can autonomously build a hash index on frequently accessed pages of the B+Tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change buffer:"
        }), " Buffers secondary index changes when the page is not in memory -> merged later."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B+Tree page size:"
        }), " Configurable (default 16 KB), controlled by innodb_page_size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- MySQL: View index cardinality\nSHOW INDEX FROM employees;\n\n-- Cardinality estimate\nSELECT\n    index_name,\n    cardinality,\n    (SELECT COUNT(*) FROM employees) AS table_rows,\n    ROUND(cardinality / (SELECT COUNT(*) FROM employees) * 100, 2) AS selectivity_pct\nFROM information_schema.statistics\nWHERE table_name = 'employees';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.20.2 PostgreSQL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap storage:"
        }), " No implicit clustered index. All indexes are non-clustered."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B-Tree (not B+Tree):"
        }), " PostgreSQL uses a variant of B-Tree (Lehman & Yao B-link tree) optimized for concurrent access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index types:"
        }), " B-Tree (default), Hash, GiST, GIN, SP-GiST, BRIN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial indexes:"
        }), " Heavily used for performance optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLUSTER command:"
        }), " One-time physical reordering but NOT maintained."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index-only scans:"
        }), " Supported through visibility maps (VM) -- checks if all tuples on a page are visible to all transactions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL: CREATE INDEX with fill factor\nCREATE INDEX idx_orders_date ON orders(order_date) WITH (fillfactor = 90);\n\n-- Concurrent index build (no table lock)\nCREATE INDEX CONCURRENTLY idx_orders_customer ON orders(customer_id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12.20.3 MongoDB"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compound indexes:"
        }), " Follow leftmost prefix rule similar to B+Tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multikey indexes:"
        }), " Index on array fields -- creates one entry per array element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL indexes:"
        }), " Automatically expire documents after a time interval."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text indexes:"
        }), " Full-text search indexes on string content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Geospatial indexes:"
        }), " 2dsphere and 2d for location queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WiredTiger storage engine:"
        }), " Uses B-Tree with prefix compression."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// MongoDB compound index\ndb.orders.createIndex({ customer_id: 1, order_date: -1 });\n\n// MongoDB covered query (projection must exclude _id)\ndb.orders.find(\n    { customer_id: 42 },\n    { customer_id: 1, order_date: 1, _id: 0 }\n).hint({ customer_id: 1, order_date: -1 });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1221-interview-corner",
      children: "12.21 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: When does a database NOT use an index, even though one exists?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Low selectivity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If index would return > 5-10% of rows, optimizer often chooses full scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Small table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full scan is faster than index traversal for small tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function wrapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE LOWER(name) = 'alice' can't use plain index on name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE varchar_col = 42 -> implicit cast prevents index use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leftmost prefix violation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite index (A,B,C) with WHERE B = 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OR conditions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE a = 1 OR b = 2 -- each leg may need separate index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NOT IN / !="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative conditions often trigger full scans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Outdated statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planner doesn't know index is beneficial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LIKE with leading %"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE name LIKE '%smith%' cannot use B+Tree order"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: B-Tree vs Hash -- which one to choose?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Choose Hash when:\n  - Only equality lookups: WHERE pk = 42\n  - No range queries, no ORDER BY\n  - Key-value store pattern\n  - E.g., cache lookups, ID lookups\n\nChoose B-Tree/B+Tree when:\n  - Range queries: WHERE date > '2024-01-01'\n  - ORDER BY or GROUP BY\n  - Composite indexes needed\n  - LIKE prefix patterns: WHERE name LIKE 'Smi%'\n  - General purpose (default choice)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is fill factor?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fill factor controls how full each B+Tree page is allowed to become before splitting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_name ON table(col) WITH (fillfactor = 80);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " Usually 90% (or 100% for read-only tables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lower (70-80%):"
        }), " Leaves space for future inserts -> fewer page splits -> better write performance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Higher (100%):"
        }), " Denser tree -> fewer levels -> better read performance at cost of more splits"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Index maintenance cost -- how much overhead?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With 1 B+Tree Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With 5 B+Tree Indexes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) page append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+O(log n) I/Os"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+5 x O(log n) I/Os"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE (key col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+2 x O(log n) (delete+insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+10 x O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) mark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+5 x O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table size only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+50-100% table size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+250-500% table size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Each additional index adds ~log n I/O to every write operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Cardinality estimation and its impact on index selection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The query optimizer uses column statistics to estimate how many rows each condition filters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL: View column statistics\nSELECT attname, n_distinct, most_common_vals, most_common_freqs\nFROM pg_stats\nWHERE tablename = 'employees';\n\n-- Update statistics\nANALYZE employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n_distinct = -1: All values unique (PK) -> high selectivity -> good for index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n_distinct = 2: Boolean column -> low selectivity -> may not use index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most common values (MCV): Tells optimizer about data skew"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: Index fragmentation -- what causes it and how to fix?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Causes:\n  - Page splits from insertions (leaves ~69% fill)\n  - Deletions create empty space (ghost records)\n  - Out-of-order inserts\n\nSymptoms:\n  - More pages read than necessary\n  - Larger index size than data size\n  - Slower range scans\n\nFix:\n  -- PostgreSQL: Rebuild\n  REINDEX INDEX idx_name;\n\n  -- MySQL: Optimize\n  OPTIMIZE TABLE table_name;\n\n  -- SQL Server: Rebuild/Reorganize\n  ALTER INDEX idx_name REBUILD;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: How does the DBMS decide between index scan and full table scan?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimizer compares two costs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index scan cost:"
        }), " Tree traversal (height x random I/O cost) + leaf page reads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full scan cost:"
        }), " Total pages x sequential I/O cost"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Break-even point:"
      }), " When index would access > 5-25% of total pages (varies by DBMS)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What is an index skip scan?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An optimization that allows using a composite index even when the leftmost column is not filtered."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Index on (gender, salary)\n-- Without skip scan, this query cannot use the index efficiently:\nSELECT * FROM employees WHERE salary > 100000;\n\n-- With skip scan (PostgreSQL, Oracle):\n-- The DBMS internally iterates over distinct gender values ('M', 'F')\n-- and does: WHERE gender = 'M' AND salary > 100000\n--        UNION WHERE gender = 'F' AND salary > 100000\n-- Effective if few distinct values in the leading column\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1222-hash-index-dry-run----extendable-hashing-with-collision-resolution",
      children: "12.22 Hash Index Dry Run -- Extendable Hashing with Collision Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Setup: bucket size = 2 keys, global depth d = 1\n\nInsert 4 (binary: 100):\n  h(4) = last d=1 bits = 0 -> directory[0]\n  Bucket at dir[0]: [] -> insert -> [4]\n  Directory: [0->B0: [4], 1->B1: []]\n\nInsert 12 (binary: 1100):\n  h(12) = 0 -> directory[0]\n  Bucket B0: [4] -> insert -> [4, 12]\n\nInsert 8 (binary: 1000):\n  h(8) = 0 -> directory[0]\n  Bucket B0: [4, 12] -> full!\n  local depth of B0 = 1 = global depth -> double directory\n  d = 2\n  Directory: [00, 01, 10, 11]\n  Need d=3: triple collision on bits 00\n  Double directory again to d=3:\n  Directory: [000, 001, 010, 011, 100, 101, 110, 111]\n  Now split B0 using last 3 bits:\n  4 = 100 -> last 3 = 100\n  12 = 1100 -> last 3 = 100\n  8 = 1000 -> last 3 = 000\n\n  B00 (local depth=3): [8] (last 3 = 000)\n  B01 (local depth=3): [4, 12] (last 3 = 100)\n\n  Directory entries:\n  000 -> B00 (has 8)\n  001 -> B1 (empty)\n  010 -> B1\n  011 -> B1\n  100 -> B01 (has 4, 12)\n  101 -> B1\n  110 -> B1\n  111 -> B1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.1: B+Tree Insertion Trace with Split Propagation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insert keys 1, 3, 5, 7, 9, 2, 4 into a B+Tree with leaf capacity = 2 and internal capacity = 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Key | Action                          | Tree\n1    | 1   | Insert in root leaf              | [1]\n2    | 3   | Insert sorted                    | [1, 3]\n3    | 5   | Leaf full -> split!              | Parent: [3]\n     |     | L:[1] R:[3,5] promote 3          |       /    \\\n     |     |                                   |    [1]  [3,5]\n4    | 7   | 7 > 3 -> right leaf               | [3]\n     |     | Insert in right leaf              |  /    \\\n     |     |                                   | [1]  [3,5,7]\n5    | 9   | 9 > 3 -> right leaf full -> split |   [3, 7]\n     |     | R leaf: L:[3,5] R:[7,9] prom 7   |  /   |   \\\n     |     | Parent has room for 7             | [1] [3,5] [7,9]\n6    | 2   | 2 < 3 -> left leaf                |   [3, 7]\n     |     | Insert sorted in left leaf        |  /   |   \\\n     |     |                                   | [1,2][3,5][7,9]\n7    | 4   | 4 > 3 -> middle leaf              |   [3, 7]\n     |     | Middle full -> split!             |  /   |   \\\n     |     | L:[3,4] R:[5] prom 5 to parent   | [1,2][3,4][5] [7,9]\n     |     | Parent full -> split parent!      |    [3, 5, 7]\n     |     | New root: [5]                     |      [5]\n     |     | L child: [3], R child: [7]        |     /    \\\n     |     |                                   |   [3]    [7]\n     |     |                                   |  / | \\   / | \\\n     |     |                                   |[1,2][3,4][5][7,9]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.2: Index Selection for an E-Commerce App"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE orders (\n    order_id BIGINT PRIMARY KEY,\n    customer_id INTEGER NOT NULL,\n    order_date TIMESTAMP NOT NULL,\n    status VARCHAR(20),\n    total_amount DECIMAL(12,2),\n    shipping_zip VARCHAR(10)\n);\n\n-- Query pattern 1: Customer's recent orders\nCREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date DESC);\n\n-- Query pattern 2: Orders by status for fulfillment\nCREATE INDEX idx_orders_pending ON orders(order_date, order_id)\nWHERE status IN ('pending', 'processing');\n\n-- Query pattern 3: Admin search by zip code\nCREATE INDEX idx_orders_zip ON orders(shipping_zip);\n\n-- Query pattern 4: Reporting daily totals\n-- Consider a materialized view instead of indexes for aggregates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.3: Analyzing Index Performance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Before index: Full table scan\nEXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;\n-- Seq Scan on orders (cost=0.00..17340.00 rows=1 width=120)\n-- Actual time: 85.324..85.326 rows=5 loops=1\n\n-- After index:\nCREATE INDEX idx_orders_customer ON orders(customer_id);\nEXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;\n-- Index Scan using idx_orders_customer on orders (cost=0.43..8.45 rows=5 width=120)\n-- Actual time: 0.035..0.058 rows=5 loops=1\n-- Improvement: 85ms to 0.05ms (1700x faster)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1212-typescript-b-tree-index-simulator",
      children: "12.12 TypeScript B+ Tree Index Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code implements a minimal B+ Tree index with search, insert, and range scan capabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// B+ Tree Index Simulator — TypeScript\n// ============================================================\n\nclass BPlusTreeNode {\n  keys: number[] = [];\n  children: BPlusTreeNode[] = [];\n  leaf = false;\n  next?: BPlusTreeNode; // For leaf nodes: pointer to next sibling\n  values?: number[];    // For leaf nodes: record IDs\n\n  constructor(order: number) { this.order = order; }\n  order: number;\n}\n\nclass BPlusTree {\n  private root: BPlusTreeNode;\n  private order: number;\n\n  constructor(order = 4) {\n    this.order = order;\n    this.root = new BPlusTreeNode(order);\n    this.root.leaf = true;\n    this.root.values = [];\n  }\n\n  // Search for a key and return value\n  search(key: number): number | undefined {\n    let node = this.root;\n    while (!node.leaf) {\n      let i = 0;\n      while (i < node.keys.length && key >= node.keys[i]) i++;\n      node = node.children[i];\n    }\n    const idx = node.keys.indexOf(key);\n    return idx >= 0 ? node.values![idx] : undefined;\n  }\n\n  // Insert a key-value pair\n  insert(key: number, value: number): void {\n    const result = this.insertRecursive(this.root, key, value);\n    if (result) {\n      // Root was split — create new root\n      const newRoot = new BPlusTreeNode(this.order);\n      newRoot.keys = [result.key];\n      newRoot.children = [this.root, result.right];\n      newRoot.leaf = false;\n      this.root = newRoot;\n    }\n  }\n\n  private insertRecursive(node: BPlusTreeNode, key: number, value: number): { key: number; right: BPlusTreeNode } | null {\n    if (node.leaf) {\n      // Insert into leaf\n      const idx = node.keys.findIndex(k => k > key);\n      const pos = idx >= 0 ? idx : node.keys.length;\n      node.keys.splice(pos, 0, key);\n      node.values!.splice(pos, 0, value);\n      // Split if full\n      if (node.keys.length > this.order - 1) return this.splitLeaf(node);\n      return null;\n    }\n\n    // Internal node — find child\n    let i = 0;\n    while (i < node.keys.length && key >= node.keys[i]) i++;\n    const result = this.insertRecursive(node.children[i], key, value);\n    if (result) {\n      // Child was split — insert separator key\n      const idx = node.keys.findIndex(k => k > result.key);\n      const pos = idx >= 0 ? idx : node.keys.length;\n      node.keys.splice(pos, 0, result.key);\n      node.children.splice(pos + 1, 0, result.right);\n      if (node.keys.length > this.order - 1) return this.splitInternal(node);\n    }\n    return null;\n  }\n\n  private splitLeaf(node: BPlusTreeNode): { key: number; right: BPlusTreeNode } {\n    const mid = Math.floor(node.keys.length / 2);\n    const right = new BPlusTreeNode(this.order);\n    right.leaf = true;\n    right.keys = node.keys.splice(mid);\n    right.values = node.values!.splice(mid);\n    right.next = node.next;\n    node.next = right;\n    return { key: right.keys[0], right };\n  }\n\n  private splitInternal(node: BPlusTreeNode): { key: number; right: BPlusTreeNode } {\n    const mid = Math.floor(node.keys.length / 2);\n    const key = node.keys[mid];\n    const right = new BPlusTreeNode(this.order);\n    right.leaf = false;\n    right.keys = node.keys.splice(mid + 1);\n    right.children = node.children.splice(mid + 1);\n    node.keys.pop(); // Remove the promoted key\n    return { key, right };\n  }\n\n  // Range scan: find all keys in [low, high]\n  rangeScan(low: number, high: number): Array<{ key: number; value: number }> {\n    const result: Array<{ key: number; value: number }> = [];\n    let node = this.root;\n    // Navigate to starting leaf\n    while (!node.leaf) {\n      let i = 0;\n      while (i < node.keys.length && low >= node.keys[i]) i++;\n      node = node.children[i];\n    }\n    // Scan leaf nodes\n    while (node) {\n      for (let i = 0; i < node.keys.length; i++) {\n        if (node.keys[i] > high) return result;\n        if (node.keys[i] >= low) result.push({ key: node.keys[i], value: node.values![i] });\n      }\n      node = node.next!;\n    }\n    return result;\n  }\n\n  print(): void {\n    console.log('B+ Tree Structure (order=' + this.order + '):');\n    const queue: { node: BPlusTreeNode; depth: number }[] = [{ node: this.root, depth: 0 }];\n    let currentDepth = 0;\n    let line = 'Depth 0: ';\n    while (queue.length > 0) {\n      const { node, depth } = queue.shift()!;\n      if (depth > currentDepth) {\n        console.log(line);\n        currentDepth = depth;\n        line = 'Depth ' + depth + ': ';\n      }\n      line += '[' + node.keys.join(',') + '] ';\n      if (!node.leaf) {\n        for (const child of node.children) queue.push({ node: child, depth: depth + 1 });\n      }\n    }\n    console.log(line);\n  }\n}\n\n// Demo\nconst tree = new BPlusTree(3);\nconst values = [10, 20, 5, 6, 12, 30, 7, 17];\nvalues.forEach((v, i) => tree.insert(v, i));\ntree.print();\nconsole.log('\\nSearch for 12: ' + (tree.search(12) !== undefined ? 'Found' : 'Not found'));\nconsole.log('Range scan [5, 15]: ' + JSON.stringify(tree.rangeScan(5, 15)));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Index Types Comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Index Types\"\n        B[B+ Tree Index<br/>O(log n) search<br/>Range scans efficient<br/>Ordered output] --> U[Use: General purpose<br/>Primary/Unique keys<br/>Range queries]\n        H[Hash Index<br/>O(1) lookup<br/>No range scans<br/>Unordered output] --> U2[Use: Equality lookups<br/>Exact match queries<br/>In-memory caches]\n        G[GiST/SP-GiST<br/>O(log n)<br/>Geometric search<br/>Custom operators] --> U3[Use: Geospatial data<br/>Full-text search<br/>Network addresses]\n        F[Full-Text Index<br/>Inverted file<br/>Token-based<br/>Ranked results] --> U4[Use: Document search<br/>Text mining<br/>Search engine]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main advantage of a B+ Tree over a B-Tree is:\na) Faster point lookups\nb) All keys are stored in leaves, enabling efficient range scans\nc) Less memory usage\nd) Simpler implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A hash index is most efficient for:\na) Range queries (BETWEEN, >, <)\nb) Equality queries (=)\nc) Pattern matching queries (LIKE)\nd) ORDER BY queries"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A composite index on (a, b, c) can be used for:\na) All queries involving any of a, b, c\nb) Queries using a, or a and b, or a and b and c\nc) Only queries using all three columns\nd) Only the first column (a)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The fill factor of an index affects:\na) Query results\nb) How much empty space is left in pages for future inserts\nc) The number of columns indexed\nd) The type of index"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index the WHERE clause columns first"
        }), " -- columns in WHERE, JOIN, and ORDER BY are the highest priority."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composite index column order matters enormously"
        }), " -- put high-selectivity columns first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Don't over-index write-heavy tables"
        }), " -- every index adds overhead to INSERT, UPDATE, DELETE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clustered indexes are not always better"
        }), " -- heap tables with non-clustered indexes suit write-heavy workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use partial indexes for active/passive data patterns"
        }), " -- if most queries touch WHERE is_active = TRUE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor unused indexes"
        }), " -- indexes never used consume write overhead and storage with zero benefit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fill factor tuning"
        }), " -- for tables with many inserts, lower fill factor (70-80%) reduces page splits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Covering indexes eliminate table access"
        }), " -- the single biggest query optimization for critical queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.1:"
        }), " Indexes are auxiliary data structures that speed up data retrieval at the cost of slower writes and additional storage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.2:"
        }), " Ordered indexes (B-Tree/B+Tree) support range queries; hash indexes provide O(1) equality lookups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.3:"
        }), " Dense indexes have one entry per row (larger, faster); sparse indexes have one entry per block (smaller, slower)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.4:"
        }), " Clustered indexes determine physical data order (one per table); non-clustered indexes store pointers to data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.5:"
        }), " B-Trees store data in all nodes; B+Trees store data only in linked leaf nodes for efficient range scans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.6:"
        }), " B-Trees and B+Trees both offer O(log_m n) search/insert/delete where m is the fan-out (typically 200-500)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.7:"
        }), " B+Tree higher fan-out (no data in internal nodes) means shorter trees and fewer I/Os than B-Tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.8:"
        }), " ISAM is a static index that requires periodic rebuild; B+Tree self-balances automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.9:"
        }), " Hash indexes provide O(1) equality lookups but cannot support range queries or ORDER BY."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.10:"
        }), " Extendable hashing uses a directory that doubles on overflow; linear hashing splits buckets round-robin."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.11:"
        }), " Bitmap indexes use bit arrays per distinct value -- ideal for low-cardinality columns in data warehouses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.12:"
        }), " Functional indexes store expression results like LOWER(email) or JSON extraction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.13:"
        }), " Composite (multi-column) indexes follow the leftmost prefix rule -- high-selectivity columns first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.14:"
        }), " A covering index includes all query columns, enabling index-only scans and eliminating table access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.15:"
        }), " The leftmost prefix rule: composite index (A,B,C) helps queries on A, (A,B), and (A,B,C) but not B alone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "12.16:"
        }), " Index selection should be driven by actual query patterns and performance measurements, not intuition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lookup Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supports Range?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B-Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose, ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (excellent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database indexes, range scans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only/append workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash (static)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality lookups only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash (extendable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing key-value sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact (low card)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse dimensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset-of-rows queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression-based lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-column WHERE"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clustered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Clustered (Secondary)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches index order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent of data order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Count per table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many (up to hundreds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (sequential I/O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (random I/O per row)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inserts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause page splits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Covering query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always (leaf = data row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if all columns in index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additional (index structure only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B+Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bitmap Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equality search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (low card)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (AND/OR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log_m n + k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ORDER BY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (index order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (index order)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (composite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (bitwise)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (composite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact (low card)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (B-link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Height (10^8 keys)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3-4 levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4-5 levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL/PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis/MemSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle DW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiredTiger/PostgreSQL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applied In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B+Tree on FK columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All multi-table queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerates JOIN operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Index (status, date)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast filtering by status then date range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial Index (WHERE active=TRUE)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User management systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only index active users for login queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expression Index (LOWER(email))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case-insensitive email login lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup tables, cache keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest option for simple key-value lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitmap Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse fact tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient queries on dimension foreign keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Covering Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-read OLTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids accessing the table entirely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extendable Hashing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic hash tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows without full rebuild"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B-Tree with prefix compression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB WiredTiger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces storage for compound indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The search complexity of a B+ tree is:\na) O(1)\nb) O(log_m n)\nc) O(n)\nd) O(n log n)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which index type does NOT support range queries?\na) B+Tree\nb) Hash\nc) Bitmap\nd) Composite B+Tree"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A clustered index means:\na) Multiple indexes are stored together\nb) The table data is physically ordered by the index key\nc) The index stores a pointer to the data\nd) The index covers all columns"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many clustered indexes can a table have?\na) Zero or one\nb) Up to two\nc) As many as needed\nd) At least one"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most important factor when designing a composite index is:\na) Index name\nb) Column order (high-selectivity first)\nc) Number of columns (at least 3)\nd) Data type of the first column"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A partial index is useful when:\na) Queries frequently filter on a subset of rows\nb) The table is very small\nc) Every column needs an index\nd) The database is read-only"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which index type is most space-efficient for low-cardinality columns?\na) B+Tree\nb) Hash\nc) Bitmap\nd) Functional"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A covering index is one that:\na) Covers all tables in the database\nb) Contains all columns needed by a query, eliminating table access\nc) Is clustered\nd) Includes every column"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a B+Tree, internal nodes contain:\na) Data pointers only\nb) Routing keys only\nc) Both keys and data\nd) No keys, only pointers"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does extendable hashing do when a bucket overflows?\na) Doubles the entire hash table\nb) Splits only the overflowing bucket using a directory\nc) Uses chaining without splitting\nd) Rebuilds the entire index"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The leftmost prefix rule states that:\na) The first column of a composite index is always optional\nb) The index can be used starting from any column\nc) The index can be used only for queries that filter on a prefix of indexed columns\nd) Only the leftmost column matters"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fill factor controls:\na) How many rows are indexed\nb) How full each B+Tree page is before splitting\nc) The key size\nd) The hash function complexity"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-a, 5-b, 6-a, 7-c, 8-b, 9-b, 10-b, 11-c, 12-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indexes are auxiliary structures that accelerate data retrieval at the cost of write overhead and storage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B-Trees store data pointers in all nodes; B+Trees store data only in linked leaf nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B+Tree is the dominant index structure, providing O(log_m n) search/insert/delete with high fan-out (200-500)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clustered indexes physically sort data (one per table); non-clustered indexes store pointers to data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash indexes provide O(1) equality lookups but cannot support range queries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composite index column order matters: equality columns before range, high-selectivity first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The leftmost prefix rule determines which queries can use a composite index."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Covering indexes include all query columns, enabling index-only scans."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bitmap indexes excel at low-cardinality columns using fast bitwise operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial and functional indexes optimize specific query patterns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extendable hashing doubles directories on overflow; linear hashing splits round-robin."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real systems: MySQL InnoDB uses B+Tree with clustered PK; PostgreSQL uses heap + B-Tree; MongoDB WiredTiger uses B-Tree with prefix compression."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between a clustered and non-clustered index. What are the trade-offs?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why can B+Tree indexes support range queries (WHERE id BETWEEN 10 AND 100) but hash indexes cannot?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given an INDEX on (state, city), which of the following queries can use the index effectively?\na) WHERE state = 'CA' AND city = 'Los Angeles'\nb) WHERE city = 'Los Angeles'\nc) WHERE state = 'CA'\nd) WHERE state = 'CA' AND population > 100000"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a covering index? How does it improve query performance?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between a dense index and a sparse index? When would you use each?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Insert keys 5, 15, 25, 35, 45, 55 into a B+Tree with leaf capacity = 2 and internal capacity = 2. Show the tree after each insertion, including all splits."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the composite index (department_id, hire_date, salary):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which queries can use all three columns efficiently?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which queries can use only two columns?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which queries cannot use the index effectively?\nExplain the column order matters principle with concrete examples."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You have a table employees(emp_id, name, department, salary, hire_date). The most common query is:\nSELECT name, salary FROM employees\nWHERE department = 'Engineering' AND hire_date > '2025-01-01'\nORDER BY salary DESC;\nDesign an optimal index strategy. Justify your choice."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a bitmap index scan? In PostgreSQL, why might the optimizer choose a bitmap scan over an index scan?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trace a B-Tree insert of keys 10, 20, 30, 40, 50, 60, 70 into an empty B-Tree of order 5 (max 4 keys per node). Show each step and all splits."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given a B+Tree with page size 8 KB, key size 8 bytes, pointer size 6 bytes, calculate:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maximum keys per internal node"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tree height for 10M keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Number of I/Os for a point lookup"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design an index strategy for a logging table that receives 10,000 INSERTs per second:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Queries: Find all errors in the last hour, Count warnings per day for the last month"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Constraints: Minimal impact on write throughput"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider: Partial indexes, time-based partitioning, B-Tree vs. BRIN indexes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For a product catalog with categories (~100 distinct values), prices (continuously varying), and active status (boolean):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write queries that filter by category, price range, and status"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Design composite indexes for each query pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain why you might also use partial indexes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the B-Tree variation factor: a typical B+Tree internal node might hold 500 keys (8-byte key + 8-byte pointer = 16 bytes, 8KB page). Calculate how many levels are needed for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1 million records"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1 billion records"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1 trillion records\nWhat does this tell you about the scalability of B+Tree indexes?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an extendable hash index in Python with:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bucket capacity of 3 keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dynamic directory doubling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Insert, search, and delete operations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Print the directory state after each insert"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare and contrast ISAM with B+Tree indexes. Under what workload would ISAM outperform B+Tree? When would it fail?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For a table with 100M rows and 5 B+Tree indexes, calculate the additional I/O cost per INSERT. Assume tree height = 4 for each index."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain how MySQL InnoDB's secondary index lookup works step by step. Why does a large PRIMARY KEY (e.g., UUID) slow down all secondary indexes?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given a workload of 80% reads and 20% writes on a 50M row table with 3 indexes:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recommend a fill factor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain how fill factor affects read vs write performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Describe the trade-off between lower and higher fill factors"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When does the query optimizer choose a full table scan over an index scan? List at least 5 conditions and explain the cost-based decision process."
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