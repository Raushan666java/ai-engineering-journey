"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6027],{

/***/ 42657
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_17_distributed_db_md_5a8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-17-distributed-db-md-5a8.json
const site_docs_courses_database_management_systems_17_distributed_db_md_5a8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/17-distributed-db","title":"Chapter 17: Distributed Database Systems","description":"Prev Chapter 18 → Security","source":"@site/docs/courses/database-management-systems/17-distributed-db.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/17-distributed-db","permalink":"/ai-engineering-journey/database-management-systems/17-distributed-db","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"17-distributed-db","slug":"/database-management-systems/17-distributed-db","title":"Chapter 17: Distributed Database Systems","sidebar_label":"Chapter 17: Distributed Database Systems","sidebar_position":17},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 16: Redis → In-Memory Data Store","permalink":"/ai-engineering-journey/database-management-systems/16-redis"},"next":{"title":"Chapter 18: Database Security","permalink":"/ai-engineering-journey/database-management-systems/18-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/17-distributed-db.md


const frontMatter = {
	id: '17-distributed-db',
	slug: '/database-management-systems/17-distributed-db',
	title: 'Chapter 17: Distributed Database Systems',
	sidebar_label: 'Chapter 17: Distributed Database Systems',
	sidebar_position: 17
};
const contentTitle = 'Chapter 17: Distributed Database Systems';

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
  "value": "17.1 Distributed Database Concepts",
  "id": "171-distributed-database-concepts",
  "level": 3
}, {
  "value": "Real-World Analogy: Retail Chain Branches",
  "id": "real-world-analogy-retail-chain-branches",
  "level": 4
}, {
  "value": "Key Properties (Date&#39;s 12 Rules for DDBMS)",
  "id": "key-properties-dates-12-rules-for-ddbms",
  "level": 4
}, {
  "value": "Advantages &amp; Challenges",
  "id": "advantages--challenges",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages Table",
  "id": "advantages--disadvantages-table",
  "level": 4
}, {
  "value": "17.2 Data Fragmentation",
  "id": "172-data-fragmentation",
  "level": 3
}, {
  "value": "Real-World Analogy: Department Store Layout",
  "id": "real-world-analogy-department-store-layout",
  "level": 4
}, {
  "value": "Horizontal Fragmentation",
  "id": "horizontal-fragmentation",
  "level": 4
}, {
  "value": "Vertical Fragmentation",
  "id": "vertical-fragmentation",
  "level": 4
}, {
  "value": "Hybrid (Mixed) Fragmentation",
  "id": "hybrid-mixed-fragmentation",
  "level": 4
}, {
  "value": "Fragmentation Types Comparison",
  "id": "fragmentation-types-comparison",
  "level": 4
}, {
  "value": "17.3 Data Replication",
  "id": "173-data-replication",
  "level": 3
}, {
  "value": "Real-World Analogy: Library Book Copies",
  "id": "real-world-analogy-library-book-copies",
  "level": 4
}, {
  "value": "Full Replication",
  "id": "full-replication",
  "level": 4
}, {
  "value": "Partial Replication",
  "id": "partial-replication",
  "level": 4
}, {
  "value": "Replication Protocols",
  "id": "replication-protocols",
  "level": 4
}, {
  "value": "Replication Types Comparison",
  "id": "replication-types-comparison",
  "level": 4
}, {
  "value": "17.4 Transparency in Distributed Databases",
  "id": "174-transparency-in-distributed-databases",
  "level": 3
}, {
  "value": "Real-World Analogy: The Internet",
  "id": "real-world-analogy-the-internet",
  "level": 4
}, {
  "value": "Types of Transparency",
  "id": "types-of-transparency",
  "level": 4
}, {
  "value": "Transparency Type Details",
  "id": "transparency-type-details",
  "level": 4
}, {
  "value": "17.5 Distributed Transactions",
  "id": "175-distributed-transactions",
  "level": 3
}, {
  "value": "Real-World Analogy: Inter-Bank Wire Transfer",
  "id": "real-world-analogy-inter-bank-wire-transfer",
  "level": 4
}, {
  "value": "Two-Phase Commit (2PC)",
  "id": "two-phase-commit-2pc",
  "level": 4
}, {
  "value": "Three-Phase Commit (3PC)",
  "id": "three-phase-commit-3pc",
  "level": 4
}, {
  "value": "2PC vs 3PC Comparison",
  "id": "2pc-vs-3pc-comparison",
  "level": 4
}, {
  "value": "17.6 Distributed Query Processing",
  "id": "176-distributed-query-processing",
  "level": 3
}, {
  "value": "Real-World Analogy: Package Delivery Network",
  "id": "real-world-analogy-package-delivery-network",
  "level": 4
}, {
  "value": "Numbered Steps (Distributed Query Processing)",
  "id": "numbered-steps-distributed-query-processing",
  "level": 4
}, {
  "value": "17.7 Homogeneous vs Heterogeneous Distributed Databases",
  "id": "177-homogeneous-vs-heterogeneous-distributed-databases",
  "level": 3
}, {
  "value": "17.8 Distributed vs Centralized Database Comparison",
  "id": "178-distributed-vs-centralized-database-comparison",
  "level": 3
}, {
  "value": "17.9 Distributed Database Design",
  "id": "179-distributed-database-design",
  "level": 3
}, {
  "value": "Fragmentation Criteria",
  "id": "fragmentation-criteria",
  "level": 4
}, {
  "value": "Allocation Strategies",
  "id": "allocation-strategies",
  "level": 4
}, {
  "value": "Replication Decisions",
  "id": "replication-decisions",
  "level": 4
}, {
  "value": "17.10 CAP Theorem in Practice",
  "id": "1710-cap-theorem-in-practice",
  "level": 3
}, {
  "value": "17.11 Consistency in Distributed Systems",
  "id": "1711-consistency-in-distributed-systems",
  "level": 3
}, {
  "value": "17.12 Interview Corner",
  "id": "1712-interview-corner",
  "level": 3
}, {
  "value": "Q1: Why is 2PC called a blocking protocol?",
  "id": "q1-why-is-2pc-called-a-blocking-protocol",
  "level": 4
}, {
  "value": "Q2: How does the CAP theorem apply to distributed databases?",
  "id": "q2-how-does-the-cap-theorem-apply-to-distributed-databases",
  "level": 4
}, {
  "value": "Q3: How does distributed deadlock detection work?",
  "id": "q3-how-does-distributed-deadlock-detection-work",
  "level": 4
}, {
  "value": "Q4: What are the criteria for choosing a data fragmentation strategy?",
  "id": "q4-what-are-the-criteria-for-choosing-a-data-fragmentation-strategy",
  "level": 4
}, {
  "value": "Q5: What is the difference between eager and lazy replication?",
  "id": "q5-what-is-the-difference-between-eager-and-lazy-replication",
  "level": 4
}, {
  "value": "17.13 Applications in Real Systems",
  "id": "1713-applications-in-real-systems",
  "level": 3
}, {
  "value": "Google Spanner",
  "id": "google-spanner",
  "level": 4
}, {
  "value": "Amazon DynamoDB",
  "id": "amazon-dynamodb",
  "level": 4
}, {
  "value": "Apache Cassandra",
  "id": "apache-cassandra",
  "level": 4
}, {
  "value": "CockroachDB",
  "id": "cockroachdb",
  "level": 4
}, {
  "value": "Summary Comparison of Real Systems",
  "id": "summary-comparison-of-real-systems",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 17.1: Fragmentation Design",
  "id": "example-171-fragmentation-design",
  "level": 3
}, {
  "value": "Example 17.2: Distributed Query with Semi-Join",
  "id": "example-172-distributed-query-with-semi-join",
  "level": 3
}, {
  "value": "Example 17.3: 2PC Implementation (Conceptual)",
  "id": "example-173-2pc-implementation-conceptual",
  "level": 3
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
  "value": "Fragmentation Types",
  "id": "fragmentation-types",
  "level": 3
}, {
  "value": "Replication Strategies",
  "id": "replication-strategies",
  "level": 3
}, {
  "value": "2PC vs 3PC",
  "id": "2pc-vs-3pc",
  "level": 3
}, {
  "value": "Homogeneous vs Heterogeneous",
  "id": "homogeneous-vs-heterogeneous",
  "level": 3
}, {
  "value": "Distributed vs Centralized",
  "id": "distributed-vs-centralized",
  "level": 3
}, {
  "value": "Transparency Types",
  "id": "transparency-types",
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
  "value": "17.11 TypeScript Sharding &amp; Consistency Protocol Simulator",
  "id": "1711-typescript-sharding--consistency-protocol-simulator",
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
        id: "chapter-17-distributed-database-systems",
        children: "Chapter 17: Distributed Database Systems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prev:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/16-redis",
          children: "Chapter 16 → Redis"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/18-security",
          children: "Chapter 18 → Security"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand distributed database architecture and design goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain data fragmentation (horizontal, vertical, hybrid) and replication (full, partial) strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare distributed query processing techniques with semi-join optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement distributed transactions using 2PC and 3PC protocols"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze transparency types (location, fragmentation, replication, failure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate homogeneous vs heterogeneous distributed databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate CAP theorem trade-offs and consistency models in practice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand real-world systems (Spanner, DynamoDB, Cassandra, CockroachDB)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Distributed DB Overview"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logically related DBs across a network appear as one system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for failure → any node can go down at any time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split data by rows (horizontal), columns (vertical), or both (hybrid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose fragmentation based on query access patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full copy vs subset copy across nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full replication → fast reads, slow writes; partial → balanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide distribution details from users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users write queries without knowing where data lives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2PC / 3PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-phase and three-phase commit for distributed transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2PC blocks on coordinator failure; 3PC is non-blocking but slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decompose global queries into site-local sub-queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-joins minimize network data transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Homogeneous vs Heterogeneous"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same DBMS everywhere vs different DBMS at each site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heterogeneous adds translation complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP Theorem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency vs Availability during partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose CP or AP based on business requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spanner (TrueTime+Paxos), DynamoDB (AP), Cassandra (AP), CockroachDB (Spanner-like)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each makes different CAP trade-offs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Client] --> B[Load Balancer]\n    B --> C[Node 1] & D[Node 2] & E[Node N]\n    C --> F[Replica 1a] & G[Replica 1b]\n    D --> H[Replica 2a] & I[Replica 2b]\n    E --> J[Replica Na] & K[Replica Nb]\n    F & G & H & I & J & K --> L[Consensus Layer]\n    L --> M[Global Consistent View]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch07-distributed-security-performance.png",
        alt: "Distributed Databases, Security and Performance Tuning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "171-distributed-database-concepts",
      children: "17.1 Distributed Database Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "distributed database"
      }), " is a collection of logically related databases distributed across a computer network, appearing as a single system to the user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-retail-chain-branches",
      children: "Real-World Analogy: Retail Chain Branches"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a retail chain with stores in New York, London, and Tokyo. Each store has its own local inventory database containing products specific to that region. However, the corporate headquarters treats all stores as a single unified inventory system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New York store"
        }), ": Sells winter coats and local merchandise (stores rows where region = 'NA')"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "London store"
        }), ": Sells different inventory suitable for European customers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokyo store"
        }), ": Sells electronics and local goods for Asian market"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Headquarters"
        }), ": Runs global queries like \"total revenue across all stores\" without caring where each sale was recorded"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is exactly how a distributed database works → each node (store) has autonomy over its local data, but from the user's perspective it appears as one logical database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-properties-dates-12-rules-for-ddbms",
      children: "Key Properties (Date's 12 Rules for DDBMS)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Parallel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local autonomy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each site operates independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each store manages its own stock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No central reliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No HQ doesn't mean stores stop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No planned downtime for changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores stay open during system updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Location transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users don't need to know where data resides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer doesn't care which warehouse has the item"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users see logical tables, not fragments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer sees one product catalog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users don't know about copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer doesn't know backup locations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed query processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries span sites transparently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HQ aggregates all store data seamlessly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed transaction mgmt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID across sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferring stock between stores is atomic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on heterogeneous hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different POS systems at each store"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on different OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows at one store, Linux at another"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works across different protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different ISPs per location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DBMS independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with different DB vendors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle at one site, PostgreSQL at another"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--challenges",
      children: "Advantages & Challenges"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More components = more things that can fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add nodes horizontally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data redistribution is complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data closer to users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network latency for cross-node queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes must propagate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use commodity hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network infrastructure costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autonomy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local control at each site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global consistency requires coordination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-table",
      children: "Advantages & Disadvantages Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Drawback"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System continues if one node fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition handling adds complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Response time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local data access is fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed joins are slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel processing across nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordination overhead limits gains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data freshness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local updates are immediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica lag causes stale reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized admin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global schema management is hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single breach point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More attack surfaces; cross-node auth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "172-data-fragmentation",
      children: "17.2 Data Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fragmentation splits a table into smaller pieces (fragments) stored at different sites. The goal is to place data physically close to where it's most frequently accessed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-department-store-layout",
      children: "Real-World Analogy: Department Store Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A department store doesn't put all items in one pile. Instead:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal fragmentation"
        }), ": Each section (Menswear, Womenswear, Electronics) has its own rack with a subset of products (rows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical fragmentation"
        }), ": Customer information is split → basic info (name, email) at the checkout counter, sensitive info (credit card, SSN) in the secure back office"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid fragmentation"
        }), ": Electronics section further splits TVs and laptops into sub-sections, and within each, only publicly visible specs vs internal pricing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "horizontal-fragmentation",
      children: "Horizontal Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Splits a table by rows → each fragment contains a subset of tuples based on a selection condition."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A global hotel chain stores booking records for each region at the regional headquarters. North American bookings stay in New York, European bookings in London, Asian bookings in Singapore."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the fragmentation attribute (e.g., region, dept_id)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define partitioning predicate for each fragment (e.g., region = 'NA', region = 'EU')"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply selection operation (σ) to create each fragment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign each fragment to a site based on access patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a fragmentation schema mapping each row to its home site"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE horizontal_fragmentation(table, attribute, partition_map)\n    // partition_map: {site_id: predicate}\n    fragments = {}\n    FOR EACH (site_id, predicate) IN partition_map:\n        fragment = SELECT * FROM table WHERE predicate\n        fragments[site_id] = fragment\n        SEND fragment TO site_id\n    END FOR\n    // Maintain global catalog with fragmentation metadata\n    UPDATE catalog SET fragmentation_type = 'HORIZONTAL',\n                        attribute = attribute,\n                        partition_rules = partition_map\n    RETURN fragments\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Horizontal Fragmentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "62000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Partition rule: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dept = 'Sales'"
      }), " → Site 1, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dept = 'Eng'"
      }), " → Site 2"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fragment Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Destination"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read table employees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate σ(dept='Sales')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 rows (id:1,2,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate σ(dept='Eng')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 rows (id:3,4,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer fragment to Site 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer fragment to Site 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update global catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result at Site 1 (Sales):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "62000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result at Site 2 (Engineering):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Horizontal fragmentation rule definition\nCREATE VIEW emp_sales AS\n    SELECT * FROM employees WHERE dept = 'Sales';\nCREATE VIEW emp_eng AS\n    SELECT * FROM employees WHERE dept = 'Eng';\n\n-- Each view can be mapped to a different physical site\n-- Site 1: emp_sales, Site 2: emp_eng\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <functional>\n\nstruct Employee {\n    int id;\n    std::string name;\n    std::string dept;\n    double salary;\n};\n\nclass HorizontalFragmenter {\nprivate:\n    std::vector<Employee> table;\n    std::map<std::string, std::vector<Employee>> fragments;\n\npublic:\n    HorizontalFragmenter(const std::vector<Employee>& data) : table(data) {}\n\n    std::map<std::string, std::vector<Employee>> fragment(\n        const std::string& attr,\n        const std::map<std::string, std::function<bool(const Employee&)>>& predicates) {\n\n        for (const auto& emp : table) {\n            for (const auto& [site, pred] : predicates) {\n                if (pred(emp)) {\n                    fragments[site].push_back(emp);\n                    break;\n                }\n            }\n        }\n\n        std::cout << \"Horizontal fragmentation complete. \"\n                  << fragments.size() << \" fragments created.\\n\";\n        for (const auto& [site, frag] : fragments) {\n            std::cout << \"  Site \" << site << \": \" << frag.size() << \" rows\\n\";\n        }\n        return fragments;\n    }\n};\n\nint main() {\n    std::vector<Employee> data = {\n        {1, \"Alice\", \"Sales\", 60000},\n        {2, \"Bob\", \"Sales\", 55000},\n        {3, \"Carol\", \"Eng\", 80000},\n        {4, \"Dave\", \"Eng\", 75000},\n        {5, \"Eve\", \"Sales\", 62000}\n    };\n\n    HorizontalFragmenter hf(data);\n    std::map<std::string, std::function<bool(const Employee&)>> preds;\n    preds[\"Site1\"] = [](const Employee& e) { return e.dept == \"Sales\"; };\n    preds[\"Site2\"] = [](const Employee& e) { return e.dept == \"Eng\"; };\n    hf.fragment(\"dept\", preds);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Callable, Any\n\nclass HorizontalFragmenter:\n    def __init__(self, table: List[Dict[str, Any]]):\n        self.table = table\n        self.fragments: Dict[str, List[Dict[str, Any]]] = {}\n\n    def fragment(self, attr: str,\n                 predicates: Dict[str, Callable[[Dict[str, Any]], bool]]) -> Dict[str, List[Dict[str, Any]]]:\n        for row in self.table:\n            for site_id, predicate in predicates.items():\n                if predicate(row):\n                    if site_id not in self.fragments:\n                        self.fragments[site_id] = []\n                    self.fragments[site_id].append(row)\n                    break\n        for site_id, frag in self.fragments.items():\n            print(f\"  Site {site_id}: {len(frag)} rows\")\n        return self.fragments\n\n\nif __name__ == \"__main__\":\n    data = [\n        {\"id\": 1, \"name\": \"Alice\", \"dept\": \"Sales\", \"salary\": 60000},\n        {\"id\": 2, \"name\": \"Bob\", \"dept\": \"Sales\", \"salary\": 55000},\n        {\"id\": 3, \"name\": \"Carol\", \"dept\": \"Eng\", \"salary\": 80000},\n        {\"id\": 4, \"name\": \"Dave\", \"dept\": \"Eng\", \"salary\": 75000},\n        {\"id\": 5, \"name\": \"Eve\", \"dept\": \"Sales\", \"salary\": 62000},\n    ]\n\n    hf = HorizontalFragmenter(data)\n    hf.fragment(\"dept\", {\n        \"Site1\": lambda r: r[\"dept\"] == \"Sales\",\n        \"Site2\": lambda r: r[\"dept\"] == \"Eng\",\n    })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = total rows, S = number of sites. Each row is evaluated against each site's predicate (worst case)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total storage across all fragments equals original table size + metadata overhead."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × avg_row_size × S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each row is transmitted to at most one site (if predicates are disjoint)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N/S) per site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After fragmentation, queries only scan local fragment (S fragments of avg N/S rows)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(N × S)?"
      }), " Each of the N rows must be tested against up to S predicates to determine its destination. If predicates are mutually exclusive and exhaustive, we can optimize to O(N) by using a hash function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
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
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local queries scan fewer rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global queries need UNION across sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data stored near frequent users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor locality for cross-fragment queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragments can be processed in parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join across fragments is expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure of one fragment affects only that subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data must be reconstructed from all fragments for full view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to add new fragments (e.g., new region)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rebalancing requires predicate changes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL values in fragmentation attribute"
        }), ": Rows with NULL dept don't match any predicate → orphans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overlapping predicates"
        }), ": Row matches multiple predicates → duplication or ambiguity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-disjoint predicates"
        }), ": Data redundancy if a row matches >1 site"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty fragments"
        }), ": A site with no matching rows wastes resources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic repartitioning"
        }), ": When access patterns shift, redistributing rows is expensive"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vertical-fragmentation",
      children: "Vertical Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Splits a table by columns → each fragment contains a subset of attributes, always including the primary key for reconstruction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Hospital patient records where basic demographics (name, age, blood type) are accessible to all nurses, while diagnosis and prescription details are restricted to doctors only. Both fragments share the patient ID to link them."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify attribute groups based on access patterns (frequency, sensitivity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure each fragment includes the primary key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply projection operation (π) for each attribute group"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign fragments to sites with appropriate access controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create reconstruction view using JOIN on primary key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE vertical_fragmentation(table, key_attr, attribute_groups)\n    // attribute_groups: {site_id: [attr1, attr2, ...]}\n    fragments = {}\n    FOR EACH (site_id, attrs) IN attribute_groups:\n        // Always include primary key\n        projection_attrs = UNION({key_attr}, attrs)\n        fragment = SELECT projection_attrs FROM table\n        fragments[site_id] = fragment\n        SEND fragment TO site_id\n    END FOR\n    // Create reconstruction view\n    CREATE VIEW full_table AS\n        SELECT * FROM fragments[0]\n        NATURAL JOIN fragments[1]\n        NATURAL JOIN ...\n    UPDATE catalog SET fragmentation_type = 'VERTICAL',\n                        key = key_attr,\n                        groups = attribute_groups\n    RETURN fragments\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Vertical Fragmentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssn"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "111-22-3333"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "444-55-6666"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "777-88-9999"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Group 1 (Site 1 → public): {name, dept}\nGroup 2 (Site 2 → sensitive): {salary, ssn}"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fragment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Destination"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify key = id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project π(id, name, dept)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(id, name, dept)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project π(id, salary, ssn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(id, salary, ssn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer fragment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 cols × 3 rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer fragment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 cols × 3 rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record reconstruction: NATURAL JOIN on id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Site 1 (Public):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eng"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Site 2 (Sensitive):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ssn"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "111-22-3333"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "444-55-6666"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "777-88-9999"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Vertical fragments (must preserve key)\nCREATE VIEW emp_public AS\n    SELECT id, name, dept FROM employees;\n\nCREATE VIEW emp_sensitive AS\n    SELECT id, salary, ssn FROM employees;\n\n-- Reconstruction view\nCREATE VIEW emp_full AS\n    SELECT * FROM emp_public NATURAL JOIN emp_sensitive;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n\nstruct Employee {\n    int id;\n    std::string name;\n    std::string dept;\n    double salary;\n    std::string ssn;\n};\n\nstruct PublicEmployee {\n    int id;\n    std::string name;\n    std::string dept;\n};\n\nstruct SensitiveEmployee {\n    int id;\n    double salary;\n    std::string ssn;\n};\n\nclass VerticalFragmenter {\npublic:\n    std::pair<std::vector<PublicEmployee>, std::vector<SensitiveEmployee>>\n    fragment(const std::vector<Employee>& table) {\n        std::vector<PublicEmployee> publicFrag;\n        std::vector<SensitiveEmployee> sensitiveFrag;\n\n        for (const auto& emp : table) {\n            publicFrag.push_back({emp.id, emp.name, emp.dept});\n            sensitiveFrag.push_back({emp.id, emp.salary, emp.ssn});\n        }\n\n        std::cout << \"Vertical fragmentation complete.\\n\"\n                  << \"  Public fragment: \" << publicFrag.size() << \" rows, 3 columns\\n\"\n                  << \"  Sensitive fragment: \" << sensitiveFrag.size() << \" rows, 3 columns\\n\";\n        return {publicFrag, sensitiveFrag};\n    }\n};\n\nint main() {\n    std::vector<Employee> data = {\n        {1, \"Alice\", \"Sales\", 60000, \"111-22-3333\"},\n        {2, \"Bob\", \"Sales\", 55000, \"444-55-6666\"},\n        {3, \"Carol\", \"Eng\", 80000, \"777-88-9999\"}\n    };\n\n    VerticalFragmenter vf;\n    vf.fragment(data);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Any, Tuple\n\n\nclass VerticalFragmenter:\n    def fragment(self, table: List[Dict[str, Any]],\n                 groups: Dict[str, List[str]],\n                 key: str = \"id\") -> Dict[str, List[Dict[str, Any]]]:\n        fragments: Dict[str, List[Dict[str, Any]]] = {}\n        for site_id, attrs in groups.items():\n            projection = [key] + attrs\n            fragments[site_id] = [\n                {k: row[k] for k in projection} for row in table\n            ]\n            print(f\"  {site_id}: {len(fragments[site_id])} rows, \"\n                  f\"cols={projection}\")\n        return fragments\n\n\nif __name__ == \"__main__\":\n    data = [\n        {\"id\": 1, \"name\": \"Alice\", \"dept\": \"Sales\", \"salary\": 60000, \"ssn\": \"111-22-3333\"},\n        {\"id\": 2, \"name\": \"Bob\", \"dept\": \"Sales\", \"salary\": 55000, \"ssn\": \"444-55-6666\"},\n        {\"id\": 3, \"name\": \"Carol\", \"dept\": \"Eng\", \"salary\": 80000, \"ssn\": \"777-88-9999\"},\n    ]\n\n    vf = VerticalFragmenter()\n    vf.fragment(data, {\"Public\": [\"name\", \"dept\"], \"Sensitive\": [\"salary\", \"ssn\"]})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = rows, C = total columns. Each cell is copied into its fragment."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total storage equals original + key duplication in each fragment."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reconstruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join on key requires hash lookup or sort-merge across fragments."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query benefit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × C/S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries only access relevant columns, reducing I/O."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(N × C)?"
      }), " Every cell in the table must be read and placed into exactly one fragment. Each fragment copies the key column, so total stored data = original data × (1 + (F-1) × key_size/C) where F = number of fragments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
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
              children: "Privacy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive columns stored separately with access controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key column is duplicated in every fragment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries scan only needed columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstruction joins across fragments are expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row width is smaller → more rows per page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update must touch multiple fragments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-level access without DBMS support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Referential integrity across fragments is complex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key column update"
        }), ": Changing the primary key must propagate to all fragments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lossless join property"
        }), ": Fragments without overlapping keys cannot reconstruct the original"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attribute affinity"
        }), ": Poor grouping causes frequent cross-fragment queries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NOT NULL constraints"
        }), ": Partial constraints across fragments are hard to enforce"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adding a column"
        }), ": Must be added to the appropriate fragment or a new fragment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hybrid-mixed-fragmentation",
      children: "Hybrid (Mixed) Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combines horizontal and vertical fragmentation → first split by rows, then by columns (or vice versa)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": An international bank fragments customer accounts horizontally by region (NA, EU, APAC). Within each region, basic account info (name, balance) goes to the customer-facing app, while transaction history and KYC docs go to the secure compliance system."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply horizontal fragmentation based on a primary predicate (e.g., region)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each horizontal fragment, apply vertical fragmentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign resulting fragments to appropriate sites"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create reconstruction rules in the global catalog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE hybrid_fragmentation(table, h_attr, h_predicates, v_groups)\n    // Step 1: Horizontal fragmentation\n    h_fragments = horizontal_fragmentation(table, h_attr, h_predicates)\n    // Step 2: Vertical fragmentation on each horizontal fragment\n    hybrid_fragments = {}\n    FOR EACH (site, h_frag) IN h_fragments:\n        v_frags = vertical_fragmentation(h_frag, key_attr, v_groups)\n        FOR EACH (v_site, v_frag) IN v_frags:\n            composite_key = site + \":\" + v_site\n            hybrid_fragments[composite_key] = v_frag\n        END FOR\n    END FOR\n    UPDATE catalog SET fragmentation_type = 'HYBRID'\n    RETURN hybrid_fragments\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Hybrid Fragmentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees"
      }), " table with 6 rows and 5 columns.\nStep 1: Horizontal by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dept"
      }), " → 2 fragments (Sales: 3 rows, Eng: 3 rows)\nStep 2: Vertical on Sales → public (id, name) + sensitive (id, salary, ssn)\nStep 2: Vertical on Eng → public (id, name) + sensitive (id, salary, ssn)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: 4 fragments total."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fragment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Columns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sales_Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id=1,2,5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id, name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Names of sales employees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sales_Sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id=1,2,5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id, salary, ssn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Salary/SSN of sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eng_Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id=3,4,6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id, name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Names of engineering employees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eng_Sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id=3,4,6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id, salary, ssn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Salary/SSN of engineering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Step 1: Horizontal fragmentation by dept\nCREATE VIEW sales_emp AS SELECT * FROM employees WHERE dept = 'Sales';\nCREATE VIEW eng_emp AS SELECT * FROM employees WHERE dept = 'Eng';\n\n-- Step 2: Vertical fragmentation on each horizontal fragment\nCREATE VIEW sales_public AS SELECT id, name FROM sales_emp;\nCREATE VIEW sales_sensitive AS SELECT id, salary, ssn FROM sales_emp;\nCREATE VIEW eng_public AS SELECT id, name FROM eng_emp;\nCREATE VIEW eng_sensitive AS SELECT id, salary, ssn FROM eng_emp;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fragmentation-types-comparison",
      children: "Fragmentation Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hybrid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Splits by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows (tuples)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns (attributes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both rows and columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ (selection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π (projection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ then π, or π then σ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key preserved"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (all columns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (key in each fragment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (key in all vertical sub-fragments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reconstruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NATURAL JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN of UNIONs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (independent row sets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (column groups)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (fine-grained splits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy benefit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (all columns visible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (sensitive columns isolated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (row+column access control)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query benefit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans fewer rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans fewer columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans fewer rows AND columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (one fragment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (multiple column fragments)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest (row + column fragments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum data locality + security"
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
              children: "Storage overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key duplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key duplication in each vertical split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disjointness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows are disjoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns are disjoint (except key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both rows and columns are disjoint"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "173-data-replication",
      children: "17.3 Data Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Replication maintains copies of the same data across multiple sites for availability, performance, and fault tolerance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-library-book-copies",
      children: "Real-World Analogy: Library Book Copies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A university library keeps copies of popular textbooks across multiple campus libraries:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full replication"
        }), ": Every campus library has a complete copy of the entire library catalog (rare, expensive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial replication"
        }), ": The engineering library has engineering books, the law library has law books, and popular reference books exist at all libraries"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the main library burns down, students can still access books from other branches (fault tolerance). Students always go to the nearest branch (read performance)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-replication",
      children: "Full Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every site stores the complete database."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A cloud document service (like Google Docs) stores your document on servers in the US, EU, and Asia. Any user can read/edit from anywhere, and the service syncs changes across all regions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), " (Full Replication → Write Path):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends write request to any replica"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator propagates write to all replicas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each replica applies the write and acknowledges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator waits for acknowledgments from all replicas (sync) or a subset (async)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator confirms write to client"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE full_replication_write(data_item, value, mode)\n    // mode: 'sync' or 'async'\n    IF mode == 'sync':\n        // Synchronous: wait for all replicas\n        responses = PARALLEL_SEND value TO ALL replicas\n        IF ALL responses == 'ACK':\n            RETURN 'WRITE_SUCCESS'\n        ELSE:\n            ROLLBACK committed replicas\n            RETURN 'WRITE_FAILED'\n    ELSE:  // async\n        // Asynchronous: write to local replica, propagate in background\n        LOCAL_WRITE(data_item, value)\n        BACKGROUND: PROPAGATE value TO ALL replicas\n        RETURN 'WRITE_ACCEPTED'\n    END IF\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sync Full Replication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Async Full Replication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) where L = max network latency to any replica"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → local write only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → read from nearest replica"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) per write (N = replicas)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) synchronous + O(N) async"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (linearizable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × DB_size) per replica set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(L) for sync writes?"
      }), " The coordinator must wait for the slowest replica's acknowledgment. Network latency across continents can be 100-300ms, so a sync write to 5 replicas takes at least the maximum RTT."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
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
              children: "Read availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any replica can serve reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must write to ALL replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync → strong; Async → eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sync is slow; Async has conflict risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing any replica doesn't affect reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write fails if any replica is down (sync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N × DB_size storage cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throughput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read throughput scales with replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write throughput limited by slowest replica"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "partial-replication",
      children: "Partial Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each site stores a subset of the database. Some data may be replicated, some may exist at only one site."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Netflix stores popular content (Stranger Things) on CDN servers worldwide (replicated), but region-specific documentaries exist only in that region's servers (partial). Catalog metadata (titles, descriptions) is partially replicated based on regional popularity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each data item, determine replication factor R (how many copies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select R sites to host copies (using consistent hashing, geography, or custom rules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route writes to all R sites"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Route reads to the nearest replica of the data item"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE partial_replication_write(data_item, value, replication_factor)\n    target_sites = SELECT_SITES(data_item.key, replication_factor)\n    responses = PARALLEL_SEND value TO target_sites\n    successes = COUNT(responses == 'ACK')\n    // Quorum-based: success if W of R acknowledge\n    IF successes >= W:\n        RETURN 'WRITE_SUCCESS'\n    ELSE:\n        RETURN 'WRITE_FAILED'\n    END IF\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partial Replication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Replication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L_max) to W replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L_max) to ALL replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R × avg_data_per_site)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × total_data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R) messages per write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) messages per write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R out of N sites have the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All N sites have the data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tunability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose R, W, R for consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed (W = N, R = 1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
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
              children: "Storage efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportional to R, not N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to R replicas vs all N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tunable consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose R + W > N for strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicate popular data widely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache placement decisions needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hotspots"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uneven access may require re-replication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "replication-protocols",
      children: "Replication Protocols"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Eager (Synchronous)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All replicas updated before commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lazy (Asynchronous)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update local replica, propagate later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media posts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quorum-based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W of N acknowledge write, R of N for read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, Cassandra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leader-based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One leader accepts writes, replicates to followers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (sync) or bounded (async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-leader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple leaders accept writes, conflict resolution needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline-first apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chain replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicas form a chain; writes flow through chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "replication-types-comparison",
      children: "Replication Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Replication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partial Replication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data at each site"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset of database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N × total_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R × avg_data_per_item"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every site can serve any query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only sites with the data can serve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest (must update all N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (update R sites)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing any site is fine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing the only copy of an item is data loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler (all or nothing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex (tunable per item)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-bound (cascade to all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both read and write scalable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small, critical data; read-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets; balanced workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rebalancing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple (copy entire DB to new node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (re-distribute R copies)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "174-transparency-in-distributed-databases",
      children: "17.4 Transparency in Distributed Databases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transparency hides the complexities of distribution from the user, making a distributed database appear as a single logical database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-the-internet",
      children: "Real-World Analogy: The Internet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you visit google.com, you don't know (or care) which data center serves your request:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location transparency"
        }), ": You type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "google.com"
        }), " → the DNS resolves to the nearest server automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replication transparency"
        }), ": Google has multiple copies of search indexes globally → you don't see which one is used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation transparency"
        }), ": Google's index is split across thousands of machines → your search query spans them invisibly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure transparency"
        }), ": If one Google server fails, your request routes to another → you never notice"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "types-of-transparency",
      children: "Types of Transparency"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Transparency Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Hides"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL/Practical Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Location transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical location (which site, which server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS hides which IP serves google.com"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM employees"
            }), " → no site prefix needed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data is split into fragments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google hides that the index is sharded"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM employees"
            }), " → single logical table despite fragments"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple copies of data exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN hides which edge server delivers content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads return from any replica transparently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Failure transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node failures and recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud load balancer hides failed servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries complete despite node failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple users accessing simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATM network handles concurrent withdrawals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serializable isolation across sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance variations across nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN routes to fastest available server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query optimizer picks fastest execution plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different schemas at different sites (heterogeneous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal translator between languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema mapping functions convert between formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Naming transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naming conventions across sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global phone number format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global object IDs that work across all sites"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "transparency-type-details",
      children: "Transparency Type Details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location Transparency"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Without location transparency (user specifies site):\nSELECT * FROM site1.employees UNION SELECT * FROM site2.employees;\n\n-- With location transparency:\nSELECT * FROM employees;  -- System routes to appropriate sites\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users write queries without knowing site names, IPs, or connection details. The DDBMS's global catalog maps logical table names to physical locations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fragmentation Transparency"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Users query the global table as if it were whole:\nSELECT AVG(salary) FROM employees;\n-- System translates into:\n-- Site 1: SELECT AVG(salary) FROM emp_sales\n-- Site 2: SELECT AVG(salary) FROM emp_eng\n-- Coordinator: (sum1 * count1 + sum2 * count2) / (count1 + count2)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Replication Transparency"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- User reads without knowing about replicas:\nSELECT * FROM products WHERE id = 100;\n-- System routes to the nearest or least-loaded replica\n-- User writes:\nUPDATE products SET price = 29.99 WHERE id = 100;\n-- System propagates to all replicas (sync or async)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure Transparency"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- User query completes despite node failure:\nSELECT * FROM orders;  -- System detects failed node, reroutes\n-- User doesn't retry → system handles failure internally\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "175-distributed-transactions",
      children: "17.5 Distributed Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A distributed transaction accesses and updates data stored at multiple sites while preserving ACID properties globally."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-inter-bank-wire-transfer",
      children: "Real-World Analogy: Inter-Bank Wire Transfer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice (Bank of America) sends $1000 to Bob (HSBC London):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepare phase"
        }), ": Both banks check if accounts exist and have sufficient balance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit phase"
        }), ": Both banks deduct and credit simultaneously"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If HSBC fails mid-transaction, Bank of America must also rollback (atomicity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A customer checking their balance during the transfer sees either before or after, never an inconsistent intermediate state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "two-phase-commit-2pc",
      children: "Two-Phase Commit (2PC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard atomic commitment protocol for distributed transactions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordinator sends PREPARE"
        }), " to all participants with transaction ID and data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Each participant"
        }), " executes the transaction up to commit point, logs PREPARED state, votes YES or NO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordinator collects votes"
        }), " → if all YES, decides COMMIT; if any NO or timeout, decides ABORT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordinator sends decision"
        }), " (COMMIT or ABORT) to all participants"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Each participant"
        }), " applies the decision, logs DONE or ABORTED, releases locks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Participants send ACK"
        }), " to coordinator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordinator"
        }), " logs the transaction as complete after receiving all ACKs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE two_phase_commit(transaction, participants)\n    // Phase 1: Prepare\n    coordinator.LOG(\"PREPARE\", transaction.id)\n    FOR EACH participant IN participants:\n        SEND \"PREPARE\", transaction TO participant\n    END FOR\n\n    votes = {}\n    FOR EACH participant IN participants:\n        response = RECEIVE(timeout=T)\n        votes[participant] = response  // \"YES\" or \"NO\"\n    END FOR\n\n    // Phase 2: Decision\n    IF ALL votes == \"YES\":\n        coordinator.LOG(\"COMMIT\", transaction.id)\n        FOR EACH participant IN participants:\n            SEND \"COMMIT\", transaction.id TO participant\n        END FOR\n        WAIT FOR all acknowledgments\n        coordinator.LOG(\"DONE\", transaction.id)\n        RETURN \"COMMITTED\"\n    ELSE:\n        coordinator.LOG(\"ABORT\", transaction.id)\n        FOR EACH participant IN participants:\n            SEND \"ABORT\", transaction.id TO participant\n        END FOR\n        RETURN \"ABORTED\"\n    END IF\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: 2PC Successful Commit"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transaction T1: Transfer $500 from Account A (Site 1) to Account B (Site 2)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coordinator State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participant 1 (Site 1) State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participant 2 (Site 2) State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send PREPARE to P1,P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives PREPARE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives PREPARE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes T1 locally (deduct $500), logs PREPARED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes T1 locally (credit $500), logs PREPARED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives YES from both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All YES → decides COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs COMMIT, sends COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives COMMIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applies changes, releases locks, logs DONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applies changes, releases locks, logs DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives both ACKs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs DONE, transaction complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final state: T1 committed. Account A: -$500, Account B: +$500."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: 2PC Abort (Participant 2 votes NO)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coordinator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participant 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participant 2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send PREPARE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREPARE received"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREPARE received"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes, logs PREPARED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insufficient balance, logs ABORT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives YES from P1, NO from P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has a NO → decides ABORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logs ABORT, sends ABORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives ABORT, rolls back, releases locks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives ABORT (already aborted), releases locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction ABORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final state: T1 aborted. Neither account modified."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <chrono>\n#include <thread>\n#include <random>\n\nenum class Vote { YES, NO, TIMEOUT };\nenum class CoordinatorState { INIT, WAIT, COMMIT, ABORT, DONE };\nenum class ParticipantState { IDLE, PREPARED, COMMITTED, ABORTED };\n\nstruct LogEntry {\n    std::string tx_id;\n    std::string state;\n    long timestamp;\n};\n\nclass Participant {\npublic:\n    std::string id;\n    ParticipantState state = ParticipantState::IDLE;\n    std::vector<LogEntry> log;\n\n    Participant(const std::string& sid) : id(sid) {}\n\n    Vote prepare(const std::string& tx_id, bool can_commit) {\n        if (can_commit) {\n            state = ParticipantState::PREPARED;\n            log.push_back({tx_id, \"PREPARED\", current_time()});\n            std::cout << \"  Participant \" << id << \": PREPARED (YES)\\n\";\n            return Vote::YES;\n        } else {\n            state = ParticipantState::ABORTED;\n            log.push_back({tx_id, \"ABORTED_LOCAL\", current_time()});\n            std::cout << \"  Participant \" << id << \": ABORT (NO)\\n\";\n            return Vote::NO;\n        }\n    }\n\n    void commit(const std::string& tx_id) {\n        state = ParticipantState::COMMITTED;\n        log.push_back({tx_id, \"COMMITTED\", current_time()});\n        std::cout << \"  Participant \" << id << \": COMMITTED\\n\";\n    }\n\n    void abort(const std::string& tx_id) {\n        state = ParticipantState::ABORTED;\n        log.push_back({tx_id, \"ABORTED\", current_time()});\n        std::cout << \"  Participant \" << id << \": ABORTED\\n\";\n    }\n\n    long current_time() {\n        return std::chrono::system_clock::now()\n                   .time_since_epoch().count();\n    }\n};\n\nclass Coordinator {\npublic:\n    std::string id;\n    CoordinatorState state = CoordinatorState::INIT;\n    std::vector<LogEntry> log;\n\n    Coordinator(const std::string& cid) : id(cid) {}\n\n    std::string execute_transaction(const std::string& tx_id,\n                                     std::vector<Participant*>& participants,\n                                     std::map<std::string, bool>& readiness) {\n        std::cout << \"\\n=== 2PC Transaction: \" << tx_id << \" ===\\n\";\n\n        // Phase 1: Prepare\n        state = CoordinatorState::WAIT;\n        log.push_back({tx_id, \"PREPARE_SENT\", current_time()});\n        std::cout << \"Phase 1: Sending PREPARE to all participants\\n\";\n\n        std::vector<Vote> votes;\n        for (auto* p : participants) {\n            votes.push_back(p->prepare(tx_id, readiness[p->id]));\n        }\n\n        // Phase 2: Decision\n        bool all_yes = true;\n        for (auto v : votes) {\n            if (v != Vote::YES) { all_yes = false; break; }\n        }\n\n        if (all_yes) {\n            state = CoordinatorState::COMMIT;\n            log.push_back({tx_id, \"COMMIT_DECIDED\", current_time()});\n            std::cout << \"Phase 2: All YES -> Sending COMMIT\\n\";\n            for (auto* p : participants) {\n                p->commit(tx_id);\n            }\n            state = CoordinatorState::DONE;\n            log.push_back({tx_id, \"DONE\", current_time()});\n            return \"COMMITTED\";\n        } else {\n            state = CoordinatorState::ABORT;\n            log.push_back({tx_id, \"ABORT_DECIDED\", current_time()});\n            std::cout << \"Phase 2: Some NO -> Sending ABORT\\n\";\n            for (auto* p : participants) {\n                p->abort(tx_id);\n            }\n            state = CoordinatorState::DONE;\n            log.push_back({tx_id, \"DONE\", current_time()});\n            return \"ABORTED\";\n        }\n    }\n\n    long current_time() {\n        return std::chrono::system_clock::now()\n                   .time_since_epoch().count();\n    }\n};\n\nint main() {\n    Coordinator coord(\"C1\");\n    Participant p1(\"Site1_DB\"), p2(\"Site2_DB\");\n\n    std::vector<Participant*> participants = {&p1, &p2};\n\n    // Successful case\n    std::map<std::string, bool> readiness = {{\"Site1_DB\", true}, {\"Site2_DB\", true}};\n    std::string result = coord.execute_transaction(\"T1\", participants, readiness);\n    std::cout << \"Result: \" << result << \"\\n\\n\";\n\n    // Reset states\n    p1.state = ParticipantState::IDLE;\n    p2.state = ParticipantState::IDLE;\n    coord.state = CoordinatorState::INIT;\n\n    // Abort case\n    readiness[\"Site2_DB\"] = false;\n    result = coord.execute_transaction(\"T2\", participants, readiness);\n    std::cout << \"Result: \" << result << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom typing import List, Dict, Optional\nimport time\n\n\nclass Vote(Enum):\n    YES = \"YES\"\n    NO = \"NO\"\n\n\nclass CoordinatorState(Enum):\n    INIT = \"INIT\"\n    WAIT = \"WAIT\"\n    COMMIT = \"COMMIT\"\n    ABORT = \"ABORT\"\n    DONE = \"DONE\"\n\n\nclass ParticipantState(Enum):\n    IDLE = \"IDLE\"\n    PREPARED = \"PREPARED\"\n    COMMITTED = \"COMMITTED\"\n    ABORTED = \"ABORTED\"\n\n\nclass LogEntry:\n    def __init__(self, tx_id: str, state: str, timestamp: float):\n        self.tx_id = tx_id\n        self.state = state\n        self.timestamp = timestamp\n\n\nclass Participant:\n    def __init__(self, sid: str):\n        self.id = sid\n        self.state = ParticipantState.IDLE\n        self.log: List[LogEntry] = []\n\n    def prepare(self, tx_id: str, can_commit: bool) -> Vote:\n        if can_commit:\n            self.state = ParticipantState.PREPARED\n            self.log.append(LogEntry(tx_id, \"PREPARED\", time.time()))\n            print(f\"  Participant {self.id}: PREPARED (YES)\")\n            return Vote.YES\n        else:\n            self.state = ParticipantState.ABORTED\n            self.log.append(LogEntry(tx_id, \"ABORTED_LOCAL\", time.time()))\n            print(f\"  Participant {self.id}: ABORT (NO)\")\n            return Vote.NO\n\n    def commit(self, tx_id: str):\n        self.state = ParticipantState.COMMITTED\n        self.log.append(LogEntry(tx_id, \"COMMITTED\", time.time()))\n        print(f\"  Participant {self.id}: COMMITTED\")\n\n    def abort(self, tx_id: str):\n        self.state = ParticipantState.ABORTED\n        self.log.append(LogEntry(tx_id, \"ABORTED\", time.time()))\n        print(f\"  Participant {self.id}: ABORTED\")\n\n\nclass TwoPhaseCommitCoordinator:\n    def __init__(self, cid: str):\n        self.id = cid\n        self.state = CoordinatorState.INIT\n        self.log: List[LogEntry] = []\n\n    def execute(self, tx_id: str, participants: List[Participant],\n                readiness: Dict[str, bool]) -> str:\n        print(f\"\\n=== 2PC Transaction: {tx_id} ===\")\n\n        # Phase 1: Prepare\n        self.state = CoordinatorState.WAIT\n        self.log.append(LogEntry(tx_id, \"PREPARE_SENT\", time.time()))\n        print(\"Phase 1: Sending PREPARE to all participants\")\n\n        votes: List[Vote] = []\n        for p in participants:\n            vote = p.prepare(tx_id, readiness.get(p.id, False))\n            votes.append(vote)\n\n        # Phase 2: Decision\n        all_yes = all(v == Vote.YES for v in votes)\n\n        if all_yes:\n            self.state = CoordinatorState.COMMIT\n            self.log.append(LogEntry(tx_id, \"COMMIT_DECIDED\", time.time()))\n            print(\"Phase 2: All YES -> Sending COMMIT\")\n            for p in participants:\n                p.commit(tx_id)\n            self.state = CoordinatorState.DONE\n            self.log.append(LogEntry(tx_id, \"DONE\", time.time()))\n            return \"COMMITTED\"\n        else:\n            self.state = CoordinatorState.ABORT\n            self.log.append(LogEntry(tx_id, \"ABORT_DECIDED\", time.time()))\n            print(\"Phase 2: Some NO -> Sending ABORT\")\n            for p in participants:\n                p.abort(tx_id)\n            self.state = CoordinatorState.DONE\n            self.log.append(LogEntry(tx_id, \"DONE\", time.time()))\n            return \"ABORTED\"\n\n\nif __name__ == \"__main__\":\n    coord = TwoPhaseCommitCoordinator(\"C1\")\n    p1 = Participant(\"Site1_DB\")\n    p2 = Participant(\"Site2_DB\")\n\n    # Successful case\n    result = coord.execute(\"T1\", [p1, p2],\n                           {\"Site1_DB\": True, \"Site2_DB\": True})\n    print(f\"Result: {result}\")\n\n    # Reset\n    p1.state = ParticipantState.IDLE\n    p2.state = ParticipantState.IDLE\n    coord.state = CoordinatorState.INIT\n\n    # Abort case\n    result = coord.execute(\"T2\", [p1, p2],\n                           {\"Site1_DB\": True, \"Site2_DB\": False})\n    print(f\"Result: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message rounds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare (1 round-trip) + Commit (1 round-trip)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare (N), YES/NO (N), Decision (N), ACK (N)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (best case)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × max_latency + 2 × local_exec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two network round-trips + local execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (coordinator failure)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞ (blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Participants wait indefinitely if coordinator fails after PREPARE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 per participant (PREPARE, COMMIT/ABORT, DONE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Durability requires writing to stable storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking probability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(coord_fail) × P(uncertain_state)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportional to window between PREPARE and DECISION"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 2 rounds?"
      }), " The protocol requires exactly 2 network round-trips: one to ask all participants if they can commit, and one to tell them the decision. No optimization can reduce it below 2 because the coordinator cannot know participants' states without asking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
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
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees all-or-nothing across sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinator must survive to deliver decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correctness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood, formally verified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks indefinitely on coordinator failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, supported by many DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No progress during network partition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log-based recovery is straightforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Participant who voted YES but never gets decision is stuck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any number of participants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency grows with distance, not count"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordinator failure after PREPARE but before decision"
        }), ": Participants hold locks and resources indefinitely (blocking problem). Solution: timeout + heuristic abort, or 3PC."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Participant failure after voting YES"
        }), ": Coordinator retries decision delivery. Participant logs allow recovery on restart."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network partition"
        }), ": Coordinator cannot reach some participants → times out → ABORT. Participants who voted YES and can't reach coordinator are blocked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrent transactions"
        }), ": Deadlock across sites → transaction T1 at Site A waiting for Site B's lock, T2 at Site B waiting for Site A's lock. Requires distributed deadlock detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lost ACK"
        }), ": Coordinator doesn't receive acknowledgment → re-sends decision. Participants must handle duplicate COMMIT/ABORT messages idempotently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Split-brain"
        }), ": Network partition splits participants, each group thinks it's the primary. Requires consensus + fencing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "three-phase-commit-3pc",
      children: "Three-Phase Commit (3PC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-blocking protocol that adds an extra phase to avoid the blocking problem of 2PC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CanCommit"
        }), ": Coordinator asks if participants can commit (similar to 2PC Prepare)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PreCommit"
        }), ": After all YES, coordinator sends PreCommit → participants must respond with ACK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DoCommit"
        }), ": After all PreCommit ACKs, coordinator sends DoCommit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 3PC avoids blocking"
      }), ": Participants in the PreCommit state can unilaterally abort on timeout. The PreCommit phase ensures all participants are in agreement about the decision ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " the commit is final."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE three_phase_commit(transaction, participants)\n    // Phase 1: CanCommit\n    coordinator.LOG(\"CAN_COMMIT\", transaction.id)\n    FOR EACH participant IN participants:\n        SEND \"CAN_COMMIT\", transaction TO participant\n    END FOR\n\n    votes = {}\n    FOR EACH participant IN participants:\n        votes[participant] = RECEIVE(timeout=T)\n    END FOR\n\n    IF ANY vote == \"NO\" OR timeout:\n        coordinator.LOG(\"ABORT\", transaction.id)\n        SEND \"ABORT\" TO ALL participants\n        RETURN \"ABORTED\"\n    END IF\n\n    // Phase 2: PreCommit\n    coordinator.LOG(\"PRE_COMMIT\", transaction.id)\n    SEND \"PRE_COMMIT\" TO ALL participants\n    acks = {}\n    FOR EACH participant IN participants:\n        acks[participant] = RECEIVE(timeout=T)\n    END FOR\n\n    IF ANY timeout:\n        coordinator.LOG(\"ABORT\", transaction.id)\n        SEND \"ABORT\" TO ALL participants\n        RETURN \"ABORTED\"\n    END IF\n\n    // Phase 3: DoCommit\n    coordinator.LOG(\"DO_COMMIT\", transaction.id)\n    SEND \"DO_COMMIT\" TO ALL participants\n    RETURN \"COMMITTED\"\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3PC Participant Logic (Non-Blocking Recovery)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UPON RECEIVE \"CAN_COMMIT\":\n    IF can_commit: state = READY, SEND \"YES\"\n    ELSE: state = ABORTED, SEND \"NO\"\n\nUPON RECEIVE \"PRE_COMMIT\":\n    IF state == READY:\n        state = PRE_COMMIT, SEND \"ACK\"\n        START TIMEOUT(T_precommit)\n    ELSE: IGNORE\n\nUPON RECEIVE \"DO_COMMIT\":\n    IF state == PRE_COMMIT:\n        state = COMMITTED, COMMIT transaction\n    ELSE: IGNORE\n\nUPON RECEIVE \"ABORT\":\n    state = ABORTED, ABORT transaction\n\nUPON TIMEOUT:\n    IF state == PRE_COMMIT:\n        // Unilaterally abort → no blocking!\n        state = ABORTED, ABORT transaction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3PC Dry Run Trace"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coordinator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participant 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Participant 2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CanCommit → P1,P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY → YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY → YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All YES → PreCommit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PreCommit → P1,P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRE_COMMIT → ACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRE_COMMIT → ACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All ACK → DoCommit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DoCommit → P1,P2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMITTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3PC Coordinator Failure Recovery"
      }), ": If coordinator fails after PreCommit but before DoCommit, participants timeout and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "abort"
      }), " → they are not blocked. If coordinator fails after DoCommit, participants ", (0,jsx_runtime.jsx)(_components.em, {
        children: "commit"
      }), " on timeout if they received DoCommit, or ", (0,jsx_runtime.jsx)(_components.em, {
        children: "abort"
      }), " if they only reached PreCommit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2pc-vs-3pc-comparison",
      children: "2PC vs 3PC Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2PC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3PC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (Prepare, Commit/Abort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (CanCommit, PreCommit, DoCommit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message rounds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → coordinator failure blocks participants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → participants can abort on timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network latency tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One extra round-trip vs 3PC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher latency due to extra round-trip"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinator writes decision to log; participants probe on reconnect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Participants can unilaterally decide on timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Survivability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single coordinator failure can halt the system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survives coordinator failure (within window)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short transactions, reliable network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long transactions, unreliable network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widely used (PostgreSQL, Oracle, MS SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (needs precise timeout configuration)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Commit latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 × RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3 × RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State machine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 states (INIT, PREPARED, COMMIT/ABORT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 states (INIT, READY, PRE_COMMIT, COMMIT, ABORT)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use 2PC vs 3PC"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use 2PC"
        }), " when: network is reliable, coordinator is stable, transactions are short (seconds), and you want minimum latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use 3PC"
        }), " when: network is unreliable, coordinator may fail, transactions are long (minutes), and blocking is unacceptable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "176-distributed-query-processing",
      children: "17.6 Distributed Query Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A global query must be decomposed into site-local sub-queries, executed in parallel, and the results combined."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-package-delivery-network",
      children: "Real-World Analogy: Package Delivery Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A package delivery company has regional warehouses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer queries: \"Find all packages from New York to London that are delayed\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each regional warehouse (Site) checks its local database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The central system combines results"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-join optimization"
        }), ": Instead of sending all shipments from NY to the London system, NY sends only the tracking IDs of NY-origin packages. London checks only those IDs against its local database. Result: minimal data transfer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-distributed-query-processing",
      children: "Numbered Steps (Distributed Query Processing)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parsing"
        }), ": Parse the global SQL query into a parse tree"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation elimination"
        }), ": Replace global table references with fragment definitions using global catalog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query decomposition"
        }), ": Break the global query into sub-queries, one per site involved"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data localization"
        }), ": Determine which data is at which site from the catalog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimization"
        }), ": Choose the best execution plan (semi-joins, join order, shipping strategy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sub-query execution"
        }), ": Send optimized sub-queries to each site for local execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result assembly"
        }), ": Combine partial results at the coordinator site"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE distributed_query_processing(global_query)\n    // Step 1: Parse\n    parse_tree = PARSE_SQL(global_query)\n\n    // Step 2: Look up fragmentation schema\n    catalog = GET_GLOBAL_CATALOG()\n\n    // Step 3: Decompose into site-specific sub-queries\n    sub_queries = {}\n    FOR EACH table IN parse_tree.tables:\n        fragments = catalog.get_fragments(table)\n        FOR EACH (site_id, fragment) IN fragments:\n            sub_query = GENERATE_SITE_QUERY(parse_tree, fragment)\n            sub_queries[site_id].add(sub_query)\n        END FOR\n    END FOR\n\n    // Step 4: Optimize with semi-join\n    optimized = APPLY_SEMI_JOIN(sub_queries, catalog)\n\n    // Step 5: Execute in parallel\n    results = PARALLEL_EXECUTE(optimized.sub_queries)\n\n    // Step 6: Combine\n    final_result = COMBINE(results, parse_tree.join_conditions)\n    RETURN final_result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Distributed Query"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Query: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT e.name, d.name FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE e.salary > 100000"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Catalog:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "employees"
        }), " horizontally fragmented by department: Site1 (Sales), Site2 (Eng)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "departments"
        }), " fully replicated at all sites"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Transferred"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse query, identify tables: employees (e), departments (d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog lookup: employees → Site1 (Sales rows), Site2 (Eng rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizer: use semi-join approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site1 sub-query: SELECT * FROM emp_sales WHERE salary > 100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site1 processes locally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site2 sub-query: SELECT * FROM emp_eng WHERE salary > 100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Site2 processes locally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each site also queries local departments for names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer results to coordinator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~filtered rows only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinator merges and returns to client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final result set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semi-Join Optimization Detailed Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without semi-join:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Site1 sends entire emp_sales table to Site2 → Network: 10MB\nSite2 does join locally → Result returned\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With semi-join:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Site1 sends only e.dept_id values (projection) to Site2 → Network: 0.1MB\nSite2 returns only matching rows → Network: 1MB\nSite1 joins received rows with local departments → Total: 1.1MB (89% savings)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation"
      }), " (Distributed Query Planner):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <functional>\n#include <map>\n#include <set>\n\nstruct SiteQuery {\n    std::string site_id;\n    std::string sql;\n    std::vector<std::string> projection;\n};\n\nclass DistributedQueryPlanner {\nprivate:\n    std::map<std::string, std::vector<std::string>> catalog;\n    // catalog: {table_name: [site1, site2, ...]}\n\npublic:\n    DistributedQueryPlanner(const std::map<std::string, std::vector<std::string>>& cat)\n        : catalog(cat) {}\n\n    std::vector<SiteQuery> plan(const std::string& table,\n                                 const std::string& condition,\n                                 const std::vector<std::string>& columns) {\n\n        std::vector<SiteQuery> plan;\n\n        if (catalog.find(table) == catalog.end()) {\n            std::cerr << \"Table \" << table << \" not in catalog\\n\";\n            return plan;\n        }\n\n        for (const auto& site : catalog[table]) {\n            SiteQuery sq;\n            sq.site_id = site;\n            sq.projection = columns;\n\n            std::string cols;\n            for (size_t i = 0; i < columns.size(); ++i) {\n                if (i > 0) cols += \", \";\n                cols += columns[i];\n            }\n\n            sq.sql = \"SELECT \" + cols + \" FROM \" + table\n                     + \" WHERE \" + condition;\n            plan.push_back(sq);\n        }\n\n        return plan;\n    }\n\n    std::vector<SiteQuery> optimize_with_semijoin(\n        const std::string& fact_table,    // e.g., orders\n        const std::string& dim_table,     // e.g., customers\n        const std::string& join_key,\n        const std::string& condition,\n        const std::vector<std::string>& columns) {\n\n        std::vector<SiteQuery> plan;\n\n        // Step 1: Get join key projection from each fact site\n        std::map<std::string, std::string> fact_sites;\n        if (catalog.find(fact_table) != catalog.end()) {\n            for (const auto& site : catalog[fact_table]) {\n                SiteQuery sq;\n                sq.site_id = site;\n                sq.sql = \"SELECT DISTINCT \" + join_key\n                         + \" FROM \" + fact_table\n                         + \" WHERE \" + condition;\n                sq.projection = {join_key};\n                plan.push_back(sq);\n                fact_sites[site] = fact_table;\n            }\n        }\n\n        // Step 2: Dimension site filters by received keys\n        if (catalog.find(dim_table) != catalog.end()) {\n            for (const auto& site : catalog[dim_table]) {\n                SiteQuery sq;\n                sq.site_id = site;\n                std::string cols;\n                for (size_t i = 0; i < columns.size(); ++i) {\n                    if (i > 0) cols += \", \";\n                    cols += columns[i];\n                }\n                // Semi-join: filter by join key\n                sq.sql = \"SELECT \" + cols + \" FROM \" + dim_table\n                         + \" WHERE \" + join_key + \" IN :received_keys\";\n                sq.projection = columns;\n                plan.push_back(sq);\n            }\n        }\n\n        return plan;\n    }\n};\n\nint main() {\n    // Catalog: which tables are at which sites\n    std::map<std::string, std::vector<std::string>> catalog = {\n        {\"orders\", {\"Site1\", \"Site2\"}},\n        {\"customers\", {\"Site3\"}}\n    };\n\n    DistributedQueryPlanner planner(catalog);\n\n    auto plan = planner.plan(\"orders\", \"order_date > '2024-01-01'\",\n                             {\"order_id\", \"customer_id\", \"total\"});\n\n    std::cout << \"=== Query Plan (No Optimization) ===\\n\";\n    for (const auto& sq : plan) {\n        std::cout << \"  \" << sq.site_id << \": \" << sq.sql << \"\\n\";\n    }\n\n    // Semi-join optimization\n    auto opt_plan = planner.optimize_with_semijoin(\n        \"orders\", \"customers\", \"customer_id\",\n        \"order_date > '2024-01-01'\",\n        {\"customer_id\", \"name\", \"email\"});\n\n    std::cout << \"\\n=== Query Plan (With Semi-Join) ===\\n\";\n    for (const auto& sq : opt_plan) {\n        std::cout << \"  \" << sq.site_id << \": \" << sq.sql << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Tuple, Optional\n\n\nclass SiteQuery:\n    def __init__(self, site_id: str, sql: str, projection: List[str]):\n        self.site_id = site_id\n        self.sql = sql\n        self.projection = projection\n\n\nclass DistributedQueryPlanner:\n    def __init__(self, catalog: Dict[str, List[str]]):\n        self.catalog = catalog  # {table_name: [site1, site2, ...]}\n\n    def plan(self, table: str, condition: str,\n             columns: List[str]) -> List[SiteQuery]:\n        if table not in self.catalog:\n            raise ValueError(f\"Table {table} not in catalog\")\n\n        plan = []\n        for site in self.catalog[table]:\n            cols = \", \".join(columns)\n            sql = f\"SELECT {cols} FROM {table} WHERE {condition}\"\n            plan.append(SiteQuery(site, sql, columns))\n        return plan\n\n    def optimize_with_semijoin(self, fact_table: str, dim_table: str,\n                                join_key: str, condition: str,\n                                columns: List[str]) -> List[SiteQuery]:\n        plan = []\n\n        # Step 1: Project join keys at fact sites\n        if fact_table in self.catalog:\n            for site in self.catalog[fact_table]:\n                sql = f\"SELECT DISTINCT {join_key} FROM {fact_table} WHERE {condition}\"\n                plan.append(SiteQuery(site, sql, [join_key]))\n\n        # Step 2: Filter at dimension sites using semi-join\n        if dim_table in self.catalog:\n            for site in self.catalog[dim_table]:\n                cols = \", \".join(columns)\n                sql = f\"SELECT {cols} FROM {dim_table} WHERE {join_key} IN :keys\"\n                plan.append(SiteQuery(site, sql, columns))\n\n        return plan\n\n\nif __name__ == \"__main__\":\n    catalog = {\n        \"orders\": [\"Site1\", \"Site2\"],\n        \"customers\": [\"Site3\"],\n    }\n\n    planner = DistributedQueryPlanner(catalog)\n\n    # Without optimization\n    print(\"=== Query Plan (No Optimization) ===\")\n    for sq in planner.plan(\"orders\", \"order_date > '2024-01-01'\",\n                           [\"order_id\", \"customer_id\", \"total\"]):\n        print(f\"  {sq.site_id}: {sq.sql}\")\n\n    # With semi-join\n    print(\"\\n=== Query Plan (With Semi-Join) ===\")\n    for sq in planner.optimize_with_semijoin(\n            \"orders\", \"customers\", \"customer_id\",\n            \"order_date > '2024-01-01'\",\n            [\"customer_id\", \"name\", \"email\"]):\n        print(f\"  {sq.site_id}: {sq.sql}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q = query length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catalog lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C = catalog entries, indexed by table name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decomposition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S × T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = sites, T = tables in query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semi-join optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S × J)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S × key_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J = join conditions; keys are much smaller than full rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N_site × log N_site)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(result_set)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each site processes its fragment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result assembly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R × S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = total result rows from all sites"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why semi-join reduces network cost from O(rows × row_width) to O(rows_distinct × key_width)?"
      }), " Instead of shipping full rows (say, 100 bytes each) across sites, semi-join ships only distinct join column values (say, 4 bytes each). For a table with 1M rows but only 10K distinct join keys, network savings = (100 × 1M) / (4 × 10K) = 2500× reduction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
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
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-queries execute simultaneously at all sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skew: one slow site delays the entire query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter before shipping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replication may cause redundant work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semi-join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatically reduces data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only effective when join selectivity is high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can choose between ship-join or ship-whole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding optimal plan is NP-hard in general"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "177-homogeneous-vs-heterogeneous-distributed-databases",
      children: "17.7 Homogeneous vs Heterogeneous Distributed Databases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Homogeneous DDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heterogeneous DDB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DBMS software"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same at all sites (e.g., all PostgreSQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different per site (Oracle, MySQL, MongoDB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global schema is union of local schemas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema mapping/translation required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single SQL dialect across all sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translation between dialects needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction coordination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native 2PC/3PC across the same DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires gateway/middleware (e.g., X/Open XA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single model (e.g., relational everywhere)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple models (relational + document + graph)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable, uniform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable per site, translation overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single vendor licensing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple vendor licensing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-uniform; weakest link bottlenecks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle RAC, Citus (PostgreSQL sharding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federated databases, Polybase, Presto/Trino"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world apps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region deployment of same DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mergers & acquisitions (different legacy systems)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heterogeneous DDB Challenges"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic heterogeneity"
        }), ": \"customer_id\" means different things in different systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query translation"
        }), ": MySQL ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LIMIT"
        }), " vs Oracle ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROWNUM"
        }), " vs SQL Server ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TOP"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction semantics"
        }), ": Different isolation levels, locking mechanisms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type mapping"
        }), ": DATE formats, character encodings, numeric precision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security integration"
        }), ": Different auth mechanisms, audit trails"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Heterogeneous query example (conceptual, via FDW or gateway):\n-- Oracle at Site1, PostgreSQL at Site2\nSELECT e.name, e.salary\nFROM oracle_link.employees e\nJOIN pg_link.departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 100000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "178-distributed-vs-centralized-database-comparison",
      children: "17.8 Distributed vs Centralized Database Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Centralized Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distributed Database"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single system with local/remote clients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple interconnected sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Across multiple physical locations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical (upgrade hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (add nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (replication, failover)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (single copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (CAP trade-offs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable, no network delays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-site queries have latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network dependency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAN only (or local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAN latency, partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple DBA administration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed monitoring, coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (single system)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (multiple servers, network)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single perimeter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple perimeters, cross-site auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data freshness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica lag possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID (single node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited ACID (2PC overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small to medium applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global-scale applications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "179-distributed-database-design",
      children: "17.9 Distributed Database Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fragmentation-criteria",
      children: "Fragmentation Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Correctness rules for fragmentation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completeness"
        }), ": Every data item must belong to at least one fragment (no data loss)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reconstruction"
        }), ": Original table must be reconstructable from fragments (UNION or JOIN)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disjointness"
        }), ": Fragments should not overlap (except key in vertical fragmentation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "allocation-strategies",
      children: "Allocation Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-replicated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each fragment at exactly one site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizing storage, simple updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully replicated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every fragment at every site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-heavy, small datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partially replicated"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some fragments at multiple sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clustered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related fragments at same site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reducing distributed joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragments at geographically close sites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency local access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "replication-decisions",
      children: "Replication Decisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Factors influencing replication:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-to-write ratio"
        }), ": High read frequency → more replicas"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency requirements"
        }), ": Strong consistency → synchronous replication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage budget"
        }), ": Limited storage → partial replication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure tolerance"
        }), ": Critical data → higher replication factor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network topology"
        }), ": High bandwidth → more aggressive replication"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1710-cap-theorem-in-practice",
      children: "17.10 CAP Theorem in Practice"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Style"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CAP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL (single)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not distributed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL (streaming replicas)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP/AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async replicas = AP; sync = CP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be configured"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition → some unavailable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Spanner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NewSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueTime + Paxos gives \"effectively CA\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CockroachDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NewSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spanner-inspired with HLC"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PACELC Extension"
      }), ": If partition (P), choose A or C; Else (E), choose L(atency) or C(onsistency)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cassandra: PC/EC (partition → availability; else → latency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spanner: PC/EC (partition → consistency; else → latency via TrueTime)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1711-consistency-in-distributed-systems",
      children: "17.11 Consistency in Distributed Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strong Consistency (Linearizability)"
      }), ": Every read sees the latest write."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eventual Consistency"
      }), ": Given enough time without updates, all replicas converge."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Causal Consistency"
      }), ": Operations causally related are seen in order; concurrent operations may be seen in any order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Read-Your-Writes Consistency"
      }), ": After a write, subsequent reads from the same client see the new value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quorum-Based Consistency (Dynamo-style)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N = total replicas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W = number of replicas to acknowledge a write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R = number of replicas to read from"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Condition for strong consistency: R + W > N"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: N=3, W=2, R=2 → Strong consistency (2+2=4 > 3)\n         N=3, W=1, R=1 → Weak consistency (1+1=2 ≤ 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency Model Spectrum"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stronger ← -----------------------------------------------------------------→ Weaker\n         Linearizability → Sequential → Causal → PRAM → Read-Your-Writes → Eventual\n         (hardest)                                                       (easiest)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1712-interview-corner",
      children: "17.12 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-why-is-2pc-called-a-blocking-protocol",
      children: "Q1: Why is 2PC called a blocking protocol?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": 2PC is blocking because if the coordinator fails after sending PREPARE but before sending the decision (COMMIT/ABORT), participants are stuck in an uncertain state. They hold locks on the transaction's resources, cannot decide whether to commit or abort independently, and must wait for the coordinator to recover. This can block other transactions indefinitely. Example scenario:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator sends PREPARE to all participants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All participants vote YES and enter PREPARED state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinator crashes before sending COMMIT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each participant is blocked → it has voted YES and cannot unilaterally abort (violates atomicity), but cannot commit without coordinator's decision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All resources locked by this transaction are unavailable until coordinator restarts and consults its log"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-how-does-the-cap-theorem-apply-to-distributed-databases",
      children: "Q2: How does the CAP theorem apply to distributed databases?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The CAP theorem states that a distributed system can provide at most two of three properties simultaneously: Consistency (C), Availability (A), and Partition Tolerance (P)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CP systems"
        }), ": Choose consistency and partition tolerance. During a partition, some nodes become unavailable to prevent stale reads. Example: MongoDB (default), HBase."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AP systems"
        }), ": Choose availability and partition tolerance. During a partition, all nodes remain available but may return stale data. Example: Cassandra, DynamoDB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CA systems"
        }), ": Choose consistency and availability, but since partitions are inevitable in distributed systems, CA is only achievable in a single-node system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight"
      }), ": Network partitions are not optional → they will happen. So the real choice is between CP and AP, not CA. All distributed databases must handle P."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PACELC extension"
      }), ": Even without partitions (Else), there's a trade-off between Latency (L) and Consistency (C)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-how-does-distributed-deadlock-detection-work",
      children: "Q3: How does distributed deadlock detection work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Distributed deadlock occurs when transactions at different sites hold locks that each other needs. Detection approaches:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Centralized detector"
        }), ": One site maintains the global wait-for graph (WFG). All sites send lock information to it. Cycles in the WFG indicate deadlock."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hierarchical"
        }), ": Sites form a hierarchy; each level aggregates WFG from below."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed (path-pushing)"
        }), ": Sites exchange wait-for information. Each site builds a local WFG and sends it to neighbors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction T1 at Site A locks X, waits for Y (locked by T2 at Site B)\nTransaction T2 at Site B locks Y, waits for X (locked by T1 at Site A)\n\nCentralized WFG:\n  T1(A) → T2(B) (T1 waits for T2)\n  T2(B) → T1(A) (T2 waits for T1)\n  Cycle detected → abort one transaction (typically the youngest)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deadlock prevention"
      }), " vs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detection"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prevention"
        }), ": Lock all resources at transaction start (pessimistic) or use wound-wait/wait-die (better)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection"
        }), ": Allow deadlocks to happen, detect cycles, abort victims (optimistic, preferred in distributed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-what-are-the-criteria-for-choosing-a-data-fragmentation-strategy",
      children: "Q4: What are the criteria for choosing a data fragmentation strategy?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Key criteria for fragmentation design:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Questions to Ask"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which rows/columns are accessed most? Place them locally."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access locality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can queries be satisfied from a single fragment?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join patterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which tables are frequently joined? Keep them co-located."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently updated data benefits from smaller fragments."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy/security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive columns should be vertically fragmented separately."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some sites may have limited capacity."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query response time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries that need fast response should avoid distributed joins."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heuristic"
      }), ": If 80% of queries access 20% of the data, use horizontal fragmentation by that 20% access pattern. If different user groups access different columns, use vertical fragmentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q5-what-is-the-difference-between-eager-and-lazy-replication",
      children: "Q5: What is the difference between eager and lazy replication?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Eager (synchronous) replication updates all replicas within the same transaction, providing strong consistency but higher latency. Lazy (asynchronous) replication updates one replica and propagates changes later, providing eventual consistency but lower latency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eager"
      }), ": Write to replica 1 → Write to replica 2 → Write to replica 3 → All acknowledge → Commit. Slower but consistent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lazy"
      }), ": Write to replica 1 → Commit immediately → Background propagate to replicas 2, 3. Faster but temporary inconsistencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1713-applications-in-real-systems",
      children: "17.13 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-spanner",
      children: "Google Spanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spanner is Google's globally-distributed SQL database."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External consistency (linearizability) across global deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clock sync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueTime API → atomic clocks + GPS for globally-ordered timestamps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paxos-based synchronous replication (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-version concurrency control with globally-ordered timestamps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL with distributed joins, transactions, schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP classification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP (partition → refuse writes to minority)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key insight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueTime bounds clock uncertainty (ε = 1-7ms), enabling commit ordering without centralized coordination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Spanner matters"
      }), ": Before Spanner, global-scale SQL with serializable transactions was considered impossible. TrueTime's bounded clock uncertainty allows Spanner to assign commit timestamps that respect real-time ordering, achieving \"effectively CA\" behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-dynamodb",
      children: "Amazon DynamoDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fully managed NoSQL key-value and document database."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual (default) or strong (optional, 1s SLA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ, cross-region replication (async)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing with automatic split"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD-backed, log-structured merge trees (LSM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic locking with conditional writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP classification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP (availability optimized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key insight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key design determines access patterns; avoids joins by design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why DynamoDB matters"
      }), ": Influenced by the original Dynamo paper (2007), DynamoDB popularized the developer-friendly managed NoSQL model. Its \"single-digit millisecond\" latency at any scale proved AP systems can be production-grade."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "apache-cassandra",
      children: "Apache Cassandra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open-source, decentralized, wide-column NoSQL database."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (ANY, ONE, QUORUM, ALL, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable per keyspace (SimpleStrategy, NetworkTopologyStrategy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing with virtual nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cluster management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gossip protocol for peer discovery; no single point of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit log → MemTable → SSTable (append-only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP classification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP (designed for availability + partition tolerance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key insight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node is equal → no master. Linear writes scale by adding nodes."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Cassandra matters"
      }), ": Cassandra demonstrated that a decentralized AP system can handle petabytes across hundreds of nodes with no downtime during node failures. Used by Netflix, Apple, Instagram."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cockroachdb",
      children: "CockroachDB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open-source, Spanner-inspired, distributed SQL database."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serializable isolation (strong)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clock sync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Logical Clocks (HLC) → no hardware clocks needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft consensus (synchronous)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range-based with automatic rebalancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL-compatible wire protocol and SQL dialect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP classification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP (strong consistency during partitions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key insight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HLC combines physical + logical time to provide causality tracking without TrueTime's hardware dependency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why CockroachDB matters"
      }), ": CockroachDB made Spanner-class distributed SQL accessible to everyone. By using HLC instead of TrueTime, it achieves similar guarantees on commodity hardware. Its PostgreSQL compatibility allows migration without rewriting applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "summary-comparison-of-real-systems",
      children: "Summary Comparison of Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spanner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CockroachDB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NewSQL (SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoSQL (KV/Doc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NoSQL (Wide-column)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NewSQL (SQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open source"
            })
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
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (external)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (eventual or strong)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (serializable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paxos (sync)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ (async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (sync or async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft (sync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partitioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TrueTime (GPS + atomic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HLC (NTP + logical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global finance, ads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce carts, gaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, IoT, messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region OLTP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-171-fragmentation-design",
      children: "Example 17.1: Fragmentation Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An e-commerce database with tables: customers, orders, order_items."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Horizontal fragmentation by region\n-- Site US: customers from North America\nCREATE TABLE customers_us AS\n  SELECT * FROM customers WHERE region = 'NA';\n\n-- Site EU: customers from Europe\nCREATE TABLE customers_eu AS\n  SELECT * FROM customers WHERE region = 'EU';\n\n-- Vertical fragmentation for privacy (GDPR)\n-- Site EU (public): limited customer data\nCREATE VIEW customer_eu_public AS\n  SELECT customer_id, name, city FROM customers_eu;\n\n-- Site EU (secure): sensitive data\nCREATE TABLE customer_eu_private AS\n  SELECT customer_id, email, phone, credit_card FROM customers_eu;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-172-distributed-query-with-semi-join",
      children: "Example 17.2: Distributed Query with Semi-Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Query: Find customers who ordered in the last 30 days\n-- Site A stores customers, Site B stores orders\n\n-- Without semi-join:\n-- Site B: Transfer all recent orders to Site A\n\n-- With semi-join optimization:\n-- Step 1: Site B sends only customer_ids to Site A\nSELECT DISTINCT customer_id FROM orders WHERE order_date > NOW() - INTERVAL '30 days';\n\n-- Step 2: Site A filters customers by those IDs, returns matches\nSELECT * FROM customers WHERE customer_id IN (received_ids);\n\n-- Step 3: Combine at coordinator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-173-2pc-implementation-conceptual",
      children: "Example 17.3: 2PC Implementation (Conceptual)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TwoPhaseCommit:\n    def __init__(self, coordinator, participants):\n        self.coordinator = coordinator\n        self.participants = participants\n\n    def execute(self, transaction):\n        responses = []\n        for p in self.participants:\n            response = p.prepare(transaction)\n            responses.append(response)\n        if all(r == \"YES\" for r in responses):\n            for p in self.participants:\n                p.commit(transaction)\n            return \"COMMITTED\"\n        else:\n            for p in self.participants:\n                p.abort(transaction)\n            return \"ABORTED\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed transactions (2PC) are expensive"
        }), " → design data model for single-node locality in most operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quorum-based systems give tunable consistency"
        }), " → R + W > N for strong, R + W <= N for availability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal for scale, vertical for security"
        }), " → horizontal fragmentation distributes load; vertical isolates sensitive columns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-joins are the distributed query superpower"
        }), " → they minimize network data transfer by sending only join keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network partitions happen more often than you think"
        }), " → design for P by choosing CP or AP based on business requirements."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full replication is expensive at scale"
        }), " → use partial replication with quorum for most workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heterogeneous systems need schema mapping"
        }), " → plan for semantic and syntactic translation overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3PC avoids 2PC's blocking problem"
        }), " → but adds a round-trip of latency. Use it only when blocking risk outweighs latency cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.1:"
        }), " Distributed databases store data across multiple physical locations while presenting a single logical database to users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.2:"
        }), " Fragmentation splits data horizontally (by rows) or vertically (by columns) or both (hybrid) across sites."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.3:"
        }), " Replication maintains copies of data (full or partial) across sites for availability and read scaling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.4:"
        }), " Transparency hides distribution details → location, fragmentation, replication, and failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.5:"
        }), " 2PC coordinates distributed transactions but blocks on coordinator failure; 3PC is non-blocking but slower."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.6:"
        }), " Distributed query processing uses semi-joins to reduce network data transfer across nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.7:"
        }), " Homogeneous DDBs use the same DBMS everywhere; heterogeneous DDBs require translation between different systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.8:"
        }), " Centralized DBs are simpler but less scalable; distributed DBs scale horizontally at higher complexity cost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.9:"
        }), " CAP theorem forces a choice between consistency and availability during partitions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "17.10:"
        }), " Real systems (Spanner, DynamoDB, Cassandra, CockroachDB) make different CAP trade-offs and consistency choices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fragmentation-types",
      children: "Fragmentation Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Horizontal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hybrid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Splits by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns (key preserved)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows then columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection (σ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projection (π)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ then π"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reconstruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested UNION + JOIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Privacy benefit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query benefit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer rows per site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer columns per scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer rows AND columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Update cost"
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
              children: "Storage overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key duplicated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key duplicated per split"
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "replication-strategies",
      children: "Replication Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Replication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partial Replication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data per site"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset of data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N × total_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R × avg_data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every site serves any query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only sites with data serve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update all N replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update R replicas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fault tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss of any site is fine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss of only copy = data loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both read/write scalable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2pc-vs-3pc",
      children: "2PC vs 3PC"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2PC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3PC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 RTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3 RTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 participant states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 participant states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widespread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "homogeneous-vs-heterogeneous",
      children: "Homogeneous vs Heterogeneous"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Homogeneous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heterogeneous"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DBMS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different per site"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single global schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema mapping needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single dialect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-dialect translation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "distributed-vs-centralized",
      children: "Distributed vs Centralized"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Centralized"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distributed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher with replication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (CAP trade-off)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transparency-types",
      children: "Transparency Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Hides"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical site of data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write queries without site names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data is split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query full logical tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple copies exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One logical copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries complete despite failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serializable isolation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Distributed DB Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting data across sites (horizontal, vertical, hybrid)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintaining copies of data for availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transparency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiding distribution details from users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-phase commit protocol for distributed transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-phase commit → non-blocking alternative to 2PC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semi-join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced data transfer by sending only join keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency, Availability, Partition Tolerance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PACELC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP extension: if partition (P) choose A/C; else choose L/C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quorum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum nodes that must agree (R + W > N for strong)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TrueTime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google's GPS + atomic clock global time service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HLC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid Logical Clock → combines physical + logical time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gossip Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer-to-peer state dissemination (Cassandra)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Raft / Paxos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus algorithms for distributed agreement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
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
              children: "Horizontal Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-region deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data close to users reduces latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-shard transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures atomic updates across nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quorum Reads/Writes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, DynamoDB, Riak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable consistency for different needs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semi-joins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed query engines (Presto, Spark)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes network shuffle during large joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CAP Design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All distributed systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental trade-off shaping architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gossip Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra, Redis Cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node discovery without centralized metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TrueTime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Spanner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global serializable transactions without central coordinator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HLC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CockroachDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Causality tracking without hardware clocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Raft Consensus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CockroachDB, etcd, Consul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proven leader election + log replication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1711-typescript-sharding--consistency-protocol-simulator",
      children: "17.11 TypeScript Sharding & Consistency Protocol Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code below simulates distributed database concepts: sharding, replication, quorum-based reads/writes, and the Raft-like consensus."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Distributed Database Simulator — TypeScript\n// ============================================================\n\ninterface ShardConfig {\n  shardKey: string;\n  ranges: Array<{ min: number; max: number; nodeIds: number[] }>;\n}\n\nclass ShardManager {\n  private nodes = new Map<number, Map<string, string>>();\n  private config: ShardConfig;\n\n  constructor(config: ShardConfig) {\n    this.config = config;\n    for (const range of config.ranges) {\n      for (const nodeId of range.nodeIds) {\n        if (!this.nodes.has(nodeId)) this.nodes.set(nodeId, new Map());\n      }\n    }\n  }\n\n  getShardForKey(key: string): { nodeIds: number[] } | undefined {\n    const hash = this.hashKey(key);\n    return this.config.ranges.find(r => hash >= r.min && hash < r.max);\n  }\n\n  private hashKey(key: string): number {\n    let hash = 0;\n    for (let i = 0; i < key.length; i++) {\n      hash = ((hash << 5) - hash) + key.charCodeAt(i);\n      hash = hash & hash; // Convert to 32-bit integer\n    }\n    return Math.abs(hash) % 1000;\n  }\n\n  write(key: string, value: string): string {\n    const shard = this.getShardForKey(key);\n    if (!shard) return 'ERROR: No shard found for key';\n    const w = shard.nodeIds.length; // Write to all replicas\n    for (const nodeId of shard.nodeIds) {\n      this.nodes.get(nodeId)!.set(key, value);\n    }\n    return 'OK — written to ' + w + ' replica(s)';\n  }\n\n  read(key: string): string | null {\n    const shard = this.getShardForKey(key);\n    if (!shard) return null;\n    // Read from first available replica\n    for (const nodeId of shard.nodeIds) {\n      const val = this.nodes.get(nodeId)?.get(key);\n      if (val !== undefined) return val;\n    }\n    return null;\n  }\n\n  // Simulate quorum read (read from majority for consistency)\n  quorumRead(key: string, totalNodes: number): { value: string | null; consistency: boolean } {\n    const shard = this.getShardForKey(key);\n    if (!shard) return { value: null, consistency: false };\n    const responses = new Map<string, number>();\n    for (const nodeId of shard.nodeIds) {\n      const val = this.nodes.get(nodeId)?.get(key);\n      if (val !== undefined) {\n        responses.set(val, (responses.get(val) || 0) + 1);\n      }\n    }\n    const quorum = Math.floor(totalNodes / 2) + 1;\n    for (const [val, count] of responses) {\n      if (count >= quorum) return { value: val, consistency: true };\n    }\n    // No quorum — return latest but mark inconsistent\n    const latest = [...responses.entries()].sort((a, b) => b[1] - a[1])[0];\n    return { value: latest?.[0] || null, consistency: false };\n  }\n\n  printDistribution(): void {\n    console.log('Data Distribution:');\n    for (const [nodeId, data] of this.nodes) {\n      console.log('  Node ' + nodeId + ': ' + data.size + ' keys — ' + [...data.keys()].join(', '));\n    }\n  }\n}\n\n// Demo\nconsole.log('=== Distributed DB Simulator ===\\n');\nconst shardManager = new ShardManager({\n  shardKey: 'user_id',\n  ranges: [\n    { min: 0, max: 333, nodeIds: [1, 2] },\n    { min: 333, max: 666, nodeIds: [3, 4] },\n    { min: 666, max: 1000, nodeIds: [5, 6] },\n  ]\n});\n\nshardManager.write('Alice', '{balance: 1000}');\nshardManager.write('Bob', '{balance: 2000}');\nshardManager.write('Charlie', '{balance: 3000}');\nshardManager.printDistribution();\n\nconsole.log('\\nQuorum read for Alice:');\nconst result = shardManager.quorumRead('Alice', 6);\nconsole.log('  Value: ' + result.value + ', Consistent: ' + result.consistency);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Distributed DB Consistency Levels"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Consistency Spectrum\"\n        S[Strong<br/>Linearizability] --> C[Causal<br/>Consistency]\n        C --> E[Eventual<br/>Consistency]\n        E --> R[Read-Your-Writes]\n        R --> M[Monotonic Reads]\n    end\n    subgraph \"Trade-offs\"\n        SP[Slower writes<br/>Higher latency] --> S\n        E --> FP[Faster writes<br/>Lower latency<br/>Stale reads possible]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In distributed databases, horizontal partitioning is also known as:\na) Normalization\nb) Sharding\nc) Denormalization\nd) Indexing"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Two-Phase Commit (2PC) protocol ensures:\na) Eventual consistency\nb) Atomic commitment across multiple nodes\nc) Faster query execution\nd) Automatic failover"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quorum-based replication uses the formula W + R > N where:\na) W = writes, R = reads, N = nodes\nb) W = worker threads, R = replicas, N = network\nc) W = wait time, R = retry count, N = number of attempts\nd) W = weight, R = reliability, N = noise"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main challenge of distributed transactions is:\na) Increased storage cost\nb) Coordinating atomicity across independent nodes\nc) Slower query parsing\nd) Lack of SQL support"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-b, 12-b, 13-a, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Horizontal fragmentation divides data by:\na) Columns\nb) Rows\nc) Data types\nd) Index types"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Two-Phase Commit protocol is vulnerable to:\na) Network partitions\nb) Coordinator failure causing blocking\nc) Slow queries\nd) Index corruption"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A semi-join reduces:\na) The number of rows in a table\nb) Network data transfer by sending only join keys\nc) The number of network nodes\nd) Query execution time through parallelism"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The quorum condition for strong consistency is:\na) R + W > N\nb) R + W < N\nc) R = W\nd) R + W = N"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which CAP choice does a single-node relational database represent?\na) CP\nb) AP\nc) CA\nd) None of the above"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Asynchronous replication provides:\na) Strong consistency with slow writes\nb) Fast writes with eventual consistency\nc) Immediate consistency across all nodes\nd) No replication at all"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main advantage of distributed databases is:\na) Simpler management\nb) Scalability and availability\nc) Lower cost\nd) Stronger consistency"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Location transparency means:\na) Users know where data is stored\nb) Users do not need to know where data is physically located\nc) Data is stored in one location\nd) Locations are encrypted"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Three-Phase Commit (3PC) improves on 2PC by:\na) Using fewer messages\nb) Adding a PreCommit phase to avoid blocking\nc) Removing the need for a coordinator\nd) Using GPS clocks"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which real system uses TrueTime for global consistency?\na) Cassandra\nb) DynamoDB\nc) Google Spanner\nd) CockroachDB"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-a, 5-c, 6-b, 7-b, 8-b, 9-b, 10-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed databases provide scalability, availability, and transparency at the cost of complexity."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragmentation"
        }), " (horizontal, vertical, hybrid) splits data across sites; each type has different performance, privacy, and reconstruction characteristics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replication"
        }), " (full, partial) provides availability but introduces consistency challenges. Full replication is write-expensive; partial is more balanced."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2PC"
        }), " enables distributed transactions but blocks on coordinator failure; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3PC"
        }), " is non-blocking but adds a round-trip."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-joins"
        }), " reduce data transfer in distributed query processing by shipping only join keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAP"
        }), " theorem guides design: choose CP or AP during partitions. PACELC extends the trade-off to normal operation (latency vs consistency)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Homogeneous"
        }), " DDBs use the same DBMS everywhere; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "heterogeneous"
        }), " requires schema and query translation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparency"
        }), " types (location, fragmentation, replication, failure) hide distribution from users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modern systems like ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Spanner"
        }), " (TrueTime + Paxos), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DynamoDB"
        }), " (AP/tunable), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cassandra"
        }), " (AP/gossip), and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CockroachDB"
        }), " (HLC/Raft) demonstrate different approaches to distributed data management."]
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
          children: "What are the advantages and challenges of distributed databases compared to centralized databases?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between horizontal and vertical fragmentation. Give a scenario where each is appropriate."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the CAP theorem? Why can you have only two of the three properties during a network partition?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a quorum system with N=5 replicas, what values of W and R provide strong consistency?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consider an orders table with 100M rows, accessed from two data centers (NY and London). 80% of queries access orders from the local region, 20% query globally. Design a fragmentation and replication strategy. Justify your choices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Walk through the 2PC protocol for a transfer of $500 from Account A (at Site 1) to Account B (at Site 2). What happens if Site 2 crashes after sending \"YES\" but before receiving the commit? What happens if the coordinator crashes after all \"YES\" responses but before sending commits?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare eager (synchronous) and lazy (asynchronous) replication. Under what conditions would you choose each? What consistency guarantees does each provide?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a distributed query execution plan for:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            children: "SELECT e.name, d.name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 100000 AND d.location = 'NY'\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The employees table is horizontally fragmented by location at three sites. Departments is fully replicated at all sites."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare 2PC and 3PC. Under what network conditions would you choose one over the other?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain how Google Spanner achieves external consistency without centralized coordination. How does CockroachDB achieve similar guarantees without atomic clocks?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Google Spanner achieves external consistency using TrueTime. How does TrueTime work? Why is it necessary for distributed transactions? How does CockroachDB achieve similar guarantees without atomic clocks?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a distributed key-value store with the following requirements:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "N=3 replication across three data centers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support eventual consistency (W=1, R=1 for lowest latency)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support strong consistency (W=3, R=1 or W=1, R=3)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle network partitions without data loss"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Conflict resolution: last-write-wins for simple values, version vectors for complex data\nShow the read and write paths for both consistency modes."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The CAP theorem says you can't have all three. But modern systems like MongoDB (CP) and Cassandra (AP) claim to handle partitions while offering both. How do they achieve this? Is there a practical compromise that CAP doesn't fully capture? (Consider the PACELC extension.)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a distributed deadlock detector that builds a global wait-for graph from local graphs submitted by each site. Show how cycles are detected and which transaction is chosen as the victim."
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