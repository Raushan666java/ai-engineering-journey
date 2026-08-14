"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[63143],{

/***/ 63642
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_14_nosql_md_194_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-14-nosql-md-194.json
const site_docs_courses_database_management_systems_14_nosql_md_194_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/14-nosql","title":"Chapter 14: NoSQL Databases","description":"Prev Chapter 15—MongoDB","source":"@site/docs/courses/database-management-systems/14-nosql.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/14-nosql","permalink":"/ai-engineering-journey/database-management-systems/14-nosql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-nosql","slug":"/database-management-systems/14-nosql","title":"Chapter 14: NoSQL Databases","sidebar_label":"Chapter 14: NoSQL Databases","sidebar_position":14},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 13: Query Processing and Optimization","permalink":"/ai-engineering-journey/database-management-systems/13-query-processing"},"next":{"title":"Chapter 15: MongoDB","permalink":"/ai-engineering-journey/database-management-systems/15-mongodb"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/14-nosql.md


const frontMatter = {
	id: '14-nosql',
	slug: '/database-management-systems/14-nosql',
	title: 'Chapter 14: NoSQL Databases',
	sidebar_label: 'Chapter 14: NoSQL Databases',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: NoSQL Databases';

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
  "value": "14.1 NoSQL Overview — What, Why, When",
  "id": "141-nosql-overview--what-why-when",
  "level": 2
}, {
  "value": "14.1.1 What Is NoSQL?",
  "id": "1411-what-is-nosql",
  "level": 3
}, {
  "value": "14.1.2 Why NoSQL? — The Motivation",
  "id": "1412-why-nosql--the-motivation",
  "level": 3
}, {
  "value": "14.1.3 When to Use NoSQL vs. SQL",
  "id": "1413-when-to-use-nosql-vs-sql",
  "level": 3
}, {
  "value": "14.1.4 Real-World Analogy: Library (SQL) vs. Warehouse (NoSQL)",
  "id": "1414-real-world-analogy-library-sql-vs-warehouse-nosql",
  "level": 3
}, {
  "value": "14.2 SQL vs. NoSQL — Head-to-Head Comparison (18 Criteria)",
  "id": "142-sql-vs-nosql--head-to-head-comparison-18-criteria",
  "level": 2
}, {
  "value": "14.2.1 When Polyglot Persistence Wins",
  "id": "1421-when-polyglot-persistence-wins",
  "level": 3
}, {
  "value": "14.3 The CAP Theorem",
  "id": "143-the-cap-theorem",
  "level": 2
}, {
  "value": "14.3.1 Core Concept",
  "id": "1431-core-concept",
  "level": 3
}, {
  "value": "14.3.2 Understanding Network Partitions",
  "id": "1432-understanding-network-partitions",
  "level": 3
}, {
  "value": "14.3.3 CAP Trade-off Scenarios — Dry Run Trace Tables",
  "id": "1433-cap-trade-off-scenarios--dry-run-trace-tables",
  "level": 3
}, {
  "value": "14.3.4 CAP Theorem — Detailed Explanation of C, A, P",
  "id": "1434-cap-theorem--detailed-explanation-of-c-a-p",
  "level": 3
}, {
  "value": "14.3.5 CAP Simulator — Python",
  "id": "1435-cap-simulator--python",
  "level": 3
}, {
  "value": "14.3.6 CAP Simulator — C++",
  "id": "1436-cap-simulator--c",
  "level": 3
}, {
  "value": "14.3.7 CAP Theorem — Advantages &amp; Disadvantages",
  "id": "1437-cap-theorem--advantages--disadvantages",
  "level": 3
}, {
  "value": "14.4 BASE vs. ACID",
  "id": "144-base-vs-acid",
  "level": 2
}, {
  "value": "14.4.1 Full Comparison",
  "id": "1441-full-comparison",
  "level": 3
}, {
  "value": "14.4.2 ACID in Detail",
  "id": "1442-acid-in-detail",
  "level": 3
}, {
  "value": "14.4.3 BASE in Detail",
  "id": "1443-base-in-detail",
  "level": 3
}, {
  "value": "14.4.4 When to Choose ACID vs. BASE",
  "id": "1444-when-to-choose-acid-vs-base",
  "level": 3
}, {
  "value": "14.5 NoSQL Data Models — Deep Dive",
  "id": "145-nosql-data-models--deep-dive",
  "level": 2
}, {
  "value": "14.5.1 Key-Value Stores (Redis, DynamoDB, Riak, Memcached)",
  "id": "1451-key-value-stores-redis-dynamodb-riak-memcached",
  "level": 3
}, {
  "value": "14.5.2 Document Stores (MongoDB, Couchbase, CouchDB, Firebase)",
  "id": "1452-document-stores-mongodb-couchbase-couchdb-firebase",
  "level": 3
}, {
  "value": "14.5.3 Column-Family Stores (Cassandra, HBase, ScyllaDB, Bigtable)",
  "id": "1453-column-family-stores-cassandra-hbase-scylladb-bigtable",
  "level": 3
}, {
  "value": "14.5.4 Graph Databases (Neo4j, Amazon Neptune, ArangoDB, JanusGraph)",
  "id": "1454-graph-databases-neo4j-amazon-neptune-arangodb-janusgraph",
  "level": 3
}, {
  "value": "14.5.5 NoSQL Types — Full Comparison",
  "id": "1455-nosql-types--full-comparison",
  "level": 3
}, {
  "value": "14.6 Consistency Models — From Weak to Strong",
  "id": "146-consistency-models--from-weak-to-strong",
  "level": 2
}, {
  "value": "14.6.1 The Consistency Spectrum",
  "id": "1461-the-consistency-spectrum",
  "level": 3
}, {
  "value": "14.6.2 Strong Consistency (Linearizability)",
  "id": "1462-strong-consistency-linearizability",
  "level": 3
}, {
  "value": "14.6.3 Eventual Consistency",
  "id": "1463-eventual-consistency",
  "level": 3
}, {
  "value": "14.6.4 Causal Consistency",
  "id": "1464-causal-consistency",
  "level": 3
}, {
  "value": "14.6.5 Read-Your-Writes Consistency",
  "id": "1465-read-your-writes-consistency",
  "level": 3
}, {
  "value": "14.6.6 Session Consistency",
  "id": "1466-session-consistency",
  "level": 3
}, {
  "value": "14.6.7 Monotonic Read Consistency",
  "id": "1467-monotonic-read-consistency",
  "level": 3
}, {
  "value": "14.6.8 Consistency Models Comparison Table",
  "id": "1468-consistency-models-comparison-table",
  "level": 3
}, {
  "value": "14.6.9 Complexity Analysis",
  "id": "1469-complexity-analysis",
  "level": 3
}, {
  "value": "14.7 Eventual Consistency &amp; Vector Clocks",
  "id": "147-eventual-consistency--vector-clocks",
  "level": 2
}, {
  "value": "14.7.1 What Are Vector Clocks?",
  "id": "1471-what-are-vector-clocks",
  "level": 3
}, {
  "value": "14.7.2 How Vector Clocks Work — Step by Step",
  "id": "1472-how-vector-clocks-work--step-by-step",
  "level": 3
}, {
  "value": "14.7.3 Vector Clock Comparison Rules",
  "id": "1473-vector-clock-comparison-rules",
  "level": 3
}, {
  "value": "14.7.4 Vector Clock — Dry Run Trace Table",
  "id": "1474-vector-clock--dry-run-trace-table",
  "level": 3
}, {
  "value": "14.7.5 Vector Clock — Python Implementation",
  "id": "1475-vector-clock--python-implementation",
  "level": 3
}, {
  "value": "14.7.6 Vector Clock — C++ Implementation",
  "id": "1476-vector-clock--c-implementation",
  "level": 3
}, {
  "value": "14.7.7 Conflict Resolution Strategies",
  "id": "1477-conflict-resolution-strategies",
  "level": 3
}, {
  "value": "14.8 Sharding (Horizontal Partitioning)",
  "id": "148-sharding-horizontal-partitioning",
  "level": 2
}, {
  "value": "14.8.1 Why Shard?",
  "id": "1481-why-shard",
  "level": 3
}, {
  "value": "14.8.2 Hash-Based Sharding",
  "id": "1482-hash-based-sharding",
  "level": 3
}, {
  "value": "14.8.3 Range-Based Sharding",
  "id": "1483-range-based-sharding",
  "level": 3
}, {
  "value": "14.8.4 Geographic (Geo) Sharding",
  "id": "1484-geographic-geo-sharding",
  "level": 3
}, {
  "value": "14.8.5 Sharding Strategies — Comparison",
  "id": "1485-sharding-strategies--comparison",
  "level": 3
}, {
  "value": "14.8.6 Sharding — Advantages &amp; Disadvantages",
  "id": "1486-sharding--advantages--disadvantages",
  "level": 3
}, {
  "value": "14.9 Replication",
  "id": "149-replication",
  "level": 2
}, {
  "value": "14.9.1 Master-Slave (Leader-Follower) Replication",
  "id": "1491-master-slave-leader-follower-replication",
  "level": 3
}, {
  "value": "14.9.2 Multi-Master Replication",
  "id": "1492-multi-master-replication",
  "level": 3
}, {
  "value": "14.9.3 Peer-to-Peer (Leaderless) Replication",
  "id": "1493-peer-to-peer-leaderless-replication",
  "level": 3
}, {
  "value": "14.9.4 Replication Types — Full Comparison",
  "id": "1494-replication-types--full-comparison",
  "level": 3
}, {
  "value": "14.9.5 Replication — Edge Cases and Trade-offs",
  "id": "1495-replication--edge-cases-and-trade-offs",
  "level": 3
}, {
  "value": "14.10 Simple Key-Value Store — Complete Implementations",
  "id": "1410-simple-key-value-store--complete-implementations",
  "level": 2
}, {
  "value": "14.10.1 Python Implementation (In-Memory, with Replication, TTL, and Persistence)",
  "id": "14101-python-implementation-in-memory-with-replication-ttl-and-persistence",
  "level": 3
}, {
  "value": "14.10.2 C++ Implementation (Minimal In-Memory KV Store)",
  "id": "14102-c-implementation-minimal-in-memory-kv-store",
  "level": 3
}, {
  "value": "14.10.3 Complexity Analysis — Why These Complexities?",
  "id": "14103-complexity-analysis--why-these-complexities",
  "level": 3
}, {
  "value": "14.11 Interview Corner",
  "id": "1411-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the CAP theorem. Can you really only choose two?",
  "id": "q1-explain-the-cap-theorem-can-you-really-only-choose-two",
  "level": 3
}, {
  "value": "Q2: When would you choose NoSQL over SQL?",
  "id": "q2-when-would-you-choose-nosql-over-sql",
  "level": 3
}, {
  "value": "Q3: How do you choose a shard key?",
  "id": "q3-how-do-you-choose-a-shard-key",
  "level": 3
}, {
  "value": "Q4: Explain the Gossip Protocol.",
  "id": "q4-explain-the-gossip-protocol",
  "level": 3
}, {
  "value": "Q5: What is the difference between synchronous and asynchronous replication?",
  "id": "q5-what-is-the-difference-between-synchronous-and-asynchronous-replication",
  "level": 3
}, {
  "value": "Q6: How does Cassandra handle consistency?",
  "id": "q6-how-does-cassandra-handle-consistency",
  "level": 3
}, {
  "value": "Q7: What is MongoDB&#39;s replication mechanism?",
  "id": "q7-what-is-mongodbs-replication-mechanism",
  "level": 3
}, {
  "value": "Q8: Compare eventual consistency with strong consistency for a shopping cart.",
  "id": "q8-compare-eventual-consistency-with-strong-consistency-for-a-shopping-cart",
  "level": 3
}, {
  "value": "Q9: What is the &quot;split-brain&quot; problem?",
  "id": "q9-what-is-the-split-brain-problem",
  "level": 3
}, {
  "value": "Q10: Explain MongoDB&#39;s Aggregation Pipeline.",
  "id": "q10-explain-mongodbs-aggregation-pipeline",
  "level": 3
}, {
  "value": "14.12 Applications in Real Systems",
  "id": "1412-applications-in-real-systems",
  "level": 2
}, {
  "value": "14.12.1 Amazon DynamoDB",
  "id": "14121-amazon-dynamodb",
  "level": 3
}, {
  "value": "14.12.2 Apache Cassandra",
  "id": "14122-apache-cassandra",
  "level": 3
}, {
  "value": "14.12.3 MongoDB",
  "id": "14123-mongodb",
  "level": 3
}, {
  "value": "14.12.4 Neo4j",
  "id": "14124-neo4j",
  "level": 3
}, {
  "value": "14.12.5 Redis",
  "id": "14125-redis",
  "level": 3
}, {
  "value": "14.12.6 System Selection Decision Matrix",
  "id": "14126-system-selection-decision-matrix",
  "level": 3
}, {
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
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
  "value": "14.12 TypeScript CAP Theorem &amp; Consistency Model Simulator",
  "id": "1412-typescript-cap-theorem--consistency-model-simulator",
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
        id: "chapter-14-nosql-databases",
        children: "Chapter 14: NoSQL Databases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/13-query-processing",
          children: "Chapter 13—Query Processing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/15-mongodb",
          children: "Chapter 15—MongoDB"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the limitations of relational databases for modern applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the CAP theorem and its implications for distributed systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish ACID from BASE consistency models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify NoSQL database types: document, key-value, column-family, graph"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select appropriate NoSQL solutions based on application requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand when to use SQL vs. NoSQL"
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
        href: "../../assets/images/lessons/database-management-systems/14-nosql/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/14-nosql/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/14-nosql/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/14-nosql/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/14-nosql/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/14-nosql/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "NoSQL Motivation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale-out, flexible schema, high availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose NoSQL when relational constraints become bottlenecks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key-Value Stores"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple get/put by primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for caching, session storage, and simple lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Stores"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-structured data with nested queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for content management, catalogs, and evolving schemas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Column-Family Stores"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wide-column tables optimized for aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for time-series data and analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph Databases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes + edges with graph traversal queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for social networks, recommendations, and fraud detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP Theorem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose 2 of 3: Consistency, Availability, Partition Tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition tolerance is mandatory - choose CP or AP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Application Needs] --> B{Data Model}\n    B -->|Simple Key Lookups| C[Key-Value]\n    B -->|Nested Documents| D[Document Store]\n    B -->|Aggregations| E[Column-Family]\n    B -->|Relationships| F[Graph]\n    C --> G[Redis/DynamoDB]\n    D --> H[MongoDB/Couchbase]\n    E --> I[Cassandra/HBase]\n    F --> J[Neo4j/ArangoDB]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch06-nosql.png",
        alt: "NoSQL: Categories, CAP Theorem, MongoDB and Redis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-nosql-overview--what-why-when",
      children: "14.1 NoSQL Overview — What, Why, When"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1411-what-is-nosql",
      children: "14.1.1 What Is NoSQL?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NoSQL (Not Only SQL) refers to a class of database management systems that do not follow the relational model. They are designed for horizontal scaling, flexible schemas, high availability, and diverse data models (key-value, document, column-family, graph). Unlike relational databases, NoSQL systems typically relax ACID guarantees in favor of performance and scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Name Evolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1998: Carlo Strozzi used \"NoSQL\" for his lightweight relational DB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2009: Johan Oskarsson popularized the term for distributed non-relational databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2010s: Shifted from \"No SQL\" to \"Not Only SQL\" as systems added SQL-like query support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1412-why-nosql--the-motivation",
      children: "14.1.2 Why NoSQL? — The Motivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Relational databases dominated for decades, but three forces drove the NoSQL revolution:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Scale (The Web Scale Problem)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google, Amazon, Facebook needed petabytes across thousands of servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relational databases scale vertically (bigger servers) — hits hardware limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NoSQL scales horizontally (more servers) — commodity hardware, linear cost growth"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Schema Flexibility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agile development: schemas evolve rapidly, relational migrations are painful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semi-structured data: JSON, XML, logs — not a perfect fit for normalized tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NoSQL uses schema-on-read (interpret structure at query time), not schema-on-write"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. High Availability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "24/7 services cannot tolerate downtime for maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relational replication is complex; failover is not always seamless"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NoSQL systems built with gossip protocols, hinted handoff, and automatic failover"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The \"Impedance Mismatch\":"
      }), "\nObject-Relational Mapping (ORM) tools like Hibernate exist because relational tables map poorly to application objects. NoSQL documents map naturally to objects, eliminating the ORM layer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1413-when-to-use-nosql-vs-sql",
      children: "14.1.3 When to Use NoSQL vs. SQL"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use NoSQL When"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use SQL When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data is semi-structured or unstructured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data is highly structured and normalized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolves frequently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema is stable and well-defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "You need horizontal write scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You need complex joins and subqueries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-availability is critical (zero-downtime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-after-write consistency is mandatory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data is temporal (logs, time-series)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-row ACID transactions are required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency-sensitive caching is needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting and ad-hoc analysis are primary"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flowchart:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application Data Needs\n    |\n    ├── Need multi-row ACID transactions? → SQL (PostgreSQL, MySQL)\n    ├── Need complex joins and ad-hoc queries? → SQL\n    ├── Schema changes weekly? → NoSQL Document\n    ├── Data is a connected graph? → NoSQL Graph\n    ├── Need 100K+ writes/sec on commodity hardware? → NoSQL Column-Family\n    ├── Just need fast key-based lookups? → NoSQL Key-Value\n    └── Need full-text search ranking? → Elasticsearch (separate category)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1414-real-world-analogy-library-sql-vs-warehouse-nosql",
      children: "14.1.4 Real-World Analogy: Library (SQL) vs. Warehouse (NoSQL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Database = A Library"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Books are cataloged by ISBN (schema)\nEvery book must have: ISBN, Title, Author, Dewey Decimal (predefined schema)\nTo find a book: consult the card catalog (index), walk to the exact shelf\nTo find all books by \"Author X\": SQL JOIN across multiple catalog tables\nAdvantage: precise queries, no ambiguity, strong organization\nDisadvantage: reorganizing the library means re-shelving every book (schema migration)\nScaling: build a bigger library (vertical) or a second library with complex cross-referencing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NoSQL Database = A Warehouse"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Boxes stored on pallets labeled with a barcode (key)\nBox contains whatever fits: electronics, clothes, documents (no schema)\nTo find a box: scan the barcode (key lookup)\nTo find \"all blue items\": open every box and check (no join — scan)\nAdvantage: flexible, fast put/get, scale by adding more pallet racks (horizontal)\nDisadvantage: complex queries require opening many boxes, no global organization\nScaling: add more racks, shift pallets between racks (rebalancing), no downtime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library: you need to answer \"how many books by Author X were published after 2020?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warehouse: you need \"give me box 42A\" or \"store this new item right now\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-sql-vs-nosql--head-to-head-comparison-18-criteria",
      children: "14.2 SQL vs. NoSQL — Head-to-Head Comparison (18 Criteria)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL (RDBMS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NoSQL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables, rows, columns (normalized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documents, key-value pairs, column families, graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed, predefined, enforced (schema-on-write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, flexible (schema-on-read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (standardized across vendors)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific (MQL, CQL, Cypher, APIs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID Compliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID (Atomicity, Consistency, Isolation, Durability)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually BASE; some offer ACID per document/record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency (linearizable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable: strong, eventual, causal, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (add CPU/RAM to single server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (add commodity servers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partition Tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not designed for network partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built for partitions (CAP-aware)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Joins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native SQL JOINs (optimized, indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native joins; data is denormalized or application-joined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transactions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-row, multi-table ACID transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-document/record; multi-document via 2PC or sagas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance (Read)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for complex queries with indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for simple key lookups; degrades for complex queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance (Write)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (constraint checks, indexes, logs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (no constraints, append-friendly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, hash, bitmap, GiST, GIN, etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary indexes, inverted indexes, TTL indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maturity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50+ years (since 1970s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-20 years (since mid-2000s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tooling & Ecosystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature: Hibernate, ORMs, BI tools, reporting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing: Mongoose, Spring Data, proprietary tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Referential integrity (foreign keys, constraints)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-enforced; no FK constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master-slave, synchronous log shipping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-master, peer-to-peer, gossip-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERP, banking, CRM, any ACID-required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, IoT, real-time analytics, caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive vertical hardware, commercial licenses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commodity hardware, open-source, lower TCO at scale"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1421-when-polyglot-persistence-wins",
      children: "14.2.1 When Polyglot Persistence Wins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern applications rarely choose one over the other — they use both:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Polyglot persistence stack for an e-commerce platform\n#\n# +------------------+        +-----------------+\n# |  PostgreSQL      |        |  MongoDB         |\n# |  (Orders, Users, |        |  (Product        |\n# |   Payments)      |        |   Catalog)       |\n# +--------+---------+        +--------+--------+\n#          |                           |\n#          v                           v\n#  +-------+--------+        +---------+--------+\n#  |  Redis          |        |  Elasticsearch   |\n#  |  (Session,      |        |  (Full-text      |\n#  |   Cart Cache)   |        |   Search)        |\n#  +------------------+        +------------------+\n#          |                           |\n#          v                           v\n#  +-------+--------+        +---------+--------+\n#  |  Neo4j          |        |  Cassandra       |\n#  |  (Recommenda-   |        |  (Event Logs,    |\n#  |   tions)        |        |   Analytics)     |\n#  +------------------+        +------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-the-cap-theorem",
      children: "14.3 The CAP Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1431-core-concept",
      children: "14.3.1 Core Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Proposed by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Eric Brewer"
      }), " in 2000 (keynote at PODC), formally proven by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gilbert and Lynch"
      }), " in 2002. The theorem states that a distributed data system can guarantee only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two"
      }), " of these three properties simultaneously:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency (C):"
        }), " Every read receives the most recent write or an error. All nodes see the same data at the same logical time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability (A):"
        }), " Every non-failing node receives a (non-error) response for every request, without guarantee it contains the latest write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Tolerance (P):"
        }), " The system continues to operate despite an arbitrary number of messages being dropped or delayed between nodes (network partition)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        Consistency\n           /\\\n          /  \\\n         /    \\\n        / CAP  \\\n       /        \\\n      /__________\\\nAvailability   Partition Tolerance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1432-understanding-network-partitions",
      children: "14.3.2 Understanding Network Partitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "network partition"
      }), " occurs when a communication failure splits nodes into two or more groups that cannot talk to each other."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Normal State:\n[Node A] <----> [Node B] <----> [Node C]\n   All nodes communicate, data is consistent\n\nPartition State:\n[Node A] <--X--> [Node B] <----> [Node C]\n   ^--- partition ---^\n   Group 1 (A alone)       Group 2 (B + C)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Insight:"
      }), " Partitions ", (0,jsx_runtime.jsx)(_components.em, {
        children: "will"
      }), " happen in distributed systems (network failures, switches dying, cables cut). Since P is unavoidable, you must choose between C and A ", (0,jsx_runtime.jsx)(_components.em, {
        children: "during a partition"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PACELC Extension"
      }), " (Daniel Abadi, 2010):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "P"
        }), "artition occurs → trade ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        }), "vailability vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C"
        }), "onsistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E"
        }), "lse (no partition) → trade ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "L"
        }), "atency vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C"
        }), "onsistency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1433-cap-trade-off-scenarios--dry-run-trace-tables",
      children: "14.3.3 CAP Trade-off Scenarios — Dry Run Trace Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1: CP System (e.g., HBase, MongoDB with w=majority)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial State: key \"balance\" = 100 on both Node A and Node B\n\nStep | Event                          | Node A (balance) | Node B (balance) | Action\n-----|--------------------------------|------------------|------------------|-------\n1    | Network partition occurs       | 100              | 100              | Partition\n2    | Write(balance=200) to Node A   | 200              | 100              | Write succeeds locally\n3    | Read(balance) from Node B      | 200              | 100              | Node B returns ERROR\n4    | Read(balance) from Node A      | 200              | 100              | Node A returns 200\n5    | Partition heals                | 200              | 200              | Replication syncs\n6    | Read(balance) from Node B      | 200              | 200              | Returns 200\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " Reads from partition B are rejected (unavailable) to preserve consistency. System is CP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 2: AP System (e.g., Cassandra, DynamoDB)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial State: key \"balance\" = 100 on both Node A and Node B\n\nStep | Event                          | Node A (balance) | Node B (balance) | Action\n-----|--------------------------------|------------------|------------------|-------\n1    | Network partition occurs       | 100              | 100              | Partition\n2    | Write(balance=200) to Node A   | 200              | 100              | Write succeeds\n3    | Read(balance) from Node B      | 200              | 100              | Node B returns 100 (stale!)\n4    | Read(balance) from Node A      | 200              | 100              | Node A returns 200\n5    | Partition heals                | 200              | 200              | Anti-entropy syncs\n6    | Read(balance) from Node B      | 200              | 200              | Returns 200\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " Reads from partition B return stale data but never fail. System is AP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 3: CA System (Single-node PostgreSQL) — Not Distributed"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial State: key \"balance\" = 100 on single server\n\nStep | Event                          | Value | Action\n-----|--------------------------------|-------|-------\n1    | Write(balance=200)             | 200   | Write succeeds\n2    | Read(balance)                  | 200   | Returns 200 (consistent)\n3    | Server crashes                 | --    | System unavailable\n4    | Server restarts                | 200   | From persistent storage\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " When the server is up, data is consistent and available. But a crash = total unavailability. In a true distributed system with partitions, CA is impossible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1434-cap-theorem--detailed-explanation-of-c-a-p",
      children: "14.3.4 CAP Theorem — Detailed Explanation of C, A, P"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency (in the CAP sense):"
      }), " Linearizability. All nodes agree on the order of operations and the value of every key. Equivalent to having a single, atomic copy of the data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Availability (in the CAP sense):"
      }), " Every request to a non-failing node returns a response. This does NOT mean \"99.999% uptime\" — it means during a partition, every node that is still reachable will respond (even if the response is stale)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition Tolerance:"
      }), " The system's ability to function despite nodes being unable to communicate. Without P, a network split takes down the entire system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Misconception:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ \"CAP says you can only have 2 out of 3 at all times.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"CAP says only during a network partition must you choose between C and A. When no partition exists, you can have C + A.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1435-cap-simulator--python",
      children: "14.3.5 CAP Simulator — Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nCAP Simulator: Demonstrates CP vs AP behavior during network partitions.\nUsage: python cap_simulator.py\n\"\"\"\n\nimport time\nimport random\nfrom enum import Enum\n\nclass CAPMode(Enum):\n    CP = \"Consistency + Partition Tolerance\"\n    AP = \"Availability + Partition Tolerance\"\n\nclass Node:\n    def __init__(self, node_id):\n        self.node_id = node_id\n        self.data = {}  # key -> value\n        self.partitioned = False\n        self.peers = []\n\n    def set_peers(self, peers):\n        self.peers = peers\n\n    def write(self, key, value):\n        self.data[key] = value\n        return True\n\n    def read(self, key):\n        return self.data.get(key, None)\n\nclass CAPSimulator:\n    def __init__(self, mode, num_nodes=3):\n        self.mode = mode\n        self.nodes = [Node(i) for i in range(num_nodes)]\n        for node in self.nodes:\n            node.set_peers([n for n in self.nodes if n.node_id != node.node_id])\n\n    def cause_partition(self, group_a, group_b):\n        \"\"\"Split nodes into two groups that cannot communicate.\"\"\"\n        for node_a in group_a:\n            node_a.partitioned = True\n            node_a.peers = [n for n in group_a if n.node_id != node_a.node_id]\n        for node_b in group_b:\n            node_b.partitioned = True\n            node_b.peers = [n for n in group_b if n.node_id != node_b.node_id]\n\n    def heal_partition(self):\n        for node in self.nodes:\n            node.partitioned = False\n            node.set_peers([n for n in self.nodes if n.node_id != node.node_id])\n\n    def write_to_node(self, node_id, key, value):\n        node = self.nodes[node_id]\n        result = node.write(key, value)\n        # In AP mode, propagate to peers even during partition\n        if self.mode == CAPMode.AP and node.partitioned:\n            for peer in node.peers:\n                peer.write(key, value)\n        return result\n\n    def read_from_node(self, node_id, key):\n        node = self.nodes[node_id]\n        if self.mode == CAPMode.CP and node.partitioned:\n            # In CP: partitioned nodes refuse reads (cannot guarantee consistency)\n            if random.random() < 0.7:  # 70% chance the partition affects this key\n                return None  # Simulate unavailability\n        return node.read(key)\n\n    def simulate(self):\n        print(f\"\\n=== CAP Simulator: {self.mode.value} ===\")\n        # Initialize all nodes with balance=100\n        for node in self.nodes:\n            node.write(\"balance\", 100)\n        print(f\"Initial: balance=100 on all {len(self.nodes)} nodes\")\n\n        # Cause partition: Node 0 isolated from Nodes 1 and 2\n        print(f\"\\n[1] Network partition: Node 0 isolated from Nodes 1,2\")\n        self.cause_partition([self.nodes[0]], self.nodes[1:])\n\n        # Write to Node 0\n        print(f\"[2] Write balance=200 to Node 0\")\n        self.write_to_node(0, \"balance\", 200)\n\n        # Read from different nodes\n        for i in range(len(self.nodes)):\n            val = self.read_from_node(i, \"balance\")\n            status = \"STALE\" if val == 100 else \"CURRENT\" if val == 200 else \"UNAVAILABLE\"\n            print(f\"[3] Read from Node {i}: balance={val} ({status})\")\n\n        # Heal partition\n        print(f\"\\n[4] Partition heals\")\n        self.heal_partition()\n\n        # Sync all nodes\n        if self.mode == CAPMode.CP:\n            # CP: sync from the node that was written to\n            current_val = self.nodes[0].read(\"balance\")\n            for node in self.nodes:\n                node.write(\"balance\", current_val)\n        else:\n            # AP: conflict resolution needed (last-write-wins typically)\n            latest = max(\n                (self.nodes[i].read(\"balance\") or 0, i) for i in range(len(self.nodes))\n            )\n            for node in self.nodes:\n                node.write(\"balance\", latest[0])\n            print(f\"[AP] Conflict resolved via last-write-wins: balance={latest[0]}\")\n\n        print(f\"[5] Final state:\")\n        for i in range(len(self.nodes)):\n            print(f\"    Node {i}: balance={self.nodes[i].read('balance')}\")\n\nif __name__ == \"__main__\":\n    print(\"=\" * 50)\n    print(\"CAP THEOREM SIMULATOR\")\n    print(\"=\" * 50)\n    sim_cp = CAPSimulator(CAPMode.CP)\n    sim_cp.simulate()\n    sim_ap = CAPSimulator(CAPMode.AP)\n    sim_ap.simulate()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — CP Simulator Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== CAP Simulator: CP ===\nInitial: balance=100 on all 3 nodes\n\n[1] Partition: Node 0 isolated from Nodes 1,2\n[2] Write balance=200 to Node 0\n[3] Read from Node 0: balance=200 (CURRENT)\n    Read from Node 1: balance=None (UNAVAILABLE)\n    Read from Node 2: balance=None (UNAVAILABLE)\n[4] Partition heals\n[5] Final: All nodes balance=200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — AP Simulator Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== CAP Simulator: AP ===\nInitial: balance=100 on all 3 nodes\n\n[1] Partition: Node 0 isolated from Nodes 1,2\n[2] Write balance=200 to Node 0\n[3] Read from Node 0: balance=200 (CURRENT)\n    Read from Node 1: balance=100 (STALE)\n    Read from Node 2: balance=100 (STALE)\n[4] Partition heals\n[5] Conflict resolved via last-write-wins: balance=200\n    All nodes balance=200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CP mode read: O(1) on non-partitioned nodes, O(1) with unavailability on partitioned nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AP mode read: O(1) always, but may return stale data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflict resolution (AP heal): O(n) where n = number of replicas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: O(k * n) where k = number of keys, n = number of nodes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this complexity?"
      }), " Each node stores its own copy of all keys. During partition, nodes cannot synchronize, so stale reads or unavailability is the trade-off. Healing requires comparing all replicas to find the latest value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1436-cap-simulator--c",
      children: "14.3.6 CAP Simulator — C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unordered_map>\n#include <vector>\n#include <memory>\n#include <string>\n#include <cstdlib>\n#include <ctime>\n\nenum class CAPMode { CP, AP };\n\nclass Node {\npublic:\n    int id;\n    std::unordered_map<std::string, int> data;\n    bool partitioned;\n    std::vector<Node*> peers;\n\n    Node(int id) : id(id), partitioned(false) {}\n\n    void write(const std::string& key, int value) {\n        data[key] = value;\n    }\n\n    int read(const std::string& key) {\n        auto it = data.find(key);\n        return (it != data.end()) ? it->second : -1;\n    }\n};\n\nclass CAPSimulator {\n    std::vector<std::unique_ptr<Node>> nodes;\n    CAPMode mode;\n\npublic:\n    CAPSimulator(CAPMode mode, int n = 3) : mode(mode) {\n        for (int i = 0; i < n; ++i) {\n            nodes.push_back(std::make_unique<Node>(i));\n        }\n        for (auto& n : nodes) {\n            for (auto& p : nodes) {\n                if (n->id != p->id)\n                    n->peers.push_back(p.get());\n            }\n        }\n    }\n\n    void causePartition(const std::vector<int>& groupA, const std::vector<int>& groupB) {\n        for (int id : groupA) {\n            nodes[id]->partitioned = true;\n            nodes[id]->peers.clear();\n            for (int pid : groupA)\n                if (pid != id)\n                    nodes[id]->peers.push_back(nodes[pid].get());\n        }\n        for (int id : groupB) {\n            nodes[id]->partitioned = true;\n            nodes[id]->peers.clear();\n            for (int pid : groupB)\n                if (pid != id)\n                    nodes[id]->peers.push_back(nodes[pid].get());\n        }\n    }\n\n    void healPartition() {\n        for (auto& n : nodes) {\n            n->partitioned = false;\n            n->peers.clear();\n            for (auto& p : nodes) {\n                if (n->id != p->id)\n                    n->peers.push_back(p.get());\n            }\n        }\n    }\n\n    int readFromNode(int id, const std::string& key) {\n        if (mode == CAPMode::CP && nodes[id]->partitioned)\n            return -1; // Unavailable in CP during partition\n        return nodes[id]->read(key);\n    }\n\n    void simulate() {\n        std::cout << \"\\n=== CAP Simulator: \" << (mode == CAPMode::CP ? \"CP\" : \"AP\") << \" ===\\n\";\n        for (auto& n : nodes) n->write(\"balance\", 100);\n        std::cout << \"Initial: balance=100 on all \" << nodes.size() << \" nodes\\n\";\n\n        std::cout << \"\\n[1] Network partition: Node 0 isolated\\n\";\n        causePartition({0}, {1, 2});\n\n        std::cout << \"[2] Write balance=200 to Node 0\\n\";\n        nodes[0]->write(\"balance\", 200);\n\n        for (int i = 0; i < (int)nodes.size(); ++i) {\n            int val = readFromNode(i, \"balance\");\n            std::string status = (val == 200) ? \"CURRENT\" : (val == 100) ? \"STALE\" : \"UNAVAILABLE\";\n            std::cout << \"[3] Read Node \" << i << \": balance=\" << val << \" (\" << status << \")\\n\";\n        }\n\n        healPartition();\n        std::cout << \"\\n[4] Partition healed\\n\";\n\n        // Sync\n        int latest = nodes[0]->read(\"balance\");\n        for (auto& n : nodes) n->write(\"balance\", latest);\n\n        std::cout << \"[5] Final: All nodes balance=\" << nodes[0]->read(\"balance\") << \"\\n\";\n    }\n};\n\nint main() {\n    std::srand(std::time(nullptr));\n    std::cout << \"=== CAP THEOREM SIMULATOR ===\\n\";\n    CAPSimulator simCP(CAPMode::CP);\n    simCP.simulate();\n    CAPSimulator simAP(CAPMode::AP);\n    simAP.simulate();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis for CAP Simulator (C++):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time to simulate a partition: O(n) for peer reassignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read during partition (CP): O(1) check + O(1) data access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read during partition (AP): O(1) always"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Healing: O(n) to rebuild peer lists + O(n) for data sync"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall: O(n) per operation where n = number of replicas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not O(log n)?"
      }), " Peer lists are fully connected — each node talks to every other node. This gives maximum fault tolerance at the cost of linear-time reconnection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1437-cap-theorem--advantages--disadvantages",
      children: "14.3.7 CAP Theorem — Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "CP Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency, predictable behavior, easier to debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some nodes become unavailable during partitions; reduced throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AP Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always available, high throughput, resilient to partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale reads; conflict resolution required; harder to reason about"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "General"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamentally describes distributed system constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often misinterpreted as absolute; doesn't account for latency/performance trade-offs in normal operation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in CAP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial Partition:"
        }), " Only some keys are inconsistent. Solution: per-key quorum."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Healing Race:"
        }), " Both sides of a partition wrote the same key. Solution: vector clocks or last-write-wins (LWW)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read Repair:"
        }), " Reading a stale value triggers background sync. Solution: hinted handoff + read repair."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tunable Consistency:"
        }), " Per-query choice of consistency level (Cassandra: ONE, QUORUM, ALL)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-base-vs-acid",
      children: "14.4 BASE vs. ACID"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1441-full-comparison",
      children: "14.4.1 Full Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ACID (SQL)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BASE (NoSQL)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All-or-nothing transaction execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No atomic multi-operation guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data always satisfies integrity constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application responsible for invariants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent transactions appear serial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed; dirty reads possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committed data survives failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable durability (async/sync replication)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited during failures or replication lag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designed for continuous availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent state at all times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft state — changes without input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigid, predefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, dynamic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primarily vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal by design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pessimistic (lock data to prevent conflicts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic (assume conflicts rare, resolve later)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When Used"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking, ERP, healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, IoT, caching, social media"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1442-acid-in-detail",
      children: "14.4.2 ACID in Detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Atomicity:"
      }), " A transaction is an indivisible unit. If any part fails, the entire transaction is rolled back (all-or-nothing)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      }), " Transactions only move the database from one valid state to another. All constraints (FK, unique, check) are satisfied."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Isolation:"
      }), " Concurrent transactions execute as if they were serial. SQL standard defines four levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Durability:"
      }), " Once a transaction commits, its changes survive system failures (disk write + WAL + replication)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1443-base-in-detail",
      children: "14.4.3 BASE in Detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basically Available:"
      }), " The system guarantees a response to every request, even if the data returned is not the latest. No node ever refuses a request."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft State:"
      }), " The system state can change over time without any new input, due to background processes (anti-entropy, gossip protocols, hinted handoff replay)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eventual Consistency:"
      }), " If no new writes arrive, all replicas will eventually converge to the same value. There is no time bound — \"eventually\" means \"given enough time without updates.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1444-when-to-choose-acid-vs-base",
      children: "14.4.4 When to Choose ACID vs. BASE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choose ACID when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Financial transactions (money transfers, payments)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inventory management (cannot oversell)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any system where correctness trumps availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regulatory compliance (SOX, PCI-DSS)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choose BASE when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read-heavy workloads (content delivery, caching)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time-series data (sensor readings, logs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Social media feeds (stale posts are acceptable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shopping cart data (losing an item is worse than stale data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systems where 99.999% uptime is required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Middle Ground — NewSQL (CockroachDB, Spanner, YugabyteDB):"
      }), "\nThese systems attempt to provide both ACID transactions and horizontal scalability by combining:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong consistency via distributed consensus (Raft, Paxos)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Horizontal scaling through automatic sharding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL interface with NoSQL-like scalability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Higher latency than pure NoSQL; lower than traditional SQL at scale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-nosql-data-models--deep-dive",
      children: "14.5 NoSQL Data Models — Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1451-key-value-stores-redis-dynamodb-riak-memcached",
      children: "14.5.1 Key-Value Stores (Redis, DynamoDB, Riak, Memcached)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Model:"
      }), " A persistent hash map. Every value is accessed by a unique key. The value is opaque to the database (blob, string, binary)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+--------------------------------------------+\n|   Key     |               Value                        |\n+-----------+--------------------------------------------+\n| user:1001 | {\"name\":\"Alice\",\"age\":28,\"email\":\"...\"}    |\n| session:  | {\"user_id\":1001,\"expires\":\"2026-02-01\"}    |\n| cart:1001 | [\"item_42\",\"item_17\",\"item_89\"]            |\n| count:    | 1542                                       |\n| page:/    | \"<html>cached content...</html>\"            |\n+-----------+--------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GET(key) → Returns value or nil"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SET(key, value) → Stores value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DELETE(key) → Removes key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXISTS(key) → Boolean check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TTL(key, seconds) → Set time-to-live for auto-expiration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Design Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keys should be meaningful and organized (user:1001:name, not just \"1001\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Namespace with colons (Redis convention)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Size matters: large keys waste memory, small keys collide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Query by key only — no secondary indexes (unless using DynamoDB GSI)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GET: O(1) amortized (hash table)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SET: O(1) amortized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DELETE: O(1) amortized"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1)?"
      }), " Values are indexed by key hash. No scanning, no sorting, no joins. The trade-off is zero query expressiveness."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, predictable, easy to scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No query language, no secondary indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-millisecond for in-memory (Redis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large values degrade performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple sharding by key hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cross-key operations or transactions"
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
          children: "Hot Keys:"
        }), " A single key receiving disproportionate traffic → replicate or cache locally"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large Values:"
        }), " >1MB values cause network and memory pressure → store metadata in KV, blob in S3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Collisions:"
        }), " Two entities with same key → namespace carefully (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "user:{id}:profile"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1452-document-stores-mongodb-couchbase-couchdb-firebase",
      children: "14.5.2 Document Stores (MongoDB, Couchbase, CouchDB, Firebase)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Model:"
      }), " Semi-structured documents (JSON, BSON, XML). Each document is self-contained with its own schema. Documents in the same collection can have different fields (schema-on-read)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// MongoDB document — product catalog\n{\n  \"_id\": ObjectId(\"507f1f77bcf86cd799439011\"),\n  \"sku\": \"LAP-2026-001\",\n  \"name\": \"UltraBook Pro 16\",\n  \"category\": \"electronics\",\n  \"price\": 1499.99,\n  \"in_stock\": true,\n  \"specifications\": {\n    \"cpu\": \"Intel i9-14900H\",\n    \"ram\": \"32GB DDR5\",\n    \"storage\": \"1TB NVMe\",\n    \"display\": \"16-inch 4K OLED\"\n  },\n  \"reviews\": [\n    {\"user\": \"alice\", \"rating\": 5, \"text\": \"Amazing laptop!\"},\n    {\"user\": \"bob\", \"rating\": 4, \"text\": \"Great but expensive\"}\n  ],\n  \"tags\": [\"laptop\", \"ultrabook\", \"premium\"],\n  \"created_at\": ISODate(\"2026-01-15T10:30:00Z\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded documents (nested data avoids joins)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrays with sub-documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rich querying: field-level queries, regex, range, geospatial"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secondary indexes on any field"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregation pipeline (MapReduce-style)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Find all products under $1000\ndb.products.find({ price: { $lt: 1000 } })\n\n// Find products by tag with price range\ndb.products.find({\n  tags: \"laptop\",\n  price: { $gte: 500, $lte: 2000 }\n})\n\n// Aggregation: average price by category\ndb.products.aggregate([\n  { $group: { _id: \"$category\", avgPrice: { $avg: \"$price\" } } },\n  { $sort: { avgPrice: -1 } }\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point lookup by _id: O(log n) (B-tree index)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Field lookup with index: O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full collection scan: O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregation pipeline: varies by stage, O(n) per stage typically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log n) for indexed lookups?"
      }), " MongoDB uses B-tree indexes (like relational databases). B-trees maintain sorted, balanced structures where height = log fanout(n)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolves without migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No schema enforcement; implicit schema still needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Developer Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-to-document mapping natural in JS/Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unstructured data can lead to inconsistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich query language, secondary indexes, aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited JOIN capabilities; denormalization needed"
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
          children: "Document Size Limit:"
        }), " MongoDB 16MB limit → use GridFS for larger files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested Array Growth:"
        }), " Unbounded arrays cause document rewriting overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema Drift:"
        }), " Different documents in same collection with wildly different schemas → query complexity increases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denormalization Consistency:"
        }), " Duplicated data across documents can diverge → application-level sync needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1453-column-family-stores-cassandra-hbase-scylladb-bigtable",
      children: "14.5.3 Column-Family Stores (Cassandra, HBase, ScyllaDB, Bigtable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Model:"
      }), " Data is stored in column families. Each row has a row key, and columns are grouped into families. Rows can have different columns (sparse storage)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column Family: \"user_profile\"\nRow Key: \"user_1001\"\n+-----------+-----------+-----------+-----------+\n| name:     | email:    | age:      | city:     |\n| \"Alice\"   | \"a@x.com\" | 28        | \"NYC\"     |\n+-----------+-----------+-----------+-----------+\n\nRow Key: \"user_1002\"\n+-----------+-----------+-----------+\n| name:     | email:    | phone:    |\n| \"Bob\"     | \"b@x.com\" | \"555-123\" |\n+-----------+-----------+-----------+\n\nRow Key: \"user_1003\"\n+-----------+-----------+-----------+-----------+\n| name:     | age:      | city:     | joined:   |\n| \"Carol\"   | 35        | \"LA\"      | \"2026-01\" |\n+-----------+-----------+-----------+-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Architecture Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Key:"
        }), " Determines which node stores the row (hash of partition key)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clustering Columns:"
        }), " Determine sort order within a partition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSTables (Sorted String Tables):"
        }), " Immutable files on disk, periodically merged (compaction)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MemTable:"
        }), " In-memory write buffer, flushed to SSTable when full"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit Log:"
        }), " Write-ahead log for durability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cassandra CQL Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Table for time-series sensor data\nCREATE TABLE sensor_data (\n    sensor_id UUID,\n    timestamp TIMESTAMP,\n    temperature DOUBLE,\n    humidity DOUBLE,\n    pressure DOUBLE,\n    battery_level DOUBLE,\n    PRIMARY KEY (sensor_id, timestamp)\n) WITH CLUSTERING ORDER BY (timestamp DESC);\n\n-- Query: latest readings for sensor\nSELECT temperature, humidity, timestamp\nFROM sensor_data\nWHERE sensor_id = 123e4567-e89b-12d3-a456-426614174000\nORDER BY timestamp DESC\nLIMIT 10;\n\n-- Query: time range\nSELECT AVG(temperature) as avg_temp\nFROM sensor_data\nWHERE sensor_id = 123e4567-e89b-12d3-a456-426614174000\n  AND timestamp >= '2026-01-01'\n  AND timestamp < '2026-02-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Write Path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends write to any node (coordinator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator determines target node(s) based on partition key hash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write logged to commit log (durability)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write applied to MemTable (in-memory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acknowledgment sent to client when quorum satisfied"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MemTable flushed to SSTable when full (background)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Periodically, SSTables compacted (merge + garbage collect)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write: O(1) per node (sequential append to commit log + MemTable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point read by partition key: O(1) (hash lookup)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range read within partition: O(log n) where n = rows in partition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full table scan: O(p * r) where p = partitions, r = rows per partition — catastrophic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) writes?"
      }), " Column-family stores append-only. No in-place updates, no locking, no index maintenance during writes. This is why Cassandra achieves millions of writes per second."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Write Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of ops/sec on commodity hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-before-write patterns are expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time-Series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural fit for append-heavy workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-partition queries are slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scale, add nodes without downtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex compaction tuning; tombstone management"
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
          children: "Tombstones:"
        }), " Deletes create tombstones (markers) that persist until compaction — too many tombstones degrade read performance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hot Partitions:"
        }), " Uneven data distribution causes hotspots → choose partition keys carefully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large Partitions:"
        }), " Too many rows in one partition → query latency increases → partition splitting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hinted Handoff:"
        }), " If replica is down, coordinator stores hints → replay when node returns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1454-graph-databases-neo4j-amazon-neptune-arangodb-janusgraph",
      children: "14.5.4 Graph Databases (Neo4j, Amazon Neptune, ArangoDB, JanusGraph)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Model:"
      }), " Nodes (entities) connected by Edges (relationships). Both nodes and edges can have properties. Relationships are first-class citizens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(person:User {name:\"Alice\", age:28})\n    |\n    |--[:FRIENDS_WITH {since:2020}]-->(person:User {name:\"Bob\"})\n    |\n    |--[:PURCHASED {date:\"2026-01-15\", amount:59.99}])\n    |   |\n    |   +-->(product:Product {name:\"Wireless Mouse\", price:59.99})\n    |\n    |--[:REVIEWED {rating:5, text:\"Great!\"}])\n       |\n       +-->(product:Product {name:\"Wireless Mouse\"})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Graph Databases Excel:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relationship traversal is O(1) per hop (pointer chasing, not index lookup)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL (relational) join depth = O(join_cost^depth) — exponential with depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graph traversal depth = O(d * degree) — linear with depth"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Neo4j Cypher Queries:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cypher",
        children: "-- Find friends of Alice\nMATCH (p:Person {name: \"Alice\"})-[:FRIENDS_WITH]->(friend)\nRETURN friend.name, friend.email\n\n-- Friend-of-friend recommendation (excluding direct friends)\nMATCH (p:Person {name: \"Alice\"})-[:FRIENDS_WITH]->()-[:FRIENDS_WITH]->(recommendation)\nWHERE NOT (p)-[:FRIENDS_WITH]->(recommendation)\nRETURN DISTINCT recommendation.name, count(*) as mutual_count\nORDER BY mutual_count DESC\nLIMIT 10\n\n-- Shortest path between two people\nMATCH p = shortestPath(\n  (alice:Person {name: \"Alice\"})-[:FRIENDS_WITH*]-(bob:Person {name: \"Bob\"})\n)\nRETURN p\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create node/edge: O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find node by label + property with index: O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse one hop: O(degree) where degree = number of incident edges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse k hops: O(degree^k) in worst case, O(k * avg_degree) with targeting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shortest path: O(V + E log V) with Dijkstra, O(V + E) with BFS (unweighted)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) per hop?"
      }), " Graph databases store edges as direct pointers (or adjacency lists), not JOIN tables. In relational, a friend relationship at depth 3 requires 3 JOINs, each a B-tree lookup. In graph, it is 3 pointer dereferences."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Relationship Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightning-fast traversals (millions of hops/sec)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor at bulk aggregation (OLAP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expressive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural model for connected domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning curve for Cypher/Gremlin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add relationships/properties without migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large fan-out nodes (celebrity) cause traversal bottlenecks"
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
          children: "Super-Node Problem:"
        }), " A node with millions of edges (e.g., a celebrity on a social graph) → queries through that node are slow → split or limit edge fan-out"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deep Traversal:"
        }), " Paths longer than 5-10 hops can be expensive → limit query depth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property Graph vs RDF:"
        }), " Neo4j uses property graph; RDF stores (Triple Stores) use Subject-Predicate-Object → different query models"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1455-nosql-types--full-comparison",
      children: "14.5.5 NoSQL Types — Full Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key-Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Column-Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key → Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON/BSON Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row with dynamic columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node + Edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query By"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fields, indexes, aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition key, clustering columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph traversal (Cypher, Gremlin)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema-on-read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-row flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (tunable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID (Neo4j)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMS, catalogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships, graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, text, geospatial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition key + clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET/SET/DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MQL, Aggregation Pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cypher, SPARQL, Gremlin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maturity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (Memcached: 2003)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (MongoDB: 2009)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (Bigtable: 2004)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (Neo4j: 2007)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-millisecond (in-memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10ms (disk with cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-50ms (traversal dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard by key hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard by key range/hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-shard by partition key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster with read replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (w=majority)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (ONE/QUORUM/ALL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (single master)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-consistency-models--from-weak-to-strong",
      children: "14.6 Consistency Models — From Weak to Strong"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consistency models define the contract between a distributed data store and its clients regarding what values a read operation may return."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1461-the-consistency-spectrum",
      children: "14.6.1 The Consistency Spectrum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Weaker Consistency                          Stronger Consistency\n     |                                          |\n     v                                          v\nEventual < Causal < Read-Your-Writes < Session < Monotonic < Strong (Linearizable)\n  └── BASE ──────────────────────────────└── ACID ───────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1462-strong-consistency-linearizability",
      children: "14.6.2 Strong Consistency (Linearizability)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Every read returns the most recent write. All operations appear to execute atomically in a global order. Equivalent to a single, non-distributed machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write arrives at any node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator propagates to all replicas (or majority)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read must contact enough replicas to guarantee latest value (quorum)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client never sees stale data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal Guarantee:"
      }), " If write W completes before read R begins, then R sees W's value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-off:"
      }), " High latency (sync replication), reduced availability during partitions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " Single-node PostgreSQL, ZooKeeper, etcd, Spanner (TrueTime), MongoDB with w=majority + r=majority"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Read latency = O(round_trip_to_slowest_replica). Why? Strong consistency requires the slowest replica to confirm before responding. This is the cost of safety."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1463-eventual-consistency",
      children: "14.6.3 Eventual Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " If no new writes are made to an object, all replicas will eventually converge to the same value. No time bound is guaranteed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write accepted by any replica (or coordinator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replica propagates update asynchronously to other replicas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read may return stale data if the local replica hasn't received the latest update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Background anti-entropy/gossip protocols ensure convergence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal Guarantee:"
      }), " There exists a time T after which all reads return the same value, provided no further writes occur."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-off:"
      }), " Stale reads are possible; conflict resolution needed (LWW, vector clocks)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " DNS, DynamoDB (default), Cassandra (with ONE consistency), Riak"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence Time Factors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gossip interval (typically 100ms-1s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network latency between nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anti-entropy interval (seconds to minutes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hinted handoff replay"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — DNS Propagation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. You update a DNS record for example.com → 1.2.3.4\n2. The authoritative nameserver accepts the write immediately\n3. Caching resolvers worldwide still return the old IP for up to 48 hours (TTL)\n4. Eventually, all resolvers see the new IP (after cache expiry + refresh)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1464-causal-consistency",
      children: "14.6.4 Causal Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Operations that are causally related are seen by all processes in the same order. Concurrent operations (not causally related) can be seen in different orders."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track causal dependencies between operations (happens-before relationships)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If op A causally precedes op B, every process sees A before B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concurrent ops can be reordered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Alice posts a photo (op A)\n2. Bob comments on the photo (op B, causally dependent on A)\n3. Charlie sees: Bob's comment appears after the photo (correct)\n4. But Charlie might see a different photo from Alice (concurrent update) before seeing the comment\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " COPS (Calvin), SwiftNoSQL, some CRDT implementations"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guarantee:"
      }), " Causality is preserved; concurrency is not ordered."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1465-read-your-writes-consistency",
      children: "14.6.5 Read-Your-Writes Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " After a process writes a value, any subsequent reads by the same process will see that value (or a newer one)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each client maintains a session context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write includes a timestamp/version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reads are routed to replicas that have at least that timestamp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the local replica is behind, the read is forwarded to a replica that has the update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Comment System:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. You post a comment on a blog\n2. You refresh the page\n3. Your comment appears immediately (even though other users may not see it yet)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " MongoDB (with w=1, read preference=primary), many session stores"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sticky sessions: route reads to the node that handled the write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version stamps: client tracks last write version, reads from replicas with version >= that"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read-repair: if a read returns stale data, the node fetches the latest version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1466-session-consistency",
      children: "14.6.6 Session Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Within a client session, read-your-writes AND monotonic reads are guaranteed. Multiple sessions for the same client provide no such guarantees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session created when client connects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session ID attached to all requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session state tracks read/write progress (watermarks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On session expiry, guarantees reset"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — E-commerce:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Session 1: You add item to cart → browse → checkout (all operations consistent within session)\nSession 2 (same user on different device): Items in cart may not reflect Session 1's changes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " DynamoDB Session Store, most web frameworks (ASP.NET, Express Session)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1467-monotonic-read-consistency",
      children: "14.6.7 Monotonic Read Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " If a process reads a value for an object, any subsequent read will return the same or a newer value. The process never sees an older version of the data after seeing a newer one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client records the timestamp of the last value it read for each key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subsequent reads are directed to replicas with at least that timestamp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no replica has a recent enough version, the read waits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Violation (Without Monotonic Reads):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. User A reads \"balance = 200\" from Node 1\n2. Network issue, next read goes to Node 2 (lags behind)\n3. User A reads \"balance = 100\" — violation! Went back in time\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " Cassandra (with read consistency > ONE), many distributed databases"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1468-consistency-models-comparison-table",
      children: "14.6.8 Consistency Models Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stale Reads?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read Your Writes?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monotonic?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Causal Order?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Guarantee?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eventual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (no time bound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Causal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-Your-Writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (other processes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (other sessions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (within session)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monotonic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strong (Linearizable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (immediate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1469-complexity-analysis",
      children: "14.6.9 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Consistency Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coordination Overhead"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eventual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (async gossip)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Causal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency tracking vector of size n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-Your-Writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session state maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session watermarks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monotonic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client version tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strong"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed consensus (Paxos/Raft)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why these complexities?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong consistency requires contacting f+1 nodes (where f = maximum tolerable failures) to guarantee the latest value. Each additional node adds a network round-trip."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eventual consistency requires zero coordination — just accept the write locally and propagate later. This is why DynamoDB writes are sub-millisecond but reads can be stale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Causal consistency requires tracking the vector of prior versions (vector clocks), adding O(n) space to each write."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-eventual-consistency--vector-clocks",
      children: "14.7 Eventual Consistency & Vector Clocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1471-what-are-vector-clocks",
      children: "14.7.1 What Are Vector Clocks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vector clock"
      }), " is a timestamp mechanism for tracking the causal history of data in a distributed system. It detects concurrent updates and helps resolve conflicts during eventual consistency convergence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      }), " A vector clock is a list of (node_id, counter) pairs. Each node maintains its own counter. When a node updates data, it increments its own counter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Vector Clock: [A:3, B:2, C:1]\n              ↑    ↑    ↑\n           Node A has 3 updates\n           Node B has 2 updates\n           Node C has 1 update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1472-how-vector-clocks-work--step-by-step",
      children: "14.7.2 How Vector Clocks Work — Step by Step"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key \"cart\" = [] (empty), Vector Clock = [A:0, B:0]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Alice adds \"item_1\" to cart — handled by Node A"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Action: PUT cart=[\"item_1\"], Node A increments counter\nVector Clock: [A:1, B:0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Alice adds \"item_2\" to cart — handled by Node B (network routes differently)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Action: PUT cart=[\"item_2\"], Node B increments counter\nVector Clock: [A:0, B:1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Node A receives update from Node B and merges"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Node A's state:  cart=[\"item_1\"], VC=[A:1, B:0]\nNode B's state:  cart=[\"item_2\"], VC=[A:0, B:1]\n\nComparison: A:1 > A:0 AND B:0 < B:1 → CONCURRENT updates!\nResolution needed: both items should be in cart\nMerge result: cart=[\"item_1\", \"item_2\"], VC=[A:1, B:1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1473-vector-clock-comparison-rules",
      children: "14.7.3 Vector Clock Comparison Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1 ≤ V2 (all entries ≤)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1 happened before V2 (causal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A:1, B:0] ≤ [A:1, B:2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1 ≥ V2 (all entries ≥)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1 happened after V2 (causal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A:2, B:1] ≥ [A:1, B:1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "V2 (some >, some <)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1 == V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A:1, B:1] == [A:1, B:1]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1474-vector-clock--dry-run-trace-table",
      children: "14.7.4 Vector Clock — Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario: Document \"profile\" updated by two users simultaneously on different nodes\n\nKey: \"profile:user_42\"\n\nTime | Node A                        | Node B                        | Vector Clock\n-----|-------------------------------|-------------------------------|-------------\nT0   | profile = {name:\"Alice\"}      | profile = {name:\"Alice\"}      | [A:0, B:0]\nT1   | Write name=\"Alice Chen\"       | —                             | [A:1, B:0]\nT2   | —                             | Write age=29                  | [A:0, B:1]\nT3   | Node B sends update → A       | —                             | —\nT4   | Node A receives from B        | —                             | —\nT5   | Merge: concurrent!            | —                             | [A:1, B:1]\n     | Both changes applied          | —                             |\n     | profile = {name:\"Alice       | —                             |\n     |  Chen\", age:29}              | —                             |\nT6   | —                             | Node A sends update → B       | —\nT7   | —                             | Node B receives from A         | —\nT8   | —                             | Merge: concurrent!             | [A:1, B:1]\n     | —                             | Both changes, same result      | —\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1475-vector-clock--python-implementation",
      children: "14.7.5 Vector Clock — Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nVector Clock implementation for eventual consistency conflict detection.\n\"\"\"\nfrom dataclasses import dataclass, field\nfrom typing import Dict, Optional, Any\nimport json\n\n@dataclass\nclass VectorClock:\n    \"\"\"A vector clock: node_id -> counter mapping.\"\"\"\n    clocks: Dict[str, int] = field(default_factory=dict)\n\n    def increment(self, node_id: str) -> None:\n        self.clocks[node_id] = self.clocks.get(node_id, 0) + 1\n\n    def get_counter(self, node_id: str) -> int:\n        return self.clocks.get(node_id, 0)\n\n    def __le__(self, other: 'VectorClock') -> bool:\n        \"\"\"Self happened-before other? (all self counters <= other counters)\"\"\"\n        for node, count in self.clocks.items():\n            if count > other.get_counter(node):\n                return False\n        return True\n\n    def __ge__(self, other: 'VectorClock') -> bool:\n        \"\"\"Self happened-after other? (all self counters >= other counters)\"\"\"\n        return other.__le__(self)\n\n    def __eq__(self, other: 'VectorClock') -> bool:\n        return self.clocks == other.clocks\n\n    def is_concurrent(self, other: 'VectorClock') -> bool:\n        \"\"\"True if neither happened-before the other (conflict).\"\"\"\n        return not (self <= other or other <= self)\n\n    def merge(self, other: 'VectorClock') -> 'VectorClock':\n        \"\"\"Merge two clocks by taking max counter for each node.\"\"\"\n        merged = VectorClock(dict(self.clocks))\n        for node, count in other.clocks.items():\n            merged.clocks[node] = max(merged.get_counter(node), count)\n        return merged\n\n    def __str__(self) -> str:\n        items = sorted(self.clocks.items())\n        return \"[\" + \", \".join(f\"{n}:{c}\" for n, c in items) + \"]\"\n\n\n@dataclass\nclass VersionedValue:\n    \"\"\"A value tagged with its vector clock.\"\"\"\n    value: Any\n    clock: VectorClock\n\n\nclass EventuallyConsistentStore:\n    \"\"\"Key-value store with vector-clock-based conflict detection.\"\"\"\n\n    def __init__(self, node_id: str):\n        self.node_id = node_id\n        self.store: Dict[str, VersionedValue] = {}\n\n    def put(self, key: str, value: Any) -> VersionedValue:\n        \"\"\"Write a value (always a new version).\"\"\"\n        old = self.store.get(key)\n        if old:\n            new_clock = old.clock.merge(VectorClock())\n        else:\n            new_clock = VectorClock()\n        new_clock.increment(self.node_id)\n        vv = VersionedValue(value, new_clock)\n        self.store[key] = vv\n        print(f\"[{self.node_id}] PUT {key} = {value}, VC={new_clock}\")\n        return vv\n\n    def get(self, key: str) -> Optional[VersionedValue]:\n        \"\"\"Read the current value with its clock.\"\"\"\n        return self.store.get(key)\n\n    def merge_remote(self, key: str, remote_vv: VersionedValue) -> None:\n        \"\"\"Merge a remote update into local state. Handles conflicts.\"\"\"\n        local = self.store.get(key)\n        if local is None:\n            self.store[key] = remote_vv\n            print(f\"[{self.node_id}] NEW remote value for {key}: {remote_vv.value}\")\n            return\n\n        if remote_vv.clock <= local.clock:\n            # Remote is older — ignore\n            print(f\"[{self.node_id}] IGNORE remote (stale): {remote_vv.value}\")\n        elif local.clock <= remote_vv.clock:\n            # Remote is newer — accept\n            self.store[key] = remote_vv\n            print(f\"[{self.node_id}] ACCEPT remote (newer): {remote_vv.value}\")\n        else:\n            # CONFLICT — concurrent updates\n            print(f\"[{self.node_id}] CONFLICT detected!\")\n            print(f\"  Local:  {local.value} (VC={local.clock})\")\n            print(f\"  Remote: {remote_vv.value} (VC={remote_vv.clock})\")\n            # Application-specific merge logic\n            merged_value = self.resolve_conflict(local.value, remote_vv.value)\n            merged_clock = local.clock.merge(remote_vv.clock)\n            merged_clock.increment(self.node_id)\n            self.store[key] = VersionedValue(merged_value, merged_clock)\n            print(f\"[{self.node_id}] MERGED: {merged_value} (VC={merged_clock})\")\n\n    def resolve_conflict(self, local: Any, remote: Any) -> Any:\n        \"\"\"Application-defined conflict resolution (here: merge lists).\"\"\"\n        if isinstance(local, list) and isinstance(remote, list):\n            merged = list(set(local + remote))\n            return merged\n        # Last-write-wins fallback\n        return remote\n\n\n# Demo\nif __name__ == \"__main__\":\n    print(\"=\" * 60)\n    print(\"VECTOR CLOCK CONFLICT DETECTION DEMO\")\n    print(\"=\" * 60)\n\n    node_a = EventuallyConsistentStore(\"A\")\n    node_b = EventuallyConsistentStore(\"B\")\n\n    print(\"\\n1. Node A writes cart = ['item_1']\")\n    v1 = node_a.put(\"cart\", [\"item_1\"])\n\n    print(\"\\n2. Node B writes cart = ['item_2'] (concurrent with A)\")\n    v2 = node_b.put(\"cart\", [\"item_2\"])\n\n    print(\"\\n3. Node B receives A's update — they are concurrent\")\n    node_b.merge_remote(\"cart\", v1)\n\n    print(\"\\n4. Node A receives B's update — same conflict\")\n    node_a.merge_remote(\"cart\", v2)\n\n    print(f\"\\n5. Final state A: {node_a.get('cart')}\")\n    print(f\"   Final state B: {node_b.get('cart')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Complete Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "============================================================\nVECTOR CLOCK CONFLICT DETECTION DEMO\n============================================================\n\n1. Node A writes cart = ['item_1']\n[A] PUT cart = ['item_1'], VC=[A:1]\n\n2. Node B writes cart = ['item_2'] (concurrent with A)\n[B] PUT cart = ['item_2'], VC=[B:1]\n\n3. Node B receives A's update — they are concurrent\n[B] CONFLICT detected!\n  Local:  ['item_2'] (VC=[B:1])\n  Remote: ['item_1'] (VC=[A:1])\n[B] MERGED: ['item_1', 'item_2'] (VC=[A:1, B:1, B:2])\n\n4. Node A receives B's update — same conflict\n[A] CONFLICT detected!\n  Local:  ['item_1'] (VC=[A:1])\n  Remote: ['item_2'] (VC=[B:1])\n[A] MERGED: ['item_1', 'item_2'] (VC=[A:1, A:2, B:1])\n\n5. Final state A: cart=['item_1', 'item_2'] (VC=[A:1, A:2, B:1])\n   Final state B: cart=['item_1', 'item_2'] (VC=[A:1, B:1, B:2])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1476-vector-clock--c-implementation",
      children: "14.7.6 Vector Clock — C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\n#include <sstream>\n#include <memory>\n\nclass VectorClock {\npublic:\n    std::map<std::string, int> clocks;\n\n    VectorClock() = default;\n    VectorClock(const std::map<std::string, int>& c) : clocks(c) {}\n\n    void increment(const std::string& node) {\n        clocks[node]++;\n    }\n\n    int getCounter(const std::string& node) const {\n        auto it = clocks.find(node);\n        return (it != clocks.end()) ? it->second : 0;\n    }\n\n    bool operator<=(const VectorClock& other) const {\n        for (const auto& [node, count] : clocks) {\n            if (count > other.getCounter(node))\n                return false;\n        }\n        return true;\n    }\n\n    bool operator>=(const VectorClock& other) const {\n        return other <= *this;\n    }\n\n    bool operator==(const VectorClock& other) const {\n        return clocks == other.clocks;\n    }\n\n    bool isConcurrent(const VectorClock& other) const {\n        return !(*this <= other) && !(other <= *this);\n    }\n\n    VectorClock merge(const VectorClock& other) const {\n        std::map<std::string, int> merged = clocks;\n        for (const auto& [node, count] : other.clocks) {\n            merged[node] = std::max(getCounter(node), count);\n        }\n        return VectorClock(merged);\n    }\n\n    std::string toString() const {\n        std::ostringstream ss;\n        ss << \"[\";\n        bool first = true;\n        for (const auto& [node, count] : clocks) {\n            if (!first) ss << \", \";\n            ss << node << \":\" << count;\n            first = false;\n        }\n        ss << \"]\";\n        return ss.str();\n    }\n};\n\ntemplate<typename T>\nstruct VersionedValue {\n    T value;\n    VectorClock clock;\n    VersionedValue(const T& v, const VectorClock& c) : value(v), clock(c) {}\n};\n\ntemplate<typename T>\nclass ECStore {\n    std::string nodeId;\n    std::map<std::string, std::shared_ptr<VersionedValue<T>>> store;\n\n    T resolveConflict(const T& local, const T& remote) {\n        // Application-specific: merge by picking larger\n        return (local > remote) ? local : remote;\n    }\n\npublic:\n    ECStore(const std::string& id) : nodeId(id) {}\n\n    void put(const std::string& key, const T& value) {\n        auto it = store.find(key);\n        VectorClock clock;\n        if (it != store.end()) {\n            clock = it->second->clock;\n        }\n        clock.increment(nodeId);\n        store[key] = std::make_shared<VersionedValue<T>>(value, clock);\n        std::cout << \"[\" << nodeId << \"] PUT \" << key << \" = \"\n                  << value << \", VC=\" << clock.toString() << \"\\n\";\n    }\n\n    void mergeRemote(const std::string& key,\n                     const std::shared_ptr<VersionedValue<T>>& remote) {\n        auto it = store.find(key);\n        if (it == store.end()) {\n            store[key] = remote;\n            return;\n        }\n        auto local = it->second;\n\n        if (remote->clock <= local->clock) {\n            // Remote is stale — ignore\n            std::cout << \"[\" << nodeId << \"] IGNORE (stale)\\n\";\n        } else if (local->clock <= remote->clock) {\n            // Remote is newer\n            store[key] = remote;\n            std::cout << \"[\" << nodeId << \"] ACCEPT (newer)\\n\";\n        } else {\n            // Conflict\n            std::cout << \"[\" << nodeId << \"] CONFLICT! Local=\"\n                      << local->value << \" Remote=\" << remote->value << \"\\n\";\n            T merged = resolveConflict(local->value, remote->value);\n            VectorClock mergedClock = local->clock.merge(remote->clock);\n            mergedClock.increment(nodeId);\n            store[key] = std::make_shared<VersionedValue<T>>(merged, mergedClock);\n            std::cout << \"[\" << nodeId << \"] MERGED=\" << merged\n                      << \" VC=\" << mergedClock.toString() << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    std::cout << \"=== Vector Clock Demo (C++) ===\\n\";\n    ECStore<int> nodeA(\"A\"), nodeB(\"B\");\n\n    nodeA.put(\"x\", 10);\n    nodeB.put(\"x\", 20);\n\n    // Simulate conflict resolution\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector clock comparison (≤, ≥, ||): O(m) where m = number of nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector clock merge: O(m)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space per versioned value: O(m + data_size)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why O(m)? Vector clocks store one counter per node. In a 1000-node cluster, each clock is 1000 entries. This is why DynamoDB uses trimmed clocks and why Riak deprecated vector clocks in favor of dotted version vectors."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1477-conflict-resolution-strategies",
      children: "14.7.7 Conflict Resolution Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used By"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-offs"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Last-Write-Wins (LWW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use wall-clock timestamp, pick latest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, DynamoDB (with LWW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clock skew can cause data loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Clocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track causal history, detect conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Riak (classic), CRDTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space growth O(n), complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRDTs (Conflict-free Replicated Data Types)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematically mergeable (no conflicts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis CRDTs, Riak 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to certain data types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read-Repair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side merge on read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read latency increases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-defined logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CouchDB, custom systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer works, fragile"
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
          children: "Clock Skew:"
        }), " LWW relies on timestamps. If Node A's clock is 5 minutes ahead, its writes always win. Solution: use logical clocks (Lamport/vector) instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phantom Updates:"
        }), " A node dies, its counter stays frozen. After recovery, the node's counter is far behind. Solution: reset or use dotted version vectors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actor Explosion:"
        }), " Vector clock space grows with each node added. Solution: causal histories, interval tree clocks (ITC), or periodic pruning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "148-sharding-horizontal-partitioning",
      children: "14.8 Sharding (Horizontal Partitioning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding"
      }), " distributes data across multiple database instances (shards) so that each shard handles a subset of the data. It is the primary mechanism for horizontal scaling in NoSQL systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1481-why-shard",
      children: "14.8.1 Why Shard?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Sharding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Sharding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data size exceeds single disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot store more data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data distributed across disks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write throughput bottleneck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single node writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel writes across shards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read throughput bottleneck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single node reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel reads across shards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single massive index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-shard smaller indexes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1482-hash-based-sharding",
      children: "14.8.2 Hash-Based Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute hash of the partition key: hash(key) mod N"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign the record to shard (hash % N)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieved by computing the same hash"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function get_shard(key, num_shards):\n    hash = hash_function(key)     // e.g., MD5, MurmurHash3\n    shard_id = hash % num_shards  // Modulo to assign shard\n    return shard_id\n\nfunction write(key, value, shards):\n    shard_id = get_shard(key, shards.length)\n    shards[shard_id].store(key, value)\n    return shard_id\n\nfunction read(key, shards):\n    shard_id = get_shard(key, shards.length)\n    return shards[shard_id].retrieve(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash Function: simple_hash(key) = sum(ASCII values of key chars)\nNumber of shards: 4\n\nKey     | ASCII Sum | simple_hash(key) % 4 | Shard\n--------|-----------|----------------------|------\n\"alice\" | 532       | 532 % 4 = 0          | Shard 0\n\"bob\"   | 303       | 303 % 4 = 3          | Shard 3\n\"carol\" | 540       | 540 % 4 = 0          | Shard 0\n\"dave\"  | 420       | 420 % 4 = 0          | Shard 0\n\"eve\"   | 304       | 304 % 4 = 0          | Shard 0\n\"frank\" | 535       | 535 % 4 = 3          | Shard 3\n\nResult: Shard 0 has 4 keys, Shard 3 has 2 keys, Shards 1-2 are empty.\nNote: Even with 50% utilization, this distribution is severely skewed!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Better Hash Function — Consistent Hashing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash ring: 0 to 2^32 - 1\nBoth nodes and keys are placed on the ring by hash\nKey assigned to nearest node clockwise\n\nWhen a node is added/removed, only ~K/N keys move\n(where K = total keys, N = total nodes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Even distribution (with good hash function, e.g., MurmurHash3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(1) lookup: compute hash, find shard, retrieve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple to implement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding/removing shards requires rehashing all keys (mod N changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data locality is destroyed (related data may go to different shards)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hot key problem: popular keys still hit one shard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistent Hashing Fix:"
      }), "\nInstead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash(key) % N"
      }), ", use a hash ring with virtual nodes. When adding shard N+1, only a fraction of keys move. Implementations: Dynamo, Cassandra, Riak."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write: O(1) hash + O(1) store = O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read: O(1) hash + O(1) retrieve = O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rebalance (add shard): O(K/N) where K = total keys, N = total shards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rebalance (consistent hashing): O(K / V) where V = virtual nodes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(K/N) for rebalancing?"
      }), " When mod N changes, every key's hash % N changes. Every key must be reassigned. Consistent hashing reduces this to O(K / V) because only keys on the affected ring segment move."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1483-range-based-sharding",
      children: "14.8.3 Range-Based Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a key range for each shard (e.g., A-M, N-Z)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign records based on where their key falls in the range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be multi-dimensional (e.g., date + region)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Range definitions\ndefine ranges = [\n    {\"min\": \"A\", \"max\": \"M\", \"shard\": 0},\n    {\"min\": \"N\", \"max\": \"Z\", \"shard\": 1}\n]\n\nfunction get_shard(key, ranges):\n    for range in ranges:\n        if range.min <= key <= range.max:\n            return range.shard\n    return -1  // No shard found\n\nfunction split_shard(shard_id, split_point):\n    old_range = get_range(shard_id)\n    new_range_left = {\"min\": old_range.min, \"max\": split_point, \"shard\": shard_id}\n    new_range_right = {\"min\": split_point + 1, \"max\": old_range.max, \"shard\": new_shard_id}\n    add new_range_left and new_range_right\n    migrate data from old shard to new_shard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Range sharding by alphabetical username — 3 shards\n\nShard 0: [A, G)   — keys starting with A through F\nShard 1: [G, M)   — keys starting with G through L\nShard 2: [M, Z]   — keys starting with M through Z\n\nKey     | First Letter | Shard | Actual Shard\n--------|-------------|-------|-------------\n\"alice\" | 'a' (97)   | [A,G) | Shard 0\n\"bob\"   | 'b' (98)   | [A,G) | Shard 0\n\"grace\" | 'g' (103)  | [G,M) | Shard 1\n\"james\" | 'j' (106)  | [G,M) | Shard 1\n\"mike\"  | 'm' (109)  | [M,Z] | Shard 2\n\"zara\"  | 'z' (122)  | [M,Z] | Shard 2\n\nLoad: Shard 0 = 2 keys, Shard 1 = 2 keys, Shard 2 = 2 keys\nIf \"aaron\", \"abby\", \"adam\"... all go to Shard 0 — uneven!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Efficient range scans (related data stored together)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to implement range queries (BETWEEN, >, <)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good for time-series (by date)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hot spots at range edges (popular prefixes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data skew (some ranges much larger than others)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range splits require data migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write: O(log R) where R = number of ranges (binary search)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read (point): O(log R)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Range scan: O(log R + K) where K = number of keys in range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split: O(K_in_range) to migrate data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log R) for writes?"
      }), " Finding the correct shard requires searching the sorted range list. Binary search gives O(log R). Hash sharding uses direct calculation O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1484-geographic-geo-sharding",
      children: "14.8.4 Geographic (Geo) Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition data by geographic region (e.g., us-east, eu-west, ap-southeast)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each region has its own database cluster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users are routed to the nearest region"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-region replication may be async"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User in London → read/write to eu-west shard (low latency)\nUser in Tokyo → read/write to ap-northeast shard (low latency)\nCross-region operations: async replication with eventual consistency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function get_shard_for_request(request):\n    geo = geoip_lookup(request.ip_address)\n    switch geo.continent:\n        case \"NA\": region = \"us-east\"\n        case \"EU\": region = \"eu-west\"\n        case \"AS\": region = \"ap-southeast\"\n        default:   region = \"us-east\"  // default\n    return shard_map[region]\n\nfunction store_user_geo(user_id, geo_shard):\n    // Store geo-location mapping in a separate lookup table or\n    // encode region in the user ID\n    user_id_with_geo = geo_shard.prefix + \":\" + user_id\n    write_to_shard(geo_shard, user_id_with_geo, user_data)\n    // Also store a global mapping for cross-region lookups\n    global_routing_table[user_id] = geo_shard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lowest latency for geo-distributed users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compliance with data sovereignty laws (GDPR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fault isolation per region"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-region queries are expensive (async replication)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global operations (unique constraints across regions) are hard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User mobility: traveling users hit different regions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Mobility:"
        }), " A user travels from US to Europe → their data should follow or be accessible globally. Solution: read-from-anywhere with async sync back to primary region."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Sovereignty:"
        }), " GDPR requires EU user data stay in EU. Solution: geo-sharding ensures data physically stays within region boundaries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disaster Recovery:"
        }), " A region goes down → traffic rerouted to another region. The backup region may have stale data. Solution: multi-region active-passive or active-active replication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1485-sharding-strategies--comparison",
      children: "14.8.5 Sharding Strategies — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Sharding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range Sharding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Geo Sharding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform (with good hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed by data distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determined by geography"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Point Lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) if geo-known"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range Query"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (scatter-gather)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor across regions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rebalancing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires rehashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range splits/moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (geo borders stable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hot Keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still hits one shard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popular ranges hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional hotspots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (cross-region)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, ordered data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global user base"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1486-sharding--advantages--disadvantages",
      children: "14.8.6 Sharding — Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel queries, smaller indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-shard queries are slow (scatter-gather)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scale by adding shards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebalancing data is expensive and complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shard failures affect only fraction of data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing a shard loses that subset of data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Sharding:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resharding:"
        }), " Adding more shards requires moving data. With ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hash % N"
        }), ", all keys move. With consistent hashing, only K/N keys move. Solution: virtual nodes + gradual migration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hot Shard:"
        }), " One shard gets disproportionate traffic. Solution: split the hot shard or replicate popular keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Shard Transactions:"
        }), " A transaction updates keys on different shards → two-phase commit (2PC) needed → latency and complexity. Solution: avoid cross-shard transactions or use XA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skewed Data Distribution:"
        }), " Range sharding naturally creates uneven shards. Solution: use hash sharding or adaptive range splitting (MongoDB chunk splits)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "149-replication",
      children: "14.9 Replication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication"
      }), " is the process of maintaining copies of data on multiple nodes. It provides fault tolerance, high availability, and reduced read latency. NoSQL systems use several replication strategies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1491-master-slave-leader-follower-replication",
      children: "14.9.1 Master-Slave (Leader-Follower) Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One node is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "master"
        }), " (leader) — handles all writes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Multiple ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "slaves"
        }), " (followers) — replicate from master, handle read traffic"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Writes go to master; reads can go to any slave"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client Write\n    |\n    v\n+--------+        +----------+\n| Master |------->| Slave 1  |  (real-time or async replication)\n| (write)|        +----------+\n+--------+        +----------+\n                  | Slave 2  |\n                  +----------+\n                      |\n                      v Client Read\n\nFlow (synchronous replication):\n1. Master receives write request\n2. Master writes locally AND sends to all slaves\n3. All slaves acknowledge\n4. Master acknowledges client\n\nFlow (asynchronous replication):\n1. Master receives write request\n2. Master writes locally, acknowledges client immediately\n3. Slave pulls update from master (or master pushes async)\n4. Slave acknowledges — client already responded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MasterNode:\n    data = {}\n    slaves = []\n\n    function write(key, value):\n        data[key] = value\n        for slave in slaves:\n            try:\n                slave.replicate(key, value)  // sync or async\n            except Timeout:\n                if sync_mode:\n                    return ERROR\n                // async mode: continue, slave will catch up\n        return SUCCESS\n\n    function read(key):\n        return data[key]\n\nclass SlaveNode:\n    data = {}\n    master = null\n\n    function replicate(key, value):\n        data[key] = value\n        return ACK\n\n    function read(key):\n        return data[key]  // may be stale in async mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table — Async Replication:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial: master.balance=100, slave1.balance=100, slave2.balance=100\n\nStep | Client Action              | Master | Slave1 | Slave2 | Notes\n-----|----------------------------|--------|--------|--------|------\n1    | Write(balance=200)         | 200    | 100    | 100    | Master responds immediately\n2    | Read(balance) from Master  | 200    | 100    | 100    | Returns 200 (current)\n3    | Read(balance) from Slave 1 | 200    | 100    | 100    | Returns 100 (STALE)\n4    | Slave 1 syncs             | 200    | 200    | 100    | Replication catches up\n5    | Read(balance) from Slave 1 | 200    | 200    | 100    | Returns 200\n6    | Slave 2 syncs             | 200    | 200    | 200    | All consistent\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Simplicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to set up and manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure (master)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All writes go through one node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read slaves may be stale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many slaves for read-heavy loads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write bottleneck at master"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Failover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promote slave to master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failover takes time and may lose data"
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
          children: "Master Failure:"
        }), " Write requests fail until a slave is promoted. With async replication, the last few writes may be lost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replication Lag:"
        }), " Minutes of lag during high load → stale reads for minutes. Solution: read-from-master for critical data, monitoring replication lag."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Split-Brain:"
        }), " A network partition causes two slaves to believe they are the new master (if promotion logic is flawed). Solution: use quorum-based leader election (Raft, Paxos) or STONITH (Shoot The Other Node In The Head)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write (sync): O(1) local + O(s) network hops (s = slaves) = O(s). Latency = max(slave_response_times)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write (async): O(1) local. Latency = local disk write time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read (from master): O(1). Strong consistency guaranteed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read (from slave): O(1). May return stale data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " MongoDB (replica sets), MySQL replication, PostgreSQL streaming replication, Redis Sentinel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1492-multi-master-replication",
      children: "14.9.2 Multi-Master Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple nodes can accept writes simultaneously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each node propagates writes to other masters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflict resolution is required for concurrent writes to the same key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client 1 Write ──>+--------+\n                  | Master |<--+\nClient 2 Write ──>|    A   |   |\n                  +--------+   |\n                       |       |\n                  +--------+   |\n                  | Master |---+\n                  |    B   |\n                  +--------+\n                       |\n                  +--------+\n                  | Master |\n                  |    C   |\n                  +--------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conflict Resolution Approaches:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Last-Write-Wins (LWW):"
        }), " Most recent timestamp wins (Cassandra)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application-level merge:"
        }), " CRDTs or custom merge functions (Riak)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version vectors:"
        }), " Track causality and flag conflicts (Dynamo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict-free Replicated Data Types (CRDTs):"
        }), " Mathematically mergeable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MultiMasterNode:\n    data = {}\n    peers = []\n\n    function write(key, value):\n        current = data[key].version if data[key] else null\n        new_version = increment_version(current)\n        data[key] = ValueWithVersion(value, new_version)\n        for peer in peers:\n            async propagate(peer, key, value, new_version)\n        return SUCCESS\n\n    function receive_replication(key, value, version):\n        current = data[key]\n        if current == null or version > current.version:\n            data[key] = ValueWithVersion(value, version)\n            return ACCEPT\n        elif version == current.version:\n            // Same version — ignore\n            return IGNORE\n        else:\n            // Conflict — need resolution\n            resolved = resolve_conflict(current.value, value)\n            data[key] = ValueWithVersion(resolved, max(version, current.version))\n            return RESOLVED\n\n    function read(key):\n        return data[key]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table — Write Conflict:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial: key \"counter\": Master A=5, Master B=5\n\nStep | Time | Action                        | Master A   | Master B\n-----|------|-------------------------------|------------|----------\n1    | T1   | Write(counter=10) to A        | counter=10 | counter=5\n2    | T2   | Write(counter=20) to B        | counter=10 | counter=20\n3    | T3   | A sends update to B (counter=10, T1) | —    | Conflict!\n     |      | B has counter=20 (T2 > T1)    | —          | LWW: 20 wins\n4    | T4   | B sends update to A (counter=20, T2) | —    | —\n5    | T5   | A receives B's update          | counter=20 | counter=20\n     |      | (T2 > T1, accept)             |            |\n6    | T6   | All consistent                 | counter=20 | counter=20\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single point of failure for writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conflict resolution complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency writes from any node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conflicts may cause data loss (LWW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write throughput scales with nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network bandwidth for propagation"
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
          children: "Conflict Domino:"
        }), " One unresolved conflict cascades to replicas. Solution: idempotent merge functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Causal Reversal:"
        }), " Write A happened before Write B, but B propagates faster. Solution: vector clocks track causality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Storms:"
        }), " Every node writes to the same key simultaneously. Solution: LWW with timestamp ordering or assign a \"preferred\" master per key."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write: O(1) local + O(p) async propagation (p = peers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflict detection: O(m) for vector clocks (m = nodes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflict resolution: varies by approach (O(1) for LWW, O(k) for application merge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convergence: at least 1 gossip round to propagate latest value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Used by:"
      }), " Cassandra (all nodes are equal), DynamoDB (multi-region), CouchDB (multi-master sync), Riak."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1493-peer-to-peer-leaderless-replication",
      children: "14.9.3 Peer-to-Peer (Leaderless) Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All nodes are equal — there is no master"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Writes go to all replicas (or a quorum)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read repair and anti-entropy ensure convergence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used by Dynamo, Cassandra (all nodes are coordinators), Riak."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quorum-based Read/Write:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write to W nodes out of N total replicas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read from R nodes out of N total replicas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Condition for strong consistency: W + R > N"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typical configuration: N=3, W=2, R=2 (quorum)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Write Quorum (W=2, N=3):\nClient sends write to all 3 replicas\nWait for 2 acknowledgments → success\nThird replica may be down or slow → client doesn't wait\n\nRead Quorum (R=2, N=3):\nClient sends read to all 3 replicas\nWait for 2 responses → pick latest version\nCompare versions across response — if stale, trigger read repair\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function write(key, value, W=2):\n    responses = []\n    for each replica in replicas_for_key(key):\n        responses.append(replica.write_async(key, value))\n    count_acks = wait_for_N_responses(responses, W)\n    if count_acks >= W:\n        return SUCCESS\n    else:\n        return FAILURE_INSUFFICIENT_REPLICAS\n\nfunction read(key, R=2):\n    responses = []\n    for each replica in replicas_for_key(key):\n        responses.append(replica.read_async(key))\n    count = wait_for_N_responses(responses, R)\n    if count < R:\n        return ERROR\n    # Find the version with the latest timestamp\n    latest = max(responses, key=by_timestamp)\n    # Read repair: if any replica returned stale data, update it\n    for response in responses:\n        if response.timestamp < latest.timestamp:\n            async repair(response.node, key, latest.value)\n    return latest.value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1494-replication-types--full-comparison",
      children: "14.9.4 Replication Types — Full Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Master-Slave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multi-Master"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Peer-to-Peer (Quorum)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write Node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any node (coordinator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (many slaves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (any master)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (any node)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write Throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded by master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong if read from master"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conflict resolution needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable via W, R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict Handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (single write path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (LWW, CRDT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read repair, hinted handoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Failover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promote slave (manual/auto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (other masters continue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (quorum still works)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL replication, Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CouchDB, multi-region DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, Riak, Dynamo (single region)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1495-replication--edge-cases-and-trade-offs",
      children: "14.9.5 Replication — Edge Cases and Trade-offs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Replication Lag:"
      }), "\nIn async replication, the slave may lag behind the master by seconds or minutes. This causes stale reads. Fix: monitor lag (seconds_Behind_Master in MySQL), use synchronous replication for critical data, or read from master for consistency-sensitive operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Split-Brain:"
      }), "\nTwo nodes both believe they are the master. This happens during a network partition if both sides of the partition independently elect a master. Solution: use quorum-based leader election (Raft requires majority), fencing tokens, or STONITH."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Conflict Amplification:"
      }), "\nIn multi-master with LWW, concurrent writes to the same key cause one write to silently win. If both writes are valid (e.g., two users editing different fields of a document), data is lost. Solution: use CRDTs or document-level merge instead of key-level LWW."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Hinted Handoff:"
      }), "\nWhen a replica is temporarily unreachable, the coordinator stores a hint (the write). When the replica comes back, the hint is replayed. This ensures eventual consistency without blocking writes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Read Repair:"
      }), "\nDuring a read, if the coordinator detects that some replicas have stale data, it updates them in the background. Over time, this converges all replicas. Trade-off: read latency increases because the coordinator waits for the slowest response to compare versions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1410-simple-key-value-store--complete-implementations",
      children: "14.10 Simple Key-Value Store — Complete Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14101-python-implementation-in-memory-with-replication-ttl-and-persistence",
      children: "14.10.1 Python Implementation (In-Memory, with Replication, TTL, and Persistence)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nIn-memory key-value store with:\n- GET, SET, DELETE, TTL, EXISTS\n- Multi-node replication (simulated)\n- Periodic snapshot persistence\n- LRU eviction\n\"\"\"\nimport json\nimport os\nimport threading\nimport time\nfrom collections import OrderedDict\nfrom typing import Optional, Any, Dict\n\nclass KeyValueEntry:\n    def __init__(self, value: Any, ttl: Optional[int] = None):\n        self.value = value\n        self.created_at = time.time()\n        self.ttl = ttl\n\n    def is_expired(self) -> bool:\n        if self.ttl is None:\n            return False\n        return (time.time() - self.created_at) > self.ttl\n\n    def __repr__(self) -> str:\n        return f\"KVEntry(value={self.value}, ttl={self.ttl})\"\n\n\nclass SimpleKVStore:\n    \"\"\"In-memory key-value store with TTL, LRU eviction, and persistence.\"\"\"\n\n    def __init__(self, node_id: str = \"node0\", max_size: int = 1000,\n                 persist_path: Optional[str] = None):\n        self.node_id = node_id\n        self.max_size = max_size\n        self.persist_path = persist_path\n        self.data: Dict[str, KeyValueEntry] = OrderedDict()\n        self.lock = threading.Lock()\n        self.replicas: list['SimpleKVStore'] = []\n        self.replication_enabled = True\n\n        if persist_path:\n            self._load_snapshot()\n\n        # Background expiry thread\n        self._stop_expiry = False\n        self._expiry_thread = threading.Thread(target=self._evict_expired, daemon=True)\n        self._expiry_thread.start()\n\n    # --- Core Operations ---\n\n    def set(self, key: str, value: Any, ttl: Optional[int] = None) -> bool:\n        \"\"\"\n        Store a key-value pair.\n        Time complexity: O(1) average, O(n) worst (if eviction needed)\n        Why O(1) average? Dictionary insertion is amortized O(1).\n        Eviction of oldest entry is O(1) because OrderedDict maintains insertion order.\n        \"\"\"\n        with self.lock:\n            self._evict_if_needed()\n            self.data[key] = KeyValueEntry(value, ttl)\n            self.data.move_to_end(key)\n            if self.replication_enabled:\n                self._replicate(\"SET\", key, value, ttl)\n        return True\n\n    def get(self, key: str) -> Optional[Any]:\n        \"\"\"\n        Retrieve a value by key.\n        Time complexity: O(1) amortized (dict lookup).\n        Space complexity: O(1) per key.\n        Why O(1)? Hash table lookup with good hash distribution.\n        \"\"\"\n        with self.lock:\n            entry = self.data.get(key)\n            if entry is None:\n                return None\n            if entry.is_expired():\n                del self.data[key]\n                return None\n            # Move to end for LRU ordering (most recently used)\n            self.data.move_to_end(key)\n            return entry.value\n\n    def delete(self, key: str) -> bool:\n        \"\"\"\n        Delete a key-value pair.\n        Time complexity: O(1) average.\n        Returns: True if key existed, False otherwise.\n        \"\"\"\n        with self.lock:\n            if key in self.data:\n                del self.data[key]\n                if self.replication_enabled:\n                    self._replicate(\"DELETE\", key, None, None)\n                return True\n            return False\n\n    def exists(self, key: str) -> bool:\n        \"\"\"\n        Check if a key exists and is not expired.\n        Time complexity: O(1).\n        \"\"\"\n        with self.lock:\n            entry = self.data.get(key)\n            if entry is None:\n                return False\n            if entry.is_expired():\n                del self.data[key]\n                return False\n            return True\n\n    def ttl(self, key: str) -> Optional[int]:\n        \"\"\"\n        Get remaining TTL in seconds for a key.\n        Returns -2 if key doesn't exist, -1 if no TTL, or remaining seconds.\n        \"\"\"\n        with self.lock:\n            entry = self.data.get(key)\n            if entry is None:\n                return -2\n            if entry.ttl is None:\n                return -1\n            remaining = entry.ttl - (time.time() - entry.created_at)\n            if remaining <= 0:\n                del self.data[key]\n                return -2\n            return int(remaining)\n\n    def size(self) -> int:\n        \"\"\"Number of keys currently stored.\"\"\"\n        with self.lock:\n            return len(self.data)\n\n    def flush(self) -> None:\n        \"\"\"Clear all data.\"\"\"\n        with self.lock:\n            self.data.clear()\n\n    # --- Replication ---\n\n    def add_replica(self, replica: 'SimpleKVStore') -> None:\n        \"\"\"Add a replica node for replication.\"\"\"\n        self.replicas.append(replica)\n\n    def _replicate(self, op: str, key: str, value: Any, ttl: Optional[int]) -> None:\n        \"\"\"Replicate operation to all replica nodes.\"\"\"\n        for replica in self.replicas:\n            if op == \"SET\":\n                replica.set(key, value, ttl)\n            elif op == \"DELETE\":\n                replica.delete(key)\n\n    # --- Persistence ---\n\n    def snapshot(self) -> None:\n        \"\"\"Save in-memory state to disk as JSON.\"\"\"\n        if not self.persist_path:\n            return\n        with self.lock:\n            serializable = {}\n            for key, entry in self.data.items():\n                serializable[key] = {\n                    \"value\": entry.value,\n                    \"created_at\": entry.created_at,\n                    \"ttl\": entry.ttl\n                }\n            with open(self.persist_path, 'w', encoding='utf-8') as f:\n                json.dump(serializable, f)\n            print(f\"[{self.node_id}] Snapshot saved ({len(self.data)} keys)\")\n\n    def _load_snapshot(self) -> None:\n        \"\"\"Load state from disk on startup.\"\"\"\n        if not self.persist_path or not os.path.exists(self.persist_path):\n            return\n        try:\n            with open(self.persist_path, 'r', encoding='utf-8') as f:\n                serialized = json.load(f)\n            for key, entry_data in serialized.items():\n                entry = KeyValueEntry(entry_data[\"value\"], entry_data.get(\"ttl\"))\n                entry.created_at = entry_data[\"created_at\"]\n                if not entry.is_expired():\n                    self.data[key] = entry\n            print(f\"[{self.node_id}] Loaded {len(self.data)} keys from snapshot\")\n        except (json.JSONDecodeError, IOError):\n            print(f\"[{self.node_id}] Snapshot corrupt, starting fresh\")\n\n    # --- Eviction ---\n\n    def _evict_if_needed(self) -> None:\n        \"\"\"Evict oldest entries when at capacity (LRU policy).\"\"\"\n        while len(self.data) >= self.max_size:\n            oldest_key, _ = self.data.popitem(last=False)\n            print(f\"[{self.node_id}] Evicted oldest key: {oldest_key}\")\n\n    def _evict_expired(self) -> None:\n        \"\"\"Background thread to periodically purge expired keys.\"\"\"\n        while not self._stop_expiry:\n            time.sleep(1)\n            with self.lock:\n                expired_keys = [\n                    k for k, v in self.data.items() if v.is_expired()\n                ]\n                for k in expired_keys:\n                    del self.data[k]\n                if expired_keys:\n                    print(f\"[{self.node_id}] Expired {len(expired_keys)} keys\")\n\n    def shutdown(self) -> None:\n        \"\"\"Graceful shutdown: stop threads and save snapshot.\"\"\"\n        self._stop_expiry = True\n        self.snapshot()\n\n\n# --- Demo ---\nif __name__ == \"__main__\":\n    print(\"=\" * 60)\n    print(\"SIMPLIFIED KEY-VALUE STORE DEMO\")\n    print(\"=\" * 60)\n\n    # Create primary and replica\n    primary = SimpleKVStore(\"primary\", persist_path=\"kv_snapshot.json\")\n    replica = SimpleKVStore(\"replica\")\n    primary.add_replica(replica)\n    primary.replication_enabled = True\n\n    print(\"\\n1. SET operations\")\n    primary.set(\"name\", \"Alice Chen\")\n    primary.set(\"age\", 28)\n    primary.set(\"score\", 95.5)\n    primary.set(\"temp_key\", \"will expire\", ttl=2)\n    print(f\"   Primary size: {primary.size()}\")\n    print(f\"   Replica size: {replica.size()}\")\n\n    print(\"\\n2. GET operations\")\n    print(f\"   GET name: {primary.get('name')}\")\n    print(f\"   GET age: {primary.get('age')}\")\n    print(f\"   GET missing: {primary.get('missing_key')}\")\n\n    print(\"\\n3. EXISTS and DELETE\")\n    print(f\"   EXISTS name: {primary.exists('name')}\")\n    primary.delete(\"name\")\n    print(f\"   EXISTS name after delete: {primary.exists('name')}\")\n\n    print(\"\\n4. TTL expiration\")\n    print(f\"   GET temp_key (before expiry): {primary.get('temp_key')}\")\n    time.sleep(3)\n    print(f\"   GET temp_key (after 3s): {primary.get('temp_key')}\")\n\n    print(\"\\n5. Replication check\")\n    print(f\"   Replica GET age: {replica.get('age')}\")\n    print(f\"   Replica GET name (deleted): {replica.get('name')}\")\n\n    primary.shutdown()\n\n    # Cleanup snapshot\n    if os.path.exists(\"kv_snapshot.json\"):\n        os.remove(\"kv_snapshot.json\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis Summary:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(v) per key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table insertion; value size v stored in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table lookup; no extra allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table deletion; free entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table membership check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check expiry field; timer per entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eviction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OrderedDict pop from head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize all k entries to disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) fan-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of replicas"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14102-c-implementation-minimal-in-memory-kv-store",
      children: "14.10.2 C++ Implementation (Minimal In-Memory KV Store)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unordered_map>\n#include <string>\n#include <optional>\n#include <chrono>\n#include <memory>\n\ntemplate<typename K, typename V>\nclass KVEntry {\npublic:\n    V value;\n    std::chrono::steady_clock::time_point created_at;\n    std::optional<int> ttl_seconds;\n\n    KVEntry(const V& val, std::optional<int> ttl = std::nullopt)\n        : value(val), created_at(std::chrono::steady_clock::now()),\n          ttl_seconds(ttl) {}\n\n    bool isExpired() const {\n        if (!ttl_seconds.has_value()) return false;\n        auto now = std::chrono::steady_clock::now();\n        auto elapsed = std::chrono::duration_cast<std::chrono::seconds>(\n            now - created_at).count();\n        return elapsed >= ttl_seconds.value();\n    }\n};\n\ntemplate<typename K, typename V>\nclass SimpleKV {\n    std::unordered_map<K, std::unique_ptr<KVEntry<K, V>>> store;\n    size_t max_size;\n\npublic:\n    SimpleKV(size_t max = 10000) : max_size(max) {}\n\n    void set(const K& key, const V& value, std::optional<int> ttl = std::nullopt) {\n        if (store.size() >= max_size) {\n            // Simple eviction: clear everything (for demo purposes)\n            std::cout << \"[WARN] Store full, clearing...\\n\";\n            store.clear();\n        }\n        store[key] = std::make_unique<KVEntry<K, V>>(value, ttl);\n    }\n\n    std::optional<V> get(const K& key) {\n        auto it = store.find(key);\n        if (it == store.end()) return std::nullopt;\n        if (it->second->isExpired()) {\n            store.erase(it);\n            return std::nullopt;\n        }\n        return it->second->value;\n    }\n\n    bool remove(const K& key) {\n        return store.erase(key) > 0;\n    }\n\n    bool exists(const K& key) {\n        auto it = store.find(key);\n        if (it == store.end()) return false;\n        if (it->second->isExpired()) {\n            store.erase(it);\n            return false;\n        }\n        return true;\n    }\n\n    size_t size() const { return store.size(); }\n\n    void clear() { store.clear(); }\n};\n\nint main() {\n    SimpleKV<std::string, std::string> kv;\n\n    kv.set(\"name\", \"Alice Chen\");\n    kv.set(\"role\", \"Engineer\");\n\n    auto name = kv.get(\"name\");\n    if (name) std::cout << \"GET name: \" << *name << \"\\n\";\n\n    std::cout << \"EXISTS role: \" << kv.exists(\"role\") << \"\\n\";\n    kv.remove(\"role\");\n    std::cout << \"EXISTS role after delete: \" << kv.exists(\"role\") << \"\\n\";\n\n    kv.set(\"temp\", \"expires soon\", 2);\n    std::cout << \"GET temp (before): \" << *kv.get(\"temp\") << \"\\n\";\n    std::this_thread::sleep_for(std::chrono::seconds(3));\n    auto temp = kv.get(\"temp\");\n    std::cout << \"GET temp (after 3s): \" << (temp ? *temp : \"EXPIRED\") << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14103-complexity-analysis--why-these-complexities",
      children: "14.10.3 Complexity Analysis — Why These Complexities?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash Table Lookup is O(1) Average, O(n) Worst Case:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average case: a good hash function distributes keys evenly across buckets. Each bucket has O(1) entries on average."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worst case: all keys hash to the same bucket (hash collision attack). Degrades to O(n) per operation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is why Redis uses hash tables, but production systems use siphash or murmurhash3 (DOS-resistant)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Not O(log n) Like B-Trees?"
      }), "\nHash tables sacrifice ordering for speed. B-Trees (used by SQL databases) maintain sorted order for range queries but have O(log n) lookup. Key-value stores don't need range queries on keys — they look up by exact key only. If you need range queries, use a document store or column-family store."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1411-interview-corner",
      children: "14.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-cap-theorem-can-you-really-only-choose-two",
      children: "Q1: Explain the CAP theorem. Can you really only choose two?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The CAP theorem says during a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "network partition"
      }), ", you must choose between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Availability"
      }), ". Outside of partitions, you can have both. Most production systems are P (partition tolerance is unavoidable) and choose between CP and AP during failures."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " \"What does DynamoDB choose?\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " AP by default (eventual consistency), but offers strongly consistent reads as an option (quorum-based, CP-like with higher latency)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " \"How does MongoDB handle CAP?\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MongoDB replica sets default to CP (primary handles writes, reads from primary are consistent). With read preference \"secondary,\" reads become eventually consistent (AP-like)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-when-would-you-choose-nosql-over-sql",
      children: "Q2: When would you choose NoSQL over SQL?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Choose NoSQL when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your data is semi-structured or unstructured (JSON, documents)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your schema changes frequently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need horizontal scalability for write-heavy workloads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need high availability with automatic failover"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your data access pattern is simple key-based lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You're dealing with time-series or IoT data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your data is inherently a graph (social networks, recommendations)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Twitter uses MySQL for tweets (structured), but Redis for feed caching and FlockDB (graph) for follower relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-choose-a-shard-key",
      children: "Q3: How do you choose a shard key?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A good shard key should:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High cardinality:"
        }), " Many distinct values (not boolean, not date-hour alone)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Even distribution:"
        }), " No hot shard (avoid monotonically increasing keys)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Match query patterns:"
        }), " Most queries should hit a single shard"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Shard Keys:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Good: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "user_id"
        }), " (high cardinality, even distribution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bad: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), " (active/inactive — only 2 values, max 2 shards)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bad: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), " without hashing (all today's data goes to one shard)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cassandra Practice:"
      }), " Primary key = (partition key, clustering columns). Partition key determines shard. Choose partition key to avoid large partitions and hot spots."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-the-gossip-protocol",
      children: "Q4: Explain the Gossip Protocol."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Gossip protocol (epidemic protocol) is used by Cassandra, Dynamo, and Riak for membership discovery and state dissemination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Periodically (e.g., every second), each node:\n1. Picks a random peer\n2. Exchanges its view of the cluster state\n3. Receives peer's view\n4. Merges: if peer knows about a node you don't, add it\n5. Convergence: after O(log N) rounds, every node knows everything\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decentralized (no master)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fault-tolerant (survives node failures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convergent (O(log N) rounds to full knowledge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probabilistic (small chance of temporary inconsistency)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-synchronous-and-asynchronous-replication",
      children: "Q5: What is the difference between synchronous and asynchronous replication?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synchronous:"
        }), " The write is acknowledged only after all replicas confirm. Guarantees no data loss but increases latency. Used for strong consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous:"
        }), " The write is acknowledged immediately. Replicas sync in the background. Lower latency but risk of data loss if the master fails before replication completes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-cassandra-handle-consistency",
      children: "Q6: How does Cassandra handle consistency?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Cassandra provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tunable consistency"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ONE"
        }), ": Respond from nearest replica (fastest, least consistent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "QUORUM"
        }), ": Respond after majority of replicas respond (balanced)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ALL"
        }), ": Respond only after all replicas respond (slowest, most consistent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "LOCAL_QUORUM"
        }), ": Quorum within datacenter (for multi-DC deployments)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      }), " For strong consistency: W + R > RF (replication factor). Typically W=R=QUORUM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-mongodbs-replication-mechanism",
      children: "Q7: What is MongoDB's replication mechanism?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MongoDB uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replica Sets"
      }), " — one primary (handles writes) with multiple secondaries (replicate oplog). Automatic failover: if primary fails, secondaries elect a new primary via Raft consensus."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-compare-eventual-consistency-with-strong-consistency-for-a-shopping-cart",
      children: "Q8: Compare eventual consistency with strong consistency for a shopping cart."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strong consistency:"
        }), " User adds item → immediate save. Even if the user refreshes rapidly, the item appears. Required for inventory (cannot oversell)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eventual consistency:"
        }), " User adds item → might not appear immediately on all nodes. If the user refreshes and hits a lagging node, the item might temporarily disappear. Acceptable for \"saved items\" but not for checkout/payment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-split-brain-problem",
      children: "Q9: What is the \"split-brain\" problem?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Split-brain occurs when a network partition causes multiple nodes to believe they are the master/leader. Both accept writes to the same key, creating divergent datasets. Resolution: quorum-based leader election (Raft), fencing tokens, or STONITH."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-explain-mongodbs-aggregation-pipeline",
      children: "Q10: Explain MongoDB's Aggregation Pipeline."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A pipeline of stages that transforms documents:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "db.orders.aggregate([\n    { $match: { status: \"completed\" } },\n    { $group: { _id: \"$customer_id\", total: { $sum: \"$amount\" }, count: { $sum: 1 } } },\n    { $sort: { total: -1 } },\n    { $limit: 10 }\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each stage feeds its output to the next stage. Similar to Unix pipes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1412-applications-in-real-systems",
      children: "14.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14121-amazon-dynamodb",
      children: "14.12.1 Amazon DynamoDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Key-Value + Document (multi-model)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      }), " Eventual (default), Strongly Consistent Reads (optional)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication:"
      }), " Multi-master across Availability Zones, global tables for multi-region\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding:"
      }), " Consistent hashing (internal Dynamo paper architecture)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless — no provisioning, auto-scales"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-digit millisecond latency at any scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DAX (DynamoDB Accelerator): in-memory cache for microsecond reads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transactions: ACID across multiple items (since 2018)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Streams: capture table changes for event-driven architectures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Shopping cart, session store, metadata store, gaming leaderboards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal Architecture (from Dynamo paper):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partitioning:"
        }), " Consistent hashing with virtual nodes (100s per physical node)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replication:"
        }), " N=3 replicas, W=2 for writes, R=2 for reads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict Resolution:"
        }), " Vector clocks + last-write-wins (configurable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Membership:"
        }), " Gossip protocol for node discovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hinted Handoff:"
        }), " Writes buffered for temporarily unreachable nodes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14122-apache-cassandra",
      children: "14.12.2 Apache Cassandra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Column-Family (wide-column)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      }), " Tunable (ONE, QUORUM, ALL, LOCAL_QUORUM, EACH_QUORUM)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication:"
      }), " Peer-to-peer (all nodes equal)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding:"
      }), " Consistent hashing with virtual nodes (vnodes)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear write scalability — add nodes for more throughput"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No single point of failure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CQL (Cassandra Query Language) — SQL-like"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lightweight transactions (compare-and-set)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compaction strategies: SizeTiered, Leveled, TimeWindow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Time-series data, IoT sensor data, messaging systems, recommendation engines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Path:"
        }), " CommitLog → MemTable → SSTable (immutable, periodically merged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read Path:"
        }), " MemTable + Row Cache + Bloom Filter → SSTable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gossip:"
        }), " Node discovery and state propagation (every second)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snitch:"
        }), " Determines relative host proximity (network topology awareness)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hinted Handoff:"
        }), " Stores writes for downed nodes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cassandra vs DynamoDB:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DynamoDB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-hosted or DataStax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless (AWS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-query tunable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-level or per-request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native API, PartiQL, SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary Indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secondary Indexes (limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global/Local Secondary Indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per read/write unit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14123-mongodb",
      children: "14.12.3 MongoDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Document\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      }), " Strong (primary reads) with tunable read concern\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication:"
      }), " Replica Sets (single primary + multiple secondaries)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding:"
      }), " Range-based with chunk splitting (config servers manage metadata)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rich query language (MQL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secondary indexes on any field"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregation pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Geospatial queries (2dsphere)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change streams (real-time data changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atlas (managed cloud service)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Content management, catalogs, real-time analytics, mobile apps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mongos (router) → config servers (metadata)\n                → shard 1 (replica set)\n                → shard 2 (replica set)\n                → shard N (replica set)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14124-neo4j",
      children: "14.12.4 Neo4j"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Graph\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      }), " Strong (ACID-compliant)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication:"
      }), " Master-slave (Causal Clustering in 4.x+)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query Language:"
      }), " Cypher"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native graph storage (not relational with JOINs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Property graph model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACID transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graph algorithms (PageRank, community detection, shortest path)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cypher: pattern-matching query language"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Fraud detection (circular patterns), social networks, knowledge graphs, recommendation engines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance Note:"
      }), " Neo4j's fixed-width record storage ensures O(1) traversal per hop, independent of graph size. A query like \"friend-of-friend\" takes ~2ms on a graph of any size (constant-time pointer chasing) vs minutes with SQL JOINs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14125-redis",
      children: "14.12.5 Redis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Key-Value (with data structure support)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      }), " Strong per node (single-threaded)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication:"
      }), " Master-slave (async replication by default)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Persistence:"
      }), " RDB (snapshots), AOF (write-ahead log), or hybrid"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data structures: strings, lists, sets, sorted sets, hashes, bitmaps, hyperloglogs, streams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In-memory operations (sub-millisecond latency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lua scripting (server-side logic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pub/Sub messaging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis Cluster for sharding and HA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis Stack: RedisJSON, RedisSearch, RedisTimeSeries, RedisGraph"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Caching, session storage, rate limiting, message queues, real-time leaderboards, distributed locks (Redlock)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis vs Memcached:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memcached"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich (strings, lists, sets, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strings only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB/AOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (volatile)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master-slave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (client-side sharding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lua Scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching + features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple caching only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14126-system-selection-decision-matrix",
      children: "14.12.6 System Selection Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Runner-up"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memcached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis / DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memcached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product Catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time-Series / IoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InfluxDB (time-series DB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neo4j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArangoDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neo4j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra (pre-computed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neo4j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB (graph lookups)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-Text Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB Atlas Search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event Log / Audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB (capped collections)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shopping Cart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming Leaderboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Couchbase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geo-Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB Global Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra multi-DC"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NoSQL does not mean \"no SQL\""
        }), " — many NoSQL databases support SQL-like query languages (MongoDB Aggregation, Cassandra CQL, Neo4j Cypher). The \"NoSQL\" label is historical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand your access patterns first"
        }), " — document DBs for complex objects, key-value for caching/sessions, column-family for time-series/analytics, graph for connected data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The CAP theorem is not an excuse to ignore consistency"
        }), " — most production systems use tunable consistency (quorum reads/writes) rather than extreme AP or CP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polyglot persistence is powerful but expensive"
        }), " — each additional database type adds operational complexity. Use one primary store and augment only where the model mismatch is critical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema-less does not mean without schema"
        }), " — the schema moves to the application layer (ORM, validation). You must still design it carefully — it is just not enforced by the database."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shard key choice is the most important design decision"
        }), " — a bad shard key causes hot spots, uneven data distribution, and performance degradation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency level has a direct cost"
        }), " — in Cassandra, LOCAL_ONE is 2-3x faster than QUORUM, but risks stale reads. Measure your tolerance for staleness before configuring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replication factor is not sharding"
        }), " — RF=3 means 3 copies of every row; sharding means each node stores a subset of rows. Replication provides redundancy; sharding provides scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.1:"
        }), " NoSQL databases emerged to address scalability, schema flexibility, and data model diversity that relational databases struggle with."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.2:"
        }), " The CAP theorem states that in a distributed system, you can only guarantee two of Consistency, Availability, and Partition Tolerance during a network partition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.3:"
        }), " BASE (Basically Available, Soft state, Eventual consistency) is the relaxed consistency model that powers most NoSQL systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.4:"
        }), " Four major NoSQL types — Document (MongoDB), Key-Value (Redis), Column-Family (Cassandra), and Graph (Neo4j) — each optimized for different workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.5:"
        }), " Polyglot persistence uses multiple database types within a single application, choosing the best model for each component."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.6:"
        }), " Consistency models form a spectrum from eventual (weakest) to linearizable (strongest), with causal, read-your-writes, session, and monotonic in between."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.7:"
        }), " Vector clocks track causal history and detect concurrent updates, enabling conflict resolution in eventually consistent systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.8:"
        }), " Sharding distributes data across nodes using hash, range, or geographic strategies; shard key choice is critical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.9:"
        }), " Replication provides fault tolerance through master-slave, multi-master, or peer-to-peer architectures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "14.10:"
        }), " NoSQL databases power real-world systems like DynamoDB, Cassandra, MongoDB, Neo4j, and Redis — each designed for specific workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relational (SQL)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Document (MongoDB)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key-Value (Redis)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Column-Family (Cassandra)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph (Neo4j)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables, rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON/BSON documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key → Value pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows with dynamic columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes and edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigid, enforced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible (schema-less)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-based only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MQL, Aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cypher"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex joins, consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex objects, varied structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, sessions, counters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, write-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social graphs, recommendations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (primary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (sharding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster (sharding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (no single point)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (clustering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (strong/eventual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong per node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (quorum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master-slave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master-slave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer-to-peer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Causal clustering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ERP, banking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMS, catalogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IoT, time-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud, social graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "NoSQL Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Strength"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB, CouchDB, Firebase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema flexibility, complex objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key-Value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis, DynamoDB, Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed, simplicity, caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Column-Family"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, HBase, ScyllaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write scalability, time-series"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neo4j, Amazon Neptune, ArangoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship traversal, connected data"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CAP Combination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CP (Consistency + Partition Tolerance)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HBase, MongoDB (with w=majority)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower writes during partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AP (Availability + Partition Tolerance)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency; may serve stale data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CA (Consistency + Availability)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-node PostgreSQL, MySQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No partition tolerance; not distributed"
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
            children: "NoSQL Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User session store"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-Value (Redis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast lookups, TTL-based expiry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product catalog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document (MongoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Products have varying attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social feed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-Family (Cassandra)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High write throughput for posts/likes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation engine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph (Neo4j)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-item relationships, \"people also bought\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time-series metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-Family / TSDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append-heavy, range-scan queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full-text search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch (separate category)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index ranking, fuzzy matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event log / audit trail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-Family / Append-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable writes, ordered by timestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching layer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-Value (Redis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-millisecond latency, TTL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1412-typescript-cap-theorem--consistency-model-simulator",
      children: "14.12 TypeScript CAP Theorem & Consistency Model Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code below simulates different consistency models (eventual, strong, causal) and demonstrates CAP trade-offs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// CAP Theorem & Consistency Simulator — TypeScript\n// ============================================================\n\nenum ConsistencyMode { EVENTUAL, STRONG, CAUSAL }\n\ninterface WriteOp {\n  key: string;\n  value: string;\n  timestamp: number;\n  nodeId: number;\n}\n\nclass DBNode {\n  id: number;\n  data = new Map<string, WriteOp>();\n  peers: DBNode[] = [];\n  pendingWrites: WriteOp[] = [];\n  latencyMs: number;\n\n  constructor(id: number, latencyMs = 10) {\n    this.id = id;\n    this.latencyMs = latencyMs;\n  }\n\n  write(key: string, value: string, timestamp: number, mode: ConsistencyMode): void {\n    const op: WriteOp = { key, value, timestamp, nodeId: this.id };\n    this.data.set(key, op);\n    // Propagate to peers\n    for (const peer of this.peers) {\n      if (peer.id !== this.id) {\n        if (mode === ConsistencyMode.STRONG) {\n          // Synchronous replication — wait for all\n          peer.receiveWrite(op);\n        } else {\n          // Asynchronous replication — queue\n          setTimeout(() => peer.receiveWrite(op), this.latencyMs);\n        }\n      }\n    }\n  }\n\n  receiveWrite(op: WriteOp): void {\n    const existing = this.data.get(op.key);\n    if (!existing || op.timestamp > existing.timestamp) {\n      this.data.set(op.key, op);\n    }\n  }\n\n  read(key: string, mode: ConsistencyMode): string | undefined {\n    if (mode === ConsistencyMode.STRONG) {\n      // Read from majority/leader (simplified: self only for strong)\n      const val = this.data.get(key);\n      return val?.value;\n    }\n    // Eventual: may return stale data\n    const val = this.data.get(key);\n    return val?.value;\n  }\n\n  simulateNetworkPartition(disconnectedPeers: number[]): void {\n    this.peers = this.peers.filter(p => !disconnectedPeers.includes(p.id));\n  }\n}\n\n// Demo\nconsole.log('=== CAP Theorem Simulator ===\\n');\nconst nodes = [new DBNode(1, 5), new DBNode(2, 5), new DBNode(3, 5)];\nnodes.forEach(n => n.peers = nodes);\n\nconst mode = ConsistencyMode.EVENTUAL;\nconsole.log('Mode: ' + ConsistencyMode[mode]);\nconsole.log('');\n\n// Normal operation\nconsole.log('--- Normal Operation ---');\nnodes[0].write('user:1', 'Alice', Date.now(), mode);\nconsole.log('Node 1 reads: ' + nodes[0].read('user:1', mode));\nconsole.log('Node 2 reads immediately (may be stale): ' + nodes[2].read('user:1', mode));\n\n// Network partition\nconsole.log('\\n--- Network Partition ---');\nnodes[0].simulateNetworkPartition([2, 3]);\nnodes[1].simulateNetworkPartition([1, 3]);\n\n// Both sides can still write (Availability)\nnodes[0].write('user:1', 'Alice-v2', Date.now() + 1, mode);\nnodes[1].write('user:1', 'Alice-v3', Date.now() + 2, mode);\nconsole.log('Node 1 value: ' + nodes[0].read('user:1', mode));\nconsole.log('Node 2 value: ' + nodes[1].read('user:1', mode));\nconsole.log('CONSISTENCY VIOLATION! Different values on different nodes.');\nconsole.log('With STRONG consistency, this write would be rejected.');\n\n// Partition heals — conflict resolution\nconsole.log('\\n--- Partition Healed (Last-Write-Wins) ---');\n// Reconnect (version with latest timestamp wins)\nconst allValues = [nodes[0].data.get('user:1')!, nodes[1].data.get('user:1')!];\nconst latest = allValues.reduce((a, b) => a.timestamp > b.timestamp ? a : b);\nnodes.forEach(n => n.data.set('user:1', latest));\nconsole.log('After reconciliation, all nodes: ' + nodes[0].read('user:1', mode));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: NoSQL Data Model Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "quadrantChart\n    title NoSQL Database Quadrant\n    x-axis Low Complexity --> High Complexity\n    y-axis Low Scalability --> High Scalability\n    quadrant-1: Key-Value (Redis, Dynamo)\n    quadrant-2: Document (MongoDB, Couchbase)\n    quadrant-3: Column-Family (Cassandra, HBase)\n    quadrant-4: Graph (Neo4j, Amazon Neptune)\n    Redis: [0.2, 0.8]\n    MongoDB: [0.5, 0.7]\n    Cassandra: [0.6, 0.9]\n    Neo4j: [0.9, 0.4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "According to the CAP theorem, when a network partition occurs, a distributed system must choose between:\na) Consistency and Availability\nb) Consistency and Durability\nc) Availability and Partition Tolerance\nd) Consistency and Isolation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Eventual consistency means:\na) All reads return the most recent write\nb) Given enough time without new writes, all replicas will converge to the same value\nc) Writes are immediately visible to all replicas\nd) Consistency is never guaranteed"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a column-family NoSQL database?\na) MongoDB\nb) Cassandra\nc) Neo4j\nd) Redis"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main advantage of NoSQL databases over relational databases is:\na) Strong consistency guarantees\nb) Horizontal scalability and flexible schemas\nc) Standardized query language\nd) Better data integrity"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-a, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The CAP theorem states that a distributed system can only provide two of three properties:\na) Consistency, Availability, Performance\nb) Consistency, Availability, Partition Tolerance\nc) Consistency, Atomicity, Partition Tolerance\nd) Concurrency, Availability, Partition Tolerance"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BASE stands for:\na) Basic Atomic, Soft state, Eventual consistency\nb) Basically Available, Soft state, Eventual consistency\nc) Batch Available, Strong state, Eventual consistency\nd) Basically Atomic, Serializable, Eventual"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which NoSQL type is best for representing highly connected data like social networks?\na) Document\nb) Key-Value\nc) Column-Family\nd) Graph"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Polyglot persistence means:\na) Using multiple programming languages in one project\nb) Using multiple database types within one application\nc) Translating SQL to multiple languages\nd) Persisting data in multiple formats"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cassandra is an example of which NoSQL type?\na) Document\nb) Key-Value\nc) Column-Family\nd) Graph"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which CAP combination does Cassandra prioritize?\na) CP\nb) AP\nc) CA\nd) None"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main advantage of document databases over relational is:\na) Faster joins\nb) Schema flexibility\nc) Better consistency\nd) Less storage"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The trade-off in choosing AP over CP during a partition is:\na) Data may be stale (eventual consistency)\nb) The system may become unavailable\nc) Data may be lost\nd) Writes will be blocked"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a key-value store, a GET operation has which time complexity?\na) O(n) where n = number of keys\nb) O(log n) where n = number of keys\nc) O(1) amortized (hash table lookup)\nd) O(n^2)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which replication type has a single point of failure for writes?\na) Multi-master\nb) Peer-to-peer\nc) Master-slave\nd) Leaderless"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does a vector clock detect?\na) Network partitions\nb) Concurrent updates (conflicts)\nc) Node failures\nd) Data size"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In range-based sharding, a point lookup has which complexity?\na) O(1)\nb) O(log R) where R = number of ranges\nc) O(n)\nd) O(log n) where n = number of keys"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-d, 4-b, 5-c, 6-b, 7-b, 8-a, 9-c, 10-c, 11-b, 12-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NoSQL emerged to handle scale, schema flexibility, and diverse data models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CAP theorem: in a partition, choose consistency or availability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BASE (Basically Available, Soft State, Eventual Consistency) is the NoSQL alternative to ACID."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Four main NoSQL types: Document, Key-Value, Column-Family, and Graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each type excels at specific workloads; no single database is best for everything."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency models range from eventual (weak) to linearizable (strong)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector clocks detect and resolve concurrent updates in eventually consistent systems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sharding strategies (hash, range, geo) distribute data across nodes for scalability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replication types (master-slave, multi-master, peer-to-peer) provide fault tolerance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real systems (DynamoDB, Cassandra, MongoDB, Neo4j, Redis) implement these concepts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polyglot persistence uses multiple database types in one application."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The SQL vs. NoSQL choice depends on your data access patterns, not dogma."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the CAP theorem. What three properties does it describe? Why can you only have two in a distributed system?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "List the four main categories of NoSQL databases and give an example system for each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is eventual consistency? How does it differ from strong consistency?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For each scenario, suggest the best database type: a) user session cache, b) social network graph, c) sensor data time series, d) product catalog with varying attributes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between hash-based and range-based sharding? Give one advantage of each."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare ACID and BASE consistency models. In what scenarios would you choose BASE over ACID?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the concept of polyglot persistence. For an e-commerce platform, list at least three different databases that might be used and what each handles."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A team is building a real-time chat application. They need low-latency message delivery, presence indicators, and message history. Which database type(s) would you recommend for each concern?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is \"CA\" (Consistent + Available without Partition Tolerance) considered impractical in distributed systems?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw a convergence trace for vector clocks: Node A writes \"x=1\", Node B writes \"x=2\" (concurrent), then Node C reads from both and merges. Show all vector clocks at each step."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a data model for a Twitter-like microblogging platform using:\na) A relational database (PostgreSQL)\nb) A document database (MongoDB)\nc) A graph database (Neo4j)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consider: users, tweets, follows, likes, retweets. What queries are easy/hard in each model?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consider the \"PACELC\" theorem (an extension of CAP). It states: \"In a distributed system, if a partition occurs (P), you must trade between Availability (A) and Consistency (C); otherwise (E — Else), you trade between Latency (L) and Consistency (C).\" Explain this extension and how it applies to DynamoDB's design choices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Eventual consistency can lead to \"stale reads.\" Design a system that uses a version vector or vector clock to detect conflicting updates during an eventual consistency reconciliation process. How does Amazon Dynamo handle conflict resolution? How does Cassandra?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a shard key for a global e-commerce platform with users worldwide. Justify your choice using hash-based, range-based, or geo-sharding."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You have a Cassandra cluster with RF=3. A node fails. Describe the write path during the failure and what happens when the node recovers."
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