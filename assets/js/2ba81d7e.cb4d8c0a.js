"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29079],{

/***/ 37799
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_mysql_database_md_2ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-mysql-database-md-2ba.json
const site_docs_courses_laravel_mysql_database_md_2ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/mysql-database","title":"MySQL & Database Design","description":"---","source":"@site/docs/courses/laravel/mysql-database.md","sourceDirName":"courses/laravel","slug":"/laravel/mysql-database","permalink":"/ai-engineering-journey/laravel/mysql-database","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"id":"mysql-database","slug":"/laravel/mysql-database","title":"MySQL & Database Design","sidebar_label":"MySQL & Database Design","sidebar_position":60},"sidebar":"course-laravel","previous":{"title":"Chapter: JavaScript Fundamentals","permalink":"/ai-engineering-journey/laravel/javascript-basics"},"next":{"title":"Chapter 0: PHP Foundations for Laravel","permalink":"/ai-engineering-journey/laravel/php-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/mysql-database.md


const frontMatter = {
	id: 'mysql-database',
	slug: '/laravel/mysql-database',
	title: 'MySQL & Database Design',
	sidebar_label: 'MySQL & Database Design',
	sidebar_position: 60
};
const contentTitle = 'MySQL & Database Design';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-2",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-2",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance-3",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap-3",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1 Relational Database Fundamentals",
  "id": "1-relational-database-fundamentals",
  "level": 3
}, {
  "value": "1.1 Tables, Rows, and Columns",
  "id": "11-tables-rows-and-columns",
  "level": 4
}, {
  "value": "1.2 Primary Keys",
  "id": "12-primary-keys",
  "level": 4
}, {
  "value": "1.3 Foreign Keys",
  "id": "13-foreign-keys",
  "level": 4
}, {
  "value": "1.4 Relationships",
  "id": "14-relationships",
  "level": 4
}, {
  "value": "2 SQL Queries",
  "id": "2-sql-queries",
  "level": 3
}, {
  "value": "2.1 SELECT and WHERE",
  "id": "21-select-and-where",
  "level": 4
}, {
  "value": "2.2 ORDER BY and LIMIT",
  "id": "22-order-by-and-limit",
  "level": 4
}, {
  "value": "2.3 JOINs",
  "id": "23-joins",
  "level": 4
}, {
  "value": "2.4 GROUP BY and HAVING",
  "id": "24-group-by-and-having",
  "level": 4
}, {
  "value": "2.5 Aggregate Functions",
  "id": "25-aggregate-functions",
  "level": 4
}, {
  "value": "2.6 Subqueries",
  "id": "26-subqueries",
  "level": 4
}, {
  "value": "2.7 UNION and UNION ALL",
  "id": "27-union-and-union-all",
  "level": 4
}, {
  "value": "3 Data Definition Language (DDL)",
  "id": "3-data-definition-language-ddl",
  "level": 3
}, {
  "value": "3.1 CREATE TABLE",
  "id": "31-create-table",
  "level": 4
}, {
  "value": "3.2 Data Types in Detail",
  "id": "32-data-types-in-detail",
  "level": 4
}, {
  "value": "3.3 ALTER TABLE",
  "id": "33-alter-table",
  "level": 4
}, {
  "value": "3.4 DROP and TRUNCATE",
  "id": "34-drop-and-truncate",
  "level": 4
}, {
  "value": "3.5 Constraints",
  "id": "35-constraints",
  "level": 4
}, {
  "value": "3.6 Indexes",
  "id": "36-indexes",
  "level": 4
}, {
  "value": "4 Data Manipulation Language (DML)",
  "id": "4-data-manipulation-language-dml",
  "level": 3
}, {
  "value": "4.1 INSERT",
  "id": "41-insert",
  "level": 4
}, {
  "value": "4.2 UPDATE",
  "id": "42-update",
  "level": 4
}, {
  "value": "4.3 DELETE",
  "id": "43-delete",
  "level": 4
}, {
  "value": "4.4 Transactions",
  "id": "44-transactions",
  "level": 4
}, {
  "value": "5 Indexing Deep Dive",
  "id": "5-indexing-deep-dive",
  "level": 3
}, {
  "value": "5.1 B-Tree Index Structure",
  "id": "51-b-tree-index-structure",
  "level": 4
}, {
  "value": "5.2 Composite Indexes",
  "id": "52-composite-indexes",
  "level": 4
}, {
  "value": "5.3 EXPLAIN Query Analysis",
  "id": "53-explain-query-analysis",
  "level": 4
}, {
  "value": "5.4 Index Performance",
  "id": "54-index-performance",
  "level": 4
}, {
  "value": "5.5 Index Hints",
  "id": "55-index-hints",
  "level": 4
}, {
  "value": "6 Normalization",
  "id": "6-normalization",
  "level": 3
}, {
  "value": "6.1 First Normal Form (1NF)",
  "id": "61-first-normal-form-1nf",
  "level": 4
}, {
  "value": "6.2 Second Normal Form (2NF)",
  "id": "62-second-normal-form-2nf",
  "level": 4
}, {
  "value": "6.3 Third Normal Form (3NF)",
  "id": "63-third-normal-form-3nf",
  "level": 4
}, {
  "value": "6.4 Complete Normalization Example",
  "id": "64-complete-normalization-example",
  "level": 4
}, {
  "value": "6.5 When to Denormalize",
  "id": "65-when-to-denormalize",
  "level": 4
}, {
  "value": "7 Transactions &amp; Locking",
  "id": "7-transactions--locking",
  "level": 3
}, {
  "value": "7.1 ACID Properties",
  "id": "71-acid-properties",
  "level": 4
}, {
  "value": "7.2 Pessimistic Locking",
  "id": "72-pessimistic-locking",
  "level": 4
}, {
  "value": "7.3 Optimistic Locking",
  "id": "73-optimistic-locking",
  "level": 4
}, {
  "value": "7.4 Deadlocks",
  "id": "74-deadlocks",
  "level": 4
}, {
  "value": "8 Database Design Patterns for Laravel",
  "id": "8-database-design-patterns-for-laravel",
  "level": 3
}, {
  "value": "8.1 Polymorphic Tables",
  "id": "81-polymorphic-tables",
  "level": 4
}, {
  "value": "8.2 Pivot Tables",
  "id": "82-pivot-tables",
  "level": 4
}, {
  "value": "8.3 JSON Columns",
  "id": "83-json-columns",
  "level": 4
}, {
  "value": "8.4 Enums vs Lookup Tables",
  "id": "84-enums-vs-lookup-tables",
  "level": 4
}, {
  "value": "8.5 Laravel Migration Counterpart",
  "id": "85-laravel-migration-counterpart",
  "level": 4
}, {
  "value": "9 Migration Concepts",
  "id": "9-migration-concepts",
  "level": 3
}, {
  "value": "9.1 Schema Versioning",
  "id": "91-schema-versioning",
  "level": 4
}, {
  "value": "9.2 Up and Down Methods",
  "id": "92-up-and-down-methods",
  "level": 4
}, {
  "value": "9.3 Seeding",
  "id": "93-seeding",
  "level": 4
}, {
  "value": "10 Performance Optimization",
  "id": "10-performance-optimization",
  "level": 3
}, {
  "value": "10.1 Query Optimization",
  "id": "101-query-optimization",
  "level": 4
}, {
  "value": "10.2 Connection Pooling",
  "id": "102-connection-pooling",
  "level": 4
}, {
  "value": "10.3 Read Replicas",
  "id": "103-read-replicas",
  "level": 4
}, {
  "value": "10.4 Query Caching",
  "id": "104-query-caching",
  "level": 4
}, {
  "value": "10.5 Slow Query Log",
  "id": "105-slow-query-log",
  "level": 4
}, {
  "value": "10.6 Table Partitioning",
  "id": "106-table-partitioning",
  "level": 4
}, {
  "value": "10.7 Performance Monitoring",
  "id": "107-performance-monitoring",
  "level": 4
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
  "value": "Concept Comparison",
  "id": "concept-comparison-2",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-2",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-2",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-2",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison-3",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-3",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-3",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-3",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
        id: "mysql--database-design",
        children: "MySQL & Database Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the relational model: tables, rows, columns, keys, and relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write complete SQL queries using SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, subqueries, and UNION"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and modify database schemas with DDL statements including constraints and indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manipulate data with INSERT, UPDATE, DELETE, and transactional controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze and optimize query performance using EXPLAIN and indexing strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normalize a database through 1NF, 2NF, and 3NF and recognize when denormalization is warranted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement database design patterns idiomatic to Laravel: polymorphic tables, pivot tables, JSON columns, enums"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand migration concepts: schema versioning, up/down methods, and seeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply performance best practices: connection pooling, read replicas, query caching"
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
        href: "../../assets/images/lessons/laravel/mysql-database/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/mysql-database/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/mysql-database/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/mysql-database/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/mysql-database/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/mysql-database/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, SQL examples, Laravel migration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming, SQL fundamentals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-1",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, SQL examples, Laravel migration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming, SQL fundamentals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-1",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-2",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, SQL examples, Laravel migration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming, SQL fundamentals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-2",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance-3",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MySQL & database design: relational model, SQL queries, normalization, indexing, Laravel integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational model, SQL DDL/DML, JOINs, normalization, indexing, transactions, Laravel migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theory, SQL examples, Laravel migration patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic programming, SQL fundamentals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap-3",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory & Concepts]\n    B[Data Models]\n    C[Agent Implementation]\n    D[Integration Patterns]\n    E[Best Practices]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation → master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/mysql-database.png",
        alt: "MySQL Database"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-relational-database-fundamentals",
      children: "1 Relational Database Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A relational database organizes data into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tables"
      }), " (relations) composed of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rows"
      }), " (records/tuples) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "columns"
      }), " (fields/attributes). Each table represents an entity type — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "users"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "orders"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "products"
      }), " — and each row represents a single instance of that entity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-tables-rows-and-columns",
      children: "1.1 Tables, Rows, and Columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A table is defined by its schema: the set of column names and their data types. A row is a single entry that conforms to that schema."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE users (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    password VARCHAR(255) NOT NULL,\n    age INT UNSIGNED NULL DEFAULT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each column has a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data type"
      }), " that constrains the kind of data it can hold:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Types"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TINYINT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BIGINT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DECIMAL"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counts, IDs, money"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHAR"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VARCHAR"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TEXT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ENUM"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Names, descriptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Date/Time"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DATE"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TIME"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DATETIME"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TIMESTAMP"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timelines, logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BLOB"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BINARY"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files, hashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JSON"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible structured"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "INSERT INTO users (name, email, password, age)\nVALUES ('Alice Johnson', 'alice@example.com', '$2y$10$...hashed...', 28);\n\nSELECT id, name, email, age FROM users WHERE age > 18;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-primary-keys",
      children: "1.2 Primary Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every table should have a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary key"
      }), " — a column (or set of columns) that uniquely identifies each row. Primary keys enforce entity integrity and are indexed automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE countries (\n    code CHAR(2) PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE posts (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    body TEXT NOT NULL\n);\n\nCREATE TABLE course_student (\n    course_id BIGINT UNSIGNED NOT NULL,\n    student_id BIGINT UNSIGNED NOT NULL,\n    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    PRIMARY KEY (course_id, student_id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel conventions expect an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " column of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BIGINT UNSIGNED AUTO_INCREMENT"
      }), " as the primary key. This is what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$table->id()"
      }), " creates in a migration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-foreign-keys",
      children: "1.3 Foreign Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "foreign key"
      }), " links rows across tables, enforcing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "referential integrity"
      }), ". A value in the child table must exist in the parent table's primary key (or be NULL)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE authors (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE books (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    author_id BIGINT UNSIGNED NOT NULL,\n    published_year YEAR NOT NULL,\n    CONSTRAINT fk_books_author\n        FOREIGN KEY (author_id) REFERENCES authors(id)\n        ON DELETE CASCADE\n        ON UPDATE CASCADE\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ON DELETE"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ON UPDATE"
      }), " clauses define referential actions:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Clause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CASCADE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagate change to child rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SET NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set child FK to NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RESTRICT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent deletion/update if children exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NO ACTION"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as RESTRICT in MySQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SET DEFAULT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set child FK to its default (not supported by InnoDB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's migration builder generates the same constraints:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$table->foreignId('author_id')->constrained()->cascadeOnDelete();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-relationships",
      children: "1.4 Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The relational model defines three fundamental relationship types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-to-One (1:1):"
      }), " A row in table A relates to exactly one row in table B and vice versa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE users (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE profiles (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    user_id BIGINT UNSIGNED NOT NULL UNIQUE,\n    bio TEXT NULL,\n    avatar_url VARCHAR(500) NULL,\n    CONSTRAINT fk_profiles_user\n        FOREIGN KEY (user_id) REFERENCES users(id)\n        ON DELETE CASCADE\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNIQUE"
      }), " constraint on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user_id"
      }), " guarantees the one-to-one cardinality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-to-Many (1:N):"
      }), " A row in table A relates to many rows in table B. This is the most common relationship."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE categories (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE products (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    category_id BIGINT UNSIGNED NOT NULL,\n    name VARCHAR(255) NOT NULL,\n    price DECIMAL(10, 2) NOT NULL,\n    CONSTRAINT fk_products_category\n        FOREIGN KEY (category_id) REFERENCES categories(id)\n        ON DELETE CASCADE\n);\n\nSELECT c.name AS category, p.name AS product, p.price\nFROM categories c\nJOIN products p ON p.category_id = c.id\nORDER BY c.name, p.name;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Many-to-Many (N:N):"
      }), " A row in table A relates to many rows in table B and vice versa. This requires a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pivot (junction) table"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE students (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE courses (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE course_student (\n    course_id BIGINT UNSIGNED NOT NULL,\n    student_id BIGINT UNSIGNED NOT NULL,\n    grade DECIMAL(5, 2) NULL,\n    PRIMARY KEY (course_id, student_id),\n    CONSTRAINT fk_cs_course\n        FOREIGN KEY (course_id) REFERENCES courses(id)\n        ON DELETE CASCADE,\n    CONSTRAINT fk_cs_student\n        FOREIGN KEY (student_id) REFERENCES students(id)\n        ON DELETE CASCADE\n);\n\nSELECT s.name AS student, c.title AS course, cs.grade\nFROM students s\nJOIN course_student cs ON cs.student_id = s.id\nJOIN courses c ON c.id = cs.course_id\nORDER BY c.title, s.name;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Laravel, many-to-many relationships use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "belongsToMany"
      }), " and convention expects the pivot table name to be singular table names in alphabetical order separated by underscore: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "course_student"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-sql-queries",
      children: "2 SQL Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL (Structured Query Language) is the language for interacting with relational databases. Every query in this section is complete and executable against MySQL 8.x."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-select-and-where",
      children: "2.1 SELECT and WHERE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT"
      }), " statement retrieves rows from a table. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WHERE"
      }), " clause filters rows before grouping and ordering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employees (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(100) NOT NULL UNIQUE,\n    department VARCHAR(50) NOT NULL,\n    salary DECIMAL(10, 2) NOT NULL,\n    hire_date DATE NOT NULL,\n    active TINYINT(1) NOT NULL DEFAULT 1\n);\n\nINSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active) VALUES\n('John', 'Smith', 'john.smith@company.com', 'Engineering', 95000.00, '2020-03-15', 1),\n('Jane', 'Doe', 'jane.doe@company.com', 'Engineering', 110000.00, '2019-07-01', 1),\n('Bob', 'Johnson', 'bob.johnson@company.com', 'Marketing', 72000.00, '2021-01-20', 1),\n('Alice', 'Williams', 'alice.williams@company.com', 'Marketing', 78000.00, '2020-11-10', 0),\n('Charlie', 'Brown', 'charlie.brown@company.com', 'Sales', 65000.00, '2022-06-05', 1),\n('Diana', 'Prince', 'diana.prince@company.com', 'Engineering', 130000.00, '2018-04-22', 1),\n('Edward', 'Norton', 'edward.norton@company.com', 'Sales', 68000.00, '2021-09-13', 1),\n('Fiona', 'Apple', 'fiona.apple@company.com', 'Marketing', 82000.00, '2019-12-01', 1),\n('George', 'Lucas', 'george.lucas@company.com', 'Engineering', 105000.00, '2020-08-17', 0),\n('Hannah', 'Montana', 'hannah.montana@company.com', 'Sales', 71000.00, '2022-02-28', 1);\n\nSELECT first_name, last_name, email FROM employees;\n\nSELECT first_name, last_name, salary\nFROM employees\nWHERE salary > 80000;\n\nSELECT first_name, last_name, department, salary\nFROM employees\nWHERE department = 'Engineering' AND salary >= 100000;\n\nSELECT first_name, last_name, department\nFROM employees\nWHERE department = 'Sales' OR department = 'Marketing';\n\nSELECT first_name, last_name, department\nFROM employees\nWHERE department IN ('Engineering', 'Sales');\n\nSELECT first_name, last_name, salary\nFROM employees\nWHERE salary BETWEEN 70000 AND 100000;\n\nSELECT first_name, last_name, email\nFROM employees\nWHERE email LIKE '%.company.com';\n\nSELECT first_name, last_name\nFROM employees\nWHERE first_name LIKE 'J%';\n\nSELECT first_name, last_name\nFROM employees\nWHERE email IS NOT NULL;\n\nSELECT DISTINCT department FROM employees;\n\nSELECT first_name AS 'First Name', last_name AS 'Last Name', salary * 1.1 AS 'Raise Amount'\nFROM employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-order-by-and-limit",
      children: "2.2 ORDER BY and LIMIT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ORDER BY"
      }), " sorts the result set. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LIMIT"
      }), " restricts the number of rows returned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT first_name, last_name, salary\nFROM employees\nORDER BY salary;\n\nSELECT first_name, last_name, salary\nFROM employees\nORDER BY salary DESC;\n\nSELECT department, last_name, first_name\nFROM employees\nORDER BY department ASC, last_name ASC;\n\nSELECT first_name, last_name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3;\n\nSELECT first_name, last_name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3 OFFSET 3;\n\nSELECT first_name, last_name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3, 3;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-joins",
      children: "2.3 JOINs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JOINs combine rows from two or more tables based on related columns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE departments (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    budget DECIMAL(12, 2) NOT NULL\n);\n\nINSERT INTO departments (name, budget) VALUES\n('Engineering', 5000000.00),\n('Marketing', 2000000.00),\n('Sales', 1500000.00),\n('HR', 800000.00),\n('Finance', 1200000.00);\n\nALTER TABLE employees ADD COLUMN department_id INT NULL;\nUPDATE employees SET department_id = 1 WHERE department = 'Engineering';\nUPDATE employees SET department_id = 2 WHERE department = 'Marketing';\nUPDATE employees SET department_id = 3 WHERE department = 'Sales';\n\nINSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active, department_id)\nVALUES ('Orphan', 'Record', 'orphan@company.com', 'None', 50000.00, '2023-01-01', 1, NULL);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "INNER JOIN:"
      }), " Returns rows where the join condition matches in both tables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT e.first_name, e.last_name, d.name AS department, d.budget\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id\nORDER BY e.last_name;\n\nSELECT e.first_name, e.last_name, d.name AS department, e.salary\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id\nWHERE d.budget > 1000000 AND e.salary > 75000\nORDER BY e.salary DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LEFT JOIN:"
      }), " Returns all rows from the left table, even when there is no match in the right table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT e.first_name, e.last_name, d.name AS department\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id;\n\nSELECT e.first_name, e.last_name\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id\nWHERE d.id IS NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RIGHT JOIN:"
      }), " Returns all rows from the right table, even when there is no match in the left table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT e.first_name, e.last_name, d.name AS department\nFROM employees e\nRIGHT JOIN departments d ON e.department_id = d.id;\n\nSELECT d.name AS department\nFROM employees e\nRIGHT JOIN departments d ON e.department_id = d.id\nWHERE e.id IS NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CROSS JOIN:"
      }), " Cartesian product — every row from table A paired with every row from table B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT e.first_name, e.last_name, d.name AS department\nFROM employees e\nCROSS JOIN departments d\nWHERE e.department_id IS NULL;\n\nCREATE TABLE job_levels (level TINYINT PRIMARY KEY);\nINSERT INTO job_levels VALUES (1), (2), (3), (4), (5);\n\nSELECT d.name AS department, l.level AS job_level\nFROM departments d\nCROSS JOIN job_levels l\nORDER BY d.name, l.level;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-JOIN:"
      }), " A table joined to itself using aliases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "ALTER TABLE employees ADD COLUMN manager_id INT NULL;\nUPDATE employees SET manager_id = 5 WHERE id IN (1, 3);\nUPDATE employees SET manager_id = 6 WHERE id IN (4, 8);\nUPDATE employees SET manager_id = 4 WHERE id IN (7, 10);\n\nSELECT\n    e.first_name AS employee_first,\n    e.last_name AS employee_last,\n    m.first_name AS manager_first,\n    m.last_name AS manager_last\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id\nORDER BY m.last_name, e.last_name;\n\nSELECT\n    e.first_name AS employee,\n    e.salary AS employee_salary,\n    m.first_name AS manager,\n    m.salary AS manager_salary\nFROM employees e\nINNER JOIN employees m ON e.manager_id = m.id\nWHERE e.salary > m.salary;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-group-by-and-having",
      children: "2.4 GROUP BY and HAVING"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "GROUP BY"
      }), " groups rows that share a value in one or more columns, typically for aggregation. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HAVING"
      }), " filters groups after aggregation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\n    COUNT(*) AS total_employees,\n    AVG(salary) AS average_salary,\n    MAX(salary) AS highest_salary,\n    MIN(salary) AS lowest_salary,\n    SUM(salary) AS total_payroll\nFROM employees;\n\nSELECT\n    department,\n    COUNT(*) AS employee_count,\n    AVG(salary) AS avg_salary,\n    SUM(salary) AS total_salary\nFROM employees\nGROUP BY department\nORDER BY avg_salary DESC;\n\nSELECT\n    department,\n    active,\n    COUNT(*) AS count,\n    AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department, active\nORDER BY department, active DESC;\n\nSELECT\n    department,\n    COUNT(*) AS employee_count,\n    AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING employee_count >= 3\nORDER BY avg_salary DESC;\n\nSELECT\n    department,\n    AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 80000;\n\nSELECT\n    YEAR(hire_date) AS hire_year,\n    COUNT(*) AS hired_count\nFROM employees\nGROUP BY YEAR(hire_date)\nORDER BY hire_year;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "25-aggregate-functions",
      children: "2.5 Aggregate Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE orders (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    customer_id INT NOT NULL,\n    order_date DATE NOT NULL,\n    total DECIMAL(10, 2) NOT NULL,\n    status VARCHAR(20) NOT NULL DEFAULT 'pending'\n);\n\nINSERT INTO orders (customer_id, order_date, total, status) VALUES\n(1, '2024-01-15', 150.00, 'completed'),\n(2, '2024-01-16', 250.00, 'completed'),\n(1, '2024-02-01', 89.99, 'completed'),\n(3, '2024-02-10', 500.00, 'refunded'),\n(1, '2024-03-05', 200.00, 'pending'),\n(2, '2024-03-10', 175.50, 'completed'),\n(3, '2024-03-15', 320.00, 'pending'),\n(4, '2024-03-20', 99.99, 'completed');\n\nCREATE TABLE order_items (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    order_id INT NOT NULL,\n    product_name VARCHAR(255) NOT NULL,\n    quantity INT NOT NULL,\n    unit_price DECIMAL(10, 2) NOT NULL,\n    FOREIGN KEY (order_id) REFERENCES orders(id)\n);\n\nINSERT INTO order_items (order_id, product_name, quantity, unit_price) VALUES\n(1, 'Widget A', 2, 50.00),\n(1, 'Widget B', 1, 50.00),\n(2, 'Gadget X', 1, 250.00),\n(3, 'Widget A', 1, 50.00),\n(3, 'Gadget X', 1, 39.99),\n(4, 'Premium Widget', 1, 500.00),\n(5, 'Widget B', 4, 50.00),\n(6, 'Gadget X', 1, 175.50),\n(7, 'Premium Widget', 1, 320.00),\n(8, 'Widget A', 2, 49.995);\n\nSELECT\n    o.id AS order_id,\n    GROUP_CONCAT(DISTINCT oi.product_name ORDER BY oi.product_name SEPARATOR ', ') AS products,\n    COUNT(oi.id) AS item_count\nFROM orders o\nJOIN order_items oi ON oi.order_id = o.id\nGROUP BY o.id;\n\nSELECT\n    DATE_FORMAT(order_date, '%Y-%m') AS month,\n    COUNT(*) AS order_count,\n    COUNT(DISTINCT customer_id) AS unique_customers,\n    SUM(total) AS revenue,\n    AVG(total) AS avg_order_value,\n    MAX(total) AS largest_order,\n    MIN(total) AS smallest_order,\n    STDDEV(total) AS revenue_volatility\nFROM orders\nWHERE status = 'completed'\nGROUP BY DATE_FORMAT(order_date, '%Y-%m')\nORDER BY month;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "26-subqueries",
      children: "2.6 Subqueries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A subquery is a query nested inside another query. Subqueries can appear in SELECT, FROM, WHERE, HAVING, and JOIN clauses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT first_name, last_name, salary\nFROM employees\nWHERE department_id IN (\n    SELECT id FROM departments WHERE budget > 2000000\n);\n\nSELECT first_name, last_name, salary\nFROM employees\nWHERE salary > (\n    SELECT AVG(salary) FROM employees\n);\n\nSELECT\n    first_name,\n    last_name,\n    salary,\n    department,\n    ROUND(salary / (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department), 2) AS salary_ratio_to_dept_avg\nFROM employees e1;\n\nSELECT\n    dept_stats.department,\n    dept_stats.employee_count,\n    dept_stats.avg_salary\nFROM (\n    SELECT\n        department,\n        COUNT(*) AS employee_count,\n        AVG(salary) AS avg_salary\n    FROM employees\n    GROUP BY department\n) AS dept_stats\nWHERE dept_stats.employee_count > 2;\n\nSELECT e.first_name, e.last_name, e.department, e.salary\nFROM employees e\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE department = e.department\n)\nORDER BY e.department, e.salary DESC;\n\nSELECT d.name\nFROM departments d\nWHERE EXISTS (\n    SELECT 1\n    FROM employees e\n    WHERE e.department_id = d.id AND e.active = 1\n);\n\nSELECT d.name\nFROM departments d\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM employees e\n    WHERE e.department_id = d.id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "27-union-and-union-all",
      children: "2.7 UNION and UNION ALL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNION"
      }), " combines result sets from multiple SELECT statements, removing duplicates. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNION ALL"
      }), " keeps duplicates and is faster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE contacts (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(100) NOT NULL\n);\n\nINSERT INTO contacts (first_name, last_name, email) VALUES\n('Irene', 'Adler', 'irene.adler@external.com'),\n('John', 'Smith', 'john.smith@company.com'),\n('Jack', 'Sparrow', 'jack.sparrow@external.com');\n\nSELECT first_name, last_name, email FROM employees\nUNION\nSELECT first_name, last_name, email FROM contacts\nORDER BY last_name, first_name;\n\nSELECT first_name, last_name, email FROM employees\nUNION ALL\nSELECT first_name, last_name, email FROM contacts\nORDER BY last_name, first_name;\n\nSELECT first_name, last_name, email, 'employee' AS source FROM employees\nUNION\nSELECT first_name, last_name, email, 'contact' AS source FROM contacts\nORDER BY source, last_name;\n\nSELECT first_name, last_name, email, salary, 'employee' AS type FROM employees\nUNION\nSELECT first_name, last_name, email, NULL AS salary, 'contact' AS type FROM contacts\nORDER BY type, last_name;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-data-definition-language-ddl",
      children: "3 Data Definition Language (DDL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDL statements define and modify database structures: tables, indexes, and constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-create-table",
      children: "3.1 CREATE TABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE IF NOT EXISTS articles (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    author_id BIGINT UNSIGNED NOT NULL,\n    title VARCHAR(255) NOT NULL,\n    slug VARCHAR(255) NOT NULL UNIQUE,\n    body LONGTEXT NULL,\n    view_count INT UNSIGNED NOT NULL DEFAULT 0,\n    status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',\n    metadata JSON NULL,\n    published_at TIMESTAMP NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    UNIQUE INDEX idx_articles_slug (slug),\n    CONSTRAINT fk_articles_author\n        FOREIGN KEY (author_id) REFERENCES users(id)\n        ON DELETE CASCADE,\n    CONSTRAINT chk_articles_view_count\n        CHECK (view_count >= 0)\n)\nENGINE = InnoDB\nDEFAULT CHARSET = utf8mb4\nCOLLATE = utf8mb4_unicode_ci\nCOMMENT = 'Main content table for the blog';\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ENGINE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Storage engine (", (0,jsx_runtime.jsx)(_components.code, {
              children: "InnoDB"
            }), " for transactions, FK support)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CHARSET"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Character set (", (0,jsx_runtime.jsx)(_components.code, {
              children: "utf8mb4"
            }), " for full Unicode including emoji)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COLLATE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sort/compare rules (", (0,jsx_runtime.jsx)(_components.code, {
              children: "utf8mb4_unicode_ci"
            }), " for UCA collation)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COMMENT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation string for the table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-data-types-in-detail",
      children: "3.2 Data Types in Detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE numeric_examples (\n    a TINYINT,\n    b SMALLINT,\n    c MEDIUMINT,\n    d INT,\n    e BIGINT,\n    f DECIMAL(10, 2),\n    g FLOAT(7, 4),\n    h DOUBLE(15, 8),\n    i BIT(8)\n);\n\nCREATE TABLE string_examples (\n    a CHAR(10),\n    b VARCHAR(255),\n    c TINYTEXT,\n    d TEXT,\n    e MEDIUMTEXT,\n    f LONGTEXT,\n    g BINARY(32),\n    h VARBINARY(255),\n    i BLOB,\n    j ENUM('small', 'medium', 'large')\n);\n\nCREATE TABLE temporal_examples (\n    a DATE,\n    b TIME(3),\n    c DATETIME(6),\n    d TIMESTAMP,\n    e YEAR\n);\n\nCREATE TABLE json_examples (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    attributes JSON,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing the Right Type:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key for most tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BIGINT UNSIGNED AUTO_INCREMENT"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monetary values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DECIMAL(10, 2)"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DECIMAL(12, 4)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short strings (codes, statuses)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHAR(2)"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ENUM(...)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable text (titles, names)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "VARCHAR(255)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long-form content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TEXT"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MEDIUMTEXT"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible structure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "JSON"
            }), " (validated natively)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File hashes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BINARY(32)"
            }), " for SHA-256"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Created/updated timestamps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TIMESTAMP"
            }), " with DEFAULT"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-alter-table",
      children: "3.3 ALTER TABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "ALTER TABLE employees ADD COLUMN phone VARCHAR(20) NULL AFTER email;\nALTER TABLE employees MODIFY COLUMN phone VARCHAR(30) NULL;\nALTER TABLE employees RENAME COLUMN phone TO phone_number;\nALTER TABLE employees CHANGE phone_number mobile_phone VARCHAR(20) NULL;\nALTER TABLE employees DROP COLUMN mobile_phone;\n\nALTER TABLE books\nADD CONSTRAINT fk_books_author\nFOREIGN KEY (author_id) REFERENCES authors(id)\nON DELETE CASCADE;\n\nALTER TABLE books DROP FOREIGN KEY fk_books_author;\nALTER TABLE employees ADD INDEX idx_last_name (last_name);\nALTER TABLE employees ADD UNIQUE INDEX idx_email_unique (email);\nALTER TABLE employees DROP INDEX idx_last_name;\nALTER TABLE old_table_name RENAME TO new_table_name;\nALTER TABLE employees ALTER COLUMN active SET DEFAULT 1;\nALTER TABLE employees ALTER COLUMN active DROP DEFAULT;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "34-drop-and-truncate",
      children: "3.4 DROP and TRUNCATE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "DROP TABLE IF EXISTS temporary_data;\nDROP TABLE IF EXISTS table_a, table_b, table_c;\nDROP DATABASE IF EXISTS old_database;\nTRUNCATE TABLE session_logs;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "35-constraints",
      children: "3.5 Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constraints enforce data integrity at the database level."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE constraint_demo (\n    id INT AUTO_INCREMENT,\n    PRIMARY KEY (id),\n    product_name VARCHAR(255) NOT NULL,\n    sku VARCHAR(50) UNIQUE,\n    stock_qty INT NOT NULL DEFAULT 0,\n    price DECIMAL(10, 2) NOT NULL,\n    CONSTRAINT chk_price_positive CHECK (price > 0),\n    CONSTRAINT chk_stock_range CHECK (stock_qty >= 0 AND stock_qty <= 100000)\n);\n\nINSERT INTO constraint_demo (product_name, sku, stock_qty, price) VALUES\n('Widget', 'WID-001', 100, 9.99);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The next two inserts will fail:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "INSERT INTO constraint_demo (product_name, sku, stock_qty, price)\nVALUES (NULL, 'WID-002', 50, 5.00);\n-- ERROR: product_name cannot be NULL\n\nINSERT INTO constraint_demo (product_name, sku, stock_qty, price)\nVALUES ('Widget Duplicate', 'WID-001', 10, 8.00);\n-- ERROR: sku 'WID-001' already exists\n\nINSERT INTO constraint_demo (product_name, sku, stock_qty, price)\nVALUES ('Bad Product', 'WID-003', 100, -5.00);\n-- ERROR: CHECK constraint chk_price_positive\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "36-indexes",
      children: "3.6 Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indexes are data structures that speed up data retrieval at the cost of write performance and storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_employees_last_name ON employees (last_name);\nCREATE UNIQUE INDEX idx_employees_email ON employees (email);\nCREATE INDEX idx_employees_dept_name ON employees (department_id, last_name);\nCREATE INDEX idx_employees_email_prefix ON employees (email(10));\n\nCREATE TABLE documents (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    body TEXT NOT NULL,\n    FULLTEXT INDEX ft_documents_body (title, body)\n);\n\nCREATE TABLE locations (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    coordinates POINT NOT NULL SRID 4326,\n    SPATIAL INDEX sp_locations_coords (coordinates)\n);\n\nDROP INDEX idx_employees_last_name ON employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Index:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-column B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column used frequently in WHERE, JOIN, ORDER BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite B-tree (column order matters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries filter on multiple columns together"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column that must have distinct values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FULLTEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language text search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPATIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic/geometry queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREFIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long VARCHAR columns where only first N chars differ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-data-manipulation-language-dml",
      children: "4 Data Manipulation Language (DML)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DML statements modify the data within tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-insert",
      children: "4.1 INSERT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "INSERT INTO employees\nVALUES (NULL, 'Test', 'User', 'test@company.com', 'Engineering', 60000.00, '2024-01-01', 1, NULL);\n\nINSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active)\nVALUES ('Kevin', 'Hart', 'kevin.hart@company.com', 'Sales', 74000.00, '2024-01-15', 1);\n\nINSERT INTO employees (first_name, last_name, email, department, salary, hire_date, active)\nVALUES\n    ('Laura', 'Croft', 'laura.croft@company.com', 'Engineering', 115000.00, '2024-02-01', 1),\n    ('Peter', 'Parker', 'peter.parker@company.com', 'Marketing', 76000.00, '2024-02-15', 1),\n    ('Bruce', 'Wayne', 'bruce.wayne@company.com', 'Finance', 140000.00, '2024-03-01', 1);\n\nINSERT INTO employees (id, first_name, last_name, email, department, salary, hire_date, active)\nVALUES (1, 'John', 'Smith', 'john.smith@company.com', 'Engineering', 97500.00, '2020-03-15', 1)\nON DUPLICATE KEY UPDATE\n    salary = VALUES(salary),\n    updated_at = CURRENT_TIMESTAMP;\n\nCREATE TABLE employees_backup LIKE employees;\nINSERT INTO employees_backup SELECT * FROM employees;\n\nINSERT IGNORE INTO employees (first_name, last_name, email, department, salary, hire_date, active)\nVALUES ('Test', 'User', 'john.smith@company.com', 'Engineering', 50000.00, '2024-06-01', 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-update",
      children: "4.2 UPDATE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "UPDATE employees\nSET salary = 100000.00\nWHERE id = 1;\n\nUPDATE employees\nSET\n    salary = salary * 1.10,\n    active = 1\nWHERE department = 'Engineering';\n\nUPDATE employees e\nJOIN departments d ON e.department_id = d.id\nSET e.salary = e.salary * 1.15\nWHERE d.name = 'Engineering' AND e.salary < 100000;\n\nUPDATE employees\nSET salary = (\n    SELECT AVG(salary) FROM employees WHERE department = 'Engineering'\n)\nWHERE id = 11;\n\nUPDATE employees\nSET active = 0\nWHERE department = 'Sales'\nORDER BY hire_date ASC\nLIMIT 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-delete",
      children: "4.3 DELETE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "DELETE FROM employees WHERE id = 99;\nDELETE FROM employees;\n\nDELETE e\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id\nWHERE d.id IS NULL;\n\nDELETE FROM employees\nWHERE active = 0\nORDER BY hire_date ASC\nLIMIT 5;\n\nTRUNCATE TABLE employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "44-transactions",
      children: "4.4 Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transactions group DML operations into a single atomic unit that either fully commits or fully rolls back."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "START TRANSACTION;\n\nUPDATE accounts SET balance = balance - 500.00 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 500.00 WHERE account_id = 2;\n\nCOMMIT;\n-- ROLLBACK;\n\nSTART TRANSACTION;\n\nINSERT INTO orders (customer_id, order_date, total, status)\nVALUES (1, CURDATE(), 299.99, 'pending');\nSET @order_id = LAST_INSERT_ID();\n\nUPDATE products SET stock_qty = stock_qty - 1 WHERE id = 42;\n\nINSERT INTO payments (order_id, amount, method, status)\nVALUES (@order_id, 299.99, 'credit_card', 'completed');\n\nCOMMIT;\n-- ROLLBACK;\n\nSTART TRANSACTION;\n\nINSERT INTO audit_log (action, table_name) VALUES ('started_batch', 'employees');\nSAVEPOINT before_employee_update;\n\nUPDATE employees SET salary = salary * 1.2 WHERE department = 'Engineering';\n\nROLLBACK TO SAVEPOINT before_employee_update;\n\nINSERT INTO audit_log (action, table_name) VALUES ('rollback_employee_update', 'employees');\nCOMMIT;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction isolation levels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-indexing-deep-dive",
      children: "5 Indexing Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-b-tree-index-structure",
      children: "5.1 B-Tree Index Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MySQL's default index type is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "B+ Tree"
      }), " (a balanced tree variant)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A B+ Tree index is a multi-level data structure where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leaf nodes"
        }), " contain the actual data pointers (or primary key values for InnoDB secondary indexes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-leaf (internal) nodes"
        }), " contain separator values that guide traversal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All leaf nodes"
        }), " are at the same depth, guaranteeing consistent lookup performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Root (internal node, ~100 entries)\n  [10, 20, 30, 40, ...]\n\nInternal nodes (~1000 entries each)\n  [10-19]  [20-29]  [30-39]  ...\n\nLeaf nodes (data or PK pointers)\n  [10->row, 11->row, ...]  [20->row, 21->row, ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Index access methods:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Access Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unique lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match on unique index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE id = 42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Values within a range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE age BETWEEN 20 AND 30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index full scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read entire index in order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ORDER BY indexed_col"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index-only scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query satisfied from index alone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT indexed_col FROM table"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read every row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No usable index / large portion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-composite-indexes",
      children: "5.2 Composite Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_dept_name_hire ON employees (department_id, last_name, hire_date);\n\n-- Queries that BENEFIT from this index:\nSELECT * FROM employees WHERE department_id = 1;\nSELECT * FROM employees WHERE department_id = 1 AND last_name = 'Smith';\nSELECT * FROM employees WHERE department_id = 1 AND last_name = 'Smith' AND hire_date > '2020-01-01';\n\n-- Queries that benefit PARTIALLY:\nSELECT * FROM employees WHERE department_id = 1 AND hire_date > '2020-01-01';\n\n-- Queries that CANNOT use this index efficiently:\nSELECT * FROM employees WHERE last_name = 'Smith';\nSELECT * FROM employees WHERE department_id = 1 AND last_name > 'S' AND hire_date = '2020-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Leftmost Prefix Rule:"
      }), " A composite index on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(col_a, col_b, col_c)"
      }), " supports queries on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "col_a"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "col_a, col_b"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "col_a, col_b, col_c"
      }), ". It does NOT support queries starting with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "col_b"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "col_c"
      }), " alone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-explain-query-analysis",
      children: "5.3 EXPLAIN Query Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "EXPLAIN SELECT * FROM employees WHERE id = 1;\n\nEXPLAIN SELECT e.first_name, e.last_name, d.name AS department\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id\nWHERE e.salary > 80000\nORDER BY e.last_name;\n\nEXPLAIN ANALYZE\nSELECT e.department_id, COUNT(*) AS emp_count, AVG(e.salary) AS avg_salary\nFROM employees e\nWHERE e.active = 1\nGROUP BY e.department_id\nHAVING emp_count > 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXPLAIN output columns decoded:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query step number (higher = earlier execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "select_type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIMPLE, PRIMARY, SUBQUERY, DERIVED, UNION, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table alias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access method (const > ref > range > index > ALL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "possible_keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexes MySQL considered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index actually used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "key_len"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes used from the index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ref"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns or constants used for key lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimated rows examined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Extra"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using index, Using where, Using filesort, etc."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access method types ranked by performance:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const  >  eq_ref  >  ref  >  range  >  index  >  ALL\n(best)                                                  (worst)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "const"
        }), ": Primary key or unique index lookup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "eq_ref"
        }), ": JOIN using unique index"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ref"
        }), ": Non-unique index lookup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "range"
        }), ": Index range scan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "index"
        }), ": Full index scan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), ": Full table scan (worst case)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "EXPLAIN FORMAT=JSON\nSELECT e.id, e.first_name, e.last_name, d.name\nFROM employees e\nSTRAIGHT_JOIN departments d ON d.id = e.department_id\nWHERE e.salary BETWEEN 70000 AND 100000\n  AND e.active = 1\nORDER BY e.last_name\nLIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "54-index-performance",
      children: "5.4 Index Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "DELIMITER $$\nCREATE PROCEDURE populate_performance_test(IN num_rows INT)\nBEGIN\n    DECLARE i INT DEFAULT 0;\n    WHILE i < num_rows DO\n        INSERT INTO performance_test (uuid_col, int_col, varchar_col)\n        VALUES (UUID(), FLOOR(RAND() * 100000), CONCAT('Record-', i, '-', MD5(RAND())));\n        SET i = i + 1;\n    END WHILE;\nEND$$\nDELIMITER ;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Index performance trade-offs:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT by indexed col"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) — fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — full table scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (must update index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE indexed col"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (must update index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (must update index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additional disk space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index pages in buffer pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cache overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "55-index-hints",
      children: "5.5 Index Hints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT * FROM employees\nFORCE INDEX (idx_employees_last_name)\nWHERE last_name = 'Smith';\n\nSELECT * FROM employees\nUSE INDEX (idx_employees_last_name)\nWHERE last_name = 'Smith';\n\nSELECT * FROM employees\nIGNORE INDEX (idx_employees_last_name)\nWHERE last_name = 'Smith';\n\nSELECT e.first_name, d.name\nFROM employees e\nSTRAIGHT_JOIN departments d ON e.department_id = d.id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-normalization",
      children: "6 Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Normalization is the process of organizing data to reduce redundancy and improve integrity. Edgar F. Codd introduced the concept in 1970."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-first-normal-form-1nf",
      children: "6.1 First Normal Form (1NF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A table is in 1NF if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each column contains atomic (indivisible) values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each column contains values of the same type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each row is uniquely identifiable (primary key exists)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columns have unique names"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE contacts_1nf_violation (\n    id INT PRIMARY KEY,\n    name VARCHAR(255),\n    phones VARCHAR(500)\n);\n\nINSERT INTO contacts_1nf_violation VALUES\n(1, 'Alice', '555-0101,555-0102'),\n(2, 'Bob', '555-0201');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1NF Compliant:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE contacts_1nf (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE contact_phones_1nf (\n    contact_id INT NOT NULL,\n    phone VARCHAR(20) NOT NULL,\n    phone_type VARCHAR(20) NOT NULL DEFAULT 'mobile',\n    PRIMARY KEY (contact_id, phone),\n    FOREIGN KEY (contact_id) REFERENCES contacts_1nf(id) ON DELETE CASCADE\n);\n\nINSERT INTO contacts_1nf VALUES (1, 'Alice'), (2, 'Bob');\nINSERT INTO contact_phones_1nf VALUES\n(1, '555-0101', 'home'),\n(1, '555-0102', 'mobile'),\n(2, '555-0201', 'mobile');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-second-normal-form-2nf",
      children: "6.2 Second Normal Form (2NF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A table is in 2NF if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is in 1NF"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every non-key column is fully functionally dependent on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "entire"
        }), " primary key (no partial dependencies)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE enrollment_2nf_violation (\n    student_id INT NOT NULL,\n    course_id INT NOT NULL,\n    student_name VARCHAR(255) NOT NULL,\n    course_name VARCHAR(255) NOT NULL,\n    grade DECIMAL(5, 2) NULL,\n    PRIMARY KEY (student_id, course_id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2NF Compliant:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE students_2nf (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE courses_2nf (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE enrollments_2nf (\n    student_id INT NOT NULL,\n    course_id INT NOT NULL,\n    grade DECIMAL(5, 2) NULL,\n    PRIMARY KEY (student_id, course_id),\n    FOREIGN KEY (student_id) REFERENCES students_2nf(id),\n    FOREIGN KEY (course_id) REFERENCES courses_2nf(id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-third-normal-form-3nf",
      children: "6.3 Third Normal Form (3NF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A table is in 3NF if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is in 2NF"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every non-key column is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-transitively"
        }), " dependent on the primary key (no transitive dependencies)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employees_3nf_violation (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    department_id INT NOT NULL,\n    department_name VARCHAR(255) NOT NULL,\n    department_location VARCHAR(255) NOT NULL\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3NF Compliant:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employees_3nf (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    department_id INT NOT NULL,\n    FOREIGN KEY (department_id) REFERENCES departments_3nf(id)\n);\n\nCREATE TABLE departments_3nf (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    location VARCHAR(255) NOT NULL\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "64-complete-normalization-example",
      children: "6.4 Complete Normalization Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unnormalized Form:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE sales_orders_raw (\n    order_id INT,\n    customer_name VARCHAR(255),\n    customer_email VARCHAR(255),\n    product_list VARCHAR(1000),\n    product_qtys VARCHAR(100),\n    product_prices VARCHAR(100),\n    order_total DECIMAL(10, 2),\n    order_date DATE\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1NF — Atomic columns, unique rows:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE order_items_1nf (\n    order_id INT,\n    customer_name VARCHAR(255),\n    customer_email VARCHAR(255),\n    product_name VARCHAR(255),\n    quantity INT NOT NULL,\n    unit_price DECIMAL(10, 2) NOT NULL,\n    order_date DATE,\n    PRIMARY KEY (order_id, product_name)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2NF — Separate customer and product data:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE customers_2nf (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE\n);\n\nCREATE TABLE orders_2nf (\n    id INT PRIMARY KEY,\n    customer_id INT NOT NULL,\n    order_date DATE NOT NULL,\n    FOREIGN KEY (customer_id) REFERENCES customers_2nf(id)\n);\n\nCREATE TABLE order_items_2nf (\n    order_id INT NOT NULL,\n    product_name VARCHAR(255) NOT NULL,\n    quantity INT NOT NULL,\n    unit_price DECIMAL(10, 2) NOT NULL,\n    PRIMARY KEY (order_id, product_name),\n    FOREIGN KEY (order_id) REFERENCES orders_2nf(id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3NF — Products in their own table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE customers (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE\n);\n\nCREATE TABLE products (\n    id INT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL UNIQUE,\n    current_price DECIMAL(10, 2) NOT NULL\n);\n\nCREATE TABLE orders (\n    id INT PRIMARY KEY,\n    customer_id INT NOT NULL,\n    order_date DATE NOT NULL,\n    FOREIGN KEY (customer_id) REFERENCES customers(id)\n);\n\nCREATE TABLE order_items (\n    id INT PRIMARY KEY,\n    order_id INT NOT NULL,\n    product_id INT NOT NULL,\n    quantity INT NOT NULL,\n    unit_price DECIMAL(10, 2) NOT NULL,\n    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,\n    FOREIGN KEY (product_id) REFERENCES products(id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "65-when-to-denormalize",
      children: "6.5 When to Denormalize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE product_summary (\n    product_id INT PRIMARY KEY,\n    product_name VARCHAR(255) NOT NULL,\n    total_sold INT NOT NULL DEFAULT 0,\n    total_revenue DECIMAL(12, 2) NOT NULL DEFAULT 0.00,\n    avg_rating DECIMAL(3, 2) NULL,\n    last_ordered_at TIMESTAMP NULL,\n    FOREIGN KEY (product_id) REFERENCES products(id)\n);\n\nCREATE TABLE order_reporting (\n    order_id INT NOT NULL,\n    order_date DATE NOT NULL,\n    customer_id INT NOT NULL,\n    customer_name VARCHAR(255) NOT NULL,\n    customer_email VARCHAR(255) NOT NULL,\n    customer_segment VARCHAR(50) NOT NULL,\n    product_id INT NOT NULL,\n    product_name VARCHAR(255) NOT NULL,\n    product_category VARCHAR(255) NOT NULL,\n    quantity INT NOT NULL,\n    unit_price DECIMAL(10, 2) NOT NULL,\n    line_total DECIMAL(12, 2) NOT NULL,\n    order_total DECIMAL(12, 2) NOT NULL,\n    INDEX idx_reporting_date (order_date),\n    INDEX idx_reporting_customer (customer_id),\n    INDEX idx_reporting_category (product_category)\n);\n\nINSERT INTO order_reporting\nSELECT\n    o.id, o.order_date, c.id, c.name, c.email, c.segment,\n    p.id, p.name, p.category, oi.quantity, oi.unit_price,\n    (oi.quantity * oi.unit_price) AS line_total,\n    o.total\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p ON p.id = oi.product_id\nWHERE o.order_date > COALESCE(\n    (SELECT MAX(order_date) FROM order_reporting),\n    '1970-01-01'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Denormalize:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dashboard pre-aggregations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce JOINs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting tables with flattened data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic/regional data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate read replicas with adjusted schemas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append-only aggregated rollups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized search index tables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-transactions--locking",
      children: "7 Transactions & Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "71-acid-properties",
      children: "7.1 ACID Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL's InnoDB storage engine guarantees ACID compliance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity"
        }), ": A transaction is all-or-nothing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency"
        }), ": Transactions preserve all constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolation"
        }), ": Concurrent transactions appear to execute serially"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Durability"
        }), ": Committed changes persist after crash"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "START TRANSACTION;\n\nINSERT INTO orders (customer_id, order_date, total, status)\nVALUES (1, CURDATE(), 150.00, 'pending');\n\nUPDATE products SET stock_qty = stock_qty - 1 WHERE id = 200;\n\nINSERT INTO order_items (order_id, product_name, quantity, unit_price)\nVALUES (LAST_INSERT_ID(), 'Widget', 1, 150.00);\n\nROLLBACK;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "72-pessimistic-locking",
      children: "7.2 Pessimistic Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "START TRANSACTION;\nSELECT * FROM products WHERE id = 42 FOR UPDATE;\nUPDATE products SET stock_qty = stock_qty - 1 WHERE id = 42;\nCOMMIT;\n\nSTART TRANSACTION;\nSELECT * FROM products WHERE id = 42 LOCK IN SHARE MODE;\nCOMMIT;\n\nSTART TRANSACTION;\nSELECT id, stock_qty, price FROM products WHERE id IN (12, 25, 37) FOR UPDATE;\nUPDATE products SET stock_qty = stock_qty - 2 WHERE id = 12;\nUPDATE products SET stock_qty = stock_qty - 1 WHERE id = 25;\nUPDATE products SET stock_qty = stock_qty - 5 WHERE id = 37;\nINSERT INTO orders (customer_id, order_date, total, status)\nVALUES (1, CURDATE(), 319.97, 'confirmed');\nCOMMIT;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Clause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FOR UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LOCK IN SHARE MODE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NOWAIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return immediately if lock cannot be acquired"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SKIP LOCKED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip rows that are locked"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "START TRANSACTION;\nSELECT * FROM products WHERE id = 42 FOR UPDATE NOWAIT;\n\nSTART TRANSACTION;\nSELECT * FROM job_queue WHERE status = 'pending'\nORDER BY priority DESC, created_at ASC\nLIMIT 1\nFOR UPDATE SKIP LOCKED;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "73-optimistic-locking",
      children: "7.3 Optimistic Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE articles_optimistic (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    body TEXT NOT NULL,\n    version INT NOT NULL DEFAULT 1\n);\n\nINSERT INTO articles_optimistic (title, body) VALUES\n('My First Article', 'Content goes here...');\n\n-- Session 1: reads and updates\nSELECT id, title, body, version FROM articles_optimistic WHERE id = 1;\n-- version=1\n\nUPDATE articles_optimistic\nSET title = 'Updated Title', body = 'Updated content...', version = version + 1\nWHERE id = 1 AND version = 1;\n-- Affected rows: 1 (success)\n\n-- Session 2: tries to update stale version\nUPDATE articles_optimistic\nSET title = 'Another Update', body = 'Another version...', version = version + 1\nWHERE id = 1 AND version = 1;\n-- Affected rows: 0 (conflict detected!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Laravel, implementing optimistic locking:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$affected = Article::where('id', $id)\n    ->where('version', $originalVersion)\n    ->update(['title' => $newTitle, 'version' => $originalVersion + 1]);\n\nif ($affected === 0) {\n    throw new \\App\\Exceptions\\OptimisticLockException('Article was modified by another user.');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "74-deadlocks",
      children: "7.4 Deadlocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Transaction A (Session 1)\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n\n-- Transaction B (Session 2)\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 2;\n\n-- Transaction A now tries\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Transaction B now tries\nUPDATE accounts SET balance = balance + 100 WHERE id = 1;\n-- DEADLOCK! InnoDB detects and rolls back one transaction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preventing deadlocks — always lock resources in the same order:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Both transactions lock accounts in ascending order\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring deadlocks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SHOW ENGINE INNODB STATUS;\nSET GLOBAL innodb_print_all_deadlocks = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-database-design-patterns-for-laravel",
      children: "8 Database Design Patterns for Laravel"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "81-polymorphic-tables",
      children: "8.1 Polymorphic Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Polymorphic relationships allow a table to belong to multiple other tables through a single association."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE comments (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    commentable_type VARCHAR(255) NOT NULL,\n    commentable_id BIGINT UNSIGNED NOT NULL,\n    user_id BIGINT UNSIGNED NOT NULL,\n    body TEXT NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_commentable (commentable_type, commentable_id),\n    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);\n\nSELECT * FROM comments\nWHERE commentable_type = 'App\\\\Models\\\\Post'\n  AND commentable_id = 42;\n\nSELECT * FROM comments\nWHERE commentable_type = 'App\\\\Models\\\\Video'\n  AND commentable_id = 7;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimized polymorphic table with integer types:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE comment_types (\n    id TINYINT UNSIGNED PRIMARY KEY,\n    type_name VARCHAR(50) NOT NULL UNIQUE\n);\n\nINSERT INTO comment_types VALUES (1, 'post'), (2, 'video'), (3, 'product');\n\nCREATE TABLE comments_optimized (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    commentable_type TINYINT UNSIGNED NOT NULL,\n    commentable_id BIGINT UNSIGNED NOT NULL,\n    user_id BIGINT UNSIGNED NOT NULL,\n    body TEXT NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_commentable (commentable_type, commentable_id),\n    FOREIGN KEY (commentable_type) REFERENCES comment_types(id),\n    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel Eloquent handles this natively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Comment extends Model\n{\n    public function commentable(): MorphTo\n    {\n        return $this->morphTo();\n    }\n}\n\nclass Post extends Model\n{\n    public function comments(): MorphMany\n    {\n        return $this->morphMany(Comment::class, 'commentable');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "82-pivot-tables",
      children: "8.2 Pivot Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE roles (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL UNIQUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nINSERT INTO roles (name) VALUES ('admin'), ('editor'), ('subscriber');\n\nCREATE TABLE role_user (\n    role_id BIGINT UNSIGNED NOT NULL,\n    user_id BIGINT UNSIGNED NOT NULL,\n    assigned_by BIGINT UNSIGNED NULL,\n    expires_at TIMESTAMP NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    PRIMARY KEY (role_id, user_id),\n    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,\n    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,\n    FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE SET NULL\n);\n\nSELECT r.name, ru.expires_at\nFROM roles r\nJOIN role_user ru ON ru.role_id = r.id\nWHERE ru.user_id = 1\n  AND (ru.expires_at IS NULL OR ru.expires_at > NOW());\n\nSELECT u.name, u.email\nFROM users u\nJOIN role_user ru ON ru.user_id = u.id\nJOIN roles r ON r.id = ru.role_id\nWHERE r.name = 'admin';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Laravel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User extends Model\n{\n    public function roles(): BelongsToMany\n    {\n        return $this->belongsToMany(Role::class)\n            ->withPivot('assigned_by', 'expires_at')\n            ->withTimestamps();\n    }\n}\n\n$user->roles()->attach($roleId, [\n    'assigned_by' => auth()->id(),\n    'expires_at' => now()->addYear(),\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "83-json-columns",
      children: "8.3 JSON Columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE products_json (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    attributes JSON NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_attr_brand ((CAST(attributes->>'$.brand' AS CHAR(100))))\n);\n\nINSERT INTO products_json (name, attributes) VALUES\n('Super Widget', JSON_OBJECT(\n    'brand', 'Acme',\n    'color', 'red',\n    'weight_kg', 1.5,\n    'dimensions', JSON_OBJECT('width', 10, 'height', 5, 'depth', 3),\n    'tags', JSON_ARRAY('featured', 'new', 'sale')\n)),\n('Mega Gadget', JSON_OBJECT(\n    'brand', 'Globex',\n    'color', 'blue',\n    'power_watts', 100,\n    'wireless', true,\n    'tags', JSON_ARRAY('premium', 'limited')\n));\n\nSELECT id, name,\n    attributes->>'$.brand' AS brand,\n    attributes->>'$.color' AS color,\n    attributes->>'$.weight_kg' AS weight_kg\nFROM products_json\nWHERE attributes->>'$.brand' = 'Acme';\n\nSELECT id, name\nFROM products_json\nWHERE JSON_CONTAINS(attributes->'$.tags', '\"featured\"');\n\nSELECT p.id, p.name, tags.tag_value\nFROM products_json p,\nJSON_TABLE(p.attributes->'$.tags', '$[*]' COLUMNS (tag_value VARCHAR(50) PATH '$')) AS tags;\n\nUPDATE products_json\nSET attributes = JSON_SET(attributes, '$.price', 19.99)\nWHERE id = 1;\n\nUPDATE products_json\nSET attributes = JSON_ARRAY_APPEND(attributes, '$.tags', 'discounted')\nWHERE id = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use JSON columns:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible/evolving attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product specs, user preferences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External API payloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storing webhook payloads, API responses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration/settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature flags, user settings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested data with rare queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trails, metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MVP / prototype (iterate fast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before normalizing stable schema"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to avoid JSON columns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The data needs to be queried frequently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need referential integrity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The JSON structure is stable and known in advance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The values need atomic constraints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "84-enums-vs-lookup-tables",
      children: "8.4 Enums vs Lookup Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL ENUM approach:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE orders_enum (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lookup table approach:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE order_statuses (\n    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    code VARCHAR(30) NOT NULL UNIQUE,\n    display_name VARCHAR(50) NOT NULL,\n    sort_order TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    is_terminal TINYINT(1) NOT NULL DEFAULT 0\n);\n\nINSERT INTO order_statuses (code, display_name, sort_order, is_terminal) VALUES\n('pending', 'Pending', 1, 0),\n('processing', 'Processing', 2, 0),\n('shipped', 'Shipped', 3, 0),\n('delivered', 'Delivered', 4, 1),\n('cancelled', 'Cancelled', 5, 1);\n\nCREATE TABLE orders_lookup (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    status_id TINYINT UNSIGNED NOT NULL DEFAULT 1,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (status_id) REFERENCES order_statuses(id)\n);\n\nSELECT o.id, s.display_name AS status\nFROM orders_lookup o\nJOIN order_statuses s ON s.id = o.status_id;\n\nSELECT code, display_name FROM order_statuses ORDER BY sort_order;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ENUM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lookup Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 bytes (compact)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes (INT FK) + table storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alter values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE ... MODIFY COLUMN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple INSERT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queryable list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Additional columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (display_name, sort_order)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use lookup tables when values need to be displayed, ordered, or reused. Use ENUM only for truly fixed sets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "85-laravel-migration-counterpart",
      children: "8.5 Laravel Migration Counterpart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('products', function (Blueprint $table) {\n    $table->id();\n    $table->string('name', 255);\n    $table->string('slug')->unique();\n    $table->text('description')->nullable();\n    $table->decimal('price', 10, 2);\n    $table->unsignedSmallInteger('stock_qty')->default(0);\n    $table->foreignId('category_id')->constrained()->cascadeOnDelete();\n    $table->json('attributes')->nullable();\n    $table->string('status')->default('draft');\n    $table->softDeletes();\n    $table->timestamps();\n    $table->index('status');\n    $table->index(['category_id', 'status']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This migration creates the following MySQL DDL:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE products (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    slug VARCHAR(255) NOT NULL,\n    description TEXT NULL,\n    price DECIMAL(10, 2) NOT NULL,\n    stock_qty SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    category_id BIGINT UNSIGNED NOT NULL,\n    attributes JSON NULL,\n    status VARCHAR(255) NOT NULL DEFAULT 'draft',\n    deleted_at TIMESTAMP NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    UNIQUE INDEX products_slug_unique (slug),\n    INDEX products_status_index (status),\n    INDEX products_category_id_status_index (category_id, status),\n    CONSTRAINT products_category_id_foreign\n        FOREIGN KEY (category_id) REFERENCES categories(id)\n        ON DELETE CASCADE\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-migration-concepts",
      children: "9 Migration Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "91-schema-versioning",
      children: "9.1 Schema Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "migrations"
      }), " table tracks which migrations have run:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE migrations (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    migration VARCHAR(255) NOT NULL,\n    batch INT NOT NULL\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corresponding SQL for a Laravel migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Migration: 2024_01_01_000000_create_users_table (up)\nCREATE TABLE IF NOT EXISTS users (\n    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL,\n    email_verified_at TIMESTAMP NULL,\n    password VARCHAR(255) NOT NULL,\n    remember_token VARCHAR(100) NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n);\n\n-- Migration: 2024_01_01_000000_create_users_table (down)\nDROP TABLE IF EXISTS users;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "92-up-and-down-methods",
      children: "9.2 Up and Down Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every migration must be reversible."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- up:\nALTER TABLE posts ADD COLUMN excerpt VARCHAR(500) NULL AFTER title;\nCREATE INDEX idx_posts_excerpt ON posts (excerpt);\n\n-- down:\nDROP INDEX idx_posts_excerpt ON posts;\nALTER TABLE posts DROP COLUMN excerpt;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex migration with data migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Step 1: Add new column (up)\nALTER TABLE users ADD COLUMN full_name VARCHAR(255) NULL;\n\n-- Step 1 reverse (down)\nALTER TABLE users DROP COLUMN full_name;\n\n-- Step 2: Populate from existing columns (separate migration)\n-- up:\nUPDATE users SET full_name = CONCAT(first_name, ' ', last_name) WHERE full_name IS NULL;\nALTER TABLE users MODIFY COLUMN full_name VARCHAR(255) NOT NULL;\n\n-- down:\nALTER TABLE users MODIFY COLUMN full_name VARCHAR(255) NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Laravel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration 1\nSchema::table('users', function (Blueprint $table) {\n    $table->string('full_name')->nullable()->after('email');\n});\n\n// Migration 2\nclass PopulateUserFullNames extends Migration\n{\n    public function up(): void\n    {\n        DB::statement('UPDATE users SET full_name = CONCAT(first_name, \" \", last_name) WHERE full_name IS NULL');\n        Schema::table('users', function (Blueprint $table) {\n            $table->string('full_name')->nullable(false)->change();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::table('users', function (Blueprint $table) {\n            $table->string('full_name')->nullable()->change();\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "93-seeding",
      children: "9.3 Seeding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SET FOREIGN_KEY_CHECKS = 0;\nTRUNCATE TABLE order_items;\nTRUNCATE TABLE orders;\nTRUNCATE TABLE products;\nTRUNCATE TABLE categories;\nTRUNCATE TABLE users;\nSET FOREIGN_KEY_CHECKS = 1;\n\nINSERT INTO users (name, email, password, created_at, updated_at) VALUES\n('Admin User', 'admin@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW()),\n('Test User', 'test@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW()),\n('Jane Doe', 'jane@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NOW(), NOW());\n\nINSERT INTO categories (id, name, slug, created_at, updated_at) VALUES\n(1, 'Electronics', 'electronics', NOW(), NOW()),\n(2, 'Clothing', 'clothing', NOW(), NOW()),\n(3, 'Books', 'books', NOW(), NOW()),\n(4, 'Home & Garden', 'home-garden', NOW(), NOW());\n\nINSERT INTO products (name, slug, description, price, stock_qty, category_id, created_at, updated_at) VALUES\n('Wireless Headphones', 'wireless-headphones', 'Bluetooth 5.3 over-ear headphones with noise cancellation.', 89.99, 50, 1, NOW(), NOW()),\n('USB-C Hub', 'usb-c-hub', '7-in-1 USB-C hub with HDMI, USB-A, SD card reader.', 34.99, 120, 1, NOW(), NOW()),\n('Cotton T-Shirt', 'cotton-t-shirt', 'Premium 100% organic cotton t-shirt.', 24.99, 200, 2, NOW(), NOW()),\n('Denim Jacket', 'denim-jacket', 'Classic denim jacket with a modern fit.', 79.99, 35, 2, NOW(), NOW()),\n('Laravel: Up & Running', 'laravel-up-running', 'Comprehensive guide to Laravel development.', 44.99, 10, 3, NOW(), NOW()),\n('Design Patterns in PHP', 'design-patterns-php', 'Learn modern PHP design patterns.', 39.99, 15, 3, NOW(), NOW()),\n('Indoor Herb Garden Kit', 'indoor-herb-garden', 'Complete kit with pots, soil, and seeds.', 29.99, 60, 4, NOW(), NOW());\n\nINSERT INTO orders (customer_id, order_date, total, status, created_at, updated_at) VALUES\n(1, '2024-06-01', 124.98, 'delivered', NOW(), NOW()),\n(2, '2024-06-05', 44.99, 'shipped', NOW(), NOW()),\n(1, '2024-06-10', 29.99, 'processing', NOW(), NOW()),\n(3, '2024-06-12', 104.98, 'pending', NOW(), NOW());\n\nINSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES\n(1, 1, 1, 89.99),\n(1, 2, 1, 34.99),\n(2, 5, 1, 44.99),\n(3, 7, 1, 29.99),\n(4, 3, 2, 24.99),\n(4, 4, 1, 79.99);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-performance-optimization",
      children: "10 Performance Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "101-query-optimization",
      children: "10.1 Query Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Bad vs Good: SELECT only needed columns\nSELECT * FROM employees WHERE department_id = 1;\nSELECT id, first_name, last_name FROM employees WHERE department_id = 1;\n\n-- Bad vs Good: leading wildcard prevents index usage\nSELECT * FROM employees WHERE last_name LIKE '%smith%';\nSELECT * FROM employees WHERE last_name LIKE 'smith%';\n\n-- Bad vs Good: function on indexed column\nSELECT * FROM orders WHERE YEAR(order_date) = 2024;\nSELECT * FROM orders WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';\n\n-- Bad vs Good: OR across different indexed columns\nSELECT * FROM employees WHERE first_name = 'John' OR last_name = 'Smith';\nSELECT * FROM employees WHERE first_name = 'John'\nUNION\nSELECT * FROM employees WHERE last_name = 'Smith';\n\n-- Bad vs Good: paginating deep into tables\nSELECT * FROM users ORDER BY id LIMIT 100000, 20;\nSELECT * FROM users WHERE id > 100000 ORDER BY id LIMIT 20;\n\n-- Bad vs Good: correlated subquery vs derived table\nSELECT e.first_name, e.last_name,\n    (SELECT COUNT(*) FROM orders WHERE customer_id = e.id) AS order_count\nFROM employees e;\n\nSELECT e.first_name, e.last_name, COALESCE(o.order_count, 0) AS order_count\nFROM employees e\nLEFT JOIN (\n    SELECT customer_id, COUNT(*) AS order_count\n    FROM orders\n    GROUP BY customer_id\n) o ON o.customer_id = e.id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "102-connection-pooling",
      children: "10.2 Connection Pooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- MySQL configuration (my.cnf / my.ini)\n-- [mysqld]\n-- max_connections = 500\n-- thread_cache_size = 256\n-- wait_timeout = 300\n-- interactive_timeout = 300\n\nSHOW STATUS LIKE 'Threads_connected';\nSHOW STATUS LIKE 'Threads_running';\nSHOW STATUS LIKE 'Max_used_connections';\n\nSELECT\n    id, user, host, db, command, time, state, INFO\nFROM information_schema.PROCESSLIST\nORDER BY time DESC;\n\nKILL CONNECTION 12345;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laravel's database configuration for read/write connections:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "'connections' => [\n    'mysql' => [\n        'driver' => 'mysql',\n        'read' => [\n            'host' => ['192.168.1.1'],\n        ],\n        'write' => [\n            'host' => ['192.168.1.2'],\n        ],\n        'database' => env('DB_DATABASE', 'forge'),\n        'username' => env('DB_USERNAME', 'forge'),\n        'password' => env('DB_PASSWORD', ''),\n        'charset' => 'utf8mb4',\n        'collation' => 'utf8mb4_unicode_ci',\n        'options' => [\n            PDO::ATTR_EMULATE_PREPARES => false,\n            PDO::ATTR_PERSISTENT => true,\n        ],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "103-read-replicas",
      children: "10.3 Read Replicas"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- On the replica server, configure replication\n-- CHANGE REPLICATION SOURCE TO\n--     SOURCE_HOST = 'primary.example.com',\n--     SOURCE_USER = 'replica_user',\n--     SOURCE_PASSWORD = 'secure_password',\n--     SOURCE_LOG_FILE = 'mysql-bin.000042',\n--     SOURCE_LOG_POS = 123456789;\n-- START REPLICA;\n\nSHOW REPLICA STATUS\\G\n\n-- Monitor replication lag\nSELECT TIMESTAMPDIFF(SECOND,\n    (SELECT MAX(created_at) FROM orders),\n    NOW()\n) AS replication_lag_estimate;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "104-query-caching",
      children: "10.4 Query Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL 8.0 removed the query cache. Use InnoDB buffer pool and application-level caching."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- [mysqld]\n-- innodb_buffer_pool_size = 4G\n-- innodb_buffer_pool_instances = 4\n\nSHOW STATUS LIKE 'Innodb_buffer_pool_read%';\n\n-- Cache hit ratio\nSELECT\n    (1 - (\n        SELECT VARIABLE_VALUE FROM performance_schema.global_status\n        WHERE VARIABLE_NAME = 'Innodb_buffer_pool_reads'\n    ) / (\n        SELECT VARIABLE_VALUE FROM performance_schema.global_status\n        WHERE VARIABLE_NAME = 'Innodb_buffer_pool_read_requests'\n    )) * 100 AS buffer_pool_hit_rate;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Laravel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$products = Cache::remember('products.expensive', 600, function () {\n    return DB::table('products')\n        ->where('price', '>', 100)\n        ->orderBy('price')\n        ->get();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "105-slow-query-log",
      children: "10.5 Slow Query Log"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- [mysqld]\n-- slow_query_log = 1\n-- slow_query_log_file = /var/log/mysql/mysql-slow.log\n-- long_query_time = 2\n-- log_queries_not_using_indexes = 1\n\n-- Query the slow log via performance_schema\nSELECT\n    query,\n    exec_count,\n    avg_timer_wait / 1000000000000 AS avg_seconds,\n    sum_timer_wait / 1000000000000 AS total_seconds,\n    rows_examined_avg,\n    rows_sent_avg\nFROM performance_schema.events_statements_summary_by_digest\nWHERE avg_timer_wait / 1000000000000 > 1\nORDER BY avg_timer_wait DESC\nLIMIT 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "106-table-partitioning",
      children: "10.6 Table Partitioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE orders_partitioned (\n    id BIGINT UNSIGNED AUTO_INCREMENT,\n    customer_id INT UNSIGNED NOT NULL,\n    order_date DATE NOT NULL,\n    total DECIMAL(10, 2) NOT NULL,\n    status VARCHAR(20) NOT NULL DEFAULT 'pending',\n    PRIMARY KEY (id, order_date)\n)\nPARTITION BY RANGE (YEAR(order_date)) (\n    PARTITION p_2022 VALUES LESS THAN (2023),\n    PARTITION p_2023 VALUES LESS THAN (2024),\n    PARTITION p_2024 VALUES LESS THAN (2025),\n    PARTITION p_future VALUES LESS THAN MAXVALUE\n);\n\nCREATE TABLE logs_by_region (\n    id BIGINT UNSIGNED AUTO_INCREMENT,\n    log_data TEXT NOT NULL,\n    region_code CHAR(2) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    PRIMARY KEY (id, region_code)\n)\nPARTITION BY LIST (region_code) (\n    PARTITION p_north_america VALUES IN ('US', 'CA', 'MX'),\n    PARTITION p_europe VALUES IN ('UK', 'DE', 'FR', 'IT', 'ES'),\n    PARTITION p_asia VALUES IN ('JP', 'CN', 'KR', 'IN'),\n    PARTITION p_other VALUES IN ('AU', 'BR', 'ZA')\n);\n\nSELECT COUNT(*) FROM orders_partitioned PARTITION (p_2024);\n\nALTER TABLE orders_partitioned\n    REORGANIZE PARTITION p_future INTO (\n        PARTITION p_2025 VALUES LESS THAN (2026),\n        PARTITION p_future VALUES LESS THAN MAXVALUE\n    );\n\nALTER TABLE orders_partitioned DROP PARTITION p_2022;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "107-performance-monitoring",
      children: "10.7 Performance Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Check index usage\nSELECT\n    object_schema AS database_name,\n    object_name AS table_name,\n    index_name,\n    count_fetch AS reads,\n    count_insert AS writes\nFROM performance_schema.table_io_waits_summary_by_index_usage\nWHERE index_name != 'PRIMARY'\n  AND count_fetch < count_insert\nORDER BY count_fetch ASC;\n\n-- Check table sizes\nSELECT\n    table_name,\n    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS size_mb,\n    table_rows\nFROM information_schema.TABLES\nWHERE table_schema = 'laravel_app'\nORDER BY size_mb DESC;\n\n-- Check current running queries\nSELECT\n    id, user, host, db, command, time, state,\n    REPLACE(REPLACE(REPLACE(info, '\\n', ' '), '\\r', ' '), '\\t', ' ') AS info\nFROM information_schema.PROCESSLIST\nWHERE command != 'Sleep'\nORDER BY time DESC;\n\n-- Check InnoDB status for locks\nSHOW ENGINE INNODB STATUS\\G\n\n-- Check table fragmentation\nSELECT\n    table_name,\n    ROUND(data_free / 1024 / 1024, 2) AS fragmentation_mb\nFROM information_schema.TABLES\nWHERE table_schema = 'laravel_app'\nORDER BY data_free DESC;\n\n-- Optimize fragmented tables\nOPTIMIZE TABLE employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key MySQL concepts for database design."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relational Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organize data into related tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables, rows, columns, keys, relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define database structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE, ALTER, DROP, TRUNCATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulate data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT, INSERT, UPDATE, DELETE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOINs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine data from multiple tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER, LEFT, RIGHT, CROSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce data redundancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1NF, 2NF, 3NF, BCNF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use EXPLAIN on every query before adding it to production. An index scan beats a full table scan every time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for MySQL and database design."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key, foreign key, unique key, composite key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER, LEFT, RIGHT, CROSS, SELF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree, Hash, Full-text, Spatial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normal Forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1NF (atomic), 2NF (partial dep), 3NF (transitive dep)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema builder, up/down, foreign keys, indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " SELECT * is an anti-pattern in production. Always specify the exact columns you need."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage vs query complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed vs consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read vs write performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control vs overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Eloquent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORM abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Productivity vs raw SQL control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Be careful with UPDATE or DELETE without WHERE in transactions. Always test on a staging database first."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your MySQL and database design knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary key?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A key for sorting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A column that uniquely identifies each row"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) An index on a table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A foreign reference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) A column that uniquely identifies each row</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What does 2NF require beyond 1NF?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All columns are atomic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) No partial dependency on composite keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) No transitive dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All tables have a primary key"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) No partial dependency on composite keys</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " What is an index used for?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Store additional data"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Speed up data retrieval"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Enforce foreign keys"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Create backups"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) Speed up data retrieval</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What is the main trade-off with indexes?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Faster reads, slower writes"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Faster writes, slower reads"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) More storage, faster everything"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Less storage, slower everything"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                    children: ["Answer</summary>A) Faster reads, slower writes</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "concept-comparison-1",
                      children: "Concept Comparison"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Compare key MySQL concepts for database design."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Concept"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Purpose"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Feature"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Relational Model"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Organize data into related tables"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Tables, rows, columns, keys, relationships"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "SQL DDL"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Define database structure"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "CREATE, ALTER, DROP, TRUNCATE"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "SQL DML"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Manipulate data"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "SELECT, INSERT, UPDATE, DELETE"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "JOINs"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Combine data from multiple tables"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "INNER, LEFT, RIGHT, CROSS"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Normalization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Reduce data redundancy"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "1NF, 2NF, 3NF, BCNF"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "quick-reference-1",
                      children: "Quick Reference"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Quick reference for MySQL and database design."]
                      }), "\n"]
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "Topic"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "Key Point"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Keys"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Primary key, foreign key, unique key, composite key"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Constraints"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "JOIN Types"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "INNER, LEFT, RIGHT, CROSS, SELF"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Index Types"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "B-Tree, Hash, Full-text, Spatial"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Normal Forms"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "1NF (atomic), 2NF (partial dep), 3NF (transitive dep)"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Laravel Migrations"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Schema builder, up/down, foreign keys, indexes"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "cross-application-matrix-1",
                      children: "Cross-Application Matrix"
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Normalization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Data integrity"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Storage vs query complexity"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Denormalization"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Read performance"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Speed vs consistency"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Indexing"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Query speed"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Read vs write performance"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Laravel Migrations"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Schema versioning"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Control vs overhead"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "Laravel Eloquent"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "ORM abstraction"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Productivity vs raw SQL control"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "chapter-quiz-1",
                      children: "Chapter Quiz"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                          children: "One-Sentence Takeaway:"
                        }), " Test your MySQL and database design knowledge."]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Q1:"
                      }), " What is the primary key?"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "A) A key for sorting"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "B) A column that uniquely identifies each row"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "C) An index on a table"
                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                        children: "D) A foreign reference"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                        children: ["Answer</summary>B) A column that uniquely identifies each row</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: "Q2:"
                          }), " What does 2NF require beyond 1NF?"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "A) All columns are atomic"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "B) No partial dependency on composite keys"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "C) No transitive dependencies"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "D) All tables have a primary key"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                            children: ["Answer</summary>B) No partial dependency on composite keys</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                children: "Q3:"
                              }), " What is an index used for?"]
                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "A) Store additional data"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "B) Speed up data retrieval"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "C) Enforce foreign keys"
                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                children: "D) Create backups"
                              }), "\n"]
                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                children: ["Answer</summary>B) Speed up data retrieval</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                    children: "Q4:"
                                  }), " What is the main trade-off with indexes?"]
                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "A) Faster reads, slower writes"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "B) Faster writes, slower reads"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "C) More storage, faster everything"
                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                    children: "D) Less storage, slower everything"
                                  }), "\n"]
                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                    children: ["Answer</summary>A) Faster reads, slower writes</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "concept-comparison-2",
                                      children: "Concept Comparison"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Compare key MySQL concepts for database design."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "Concept"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Purpose"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Key Feature"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Relational Model"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Organize data into related tables"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Tables, rows, columns, keys, relationships"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "SQL DDL"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Define database structure"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "CREATE, ALTER, DROP, TRUNCATE"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "SQL DML"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Manipulate data"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "SELECT, INSERT, UPDATE, DELETE"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "JOINs"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Combine data from multiple tables"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "INNER, LEFT, RIGHT, CROSS"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Normalization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Reduce data redundancy"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "1NF, 2NF, 3NF, BCNF"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "quick-reference-2",
                                      children: "Quick Reference"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Quick reference for MySQL and database design."]
                                      }), "\n"]
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                            children: "Topic"
                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                            children: "Key Point"
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Keys"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Primary key, foreign key, unique key, composite key"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Constraints"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "JOIN Types"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "INNER, LEFT, RIGHT, CROSS, SELF"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Index Types"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "B-Tree, Hash, Full-text, Spatial"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Normal Forms"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "1NF (atomic), 2NF (partial dep), 3NF (transitive dep)"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Laravel Migrations"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Schema builder, up/down, foreign keys, indexes"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "cross-application-matrix-2",
                                      children: "Cross-Application Matrix"
                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Normalization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Data integrity"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Storage vs query complexity"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Denormalization"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Read performance"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Speed vs consistency"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Indexing"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Query speed"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Read vs write performance"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Laravel Migrations"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Schema versioning"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Control vs overhead"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                            children: "Laravel Eloquent"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "ORM abstraction"
                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                            children: "Productivity vs raw SQL control"
                                          })]
                                        })]
                                      })]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                      id: "chapter-quiz-2",
                                      children: "Chapter Quiz"
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                          children: "One-Sentence Takeaway:"
                                        }), " Test your MySQL and database design knowledge."]
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                        children: "Q1:"
                                      }), " What is the primary key?"]
                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "A) A key for sorting"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "B) A column that uniquely identifies each row"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "C) An index on a table"
                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                        children: "D) A foreign reference"
                                      }), "\n"]
                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                        children: ["Answer</summary>B) A column that uniquely identifies each row</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                            children: "Q2:"
                                          }), " What does 2NF require beyond 1NF?"]
                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "A) All columns are atomic"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "B) No partial dependency on composite keys"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "C) No transitive dependencies"
                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                            children: "D) All tables have a primary key"
                                          }), "\n"]
                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                            children: ["Answer</summary>B) No partial dependency on composite keys</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                children: "Q3:"
                                              }), " What is an index used for?"]
                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "A) Store additional data"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "B) Speed up data retrieval"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "C) Enforce foreign keys"
                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                children: "D) Create backups"
                                              }), "\n"]
                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                children: ["Answer</summary>B) Speed up data retrieval</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                    children: "Q4:"
                                                  }), " What is the main trade-off with indexes?"]
                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "A) Faster reads, slower writes"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "B) Faster writes, slower reads"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "C) More storage, faster everything"
                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                    children: "D) Less storage, slower everything"
                                                  }), "\n"]
                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                    children: ["Answer</summary>A) Faster reads, slower writes</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "concept-comparison-3",
                                                      children: "Concept Comparison"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Compare key MySQL concepts for database design."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Concept"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Purpose"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Key Feature"
                                                          })]
                                                        })
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Relational Model"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Organize data into related tables"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Tables, rows, columns, keys, relationships"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "SQL DDL"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Define database structure"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "CREATE, ALTER, DROP, TRUNCATE"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "SQL DML"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Manipulate data"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "SELECT, INSERT, UPDATE, DELETE"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "JOINs"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Combine data from multiple tables"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "INNER, LEFT, RIGHT, CROSS"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Normalization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Reduce data redundancy"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "1NF, 2NF, 3NF, BCNF"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "quick-reference-3",
                                                      children: "Quick Reference"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Quick reference for MySQL and database design."]
                                                      }), "\n"]
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                                                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                                                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Topic"
                                                          }), (0,jsx_runtime.jsx)(_components.th, {
                                                            children: "Key Point"
                                                          })]
                                                        })
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Keys"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Primary key, foreign key, unique key, composite key"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Constraints"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "JOIN Types"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "INNER, LEFT, RIGHT, CROSS, SELF"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Index Types"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "B-Tree, Hash, Full-text, Spatial"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Normal Forms"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "1NF (atomic), 2NF (partial dep), 3NF (transitive dep)"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Laravel Migrations"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Schema builder, up/down, foreign keys, indexes"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "cross-application-matrix-3",
                                                      children: "Cross-Application Matrix"
                                                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                                                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Normalization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Data integrity"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Storage vs query complexity"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Denormalization"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Read performance"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Speed vs consistency"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Indexing"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Query speed"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Read vs write performance"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Laravel Migrations"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Schema versioning"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Control vs overhead"
                                                          })]
                                                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                                                          children: [(0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Laravel Eloquent"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "ORM abstraction"
                                                          }), (0,jsx_runtime.jsx)(_components.td, {
                                                            children: "Productivity vs raw SQL control"
                                                          })]
                                                        })]
                                                      })]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                      id: "chapter-quiz-3",
                                                      children: "Chapter Quiz"
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                        children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                          children: "One-Sentence Takeaway:"
                                                        }), " Test your MySQL and database design knowledge."]
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                        children: "Q1:"
                                                      }), " What is the primary key?"]
                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "A) A key for sorting"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "B) A column that uniquely identifies each row"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "C) An index on a table"
                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                        children: "D) A foreign reference"
                                                      }), "\n"]
                                                    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                      children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                        children: ["Answer</summary>B) A column that uniquely identifies each row</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                            children: "Q2:"
                                                          }), " What does 2NF require beyond 1NF?"]
                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "A) All columns are atomic"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "B) No partial dependency on composite keys"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "C) No transitive dependencies"
                                                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                            children: "D) All tables have a primary key"
                                                          }), "\n"]
                                                        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                          children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                            children: ["Answer</summary>B) No partial dependency on composite keys</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                              children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                children: "Q3:"
                                                              }), " What is an index used for?"]
                                                            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "A) Store additional data"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "B) Speed up data retrieval"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "C) Enforce foreign keys"
                                                              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                children: "D) Create backups"
                                                              }), "\n"]
                                                            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                              children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                children: ["Answer</summary>B) Speed up data retrieval</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                    children: "Q4:"
                                                                  }), " What is the main trade-off with indexes?"]
                                                                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "A) Faster reads, slower writes"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "B) Faster writes, slower reads"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "C) More storage, faster everything"
                                                                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                    children: "D) Less storage, slower everything"
                                                                  }), "\n"]
                                                                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                                                                  children: (0,jsx_runtime.jsxs)(_components.summary, {
                                                                    children: ["Answer</summary>A) Faster reads, slower writes</details>\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "summary",
                                                                      children: "Summary"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "This chapter covered the theoretical and practical foundations of MySQL and database design as they apply to modern Laravel development. You learned that the relational model organizes data into tables with rows and columns, linked through primary and foreign keys. SQL provides DDL for structure, DML for data manipulation, DQL for queries, and transactional controls for consistency."
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "The chapter's deep dive into SQL queries covered every major clause: SELECT with filtering via WHERE, joining tables with INNER, LEFT, RIGHT, and CROSS JOINs, grouping with GROUP BY and HAVING, sorting with ORDER BY, pagination with LIMIT, subqueries, and UNION. Every query was presented as complete, runnable SQL."
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Indexing was presented as the highest-leverage performance tool: B-tree indexes accelerate lookups, composite indexes obey the leftmost prefix rule, and EXPLAIN is the definitive query analysis tool. Normalization through 1NF, 2NF, and 3NF eliminates redundancy, while denormalization remains a legitimate strategy for read-heavy workloads."
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Transactions and locking explained InnoDB's ACID guarantees, the trade-offs between pessimistic and optimistic locking, and deadlock prevention. Laravel-specific design patterns — polymorphic tables, pivot tables, JSON columns, and lookup tables — connect theory to framework conventions."
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Performance optimization encompasses query design, connection pooling, read replicas, caching, partitioning, and monitoring through the performance_schema and slow query log. Understanding the SQL that Laravel's Schema Builder generates underneath helps you make informed migration and optimization decisions."
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                                                                      id: "exercises",
                                                                      children: "Exercises"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "review-questions",
                                                                      children: "Review Questions"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What is the difference between a primary key and a unique index? When would you use each?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "Explain the three relationship types in a relational database and give a real-world example of each."
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "ON DELETE CASCADE"
                                                                          }), " clause do? What are the alternatives?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "Describe the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN."
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What is the leftmost prefix rule for composite indexes?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "EXPLAIN"
                                                                          }), " tell you about a query?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "List the three normal forms and the anomaly each prevents."
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "DELETE"
                                                                          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "TRUNCATE"
                                                                          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "DROP"
                                                                          }), "?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "Explain the difference between pessimistic and optimistic locking."
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What is a pivot table and when do you need one?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What are the advantages of a lookup table over a MySQL ENUM?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "How do you detect and prevent deadlocks in MySQL?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "What is the purpose of a migration system?"
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "innodb_buffer_pool_size"
                                                                          }), " control?"]
                                                                        }), "\n"]
                                                                      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "When would you use JSON columns instead of normalizing?"
                                                                        }), "\n"]
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "application-problems",
                                                                      children: "Application Problems"
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 1:"
                                                                      }), " Design a schema for a library management system:"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                        children: "Books have title, ISBN (unique), publication year, and belong to one or more authors"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                        children: "Authors have name, birth year, nationality"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                        children: "Members have name, email (unique), membership date"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                        children: "Loans track which member borrowed which book, borrow date, due date"
                                                                      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                                                                        children: "A book can be borrowed by only one member at a time"
                                                                      }), "\n"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Write the complete SQL DDL with primary keys, foreign keys, indexes, and constraints."
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "CREATE TABLE authors (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    birth_year YEAR NULL,\n    nationality VARCHAR(100) NULL\n);\n\nCREATE TABLE books (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    isbn VARCHAR(13) NOT NULL UNIQUE,\n    publication_year YEAR NOT NULL,\n    total_copies INT UNSIGNED NOT NULL DEFAULT 1,\n    available_copies INT UNSIGNED NOT NULL DEFAULT 1,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT chk_copies CHECK (available_copies <= total_copies)\n);\n\nCREATE TABLE book_author (\n    book_id INT UNSIGNED NOT NULL,\n    author_id INT UNSIGNED NOT NULL,\n    PRIMARY KEY (book_id, author_id),\n    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,\n    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE\n);\n\nCREATE TABLE members (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    membership_date DATE NOT NULL DEFAULT (CURRENT_DATE),\n    active TINYINT(1) NOT NULL DEFAULT 1\n);\n\nCREATE TABLE loans (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    book_id INT UNSIGNED NOT NULL,\n    member_id INT UNSIGNED NOT NULL,\n    borrow_date DATE NOT NULL DEFAULT (CURRENT_DATE),\n    due_date DATE NOT NULL,\n    returned_date DATE NULL,\n    status ENUM('active', 'returned', 'overdue') NOT NULL DEFAULT 'active',\n    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE RESTRICT,\n    FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE RESTRICT,\n    INDEX idx_loans_status (status),\n    INDEX idx_loans_due (due_date),\n    CONSTRAINT chk_dates CHECK (returned_date IS NULL OR returned_date >= borrow_date)\n);\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 2:"
                                                                      }), " Write queries for the library schema:\na) Find all books currently borrowed by member with email \"", (0,jsx_runtime.jsx)(_components.a, {
                                                                        href: "mailto:john@example.com",
                                                                        children: "john@example.com"
                                                                      }), "\"\nb) Count books per author, sorted highest to lowest\nc) Find overdue books\nd) List members who have never borrowed a book\ne) Show the most borrowed books"]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "-- a)\nSELECT b.title, b.isbn, l.borrow_date, l.due_date\nFROM loans l\nJOIN books b ON b.id = l.book_id\nJOIN members m ON m.id = l.member_id\nWHERE m.email = 'john@example.com'\n  AND l.status = 'active';\n\n-- b)\nSELECT a.name, COUNT(ba.book_id) AS book_count\nFROM authors a\nJOIN book_author ba ON ba.author_id = a.id\nGROUP BY a.id, a.name\nORDER BY book_count DESC;\n\n-- c)\nSELECT b.title, m.name AS member_name, l.borrow_date, l.due_date,\n    DATEDIFF(CURRENT_DATE, l.due_date) AS days_overdue\nFROM loans l\nJOIN books b ON b.id = l.book_id\nJOIN members m ON m.id = l.member_id\nWHERE l.status IN ('active', 'overdue')\n  AND l.due_date < CURRENT_DATE\nORDER BY days_overdue DESC;\n\n-- d)\nSELECT m.name, m.email, m.membership_date\nFROM members m\nLEFT JOIN loans l ON l.member_id = m.id\nWHERE l.id IS NULL;\n\n-- e)\nSELECT b.title, COUNT(l.id) AS borrow_count\nFROM books b\nJOIN loans l ON l.book_id = b.id\nGROUP BY b.id, b.title\nORDER BY borrow_count DESC\nLIMIT 10;\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 3:"
                                                                      }), " Optimize a slow query. The employees table has 500,000 rows. An index exists on ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "(department_id)"
                                                                      }), " and separately on ", (0,jsx_runtime.jsx)(_components.code, {
                                                                        children: "(last_name)"
                                                                      }), ". The query:"]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                      children: (0,jsx_runtime.jsx)(_components.code, {
                                                                        className: "language-sql",
                                                                        children: "SELECT * FROM employees WHERE department_id = 3 AND salary > 70000 ORDER BY last_name;\n"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Design a better index and explain why it improves performance."
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["A composite index on ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "(department_id, salary, last_name)"
                                                                          }), ":"]
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "CREATE INDEX idx_dept_salary_name ON employees (department_id, salary, last_name);\n"
                                                                          })
                                                                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                          children: "How this helps:"
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                                                                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["MySQL finds rows where ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "department_id = 3"
                                                                            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "salary > 70000"
                                                                            }), " via index range scan"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["The index is sorted by ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "last_name"
                                                                            }), " within each salary group — no filesort needed"]
                                                                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                                                                            children: ["If only ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "id"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "department_id"
                                                                            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "salary"
                                                                            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                                                                              children: "last_name"
                                                                            }), " are needed, an index-only scan satisfies the query"]
                                                                          }), "\n"]
                                                                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                          children: ["Before: type=ref on ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "(department_id)"
                                                                          }), ", 10000+ rows examined, ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Using where; Using filesort"
                                                                          }), "\nAfter: type=range on ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "(department_id, salary)"
                                                                          }), ", ~500 rows examined, ", (0,jsx_runtime.jsx)(_components.code, {
                                                                            children: "Using index condition"
                                                                          })]
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                                                                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 4:"
                                                                      }), " Write a transactional checkout flow with proper locking."]
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "START TRANSACTION;\n\nSELECT id, stock_qty, price\nFROM products\nWHERE id IN (101, 102, 103)\nFOR UPDATE;\n\nSELECT IF(\n    (SELECT stock_qty FROM products WHERE id = 101) >= 2\n    AND (SELECT stock_qty FROM products WHERE id = 102) >= 1,\n    'sufficient', 'insufficient'\n) AS stock_status;\n\nUPDATE products SET stock_qty = stock_qty - 2 WHERE id = 101;\nUPDATE products SET stock_qty = stock_qty - 1 WHERE id = 102;\n\nINSERT INTO orders (customer_id, order_date, total, status)\nVALUES (42, CURDATE(), 214.97, 'pending');\nSET @order_id = LAST_INSERT_ID();\n\nINSERT INTO order_items (order_id, product_id, quantity, unit_price)\nSELECT @order_id, id, CASE id WHEN 101 THEN 2 ELSE 1 END, price\nFROM products WHERE id IN (101, 102);\n\nINSERT INTO payments (order_id, amount, method, status, transaction_id)\nVALUES (@order_id, 214.97, 'credit_card', 'completed', 'txn_abc123xyz');\n\nUPDATE orders SET status = 'confirmed' WHERE id = @order_id;\n\nCOMMIT;\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                                                                      id: "challenge-problems",
                                                                      children: "Challenge Problems"
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 1: EAV (Entity-Attribute-Value) Implementation"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Design a schema for dynamic product attributes where different categories have different attribute sets. Implement the EAV pattern, then write a query that pivots the EAV data into a traditional row-per-product result."
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "CREATE TABLE eav_categories (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL UNIQUE\n);\n\nINSERT INTO eav_categories (name) VALUES ('Electronics'), ('Clothing'), ('Books');\n\nCREATE TABLE eav_attributes (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    category_id INT UNSIGNED NOT NULL,\n    attribute_name VARCHAR(100) NOT NULL,\n    data_type ENUM('string', 'integer', 'decimal', 'boolean') NOT NULL DEFAULT 'string',\n    is_required TINYINT(1) NOT NULL DEFAULT 0,\n    sort_order TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    FOREIGN KEY (category_id) REFERENCES eav_categories(id) ON DELETE CASCADE,\n    UNIQUE KEY (category_id, attribute_name)\n);\n\nINSERT INTO eav_attributes (category_id, attribute_name, data_type, is_required, sort_order) VALUES\n(1, 'Brand', 'string', 1, 1),\n(1, 'Wattage', 'integer', 0, 2),\n(1, 'Color', 'string', 0, 3),\n(2, 'Size', 'string', 1, 1),\n(2, 'Material', 'string', 1, 2),\n(2, 'Gender', 'string', 0, 3),\n(3, 'Pages', 'integer', 1, 1),\n(3, 'ISBN', 'string', 1, 2),\n(3, 'Publisher', 'string', 0, 3);\n\nCREATE TABLE eav_products (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    category_id INT UNSIGNED NOT NULL,\n    base_price DECIMAL(10, 2) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (category_id) REFERENCES eav_categories(id)\n);\n\nINSERT INTO eav_products (name, category_id, base_price) VALUES\n('Bluetooth Speaker', 1, 49.99),\n('Cotton T-Shirt', 2, 19.99),\n('PHP Handbook', 3, 34.99);\n\nCREATE TABLE eav_values (\n    product_id INT UNSIGNED NOT NULL,\n    attribute_id INT UNSIGNED NOT NULL,\n    value_text VARCHAR(500) NULL,\n    value_int INT NULL,\n    value_decimal DECIMAL(12, 4) NULL,\n    value_bool TINYINT(1) NULL,\n    PRIMARY KEY (product_id, attribute_id),\n    FOREIGN KEY (product_id) REFERENCES eav_products(id) ON DELETE CASCADE,\n    FOREIGN KEY (attribute_id) REFERENCES eav_attributes(id) ON DELETE CASCADE\n);\n\nINSERT INTO eav_values (product_id, attribute_id, value_text, value_int, value_decimal, value_bool) VALUES\n(1, 1, 'SoundMax', NULL, NULL, NULL),\n(1, 2, NULL, 20, NULL, NULL),\n(1, 3, 'Black', NULL, NULL, NULL),\n(2, 4, 'L', NULL, NULL, NULL),\n(2, 5, 'Cotton', NULL, NULL, NULL),\n(2, 6, 'Unisex', NULL, NULL, NULL),\n(3, 7, NULL, 450, NULL, NULL),\n(3, 8, '978-3-16-148410-0', NULL, NULL, NULL),\n(3, 9, 'Tech Press', NULL, NULL, NULL);\n\nSELECT\n    p.id,\n    p.name,\n    c.name AS category,\n    MAX(CASE WHEN a.attribute_name = 'Brand' THEN COALESCE(v.value_text, v.value_int, v.value_decimal, v.value_bool) END) AS brand,\n    MAX(CASE WHEN a.attribute_name = 'Wattage' THEN v.value_int END) AS wattage,\n    MAX(CASE WHEN a.attribute_name = 'Color' THEN v.value_text END) AS color,\n    MAX(CASE WHEN a.attribute_name = 'Size' THEN v.value_text END) AS size,\n    MAX(CASE WHEN a.attribute_name = 'Material' THEN v.value_text END) AS material,\n    MAX(CASE WHEN a.attribute_name = 'Pages' THEN v.value_int END) AS pages,\n    MAX(CASE WHEN a.attribute_name = 'ISBN' THEN v.value_text END) AS isbn,\n    MAX(CASE WHEN a.attribute_name = 'Publisher' THEN v.value_text END) AS publisher\nFROM eav_products p\nJOIN eav_categories c ON c.id = p.category_id\nLEFT JOIN eav_values v ON v.product_id = p.id\nLEFT JOIN eav_attributes a ON a.id = v.attribute_id\nGROUP BY p.id, p.name, c.name;\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 2: Hierarchical Category Tree"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Design a schema for an infinite-depth category tree using both adjacency list and nested set models. Support queries for descendants, ancestors, and immediate children."
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "CREATE TABLE categories (\n    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    parent_id INT UNSIGNED NULL,\n    name VARCHAR(100) NOT NULL,\n    lft INT UNSIGNED NULL,\n    rgt INT UNSIGNED NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE CASCADE,\n    INDEX idx_parent (parent_id)\n);\n\nINSERT INTO categories (id, parent_id, name) VALUES\n(1, NULL, 'Electronics'),\n(2, 1, 'Audio'),\n(3, 1, 'Computers'),\n(4, 2, 'Headphones'),\n(5, 2, 'Speakers'),\n(6, 4, 'Wireless Headphones'),\n(7, 4, 'Wired Headphones'),\n(8, 3, 'Laptops'),\n(9, 3, 'Desktops'),\n(10, 8, 'Gaming Laptops');\n\n-- Adjacency: immediate children\nSELECT id, name FROM categories WHERE parent_id = 4;\n\n-- Adjacency: all descendants (recursive CTE, MySQL 8.0+)\nWITH RECURSIVE cat_tree AS (\n    SELECT id, name, parent_id, 0 AS depth\n    FROM categories WHERE id = 4\n    UNION ALL\n    SELECT c.id, c.name, c.parent_id, ct.depth + 1\n    FROM categories c\n    JOIN cat_tree ct ON ct.id = c.parent_id\n)\nSELECT id, name, depth FROM cat_tree WHERE depth > 0 ORDER BY depth, name;\n\n-- Adjacency: all ancestors\nWITH RECURSIVE cat_ancestors AS (\n    SELECT id, name, parent_id, 0 AS depth\n    FROM categories WHERE id = 6\n    UNION ALL\n    SELECT c.id, c.name, c.parent_id, ca.depth + 1\n    FROM categories c\n    JOIN cat_ancestors ca ON ca.parent_id = c.id\n)\nSELECT id, name, depth FROM cat_ancestors ORDER BY depth DESC;\n\n-- Set nested set values\nUPDATE categories SET lft = 1, rgt = 20 WHERE id = 1;\nUPDATE categories SET lft = 2, rgt = 13 WHERE id = 2;\nUPDATE categories SET lft = 3, rgt = 8 WHERE id = 4;\nUPDATE categories SET lft = 4, rgt = 5 WHERE id = 6;\nUPDATE categories SET lft = 6, rgt = 7 WHERE id = 7;\nUPDATE categories SET lft = 9, rgt = 12 WHERE id = 5;\nUPDATE categories SET lft = 14, rgt = 19 WHERE id = 3;\nUPDATE categories SET lft = 15, rgt = 18 WHERE id = 8;\nUPDATE categories SET lft = 16, rgt = 17 WHERE id = 10;\nUPDATE categories SET lft = 19, rgt = 20 WHERE id = 9;\n\n-- Nested set: all descendants (no recursion)\nSELECT c2.id, c2.name\nFROM categories c1\nJOIN categories c2 ON c2.lft > c1.lft AND c2.rgt < c1.rgt\nWHERE c1.id = 4;\n\n-- Nested set: all ancestors\nSELECT c2.id, c2.name\nFROM categories c1\nJOIN categories c2 ON c1.lft > c2.lft AND c1.rgt < c2.rgt\nWHERE c1.id = 6;\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 3: Concurrent Inventory Reservation"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "You have 10 units of Product X. Two customers try to buy 8 units each simultaneously. Ensure only one succeeds. Demonstrate with pessimistic and optimistic locking."
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "CREATE TABLE inventory (\n    product_id INT PRIMARY KEY,\n    stock_qty INT UNSIGNED NOT NULL,\n    reserved_qty INT UNSIGNED NOT NULL DEFAULT 0,\n    version INT NOT NULL DEFAULT 1,\n    CONSTRAINT chk_stock CHECK (stock_qty >= reserved_qty)\n);\n\nINSERT INTO inventory (product_id, stock_qty, reserved_qty) VALUES (1, 10, 0);\n\n-- Pessimistic locking (FOR UPDATE)\nSTART TRANSACTION;\nSELECT stock_qty, reserved_qty FROM inventory WHERE product_id = 1 FOR UPDATE;\nUPDATE inventory SET reserved_qty = reserved_qty + 8 WHERE product_id = 1;\nCOMMIT;\n\n-- Second session blocks until first commits, then sees reserved_qty=8\n-- and (10 - 8) = 2 < 8 → fails\n\n-- Optimistic locking (version column)\nSTART TRANSACTION;\nSELECT stock_qty, reserved_qty, version FROM inventory WHERE product_id = 1;\nUPDATE inventory\nSET reserved_qty = reserved_qty + 8, version = version + 1\nWHERE product_id = 1 AND version = 1;\n-- If affected_rows == 0 → conflict, retry\nCOMMIT;\n\n-- Atomic UPDATE with inline check\nUPDATE inventory\nSET reserved_qty = reserved_qty + 8\nWHERE product_id = 1\n  AND (stock_qty - reserved_qty) >= 8;\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: (0,jsx_runtime.jsx)(_components.strong, {
                                                                        children: "Problem 4: Time-Series Rollup with Partitioning"
                                                                      })
                                                                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                                                                      children: "Design a system for storing and querying temperature sensor readings (10,000 sensors, one reading per minute). Create a partitioned table by month, write hourly average queries, and archive old partitions."
                                                                    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                                                                      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
                                                                        children: ["Solution</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
                                                                          children: (0,jsx_runtime.jsx)(_components.code, {
                                                                            className: "language-sql",
                                                                            children: "CREATE TABLE sensor_readings (\n    id BIGINT UNSIGNED AUTO_INCREMENT,\n    sensor_id INT UNSIGNED NOT NULL,\n    temperature DECIMAL(5, 2) NOT NULL,\n    humidity DECIMAL(5, 2) NULL,\n    recorded_at DATETIME NOT NULL,\n    PRIMARY KEY (id, recorded_at),\n    INDEX idx_sensor_time (sensor_id, recorded_at)\n)\nPARTITION BY RANGE (TO_DAYS(recorded_at)) (\n    PARTITION p_2024_q1 VALUES LESS THAN (TO_DAYS('2024-04-01')),\n    PARTITION p_2024_q2 VALUES LESS THAN (TO_DAYS('2024-07-01')),\n    PARTITION p_2024_q3 VALUES LESS THAN (TO_DAYS('2024-10-01')),\n    PARTITION p_2024_q4 VALUES LESS THAN (TO_DAYS('2025-01-01')),\n    PARTITION p_future VALUES LESS THAN MAXVALUE\n);\n\n-- Hourly rollup\nSELECT\n    sensor_id,\n    DATE(recorded_at) AS reading_date,\n    HOUR(recorded_at) AS reading_hour,\n    COUNT(*) AS reading_count,\n    ROUND(AVG(temperature), 2) AS avg_temp,\n    ROUND(MAX(temperature), 2) AS max_temp,\n    ROUND(MIN(temperature), 2) AS min_temp,\n    ROUND(AVG(humidity), 2) AS avg_humidity\nFROM sensor_readings\nWHERE sensor_id = 1\n  AND recorded_at >= '2024-06-01'\n  AND recorded_at < '2024-06-02'\nGROUP BY sensor_id, DATE(recorded_at), HOUR(recorded_at)\nORDER BY reading_hour;\n\n-- Verify partition pruning\nEXPLAIN SELECT *\nFROM sensor_readings\nWHERE recorded_at >= '2024-06-01'\n  AND recorded_at < '2024-07-01';\n\n-- Drop old partition (instant)\nALTER TABLE sensor_readings DROP PARTITION p_2024_q1;\n"
                                                                          })
                                                                        }), "\n"]
                                                                      })]
                                                                    }), "\n"]
                                                                  })
                                                                })]
                                                              })
                                                            })]
                                                          })
                                                        })]
                                                      })
                                                    })]
                                                  })
                                                })]
                                              })
                                            })]
                                          })
                                        })]
                                      })
                                    })]
                                  })
                                })]
                              })
                            })]
                          })
                        })]
                      })
                    })]
                  })
                })]
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