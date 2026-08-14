"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[28099],{

/***/ 32585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_05_cloud_database_md_d9b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-05-cloud-database-md-d9b.json
const site_docs_courses_cloud_computing_05_cloud_database_md_d9b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/05-cloud-database","title":"Chapter 5: Cloud Database Services","description":"Previous Cloud Storage Services | Next Cloud Networking","source":"@site/docs/courses/cloud-computing/05-cloud-database.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/05-cloud-database","permalink":"/ai-engineering-journey/cloud-computing/05-cloud-database","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-cloud-database","slug":"/cloud-computing/05-cloud-database","title":"Chapter 5: Cloud Database Services","sidebar_label":"Chapter 5: Cloud Database Services","sidebar_position":5},"sidebar":"course-cloud-computing","previous":{"title":"Chapter 4: Cloud Storage Services","permalink":"/ai-engineering-journey/cloud-computing/04-cloud-storage"},"next":{"title":"Chapter 6: Cloud Networking","permalink":"/ai-engineering-journey/cloud-computing/06-cloud-networking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/05-cloud-database.md


const frontMatter = {
	id: '05-cloud-database',
	slug: '/cloud-computing/05-cloud-database',
	title: 'Chapter 5: Cloud Database Services',
	sidebar_label: 'Chapter 5: Cloud Database Services',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Cloud Database Services';

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
  "value": "5.1 The CAP Theorem",
  "id": "51-the-cap-theorem",
  "level": 3
}, {
  "value": "5.2 Managed Relational Databases (RDS, Cloud SQL, Azure SQL)",
  "id": "52-managed-relational-databases-rds-cloud-sql-azure-sql",
  "level": 3
}, {
  "value": "5.3 NoSQL Databases",
  "id": "53-nosql-databases",
  "level": 3
}, {
  "value": "5.4 In-Memory Caching",
  "id": "54-in-memory-caching",
  "level": 3
}, {
  "value": "5.5 Data Warehousing",
  "id": "55-data-warehousing",
  "level": 3
}, {
  "value": "5.6 Multi-Tenancy Models",
  "id": "56-multi-tenancy-models",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 5.1: Multi-AZ Deployment for HA",
  "id": "example-51-multi-az-deployment-for-ha",
  "level": 3
}, {
  "value": "Example 5.2: Connection Pooling with PgBouncer",
  "id": "example-52-connection-pooling-with-pgbouncer",
  "level": 3
}, {
  "value": "Example 5.3: Read Replica Configuration",
  "id": "example-53-read-replica-configuration",
  "level": 3
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: Read Replica Failover Manager",
  "id": "typescript-read-replica-failover-manager",
  "level": 3
}, {
  "value": "TypeScript: Database Migration Planner",
  "id": "typescript-database-migration-planner",
  "level": 3
}, {
  "value": "TypeScript: Multi-Region Latency Estimator",
  "id": "typescript-multi-region-latency-estimator",
  "level": 3
}, {
  "value": "AWS CDK: DynamoDB Table with Auto-Scaling",
  "id": "aws-cdk-dynamodb-table-with-auto-scaling",
  "level": 2
}, {
  "value": "Pulumi: RDS PostgreSQL Instance",
  "id": "pulumi-rds-postgresql-instance",
  "level": 2
}, {
  "value": "Real-World Case Study: Airbnb&#39;s Database Evolution",
  "id": "real-world-case-study-airbnbs-database-evolution",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-5-cloud-database-services",
        children: "Chapter 5: Cloud Database Services"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/04-cloud-storage",
          children: "Chapter 4: Cloud Storage Services"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/06-cloud-networking",
          children: "Chapter 6: Cloud Networking"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/cloud-computing/05-cloud-database/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/05-cloud-database/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/05-cloud-database/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/05-cloud-database/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/05-cloud-database/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/05-cloud-database/visual-explanation.png",
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
        children: "Differentiate between relational, NoSQL, in-memory, and data warehouse database services."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design migration strategies from on-premises databases to managed cloud databases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure high availability and disaster recovery for managed databases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement read replicas and connection pooling for scalability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply data encryption and network isolation to secure database access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare managed database costs against self-hosted alternatives."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the CAP theorem trade-offs when choosing between consistency and availability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain multi-tenant database isolation models in SaaS architectures."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Relational Databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS, Cloud SQL ? managed PostgreSQL/MySQL/SQL Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for structured data with ACID transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NoSQL Databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, CosmosDB, Firestore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for high-scale, flexible-schema workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-Memory Caches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElastiCache (Redis/Memcached)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-millisecond latency for hot data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Warehouses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redshift, Synapse, BigQuery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics and OLAP at scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal scaling for read-heavy workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces primary load, improves query perf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous standby replica for DR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic failover, no data loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Managed vs Self-Hosted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade-offs of operational overhead vs cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed reduces toil, costs more at high scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Tenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared, dedicated, or hybrid database per tenant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation vs cost efficiency trade-off"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Database Landscape] --> B[Relational RDS]\nA --> C[NoSQL DynamoDB]\nA --> D[Cache ElastiCache]\nA --> E[Warehouse Redshift]\nB --> F[Deployment: Multi-AZ + Read Replicas]\nC --> G[Scaling: Partitioning + TTL]\nD --> H[Patterns: Cache-Aside, Write-Through]\nE --> I[Analytics: Columnar + MPP]\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-the-cap-theorem",
      children: "5.1 The CAP Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CAP theorem states that a distributed data system can only provide two of three guarantees:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency (C):"
        }), " Every read receives the most recent write or an error."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Availability (A):"
        }), " Every request receives a non-error response, without necessarily containing the most recent write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partition Tolerance (P):"
        }), " The system continues to operate despite network partitions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since network partitions are inevitable in distributed systems (the network can always fail), you must choose between CP (Consistency + Partition Tolerance) and AP (Availability + Partition Tolerance)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"CAP Theorem Triangle\"\nCAP[CAP Theorem] --> C[\"Consistency (C)\"]\nCAP --> A[\"Availability (A)\"]\nCAP --> P[\"Partition Tolerance (P)\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    C -.-> CP[CP Systems: HBase, MongoDB]\n    A -.-> AP[AP Systems: DynamoDB, Cassandra]\n    P -.-> CA[CA Systems: Single-node RDS]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDS (Single-AZ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single node, no partition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual consistency default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cassandra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong consistency, partition tolerant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary handles writes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-managed-relational-databases-rds-cloud-sql-azure-sql",
      children: "5.2 Managed Relational Databases (RDS, Cloud SQL, Azure SQL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS RDS"
      }), " supports multiple database engines (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Amazon Aurora). Offers automated backups, patching, Multi-AZ deployments, and read replicas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automated Backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point-in-time recovery within retention window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup window uses I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous standby replica in different AZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubles costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offload read traffic (up to 15 replicas)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica lag possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Auto-Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grow storage without downtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only upward scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption at Rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS-managed encryption for data and backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal performance overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Read Replica Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Read Replica Deployment\"\nP[Primary DB] --> R1[Read Replica 1 - us-east-1a]\nP --> R2[Read Replica 2 - us-east-1b]\nP --> R3[Read Replica 3 - us-west-2a]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    APP[Application] --> P\n    WR[Web Readers] --> R1\n    WR2[Analytics] --> R2\n    WR3[Global Users] --> R3\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-nosql-databases",
      children: "5.3 NoSQL Databases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon DynamoDB:"
      }), " Fully managed, key-value and document database. Offers single-digit millisecond latency at any scale."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cosmos DB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Firestore"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-Value + Document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual / Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 consistency levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong / Eventual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto (provisioned or on-demand)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto (RU/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key lookup, secondary indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL-like, MongoDB API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time listeners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session store, gaming, IoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global apps, multi-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile apps, real-time sync"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DynamoDB Capacity Modes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provisioned:"
        }), " Specify read/write capacity units. Good for predictable workloads. Auto-scaling adjusts within limits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-Demand:"
        }), " Pay per request. Good for unpredictable workloads. Unlimited throughput but higher per-request cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface DynamoDBConfig {\ntableName: string;\npartitionKey: string;\nsortKey?: string;\ncapacityMode: \"provisioned\" | \"on-demand\";\nreadCapacityUnits?: number;\nwriteCapacityUnits?: number;\nautoScalingEnabled?: boolean;\nttlAttribute?: string;\npointInTimeRecovery?: boolean;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class DynamoDBTable {\nprivate config: DynamoDBConfig;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(config: DynamoDBConfig) {\nthis.config = config;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "estimateMonthlyCost(): number {\nif (this.config.capacityMode === \"on-demand\") {\n// On-demand: ~.25 per million write units, ~.25 per million read units\nreturn 0;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const storageGb = 10;\nconst wcu = this.config.writeCapacityUnits || 5;\nconst rcu = this.config.readCapacityUnits || 10;\n\n// WCU: .00065 per WCU per hour\n// RCU: .00013 per RCU per hour\n// Storage: .25 per GB/month\nconst writeCost = wcu * 0.00065 * 730;\nconst readCost = rcu * 0.00013 * 730;\nconst storageCost = storageGb * 0.25;\n\nreturn writeCost + readCost + storageCost;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const sessionTable = new DynamoDBTable({\ntableName: \"user-sessions\",\npartitionKey: \"sessionId\",\ncapacityMode: \"provisioned\",\nreadCapacityUnits: 50,\nwriteCapacityUnits: 25,\nautoScalingEnabled: true,\nttlAttribute: \"expiresAt\",\npointInTimeRecovery: false,\n});"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.log(\"Estimated monthly cost:\", sessionTable.estimateMonthlyCost(), \"USD\");\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-in-memory-caching",
      children: "5.4 In-Memory Caching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon ElastiCache:"
      }), " Managed Redis or Memcached for sub-millisecond data access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Caching Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache-Aside:"
        }), " Application checks cache first, fetches from DB on miss, writes to cache."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-Through:"
        }), " Data is written to cache and DB simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-Behind:"
        }), " Data is written to cache first, DB update is queued asynchronously."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\nclass CacheAsideStrategy<T> {\nprivate cache: Map<string, { data: T; expiry: number }> = new Map();\nprivate defaultTTL: number;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(defaultTTLMs: number = 300000) {\nthis.defaultTTL = defaultTTLMs;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async get(\nkey: string,\nfetchFromDb: () => Promise<T | null>,\nttlMs?: number\n): Promise<T | null> {\nconst cached = this.cache.get(key);\nif (cached && Date.now() < cached.expiry) {\nreturn cached.data;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const data = await fetchFromDb();\nif (data !== null) {\n  this.cache.set(key, {\n    data,\n    expiry: Date.now() + (ttlMs || this.defaultTTL),\n  });\n}\n\nreturn data;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "invalidate(key: string): void {\nthis.cache.delete(key);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clear(): void {\nthis.cache.clear();\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class UserService {\nprivate cache = new CacheAsideStrategy<{ id: number; name: string }>(60000);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async getUser(id: number): Promise<{ id: number; name: string } | null> {\nreturn this.cache.get(\n\"user:\" + id,\nasync () => {\nconsole.log(\"Cache miss ? fetching from database\");\nreturn { id, name: \"User_\" + id };\n}\n);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async updateUser(id: number, name: string): Promise<void> {\nconsole.log(\"Updated user\", id, \"with name\", name);\nthis.cache.invalidate(\"user:\" + id);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async function run() {\nconst service = new UserService();"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.time(\"First fetch\");\nawait service.getUser(1);\nconsole.timeEnd(\"First fetch\");"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.time(\"Cached fetch\");\nawait service.getUser(1);\nconsole.timeEnd(\"Cached fetch\");\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "run();\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-data-warehousing",
      children: "5.5 Data Warehousing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OLTP vs OLAP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OLTP (Online Transaction Processing)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OLAP (Online Analytical Processing)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Day-to-day transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business intelligence and analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many small queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few large complex queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized, star/snowflake schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions per second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query execution time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS, DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redshift, BigQuery, Snowflake"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-multi-tenancy-models",
      children: "5.6 Multi-Tenancy Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a SaaS database architecture, tenants can be isolated at different levels:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph LR\nsubgraph \"Multi-Tenant Isolation Models\"\nA[Shared Database] --> B[Separate Schema per Tenant]\nB --> C[Separate Database per Tenant]\nC --> D[Separate Server per Tenant]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"Trade-offs\"\n    E[Low cost, complex isolation] --> A\n    F[Moderate cost, good isolation] --> B\n    G[Higher cost, strong isolation] --> C\n    H[Highest cost, complete isolation] --> D\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Tenancy Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Privacy:"
        }), " Encryption per tenant, row-level security policies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Noisy Neighbors:"
        }), " Resource contention with shared databases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling:"
        }), " Can scale per tenant or globally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pricing:"
        }), " Tiered pricing per tenant to account for isolation level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SLAs:"
        }), " Availability guarantees should account for tenant isolation boundaries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-51-multi-az-deployment-for-ha",
      children: "Example 5.1: Multi-AZ Deployment for HA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\\\\bash\naws rds create-db-instance ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--db-instance-identifier my-production-db ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--db-instance-class db.r5.large ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--engine postgres ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--multi-az ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--storage-type gp3 ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--allocated-storage 100 ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--master-username admin ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--master-user-password secret123 ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--backup-retention-period 7 ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--deletion-protection\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-52-connection-pooling-with-pgbouncer",
      children: "Example 5.2: Connection Pooling with PgBouncer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\nclass ConnectionPool {\nprivate pool: string[] = [];\nprivate maxSize: number;\nprivate acquired: number = 0;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(maxSize: number = 10) {\nthis.maxSize = maxSize;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async acquire(): Promise<string> {\nif (this.pool.length > 0) {\nthis.acquired++;\nreturn this.pool.pop()!;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (this.acquired &lt; this.maxSize) {\n  this.acquired++;\n  return \"new-connection-\" + this.acquired;\n}\n\nthrow new Error(\"Connection pool exhausted\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release(connection: string): void {\nthis.acquired--;\nthis.pool.push(connection);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const pool = new ConnectionPool(5);\nasync function query(sql: string): Promise<any[]> {\nconst conn = await pool.acquire();\ntry {\nconsole.log(\"Executing query on\", conn);\nreturn [{ result: \"simulated data\" }];\n} finally {\npool.release(conn);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "query(\"SELECT * FROM users\");\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-53-read-replica-configuration",
      children: "Example 5.3: Read Replica Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\\\\bash\naws rds create-db-instance-read-replica ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--db-instance-identifier my-db-read-replica ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--source-db-instance-identifier my-production-db ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--db-instance-class db.r5.large ", (0,jsx_runtime.jsx)(_components.br, {}), "\n--region eu-west-1\n\\\\"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Match your database to your workload ? relational for ACID, NoSQL for scale, in-memory for speed, and a warehouse for analytics ? and always plan for HA with Multi-AZ deployment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For cost-sensitive applications, start with DynamoDB On-Demand or Aurora Serverless to avoid provisioning excess capacity. Switch to provisioned capacity only after your workload pattern stabilizes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Single-AZ RDS instances offer no automatic failover. A zone outage or hardware failure results in downtime. Always use Multi-AZ for production unless the application can tolerate temporary database unavailability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed relational DB with automated ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-engine support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional web apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless NoSQL key-value store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling, single-digit ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session stores, leaderboards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ElastiCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory Redis/Memcached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-ms latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redshift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar data warehouse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massively parallel processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics and BI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous standby in another AZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replica"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asynchronous read-only copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offloads read traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting, analytics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relational"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS, Aurora, Cloud SQL, Azure SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID, joins, normalized data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NoSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB, CosmosDB, Firestore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible schema, high scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ElastiCache, Memorystore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-aside, write-through patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Warehouse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redshift, BigQuery, Synapse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columnar, MPP, OLAP workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ, auto-failover, backup/restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPO seconds, RTO minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read replicas, sharding, connection pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal scale for reads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-AZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HA architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-downtime deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DR compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read Replicas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption in transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytics offload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection Pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda DB connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privileged access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption at Rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key rotation automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance (HIPAA, SOC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Managed Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower operational burden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated patching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM-based access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trails"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the CAP theorem say a distributed data system must sacrifice when a network partition occurs?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Partition Tolerance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Consistency or Availability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Durability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Performance"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Consistency or Availability.** Since network partitions are inevitable, you must choose between CP (sacrifice availability) and AP (sacrifice consistency). You cannot have all three.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which DynamoDB capacity mode is best for unpredictable workloads?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Provisioned"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) On-Demand"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reserved"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Spot"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) On-Demand.** On-Demand mode charges per request and scales automatically to handle any traffic spike. Provisioned mode requires predicting capacity in advance, which can lead to throttling or over-provisioning for unpredictable workloads.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of Multi-AZ deployment for RDS?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Faster read performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Automatic failover during an AZ outage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reduced storage costs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Data replication to a different region"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Automatic failover during an AZ outage.** Multi-AZ maintains a synchronous standby replica in a different Availability Zone. If the primary fails, RDS automatically fails over to the standby with no data loss.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the Cache-Aside pattern, what happens on a cache miss?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) An error is returned to the client"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The application fetches data from the database and writes it to the cache"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The cache automatically loads the data from the database"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The request is queued for later processing"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) The application fetches data from the database and writes it to the cache.** In cache-aside, the application is responsible for loading cache misses: check cache ? miss ? query DB ? populate cache ? return to caller.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which database type uses a denormalized star or snowflake schema?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) NoSQL database"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) In-memory cache"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) OLAP data warehouse"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Relational OLTP database"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) OLAP data warehouse.** Data warehouses like Redshift and BigQuery use denormalized schemas optimized for complex analytical queries. OLTP databases typically use normalized schemas optimized for fast transactions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-read-replica-failover-manager",
      children: "TypeScript: Read Replica Failover Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DatabaseInstance {\n  id: string;\n  role: \"primary\" | \"replica\";\n  region: string;\n  lagSeconds: number;\n  healthy: boolean;\n  promotedAt?: number;\n}\n\nclass ReadReplicaManager {\n  private instances: DatabaseInstance[] = [];\n  private primaryId: string = \"\";\n\n  constructor(instances: DatabaseInstance[]) {\n    this.instances = instances;\n    this.primaryId = instances.find((i) => i.role === \"primary\")?.id || \"\";\n  }\n\n  private getPrimary(): DatabaseInstance | undefined {\n    return this.instances.find((i) => i.id === this.primaryId);\n  }\n\n  getReplicas(): DatabaseInstance[] {\n    return this.instances.filter((i) => i.role === \"replica\");\n  }\n\n  healthCheck(): void {\n    this.instances.forEach((inst) => {\n      inst.healthy = inst.lagSeconds < 60 && Math.random() > 0.05;\n    });\n  }\n\n  promoteReplica(replicaId: string): { oldPrimary: string; newPrimary: string; downtime: number } {\n    const replica = this.instances.find((i) => i.id === replicaId);\n    if (!replica) throw new Error(\"Replica not found\");\n\n    const oldPrimary = this.primaryId;\n    replica.role = \"primary\";\n    replica.promotedAt = Date.now();\n    this.primaryId = replicaId;\n\n    const old = this.instances.find((i) => i.id === oldPrimary);\n    if (old) old.role = \"replica\";\n\n    return {\n      oldPrimary,\n      newPrimary: replicaId,\n      downtime: Math.max(0, replica.lagSeconds * 1000),\n    };\n  }\n\n  autoFailover(): { failed: boolean; promotedTo?: string; downtime?: number } {\n    const primary = this.getPrimary();\n    if (!primary || primary.healthy) return { failed: false };\n\n    const replicas = this.getReplicas()\n      .filter((r) => r.healthy)\n      .sort((a, b) => a.lagSeconds - b.lagSeconds);\n\n    if (replicas.length === 0) return { failed: true };\n\n    const bestReplica = replicas[0];\n    const result = this.promoteReplica(bestReplica.id);\n    return { failed: true, promotedTo: bestReplica.id, downtime: result.downtime };\n  }\n\n  getReadCapacity(): number { return this.getReplicas().filter((r) => r.healthy).length * 10000; }\n}\n\nconst db = new ReadReplicaManager([\n  { id: \"db-primary\", role: \"primary\", region: \"us-east-1\", lagSeconds: 0, healthy: true },\n  { id: \"db-replica-1\", role: \"replica\", region: \"us-east-1\", lagSeconds: 1, healthy: true },\n  { id: \"db-replica-2\", role: \"replica\", region: \"us-west-2\", lagSeconds: 45, healthy: true },\n  { id: \"db-replica-3\", role: \"replica\", region: \"eu-west-1\", lagSeconds: 120, healthy: true },\n]);\nconsole.log(\"Read capacity:\", db.getReadCapacity(), \"qps\");\ndb.healthCheck();\nconst failover = db.autoFailover();\nconsole.log(\"Auto-failover result:\", JSON.stringify(failover));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-database-migration-planner",
      children: "TypeScript: Database Migration Planner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DatabaseConfig {\n  engine: \"mysql\" | \"postgresql\" | \"aurora-mysql\" | \"aurora-postgresql\" | \"dynamodb\";\n  storageGB: number;\n  connections: number;\n  iops: number;\n  multiAZ: boolean;\n  backupRetentionDays: number;\n}\n\ninterface MigrationPlan {\n  source: DatabaseConfig;\n  target: DatabaseConfig;\n  strategy: \"dump-load\" | \"replication\" | \"dual-write\" | \"database-migration-service\";\n  estimatedDowntime: string;\n  risks: string[];\n}\n\nclass DatabaseMigrationPlanner {\n  private transferSpeeds: Record<string, number> = {\n    \"within-region\": 500, \"cross-region\": 50, \"on-premises-to-cloud\": 10,\n  };\n\n  plan(source: DatabaseConfig, target: DatabaseConfig, location: keyof typeof this.transferSpeeds): MigrationPlan {\n    const speed = this.transferSpeeds[location];\n    const dataTransferHours = (source.storageGB * 1024) / (speed * 60 * 60);\n\n    const isSameEngine = source.engine === target.engine ||\n      (source.engine === \"mysql\" && target.engine === \"aurora-mysql\") ||\n      (source.engine === \"postgresql\" && target.engine === \"aurora-postgresql\");\n\n    const strategy = isSameEngine\n      ? \"replication\"\n      : target.engine === \"dynamodb\"\n        ? \"dual-write\"\n        : \"database-migration-service\";\n\n    const downtimeMap: Record<string, string> = {\n      \"dump-load\": `${Math.ceil(dataTransferHours)}h`,\n      \"replication\": \"~5min\",\n      \"dual-write\": \"~1min\",\n      \"database-migration-service\": \"~15min\",\n    };\n\n    const risks: string[] = [];\n    if (source.engine !== target.engine) risks.push(\"Schema conversion required between engines\");\n    if (dataTransferHours > 24) risks.push(\"Long data transfer window exceeding 24 hours\");\n    if (!target.multiAZ && source.multiAZ) risks.push(\"HA downgrade: source has Multi-AZ but target does not\");\n    if (target.storageGB < source.storageGB) risks.push(\"Target storage smaller than source\");\n\n    return { source, target, strategy, estimatedDowntime: downtimeMap[strategy], risks };\n  }\n}\n\nconst planner = new DatabaseMigrationPlanner();\nconst plan = planner.plan(\n  { engine: \"mysql\", storageGB: 500, connections: 500, iops: 5000, multiAZ: true, backupRetentionDays: 30 },\n  { engine: \"aurora-mysql\", storageGB: 500, connections: 1000, iops: 30000, multiAZ: true, backupRetentionDays: 35 },\n  \"within-region\"\n);\nconsole.log(\"Migration plan:\", JSON.stringify(plan, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-multi-region-latency-estimator",
      children: "TypeScript: Multi-Region Latency Estimator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RegionLatency { from: string; to: string; latencyMs: number; }\ninterface BackupRetentionConfig { dailyRetention: number; weeklyRetention: number; monthlyRetention: number; yearlyRetention: number; }\n\nclass MultiRegionLatency {\n  private matrix: RegionLatency[] = [\n    { from: \"us-east-1\", to: \"eu-west-1\", latencyMs: 80 },\n    { from: \"us-east-1\", to: \"ap-southeast-1\", latencyMs: 220 },\n    { from: \"eu-west-1\", to: \"ap-southeast-1\", latencyMs: 180 },\n    { from: \"us-east-1\", to: \"us-west-2\", latencyMs: 65 },\n  ];\n\n  estimate(primary: string, replicas: string[]): { avgLatencyMs: number; maxLatencyMs: number; estimatedSyncDelay: string } {\n    const latencies = replicas.filter(r => r !== primary).map(r => {\n      const entry = this.matrix.find(m => m.from === primary && m.to === r);\n      return entry ? entry.latencyMs : 300;\n    });\n    if (latencies.length === 0) return { avgLatencyMs: 0, maxLatencyMs: 0, estimatedSyncDelay: \"0ms\" };\n    const avg = Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length);\n    const max = Math.max(...latencies);\n    return { avgLatencyMs: avg, maxLatencyMs: max, estimatedSyncDelay: `${max * 3}ms (3x round-trip)` };\n  }\n\n  backupRetentionCost(config: BackupRetentionConfig, backupSizeGB: number, costPerGBMo: number): { totalBackups: number; monthlyCost: number } {\n    const totalBackups = config.dailyRetention + config.weeklyRetention + config.monthlyRetention + config.yearlyRetention;\n    const monthlyCost = Math.round(backupSizeGB * costPerGBMo * (config.dailyRetention / 30 + config.weeklyRetention / 4 + config.monthlyRetention + config.yearlyRetention / 12) * 100) / 100;\n    return { totalBackups, monthlyCost };\n  }\n}\n\nconst mlr = new MultiRegionLatency();\nconsole.log(\"US to EU sync:\", JSON.stringify(mlr.estimate(\"us-east-1\", [\"eu-west-1\", \"ap-southeast-1\"]), null, 2));\nconsole.log(\"Backup retention:\", JSON.stringify(mlr.backupRetentionCost({ dailyRetention: 7, weeklyRetention: 4, monthlyRetention: 12, yearlyRetention: 3 }, 500, 0.023), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cloud database\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cloud database', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// cloud database - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud database' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- The CAP theorem forces a choice between consistency and availability during partitions.\n- Managed relational databases reduce operational overhead with automated backups, patching, and HA.\n- DynamoDB provides single-digit millisecond latency with auto-scaling for unpredictable workloads.\n- In-memory caches dramatically improve read performance for frequently accessed data.\n- Data warehouses optimize for complex analytical queries over large datasets.\n- Multi-tenancy isolation models range from shared databases to dedicated servers per tenant.\n- Read replicas offload read traffic and improve global performance.\n\n## Exercises\n\n### Review Questions\n\n1. Explain the CAP theorem and how it influences database selection for cloud applications.\n2. Compare DynamoDB Provisioned vs On-Demand capacity modes and when to use each.\n3. What is the difference between Multi-AZ deployment and Read Replicas?\n4. Describe the Cache-Aside pattern and its advantages over other caching strategies.\n5. How does a data warehouse differ from an OLTP database in terms of schema design and query patterns?\n6. What are the trade-offs of shared database vs separate database per tenant in SaaS?\n\n### Application Problems\n\n1. Design a database architecture for a social media app that needs low-latency profile reads, ACID transactions for payments, and real-time analytics.\n\n2. A web application experiences 10:1 read-to-write ratio. Propose an architecture using RDS and ElastiCache to handle 100,000 reads/second.\n\n3. Write a TypeScript function that chooses between DynamoDB On-Demand and Provisioned capacity based on monthly cost estimates for a given workload pattern.\n\n4. A healthcare SaaS needs per-tenant data isolation. Design a multi-tenancy model that balances HIPAA compliance requirements with cost efficiency.\n\n5. Calculate the cost of running a 2 TB data warehouse on Redshift vs BigQuery for a team of 50 analysts running 500 queries/day.\n\n### Challenge Problem\n\nDesign a global e-commerce database architecture handling 1M products, 10M users, and 100K orders/day across US, EU, and APAC. The system needs: 1) Fast product catalog reads globally, 2) ACID-compliant order processing, 3) Real-time inventory updates, 4) Analytics on sales trends, and 5) Per-region data residency compliance. Propose specific database services and replication strategies.\n\n## Database Selection Decision Flow\n\n```mermaid\ngraph TB\n    Q1{Need ACID<br/>transactions?}\n    Q1 -->|Yes| Q2{Schema changes<br/>frequently?}\n    Q1 -->|No| Q3{High read/write<br/>throughput?}\n    Q2 -->|Yes| Q4[Relational DB<br/>RDS / Aurora / Cloud SQL]\n    Q2 -->|No| Q5[Consider NoSQL<br/>or document DB]\n    Q3 -->|Yes| Q6{Need sub-ms<br/>latency?}\n    Q3 -->|No| Q7[Standard RDS<br/>with read replicas]\n    Q6 -->|Yes| Q8[In-Memory Cache<br/>ElastiCache / Memorystore]\n    Q6 -->|No| Q9[NoSQL Key-Value<br/>DynamoDB / CosmosDB]\n    Q4 --> Q10{Analytics-heavy<br/>workload?}\n    Q10 -->|Yes| Q11[Add Data Warehouse<br/>Redshift / BigQuery]\n    Q10 -->|No| Q12[Standalone RDS<br/>with Multi-AZ HA]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aws-cdk-dynamodb-table-with-auto-scaling",
      children: "AWS CDK: DynamoDB Table with Auto-Scaling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define DynamoDB infrastructure as TypeScript using the AWS CDK:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as dynamodb from \"aws-cdk-lib/aws-dynamodb\";\nimport * as cdk from \"aws-cdk-lib\";\n\nclass DatabaseStack extends cdk.Stack {\n  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {\n    super(scope, id, props);\n\n    const userSessionsTable = new dynamodb.Table(this, \"UserSessions\", {\n      partitionKey: { name: \"sessionId\", type: dynamodb.AttributeType.STRING },\n      sortKey: { name: \"createdAt\", type: dynamodb.AttributeType.STRING },\n      billingMode: dynamodb.BillingMode.PROVISIONED,\n      readCapacity: 50,\n      writeCapacity: 25,\n      encryption: dynamodb.TableEncryption.AWS_MANAGED,\n      pointInTimeRecovery: true,\n      timeToLiveAttribute: \"expiresAt\",\n      removalPolicy: cdk.RemovalPolicy.RETAIN,\n    });\n\n    userSessionsTable.autoScaleReadCapacity({\n      minCapacity: 10,\n      maxCapacity: 500,\n    }).scaleOnUtilization({ targetUtilizationPercent: 70 });\n\n    userSessionsTable.autoScaleWriteCapacity({\n      minCapacity: 5,\n      maxCapacity: 250,\n    }).scaleOnUtilization({ targetUtilizationPercent: 70 });\n\n    const ordersTable = new dynamodb.Table(this, \"Orders\", {\n      partitionKey: { name: \"customerId\", type: dynamodb.AttributeType.STRING },\n      sortKey: { name: \"orderDate\", type: dynamodb.AttributeType.STRING },\n      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,\n      encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pulumi-rds-postgresql-instance",
      children: "Pulumi: RDS PostgreSQL Instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as aws from \"@pulumi/aws\";\nimport * as pulumi from \"@pulumi/pulumi\";\n\nconst config = new pulumi.Config();\nconst dbPassword = config.requireSecret(\"dbPassword\");\n\nconst vpc = aws.ec2.getVpc({ default: true });\nconst subnets = aws.ec2.getSubnetIds({ vpcId: vpc.then(v => v.id) });\n\nconst dbSubnetGroup = new aws.rds.SubnetGroup(\"db-subnet-group\", {\n  subnetIds: subnets.then(s => s.ids),\n});\n\nconst db = new aws.rds.Instance(\"production-db\", {\n  engine: \"postgres\",\n  engineVersion: \"16\",\n  instanceClass: \"db.r5.large\",\n  allocatedStorage: 200,\n  storageType: \"gp3\",\n  dbName: \"appdb\",\n  username: \"appadmin\",\n  password: dbPassword,\n  dbSubnetGroupName: dbSubnetGroup.name,\n  multiAz: true,\n  backupRetentionPeriod: 30,\n  backupWindow: \"03:00-04:00\",\n  maintenanceWindow: \"sun:04:00-sun:05:00\",\n  storageEncrypted: true,\n  deletionProtection: true,\n  skipFinalSnapshot: false,\n  finalSnapshotIdentifier: \"prod-db-final-snapshot\",\n});\n\nexport const dbAddress = db.address;\nexport const dbPort = db.port;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-case-study-airbnbs-database-evolution",
      children: "Real-World Case Study: Airbnb's Database Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airbnb's journey from a monolithic MySQL database to a polyglot persistence architecture illustrates the cloud database decision process."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2010?2013 ? Monolithic RDS:"
      }), " Airbnb ran a single large RDS MySQL instance serving all traffic. As the platform grew to 10M+ users, database bottlenecks appeared. Read replicas were added for analytics, but the primary database remained a single point of pressure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2014?2016 ? Sharding:"
      }), " Airbnb sharded their MySQL database by region and feature. They developed the \"Spinal Tap\" sharding framework and later migrated to AWS Aurora for improved throughput and built-in replication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2017?2020 ? Polyglot Persistence:"
      }), " Airbnb adopted specialized databases for specific workloads:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aurora"
        }), " for transactional bookings and payments (ACID required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DynamoDB"
        }), " for session stores and user preferences (high-scale KV)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ElastiCache (Redis)"
        }), " for real-time pricing and availability lookups (sub-ms)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redshift"
        }), " for analytics and business intelligence (OLAP)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elasticsearch"
        }), " for search and discovery (full-text search)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lesson:"
      }), " No single database satisfies all requirements. The right approach is to match each workload to the best-fit database service."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Selection:"
          }), " For each workload below, recommend a cloud database service and justify: a) Real-time leaderboard for a gaming app with 10M daily users, b) Document storage for a legal compliance system with strict audit requirements, c) Time-series sensor data from 100K IoT devices, d) Graph-based social network with friend recommendations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Strategy:"
          }), " Design a plan to migrate a 500 GB on-premises MySQL database to Aurora with less than 15 minutes of downtime. Include replication setup, cutover procedure, and rollback strategy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost Analysis:"
          }), " Compare the monthly cost of running PostgreSQL on RDS (db.r5.xlarge, Multi-AZ, 500 GB gp3) vs Aurora (serverless v2 with equivalent capacity) vs self-hosting on EC2 (two r5.xlarge instances with EBS gp3). Include storage, I/O, backup, and data transfer costs."]
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