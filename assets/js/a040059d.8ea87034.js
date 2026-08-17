"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[24198],{

/***/ 15615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_13_query_processing_md_a04_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-13-query-processing-md-a04.json
const site_docs_courses_database_management_systems_13_query_processing_md_a04_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/13-query-processing","title":"Chapter 13: Query Processing and Optimization","description":"Prev Indexing | Next NoSQL Databases","source":"@site/docs/courses/database-management-systems/13-query-processing.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/13-query-processing","permalink":"/ai-engineering-journey/database-management-systems/13-query-processing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-query-processing","slug":"/database-management-systems/13-query-processing","title":"Chapter 13: Query Processing and Optimization","sidebar_label":"Chapter 13: Query Processing and Optimization","sidebar_position":13},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 12: Indexing","permalink":"/ai-engineering-journey/database-management-systems/12-indexing"},"next":{"title":"Chapter 14: NoSQL Databases","permalink":"/ai-engineering-journey/database-management-systems/14-nosql"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/13-query-processing.md


const frontMatter = {
	id: '13-query-processing',
	slug: '/database-management-systems/13-query-processing',
	title: 'Chapter 13: Query Processing and Optimization',
	sidebar_label: 'Chapter 13: Query Processing and Optimization',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Query Processing and Optimization';

const assets = {

};



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
  "value": "13.1 Query Processing Overview",
  "id": "131-query-processing-overview",
  "level": 3
}, {
  "value": "Real-World Analogy: Chef Preparing a Meal",
  "id": "real-world-analogy-chef-preparing-a-meal",
  "level": 4
}, {
  "value": "Detailed Processing Steps",
  "id": "detailed-processing-steps",
  "level": 4
}, {
  "value": "Pseudocode: High-Level Query Processor",
  "id": "pseudocode-high-level-query-processor",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "13.2 Parsing and Preprocessing",
  "id": "132-parsing-and-preprocessing",
  "level": 3
}, {
  "value": "Pseudocode: SQL Parser",
  "id": "pseudocode-sql-parser",
  "level": 4
}, {
  "value": "13.3 Query Cost Estimation",
  "id": "133-query-cost-estimation",
  "level": 3
}, {
  "value": "Core Cost Formula",
  "id": "core-cost-formula",
  "level": 4
}, {
  "value": "Selectivity Estimation",
  "id": "selectivity-estimation",
  "level": 4
}, {
  "value": "Cost Estimation Walkthrough",
  "id": "cost-estimation-walkthrough",
  "level": 4
}, {
  "value": "Dry Run: Cost Comparison Trace Table",
  "id": "dry-run-cost-comparison-trace-table",
  "level": 4
}, {
  "value": "Why Complexity Matters: The 10x Fallacy",
  "id": "why-complexity-matters-the-10x-fallacy",
  "level": 4
}, {
  "value": "13.4 Selection Operations",
  "id": "134-selection-operations",
  "level": 3
}, {
  "value": "Real-World Analogy: Finding a Book",
  "id": "real-world-analogy-finding-a-book",
  "level": 4
}, {
  "value": "1. Sequential (Linear) Scan",
  "id": "1-sequential-linear-scan",
  "level": 4
}, {
  "value": "2. Binary Search (on sorted data)",
  "id": "2-binary-search-on-sorted-data",
  "level": 4
}, {
  "value": "3. Index Scan",
  "id": "3-index-scan",
  "level": 4
}, {
  "value": "Comparison: Selection Methods",
  "id": "comparison-selection-methods",
  "level": 4
}, {
  "value": "13.5 Sorting (External Merge Sort)",
  "id": "135-sorting-external-merge-sort",
  "level": 3
}, {
  "value": "Real-World Analogy: Sorting a Million Exam Papers",
  "id": "real-world-analogy-sorting-a-million-exam-papers",
  "level": 4
}, {
  "value": "External Merge Sort Algorithm",
  "id": "external-merge-sort-algorithm",
  "level": 4
}, {
  "value": "Dry Run: Full Trace Table",
  "id": "dry-run-full-trace-table",
  "level": 4
}, {
  "value": "Number of Passes Formula",
  "id": "number-of-passes-formula",
  "level": 4
}, {
  "value": "C++ Implementation of External Merge Sort",
  "id": "c-implementation-of-external-merge-sort",
  "level": 4
}, {
  "value": "Python Implementation of External Merge Sort",
  "id": "python-implementation-of-external-merge-sort",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "A&amp;D Table: External Merge Sort",
  "id": "ad-table-external-merge-sort",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "13.6 Join Operations",
  "id": "136-join-operations",
  "level": 3
}, {
  "value": "Comparison at a Glance",
  "id": "comparison-at-a-glance",
  "level": 4
}, {
  "value": "13.6.1 Nested Loop Join (NLJ)",
  "id": "1361-nested-loop-join-nlj",
  "level": 4
}, {
  "value": "13.6.2 Block Nested Loop Join (BNLJ)",
  "id": "1362-block-nested-loop-join-bnlj",
  "level": 4
}, {
  "value": "13.6.3 Indexed Nested Loop Join (INLJ)",
  "id": "1363-indexed-nested-loop-join-inlj",
  "level": 4
}, {
  "value": "13.6.4 Sort-Merge Join (SMJ)",
  "id": "1364-sort-merge-join-smj",
  "level": 4
}, {
  "value": "13.6.5 Hash Join",
  "id": "1365-hash-join",
  "level": 4
}, {
  "value": "C++ Implementation: Hash Join Simulator",
  "id": "c-implementation-hash-join-simulator",
  "level": 4
}, {
  "value": "Python Implementation: Hash Join with I/O Cost Tracking",
  "id": "python-implementation-hash-join-with-io-cost-tracking",
  "level": 4
}, {
  "value": "Complexity Analysis: Join Algorithms",
  "id": "complexity-analysis-join-algorithms",
  "level": 4
}, {
  "value": "A&amp;D Table: Join Algorithms",
  "id": "ad-table-join-algorithms",
  "level": 4
}, {
  "value": "Edge Cases in Join Operations",
  "id": "edge-cases-in-join-operations",
  "level": 4
}, {
  "value": "13.7 Query Optimization",
  "id": "137-query-optimization",
  "level": 3
}, {
  "value": "Real-World Analogy: GPS Route Planning",
  "id": "real-world-analogy-gps-route-planning",
  "level": 4
}, {
  "value": "13.7.1 Equivalence Rules",
  "id": "1371-equivalence-rules",
  "level": 4
}, {
  "value": "13.7.2 Cost-Based Optimization",
  "id": "1372-cost-based-optimization",
  "level": 4
}, {
  "value": "13.7.3 Heuristic Optimization",
  "id": "1373-heuristic-optimization",
  "level": 4
}, {
  "value": "Comparison: Heuristic vs Cost-Based Optimization",
  "id": "comparison-heuristic-vs-cost-based-optimization",
  "level": 4
}, {
  "value": "13.8 Materialization vs Pipelining",
  "id": "138-materialization-vs-pipelining",
  "level": 3
}, {
  "value": "Real-World Analogy: Restaurant Kitchen",
  "id": "real-world-analogy-restaurant-kitchen",
  "level": 4
}, {
  "value": "Pipelining (Iterator Model)",
  "id": "pipelining-iterator-model",
  "level": 4
}, {
  "value": "Materialization",
  "id": "materialization",
  "level": 4
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 4
}, {
  "value": "Operator Classification",
  "id": "operator-classification",
  "level": 4
}, {
  "value": "13.9 Reading Execution Plans",
  "id": "139-reading-execution-plans",
  "level": 3
}, {
  "value": "13.10 Query Plan Selection Example",
  "id": "1310-query-plan-selection-example",
  "level": 3
}, {
  "value": "13.11 Optimization Hints",
  "id": "1311-optimization-hints",
  "level": 3
}, {
  "value": "13.12 Interview Corner",
  "id": "1312-interview-corner",
  "level": 3
}, {
  "value": "Q1: Hash Join vs Sort-Merge Join -- When to Use Which?",
  "id": "q1-hash-join-vs-sort-merge-join----when-to-use-which",
  "level": 4
}, {
  "value": "Q2: How to Read a Query Plan?",
  "id": "q2-how-to-read-a-query-plan",
  "level": 4
}, {
  "value": "Q3: Left-Deep vs Right-Deep vs Bushy Trees",
  "id": "q3-left-deep-vs-right-deep-vs-bushy-trees",
  "level": 4
}, {
  "value": "Q4: Why Are Statistics So Important?",
  "id": "q4-why-are-statistics-so-important",
  "level": 4
}, {
  "value": "13.13 Applications in Real Systems",
  "id": "1313-applications-in-real-systems",
  "level": 3
}, {
  "value": "PostgreSQL Query Planner",
  "id": "postgresql-query-planner",
  "level": 4
}, {
  "value": "MySQL EXPLAIN",
  "id": "mysql-explain",
  "level": 4
}, {
  "value": "Oracle Optimizer",
  "id": "oracle-optimizer",
  "level": 4
}, {
  "value": "Summary of Real-System Behavior",
  "id": "summary-of-real-system-behavior",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Tables",
  "id": "concept-comparison-tables",
  "level": 2
}, {
  "value": "Join Algorithm Comparison",
  "id": "join-algorithm-comparison",
  "level": 3
}, {
  "value": "Selection Methods Comparison",
  "id": "selection-methods-comparison",
  "level": 3
}, {
  "value": "Query Optimization Comparison",
  "id": "query-optimization-comparison",
  "level": 3
}, {
  "value": "Materialization vs Pipelining",
  "id": "materialization-vs-pipelining",
  "level": 3
}, {
  "value": "External Sort Passes",
  "id": "external-sort-passes",
  "level": 3
}, {
  "value": "Query Processing Stage Summary",
  "id": "query-processing-stage-summary",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "A&amp;D Reference Table",
  "id": "ad-reference-table",
  "level": 2
}, {
  "value": "External Merge Sort",
  "id": "external-merge-sort",
  "level": 3
}, {
  "value": "Hash Join",
  "id": "hash-join",
  "level": 3
}, {
  "value": "Nested Loop Join",
  "id": "nested-loop-join",
  "level": 3
}, {
  "value": "Cost-Based Optimization",
  "id": "cost-based-optimization",
  "level": 3
}, {
  "value": "13.10 TypeScript Query Cost Model",
  "id": "1310-typescript-query-cost-model",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
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
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "chapter-13-query-processing-and-optimization",
        children: "Chapter 13: Query Processing and Optimization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/12-indexing",
          children: "Chapter 12: Indexing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/14-nosql",
          children: "Chapter 14: NoSQL Databases"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the lifecycle of a SQL query from text to result"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how query parsing and validation works"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand query optimization and cost-based estimation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare join algorithms: nested loop, hash join, merge join"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe pipelining and materialization in query execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and interpret query execution plans (EXPLAIN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate external merge sort passes and I/O costs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement cost-based optimizer logic and hash join simulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Query Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL text -> Parse -> Optimize -> Execute -> Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use EXPLAIN to see how your queries are executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax check + semantic validation (tables/columns exist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-validate queries with EXPLAIN to catch errors early"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost-Based Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple plans generated, cheapest selected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep statistics updated (ANALYZE) for accurate cost estimates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join Algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop (small), Hash Join (equality), Merge Join (sorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose join type based on data size and access patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipelining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream results between operators without temp tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelined execution avoids expensive disk I/O for intermediate results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution Plans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree of operators with estimated costs per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read plans bottom-up; look for sequential scans on large tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-pass merge sorting for memory-limited data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of passes = 1 + ceil(log_{B-1}(N/B)) where B = buffers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[SQL Query] --> B[Parser]\n    B --> C[Parse Tree]\n    C --> D[Preprocessor]\n    D --> E[Query Optimizer]\n    E --> F[Plan 1] & G[Plan 2] & H[Plan N]\n    F & G & H --> I[Cost Estimator]\n    I --> J[Cheapest Plan]\n    J --> K[Execution Engine]\n    K --> L[Result]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch13-query-processing.png",
        alt: "Query Processing Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-query-processing-overview",
      children: "13.1 Query Processing Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user submits a SQL query, the DBMS transforms it through several stages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SQL Query Text\n    |\n[Parser] -- Checks syntax, produces parse tree\n    |\n[Preprocessor] -- Validates tables and columns, resolves views\n    |\n[Query Optimizer] -- Generates alternative plans, estimates costs\n    |\n[Execution Engine] -- Executes the chosen plan\n    |\nResult\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The SQL query lifecycle runs through four stages -- parsing, optimization, execution, and result delivery -- each adding its own processing cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-chef-preparing-a-meal",
      children: "Real-World Analogy: Chef Preparing a Meal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of the DBMS as a professional kitchen and the SQL query as a recipe order:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Query Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kitchen Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer hands a written order to the waiter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiter reads the order aloud, checks it's legible and makes sense (no \"spaghettibolognese\" when the menu says \"spaghetti bolognese\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preprocessing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chef checks all ingredients exist in the pantry, substitutes are noted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chef decides the best order of operations: chop vegetables while water boils, start sauce while pasta cooks -- multiple plans considered, fastest wins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cooking happens: each station executes its task, results plated together"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finished dish arrives at the customer's table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The kitchen analogy is useful because it captures the key insight: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the order of operations dramatically affects total preparation time"
      }), ", just as join order and access method selection dramatically affect query execution time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detailed-processing-steps",
      children: "Detailed Processing Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Lexical Analysis (Scanning)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SQL text is broken into tokens -- the smallest meaningful units."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SQL: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT e.name FROM employees e WHERE e.salary > 50000;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tokens produced:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[SELECT] [e] [.] [name] [FROM] [employees] [e] [WHERE] [e] [.] [salary] [>] [50000] [;]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each token is classified as a keyword (", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FROM"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WHERE"
      }), "), identifier (", (0,jsx_runtime.jsx)(_components.code, {
        children: "e"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "salary"
      }), "), operator (", (0,jsx_runtime.jsx)(_components.code, {
        children: ">"
      }), "), literal (", (0,jsx_runtime.jsx)(_components.code, {
        children: "50000"
      }), "), or punctuation (", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ";"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Syntax Analysis (Parsing)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tokens are assembled into a parse tree according to SQL grammar rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QUERY\n├── SELECT\n│   ├── e.name\n│   └── (implicit all columns not shown)\n├── FROM\n│   └── employees AS e\n└── WHERE\n    └── Comparison (>)\n        ├── Attribute: e.salary\n        └── Literal: 50000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parser uses a context-free grammar (CFG) with rules like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<query> ::= SELECT <select_list> FROM <table_reference> [WHERE <condition>]\n<select_list> ::= <column> | <column> , <select_list>\n<condition> ::= <column> <op> <value>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the SQL violates the grammar (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELCET"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT"
      }), "), the parser raises a syntax error and stops."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Semantic Analysis (Preprocessing)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The preprocessor walks the parse tree and validates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each table in FROM clause exists in the database catalog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each column reference exists in its table's schema"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Data types are compatible (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salary > 50000"
        }), " compares numeric to numeric)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View references are replaced by their underlying query definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ambiguous column references (same column name in two joined tables) are resolved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Query Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimizer receives the validated parse tree and generates multiple equivalent relational algebra expressions. For each, it estimates execution cost using table statistics (row count, page count, distinct values, histograms). The plan with the lowest estimated cost is selected."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Query Execution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The execution engine runs the chosen plan, operator by operator. Each operator (scan, join, sort, aggregate) reads input and produces output until the entire result is materialized or streamed to the client."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-high-level-query-processor",
      children: "Pseudocode: High-Level Query Processor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE ProcessQuery(sqlText)\n    tokens = LexicalAnalyzer.Tokenize(sqlText)\n    parseTree = Parser.Parse(tokens)\n    IF parseTree.HasErrors THEN\n        RETURN \"Syntax error: \" + parseTree.ErrorMessage\n    END IF\n    \n    validatedTree = Preprocessor.Validate(parseTree)\n    IF validatedTree.HasErrors THEN\n        RETURN \"Semantic error: \" + validatedTree.ErrorMessage\n    END IF\n    \n    candidatePlans = GenerateAllPlans(validatedTree)\n    bestPlan = NULL\n    bestCost = INFINITY\n    FOR EACH plan IN candidatePlans:\n        cost = EstimateCost(plan)\n        IF cost < bestCost THEN\n            bestCost = cost\n            bestPlan = plan\n        END IF\n    END FOR\n    \n    result = ExecutionEngine.Execute(bestPlan)\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = query length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass over characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for LR(1) parsers; O(n^3) worst-case for naive recursive descent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear for well-designed SQL grammars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t + c) where t = #tables, c = #columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog lookups are hash-table O(1) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p * k) where p = #plans, k = cost estimation cost per plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of join orders = Catalan number C(n) ~ 4^n / (n * sqrt(n*pi))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies -- drives total wall-clock time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on data volume, algorithms, indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimization stage has exponential worst-case complexity in the number of joined relations (4^n join orderings), but modern optimizers use pruning (dynamic programming, genetic algorithms) to keep it tractable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-parsing-and-preprocessing",
      children: "13.2 Parsing and Preprocessing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parsing:"
      }), " The SQL text is tokenized into keywords, identifiers, operators, and literals. The parser builds a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parse tree"
      }), " (or abstract syntax tree) representing the query structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 50000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parse tree (conceptual):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QUERY (type: SELECT)\n├── SELECT_LIST\n│   ├── QUALIFIED_COLUMN: e.name\n│   └── QUALIFIED_COLUMN: d.dept_name\n├── FROM_CLAUSE\n│   ├── TABLE_REFERENCE: employees (alias: e)\n│   └── TABLE_REFERENCE: departments (alias: d)\n├── JOIN_CONDITION\n│   └── EQUALS\n│       ├── QUALIFIED_COLUMN: e.dept_id\n│       └── QUALIFIED_COLUMN: d.dept_id\n└── WHERE_CLAUSE\n    └── GREATER_THAN\n        ├── QUALIFIED_COLUMN: e.salary\n        └── LITERAL: 50000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preprocessing (Semantic Analysis):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates that tables (", (0,jsx_runtime.jsx)(_components.code, {
          children: "employees"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "departments"
        }), ") exist in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pg_catalog"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validates that columns (", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dept_name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salary"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dept_id"
        }), ") exist in those tables"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolves view references to their underlying queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifies data type compatibility in comparisons and joins"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolves ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " expansion to explicit column lists"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks for ambiguous column references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-sql-parser",
      children: "Pseudocode: SQL Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE Parse(tokens)\n    index = 0\n    \n    FUNCTION ParseQuery()\n        // Expect: SELECT select_list FROM table_ref [WHERE condition]\n        Match(\"SELECT\")\n        selectList = ParseSelectList()\n        Match(\"FROM\")\n        fromClause = ParseFromClause()\n        \n        condition = NULL\n        IF Peek() == \"WHERE\" THEN\n            Match(\"WHERE\")\n            condition = ParseCondition()\n        END IF\n        \n        RETURN QueryNode(selectList, fromClause, condition)\n    END FUNCTION\n    \n    FUNCTION ParseSelectList()\n        items = []\n        items.push(ParseColumn())\n        WHILE Peek() == \",\" DO\n            Match(\",\")\n            items.push(ParseColumn())\n        END WHILE\n        RETURN items\n    END FUNCTION\n    \n    FUNCTION ParseFromClause()\n        tables = []\n        tables.push(ParseTableRef())\n        WHILE Peek() IN {\"JOIN\", \",\", \"LEFT\", \"RIGHT\"} DO\n            // Handle JOIN variants\n            joinType = ParseJoinType()\n            tables.push(ParseTableRef())\n            IF Peek() == \"ON\" THEN\n                Match(\"ON\")\n                joinCond = ParseCondition()\n                tables.last().joinCondition = joinCond\n            END IF\n        END WHILE\n        RETURN tables\n    END FUNCTION\n    \n    RETURN ParseQuery()\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Detection Examples:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invalid SQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Detected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELCET * FROM t"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SELCET"
            }), " is not a recognized keyword"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical/Syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FORM t"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FORM"
            }), " not expected after SELECT list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM nonexistent_table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relation \"nonexistent_table\" does not exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT salary + 'hello' FROM t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot compare integer and text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM t WHERE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete WHERE clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Parsing checks syntax and semantics; a valid parse tree means the query is structurally correct but not necessarily efficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-query-cost-estimation",
      children: "13.3 Query Cost Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimizer needs a way to compare alternative execution plans quantitatively. Cost estimation provides this measure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "core-cost-formula",
      children: "Core Cost Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TotalCost = CPU_Cost + I/O_Cost + Memory_Cost + Communication_Cost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In practice, most cost models simplify to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TotalCost = (#disk_pages_read * cost_per_page_read) \n          + (#disk_pages_written * cost_per_page_write)\n          + (#tuples_processed * cost_per_tuple)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL uses arbitrary cost units with these default parameters:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seq_page_cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of reading a page sequentially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "random_page_cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of reading a page via random I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cpu_tuple_cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of processing one row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cpu_index_tuple_cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of processing one index entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cpu_operator_cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost of applying a single operator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "selectivity-estimation",
      children: "Selectivity Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selectivity is the fraction of rows that pass a filter. It ranges from 0 (no rows) to 1 (all rows). The optimizer estimates selectivity using statistics."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Equality predicate (", (0,jsx_runtime.jsx)(_components.code, {
          children: "col = value"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "selectivity = 1 / n_distinct(col)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "state"
      }), " has 50 distinct values, selectivity of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "state = 'CA'"
      }), " is 1/50 = 0.02 (2%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Range predicate (", (0,jsx_runtime.jsx)(_components.code, {
          children: "col > value"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "col < value"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "selectivity = (high_value - value) / (high_value - low_value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If statistics include a histogram, the optimizer uses bucket boundaries instead of a uniform assumption."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AND conjunction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "selectivity(A AND B) = selectivity(A) * selectivity(B)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This assumes independence -- a critical simplification that can be wrong when columns are correlated."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OR disjunction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "selectivity(A OR B) = selectivity(A) + selectivity(B) - selectivity(A) * selectivity(B)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Join selectivity:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "selectivity(R join S on key) = 1 / max(n_distinct(R.key), n_distinct(S.key))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estimated result size = |R| * |S| * selectivity"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cost-estimation-walkthrough",
      children: "Cost Estimation Walkthrough"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT * FROM employees WHERE department_id = 5;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "employees"
        }), " has 10,000 tuples, stored in 500 pages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "department_id"
        }), " has 100 distinct values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is an index on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "department_id"
        }), " with 3 B+ tree levels"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan A: Sequential Scan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cost = seq_page_cost * pages \n     + cpu_tuple_cost * estimated_rows \n     + cpu_operator_cost * estimated_rows\ncost = 1.0 * 500 + 0.01 * 10000 + 0.0025 * 10000\ncost = 500 + 100 + 25\ncost = 625\nestimated_rows = 10000 / 100 = 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan B: Index Scan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cost = random_page_cost * (index_height + estimated_pages)\n     + cpu_index_tuple_cost * estimated_rows\n     + cpu_tuple_cost * estimated_rows\ncost = 4.0 * (3 + 1) + 0.005 * 100 + 0.01 * 100\ncost = 16 + 0.5 + 1.0\ncost = 17.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Index scan is cheaper (17.5 vs 625), so the optimizer chooses Plan B."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-cost-comparison-trace-table",
      children: "Dry Run: Cost Comparison Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Plan"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Est Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Seq Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rand Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chosen?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "125"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "625"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "625.25"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "YES"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fetch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "21.5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "why-complexity-matters-the-10x-fallacy",
      children: "Why Complexity Matters: The 10x Fallacy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If statistics are outdated (actual rows = 1M but stats say 10K), the optimizer will grossly underestimate sequential scan cost:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Actual: 1.0 * 50000 + 0.01 * 1000000 = 50000 + 10000 = 60000\nEstimated: 1.0 * 500 + 0.01 * 10000 = 500 + 100 = 600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimizer would still pick the index (17.5 vs estimated 600), but the actual cost difference is 17.5 vs 60000 -- the index plan is even more favored. The real danger is the reverse: underestimating an index scan when the index has poor selectivity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cost estimation combines disk I/O and CPU costs using table statistics; accurate statistics are essential for optimal plan selection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-selection-operations",
      children: "13.4 Selection Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selection operations retrieve rows from a table based on a predicate. The DBMS has several access methods, each with different cost characteristics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-finding-a-book",
      children: "Real-World Analogy: Finding a Book"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Access Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linear Scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check every book on every shelf one by one -- guaranteed to find what you need, but slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books sorted by title; open to middle, compare, discard half, repeat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the library card catalog to find the exact shelf and position"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-sequential-linear-scan",
      children: "1. Sequential (Linear) Scan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scans every page of the table from first to last, checking each row against the predicate."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When used:"
      }), " No suitable index exists, predicate is not selective enough to justify index overhead, or the table is very small."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE SequentialScan(table, predicate)\n    result = empty list\n    FOR page IN table.pages:\n        FOR tuple IN page.tuples:\n            IF predicate.Evaluate(tuple) THEN\n                result.Add(tuple)\n            END IF\n        END FOR\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = pages * seq_page_cost\nRows evaluated = total_tuples\nI/O = pages (all pages read)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) where N = pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages read (B = total table pages)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T tuples evaluated (T = total tuples)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small tables, or when predicate is not selective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering to 1 row from a billion-row table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-binary-search-on-sorted-data",
      children: "2. Binary Search (on sorted data)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the table is physically sorted on the search column, binary search can locate the starting point in O(log N) page reads instead of O(N)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisite:"
      }), " Table must be stored in sorted order by the search key. Rare in practice -- usually only maintained for index-organized tables or specific clustering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE BinarySearch(table, key, predicate)\n    // Assumes table sorted on key\n    low = 0, high = table.pages - 1\n    result = empty list\n    \n    // Binary search for first matching page\n    WHILE low <= high DO\n        mid = (low + high) / 2\n        page = ReadPage(table, mid)\n        IF page.minKey() < key THEN\n            low = mid + 1\n        ELSE IF page.maxKey() > key THEN\n            high = mid - 1\n        ELSE\n            // Found candidate page\n            FOR tuple IN page.tuples:\n                IF predicate.Evaluate(tuple) THEN\n                    result.Add(tuple)\n                END IF\n            END FOR\n            // Scan adjacent pages as needed\n        END IF\n    END WHILE\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = log2(pages) * random_page_cost + result_pages * seq_page_cost\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N) for location + O(K) for result pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log(B) random reads + K sequential reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted data, range queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires physical ordering (clustered index)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-index-scan",
      children: "3. Index Scan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses a B+ tree index to locate matching tuples. The index is traversed from root to leaf, then the leaf pages provide tuple pointers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index Scan:"
        }), " Find matching index entries, then fetch corresponding tuples from the heap (table) file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index-Only Scan:"
        }), " All needed columns are in the index itself; no heap fetch needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE IndexScan(table, index, predicate)\n    result = empty list\n    key = ExtractKey(predicate)\n    leafPage = TraverseBTree(index.root, key)\n    \n    // Scan leaf pages for matching entries\n    FOR entry IN leafPage.entries:\n        IF entry.key == key THEN\n            IF predicate covered by index THEN\n                result.Add(entry.GetTupleFromIndex())\n            ELSE\n                tuple = FetchFromHeap(table, entry.tuplePointer)\n                IF predicate.Evaluate(tuple) THEN\n                    result.Add(tuple)\n                END IF\n            END IF\n        ELSE\n            BREAK // keys beyond range\n        END IF\n    END FOR\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = index_height * random_page_cost \n     + (index_leaf_pages_accessed * random_page_cost)\n     + (result_tuples * random_page_cost [for heap fetches])\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N + K) where K = result tuples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H (index height) + L (leaf pages) + K (heap fetches)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective predicates (< 5-10% of rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-selective predicates (fetching 30%+ of rows via random I/O is worse than sequential scan)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comparison-selection-methods",
      children: "Comparison: Selection Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sequential Scan"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Index Scan"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sorted by key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree index on key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O (selective)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log2(B) + K pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H + L + K pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O (full scan)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2B pages (index + heap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small tables, non-selective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted data, range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective predicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large table, single row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsorted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-selective predicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supports range?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (efficient)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additional index storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintenance cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/update index on write"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Sequential scan reads everything, index scan uses a tree to find specific rows, and binary search works on sorted data -- each has a clear cost tradeoff based on selectivity and data organization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-sorting-external-merge-sort",
      children: "13.5 Sorting (External Merge Sort)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When data does not fit in memory, the DBMS cannot use in-memory sort algorithms (QuickSort, TimSort). Instead, it uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "external merge sort"
      }), " -- a divide-and-conquer strategy that splits data into runs, sorts each run in memory, then merges them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-sorting-a-million-exam-papers",
      children: "Real-World Analogy: Sorting a Million Exam Papers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you have a million exam papers to sort by student name, but your desk only fits 1000 papers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 1 (Sort runs):"
        }), " Take 1000 papers, sort them on your desk, place the sorted stack on the floor. Repeat until all papers are in sorted stacks on the floor. You now have 1000 sorted stacks of 1000 papers each."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 2 (Merge):"
        }), " Take the top paper from each stack (1000 papers total on your desk), select the smallest name, write it to a new sorted output. When a stack runs out, grab the next batch from that pile. Continue until all papers are in one giant sorted sequence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "external-merge-sort-algorithm",
      children: "External Merge Sort Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Number of buffers available:"
      }), " B (e.g., B = 3 means 3 pages of memory)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 0 (Run Generation):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read B pages at a time into memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort these B pages using an in-memory sort (QuickSort)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write the sorted run back to disk"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 1, 2, ... (Merge Passes):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use B-1 input buffers and 1 output buffer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the first page from each of B-1 sorted runs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge the B-1 input streams into a single sorted output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write merged output to new runs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Number of passes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "N = total pages of data\nRuns after pass 0 = ceil(N / B)\nPasses needed = 1 + ceil(log_{B-1}(ceil(N/B)))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total I/O cost:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Total I/O = 2 * N * (passes + 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Factor of 2 because each pass reads and writes each page once."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-full-trace-table",
      children: "Dry Run: Full Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " N = 12 pages of data, B = 3 buffer pages available"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 0 (Run Generation):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input Pages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer Contents (sorted)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Run"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 2, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 7, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run 1: [2, 7, 9]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 1, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 3, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run 2: [1, 3, 8]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run 3: [4, 5, 6]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[12, 11, 10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run 4: [10, 11, 12]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial runs: 4 (each 3 pages long)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 1 (Merge with B-1 = 2-way merge):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merge Runs 1 and 2:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer 1 (Run 1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer 2 (Run 2)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Run"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 7, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 3, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 7, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 3, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1] Run out buffer, flush"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 7, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3] Flush"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 7]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 7, 8] Flush"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run A: [1,2,3,7,8,9]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merge Runs 3 and 4:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer 1 (Run 3)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer 2 (Run 4)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Run"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6] Flush"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11] Flush"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run B: [4,5,6,10,11,12]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 2 (Final Merge):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer 1 (Run A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer 2 (Run B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Final Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3, 7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FINAL"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Passes calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "N = 12 pages, B = 3 buffers\nPass 0 runs = ceil(12/3) = 4 runs\nTotal passes = 1 + ceil(log_{2}(4)) = 1 + 2 = 3 passes (Pass 0, Pass 1, Pass 2)\nI/O cost = 2 * 12 * 3 = 72 page transfers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "number-of-passes-formula",
      children: "Number of Passes Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Given:\nN = total pages in input\nB = available buffer pages\n\nPass 0 produces: ceil(N/B) initial runs\nEach merge pass reduces runs by factor of (B-1)\nSo number of merge passes = ceil(log_{B-1}(ceil(N/B)))\nTotal passes = 1 + ceil(log_{B-1}(ceil(N/B)))\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "N (pages)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B (buffers)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Passes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log4(20)) = 1+3 = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2", (0,jsx_runtime.jsx)(_components.em, {
              children: "100"
            }), "4 = 800"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log9(10)) = 1+2 = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2", (0,jsx_runtime.jsx)(_components.em, {
              children: "100"
            }), "3 = 600"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log9(100)) = 1+3 = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2", (0,jsx_runtime.jsx)(_components.em, {
              children: "1000"
            }), "4 = 8000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log99(10)) = 1+1 = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2", (0,jsx_runtime.jsx)(_components.em, {
              children: "1000"
            }), "2 = 4000"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log999(1000)) = 1+1 = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2", (0,jsx_runtime.jsx)(_components.em, {
              children: "1e6"
            }), "2 = 4,000,000"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-of-external-merge-sort",
      children: "C++ Implementation of External Merge Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <fstream>\n#include <vector>\n#include <algorithm>\n#include <queue>\n#include <cstdlib>\n#include <string>\n\nstruct Page {\n    std::vector<int> records;\n    \n    void Sort() { std::sort(records.begin(), records.end()); }\n};\n\n// Min-heap entry for k-way merge\nstruct HeapEntry {\n    int value;\n    int runId;\n    \n    bool operator>(const HeapEntry& other) const {\n        return value > other.value;\n    }\n};\n\nclass ExternalMergeSort {\nprivate:\n    int bufferPages;\n    std::string inputFile;\n    std::string outputFile;\n    \npublic:\n    ExternalMergeSort(int buffers, const std::string& in, const std::string& out)\n        : bufferPages(buffers), inputFile(in), outputFile(out) {}\n    \n    // Phase 0: Generate initial sorted runs\n    std::vector<std::string> GenerateRuns() {\n        std::ifstream in(inputFile);\n        std::vector<std::string> runFiles;\n        int value;\n        int runId = 0;\n        \n        while (in.peek() != EOF) {\n            Page page;\n            page.records.clear();\n            \n            // Read B pages (B * pageSize records)\n            for (int i = 0; i < bufferPages * 100; i++) {\n                if (!(in >> value)) break;\n                page.records.push_back(value);\n            }\n            \n            if (page.records.empty()) break;\n            \n            // Sort run in memory\n            page.Sort();\n            \n            // Write sorted run to disk\n            std::string runFile = \"run_\" + std::to_string(runId++) + \".dat\";\n            std::ofstream out(runFile);\n            for (int v : page.records) {\n                out << v << \"\\n\";\n            }\n            out.close();\n            runFiles.push_back(runFile);\n        }\n        \n        in.close();\n        return runFiles;\n    }\n    \n    // Merge runs using a min-heap (replacement selection)\n    std::string MergeRuns(const std::vector<std::string>& runFiles, int pass) {\n        int k = runFiles.size();\n        std::vector<std::ifstream*> inputs(k);\n        std::priority_queue<HeapEntry, std::vector<HeapEntry>, \n                            std::greater<HeapEntry>> minHeap;\n        \n        // Open all input runs and read first value from each\n        for (int i = 0; i < k; i++) {\n            inputs[i] = new std::ifstream(runFiles[i]);\n            int val;\n            if (*inputs[i] >> val) {\n                minHeap.push({val, i});\n            }\n        }\n        \n        std::string mergedFile = \"merged_pass_\" + std::to_string(pass) + \".dat\";\n        std::ofstream out(mergedFile);\n        \n        while (!minHeap.empty()) {\n            HeapEntry smallest = minHeap.top();\n            minHeap.pop();\n            out << smallest.value << \"\\n\";\n            \n            // Read next value from the same run\n            int nextVal;\n            if (*inputs[smallest.runId] >> nextVal) {\n                minHeap.push({nextVal, smallest.runId});\n            }\n        }\n        \n        out.close();\n        for (int i = 0; i < k; i++) {\n            inputs[i]->close();\n            delete inputs[i];\n        }\n        return mergedFile;\n    }\n    \n    void Sort() {\n        auto runs = GenerateRuns();\n        int pass = 0;\n        \n        while (runs.size() > 1) {\n            std::vector<std::string> nextRuns;\n            pass++;\n            \n            // Merge (bufferPages - 1) runs at a time\n            for (size_t i = 0; i < runs.size(); i += (bufferPages - 1)) {\n                std::vector<std::string> batch;\n                for (size_t j = i; j < runs.size() && j < i + (bufferPages - 1); j++) {\n                    batch.push_back(runs[j]);\n                }\n                std::string merged = MergeRuns(batch, pass);\n                nextRuns.push_back(merged);\n            }\n            \n            // Cleanup old run files\n            for (const auto& rf : runs) {\n                std::remove(rf.c_str());\n            }\n            \n            runs = nextRuns;\n        }\n        \n        // Rename final output\n        if (!runs.empty()) {\n            std::rename(runs[0].c_str(), outputFile.c_str());\n        }\n        \n        std::cout << \"External sort complete. Passes: \" << pass << std::endl;\n    }\n};\n\nint main() {\n    ExternalMergeSort sorter(3, \"input.dat\", \"sorted_output.dat\");\n    sorter.Sort();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-of-external-merge-sort",
      children: "Python Implementation of External Merge Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\nimport os\nimport tempfile\nimport math\n\n\nclass ExternalMergeSort:\n    \"\"\"\n    External merge sort for data that does not fit in memory.\n    \n    Usage:\n        sorter = ExternalMergeSort(buffer_pages=3)\n        sorter.sort('input.txt', 'output.txt')\n    \"\"\"\n    \n    def __init__(self, buffer_pages: int = 100):\n        self.B = buffer_pages\n        self.page_size = 100  # records per page\n        \n    def _sort_run(self, records, run_id):\n        \"\"\"Sort a chunk of records in memory and write to temp file.\"\"\"\n        records.sort()\n        tmp = tempfile.NamedTemporaryFile(mode='w', delete=False, \n                                          prefix=f'run_{run_id}_')\n        for r in records:\n            tmp.write(f\"{r}\\n\")\n        tmp.close()\n        return tmp.name\n    \n    def _merge_runs(self, run_files, pass_num):\n        \"\"\"Merge multiple sorted runs into one using a min-heap.\"\"\"\n        merged = tempfile.NamedTemporaryFile(mode='w', delete=False,\n                                              prefix=f'pass_{pass_num}_')\n        heap = []\n        file_handles = []\n        \n        # Open each run file and push first record\n        for i, fname in enumerate(run_files):\n            f = open(fname, 'r')\n            file_handles.append(f)\n            first_val = f.readline().strip()\n            if first_val:\n                heapq.heappush(heap, (int(first_val), i))\n        \n        # k-way merge\n        while heap:\n            val, run_id = heapq.heappop(heap)\n            merged.write(f\"{val}\\n\")\n            \n            next_line = file_handles[run_id].readline().strip()\n            if next_line:\n                heapq.heappush(heap, (int(next_line), run_id))\n        \n        # Cleanup\n        for f in file_handles:\n            f.close()\n        for fname in run_files:\n            os.unlink(fname)\n        \n        merged.close()\n        return merged.name\n    \n    def sort(self, input_path, output_path):\n        \"\"\"External sort: runs + multi-pass merge.\"\"\"\n        # Phase 0: Generate sorted runs\n        run_files = []\n        run_id = 0\n        chunk_size = self.B * self.page_size\n        \n        with open(input_path, 'r') as f:\n            while True:\n                records = []\n                for _ in range(chunk_size):\n                    line = f.readline()\n                    if not line:\n                        break\n                    records.append(int(line.strip()))\n                if not records:\n                    break\n                run_files.append(self._sort_run(records, run_id))\n                run_id += 1\n        \n        # Compute expected passes\n        n = run_id\n        passes = 1 + math.ceil(math.log(n, self.B - 1)) if n > 1 else 0\n        print(f\"Initial runs: {n}, B={self.B}, expected passes: {passes}\")\n        \n        # Merge passes\n        pass_num = 0\n        while len(run_files) > 1:\n            pass_num += 1\n            merged_runs = []\n            batch_size = self.B - 1  # merge B-1 runs at a time\n            \n            for i in range(0, len(run_files), batch_size):\n                batch = run_files[i:i + batch_size]\n                merged_runs.append(self._merge_runs(batch, pass_num))\n            \n            run_files = merged_runs\n            print(f\"Pass {pass_num}: {len(run_files)} runs remaining\")\n        \n        # Final output\n        if run_files:\n            os.rename(run_files[0], output_path)\n        \n        total_passes = pass_num + 1  # +1 for pass 0\n        print(f\"External sort complete in {total_passes} passes\")\n        print(f\"Total I/O: {2 * n * total_passes} page transfers\")\n\n\n# Example usage\nif __name__ == \"__main__\":\n    # Create test data: 10000 random integers\n    import random\n    with open('test_input.txt', 'w') as f:\n        for _ in range(10000):\n            f.write(f\"{random.randint(0, 100000)}\\n\")\n    \n    # Sort with B=5 buffer pages\n    sorter = ExternalMergeSort(buffer_pages=5)\n    sorter.sort('test_input.txt', 'test_output.txt')\n    \n    # Verify\n    with open('test_output.txt') as f:\n        numbers = [int(line.strip()) for line in f]\n    assert numbers == sorted(numbers), \"Sort verification failed\"\n    print(\"Verification passed: output is correctly sorted\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (I/O)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N * passes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each pass reads and writes all N pages. Pass count depends on B."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (CPU)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N) in run gen + O(N log K) in merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run gen uses in-memory O(N/B * B log B) = O(N log B). Merge does O(N * log K) comparisons for K-way merge."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space (disk)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary files store intermediate runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space (memory)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B buffer pages in memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The I/O cost dominates. CPU sorting cost is negligible compared to page reads/writes. The goal of external sort is to MINIMIZE the number of passes by maximizing available buffer memory."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "More buffers = fewer passes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each buffer adds a merge fan-in, reducing pass count logarithmically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Twice the memory = one fewer pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling B roughly halves the number of passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Passes cost 2N I/O each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each pass reads all pages once and writes them once"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-external-merge-sort",
      children: "A&D Table: External Merge Sort"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles arbitrarily large data that does not fit in memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N) I/O cost can be high for very large N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood, predictable performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires temporary disk space for runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge fan-in adaptable to available memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting overhead even if data is nearly sorted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable sort (preserves input order of equal keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard external sort does not exploit partial ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable (multiple runs sorted independently)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O bound; disk becomes bottleneck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for merge join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for real-time/streaming workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Memory overflow:"
      }), " If the input data contains records larger than the buffer, the sort must read less per run. Some DBMS handle this by spilling individual records."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Data fits in memory:"
      }), " If N <= B, the sort completes in one pass (just in-memory sort, no merge needed) with I/O = 2N (read once, write once)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Key duplication:"
      }), " External merge sort is stable if the merge step maintains input order for equal keys. Most DBMS sort implementations are not stable by default."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Concurrent writes:"
      }), " If data is being modified during the sort, the result is undefined. DBMS snapshot isolation solves this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " External merge sort enables sorting data larger than memory by creating sorted runs and merging them in multiple passes, with I/O cost proportional to data size times number of passes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-join-operations",
      children: "13.6 Join Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Join operations combine rows from two tables based on a related column. They are the most performance-critical operations in query processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comparison-at-a-glance",
      children: "Comparison at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requires Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requires Sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop Join (NLJ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Nested Loop Join (BNLJ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "* ceil("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed Nested Loop Join (INLJ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "* cost_per_index_probe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (inner)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort-Merge Join (SMJ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N + M log M + N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large sorted data, ORDER BY already needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(3*(N + M)) pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large unsorted equi-joins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1361-nested-loop-join-nlj",
      children: "13.6.1 Nested Loop Join (NLJ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " For each student in a classroom (outer table), check every book in the library (inner table) to find which ones the student has borrowed. Simple but slow -- O(students * books)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE NestedLoopJoin(outer, inner, joinPredicate)\n    result = empty list\n    FOR outerTuple IN outer:\n        FOR innerTuple IN inner:\n            IF joinPredicate.Evaluate(outerTuple, innerTuple) THEN\n                result.Add( (outerTuple, innerTuple) )\n            END IF\n        END FOR\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "I/O Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let M = pages of outer table, N = pages of inner table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = M + (M * N)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The outer table is scanned once (M pages). For each of M pages, the inner table is scanned completely (N pages). Total: M + M*N page reads."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the outer table has 1000 pages and inner has 500 pages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = 1000 + 1000 * 500 = 501,000 page reads\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization:"
      }), " Always choose the smaller table as the outer table."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Outer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000 pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 + 1000*500 = 501,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500 pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 + 500*1000 = 500,500"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The difference is small when both are large. The real savings come from using indexes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " One table is very small (fits in a few pages), or when no indexes exist and tables are tiny."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1362-block-nested-loop-join-bnlj",
      children: "13.6.2 Block Nested Loop Join (BNLJ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of reading one page at a time from the outer table, BNLJ reads B-2 pages (a block) into memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE BlockNestedLoopJoin(outer, inner, B, joinPredicate)\n    // B = available buffer pages\n    // Use B-2 pages for outer block, 1 page for inner, 1 for output\n    result = empty list\n    blockSize = B - 2\n    \n    FOR blockStart = 0 TO outer.pages STEP blockSize:\n        block = ReadPages(outer, blockStart, blockSize)\n        \n        FOR innerPage IN inner.pages:\n            FOR outerTuple IN block:\n                FOR innerTuple IN innerPage:\n                    IF joinPredicate.Evaluate(outerTuple, innerTuple) THEN\n                        result.Add( (outerTuple, innerTuple) )\n                    END IF\n                END FOR\n            END FOR\n        END FOR\n    END FOR\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "I/O Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B = available buffer pages, M = outer pages, N = inner pages."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = M + ceil(M / (B-2)) * N\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The outer table is always read once (M). The inner table is read once per outer block (ceil(M/(B-2)) times)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings vs NLJ"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 + 1000*500 = 501,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same (B-2 = 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 + 125*500 = 63,500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "87% reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 + 11*500 = 6,500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "98.7% reduction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " With B = 10, the inner table is scanned only 125 times instead of 1000 times. With B = 100, only 11 times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1363-indexed-nested-loop-join-inlj",
      children: "13.6.3 Indexed Nested Loop Join (INLJ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the inner table has an index on the join column, each outer tuple can probe the index instead of scanning the entire inner table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE IndexedNestedLoopJoin(outer, inner, index, joinPredicate)\n    result = empty list\n    \n    FOR outerTuple IN outer:\n        key = ExtractJoinValue(outerTuple)\n        matchingTuples = IndexLookup(index, key)\n        \n        FOR innerTuple IN matchingTuples:\n            result.Add( (outerTuple, innerTuple) )\n        END FOR\n    END FOR\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "I/O Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let H = height of B+ tree (typically 2-4 for large tables).\nLet K = estimated matching tuples in inner per outer tuple."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = M + M * (H + K)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "M (outer pages)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inner Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "H"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vs NLJ"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000 pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 + 100*4 = 500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 + 100*10000 = 1,000,100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000 pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 + 1000*4 = 5,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 + 1000*10000 = 10,001,000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "INLJ is the most efficient join when the outer table is small and there is an index on the inner join column."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1364-sort-merge-join-smj",
      children: "13.6.4 Sort-Merge Join (SMJ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorts both tables on the join attribute, then merges them in a single pass."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE SortMergeJoin(R, S, joinAttr)\n    // Phase 1: Sort both inputs\n    Sort(R, joinAttr)\n    Sort(S, joinAttr)\n    \n    // Phase 2: Merge\n    result = empty list\n    i = 0, j = 0\n    \n    WHILE i < len(R) AND j < len(S):\n        cmp = Compare(R[i][joinAttr], S[j][joinAttr])\n        \n        IF cmp == EQUAL:\n            // Handle duplicates: scan all matching pairs\n            jStart = j\n            \n            WHILE j < len(S) AND Compare(R[i][joinAttr], S[j][joinAttr]) == EQUAL:\n                result.Add(R[i], S[j])\n                j++\n            END WHILE\n            \n            WHILE i + 1 < len(R) AND Compare(R[i+1][joinAttr], S[jStart][joinAttr]) == EQUAL:\n                i++\n                j = jStart\n                WHILE j < len(S) AND Compare(R[i][joinAttr], S[j][joinAttr]) == EQUAL:\n                    result.Add(R[i], S[j])\n                    j++\n                END WHILE\n            END WHILE\n            \n            j = jStart + 1; i++\n            \n        ELSE IF cmp < 0:\n            i++\n        ELSE:\n            j++\n        END IF\n    END WHILE\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "I/O Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let M = pages of R, N = pages of S."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sort(R) cost = 2 * M * passes_R\nSort(S) cost = 2 * N * passes_S\nMerge cost = M + N\nTotal = 2*M*passes_R + 2*N*passes_S + M + N\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If M = 1000, N = 500, B = 10:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "passes_R = 1 + ceil(log_9(100)) = 4\npasses_S = 1 + ceil(log_9(50)) = 3\nSort(R) cost = 2 * 1000 * 4 = 8000\nSort(S) cost = 2 * 500 * 3 = 3000\nMerge cost = 1000 + 500 = 1500\nTotal = 8000 + 3000 + 1500 = 12,500 page reads\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duplicate handling complexity:"
      }), " When there are many duplicate join keys, the merge phase can degenerate. In the worst case (all rows have the same key), SMJ produces a cross-product of both tables, and the merge pointer may need to backtrack repeatedly. This worst-case complexity is O(N * M)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1365-hash-join",
      children: "13.6.5 Hash Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Builds a hash table on the smaller table (build side), then probes it with the larger table (probe side)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pseudocode:\n\nPROCEDURE HashJoin(R, S, joinAttr)\n    // Choose smaller table as build side\n    build = (pages(R) < pages(S)) ? R : S\n    probe = (pages(R) < pages(S)) ? S : R\n    \n    // Phase 1: Build hash table\n    hashTable = new HashTable()\n    \n    FOR tuple IN build:\n        key = tuple[joinAttr]\n        hashTable.Insert(key, tuple)\n    END FOR\n    \n    // Phase 2: Probe hash table\n    result = empty list\n    \n    FOR tuple IN probe:\n        key = tuple[joinAttr]\n        matches = hashTable.Lookup(key)\n        \n        FOR match IN matches:\n            result.Add(match, tuple)\n        END FOR\n    END FOR\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "I/O Cost Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the hash table fits in memory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = p(build) + p(probe) = M + N\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read both tables once. Build hash table, probe, done."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the hash table does NOT fit in memory, the DBMS uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grace Hash Join"
      }), " (partitioned hash join):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 (Partition):"
      }), " Hash both tables into partitions using a hash function. Write partitions to disk.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 (Build/Probe):"
      }), " For each partition, build hash table (mem) and probe (disk)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cost = 2*(M+N) + (M+N) = 3*(M+N) approximately\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read both tables for partitioning (2*(M+N)), then read partitions back for build/probe (M+N)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: Hash Join"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R = { (1, 'A'), (3, 'B'), (2, 'C'), (1, 'D'), (4, 'E') }"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S = { (1, 'X'), (2, 'Y'), (5, 'Z'), (1, 'W') }"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Join on col1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build side (assume R is smaller):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Build Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tuple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Bucket"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, 'A')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[1 % 3] = [(1, 'A')]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, 'B')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[0] = [(3, 'B')]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, 'C')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[2] = [(2, 'C')]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, 'D')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[1] = [(1, 'A'), (1, 'D')]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, 'E')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[1] = [(1, 'A'), (1, 'D'), (4, 'E')]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hash table state (hash mod 3):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bucket[0]: [(3, 'B')]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bucket[1]: [(1, 'A'), (1, 'D'), (4, 'E')]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bucket[2]: [(2, 'C')]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Probe phase:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Probe Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (from S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, 'A'), (1, 'D')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, 'A')-(1, 'X'), (1, 'D')-(1, 'X')"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 (from S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, 'C')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, 'C')-(2, 'Y')"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 (from S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none -- 5 != 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (from S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bucket[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, 'A'), (1, 'D')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, 'A')-(1, 'W'), (1, 'D')-(1, 'W')"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final result:"
      }), " 5 rows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-hash-join-simulator",
      children: "C++ Implementation: Hash Join Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\n#include <utility>\n\nstruct Tuple {\n    int key;\n    std::string value;\n    \n    Tuple(int k, const std::string& v) : key(k), value(v) {}\n    void Print() const {\n        std::cout << \"(\" << key << \", \" << value << \")\";\n    }\n};\n\nclass HashJoinSimulator {\nprivate:\n    std::vector<Tuple> R; // build relation\n    std::vector<Tuple> S; // probe relation\n    \npublic:\n    HashJoinSimulator(const std::vector<Tuple>& r, const std::vector<Tuple>& s)\n        : R(r), S(s) {}\n    \n    struct JoinResult {\n        Tuple left;\n        Tuple right;\n        JoinResult(const Tuple& l, const Tuple& r) : left(l), right(r) {}\n    };\n    \n    std::vector<JoinResult> Execute() {\n        // Choose smaller as build side\n        const auto& build = (R.size() <= S.size()) ? R : S;\n        const auto& probe = (R.size() <= S.size()) ? S : R;\n        \n        std::cout << \"Build side size: \" << build.size() << \" tuples\\n\";\n        std::cout << \"Probe side size: \" << probe.size() << \" tuples\\n\";\n        \n        // Phase 1: Build hash table\n        std::unordered_map<int, std::vector<Tuple>> hashTable;\n        for (const auto& t : build) {\n            hashTable[t.key].push_back(t);\n            std::cout << \"  Hashed: (\" << t.key << \", \" << t.value << \")\\n\";\n        }\n        \n        // Phase 2: Probe\n        std::vector<JoinResult> results;\n        for (const auto& t : probe) {\n            auto it = hashTable.find(t.key);\n            if (it != hashTable.end()) {\n                for (const auto& match : it->second) {\n                    results.push_back(JoinResult(match, t));\n                    std::cout << \"  Matched: \";\n                    match.Print();\n                    std::cout << \" x \";\n                    t.Print();\n                    std::cout << \"\\n\";\n                }\n            }\n        }\n        \n        return results;\n    }\n    \n    void PrintResults(const std::vector<JoinResult>& results) {\n        std::cout << \"\\n=== Hash Join Results (\" << results.size() \n                  << \" rows) ===\\n\";\n        for (const auto& r : results) {\n            r.left.Print();\n            std::cout << \" JOIN \";\n            r.right.Print();\n            std::cout << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    std::vector<Tuple> R = {\n        Tuple(1, \"Alice\"), Tuple(3, \"Bob\"),\n        Tuple(2, \"Charlie\"), Tuple(1, \"Diana\"),\n        Tuple(4, \"Eve\")\n    };\n    \n    std::vector<Tuple> S = {\n        Tuple(1, \"Engineer\"), Tuple(2, \"Designer\"),\n        Tuple(5, \"Manager\"), Tuple(1, \"Analyst\")\n    };\n    \n    HashJoinSimulator hj(R, S);\n    auto results = hj.Execute();\n    hj.PrintResults(results);\n    \n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-hash-join-with-io-cost-tracking",
      children: "Python Implementation: Hash Join with I/O Cost Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import List, Dict, Tuple, Optional\nimport math\n\n\n@dataclass\nclass Tuple:\n    key: int\n    value: str\n\n    def __repr__(self):\n        return f\"({self.key}, '{self.value}')\"\n\n\nclass HashJoinWithIO:\n    \"\"\"\n    Hash join implementation with detailed I/O cost tracking\n    and memory budget simulation.\n    \"\"\"\n    \n    def __init__(self, buffer_pages: int, page_size: int = 2):\n        self.B = buffer_pages       # available memory in pages\n        self.page_size = page_size  # tuples per page\n        self.io_reads = 0\n        self.io_writes = 0\n    \n    def _partition(self, relation: List[Tuple], name: str) -> Dict[int, List[Tuple]]:\n        \"\"\"Partition relation by hash of key.\"\"\"\n        partitions: Dict[int, List[Tuple]] = {}\n        for t in relation:\n            bucket = t.key % self.B  # hash to partition\n            if bucket not in partitions:\n                partitions[bucket] = []\n            partitions[bucket].append(t)\n        \n        # Track I/O: reading relation\n        pages = math.ceil(len(relation) / self.page_size)\n        self.io_reads += pages\n        # Track I/O: writing partitions\n        for bucket, tuples in partitions.items():\n            part_pages = math.ceil(len(tuples) / self.page_size)\n            self.io_writes += part_pages\n            print(f\"  Partition {name}[{bucket}]: {len(tuples)} tuples, \"\n                  f\"{part_pages} pages\")\n        \n        return partitions\n    \n    def join(self, R: List[Tuple], S: List[Tuple]) -> List[Tuple[Tuple, Tuple]]:\n        \"\"\"\n        Grace Hash Join: partition both sides, then build/probe per partition.\n        \"\"\"\n        self.io_reads = 0\n        self.io_writes = 0\n        \n        print(f\"\\n=== Grace Hash Join ===\")\n        print(f\"Buffer pages: {self.B}, Page size: {self.page_size} tuples\")\n        print(f\"R: {len(R)} tuples, S: {len(S)} tuples\")\n        \n        # Phase 1: Partition both relations\n        print(f\"\\nPhase 1: Partitioning\")\n        r_partitions = self._partition(R, \"R\")\n        s_partitions = self._partition(S, \"S\")\n        \n        # Phase 2: Build and probe per partition\n        print(f\"\\nPhase 2: Build & Probe\")\n        results: List[Tuple[Tuple, Tuple]] = []\n        \n        for bucket in range(self.B):\n            if bucket not in r_partitions and bucket not in s_partitions:\n                continue\n            \n            build = r_partitions.get(bucket, [])\n            probe = s_partitions.get(bucket, [])\n            \n            # Choose smaller as build side\n            if len(probe) < len(build):\n                build, probe = probe, build\n            \n            if not build or not probe:\n                continue\n            \n            print(f\"  Bucket {bucket}: build={len(build)}, probe={len(probe)}\")\n            \n            # Build hash table (in memory for this partition)\n            ht: Dict[int, List[Tuple]] = {}\n            for t in build:\n                if t.key not in ht:\n                    ht[t.key] = []\n                ht[t.key].append(t)\n            \n            # Probe\n            for t in probe:\n                if t.key in ht:\n                    for match in ht[t.key]:\n                        results.append((match, t))\n            \n            # Track I/O: reading partitions back\n            self.io_reads += math.ceil(len(build) / self.page_size)\n            self.io_reads += math.ceil(len(probe) / self.page_size)\n        \n        # Print I/O summary\n        total_io = self.io_reads + self.io_writes\n        print(f\"\\n=== I/O Summary ===\")\n        print(f\"Reads: {self.io_reads} pages\")\n        print(f\"Writes: {self.io_writes} pages\")\n        print(f\"Total I/O: {total_io} pages\")\n        print(f\"Approx 3*(|R|+|S|): {3 * (math.ceil(len(R)/self.page_size) + math.ceil(len(S)/self.page_size))} pages\")\n        \n        return results\n\n\n# Example usage\nif __name__ == \"__main__\":\n    R = [Tuple(1, 'A'), Tuple(3, 'B'), Tuple(2, 'C'), \n         Tuple(1, 'D'), Tuple(4, 'E'), Tuple(6, 'F')]\n    S = [Tuple(1, 'X'), Tuple(2, 'Y'), Tuple(5, 'Z'), \n         Tuple(1, 'W'), Tuple(3, 'V')]\n    \n    hj = HashJoinWithIO(buffer_pages=3, page_size=2)\n    results = hj.join(R, S)\n    \n    print(f\"\\nResult rows: {len(results)}\")\n    for left, right in results:\n        print(f\"  {left} JOIN {right}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-join-algorithms",
      children: "Complexity Analysis: Join Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BNLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "* log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-join-algorithms",
      children: "A&D Table: Join Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, works with any join condition, no index needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case O(M*N) I/O -- catastrophic for large tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BNLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much less I/O than NLJ with more buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still O(M*N/B) I/O, not great for very large data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for small outer + indexed inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires index; multiple index lookups are random I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast merge once sorted; good for pre-sorted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting overhead; degenerates on duplicate keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest for large equi-joins; O(N) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only equi-joins; hash table memory requirements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-join-operations",
      children: "Edge Cases in Join Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Data skew in hash join:"
      }), " If many tuples hash to the same bucket, that partition may not fit in memory, causing recursive partitioning or spill-to-disk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Null values in join key:"
      }), " Hash functions on null produce undetermined results. Most DBMS handle null-by-null joins by not matching them (NULL != NULL in SQL)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Many-to-many joins:"
      }), " Both SMJ and hash join can produce large intermediate results. SMJ degenerates to O(N*M) when all keys are equal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Memory pressure:"
      }), " NLJ with a large outer table that was supposed to be \"small\" can cause severe performance degradation if statistics are wrong."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Join algorithm selection depends on data size, index availability, sortedness, and join predicate type -- hash join dominates for unsorted equi-joins while merge join excels with pre-sorted data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-query-optimization",
      children: "13.7 Query Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query optimization transforms the parse tree into an efficient execution plan. It is the most complex and important part of query processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-gps-route-planning",
      children: "Real-World Analogy: GPS Route Planning"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPS Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parse tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Drive from current location to destination\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equivalence rules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different routes that reach the same destination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost-based selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS picks the fastest route based on current traffic data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heuristic optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Always prefer highways\" -- simple rules that usually work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic data, road closures, typical congestion patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1371-equivalence-rules",
      children: "13.7.1 Equivalence Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Equivalence rules define transformations that preserve query semantics but change execution order."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transformation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection cascade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sigma_{c1 AND c2}(R) = sigma_{c1}(sigma_{c2}(R))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break complex filters into simpler ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection commutativity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sigma_{c1}(sigma_{c2}(R)) = sigma_{c2}(sigma_{c1}(R))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order of filters does not matter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection pushing (join)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sigma_{c}(R JOIN S) = sigma_{c}(R) JOIN S if c references only R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter first, then join"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection pushing (union)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sigma_{c}(R UNION S) = sigma_{c}(R) UNION sigma_{c}(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push filter into each branch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projection rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transformation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Projection pushing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pi_{cols}(R JOIN S) = pi_{cols}(pi_{R.cols}(R) JOIN pi_{S.cols}(S))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Projection elimination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pi_{all}(R) = R"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Join rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transformation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join commutativity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R JOIN S = S JOIN R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join associativity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(R JOIN S) JOIN T = R JOIN (S JOIN T)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Left-deep vs right-deep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different join tree shapes are equivalent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1372-cost-based-optimization",
      children: "13.7.2 Cost-Based Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimizer enumerates alternative plans and picks the cheapest."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step optimization trace:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Query: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT e.name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE e.salary > 50000;"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Statistics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "employees: 10,000 rows, 500 pages, 100 distinct dept_ids"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "departments: 100 rows, 5 pages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "salary > 50000 selectivity: 0.3 (30% of employees)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Generate initial logical plan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project [e.name, d.dept_name]\n    |\nJoin (e.dept_id = d.dept_id)\n    |\nSelect (e.salary > 50000)\n    |\nemployees         departments\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Apply equivalence rules to generate alternatives"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 1 (No pushdown):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project\n    |\nJoin (Hash)\n    |\nSelect (Filter)     Seq Scan (departments)\n    |\nSeq Scan (employees)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 2 (Selection pushdown + join reorder):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project\n    |\nJoin (Hash)\n    |\nSelect (Filter)     Seq Scan (departments)\n    |\nSeq Scan (employees)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same as Plan 1 but filter is applied earlier."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 3 (Index NLJ with departments as outer):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project\n    |\nNested Loop\n    |\nSeq Scan (depts)    Index Scan (employees.dept_id)\n                        |\n                    Select (salary > 50000 on fetched rows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 4 (Merge join with explicit sort):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project\n    |\nMerge Join\n    |\nSort (dept_id)      Sort (dept_id)\n    |                    |\nSelect (Filter)     Seq Scan (departments)\n    |\nSeq Scan (employees)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Estimate costs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 1 (Hash Join):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Seq Scan employees: 500 pages * 1.0 = 500\nFilter: 10000 * 0.01 = 100\n  -> 3000 rows (after 30% selectivity)\n\nHash build (departments): 5 pages * 1.0 = 5\nHash probe: 3000 * O(1) = negligible\nHash Join total: 500 + 100 + 5 = 605\nProject: negligible\nTotal: ~605\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 3 (NLJ with index):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Seq Scan departments: 5 pages * 1.0 = 5\n  -> 100 rows\nFor each of 100 dept rows, probe employees index:\nIndex probe: 100 * (3 + 1) * 4.0 = 1600  (B+ tree height 3, 1 leaf, random I/O)\nFetch + filter: 100 * 1 * 1.0 + 100 * 0.01 = 101\nTotal: 5 + 1600 + 101 = 1706\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan 4 (Merge Join):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sort employees: 2*500*4 + 500 = 4500 (assuming 4 passes)\nSort departments: 2*5*1 + 5 = 15 (1 pass, fits in memory)\nMerge: 500 + 5 = 505\nTotal: 4500 + 15 + 505 = 5020\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final decision:"
      }), " Plan 1 (Hash Join) has the lowest estimated cost at ~605."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1373-heuristic-optimization",
      children: "13.7.3 Heuristic Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heuristic optimization applies fixed rules without cost estimation. It is faster but may produce suboptimal plans."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common heuristic rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push selections down"
        }), " -- Filter as early as possible (reduces rows early)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push projections down"
        }), " -- Remove unnecessary columns early"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replace Cartesian products with joins"
        }), " -- If there is a join condition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reorder joins so the smallest relation is inner-most"
        }), " -- For NLJ"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replace UNION with UNION ALL if no duplicates"
        }), " -- Avoid sort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use indexes when available"
        }), " -- Always prefer index scan over seq scan if predicate is selective"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example of heuristic optimization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Original:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project [e.name, d.dept_name]\n    |\nJoin (e.dept_id = d.dept_id)\n    |\nSelect (e.salary > 50000)\n    |\nCartesian Product\n    |\nemployees           departments\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After heuristic rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace Cartesian product with join -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "employees JOIN departments ON e.dept_id = d.dept_id"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push selection down -> Filter employees before join"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push projection down -> Only keep needed columns early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for index usage -> Use index on dept_id if available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final (without cost estimation):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project [e.name, d.dept_name]\n    |\nIndex NLJ (dept_id)\n    |\nFilter (salary > 50000)     Seq Scan (departments)\n    |\nIndex Scan (employees.dept_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comparison-heuristic-vs-cost-based-optimization",
      children: "Comparison: Heuristic vs Cost-Based Optimization"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heuristic Optimization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost-Based Optimization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply fixed rules blindly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate multiple plans, choose cheapest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, no overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower optimization, better execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for simple queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May miss optimal plan if not all plans considered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statistics needed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (histograms, row counts, distinct values)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adaptability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same rules always applied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapts to data distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad plan for unusual data shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential enumeration time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example DBMS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL (before 8.0, simple queries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, Oracle, SQL Server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid approach:"
      }), " Most modern DBMS use both. Heuristics prune the search space, and cost-based selection chooses among the remaining candidates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Query optimization uses equivalence rules to generate alternative plans, heuristics to prune the search space, and cost estimation to select the cheapest plan."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "138-materialization-vs-pipelining",
      children: "13.8 Materialization vs Pipelining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These two strategies determine how results flow between operators in the execution plan."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-restaurant-kitchen",
      children: "Real-World Analogy: Restaurant Kitchen"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kitchen Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipelining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cook prepares one plate at a time: chop, cook, plate, send to waiter. Next plate starts immediately. First customer gets food quickly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Materialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cook chops ALL vegetables first, stores them in a bowl. Then cooks ALL portions. Then plates ALL dishes. First customer waits longer, but batch operations are more efficient."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pipelining-iterator-model",
      children: "Pipelining (Iterator Model)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each operator in the query plan is an iterator with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Open()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Next()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Close()"
      }), " methods. Data flows one tuple at a time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Operator A calls Operator B.Next()\n  -> Operator B processes one tuple and returns it\n  -> Operator A processes the tuple\n  -> Operator A calls Operator B.Next() again\n  -> ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low latency needed (first row appears quickly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result set is very large (avoid storing it all)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intermediate results do not need to be reused"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT * FROM employees WHERE salary > 100000 ORDER BY name"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pipeline execution:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sort (Top-N, using heap)\n   |\n   |-- Open -> read all input to build heap, then pop one at a time\n   |\nFilter (salary > 100000)\n   |\n   |-- Next() called by Sort for each input tuple\n   |\nTable Scan (employees)\n   |\n   |-- Reads one page at a time, one tuple at a time\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The filter can start producing rows as soon as the first page is scanned. The sort cannot produce its first row until all input is consumed (blocking operator)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "materialization",
      children: "Materialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An operator produces its full output before the parent operator starts consuming it. Intermediate results are stored in temporary tables (on disk or in memory)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operator needs random access to its input (hash table build, sort)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intermediate result must be reused (common table expressions, subqueries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipeline would cause excessive random I/O"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Hash join requires materializing the hash table:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash Join\n   |\n   |-- Build phase: read ALL of departments, create hash table (materialized)\n   |-- Probe phase: read employees one by one, probe hash table\n   |\nemployees (probe)    departments (build, materialized)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The build side MUST be materialized because the hash table requires all tuples to be present for lookups."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pipelining"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Materialization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (one tuple at a time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (entire intermediate result)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency to first row"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (immediate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (must complete first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (no intermediate writes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (temporary tables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking operators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot pipeline through sort, hash build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for blocking operators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not possible (stream consumed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (stored result can be referenced multiple times)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator pattern (Open/Next/Close)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write intermediate result to temp relation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLTP, simple queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLAP, complex queries with CTEs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "operator-classification",
      children: "Operator Classification"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pipelinable?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces one tuple at a time from pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces one tuple at a time from index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes one tuple at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes one tuple at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (outer pipelinable, inner rescanned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer is pipelinable; inner may be rescanned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " (blocking)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must see all tuples before output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Join Build"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " (blocking)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must build hash table before probing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Join Probe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probes hash table tuple by tuple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate (sort)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " (blocking)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must see all groups before output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate (hash)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " (blocking)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must process all tuples before output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops early after N tuples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distinct (hash)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " (blocking)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must process all tuples"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Pipelining streams results with low latency and minimal memory, while materialization stores intermediate results for blocking operators like sort and hash table build."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "139-reading-execution-plans",
      children: "13.9 Reading Execution Plans"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL: View query plan without executing\nEXPLAIN SELECT * FROM employees WHERE salary > 100000;\n\n-- Output:\n-- Seq Scan on employees  (cost=0.00..17340.00 rows=500 width=120)\n--   Filter: (salary > 100000)\n\n-- With actual execution statistics\nEXPLAIN ANALYZE SELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 100000;\n\n-- Output might show:\n-- Hash Join  (cost=350.00..4200.00 rows=450 width=80)\n--   Hash Cond: (e.dept_id = d.dept_id)\n--   -> Seq Scan on employees e  (cost=0.00..3400.00 rows=500 width=40)\n--        Filter: (salary > 100000)\n--   -> Hash  (cost=30.00..30.00 rows=100 width=44)\n--        -> Seq Scan on departments d  (cost=0.00..30.00 rows=100 width=44)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reading Plans -- Key Terms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "cost:"
        }), " Arbitrary units (lower is better). Format: startup_cost..total_cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rows:"
        }), " Estimated number of output rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "width:"
        }), " Average output row width in bytes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "actual time:"
        }), " With EXPLAIN ANALYZE, real execution time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "loops:"
        }), " How many times the node executed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Plan Nodes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seq Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree index lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index Only Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All needed data in index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap of matching pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each outer row, probe inner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash on one side, probe with other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort both sides, then merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY or other aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop after N rows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Execution plans are tree structures read bottom-up -- the leaf nodes (sequential/index scans) show where the real work happens."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1310-query-plan-selection-example",
      children: "13.10 Query Plan Selection Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT o.order_id, c.name\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nWHERE c.state = 'CA'\n  AND o.order_date >= '2026-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Plans:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan A: Scan customers (state='CA'), join with orders via index"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Index Scan on customers (state='CA') -> Nested Loop -> Output\n                                            |\n                                     Index Scan on orders(customer_id, order_date)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good if: Many customers in state='CA' -> Actually, if only 2% of customers are in CA, this is excellent."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan B: Scan orders (date), join with customers via index"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Index Scan on orders (date >= '2026-01-01') -> Nested Loop -> Output\n                                                    |\n                                            Index Scan on customers(customer_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good if: Few orders in 2026."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan C: Hash join"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Seq Scan on customers (state='CA') -> Hash Join -> Output\n                                          |\n                                Seq Scan on orders (date >= '2026-01-01')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good if: Both tables are large and moderate portions are filtered."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimizer estimates which plan has the lowest total cost."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Query plan selection depends on table size, available indexes, join order, and up-to-date statistics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1311-optimization-hints",
      children: "13.11 Optimization Hints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most DBMS allow hints to override the optimizer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL (via extension):\nSET pg_hint_plan.enable_hint = ON;\nSELECT /*+ SeqScan(employees) */ * FROM employees;\n\n-- Oracle:\nSELECT /*+ FULL(employees) */ * FROM employees;\nSELECT /*+ INDEX(employees idx_salary) */ * FROM employees WHERE salary > 50000;\n\n-- MySQL:\nSELECT STRAIGHT_JOIN e.* FROM employees e JOIN departments d ON e.dept_id = d.dept_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to hint:"
      }), " Rarely. Modern optimizers make good choices for 95%+ of queries. Hints should only be used when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The optimizer consistently chooses a bad plan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The statistics are out of date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The query has unusual characteristics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Optimization hints let developers override the optimizer's choices when statistics are stale or queries are unusual."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1312-interview-corner",
      children: "13.12 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-hash-join-vs-sort-merge-join----when-to-use-which",
      children: "Q1: Hash Join vs Sort-Merge Join -- When to Use Which?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Join:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use for: Large unsorted data, equi-joins only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity: O(N) average (build + probe)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory: Build side should fit in memory (or use Grace Hash Join with partitioning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not for: Inequality joins, range conditions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sort-Merge Join:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use for: Pre-sorted data (e.g., data already sorted by index), equi-joins and non-equi joins"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity: O(N log N + M log M + N + M)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory: Sort may require external sorting; merge is linear"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not for: Highly unsorted data (sorting cost dominates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview answer template:"
      }), " \"Hash join is typically faster for large, unsorted data with equality predicates because it's O(N) average. Sort-merge join is better when data is already sorted by the join key, eliminating the sort overhead. Hash join also requires the build side to fit in memory, whereas sort-merge can handle any size with external sorting.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-how-to-read-a-query-plan",
      children: "Q2: How to Read a Query Plan?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Read plans ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bottom-up and left-to-right"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash Join  (cost=350.00..4200.00 rows=450 width=80)       Level 2\n  Hash Cond: (e.dept_id = d.dept_id)\n  -> Seq Scan on employees e  (cost=0.00..3400.00)         Level 1 (left)\n        Filter: (salary > 100000)\n  -> Hash  (cost=30.00..30.00)                             Level 1 (right)\n        -> Seq Scan on departments d  (cost=0.00..30.00)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reading order:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 1 left: Seq Scan employees, apply filter (most expensive node)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 1 right: Seq Scan departments, build hash table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 2: Hash Join combines both inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cost=0.00..3400.00"
        }), " means startup cost = 0.00, total cost = 3400.00"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Startup cost is the cost before the first row is produced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total cost is the cost when all rows are produced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The difference (3400.00) is the marginal cost of producing all rows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-left-deep-vs-right-deep-vs-bushy-trees",
      children: "Q3: Left-Deep vs Right-Deep vs Bushy Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Join tree shapes affect how many intermediate results are materialized."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Left-Deep:                        Right-Deep:                     Bushy:\n    JOIN                              JOIN                           JOIN\n   /    \\                            /    \\                        /    \\\n  R1   JOIN                         JOIN  R4                     JOIN   JOIN\n      /    \\                       /    \\                       /    \\ /    \\\n     R2   JOIN                    JOIN  R3                     R1   R2 R3   R4\n         /    \\                  /    \\\n        R3   R4                 R1   R2\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Shape"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Materialization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Left-deep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (one input always pipelined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common in PostgreSQL, Oracle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Right-deep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More materialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some specialized optimizers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bushy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most materialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (can parallelize subtrees)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse, parallel query"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL and most OLTP databases prefer left-deep trees because they minimize materialization. Data warehouses (e.g., Greenplum) use bushy trees for parallelism."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-why-are-statistics-so-important",
      children: "Q4: Why Are Statistics So Important?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without accurate statistics, the optimizer flies blind. Examples of statistic-driven decisions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Statistic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Enables"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "If Stale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "reltuples"
            }), " (row count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost estimation for all operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grossly underestimated/overestimated costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "n_distinct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selectivity estimation for equality predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong join algorithm selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "most_common_vals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accurate filter estimation for skewed data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index selected when scan would be better (or vice versa)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "histogram_bounds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range predicate selectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad plan for date-range queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "correlation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether index scan I/O is sequential or random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong access method for range queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences of stale statistics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequential scan chosen when index scan would be better (see 10x selectivity error)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash join chosen for a table that has grown to 100x its stat-recorded size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested loop join chosen when hash join would be better because outer table is much larger than expected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Always run ANALYZE after bulk operations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- After loading 1M rows\nANALYZE employees;\n\n-- After bulk DELETE\nVACUUM ANALYZE employees;\n\n-- Check last analyzed time\nSELECT relname, last_analyze, last_autoanalyze \nFROM pg_stat_user_tables \nWHERE relname = 'employees';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1313-applications-in-real-systems",
      children: "13.13 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "postgresql-query-planner",
      children: "PostgreSQL Query Planner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PostgreSQL uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic programming"
      }), " approach (System R style) for join enumeration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Show available statistics\nSELECT tablename, attname, null_frac, n_distinct, \n       most_common_vals, most_common_freqs,\n       correlation\nFROM pg_stats\nWHERE tablename = 'employees';\n\n-- Force specific join order with JOIN syntax\nSELECT *\nFROM (employees e CROSS JOIN departments d)\nJOIN salaries s ON e.emp_id = s.emp_id;\n\n-- Check which plans were considered (but not materialized)\nSET debug_print_plan = ON;\n\n-- Genetic query optimizer for large JOINs (geqo)\n-- PostgreSQL uses GEQO (genetic algorithm) when join count > geqo_threshold (default 12)\nSHOW geqo_threshold; -- Default: 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL's optimizer features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic programming"
        }), " up to 12 joins (exhaustive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Genetic algorithm"
        }), " (GEQO) for 12+ joins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-join/anti-join"
        }), " optimization for EXISTS/IN/NOT EXISTS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial index"
        }), " consideration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameterized paths"
        }), " (inner index scans with outer correlation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel query"
        }), " plan generation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mysql-explain",
      children: "MySQL EXPLAIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL uses a simpler optimization approach. Before 8.0, it mainly used heuristic optimization. From 8.0+, it has cost-based optimization for many cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Basic EXPLAIN\nEXPLAIN SELECT * FROM employees WHERE salary > 50000;\n\n-- Extended EXPLAIN with warnings\nEXPLAIN EXTENDED SELECT * FROM employees WHERE salary > 50000;\nSHOW WARNINGS;\n\n-- JSON format (most detailed)\nEXPLAIN FORMAT=JSON \nSELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output key fields:\n-- id: SELECT identifier\n-- select_type: SIMPLE, PRIMARY, SUBQUERY, etc.\n-- table: Table name\n-- type: Access method (system > const > eq_ref > ref > range > index > ALL)\n-- possible_keys: Indexes that could be used\n-- key: Actual index used\n-- rows: Estimated rows examined\n-- Extra: Using index, Using where, Using temporary, Using filesort\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL access methods (sorted by efficiency):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rows Examined"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "system"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table has 1 row (const)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eq_ref"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join with unique key lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per outer row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ref"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-unique index lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index range scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full index scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All index entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL Extra column signals:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Using index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index-only scan (covering index)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Using where"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter applied after storage engine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Using temporary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit temp table (bad for large data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Using filesort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sort (bad for large data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Using index condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index condition pushdown (ICP)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "oracle-optimizer",
      children: "Oracle Optimizer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Oracle's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost-Based Optimizer (CBO)"
      }), " is one of the most sophisticated in the industry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- EXPLAIN PLAN (writes to PLAN_TABLE)\nEXPLAIN PLAN FOR\nSELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 50000;\n\nSELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);\n\n-- Plan output:\n-- -----------------------------------------------\n-- | Id  | Operation          | Name       | Rows  |\n-- -----------------------------------------------\n-- |   0 | SELECT STATEMENT   |            |   450 |\n-- |*  1 |  HASH JOIN         |            |   450 |\n-- |*  2 |   TABLE ACCESS FULL| EMPLOYEES  |  3000 |\n-- |   3 |   TABLE ACCESS FULL| DEPARTMENTS|   100 |\n-- -----------------------------------------------\n\n-- Display actual execution statistics\nSELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR);\n\n-- Gather statistics for optimizer\nEXEC DBMS_STATS.GATHER_TABLE_STATS('HR', 'EMPLOYEES');\n\n-- View optimizer parameters\nSELECT name, value FROM v$parameter WHERE name LIKE '%optimizer%';\n\n-- Oracle optimizer features:\n-- - Adaptive query optimization\n-- - Dynamic sampling (run statistics gathering during optimization)\n-- - Automatic reoptimization based on cardinality feedback\n-- - SQL plan management (baselines)\n-- - Adaptive joins (switch algorithms mid-execution)\n-- - Vector I/O (smart scan in Exadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Oracle optimizer modes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ALL_ROWS"
            }), " (default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize for total throughput (batch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FIRST_ROWS_N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize for first N rows (interactive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FIRST_ROWS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize for first row (legacy)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "summary-of-real-system-behavior",
      children: "Summary of Real-System Behavior"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MySQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Oracle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimizer type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-based (8.0+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join enumeration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP up to 12, GEQO after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic + limited DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP with pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pg_stats, auto-analyze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHOW INDEX, EXPLAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS_STATS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Plan display"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXPLAIN (ANALYZE, BUFFERS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXPLAIN (FORMAT=JSON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS_XPLAN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adaptive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (19c+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pg_hint_plan ext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizer hints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/*+ FULL */ style"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fork-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (8.0.17+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (PX)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.1: EXPLAIN Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create a sample table and analyze a query\nCREATE TABLE large_orders AS\nSELECT generate_series(1, 1000000) AS order_id,\n       (random() * 10000)::INT AS customer_id,\n       NOW() - (random() * 365 * '1 day'::INTERVAL) AS order_date;\n\nCREATE INDEX idx_customer ON large_orders(customer_id);\n\n-- Query 1: Single row lookup\nEXPLAIN ANALYZE SELECT * FROM large_orders WHERE order_id = 500000;\n-- Output: Index Scan using large_orders_pkey (cost=0.42..8.44 rows=1 width=20)\n--         Actual time: 0.043..0.044 rows=1 loops=1\n\n-- Query 2: Range lookup\nEXPLAIN ANALYZE SELECT * FROM large_orders WHERE order_id BETWEEN 500000 AND 501000;\n-- Output: Index Scan using large_orders_pkey (cost=0.42..35.50 rows=1000 width=20)\n--         Actual time: 0.052..0.350 rows=1001 loops=1\n\n-- Query 3: Large range (may choose full scan vs. index)\nEXPLAIN ANALYZE SELECT * FROM large_orders WHERE order_id < 500000;\n-- Might switch to Seq Scan if optimizer decides it covers too many rows\n\n-- Query 4: No useful index (date function)\nEXPLAIN ANALYZE SELECT * FROM large_orders\nWHERE order_date > NOW() - INTERVAL '7 days';\n-- Seq Scan (unless we create an index on order_date)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.2: Join Strategy Comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Table sizes: employees (10K rows), departments (100 rows)\n\n-- Join with small result set\nEXPLAIN ANALYZE\nSELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.emp_id = 42;\n-- Likely: Nested Loop -- Index Scan on employees, then Index Scan on departments\n\n-- Join selecting many employees\nEXPLAIN ANALYZE\nSELECT e.name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 30000;\n-- Likely: Hash Join -- because many employees will match\n\n-- Join with no filtering\nEXPLAIN ANALYZE\nSELECT * FROM employees e\nJOIN departments d ON e.dept_id = d.dept_id;\n-- Likely: Nested Loop or Hash Join depending on data sizes and indexes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.3: External Sort Pass Calculation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create large table that requires external sorting\nCREATE TABLE big_table AS\nSELECT generate_series(1, 5000000) AS id,\n       md5(random()::TEXT) AS data;\n\n-- Sort by data (no useful index, external sort required)\nEXPLAIN ANALYZE SELECT * FROM big_table ORDER BY data;\n-- Output:\n-- Sort (cost=... rows=... width=...)\n--   Sort Key: data\n--   Sort Method: external sort  Disk: 423104kB\n--   -> Seq Scan on big_table (cost=...)\n--\n-- The \"external sort\" and \"Disk\" indicate multi-pass external merge sort\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.4: Hash Join vs Merge Join in Practice"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Hash Join (no pre-sorted data)\nEXPLAIN ANALYZE\nSELECT t1.*, t2.*\nFROM big_table t1\nJOIN big_table t2 ON t1.id = t2.id;\n\n-- Merge Join (with pre-sorted index)\nCREATE INDEX idx_id ON big_table(id);\n\nEXPLAIN ANALYZE\nSELECT t1.*, t2.*\nFROM (SELECT * FROM big_table ORDER BY id) t1\nJOIN (SELECT * FROM big_table ORDER BY id) t2 ON t1.id = t2.id;\n-- Note: Subquery sorts prevent the index from being used directly.\n-- Better: use the primary key ordering directly.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 13.5: Selectivity Estimation in Practice"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create table with skewed data\nCREATE TABLE skewed (\n    id SERIAL PRIMARY KEY,\n    category INT DEFAULT (random() < 0.9)::INT  -- 90% category=1, 10% category=0\n);\n\nINSERT INTO skewed (category) \nSELECT (random() < 0.9)::INT\nFROM generate_series(1, 100000);\n\n-- Check statistics\nSELECT attname, n_distinct, most_common_vals, most_common_freqs\nFROM pg_stats\nWHERE tablename = 'skewed' AND attname = 'category';\n\n-- For category=0 (10%), optimizer will choose index scan\nEXPLAIN SELECT * FROM skewed WHERE category = 0;\n\n-- For category=1 (90%), optimizer will choose sequential scan\nEXPLAIN SELECT * FROM skewed WHERE category = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Always run EXPLAIN ANALYZE before optimizing a query"
          }), " -- never guess what the optimizer is doing. The actual execution plan reveals index usage, join algorithms, and bottlenecks."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash joins are your best friend for large, unsorted data"
          }), " -- they are O(n) build + O(n) probe with no sorting required. Most OLAP workloads rely heavily on hash joins."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nested loop joins are not always bad"
          }), " -- for small result sets (a few hundred rows) with proper indexes, they can outperform hash joins by avoiding hash table build overhead."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pipelining beats materialization"
          }), " -- PostgreSQL's iterator model processes rows one at a time through the plan tree, avoiding expensive intermediate result storage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Keep your statistics up to date"
          }), " -- stale statistics (from missing ANALYZE or VACUUM) are the #1 cause of bad query plans in production."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Check the sort method"
          }), " in EXPLAIN ANALYZE output. If you see \"external sort\" and \"Disk\" with large numbers, consider creating an index on the sort column."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Watch for \"Using temporary\" and \"Using filesort\" in MySQL EXPLAIN output"
          }), " -- these indicate expensive intermediate operations that may need optimization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The join order matters"
          }), " -- even with cost-based optimization, starting with the smallest filtered result set produces the best plans. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pg_hint_plan"
          }), " or explicit ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JOIN"
          }), " ordering when PostgreSQL chooses poorly."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.1:"
        }), " Query processing transforms SQL into an executable plan through parsing, preprocessing, optimization, and execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.2:"
        }), " Parsing checks syntax and semantics; a valid parse tree means the query is structurally correct but not necessarily efficient."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.3:"
        }), " Cost estimation combines disk I/O and CPU costs using table statistics; accurate statistics are essential for optimal plan selection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.4:"
        }), " Sequential scan reads everything, index scan uses a tree to find specific rows, and binary search works on sorted data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.5:"
        }), " External merge sort enables sorting data larger than memory by creating sorted runs and merging them in multiple passes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.6:"
        }), " Join algorithm selection depends on data size, index availability, sortedness, and join predicate type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.7:"
        }), " Query optimization uses equivalence rules to generate alternative plans, heuristics to prune, and cost estimation to select."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.8:"
        }), " Pipelining streams results with low latency and minimal memory; materialization stores intermediate results for blocking operators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.9:"
        }), " Execution plans are tree structures read bottom-up -- leaf nodes show where the real work happens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.10:"
        }), " Query plan selection depends on table size, available indexes, join order, and up-to-date statistics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.11:"
        }), " Optimization hints let developers override the optimizer's choices when statistics are stale or queries are unusual."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.12:"
        }), " Hash join is O(N) for unsorted equi-joins; sort-merge join excels with pre-sorted data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "13.13:"
        }), " PostgreSQL uses dynamic programming up to 12 joins; MySQL uses simpler heuristics; Oracle has adaptive optimization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "join-algorithm-comparison",
      children: "Join Algorithm Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Join Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requires Sorted?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requires Index?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M + M*N) pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One relation is very small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block NLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M + (M/B)*N) pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium tables, no indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index NLJ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x log m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M + M*(H+K)) pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (inner)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small outer, indexed inner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(3*(M+N)) pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large unsorted equi-joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m) merge"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["O(2M", (0,jsx_runtime.jsx)(_components.em, {
              children: "p + 2N"
            }), "p + M+N)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (both)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-sorted data, large sets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selection-methods-comparison",
      children: "Selection Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sequential Scan"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Index Scan"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sorted by key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree index on key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O (selective)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log2(B) + K pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H + L + K pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O (full scan)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2B pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log B + K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log B + K)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small tables, no predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted data, range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective equality/range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index maintenance on writes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-optimization-comparison",
      children: "Query Optimization Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heuristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost-Based"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply fixed rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enumerate + estimate costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (histograms, row counts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (enumeration overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for common cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal (if statistics are accurate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple MySQL queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, Oracle CBO"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "materialization-vs-pipelining",
      children: "Materialization vs Pipelining"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pipelining"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Materialization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (one tuple at a time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (full intermediate result)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (first row quickly)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (must complete processing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None for intermediate results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes to temp tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking operators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for sort, hash build"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "external-sort-passes",
      children: "External Sort Passes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data Size (pages)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffers (B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Passes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log2(34)) = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1400"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log9(10)) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log9(100)) = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log99(10)) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log99(10000)) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6,000,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + ceil(log999(1000)) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4,000,000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "query-processing-stage-summary",
      children: "Query Processing Stage Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lexical Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL text to tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens to parse tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse tree (AST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preprocessing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic checks, view expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validated query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t + c)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan enumeration, cost estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p * k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run the plan, produce results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query result rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Query Processing Concept"
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
              children: "Index Nested Loop Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OLTP queries joining a few rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast for single-record lookups (e.g., order + customer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehouse queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joining fact tables with millions of rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting with sorted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly reports where data is naturally ordered by date"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipelining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large result sets processed row-by-row without memory exhaustion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statistics (Histograms)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All accurate query plans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underpins correct cardinality estimation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Only Scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-read OLTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids table access when index covers the query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY, sort-merge join, aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting data larger than available memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost-Based Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All modern DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapts to actual data distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heuristic Rules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid plan generation, simple queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheap alternative to full cost enumeration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ad-reference-table",
      children: "A&D Reference Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "external-merge-sort",
      children: "External Merge Sort"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles arbitrarily large data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N) I/O for very large N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires temp disk space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge fan-in adapts to memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead even for nearly-sorted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for merge join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O-bound; disk is bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hash-join",
      children: "Hash Join"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) average time for build+probe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works with equi-joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No sorting required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table memory requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for large unsorted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data skew causes bucket overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grace hash join handles spill-to-disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive partitioning overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nested-loop-join",
      children: "Nested Loop Join"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any join condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M*N) I/O -- worst for large tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No indexes or sorting needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner table rescanned for each outer tuple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent with index on inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random I/O for index lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelinable outer scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance collapses with large outer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cost-based-optimization",
      children: "Cost-Based Optimization"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapts to data distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential enumeration time for many joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent (EXPLAIN shows choices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on accurate statistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can handle complex queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale statistics cause bad plans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extensible (new algorithms, indexes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead for simple queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1310-typescript-query-cost-model",
      children: "13.10 TypeScript Query Cost Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following code simulates a query optimizer that estimates costs for different join strategies and access paths."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Query Cost Model Simulator — TypeScript\n// ============================================================\n\ninterface TableStats {\n  name: string;\n  rows: number;\n  pages: number;\n  indexPages: number;\n}\n\ninterface JoinPlan {\n  type: 'NestedLoop' | 'HashJoin' | 'SortMerge';\n  outerTable: string;\n  innerTable: string;\n  estimatedCost: number;\n  estimatedRows: number;\n}\n\nclass QueryOptimizer {\n  private stats: Map<string, TableStats> = new Map();\n\n  addStats(stat: TableStats): void {\n    this.stats.set(stat.name, stat);\n  }\n\n  estimateSeqScanCost(tableName: string): number {\n    const stat = this.stats.get(tableName);\n    if (!stat) return Infinity;\n    // Cost = pages read (assuming full table scan)\n    return stat.pages;\n  }\n\n  estimateIndexScanCost(tableName: string, selectivity: number): number {\n    const stat = this.stats.get(tableName);\n    if (!stat) return Infinity;\n    // Cost = index pages + selectivity * data pages\n    return stat.indexPages + selectivity * stat.pages;\n  }\n\n  estimateJoinCost(\n    outer: string, inner: string,\n    joinKey: string\n  ): JoinPlan[] {\n    const outerStat = this.stats.get(outer);\n    const innerStat = this.stats.get(inner);\n    if (!outerStat || !innerStat) return [];\n\n    const plans: JoinPlan[] = [];\n\n    // Nested Loop: O(outer * inner)\n    const nlCost = outerStat.rows * innerStat.rows;\n    plans.push({\n      type: 'NestedLoop',\n      outerTable: outer,\n      innerTable: inner,\n      estimatedCost: nlCost,\n      estimatedRows: outerStat.rows * innerStat.rows / Math.max(outerStat.rows, innerStat.rows)\n    });\n\n    // Hash Join: O(outer + inner) for build + probe\n    const hjCost = outerStat.pages + innerStat.pages;\n    plans.push({\n      type: 'HashJoin',\n      outerTable: outer,\n      innerTable: inner,\n      estimatedCost: hjCost,\n      estimatedRows: outerStat.rows * innerStat.rows / Math.max(outerStat.rows, innerStat.rows)\n    });\n\n    // Sort-Merge: O(outer log outer + inner log inner)\n    const smCost = outerStat.rows * Math.log2(outerStat.rows) + innerStat.rows * Math.log2(innerStat.rows);\n    plans.push({\n      type: 'SortMerge',\n      outerTable: outer,\n      innerTable: inner,\n      estimatedCost: smCost,\n      estimatedRows: outerStat.rows * innerStat.rows / Math.max(outerStat.rows, innerStat.rows)\n    });\n\n    return plans.sort((a, b) => a.estimatedCost - b.estimatedCost);\n  }\n\n  optimize(query: string, tables: string[], joins: Array<{ t1: string; t2: string; key: string }>): void {\n    console.log('=== Query Optimizer ===');\n    console.log('Query: ' + query);\n    console.log('Tables: ' + tables.join(', '));\n    console.log('');\n\n    for (const join of joins) {\n      console.log('Join: ' + join.t1 + '.' + join.key + ' = ' + join.t2 + '.' + join.key);\n      const plans = this.estimateJoinCost(join.t1, join.t2, join.key);\n      for (const plan of plans) {\n        console.log('  [' + plan.type + '] Cost=' + plan.estimatedCost.toFixed(0) + ', EstRows=' + plan.estimatedRows.toFixed(0));\n      }\n      console.log('  Recommended: ' + plans[0].type);\n      console.log('');\n    }\n  }\n}\n\n// Demo\nconst opt = new QueryOptimizer();\nopt.addStats({ name: 'employees', rows: 10000, pages: 500, indexPages: 50 });\nopt.addStats({ name: 'departments', rows: 50, pages: 5, indexPages: 2 });\nopt.addStats({ name: 'salaries', rows: 100000, pages: 5000, indexPages: 200 });\n\nopt.optimize(\n  'SELECT e.name, d.name FROM employees e JOIN departments d ON e.dept_id = d.dept_id',\n  ['employees', 'departments'],\n  [{ t1: 'employees', t2: 'departments', key: 'dept_id' }]\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Query Processing Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    SQL[SQL Query] --> Parser[Parser<br/>Syntax check<br/>Parse tree]\n    Parser --> Validator[Validator<br/>Semantic check<br/>Catalog lookup]\n    Validator --> Optimizer[Optimizer<br/>Rule-based + Cost-based<br/>Plan generation]\n    Optimizer --> Executor[Executor<br/>Iterators<br/>Pipeline execution]\n    Executor --> Result[Result Set]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main goal of query optimization is to:\na) Rewrite the SQL query\nb) Find the most efficient execution plan\nc) Validate the SQL syntax\nd) Create indexes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A full table scan is preferred over an index scan when:\na) The table is very large\nb) The query selects a large fraction of rows (> 10-20%)\nc) The table has no primary key\nd) The query uses ORDER BY"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The cost of a Hash Join is primarily determined by:\na) The size of the outer table only\nb) The size of both tables\nc) The number of indexes\nd) The number of columns selected"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In query optimization, selectivity of a predicate σ<col='value'>(R) is:\na) The number of rows in R\nb) The fraction of rows that satisfy the predicate\nc) The size of the index\nd) The cost of the query"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The correct order of query processing stages is:\na) Optimization -> Parsing -> Execution -> Preprocessing\nb) Parsing -> Preprocessing -> Optimization -> Execution\nc) Parsing -> Optimization -> Preprocessing -> Execution\nd) Execution -> Parsing -> Preprocessing -> Optimization"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which join algorithm builds a hash table and then probes it?\na) Nested Loop Join\nb) Hash Join\nc) Merge Join\nd) Index Nested Loop Join"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A nested loop join is most efficient when:\na) Both tables are large\nb) One table is small and the other has an index on the join column\nc) Both tables are sorted\nd) No indexes exist"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common cause of bad query plans is:\na) Hardware failure\nb) Stale statistics\nc) Network latency\nd) Wrong SQL syntax"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pipelining in query processing means:\na) Results flow through operators without intermediate storage\nb) Multiple queries run in parallel\nc) Data is sorted before processing\nd) Indexes are rebuilt automatically"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EXPLAIN ANALYZE differs from EXPLAIN because:\na) It shows the same information but formatted differently\nb) It executes the query and shows actual timing and row counts\nc) It only works for SELECT queries\nd) It requires superuser privileges"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A merge join requires:\na) Both inputs to be sorted\nb) At least one input to have an index\nc) Both inputs to be hashed\nd) The join condition to be inequality"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The query optimizer selects a plan based on:\na) Random selection\nb) Alphabetical order of tables\nc) Lowest estimated cost using statistics\nd) The order tables appear in the FROM clause"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In external merge sort with N=1000 pages and B=10 buffers, how many passes are needed?\na) 1\nb) 2\nc) 3\nd) 4"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which operator is NOT pipelinable?\na) Seq Scan\nb) Filter\nc) Sort\nd) Project"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Left-deep join trees are preferred because they:\na) Minimize materialization\nb) Maximize parallelism\nc) Require fewer indexes\nd) Support more join algorithms"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The statement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT * FROM t WHERE state = 'CA'"
          }), " has selectivity of 0.02 (50 distinct states). Which access method is likely optimal?\na) Sequential scan (table is 100 pages)\nb) Index scan (B+ tree height 3)\nc) Both are equivalent\nd) Neither -- the query is invalid"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-a, 6-b, 7-a, 8-c, 9-d (1 + ceil(log9(100)) = 1 + ceil(2.09) = 1 + 3 = 4), 10-c, 11-a, 12-b (Index: 4", (0,jsx_runtime.jsx)(_components.em, {
        children: "4 + 1.5 = 17.5; Seq: 100"
      }), "1 + 1 = 101; Index wins)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL queries go through: parsing -> preprocessing -> optimization -> execution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The parser converts SQL text to a parse tree; the preprocessor validates semantics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The optimizer uses statistics to estimate costs and select the best plan."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost estimation combines I/O cost (page reads) and CPU cost (tuple processing)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selection methods: sequential scan (all pages), binary search (sorted data), index scan (B+ tree)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External merge sort handles data larger than memory by creating sorted runs and merging in passes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Join algorithms: Nested Loop (small result sets), Hash Join (large unsorted equi-joins), Merge Join (pre-sorted data)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block NLJ improves NLJ by reading outer in blocks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query optimization: heuristic rules (fast, no stats) vs cost-based (accurate, needs stats)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipelining streams results without intermediate storage; materialization stores intermediate results."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXPLAIN shows the query plan; EXPLAIN ANALYZE includes actual execution statistics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The optimizer's statistics must be kept up to date (ANALYZE / VACUUM)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Left-deep join trees are preferred for pipelining; bushy trees for parallelism."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "List the main stages of query processing from SQL text to result."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What information does the optimizer use to estimate query costs?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe three join algorithms and when each is most appropriate."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Execute and interpret: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EXPLAIN SELECT * FROM employees WHERE department_id = 5;"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Calculate the number of passes needed for external merge sort on 500 pages with 5 buffer pages."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given the query ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT * FROM orders WHERE customer_id = 42 AND order_date > '2026-01-01'"
          }), " and an index on (customer_id, order_date), explain why the optimizer can use the index efficiently. What if the index were (order_date, customer_id)?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For a table with 1 million rows and an equality filter on a column with 10,000 distinct values, estimate the number of result rows. Would the optimizer prefer an index scan or a full table scan? How does the answer change if the column has only 2 distinct values?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a table and populate it with at least 100,000 rows. Use EXPLAIN ANALYZE to compare:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A query with an index on the filtered column"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Same query without the index\nDocument the difference in execution time and cost estimates."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between pipelining and materialization in query execution? Give an example of an operator that requires materialization."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the data R = {(1, 'A'), (3, 'B'), (2, 'C'), (1, 'D')} and S = {(1, 'X'), (2, 'Y'), (4, 'Z')}, trace a hash join execution showing each build and probe step."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Calculate the I/O cost for a Block Nested Loop Join where M=200, N=100, B=6. Then compare with standard NLJ."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the following query plan and identify potential problems:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sort (cost=25000.00..25500.00 rows=200000 width=40)\n  Sort Key: o.order_date\n  -> Hash Join (cost=5000.00..15000.00 rows=200000 width=40)\n       Hash Cond: (o.customer_id = c.customer_id)\n       -> Seq Scan on orders o (cost=0.00..8000.00 rows=500000 width=28)\n       -> Hash (cost=1000.00..1000.00 rows=50000 width=16)\n            -> Seq Scan on customers c (cost=0.00..1000.00 rows=50000 width=16)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What indexes would you recommend? Why is the sort needed?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a query optimization experiment:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create a table ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sales(product_id INT, sale_date DATE, amount DECIMAL)"
            }), " with 5M rows"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a complex query with GROUP BY, JOIN to a products table, and ORDER BY"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create appropriate indexes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare execution plans with and without indexes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which plan has the lowest cost? Is it the fastest?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Some databases support \"adaptive\" join methods (e.g., Adaptive Join in SQL Server). How do adaptive joins work? When would they choose a different join algorithm mid-execution?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a Python function that simulates a cost-based optimizer: given table statistics (row count, page count, index height, distinct values), it should return the optimal join algorithm for a query joining two tables on a single equi-join column with an equality filter on one table."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trace the external merge sort for 8 pages of data with 3 buffer pages. Show the contents of each run after every pass. How many page transfers occur?"
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