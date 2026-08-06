"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[66459],{

/***/ 31484
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_09_transactions_md_fd6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-09-transactions-md-fd6.json
const site_docs_courses_database_management_systems_09_transactions_md_fd6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/09-transactions","title":"Chapter 9: Transactions","description":"Previous Higher Normal Forms and Denormalization | Next Concurrency Control","source":"@site/docs/courses/database-management-systems/09-transactions.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/09-transactions","permalink":"/ai-engineering-journey/database-management-systems/09-transactions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-transactions","slug":"/database-management-systems/09-transactions","title":"Chapter 9: Transactions","sidebar_label":"Chapter 9: Transactions","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8: Higher Normal Forms and Denormalization","permalink":"/ai-engineering-journey/database-management-systems/08-higher-nf"},"next":{"title":"Chapter 10: Concurrency Control","permalink":"/ai-engineering-journey/database-management-systems/10-concurrency"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/09-transactions.md


const frontMatter = {
	id: '09-transactions',
	slug: '/database-management-systems/09-transactions',
	title: 'Chapter 9: Transactions',
	sidebar_label: 'Chapter 9: Transactions',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Transactions';

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
  "value": "9.1 What Is a Transaction?",
  "id": "91-what-is-a-transaction",
  "level": 2
}, {
  "value": "Real-World Analogy: Bank Transfer",
  "id": "real-world-analogy-bank-transfer",
  "level": 3
}, {
  "value": "Numbered Steps of a Transaction Lifecycle",
  "id": "numbered-steps-of-a-transaction-lifecycle",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 3
}, {
  "value": "C++ Implementation: Transaction Scheduler",
  "id": "c-implementation-transaction-scheduler",
  "level": 3
}, {
  "value": "Python Implementation: Transaction Scheduler",
  "id": "python-implementation-transaction-scheduler",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages",
  "level": 3
}, {
  "value": "Edge Cases in Transactions",
  "id": "edge-cases-in-transactions",
  "level": 3
}, {
  "value": "9.2 ACID Properties",
  "id": "92-acid-properties",
  "level": 2
}, {
  "value": "Atomicity",
  "id": "atomicity",
  "level": 3
}, {
  "value": "Consistency",
  "id": "consistency",
  "level": 3
}, {
  "value": "Isolation",
  "id": "isolation",
  "level": 3
}, {
  "value": "Durability",
  "id": "durability",
  "level": 3
}, {
  "value": "ACID Properties Comparison Table",
  "id": "acid-properties-comparison-table",
  "level": 3
}, {
  "value": "Edge Cases for ACID",
  "id": "edge-cases-for-acid",
  "level": 3
}, {
  "value": "9.3 Transaction States",
  "id": "93-transaction-states",
  "level": 2
}, {
  "value": "State Diagram",
  "id": "state-diagram",
  "level": 3
}, {
  "value": "Detailed State Descriptions",
  "id": "detailed-state-descriptions",
  "level": 3
}, {
  "value": "State Transition Table",
  "id": "state-transition-table",
  "level": 3
}, {
  "value": "Dry Run: Transaction State Transitions",
  "id": "dry-run-transaction-state-transitions",
  "level": 3
}, {
  "value": "Complexity of State Management",
  "id": "complexity-of-state-management",
  "level": 3
}, {
  "value": "9.4 Schedules",
  "id": "94-schedules",
  "level": 2
}, {
  "value": "Formal Definition",
  "id": "formal-definition",
  "level": 3
}, {
  "value": "Types of Schedules",
  "id": "types-of-schedules",
  "level": 3
}, {
  "value": "Schedule Types Comparison Table",
  "id": "schedule-types-comparison-table",
  "level": 3
}, {
  "value": "Dry Run: Schedule Execution",
  "id": "dry-run-schedule-execution",
  "level": 3
}, {
  "value": "Complete Schedule",
  "id": "complete-schedule",
  "level": 3
}, {
  "value": "9.5 Serial vs Serializable",
  "id": "95-serial-vs-serializable",
  "level": 2
}, {
  "value": "Key Insight",
  "id": "key-insight",
  "level": 3
}, {
  "value": "Serial schedules are <strong>correct by definition</strong> but <strong>impractical</strong> (they waste concurrency). Serializable schedules are <strong>correct by proof</strong> and <strong>practical</strong>. The entire field of concurrency control aims to produce serializable schedules while maximizing interleaving.",
  "id": "serial-schedules-are-correct-by-definition-but-impractical-they-waste-concurrency-serializable-schedules-are-correct-by-proof-and-practical-the-entire-field-of-concurrency-control-aims-to-produce-serializable-schedules-while-maximizing-interleaving",
  "level": 2
}, {
  "value": "9.6 Conflict Serializability",
  "id": "96-conflict-serializability",
  "level": 2
}, {
  "value": "Conflict Types",
  "id": "conflict-types",
  "level": 3
}, {
  "value": "Algorithm for Conflict Serializability Testing",
  "id": "algorithm-for-conflict-serializability-testing",
  "level": 3
}, {
  "value": "Precedence Graph — Step-by-Step Construction",
  "id": "precedence-graph--step-by-step-construction",
  "level": 3
}, {
  "value": "C++ Implementation: Conflict Serializability Checker",
  "id": "c-implementation-conflict-serializability-checker",
  "level": 3
}, {
  "value": "Python Implementation: Conflict Serializability Checker",
  "id": "python-implementation-conflict-serializability-checker",
  "level": 3
}, {
  "value": "Complexity Analysis of Conflict Serializability Checker",
  "id": "complexity-analysis-of-conflict-serializability-checker",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases in Conflict Serializability",
  "id": "edge-cases-in-conflict-serializability",
  "level": 3
}, {
  "value": "9.7 View Serializability",
  "id": "97-view-serializability",
  "level": 2
}, {
  "value": "Conditions for View Equivalence",
  "id": "conditions-for-view-equivalence",
  "level": 3
}, {
  "value": "Example: Blind Write Schedule (View-Serializable but NOT Conflict-Serializable)",
  "id": "example-blind-write-schedule-view-serializable-but-not-conflict-serializable",
  "level": 3
}, {
  "value": "View Serializability vs Conflict Serializability Comparison",
  "id": "view-serializability-vs-conflict-serializability-comparison",
  "level": 3
}, {
  "value": "Theorem",
  "id": "theorem",
  "level": 3
}, {
  "value": "Why View Serializability Is Not Used in Practice",
  "id": "why-view-serializability-is-not-used-in-practice",
  "level": 3
}, {
  "value": "9.8 Recoverable and Cascadeless Schedules",
  "id": "98-recoverable-and-cascadeless-schedules",
  "level": 2
}, {
  "value": "Recoverable Schedule",
  "id": "recoverable-schedule",
  "level": 3
}, {
  "value": "Cascadeless Schedule",
  "id": "cascadeless-schedule",
  "level": 3
}, {
  "value": "Schedule Type Hierarchy",
  "id": "schedule-type-hierarchy",
  "level": 3
}, {
  "value": "9.9 SQL Transaction Control",
  "id": "99-sql-transaction-control",
  "level": 2
}, {
  "value": "9.10 Concurrency Anomalies",
  "id": "910-concurrency-anomalies",
  "level": 2
}, {
  "value": "Anomaly Comparison Table",
  "id": "anomaly-comparison-table",
  "level": 3
}, {
  "value": "Dry Run: Dirty Read",
  "id": "dry-run-dirty-read",
  "level": 3
}, {
  "value": "Dry Run: Lost Update",
  "id": "dry-run-lost-update",
  "level": 3
}, {
  "value": "9.11 Isolation Levels in SQL",
  "id": "911-isolation-levels-in-sql",
  "level": 2
}, {
  "value": "Isolation Level Matrix",
  "id": "isolation-level-matrix",
  "level": 3
}, {
  "value": "Deep Dive per Level",
  "id": "deep-dive-per-level",
  "level": 3
}, {
  "value": "SQL Syntax",
  "id": "sql-syntax",
  "level": 3
}, {
  "value": "-- Example: SERIALIZABLE prevents phantoms\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN;\nSELECT * FROM orders WHERE status = &quot;pending&quot;;\n-- T2 concurrently: INSERT INTO orders (status) VALUES (&quot;pending&quot;);\nSELECT * FROM orders WHERE status = &quot;pending&quot;;  -- Same rows\nCOMMIT;\n```",
  "id": "---example-serializable-prevents-phantomsset-transaction-isolation-level-serializablebeginselect--from-orders-where-status--pending---t2-concurrently-insert-into-orders-status-values-pendingselect--from-orders-where-status--pending-----same-rowscommit",
  "level": 2
}, {
  "value": "9.12 ACID vs BASE",
  "id": "912-acid-vs-base",
  "level": 2
}, {
  "value": "Key Trade-Off",
  "id": "key-trade-off",
  "level": 3
}, {
  "value": "9.13 Interview Corner",
  "id": "913-interview-corner",
  "level": 2
}, {
  "value": "Q1: What happens if a transaction fails after writing some data but before commit?",
  "id": "q1-what-happens-if-a-transaction-fails-after-writing-some-data-but-before-commit",
  "level": 3
}, {
  "value": "Q2: What is the difference between dirty read, non-repeatable read, and phantom read?",
  "id": "q2-what-is-the-difference-between-dirty-read-non-repeatable-read-and-phantom-read",
  "level": 3
}, {
  "value": "Q3: Can a schedule be both conflict-serializable and view-serializable?",
  "id": "q3-can-a-schedule-be-both-conflict-serializable-and-view-serializable",
  "level": 3
}, {
  "value": "Q4: What is a cascading rollback and why is it bad?",
  "id": "q4-what-is-a-cascading-rollback-and-why-is-it-bad",
  "level": 3
}, {
  "value": "Q5: What is the difference between a serial schedule and a serializable schedule?",
  "id": "q5-what-is-the-difference-between-a-serial-schedule-and-a-serializable-schedule",
  "level": 3
}, {
  "value": "Q6: How do you test for conflict serializability?",
  "id": "q6-how-do-you-test-for-conflict-serializability",
  "level": 3
}, {
  "value": "Q7: What is the difference between conflict and view serializability?",
  "id": "q7-what-is-the-difference-between-conflict-and-view-serializability",
  "level": 3
}, {
  "value": "Q8: What isolation level should you use for a banking application?",
  "id": "q8-what-isolation-level-should-you-use-for-a-banking-application",
  "level": 3
}, {
  "value": "Q9: What is a lost update? How do you prevent it?",
  "id": "q9-what-is-a-lost-update-how-do-you-prevent-it",
  "level": 3
}, {
  "value": "Q10: What is write skew?",
  "id": "q10-what-is-write-skew",
  "level": 3
}, {
  "value": "9.14 Applications in Real Systems",
  "id": "914-applications-in-real-systems",
  "level": 2
}, {
  "value": "MySQL InnoDB",
  "id": "mysql-innodb",
  "level": 3
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 3
}, {
  "value": "Oracle",
  "id": "oracle",
  "level": 3
}, {
  "value": "Comparison of DBMS Transaction Support",
  "id": "comparison-of-dbms-transaction-support",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
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
  "value": "ACID Properties",
  "id": "acid-properties",
  "level": 3
}, {
  "value": "Isolation Levels",
  "id": "isolation-levels",
  "level": 3
}, {
  "value": "Schedule Types",
  "id": "schedule-types",
  "level": 3
}, {
  "value": "Conflict vs View Serializability",
  "id": "conflict-vs-view-serializability",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "9.15 TypeScript Transaction Scheduler",
  "id": "915-typescript-transaction-scheduler",
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
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    map: "map",
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
        id: "chapter-9-transactions",
        children: "Chapter 9: Transactions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/08-higher-nf",
          children: "Chapter 8: Higher Normal Forms and Denormalization"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/10-concurrency",
          children: "Chapter 10: Concurrency Control"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a transaction and explain its necessity for data integrity in concurrent and failure-prone environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the ACID properties: Atomicity, Consistency, Isolation, Durability — with implementation mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand transaction states and the full transaction lifecycle with state transition rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify schedules and determine serializability using formal methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement conflict serializability checking via precedence graphs in C++ and Python"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish conflict serializability from view serializability with counterexamples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand isolation levels and their anomaly-prevention guarantees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare ACID with BASE in distributed contexts"
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
        href: "../../assets/images/lessons/database-management-systems/09-transactions/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/09-transactions/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/09-transactions/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/09-transactions/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/09-transactions/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/09-transactions/visual-explanation.png",
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction Concept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical unit of work with all-or-nothing semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bank transfer: both accounts update or neither"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID Properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomicity, Consistency, Isolation, Durability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The four guarantees that define a \"safe\" transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction States"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active → Partially Committed → Committed / Failed → Aborted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every transaction follows the same lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule Classification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial, Serializable, Non-serializable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serializable schedules are the gold standard for correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict Serializability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swapping non-conflicting operations to match a serial schedule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The precedence graph is your primary tool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View Serializability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same read/write order as a serial schedule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less restrictive than conflict serializability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation Levels"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ UNCOMMITTED → SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade consistency for performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID vs BASE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency vs Availability trade-off in distributed systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose based on CAP theorem requirements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Transaction Concept] --> B[ACID Properties]\n    B --> C[Transaction States]\n    C --> D[Schedules & Classification]\n    D --> E[Serial vs Serializable]\n    E --> F[Conflict Serializability]\n    F --> G[Precedence Graph]\n    G --> H[View Serializability]\n    H --> I[Recoverable & Cascadeless]\n    I --> J[Isolation Levels]\n    J --> K[Real DBMS Implementations]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-what-is-a-transaction",
      children: "9.1 What Is a Transaction?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transaction"
      }), " is a logical unit of work that accesses and possibly modifies the database. It is a sequence of operations (reads and writes) that forms a single logical unit. Transactions address two fundamental problems: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "system failures"
      }), " (crash in the middle of a multi-step operation) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "concurrent access"
      }), " (interference between parallel operations)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-bank-transfer",
      children: "Real-World Analogy: Bank Transfer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice transfers $500 from Account A (balance: $1000) to Account B (balance: $500). This involves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account A: 1000 → 500 (debit $500)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account B: 500 → 1000 (credit $500)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the system crashes after debiting A but before crediting B, $500 vanishes from the system. A transaction ensures either both steps happen or neither does."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-of-a-transaction-lifecycle",
      children: "Numbered Steps of a Transaction Lifecycle"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start the transaction boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BEGIN TRANSACTION;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read initial balance of A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT balance FROM accounts WHERE id = 'A';"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify sufficient funds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level conditional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debit A: A = A - 500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE accounts SET balance = balance - 500 WHERE id = 'A';"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit B: B = B + 500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE accounts SET balance = balance + 500 WHERE id = 'B';"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make all changes permanent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COMMIT;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "PROCEDURE TransferFunds(from_acct, to_acct, amount):\n    BEGIN TRANSACTION\n    bal_from = READ(balance FROM accounts WHERE id = from_acct)\n    IF bal_from >= amount:\n        WRITE(accounts SET balance = bal_from - amount WHERE id = from_acct)\n        bal_to = READ(balance FROM accounts WHERE id = to_acct)\n        WRITE(accounts SET balance = bal_to + amount WHERE id = to_acct)\n        COMMIT\n        RETURN \"Success\"\n    ELSE:\n        ROLLBACK\n        RETURN \"Insufficient funds\"\n    END IF\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State:"
      }), " A = 1000, B = 500, Transfer amount = 500"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B (after)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ(A) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK(1000 >= 500) ✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(A, A-500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "500"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(B, B+500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A=500, B=1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flushed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "500"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1000"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Crash Scenario (after step 4, before step 5):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A (buffer)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B (buffer)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recovery Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(A, A-500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNDO: restore A=1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROLLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A reverted to original"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-transaction-scheduler",
      children: "C++ Implementation: Transaction Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```cpp\n#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\n#include <stdexcept>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Account {\npublic:\nstd::string id;\nint balance;\nAccount(std::string i, int b) : id(i), balance(b) {}\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Transaction {\nprivate:\nstd::unordered_map<std::string, int> writeBuffer;\nstd::unordered_map<std::string, int> readSet;\nbool active;\nbool aborted;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public:\nTransaction() : active(true), aborted(false) {}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int read(Account& acc) {\n    if (aborted) throw std::runtime_error(\"Transaction aborted\");\n    if (writeBuffer.find(acc.id) != writeBuffer.end()) {\n        return writeBuffer[acc.id];\n    }\n    readSet[acc.id] = acc.balance;\n    return acc.balance;\n}\n\nvoid write(Account& acc, int newBalance) {\n    if (aborted) throw std::runtime_error(\"Transaction aborted\");\n    writeBuffer[acc.id] = newBalance;\n}\n\nvoid commit(std::vector&lt;Account&gt;& accounts) {\n    if (aborted) throw std::runtime_error(\"Cannot commit aborted transaction\");\n    for (auto& [id, newBal] : writeBuffer) {\n        for (auto& acc : accounts) {\n            if (acc.id == id) {\n                acc.balance = newBal;\n                break;\n            }\n        }\n    }\n    writeBuffer.clear();\n    active = false;\n    std::cout &lt;< \"Transaction COMMITTED.\\n\";\n}\n\nvoid rollback() {\n    writeBuffer.clear();\n    aborted = true;\n    active = false;\n    std::cout &lt;< \"Transaction ROLLED BACK.\\n\";\n}\n\nbool isActive() const { return active; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::vector<Account> accounts = {\nAccount(\"A100\", 1000),\nAccount(\"B200\", 500)\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction tx;\ntry {\n    int balA = tx.read(accounts[0]);\n    std::cout &lt;< \"Read A100 balance: $\" << balA << \"\\n\";\n\n    if (balA >= 500) {\n        tx.write(accounts[0], balA - 500);\n        int balB = tx.read(accounts[1]);\n        tx.write(accounts[1], balB + 500);\n        tx.commit(accounts);\n    } else {\n        tx.rollback();\n    }\n} catch (const std::exception& e) {\n    tx.rollback();\n    std::cerr &lt;< \"Error: \" << e.what() << \"\\n\";\n}\n\nstd::cout &lt;< \"Final: A100=$\" << accounts[0].balance\n          << \", B200=$\" << accounts[1].balance &lt;< \"\\n\";\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-transaction-scheduler",
      children: "Python Implementation: Transaction Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```python\nfrom dataclasses import dataclass\nfrom typing import Dict, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@dataclass\nclass Account:\naccount_id: str\nbalance: int"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class Transaction:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self):\nself.write_buffer: Dict[str, int] = {}\nself.read_set: Dict[str, int] = {}\nself._active = True\nself._aborted = False"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def read(self, account: Account) -> int:\n    if self._aborted:\n        raise RuntimeError(\"Transaction aborted\")\n    if account.account_id in self.write_buffer:\n        return self.write_buffer[account.account_id]\n    self.read_set[account.account_id] = account.balance\n    return account.balance\n\ndef write(self, account: Account, new_balance: int):\n    if self._aborted:\n        raise RuntimeError(\"Transaction aborted\")\n    self.write_buffer[account.account_id] = new_balance\n\ndef commit(self, accounts: Dict[str, Account]):\n    if self._aborted:\n        raise RuntimeError(\"Cannot commit aborted transaction\")\n    for acct_id, new_bal in self.write_buffer.items():\n        accounts[acct_id].balance = new_bal\n    self.write_buffer.clear()\n    self._active = False\n    print(\"Transaction COMMITTED.\")\n\ndef rollback(self):\n    self.write_buffer.clear()\n    self._aborted = True\n    self._active = False\n    print(\"Transaction ROLLED BACK.\")\n\n@property\ndef is_active(self) -> bool:\n    return self._active\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def transfer_funds(accounts: Dict[str, Account],\nfrom_id: str, to_id: str, amount: int) -> str:\ntx = Transaction()\ntry:\nbal_from = tx.read(accounts[from_id])\nprint(f\"Read {from_id} balance: ${bal_from}\")"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    if bal_from >= amount:\n        tx.write(accounts[from_id], bal_from - amount)\n        bal_to = tx.read(accounts[to_id])\n        tx.write(accounts[to_id], bal_to + amount)\n        tx.commit(accounts)\n        return \"Success\"\n    else:\n        tx.rollback()\n        return \"Insufficient funds\"\nexcept Exception as e:\n    tx.rollback()\n    return f\"Error: {e}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " == \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "main"
      }), "\":\naccounts = {\n\"A100\": Account(\"A100\", 1000),\n\"B200\": Account(\"B200\", 500)\n}\nresult = transfer_funds(accounts, \"A100\", \"B200\", 500)\nprint(f\"Result: {result}\")\nprint(f\"Final: A100=${accounts['A100'].balance}, \"\nf\"B200=${accounts['B200'].balance}\")\n```"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (per operation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table lookups for read/write buffer; O(1) commit per item"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space (write buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = items written"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each uncommitted write stores a buffer entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space (read set)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = items read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracks read-set for conflict detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Commit complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = writes in buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must flush each buffered write to persistent storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rollback complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simply clears the write buffer — no undo needed at this layer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents partial updates; data stays consistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires write-ahead logging overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each transaction sees consistent snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency reduced under pessimistic locking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survives crashes and power failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write overhead to persistent storage (fsync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer writes simple sequential logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction manager complexity is hidden"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic concurrency works well with low contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High contention degrades to serial execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-transactions",
      children: "Edge Cases in Transactions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System crash mid-commit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash after partial flush to disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some writes visible, others lost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead logging (WAL) + REDO/UNDO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent withdrawal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two transactions debit same account simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost update: one debit overwrites the other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locking or MVCC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dirty read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction reads uncommitted data from another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads values that may disappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED isolation or higher"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same query returns different rows mid-transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent result sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERIALIZABLE isolation or gap locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Long-running transaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction holds locks for extended period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starvation, deadlocks, reduced concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep transactions short; use timeouts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed transaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction spans multiple databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-phase commit (2PC) overhead, blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saga pattern for microservices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-acid-properties",
      children: "9.2 ACID Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ACID is an acronym for Atomicity, Consistency, Isolation, Durability — the four properties that guarantee database transactions are processed reliably."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "atomicity",
      children: "Atomicity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A transaction executes completely or not at all. There is no partial execution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Mechanism:"
      }), " Write-Ahead Logging (WAL). Before any change is applied to the database, a log record describing the change is written to stable storage. If the system crashes, the recovery manager uses the log to UNDO uncommitted transactions (rollback) and REDO committed transactions whose results were not yet flushed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Atomicity Violation:"
      }), "\n```text\nT1: A = A - 500    (written to disk)\nT1: B = B + 500    (NOT written — crash occurs)\n```\nWithout atomicity: $500 is lost from the system.\nWith atomicity (WAL undo): A is restored to its original value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) overhead per write operation for log record creation. O(n) for crash recovery scan of log."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consistency",
      children: "Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A transaction brings the database from one valid state to another valid state. All integrity constraints (primary keys, foreign keys, CHECK constraints, unique constraints, triggers) must be satisfied when the transaction commits."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Mechanism:"
      }), " Application logic plus DBMS-enforced constraints. The DBMS checks constraints at statement boundaries (immediate mode) or at commit time (deferred mode). The developer is responsible for writing correct application logic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Consistency Violation:"
      }), "\n```sql\n-- Constraint: CHECK(balance >= 0)\nUPDATE accounts SET balance = balance - 1000 WHERE id = 'A';\n-- balance was 500, now becomes -500\n-- Without consistency: invalid state\n-- With consistency: Transaction aborts on constraint violation\n```"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) per constraint check. Deferred mode checks all constraints at commit in O(c) where c = number of constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isolation",
      children: "Isolation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Concurrent transactions should not interfere with each other. Each transaction executes as if it were the only transaction in the system."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Mechanism:"
      }), " Concurrency control protocols — locking (2PL, strict 2PL), timestamp ordering (TO), multiversion concurrency control (MVCC). The isolation level determines how much interference is allowed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Isolation Violation (Lost Update):"
      }), "\n```text\nT1: READ(A) → 1000\nT2: READ(A) → 1000\nT1: WRITE(A, 1000 - 500) → A = 500\nT2: WRITE(A, 1000 - 200) → A = 800  (overwrites T1's update!)\nT1: COMMIT\nT2: COMMIT\n```\nFinal value: A = 800. Lost $300 from T1's update. With SERIALIZABLE isolation, T2 would wait for T1 to complete."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Locking adds O(1) lock acquisition overhead per operation. Deadlock detection is O(n²) where n = number of transactions. MVCC adds version storage overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "durability",
      children: "Durability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Once a transaction commits, its changes persist even if the system crashes immediately after. Committed data must be recoverable from non-volatile storage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Mechanism:"
      }), " Write-Ahead Logging (REDO log). When a transaction commits, its log records are forced to stable storage (fsync). The actual data pages may be written later (steal/no-force policy). On recovery, the REDO log replays committed transactions whose data was not yet flushed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Durability Guarantee:"
      }), "\n```text\nT1: COMMIT (log record written to disk)\n← CRASH OCCURS HERE →\n← RESTART →\nRecovery Manager reads log\nFinds T1 COMMIT record\nREDO: reapplies T1 changes if not already on disk\nA = 500, B = 1000  ← changes present\n```"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " fsync is expensive — O(1) per commit with high latency (2-10ms typical). Group commit batches multiple commits into one fsync to amortize cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acid-properties-comparison-table",
      children: "ACID Properties Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Prevents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Scenario"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNDO log (WAL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log write per operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash during transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid database state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints + triggers + app logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint check overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint violation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locks, MVCC, timestamps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock contention, version storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaved conflicting ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data loss after commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REDO log (WAL) + fsync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fsync latency (2-10ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash after commit acknowledged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-acid",
      children: "Edge Cases for ACID"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Affected Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner rollback should not affect outer unless propagated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deferred constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign key checks deferred to commit may fail after many changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom reads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New rows inserted by concurrent transaction appear in repeated reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write skew"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two transactions read overlapping data and write non-overlapping data inconsistently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Group commit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Durability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple commits batched into one fsync — all survive or none"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-transaction-states",
      children: "9.3 Transaction States"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A transaction passes through a well-defined set of states during its lifecycle. Understanding these states is critical for recovery management and concurrency control."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-diagram",
      children: "State Diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["```mermaid\nstateDiagram-v2\n[", (0,jsx_runtime.jsx)(_components.em, {
        children: "] --> ACTIVE : BEGIN TRANSACTION\nACTIVE --> PARTIALLY_COMMITTED : Final statement executed\nACTIVE --> FAILED : Error or abort detected\nPARTIALLY_COMMITTED --> COMMITTED : All changes safely written to disk\nPARTIALLY_COMMITTED --> FAILED : Write failure detected\nFAILED --> ABORTED : Rollback completed\nCOMMITTED --> ["
      }), "]\nABORTED --> [*]\n```"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-state-descriptions",
      children: "Detailed State Descriptions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can We Recover?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACTIVE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state; transaction is executing operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads/writes performed; variables modified in memory or buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (microseconds to hours)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible — rollback is straightforward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIALLY COMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final statement executed; changes may be in memory buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All operations done; waiting for log flush to stable storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brief (milliseconds, bounded by fsync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible — need to ensure REDO log is durable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All changes permanently written to storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit record in log; changes visible to other transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No — committed transactions cannot be rolled back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAILED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction cannot continue due to error/crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active or partially committed transaction encountered unrecoverable error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brief (cleaned up immediately)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — must roll back to ABORTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ABORTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction has been rolled back; all changes undone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database restored to state before transaction began"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — can restart the transaction (retry)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-transition-table",
      children: "State Transition Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "From State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "To State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY_COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final operation completes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare log for commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error, crash, or explicit ABORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Begin rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY_COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log flush to stable storage succeeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make changes visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY_COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log flush fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Begin rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback completes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean up resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-transaction-state-transitions",
      children: "Dry Run: Transaction State Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1: Successful Transaction"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Log"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN TRANSACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[*]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<BEGIN T1>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "READ(A) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(A, 500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<T1, A, 1000, 500> (UNDO record)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(B, 1000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<T1, B, 500, 1000> (UNDO record)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Last statement done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fsync log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log force"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<T1, COMMIT> (REDO record)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flush data pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIALLY COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 2: Failed Transaction with Rollback"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Log"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN TRANSACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[*]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<BEGIN T2>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "READ(A) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE(A, 500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<T2, A, 1000, 500>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAILED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log in stable storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery starts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback begins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find T2 has no COMMIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNDO(T2): restore A=1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNDO complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ABORTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<T2, ABORT>"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-of-state-management",
      children: "Complexity of State Management"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple state variable update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log record creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to log buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log flush (fsync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single system call, but high latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crash recovery (UNDO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = uncommitted txns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan log, undo all uncommitted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crash recovery (REDO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = committed but unflushed txns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan log, redo all committed without commit flag on disk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-schedules",
      children: "9.4 Schedules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "schedule"
      }), " (or history) is a sequence of operations from one or more transactions, ordered by time. Schedules are the fundamental unit of analysis for concurrency control correctness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-definition",
      children: "Formal Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A schedule S over a set of transactions T = {T1, T2, ..., Tn} is a sequence of operations where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The operations of each transaction Ti appear in S in the same order they appear in Ti"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S contains exactly the union of all operations from all transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-schedules",
      children: "Types of Schedules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Serial Schedule:"
      }), " Transactions execute one after another with no interleaving. T1 runs completely, then T2 runs completely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nSchedule S_serial (T1 then T2):\nT1: R(A) W(A) R(B) W(B)  →  T2: R(A) W(A) R(B) W(B)\n```"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Serializable Schedule:"
      }), " Operations may be interleaved, but the net effect is equivalent to SOME serial schedule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nSchedule S_serializable:\nT1: R(A) W(A)\nT2:       R(A) W(A) R(B) W(B)\nT1:                 R(B) W(B)\n```"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-Serializable Schedule:"
      }), " The interleaving produces a result that no serial schedule can produce."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nSchedule S_non_serializable:\nT1: R(A) W(B)\nT2: R(B) W(A)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schedule-types-comparison-table",
      children: "Schedule Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serializable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Serializable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interleaving"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correctness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to serial → correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May produce inconsistent results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (1 transaction at a time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potentially dangerous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable (unsafe)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst CPU utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precedence Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cycles (trivially)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acyclic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains a cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 then T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaved but equivalent to serial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1:R(A) W(B), T2:R(B) W(A)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-schedule-execution",
      children: "Dry Run: Schedule Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transactions:"
      }), "\n```text\nT1: R(A) W(A) R(B) W(B)\nT2: R(A) W(A) R(B) W(B)\n```"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Values:"
      }), " A = 100, B = 200\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T1 Semantics:"
      }), " A = A + 10, B = B * 2\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T2 Semantics:"
      }), " A = A * 2, B = B + 50"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serial Schedule (T1 then T2):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 100+10 = 110, W(A,110)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(B) → 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 200*2 = 400, W(B,400)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "400"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 110*2 = 220, W(A,220)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "220"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(B) → 400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 400+50 = 450, W(B,450)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "450"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result: A = 220, B = 450"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serial Schedule (T2 then T1):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 100*2 = 200, W(A,200)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "200"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(B) → 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 200+50 = 250, W(B,250)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "250"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 200+10 = 210, W(A,210)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "210"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(B) → 250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "250"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 250*2 = 500, W(B,500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "500"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result: A = 210, B = 500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Different serial orders produce different (but consistent) results. Both are correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interleaved Schedule (Serializable):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 110, W(A,110)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 220, W(A,220)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "220"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(B) → 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 400, W(B,400)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "400"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(B) → 400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B = 450, W(B,450)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "450"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result: A = 220, B = 450"
      }), " (Same as T1→T2 serial → Serializable ✓)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-schedule",
      children: "Complete Schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete schedule"
      }), " contains a commit (or abort) operation for every transaction. An incomplete schedule (one where a transaction has not yet committed or aborted) cannot be analyzed for serializability because the transaction may still execute additional operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nComplete Schedule:\nT1: R(A) W(A) R(B) W(B) C1\nT2: R(A) W(A) R(B) W(B) C2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incomplete Schedule:\nT1: R(A) W(A) R(B)       (T1 commit missing)\nT2:      R(A) W(A) R(B) W(B) C2\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-serial-vs-serializable",
      children: "9.5 Serial vs Serializable"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serial Schedule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serializable Schedule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions execute one after another with zero interleaving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations may interleave, but the result equals some serial execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interleaving"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — arbitrary interleaving allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correctness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct by equivalence to serial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst: 1/N throughput for N transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much better: near-parallel throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precedence Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially acyclic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acyclic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never used in production unless forced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The practical standard for correctness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-insight",
      children: "Key Insight"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "serial-schedules-are-correct-by-definition-but-impractical-they-waste-concurrency-serializable-schedules-are-correct-by-proof-and-practical-the-entire-field-of-concurrency-control-aims-to-produce-serializable-schedules-while-maximizing-interleaving",
      children: ["Serial schedules are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "correct by definition"
      }), " but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "impractical"
      }), " (they waste concurrency). Serializable schedules are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "correct by proof"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "practical"
      }), ". The entire field of concurrency control aims to produce serializable schedules while maximizing interleaving."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-conflict-serializability",
      children: "9.6 Conflict Serializability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two operations ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conflict"
      }), " if they satisfy three conditions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["They belong to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "different transactions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["They access the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same data item"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one of them is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "write"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conflict-types",
      children: "Conflict Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation Pair"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conflict?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) and R(A) from different Txs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both read — no modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) and W(A) from different Txs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ-WRITE conflict (unrepeatable read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W(A) and R(A) from different Txs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE-READ conflict (dirty read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W(A) and W(A) from different Txs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE-WRITE conflict (lost update)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-for-conflict-serializability-testing",
      children: "Algorithm for Conflict Serializability Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nINPUT: Schedule S as sequence of (Transaction, Operation, DataItem)\nOUTPUT: Is conflict-serializable? (Boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FUNCTION IsConflictSerializable(S):\n// Phase 1: Identify all conflicting operation pairs\nconflicts = []\nFOR i = 1 TO |S|:\nFOR j = i+1 TO |S|:\nIF S[i].txn != S[j].txn\nAND S[i].item == S[j].item\nAND (S[i].op == \"W\" OR S[j].op == \"W\"):\nconflicts.APPEND( (S[i].txn → S[j].txn) )"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Phase 2: Build precedence graph\ngraph = new Graph(all_transactions_in_S)\nFOR EACH (Ti → Tj) IN conflicts:\n    graph.ADD_EDGE(Ti, Tj)\n\n// Phase 3: Check for cycles\nRETURN NOT graph.HAS_CYCLE()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "END FUNCTION\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "precedence-graph--step-by-step-construction",
      children: "Precedence Graph — Step-by-Step Construction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Determine if this schedule is conflict-serializable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nS: T1: R(A)  T2: W(A)  T1: W(B)  T2: R(B)  T3: W(A)  T3: R(B)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: List all operations with transaction IDs"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transaction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Item"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Find all conflicting operation pairs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each pair (i, j) where i < j and transactions differ:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pair (1,2): T1:R(A), T2:W(A) — same item A, at least one write → CONFLICT → T1 → T2 (T1 reads A before T2 writes A)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pair (1,5): T1:R(A), T3:W(A) — same item A, at least one write → CONFLICT → T1 → T3 (T1 reads A before T3 writes A)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pair (2,5): T2:W(A), T3:W(A) — same item A, both writes → CONFLICT → T2 → T3 (T2 writes A before T3 writes A)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pair (3,4): T1:W(B), T2:R(B) — same item B, at least one write → CONFLICT → T1 → T2 (T1 writes B before T2 reads B)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pair (3,6): T1:W(B), T3:R(B) — same item B, at least one write → CONFLICT → T1 → T3 (T1 writes B before T3 reads B)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pair (4,6): T2:R(B), T3:R(B) — same item B, both reads → NOT a conflict (no write)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Build the precedence graph"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nodes: {T1, T2, T3}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1 → T2 (from pairs 1,2 and 3,4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1 → T3 (from pairs 1,5 and 3,6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T2 → T3 (from pair 2,5)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph:\n```text\nT1 → T2\n↓    ↓\nT3 ←──┘\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Check for cycles"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start DFS from T1: visit T2, visit T3. No back edges. No cycles.\nStart DFS from T2: visit T3. No cycles."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion:"
      }), " Graph is acyclic → Schedule IS conflict-serializable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Equivalent serial schedule:"
      }), " T1 → T2 → T3"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-conflict-serializability-checker",
      children: "C++ Implementation: Conflict Serializability Checker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["```cpp\n#include <iostream>\n#include <vector>\n#include ", (0,jsx_runtime.jsx)(_components.map, {
        children: "\n#include <set>\n#include <string>\n#include <sstream>"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enum OpType { READ, WRITE };"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct Operation {\nint txnId;\nOpType type;\nchar dataItem;\nOperation(int t, OpType o, char d) : txnId(t), type(o), dataItem(d) {}\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class PrecedenceGraph {\nprivate:\nstd::map<int, std::set<int>> adjList;\nstd::set<int> nodes;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool dfs(int node, std::set&lt;int&gt;& visited, std::set&lt;int&gt;& recStack) {\n    visited.insert(node);\n    recStack.insert(node);\n    for (int neighbor : adjList[node]) {\n        if (recStack.find(neighbor) != recStack.end())\n            return true;\n        if (visited.find(neighbor) == visited.end()) {\n            if (dfs(neighbor, visited, recStack))\n                return true;\n        }\n    }\n    recStack.erase(node);\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public:\nvoid addEdge(int from, int to) {\nadjList[from].insert(to);\nnodes.insert(from);\nnodes.insert(to);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool hasCycle() {\n    std::set&lt;int&gt; visited;\n    std::set&lt;int&gt; recStack;\n    for (int node : nodes) {\n        if (visited.find(node) == visited.end()) {\n            if (dfs(node, visited, recStack))\n                return true;\n        }\n    }\n    return false;\n}\n\nvoid printGraph() {\n    std::cout &lt;< \"Precedence Graph:\\n\";\n    for (auto& [node, neighbors] : adjList) {\n        std::cout &lt;< \"  T\" << node << \" → \";\n        for (int n : neighbors)\n            std::cout &lt;< \"T\" << n << \" \";\n        std::cout &lt;< \"\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ConflictSerializabilityChecker {\nprivate:\nstd::vector<Operation> schedule;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public:\nvoid addOperation(int txn, char op, char item) {\nOpType t = (op == \"W\" || op == \"w\") ? WRITE : READ;\nschedule.push_back(Operation(txn, t, item));\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool isConflictSerializable() {\n    PrecedenceGraph graph;\n    int n = schedule.size();\n\n    for (int i = 0; i &lt; n; i++) {\n        for (int j = i + 1; j &lt; n; j++) {\n            auto& op1 = schedule[i];\n            auto& op2 = schedule[j];\n\n            if (op1.txnId == op2.txnId) continue;\n            if (op1.dataItem != op2.dataItem) continue;\n\n            if (op1.type == WRITE || op2.type == WRITE) {\n                graph.addEdge(op1.txnId, op2.txnId);\n                std::cout &lt;< \"Conflict: T\" << op1.txnId\n                          << (op1.type == READ ? \" R(\" : \" W(\")\n                          << op1.dataItem &lt;< \") → T\" << op2.txnId\n                          << (op2.type == READ ? \" R(\" : \" W(\")\n                          << op2.dataItem &lt;< \")\\n\";\n            }\n        }\n    }\n\n    graph.printGraph();\n    bool hasCycle = graph.hasCycle();\n\n    if (hasCycle) {\n        std::cout &lt;< \"Cycle detected! Schedule is NOT conflict-serializable.\\n\";\n        return false;\n    } else {\n        std::cout &lt;< \"No cycles. Schedule IS conflict-serializable.\\n\";\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nConflictSerializabilityChecker checker;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Schedule: T1:R(A), T2:W(A), T1:W(B), T2:R(B), T3:W(A), T3:R(B)\nchecker.addOperation(1, \"R\", \"A\");\nchecker.addOperation(2, \"W\", \"A\");\nchecker.addOperation(1, \"W\", \"B\");\nchecker.addOperation(2, \"R\", \"B\");\nchecker.addOperation(3, \"W\", \"A\");\nchecker.addOperation(3, \"R\", \"B\");\n\nbool result = checker.isConflictSerializable();\nstd::cout &lt;< \"Result: \" << (result ? \"SERIALIZABLE\" : \"NOT SERIALIZABLE\") << \"\\n\";\n\n// Test a non-serializable schedule\nstd::cout &lt;< \"\\n--- Test 2: Non-Serializable Schedule ---\\n\";\nConflictSerializabilityChecker checker2;\n// T1: R(A) W(B), T2: R(B) W(A)\nchecker2.addOperation(1, \"R\", \"A\");\nchecker2.addOperation(1, \"W\", \"B\");\nchecker2.addOperation(2, \"R\", \"B\");\nchecker2.addOperation(2, \"W\", \"A\");\nbool result2 = checker2.isConflictSerializable();\nstd::cout &lt;< \"Result: \" << (result2 ? \"SERIALIZABLE\" : \"NOT SERIALIZABLE\") << \"\\n\";\n\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-conflict-serializability-checker",
      children: "Python Implementation: Conflict Serializability Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```python\nfrom typing import List, Tuple, Set, Dict\nfrom enum import Enum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class OpType(Enum):\nREAD = 1\nWRITE = 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class Operation:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, txn_id: int, op_type: OpType, data_item: str):\nself.txn_id = txn_id\nself.op_type = op_type\nself.data_item = data_item"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def __repr__(self):\n    op = \"R\" if self.op_type == OpType.READ else \"W\"\n    return f\"T{self.txn_id}:{op}({self.data_item})\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class PrecedenceGraph:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self):\nself.adj_list: Dict[int, Set[int]] = {}\nself.nodes: Set[int] = set()"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_edge(self, from_node: int, to_node: int):\n    if from_node not in self.adj_list:\n        self.adj_list[from_node] = set()\n    self.adj_list[from_node].add(to_node)\n    self.nodes.add(from_node)\n    self.nodes.add(to_node)\n\ndef _has_cycle_util(self, node: int, visited: Set[int],\n                    rec_stack: Set[int]) -> bool:\n    visited.add(node)\n    rec_stack.add(node)\n    for neighbor in self.adj_list.get(node, set()):\n        if neighbor in rec_stack:\n            return True\n        if neighbor not in visited:\n            if self._has_cycle_util(neighbor, visited, rec_stack):\n                return True\n    rec_stack.discard(node)\n    return False\n\ndef has_cycle(self) -> bool:\n    visited: Set[int] = set()\n    rec_stack: Set[int] = set()\n    for node in self.nodes:\n        if node not in visited:\n            if self._has_cycle_util(node, visited, rec_stack):\n                return True\n    return False\n\ndef __repr__(self):\n    lines = [\"Precedence Graph:\"]\n    for node in sorted(self.nodes):\n        neighbors = self.adj_list.get(node, set())\n        if neighbors:\n            lines.append(f\"  T{node} → {', '.join(f'T{n}' for n in sorted(neighbors))}\")\n    return \"\\n\".join(lines)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class ConflictSerializabilityChecker:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self):\nself.schedule: List[Operation] = []"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_operation(self, txn_id: int, op_char: str, data_item: str):\n    op_type = OpType.WRITE if op_char.upper() == \"W\" else OpType.READ\n    self.schedule.append(Operation(txn_id, op_type, data_item))\n\ndef add_operations(self, ops: List[Tuple[int, str, str]]):\n    for txn_id, op_char, data_item in ops:\n        self.add_operation(txn_id, op_char, data_item)\n\ndef is_conflict_serializable(self) -> Tuple[bool, PrecedenceGraph]:\n    graph = PrecedenceGraph()\n    n = len(self.schedule)\n\n    print(\"Analyzing schedule:\", \" → \".join(str(op) for op in self.schedule))\n    print(\"\\nConflicts:\")\n\n    for i in range(n):\n        for j in range(i + 1, n):\n            op1, op2 = self.schedule[i], self.schedule[j]\n            if op1.txn_id == op2.txn_id:\n                continue\n            if op1.data_item != op2.data_item:\n                continue\n            if op1.op_type == OpType.WRITE or op2.op_type == OpType.WRITE:\n                graph.add_edge(op1.txn_id, op2.txn_id)\n                print(f\"  {op1} → {op2}\")\n\n    print(f\"\\n{graph}\")\n    has_cycle = graph.has_cycle()\n    if has_cycle:\n        print(\"CYCLE DETECTED: Schedule is NOT conflict-serializable.\")\n    else:\n        print(\"No cycles: Schedule IS conflict-serializable.\")\n    return (not has_cycle, graph)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def main():\n# Test 1: Serializable schedule\nprint(\"=\" * 60)\nprint(\"TEST 1: Serializable Schedule\")\nprint(\"=\" * 60)\nchecker1 = ConflictSerializabilityChecker()\nchecker1.add_operations([\n(1, \"R\", \"A\"), (2, \"W\", \"A\"), (1, \"W\", \"B\"),\n(2, \"R\", \"B\"), (3, \"W\", \"A\"), (3, \"R\", \"B\")\n])\nresult1, _ = checker1.is_conflict_serializable()\nprint(f\"\\nVerdict: {\"✓ SERIALIZABLE\" if result1 else \"✗ NOT SERIALIZABLE\"}\\n\")"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Test 2: Non-serializable schedule\nprint(\"=\" * 60)\nprint(\"TEST 2: Non-Serializable Schedule\")\nprint(\"=\" * 60)\nchecker2 = ConflictSerializabilityChecker()\nchecker2.add_operations([\n    (1, \"R\", \"A\"), (1, \"W\", \"B\"),\n    (2, \"R\", \"B\"), (2, \"W\", \"A\")\n])\nresult2, _ = checker2.is_conflict_serializable()\nprint(f\"\\nVerdict: {\"✓ SERIALIZABLE\" if result2 else \"✗ NOT SERIALIZABLE\"}\\n\")\n\n# Test 3: Three-transaction schedule\nprint(\"=\" * 60)\nprint(\"TEST 3: Three-Transaction Serializable Schedule\")\nprint(\"=\" * 60)\nchecker3 = ConflictSerializabilityChecker()\nchecker3.add_operations([\n    (1, \"R\", \"A\"), (2, \"R\", \"B\"), (1, \"W\", \"A\"),\n    (2, \"W\", \"B\"), (3, \"R\", \"A\"), (3, \"R\", \"B\"),\n    (3, \"W\", \"A\"), (3, \"W\", \"B\")\n])\nresult3, graph = checker3.is_conflict_serializable()\nprint(f\"\\nVerdict: {\"✓ SERIALIZABLE\" if result3 else \"✗ NOT SERIALIZABLE\"}\")\n\nif result3:\n    print(\"Equivalent serial order: T1 → T2 → T3 (example)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " == \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "main"
      }), "\":\nmain()\n```"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-conflict-serializability-checker",
      children: "Complexity Analysis of Conflict Serializability Checker"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
              children: "Conflict detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) where n = number of operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every pair of operations is compared (nested loop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph construction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each conflict adds an edge; at most O(n²) conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cycle detection (DFS)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E) where V = transactions, E = edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard DFS with recursion stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominated by conflict detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list for precedence graph"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-1",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decidability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiently testable in O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple graph algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intuitiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to explain: \"no cycles = serializable\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conservative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rejects some valid schedules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misses view-serializable schedules with blind writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only considers conflicting operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-conflicting reorderings are ignored"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-conflict-serializability",
      children: "Edge Cases in Conflict Serializability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Schedule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blind writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1:W(A), T2:W(A), T2:R(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence graph may have cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be view-serializable despite conflict cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Same transaction ops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1:R(A), T1:W(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No conflict because same transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignored by definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-conflicting items"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1:R(A), T2:W(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different data items → no conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctly ignored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Three-way cycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1→T2, T2→T3, T3→T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detected correctly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS handles multi-node cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected components"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1:R(A), T2:W(B) (no shared items)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No edges; trivially serializable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-view-serializability",
      children: "9.7 View Serializability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A schedule is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "view-serializable"
      }), " if it is view-equivalent to some serial schedule. View equivalence is a weaker condition than conflict equivalence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditions-for-view-equivalence",
      children: "Conditions for View Equivalence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two schedules S and S'\"'\"' are view-equivalent if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same initial read:"
        }), " For each data item, the first read in S is from the same transaction as the first read in S'\"'\"'"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same read-from:"
        }), " For each read of a data item, the transaction that performed the write that produced the value is the same in both schedules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same final write:"
        }), " For each data item, the last transaction to write it is the same in both schedules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-blind-write-schedule-view-serializable-but-not-conflict-serializable",
      children: "Example: Blind Write Schedule (View-Serializable but NOT Conflict-Serializable)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nSchedule S:\nT1: W(A)         T2: W(A)         T2: W(B)         T1: W(B)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conflict Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1:W(A) conflicts with T2:W(A) → T1 → T2 (T1 writes A before T2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T2:W(B) conflicts with T1:W(B) → T2 → T1 (T2 writes B before T1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Precedence graph: T1 → T2 → T1 (CYCLE). NOT conflict-serializable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "View Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initial reads: No reads at all — no initial read condition to check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read-from: No reads at all — no read-from condition to check"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Final writes:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A: Last writer is T2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B: Last writer is T1"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compare to serial schedule S_serial = T1 → T2:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A: T1 writes A, then T2 overwrites A → final writer T2 ✓"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B: T1 writes B → final writer T1 ✓"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Despite the cycle, S IS view-equivalent to T1 → T2!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "view-serializability-vs-conflict-serializability-comparison",
      children: "View Serializability vs Conflict Serializability Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conflict Serializability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "View Serializability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) — polynomial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete (theoretically harder)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Practical test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence graph cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polygraph (complex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blind writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rejects schedules with blind writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can accept them"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset of view-serializable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superset (includes all conflict-serializable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple graph algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely implemented in full; approximated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use in DBMS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard for concurrency control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theoretical benchmark; not used directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Counterexample needed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires blind writes to differ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "theorem",
      children: "Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every conflict-serializable schedule is view-serializable, but the converse is NOT true."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-view-serializability-is-not-used-in-practice",
      children: "Why View Serializability Is Not Used in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing is harder:"
        }), " The view equivalence test (polygraph) has exponential worst-case complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blind writes are rare:"
        }), " Most real transactions read before writing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conservative is safe:"
        }), " Conflict serializability rejects fewer than 1% of schedules that a real DBMS would generate — sacrificing that tiny fraction for guaranteed polynomial-time checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-recoverable-and-cascadeless-schedules",
      children: "9.8 Recoverable and Cascadeless Schedules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recoverable-schedule",
      children: "Recoverable Schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A schedule is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recoverable"
      }), " if, whenever a transaction Tj reads data written by transaction Ti, then Ti'\"'\"'s commit appears before Tj'\"'\"'s commit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " If Tj commits after reading uncommitted data from Ti, and Ti later aborts, Tj has committed based on data that no longer exists. This violates atomicity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Non-Recoverable Schedule:"
      }), "\n```text\nT1: W(A)  T2: R(A)  T2: COMMIT  T1: ABORT\n```\nT2 commits after reading T1'\"'\"'s uncommitted write. When T1 aborts, T2 has already committed with invalid data. This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-recoverable"
      }), " schedule — it should never be allowed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cascadeless-schedule",
      children: "Cascadeless Schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A schedule is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cascadeless"
      }), " if transactions only read data written by transactions that have already committed. This prevents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cascading rollbacks"
      }), " — where one transaction'\"'\"'s abort forces a chain of aborts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Cascading Rollback:"
      }), "\n```text\nT1: W(A)\nT2: R(A) W(B)     (T2 reads uncommitted A from T1)\nT3: R(B)          (T3 reads uncommitted B from T2)\nT1: ABORT         → T2 must abort → T3 must abort\n```\nAll three transactions roll back. Cascadeless schedules prevent this by requiring T2 to wait for T1'\"'\"'s commit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cascadeless Schedule (fixed):"
      }), "\n```text\nT1: W(A)  T1: COMMIT  T2: R(A) W(B)  T2: COMMIT  T3: R(B)  T3: COMMIT\n```"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schedule-type-hierarchy",
      children: "Schedule Type Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nAll Schedules\n└── Recoverable Schedules\n└── Cascadeless Schedules\n└── Strict Schedules\n```"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strict schedule:"
        }), " A transaction can neither read nor write a data item until the last transaction that wrote it has committed. Strictness implies cascadeless, which implies recoverable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "99-sql-transaction-control",
      children: "9.9 SQL Transaction Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```sql\n-- Start a transaction\nBEGIN TRANSACTION;\n-- or\nBEGIN;\n-- or\nSTART TRANSACTION;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Savepoint (sub-transaction)\nBEGIN;\nINSERT INTO log VALUES (\"Step 1\");\nSAVEPOINT sp1;\nINSERT INTO log VALUES (\"Step 2 that might fail\");\nROLLBACK TO SAVEPOINT sp1;  -- Undo step 2, keep step 1\nINSERT INTO log VALUES (\"Step 3\");\nCOMMIT;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Set isolation level\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Complete transaction\nCOMMIT;\n-- or abort\nROLLBACK;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Auto-commit mode (default in most DBMS)\n-- Each statement is its own transaction\nSET autocommit = OFF;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Practical example: money transfer with error handling\nBEGIN;\nSAVEPOINT start_tx;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1 AND balance >= 500;\nIF ROW_COUNT() = 0 THEN\nROLLBACK TO SAVEPOINT start_tx;\nELSE\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;\nEND IF;\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "910-concurrency-anomalies",
      children: "9.10 Concurrency Anomalies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Concurrency anomalies (or \"phenomena\") are consistency problems that arise when transactions execute concurrently without proper isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anomaly-comparison-table",
      children: "Anomaly Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anomaly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation Needed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dirty Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading uncommitted data from another transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 reads A=900 before T1 commits (or aborts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-Repeatable Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same row read twice, different values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REPEATABLE READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 reads A=1000, T2 updates A to 900, T1 reads A=900"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same query returns different row set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 queries WHERE balance > 500, T2 inserts new row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lost Update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two concurrent writes — one overwrites the other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong isolation / locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1: A=A-500, T2: A=A-200, T2 overwrites T1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write Skew"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two transactions read overlapping data, write non-overlapping, violating a constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERIALIZABLE / predicate locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doctor on-call constraint violated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-dirty-read",
      children: "Dry Run: Dirty Read"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nInitial: A = 1000\nT1: A = A - 500 (writes A=500)\nT2: READ(A) → 500 (dirty read!)\nT1: ROLLBACK (A restored to 1000)\nT2: continues with value 500 — which never existed\n```"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2'\"'\"'s View"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 500, W(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 (buffer: 500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "500"
            }), " ← dirty!"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROLLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses A=500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 ← WRONG"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-lost-update",
      children: "Dry Run: Lost Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nInitial: A = 1000\nT1: A = A - 500 → Writes A=500\nT2: A = A - 200 → Writes A=800 (overwrites T1!)\nT1: COMMIT\nT2: COMMIT\nFinal: A = 800 ($700 lost!)\n```"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A (T1 view)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A (T2 view)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disk A"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W(A, 500)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 (buf: 500)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(A) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A = 800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W(A, 800)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "800"
            }), " ← LOST"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "800"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Correct result:"
      }), " 1000 - 500 - 200 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "300"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "911-isolation-levels-in-sql",
      children: "9.11 Isolation Levels in SQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SQL standard defines four isolation levels that control which concurrency anomalies can occur."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isolation-level-matrix",
      children: "Isolation Level Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dirty Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Repeatable Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phantom Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lost Update"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "READ UNCOMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "READ COMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REPEATABLE READ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (some DBMS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERIALIZABLE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-dive-per-level",
      children: "Deep Dive per Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "READ UNCOMMITTED:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation: No read locks; writes use short duration locks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phenomena: All anomalies possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance: Maximum concurrency, minimum overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Approximate read-only data (dashboards, counters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning: Dangerous for any write-focused workload"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "READ COMMITTED (default in PostgreSQL, SQL Server, Oracle):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation: Each query gets a snapshot (MVCC) or read locks released immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phenomena: Non-repeatable reads possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance: Good; most practical level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: General-purpose OLTP workloads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "REPEATABLE READ (default in MySQL/InnoDB):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation: Read locks held until commit (locking) or snapshot isolation (MVCC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phenomena: Phantoms still possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance: Reduced concurrency due to held read locks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Reporting queries that must see consistent row values"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SERIALIZABLE (most strict):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation: Predicate locking or lock table scans; true serial execution emulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phenomena: All anomalies prevented (including write skew)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance: Lowest concurrency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Financial reconciliation, inventory, money-related workloads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sql-syntax",
      children: "SQL Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```sql\n-- Set isolation level for a transaction\nSET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-- Example: REPEATABLE READ prevents non-repeatable reads\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nBEGIN;\nSELECT balance FROM accounts WHERE id = 1;  -- Returns 1000\n-- T2 concurrently: UPDATE accounts SET balance = 900 WHERE id = 1;\nSELECT balance FROM accounts WHERE id = 1;  -- Still 1000 (REPEATABLE READ)\nCOMMIT;"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "---example-serializable-prevents-phantomsset-transaction-isolation-level-serializablebeginselect--from-orders-where-status--pending---t2-concurrently-insert-into-orders-status-values-pendingselect--from-orders-where-status--pending-----same-rowscommit",
      children: "-- Example: SERIALIZABLE prevents phantoms\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN;\nSELECT * FROM orders WHERE status = \"pending\";\n-- T2 concurrently: INSERT INTO orders (status) VALUES (\"pending\");\nSELECT * FROM orders WHERE status = \"pending\";  -- Same rows\nCOMMIT;\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "912-acid-vs-base",
      children: "9.12 ACID vs BASE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In distributed systems, the CAP theorem forces a choice between consistency (C) and availability (A) when partitions (P) occur. ACID favors consistency; BASE favors availability."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ACID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BASE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stands for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomicity, Consistency, Isolation, Durability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basically Available, Soft state, Eventual consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Philosophy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pessimistic (assumes failures will happen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic (assumes failures are rare)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict (SERIALIZABLE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed (read uncommitted is common)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard state (consistent after each transaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft state (state changes over time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate, guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual, best-effort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking, financial, inventory, booking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media, analytics, IoT, logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, Oracle, MySQL (with InnoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, DynamoDB, CouchDB, Riak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency + Partition tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Availability + Partition tolerance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-trade-off",
      children: "Key Trade-Off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACID systems"
        }), " provide strong guarantees but sacrifice availability during partitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BASE systems"
        }), " stay available during partitions but may return stale data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid approach:"
        }), " Use ACID for critical data (ledger, inventory counts) and BASE for non-critical data (user profiles, session data)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "913-interview-corner",
      children: "9.13 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-happens-if-a-transaction-fails-after-writing-some-data-but-before-commit",
      children: "Q1: What happens if a transaction fails after writing some data but before commit?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The DBMS uses the UNDO log. Before any write, a \"before image\" is written to the log. On failure detection, the recovery manager reads the log and restores all before-images for the failed transaction. This restores the database to the state before the transaction began."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-difference-between-dirty-read-non-repeatable-read-and-phantom-read",
      children: "Q2: What is the difference between dirty read, non-repeatable read, and phantom read?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anomaly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dirty read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read uncommitted data that may be rolled back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-repeatable read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same row read twice, committed update changes it between reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REPEATABLE READ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same query, new rows appear due to concurrent inserts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERIALIZABLE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-can-a-schedule-be-both-conflict-serializable-and-view-serializable",
      children: "Q3: Can a schedule be both conflict-serializable and view-serializable?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Yes. Every conflict-serializable schedule is also view-serializable. The reverse is not true: schedules with blind writes can be view-serializable but not conflict-serializable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-a-cascading-rollback-and-why-is-it-bad",
      children: "Q4: What is a cascading rollback and why is it bad?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A cascading rollback occurs when one transaction'\"'\"'s abort forces other transactions (which read its uncommitted data) to also abort. It is bad because it can cascade through many transactions, wasting all their work. Cascadeless schedules prevent this by only allowing reads of committed data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-a-serial-schedule-and-a-serializable-schedule",
      children: "Q5: What is the difference between a serial schedule and a serializable schedule?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Serial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serializable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No interleaving at all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaving allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to some serial schedule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not used in practice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The practical standard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-test-for-conflict-serializability",
      children: "Q6: How do you test for conflict serializability?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Build a precedence graph where nodes are transactions and directed edges represent conflicting operations (Ti → Tj if Ti'\"'\"'s conflicting operation occurs before Tj'\"'\"'s). If the graph has a cycle, the schedule is not conflict-serializable. If acyclic, it is conflict-serializable, and any topological order gives an equivalent serial schedule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-difference-between-conflict-and-view-serializability",
      children: "Q7: What is the difference between conflict and view serializability?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Conflict serializability is based on the order of conflicting operations (read-write, write-read, write-write) and is tested via precedence graphs in O(n²). View serializability is based on initial reads, read-from relationships, and final writes — it allows blind writes that conflict serializability rejects. View serializability is harder to test (NP-complete in general) and is mainly a theoretical concept."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-isolation-level-should-you-use-for-a-banking-application",
      children: "Q8: What isolation level should you use for a banking application?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SERIALIZABLE. Financial transactions must not experience any anomalies. The performance cost is justified by the correctness guarantee. In practice, many banking systems use REPEATABLE READ with careful application-level locking, but SERIALIZABLE is the safest choice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-a-lost-update-how-do-you-prevent-it",
      children: "Q9: What is a lost update? How do you prevent it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A lost update occurs when two concurrent transactions read the same value, modify it independently, and the second write overwrites the first without incorporating the first'\"'\"'s modification. Prevention: use pessimistic locking (SELECT ... FOR UPDATE), SERIALIZABLE isolation, or optimistic concurrency control with version numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-write-skew",
      children: "Q10: What is write skew?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Write skew occurs when two transactions read overlapping data, make decisions based on that data, and write non-overlapping data — but the combined result violates a constraint. Example: A hospital requires at least one doctor on call. T1 sets Doctor A to \"not on call\" (after reading Doctor B is on call). T2 sets Doctor B to \"not on call\" (after reading Doctor A is on call). Result: zero doctors on call. Prevention: SERIALIZABLE isolation or predicate locking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "914-applications-in-real-systems",
      children: "9.14 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mysql-innodb",
      children: "MySQL InnoDB"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REPEATABLE READ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVCC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — each transaction sees a snapshot of data at the start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap locking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for REPEATABLE READ and SERIALIZABLE to prevent phantoms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next-key locking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row lock + gap lock = prevents phantoms in index scans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doublewrite buffer + REDO log + UNDO log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-increment locking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Special table-level lock for AUTO_INCREMENT columns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postgresql",
      children: "PostgreSQL"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVCC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — uses tuple-level versioning (xmin/xmax system columns)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSI (Serializable Snapshot Isolation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True SERIALIZABLE using predicate locking + conflict detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No gap locking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses MVCC + SSI instead of next-key locking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VACUUM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes dead tuples that MVCC creates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction ID wraparound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VACUUM FREEZE prevents 32-bit transaction ID overflow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oracle",
      children: "Oracle"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVCC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — undo segments maintain consistent read images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-only transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True snapshot isolation via READ ONLY transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No REPEATABLE READ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle maps REPEATABLE READ to SERIALIZABLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UNDO retention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees undo availability for consistent reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flashback queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses UNDO data to query past states"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-of-dbms-transaction-support",
      children: "Comparison of DBMS Transaction Support"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MySQL InnoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Oracle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REPEATABLE READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ COMMITTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVCC model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot at first read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot per query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot per query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next-key locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSI (SERIALIZABLE only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSI (SERIALIZABLE only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERIALIZABLE impl."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSI (optimistic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSI (optimistic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDL in transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (some DDL commits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (full transactional DDL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (full transactional DDL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate (cycle detection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate (timeout + detection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate (graph-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Savepoints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (nested)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autocommit default"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFF (in SQL*Plus)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Applying conflict and view serializability tests to concrete schedules builds the intuition needed to reason about transaction correctness in multi-user databases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.1: Testing Serializability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Schedule S:\n```text\nT1: READ(A), WRITE(A)\nT2:           READ(A), WRITE(A), READ(B), WRITE(B)\nT3:                     READ(B)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Identify conflicts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1 WRITE(A) with T2 READ(A): T1 → T2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T2 WRITE(A) with T1 READ(A): T1 → T2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T2 WRITE(B) with T3 READ(B): T2 → T3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges: T1 → T2, T2 → T3\nNo cycle → Conflict-serializable. Equivalent serial schedule: T1 → T2 → T3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.2: Non-Serializable Schedule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nT1: READ(A), WRITE(B)\nT2: READ(B), WRITE(A)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conflicts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1 WRITE(B) conflicts with T2 READ(B): T1 → T2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T2 WRITE(A) conflicts with T1 READ(A): T2 → T1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges: T1 → T2 and T2 → T1 (CYCLE!). NOT conflict-serializable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.3: Blind Write (View-Serializable Only)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nT1: W(A)  T2: W(A)  T2: W(B)  T1: W(B)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conflict graph: T1 → T2 (via A) and T2 → T1 (via B) = CYCLE → NOT conflict-serializable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View analysis: No reads. Final writes: A by T2, B by T1.\nSerial schedule T1→T2: T1 writes A, T2 overwrites A ✓; T1 writes B ✓.\nBoth serial orders produce same final state → View-serializable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.4: Cascading Rollback"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nT1: W(A)\nT2: R(A), W(B)\nT3: R(B)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If T1 aborts, T2 (read T1'\"'\"'s uncommitted A) must abort, T3 (read T2'\"'\"'s B) must abort. Three transactions lost. Solution: cascadeless schedule — delay T2'\"'\"'s R(A) until T1 commits."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.5: Lost Update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "```text\nInitial: A = 100\nT1: R(A) → 100, A = 100 + 40, W(A, 140)\nT2: R(A) → 100, A = 100 + 10, W(A, 110)\n```"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without isolation, both read 100. T1 writes 140, T2 overwrites with 110. T1'\"'\"'s +40 is lost. Final: 110 (should be 150)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " SERIALIZABLE is NOT the default isolation level in any major DBMS — READ COMMITTED is. Always verify the isolation level before writing production transaction logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Dirty reads are never acceptable in a well-designed system — always use at least READ COMMITTED to avoid reading uncommitted (and potentially rolled back) data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use explicit transactions"
        }), " (BEGIN ... COMMIT) for multi-statement operations — relying on auto-commit for a bank transfer is a bug waiting to happen."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SERIALIZABLE is not the default"
        }), " in any major DBMS — READ COMMITTED is. Understand your system'\"'\"'s default isolation level before writing production code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dirty reads are never acceptable"
        }), " in a well-designed system — always use at least READ COMMITTED."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The precedence graph is your best debugging tool"
        }), " — if you see a cycle, you have a non-serializable schedule. Find the conflicting operations and reorder them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cascadeless schedules"
        }), " (preventing cascading aborts) are the practical minimum — they protect against one transaction failure rolling back unrelated work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep transactions short"
        }), " to minimize lock contention and reduce deadlock probability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use SELECT ... FOR UPDATE"
        }), " for pessimistic locking when you must prevent concurrent modification of specific rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimistic concurrency control"
        }), " works well when contention is low (<5% collision rate). Use version numbers or timestamps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor deadlocks"
        }), " — they are not bugs if handled correctly; your application must retry on serialization failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test at the highest isolation level"
        }), " during development, then relax for production once correctness is proven."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.1:"
        }), " A transaction is a logical unit of work that must satisfy ACID properties — Atomicity, Consistency, Isolation, Durability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.2:"
        }), " ACID is implemented via Write-Ahead Logging (atomicity + durability), constraints (consistency), and locking/MVCC (isolation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.3:"
        }), " A transaction passes through states: Active → Partially Committed → Committed, or Failed → Aborted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.4:"
        }), " A schedule is an ordering of operations from concurrent transactions; serial schedules guarantee correctness but limit concurrency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.5:"
        }), " Conflict serializability tests whether a schedule is equivalent to some serial schedule using precedence graphs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.6:"
        }), " Conflict serializability is tested in O(n²) using a precedence graph — a cycle means non-serializable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.7:"
        }), " View serializability is a weaker condition allowing blind writes; every conflict-serializable schedule is view-serializable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.8:"
        }), " Recoverable schedules ensure committed transactions do not read uncommitted data; cascadeless schedules prevent cascading rollbacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.9:"
        }), " Concurrency anomalies include dirty reads, non-repeatable reads, phantom reads, lost updates, and write skew."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.10:"
        }), " SQL isolation levels — READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE — balance consistency against concurrency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.11:"
        }), " ACID (strong consistency) vs BASE (eventual consistency) is a fundamental distributed systems trade-off governed by CAP theorem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "9.12:"
        }), " MySQL uses next-key locking for REPEATABLE READ; PostgreSQL uses SSI for true SERIALIZABLE; Oracle maps REPEATABLE READ to SERIALIZABLE."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acid-properties",
      children: "ACID Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ACID Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All-or-nothing execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNDO log (Write-Ahead Logging)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash during transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log write per op)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database remains valid before and after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints + triggers + application logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(constraint check per op)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent transactions appear sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locking, MVCC, timestamps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaved conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(lock acquisition per op)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committed changes persist after failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REDO log (WAL + fsync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash after commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(fsync per commit)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isolation-levels",
      children: "Isolation Levels"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dirty Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-repeatable Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phantom Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lost Update"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Skew"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "READ UNCOMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "READ COMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REPEATABLE READ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (some DBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERIALIZABLE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schedule-types",
      children: "Schedule Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serializable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Serializable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recoverable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cascadeless"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strict"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interleaving"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (may be)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if serializable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dirty reads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascading aborts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conflict-vs-view-serializability",
      children: "Conflict vs View Serializability"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conflict Serializability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "View Serializability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order of conflicting operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial reads, read-from, final writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blind writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rejected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence graph (acyclic?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polygraph (NP-complete)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Used in practice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (theoretical benchmark)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superset"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical unit of work with ACID properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence of operations from one or more transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serial Schedule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions execute one after another (no interleaving)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serializable Schedule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to some serial schedule (guarantees consistency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two operations on same data, at least one is write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict Serializable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence graph has no cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View Serializable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows blind writes; harder to test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recoverable Schedule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No transaction commits after reading from an aborted transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascadeless Schedule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions only read committed data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strict Schedule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No read/write until the writer commits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dirty Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading uncommitted data that may be rolled back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-repeatable Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same row, different values in same transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same query, different rows in same transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lost Update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One transaction'\"'\"'s write overwrites another'\"'\"'s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write Skew"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping reads + non-overlapping writes violate a constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precedence Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed graph showing transaction dependencies via conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-Ahead Logging — log before write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVCC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Version Concurrency Control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2PL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Phase Locking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serializable Snapshot Isolation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Transaction Concept"
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
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking, payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer of funds must be all-or-nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory, booking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must not oversell; constraint violations must abort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce, booking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two users should not oversell the same item"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any committed work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data must survive power failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serializable isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures complex multi-step calculations are consistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "READ COMMITTED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most web applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical balance of consistency and performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REPEATABLE READ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures report queries see consistent row values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recoverable schedules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any multi-step business process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents data corruption when a transaction fails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascadeless schedules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits blast radius of a single abort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phantom protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures consistent row counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precedence graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query optimization, testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging tool for concurrency correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MVCC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, Oracle, MySQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking reads; high concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True SERIALIZABLE without locking overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "915-typescript-transaction-scheduler",
      children: "9.15 TypeScript Transaction Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TypeScript implementation below simulates transaction scheduling — testing conflict serializability via precedence graphs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Transaction Schedule Simulator — TypeScript\n// ============================================================\n\ntype Operation = { type: 'R' | 'W'; variable: string; txId: number };\n\nclass Schedule {\n  constructor(public ops: Operation[]) {}\n\n  buildPrecedenceGraph(): Map<number, Set<number>> {\n    const graph = new Map<number, Set<number>>();\n    const getTxIds = () => [...new Set(this.ops.map(o => o.txId))].sort();\n\n    for (const id of getTxIds()) graph.set(id, new Set());\n\n    // Check all conflicting pairs\n    for (let i = 0; i < this.ops.length; i++) {\n      for (let j = i + 1; j < this.ops.length; j++) {\n        const a = this.ops[i];\n        const b = this.ops[j];\n        if (a.txId === b.txId) continue;\n        if (a.variable !== b.variable) continue;\n        // Conflict if at least one is a write\n        if (a.type === 'W' || b.type === 'W') {\n          if (!graph.has(a.txId)) graph.set(a.txId, new Set());\n          graph.get(a.txId)!.add(b.txId);\n        }\n      }\n    }\n    return graph;\n  }\n\n  isConflictSerializable(): { serializable: boolean; cycle?: number[] } {\n    const graph = this.buildPrecedenceGraph();\n    // Detect cycle using DFS\n    const visited = new Set<number>();\n    const recStack = new Set<number>();\n    const parent = new Map<number, number>();\n\n    function dfs(node: number, graph: Map<number, Set<number>>): number | null {\n      visited.add(node);\n      recStack.add(node);\n      const neighbors = graph.get(node) || new Set();\n      for (const next of neighbors) {\n        if (!visited.has(next)) {\n          parent.set(next, node);\n          const cycle = dfs(next, graph);\n          if (cycle !== null) return cycle;\n        } else if (recStack.has(next)) {\n          return next; // Cycle found\n        }\n      }\n      recStack.delete(node);\n      return null;\n    }\n\n    for (const tx of graph.keys()) {\n      if (!visited.has(tx)) {\n        const cycleNode = dfs(tx, graph);\n        if (cycleNode !== null) {\n          // Reconstruct cycle\n          const cycle: number[] = [cycleNode];\n          let cur = parent.get(cycleNode);\n          while (cur !== undefined && cur !== cycleNode) {\n            cycle.push(cur);\n            cur = parent.get(cur);\n          }\n          cycle.push(cycleNode);\n          return { serializable: false, cycle: cycle.reverse() };\n        }\n      }\n    }\n    return { serializable: true };\n  }\n\n  display(): void {\n    console.log('Schedule: ' + this.ops.map(o => 'T' + o.txId + '.' + o.type + '(' + o.variable + ')').join(' → '));\n    const result = this.isConflictSerializable();\n    if (result.serializable) {\n      console.log('Result: CONFLICT-SERIALIZABLE ✓');\n      console.log('Precedence graph is acyclic.');\n    } else {\n      console.log('Result: NOT CONFLICT-SERIALIZABLE ✗');\n      console.log('Cycle in precedence graph: ' + (result.cycle || []).join(' → '));\n    }\n  }\n}\n\n// Test cases\nconsole.log('=== Transaction Schedule Analyzer ===\\n');\n\n// Serializable schedule\nconst s1 = new Schedule([\n  { type: 'R', variable: 'A', txId: 1 },\n  { type: 'W', variable: 'A', txId: 1 },\n  { type: 'R', variable: 'A', txId: 2 },\n  { type: 'W', variable: 'A', txId: 2 },\n  { type: 'R', variable: 'B', txId: 2 },\n  { type: 'W', variable: 'B', txId: 2 },\n]);\ns1.display();\nconsole.log('');\n\n// Non-serializable: T1: W(A), T2: W(A) with no clear order\nconst s2 = new Schedule([\n  { type: 'W', variable: 'A', txId: 1 },\n  { type: 'W', variable: 'A', txId: 2 },\n  { type: 'W', variable: 'B', txId: 2 },\n  { type: 'W', variable: 'B', txId: 1 },\n]);\ns2.display();\nconsole.log('');\n\n// Serializable schedule with 3 transactions\nconst s3 = new Schedule([\n  { type: 'R', variable: 'A', txId: 1 },\n  { type: 'W', variable: 'A', txId: 1 },\n  { type: 'R', variable: 'A', txId: 2 },\n  { type: 'W', variable: 'A', txId: 3 },\n]);\ns3.display();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Transaction States"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\n    [*] --> Active\n    Active --> PartiallyCommitted: All operations complete\n    Active --> Failed: Error / Abort\n    PartiallyCommitted --> Committed: All logs written\n    PartiallyCommitted --> Failed: Write failure\n    Failed --> Aborted: Rollback complete\n    Aborted --> [*]\n    Committed --> [*]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following schedules is conflict-serializable?\na) T1:R(A), T2:W(A), T1:W(A)\nb) T1:R(A), T1:W(A), T2:R(A), T2:W(A)\nc) T1:W(A), T2:R(A), T2:W(A), T1:R(A)\nd) T1:W(A), T2:W(A)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A dirty read occurs when:\na) A transaction reads its own uncommitted writes\nb) A transaction reads another transaction's uncommitted data\nc) A transaction reads stale data from disk\nd) A transaction reads data that is being modified"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The default isolation level in PostgreSQL is:\na) READ UNCOMMITTED\nb) READ COMMITTED\nc) REPEATABLE READ\nd) SERIALIZABLE"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write skew occurs when:\na) Two transactions write to the same variable simultaneously\nb) Two transactions read overlapping data and write non-overlapping data violating a constraint\nc) A transaction writes data that is never committed\nd) A transaction writes less data than expected"
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
          children: "Which ACID property ensures that a committed transaction'\"'\"'s changes survive system failures?\na) Atomicity\nb) Consistency\nc) Isolation\nd) Durability"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A non-repeatable read occurs when:\na) A transaction reads uncommitted data from another transaction\nb) The same query returns different results due to another transaction'\"'\"'s committed updates\nc) New rows appear in a repeated query due to inserts by another transaction\nd) A transaction cannot read its own writes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which isolation level prevents dirty reads but allows non-repeatable reads?\na) READ UNCOMMITTED\nb) READ COMMITTED\nc) REPEATABLE READ\nd) SERIALIZABLE"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conflict serializability is tested using:\na) A lock table\nb) A precedence graph\nc) A timestamp\nd) A transaction log"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A cascading abort occurs when:\na) One transaction'\"'\"'s abort causes other transactions that read its data to also abort\nb) The system crashes and all transactions abort\nc) A deadlock forces multiple transactions to abort\nd) A transaction exceeds its timeout"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The default isolation level in most major DBMS is:\na) READ UNCOMMITTED\nb) READ COMMITTED\nc) REPEATABLE READ\nd) SERIALIZABLE"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A serial schedule means:\na) Transactions execute one at a time, no interleaving\nb) Transactions run in parallel\nc) Each transaction runs multiple times\nd) Operations within a transaction are serialized"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The highest isolation level that still allows phantoms is:\na) READ UNCOMMITTED\nb) READ COMMITTED\nc) REPEATABLE READ\nd) SERIALIZABLE"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the complexity of testing conflict serializability using a precedence graph?\na) O(1)\nb) O(n)\nc) O(n²)\nd) O(2ⁿ)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a schedule that is view-serializable but NOT conflict-serializable?\na) A schedule with a cycle in the precedence graph and no writes\nb) A schedule with blind writes that remains acyclic in view-equivalence terms\nc) A serial schedule\nd) A schedule with no conflicts"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-d, 2-b, 3-b, 4-b, 5-a, 6-b, 7-a, 8-c, 9-c, 10-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A transaction is a logical unit of work with ACID properties."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomicity ensures all-or-nothing execution via UNDO log. Consistency preserves database validity via constraints. Isolation prevents interference via locking/MVCC. Durability ensures committed changes persist via REDO log and fsync."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transactions go through states: Active → Partially Committed → Committed (or Failed → Aborted)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedules order operations from concurrent transactions. Serial schedules are correct but impractical. Serializable schedules are equivalent to some serial schedule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflict serializability is checked via precedence graphs (acyclic = serializable) in O(n²) time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View serializability is a weaker condition that accepts blind writes but is NP-complete to verify."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recoverable and cascadeless schedules prevent cascading rollbacks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Five concurrency anomalies: dirty read, non-repeatable read, phantom read, lost update, write skew."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL provides four isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACID (strong consistency) vs BASE (eventual consistency) is a CAP theorem trade-off."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real DBMS implementations vary: MySQL uses next-key locking; PostgreSQL uses SSI; Oracle uses undo segments."
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
          children: "Define ACID. Explain each property with a banking example."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between COMMIT and ROLLBACK? When would each be used?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "List the four SQL isolation levels and the anomaly each prevents (or allows)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw the precedence graph and determine serializability for:\n```text\nT1: READ(A), WRITE(A), READ(B)\nT2: WRITE(A), READ(B), WRITE(B)\n```"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between a serial schedule and a serializable schedule with an example of each."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the schedule:\n```text\nT1: WRITE(A), READ(B)\nT2: READ(A), WRITE(B)\nT3: WRITE(B), READ(A), READ(B)\n```\nDraw the precedence graph and determine if the schedule is conflict-serializable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between conflict serializability and view serializability. Provide a schedule that is view-serializable but not conflict-serializable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a cascading rollback? Why is it undesirable? Design a schedule where a cascading rollback occurs."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a SQL transaction that transfers money between two bank accounts. Include error handling (rollback on insufficient funds) and savepoints."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For each isolation level (READ UNCOMMITTED through SERIALIZABLE), give a scenario where the isolation level allows an anomaly, and explain which anomaly it is."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the following schedule, determine:\na) Is it conflict-serializable?\nb) Is it recoverable?\nc) Is it cascadeless?\nJustify each answer.\n```text\nT1: READ(A), WRITE(A)\nT2:           READ(A), WRITE(A)\nT3:                    READ(A), WRITE(A)\n```"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a booking system transaction for a flight reservation that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checks seat availability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reserves the seat (decrements available count)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates a booking record"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates a payment record"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All or nothing\nInclude isolation level selection and explain your choice."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement the precedence graph algorithm in C++ or Python for a given schedule and demonstrate it on three test cases (serializable, non-serializable, and a schedule with 3+ transactions)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Research the concept of \"snapshot isolation\" (used in PostgreSQL and Oracle). How does it differ from the four standard SQL isolation levels? What anomaly does it prevent? What anomaly (write skew) can still occur?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare and contrast the transaction implementations in MySQL InnoDB, PostgreSQL, and Oracle. Focus on: default isolation level, MVCC model, phantom prevention mechanism, and SERIALIZABLE implementation."
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