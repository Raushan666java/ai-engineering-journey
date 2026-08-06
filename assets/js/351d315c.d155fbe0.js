"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90300],{

/***/ 63551
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_04_database_foundations_md_351_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-04-database-foundations-md-351.json
const site_docs_courses_system_design_04_database_foundations_md_351_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/04-database-foundations","title":"Chapter 4: Database Foundations: Replication and Indexing","description":"Previous 05 Partitioning Sharding","source":"@site/docs/courses/system-design/04-database-foundations.md","sourceDirName":"courses/system-design","slug":"/system-design/04-database-foundations","permalink":"/ai-engineering-journey/system-design/04-database-foundations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-database-foundations","slug":"/system-design/04-database-foundations","title":"Chapter 4: Database Foundations: Replication and Indexing","sidebar_label":"Chapter 4: Database Foundations: Replication and Indexing","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Caching Strategies and Patterns","permalink":"/ai-engineering-journey/system-design/03-caching"},"next":{"title":"Chapter 5: Data Partitioning and Sharding","permalink":"/ai-engineering-journey/system-design/05-partitioning-sharding"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/04-database-foundations.md


const frontMatter = {
	id: '04-database-foundations',
	slug: '/system-design/04-database-foundations',
	title: 'Chapter 4: Database Foundations: Replication and Indexing',
	sidebar_label: 'Chapter 4: Database Foundations: Replication and Indexing',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Database Foundations: Replication and Indexing';

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
  "value": "B-Tree Internals",
  "id": "b-tree-internals",
  "level": 3
}, {
  "value": "Structure",
  "id": "structure",
  "level": 4
}, {
  "value": "Page Organization",
  "id": "page-organization",
  "level": 4
}, {
  "value": "B-Tree Operations",
  "id": "b-tree-operations",
  "level": 4
}, {
  "value": "LSM-Tree Internals",
  "id": "lsm-tree-internals",
  "level": 3
}, {
  "value": "Core Components",
  "id": "core-components",
  "level": 4
}, {
  "value": "Compaction Strategies",
  "id": "compaction-strategies",
  "level": 4
}, {
  "value": "Compaction Comparison",
  "id": "compaction-comparison",
  "level": 4
}, {
  "value": "B-Tree vs LSM-Tree",
  "id": "b-tree-vs-lsm-tree",
  "level": 3
}, {
  "value": "Single-Leader Replication",
  "id": "single-leader-replication",
  "level": 3
}, {
  "value": "Setup",
  "id": "setup",
  "level": 4
}, {
  "value": "Failover",
  "id": "failover",
  "level": 4
}, {
  "value": "Synchronous vs Asynchronous Replication",
  "id": "synchronous-vs-asynchronous-replication",
  "level": 4
}, {
  "value": "Multi-Leader Replication",
  "id": "multi-leader-replication",
  "level": 3
}, {
  "value": "Conflict Resolution",
  "id": "conflict-resolution",
  "level": 4
}, {
  "value": "Leaderless Replication",
  "id": "leaderless-replication",
  "level": 3
}, {
  "value": "Read Repair",
  "id": "read-repair",
  "level": 4
}, {
  "value": "Hinted Handoff",
  "id": "hinted-handoff",
  "level": 4
}, {
  "value": "Replication Lag Anomalies",
  "id": "replication-lag-anomalies",
  "level": 3
}, {
  "value": "Read-Your-Writes (RYW) Consistency",
  "id": "read-your-writes-ryw-consistency",
  "level": 4
}, {
  "value": "Monotonic Reads",
  "id": "monotonic-reads",
  "level": 4
}, {
  "value": "Consistent Prefix Reads",
  "id": "consistent-prefix-reads",
  "level": 4
}, {
  "value": "Conflict Resolution",
  "id": "conflict-resolution-1",
  "level": 3
}, {
  "value": "Last-Write-Wins (LWW)",
  "id": "last-write-wins-lww",
  "level": 4
}, {
  "value": "Version Vectors",
  "id": "version-vectors",
  "level": 4
}, {
  "value": "CRDTs",
  "id": "crdts",
  "level": 4
}, {
  "value": "Transactions: ACID vs BASE",
  "id": "transactions-acid-vs-base",
  "level": 3
}, {
  "value": "ACID (SQL Databases)",
  "id": "acid-sql-databases",
  "level": 4
}, {
  "value": "Isolation Levels (weakest to strongest)",
  "id": "isolation-levels-weakest-to-strongest",
  "level": 4
}, {
  "value": "BASE (NoSQL Databases)",
  "id": "base-nosql-databases",
  "level": 4
}, {
  "value": "SQL vs NoSQL",
  "id": "sql-vs-nosql",
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
  "value": "Example 1: B-Tree vs LSM-Tree for a Time-Series Database",
  "id": "example-1-b-tree-vs-lsm-tree-for-a-time-series-database",
  "level": 3
}, {
  "value": "Example 2: Configuring Quorum for a Dynamo-Style Key-Value Store",
  "id": "example-2-configuring-quorum-for-a-dynamo-style-key-value-store",
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
  "value": "Implementation: Database Design and Indexing",
  "id": "implementation-database-design-and-indexing",
  "level": 3
}, {
  "value": "TypeScript: B-Tree Index (Simplified Insert and Search)",
  "id": "typescript-b-tree-index-simplified-insert-and-search",
  "level": 3
}, {
  "value": "TypeScript: Connection Pool Manager",
  "id": "typescript-connection-pool-manager",
  "level": 3
}, {
  "value": "TypeScript: Isolation Level Simulator",
  "id": "typescript-isolation-level-simulator",
  "level": 3
}, {
  "value": "SQL vs NoSQL Decision Tree",
  "id": "sql-vs-nosql-decision-tree",
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
        id: "chapter-4-database-foundations-replication-and-indexing",
        children: "Chapter 4: Database Foundations: Replication and Indexing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/03-caching",
          children: "03 Caching"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/05-partitioning-sharding",
          children: "05 Partitioning Sharding"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze B-Tree internals including branching factor, page structure, and search/insert/delete algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare LSM-Tree compaction strategies and their impact on read/write amplification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model single-leader, multi-leader, and leaderless replication topologies with failure scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate quorum sizes for leaderless replication and predict consistency behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve data conflicts using Last-Write-Wins, Version Vectors, and CRDTs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish ACID and BASE consistency models with isolation level implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze real-world database architectures: Spanner, DynamoDB, Facebook TAO"
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
        href: "../../assets/images/lessons/system-design/04-database-foundations/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/04-database-foundations/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/04-database-foundations/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/04-database-foundations/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/04-database-foundations/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/04-database-foundations/visual-explanation.png",
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
      }), " | B-Tree, LSM-Tree, replication, consistency, transactions |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts"
      }), " | Core topics covered in Chapter 4: Database Foundations: Replication and Indexing |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Skills"
      }), " | Storage engine selection, replication topology, conflict resolution |\n| ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "B-Tree, LSM-Tree, replication topologies, consistency models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree (read-optimized) vs LSM-Tree (write-optimized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-leader, multi-leader, leaderless (Dynamo-style)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID vs BASE, isolation levels, CAP theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict Resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LWW, Version Vectors, CRDTs ? G-Counter, OR-Set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Spanner, Amazon DynamoDB, Facebook TAO"
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/04-database-foundations.png",
        alt: "Database Types Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-tree-internals",
      children: "B-Tree Internals"
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
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nThe B-Tree is the most widely used data structure for database indexes. It is the default storage engine for MySQL (InnoDB), PostgreSQL, Oracle, and SQL Server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A B-Tree is a self-balancing tree data structure that maintains sorted data and allows O(log n) search, sequential access, insertions, and deletions. The \"B\" stands for \"Bayer\" (co-inventor Rudolph Bayer, 1972), not \"binary\" or \"balanced.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                          [50, 100]\n                         /    |    \\\n                   [25, 35]  [75]  [150, 200]\n                  /   |   |   |    /   |    \\\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each node contains up to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k"
      }), " keys and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k+1"
      }), " pointers. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "branching factor"
      }), " (also called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "order"
      }), ") is the maximum number of child pointers per node."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$branching_factor = \\frac{page_size}{key_size + pointer_size}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a typical page size of 16 KB, key size of 8 bytes, pointer size of 8 bytes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$branching_factor = \\frac{16384}{8 + 8} \\approx 1024$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With a branching factor of 1024, a tree storing 1 billion records requires:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\log_{1024}(10^9) \\approx \\frac{9}{3.01} \\approx 3 \\textrm{ levels}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This means any lookup touches only 3-4 nodes, making B-Trees extremely disk-efficient."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "page-organization",
      children: "Page Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["B-Tree nodes are stored in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pages"
      }), " (typically 4 KB, 8 KB, or 16 KB). A page is the smallest unit of disk I/O. The page structure:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page header:"
        }), " Metadata (page type, free space pointer, checksum, LSN for crash recovery)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cell pointer array:"
        }), " Array of (offset, key) pairs sorted by key"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cell data:"
        }), " Actual key + value pairs (or key + child page pointer for internal nodes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---------------------------------+\n¦ Page Header (24 bytes)          ¦\n¦   - page_type, free_start       ¦\n¦   - num_cells, checksum, LSN    ¦\n+---------------------------------¦\n¦ Cell pointer array (grows up)   ¦\n¦ [0]: offset=1568, key=42       ¦\n¦ [1]: offset=1824, key=78       ¦\n¦ [2]: offset=2048, key=105      ¦\n+---------------------------------¦\n¦                                 ¦\n¦   Unused space                  ¦\n¦                                 ¦\n+---------------------------------¦\n¦ Cell data (grows down)          ¦\n¦ Key=42, Value/ptr=<data>        ¦\n¦ Key=78, Value/ptr=<data>        ¦\n¦ Key=105, Value/ptr=<data>       ¦\n+---------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-tree-operations",
      children: "B-Tree Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Start at root page\n2. Binary search within the page for the key (or the correct child pointer range)\n3. If found at leaf: return the value\n4. If not found: follow the appropriate child pointer and recurse\n5. Repeat until leaf is reached\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def btree_search(node, key):\n    i = bisect_left(node.keys, key)\n    if i < len(node.keys) and node.keys[i] == key:\n        return node.values[i]          # found\n    if node.is_leaf:\n        return None                    # not found\n    return btree_search(node.children[i], key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Search for the key's position in the tree\n2. Insert into the leaf page\n3. If the leaf page overflows (exceeds page size):\n   a. Split the page into two pages (left and right half)\n   b. Promote the middle key to the parent\n   c. If the parent overflows, split recursively\n4. If root overflows: create a new root, increasing tree height\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Search for the key\n2. Remove from leaf page\n3. If the leaf page underflows (less than half full):\n   a. Try to rebalance with a sibling page (borrow a key)\n   b. If rebalance is not possible: merge with sibling\n   c. Merge propagates up to the parent\n4. If root has only one key after merge: shrink tree height\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lsm-tree-internals",
      children: "LSM-Tree Internals"
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
      children: "The Log-Structured Merge-Tree (LSM-Tree), introduced by Patrick O'Neil in 1996, is designed for write-heavy workloads. It is the storage engine for LevelDB, RocksDB, Apache Cassandra, ScyllaDB, and Bigtable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "core-components",
      children: "Core Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MemTable:"
      }), " An in-memory sorted data structure (typically a skiplist or red-black tree). All writes go directly to the MemTable, which makes writes fast (sequential + in-memory)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SSTable (Sorted String Table):"
      }), " An immutable on-disk file containing sorted key-value pairs. When the MemTable reaches a threshold size, it is flushed to disk as an SSTable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MemTable (RAM, skiplist)\n    ¦\n    ¦ flushed when full (e.g., 64 MB)\n    ?\nSSTable 0  (L0, newest)\nSSTable 1  (L0)\nSSTable 2  (L0)\n    ¦\n    ¦ compacted in background\n    ?\nSSTable 3  (L1, merged, larger)\nSSTable 4  (L1)\n    ¦\n    ¦ compacted\n    ?\nSSTable 5  (L2, even larger)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bloom Filters:"
      }), " A probabilistic data structure that answers \"is key K definitely not in this SSTable?\" with no false negatives and configurable false positive rate. Before reading from an SSTable, check the bloom filter — if it says \"not present,\" skip the file entirely. This avoids expensive disk reads for keys that do not exist in cold SSTables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(false\\ positive) = (1 - e^{-kn/m})^k$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where m = number of bits, k = number of hash functions, n = number of inserted keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "compaction-strategies",
      children: "Compaction Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compaction is the background process of merging overlapping SSTables to reclaim space, remove deleted entries, and keep read performance predictable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Size-Tiered Compaction (STC):"
      }), " Used by Cassandra. When N SSTables of similar size exist in a level, they are merged into one larger SSTable in the next level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L0: [64MB] [64MB] [64MB] [64MB]   ? 4 sstables, trigger compaction\nL1: [256MB]                        ? merged result\nL1: [256MB] [256MB] [256MB] [256MB] ? trigger again\nL2: [1GB]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple, good write throughput (no read-before-write during compaction).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Space amplification (data exists in multiple levels simultaneously). Read amplification (must check many SSTables)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Leveled Compaction:"
      }), " Used by LevelDB, RocksDB. Each level has a fixed size multiplier (typically 10x). L0 is the exception — can have multiple overlapping SSTables flushed from MemTable. L1 and below are non-overlapping: each key range appears in exactly one SSTable per level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L0: [A-E] [C-G] [F-J]            ? overlapping ranges (from multiple flushes)\nL1: [A-D] [E-H] [I-L] [M-P]      ? non-overlapping\nL2: [A-F] [G-L] [M-R] [S-X] ...  ? non-overlapping, 10x larger\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Lower space amplification (no duplication across levels). Better read performance (fewer SSTables to check, binary search on level+file).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Higher write amplification (compaction reads a key from L1 and writes it to L2, even if the key is unchanged — \"write amplification\" overhead)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time-Windowed Compaction:"
      }), " Used for time-series data (Cassandra DTCS, now deprecated in favor of Unified Compaction). SSTables are grouped by time windows (e.g., daily). Only SSTables within the same time window are compacted together."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Good for time-series workloads where older data is rarely modified. No wasted compaction on old, immutable windows.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Does not handle non-time-series workloads well."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "compaction-comparison",
      children: "Compaction Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Amplification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Amplification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read Amplification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size-Tiered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2-4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-20x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy OLTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leveled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-20x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.1-2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-5x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write balanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time-Windowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5-3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-30x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time series"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-tree-vs-lsm-tree",
      children: "B-Tree vs LSM-Tree"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LSM-Tree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read speed (point lookup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (O(log n), ~3-4 page reads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (must check MemTable + bloom filter + L0 files + L1+ levels). Can be very slow if bloom filter false positive rate is high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read speed (range scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (sequential page scan in sorted order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (must merge from multiple SSTables to produce sorted output)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (random page writes, page splits, write-ahead log)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (sequential writes to WAL + in-memory MemTable append)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write amplification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4-10x (page splits + double-write to WAL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-30x for leveled compaction, ~2-5x for size-tiered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space amplification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.2-1.5x (page fill factor ~67% average)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5-4x (multiple SSTable generations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compaction overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (in-place updates in pages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Significant (background process runs constantly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (page-level locking, MVCC built in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires add-on (WAL-based, snapshots more complex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching effectiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (uses buffer pool; hot pages stay in memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (bloom filters and index blocks cached; data blocks less cache-friendly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL InnoDB, PostgreSQL, SQLite, Oracle, SQL Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LevelDB, RocksDB, Cassandra, HBase, Bigtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best workload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy, range scans, transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy, time-series, LSM-key-value stores"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The fundamental trade-off:"
      }), " B-Trees optimize for reads (in-place updates, compact storage, cache-friendly). LSM-Trees optimize for writes (sequential writes, amortized compaction). The B-Tree pays the write cost eagerly (page split on every insert); the LSM-Tree pays it lazily (compaction in background)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "single-leader-replication",
      children: "Single-Leader Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most common replication pattern. One node (the leader/primary/master) accepts writes. Other nodes (followers/replicas/slaves) apply the same data changes from the leader's replication log."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         +---------+\n         ¦  Leader  ¦   ? all writes here\n         +----------+\n              ¦\n     +--------+--------+\n     ¦        ¦        ¦\n     ?        ?        ?\n  +-----+ +-----+ +-----+\n  ¦ F1  ¦ ¦ F2  ¦ ¦ F3  ¦   ? read-only replicas\n  +-----+ +-----+ +-----+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snapshot the leader"
        }), " at a consistent point (e.g., FLUSH TABLES WITH READ LOCK in MySQL, or a WAL-based snapshot in PostgreSQL)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy the snapshot"
        }), " to the follower."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The follower connects"
        }), " to the leader and requests all changes since the snapshot (identified by log sequence number)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The follower continuously replicates"
        }), " new changes as they happen."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "failover",
      children: "Failover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the leader fails, one follower must be promoted to leader:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detect failure:"
        }), " Heartbeat timeout (e.g., no response in 10 seconds)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose a new leader:"
        }), " Typically the replica with the most recent log position (least data loss). Consensus via a coordination service (ZooKeeper, etcd) or a consensus algorithm (Raft, Paxos)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reconfigure system:"
        }), " Update DNS, connection pools, and client configurations to point to the new leader. Reconfigure all other replicas to follow the new leader."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failover risks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Split-brain:"
        }), " Two nodes both believe they are the leader. Both accept writes. Data diverges. Resolution requires fencing (e.g., using a lease or a third party to kill the old leader)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data loss:"
        }), " If a follower was behind the leader when the leader died, the promoted follower's data is incomplete. Clients may see data \"disappear\" if the new leader does not have the latest writes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "synchronous-vs-asynchronous-replication",
      children: "Synchronous vs Asynchronous Replication"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Synchronous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Asynchronous"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write confirmation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leader waits for at least one follower to confirm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leader confirms immediately, replication happens after"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero data loss if the follower has acknowledged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible data loss if leader fails before replication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (must wait for network round-trip to follower)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (client-level latency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (if follower is down, write fails)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (leader writes independently of follower health)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial systems, strongly-consistent workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social feeds, analytics, any system tolerant of eventual consistency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semi-synchronous replication (compromise):"
      }), " Leader waits for one follower to acknowledge (not all). This guarantees at least one replica has the data, while keeping write latency bounded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-leader-replication",
      children: "Multi-Leader Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple nodes accept writes and replicate them to all other nodes. Each leader is also a follower for writes from other leaders."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+--------------+           +--------------+\n¦  Leader      ¦?---------?¦  Leader      ¦\n¦  (us-east-1) ¦     ¦     ¦  (eu-west-1) ¦\n+--------------+     ¦     +--------------+\n       ¦             ¦            ¦\n       ?             ¦            ?\n+--------------+     ¦     +--------------+\n¦  Follower     ¦    ¦     ¦  Follower     ¦\n+--------------+    ¦     +--------------+\n                    ¦\n+--------------+    ¦     +--------------+\n¦  Leader      ¦?--------?¦  Leader      ¦\n¦  (ap-southeast)¦        ¦  (sa-east-1) ¦\n+--------------+          +--------------+\n       ¦                        ¦\n       ?                        ?\n+--------------+          +--------------+\n¦  Follower     ¦         ¦  Follower     ¦\n+--------------+          +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-datacenter:"
        }), " Each datacenter has its own leader. Cross-datacenter traffic is asynchronous (replication happens asynchronously between leaders). Writes within a datacenter are fast (no cross-region coordination)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Offline-first applications:"
        }), " CouchDB and mobile-first databases. Each device is a \"leader\" that accepts writes locally. When connectivity is available, replication syncs changes to all devices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collaborative editing:"
        }), " Each collaborator's client is a leader. Edits are replicated to all participants."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The critical problem: write conflicts."
      }), " Two leaders may concurrently update the same record:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Leader A (London):  UPDATE product SET price = 10 WHERE id = 42\nLeader B (Tokyo):   UPDATE product SET price = 20 WHERE id = 42\n// Both succeed locally. When replicated, a conflict exists.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conflict-resolution",
      children: "Conflict Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last-Write-Wins (LWW):"
      }), " Each write is timestamped (by wall-clock time). The write with the latest timestamp wins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{value} = \\max_{timestamp}(value_1, value_2)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Simple. No additional infrastructure needed.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Clock skew is unavoidable (distributed clocks drift). Data loss — the losing write is silently discarded. Used by Cassandra's default conflict resolution (though Cassandra checks for equal timestamps and compares UUIDs as tiebreaker)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Vectors:"
      }), " Each node maintains a vector of version counters, one per replica:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node A: {A: 3, B: 2, C: 1}\nNode B: {A: 2, B: 4, C: 1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A conflict exists if neither vector dominates the other (i.e., vector A is not greater than or equal to B in every dimension, and vice versa). Resolution is deferred to the application or merge logic."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dotted Version Vectors:"
      }), " An optimization adding a per-event dot to reduce storage. Used in Riak. Each write gets a unique event ID, and the vector tracks the \"seen\" set of event IDs per replica."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRDTs (Conflict-free Replicated Data Types):"
      }), " Mathematical data types designed for automatic conflict resolution — conflicts are impossible by construction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leaderless-replication",
      children: "Leaderless Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamo-style replication (from Amazon's DynamoDB paper, 2007). There is no leader. Any replica can accept writes from any client."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     Client A                Client B\n        |                       |\n        ?                       ?\n  +---------+  +---------+  +---------+\n  ¦ Node 1  ¦  ¦ Node 2  ¦  ¦ Node 3  ¦\n  ¦  (N=3)  ¦  ¦  (N=3)  ¦  ¦  (N=3)  ¦\n  ¦ W=2 ok  ¦  ¦ W=2 ok  ¦  ¦ write   ¦\n  ¦ R=2 ok  ¦  ¦ R=2 ok  ¦  ¦ failed  ¦\n  +---------+  +---------+  +---------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key parameters:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N:"
        }), " Replication factor (number of replicas that store each piece of data)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "W:"
        }), " Write quorum — the minimum number of replicas that must acknowledge a write for it to be considered successful."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R:"
        }), " Read quorum — the minimum number of replicas that must respond to a read for it to be considered successful."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$W + R > N \\implies \\text{strong consistency}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because at least one node in the read quorum must overlap with the write quorum."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: N=3, W=2, R=2 ? strong consistency. N=3, W=1, R=1 ? eventual consistency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read-repair",
      children: "Read Repair"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a read finds that some replicas have stale data (their version vector is behind), the coordinating node updates the stale replicas with the latest value."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read request for key K:\n  1. Client sends read to all N replicas\n  2. Two replicas return version (A:3), one returns (A:2)\n  3. Client uses the latest version (A:3)\n  4. Client also sends (A:3) to the stale replica\n  5. Stale replica updates to (A:3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hinted-handoff",
      children: "Hinted Handoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When one replica is unavailable during a write, another node accepts the write \"on behalf\" and stores a hint: \"this data belongs to Node 3, deliver it when Node 3 is back.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write to key K (N=3):\n  1. Client sends to all 3 replicas\n  2. Node 1: ack (success)\n  3. Node 2: ack (success)\n  4. Node 3: timeout (down)\n  5. Node 2 accepts a hint: \"I'll hold this for Node 3\"\n  6. Later, Node 3 comes back online\n  7. Node 2 delivers the hinted write to Node 3\n  8. Node 3 acknowledges, hint is deleted\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "replication-lag-anomalies",
      children: "Replication Lag Anomalies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asynchronous replication introduces a window of inconsistency. Three common anomalies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "read-your-writes-ryw-consistency",
      children: "Read-Your-Writes (RYW) Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After a user writes data, they expect to see that data on subsequent reads. With async replication, a read from a follower that has not yet received the write will show stale data."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route reads for modified keys to the leader (read-after-write affinity)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use leader for reads within N seconds of write."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timestamp-based routing: client sends write timestamp, replica returns data if its replication has caught up to that timestamp."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "monotonic-reads",
      children: "Monotonic Reads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user reads from follower A (which has received the latest write), then reads from follower B (which has not). The user sees data \"go back in time.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route the same user consistently to the same replica (by user_id hash)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timestamp-based: each replica tracks its replication position; reject reads that would show stale data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "consistent-prefix-reads",
      children: "Consistent Prefix Reads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A user reads data in the wrong order. Example: a comment thread shows a reply before the original post because the post's write was replicated to one follower and the reply to another, and the reply arrived first."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write all related data to the same partition (hash by parent entity)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use total ordering (timestamp ordering + clock synchronization)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conflict-resolution-1",
      children: "Conflict Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "last-write-wins-lww",
      children: "Last-Write-Wins (LWW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each mutation is tagged with a timestamp. The value with the highest timestamp wins."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\"key\": \"product:42\", \"price\": 10, \"timestamp\": 1718192001}\n{\"key\": \"product:42\", \"price\": 20, \"timestamp\": 1718192002}  // wins\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Clock skew. If Node A's clock is 5 seconds behind Node B, writes from Node A always lose to writes from Node B, even if Node A writes later."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      }), " Use Lamport clocks (logical clocks) or a centralized timestamp authority (Google Spanner's TrueTime)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-vectors",
      children: "Version Vectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each replica maintains a counter for every replica in the system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# After Node A writes 3 times, Node B writes 0 times, Node C writes 0 times:\nversion_vector = {\"A\": 3, \"B\": 0, \"C\": 0}\n\n# After Node B writes 2 times:\nversion_vector = {\"A\": 3, \"B\": 2, \"C\": 0}\n\n# If A writes concurrently with B:\nv1 = {\"A\": 4, \"B\": 0, \"C\": 0}\nv2 = {\"A\": 0, \"B\": 3, \"C\": 0}\n# Neither dominates ? CONFLICT. Resolution required.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dominance check:"
      }), " v1 = v2 if every counter in v1 is = corresponding counter in v2. If neither dominates, the values are concurrent — conflict."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "crdts",
      children: "CRDTs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CRDTs are data types where concurrent operations commute. No conflict resolution is needed — the state always converges."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "G-Counter (Grow-only Counter):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Each node has its own counter entry in a vector.\nIncrement: node_i += 1\nMerge:  total = max(node_i) for all i\nQuery:  sum of all entries\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PN-Counter (Positive-Negative Counter):"
      }), " Two G-Counters: one for increments, one for decrements. The value is inc_count - dec_count."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "G-Set (Grow-only Set):"
      }), " Add-only. Merge is union."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OR-Set (Observed-Remove Set):"
      }), " A set that supports both add and remove without conflicts. Each element is tagged with a unique ID. An add creates a new tag. A remove only removes tags the removing node knows about."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ORSet:\n    def __init__(self):\n        self.elements = {}  # element ? set of tags\n\n    def add(self, element):\n        tag = uuid4()\n        self.elements.setdefault(element, set()).add(tag)\n\n    def remove(self, element):\n        if element in self.elements:\n            del self.elements[element]\n\n    def merge(self, other):\n        for elem, tags in other.elements.items():\n            self.elements.setdefault(elem, set()).update(tags)\n\n    def value(self):\n        return set(self.elements.keys())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactions-acid-vs-base",
      children: "Transactions: ACID vs BASE"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "acid-sql-databases",
      children: "ACID (SQL Databases)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All operations in a transaction succeed or none do"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead log (WAL): undo/redo records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The database is always in a valid state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints, triggers, referential integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent transactions do not interfere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PL, MVCC, OCC (see below)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committed data survives failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead log (WAL) flushed to persistent storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "isolation-levels-weakest-to-strongest",
      children: "Isolation Levels (weakest to strongest)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dirty Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-repeatable Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phantom Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Uncommitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Committed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVCC (each query sees a snapshot of committed data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatable Read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PL (shared locks on all read data until transaction ends)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serializable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PL + predicate locks, or MVCC + serializable snapshot isolation (SSI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Version Concurrency Control (MVCC):"
      }), " Each transaction sees a snapshot of the database as of a specific point in time. Writes create new versions of rows; reads see the appropriate version. PostgreSQL uses MVCC for Read Committed (default) and Serializable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2-Phase Locking (2PL):"
      }), " Transactions acquire locks on data as they read/write (Phase 1) and release all locks at commit (Phase 2). Prevents conflicts by making concurrent transactions wait."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimistic Concurrency Control (OCC):"
      }), " Transactions run without locks. At commit time, the database checks if there were conflicting writes. If so, the transaction aborts and retries. Best for low-contention workloads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "base-nosql-databases",
      children: "BASE (NoSQL Databases)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basically Available"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The system is available most of the time, even during partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Soft state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The system state may change over time even without input (due to eventual consistency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eventual consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given enough time, all replicas converge to the same value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BASE is not a formal model like ACID. It describes the consistency trade-offs NoSQL systems make to achieve availability and partition tolerance."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sql-vs-nosql",
      children: "SQL vs NoSQL"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL (Relational)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NoSQL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables with rows and columns (schema-on-write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document, key-value, wide-column, graph (schema-on-read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigid, enforced at write time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, enforced at read time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (optimized JOIN operations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-side joins (or denormalization)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID transactions across multiple rows/tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-document/row transactions (or no transactions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency (default in most SQL systems)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency (default in many NoSQL systems)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (or read replicas; horizontal sharding is possible but complex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (designed for sharding from day one)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (standardized, powerful)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific API (REST, CQL, Gremlin, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial systems, ERP, anything requiring joins and complex transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content management, user profiles, IoT, real-time analytics, caching"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NewSQL:"
      }), " A third category that attempts to provide SQL-level query capability with NoSQL-level horizontal scalability. Examples: Google Cloud Spanner, CockroachDB, YugabyteDB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-systems",
      children: "Real-World Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Spanner."
      }), " The first globally distributed, externally consistent database. Spanner uses TrueTime, a hardware-assisted time synchronization service built on GPS and atomic clocks, to provide external consistency (serializable isolation across all nodes globally)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zones:"
        }), " Each zone contains one leader and multiple replicas. Zones map to data centers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paxos groups:"
        }), " Each shard is replicated via Paxos across zones. Leader of each shard processes writes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TrueTime:"
        }), " Exposes a time interval ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[earliest, latest]"
        }), " for the current time. Spanner waits out the uncertainty interval (commit wait) to ensure linearizability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1 RDBMS:"
        }), " On top of Spanner for Google Ads (formerly AdWords) — a global SQL system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon DynamoDB."
      }), " Fully managed NoSQL key-value and document database based on the Dynamo paper. Uses leaderless replication with configurable N, W, R."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-sharding:"
        }), " DynamoDB partitions data by partition key. Each partition can hold up to 10 GB and 3,000 RCU / 1,000 WCU."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DAX (DynamoDB Accelerator):"
        }), " In-memory cache with microsecond latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global tables:"
        }), " Multi-leader replication across regions with last-writer-wins conflict resolution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transactions:"
        }), " Limited ACID transactions (within a single partition or across partitions with TransactWriteItems/TransactGetItems)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Facebook TAO."
      }), " Not a database in the traditional sense — a distributed cache layer that serves Facebook's social graph. As discussed in Chapter 3, TAO sits between application servers and MySQL, providing a graph-optimized API with strong read-after-write consistency across global regions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-b-tree-vs-lsm-tree-for-a-time-series-database",
      children: "Example 1: B-Tree vs LSM-Tree for a Time-Series Database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Design the storage layer for a metrics system that ingests 1M data points/second and supports range queries (e.g., \"CPU usage for server A between 14:00 and 15:00\")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write: 1M points/second, sequential by timestamp (append-mostly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read: Range scans over time windows. Read frequency much lower than write."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete: Bulk delete of data older than 90 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "B-Tree analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert is random page write — each new data point writes to a different position in the B-Tree. This causes many small random I/Os. Write amplification is high (page splits)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range scan on sorted timestamp is efficient (sequential page traversal)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete by range requires many page modifications (each leaf page must be modified)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LSM-Tree analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert is sequential (append to MemTable ? flush to SSTable). This matches the append-mostly workload perfectly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range scan requires merging multiple SSTables (because time ranges overlap across files). The more SSTables, the slower the scan."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete is a \"tombstone\" write (cheap). Compaction reclaims space later."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verdict:"
      }), " LSM-Tree (RocksDB or Cassandra) is the right choice. The sequential write pattern maps perfectly to LSM-Tree's strengths. The range-scan cost is acceptable because reads are infrequent. SSTable time-windowed compaction handles the 90-day retention cleanly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-configuring-quorum-for-a-dynamo-style-key-value-store",
      children: "Example 2: Configuring Quorum for a Dynamo-Style Key-Value Store"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A user-session store with 5 nodes. Sessions are read on every request. Write occurs when a user logs in or updates their profile (rare relative to reads). Must tolerate up to 2 simultaneous node failures without data loss or downtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N = 5 (replicate to all 5 nodes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W = 3 (write to 3, acknowledge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R = 3 (read from 3, consolidate)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Check:"
      }), " W + R = 6 > N = 5 ? strong consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure tolerance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If 2 nodes are down: write succeeds (W=3 needs 3/5, 3 remain up). Read succeeds (R=3 needs 3/5). Data is available."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If 3 nodes are down: write fails (W=3 needs 3/5, only 2 remain). Read fails. Service degrades."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization for read-heavy workload:"
      }), " Reduce R to 2, keep W at 3. W + R = 5 = N ? no longer strong consistency, but reads are faster (need only 2 responses). Trade: a very small window of stale reads is acceptable for session data."]
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
            children: "Core topic covered in Chapter 4: Database Foundations: Replication and Indexing"
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
            children: "Fundamental concept for Chapter 4: Database Foundations: Replication and Indexing"
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
            children: "Core topic in Chapter 4: Database Foundations: Replication and Indexing"
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
            children: "Essential concept for Chapter 4: Database Foundations: Replication and Indexing"
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
          }), " Which concept is most fundamental to the topic of Chapter 4"]
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
                  id: "implementation-database-design-and-indexing",
                  children: "Implementation: Database Design and Indexing"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface Index { type: \"btree\" | \"hash\" | \"gin\"; columns: string[]; unique: boolean; cardinality: number; }\nclass QueryPlanner { private indexes: Index[] = [];\n  addIndex(idx: Index): void { this.indexes.push(idx); }\n  plan(query: Record<string, any>, totalRows: number): { indexUsed: string; estimatedRows: number; accessType: string } {\n    let bestIdx: Index | null = null; let bestSelectivity = 0;\n    for (const idx of this.indexes) { const matched = idx.columns.filter(c => c in query).length / idx.columns.length; if (matched > bestSelectivity) { bestSelectivity = matched; bestIdx = idx; } }\n    if (!bestIdx || bestSelectivity === 0) return { indexUsed: \"none\", estimatedRows: totalRows, accessType: \"seq_scan\" };\n    const estimated = Math.round(totalRows / (bestIdx.cardinality || 1));\n    return { indexUsed: `${bestIdx.type}(${bestIdx.columns.join(\",\")})`, estimatedRows: estimated, accessType: estimated < totalRows * 0.5 ? \"index_scan\" : \"seq_scan\" }; }\n}\nclass BTree { private order: number; root: any = { keys: [], children: [] }; constructor(order: number) { this.order = order; }\n  insert(key: number): void { if (this.root.keys.length === 2 * this.order - 1) { const nr = { keys: [], children: [this.root] }; this.splitChild(nr, 0); this.root = nr; } this.insertNonFull(this.root, key); }\n  private splitChild(parent: any, i: number): void { const child = parent.children[i]; const mid = this.order - 1; const sibling = { keys: child.keys.splice(mid + 1), children: child.children.splice(mid + 1) }; parent.keys.splice(i, 0, child.keys[mid]); parent.children.splice(i + 1, 0, sibling); }\n  private insertNonFull(node: any, key: number): void { let i = node.keys.length - 1; if (!node.children.length) { while (i >= 0 && key < node.keys[i]) i--; node.keys.splice(i + 1, 0, key); } else { while (i >= 0 && key < node.keys[i]) i--; i++; this.insertNonFull(node.children[i], key); } }\n  search(key: number): boolean { let n = this.root; while (n) { let i = 0; while (i < n.keys.length && key > n.keys[i]) i++; if (i < n.keys.length && key === n.keys[i]) return true; if (!n.children.length) return false; n = n.children[i]; } return false; }\n}\nclass DatabaseIndexer { private indexes: Map<string, Index> = new Map();\n  createIndex(name: string, type: Index[\"type\"], columns: string[], unique = false): void { this.indexes.set(name, { type, columns, unique, cardinality: Math.floor(Math.random() * 10000) + 1000 }); }\n  recommendIndexes(queries: Record<string, any>[]): string[] { const colCount = new Map<string, number>(); for (const q of queries) { for (const col of Object.keys(q)) colCount.set(col, (colCount.get(col) || 0) + 1); } return [...colCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([col]) => `idx_${col}`); }\n}\nclass TransactionLog { private entries: { id: string; operations: string[]; timestamp: number; committed: boolean; }[] = []; begin(): string { const id = `txn-${Date.now()}`; this.entries.push({ id, operations: [], timestamp: Date.now(), committed: false }); return id; }\n  logOp(txnId: string, op: string): void { const t = this.entries.find(e => e.id === txnId); if (t) t.operations.push(op); }\n  commit(txnId: string): boolean { const t = this.entries.find(e => e.id === txnId); if (!t || t.operations.length === 0) return false; t.committed = true; return true; }\n  rollback(txnId: string): boolean { const idx = this.entries.findIndex(e => e.id === txnId); if (idx < 0) return false; this.entries.splice(idx, 1); return true; }\n}\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// database foundations\n// distributed-systems-scalability implementation"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'database foundations', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "// database foundations - additional TS implementations"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'database foundations' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-b-tree-index-simplified-insert-and-search",
                  children: "TypeScript: B-Tree Index (Simplified Insert and Search)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class implements a simplified B-tree with insert (with split) and search operations, demonstrating the core algorithm used by InnoDB, PostgreSQL, and SQL Server."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "class BTreeNode {\n  keys: number[] = [];\n  children: BTreeNode[] = [];\n  isLeaf: boolean = true;\n\n  constructor(isLeaf: boolean = true) {\n    this.isLeaf = isLeaf;\n  }\n}\n\nclass BTreeIndex {\n  private root: BTreeNode;\n  private order: number;\n\n  constructor(order: number = 4) {\n    this.order = order;\n    this.root = new BTreeNode();\n  }\n\n  search(key: number): boolean {\n    return this.searchNode(this.root, key);\n  }\n\n  private searchNode(node: BTreeNode, key: number): boolean {\n    let i = 0;\n    while (i < node.keys.length && key > node.keys[i]) i++;\n    if (i < node.keys.length && key === node.keys[i]) return true;\n    if (node.isLeaf) return false;\n    return this.searchNode(node.children[i], key);\n  }\n\n  insert(key: number): void {\n    if (this.root.keys.length === 2 * this.order - 1) {\n      const newRoot = new BTreeNode(false);\n      newRoot.children.push(this.root);\n      this.splitChild(newRoot, 0);\n      this.root = newRoot;\n    }\n    this.insertNonFull(this.root, key);\n  }\n\n  private insertNonFull(node: BTreeNode, key: number): void {\n    let i = node.keys.length - 1;\n    if (node.isLeaf) {\n      node.keys.push(0);\n      while (i >= 0 && key < node.keys[i]) {\n        node.keys[i + 1] = node.keys[i];\n        i--;\n      }\n      node.keys[i + 1] = key;\n    } else {\n      while (i >= 0 && key < node.keys[i]) i--;\n      i++;\n      if (node.children[i].keys.length === 2 * this.order - 1) {\n        this.splitChild(node, i);\n        if (key > node.keys[i]) i++;\n      }\n      this.insertNonFull(node.children[i], key);\n    }\n  }\n\n  private splitChild(parent: BTreeNode, childIndex: number): void {\n    const child = parent.children[childIndex];\n    const sibling = new BTreeNode(child.isLeaf);\n    const midKey = child.keys[this.order - 1];\n\n    sibling.keys = child.keys.splice(this.order);\n    child.keys.splice(this.order - 1);\n\n    if (!child.isLeaf) {\n      sibling.children = child.children.splice(this.order);\n    }\n\n    parent.keys.splice(childIndex, 0, midKey);\n    parent.children.splice(childIndex + 1, 0, sibling);\n  }\n\n  traverse(): number[] {\n    const result: number[] = [];\n    this.traverseNode(this.root, result);\n    return result;\n  }\n\n  private traverseNode(node: BTreeNode, result: number[]): void {\n    if (node.isLeaf) {\n      result.push(...node.keys);\n    } else {\n      for (let i = 0; i < node.keys.length; i++) {\n        this.traverseNode(node.children[i], result);\n        result.push(node.keys[i]);\n      }\n      this.traverseNode(node.children[node.keys.length], result);\n    }\n  }\n\n  stats(): { height: number; nodeCount: number; keyCount: number } {\n    let nodeCount = 0;\n    let keyCount = 0;\n    const queue = [this.root];\n    let height = 0;\n\n    while (queue.length > 0) {\n      const levelSize = queue.length;\n      for (let i = 0; i < levelSize; i++) {\n        const node = queue.shift()!;\n        nodeCount++;\n        keyCount += node.keys.length;\n        if (!node.isLeaf) queue.push(...node.children);\n      }\n      height++;\n    }\n    return { height, nodeCount, keyCount };\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst btree = new BTreeIndex(4);\nfor (const k of [10, 20, 40, 50, 60, 70, 80, 30, 35, 55, 65]) btree.insert(k);\nconsole.log('Sorted keys:', btree.traverse().join(', '));\nconsole.log('Search 55:', btree.search(55)); // true\nconsole.log('Search 25:', btree.search(25)); // false\nconsole.log('Tree stats:', btree.stats());\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-connection-pool-manager",
                  children: "TypeScript: Connection Pool Manager"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class manages a pool of database connections with health checks, acquire/release semantics, and automatic recovery of dead connections."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "interface PoolConnection {\n  id: string;\n  inUse: boolean;\n  healthy: boolean;\n  createdAt: number;\n  lastUsed: number;\n}\n\nclass ConnectionPool {\n  private connections: PoolConnection[] = [];\n  private acquireWaiters: Array<{ resolve: (conn: PoolConnection) => void; reject: (err: Error) => void; timeout: NodeJS.Timeout }> = [];\n  private healthCheckTimer: ReturnType<typeof setInterval> | null = null;\n  private nextId = 0;\n\n  constructor(\n    private minSize: number,\n    private maxSize: number,\n    private healthCheckIntervalMs: number = 30000,\n    private acquireTimeoutMs: number = 5000,\n    private idleTimeoutMs: number = 600000\n  ) {\n    for (let i = 0; i < minSize; i++) this.createConnection();\n    this.startHealthChecks();\n  }\n\n  private createConnection(): PoolConnection {\n    const conn: PoolConnection = {\n      id: `conn-${this.nextId++}`,\n      inUse: false,\n      healthy: true,\n      createdAt: Date.now(),\n      lastUsed: Date.now(),\n    };\n    this.connections.push(conn);\n    return conn;\n  }\n\n  async acquire(): Promise<PoolConnection> {\n    const available = this.connections.find(c => !c.inUse && c.healthy);\n    if (available) {\n      available.inUse = true;\n      available.lastUsed = Date.now();\n      return available;\n    }\n\n    if (this.connections.length < this.maxSize) {\n      const conn = this.createConnection();\n      conn.inUse = true;\n      conn.lastUsed = Date.now();\n      return conn;\n    }\n\n    return new Promise((resolve, reject) => {\n      const timeout = setTimeout(() => {\n        const idx = this.acquireWaiters.findIndex(w => w.resolve === resolve);\n        if (idx >= 0) this.acquireWaiters.splice(idx, 1);\n        reject(new Error('Connection acquire timeout'));\n      }, this.acquireTimeoutMs);\n\n      this.acquireWaiters.push({ resolve, reject, timeout });\n    });\n  }\n\n  release(conn: PoolConnection): void {\n    conn.inUse = false;\n    conn.lastUsed = Date.now();\n\n    const waiter = this.acquireWaiters.shift();\n    if (waiter) {\n      clearTimeout(waiter.timeout);\n      conn.inUse = true;\n      waiter.resolve(conn);\n    }\n  }\n\n  markUnhealthy(connId: string): void {\n    const conn = this.connections.find(c => c.id === connId);\n    if (conn) {\n      conn.healthy = false;\n      conn.inUse = false;\n    }\n  }\n\n  private startHealthChecks(): void {\n    this.healthCheckTimer = setInterval(() => {\n      const now = Date.now();\n      for (const conn of this.connections) {\n        if (conn.inUse) continue;\n        if (!conn.healthy) {\n          conn.healthy = true; // assume recovered; real impl would ping DB\n        }\n        if (now - conn.lastUsed > this.idleTimeoutMs && this.connections.length > this.minSize) {\n          const idx = this.connections.indexOf(conn);\n          if (idx >= 0) this.connections.splice(idx, 1);\n        }\n      }\n      while (this.connections.length < this.minSize) this.createConnection();\n    }, this.healthCheckIntervalMs);\n  }\n\n  getStats(): { total: number; inUse: number; idle: number; unhealthy: number; waiters: number } {\n    return {\n      total: this.connections.length,\n      inUse: this.connections.filter(c => c.inUse).length,\n      idle: this.connections.filter(c => !c.inUse && c.healthy).length,\n      unhealthy: this.connections.filter(c => !c.healthy).length,\n      waiters: this.acquireWaiters.length,\n    };\n  }\n\n  destroy(): void {\n    if (this.healthCheckTimer) clearInterval(this.healthCheckTimer);\n    this.connections = [];\n    for (const w of this.acquireWaiters) {\n      clearTimeout(w.timeout);\n      w.reject(new Error('Pool destroyed'));\n    }\n    this.acquireWaiters = [];\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst pool = new ConnectionPool(2, 10);\nasync function demoPool() {\n  const c1 = await pool.acquire();\n  console.log('Acquired:', c1.id, '| Stats:', pool.getStats());\n  pool.release(c1);\n  console.log('Released:', c1.id, '| Stats:', pool.getStats());\n}\ndemoPool();\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "typescript-isolation-level-simulator",
                  children: "TypeScript: Isolation Level Simulator"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "This class simulates dirty reads, non-repeatable reads, and phantom reads across the four standard isolation levels."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-typescript",
                    children: "type IsolationLevel = 'read-uncommitted' | 'read-committed' | 'repeatable-read' | 'serializable';\n\ninterface TxOperation {\n  type: 'read' | 'write';\n  key: string;\n  value?: number;\n}\n\ninterface Transaction {\n  id: number;\n  operations: TxOperation[];\n  committed: boolean;\n}\n\nclass IsolationSimulator {\n  private data = new Map<string, number>();\n  private activeTransactions: Map<number, Map<string, number>> = new Map();\n\n  constructor(private level: IsolationLevel) {}\n\n  setLevel(level: IsolationLevel): void { this.level = level; }\n\n  simulate(): { anomalies: string[]; data: Record<string, number> } {\n    const anomalies: string[] = [];\n\n    // Dirty read test: T1 writes, T2 reads before commit\n    if (this.level === 'read-uncommitted') {\n      anomalies.push('DIRTY READ POSSIBLE: T1 writes x=5, T2 reads x=5 before T1 commits');\n    } else {\n      anomalies.push('DIRTY READ PREVENTED: T2 sees only committed data');\n    }\n\n    // Non-repeatable read test: T1 reads x, T2 writes x, T1 reads x again\n    if (this.level === 'read-uncommitted' || this.level === 'read-committed') {\n      anomalies.push('NON-REPEATABLE READ POSSIBLE: T1 reads x=10, T2 changes x to 20, T1 re-reads x=20');\n    } else {\n      anomalies.push('NON-REPEATABLE READ PREVENTED: T1 sees same x throughout transaction');\n    }\n\n    // Phantom read test: T1 queries range, T2 inserts in range, T1 re-queries\n    if (this.level === 'read-uncommitted' || this.level === 'read-committed' || this.level === 'repeatable-read') {\n      anomalies.push('PHANTOM READ POSSIBLE: T1 queries keys 1-5, T2 inserts key 3, T1 sees phantom');\n    } else {\n      anomalies.push('PHANTOM READ PREVENTED: Serializable isolation locks predicate range');\n    }\n\n    return { anomalies, data: Object.fromEntries(this.data) };\n  }\n\n  runTransaction(id: number, ops: TxOperation[]): string[] {\n    const events: string[] = [];\n    const snapshot = new Map(this.data);\n    this.activeTransactions.set(id, snapshot);\n    events.push(`T${id}: BEGIN (isolation=${this.level})`);\n\n    for (const op of ops) {\n      if (op.type === 'read') {\n        const committedVal = this.data.get(op.key);\n        const snapshotVal = snapshot.get(op.key);\n\n        if (this.level === 'read-uncommitted') {\n          events.push(`T${id}: READ ${op.key} = ${committedVal ?? 'undefined'}`);\n        } else if (this.level === 'read-committed') {\n          events.push(`T${id}: READ ${op.key} = ${committedVal ?? 'undefined'} (latest committed)`);\n        } else {\n          events.push(`T${id}: READ ${op.key} = ${snapshotVal ?? 'undefined'} (snapshot)`);\n        }\n      } else if (op.type === 'write') {\n        this.data.set(op.key, op.value!);\n        snapshot.set(op.key, op.value!);\n        events.push(`T${id}: WRITE ${op.key} = ${op.value}`);\n      }\n    }\n\n    this.data = new Map(snapshot);\n    this.activeTransactions.delete(id);\n    events.push(`T${id}: COMMIT`);\n    return events;\n  }\n}\n\n// -- Example ------------------------------------------------------\nconst sim = new IsolationSimulator('read-committed');\nconst events = sim.runTransaction(1, [\n  { type: 'read', key: 'x' },\n  { type: 'write', key: 'x', value: 42 },\n  { type: 'read', key: 'x' },\n]);\nconsole.log('Transaction events:', events);\nconsole.log('Anomalies:', sim.simulate().anomalies);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "sql-vs-nosql-decision-tree",
                  children: "SQL vs NoSQL Decision Tree"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-mermaid",
                    children: "flowchart TD\n    classDef question fill:#f5a623,color:#fff,stroke:#c47f12,stroke-width:2px\n    classDef sql fill:#4a90d9,color:#fff,stroke:#2c5f8a,stroke-width:2px\n    classDef nosql fill:#7ed321,color:#fff,stroke:#4a8c14,stroke-width:2px\n    classDef hybrid fill:#9013fe,color:#fff,stroke:#5c0e9e,stroke-width:2px\n    classDef warn fill:#d0021b,color:#fff,stroke:#8b0015,stroke-width:2px\n\n    START([Choose Database]) --> Q1{Need ACID Transactions?}\n    Q1 -->|Yes| Q2{Complex Joins?}\n    Q1 -->|No| Q3{Fixed Schema?}\n\n    Q2 -->|Yes| SQL_R[SQL RDBMS]:::sql\n    Q2 -->|No| Q4{Read-Heavy or<br/>Write-Heavy?}\n\n    Q3 -->|Yes| SQL_R\n    Q3 -->|No| Q5{Data Model}\n\n    Q4 -->|Read-Heavy| SQL_R\n    Q4 -->|Write-Heavy| LSM_NOSQL[LSM-based NoSQL<br/>Cassandra, RocksDB]:::nosql\n\n    Q5 -->|Key-Value| KV_OPT[Redis, DynamoDB]:::nosql\n    Q5 -->|Document| DOC_OPT[MongoDB, Couchbase]:::nosql\n    Q5 -->|Graph| GRAPH_OPT[Neo4j, Amazon Neptune]:::nosql\n    Q5 -->|Wide-Column| WC_OPT[Cassandra, HBase]:::nosql\n\n    SQL_R --> Q6{Global Scale Needed?}\n    Q6 -->|Yes| NEWSQL[NewSQL<br/>Spanner, CockroachDB]:::hybrid\n    Q6 -->|No| TRAD_SQL[MySQL, PostgreSQL]:::sql\n\n    subgraph Use_Case_Examples\n        FINANCE[\"Banking, ERP, Ledgers\"]:::warn\n        SOCIAL[\"Feeds, Profiles, Messaging\"]:::nosql\n        IOT[\"Time Series, Sensor Data\"]:::nosql\n        CONTENT[\"CMS, Product Catalog\"]:::sql\n    end\n\n    TRAD_SQL --> FINANCE\n    NEWSQL --> CONTENT\n    KV_OPT --> SOCIAL\n    LSM_NOSQL --> IOT\n"
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
                        children: "B-Trees optimize for reads; LSM-Trees optimize for writes"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Choose B-Tree (MySQL/PostgreSQL) for read-heavy workloads with joins; choose LSM-Tree (Cassandra/RocksDB) for write-heavy time-series or event ingestion"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Single-leader replication is the simplest and safest default"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use for most OLTP workloads; failover with consensus (Raft/Paxos) to avoid split-brain"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Leaderless (Dynamo-style) requires W+R > N for strong consistency"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Configure N=3, W=2, R=2 for balanced strong consistency with single-node fault tolerance"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "LWW conflict resolution loses data on concurrent writes"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use version vectors or CRDTs when concurrent writes to the same key are expected"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "MVCC is the dominant isolation implementation in modern databases"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "PostgreSQL, MySQL InnoDB, and Oracle all use MVCC for Read Committed and Repeatable Read"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Replication lag causes three distinct anomalies"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "RYW: route reads to leader after write. Monotonic: hash-route user to same replica. Consistent prefix: place related data on same partition"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "NewSQL (Spanner, CockroachDB) bridges SQL and NoSQL"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Use when you need ACID transactions at global scale with horizontal sharding"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "case-study",
                  children: "Case Study"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Uber's Database Migration from MySQL to Schemaless and Docstore."
                  }), " Uber's original architecture used a single MySQL cluster with follower replicas. As the platform expanded to 500+ cities, the MySQL cluster faced severe scaling challenges: schema changes required hours of downtime, cross-shard queries became impossibly slow, and replication lag caused drivers to see stale trip requests. Uber designed Schemaless, a sharded document database built on top of MySQL, which stored trip data as JSON blobs in a single giant table with an auto-incrementing key. Each shard was a separate MySQL instance, and the application layer handled routing via a consistent hash ring on the trip UUID."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Key Architectural Decisions."
                  }), " Uber chose a hybrid approach: B-Tree storage engine (MySQL InnoDB) for its strong read consistency and transaction support, but with an LSM-inspired write path that batched writes to the WAL before applying to the B-Tree. This gave them the read performance of B-Trees (fast point lookups for trip status queries) with improved write throughput. The connection pool for each shard was carefully tuned — each pool maintained 5-20 connections per shard with aggressive health checking (TCP probes every 5 seconds, query-based checks every 30 seconds). When a shard's primary failed, the pool automatically failed over to the replica within 10 seconds using a custom health-check-driven connection router."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Business Impact."
                  }), " The hybrid architecture scaled Uber's database layer from handling 100K trips/day to 15M trips/day over 3 years. Read latency for trip status queries stayed under 5ms p99, while write throughput scaled linearly with shard count. The isolation level was set to Read Committed (avoiding Serializable overhead), which was acceptable because trip reconciliation ran as a separate eventually-consistent process. The most important lesson: Uber did not choose between B-Tree and LSM-Tree — they combined the read strength of B-Trees with the write optimization ideas from LSM-Trees, proving that real-world database design is about composing trade-offs, not picking one storage engine."]
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
                        children: "What is the approximate branching factor of a B-Tree with 16KB pages and 8-byte keys?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "128"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "256"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "512"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "1024"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "D"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Which compaction strategy has the lowest write amplification?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Leveled"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Size-tiered"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Time-windowed"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Unified"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "3"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What is the quorum condition for strong consistency?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W + R < N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W + R = N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W + R > N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "W = R = N"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "C"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "4"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Which isolation level prevents phantom reads?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Read Uncommitted"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Read Committed"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Repeatable Read"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Serializable"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "D"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "5"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "What anomaly occurs when a user reads from two different replicas and sees data \"go back in time\"?"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Dirty read"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Non-repeatable read"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Phantom read"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Monotonic read violation"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "D"
                        })
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "summary",
                  children: "Summary"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B-Trees use a high branching factor (~1000+) to minimize disk seeks, achieving O(log_base_factor(n)) depth. Page splits and merges keep the tree balanced automatically."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "LSM-Trees buffer writes in an in-memory MemTable, flush to immutable SSTables on disk, and run background compaction to merge and reclaim space. They dramatically outperform B-Trees on write-heavy workloads."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The B-Tree vs LSM-Tree trade-off reduces to read speed vs write speed. B-Trees win on point lookups and range scans; LSM-Trees win on sequential write throughput."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Single-leader replication is the simplest topology. Failover requires detecting leader failure, electing a new leader, and reconfiguring the system — with split-brain as the primary risk."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Multi-leader replication is essential for multi-datacenter and offline-first applications, but requires conflict resolution (LWW, Version Vectors, CRDTs)."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Leaderless replication (Dynamo-style) uses quorums (N, W, R) and eventual consistency. Hinted handoff and read repair handle failures and staleness."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Replication lag causes three anomalies: read-your-writes, monotonic reads, and consistent prefix reads. Each has known solutions."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "ACID isolation levels range from Read Uncommitted (low consistency, high performance) to Serializable (full consistency, lower performance). MVCC is the dominant implementation for Read Committed and Repeatable Read."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "SQL databases offer strong schemas, joins, and ACID transactions at the cost of horizontal scalability. NoSQL databases offer flexible schemas and horizontal scaling at the cost of consistency and query power. NewSQL (Spanner, CockroachDB) attempts to bridge the gap."
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
                        children: ["Draw the structure of a B-Tree of order 4 containing keys [10, 20, 30, 40, 50, 60, 70]. Show what happens when key 55 is inserted (including any splits).\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Initial: root [40] with children [10,20,30] and [50,60,70]. Insert 55: locate right child, it's full (3 keys, order 4 allows max 3). Split right child: promote 60 to root. Root becomes [40,60] with children [10,20,30], [50,55], [70]. Insert 55 into middle child: [50,55]."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Explain why write amplification is higher in leveled compaction (~10-20x) than in size-tiered compaction (~1-3x). Why would anyone choose leveled compaction despite this?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Leveled compaction rewrites data as it moves through levels (L0?L1?L2...), each level being 10x larger. Size-tiered merges SSTables of similar size within a level. Leveled is chosen for better read performance (non-overlapping SSTables per level) and lower space amplification (1.1-2x vs 2-4x)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["What is the quorum condition for strong consistency in leaderless replication? If N=5, W=4, and R=2, is the system strongly consistent?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Condition: W+R > N. With N=5, W=4, R=2: W+R=6 > 5, so yes, strongly consistent. But R=2 means reads may be slow (must wait for 2 responses). W=4 means writes need 4/5 acks, tolerating only 1 node failure."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Compare the conflict resolution mechanisms for multi-leader replication: LWW, Version Vectors, and CRDTs. Under what conditions does LWW produce incorrect results?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " LWW: last timestamp wins, simple but loses concurrent writes. Version Vectors: detects concurrent writes but requires application resolution. CRDTs: mathematically converge without conflicts. LWW fails when clock skew causes incorrect timestamp ordering — a later write may have an earlier timestamp if its clock is behind."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["List the three replication lag anomalies and describe a mitigation strategy for each.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " (1) RYW: route reads for modified keys to leader for N seconds after write. (2) Monotonic reads: hash-route user to same replica consistently. (3) Consistent prefix: place related data (post + comments) on same partition, or use total ordering with timestamps."]
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
                        children: ["A B-Tree with page size 16 KB stores 100-byte keys and 100-byte values. Calculate the branching factor. How many leaf pages are needed to store 10 million records? How many levels in the tree?\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Branching factor = page_size / (key_size + pointer_size) = 16384 / (100 + 8) ≈ 152. Records per leaf = 16384 / 200 ≈ 82. Leaf pages needed = 10^7 / 82 ≈ 122,000. Levels = log_152(122000) ≈ 3 (root + 2 internal levels + leaf level)."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["A database uses N=3, W=2, R=2 across 3 replicas. Node A crashes. Is the system still available for writes? For reads? Show any window of inconsistency that may occur during recovery.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " With 2 remaining nodes: W=2 can be satisfied (write to both). R=2 can be satisfied (read from both). System remains available. W+R=4 > N=3 holds. Inconsistency window: during recovery of Node A, if A had a write that the other two haven't seen (due to async replication), reads from A during recovery could return stale data until read repair updates it."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["Design a conflict resolution strategy for a shared photo album app where users from multiple devices add, remove, and reorder photos. Multiple users may rename the same album concurrently. Specify which CRDT(s) you would use for each operation and justify your choices.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Photo set: OR-Set (add/remove commute). Album name: LWW-register (last rename wins — acceptable because name should converge to one value). Photo order: RGA (Replicated Growable Array) for sequence ordering. The OR-Set for photos ensures no photo is lost due to concurrent add/remove operations."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: ["A banking ledger uses serializable isolation. A transfer transaction subtracts $100 from account A and adds $100 to account B. A concurrent interest-calculation transaction reads both accounts and writes interest of 1% of the balance. Under Read Committed isolation, what anomalies are possible? Draw a timestamped interleaving that produces a wrong result.\n", (0,jsx_runtime.jsx)(_components.strong, {
                          children: "Solution:"
                        }), " Under RC: T1 (transfer) could be interleaved with T2 (interest). T2 reads A=1000 (before transfer), T1 transfers $100 from A to B, T2 reads B=100 (after transfer). T2 writes interest: A=1010, B=101. Total=1111 but should be 1100 + interest on correct values. Lost update and inconsistent read anomaly."]
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
                    children: "You are designing a globally distributed document database for a collaboration platform similar to Notion or Coda. 100M users, 1B documents."
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Solution Outline:"
                    })
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Storage engine:"
                      }), " Hybrid — RocksDB (LSM-Tree) for write-heavy operations (block edits, real-time collaboration) with periodic compaction; B-Tree-based indexes (via MySQL InnoDB) for metadata and queryable fields. LSM-Tree handles the high write throughput of collaborative editing while B-Tree provides fast lookups for document listing and search."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Replication topology:"
                      }), " Multi-leader (one leader per region: US, EU, APAC) with CRDT-based conflict resolution. Offline editing uses local-first CRDT state that merges on reconnection."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Document model:"
                      }), " Documents stored as ordered lists of blocks (CRDT-based RGA for ordering). Version history uses fork/merge semantics — each save creates a diff against the parent version, stored in Cassandra for 30-day retention."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "OR-Set CRDT for block content:"
                      }), " Elements tagged with (user_id, timestamp, UUID). add(element, tag) creates a tag; remove(element) removes known tags; merge = union of tag sets. Convergence is guaranteed because concurrent adds union, and concurrent add/remove depends on tag awareness."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Total order for comments:"
                      }), " Use a centralized sequencer per document (a small Raft group) that assigns monotonically increasing sequence numbers to comments. This provides total order while the document content itself uses CRDTs for availability."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Anti-entropy:"
                      }), " Merkle trees per document range. Each region exchanges root hashes every 30 seconds. On mismatch, recursive comparison finds differing blocks, and only the differing blocks are transferred."]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Bottleneck:"
                      }), " At 10x, the Raft-based comment sequencer becomes the bottleneck (single leader processes all comments). Mitigation: shard sequencing by document_id, with each document's sequencer group running independently."]
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