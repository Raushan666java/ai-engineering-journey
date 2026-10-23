"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9344],{

/***/ 1621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_59_interview_databases_d_md_7b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-59-interview-databases-d-md-7b4.json
const site_docs_courses_java_59_interview_databases_d_md_7b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/59-interview-databases-d","title":"Best practice: Make LAZY the global default","description":"Database Advanced Topics - Flowchart","source":"@site/docs/courses/java/59-interview-databases-d.md","sourceDirName":"courses/java","slug":"/java/59-interview-databases-d","permalink":"/ai-engineering-journey/java/59-interview-databases-d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":62,"frontMatter":{"id":"59-interview-databases-d","slug":"/java/59-interview-databases-d","title":"Best practice: Make LAZY the global default","sidebar_label":"Best practice: Make LAZY the global default","sidebar_position":62},"sidebar":"course-java","previous":{"title":"Spring Boot default (enabled) → causes the anti-pattern:","permalink":"/ai-engineering-journey/java/59-interview-databases-c"},"next":{"title":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","permalink":"/ai-engineering-journey/java/59-interview-databases"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/59-interview-databases-d.md


const frontMatter = {
	id: '59-interview-databases-d',
	slug: '/java/59-interview-databases-d',
	title: 'Best practice: Make LAZY the global default',
	sidebar_label: 'Best practice: Make LAZY the global default',
	sidebar_position: 62
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q26: What is database sharding, and how do you implement it?",
  "id": "q26-what-is-database-sharding-and-how-do-you-implement-it",
  "level": 3
}, {
  "value": "Q27: How do you configure read replicas with Spring Boot?",
  "id": "q27-how-do-you-configure-read-replicas-with-spring-boot",
  "level": 3
}, {
  "value": "Q28: Explain Hibernate cascade types with examples",
  "id": "q28-explain-hibernate-cascade-types-with-examples",
  "level": 3
}, {
  "value": "Q29: What is the difference between <code>@Embedded</code> and <code>@OneToOne</code>?",
  "id": "q29-what-is-the-difference-between-embedded-and-onetoone",
  "level": 3
}, {
  "value": "Q30: How do you implement batch processing with JPA and Hibernate?",
  "id": "q30-how-do-you-implement-batch-processing-with-jpa-and-hibernate",
  "level": 3
}, {
  "value": "Q31: Explain database indexing strategies for common query patterns",
  "id": "q31-explain-database-indexing-strategies-for-common-query-patterns",
  "level": 3
}, {
  "value": "Q32: How does Hibernate&#39;s first-level cache interact with <code>@Transactional</code>?",
  "id": "q32-how-does-hibernates-first-level-cache-interact-with-transactional",
  "level": 3
}, {
  "value": "Q33: What are database migration rollback strategies in production?",
  "id": "q33-what-are-database-migration-rollback-strategies-in-production",
  "level": 3
}, {
  "value": "Q27: What is the <code>@Version</code> annotation and how does it prevent lost updates?",
  "id": "q27-what-is-the-version-annotation-and-how-does-it-prevent-lost-updates",
  "level": 3
}, {
  "value": "Q28: What is a <code>@ManyToOne</code> relationship&#39;s default fetch type and why is it problematic?",
  "id": "q28-what-is-a-manytoone-relationships-default-fetch-type-and-why-is-it-problematic",
  "level": 3
}, {
  "value": "Common Mistakes in JPA Entity Design (GFG-Style)",
  "id": "common-mistakes-in-jpa-entity-design-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Circular references in bidirectional relationships",
  "id": "mistake-1-circular-references-in-bidirectional-relationships",
  "level": 3
}, {
  "value": "Mistake 2: Using <code>List</code> on the Many side of OneToMany",
  "id": "mistake-2-using-list-on-the-many-side-of-onetomany",
  "level": 3
}, {
  "value": "Mistake 3: Forgetting <code>fetch = FetchType.LAZY</code> on @ToOne associations",
  "id": "mistake-3-forgetting-fetch--fetchtypelazy-on-toone-associations",
  "level": 3
}, {
  "value": "Effective vs Unoptimized JPA Query Comparison",
  "id": "effective-vs-unoptimized-jpa-query-comparison",
  "level": 2
}, {
  "value": "Chapter Quiz — Database (Part 5)",
  "id": "chapter-quiz--database-part-5",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "TypeScript Indexing Strategy Validator",
  "id": "typescript-indexing-strategy-validator",
  "level": 2
}, {
  "value": "Mermaid: Database Sharding Architecture",
  "id": "mermaid-database-sharding-architecture",
  "level": 2
}, {
  "value": "Mermaid: Batch Processing Flow",
  "id": "mermaid-batch-processing-flow",
  "level": 2
}, {
  "value": "Mermaid: Cascade Type Decision Tree",
  "id": "mermaid-cascade-type-decision-tree",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases-d.png",
        alt: "Database Advanced Topics - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Questions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions, contrasts, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilable, runnable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real interview scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitfalls to avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Core Concepts] --> B[Code Examples]\r\n    B --> C[Edge Cases]\r\n    C --> D[Best Practices]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-what-is-database-sharding-and-how-do-you-implement-it",
      children: "Q26: What is database sharding, and how do you implement it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In interviews, always start with the \"why\" before the \"how.\" Explaining the reasoning behind a design choice is more valuable than reciting syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Code readability matters in interviews. Write clean, well-structured code with meaningful variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sharding (horizontal partitioning) splits a table across multiple database instances. Each shard holds a subset of rows based on a shard key. The application routes queries to the correct shard."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Shard key routing with AbstractRoutingDataSource ──\r\npublic class ShardRouter {\r\n    private final Map<String, DataSource> shards = Map.of(\r\n        \"shard-0\", createDataSource(\"jdbc:postgresql://shard0.example.com:5432/db\"),\r\n        \"shard-1\", createDataSource(\"jdbc:postgresql://shard1.example.com:5432/db\"),\r\n        \"shard-2\", createDataSource(\"jdbc:postgresql://shard2.example.com:5432/db\")\r\n    );\r\n\r\n    public DataSource getShard(long tenantId) {\r\n        int shardIndex = (int) (tenantId % shards.size());\r\n        return shards.get(\"shard-\" + shardIndex);\r\n    }\r\n}\r\n\r\n// ── Spring AbstractRoutingDataSource ──\r\npublic class TenantAwareRoutingSource extends AbstractRoutingDataSource {\r\n    @Override\r\n    protected Object determineCurrentLookupKey() {\r\n        return \"shard-\" + (TenantContext.getTenantId() % 3);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key considerations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a shard key that evenly distributes data (user_id, tenant_id, region)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-shard queries (JOINs across shards) are expensive or impossible → design aggregates per shard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding shards requires rebalancing or consistent hashing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transactions cannot span shards (no distributed ACID without coordinator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL Citus, MySQL Cluster, and Vitess provide automated sharding at the database layer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sharding is the most complex scaling strategy. Exhaust read replicas, vertical scaling, and connection pooling before considering it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-how-do-you-configure-read-replicas-with-spring-boot",
      children: "Q27: How do you configure read replicas with Spring Boot?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional(readOnly = true)"
      }), " to route read operations to a replica datasource. Implement this with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AbstractRoutingDataSource"
      }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " interceptor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Multi-datasource configuration ──\r\n@Configuration\r\npublic class DataSourceConfig {\r\n\r\n    @Bean\r\n    @ConfigurationProperties(\"spring.datasource.primary\")\r\n    public DataSource primaryDataSource() {\r\n        return DataSourceBuilder.create().build();\r\n    }\r\n\r\n    @Bean\r\n    @ConfigurationProperties(\"spring.datasource.replica\")\r\n    public DataSource replicaDataSource() {\r\n        return DataSourceBuilder.create().build();\r\n    }\r\n\r\n    @Bean\r\n    public DataSource routingDataSource() {\r\n        RoutingDataSource router = new RoutingDataSource();\r\n        Map<Object, Object> targets = new HashMap<>();\r\n        targets.put(\"PRIMARY\", primaryDataSource());\r\n        targets.put(\"REPLICA\", replicaDataSource());\r\n        router.setDefaultTargetDataSource(primaryDataSource());\r\n        router.setTargetDataSources(targets);\r\n        return router;\r\n    }\r\n}\r\n\r\n// ── Routing datasource ──\r\npublic class RoutingDataSource extends AbstractRoutingDataSource {\r\n    @Override\r\n    protected Object determineCurrentLookupKey() {\r\n        return TransactionSynchronizationManager\r\n            .isCurrentTransactionReadOnly() ? \"REPLICA\" : \"PRIMARY\";\r\n    }\r\n}\r\n\r\n// ── Usage ──\r\n@Service\r\npublic class UserService {\r\n    @Transactional(readOnly = true)  // routes to REPLICA\r\n    public List<User> findAll() { return repo.findAll(); }\r\n\r\n    @Transactional  // routes to PRIMARY\r\n    public User save(User u) { return repo.save(u); }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caveats:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replica lag means read-after-write consistency is not guaranteed → a user may not see their own saved data immediately"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Transactional(readOnly = true)"
        }), " only on queries where stale data is acceptable"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For read-your-writes consistency, use the primary datasource within the same transaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection pooling needs separate pools for primary and replica"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-explain-hibernate-cascade-types-with-examples",
      children: "Q28: Explain Hibernate cascade types with examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cascade types dictate how operations on a parent entity propagate to its children."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\npublic class Author {\r\n    @Id @GeneratedValue private Long id;\r\n    private String name;\r\n\r\n    // ── ALL: persist, merge, remove, refresh, detach ──\r\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL)\r\n    private List<Book> books;\r\n\r\n    // ── PERSIST: saving Author saves Books ──\r\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.PERSIST)\r\n    private List<Article> articles;\r\n\r\n    // ── MERGE: updating Author updates Books ──\r\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.MERGE)\r\n    private List<Book> editedBooks;\r\n\r\n    // ── REMOVE: deleting Author deletes Books ──\r\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.REMOVE)\r\n    private List<Book> coAuthoredBooks;\r\n\r\n    // ── DETACH: detaching Author detaches Books ──\r\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.DETACH)\r\n    private List<Book> reviewedBooks;\r\n\r\n    // ── REFRESH: refreshing Author refreshes Books ──\r\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.REFRESH)\r\n    private List<Book> proofreadBooks;\r\n}\r\n\r\n@Service\r\npublic class AuthorService {\r\n    @Transactional\r\n    public void createAuthorWithBooks() {\r\n        Author a = new Author();\r\n        a.setName(\"Raushan\");\r\n        a.setBooks(List.of(\r\n            new Book(\"AI Engineering 101\", a),\r\n            new Book(\"Spring Boot in Practice\", a)\r\n        ));\r\n        repo.save(a);  // cascade = ALL saves both books automatically\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Generated SQL for the above:\r\nINSERT INTO author (name) VALUES ('Raushan');\r\nINSERT INTO book (title, author_id) VALUES ('AI Engineering 101', 1);\r\nINSERT INTO book (title, author_id) VALUES ('Spring Boot in Practice', 1);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CascadeType.ALL"
      }), " only when the child entity has no independent lifecycle. Never cascade ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ALL"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToMany"
      }), " → it can delete entities that belong to other owners. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PERSIST"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MERGE"
      }), " for most ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToMany"
      }), " relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q29-what-is-the-difference-between-embedded-and-onetoone",
      children: ["Q29: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Embedded"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToOne"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Embedded"
      }), " maps the fields of an embeddable class directly into the parent table (flat schema). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToOne"
      }), " creates a separate table with a foreign key relationship."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── @Embedded → fields in the same table ──\r\n@Embeddable\r\npublic class Address {\r\n    private String street;\r\n    private String city;\r\n    private String zipCode;\r\n    private String country;\r\n}\r\n\r\n@Entity\r\npublic class User {\r\n    @Id private Long id;\r\n    private String name;\r\n\r\n    @Embedded\r\n    private Address address;  // columns: street, city, zip_code, country → in the users table\r\n}\r\n\r\n// Result: single table \"users\" with columns: id, name, street, city, zip_code, country\r\n\r\n// ── @OneToOne → separate table with FK ──\r\n@Entity\r\npublic class Profile {\r\n    @Id private Long id;\r\n    private String bio;\r\n    private String avatarUrl;\r\n}\r\n\r\n@Entity\r\npublic class User {\r\n    @Id private Long id;\r\n    private String name;\r\n\r\n    @OneToOne(cascade = CascadeType.ALL)\r\n    @JoinColumn(name = \"profile_id\")\r\n    private Profile profile;  // FK to separate profiles table\r\n}\r\n\r\n// Result: users(id, name, profile_id), profiles(id, bio, avatar_url)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When to use each:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Embedded"
        }), ": The embedded fields are tightly coupled to the parent, never queried independently, and the relationship is strictly one-to-one. Address, contact info, monetary amount (value + currency)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@OneToOne"
        }), ": The associated entity has its own lifecycle, is queried independently, may be shared (rare), or would create too many nullable columns in the parent table."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embeddables support nesting and overriding column names:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Embedded\r\n@AttributeOverrides({\r\n    @AttributeOverride(name = \"street\", column = @Column(name = \"home_street\")),\r\n    @AttributeOverride(name = \"city\", column = @Column(name = \"home_city\"))\r\n})\r\nprivate Address homeAddress;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-how-do-you-implement-batch-processing-with-jpa-and-hibernate",
      children: "Q30: How do you implement batch processing with JPA and Hibernate?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch processing inserts or updates thousands of rows efficiently by batching JDBC statements and flushing periodically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Configuration ──\r\nspring:\r\n  jpa:\r\n    properties:\r\n      hibernate:\r\n        jdbc:\r\n          batch_size: 50\r\n        order_inserts: true\r\n        order_updates: true\r\n        batch_versioned_data: true\r\n\r\n// ── Batch insert service ──\r\n@Service\r\npublic class BatchImportService {\r\n\r\n    @PersistenceContext\r\n    private EntityManager em;\r\n\r\n    @Transactional\r\n    public void importUsers(List<UserCsvRow> rows) {\r\n        int batchSize = 50;\r\n        for (int i = 0; i < rows.size(); i++) {\r\n            User u = new User();\r\n            u.setName(rows.get(i).name());\r\n            u.setEmail(rows.get(i).email());\r\n            em.persist(u);\r\n\r\n            if (i > 0 && i % batchSize == 0) {\r\n                em.flush();\r\n                em.clear();  // detaches all managed entities → frees memory\r\n            }\r\n        }\r\n        em.flush();\r\n        em.clear();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order_inserts=true"
      }), ", Hibernate sends individual INSERT statements for unrelated entities. With batching and ordering:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Generated SQL (batched):\r\nINSERT INTO users (name, email) VALUES ('Alice', 'a@x.com'), ('Bob', 'b@x.com'), ...;  -- 50 rows\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For updates, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order_updates=true"
      }), " groups statements by entity type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Transactional\r\npublic void bulkStatusUpdate(List<Long> ids, String newStatus) {\r\n    // ❌ Without batching: N separate UPDATEs (one per entity)\r\n    // ✅ With order_updates: batched UPDATE ... WHERE id IN (...)\r\n\r\n    for (Long id : ids) {\r\n        User u = em.find(User.class, id);\r\n        u.setStatus(newStatus);  // dirty checking queues UPDATE\r\n    }\r\n    em.flush();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For truly large datasets (100K+ rows), use JDBC batch updates directly or a bulk operation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Modifying\r\n@Query(\"UPDATE User u SET u.status = :status WHERE u.id IN :ids\")\r\nint bulkUpdateStatus(@Param(\"ids\") List<Long> ids, @Param(\"status\") String status);\r\n\r\n// Returns the number of updated rows → no entity loading needed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-explain-database-indexing-strategies-for-common-query-patterns",
      children: "Q31: Explain database indexing strategies for common query patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indexes are the single most impactful performance optimization. Choosing the right index type depends on your query pattern."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "B-tree index"
      }), " (default, works for most queries):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_users_email ON users(email);\r\n-- Supports: =, >, <, >=, <=, BETWEEN, LIKE 'prefix%', IN\r\n-- Does NOT support: LIKE '%suffix', LIKE '%middle%', function(column)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composite index"
      }), " (for queries filtering/sorting by multiple columns):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_orders_user_status ON orders(user_id, status);\r\n-- Supports: WHERE user_id = ?  (uses first column)\r\n-- Supports: WHERE user_id = ? AND status = ?  (full index)\r\n-- Does NOT support: WHERE status = ?  (cannot use index → status is second column)\r\n\r\n-- Column order matters: put equality filters first, range filters last\r\nCREATE INDEX idx_orders_date_status ON orders(order_date, status);\r\n-- WHERE order_date > '2024-01-01' AND status = 'ACTIVE'  → partial index usage (date column only)\r\n-- Better: put the equality column first\r\nCREATE INDEX idx_orders_status_date ON orders(status, order_date);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial index"
      }), " (index only a subset of rows → smaller, faster):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_active_users ON users(email) WHERE active = true;\r\n-- Only indexes active users → 70% smaller if 30% of users are active\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Covering index"
      }), " (includes all needed columns → no table lookup):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_orders_covering ON orders(user_id, status, total, created_at);\r\n-- SELECT status, total FROM orders WHERE user_id = 123 ORDER BY created_at DESC\r\n-- Entire query satisfied from index → zero table page reads\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN index"
      }), " (for JSONB, full-text search, arrays):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_metadata ON products USING GIN (metadata jsonb_path_ops);\r\n-- SELECT * FROM products WHERE metadata @> '{\"color\": \"red\"}'  → fast JSON containment search\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Indexing checklist per query:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EXPLAIN ANALYZE"
        }), " on the slow query"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify the table scan (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Seq Scan"
        }), ") or filter condition"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create the smallest viable index that covers the WHERE clause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add the ORDER BY columns if they aren't in the index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include SELECT columns in the index if the table is read-heavy (covering index)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "VACUUM ANALYZE"
        }), " and re-test"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most applications need fewer than 20 indexes per table. Too many indexes slow down writes (each INSERT/UPDATE must update every index)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q32-how-does-hibernates-first-level-cache-interact-with-transactional",
      children: ["Q32: How does Hibernate's first-level cache interact with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The first-level cache (persistence context) is scoped to the Hibernate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Session"
      }), ", which is bound to a Spring transaction. Within a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " method, all entity operations share the same persistence context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class UserService {\r\n    @Transactional\r\n    public User updateUser(Long id, String newName, String newEmail) {\r\n        // Both calls to findById hit the same persistence context\r\n        User u1 = userRepo.findById(id).orElseThrow();\r\n        u1.setName(newName);\r\n\r\n        User u2 = userRepo.findById(id).orElseThrow();  // L1 cache hit → no SQL\r\n        System.out.println(u1 == u2);  // true → same Java object\r\n\r\n        u2.setEmail(newEmail);\r\n\r\n        // At commit: Hibernate detects dirty fields (name AND email changed)\r\n        // generates: UPDATE users SET name = ?, email = ? WHERE id = ? AND version = ?\r\n        return u2;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-behind"
        }), ": Changes are queued in the persistence context until flush. The database is not touched until ", (0,jsx_runtime.jsx)(_components.code, {
          children: "em.flush()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Transactional"
        }), " commit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dirty checking"
        }), ": On flush, Hibernate compares every managed entity's current state with its snapshot. Changed fields generate UPDATE statements."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-after-write consistency"
        }), ": Within the same transaction, you always see your own writes because the L1 cache serves the entity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Common mistake → calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "save()"
      }), " is unnecessary for managed entities:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Transactional\r\npublic void updateName(Long id, String name) {\r\n    User u = userRepo.findById(id).orElseThrow();  // managed\r\n    u.setName(name);  // no save() needed → Hibernate auto-detects the change on flush\r\n    // Hibernate generates: UPDATE users SET name = ? WHERE id = ?\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-what-are-database-migration-rollback-strategies-in-production",
      children: "Q33: What are database migration rollback strategies in production?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database rollbacks are more complex than code rollbacks because the schema change is irreversible once applied. Three strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Forward-only with compensating migration (recommended):"
      }), "\r\nEvery migration must have a corresponding \"down\" migration that reverses the change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Flyway with callback for rollback support ──\r\npublic class FlywayRollbackService {\r\n    public void undoLastMigration() {\r\n        Flyway flyway = Flyway.configure()\r\n            .dataSource(dataSource)\r\n            .load();\r\n\r\n        // Get the last applied migration\r\n        var applied = flyway.info().applied();\r\n        MigrationInfo last = applied[applied.length - 1];\r\n\r\n        // Execute the undo script (V{version}__{description}.sql → V{version}__{description}__undo.sql)\r\n        String undoScript = \"db/undomigrations/\" + last.getVersion() + \"__undo.sql\";\r\n        Resource undo = new ClassPathResource(undoScript);\r\n        if (undo.exists()) {\r\n            executeSql(new String(undo.getInputStream().readAllBytes()));\r\n        }\r\n    }\r\n}\r\n\r\n-- Example down migration: V2__add_active_column__undo.sql\r\nALTER TABLE users DROP COLUMN active;\r\nDELETE FROM flyway_schema_history WHERE version = '2';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Expand-contract pattern (zero-downtime):"
      }), "\r\nPhase 1 → expand: Add the new column/table. Both old and new code can run simultaneously.\r\nPhase 2 → migrate: Backfill data. Deploy new code that uses the new schema.\r\nPhase 3 → contract: Remove the old column/table after confirming the new code works."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Phase 1 (expand): Add nullable column\r\nALTER TABLE users ADD COLUMN email_v2 VARCHAR(255);\r\n\r\n-- Application writes to both email and email_v2 during migration\r\n\r\n-- Phase 2 (migrate): Backfill\r\nUPDATE users SET email_v2 = email WHERE email_v2 IS NULL;\r\n\r\n-- Deploy code that reads from email_v2 instead of email\r\n\r\n-- Phase 3 (contract): Remove old column\r\nALTER TABLE users DROP COLUMN email;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Feature flags with backward-compatible schema:"
      }), "\r\nNew schema changes are rolled out behind a feature flag. If the deployment fails, disable the flag. The schema change remains but is unused until re-enabled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Value(\"${features.use-new-email-column:false}\")\r\nprivate boolean useNewEmail;\r\n\r\npublic String getEmail(User u) {\r\n    return useNewEmail ? u.getEmailV2() : u.getEmail();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never rename or drop columns without a multi-phase migration. Never make columns NOT NULL without backfilling data first. Test rollbacks on a staging database that mirrors production volume."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q27-what-is-the-version-annotation-and-how-does-it-prevent-lost-updates",
      children: ["Q27: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Version"
      }), " annotation and how does it prevent lost updates?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Version"
      }), " enables optimistic locking in JPA. Hibernate checks the version field on every update — if another transaction modified the row concurrently, an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OptimisticLockException"
      }), " is thrown."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Table(name = \"inventory\")\r\npublic class InventoryItem {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    @Column(nullable = false)\r\n    private int quantity;\r\n\r\n    @Version\r\n    private long version;  // Starts at 0, incremented on each update\r\n}\r\n\r\n// Scenario: Two concurrent requests deduct stock\r\n//\r\n// Time  | Transaction A                    | Transaction B\r\n// ------|----------------------------------|----------------------------------\r\n// T1    | read item (version=0, qty=10)    |\r\n// T2    |                                  | read item (version=0, qty=10)\r\n// T3    | setQty(10-3=7)                   |\r\n// T4    | flush → UPDATE SET qty=7,        |\r\n//       |   version=1 WHERE version=0      |\r\n//       |   → success (1 row updated)      |\r\n// T5    |                                  | setQty(10-5=5)\r\n// T6    |                                  | flush → UPDATE SET qty=5,\r\n//       |                                  |   version=1 WHERE version=0\r\n//       |                                  |   → OptimisticLockException!\r\n//       |                                  |   (0 rows updated — version mismatch)\r\n//\r\n// Transaction B's update affects 0 rows → Hibernate throws OptimisticLockException\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important behaviors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Version"
        }), " works with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Integer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Long"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "short"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Short"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.sql.Timestamp"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version is checked on every entity update (INSERT sets version=0; UPDATE increments)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version is NOT checked on reads — only on write operations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OptimisticLockException is a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.hibernate.StaleObjectStateException"
        }), " (extends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PessimisticLockException"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry strategy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class InventoryService {\r\n\r\n    @Transactional\r\n    public void deductStock(Long itemId, int quantity) {\r\n        for (int attempt = 1; attempt <= 3; attempt++) {\r\n            try {\r\n                InventoryItem item = repo.findById(itemId).orElseThrow();\r\n                if (item.getQuantity() < quantity) {\r\n                    throw new InsufficientStockException();\r\n                }\r\n                item.setQuantity(item.getQuantity() - quantity);\r\n                return;  // Success — exit retry loop\r\n            } catch (OptimisticLockException e) {\r\n                if (attempt == 3) throw e;  // Max retries exceeded\r\n                // Sleep with exponential backoff before retry\r\n                Thread.sleep(50L * attempt);\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q28-what-is-a-manytoone-relationships-default-fetch-type-and-why-is-it-problematic",
      children: ["Q28: What is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToOne"
      }), " relationship's default fetch type and why is it problematic?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToOne"
      }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FetchType.EAGER"
      }), ". This is problematic because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every query for the owning entity joins the parent table"
        }), ", even when you don't need it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple EAGER associations can cause Cartesian products"
        }), " — pulling in 3+ joined tables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular EAGER loading"
        }), " can cause infinite recursion if two entities eagerly load each other"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N+1 with a twist"
        }), " — EAGER loading via separate SELECT (not JOIN) can cause N+1 for collection-style queries"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Default EAGER on @ManyToOne (3 eager fetches)\r\n@Entity\r\npublic class Order {\r\n\r\n    @ManyToOne  // EAGER by default!\r\n    private Customer customer;\r\n\r\n    @ManyToOne  // EAGER by default!\r\n    private Address shippingAddress;\r\n\r\n    @ManyToOne  // EAGER by default!\r\n    private PaymentMethod paymentMethod;\r\n}\r\n\r\n// FindAll generates this cartesian join:\r\n// SELECT o.*, c.*, a.*, p.*\r\n// FROM orders o\r\n//   LEFT JOIN customers c ON o.customer_id = c.id\r\n//   LEFT JOIN addresses a ON o.shipping_address_id = a.id\r\n//   LEFT JOIN payment_methods p ON o.payment_method_id = p.id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix: Always override to LAZY:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\npublic class Order {\r\n\r\n    @ManyToOne(fetch = FetchType.LAZY)\r\n    @JoinColumn(name = \"customer_id\")\r\n    private Customer customer;\r\n\r\n    @ManyToOne(fetch = FetchType.LAZY)\r\n    @JoinColumn(name = \"shipping_address_id\")\r\n    private Address shippingAddress;\r\n\r\n    @ManyToOne(fetch = FetchType.LAZY)\r\n    @JoinColumn(name = \"payment_method_id\")\r\n    private PaymentMethod paymentMethod;\r\n}\r\n\r\n// Then use JOIN FETCH or EntityGraph when you actually need the parent\r\n@Query(\"SELECT o FROM Order o JOIN FETCH o.customer WHERE o.id = :id\")\r\nOptional<Order> findByIdWithCustomer(@Param(\"id\") Long id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-in-jpa-entity-design-gfg-style",
      children: "Common Mistakes in JPA Entity Design (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-circular-references-in-bidirectional-relationships",
      children: "Mistake 1: Circular references in bidirectional relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Both sides eager-load each other → infinite loop on serialization\r\n@Entity\r\npublic class User {\r\n    @OneToMany(mappedBy = \"user\")\r\n    private List<Order> orders;  // LAZY by default — fine\r\n}\r\n\r\n@Entity\r\npublic class Order {\r\n    @ManyToOne(fetch = FetchType.EAGER)  // ❌ EAGER loads User → which loads Orders...\r\n    private User user;\r\n}\r\n\r\n// ✅ CORRECT: LAZY on both sides, use DTO or @JsonIgnore for serialization\r\n@Entity\r\npublic class Order {\r\n    @ManyToOne(fetch = FetchType.LAZY)\r\n    @JoinColumn(name = \"user_id\")\r\n    @JsonIgnore  // Prevent circular JSON serialization\r\n    private User user;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-2-using-list-on-the-many-side-of-onetomany",
      children: ["Mistake 2: Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " on the Many side of OneToMany"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: List on @OneToMany can cause Hibernate to delete all and re-insert\r\n@OneToMany(mappedBy = \"parent\", cascade = CascadeType.ALL)\r\nprivate List<Child> children = new ArrayList<>();\r\n// Hibernate removes ALL children and re-inserts the ones still in the list\r\n// on every collection modification!\r\n\r\n// ✅ CORRECT: Use Set for @OneToMany to avoid delete+reinsert\r\n@OneToMany(mappedBy = \"parent\", cascade = CascadeType.ALL, orphanRemoval = true)\r\nprivate Set<Child> children = new HashSet<>();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-3-forgetting-fetch--fetchtypelazy-on-toone-associations",
      children: ["Mistake 3: Forgetting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fetch = FetchType.LAZY"
      }), " on @ToOne associations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Best practice: Make LAZY the global default\r\nspring.jpa.properties.hibernate.default_batch_fetch_size=25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Hibernate 6 can make all associations LAZY globally\r\n// In application.properties:\r\n// spring.jpa.properties.hibernate.default_eager_fetch_strategy=LAZY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "effective-vs-unoptimized-jpa-query-comparison",
      children: "Effective vs Unoptimized JPA Query Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Generated SQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Round-trips"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EAGER @ManyToOne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN on every query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — loads all parents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Avoid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAZY + JOIN FETCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single LEFT JOIN when needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium — data you need"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Best for specific fetches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAZY + @BatchSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE fk IN (...) in batches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — loaded on demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTO projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT specific columns only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — only needed data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Best for reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entity + OSIV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual SELECT per access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — full entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Production anti-pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--database-part-5",
      children: "Chapter Quiz — Database (Part 5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Version"
        }), " annotation protect against?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SQL injection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Lost updates from concurrent transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Database deadlocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Connection leaks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Lost updates.** `@Version` implements optimistic locking — if two transactions read the same entity and both try to update it, the second one to commit gets an `OptimisticLockException` because the version has incremented.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default fetch type of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ManyToOne"
        }), "?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) LAZY"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) EAGER"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) AUTO"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) DEFAULT"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) EAGER.** `@ManyToOne` and `@OneToOne` default to EAGER. This is widely considered a design flaw — always override to LAZY and fetch explicitly via JOIN FETCH or EntityGraph.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "List"
        }), " problematic for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@OneToMany"
        }), " relationships?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Lists cannot be sorted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Hibernate may delete all children and re-insert on modification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Lists cannot be lazy-loaded"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Lists cause N+1 queries"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Hibernate may delete all children and re-insert.** With `List`, Hibernate compares old and new collections, potentially removing all rows and re-inserting the remaining ones. `Set` avoids this because Hibernate tracks individual element changes.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, Inheritance, Polymorphism, Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every interview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List, Set, Map, Queue, Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "synchronized, volatile, Locks, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/10 senior interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas, Streams, Optional, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8/10 interviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Junior (0-2yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid (3-5yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior (6-9yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staff (10+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP & Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and identify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply and combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate and refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and teach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write thread-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug deadlocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design concurrent systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-indexing-strategy-validator",
      children: "TypeScript Indexing Strategy Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript code validates database indexing strategies, simulates shard key routing, and demonstrates batch processing patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ColumnDef {\r\n  name: string;\r\n  type: string;\r\n  nullable: boolean;\r\n  isPrimaryKey: boolean;\r\n}\r\n\r\ninterface IndexDef {\r\n  name: string;\r\n  columns: string[];\r\n  unique: boolean;\r\n  partial: string | null;\r\n  type: 'btree' | 'gin' | 'gist' | 'hash' | 'brin';\r\n}\r\n\r\nclass IndexingStrategyValidator {\r\n  analyze(query: string): string[] {\r\n    const recommendations: string[] = [];\r\n    const whereColumns = this.extractWhereColumns(query);\r\n    const orderByColumns = this.extractOrderByColumns(query);\r\n    const joinColumns = this.extractJoinColumns(query);\r\n\r\n    if (whereColumns.length === 0 && orderByColumns.length === 0) {\r\n      return ['Query has no WHERE or ORDER BY — no index needed'];\r\n    }\r\n\r\n    const allColumns = [...new Set([...whereColumns, ...orderByColumns, ...joinColumns])];\r\n\r\n    if (allColumns.length === 1) {\r\n      recommendations.push(`Single-column B-tree index on ${allColumns[0]}`);\r\n    } else if (allColumns.length > 1) {\r\n      const eqColumns = whereColumns.filter(c => !c.includes('>') && !c.includes('<') && !c.includes('LIKE'));\r\n      const rangeColumns = whereColumns.filter(c => c.includes('>') || c.includes('<'));\r\n      const compositeCols = [...eqColumns, ...rangeColumns, ...orderByColumns.filter(c => !whereColumns.includes(c))];\r\n      recommendations.push(\r\n        `Composite B-tree index on (${compositeCols.join(', ')}) — equality columns first, range/sort last`\r\n      );\r\n    }\r\n\r\n    if (query.includes('ORDER BY') && !whereColumns.some(c => orderByColumns.includes(c))) {\r\n      recommendations.push('ORDER BY columns differ from WHERE — consider a covering index');\r\n\r\n      const coveringIndex = [...new Set([...allColumns, ...this.extractSelectColumns(query)])];\r\n      recommendations.push(\r\n        `Covering index suggestion: (${coveringIndex.join(', ')}) to avoid table lookups`\r\n      );\r\n    }\r\n\r\n    if (query.includes('LIKE')) {\r\n      const likeCols = whereColumns.filter(c => c.includes('LIKE'));\r\n      if (likeCols.length > 0) {\r\n        recommendations.push(`Consider GIN with pg_trgm for ${likeCols[0]} if using prefix/suffix LIKE`);\r\n      }\r\n    }\r\n\r\n    if (query.includes('jsonb') || query.includes('JSONB') || query.includes('@>')) {\r\n      recommendations.push('JSONB containment query detected — use GIN index with jsonb_path_ops');\r\n    }\r\n\r\n    return recommendations;\r\n  }\r\n\r\n  private extractWhereColumns(query: string): string[] {\r\n    const whereMatch = query.match(/WHERE\\s+(.+?)(?:ORDER\\s+BY|GROUP\\s+BY|HAVING|LIMIT|$)/i);\r\n    if (!whereMatch) return [];\r\n    return whereMatch[1]\r\n      .split(/\\s+(?:AND|OR)\\s+/i)\r\n      .map(clause => {\r\n        const colMatch = clause.match(/^\\s*(\\w+)\\.?(\\w+)?\\s*(=|>|<|>=|<=|!=|LIKE|IN|BETWEEN)/i);\r\n        return colMatch ? (colMatch[2] || colMatch[1]) : null;\r\n      })\r\n      .filter((c): c is string => c !== null);\r\n  }\r\n\r\n  private extractOrderByColumns(query: string): string[] {\r\n    const orderMatch = query.match(/ORDER\\s+BY\\s+(.+?)(?:LIMIT|OFFSET|$)/i);\r\n    if (!orderMatch) return [];\r\n    return orderMatch[1]\r\n      .split(',')\r\n      .map(c => c.trim().split(/\\s+/)[0]);\r\n  }\r\n\r\n  private extractJoinColumns(query: string): string[] {\r\n    const joinMatches = query.matchAll(/JOIN\\s+\\w+\\s+\\w+\\s+ON\\s+\\w+\\.(\\w+)\\s*=\\s*\\w+\\.(\\w+)/gi);\r\n    const columns: string[] = [];\r\n    for (const match of joinMatches) {\r\n      columns.push(match[1], match[2]);\r\n    }\r\n    return columns;\r\n  }\r\n\r\n  private extractSelectColumns(query: string): string[] {\r\n    const selectMatch = query.match(/SELECT\\s+(.+?)\\s+FROM/i);\r\n    if (!selectMatch) return [];\r\n    return selectMatch[1]\r\n      .split(',')\r\n      .map(c => c.trim().replace(/.*\\./, ''));\r\n  }\r\n\r\n  costEstimate(query: string, rowCount: number): { sequential: number; indexed: number } {\r\n    const sequential = rowCount * 0.1;\r\n    const hasIndex = this.extractWhereColumns(query).length > 1;\r\n    const indexed = hasIndex ? Math.log2(rowCount) * 0.05 : sequential;\r\n    return {\r\n      sequential: Number(sequential.toFixed(2)),\r\n      indexed: Number(indexed.toFixed(2)),\r\n    };\r\n  }\r\n}\r\n\r\n// ── Example usage ──\r\nconst idxValidator = new IndexingStrategyValidator();\r\n\r\nconst queries = [\r\n  'SELECT * FROM orders WHERE user_id = 123',\r\n  'SELECT * FROM orders WHERE user_id = 123 AND status = \\'ACTIVE\\' ORDER BY created_at DESC',\r\n  'SELECT * FROM orders WHERE total > 1000',\r\n  'SELECT * FROM products WHERE metadata @> \\'{\"color\": \"red\"}\\'',\r\n  'SELECT o.*, u.name FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = \\'PENDING\\'',\r\n];\r\n\r\nconsole.log('=== INDEXING STRATEGY VALIDATOR ===\\n');\r\nfor (const q of queries) {\r\n  console.log(`Query: ${q.substring(0, 60)}...`);\r\n  const recs = idxValidator.analyze(q);\r\n  recs.forEach(r => console.log(`  → ${r}`));\r\n  const cost = idxValidator.costEstimate(q, 100000);\r\n  console.log(`  Cost: sequential=${cost.sequential}ms, indexed=${cost.indexed}ms`);\r\n  console.log();\r\n}\r\n\r\n// ── Shard key router ──\r\nclass ConsistentHashRouter {\r\n  private ring: number[] = [];\r\n  private nodes: Map<number, string> = new Map();\r\n  private readonly virtualNodes = 100;\r\n\r\n  constructor(shards: string[]) {\r\n    for (const shard of shards) {\r\n      for (let i = 0; i < this.virtualNodes; i++) {\r\n        const hash = this.hash(`${shard}:${i}`);\r\n        this.ring.push(hash);\r\n        this.nodes.set(hash, shard);\r\n      }\r\n    }\r\n    this.ring.sort((a, b) => a - b);\r\n  }\r\n\r\n  private hash(key: string): number {\r\n    let hash = 0;\r\n    for (let i = 0; i < key.length; i++) {\r\n      hash = ((hash << 5) - hash) + key.charCodeAt(i);\r\n      hash |= 0;\r\n    }\r\n    return Math.abs(hash);\r\n  }\r\n\r\n  getShard(key: string): string {\r\n    if (this.ring.length === 0) throw new Error('No shards available');\r\n    const hash = this.hash(key);\r\n    for (const ringHash of this.ring) {\r\n      if (hash <= ringHash) {\r\n        return this.nodes.get(ringHash)!;\r\n      }\r\n    }\r\n    return this.nodes.get(this.ring[0])!;\r\n  }\r\n\r\n  addShard(shard: string): void {\r\n    for (let i = 0; i < this.virtualNodes; i++) {\r\n      const hash = this.hash(`${shard}:${i}`);\r\n      this.ring.push(hash);\r\n      this.nodes.set(hash, shard);\r\n    }\r\n    this.ring.sort((a, b) => a - b);\r\n  }\r\n}\r\n\r\nconsole.log('=== CONSISTENT HASH SHARD ROUTER ===\\n');\r\nconst router = new ConsistentHashRouter(['shard-a', 'shard-b', 'shard-c']);\r\nconst userIds = [101, 202, 303, 404, 505, 606];\r\nfor (const uid of userIds) {\r\n  console.log(`User ${uid} → ${router.getShard(`user:${uid}`)}`);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-database-sharding-architecture",
      children: "Mermaid: Database Sharding Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Application] --> B[Shard Router]\r\n    B --> C{Shard Key<br/>user_id % N}\r\n\r\n    C -->|Shard 0| D[(Shard A)]\r\n    C -->|Shard 1| E[(Shard B)]\r\n    C -->|Shard 2| F[(Shard C)]\r\n\r\n    D --> G[users_0]\r\n    D --> H[orders_0]\r\n    E --> I[users_1]\r\n    E --> J[orders_1]\r\n    F --> K[users_2]\r\n    F --> L[orders_2]\r\n\r\n    A --> M[Read Replicas]\r\n    M --> N[(Replica 1)]\r\n    M --> O[(Replica 2)]\r\n\r\n    D -.->|async replication| N\r\n    E -.->|async replication| N\r\n    F -.->|async replication| O\r\n\r\n    style A fill:#2196f3,color:#fff\r\n    style B fill:#ff9800,color:#fff\r\n    style D fill:#4caf50,color:#fff\r\n    style E fill:#4caf50,color:#fff\r\n    style F fill:#4caf50,color:#fff\r\n    style M fill:#9c27b0,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-batch-processing-flow",
      children: "Mermaid: Batch Processing Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Read CSV/XLSX] --> B[Parse rows]\r\n    B --> C[Create entities]\r\n    C --> D{Batch full?}\r\n    D -->|No| C\r\n    D -->|\"Yes, batch_size=50\"| E[\"em.flush()\"]\r\n    E --> F[\"em.clear()\"]\r\n    F --> G{More rows?}\r\n    G -->|Yes| C\r\n    G -->|No| H[Final flush]\r\n    H --> I[Commit transaction]\r\n\r\n    subgraph Hibernate Internals\r\n        J[Persist context queue]\r\n        K[SQL statement batching]\r\n        L[JDBC batch execution]\r\n    end\r\n\r\n    E --> J\r\n    J --> K\r\n    K --> L\r\n\r\n    style E fill:#4caf50,color:#fff\r\n    style F fill:#ff9800,color:#fff\r\n    style H fill:#2196f3,color:#fff\r\n    style I fill:#9c27b0,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-cascade-type-decision-tree",
      children: "Mermaid: Cascade Type Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Choose Cascade Type] --> B{Child has<br/>independent lifecycle?}\r\n    B -->|Yes| C[Use PERSIST + MERGE only]\r\n    B -->|No| D{Relationship type?}\r\n\r\n    D -->|\"@OneToMany\"| E[CascadeType.ALL]\r\n    D -->|\"@ManyToMany\"| F[\"PERSIST + MERGE<br/>NEVER ALL\"]\r\n    D -->|\"@OneToOne\"| G[CascadeType.ALL]\r\n\r\n    C --> H[\"Parent saves -> child saved\"]\r\n    C --> I[\"Parent merges -> child merged\"]\r\n    C --> J[\"Parent delete -> NOT cascaded\"]\r\n\r\n    E --> K[All operations cascade]\r\n    F --> L[Only persist/merge propagate]\r\n    G --> M[Full lifecycle sync]\r\n\r\n    style C fill:#ff9800,color:#fff\r\n    style E fill:#4caf50,color:#fff\r\n    style F fill:#f44336,color:#fff\r\n    style G fill:#2196f3,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between equals() and == in Java?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) equals() compares values, == compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) == compares values, equals() compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) equals() is for primitives, == is for objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which collection guarantees insertion order?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) HashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TreeMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LinkedHashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) HashSet"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) static"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) final"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) private"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) abstract"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n"
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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