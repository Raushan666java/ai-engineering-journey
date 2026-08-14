"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29344],{

/***/ 31621
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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

/*End Image Gallery*/


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
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
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
        href: "../../assets/images/lessons/java/59-interview-databases-d/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-d/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases-d/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-d/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases-d/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-d/visual-explanation.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Code Examples]\n    B --> C[Edge Cases]\n    C --> D[Best Practices]\n"
      })
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
        children: "// ── Shard key routing with AbstractRoutingDataSource ──\npublic class ShardRouter {\n    private final Map<String, DataSource> shards = Map.of(\n        \"shard-0\", createDataSource(\"jdbc:postgresql://shard0.example.com:5432/db\"),\n        \"shard-1\", createDataSource(\"jdbc:postgresql://shard1.example.com:5432/db\"),\n        \"shard-2\", createDataSource(\"jdbc:postgresql://shard2.example.com:5432/db\")\n    );\n\n    public DataSource getShard(long tenantId) {\n        int shardIndex = (int) (tenantId % shards.size());\n        return shards.get(\"shard-\" + shardIndex);\n    }\n}\n\n// ── Spring AbstractRoutingDataSource ──\npublic class TenantAwareRoutingSource extends AbstractRoutingDataSource {\n    @Override\n    protected Object determineCurrentLookupKey() {\n        return \"shard-\" + (TenantContext.getTenantId() % 3);\n    }\n}\n"
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
        children: "// ── Multi-datasource configuration ──\n@Configuration\npublic class DataSourceConfig {\n\n    @Bean\n    @ConfigurationProperties(\"spring.datasource.primary\")\n    public DataSource primaryDataSource() {\n        return DataSourceBuilder.create().build();\n    }\n\n    @Bean\n    @ConfigurationProperties(\"spring.datasource.replica\")\n    public DataSource replicaDataSource() {\n        return DataSourceBuilder.create().build();\n    }\n\n    @Bean\n    public DataSource routingDataSource() {\n        RoutingDataSource router = new RoutingDataSource();\n        Map<Object, Object> targets = new HashMap<>();\n        targets.put(\"PRIMARY\", primaryDataSource());\n        targets.put(\"REPLICA\", replicaDataSource());\n        router.setDefaultTargetDataSource(primaryDataSource());\n        router.setTargetDataSources(targets);\n        return router;\n    }\n}\n\n// ── Routing datasource ──\npublic class RoutingDataSource extends AbstractRoutingDataSource {\n    @Override\n    protected Object determineCurrentLookupKey() {\n        return TransactionSynchronizationManager\n            .isCurrentTransactionReadOnly() ? \"REPLICA\" : \"PRIMARY\";\n    }\n}\n\n// ── Usage ──\n@Service\npublic class UserService {\n    @Transactional(readOnly = true)  // routes to REPLICA\n    public List<User> findAll() { return repo.findAll(); }\n\n    @Transactional  // routes to PRIMARY\n    public User save(User u) { return repo.save(u); }\n}\n"
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
        children: "@Entity\npublic class Author {\n    @Id @GeneratedValue private Long id;\n    private String name;\n\n    // ── ALL: persist, merge, remove, refresh, detach ──\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL)\n    private List<Book> books;\n\n    // ── PERSIST: saving Author saves Books ──\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.PERSIST)\n    private List<Article> articles;\n\n    // ── MERGE: updating Author updates Books ──\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.MERGE)\n    private List<Book> editedBooks;\n\n    // ── REMOVE: deleting Author deletes Books ──\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.REMOVE)\n    private List<Book> coAuthoredBooks;\n\n    // ── DETACH: detaching Author detaches Books ──\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.DETACH)\n    private List<Book> reviewedBooks;\n\n    // ── REFRESH: refreshing Author refreshes Books ──\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.REFRESH)\n    private List<Book> proofreadBooks;\n}\n\n@Service\npublic class AuthorService {\n    @Transactional\n    public void createAuthorWithBooks() {\n        Author a = new Author();\n        a.setName(\"Raushan\");\n        a.setBooks(List.of(\n            new Book(\"AI Engineering 101\", a),\n            new Book(\"Spring Boot in Practice\", a)\n        ));\n        repo.save(a);  // cascade = ALL saves both books automatically\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Generated SQL for the above:\nINSERT INTO author (name) VALUES ('Raushan');\nINSERT INTO book (title, author_id) VALUES ('AI Engineering 101', 1);\nINSERT INTO book (title, author_id) VALUES ('Spring Boot in Practice', 1);\n"
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
        children: "// ── @Embedded → fields in the same table ──\n@Embeddable\npublic class Address {\n    private String street;\n    private String city;\n    private String zipCode;\n    private String country;\n}\n\n@Entity\npublic class User {\n    @Id private Long id;\n    private String name;\n\n    @Embedded\n    private Address address;  // columns: street, city, zip_code, country → in the users table\n}\n\n// Result: single table \"users\" with columns: id, name, street, city, zip_code, country\n\n// ── @OneToOne → separate table with FK ──\n@Entity\npublic class Profile {\n    @Id private Long id;\n    private String bio;\n    private String avatarUrl;\n}\n\n@Entity\npublic class User {\n    @Id private Long id;\n    private String name;\n\n    @OneToOne(cascade = CascadeType.ALL)\n    @JoinColumn(name = \"profile_id\")\n    private Profile profile;  // FK to separate profiles table\n}\n\n// Result: users(id, name, profile_id), profiles(id, bio, avatar_url)\n"
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
        children: "@Embedded\n@AttributeOverrides({\n    @AttributeOverride(name = \"street\", column = @Column(name = \"home_street\")),\n    @AttributeOverride(name = \"city\", column = @Column(name = \"home_city\"))\n})\nprivate Address homeAddress;\n"
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
        children: "// ── Configuration ──\nspring:\n  jpa:\n    properties:\n      hibernate:\n        jdbc:\n          batch_size: 50\n        order_inserts: true\n        order_updates: true\n        batch_versioned_data: true\n\n// ── Batch insert service ──\n@Service\npublic class BatchImportService {\n\n    @PersistenceContext\n    private EntityManager em;\n\n    @Transactional\n    public void importUsers(List<UserCsvRow> rows) {\n        int batchSize = 50;\n        for (int i = 0; i < rows.size(); i++) {\n            User u = new User();\n            u.setName(rows.get(i).name());\n            u.setEmail(rows.get(i).email());\n            em.persist(u);\n\n            if (i > 0 && i % batchSize == 0) {\n                em.flush();\n                em.clear();  // detaches all managed entities → frees memory\n            }\n        }\n        em.flush();\n        em.clear();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order_inserts=true"
      }), ", Hibernate sends individual INSERT statements for unrelated entities. With batching and ordering:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Generated SQL (batched):\nINSERT INTO users (name, email) VALUES ('Alice', 'a@x.com'), ('Bob', 'b@x.com'), ...;  -- 50 rows\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For updates, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order_updates=true"
      }), " groups statements by entity type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Transactional\npublic void bulkStatusUpdate(List<Long> ids, String newStatus) {\n    // ❌ Without batching: N separate UPDATEs (one per entity)\n    // ✅ With order_updates: batched UPDATE ... WHERE id IN (...)\n\n    for (Long id : ids) {\n        User u = em.find(User.class, id);\n        u.setStatus(newStatus);  // dirty checking queues UPDATE\n    }\n    em.flush();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For truly large datasets (100K+ rows), use JDBC batch updates directly or a bulk operation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Modifying\n@Query(\"UPDATE User u SET u.status = :status WHERE u.id IN :ids\")\nint bulkUpdateStatus(@Param(\"ids\") List<Long> ids, @Param(\"status\") String status);\n\n// Returns the number of updated rows → no entity loading needed\n"
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
        children: "CREATE INDEX idx_users_email ON users(email);\n-- Supports: =, >, <, >=, <=, BETWEEN, LIKE 'prefix%', IN\n-- Does NOT support: LIKE '%suffix', LIKE '%middle%', function(column)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composite index"
      }), " (for queries filtering/sorting by multiple columns):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_orders_user_status ON orders(user_id, status);\n-- Supports: WHERE user_id = ?  (uses first column)\n-- Supports: WHERE user_id = ? AND status = ?  (full index)\n-- Does NOT support: WHERE status = ?  (cannot use index → status is second column)\n\n-- Column order matters: put equality filters first, range filters last\nCREATE INDEX idx_orders_date_status ON orders(order_date, status);\n-- WHERE order_date > '2024-01-01' AND status = 'ACTIVE'  → partial index usage (date column only)\n-- Better: put the equality column first\nCREATE INDEX idx_orders_status_date ON orders(status, order_date);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial index"
      }), " (index only a subset of rows → smaller, faster):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_active_users ON users(email) WHERE active = true;\n-- Only indexes active users → 70% smaller if 30% of users are active\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Covering index"
      }), " (includes all needed columns → no table lookup):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_orders_covering ON orders(user_id, status, total, created_at);\n-- SELECT status, total FROM orders WHERE user_id = 123 ORDER BY created_at DESC\n-- Entire query satisfied from index → zero table page reads\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN index"
      }), " (for JSONB, full-text search, arrays):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_metadata ON products USING GIN (metadata jsonb_path_ops);\n-- SELECT * FROM products WHERE metadata @> '{\"color\": \"red\"}'  → fast JSON containment search\n"
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
        children: "@Service\npublic class UserService {\n    @Transactional\n    public User updateUser(Long id, String newName, String newEmail) {\n        // Both calls to findById hit the same persistence context\n        User u1 = userRepo.findById(id).orElseThrow();\n        u1.setName(newName);\n\n        User u2 = userRepo.findById(id).orElseThrow();  // L1 cache hit → no SQL\n        System.out.println(u1 == u2);  // true → same Java object\n\n        u2.setEmail(newEmail);\n\n        // At commit: Hibernate detects dirty fields (name AND email changed)\n        // generates: UPDATE users SET name = ?, email = ? WHERE id = ? AND version = ?\n        return u2;\n    }\n}\n"
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
        children: "@Transactional\npublic void updateName(Long id, String name) {\n    User u = userRepo.findById(id).orElseThrow();  // managed\n    u.setName(name);  // no save() needed → Hibernate auto-detects the change on flush\n    // Hibernate generates: UPDATE users SET name = ? WHERE id = ?\n}\n"
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
      }), "\nEvery migration must have a corresponding \"down\" migration that reverses the change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Flyway with callback for rollback support ──\npublic class FlywayRollbackService {\n    public void undoLastMigration() {\n        Flyway flyway = Flyway.configure()\n            .dataSource(dataSource)\n            .load();\n\n        // Get the last applied migration\n        var applied = flyway.info().applied();\n        MigrationInfo last = applied[applied.length - 1];\n\n        // Execute the undo script (V{version}__{description}.sql → V{version}__{description}__undo.sql)\n        String undoScript = \"db/undomigrations/\" + last.getVersion() + \"__undo.sql\";\n        Resource undo = new ClassPathResource(undoScript);\n        if (undo.exists()) {\n            executeSql(new String(undo.getInputStream().readAllBytes()));\n        }\n    }\n}\n\n-- Example down migration: V2__add_active_column__undo.sql\nALTER TABLE users DROP COLUMN active;\nDELETE FROM flyway_schema_history WHERE version = '2';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Expand-contract pattern (zero-downtime):"
      }), "\nPhase 1 → expand: Add the new column/table. Both old and new code can run simultaneously.\nPhase 2 → migrate: Backfill data. Deploy new code that uses the new schema.\nPhase 3 → contract: Remove the old column/table after confirming the new code works."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Phase 1 (expand): Add nullable column\nALTER TABLE users ADD COLUMN email_v2 VARCHAR(255);\n\n-- Application writes to both email and email_v2 during migration\n\n-- Phase 2 (migrate): Backfill\nUPDATE users SET email_v2 = email WHERE email_v2 IS NULL;\n\n-- Deploy code that reads from email_v2 instead of email\n\n-- Phase 3 (contract): Remove old column\nALTER TABLE users DROP COLUMN email;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Feature flags with backward-compatible schema:"
      }), "\nNew schema changes are rolled out behind a feature flag. If the deployment fails, disable the flag. The schema change remains but is unused until re-enabled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Value(\"${features.use-new-email-column:false}\")\nprivate boolean useNewEmail;\n\npublic String getEmail(User u) {\n    return useNewEmail ? u.getEmailV2() : u.getEmail();\n}\n"
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
        children: "@Entity\n@Table(name = \"inventory\")\npublic class InventoryItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private int quantity;\n\n    @Version\n    private long version;  // Starts at 0, incremented on each update\n}\n\n// Scenario: Two concurrent requests deduct stock\n//\n// Time  | Transaction A                    | Transaction B\n// ------|----------------------------------|----------------------------------\n// T1    | read item (version=0, qty=10)    |\n// T2    |                                  | read item (version=0, qty=10)\n// T3    | setQty(10-3=7)                   |\n// T4    | flush → UPDATE SET qty=7,        |\n//       |   version=1 WHERE version=0      |\n//       |   → success (1 row updated)      |\n// T5    |                                  | setQty(10-5=5)\n// T6    |                                  | flush → UPDATE SET qty=5,\n//       |                                  |   version=1 WHERE version=0\n//       |                                  |   → OptimisticLockException!\n//       |                                  |   (0 rows updated — version mismatch)\n//\n// Transaction B's update affects 0 rows → Hibernate throws OptimisticLockException\n"
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
        children: "@Service\npublic class InventoryService {\n\n    @Transactional\n    public void deductStock(Long itemId, int quantity) {\n        for (int attempt = 1; attempt <= 3; attempt++) {\n            try {\n                InventoryItem item = repo.findById(itemId).orElseThrow();\n                if (item.getQuantity() < quantity) {\n                    throw new InsufficientStockException();\n                }\n                item.setQuantity(item.getQuantity() - quantity);\n                return;  // Success — exit retry loop\n            } catch (OptimisticLockException e) {\n                if (attempt == 3) throw e;  // Max retries exceeded\n                // Sleep with exponential backoff before retry\n                Thread.sleep(50L * attempt);\n            }\n        }\n    }\n}\n"
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
        children: "// ❌ WRONG: Default EAGER on @ManyToOne (3 eager fetches)\n@Entity\npublic class Order {\n\n    @ManyToOne  // EAGER by default!\n    private Customer customer;\n\n    @ManyToOne  // EAGER by default!\n    private Address shippingAddress;\n\n    @ManyToOne  // EAGER by default!\n    private PaymentMethod paymentMethod;\n}\n\n// FindAll generates this cartesian join:\n// SELECT o.*, c.*, a.*, p.*\n// FROM orders o\n//   LEFT JOIN customers c ON o.customer_id = c.id\n//   LEFT JOIN addresses a ON o.shipping_address_id = a.id\n//   LEFT JOIN payment_methods p ON o.payment_method_id = p.id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix: Always override to LAZY:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Order {\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"customer_id\")\n    private Customer customer;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"shipping_address_id\")\n    private Address shippingAddress;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"payment_method_id\")\n    private PaymentMethod paymentMethod;\n}\n\n// Then use JOIN FETCH or EntityGraph when you actually need the parent\n@Query(\"SELECT o FROM Order o JOIN FETCH o.customer WHERE o.id = :id\")\nOptional<Order> findByIdWithCustomer(@Param(\"id\") Long id);\n"
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
        children: "// ❌ WRONG: Both sides eager-load each other → infinite loop on serialization\n@Entity\npublic class User {\n    @OneToMany(mappedBy = \"user\")\n    private List<Order> orders;  // LAZY by default — fine\n}\n\n@Entity\npublic class Order {\n    @ManyToOne(fetch = FetchType.EAGER)  // ❌ EAGER loads User → which loads Orders...\n    private User user;\n}\n\n// ✅ CORRECT: LAZY on both sides, use DTO or @JsonIgnore for serialization\n@Entity\npublic class Order {\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"user_id\")\n    @JsonIgnore  // Prevent circular JSON serialization\n    private User user;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-2-using-list-on-the-many-side-of-onetomany",
      children: ["Mistake 2: Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " on the Many side of OneToMany"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: List on @OneToMany can cause Hibernate to delete all and re-insert\n@OneToMany(mappedBy = \"parent\", cascade = CascadeType.ALL)\nprivate List<Child> children = new ArrayList<>();\n// Hibernate removes ALL children and re-inserts the ones still in the list\n// on every collection modification!\n\n// ✅ CORRECT: Use Set for @OneToMany to avoid delete+reinsert\n@OneToMany(mappedBy = \"parent\", cascade = CascadeType.ALL, orphanRemoval = true)\nprivate Set<Child> children = new HashSet<>();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-3-forgetting-fetch--fetchtypelazy-on-toone-associations",
      children: ["Mistake 3: Forgetting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fetch = FetchType.LAZY"
      }), " on @ToOne associations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Best practice: Make LAZY the global default\nspring.jpa.properties.hibernate.default_batch_fetch_size=25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Hibernate 6 can make all associations LAZY globally\n// In application.properties:\n// spring.jpa.properties.hibernate.default_eager_fetch_strategy=LAZY\n"
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
        children: "interface ColumnDef {\n  name: string;\n  type: string;\n  nullable: boolean;\n  isPrimaryKey: boolean;\n}\n\ninterface IndexDef {\n  name: string;\n  columns: string[];\n  unique: boolean;\n  partial: string | null;\n  type: 'btree' | 'gin' | 'gist' | 'hash' | 'brin';\n}\n\nclass IndexingStrategyValidator {\n  analyze(query: string): string[] {\n    const recommendations: string[] = [];\n    const whereColumns = this.extractWhereColumns(query);\n    const orderByColumns = this.extractOrderByColumns(query);\n    const joinColumns = this.extractJoinColumns(query);\n\n    if (whereColumns.length === 0 && orderByColumns.length === 0) {\n      return ['Query has no WHERE or ORDER BY — no index needed'];\n    }\n\n    const allColumns = [...new Set([...whereColumns, ...orderByColumns, ...joinColumns])];\n\n    if (allColumns.length === 1) {\n      recommendations.push(`Single-column B-tree index on ${allColumns[0]}`);\n    } else if (allColumns.length > 1) {\n      const eqColumns = whereColumns.filter(c => !c.includes('>') && !c.includes('<') && !c.includes('LIKE'));\n      const rangeColumns = whereColumns.filter(c => c.includes('>') || c.includes('<'));\n      const compositeCols = [...eqColumns, ...rangeColumns, ...orderByColumns.filter(c => !whereColumns.includes(c))];\n      recommendations.push(\n        `Composite B-tree index on (${compositeCols.join(', ')}) — equality columns first, range/sort last`\n      );\n    }\n\n    if (query.includes('ORDER BY') && !whereColumns.some(c => orderByColumns.includes(c))) {\n      recommendations.push('ORDER BY columns differ from WHERE — consider a covering index');\n\n      const coveringIndex = [...new Set([...allColumns, ...this.extractSelectColumns(query)])];\n      recommendations.push(\n        `Covering index suggestion: (${coveringIndex.join(', ')}) to avoid table lookups`\n      );\n    }\n\n    if (query.includes('LIKE')) {\n      const likeCols = whereColumns.filter(c => c.includes('LIKE'));\n      if (likeCols.length > 0) {\n        recommendations.push(`Consider GIN with pg_trgm for ${likeCols[0]} if using prefix/suffix LIKE`);\n      }\n    }\n\n    if (query.includes('jsonb') || query.includes('JSONB') || query.includes('@>')) {\n      recommendations.push('JSONB containment query detected — use GIN index with jsonb_path_ops');\n    }\n\n    return recommendations;\n  }\n\n  private extractWhereColumns(query: string): string[] {\n    const whereMatch = query.match(/WHERE\\s+(.+?)(?:ORDER\\s+BY|GROUP\\s+BY|HAVING|LIMIT|$)/i);\n    if (!whereMatch) return [];\n    return whereMatch[1]\n      .split(/\\s+(?:AND|OR)\\s+/i)\n      .map(clause => {\n        const colMatch = clause.match(/^\\s*(\\w+)\\.?(\\w+)?\\s*(=|>|<|>=|<=|!=|LIKE|IN|BETWEEN)/i);\n        return colMatch ? (colMatch[2] || colMatch[1]) : null;\n      })\n      .filter((c): c is string => c !== null);\n  }\n\n  private extractOrderByColumns(query: string): string[] {\n    const orderMatch = query.match(/ORDER\\s+BY\\s+(.+?)(?:LIMIT|OFFSET|$)/i);\n    if (!orderMatch) return [];\n    return orderMatch[1]\n      .split(',')\n      .map(c => c.trim().split(/\\s+/)[0]);\n  }\n\n  private extractJoinColumns(query: string): string[] {\n    const joinMatches = query.matchAll(/JOIN\\s+\\w+\\s+\\w+\\s+ON\\s+\\w+\\.(\\w+)\\s*=\\s*\\w+\\.(\\w+)/gi);\n    const columns: string[] = [];\n    for (const match of joinMatches) {\n      columns.push(match[1], match[2]);\n    }\n    return columns;\n  }\n\n  private extractSelectColumns(query: string): string[] {\n    const selectMatch = query.match(/SELECT\\s+(.+?)\\s+FROM/i);\n    if (!selectMatch) return [];\n    return selectMatch[1]\n      .split(',')\n      .map(c => c.trim().replace(/.*\\./, ''));\n  }\n\n  costEstimate(query: string, rowCount: number): { sequential: number; indexed: number } {\n    const sequential = rowCount * 0.1;\n    const hasIndex = this.extractWhereColumns(query).length > 1;\n    const indexed = hasIndex ? Math.log2(rowCount) * 0.05 : sequential;\n    return {\n      sequential: Number(sequential.toFixed(2)),\n      indexed: Number(indexed.toFixed(2)),\n    };\n  }\n}\n\n// ── Example usage ──\nconst idxValidator = new IndexingStrategyValidator();\n\nconst queries = [\n  'SELECT * FROM orders WHERE user_id = 123',\n  'SELECT * FROM orders WHERE user_id = 123 AND status = \\'ACTIVE\\' ORDER BY created_at DESC',\n  'SELECT * FROM orders WHERE total > 1000',\n  'SELECT * FROM products WHERE metadata @> \\'{\"color\": \"red\"}\\'',\n  'SELECT o.*, u.name FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = \\'PENDING\\'',\n];\n\nconsole.log('=== INDEXING STRATEGY VALIDATOR ===\\n');\nfor (const q of queries) {\n  console.log(`Query: ${q.substring(0, 60)}...`);\n  const recs = idxValidator.analyze(q);\n  recs.forEach(r => console.log(`  → ${r}`));\n  const cost = idxValidator.costEstimate(q, 100000);\n  console.log(`  Cost: sequential=${cost.sequential}ms, indexed=${cost.indexed}ms`);\n  console.log();\n}\n\n// ── Shard key router ──\nclass ConsistentHashRouter {\n  private ring: number[] = [];\n  private nodes: Map<number, string> = new Map();\n  private readonly virtualNodes = 100;\n\n  constructor(shards: string[]) {\n    for (const shard of shards) {\n      for (let i = 0; i < this.virtualNodes; i++) {\n        const hash = this.hash(`${shard}:${i}`);\n        this.ring.push(hash);\n        this.nodes.set(hash, shard);\n      }\n    }\n    this.ring.sort((a, b) => a - b);\n  }\n\n  private hash(key: string): number {\n    let hash = 0;\n    for (let i = 0; i < key.length; i++) {\n      hash = ((hash << 5) - hash) + key.charCodeAt(i);\n      hash |= 0;\n    }\n    return Math.abs(hash);\n  }\n\n  getShard(key: string): string {\n    if (this.ring.length === 0) throw new Error('No shards available');\n    const hash = this.hash(key);\n    for (const ringHash of this.ring) {\n      if (hash <= ringHash) {\n        return this.nodes.get(ringHash)!;\n      }\n    }\n    return this.nodes.get(this.ring[0])!;\n  }\n\n  addShard(shard: string): void {\n    for (let i = 0; i < this.virtualNodes; i++) {\n      const hash = this.hash(`${shard}:${i}`);\n      this.ring.push(hash);\n      this.nodes.set(hash, shard);\n    }\n    this.ring.sort((a, b) => a - b);\n  }\n}\n\nconsole.log('=== CONSISTENT HASH SHARD ROUTER ===\\n');\nconst router = new ConsistentHashRouter(['shard-a', 'shard-b', 'shard-c']);\nconst userIds = [101, 202, 303, 404, 505, 606];\nfor (const uid of userIds) {\n  console.log(`User ${uid} → ${router.getShard(`user:${uid}`)}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-database-sharding-architecture",
      children: "Mermaid: Database Sharding Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Application] --> B[Shard Router]\n    B --> C{Shard Key<br/>user_id % N}\n\n    C -->|Shard 0| D[(Shard A)]\n    C -->|Shard 1| E[(Shard B)]\n    C -->|Shard 2| F[(Shard C)]\n\n    D --> G[users_0]\n    D --> H[orders_0]\n    E --> I[users_1]\n    E --> J[orders_1]\n    F --> K[users_2]\n    F --> L[orders_2]\n\n    A --> M[Read Replicas]\n    M --> N[(Replica 1)]\n    M --> O[(Replica 2)]\n\n    D -.->|async replication| N\n    E -.->|async replication| N\n    F -.->|async replication| O\n\n    style A fill:#2196f3,color:#fff\n    style B fill:#ff9800,color:#fff\n    style D fill:#4caf50,color:#fff\n    style E fill:#4caf50,color:#fff\n    style F fill:#4caf50,color:#fff\n    style M fill:#9c27b0,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-batch-processing-flow",
      children: "Mermaid: Batch Processing Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Read CSV/XLSX] --> B[Parse rows]\n    B --> C[Create entities]\n    C --> D{Batch full?}\n    D -->|No| C\n    D -->|Yes, batch_size=50| E[em.flush()]\n    E --> F[em.clear()]\n    F --> G{More rows?}\n    G -->|Yes| C\n    G -->|No| H[Final flush]\n    H --> I[Commit transaction]\n\n    subgraph Hibernate Internals\n        J[Persist context queue]\n        K[SQL statement batching]\n        L[JDBC batch execution]\n    end\n\n    E --> J\n    J --> K\n    K --> L\n\n    style E fill:#4caf50,color:#fff\n    style F fill:#ff9800,color:#fff\n    style H fill:#2196f3,color:#fff\n    style I fill:#9c27b0,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-cascade-type-decision-tree",
      children: "Mermaid: Cascade Type Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Choose Cascade Type] --> B{Child has<br/>independent lifecycle?}\n    B -->|Yes| C[Use PERSIST + MERGE only]\n    B -->|No| D{Relationship type?}\n\n    D -->|@OneToMany| E[CascadeType.ALL]\n    D -->|@ManyToMany| F[PERSIST + MERGE<br/>NEVER ALL]\n    D -->|@OneToOne| G[CascadeType.ALL]\n\n    C --> H[Parent saves -> child saved]\n    C --> I[Parent merges -> child merged]\n    C --> J[Parent delete -> NOT cascaded]\n\n    E --> K[All operations cascade]\n    F --> L[Only persist/merge propagate]\n    G --> M[Full lifecycle sync]\n\n    style C fill:#ff9800,color:#fff\n    style E fill:#4caf50,color:#fff\n    style F fill:#f44336,color:#fff\n    style G fill:#2196f3,color:#fff\n"
      })
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