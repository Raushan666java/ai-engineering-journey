"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[18889],{

/***/ 5321
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_15_mongodb_md_f9e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-15-mongodb-md-f9e.json
const site_docs_courses_database_management_systems_15_mongodb_md_f9e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/15-mongodb","title":"Chapter 15: MongoDB","description":"Prev NoSQL | Next Redis","source":"@site/docs/courses/database-management-systems/15-mongodb.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/15-mongodb","permalink":"/ai-engineering-journey/database-management-systems/15-mongodb","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-mongodb","slug":"/database-management-systems/15-mongodb","title":"Chapter 15: MongoDB","sidebar_label":"Chapter 15: MongoDB","sidebar_position":15},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 14: NoSQL Databases","permalink":"/ai-engineering-journey/database-management-systems/14-nosql"},"next":{"title":"Chapter 16: Redis → In-Memory Data Store","permalink":"/ai-engineering-journey/database-management-systems/16-redis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/15-mongodb.md


const frontMatter = {
	id: '15-mongodb',
	slug: '/database-management-systems/15-mongodb',
	title: 'Chapter 15: MongoDB',
	sidebar_label: 'Chapter 15: MongoDB',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: MongoDB';

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
  "value": "15.1 MongoDB Overview",
  "id": "151-mongodb-overview",
  "level": 3
}, {
  "value": "15.1.1 What is MongoDB?",
  "id": "1511-what-is-mongodb",
  "level": 4
}, {
  "value": "15.1.2 Key Concepts → Detailed",
  "id": "1512-key-concepts--detailed",
  "level": 4
}, {
  "value": "15.1.3 BSON Format in Depth",
  "id": "1513-bson-format-in-depth",
  "level": 4
}, {
  "value": "15.1.4 BSON vs JSON Comparison",
  "id": "1514-bson-vs-json-comparison",
  "level": 4
}, {
  "value": "15.1.5 Numbered Steps: How MongoDB Stores and Retrieves Documents",
  "id": "1515-numbered-steps-how-mongodb-stores-and-retrieves-documents",
  "level": 4
}, {
  "value": "15.1.6 Pseudocode: Document Storage Engine Operations",
  "id": "1516-pseudocode-document-storage-engine-operations",
  "level": 4
}, {
  "value": "15.1.7 Complexity Analysis",
  "id": "1517-complexity-analysis",
  "level": 4
}, {
  "value": "15.1.8 Advantages &amp; Disadvantages of MongoDB Document Model",
  "id": "1518-advantages--disadvantages-of-mongodb-document-model",
  "level": 4
}, {
  "value": "15.1.9 Edge Cases in MongoDB Document Model",
  "id": "1519-edge-cases-in-mongodb-document-model",
  "level": 4
}, {
  "value": "15.2 Document Model and Schema Design",
  "id": "152-document-model-and-schema-design",
  "level": 3
}, {
  "value": "15.2.1 Embedding vs Referencing → Decision Framework",
  "id": "1521-embedding-vs-referencing--decision-framework",
  "level": 4
}, {
  "value": "15.2.2 MongoDB Sample Documents with Sample Data",
  "id": "1522-mongodb-sample-documents-with-sample-data",
  "level": 4
}, {
  "value": "15.2.3 C++ Implementation (MongoDB C++ Driver)",
  "id": "1523-c-implementation-mongodb-c-driver",
  "level": 4
}, {
  "value": "15.2.4 Python (PyMongo) Implementation",
  "id": "1524-python-pymongo-implementation",
  "level": 4
}, {
  "value": "15.2.5 Dry Run Trace: Insert with Index Updates",
  "id": "1525-dry-run-trace-insert-with-index-updates",
  "level": 4
}, {
  "value": "15.3 CRUD Operations → Complete Reference",
  "id": "153-crud-operations--complete-reference",
  "level": 3
}, {
  "value": "15.3.1 CRUD Operations Summary Table",
  "id": "1531-crud-operations-summary-table",
  "level": 4
}, {
  "value": "15.3.2 Create (Insert) → Detailed with Variations",
  "id": "1532-create-insert--detailed-with-variations",
  "level": 4
}, {
  "value": "15.3.3 Sample Data for CRUD Operations",
  "id": "1533-sample-data-for-crud-operations",
  "level": 4
}, {
  "value": "15.3.4 Read (Query) → Query Operators Reference",
  "id": "1534-read-query--query-operators-reference",
  "level": 4
}, {
  "value": "15.3.5 Update → Update Operators Reference",
  "id": "1535-update--update-operators-reference",
  "level": 4
}, {
  "value": "15.3.6 Delete → Variations",
  "id": "1536-delete--variations",
  "level": 4
}, {
  "value": "15.3.7 Numbered Steps: CRUD Operation Execution",
  "id": "1537-numbered-steps-crud-operation-execution",
  "level": 4
}, {
  "value": "15.3.8 Pseudocode: CRUD Operations",
  "id": "1538-pseudocode-crud-operations",
  "level": 4
}, {
  "value": "15.3.9 Dry Run Trace: Update with Index Maintenance",
  "id": "1539-dry-run-trace-update-with-index-maintenance",
  "level": 4
}, {
  "value": "15.3.10 Edge Cases in CRUD Operations",
  "id": "15310-edge-cases-in-crud-operations",
  "level": 4
}, {
  "value": "15.4 Indexing in MongoDB",
  "id": "154-indexing-in-mongodb",
  "level": 3
}, {
  "value": "15.4.1 Index Types Comparison",
  "id": "1541-index-types-comparison",
  "level": 4
}, {
  "value": "15.4.2 Single Field Index",
  "id": "1542-single-field-index",
  "level": 4
}, {
  "value": "15.4.3 Compound Index",
  "id": "1543-compound-index",
  "level": 4
}, {
  "value": "15.4.4 Multikey Index",
  "id": "1544-multikey-index",
  "level": 4
}, {
  "value": "15.4.5 Text Index",
  "id": "1545-text-index",
  "level": 4
}, {
  "value": "15.4.6 Geospatial Index",
  "id": "1546-geospatial-index",
  "level": 4
}, {
  "value": "15.4.7 TTL Index",
  "id": "1547-ttl-index",
  "level": 4
}, {
  "value": "15.4.8 Numbered Steps: Index Creation and Query Optimization",
  "id": "1548-numbered-steps-index-creation-and-query-optimization",
  "level": 4
}, {
  "value": "15.4.9 Pseudocode: Index Selection and B-tree Operations",
  "id": "1549-pseudocode-index-selection-and-b-tree-operations",
  "level": 4
}, {
  "value": "15.4.10 Dry Run Trace: Query with Compound Index",
  "id": "15410-dry-run-trace-query-with-compound-index",
  "level": 4
}, {
  "value": "15.4.11 C++ Index Operations",
  "id": "15411-c-index-operations",
  "level": 4
}, {
  "value": "15.4.12 Python Index Operations",
  "id": "15412-python-index-operations",
  "level": 4
}, {
  "value": "15.4.13 Complexity Analysis for Indexing",
  "id": "15413-complexity-analysis-for-indexing",
  "level": 4
}, {
  "value": "15.4.14 Advantages &amp; Disadvantages of Each Index Type",
  "id": "15414-advantages--disadvantages-of-each-index-type",
  "level": 4
}, {
  "value": "15.4.15 Edge Cases in Indexing",
  "id": "15415-edge-cases-in-indexing",
  "level": 4
}, {
  "value": "15.5 Aggregation Pipeline",
  "id": "155-aggregation-pipeline",
  "level": 3
}, {
  "value": "15.5.1 Aggregation Pipeline Stages Reference",
  "id": "1551-aggregation-pipeline-stages-reference",
  "level": 4
}, {
  "value": "15.5.2 Key Stages → Detailed Examples",
  "id": "1552-key-stages--detailed-examples",
  "level": 4
}, {
  "value": "15.5.3 Aggregation Pipeline vs SQL Reference Table",
  "id": "1553-aggregation-pipeline-vs-sql-reference-table",
  "level": 4
}, {
  "value": "15.5.4 Numbered Steps: Aggregation Pipeline Execution",
  "id": "1554-numbered-steps-aggregation-pipeline-execution",
  "level": 4
}, {
  "value": "15.5.5 Pseudocode: Aggregation Pipeline Engine",
  "id": "1555-pseudocode-aggregation-pipeline-engine",
  "level": 4
}, {
  "value": "15.5.6 Dry Run Trace: Aggregation Pipeline Stages",
  "id": "1556-dry-run-trace-aggregation-pipeline-stages",
  "level": 4
}, {
  "value": "15.5.7 C++ Aggregation Pipeline",
  "id": "1557-c-aggregation-pipeline",
  "level": 4
}, {
  "value": "15.5.8 Python Aggregation Pipeline",
  "id": "1558-python-aggregation-pipeline",
  "level": 4
}, {
  "value": "15.5.9 Complexity Analysis for Aggregation Pipeline",
  "id": "1559-complexity-analysis-for-aggregation-pipeline",
  "level": 4
}, {
  "value": "15.5.10 Advantages &amp; Disadvantages of Aggregation Pipeline",
  "id": "15510-advantages--disadvantages-of-aggregation-pipeline",
  "level": 4
}, {
  "value": "15.5.11 Edge Cases in Aggregation Pipeline",
  "id": "15511-edge-cases-in-aggregation-pipeline",
  "level": 4
}, {
  "value": "15.6 Replication",
  "id": "156-replication",
  "level": 3
}, {
  "value": "15.6.1 Replica Set Overview",
  "id": "1561-replica-set-overview",
  "level": 4
}, {
  "value": "15.6.2 Replica Set Components",
  "id": "1562-replica-set-components",
  "level": 4
}, {
  "value": "15.6.3 Replica Set Election Process → Numbered Steps",
  "id": "1563-replica-set-election-process--numbered-steps",
  "level": 4
}, {
  "value": "15.6.4 Dry Run Trace: Replica Set Failover",
  "id": "1564-dry-run-trace-replica-set-failover",
  "level": 4
}, {
  "value": "15.6.5 Numbered Steps: Oplog Replication",
  "id": "1565-numbered-steps-oplog-replication",
  "level": 4
}, {
  "value": "15.6.6 Read Preference Options",
  "id": "1566-read-preference-options",
  "level": 4
}, {
  "value": "15.6.7 C++ Replication Setup",
  "id": "1567-c-replication-setup",
  "level": 4
}, {
  "value": "15.6.8 Python Replication Configuration",
  "id": "1568-python-replication-configuration",
  "level": 4
}, {
  "value": "15.6.9 Complexity Analysis for Replication",
  "id": "1569-complexity-analysis-for-replication",
  "level": 4
}, {
  "value": "15.6.10 Advantages &amp; Disadvantages of Replication",
  "id": "15610-advantages--disadvantages-of-replication",
  "level": 4
}, {
  "value": "15.6.11 Edge Cases in Replication",
  "id": "15611-edge-cases-in-replication",
  "level": 4
}, {
  "value": "15.7 Sharding",
  "id": "157-sharding",
  "level": 3
}, {
  "value": "15.7.1 Sharding Architecture",
  "id": "1571-sharding-architecture",
  "level": 4
}, {
  "value": "15.7.2 Shard Key Selection → Detailed Analysis",
  "id": "1572-shard-key-selection--detailed-analysis",
  "level": 4
}, {
  "value": "15.7.3 Hashed vs Ranged Sharding → Comparison",
  "id": "1573-hashed-vs-ranged-sharding--comparison",
  "level": 4
}, {
  "value": "15.7.4 Numbered Steps: Shard Routing for a Query",
  "id": "1574-numbered-steps-shard-routing-for-a-query",
  "level": 4
}, {
  "value": "15.7.5 Dry Run Trace: Shard Routing with Chunk Migration",
  "id": "1575-dry-run-trace-shard-routing-with-chunk-migration",
  "level": 4
}, {
  "value": "15.7.6 Pseudocode: Shard Routing Engine",
  "id": "1576-pseudocode-shard-routing-engine",
  "level": 4
}, {
  "value": "15.7.7 C++ Sharding Operations",
  "id": "1577-c-sharding-operations",
  "level": 4
}, {
  "value": "15.7.8 Python Sharding Operations",
  "id": "1578-python-sharding-operations",
  "level": 4
}, {
  "value": "15.7.9 Complexity Analysis for Sharding",
  "id": "1579-complexity-analysis-for-sharding",
  "level": 4
}, {
  "value": "15.7.10 Advantages &amp; Disadvantages of Sharding",
  "id": "15710-advantages--disadvantages-of-sharding",
  "level": 4
}, {
  "value": "15.7.11 Edge Cases in Sharding",
  "id": "15711-edge-cases-in-sharding",
  "level": 4
}, {
  "value": "15.8 MongoDB vs RDBMS → Comprehensive Comparison",
  "id": "158-mongodb-vs-rdbms--comprehensive-comparison",
  "level": 3
}, {
  "value": "15.8.1 When to Choose MongoDB",
  "id": "1581-when-to-choose-mongodb",
  "level": 4
}, {
  "value": "15.8.2 When Choose RDBMS Over MongoDB",
  "id": "1582-when-choose-rdbms-over-mongodb",
  "level": 4
}, {
  "value": "15.8.3 Performance Comparison (General Benchmarks)",
  "id": "1583-performance-comparison-general-benchmarks",
  "level": 4
}, {
  "value": "15.9 MongoDB Atomicity and Transactions",
  "id": "159-mongodb-atomicity-and-transactions",
  "level": 3
}, {
  "value": "15.9.1 Document-Level Atomicity",
  "id": "1591-document-level-atomicity",
  "level": 4
}, {
  "value": "15.9.2 Multi-Document Transactions (MongoDB 4.0+)",
  "id": "1592-multi-document-transactions-mongodb-40",
  "level": 4
}, {
  "value": "15.10 Interview Corner",
  "id": "1510-interview-corner",
  "level": 3
}, {
  "value": "Q1: When would you choose MongoDB over a relational database?",
  "id": "q1-when-would-you-choose-mongodb-over-a-relational-database",
  "level": 4
}, {
  "value": "Q2: How do you design a good shard key?",
  "id": "q2-how-do-you-design-a-good-shard-key",
  "level": 4
}, {
  "value": "Q3: Aggregation Pipeline vs Map-Reduce → which to use?",
  "id": "q3-aggregation-pipeline-vs-map-reduce--which-to-use",
  "level": 4
}, {
  "value": "Q4: Explain MongoDB transactions (4.0+). When should you NOT use them?",
  "id": "q4-explain-mongodb-transactions-40-when-should-you-not-use-them",
  "level": 4
}, {
  "value": "Q5: How does MongoDB ensure data durability in a replica set?",
  "id": "q5-how-does-mongodb-ensure-data-durability-in-a-replica-set",
  "level": 4
}, {
  "value": "Q6: What causes the &quot;N+1 problem&quot; in MongoDB and how to avoid it?",
  "id": "q6-what-causes-the-n1-problem-in-mongodb-and-how-to-avoid-it",
  "level": 4
}, {
  "value": "Q7: How do you handle schema migration in MongoDB?",
  "id": "q7-how-do-you-handle-schema-migration-in-mongodb",
  "level": 4
}, {
  "value": "Q8: What is the ESR (Equality-Sort-Range) rule for compound indexes?",
  "id": "q8-what-is-the-esr-equality-sort-range-rule-for-compound-indexes",
  "level": 4
}, {
  "value": "Q9: Difference between MongoDB and traditional database scaling?",
  "id": "q9-difference-between-mongodb-and-traditional-database-scaling",
  "level": 4
}, {
  "value": "Q10: How does MongoDB handle full-text search differently from Elasticsearch?",
  "id": "q10-how-does-mongodb-handle-full-text-search-differently-from-elasticsearch",
  "level": 4
}, {
  "value": "15.11 Applications in Real Systems",
  "id": "1511-applications-in-real-systems",
  "level": 3
}, {
  "value": "15.11.1 MongoDB Atlas (Managed Cloud)",
  "id": "15111-mongodb-atlas-managed-cloud",
  "level": 4
}, {
  "value": "15.11.2 IoT / Time-Series Applications",
  "id": "15112-iot--time-series-applications",
  "level": 4
}, {
  "value": "15.11.3 Content Management Systems",
  "id": "15113-content-management-systems",
  "level": 4
}, {
  "value": "15.11.4 Gaming Leaderboards",
  "id": "15114-gaming-leaderboards",
  "level": 4
}, {
  "value": "15.12 Schema Design Best Practices",
  "id": "1512-schema-design-best-practices",
  "level": 3
}, {
  "value": "15.12.1 Embedding vs. Referencing → Decision Table",
  "id": "15121-embedding-vs-referencing--decision-table",
  "level": 4
}, {
  "value": "15.12.2 Design Principles → Numbered",
  "id": "15122-design-principles--numbered",
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
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
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
  "value": "15.8 TypeScript MongoDB Query Builder &amp; Aggregation Pipeline",
  "id": "158-typescript-mongodb-query-builder--aggregation-pipeline",
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
        id: "chapter-15-mongodb",
        children: "Chapter 15: MongoDB"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/14-nosql",
          children: "Chapter 14: NoSQL"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/16-redis",
          children: "Chapter 16: Redis"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand MongoDB's document data model and BSON format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform CRUD operations using MongoDB Query Language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and use indexes for query optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build aggregation pipelines for data analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain replication and sharding for high availability and scaling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply best practices for schema design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare MongoDB with RDBMS for architectural decisions"
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
              children: "Document Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-like documents with embedded arrays and nested objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for read patterns → embed what's accessed together"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich query operators ($match, $group, $sort, $lookup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use aggregation pipeline for multi-stage transformations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing in MongoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree indexes: single, compound, text, geospatial, TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index fields used in query filters, sort, and join conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary-secondary with automatic failover via election"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy with at least 3 voting replica nodes for HA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sharding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal partition across shard keys with mongos routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose shard key with high cardinality to avoid hotspots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation Pipeline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage-based data processing ($match → $group → $sort → $project)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push $match early to reduce data flowing through pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level atomic operations in MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use embedded documents for transactional consistency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Client Request] --> B[MongoS Router]\n    B --> C[Config Servers]\n    B --> D[Shard 1] & E[Shard 2] & F[Shard N]\n    D & E & F --> G[Primary]\n    G --> H[Secondary 1] & I[Secondary 2]\n    H & I --> J[Read Preferences]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch15-mongodb.png",
        alt: "MongoDB Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-mongodb-overview",
      children: "15.1 MongoDB Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1511-what-is-mongodb",
      children: "15.1.1 What is MongoDB?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MongoDB is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "document-oriented NoSQL database"
      }), " released in 2009 by MongoDB Inc. (originally 10gen). It stores data as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BSON (Binary JSON)"
      }), " documents in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "collections"
      }), " within ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "databases"
      }), ". Unlike relational databases that require predefined schemas with tables, rows, and columns, MongoDB uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "schema-flexible"
      }), " document model where each document can have a different structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Terminology Mapping:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical container for collections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group of related documents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row / Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual unit of data (BSON)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value pair within a document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique immutable identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data structure for fast lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY / JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage data processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replica Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-availability group of mongod instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal data split across servers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Filing Cabinet System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of MongoDB as a modern ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filing cabinet system"
      }), " where each drawer (database) contains folders (collections), and each folder contains individual forms (documents)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filing Cabinet"
        }), " → MongoDB Server"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drawer"
        }), " → Database (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecommerce"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analytics"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tabbed Folder"
        }), " → Collection (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "users"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "orders"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "products"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Form/Sheet"
        }), " → Document (a single JSON-like record)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Form Fields"
        }), " → Document Fields (name, age, email)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color-coded Tabs"
        }), " → Indexes (fast lookup by field)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Photo-copier"
        }), " → Replication (copies of the same data)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Room Expansion"
        }), " → Sharding (adding more cabinets)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each form (document) can have a different set of fields. One user form might have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "email"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "phone"
      }), " while another might have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "email"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "twitter_handle"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "address"
      }), ". In a relational database, you'd need nullable columns or separate tables. In MongoDB, you just include the fields that apply."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1512-key-concepts--detailed",
      children: "15.1.2 Key Concepts → Detailed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Use/switch to a database (created lazily on first document insert)\nuse ecommerce\n\n// Show all databases\nshow dbs\n\n// Database names must be all lowercase, max 64 bytes\n// Reserved: admin, local, config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Collection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Collections are created implicitly on first insert\ndb.createCollection(\"users\", {\n    capped: true,      // fixed-size collection (circular buffer)\n    size: 100000,      // max size in bytes\n    max: 5000          // max document count\n})\n\n// Show collections\nshow collections\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// A document is a BSON object with key-value pairs\n// Maximum document size: 16MB (BSON limit)\n// Nested depth: max 100 levels\n{\n    _id: ObjectId(\"507f1f77bcf86cd799439011\"),  // unique, immutable\n    name: \"Alice Chen\",\n    email: \"alice@example.com\",\n    age: 28,\n    address: {\n        street: \"123 Main St\",\n        city: \"San Francisco\",\n        state: \"CA\",\n        zip: \"94102\"\n    },\n    interests: [\"reading\", \"hiking\", \"photography\"],\n    metadata: {                                // embedded sub-object\n        created_at: ISODate(\"2024-01-15T10:30:00Z\"),\n        last_login: ISODate(\"2024-03-20T08:15:00Z\"),\n        login_count: 47\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1513-bson-format-in-depth",
      children: "15.1.3 BSON Format in Depth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BSON (Binary JSON)"
      }), " is the binary-encoded serialization of JSON-like documents that MongoDB uses internally. BSON extends JSON with additional data types and is designed to be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "traversable"
      }), " (each element includes type and length information, unlike JSON which must be scanned character by character)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BSON Type System:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "BSON Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alias"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JSON Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14159"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"hello\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{a: 1}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[1, 2, 3]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BinData(0, \"SGVsbG8=\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ObjectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ObjectId(\"507f1f77bcf86cd799439011\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ISODate(\"2024-01-01\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regular Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/pattern/i"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Code(\"function(x) { return x; }\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NumberInt(42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Timestamp(0, 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NumberLong(4294967295)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decimal128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NumberDecimal(\"10.99\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MinKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MaxKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BSON Binary Encoding Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JSON document ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{\"hello\": \"world\"}"
      }), " in BSON is encoded as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\\x16\\x00\\x00\\x00           // total document size (22 bytes)\n\\x02                       // type: String (0x02)\nhello\\x00                  // field name (C-string: null-terminated)\n\\x06\\x00\\x00\\x00           // string length (6 bytes)\nworld\\x00                  // string value (C-string)\n\\x00                       // terminating null byte for document\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each field in BSON encodes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " (1 byte) → identifies the BSON data type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Field name"
        }), " (C-string, null-terminated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value"
        }), " → type-specific encoding with length prefix for variable-length types"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This makes BSON ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "traversable"
      }), " → you can skip unknown fields without parsing them, unlike JSON where you must parse the entire structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1514-bson-vs-json-comparison",
      children: "15.1.4 BSON vs JSON Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BSON"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JSON"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text (UTF-8/UTF-16)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20+ types incl. Date, ObjectId, Binary, Decimal128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 types: string, number, object, array, boolean, null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More compact for binary data, less compact for simple strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact for text-only data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parsing speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast → type and length pre-encoded, traversable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower → must scan and parse character by character"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports schema-less documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-less"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numeric precision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int32, Int64, Double, Decimal128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single \"number\" type (IEEE-754 double precision)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Date handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native Date type (milliseconds since epoch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must store as string or number convention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native Binary type (Base64-encoded or raw)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must Base64-encode into string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not human-readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully human-readable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower for complex documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher for documents with binary/numeric data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designed for efficient index creation on any field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be parsed to index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ObjectId support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native 12-byte ObjectId type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use string representation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When does BSON matter in practice?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traversability"
        }), ": BSON lets MongoDB skip unindexed fields without scanning them. This makes queries faster than a JSON-based database."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ObjectId"
        }), ": BSON's native ObjectId (12 bytes) embeds a 4-byte timestamp + 5-byte random value + 3-byte counter, enabling distributed ID generation without a central coordinator."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decimal128"
        }), ": For financial applications needing exact precision, BSON's Decimal128 avoids IEEE-754 floating-point rounding errors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1515-numbered-steps-how-mongodb-stores-and-retrieves-documents",
      children: "15.1.5 Numbered Steps: How MongoDB Stores and Retrieves Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step document insertion:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Client connects to mongos or primary mongod\n        → mongos:port (default 27017)\nSTEP 2: Client sends insert command { insert: \"users\", documents: [...] }\nSTEP 3: Server validates document size ≤ 16MB BSON limit\n        → If exceeded, returns \"BSON object too large\" error\nSTEP 4: Server generates _id if missing (ObjectId generation)\n        → ObjectId = 4-byte timestamp + 5-byte random + 3-byte counter\nSTEP 5: Server serializes document to BSON binary format\nSTEP 6: WiredTiger storage engine writes to journal (write-ahead log)\nSTEP 7: Document is written to data files in memory-mapped storage\nSTEP 8: If indexed fields exist, B-tree index entries are updated\n        → Each index key points to the document's RecordId\nSTEP 9: Acknowledgment sent back to client (write concern satisfied)\nSTEP 10: If part of a replica set, oplog entry is created for replication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step document retrieval:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Client sends find command { find: \"users\", filter: { email: \"...\" } }\nSTEP 2: Query planner analyzes the filter and available indexes\n        → Checks viable indexes via IndexStats and query shape\nSTEP 3: If matching index exists, index scan is performed on B-tree\n        → Navigates B-tree from root → internal nodes → leaf\nSTEP 4: Index leaf returns RecordId → data file offset\nSTEP 5: Document is fetched from storage engine using RecordId\nSTEP 6: If no matching index, collection scan (COLLSCAN) is performed\n        → Scans every BSON document in collection sequentially\nSTEP 7: BSON document is deserialized into MongoDB's internal representation\nSTEP 8: Projection is applied (if specified)\n        → Only requested fields are materialized\nSTEP 9: Document is serialized to BSON for network transport\nSTEP 10: Client receives response with result set\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1516-pseudocode-document-storage-engine-operations",
      children: "15.1.6 Pseudocode: Document Storage Engine Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION InsertDocument(collection, document):\n    IF document.size > 16MB:\n        RAISE \"BSON object too large\"\n    \n    IF document._id is NULL:\n        document._id = GenerateObjectId()\n    \n    bson_bytes = SerializeToBSON(document)\n    \n    // WiredTiger storage engine\n    txn = BeginTransaction()\n    \n    // Write to journal first (write-ahead logging)\n    journal_entry = { type: \"insert\", collection: collection.name, \n                      _id: document._id, data: bson_bytes }\n    WriteJournal(journal_entry)\n    \n    // Allocate storage space\n    record_id = StorageEngine.AllocateRecord(collection.id, bson_bytes.length)\n    StorageEngine.WriteData(record_id, bson_bytes)\n    \n    // Update indexes\n    FOR EACH index IN collection.indexes:\n        key_value = ExtractIndexKey(document, index.keyPattern)\n        BTreeInsert(index.tree, key_value, record_id)\n    \n    // Oplog for replication (if replica set)\n    IF isReplicaSet:\n        CreateOplogEntry(\"i\", collection.fullName, document._id, document)\n    \n    CommitTransaction(txn)\n    RETURN document._id\n\nFUNCTION FindDocument(collection, filter, projection):\n    query_shape = AnalyzeQuery(filter)\n    best_index = QueryPlanner.SelectIndex(collection.indexes, query_shape)\n    \n    IF best_index is not NULL:\n        // Index scan\n        index_keys = ExtractIndexKeysFromFilter(filter, best_index.keyPattern)\n        record_ids = BTreeSearch(best_index.tree, index_keys)\n    ELSE:\n        // Collection scan\n        record_ids = StorageEngine.ScanAllRecords(collection.id)\n    \n    results = []\n    FOR EACH record_id IN record_ids:\n        bson_bytes = StorageEngine.ReadData(record_id)\n        document = DeserializeBSON(bson_bytes)\n        \n        IF projection not empty:\n            document = ApplyProjection(document, projection)\n        \n        results.APPEND(document)\n        IF results.size >= limit:\n            BREAK\n    \n    RETURN results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1517-complexity-analysis",
      children: "15.1.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Insert (no index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appending to storage is constant time; d = document size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Insert (k indexes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d + k * log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each index requires B-tree insertion O(log n); k indexes → O(k log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Find by _id (hashed index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "_id has unique hashed index → direct lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Find by indexed field (equality)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree traversal from root to leaf: height = log_fanout(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Find by indexed field (range)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) to find start + O(m) to scan m results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Find by compound index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as single index → compound index is one B-tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collection scan (no index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans all n documents sequentially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation $match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) or O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) if no index; O(log n + m) if indexed filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation $group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(g)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans all n docs; stores g groups in hash table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation $sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory or external sort of n documents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index creation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(i)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans all n documents, inserts into B-tree; i = index size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why B-tree in MongoDB?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MongoDB uses B-trees (not B+ trees like MySQL) because B-trees store values at every node, making single-document lookups faster when the key is found at a non-leaf level."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The fanout factor (≈ 100-500 keys per node for 8KB pages) keeps tree height at 3-4 levels for billions of documents."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1518-advantages--disadvantages-of-mongodb-document-model",
      children: "15.1.8 Advantages & Disadvantages of MongoDB Document Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema flexibility"
            }), ": Different documents can have different fields"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No built-in referential integrity"
            }), ": No foreign key constraints"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural object mapping"
            }), ": Documents map directly to application objects (JSON → object)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data duplication"
            }), ": Embedding leads to data redundancy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Reduced joins"
            }), ": Related data can be embedded in one document"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "16MB document limit"
            }), ": Large blobs must be stored via GridFS"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast reads"
            }), ": Single document read fetches all related data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex updates"
            }), ": Updating data in multiple embedded documents is expensive"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Horizontal scaling"
            }), ": Built-in sharding for distributed data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Write amplification"
            }), ": Multi-index updates increase write cost"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rich query language"
            }), ": Aggregation pipeline, geospatial, text search"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No SQL"
            }), ": Different query paradigm → learning curve for SQL developers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High availability"
            }), ": Replica sets with automatic failover"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory pressure"
            }), ": Working set must fit in RAM for best performance"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1519-edge-cases-in-mongodb-document-model",
      children: "15.1.9 Edge Cases in MongoDB Document Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document exceeds 16MB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert fails with \"BSON object too large\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use GridFS for files > 16MB; reference large data via URL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deeply nested documents ( > 100 levels)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query performance degrades; update notation becomes complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten schema; reference sub-objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arrays growing unboundedly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document size increases; write performance degrades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max ~100-200 embedded array items; move to separate collection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing _id field"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB automatically generates ObjectId; can cause confusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always set _id explicitly if idempotency required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Field names as data"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using dynamic field names (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ \"2024-01\": value }"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store as array values, not field names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Over-embedding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading full document just to access one field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate collection with reference; use projection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty field names"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB disallows empty string field names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate field names before insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicated _id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E11000 duplicate key error on _id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use upsert with unique identifier, or catch error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-document-model-and-schema-design",
      children: "15.2 Document Model and Schema Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1521-embedding-vs-referencing--decision-framework",
      children: "15.2.1 Embedding vs Referencing → Decision Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embedding"
        }), ": Like a printed catalog page that shows the product photo, description, and price all on the same page. You see everything in one glance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Referencing"
        }), ": Like a library catalog card that says \"see Volume 3, Page 142.\" You need an extra trip to get the full content."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Embed (One-to-Few):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// GOOD: Addresses are few, accessed with user, rarely change independently\n{\n    _id: ObjectId(\"...\"),\n    name: \"Alice\",\n    addresses: [\n        { label: \"home\", street: \"123 Main St\", city: \"SF\" },\n        { label: \"work\", street: \"456 Market St\", city: \"SF\" }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Reference (One-to-Many / Many-to-Many):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// GOOD: Orders are many, grow unbounded, accessed independently\ndb.users.insertOne({ _id: ObjectId(\"user1\"), name: \"Alice\" })\n\ndb.orders.insertMany([\n    { user_id: ObjectId(\"user1\"), total: 99.99, items: 3 },\n    { user_id: ObjectId(\"user1\"), total: 149.99, items: 5 }\n])\n// Query: db.orders.find({ user_id: ObjectId(\"user1\") }).sort({ created_at: -1 })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1522-mongodb-sample-documents-with-sample-data",
      children: "15.2.2 MongoDB Sample Documents with Sample Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Users Collection (Sample Data):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "db.users.insertMany([\n    {\n        _id: ObjectId(\"64a1b2c3d4e5f60001000001\"),\n        name: \"Alice Chen\",\n        email: \"alice@example.com\",\n        age: 28,\n        address: { street: \"123 Main St\", city: \"San Francisco\", state: \"CA\" },\n        interests: [\"reading\", \"hiking\", \"photography\"],\n        metadata: { created_at: ISODate(\"2024-01-15T10:30:00Z\"), login_count: 47 }\n    },\n    {\n        _id: ObjectId(\"64a1b2c3d4e5f60001000002\"),\n        name: \"Bob Smith\",\n        email: \"bob@example.com\",\n        age: 35,\n        address: { street: \"456 Oak Ave\", city: \"New York\", state: \"NY\" },\n        interests: [\"gaming\", \"cooking\"],\n        metadata: { created_at: ISODate(\"2024-02-01T08:00:00Z\"), login_count: 12 }\n    },\n    {\n        _id: ObjectId(\"64a1b2c3d4e5f60001000003\"),\n        name: \"Carol Davis\",\n        email: \"carol@example.com\",\n        age: 42,\n        address: { street: \"789 Pine Rd\", city: \"Austin\", state: \"TX\" },\n        interests: [\"yoga\", \"reading\", \"travel\"],\n        metadata: { created_at: ISODate(\"2024-01-20T14:00:00Z\"), login_count: 89 }\n    },\n    {\n        _id: ObjectId(\"64a1b2c3d4e5f60001000004\"),\n        name: \"Dave Wilson\",\n        email: \"dave@example.com\",\n        age: 29,\n        address: { street: \"321 Elm St\", city: \"San Francisco\", state: \"CA\" },\n        interests: [\"photography\", \"cycling\"],\n        metadata: { created_at: ISODate(\"2024-03-01T09:00:00Z\"), login_count: 5 }\n    },\n    {\n        _id: ObjectId(\"64a1b2c3d4e5f60001000005\"),\n        name: \"Eve Johnson\",\n        email: \"eve@example.com\",\n        age: 31,\n        address: { street: \"654 Birch Ln\", city: \"Seattle\", state: \"WA\" },\n        interests: [\"hiking\", \"photography\", \"cooking\"],\n        metadata: { created_at: ISODate(\"2024-01-10T11:00:00Z\"), login_count: 34 }\n    }\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// db.users.find({ \"address.city\": \"San Francisco\" }, { name: 1, age: 1 })\n// Output:\n[\n    { _id: ObjectId(\"64a1b2c3d4e5f60001000001\"), name: \"Alice Chen\", age: 28 },\n    { _id: ObjectId(\"64a1b2c3d4e5f60001000004\"), name: \"Dave Wilson\", age: 29 }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1523-c-implementation-mongodb-c-driver",
      children: "15.2.3 C++ Implementation (MongoDB C++ Driver)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <bsoncxx/builder/stream/document.hpp>\n#include <bsoncxx/json.hpp>\n#include <mongocxx/client.hpp>\n#include <mongocxx/instance.hpp>\n#include <mongocxx/uri.hpp>\n#include <iostream>\n\nusing bsoncxx::builder::stream::document;\nusing bsoncxx::builder::stream::open_document;\nusing bsoncxx::builder::stream::close_document;\nusing bsoncxx::builder::stream::open_array;\nusing bsoncxx::builder::stream::close_array;\nusing bsoncxx::builder::stream::finalize;\n\nclass MongoDBManager {\nprivate:\n    mongocxx::instance instance{};\n    mongocxx::client client{mongocxx::uri{\"mongodb://localhost:27017\"}};\n    mongocxx::database db;\n\npublic:\n    MongoDBManager(const std::string& dbName) : db(client[dbName]) {}\n\n    // Insert a document\n    bsoncxx::document::value insertUser(const std::string& name,\n                                        const std::string& email,\n                                        int age) {\n        auto doc = document{};\n        doc << \"name\" << name\n            << \"email\" << email\n            << \"age\" << age\n            << \"created_at\" << bsoncxx::types::b_date{\n                   std::chrono::system_clock::now()};\n\n        auto collection = db[\"users\"];\n        auto result = collection.insert_one(doc.view());\n\n        std::cout << \"Inserted _id: \"\n                  << result->inserted_id().get_oid().value.to_string()\n                  << std::endl;\n        return doc << finalize;\n    }\n\n    // Find documents with filter\n    void findUsersByAge(int minAge, int maxAge) {\n        auto collection = db[\"users\"];\n        auto filter = document{} << \"age\"\n                                 << open_document\n                                     << \"$gte\" << minAge\n                                     << \"$lte\" << maxAge\n                                 << close_document\n                              << finalize;\n\n        auto cursor = collection.find(filter.view());\n        for (auto&& doc : cursor) {\n            std::cout << bsoncxx::to_json(doc) << std::endl;\n        }\n    }\n\n    // Update with $set\n    void updateUserEmail(const std::string& oldEmail,\n                         const std::string& newEmail) {\n        auto collection = db[\"users\"];\n        auto filter = document{} << \"email\" << oldEmail << finalize;\n        auto update = document{} << \"$set\"\n                                 << open_document\n                                     << \"email\" << newEmail\n                                 << close_document\n                              << finalize;\n\n        auto result = collection.update_one(filter.view(), update.view());\n        std::cout << \"Matched: \" << result->matched_count()\n                  << \", Modified: \" << result->modified_count() << std::endl;\n    }\n\n    // Delete documents\n    void deleteUsersUnderAge(int age) {\n        auto collection = db[\"users\"];\n        auto filter = document{} << \"age\" << open_document\n                                 << \"$lt\" << age\n                                 << close_document\n                              << finalize;\n\n        auto result = collection.delete_many(filter.view());\n        std::cout << \"Deleted: \" << result->deleted_count() << std::endl;\n    }\n\n    // Aggregation pipeline\n    void aggregateUsersByCity() {\n        auto collection = db[\"users\"];\n        mongocxx::pipeline p{};\n\n        // $match: only active users with age >= 18\n        p.match(document{} << \"age\" << open_document\n                           << \"$gte\" << 18\n                           << close_document\n                        << finalize);\n\n        // $group: count by city\n        p.group(document{} << \"_id\" << \"$address.city\"\n                           << \"count\" << open_document\n                               << \"$sum\" << 1\n                           << close_document\n                        << finalize);\n\n        // $sort: descending by count\n        p.sort(document{} << \"count\" << -1 << finalize);\n\n        auto cursor = collection.aggregate(p);\n        for (auto&& doc : cursor) {\n            std::cout << bsoncxx::to_json(doc) << std::endl;\n        }\n    }\n};\n\nint main() {\n    MongoDBManager mgr(\"ecommerce\");\n\n    mgr.insertUser(\"Alice Chen\", \"alice@example.com\", 28);\n    mgr.insertUser(\"Bob Smith\", \"bob@example.com\", 35);\n\n    mgr.findUsersByAge(25, 40);\n    mgr.updateUserEmail(\"bob@example.com\", \"bob.new@example.com\");\n    mgr.aggregateUsersByCity();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1524-python-pymongo-implementation",
      children: "15.2.4 Python (PyMongo) Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nMongoDB CRUD Operations with PyMongo\nInstall: pip install pymongo\n\"\"\"\nimport pymongo\nfrom pymongo import MongoClient\nfrom pymongo.errors import DuplicateKeyError, BulkWriteError\nfrom datetime import datetime, timezone\nfrom typing import Optional\n\n\nclass MongoDBManager:\n    \"\"\"Production-grade MongoDB wrapper with full CRUD and aggregation.\"\"\"\n\n    def __init__(self, uri: str = \"mongodb://localhost:27017\",\n                 db_name: str = \"ecommerce\"):\n        self.client = MongoClient(uri)\n        self.db = self.client[db_name]\n\n    def insert_user(self, name: str, email: str, age: int,\n                    address: Optional[dict] = None,\n                    interests: Optional[list] = None) -> str:\n        \"\"\"Insert a single user document. Returns the inserted _id.\"\"\"\n        doc = {\n            \"name\": name,\n            \"email\": email,\n            \"age\": age,\n            \"address\": address or {},\n            \"interests\": interests or [],\n            \"metadata\": {\n                \"created_at\": datetime.now(timezone.utc),\n                \"login_count\": 0\n            }\n        }\n        try:\n            result = self.db.users.insert_one(doc)\n            print(f\"Inserted _id: {result.inserted_id}\")\n            return str(result.inserted_id)\n        except DuplicateKeyError as e:\n            print(f\"Duplicate key error: {e}\")\n            raise\n\n    def find_users(self, filter_query: Optional[dict] = None,\n                   projection: Optional[dict] = None,\n                   limit: int = 0) -> list:\n        \"\"\"Find users with optional filter, projection, and limit.\"\"\"\n        filter_query = filter_query or {}\n        cursor = self.db.users.find(filter_query, projection).limit(limit)\n        return list(cursor)\n\n    def find_users_by_age_range(self, min_age: int, max_age: int) -> list:\n        \"\"\"Find users within an age range.\"\"\"\n        return self.find_users(\n            filter_query={\"age\": {\"$gte\": min_age, \"$lte\": max_age}},\n            projection={\"name\": 1, \"email\": 1, \"age\": 1, \"_id\": 0}\n        )\n\n    def update_user_email(self, old_email: str, new_email: str) -> int:\n        \"\"\"Update a user's email. Returns count of modified documents.\"\"\"\n        result = self.db.users.update_one(\n            {\"email\": old_email},\n            {\"$set\": {\"email\": new_email}}\n        )\n        print(f\"Matched: {result.matched_count}, Modified: {result.modified_count}\")\n        return result.modified_count\n\n    def increment_login(self, user_email: str) -> None:\n        \"\"\"Atomically increment login counter.\"\"\"\n        self.db.users.update_one(\n            {\"email\": user_email},\n            {\"$inc\": {\"metadata.login_count\": 1}}\n        )\n\n    def add_interest(self, user_email: str, interest: str) -> None:\n        \"\"\"Add interest to array (no duplicates).\"\"\"\n        self.db.users.update_one(\n            {\"email\": user_email},\n            {\"$addToSet\": {\"interests\": interest}}\n        )\n\n    def remove_interest(self, user_email: str, interest: str) -> None:\n        \"\"\"Remove interest from array.\"\"\"\n        self.db.users.update_one(\n            {\"email\": user_email},\n            {\"$pull\": {\"interests\": interest}}\n        )\n\n    def delete_users_under_age(self, age: int) -> int:\n        \"\"\"Delete all users under a given age.\"\"\"\n        result = self.db.users.delete_many({\"age\": {\"$lt\": age}})\n        print(f\"Deleted: {result.deleted_count}\")\n        return result.deleted_count\n\n    def aggregate_users_by_city(self) -> list:\n        \"\"\"Aggregate: count users per city, sorted descending.\"\"\"\n        pipeline = [\n            {\"$match\": {\"age\": {\"$gte\": 18}}},\n            {\"$group\": {\n                \"_id\": \"$address.city\",\n                \"count\": {\"$sum\": 1},\n                \"avg_age\": {\"$avg\": \"$age\"}\n            }},\n            {\"$sort\": {\"count\": -1}},\n            {\"$project\": {\n                \"city\": \"$_id\",\n                \"count\": 1,\n                \"avg_age\": {\"$round\": [\"$avg_age\", 1]},\n                \"_id\": 0\n            }}\n        ]\n        return list(self.db.users.aggregate(pipeline))\n\n    def create_indexes(self) -> None:\n        \"\"\"Create recommended indexes.\"\"\"\n        self.db.users.create_index([(\"email\", pymongo.ASCENDING)],\n                                   unique=True)\n        self.db.users.create_index([(\"age\", pymongo.ASCENDING)])\n        self.db.users.create_index([(\"interests\", pymongo.ASCENDING)])\n        self.db.users.create_index([\n            (\"address.city\", pymongo.ASCENDING),\n            (\"age\", pymongo.DESCENDING)\n        ])\n        print(\"Indexes created.\")\n\n    def close(self):\n        self.client.close()\n\n\n# Usage example\nif __name__ == \"__main__\":\n    mgr = MongoDBManager()\n\n    # Insert users\n    mgr.insert_user(\"Alice Chen\", \"alice@example.com\", 28,\n                    {\"street\": \"123 Main St\", \"city\": \"San Francisco\", \"state\": \"CA\"},\n                    [\"reading\", \"hiking\", \"photography\"])\n    mgr.insert_user(\"Bob Smith\", \"bob@example.com\", 35,\n                    {\"street\": \"456 Oak Ave\", \"city\": \"New York\", \"state\": \"NY\"},\n                    [\"gaming\", \"cooking\"])\n\n    # Find users by age\n    users = mgr.find_users_by_age_range(25, 40)\n    print(\"Users aged 25-40:\", users)\n\n    # Update email\n    mgr.update_user_email(\"bob@example.com\", \"bob.new@example.com\")\n\n    # Atomic increment\n    mgr.increment_login(\"alice@example.com\")\n\n    # Aggregation\n    city_stats = mgr.aggregate_users_by_city()\n    print(\"Users per city:\", city_stats)\n\n    # Create indexes\n    mgr.create_indexes()\n    mgr.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1525-dry-run-trace-insert-with-index-updates",
      children: "15.2.5 Dry Run Trace: Insert with Index Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Insert user \"Alice Chen\" into an empty ", (0,jsx_runtime.jsx)(_components.code, {
        children: "users"
      }), " collection with a unique index on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "email"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INPUT: db.users.insertOne({ name: \"Alice\", email: \"alice@example.com\", age: 28 })\n\nTRACE:\n+--------+------------------------------------------+------------------+\n| Step   | Operation                                | State            |\n+--------+------------------------------------------+------------------+\n| 1      | Receive insert command                   | Pending          |\n| 2      | Validate document (size ≤ 16MB)          | 112 bytes → OK   |\n| 3      | Generate _id if missing                  | ObjectId(64a1..) |\n| 4      | Serialize to BSON                        | Binary blob      |\n| 5      | WiredTiger: begin transaction            | Txn#1 started    |\n| 6      | Write journal entry (write-ahead log)    | Journal synced   |\n| 7      | Allocate storage RecordId                | RID=1001         |\n| 8      | Write BSON data at RecordId=1001         | Data written     |\n| 9      | Update _id index (primary key, unique)   | B-tree insert    |\n| 10     | Update email index (unique)              | B-tree insert    |\n| 11     | Update age index (non-unique)            | B-tree insert    |\n| 12     | WiredTiger: commit transaction           | Txn#1 committed  |\n| 13     | Create oplog entry                       | \"i\" type logged  |\n| 14     | Return { acknowledged: true, insertedId: | Response sent    |\n|        |   ObjectId(\"64a1..\") }                   |                  |\n+--------+------------------------------------------+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If the email index detects a duplicate:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+--------+------------------------------------------+------------------+\n| 9a     | Email index insert → key exists          | E11000 error     |\n| 10a    | WiredTiger: abort transaction            | Txn#1 rolled back|\n| 11a    | Return { acknowledged: false, error:     | Error response   |\n|        |   \"E11000 duplicate key\" }               |                  |\n+--------+------------------------------------------+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-crud-operations--complete-reference",
      children: "15.3 CRUD Operations → Complete Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1531-crud-operations-summary-table",
      children: "15.3.1 CRUD Operations Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MQL Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Atomic?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Single"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insertOne()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT INTO ... VALUES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert one document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + O(k log n) for k indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Many"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insertMany()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT INTO ... VALUES (...), (...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert multiple documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered: full atomic; Unordered: per-doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) + O(mk log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "find()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT ... FROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query documents with filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) indexed, O(n) scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read One"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "findOne()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT ... LIMIT 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return first matching document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) indexed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "countDocuments()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count matching documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) with index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update Single"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "updateOne()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE ... WHERE ... LIMIT 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update first matching document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) find + O(k log n) reindex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update Many"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "updateMany()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE ... WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update all matching documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch (not multi-doc atomic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "replaceOne()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE ... SET all columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace entire document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete Single"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deleteOne()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE ... LIMIT 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete first matching document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) find + O(k log n) index cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete Many"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deleteMany()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE FROM ... WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete all matching documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch (not multi-doc atomic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bulk Write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bulkWrite()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch INSERT/UPDATE/DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute mixed operations in batch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable ordered/unordered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1532-create-insert--detailed-with-variations",
      children: "15.3.2 Create (Insert) → Detailed with Variations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Adding a new patient form to the filing cabinet. You fill out the form (document) and place it in the patient folder (collection)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// === INSERT ONE ===\n// Insert a single document into the users collection\n// If the collection doesn't exist, MongoDB creates it implicitly\ndb.users.insertOne({\n    name: \"Alice Chen\",\n    email: \"alice@example.com\",\n    age: 28\n})\n// Output: { acknowledged: true, insertedId: ObjectId(\"64a1b2c3d4e5f60001000001\") }\n\n// === INSERT MANY ===\n// Insert multiple documents in one command (more efficient than individual inserts)\ndb.users.insertMany([\n    { name: \"Bob Smith\", email: \"bob@example.com\", age: 35 },\n    { name: \"Carol Davis\", email: \"carol@example.com\", age: 42 },\n    { name: \"Dave Wilson\", email: \"dave@example.com\", age: 29 }\n])\n// Output: { acknowledged: true, insertedIds: { \"0\": ObjectId(\"...\"), \"1\": ObjectId(\"...\"), \"2\": ObjectId(\"...\") } }\n\n// === INSERT WITH EXPLICIT _id ===\n// You can specify your own _id (must be unique in the collection)\ndb.users.insertOne({\n    _id: \"user_alice_001\",\n    name: \"Alice Chen\",\n    email: \"alice@example.com\"\n})\n// If _id \"user_alice_001\" already exists → E11000 duplicate key error\n\n// === INSERT WITH ORDERED FALSE ===\n// Continue inserting even if some documents fail\ndb.users.insertMany([\n    { _id: 1, name: \"Alice\" },\n    { _id: 1, name: \"Bob\" },    // This will fail (duplicate _id)\n    { _id: 2, name: \"Carol\" }\n], { ordered: false })\n// Output: Inserted 2 documents; error for duplicate _id. Carol is still inserted.\n\n// === INSERT WITH WRITE CONCERN ===\n// Wait for acknowledgment from majority of replica set members\ndb.users.insertOne(\n    { name: \"Critical\", email: \"critical@example.com\" },\n    { writeConcern: { w: \"majority\", j: true, wtimeout: 5000 } }\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1533-sample-data-for-crud-operations",
      children: "15.3.3 Sample Data for CRUD Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's establish sample data used throughout the CRUD examples:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Insert sample orders collection\ndb.orders.insertMany([\n    {\n        _id: ObjectId(\"64b1c2d3e4f5a60001000001\"),\n        customer_id: ObjectId(\"64a1b2c3d4e5f60001000001\"),\n        items: [\n            { product_id: ObjectId(\"64c1d2e3f4a5b60001000001\"), name: \"Laptop\", qty: 1, price: 1499.99 },\n            { product_id: ObjectId(\"64c1d2e3f4a5b60001000002\"), name: \"Mouse\", qty: 2, price: 24.99 }\n        ],\n        total: 1549.97,\n        status: \"delivered\",\n        shipping_address: { street: \"123 Main St\", city: \"San Francisco\", zip: \"94102\" },\n        created_at: ISODate(\"2024-03-15T10:30:00Z\"),\n        delivered_at: ISODate(\"2024-03-18T14:00:00Z\")\n    },\n    {\n        _id: ObjectId(\"64b1c2d3e4f5a60001000002\"),\n        customer_id: ObjectId(\"64a1b2c3d4e5f60001000002\"),\n        items: [\n            { product_id: ObjectId(\"64c1d2e3f4a5b60001000003\"), name: \"Desk Chair\", qty: 1, price: 399.99 }\n        ],\n        total: 399.99,\n        status: \"shipped\",\n        shipping_address: { street: \"456 Oak Ave\", city: \"New York\", zip: \"10001\" },\n        created_at: ISODate(\"2024-03-20T09:00:00Z\"),\n        delivered_at: null\n    },\n    {\n        _id: ObjectId(\"64b1c2d3e4f5a60001000003\"),\n        customer_id: ObjectId(\"64a1b2c3d4e5f60001000001\"),\n        items: [\n            { product_id: ObjectId(\"64c1d2e3f4a5b60001000004\"), name: \"Monitor\", qty: 1, price: 499.99 }\n        ],\n        total: 499.99,\n        status: \"pending\",\n        shipping_address: { street: \"123 Main St\", city: \"San Francisco\", zip: \"94102\" },\n        created_at: ISODate(\"2024-03-25T16:45:00Z\"),\n        delivered_at: null\n    }\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1534-read-query--query-operators-reference",
      children: "15.3.4 Read (Query) → Query Operators Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// === BASIC FILTERS ===\n\n// Equality\ndb.orders.find({ status: \"shipped\" })\n// Output: Returns order #2 (Bob's desk chair)\n\n// Comparison operators\ndb.orders.find({ total: { $gte: 500, $lt: 2000 } })\n// Output: Returns orders #1 ($1549.97) and #3 ($499.99 → no, $499.99 < 500)\n// Wait: $gte: 500 → $1499.99 and $1549.97 but $499.99 not included\n// Only order #1 ($1549.97)\n\n// $in and $nin\ndb.orders.find({ status: { $in: [\"shipped\", \"delivered\"] } })\n// Output: Returns orders #1 (delivered) and #2 (shipped)\n\n// $exists → check if field exists\ndb.orders.find({ delivered_at: { $exists: true } })\n// Output: Returns orders #1 (has delivered_at) and #2 (delivered_at is null but field exists)\n// Note: $exists checks for field presence, not null\n\n// $type → match by BSON type\ndb.orders.find({ delivered_at: { $type: \"date\" } })\n// Output: Returns order #1 only (delivered_at is Date; order #2 has null type)\n\n// === ARRAY QUERIES ===\n\n// Match exact array\ndb.orders.find({ \"items.name\": [\"Laptop\", \"Mouse\"] })\n// Note: This matches arrays with exactly these elements in this order\n\n// Array contains element\ndb.orders.find({ \"items.name\": \"Laptop\" })\n// Output: Returns order #1\n\n// Array with $elemMatch (multiple conditions on same array element)\ndb.orders.find({\n    items: { $elemMatch: { name: \"Laptop\", qty: 1 } }\n})\n// Output: Returns order #1 (exactly one item element matches both conditions)\n\n// Array length\ndb.orders.find({ \"items\": { $size: 2 } })\n// Output: Returns order #1 (has 2 items)\n\n// === NESTED FIELD QUERIES ===\n\n// Dot notation for nested fields\ndb.orders.find({ \"shipping_address.city\": \"San Francisco\" })\n// Output: Returns orders #1 and #3\n\n// === ELEMENT OPERATORS ===\n\n// $expr → use aggregation expressions in queries (4.2+)\ndb.orders.find({ $expr: { $gt: [\"$total\", 500] } })\n// Output: Returns orders #1 and #2\n\n// $regex → pattern matching\ndb.users.find({ name: { $regex: /^A/, $options: \"i\" } })\n// Output: Returns Alice Chen\n\n// === SORT, LIMIT, SKIP ===\n\n// Sorting: 1 = ascending, -1 = descending\ndb.orders.find({ customer_id: ObjectId(\"64a1b2c3d4e5f60001000001\") })\n    .sort({ created_at: -1 })   // newest first\n    .limit(5)\n    .skip(0)                     // pagination: skip 0, limit 5 = page 1\n\n// === PROJECTION ===\n// 1 = include, 0 = exclude (mix of 1s excludes _id by default)\ndb.orders.find(\n    { customer_id: ObjectId(\"64a1b2c3d4e5f60001000001\") },\n    { total: 1, status: 1, \"items.name\": 1, _id: 0 }\n)\n// Output:\n// { total: 1549.97, status: \"delivered\", items: [{ name: \"Laptop\" }, { name: \"Mouse\" }] }\n// { total: 499.99, status: \"pending\", items: [{ name: \"Monitor\" }] }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1535-update--update-operators-reference",
      children: "15.3.5 Update → Update Operators Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// === $set: Set/overwrite field values ===\ndb.orders.updateOne(\n    { _id: ObjectId(\"64b1c2d3e4f5a60001000003\") },\n    { $set: { status: \"shipped\", shipped_at: new Date() } }\n)\n\n// === $unset: Remove a field ===\ndb.users.updateOne(\n    { email: \"temp@example.com\" },\n    { $unset: { temporary_data: \"\" } }  // Field value doesn't matter\n)\n\n// === $inc: Increment/decrement numeric field ===\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $inc: { \"metadata.login_count\": 1, points: 10 } }\n)\n\n// === $mul: Multiply numeric field ===\ndb.products.updateOne(\n    { sku: \"LAP-001\" },\n    { $mul: { price: 0.9 } }  // 10% discount\n)\n\n// === $min / $max: Conditional update (only if new value is lower/higher) ===\ndb.orders.updateOne(\n    { _id: ObjectId(\"64b1c2d3e4f5a60001000001\") },\n    { $min: { total: 1500 } }  // Only decrease if 1500 < current\n)\n\n// === $rename: Rename a field ===\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $rename: { \"metadata.login_count\": \"metadata.logins\" } }\n)\n\n// === ARRAY UPDATE OPERATORS ===\n\n// $push: Add element to array\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $push: { interests: \"cycling\" } }\n)\n\n// $push with modifiers\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $push: { interests: { $each: [\"swimming\", \"running\"], $position: 0, $sort: 1 } } }\n)\n// Adds both at position 0, then sorts alphabetically\n\n// $addToSet: Add element only if not already present (no duplicates)\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $addToSet: { interests: \"hiking\" } }  // Already exists → no-op\n)\n\n// $pull: Remove all occurrences matching condition\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $pull: { interests: \"photography\" } }\n)\n\n// $pullAll: Remove all specified values\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $pullAll: { interests: [\"reading\", \"cycling\"] } }\n)\n\n// $pop: Remove first (-1) or last (1) element\ndb.users.updateOne(\n    { email: \"alice@example.com\" },\n    { $pop: { interests: 1 } }  // Remove last interest\n)\n\n// $: Positional operator (update matching array element)\ndb.orders.updateOne(\n    { _id: ObjectId(\"64b1c2d3e4f5a60001000001\"), \"items.name\": \"Laptop\" },\n    { $set: { \"items.$.price\": 1399.99 } }  // Update price of Laptop specifically\n)\n\n// $[]: All positional operator (update all array elements)\ndb.orders.updateOne(\n    { _id: ObjectId(\"64b1c2d3e4f5a60001000001\") },\n    { $mul: { \"items.$[].price\": 1.1 } }  // 10% price increase on ALL items\n)\n\n// $[identifier]: Filtered positional operator\ndb.orders.updateOne(\n    { _id: ObjectId(\"64b1c2d3e4f5a60001000001\") },\n    { $set: { \"items.$[elem].price\": 0 } },\n    { arrayFilters: [{ \"elem.name\": \"Mouse\" }] }  // Only Mouse items get price=0\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1536-delete--variations",
      children: "15.3.6 Delete → Variations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// === deleteOne: Remove a single document ===\ndb.orders.deleteOne({ _id: ObjectId(\"64b1c2d3e4f5a60001000003\") })\n\n// === deleteMany: Remove all matching documents ===\ndb.orders.deleteMany({ status: \"cancelled\" })\n\n// === deleteMany with empty filter: Remove all documents (keep collection) ===\ndb.orders.deleteMany({})\n// Collection is now empty but indexes, schema remain\n\n// === drop(): Remove collection entirely ===\ndb.orders.drop()\n// Removes collection, its indexes, and all documents\n\n// === findOneAndDelete: Atomically find and delete ===\n// Returns the deleted document\ndb.orders.findOneAndDelete(\n    { status: \"pending\" },\n    { sort: { created_at: 1 }, projection: { _id: 1, total: 1 } }\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1537-numbered-steps-crud-operation-execution",
      children: "15.3.7 Numbered Steps: CRUD Operation Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Insert execution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Client sends insert command with document(s)\nSTEP 2: Server validates document BSON size (max 16MB per doc, max 48MB per batch)\nSTEP 3: Server generates ObjectId for documents missing _id\nSTEP 4: For each document, WiredTiger begins internal transaction\nSTEP 5: Document serialized to BSON, written to data files\nSTEP 6: All indexes updated → each index is a B-tree insert O(log n)\nSTEP 7: Oplog entry written (replica set only)\nSTEP 8: Write concern satisfied (default: acknowledged by primary)\nSTEP 9: Transaction committed\nSTEP 10: Acknowledgment returned to client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query execution with index:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Query arrives at mongod\nSTEP 2: Query planner parses filter, sort, projection\nSTEP 3: Planner evaluates all viable indexes using:\n        - IndexStats (cardinality, distribution)\n        - Query shape (equality vs range vs sort)\nSTEP 4: Winning plan selected (lowest estimated cost)\nSTEP 5: B-tree index traversed: root → internal → leaf node\n        ≈ 3-4 I/O operations for billions of documents\nSTEP 6: RecordIds extracted from index leaf entries\nSTEP 7: Documents fetched from storage engine\nSTEP 8: Projection applied, results serialized to BSON\nSTEP 9: Results returned to client (cursor established)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1538-pseudocode-crud-operations",
      children: "15.3.8 Pseudocode: CRUD Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION InsertDocument(collection, document):\n    ValidateDocSize(document)  // Throws if > 16MB\n    IF no _id: document._id = GenerateObjectId()\n    \n    txn = WT.BeginTransaction()\n    WT.WriteJournal({ op: \"insert\", doc: document })\n    record_id = WT.AllocateRecord(collection)\n    WT.WriteData(record_id, BSON(document))\n    \n    FOR index IN collection.indexes:\n        key = ExtractKey(document, index.fields)\n        BTree.Insert(index.tree, key, record_id)\n    \n    IF ReplicaSet: WriteOplog(\"i\", document)\n    WT.Commit(txn)\n    RETURN document._id\n\nFUNCTION FindDocuments(collection, filter, projection, sort, limit):\n    plan = QueryPlanner.Optimize(collection, filter, sort)\n    \n    IF plan.type == \"IXSCAN\":\n        cursor = IndexScan(plan.index, plan.keys, plan.direction)\n    ELSE:\n        cursor = CollectionScan(collection)\n    \n    results = []\n    WHILE cursor.HasNext() AND len(results) < limit:\n        record_id = cursor.Next()\n        doc = WT.ReadData(record_id)\n        \n        IF MatchesFilter(doc, filter):\n            IF projection: doc = ApplyProjection(doc, projection)\n            results.APPEND(doc)\n    \n    IF sort: results = SortResults(results, sort)\n    RETURN results\n\nFUNCTION UpdateDocument(collection, filter, update, options):\n    doc = FindOne(collection, filter)\n    IF doc IS NULL:\n        IF options.upsert:\n            RETURN InsertDocument(collection, Merge(doc, update.$set))\n        RETURN { matched: 0, modified: 0 }\n    \n    txn = WT.BeginTransaction()\n    old_record_id = doc._recordId\n    \n    // Apply update operators\n    FOR op IN update:\n        SWITCH op:\n            CASE \"$set\": doc = SetFields(doc, update.$set)\n            CASE \"$inc\": doc = IncrementFields(doc, update.$inc)\n            CASE \"$push\": doc = PushToArray(doc, update.$push)\n            CASE \"$pull\": doc = PullFromArray(doc, update.$pull)\n    \n    WT.WriteData(old_record_id, BSON(doc))\n    \n    // Update indexes\n    FOR index IN collection.indexes:\n        old_key = ExtractKey(doc, index.fields, before_update)\n        new_key = ExtractKey(doc, index.fields, after_update)\n        IF old_key != new_key:\n            BTree.Remove(index.tree, old_key, old_record_id)\n            BTree.Insert(index.tree, new_key, old_record_id)\n    \n    IF ReplicaSet: WriteOplog(\"u\", { _id: doc._id, diff: update })\n    WT.Commit(txn)\n    RETURN { matched: 1, modified: 1 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1539-dry-run-trace-update-with-index-maintenance",
      children: "15.3.9 Dry Run Trace: Update with Index Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Update Alice's email from \"", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:alice@example.com",
        children: "alice@example.com"
      }), "\" to \"", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:alice.new@example.com",
        children: "alice.new@example.com"
      }), "\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE: db.users.updateOne(\n            { email: \"alice@example.com\" },\n            { $set: { email: \"alice.new@example.com\" } }\n        )\n\nTRACE:\n+-------+--------------------------------------------+---------------------+\n| Step  | Operation                                  | State / Detail      |\n+-------+--------------------------------------------+---------------------+\n| 1     | Parse update command                       | Collection: users   |\n| 2     | Find document matching filter              |                     |\n| 2a    | Query planner selects email index          | IXSCAN on email_1   |\n| 2b    | B-tree search for \"alice@example.com\"      | Found at leaf node  |\n| 2c    | Read RecordId from index leaf              | RID=1001            |\n| 2d    | Fetch document at RID=1001                 | Alice's full doc    |\n| 3     | Begin WiredTiger transaction               | Txn#5 started       |\n| 4     | Apply $set: change email field             | Old: alice@ex..     |\n|       |                                            | New: alice.new@ex.. |\n| 5     | Write updated document at RID=1001         | Data overwritten    |\n| 6     | Update email index:                        |                     |\n| 6a    | Remove old key from email B-tree           | \"alice@example.com\" |\n| 6b    | Check new key doesn't violate uniqueness   | \"alice.new@ex..\"    |\n| 6c    | Insert new key into email B-tree           | → \"alice.new@ex..\"  |\n| 7     | Write oplog entry                          | \"u\" opcode          |\n| 8     | Commit transaction                         | Txn#5 committed     |\n| 9     | Return { matchedCount: 1, modifiedCount:1} |                     |\n+-------+--------------------------------------------+---------------------+\n\nIndex states during step 6:\n  Before: [..., \"alice@example.com\" → RID=1001, \"bob@example.com\" → RID=1002]\n  Step 6a: Remove \"alice@example.com\" → RID=1001\n  Step 6b: Check \"alice.new@example.com\" not in tree ✓\n  Step 6c: [..., \"alice.new@example.com\" → RID=1001, \"bob@example.com\" → RID=1002]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15310-edge-cases-in-crud-operations",
      children: "15.3.10 Edge Cases in CRUD Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upsert creates document with partial fields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upsert only sets fields in the update, not the full document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize with defaults before upsert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large batch insert ( > 100MB )"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insertMany with 1000+ large documents may exceed batch limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split into smaller batches (500 docs or 48MB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update reordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$push and $pull in same update → order of operations defined by operator precedence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use two separate updates or $each with $position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Array field with $ and $elemMatch interaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positional operator $ targets the first match from query, not from arrayFilters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use filtered positional $[identifier] for precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "findOneAndDelete with no matching doc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null → must handle client-side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check return value before accessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Immutable _id field"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$set on _id returns \"Modification on _id is not allowed\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use replaceOne with new document (but better to avoid changing _id)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time-series with unbounded arrays"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$push on a time-series field creates ever-growing document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use bucketing: store 1-hour summaries, not raw events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent update conflicts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiredTiger uses document-level locking; concurrent writes to same doc cause WriteConflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry on WriteConflict; design for low contention"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "154-indexing-in-mongodb",
      children: "15.4 Indexing in MongoDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1541-index-types-comparison",
      children: "15.4.1 Index Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B-tree Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Keys"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single Field"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on one field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality, range, sort on a single field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single key per entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only optimizes queries filtered on this field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on 2+ fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-field queries, covering indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexicographic ordering of combined key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order of fields matters (ESR rule)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multikey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on array field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries filtering on array elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One index entry per array element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One array field per index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be compound with another multikey field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search on string fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text search with stemming and stop words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenized terms → inverted index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple text fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One text index per collection; no exact match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial (2d)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D coordinate index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat-earth geo queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadtree / geohash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One coordinate field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to flat-earth calculations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial (2dsphere)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spherical geo index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Earth-like geo queries on GeoJSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geohash on sphere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One GeoJSON field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires valid GeoJSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TTL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-expire documents after time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session stores, logs, temp data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single field (usually Date) with expireAt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be compound; no guarantee on deletion timing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hashed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash of field value for sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash → bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only equality queries; no range queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unique"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces unique values on field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, username uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any index + unique constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per index creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be applied to existing dupes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexes only matching documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse query patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard + filter expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query must match filter to use index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sparse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only indexes docs with field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional field queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard + null skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause inconsistent results if not understood"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1542-single-field-index",
      children: "15.4.2 Single Field Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A book's index at the back → one entry per topic, alphabetically sorted. You find the topic, jump to the page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Create ascending index on email field\ndb.users.createIndex({ email: 1 })\n// 1 = ascending order, -1 = descending order\n\n// Queries optimized:\ndb.users.find({ email: \"alice@example.com\" })           // Equality\ndb.users.find({ email: { $gt: \"a\" } })                  // Range\ndb.users.find().sort({ email: 1 })                       // Sort\n\n// .explain() output for indexed query:\n// \"IXSCAN\" instead of \"COLLSCAN\"\n// \"keysExamined\": 1 (only 1 B-tree entry)\n// \"nReturned\": 1\n// \"executionTimeMillis\": 0-2ms (vs 50+ms for COLLSCAN on 100K docs)\n\n// Behind the scenes B-tree (conceptual):\n//                  [g, m, s]\n//                 /    |     \\\n//           [a-e]    [h-l]   [n-r]\n//          /  |  \\   /  \\    /  \\\n//        a.. d.. f.. h.. k.. n.. q..\n// Email entries as leaf nodes:\n// [\"alice@ex..\" → RID1, \"bob@ex..\" → RID2, ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1543-compound-index",
      children: "15.4.3 Compound Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant menu organized by cuisine type first, then by price. You first pick the cuisine section (e.g., Italian), then scan prices within that section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ESR Rule (Equality, Sort, Range):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E"
        }), "quality fields first: exact-match filters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S"
        }), "ort fields second: fields used in .sort()"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R"
        }), "ange fields last: $gt, $lt, $gte, $lte"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Compound index: user_id (equality) + created_at (sort)\ndb.orders.createIndex({ customer_id: 1, created_at: -1 })\n\n// This optimizes:\ndb.orders.find({ customer_id: \"user1\" }).sort({ created_at: -1 })\n// Step 1: B-tree equality lookup on customer_id → narrows to all user1 orders\n// Step 2: Within that subtree, created_at is already sorted desc → no extra sort\n\n// Compound index: status (equality) + created_at (sort) + total (range)\ndb.orders.createIndex({ status: 1, created_at: -1, total: 1 })\n// ESR pattern: status=E, created_at=S, total=R\n\n// Optimizes:\ndb.orders.find({\n    status: \"shipped\",\n    total: { $gte: 100 }\n}).sort({ created_at: -1 })\n\n// Covering query (all fields in index → no document fetch needed)\ndb.orders.find(\n    { customer_id: \"user1\" },\n    { customer_id: 1, created_at: 1, _id: 0 }\n).sort({ created_at: -1 })\n// \"totalDocsExamined\": 0  ← FETCH stage might be skipped!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1544-multikey-index",
      children: "15.4.4 Multikey Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Indexing a book's topics where each topic appears in multiple chapters. The index lists the topic once with all chapter numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Create index on an array field\ndb.users.createIndex({ interests: 1 })\n\n// MongoDB creates an index entry for EACH array element\n// Document: { name: \"Alice\", interests: [\"reading\", \"hiking\", \"photography\"] }\n// Index entries:\n//   \"hiking\" → RID1\n//   \"photography\" → RID1\n//   \"reading\" → RID1\n\n// This query uses the multikey index:\ndb.users.find({ interests: \"hiking\" })\n// B-tree lookup for \"hiking\" → finds RID1 (Alice), RID5 (Eve)\n\n// Compound multikey: only ONE field can be an array\n// OK: db.articles.createIndex({ author: 1, tags: 1 })  ← tags is array, author is not\n// Error: db.articles.createIndex({ tags: 1, categories: 1 })  ← both arrays\n// \"Cannot create index with parallel arrays [tags] [categories]\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1545-text-index",
      children: "15.4.5 Text Index"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Create a text index on one or more string fields\ndb.articles.createIndex({ title: \"text\", content: \"text\" })\n\n// Optional: assign weights for relevance scoring\ndb.articles.createIndex(\n    { title: \"text\", content: \"text\" },\n    { weights: { title: 10, content: 1 }, name: \"articles_text_index\" }\n)\n\n// Text search query\ndb.articles.find(\n    { $text: { $search: \"mongodb aggregation pipeline\" } },\n    { score: { $meta: \"textScore\" } }\n).sort({ score: { $meta: \"textScore\" } })\n\n// Text search with negation\ndb.articles.find({ $text: { $search: \"mongodb -sql\" } })\n\n// Text search with exact phrase\ndb.articles.find({ $text: { $search: \"\\\"aggregation pipeline\\\"\" } })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Text Index Works:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Tokenization: \"MongoDB aggregation pipeline\" → [\"mongodb\", \"aggregation\", \"pipeline\"]\nSTEP 2: Stemming: \"running\" → \"run\", \"pipeline\" → \"pipelin\" (Porter stemmer)\nSTEP 3: Stop words removed: \"the\", \"a\", \"an\", \"is\", ... (language-specific)\nSTEP 4: Inverted index built:\n         \"mongodb\"     → [{doc1, weight:10}, {doc3, weight:1}]\n         \"aggregation\" → [{doc1, weight:10}, {doc2, weight:1}]\nSTEP 5: TextScore = sum(weight * frequency) / document_length_factor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1546-geospatial-index",
      children: "15.4.6 Geospatial Index"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// 2dsphere index for spherical (Earth) geometry\ndb.places.createIndex({ location: \"2dsphere\" })\n\n// Sample data\ndb.places.insertMany([\n    { name: \"Central Park\", location: { type: \"Point\", coordinates: [-73.9654, 40.7829] } },\n    { name: \"Times Square\", location: { type: \"Point\", coordinates: [-73.9855, 40.7580] } },\n    { name: \"Brooklyn Bridge\", location: { type: \"Point\", coordinates: [-73.9969, 40.7061] } }\n])\n\n// $near: Find points near a coordinate (sorted by distance)\ndb.places.find({\n    location: {\n        $near: {\n            $geometry: { type: \"Point\", coordinates: [-73.97, 40.77] },\n            $minDistance: 0,\n            $maxDistance: 5000  // 5km in meters\n        }\n    }\n})\n\n// $geoWithin: Find points within a polygon\ndb.places.find({\n    location: {\n        $geoWithin: {\n            $geometry: {\n                type: \"Polygon\",\n                coordinates: [[\n                    [-74.0, 40.7], [-73.9, 40.7],\n                    [-73.9, 40.8], [-74.0, 40.8], [-74.0, 40.7]\n                ]]\n            }\n        }\n    }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1547-ttl-index",
      children: "15.4.7 TTL Index"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// TTL index → documents auto-delete after 3600 seconds (1 hour)\ndb.sessions.createIndex(\n    { created_at: 1 },\n    { expireAfterSeconds: 3600 }\n)\n\n// TTL with specific expiry time (instead of relative)\ndb.event_log.createIndex(\n    { expire_at: 1 },\n    { expireAfterSeconds: 0 }\n)\n// Document: { message: \"test\", expire_at: new Date(\"2024-12-31T23:59:59Z\") }\n// Deletes exactly at the expire_at time\n\n// Check TTL monitor status\ndb.adminCommand({ currentOp: true, \"desc\": \"TTLMonitor\" })\n\n// TTL behavior:\n// - Runs every 60 seconds (default interval)\n// - Deletes documents where created_at + expireAfterSeconds < now\n// - Not real-time → up to 60s delay in deletion\n// - Cannot be compound index\n// - Only works on date fields (ISODate, Date)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1548-numbered-steps-index-creation-and-query-optimization",
      children: "15.4.8 Numbered Steps: Index Creation and Query Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Index Creation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: createIndex command received by primary mongod\nSTEP 2: MongoDB acquires an exclusive collection lock (blocking writes)\n        (In background mode: yields periodically to allow interleaved operations)\nSTEP 3: Storage engine allocates B-tree structure\nSTEP 4: Collection scan begins: reads each document sequentially\nSTEP 5: For each document, index key is extracted\nSTEP 6: Key + RecordId inserted into B-tree (sorted position)\nSTEP 7: Progress reported to client periodically\nSTEP 8: When scan completes, index statistics computed\nSTEP 9: Index marked as \"ready\" in collection metadata\nSTEP 10: Lock released → collection now visible for queries via this index\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query Planner Index Selection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Query arrives with filter and sort specification\nSTEP 2: Planner generates multiple candidate plans:\n        - Each candidate uses a different viable index\n        - COLLSCAN is always considered as fallback\nSTEP 3: For each candidate, estimated cost is computed:\n        - Index cardinality (selectivity)\n        - Number of documents to examine\n        - Sort cost (in-memory sort vs. index-provided sort)\nSTEP 4: Candidates are trialed in parallel (trial period):\n        - Each candidate processes ~100 documents\n        - Winner = first to return results (not cheapest estimate)\nSTEP 5: Winning plan cached for future identical query shapes\n        (invalidated after 1000 writes or index changes)\nSTEP 6: Query executes using the winning plan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1549-pseudocode-index-selection-and-b-tree-operations",
      children: "15.4.9 Pseudocode: Index Selection and B-tree Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION SelectIndex(collection, query):\n    best_plan = { type: \"COLLSCAN\", cost: INFINITY }\n    \n    FOR index IN collection.indexes:\n        IF not IndexSupportsQuery(index, query.filter, query.sort):\n            CONTINUE\n        \n        cost = EstimateIndexCost(index, query)\n        \n        // Cost = index_traversal_cost + doc_fetch_cost + sort_cost\n        index_levels = log_f(index.cardinality)  // B-tree height\n        matched_docs = EstimateSelectivity(index, query.filter)\n        doc_fetch_cost = matched_docs * PAGE_READ_COST\n        sort_cost = If index.supportsSort(query.sort) THEN 0 \n                    ELSE matched_docs * log(matched_docs)\n        \n        total_cost = index_levels + doc_fetch_cost + sort_cost\n        \n        IF total_cost < best_plan.cost:\n            best_plan = { type: \"IXSCAN\", index: index, cost: total_cost }\n    \n    return best_plan\n\nFUNCTION BTreeInsert(tree, key, record_id):\n    // 1. Find leaf node where key belongs\n    node = tree.root\n    WHILE not node.isLeaf:\n        node = TraverseChild(node, key)\n    \n    // 2. Insert into leaf (maintain sorted order)\n    node.keys.INSERT_SORTED(key, record_id)\n    \n    // 3. Split if node exceeds maximum capacity\n    IF node.keys.length > tree.maxKeys:\n        mid = tree.maxKeys / 2\n        right_node = new BTreeNode(node.keys[mid:])\n        \n        // Promote middle key to parent\n        parent_key = node.keys[mid - 1]\n        parent = node.parent ?? new BTreeNode() // Create new root if needed\n        parent.keys.INSERT_SORTED(parent_key, right_node)\n        \n        IF node.parent IS NULL:\n            tree.root = parent\n\nFUNCTION BTreeSearch(tree, key):\n    node = tree.root\n    WHILE not node.isLeaf:\n        child_index = FindChildIndex(node, key)\n        node = node.children[child_index]\n    \n    // Leaf: binary search within node\n    return BinarySearch(node.keys, key)  // Returns RecordId(s)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15410-dry-run-trace-query-with-compound-index",
      children: "15.4.10 Dry Run Trace: Query with Compound Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Query ", (0,jsx_runtime.jsx)(_components.code, {
        children: "db.orders.find({ customer_id: \"user1\", status: \"shipped\" }).sort({ created_at: -1 })"
      }), " with compound index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ customer_id: 1, status: 1, created_at: -1 }"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Trace of B-tree traversal (conceptual):\n\nIndex entries sorted lexicographically by (customer_id, status, created_at):\n\nLeaf Node Layout:\n┌─────────────────────────────────────────────────────────────────────┐\n│ (\"user0\",\"pending\",Mar20) → RID7                                    │\n│ (\"user1\",\"delivered\",Mar15) → RID1                                  │\n│ (\"user1\",\"pending\",Mar25) → RID3                                    │\n│ (\"user1\",\"shipped\",Mar22) → RID2      ← exact match found here      │\n│ (\"user2\",\"cancelled\",Mar10) → RID4                                   │\n│ (\"user2\",\"shipped\",Mar18) → RID5                                    │\n│ (\"user3\",\"shipped\",Mar12) → RID6                                    │\n└─────────────────────────────────────────────────────────────────────┘\n\nExecution Trace:\n+--------+----------------------------------------------+------------------+\n| Step   | Operation                                    | Detail           |\n+--------+----------------------------------------------+------------------+\n| 1      | Query arrives                                | Filter: cust=u1  |\n|        |                                              | status=shipped   |\n| 2      | Query planner analyzes query shape            |                   |\n| 3      | Candidate plans:                              |                   |\n| 3a     | Use compound index {c:1,s:1,cr:-1}            | Estimated 1 doc  |\n| 3b     | Use single index {customer_id:1} + sort       | Estimated 3 docs |\n| 3c     | COLLSCAN                                      | Estimated 100K   |\n| 4      | Winner: compound index                        | Lowest cost      |\n| 5      | B-tree traversal:                              |                   |\n| 5a     | Root node: find \"user1\" range                 | [u0-u5] range    |\n| 5b     | Internal node: narrow by \"user1\"+\"shipped\"    | Exact prefix     |\n| 5c     | Leaf node: scan backwards for -1 sort         | ← backward scan  |\n| 6      | Found: (\"user1\",\"shipped\",Mar22) → RID2       | 1 key examined   |\n| 7      | Fetch document at RID2                        | 1 doc fetched    |\n| 8      | Apply projection (none specified)             | Full doc         |\n| 9      | Return result set of 1 document               | Done             |\n+--------+----------------------------------------------+------------------+\n\nCompare with COLLSCAN:\n+--------+----------------------------------------------+------------------+\n| 2a     | Collection scan all 100K documents            | 100K docs read   |\n| 2b     | Check each doc: customer_id==user1?           | ~3 match         |\n| 2c     | Filter: status==\"shipped\"?                    | 1 match          |\n| 2d     | Sort in memory: 1 result (trivial)            | O(1)             |\n| Execution time: ~50ms                          | vs IXSCAN: ~1ms  |\n+--------+----------------------------------------------+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15411-c-index-operations",
      children: "15.4.11 C++ Index Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <bsoncxx/builder/stream/document.hpp>\n#include <mongocxx/client.hpp>\n#include <mongocxx/instance.hpp>\n#include <mongocxx/uri.hpp>\n#include <iostream>\n\nusing bsoncxx::builder::stream::document;\nusing bsoncxx::builder::stream::open_document;\nusing bsoncxx::builder::stream::close_document;\nusing bsoncxx::builder::stream::finalize;\n\nvoid createAllIndexes() {\n    mongocxx::instance instance{};\n    mongocxx::client client{mongocxx::uri{\"mongodb://localhost:27017\"}};\n    auto db = client[\"ecommerce\"];\n\n    // Single field index\n    db[\"users\"].create_index(\n        document{} << \"email\" << 1 << finalize,\n        mongocxx::options::index{}.unique(true)\n    );\n    std::cout << \"Created unique index on email\" << std::endl;\n\n    // Compound index\n    db[\"orders\"].create_index(\n        document{} << \"customer_id\" << 1\n                   << \"created_at\" << -1\n                   << finalize\n    );\n    std::cout << \"Created compound index on customer_id + created_at\" << std::endl;\n\n    // Text index\n    auto text_doc = document{};\n    text_doc << \"title\" << \"text\" << \"content\" << \"text\";\n    mongocxx::options::index text_opts{};\n    bsoncxx::document::value weights = document{}\n        << \"weights\" << open_document\n            << \"title\" << 10\n            << \"content\" << 1\n        << close_document\n        << finalize;\n    // Note: In practice, pass weights via text_opts\n    db[\"articles\"].create_index(text_doc.view());\n    std::cout << \"Created text index on articles\" << std::endl;\n\n    // TTL index\n    db[\"sessions\"].create_index(\n        document{} << \"created_at\" << 1 << finalize,\n        mongocxx::options::index{}.expire_after(\n            std::chrono::seconds(3600)\n        )\n    );\n    std::cout << \"Created TTL index (1-hour expiry) on sessions\" << std::endl;\n\n    // Explain query execution\n    auto collection = db[\"orders\"];\n    auto filter = document{} << \"customer_id\"\n                             << ObjectId(\"64a1b2c3d4e5f60001000001\")\n                             << finalize;\n    auto explain_doc = document{} << \"find\" << \"orders\"\n                                  << \"filter\" << filter\n                                  << finalize;\n    auto result = db.run_command(explain_doc.view());\n    std::cout << \"Query plan: \" << bsoncxx::to_json(result) << std::endl;\n}\n\nint main() {\n    createAllIndexes();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15412-python-index-operations",
      children: "15.4.12 Python Index Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pymongo\nfrom pymongo import MongoClient, ASCENDING, DESCENDING, TEXT\nfrom pymongo.operations import IndexModel\nimport time\n\n\nclass MongoDBIndexManager:\n    \"\"\"Manages MongoDB indexes with monitoring.\"\"\"\n\n    def __init__(self, uri=\"mongodb://localhost:27017\", db_name=\"ecommerce\"):\n        self.client = MongoClient(uri)\n        self.db = self.client[db_name]\n\n    def create_standard_indexes(self):\n        \"\"\"Create recommended indexes for e-commerce schema.\"\"\"\n\n        # Users indexes\n        self.db.users.create_index([(\"email\", ASCENDING)],\n                                   unique=True,\n                                   background=True)\n        self.db.users.create_index([(\"age\", ASCENDING)],\n                                   background=True)\n        self.db.users.create_index([(\"interests\", ASCENDING)],\n                                   background=True)\n        self.db.users.create_index([\n            (\"address.city\", ASCENDING),\n            (\"age\", DESCENDING)\n        ], background=True)\n\n        # Orders indexes → ESR pattern\n        self.db.orders.create_index([\n            (\"customer_id\", ASCENDING),\n            (\"status\", ASCENDING),\n            (\"created_at\", DESCENDING)\n        ], background=True)\n        self.db.orders.create_index([\n            (\"status\", ASCENDING),\n            (\"created_at\", DESCENDING),\n            (\"total\", ASCENDING)\n        ], background=True)\n\n        # Products indexes\n        self.db.products.create_index([\n            (\"category\", ASCENDING),\n            (\"price\", ASCENDING)\n        ], background=True)\n        self.db.products.create_index([\n            (\"name\", TEXT),\n            (\"description\", TEXT)\n        ], weights={\"name\": 10, \"description\": 1},\n           name=\"products_text_index\",\n           default_language=\"english\")\n\n        # Sessions TTL index\n        self.db.sessions.create_index(\n            [(\"created_at\", ASCENDING)],\n            expireAfterSeconds=3600\n        )\n\n        print(\"All indexes created successfully.\")\n\n    def create_indexes_in_bulk(self):\n        \"\"\"Create multiple indexes atomically.\"\"\"\n        indexes = [\n            IndexModel([(\"sku\", ASCENDING)], unique=True),\n            IndexModel([(\"category\", ASCENDING), (\"stock\", ASCENDING)]),\n            IndexModel([(\"tags\", ASCENDING)]),\n            IndexModel([(\"created_at\", ASCENDING)],\n                       expireAfterSeconds=86400)\n        ]\n        result = self.db.products.create_indexes(indexes)\n        print(f\"Created {len(result)} indexes.\")\n\n    def analyze_query_performance(self, collection_name, filter_query):\n        \"\"\"Explain a query and log performance metrics.\"\"\"\n        collection = self.db[collection_name]\n        result = collection.find(filter_query).explain()\n        plan = result.get(\"queryPlanner\", {})\n        execution = result.get(\"executionStats\", {})\n\n        print(f\"Winning plan: {plan.get('winningPlan', {}).get('stage', 'N/A')}\")\n        print(f\"Execution time: {execution.get('executionTimeMillis', 'N/A')}ms\")\n        print(f\"Docs examined: {execution.get('totalDocsExamined', 'N/A')}\")\n        print(f\"Docs returned: {execution.get('nReturned', 'N/A')}\")\n\n        # Check if index was used\n        if execution.get(\"totalDocsExamined\", 0) > execution.get(\"nReturned\", 0) * 2:\n            print(\"WARNING: High document examination ratio → consider adding/improving index\")\n\n    def list_indexes(self, collection_name):\n        \"\"\"List all indexes on a collection.\"\"\"\n        indexes = self.db[collection_name].list_indexes()\n        for idx in indexes:\n            print(f\"Name: {idx['name']}, Keys: {idx['key']}, \" +\n                  f\"Unique: {idx.get('unique', False)}, \" +\n                  f\"Background: {idx.get('background', False)}\")\n\n    def drop_unused_indexes(self, collection_name):\n        \"\"\"Remove all non-essential indexes (keep _id only).\"\"\"\n        collection = self.db[collection_name]\n        indexes = list(collection.list_indexes())\n        for idx in indexes:\n            if idx[\"name\"] != \"_id_\":\n                collection.drop_index(idx[\"name\"])\n                print(f\"Dropped index: {idx['name']}\")\n\n    def close(self):\n        self.client.close()\n\n\n# Usage\nif __name__ == \"__main__\":\n    mgr = MongoDBIndexManager()\n    mgr.create_standard_indexes()\n    mgr.analyze_query_performance(\"orders\", {\"customer_id\": \"user1\"})\n    mgr.list_indexes(\"users\")\n    mgr.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15413-complexity-analysis-for-indexing",
      children: "15.4.13 Complexity Analysis for Indexing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single index creation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full collection scan + B-tree insert per document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index lookup (equality)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree height ≈ log_f(n); f = fanout (≈ 500)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index lookup (range)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree to find start + sequential scan of m leaves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound index lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single B-tree traversal regardless of fields count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index insert (write)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree insert at leaf; potential rebalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree search + remove; potential rebalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multikey index insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k = number of array elements; each gets its own entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text index build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * t log t)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t * n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization (t tokens per doc) + inverted index build"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log t + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token lookup + document ID merge; t = unique tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TTL cleanup (per cycle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d = expired documents; background thread deletes in batches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15414-advantages--disadvantages-of-each-index-type",
      children: "15.4.14 Advantages & Disadvantages of Each Index Type"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Type"
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
              children: "Single"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, low maintenance, fast equality lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only optimizes queries on that field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-field queries, covering indexes, sort support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field order is critical; wrong order = useless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multikey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables efficient array queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one array field per compound index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search, stemming, relevance scoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One text index per collection; no exact match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proximity and containment queries on geo data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works with GeoJSON format coordinates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TTL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic data expiry, no cron jobs needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not immediate (60s delay), single field only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hashed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform distribution for sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No range queries; equality-only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15415-edge-cases-in-indexing",
      children: "15.4.15 Edge Cases in Indexing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index size exceeds RAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If index doesn't fit in memory, B-tree page faults cause severe slowdown"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ensure working set fits in RAM; monitor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "indexSize"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "totalIndexSize"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound index field order wrong"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query doesn't use index prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply ESR rule; verify with .explain()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multikey compound with two arrays"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Cannot create index with parallel arrays\" error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite schema; move one array to separate collection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text index with non-English text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stemmer doesn't understand the language"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "default_language"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"none\""
            }), " for no stemming"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TTL index delay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documents persist up to 60s after expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptable for most session/log use cases; not for compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unique index on sparse field"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple nulls are allowed (sparse skips null docs)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ unique: true, sparse: false }"
            }), " for true uniqueness"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial index filter mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query not using partial index even with matching fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure query filter exactly matches partialFilterExpression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Background index building"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreground: blocks all operations; Background: slower"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ background: true }"
            }), " for production (MongoDB 4.2+ default)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index intersection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB can use two separate indexes for one query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually worse than compound index; avoid as workaround"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large key in index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index key > 1024 bytes (Index Key Too Large error)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hashed index or hash the value before storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "155-aggregation-pipeline",
      children: "15.5 Aggregation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1551-aggregation-pipeline-stages-reference",
      children: "15.5.1 Aggregation Pipeline Stages Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The aggregation pipeline is MongoDB's equivalent of SQL's GROUP BY, JOIN, and complex transformations → but more powerful. Documents pass through a sequence of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stages"
      }), ", where each stage transforms the document stream."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An assembly line in a car factory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 1 ($match)"
        }), ": Inspect parts, keep only those that meet specs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 2 ($group)"
        }), ": Sort similar parts into bins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 3 ($sort)"
        }), ": Arrange bins in order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 4 ($project)"
        }), ": Stamp each part with serial number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 5 ($limit)"
        }), ": Ship only the first 10 bins"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "db.collection.aggregate([\n    { $match:   { status: \"active\" } },     // Stage 1: Filter documents\n    { $group:   { _id: \"$city\",             // Stage 2: Group by city\n                  count: { $sum: 1 } } },    //          Count per group\n    { $sort:    { count: -1 } },             // Stage 3: Sort descending\n    { $limit:   10 }                         // Stage 4: Top 10\n])\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory/IO Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE / HAVING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter documents by conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces pipeline size (place first!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY + aggregate functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group documents by key, compute aggregates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) memory for groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort document stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) → may spill to disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT (columns + expressions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reshape documents, include/exclude fields, compute expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-document transformation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN (outer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join with another collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be slow without indexes on foreignField"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$unwind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNNEST / LATERAL VIEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deconstruct array into multiple documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplies document count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass first N documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncates stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$skip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OFFSET / SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip first N documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must still process all skipped docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return count of documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns single document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$addFields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add new fields to documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$bucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WIDTH_BUCKET / CASE WHEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorize into buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groups into ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$facet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple pipelines in parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$unionWith"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine results from same collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appends streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$setWindowFields"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window functions (RANK, ROW_NUMBER)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank, running total, moving average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.2+ feature; requires sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT INTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write results to new collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Materializes pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MERGE INTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge results into existing collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upserts into target"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1552-key-stages--detailed-examples",
      children: "15.5.2 Key Stages → Detailed Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "$match → Filter documents (always push this first):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Place $match as the FIRST stage for optimal performance\n// If there's an index on the filtered field, $match uses it\ndb.orders.aggregate([\n    { $match: {\n        status: { $in: [\"shipped\", \"delivered\"] },\n        total: { $gte: 50 }\n    }}\n])\n// Without $match first: ALL documents pass through every stage\n// With $match first: Only ~20% of documents continue downstream\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "$group → Group and aggregate:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Compute customer purchase statistics\ndb.orders.aggregate([\n    { $group: {\n        _id: \"$customer_id\",           // Group key\n        total_spent: { $sum: \"$total\" },\n        order_count: { $sum: 1 },\n        avg_order_value: { $avg: \"$total\" },\n        first_purchase: { $min: \"$created_at\" },\n        last_purchase: { $max: \"$created_at\" },\n        unique_items: { $addToSet: \"$items.name\" }  // Collect unique item names\n    }},\n    { $sort: { total_spent: -1 } },\n    { $limit: 10 }\n])\n\n// Available accumulator operators:\n// $sum, $avg, $min, $max, $first, $last, $stdDevPop, $stdDevSamp\n// $addToSet (unique array), $push (all values array)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "$sort → Order documents:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Sort uses index if $match provides equality on the sort key's prefix\n// Otherwise, in-memory or disk-based sort\ndb.orders.aggregate([\n    { $match: { status: \"shipped\" } },\n    { $sort: { total: -1, created_at: -1 } }\n])\n\n// Large sorts (>100MB) require allowDiskUse: true\ndb.orders.aggregate([\n    { $sort: { total: -1 } }\n], { allowDiskUse: true })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "$project → Reshape documents with expressions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// $project controls which fields pass through and can compute new fields\ndb.orders.aggregate([\n    { $match: { status: \"delivered\" } },\n    { $project: {\n        _id: 0,                          // Hide _id\n        order_id: { $toString: \"$_id\" }, // Convert ObjectId to string\n        customer: \"$customer_id\",        // Rename field\n        total_rounded: { $round: [\"$total\", 0] },  // Round to nearest dollar\n        item_count: { $size: \"$items\" }, // Array length\n        is_expensive: { $gte: [\"$total\", 1000] },  // Boolean computed field\n        full_address: {\n            $concat: [                   // String concatenation\n                \"$shipping_address.street\", \", \",\n                \"$shipping_address.city\", \", \",\n                \"$shipping_address.zip\"\n            ]\n        },\n        delivery_days: {\n            $dateDiff: {                 // Date difference (5.0+)\n                startDate: \"$created_at\",\n                endDate: \"$delivered_at\",\n                unit: \"day\"\n            }\n        }\n    }}\n])\n\n// Output:\n// { order_id: \"64b1c2d3...\", customer: ObjectId(\"...\"), total_rounded: 1550,\n//   item_count: 2, is_expensive: true,\n//   full_address: \"123 Main St, San Francisco, 94102\",\n//   delivery_days: 3 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "$lookup → Join collections:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// === BASIC LOOKUP (LEFT JOIN) ===\n// Join orders with customers\ndb.orders.aggregate([\n    { $match: { status: \"delivered\" } },\n    { $lookup: {\n        from: \"customers\",                    // Target collection\n        localField: \"customer_id\",             // Field in orders\n        foreignField: \"_id\",                   // Field in customers\n        as: \"customer\"                         // Output array field\n    }},\n    { $unwind: \"$customer\" },                  // Deconstruct the array\n    { $project: {\n        total: 1,\n        status: 1,\n        \"customer.name\": 1,\n        \"customer.email\": 1\n    }}\n])\n\n// Output:\n// { total: 1549.97, status: \"delivered\", customer: { name: \"Alice Chen\", email: \"alice@example.com\" } }\n\n// === PIPELINE LOOKUP (JOIN WITH SUB-QUERY) (3.6+) ===\n// Join with additional filtering inside the lookup\ndb.customers.aggregate([\n    { $lookup: {\n        from: \"orders\",\n        let: { cust_id: \"$_id\" },\n        pipeline: [\n            { $match: {\n                $expr: { $eq: [\"$customer_id\", \"$$cust_id\"] },\n                status: \"delivered\"\n            }},\n            { $project: { total: 1, created_at: 1 } },\n            { $sort: { created_at: -1 } },\n            { $limit: 5 }\n        ],\n        as: \"recent_orders\"\n    }}\n])\n\n// Output per customer:\n// { _id: ObjectId(\"...\"), name: \"Alice\", recent_orders: [{ total: 1549.97, ... }, { total: 499.99, ... }] }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "$unwind → Deconstruct arrays:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Deconstruct items array so each item becomes a separate document\ndb.orders.aggregate([\n    { $match: { status: \"delivered\" } },\n    { $unwind: {\n        path: \"$items\",\n        preserveNullAndEmptyArrays: true  // Keep orders with no items\n    }},\n    { $group: {\n        _id: \"$items.name\",\n        total_revenue: { $sum: { $multiply: [\"$items.qty\", \"$items.price\"] } },\n        total_qty: { $sum: \"$items.qty\" }\n    }},\n    { $sort: { total_revenue: -1 } }\n])\n\n// Before $unwind:\n// { _id: 1, items: [{ name: \"Laptop\", qty: 1, price: 1499.99 }, { name: \"Mouse\", qty: 2, price: 24.99 }] }\n//\n// After $unwind:\n// { _id: 1, items: { name: \"Laptop\", qty: 1, price: 1499.99 } }\n// { _id: 1, items: { name: \"Mouse\", qty: 2, price: 24.99 } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1553-aggregation-pipeline-vs-sql-reference-table",
      children: "15.5.3 Aggregation Pipeline vs SQL Reference Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Aggregation Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE status = 'active'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $match: { status: \"active\" } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use index if available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GROUP BY city"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $group: { _id: \"$city\", ... } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "_id is the group key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "HAVING count > 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $match: { count: { $gt: 5 } } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must come AFTER $group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT name, age + 1 AS new_age"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $project: { name: 1, new_age: { $add: [\"$age\", 1] } } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ORDER BY name DESC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $sort: { name: -1 } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1 = descending"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LIMIT 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $limit: 10 }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should come late in pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OFFSET 20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $skip: 20 }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes all skipped docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LEFT JOIN customers ON ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $lookup: { from: \"customers\", ... } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "See $lookup for syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UNNEST(items)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $unwind: \"$items\" }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deconstructs arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT COUNT(*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $count: \"count\" }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single document output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT DISTINCT category"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $group: { _id: \"$category\" } }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$group: { _id: null, ... }"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CASE WHEN total > 100 THEN 'big' ELSE 'small' END"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $project: { size: { $cond: [{$gt: [\"$total\",100]}, \"big\", \"small\"] } } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$cond for conditional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WIDTH_BUCKET(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $bucket: { groupBy: \"$total\", ... } }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ROW_NUMBER() OVER (...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set window fields stage (5.2+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ $setWindowFields: { ... } }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... UNION ALL SELECT ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use $unionWith (4.4+)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1554-numbered-steps-aggregation-pipeline-execution",
      children: "15.5.4 Numbered Steps: Aggregation Pipeline Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Client sends aggregate command with pipeline stages array\nSTEP 2: mongod validates each stage's syntax and operator availability\nSTEP 3: Query planner analyzes early stages:\n        - $match at position 0? Can use index → IXSCAN\n        - $sort at position 0 or 1? Can use index for sort\nSTEP 4: If $match is not first, MongoDB may optimize by reordering:\n        - Automatic $match optimization: $match moves before $project\n        - $sort + $limit optimization: if adjacent, uses top-k sort\nSTEP 5: Documents are read from disk (or cache) into pipeline\nSTEP 6: Stage-by-stage processing:\n        - Each stage receives documents from the previous stage\n        - Each stage process documents and emits transformed documents\n        - Pipeline execution is lazy: documents flow one-by-one\nSTEP 7: Memory management:\n        - If any stage exceeds 100MB, allowDiskUse flag is checked\n        - Without allowDiskUse, error is thrown\n        - $group and $sort are the memory-intensive stages\nSTEP 8: Results are streamed back to the client as a cursor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1555-pseudocode-aggregation-pipeline-engine",
      children: "15.5.5 Pseudocode: Aggregation Pipeline Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ExecutePipeline(collection, stages, options):\n    // 1. Parse and validate stages\n    FOR stage IN stages:\n        ValidateStage(stage)\n    \n    // 2. Apply optimizer reorderings\n    stages = OptimizePipeline(stages)\n    // Moves $match before $project where possible\n    // Merges adjacent $match and $sort where possible\n    \n    // 3. Initialize document source\n    first_stage = stages[0]\n    IF first_stage.type == \"$match\" AND HasIndex(first_stage.filter):\n        source = IndexScan(collection, first_stage.filter)\n        stages = stages[1:]  // Consumed $match\n    ELSE:\n        source = CollectionScan(collection)\n    \n    // 4. Execute pipeline\n    current_stream = source\n    \n    FOR stage IN stages:\n        SWITCH stage.type:\n            CASE \"$match\":\n                current_stream = FilterStream(current_stream, stage.filter)\n            \n            CASE \"$group\":\n                current_stream = GroupDocuments(current_stream, stage.groupDef)\n                // Hash-based grouping: O(n) memory for unique groups\n            \n            CASE \"$sort\":\n                current_stream = SortStream(current_stream, stage.sortDef, options)\n                // External merge sort if total > 100MB\n            \n            CASE \"$project\":\n                current_stream = ProjectStream(current_stream, stage.spec)\n            \n            CASE \"$lookup\":\n                current_stream = LookupJoin(current_stream, stage.lookupDef)\n                // For each input doc, query foreign collection\n            \n            CASE \"$unwind\":\n                current_stream = UnwindArray(current_stream, stage.path)\n            \n            CASE \"$limit\":\n                current_stream = LimitStream(current_stream, stage.count)\n            \n            CASE \"$skip\":\n                current_stream = SkipStream(current_stream, stage.count)\n    \n    // 5. Return result cursor\n    RETURN Cursor(current_stream)\n\n\nFUNCTION OptimizePipeline(stages):\n    // Optimization #1: Co-locate $match before $project\n    // (Project reduces available fields; match can't use them)\n    FOR i WHERE stages[i].type == \"$match\":\n        j = FindPrevious(stages, i, [\"$project\", \"$addFields\"])\n        IF j found: Swap(stages, i, j)\n    \n    // Optimization #2: Merge adjacent $sort + $limit\n    // ($sort + $limit can use top-k algorithm instead of full sort)\n    FOR i WHERE stages[i].type == \"$sort\" AND stages[i+1].type == \"$limit\":\n        stages[i].limit = stages[i+1].count\n        stages.RemoveAt(i+1)  // Top-k sort replaces both\n    \n    // Optimization #3: Push $match before $redact, $geoNear\n    // (Reduce data before expensive operations)\n    \n    RETURN stages\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1556-dry-run-trace-aggregation-pipeline-stages",
      children: "15.5.6 Dry Run Trace: Aggregation Pipeline Stages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline:"
      }), " Sales report by city → $match → $unwind → $lookup → $group → $sort → $limit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "db.orders.aggregate([\n    { $match: { status: \"delivered\" } },                               // Stage 1\n    { $unwind: \"$items\" },                                              // Stage 2\n    { $lookup: { from: \"products\", localField: \"items.product_id\",     // Stage 3\n                 foreignField: \"_id\", as: \"product\" } },\n    { $unwind: \"$product\" },                                            // Stage 4\n    { $group: { _id: \"$product.category\",                              // Stage 5\n                revenue: { $sum: { $multiply: [\"$items.qty\", \"$items.price\"] } },\n                units: { $sum: \"$items.qty\" } } },\n    { $sort: { revenue: -1 } },                                         // Stage 6\n    { $limit: 5 }                                                       // Stage 7\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace with 3 sample orders:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial Collection: 3 orders (2 delivered, 1 pending)\n\n+========+=========================================+============================+\n| Stage  | Operation                               | Document Stream            |\n+========+=========================================+============================+\n| INPUT  | Raw orders collection                    | {_id:1, status:\"delivered\", |\n|        |                                         |  items: [{pid:A, qty:1,    |\n|        |                                         |  price:100}, {pid:B,       |\n|        |                                         |  qty:2, price:25}],        |\n|        |                                         |  shipping_address:{city:SF}}|\n|        |                                         | {_id:2, status:\"delivered\", |\n|        |                                         |  items:[{pid:C, qty:1,     |\n|        |                                         |  price:400}],              |\n|        |                                         |  shipping_address:{city:NY}}|\n|        |                                         | {_id:3, status:\"pending\",  |\n|        |                                         |  items:[{pid:A, qty:1,     |\n|        |                                         |  price:100}],              |\n|        |                                         |  shipping_address:{city:SF}}|\n+--------+-----------------------------------------+----------------------------+\n| $match | Filter: status == \"delivered\"            | {_id:1, status:\"delivered\", |\n|        | Output: 2/3 docs pass                    |  items:[{pid:A,qty:1,      |\n|        |                                         |  price:100},{pid:B,qty:2,  |\n|        |                                         |  price:25}],city:SF}       |\n|        |                                         | {_id:2, status:\"delivered\", |\n|        |                                         |  items:[{pid:C,qty:1,      |\n|        |                                         |  price:400}],city:NY}      |\n+--------+-----------------------------------------+----------------------------+\n| $unwind| Deconstruct items array                  | {_id:1, items:{pid:A,qty:1,|\n|        | Output: 3 docs (order1→2, order2→1)      |  price:100},city:SF}       |\n|        |                                         | {_id:1, items:{pid:B,qty:2,|\n|        |                                         |  price:25},city:SF}        |\n|        |                                         | {_id:2, items:{pid:C,qty:1,|\n|        |                                         |  price:400},city:NY}       |\n+--------+-----------------------------------------+----------------------------+\n| $lookup| Join with products collection             | {_id:1, items:{pid:A,qty:1,|\n|        | For each item, find matching product     |  price:100},city:SF,       |\n|        | Output: 3 docs with product embedded     |  product:[{_id:A,          |\n|        |                                         |  category:\"Electronics\"}]} |\n|        |                                         | {_id:1, items:{pid:B,qty:2,|\n|        |                                         |  price:25},city:SF,        |\n|        |                                         |  product:[{_id:B,          |\n|        |                                         |  category:\"Accessories\"}]} |\n|        |                                         | {_id:2, items:{pid:C,qty:1,|\n|        |                                         |  price:400},city:NY,       |\n|        |                                         |  product:[{_id:C,          |\n|        |                                         |  category:\"Electronics\"}]} |\n+--------+-----------------------------------------+----------------------------+\n| $unwind | Deconstruct products array               | Same documents but         |\n|         | (products is always 1-element after     | product field is now an    |\n|         | lookup on _id)                          | object, not array          |\n+--------+-----------------------------------------+----------------------------+\n| $group | Group by product.category                | {_id:\"Electronics\",        |\n|        | revenue=Σ(qty*price), units=Σ(qty)      |  revenue:500, units:2}     |\n|        | Output: 2 groups                         | {_id:\"Accessories\",        |\n|        |                                         |  revenue:50, units:2}      |\n+--------+-----------------------------------------+----------------------------+\n| $sort  | Sort descending by revenue               | {_id:\"Electronics\",        |\n|        | Output: sorted 2 docs                    |  revenue:500, units:2}     |\n|        |                                         | {_id:\"Accessories\",        |\n|        |                                         |  revenue:50, units:2}      |\n+--------+-----------------------------------------+----------------------------+\n| $limit | Keep top 5 (we have 2, all kept)         | Same as above              |\n+========+=========================================+============================+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1557-c-aggregation-pipeline",
      children: "15.5.7 C++ Aggregation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <bsoncxx/builder/stream/document.hpp>\n#include <bsoncxx/builder/stream/array.hpp>\n#include <bsoncxx/json.hpp>\n#include <mongocxx/client.hpp>\n#include <mongocxx/instance.hpp>\n#include <mongocxx/pipeline.hpp>\n#include <mongocxx/uri.hpp>\n#include <iostream>\n\nusing bsoncxx::builder::stream::document;\nusing bsoncxx::builder::stream::open_document;\nusing bsoncxx::builder::stream::close_document;\nusing bsoncxx::builder::stream::open_array;\nusing bsoncxx::builder::stream::close_array;\nusing bsoncxx::builder::stream::finalize;\n\nvoid runSalesAggregation() {\n    mongocxx::instance instance{};\n    mongocxx::client client{mongocxx::uri{\"mongodb://localhost:27017\"}};\n    auto db = client[\"ecommerce\"];\n\n    mongocxx::pipeline p;\n\n    // Stage 1: Filter delivered orders\n    p.match(document{} << \"status\" << \"delivered\" << finalize);\n\n    // Stage 2: Unwind items array\n    p.unwind(document{} << \"path\" << \"$items\" << finalize);\n\n    // Stage 3: Group by product category\n    p.group(document{}\n        << \"_id\" << \"$product.category\"\n        << \"total_revenue\" << open_document\n            << \"$sum\" << open_document\n                << \"$multiply\" << open_array\n                    << \"$items.qty\" << \"$items.price\"\n                << close_array\n            << close_document\n        << close_document\n        << \"units_sold\" << open_document\n            << \"$sum\" << \"$items.qty\"\n        << close_document\n        << \"avg_price\" << open_document\n            << \"$avg\" << \"$items.price\"\n        << close_document\n        << finalize);\n\n    // Stage 4: Sort by revenue\n    p.sort(document{} << \"total_revenue\" << -1 << finalize);\n\n    // Stage 5: Limit\n    p.limit(10);\n\n    // Execute\n    auto cursor = db[\"orders\"].aggregate(p);\n\n    for (auto&& doc : cursor) {\n        std::cout << bsoncxx::to_json(doc) << std::endl;\n    }\n}\n\nvoid runLookupJoin() {\n    mongocxx::pipeline p;\n\n    // $lookup: join orders with customers\n    bsoncxx::builder::stream::document lookup_stage;\n    lookup_stage << \"$lookup\" << open_document\n        << \"from\" << \"customers\"\n        << \"localField\" << \"customer_id\"\n        << \"foreignField\" << \"_id\"\n        << \"as\" << \"customer\"\n        << close_document;\n\n    p.match(document{} << \"total\" << open_document\n                       << \"$gt\" << 100\n                       << close_document\n                    << finalize);\n\n    // Raw BSON for $lookup (pipeline wrapper may not support all options)\n    bsoncxx::document::value pipeline_doc = bsoncxx::builder::stream::document{}\n        << \"$lookup\" << open_document\n            << \"from\" << \"customers\"\n            << \"localField\" << \"customer_id\"\n            << \"foreignField\" << \"_id\"\n            << \"as\" << \"customer_info\"\n        << close_document\n        << finalize;\n    // Append raw document to pipeline via append_stage equivalent\n    // mongocxx::pipeline doesn't support arbitrary stages directly\n    // Workaround: use db.run_command or mongocxx::pipeline with builder\n}\n\nint main() {\n    runSalesAggregation();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1558-python-aggregation-pipeline",
      children: "15.5.8 Python Aggregation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pymongo import MongoClient, ASCENDING, DESCENDING\nfrom datetime import datetime, timezone\nfrom bson.son import SON\n\n\nclass MongoDBAggregation:\n    \"\"\"MongoDB Aggregation Pipeline examples.\"\"\"\n\n    def __init__(self, uri=\"mongodb://localhost:27017\", db_name=\"ecommerce\"):\n        self.client = MongoClient(uri)\n        self.db = self.client[db_name]\n\n    def sales_by_category(self, days_back=30):\n        \"\"\"Revenue grouped by product category from last N days.\"\"\"\n        pipeline = [\n            # Stage 1: Filter recent delivered orders\n            {\"$match\": {\n                \"status\": {\"$in\": [\"shipped\", \"delivered\"]},\n                \"created_at\": {\n                    \"$gte\": datetime.now(timezone.utc).replace(\n                        day=datetime.now(timezone.utc).day - days_back\n                    )\n                }\n            }},\n            # Stage 2: Unwind items array\n            {\"$unwind\": \"$items\"},\n            # Stage 3: Join with products collection\n            {\"$lookup\": {\n                \"from\": \"products\",\n                \"localField\": \"items.product_id\",\n                \"foreignField\": \"_id\",\n                \"as\": \"product\"\n            }},\n            # Stage 4: Unwind products (since lookup returns array)\n            {\"$unwind\": \"$product\"},\n            # Stage 5: Group by category\n            {\"$group\": {\n                \"_id\": \"$product.category\",\n                \"total_revenue\": {\n                    \"$sum\": {\"$multiply\": [\"$items.qty\", \"$items.price\"]}\n                },\n                \"units_sold\": {\"$sum\": \"$items.qty\"},\n                \"unique_customers\": {\"$addToSet\": \"$customer_id\"},\n                \"avg_item_price\": {\"$avg\": \"$items.price\"},\n                \"order_count\": {\"$sum\": 1}\n            }},\n            # Stage 6: Add computed fields\n            {\"$addFields\": {\n                \"unique_customer_count\": {\"$size\": \"$unique_customers\"}\n            }},\n            # Stage 7: Sort by revenue descending\n            {\"$sort\": SON([(\"total_revenue\", -1)])},\n            # Stage 8: Top 10\n            {\"$limit\": 10},\n            # Stage 9: Clean up output\n            {\"$project\": {\n                \"category\": \"$_id\",\n                \"total_revenue\": {\"$round\": [\"$total_revenue\", 2]},\n                \"units_sold\": 1,\n                \"unique_customers\": \"$unique_customer_count\",\n                \"avg_item_price\": {\"$round\": [\"$avg_item_price\", 2]},\n                \"order_count\": 1,\n                \"_id\": 0\n            }}\n        ]\n\n        results = list(self.db.orders.aggregate(pipeline))\n        return results\n\n    def customer_lifetime_value(self):\n        \"\"\"Compute CLV: total spent per customer with ranking.\"\"\"\n        pipeline = [\n            {\"$match\": {\"status\": {\"$ne\": \"cancelled\"}}},\n            {\"$group\": {\n                \"_id\": \"$customer_id\",\n                \"total_spent\": {\"$sum\": \"$total\"},\n                \"order_count\": {\"$sum\": 1},\n                \"avg_order_value\": {\"$avg\": \"$total\"},\n                \"first_order\": {\"$min\": \"$created_at\"},\n                \"last_order\": {\"$max\": \"$created_at\"}\n            }},\n            {\"$addFields\": {\n                \"customer_lifetime_days\": {\n                    \"$dateDiff\": {\n                        \"startDate\": \"$first_order\",\n                        \"endDate\": \"$$NOW\",\n                        \"unit\": \"day\"\n                    }\n                }\n            }},\n            {\"$sort\": SON([(\"total_spent\", -1)])},\n            {\"$limit\": 100},\n            # Lookup customer name\n            {\"$lookup\": {\n                \"from\": \"users\",\n                \"localField\": \"_id\",\n                \"foreignField\": \"_id\",\n                \"as\": \"customer\"\n            }},\n            {\"$unwind\": {\"path\": \"$customer\", \"preserveNullAndEmptyArrays\": True}},\n            {\"$project\": {\n                \"customer_name\": \"$customer.name\",\n                \"total_spent\": 1,\n                \"order_count\": 1,\n                \"avg_order_value\": {\"$round\": [\"$avg_order_value\", 2]},\n                \"customer_since\": \"$first_order\",\n                \"lifetime_days\": \"$customer_lifetime_days\",\n                \"_id\": 0\n            }}\n        ]\n        return list(self.db.orders.aggregate(pipeline))\n\n    def geo_sales_dashboard(self):\n        \"\"\"Sales by city with geographic grouping.\"\"\"\n        pipeline = [\n            {\"$match\": {\"status\": \"delivered\"}},\n            {\"$group\": {\n                \"_id\": \"$shipping_address.city\",\n                \"total_revenue\": {\"$sum\": \"$total\"},\n                \"order_count\": {\"$sum\": 1}\n            }},\n            {\"$sort\": SON([(\"total_revenue\", -1)])},\n            {\"$project\": {\n                \"city\": \"$_id\",\n                \"total_revenue\": {\"$round\": [\"$total_revenue\", 2]},\n                \"order_count\": 1,\n                \"_id\": 0\n            }}\n        ]\n        return list(self.db.orders.aggregate(pipeline))\n\n    def realtime_dashboard(self):\n        \"\"\"Multiple aggregations in parallel using $facet.\"\"\"\n        pipeline = [\n            {\"$match\": {\n                \"created_at\": {\n                    \"$gte\": datetime.now(timezone.utc).replace(hour=0, minute=0,\n                                                               second=0, microsecond=0)\n                }\n            }},\n            {\"$facet\": {\n                \"revenue_by_hour\": [\n                    {\"$group\": {\n                        \"_id\": {\"$hour\": \"$created_at\"},\n                        \"revenue\": {\"$sum\": \"$total\"},\n                        \"orders\": {\"$sum\": 1}\n                    }},\n                    {\"$sort\": SON([(\"_id\", 1)])}\n                ],\n                \"top_products\": [\n                    {\"$unwind\": \"$items\"},\n                    {\"$group\": {\n                        \"_id\": \"$items.name\",\n                        \"units_sold\": {\"$sum\": \"$items.qty\"}\n                    }},\n                    {\"$sort\": SON([(\"units_sold\", -1)])},\n                    {\"$limit\": 5}\n                ],\n                \"status_breakdown\": [\n                    {\"$group\": {\n                        \"_id\": \"$status\",\n                        \"count\": {\"$sum\": 1}\n                    }}\n                ],\n                \"total_metrics\": [\n                    {\"$group\": {\n                        \"_id\": None,\n                        \"total_revenue\": {\"$sum\": \"$total\"},\n                        \"total_orders\": {\"$sum\": 1},\n                        \"avg_order\": {\"$avg\": \"$total\"}\n                    }}\n                ]\n            }}\n        ]\n        return list(self.db.orders.aggregate(pipeline))\n\n    def close(self):\n        self.client.close()\n\n\nif __name__ == \"__main__\":\n    agg = MongoDBAggregation()\n    sales = agg.sales_by_category()\n    print(\"Sales by category:\", sales)\n    clv = agg.customer_lifetime_value()\n    print(\"Top customers:\", clv[:3])\n    dashboard = agg.realtime_dashboard()\n    print(\"Dashboard:\", dashboard)\n    agg.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1559-complexity-analysis-for-aggregation-pipeline",
      children: "15.5.9 Complexity Analysis for Aggregation Pipeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$match"
            }), " (with index)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index lookup + streaming m results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$match"
            }), " (no index)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full scan n documents, output m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$group"
            }), " (hash-based)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(g)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash all n documents into g groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$sort"
            }), " (in-memory)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard comparison sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$sort"
            }), " (external)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n / memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort with disk spills"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-document transformation; n in, m out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$lookup"
            }), " (indexed foreign)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * log f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each of n docs, B-tree lookup in f foreign docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$lookup"
            }), " (unindexed)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each of n docs, scan all f foreign docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$unwind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each doc with array size a becomes a docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncates stream after k docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$skip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must process k docs before emitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$facet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k * sub-pipelines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs k sub-pipelines in parallel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$bucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b = number of bucket boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full pipeline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(sum of stages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(max stage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipelines are stage composition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15510-advantages--disadvantages-of-aggregation-pipeline",
      children: "15.5.10 Advantages & Disadvantages of Aggregation Pipeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Powerful transformations"
            }), ": Multi-stage processing without leaving DB"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory-bound"
            }), ": 100MB limit per stage (allowDiskUse for spillover)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Index-aware"
            }), ": $match and $sort leverage indexes"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No recursive operations"
            }), ": Can't process hierarchical/tree data easily"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Streaming"
            }), ": Lazy evaluation → results available incrementally"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            }), ": Hard to debug → can't inspect intermediate stages"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$facet parallel"
            }), ": Multiple pipelines in one pass"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Write bottleneck"
            }), ": $out and $merge stages lock collections"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressions"
            }), ": Rich expression language ($cond, $map, $reduce)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["**", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            }), ": Deeply nested pipelines become unreadable"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema evolution"
            }), ": Handles varying document structures"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Stage ordering"
            }), ": Wrong order (e.g., $group before $match) kills performance"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15511-edge-cases-in-aggregation-pipeline",
      children: "15.5.11 Edge Cases in Aggregation Pipeline"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$group memory exceeds 100MB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Exceeded memory limit for $group\" error"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ allowDiskUse: true }"
            }), " to pipeline options"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$lookup on unindexed foreignField"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full collection scan per input document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create index on foreignField (and localField)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$unwind on non-array field"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Error unless ", (0,jsx_runtime.jsx)(_components.code, {
              children: "preserveNullAndEmptyArrays: true"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate the field is an array; handle missing cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$sort + $limit > 100MB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error or OOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place $limit AFTER $sort; use top-k optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$facet with output > 16MB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-pipeline result exceeds BSON doc size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce facet stages; use $out for large results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipeline returns no results"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty cursor; not an error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check stage logic: wrong field names, empty source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data type mismatch in $group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$sum on string field returns 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use $convert or $toDouble in $project before $group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$lookup with large result set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result array embedded in each doc (bloated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add $match inside pipeline lookup; limit fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time-series $group granularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong bucket alignment due to timezone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use $dateTrunc for consistent boundaries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "156-replication",
      children: "15.6 Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1561-replica-set-overview",
      children: "15.6.1 Replica Set Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "replica set"
      }), " is a group of MongoDB servers that maintain the same data set, providing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "high availability"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data redundancy"
      }), ". All writes go to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary"
      }), " node, which records changes in an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "oplog"
      }), " (operations log). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary"
      }), " nodes replicate the oplog and apply the same operations asynchronously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A team of scribes in a medieval scriptorium."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary Scribe"
        }), ": The master scribe who writes the original manuscript (all writes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secondary Scribes"
        }), ": Apprentices copying the manuscript (read-only replicas)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Oplog"
        }), ": The master's dictation notes → each scribe reads these to create their copy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Election"
        }), ": When the master scribe falls ill, the apprentices vote to choose a new master."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replica Set Architecture (3-node):\n\n                     ┌──────────────────────────────┐\n                     │      Client Application       │\n                     │  Write: primary only          │\n                     │  Read: configurable pref      │\n                     └────────┬─────────────────────┘\n                              │\n                    writes ───┤ reads (optional)\n                              │\n                ┌─────────────▼──────────────────┐\n                │       PRIMARY (mongod)          │\n                │  State: PRIMARY                 │\n                │  Priority: 2                    │\n                │  Oplog: last 24h or 10% disk    │\n                └──────────┬──────────────────────┘\n                           │ oplog replication\n               ┌───────────┼───────────────┐\n               │           │               │\n               ▼           ▼               ▼\n    ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐\n    │  SECONDARY 1     │ │  SECONDARY 2     │ │  ARBITER         │\n    │  State: SECONDARY│ │  State: SECONDARY│ │  State: ARBITER  │\n    │  Priority: 1     │ │  Priority: 1     │ │  Priority: 0     │\n    │  Votes: 1        │ │  Votes: 1        │ │  Votes: 1        │\n    │  Hidden: false   │ │  Hidden: true    │ │  Data: none      │\n    │  Reads: allowed  │ │  Reads: no       │ │  Reads: no       │\n    └──────────────────┘ └──────────────────┘ └──────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1562-replica-set-components",
      children: "15.6.2 Replica Set Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Voting"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepts all writes, processes reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one primary at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicates primary's oplog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be configured as hidden, delayed, or read-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arbiter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Participates in elections only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight, no storage requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delayed Secondary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicates with time delay (e.g., 1 hour)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data set (delayed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (priority 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For point-in-time recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hidden Secondary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible to application queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For analytics, backup, reporting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1563-replica-set-election-process--numbered-steps",
      children: "15.6.3 Replica Set Election Process → Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The election process determines which secondary becomes the new primary when the current primary becomes unavailable."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: HEARTBEAT FAILURE DETECTION\n        Secondary nodes send heartbeats to primary every 2 seconds\n        If primary doesn't respond for 10 seconds (electionTimeoutMillis),\n        secondary marks primary as unreachable\n\nSTEP 2: ELECTION TRIGGER\n        A secondary with priority > 0 detects primary is down\n        or a secondary receives a vote request from another secondary\n\nSTEP 3: CANDIDATE ANNOUNCEMENT\n        The secondary transitions to CANDIDATE state\n        Candidate increments its term number (monotonically increasing)\n        Candidate sends voteRequest to all other voting members\n\nSTEP 4: VOTING\n        Each voting member evaluates the candidate:\n        - Am I aware of a higher-term primary? → Vote NO\n        - Is candidate's oplog ahead of mine? → Vote NO (lagging secondary)\n        - Has candidate's oplog advanced far enough to be primary? → Check freshness\n        - Am I within the same network partition? → Basic health check\n\n        Voting rules:\n        - A node votes YES if:\n          1) It cannot see the current primary (or there is none)\n          2) The candidate's oplog is at least as fresh as its own\n          3) It hasn't already voted in this term\n        - Otherwise: Vote NO\n\nSTEP 5: VOTE COUNT\n        Candidate needs a MAJORITY of all voting members to win\n        Majority = floor(total_voting_members / 2) + 1\n        Example: 3 voting members → majority = 2 votes needed\n        Example: 5 voting members → majority = 3 votes needed\n        Example: 7 voting members → majority = 4 votes needed\n\nSTEP 6: PRIMARY TRANSITION (if won)\n        Candidate transitions to PRIMARY state\n        Opens connections for client writes\n        Starts accepting write operations\n\nSTEP 7: OPLOG SYNCHRONIZATION (if lost)\n        Loser returns to SECONDARY state\n        Starts replicating from the new primary\n        Syncs missing oplog entries\n\nSTEP 8: SPLIT BRAIN PREVENTION\n        Two nodes that can't see each other may both believe they are primary.\n        MongoDB prevents this by:\n        - Requiring majority vote (no split majority possible in 3-node sets)\n        - Using rollback: old primary, when it reconnects, reverts writes\n          that weren't replicated to the majority\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1564-dry-run-trace-replica-set-failover",
      children: "15.6.4 Dry Run Trace: Replica Set Failover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " 3-node replica set (P1, S1, S2). P1 loses network connectivity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Time 0: Normal operation\n+────────+──────────+──────────────────────────────────────────+\n| Node   | State    | Details                                  |\n+────────+──────────+──────────────────────────────────────────+\n| P1     | PRIMARY  | Accepts writes. Oplog: term 1, last opt=100|\n| S1     | SECONDARY| Replicating from P1. Oplog term 1, opt=100|\n| S2     | SECONDARY| Replicating from P1. Oplog term 1, opt=100|\n+────────+──────────+──────────────────────────────────────────+\n\nTime 5s: Network partition → P1 can't reach S1, S2\n+────────+──────────+──────────────────────────────────────────+\n| P1     | PRIMARY  | Still primary (no heartbeat response)    |\n| S1     | SECONDARY| Heartbeat to P1: TIMEOUT (2s elapsed)   |\n| S2     | SECONDARY| Heartbeat to P1: TIMEOUT                 |\n+────────+──────────+──────────────────────────────────────────+\n\nTime 10s: Election timeout reached\n+────────+──────────+──────────────────────────────────────────+\n| P1     | PRIMARY  | Still accepting writes (isolated)        |\n| S1     | CANDIDATE| electionTimeoutMillis=10s elapsed        |\n| S2     | CANDIDATE| Also detecting absence and starting       |\n+────────+──────────+──────────────────────────────────────────+\n\nTime 10.5s: Vote exchange\n+────────+──────────+──────────────────────────────────────────+\n| S1     | CANDIDATE| Sends voteRequest to S2                  |\n| S2     | CANDIDATE| Receives S1's request. Check:             |\n|        |          | - Can't see P1? YES (vote YES)           |\n|        |          | - S1's oplog as fresh? YES (both opt=100) |\n|        |          | - Already voted this term? NO             |\n|        |          | → Votes YES for S1                        |\n|        |          | Sends own voteRequest to S1               |\n+────────+──────────+──────────────────────────────────────────+\n\nTime 11s: Vote count\n+────────+──────────+──────────────────────────────────────────+\n| S1     | PRIMARY  | Votes: S1 (self) = 1, S2 = 1 = 2 votes  |\n|        |          | Majority needed: floor(3/2)+1 = 2         |\n|        |          | Has 2 → ELECTED! Name: \"rs0:27018\"        |\n| S2     | SECONDARY| S1 already elected → returns to SECONDARY |\n|        |          | Starts replicating from S1 (now primary)   |\n| P1     | PRIMARY  | Still isolated, still accepting writes    |\n|        |          | (writes will be rolled back on reconnect)  |\n+────────+──────────+──────────────────────────────────────────+\n\nTime 30s: Partition heals\n+────────+──────────+──────────────────────────────────────────+\n| P1     |          | Detects S1 as PRIMARY with higher term    |\n|        | ROLLBACK | P1 was term 1, S1 is term 2              |\n|        |          | P1 must roll back any writes not in S1's  |\n|        |          | oplog (opt > 100 if any writes happened)   |\n|        | SECONDARY| Rollback complete. Becomes SECONDARY.     |\n|        |          | Starts replicating from S1                 |\n+────────+──────────+──────────────────────────────────────────+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1565-numbered-steps-oplog-replication",
      children: "15.6.5 Numbered Steps: Oplog Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Primary records each write operation as an oplog entry\n        Oplog format: { ts: Timestamp, t: term, op: \"i\"|\"u\"|\"d\", \n                        ns: \"db.collection\", o: document, o2: update_criteria }\nSTEP 2: Secondary initiates initial sync (first time) or steady-state sync\n        - Initial sync: copies all data files from primary (rs.initiate)\n        - Steady-state: tails the primary's oplog (continuous)\nSTEP 3: Secondary uses tailable cursor to read primary's oplog\n        - Cursor position: secondary's lastAppliedOpTime\nSTEP 4: Primary sends oplog entries to secondary\n        - Batched for efficiency (default: ~10ms batch delay)\nSTEP 5: Secondary applies oplog entries to its own data files\n        - Each operation is idempotent (can be safely re-applied)\nSTEP 6: Secondary updates its lastAppliedOpTime\nSTEP 7: Secondary reports its oplog lag back to primary\n        - Lag = primary's last optime − secondary's last optime\n        - Warning threshold: 10 seconds (rs.printSecondaryReplicationInfo())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1566-read-preference-options",
      children: "15.6.6 Read Preference Options"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Preference"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "primary"
            }), " (default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All reads from primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "primaryPreferred"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read from primary; fallback to secondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency with consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "secondary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read only from secondaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, analytics, backups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "secondaryPreferred"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read from secondary; fallback to primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce primary read load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "nearest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read from lowest-latency node (any type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geo-distributed, cross-region deployments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Connection string with read preference\nmongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=rs0&readPreference=secondaryPreferred\n\n// Read preference tags (direct reads to specific secondary)\nmongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=rs0&readPreference=secondary&readPreferenceTags=nodeType:reporting\n\n// Driver-level read preference (Node.js)\nconst { MongoClient } = require('mongodb');\nconst client = new MongoClient(uri, {\n    readPreference: 'secondaryPreferred',\n    readConcern: { level: 'local' },\n    writeConcern: { w: 'majority' }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1567-c-replication-setup",
      children: "15.6.7 C++ Replication Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <bsoncxx/json.hpp>\n#include <mongocxx/client.hpp>\n#include <mongocxx/instance.hpp>\n#include <mongocxx/uri.hpp>\n#include <iostream>\n\nvoid configureReplicaSet() {\n    mongocxx::instance instance{};\n    \n    // Connect to replica set (connection string includes all members)\n    mongocxx::uri uri(\"mongodb://host1:27017,host2:27017,host3:27017/\"\n                      \"ecommerce?replicaSet=rs0&\"\n                      \"w=majority&\"\n                      \"readPreference=secondaryPreferred\");\n    \n    mongocxx::client client(uri);\n    auto db = client[\"ecommerce\"];\n\n    // Write with majority write concern\n    mongocxx::options::insert insert_opts;\n    insert_opts.write_concern(mongocxx::write_concern{});\n    // Set majority write concern\n    mongocxx::write_concern wc;\n    wc.acknowledge_level(mongocxx::write_concern::level::k_majority);\n    insert_opts.write_concern(wc);\n\n    auto collection = db[\"users\"];\n    auto doc = document{} << \"name\" << \"Alice\" \n                          << \"email\" << \"alice@example.com\" \n                          << finalize;\n    auto result = collection.insert_one(doc.view(), insert_opts);\n    \n    std::cout << \"Inserted with majority write concern, _id: \"\n              << result->inserted_id().get_oid().value.to_string()\n              << std::endl;\n\n    // Check replica set status\n    auto status = db.run_command(\n        document{} << \"replSetGetStatus\" << 1 << finalize\n    );\n    std::cout << \"Replica set status: \" \n              << bsoncxx::to_json(status) << std::endl;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1568-python-replication-configuration",
      children: "15.6.8 Python Replication Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pymongo import MongoClient, ReadPreference, WriteConcern\nfrom pymongo.errors import ConnectionFailure, OperationFailure\nimport time\n\n\nclass ReplicaSetManager:\n    \"\"\"MongoDB Replica Set operations from Python driver.\"\"\"\n\n    def __init__(self, replica_set_name=\"rs0\", hosts=None):\n        hosts = hosts or [\"localhost:27017\", \"localhost:27018\", \"localhost:27019\"]\n        self.replica_uri = (\n            f\"mongodb://{','.join(hosts)}/\"\n            f\"?replicaSet={replica_set_name}\"\n            f\"&w=majority\"\n            f\"&readPreference=secondaryPreferred\"\n            f\"&retryWrites=true\"\n        )\n        self.client = MongoClient(self.replica_uri)\n        self.db = self.client[\"ecommerce\"]\n\n    def get_replica_set_status(self):\n        \"\"\"Get detailed replica set status.\"\"\"\n        try:\n            status = self.db.admin.command(\"replSetGetStatus\")\n            for member in status.get(\"members\", []):\n                print(f\"  {member['name']}: state={member['stateStr']}, \"\n                      f\"health={member['health']}, \"\n                      f\"optime={member.get('optimeDate', 'N/A')}\")\n            return status\n        except OperationFailure as e:\n            print(f\"Not connected to a replica set: {e}\")\n            return None\n\n    def write_with_consistency(self, collection, document,\n                                write_concern=\"majority\",\n                                journal=True):\n        \"\"\"Write with specified write concern.\"\"\"\n        wc = WriteConcern(w=write_concern, j=journal, wtimeout=5000)\n        coll = self.db[collection].with_options(write_concern=wc)\n        try:\n            result = coll.insert_one(document)\n            print(f\"Inserted: {result.inserted_id} \"\n                  f\"(write concern: {write_concern})\")\n            return result\n        except ConnectionFailure as e:\n            print(f\"Write failed (may not have reached majority): {e}\")\n            return None\n\n    def read_with_preference(self, collection, filter_query,\n                              preference=ReadPreference.SECONDARY):\n        \"\"\"Read with specified read preference.\"\"\"\n        coll = self.db[collection].with_options(\n            read_preference=preference\n        )\n        results = list(coll.find(filter_query).limit(5))\n        print(f\"Read from {preference}: found {len(results)} docs\")\n        return results\n\n    def simulate_failover(self, primary_host):\n        \"\"\"Simulate primary failure (use with caution in dev).\"\"\"\n        admin = self.client.admin\n        try:\n            admin.command(\"replSetStepDown\", 60, force=True)\n            print(f\"Stepped down primary: {primary_host}\")\n        except OperationFailure as e:\n            print(f\"Failed to step down: {e}\")\n\n    def monitor_replication_lag(self):\n        \"\"\"Monitor replication lag.\"\"\"\n        status = self.get_replica_set_status()\n        if status:\n            primary_optime = None\n            for member in status.get(\"members\", []):\n                if member[\"stateStr\"] == \"PRIMARY\":\n                    primary_optime = member.get(\"optimeDate\")\n                    break\n            if primary_optime:\n                for member in status.get(\"members\", []):\n                    if member[\"stateStr\"] == \"SECONDARY\":\n                        lag = (primary_optime - member.get(\"optimeDate\")).total_seconds()\n                        print(f\"  Replication lag to {member['name']}: {lag}s\")\n                        if lag > 10:\n                            print(\"  WARNING: Replication lag exceeds 10 seconds!\")\n\n    def close(self):\n        self.client.close()\n\n\n# Usage\nif __name__ == \"__main__\":\n    mgr = ReplicaSetManager()\n    status = mgr.get_replica_set_status()\n    if status:\n        mgr.write_with_consistency(\"test\", {\"msg\": \"hello\", \"ts\": time.time()})\n        mgr.read_with_preference(\"test\", {})\n        mgr.monitor_replication_lag()\n    mgr.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1569-complexity-analysis-for-replication",
      children: "15.6.9 Complexity Analysis for Replication"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write to primary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + O(k log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document write + index updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oplog entry creation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(op)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to capped collection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oplog replication (steady-state)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch b oplog entries transferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial sync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data copy from primary to secondary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Election"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V = voting members; messages exchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rollback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r = rolled-back operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heartbeat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²) network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node heartbeats every other node"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15610-advantages--disadvantages-of-replication",
      children: "15.6.10 Advantages & Disadvantages of Replication"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High availability"
            }), ": Automatic failover within 10-15s"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Write latency"
            }), ": Majority write concern requires network round-trip"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data redundancy"
            }), ": Multiple copies of data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication lag"
            }), ": Async by default → stale reads possible"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Read scaling"
            }), ": Distribute reads to secondaries"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rollback"
            }), ": Unreplicated writes lost on primary failure"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Disaster recovery"
            }), ": Delayed secondary for point-in-time recovery"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            }), ": Requires minimum 3 nodes for production"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No downtime maintenance"
            }), ": Rolling upgrades"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Network overhead"
            }), ": Heartbeats and oplog transfer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatic healing"
            }), ": Nodes rejoin and sync automatically"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Write conflict"
            }), ": Not designed for multi-primary (no active-active)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15611-edge-cases-in-replication",
      children: "15.6.11 Edge Cases in Replication"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network partition (split-brain)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two nodes may think they're primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Majority vote prevents split-brain; old primary rolls back writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rollback of confirmed writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write acknowledged with w:1, primary fails before replicating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use w:\"majority\" for critical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale secondary becomes primary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node with outdated data takes over"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set priority low for lagging nodes; monitor replication lag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arbiter in a 2-node set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbiter can cause elections to fail if network partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer 3 data-bearing nodes; arbiters don't provide redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chained replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary replicates from another secondary (higher latency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set chainingAllow=false if strict lag requirements exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oplog too small"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oldest oplog entry removed before secondary syncs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set oplog size to >= 24h worth of writes (default: 10% disk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary stepdown with in-progress writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes in progress may fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable retryable writes (drivers retry once)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "157-sharding",
      children: "15.7 Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1571-sharding-architecture",
      children: "15.7.1 Sharding Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding"
      }), " is MongoDB's approach to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "horizontal scaling"
      }), " → distributing data across multiple servers (shards) so that the database can handle datasets and throughput that exceed a single server's capacity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A library that has outgrown one building."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Librarian (mongos)"
        }), ": The router that knows which book is in which building."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Card Catalog (config server)"
        }), ": The metadata that maps book IDs to buildings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buildings (shards)"
        }), ": Each building holds a subset of the books."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patrons (clients)"
        }), ": Ask the librarian for books; the librarian fetches from the right building."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sharded Cluster Architecture:\n\n                     ┌──────────────────────────────┐\n                     │       Client Application      │\n                     │  Connects to mongos router    │\n                     └──────────────┬───────────────┘\n                                    │\n                           ┌────────▼────────┐\n                           │    mongos (x2)  │\n                           │  Query Router   │\n                           │  Routes queries │\n                           │  to correct shard│\n                           └────────┬────────┘\n                                    │\n              ┌─────────────────────┼─────────────────────┐\n              │                     │                      │\n              ▼                     ▼                      ▼\n     ┌───────────────┐   ┌───────────────┐    ┌───────────────┐\n     │   Shard A     │   │   Shard B     │    │   Shard C     │\n     │  (ReplicaSet) │   │  (ReplicaSet) │    │  (ReplicaSet) │\n     │  P ── S1      │   │  P ── S1      │    │  P ── S1      │\n     │  └── S2       │   │  └── S2       │    │  └── S2       │\n     │  chunks:      │   │  chunks:      │    │  chunks:      │\n     │  user_0000-   │   │  user_1M-2M   │    │  user_2M-3M   │\n     │  1M           │   │               │    │               │\n     └───────────────┘   └───────────────┘    └───────────────┘\n              │                     │                      │\n              └─────────────────────┼──────────────────────┘\n                                    │\n                           ┌────────▼────────┐\n                           │ Config Server   │\n                           │ (ReplicaSet)    │\n                           │ Metadata store  │\n                           │ routing info    │\n                           └─────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1572-shard-key-selection--detailed-analysis",
      children: "15.7.2 Shard Key Selection → Detailed Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What is a shard key?"
      }), " A field (or compound fields) MongoDB uses to distribute documents across shards. The shard key determines which chunk a document belongs to."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shard Key Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be an indexed field (or compound index prefix)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must exist in every document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immutable (cannot change after creation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selected at collection creation time (or after enabling sharding)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shard Key Selection Criteria:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Good Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bad Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cardinality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More unique values → better distribution"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "user_id"
            }), " (10M users)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gender"
            }), " (2 values)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid values that dominate writes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hashed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_id"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "country: \"USA\""
            }), " for 60% of users"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monotonic change"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonically increasing → all writes to last chunk"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Regular ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_id"
            }), " (auto-increment)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hashed instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes should spread across all shards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hashed email domain"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "created_at"
            }), " (all today's data on one shard)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries should target few shards"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customer_id"
            }), " for customer queries"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " (scatter-gather queries)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shard Key Selection Decision Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q1: Do queries always include shard key?\n    YES → Range-based sharding (good query locality)\n    NO → Hashed sharding (better write distribution)\n\nQ2: Is the shard key monotonically increasing?\n    YES → Use hashed sharding (avoid hotspotting)\n    NO → Range sharding may be acceptable\n\nQ3: High cardinality (> 1000 unique values)?\n    YES → Suitable for shard key\n    NO → Use compound shard key (add another field)\n\nQ4: Does shard key support targeted queries?\n    YES → Queries go to 1-2 shards (scatter-gather avoided)\n    NO → All queries broadcast to all shards\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1573-hashed-vs-ranged-sharding--comparison",
      children: "15.7.3 Hashed vs Ranged Sharding → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hashed Sharding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ranged Sharding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash function maps key → evenly distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key ranges split across shards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform (no hotspots)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May hotspot on monotonically increasing keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported (hash destroys ordering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient (range query targets few shards)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sort queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scatter-gather (no ordering per shard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can use index-based sort per shard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Targeted queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match → single shard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match → single shard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shard splitting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunks split when full (stable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range chunks split at boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-write, no range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, analytics, range-based queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Config example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ _id: \"hashed\" }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ customer_id: 1, date: -1 }"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// === HASHED SHARDING ===\n// Best for: uniform write distribution\nsh.shardCollection(\"ecommerce.orders\", { _id: \"hashed\" })\n// MongoDB applies MD5 hash to _id, uses first 4 bytes as chunk key\n// Pros: Even write distribution\n// Cons: No range query isolation; sort must merge across shards\n\n// === RANGED SHARDING ===\n// Best for: range queries, reporting\nsh.shardCollection(\"ecommerce.users\", { country: 1, user_id: 1 })\n// Data organized by (country, user_id) ranges\n// Chunks: [(\"AF\",-∞) → (\"AF\",\"user5\")], [(\"AF\",\"user5\") → (\"IN\",\"user100\")], ...\n// Pros: Efficient range queries on shard key prefix\n// Cons: Hotspot risks with monotonically increasing keys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1574-numbered-steps-shard-routing-for-a-query",
      children: "15.7.4 Numbered Steps: Shard Routing for a Query"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Ranged sharding on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ customer_id: 1 }"
      }), ". Query for customer \"user_abc123\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Client sends query to mongos router\n        db.orders.find({ customer_id: \"user_abc123\" })\n\nSTEP 2: mongos extracts shard key value from the query\n        shard_key = \"user_abc123\"\n\nSTEP 3: mongos queries config server for chunk metadata\n        Config server has the chunk distribution map:\n        Chunk 1: [\"\" → \"user_999999\"]     → Shard A\n        Chunk 2: [\"user_1000000\" → ...]   → Shard B\n        \n        But wait → the chunk map is cached locally by mongos\n        for performance (refreshed on miss)\n\nSTEP 4: mongos determines target shard(s)\n        \"user_abc123\" falls in Chunk 1 → target Shard A\n        (Single targeted query → only one shard contacted)\n\nSTEP 5: mongos forwards query to the target shard's primary\nSTEP 6: Shard A's primary executes the query on its local replica set\nSTEP 7: Results returned to mongos\nSTEP 8: mongos merges/aggregates results (if multiple shards)\nSTEP 9: mongos returns final results to client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scatter-gather query (no shard key in filter):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Client sends: db.orders.find({ status: \"active\" })\n                                          ↑ no shard key in filter!\n\nSTEP 2: mongos determines this is a scatter-gather query\n        (cannot route to a single shard)\n\nSTEP 3: mongos broadcasts query to ALL shards in parallel\n        → Shard A primary\n        → Shard B primary\n        → Shard C primary\n\nSTEP 4: Each shard executes the query on its local data\n\nSTEP 5: Each shard returns its result set to mongos\n\nSTEP 6: mongos merges results (applies sort, limit, skip)\n\nSTEP 7: mongos returns merged results to client\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1575-dry-run-trace-shard-routing-with-chunk-migration",
      children: "15.7.5 Dry Run Trace: Shard Routing with Chunk Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Sharded collection ", (0,jsx_runtime.jsx)(_components.code, {
        children: "users"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ country: 1, user_id: 1 }"
      }), " with 4 chunks on 2 shards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial Shard Key Distribution:\n  Shard A (chunks): \n    [country:\"AF\", user_id:MinKey → country:\"IN\", user_id:MaxKey]\n    [country:\"IN\", user_id:MinKey → country:\"US\", user_id:MaxKey]\n  Shard B (chunks):\n    [country:\"US\", user_id:MinKey → country:\"ZW\", user_id:MaxKey]\n    [country:\"ZW\", user_id:MinKey → country:MaxKey, user_id:MaxKey]\n\nChunk metadata (on config server):\n+-------------+------------------------------+--------------+-----------+\n| Chunk ID    | Range                         | Shard        | Size      |\n+-------------+------------------------------+--------------+-----------+\n| C001        | {\"AF\",Min}→{\"IN\",Max}        | Shard A      | 512MB     |\n| C002        | {\"IN\",Min}→{\"US\",Max}        | Shard A      | 800MB  ←  |\n| C003        | {\"US\",Min}→{\"ZW\",Max}        | Shard B      | 256MB     |\n| C004        | {\"ZW\",Min}→{MaxKey,Max}      | Shard B      | 200MB     |\n+-------------+------------------------------+--------------+-----------+\n\nChunk C002 on Shard A has exceeded the recommended chunk size (default: 128MB, \nshown here as larger for illustration). The balancer will split it.\n\nSTEP 1 (Balancer): C002 exceeds maximum chunk size (e.g., 800MB vs target ~128MB)\nSTEP 2 (Split): C002 split at midpoint → C002a and C002b\n    C002a: {\"IN\",Min} → {\"IN\",\"user_500000\"}\n    C002b: {\"IN\",\"user_500000\"} → {\"US\",Max}\nSTEP 3 (Migrate): Balancer decides to move C002b to Shard B (load balancing)\nSTEP 4: C002b data is copied from Shard A to Shard B\nSTEP 5: Metadata updated on config server\nSTEP 6: Source chunk on Shard A is dropped\n\nFinal distribution:\n  Shard A: C001, C002a\n  Shard B: C002b, C003, C004\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1576-pseudocode-shard-routing-engine",
      children: "15.7.6 Pseudocode: Shard Routing Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION RouteQuery(mongos, query):\n    shard_key = ExtractShardKey(query)\n    \n    IF shard_key IS NOT NULL:\n        // Targeted query → route to specific shard\n        chunk = FindContainingChunk(mongos.chunkCache, shard_key)\n        IF chunk IS NULL:\n            // Cache miss → refresh from config server\n            mongos.chunkCache = RefreshChunkCache(configServer)\n            chunk = FindContainingChunk(mongos.chunkCache, shard_key)\n        \n        target_shard = chunk.shard\n        result = ForwardToShard(target_shard, query)\n        RETURN result\n    \n    ELSE:\n        // Scatter-gather → query all shards\n        results = Parallel.ForEach(mongos.shards, shard => {\n            return ForwardToShard(shard, query)\n        })\n        \n        // Merge partial results\n        IF query.hasSort:\n            results = MergeSorted(results, query.sort)\n        IF query.hasLimit:\n            results = results.Take(query.limit + query.skip)\n        IF query.hasSkip:\n            results = results.Skip(query.skip)\n        \n        RETURN results\n\n\nFUNCTION FindContainingChunk(chunk_cache, shard_key):\n    // Binary search over sorted chunk ranges\n    low = 0\n    high = chunk_cache.length - 1\n    \n    WHILE low <= high:\n        mid = (low + high) / 2\n        chunk = chunk_cache[mid]\n        \n        IF shard_key < chunk.min_key:\n            high = mid - 1\n        ELSE IF shard_key >= chunk.max_key:\n            low = mid + 1\n        ELSE:\n            RETURN chunk  // shard_key falls in this chunk\n    \n    RETURN NULL  // Not found (cache miss)\n\n\nFUNCTION BalanceChunks(mongos):\n    WHILE True:\n        // Get chunk distribution from config server\n        distribution = GetChunkDistribution(configServer)\n        \n        // Find shard with most chunks (max) and least (min)\n        max_shard = distribution.MaxBy(chunks => chunks.count)\n        min_shard = distribution.MinBy(chunks => chunks.count)\n        \n        IF max_shard.chunks.count - min_shard.chunks.count <= THRESHOLD:\n            SLEEP(10 seconds)\n            CONTINUE\n        \n        // Select a chunk from max_shard to migrate\n        chunk_to_move = SelectChunkToMove(max_shard, min_shard)\n        \n        // Begin migration\n        MigrationCopyData(chunk_to_move, max_shard, min_shard)\n        \n        // Update metadata when copy is complete\n        UpdateChunkMetadata(configServer, chunk_to_move, min_shard)\n        \n        // Drop chunk from source\n        DropChunk(max_shard, chunk_to_move)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1577-c-sharding-operations",
      children: "15.7.7 C++ Sharding Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <bsoncxx/json.hpp>\n#include <mongocxx/client.hpp>\n#include <mongocxx/instance.hpp>\n#include <mongocxx/uri.hpp>\n#include <iostream>\n\nusing bsoncxx::builder::stream::document;\nusing bsoncxx::builder::stream::finalize;\n\nvoid configureSharding() {\n    mongocxx::instance instance{};\n    \n    // Connect to mongos (router) not to individual mongod\n    mongocxx::uri uri(\"mongodb://mongos1:27017,mongos2:27017/ecommerce\");\n    mongocxx::client client(uri);\n    auto admin = client[\"admin\"];\n    auto db = client[\"ecommerce\"];\n\n    // Step 1: Enable sharding on database\n    auto result = admin.run_command(\n        document{} << \"enableSharding\" << \"ecommerce\" << finalize\n    );\n    std::cout << \"enableSharding: \" << bsoncxx::to_json(result) << std::endl;\n\n    // Step 2: Create index on shard key (required before sharding)\n    db[\"orders\"].create_index(\n        document{} << \"_id\" << \"hashed\" << finalize\n    );\n\n    // Step 3: Shard the collection\n    result = admin.run_command(document{}\n        << \"shardCollection\" << \"ecommerce.orders\"\n        << \"key\" << document{} << \"_id\" << \"hashed\" << finalize\n        << finalize\n    );\n    std::cout << \"shardCollection: \" << bsoncxx::to_json(result) << std::endl;\n\n    // Step 4: Check sharding status\n    result = admin.run_command(\n        document{} << \"shardingStatus\" << 1 << finalize\n    );\n    std::cout << \"Shard status: \" << bsoncxx::to_json(result) << std::endl;\n}\n\nint main() {\n    configureSharding();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1578-python-sharding-operations",
      children: "15.7.8 Python Sharding Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pymongo import MongoClient, ASCENDING, DESCENDING, HASHLED\nfrom pymongo.errors import OperationError\nimport time\n\n\nclass MongoDBShardManager:\n    \"\"\"Manage MongoDB sharded cluster operations.\"\"\"\n\n    def __init__(self, mongos_uri=\"mongodb://localhost:27017\"):\n        # Connect to mongos (not individual shard)\n        self.client = MongoClient(mongos_uri)\n        self.admin = self.client.admin\n        self.config = self.client.config\n\n    def enable_sharding(self, db_name):\n        \"\"\"Enable sharding on a database.\"\"\"\n        try:\n            result = self.admin.command(\"enableSharding\", db_name)\n            print(f\"Sharding enabled on {db_name}: {result}\")\n            return result\n        except OperationError as e:\n            print(f\"Error enabling sharding: {e}\")\n            return None\n\n    def shard_collection_hashed(self, db_name, collection, field=\"_id\"):\n        \"\"\"Shard a collection using hashed shard key.\"\"\"\n        full_name = f\"{db_name}.{collection}\"\n\n        # Create hashed index first\n        self.client[db_name][collection].create_index(\n            [(field, HASHLED)],\n            background=True\n        )\n\n        # Shard with hashed key\n        try:\n            result = self.admin.command(\"shardCollection\", full_name, key={field: \"hashed\"})\n            print(f\"Sharded {full_name} with hashed key on {field}\")\n            return result\n        except OperationError as e:\n            print(f\"Error sharding collection: {e}\")\n            return None\n\n    def shard_collection_ranged(self, db_name, collection, key_spec):\n        \"\"\"Shard a collection using ranged shard key.\"\"\"\n        full_name = f\"{db_name}.{collection}\"\n\n        # Create compound index matching shard key\n        self.client[db_name][collection].create_index(\n            list(key_spec.items()),\n            background=True\n        )\n\n        try:\n            result = self.admin.command(\"shardCollection\", full_name, key=key_spec)\n            print(f\"Sharded {full_name} with ranged key {key_spec}\")\n            return result\n        except OperationError as e:\n            print(f\"Error sharding collection: {e}\")\n            return None\n\n    def get_shard_distribution(self, db_name, collection):\n        \"\"\"Get chunk distribution across shards.\"\"\"\n        namespace = f\"{db_name}.{collection}\"\n        chunks = list(self.config[\"chunks\"].find({\"ns\": namespace}))\n        distribution = {}\n        for chunk in chunks:\n            shard = chunk.get(\"shard\", \"unknown\")\n            distribution[shard] = distribution.get(shard, 0) + 1\n        print(f\"Chunk distribution for {namespace}:\")\n        for shard, count in sorted(distribution.items()):\n            print(f\"  {shard}: {count} chunks\")\n        return distribution\n\n    def get_shard_status(self):\n        \"\"\"Get detailed sharding status.\"\"\"\n        status = self.admin.command(\"shardingStatus\")\n        shards = status.get(\"shards\", [])\n        print(f\"Shards ({len(shards)}):\")\n        for shard in shards:\n            print(f\"  {shard['_id']}: {shard.get('host')}\")\n        databases = status.get(\"databases\", [])\n        for db in databases:\n            if db.get(\"partitioned\"):\n                print(f\"  DB {db['_id']}: sharded\")\n                for coll in db.get(\"collections\", []):\n                    print(f\"    Collection {coll['_id']}: \"\n                          f\"key={coll.get('key')}, \"\n                          f\"chunks={coll.get('chunks', 0)}\")\n        return status\n\n    def move_chunk(self, namespace, shard_key_value, target_shard):\n        \"\"\"Manually move a chunk to a different shard (for testing).\"\"\"\n        try:\n            result = self.admin.command(\"moveChunk\", namespace,\n                                         find={\"shard_key\": shard_key_value},\n                                         to=target_shard)\n            print(f\"Moved chunk to {target_shard}: {result}\")\n            return result\n        except OperationError as e:\n            print(f\"Error moving chunk: {e}\")\n            return None\n\n    def enable_balancer(self, enabled=True):\n        \"\"\"Enable or disable the balancer.\"\"\"\n        try:\n            self.config[\"settings\"].update_one(\n                {\"_id\": \"balancer\"},\n                {\"$set\": {\"stopped\": not enabled}},\n                upsert=True\n            )\n            print(f\"Balancer {'enabled' if enabled else 'disabled'}\")\n        except OperationError as e:\n            print(f\"Error setting balancer: {e}\")\n\n    def add_shard(self, host):\n        \"\"\"Add a new shard to the cluster.\"\"\"\n        try:\n            result = self.admin.command(\"addShard\", host)\n            print(f\"Added shard {host}: {result}\")\n            return result\n        except OperationError as e:\n            print(f\"Error adding shard: {e}\")\n            return None\n\n    def close(self):\n        self.client.close()\n\n\n# Usage\nif __name__ == \"__main__\":\n    mgr = MongoDBShardManager(\"mongodb://mongos:27017\")\n    mgr.enable_sharding(\"ecommerce\")\n    mgr.shard_collection_hashed(\"ecommerce\", \"orders\")\n    mgr.shard_collection_ranged(\"ecommerce\", \"users\",\n                                 {\"country\": 1, \"user_id\": 1})\n    mgr.get_shard_distribution(\"ecommerce\", \"orders\")\n    mgr.get_shard_status()\n    mgr.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1579-complexity-analysis-for-sharding",
      children: "15.7.9 Complexity Analysis for Sharding"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Targeted query (by shard key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query routed to 1 shard; local index O(log(n/s))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scatter-gather query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(s * log n/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(s * m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast to s shards, result merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write with shard key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + O(k log n/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single shard write + local index updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chunk split"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c = documents in chunk; metadata update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chunk migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c) network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full data copy of chunk between shards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add new shard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balancer redistributes chunks to new shard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15710-advantages--disadvantages-of-sharding",
      children: "15.7.10 Advantages & Disadvantages of Sharding"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unlimited storage"
            }), ": Scale horizontally by adding shards"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Operational complexity"
            }), ": 3x more infrastructure to manage"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Write throughput"
            }), ": Distribute writes across many servers"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Shard key is permanent"
            }), ": Cannot change after sharding"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Read throughput"
            }), ": Parallel queries across shards"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scatter-gather queries"
            }), ": Queries without shard key hit all shards"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Geo-distribution"
            }), ": Locate shards near users"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-shard transactions"
            }), ": Slower, coordinator overhead"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No single point of write contention"
            }), ": Writes spread"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Balancer overhead"
            }), ": Chunk migration impacts performance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Elastic capacity"
            }), ": Add/remove shards without downtime"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Index space multiplied"
            }), ": Each shard has its own indexes"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15711-edge-cases-in-sharding",
      children: "15.7.11 Edge Cases in Sharding"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shard key hotspotting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All writes go to one chunk (monotonically increasing key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hashed shard key; or use compound key with monotonically varying suffix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jumbo chunks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chunk exceeds max size (e.g., 200MB) and can't split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify cause: shard key with low cardinality; manual split with force"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scatter-gather on large collection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query hits all shards with no filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include shard key in queries; create useful secondary indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uneven shard fill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balancer can't keep up with ingestion rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-split chunks; increase balancer window; tune chunk size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Config server loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All mongos routers lose routing metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config servers must be a 3-node replica set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-shard join ($lookup)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow; data must be broadcast to all shards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid $lookup across shards; embed related data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shard key with low cardinality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only a few chunks; can't split further"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use compound shard key with high-cardinality suffix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adding shard doesn't immediately rebalance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing chunk distribution unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable balancer; chunks migrate slowly over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing shard key in insert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB adds null shard key → all nulls go to same chunk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include shard key; validate at application level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remove shard (drain)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draining a shard requires migrating all its chunks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draining is slow; plan hours or days for large shards"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "158-mongodb-vs-rdbms--comprehensive-comparison",
      children: "15.8 MongoDB vs RDBMS → Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RDBMS (MySQL, PostgreSQL)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-oriented (BSON/JSON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-oriented (rows and columns)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-flexible (documents can differ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed schema (defined in advance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationships"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded documents or $lookup joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign keys + JOIN operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MQL (JSON-like query syntax)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (Structured Query Language)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-document ACID (4.0+), document-level atomic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID across tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Joins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$lookup (less performant, avoid when possible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN (optimized, expected)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, text, geospatial, TTL, hashed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, hash, bitmap, GiST, GIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (sharding built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (sharding requires external tools)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency (replica sets, async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency (ACID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Normalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "De-normalization encouraged (embedding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization encouraged (3NF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "_id (ObjectId, auto-generated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually auto-increment integer or UUID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes: just change the code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER TABLE (may lock tables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full-text search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in text indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External (Elasticsearch) or built-in (PostgreSQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native 2dsphere/2d indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostGIS extension (PostgreSQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation pipeline (stages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY, window functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maturity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2009 (15+ years)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1970s (50+ years)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast prototyping, flexible schema, hierarchical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict consistency, complex relationships, reporting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1581-when-to-choose-mongodb",
      children: "15.8.1 When to Choose MongoDB"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why MongoDB?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Content Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-flexible → different content types have different fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMS, blogs, product catalogs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time Analytics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation pipeline for fast, in-database analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User behavior tracking, clickstream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IoT / Sensor Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High write throughput, TTL indexes for auto-expiry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor readings, device logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile Apps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-like documents map naturally to mobile objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User profiles, social feeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catalog / Inventory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Products with varying attributes (no EAV antipattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce, parts catalog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Personalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user schema customization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation engines, user settings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rapid Prototyping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes don't require migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVPs, hackathons, early-stage products"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1582-when-choose-rdbms-over-mongodb",
      children: "15.8.2 When Choose RDBMS Over MongoDB"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why RDBMS?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Highly relational data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-many relationships, complex joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strong consistency required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transactions, banking, accounting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex reporting queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-table aggregates, CTEs, window functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Established SQL ecosystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing tools, BI platforms, reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex multi-row transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID across many rows and tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Well-defined, stable schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes are rare and well-planned"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1583-performance-comparison-general-benchmarks",
      children: "15.8.3 Performance Comparison (General Benchmarks)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RDBMS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simple read by primary key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar for indexed lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write (single document/row)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-8ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document writes are slightly faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bulk insert (1000 docs)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-150ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB batch insert is efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join (2 tables)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$lookup: 5-20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN: 3-10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDBMS wins on joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Group by + aggregate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline: 10-50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY: 5-30ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDBMS wins on complex aggregations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full data scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COLLSCAN: O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan: O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar without indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-10ms (native)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-30ms (PostGIS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB wins on geo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "159-mongodb-atomicity-and-transactions",
      children: "15.9 MongoDB Atomicity and Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1591-document-level-atomicity",
      children: "15.9.1 Document-Level Atomicity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In MongoDB, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "write operations are atomic at the document level"
      }), ". When you update a single document, either all fields are updated or none are → even if the server crashes mid-operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// This update is atomic at the document level\ndb.orders.updateOne(\n    { _id: ObjectId(\"64b1c2d3e4f5a60001000001\") },\n    {\n        $set: { status: \"shipped\", shipped_at: new Date() },\n        $inc: { total: 5 }  // shipping charge\n    }\n)\n// Either BOTH $set and $inc are applied, OR neither\n// Partial application is impossible\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "However"
      }), ", operations affecting multiple documents (updateMany, deleteMany) are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not atomic"
      }), " across documents. Each document operation is atomic individually, but there's no rollback if one fails partway."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1592-multi-document-transactions-mongodb-40",
      children: "15.9.2 Multi-Document Transactions (MongoDB 4.0+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MongoDB 4.0 introduced multi-document ACID transactions for replica sets, and 4.2 extended them to sharded clusters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Start a transaction (replica set, 4.0+)\nconst session = db.getMongo().startSession();\nsession.startTransaction({\n    readConcern: { level: \"snapshot\" },\n    writeConcern: { w: \"majority\" }\n});\n\ntry {\n    const orders = session.getDatabase(\"ecommerce\").orders;\n    const inventory = session.getDatabase(\"ecommerce\").inventory;\n\n    // Step 1: Create order\n    orders.insertOne({\n        customer_id: \"user1\",\n        items: [{ product_id: \"PROD-001\", qty: 1 }],\n        total: 99.99,\n        status: \"pending\",\n        created_at: new Date()\n    });\n\n    // Step 2: Decrement inventory\n    inventory.updateOne(\n        { product_id: \"PROD-001\", stock: { $gte: 1 } },\n        { $inc: { stock: -1 } }\n    );\n\n    // Step 3: Commit (both operations succeed together)\n    session.commitTransaction();\n    print(\"Order placed and inventory updated atomically\");\n} catch (error) {\n    // Any operation fails → ALL changes rolled back\n    session.abortTransaction();\n    print(\"Transaction aborted: \" + error);\n} finally {\n    session.endSession();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python transaction example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pymongo import MongoClient\nfrom pymongo.errors import ConnectionFailure, OperationFailure\n\ndef transfer_funds(from_id, to_id, amount):\n    \"\"\"Atomic transfer between two accounts using transaction.\"\"\"\n    client = MongoClient(\"mongodb://localhost:27017\")\n    db = client.banking\n\n    with client.start_session() as session:\n        try:\n            session.start_transaction(\n                read_concern={\"level\": \"snapshot\"},\n                write_concern={\"w\": \"majority\"}\n            )\n\n            # Withdraw\n            result = db.accounts.update_one(\n                {\"_id\": from_id, \"balance\": {\"$gte\": amount}},\n                {\"$inc\": {\"balance\": -amount}},\n                session=session\n            )\n            if result.modified_count == 0:\n                raise Exception(\"Insufficient funds or account not found\")\n\n            # Deposit\n            db.accounts.update_one(\n                {\"_id\": to_id},\n                {\"$inc\": {\"balance\": amount}},\n                session=session\n            )\n\n            session.commit_transaction()\n            print(f\"Transferred ${amount} from {from_id} to {to_id}\")\n\n        except Exception as e:\n            session.abort_transaction()\n            print(f\"Transfer failed, rolled back: {e}\")\n        finally:\n            session.end_session()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction Caveats:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "60-second limit"
        }), ": Default transaction timeout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max 1000 documents modified"
        }), " in a single transaction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple collections allowed"
        }), " but within same replica set"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sharded transactions"
        }), ": 4.2+ supports multi-shard transactions (with limitations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance overhead"
        }), ": ~2-5x slower than individual operations → use only when needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1510-interview-corner",
      children: "15.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-when-would-you-choose-mongodb-over-a-relational-database",
      children: "Q1: When would you choose MongoDB over a relational database?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MongoDB is ideal when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The data has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "flexible or evolving schema"
        }), " (product catalogs, content management)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fast prototyping"
        }), " without migration overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Data is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hierarchical or document-oriented"
        }), " (user profiles, orders with line items)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "horizontal scaling"
        }), " with built-in sharding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write throughput"
        }), " must be high across many nodes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The application is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSON-native"
        }), " (Node.js, React, mobile apps)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Avoid MongoDB when you need complex multi-table joins, strict ACID across many entities, or have established SQL-based reporting tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-how-do-you-design-a-good-shard-key",
      children: "Q2: How do you design a good shard key?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A good shard key must have:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High cardinality"
        }), " → Many unique values (millions, not boolean)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low frequency"
        }), " → No single value dominates writes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monotonically distributed"
        }), " → Not monotonically increasing (or use hashed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write distribution"
        }), " → Writes spread evenly across shards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query isolation"
        }), " → Most queries include the shard key (targeted queries)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Good:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ customer_id: \"hashed\" }"
      }), " (high cardinality, even writes, targeted queries)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bad:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ status: 1 }"
      }), " (only 3-5 values → 3-5 chunks → 3-5 shards max)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Better:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ country: 1, user_id: 1 }"
      }), " (range on country, high-card suffix)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-aggregation-pipeline-vs-map-reduce--which-to-use",
      children: "Q3: Aggregation Pipeline vs Map-Reduce → which to use?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Aggregation Pipeline"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Map-Reduce"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native C++, optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript execution, slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative stages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two JS functions (map + reduce)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming cursor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collection or inline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95% of data processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy, very complex transforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended (primary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated in 5.0+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Always prefer aggregation pipeline. Only use map-reduce if you need JavaScript logic that can't be expressed with pipeline operators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-explain-mongodb-transactions-40-when-should-you-not-use-them",
      children: "Q4: Explain MongoDB transactions (4.0+). When should you NOT use them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MongoDB 4.0 added multi-document ACID transactions for replica sets; 4.2 extended to sharded clusters. Use them for operations that must atomically update multiple documents across collections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't use transactions when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single document update suffices (document-level atomicity is free)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can use embedded documents (atomic by design)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance is critical (transactions are 2-5x slower)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You're doing bulk operations (1000+ document limit)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q5-how-does-mongodb-ensure-data-durability-in-a-replica-set",
      children: "Q5: How does MongoDB ensure data durability in a replica set?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Through a combination of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write concern"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ w: \"majority\" }"
        }), " waits for acknowledgment from majority of voting members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Journaling"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ j: true }"
        }), " forces write to the on-disk journal before acknowledgment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Oplog replication"
        }), " → Operations are replayed on secondaries asynchronously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Election protocol"
        }), " → Automatic failover when primary fails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback"
        }), " → Old primary rolls back unreplicated writes on rejoin"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q6-what-causes-the-n1-problem-in-mongodb-and-how-to-avoid-it",
      children: "Q6: What causes the \"N+1 problem\" in MongoDB and how to avoid it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The N+1 problem occurs when you fetch a list of N documents, then for each document, make an additional query for related data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// BAD: N+1 queries\nconst users = db.users.find({}).toArray();\nfor (const user of users) {\n    // 1 query per user → N additional queries\n    const orders = db.orders.find({ customer_id: user._id }).toArray();\n}\n\n// GOOD: Single query with $lookup (still a join, but 1 query)\ndb.users.aggregate([\n    { $match: {} },\n    { $lookup: {\n        from: \"orders\",\n        localField: \"_id\",\n        foreignField: \"customer_id\",\n        as: \"orders\"\n    }}\n])\n// OR: Embed related data (best for MongoDB)\ndb.users.find({}).toArray();  // If orders are embedded, no extra query\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q7-how-do-you-handle-schema-migration-in-mongodb",
      children: "Q7: How do you handle schema migration in MongoDB?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Since MongoDB is schema-flexible, you handle migrations in application code:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lazy migration"
        }), " → When reading a document, check its schema version and upgrade in place"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Background migration"
        }), " → Script that finds old-format documents and updates them incrementally"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-write"
        }), " → Write both old and new formats during transition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema version field"
        }), " → Each document has a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "schema_version"
        }), " field for the app to check"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// App code handles both old and new schema\nfunction getDisplayName(user) {\n    if (user.schema_version === 2) {\n        return `${user.first_name} ${user.last_name}`;\n    } else {\n        // Old format: { name: \"Alice Chen\" }\n        // Lazy migration: return, but also upgrade\n        upgradeUserSchema(user);\n        return user.name;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q8-what-is-the-esr-equality-sort-range-rule-for-compound-indexes",
      children: "Q8: What is the ESR (Equality-Sort-Range) rule for compound indexes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ESR rule governs the order of fields in a compound index:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Equality fields first"
        }), " → Fields with exact-match filters (", (0,jsx_runtime.jsx)(_components.code, {
          children: "="
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sort fields next"
        }), " → Fields used in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sort()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range fields last"
        }), " → Fields with range filters (", (0,jsx_runtime.jsx)(_components.code, {
          children: "$gt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$lt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$gte"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$lte"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Query: db.orders.find({ status: \"shipped\", total: { $gte: 100 } })\n//                 .sort({ created_at: -1 })\n// Index: { status: 1, created_at: -1, total: 1 }\n//         ↑E         ↑S               ↑R\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This order lets MongoDB find the exact equality value in the B-tree, then iterate in sort order, applying the range filter without needing an in-memory sort."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q9-difference-between-mongodb-and-traditional-database-scaling",
      children: "Q9: Difference between MongoDB and traditional database scaling?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MongoDB"
        }), ": Scales horizontally via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sharding"
        }), " → add more commodity servers, data auto-distributes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RDBMS"
        }), ": Scales vertically (more CPU, RAM, SSD on one server) or requires manual sharding (vitess, citus)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MongoDB's sharding is built-in and automatic (balancer splits and migrates chunks). RDBMS sharding requires application-level changes or middleware."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q10-how-does-mongodb-handle-full-text-search-differently-from-elasticsearch",
      children: "Q10: How does MongoDB handle full-text search differently from Elasticsearch?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB Text Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elasticsearch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index (tokenized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index with analysis pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TF-IDF based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BM25 (improved TF-IDF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fuzzy search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$text (basic word variants)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit distance, n-gram, prefix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relevance tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weights per field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function scoring, boosting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text search integrated with pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate query DSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed search cluster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Good enough\" search in-app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated search engine"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1511-applications-in-real-systems",
      children: "15.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15111-mongodb-atlas-managed-cloud",
      children: "15.11.1 MongoDB Atlas (Managed Cloud)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MongoDB Atlas is the official DBaaS (Database as a Service) offering. Features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-cloud"
        }), ": Deploy across AWS, Azure, GCP"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-scaling"
        }), ": Storage and compute scale automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global clusters"
        }), ": Geo-distributed for low-latency worldwide access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup"
        }), ": Continuous backup with point-in-time recovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), ": Encryption at rest, VPC peering, IP whitelisting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring"
        }), ": Built-in performance advisor, query profiler"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15112-iot--time-series-applications",
      children: "15.11.2 IoT / Time-Series Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Time-series schema: bucketed sensor readings\ndb.sensor_readings.createIndex({ sensor_id: 1, timestamp: -1 })\ndb.sensor_readings.createIndex(\n    { timestamp: 1 },\n    { expireAfterSeconds: 86400 * 30 }  // Auto-expire after 30 days\n)\n\n// Bucketed design (reduce number of documents)\ndb.sensor_buckets.insertOne({\n    sensor_id: \"temp-sensor-001\",\n    location: { type: \"Point\", coordinates: [-73.97, 40.77] },\n    readings: [\n        { ts: ISODate(\"2024-03-25T10:00:00Z\"), value: 22.5 },\n        { ts: ISODate(\"2024-03-25T10:01:00Z\"), value: 22.7 },\n        // ... up to 1000 readings per bucket\n    ],\n    bucket_start: ISODate(\"2024-03-25T10:00:00Z\"),\n    bucket_end: ISODate(\"2024-03-25T10:59:00Z\"),\n    reading_count: 60,\n    avg_value: 22.6\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15113-content-management-systems",
      children: "15.11.3 Content Management Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// CMS page with flexible content blocks\ndb.pages.insertOne({\n    slug: \"about-us\",\n    title: \"About Our Company\",\n    status: \"published\",\n    seo: {\n        meta_title: \"About Us | Company Name\",\n        meta_description: \"Learn about our mission and team\",\n    },\n    content_blocks: [\n        { type: \"hero\", heading: \"Our Story\", image_url: \"/hero.jpg\" },\n        { type: \"text\", body: \"Founded in 2020, we...\" },\n        { type: \"team_grid\", members: [\n            { name: \"Alice\", role: \"CEO\", photo: \"/alice.jpg\" },\n            { name: \"Bob\", role: \"CTO\", photo: \"/bob.jpg\" }\n        ]},\n        { type: \"cta\", text: \"Get Started\", link: \"/signup\" }\n    ],\n    tags: [\"company\", \"about\"],\n    created_at: new Date(),\n    updated_at: new Date()\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15114-gaming-leaderboards",
      children: "15.11.4 Gaming Leaderboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Gaming player scores (high write throughput, sorted queries)\ndb.scores.createIndex({ game_id: 1, score: -1 })\n\n// Insert player score\ndb.scores.insertOne({\n    game_id: \"space-invaders\",\n    player_id: \"player_abc\",\n    player_name: \"Alice\",\n    score: 15000,\n    level: 12,\n    timestamp: new Date()\n})\n\n// Get top 10 leaderboard\ndb.scores.find({ game_id: \"space-invaders\" })\n    .sort({ score: -1 })\n    .limit(10)\n    .projection({ player_name: 1, score: 1, level: 1, _id: 0 })\n\n// Update personal best (only if new score is higher)\ndb.scores.updateOne(\n    { game_id: \"space-invaders\", player_id: \"player_abc\" },\n    { $max: { score: 20000 } }  // $max only updates if new value is higher\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1512-schema-design-best-practices",
      children: "15.12 Schema Design Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15121-embedding-vs-referencing--decision-table",
      children: "15.12.1 Embedding vs. Referencing → Decision Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// EMBEDDING (preferred when data is accessed together)\n{\n    user: \"Alice\",\n    orders: [\n        { item: \"laptop\", price: 999 },\n        { item: \"mouse\", price: 25 }\n    ]\n}\n\n// REFERENCING (preferred when data grows unbounded or shared)\n{\n    user: \"Alice\"\n}\n// Separate collection\n{\n    user_id: \"user1\",\n    item: \"laptop\",\n    price: 999\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "When to Embed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data accessed together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data grows unbounded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-few relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many relationship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data changes together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data updated independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy access pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-heavy on sub-document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-document size < 16MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-document content shared across parents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15122-design-principles--numbered",
      children: "15.12.2 Design Principles → Numbered"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. DATA TOGETHER → STORE TOGETHER\n   Embed sub-documents that are always read with the parent.\n   Example: Address embedded in User (always need both).\n\n2. ARRAYS MUST NOT GROW UNBOUNDEDLY\n   Limit embedded arrays to ~100-200 elements.\n   Example: User's orders → separate collection; User's phone numbers → embed.\n\n3. USE REFERENCES FOR SHARED OR HOT DATA\n   Frequently updated shared data should be a separate collection.\n   Example: Product details referenced in orders (product info changes → all orders update).\n\n4. PREFER $lookup OVER APPLICATION-SIDE JOINS\n   If you must join, let MongoDB do it. App-side joins are N+1.\n\n5. DESIGN FOR QUERY PATTERNS, NOT NORMALIZATION\n   In MongoDB, your data model follows how you query it.\n   Don't normalize \"because SQL would.\" Duplicate data is acceptable if it serves reads.\n\n6. ONE COLLECTION PER \"AGGREGATE ROOT\"\n   An aggregate root (DDD) is the entity that's accessed as a unit.\n   User + Profile → embed. User + Orders → reference.\n\n7. USE BUCKETING FOR TIME-SERIES DATA\n   Group time-series readings into fixed-size buckets.\n   Avoid one document per reading → use 100-readings per document.\n\n8. USE POLYMORPHIC SCHEMA FOR SIMILAR-YET-DIFFERENT DATA\n   Different document shapes in the same collection.\n   Example: Different product types in a catalog collection.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 15.1: Complete E-commerce Schema"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "db.users.createIndex({ email: 1 }, { unique: true })\ndb.users.insertOne({\n    _id: ObjectId(),\n    name: \"Alice Chen\",\n    email: \"alice@example.com\",\n    addresses: [\n        { label: \"home\", street: \"123 Main St\", city: \"SF\", zip: \"94102\" },\n        { label: \"work\", street: \"456 Market St\", city: \"SF\", zip: \"94105\" }\n    ],\n    created_at: new Date()\n})\n\ndb.products.createIndex({ category: 1, price: 1 })\ndb.products.insertOne({\n    sku: \"LAP-001\",\n    name: \"UltraBook Pro 15\",\n    category: \"electronics\",\n    price: 1499.99,\n    stock: 50,\n    specs: { cpu: \"Intel i7\", ram: \"16GB\", storage: \"512GB SSD\" },\n    tags: [\"laptop\", \"ultrabook\", \"new\"]\n})\n\ndb.orders.createIndex({ customer_id: 1, created_at: -1 })\ndb.orders.insertOne({\n    customer_id: ObjectId(\"...\"),\n    items: [\n        { product_id: ObjectId(\"...\"), qty: 1, price: 1499.99 },\n        { product_id: ObjectId(\"...\"), qty: 2, price: 24.99 }\n    ],\n    shipping_address: { street: \"123 Main St\", city: \"SF\", zip: \"94102\" },\n    total: 1549.97,\n    status: \"pending\",\n    created_at: new Date()\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 15.2: Aggregation for Monthly Sales Report"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "db.orders.aggregate([\n    { $match: { status: { $in: [\"shipped\", \"delivered\"] } } },\n    { $unwind: \"$items\" },\n    { $lookup: {\n        from: \"products\",\n        localField: \"items.product_id\",\n        foreignField: \"_id\",\n        as: \"product\"\n    }},\n    { $unwind: \"$product\" },\n    { $group: {\n        _id: {\n            year: { $year: \"$created_at\" },\n            month: { $month: \"$created_at\" },\n            category: \"$product.category\"\n        },\n        total_sales: { $sum: { $multiply: [\"$items.qty\", \"$items.price\"] } },\n        units_sold: { $sum: \"$items.qty\" },\n        avg_price: { $avg: \"$items.price\" }\n    }},\n    { $sort: { \"_id.year\": 1, \"_id.month\": 1 } }\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 15.3: Change Streams (MongoDB 3.6+) → Real-time Notifications"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Watch for changes on a collection (replica set required)\nconst changeStream = db.orders.watch([\n    { $match: { \"fullDocument.status\": \"shipped\" } }\n])\n\n// Listen for new shipped orders\nchangeStream.on(\"change\", (change) => {\n    print(`Order ${change.documentKey._id} was shipped!`)\n    // Send notification, update cache, trigger fulfillment workflow\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design your schema around your application's access patterns"
        }), " → In MongoDB, how you query determines how you structure your data (unlike SQL where normalization rules come first)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embedding is usually better than referencing"
        }), " → MongoDB can read an entire embedded document in one I/O operation. Joins ($lookup) are expensive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Only embed what is accessed together"
        }), " → If you often need a user but not their orders, keep them in separate collections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose your shard key carefully"
        }), " → A bad shard key (low cardinality, monotonically increasing) creates \"hot spots\" where all writes go to one shard. Hashed shard keys are often safer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use TTL indexes for expiring data"
        }), " → They automatically delete documents after a configured time, perfect for session data, logs, and temporary caches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use .explain(\"executionStats\")"
        }), " → Verify your queries use indexes. A COLLSCAN on a large collection is the #1 performance killer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push $match to the start of the pipeline"
        }), " → Filter early to reduce the number of documents flowing through subsequent stages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor replication lag"
        }), " → Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rs.printSecondaryReplicationInfo()"
        }), " to ensure secondaries aren't falling behind."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use write concern \"majority\" for critical data"
        }), " → This ensures data is replicated to a majority of nodes before acknowledging the write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable retryable writes"
        }), " → The driver can automatically retry write operations that fail due to network errors or replica set elections."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.1:"
        }), " MongoDB stores data as BSON documents in collections → schema-flexible, self-describing, and easy to map to application objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.2:"
        }), " CRUD operations use a JSON-like query syntax with rich operators for filtering, projection, sorting, and aggregation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.3:"
        }), " Indexes in MongoDB include single, compound, multikey (arrays), text, geospatial, TTL, and partial types → each designed for specific query patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.4:"
        }), " The aggregation pipeline processes documents through sequential stages ($match, $group, $lookup, $unwind, $project) → MongoDB's equivalent of SQL's GROUP BY and JOIN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.5:"
        }), " Replica sets provide high availability with automatic failover; reads can be distributed to secondaries for load balancing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.6:"
        }), " Sharding horizontally partitions data using a shard key across multiple servers for near-linear horizontal scaling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.7:"
        }), " Schema design in MongoDB favors embedding for co-accessed data and referencing for shared/growing/independently-updated data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.8:"
        }), " MongoDB excels at flexible schemas, high write throughput, and horizontal scaling; RDBMS excels at complex relationships and strong consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "15.9:"
        }), " Write operations are atomic at the document level; multi-document ACID transactions available in 4.0+ with performance trade-offs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BSON document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Field"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index (various types)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$unwind"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deconstructs arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNNEST / LATERAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reshapes documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$bucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Histogram creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WIDTH_BUCKET / CASE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ObjectId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generated ID (distributed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_INCREMENT / UUID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB Index Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single Field"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic index on one field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ email: 1 }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on multiple fields (ESR order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ status: 1, created_at: -1 }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multikey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index on array fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ tags: 1 }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search with stemming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ description: \"text\" }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial (2dsphere)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geo queries on sphere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ location: \"2dsphere\" }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TTL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-expire documents after time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ createdAt: 1 }, { expireAfterSeconds: 3600 }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index subset of documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ status: 1 }, { partialFilterExpression: { status: \"active\" } }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hashed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based sharding distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ user_id: \"hashed\" }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unique"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce unique values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ email: 1 }, { unique: true }"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB Feature"
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
              children: "Document Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product catalogs, CMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Products have varying attributes → no EAV pattern needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregation Pipeline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics, reporting dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex data processing without leaving the database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replica Sets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production HA systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic failover, read scaling to secondaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sharding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applications exceeding single-node cap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal scaling with range/hashed shard keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location-based services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proximity search, geofencing, $near queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TTL Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session stores, temp data, logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic cleanup without scheduled jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change Streams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time apps, event pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React to data changes without polling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atlas Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search in managed MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in search without managing Elasticsearch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "158-typescript-mongodb-query-builder--aggregation-pipeline",
      children: "15.8 TypeScript MongoDB Query Builder & Aggregation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code below simulates the MongoDB query and aggregation pipeline mechanics with TypeScript types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// MongoDB Query & Aggregation Simulator — TypeScript\n// ============================================================\n\ninterface Document {\n  _id: string;\n  [key: string]: unknown;\n}\n\ntype Filter = { [field: string]: { $eq?: unknown; $gt?: number; $lt?: number; $in?: unknown[]; $regex?: string } | unknown };\ntype Projection = { [field: string]: 0 | 1 };\n\nclass MongoCollection {\n  private docs: Document[] = [];\n\n  insert(doc: Document): void {\n    this.docs.push(doc);\n  }\n\n  insertMany(docs: Document[]): void {\n    this.docs.push(...docs);\n  }\n\n  // Simulate MongoDB-style query with filtering and projection\n  find(filter: Filter, projection?: Projection): Document[] {\n    let result = [...this.docs];\n\n    // Apply filters\n    for (const [field, condition] of Object.entries(filter)) {\n      if (typeof condition === 'object' && condition !== null) {\n        const cond = condition as Record<string, unknown>;\n        if ('$eq' in cond) result = result.filter(d => d[field] === cond['$eq']);\n        if ('$gt' in cond) result = result.filter(d => (d[field] as number) > (cond['$gt'] as number));\n        if ('$lt' in cond) result = result.filter(d => (d[field] as number) < (cond['$lt'] as number));\n        if ('$in' in cond) result = result.filter(d => (cond['$in'] as unknown[]).includes(d[field]));\n        if ('$regex' in cond) result = result.filter(d => String(d[field]).match(new RegExp(cond['$regex'] as string)));\n      } else {\n        // Equality shorthand\n        result = result.filter(d => d[field] === condition);\n      }\n    }\n\n    // Apply projection\n    if (projection) {\n      result = result.map(d => {\n        const projected: Document = { _id: d._id as string };\n        for (const [field, val] of Object.entries(projection)) {\n          if (val === 1 && field !== '_id') projected[field] = d[field];\n        }\n        return projected;\n      });\n    }\n\n    return result;\n  }\n\n  // Simulate aggregation pipeline\n  aggregate(pipeline: Array<Record<string, unknown>>): Document[] {\n    let result: Document[] = [...this.docs];\n\n    for (const stage of pipeline) {\n      if ('$match' in stage) {\n        result = this.find(stage['$match'] as Filter);\n      } else if ('$project' in stage) {\n        result = this.find({}, stage['$project'] as Projection);\n      } else if ('$group' in stage) {\n        const groupStage = stage['$group'] as { _id: string; [key: string]: unknown };\n        const idField = groupStage._id;\n        const groups = new Map<string, Document[]>();\n        for (const doc of result) {\n          const key = String(doc[idField] ?? 'null');\n          if (!groups.has(key)) groups.set(key, []);\n          groups.get(key)!.push(doc);\n        }\n        const grouped: Document[] = [];\n        for (const [key, group] of groups) {\n          const out: Document = { _id: key };\n          for (const [aggField, aggExpr] of Object.entries(groupStage)) {\n            if (aggField === '_id') continue;\n            const aggSpec = aggExpr as { $sum?: string; $avg?: string; $count?: boolean };\n            if (aggSpec.$sum) {\n              out[aggField] = group.reduce((s, d) => s + Number(d[aggSpec.$sum!] ?? 0), 0);\n            } else if (aggSpec.$avg) {\n              const vals = group.map(d => Number(d[aggSpec.$avg!] ?? 0));\n              out[aggField] = vals.reduce((s, v) => s + v, 0) / vals.length;\n            } else if (aggSpec.$count) {\n              out[aggField] = group.length;\n            }\n          }\n          grouped.push(out);\n        }\n        result = grouped;\n      } else if ('$sort' in stage) {\n        const sortSpec = stage['$sort'] as Record<string, 1 | -1>;\n        const field = Object.keys(sortSpec)[0];\n        const dir = sortSpec[field];\n        result.sort((a, b) => dir * (String(a[field] ?? '').localeCompare(String(b[field] ?? ''))));\n      } else if ('$limit' in stage) {\n        result = result.slice(0, stage['$limit'] as number);\n      }\n    }\n\n    return result;\n  }\n\n  // Create index (conceptual — marks fields)\n  createIndex(fields: Record<string, 1 | -1>): void {\n    console.log('[Index] Created on: ' + Object.keys(fields).join(', '));\n  }\n}\n\n// Demo\nconst col = new MongoCollection();\ncol.insertMany([\n  { _id: '1', name: 'Alice', salary: 75000, dept: 'Engineering' },\n  { _id: '2', name: 'Bob', salary: 82000, dept: 'Engineering' },\n  { _id: '3', name: 'Charlie', salary: 65000, dept: 'Sales' },\n  { _id: '4', name: 'Diana', salary: 90000, dept: 'Engineering' },\n  { _id: '5', name: 'Eve', salary: 55000, dept: 'Marketing' },\n]);\n\nconsole.log('=== MongoDB Query Simulator ===\\n');\nconsole.log('Find engineers with salary > 70000:');\ncol.find({ dept: 'Engineering', salary: { $gt: 70000 } }).forEach(d =>\n  console.log('  ' + d.name + ': $' + d.salary)\n);\n\nconsole.log('\\nAggregation: Average salary by department:');\nconst result = col.aggregate([\n  { $group: { _id: 'dept', avgSalary: { $avg: 'salary' }, count: { $count: true } } }\n]);\nresult.forEach(d => console.log('  ' + d._id + ': avg=' + Number(d.avgSalary).toFixed(0) + ', count=' + d.count));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MongoDB uses which of the following as its default storage engine?\na) MMAPv1\nb) WiredTiger\nc) RocksDB\nd) InnoDB"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A MongoDB $lookup stage is equivalent to which SQL operation?\na) INNER JOIN\nb) LEFT OUTER JOIN\nc) CROSS JOIN\nd) UNION"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sharding in MongoDB distributes data across nodes based on:\na) The document size\nb) The shard key\nc) The write timestamp\nd) The index type"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MongoDB supports multi-document ACID transactions starting from version:\na) 3.6\nb) 4.0\nc) 4.2\nd) 5.0"
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
          children: "MongoDB stores documents in which format?\na) XML  b) BSON  c) CSV  d) YAML"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$lookup"
          }), " stage in the aggregation pipeline is equivalent to which SQL operation?\na) GROUP BY  b) LEFT JOIN  c) WHERE  d) UNION"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which is NOT a valid reason to embed a sub-document?\na) Data is always accessed together with the parent\nb) Sub-document is large and frequently grows\nc) Relationship is one-to-few\nd) Updates to the sub-document are infrequent"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A shard key should ideally have:\na) Low cardinality  b) High cardinality and even distribution  c) Monotonically increasing  d) Boolean values"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A TTL index is used to:\na) Speed up queries on timestamp fields  b) Automatically delete documents after specified time  c) Index time-series data  d) Improve write performance"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a replica set, the primary node:\na) Only serves read queries  b) Accepts all write operations  c) Does not participate in elections  d) Must be manually specified"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The multikey index is specifically designed for:\na) Numeric fields  b) Array fields  c) Nested objects  d) String fields"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which aggregation stage is used to deconstruct an array field into multiple documents?\na) $match  b) $group  c) $unwind  d) $project"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the maximum BSON document size in MongoDB?\na) 4MB  b) 16MB  c) 64MB  d) 256MB"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does the ESR rule in compound indexing stand for?\na) Exact-Sort-Range  b) Equality-Sort-Range  c) Efficient-Sort-Retrieval  d) Element-Sort-Reduce"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-c, 9-b, 10-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MongoDB stores documents in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BSON format"
        }), " within collections → schema-flexible with up to 20+ native data types."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRUD operations"
        }), " use a JSON-like query syntax with rich operators ($set, $inc, $push, $pull, $elemMatch)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indexes"
        }), " include single, compound, multikey, text, geospatial, TTL, partial, and hashed → each optimized for specific query patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "aggregation pipeline"
        }), " provides powerful multi-stage data processing with $match, $group, $lookup, $unwind, $project, $sort, $bucket, and $facet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replica sets"
        }), " provide high availability via primary-secondary replication with automatic failover elections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sharding"
        }), " horizontally partitions data across servers using a shard key → with built-in balancer for automatic chunk distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema design"
        }), " favors embedding for co-accessed data and referencing for shared/growing data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MongoDB vs RDBMS"
        }), ": MongoDB for flexible schemas and horizontal scaling; RDBMS for complex relationships and strong consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity"
        }), ": Document-level atomic writes are free; multi-document ACID transactions available from 4.0+ with performance cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a MongoDB collection called ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books"
          }), ". Insert five book documents with fields: title, author, year, genres (array), rating."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write queries to: a) Find books published after 2020, b) Find books by a specific author, c) Find books containing \"sci-fi\" in their genres array."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create an index on the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "author"
          }), " field and verify the query uses it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".explain()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Update a book's rating by 0.5. Then delete a book by its ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_id"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a MongoDB schema for a blog platform with users, posts, comments, and tags. Show embedded vs. referenced relationships. Justify your choices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write an aggregation pipeline that counts the number of posts per tag, sorted by popularity, returning the top 10 tags."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a compound index on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{ category: 1, price: -1 }"
          }), ". Write a query that uses it. Verify with ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".explain(\"executionStats\")"
          }), ". What happens if you filter by price without category?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A product collection has 500,000 documents with schema: name, category, price, stock. Queries filter by category + sort by price, or filter by price range only. Design the indexes. Explain why."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a shard key for a global e-commerce order database with 100M+ orders. Queries: by customer_id (customer sees their own orders), by date range (admin reports), by order_id (lookup). What shard key do you choose? What are the trade-offs?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a MongoDB replica set, a network partition isolates the primary from two secondaries. What happens? Can the secondaries elect a new primary? What happens to writes sent to the isolated primary? How does the system recover when the partition heals?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design and implement an aggregation pipeline that generates a real-time sales dashboard:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Revenue by hour (last 24 hours)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Top 5 selling products this week"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Average order value by customer segment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Geographic distribution of orders\nShow the complete pipeline stages for each metric."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a Python script using PyMongo that reads from a MongoDB replica set with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "secondaryPreferred"
          }), " read preference and writes with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "w: \"majority\""
          }), " write concern. Handle the case where the primary fails during a write and the driver retries automatically."]
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