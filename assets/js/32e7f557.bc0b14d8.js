"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52519],{

/***/ 7785
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_20_jpa_hibernate_md_32e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-20-jpa-hibernate-md-32e.json
const site_docs_courses_java_20_jpa_hibernate_md_32e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/20-jpa-hibernate","title":"JPA & Hibernate Deep Dive","description":"Previous Spring Data JPA","source":"@site/docs/courses/java/20-jpa-hibernate.md","sourceDirName":"courses/java","slug":"/java/20-jpa-hibernate","permalink":"/ai-engineering-journey/java/20-jpa-hibernate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"20-jpa-hibernate","slug":"/java/20-jpa-hibernate","title":"JPA & Hibernate Deep Dive","sidebar_label":"JPA & Hibernate Deep Dive","sidebar_position":20},"sidebar":"course-java","previous":{"title":"JDBC, Connection Pooling & JOOQ","permalink":"/ai-engineering-journey/java/19-jdbc-jooq"},"next":{"title":"Spring Data JPA","permalink":"/ai-engineering-journey/java/21-spring-data-jpa"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/20-jpa-hibernate.md


const frontMatter = {
	id: '20-jpa-hibernate',
	slug: '/java/20-jpa-hibernate',
	title: 'JPA & Hibernate Deep Dive',
	sidebar_label: 'JPA & Hibernate Deep Dive',
	sidebar_position: 20
};
const contentTitle = 'JPA & Hibernate Deep Dive';

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
  "value": "1. Entity Mapping Fundamentals",
  "id": "1-entity-mapping-fundamentals",
  "level": 2
}, {
  "value": "1.1 Field vs Property Access",
  "id": "11-field-vs-property-access",
  "level": 3
}, {
  "value": "1.2 @Entity and @Table",
  "id": "12-entity-and-table",
  "level": 3
}, {
  "value": "1.3 @Id and @GeneratedValue — Four Generation Strategies",
  "id": "13-id-and-generatedvalue--four-generation-strategies",
  "level": 3
}, {
  "value": "Performance Comparison",
  "id": "performance-comparison",
  "level": 4
}, {
  "value": "1.4 @Column — Fine-Tuning Column Definitions",
  "id": "14-column--fine-tuning-column-definitions",
  "level": 3
}, {
  "value": "1.5 @Basic — Fetch and Optional",
  "id": "15-basic--fetch-and-optional",
  "level": 3
}, {
  "value": "1.6 @Transient",
  "id": "16-transient",
  "level": 3
}, {
  "value": "1.7 @Enumerated",
  "id": "17-enumerated",
  "level": 3
}, {
  "value": "1.8 @Temporal (Deprecated) vs Java 8 Time API",
  "id": "18-temporal-deprecated-vs-java-8-time-api",
  "level": 3
}, {
  "value": "1.9 @Lob — Large Objects",
  "id": "19-lob--large-objects",
  "level": 3
}, {
  "value": "1.10 @CreationTimestamp and @UpdateTimestamp",
  "id": "110-creationtimestamp-and-updatetimestamp",
  "level": 3
}, {
  "value": "2. Entity Relationships",
  "id": "2-entity-relationships",
  "level": 2
}, {
  "value": "2.1 @OneToOne",
  "id": "21-onetoone",
  "level": 3
}, {
  "value": "Shared Primary Key",
  "id": "shared-primary-key",
  "level": 4
}, {
  "value": "Foreign Key",
  "id": "foreign-key",
  "level": 4
}, {
  "value": "2.2 @OneToMany / @ManyToOne (Bidirectional)",
  "id": "22-onetomany--manytoone-bidirectional",
  "level": 3
}, {
  "value": "2.3 @OneToMany (Unidirectional with @JoinColumn)",
  "id": "23-onetomany-unidirectional-with-joincolumn",
  "level": 3
}, {
  "value": "2.4 @ManyToMany",
  "id": "24-manytomany",
  "level": 3
}, {
  "value": "2.5 orphanRemoval",
  "id": "25-orphanremoval",
  "level": 3
}, {
  "value": "2.6 Relationships in equals() and hashCode()",
  "id": "26-relationships-in-equals-and-hashcode",
  "level": 3
}, {
  "value": "3. Cascade Types",
  "id": "3-cascade-types",
  "level": 2
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 3
}, {
  "value": "4. Fetching Strategies",
  "id": "4-fetching-strategies",
  "level": 2
}, {
  "value": "4.1 LAZY vs EAGER",
  "id": "41-lazy-vs-eager",
  "level": 3
}, {
  "value": "4.2 The n+1 Problem",
  "id": "42-the-n1-problem",
  "level": 3
}, {
  "value": "Solution 1: @BatchSize",
  "id": "solution-1-batchsize",
  "level": 4
}, {
  "value": "Solution 2: @Fetch(SUBSELECT)",
  "id": "solution-2-fetchsubselect",
  "level": 4
}, {
  "value": "Solution 3: JOIN FETCH (Most Common)",
  "id": "solution-3-join-fetch-most-common",
  "level": 4
}, {
  "value": "Solution 4: Entity Graphs",
  "id": "solution-4-entity-graphs",
  "level": 4
}, {
  "value": "Solution 5: Hibernate 6 Query Tuning",
  "id": "solution-5-hibernate-6-query-tuning",
  "level": 4
}, {
  "value": "4.3 Fetch Profiles",
  "id": "43-fetch-profiles",
  "level": 3
}, {
  "value": "5. Inheritance Strategies",
  "id": "5-inheritance-strategies",
  "level": 2
}, {
  "value": "5.1 SINGLE_TABLE (Default)",
  "id": "51-single_table-default",
  "level": 3
}, {
  "value": "5.2 JOINED",
  "id": "52-joined",
  "level": 3
}, {
  "value": "5.3 TABLE_PER_CLASS",
  "id": "53-table_per_class",
  "level": 3
}, {
  "value": "5.4 @MappedSuperclass",
  "id": "54-mappedsuperclass",
  "level": 3
}, {
  "value": "5.5 Polymorphic Queries Performance",
  "id": "55-polymorphic-queries-performance",
  "level": 3
}, {
  "value": "6. @MappedSuperclass and @OrderColumn",
  "id": "6-mappedsuperclass-and-ordercolumn",
  "level": 2
}, {
  "value": "@MappedSuperclass for Common Fields",
  "id": "mappedsuperclass-for-common-fields",
  "level": 3
}, {
  "value": "@OrderColumn for Ordered Collections",
  "id": "ordercolumn-for-ordered-collections",
  "level": 3
}, {
  "value": "7. Second-Level Cache",
  "id": "7-second-level-cache",
  "level": 2
}, {
  "value": "7.1 Configuration",
  "id": "71-configuration",
  "level": 3
}, {
  "value": "7.2 Entity Caching",
  "id": "72-entity-caching",
  "level": 3
}, {
  "value": "7.3 CacheConcurrencyStrategy",
  "id": "73-cacheconcurrencystrategy",
  "level": 3
}, {
  "value": "7.4 Query Cache",
  "id": "74-query-cache",
  "level": 3
}, {
  "value": "7.5 Cache Regions",
  "id": "75-cache-regions",
  "level": 3
}, {
  "value": "7.6 Cache Providers",
  "id": "76-cache-providers",
  "level": 3
}, {
  "value": "8. Hibernate Types",
  "id": "8-hibernate-types",
  "level": 2
}, {
  "value": "8.1 @Type and Custom Types",
  "id": "81-type-and-custom-types",
  "level": 3
}, {
  "value": "8.2 Custom UserType (Hibernate 6)",
  "id": "82-custom-usertype-hibernate-6",
  "level": 3
}, {
  "value": "8.3 JSON Mapping in PostgreSQL (Hibernate 6)",
  "id": "83-json-mapping-in-postgresql-hibernate-6",
  "level": 3
}, {
  "value": "8.4 Array Types",
  "id": "84-array-types",
  "level": 3
}, {
  "value": "9. Session Management",
  "id": "9-session-management",
  "level": 2
}, {
  "value": "9.1 LazyInitializationException",
  "id": "91-lazyinitializationexception",
  "level": 3
}, {
  "value": "9.2 OPEN_SESSION_IN_VIEW (OSIV)",
  "id": "92-open_session_in_view-osiv",
  "level": 3
}, {
  "value": "9.3 Identity vs Sequence ID Performance",
  "id": "93-identity-vs-sequence-id-performance",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
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
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/19-jdbc-jooq",
          children: "JDBC/JOOQ"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/21-spring-data-jpa",
          children: "Spring Data JPA"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jpa--hibernate-deep-dive",
        children: "JPA & Hibernate Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map Java entities to database tables using JPA annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure primary key generation strategies and understand their trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define entity relationships (OneToOne, OneToMany, ManyToOne, ManyToMany) with proper cascade and fetch settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and resolve the n+1 query problem using multiple strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement entity inheritance hierarchies using all four JPA strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure and tune Hibernate's second-level cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle lazy-loading exceptions and understand session management patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Hibernate-specific type mappings including JSON and custom types"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Entity Mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Entity, @Table, @Id, @GeneratedValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field vs property access strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@OneToMany, @ManyToOne, @ManyToMany"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Set over List for Many side"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fetch Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAZY vs EAGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer LAZY; use JOIN FETCH for queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_TABLE, JOINED, TABLE_PER_CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_TABLE is most performant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1st/2nd level cache, query cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2nd level for read-heavy entities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Entity Mapping] --> B[Relationships]\n    B --> C[Fetch Strategies]\n    C --> D[Inheritance]\n    D --> E[Entity Lifecycle]\n    E --> F[Caching]\n    F --> G[Performance Tuning]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " N+1 query problem is the most common Hibernate performance issue. Always verify generated SQL → look for unexpected SELECT statements in logs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-entity-mapping-fundamentals",
      children: "1. Entity Mapping Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/20-jpa-hibernate.png",
        alt: "JPA Entity Lifecycle & ORM Mapping"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JPA (Jakarta Persistence API) is the standard Java specification for object-relational mapping. Hibernate is the most popular implementation. Entities are plain Java classes annotated to describe how they map to database tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-field-vs-property-access",
      children: "1.1 Field vs Property Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JPA supports two access strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Field access"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Id"
        }), " on a field): Hibernate reads/writes fields directly, bypassing getters/setters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property access"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Id"
        }), " on a getter): Hibernate uses getter/setter methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// FIELD access — annotations on fields\n@Entity\n@Table(name = \"users\")\npublic class User {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(name = \"full_name\", nullable = false)\n    private String name;\n\n    // No special annotations needed on getters/setters\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n}\n\n// PROPERTY access — annotations on getters\n@Entity\n@Table(name = \"profiles\")\npublic class Profile {\n\n    private Long id;\n    private String displayName;\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n\n    @Column(name = \"display_name\")\n    public String getDisplayName() { return displayName; }\n    public void setDisplayName(String n) { this.displayName = n; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Never mix access types within an entity hierarchy without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Access"
      }), ". The placement of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Id"
      }), " determines the strategy for the whole class hierarchy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Explicitly mixing access types\n@Entity\n@Access(AccessType.FIELD)\npublic class MixedAccessEntity {\n\n    @Id\n    private Long id;\n\n    @Transient\n    private String internalValue;\n\n    @Access(AccessType.PROPERTY)\n    @Column(name = \"computed_value\")\n    public String getComputedValue() {\n        return internalValue != null ? internalValue.toUpperCase() : null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-entity-and-table",
      children: "1.2 @Entity and @Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity                                 // Marks as JPA entity (must have no-arg constructor)\n@Table(name = \"blog_posts\")            // Maps to table name (optional, defaults to class name)\npublic class BlogPost {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Entity(name = \"Post\")"
        }), " — sets the JPQL entity name used in queries: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT p FROM Post p"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Table"
        }), " accepts ", (0,jsx_runtime.jsx)(_components.code, {
          children: "schema"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catalog"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uniqueConstraints"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "indexes"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity(name = \"Post\")\n@Table(\n    name = \"blog_posts\",\n    schema = \"blog\",\n    uniqueConstraints = @UniqueConstraint(name = \"uk_slug\", columnNames = \"slug\"),\n    indexes = @Index(name = \"idx_posts_author\", columnList = \"author_id\")\n)\npublic class BlogPost {\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-id-and-generatedvalue--four-generation-strategies",
      children: "1.3 @Id and @GeneratedValue — Four Generation Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class IdentityExample {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  // AUTO_INCREMENT, DB assigns after insert\n    private Long id;\n\n    // INSERT → Hibernate needs immediate insert to know the ID\n    // Cannot batch inserts (ID must be known before statement submission)\n    // Best for simple single-row operations\n}\n\n@Entity\npublic class SequenceExample {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"post_seq\")\n    @SequenceGenerator(\n        name = \"post_seq\",\n        sequenceName = \"post_sequence\",\n        allocationSize = 50               // Pre-allocate 50 IDs per trip to DB\n    )\n    private Long id;\n\n    // Hibernate pre-fetches ID values from the sequence\n    // Enables batch inserts (IDs known before flushing)\n    // allocationSize should match the DB sequence increment for performance\n    // Fastest strategy for most applications\n}\n\n@Entity\npublic class TableExample {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.TABLE, generator = \"id_table\")\n    @TableGenerator(\n        name = \"id_table\",\n        table = \"id_generator\",\n        pkColumnName = \"entity_name\",\n        valueColumnName = \"next_id\",\n        allocationSize = 50\n    )\n    private Long id;\n\n    // Uses a separate database table to track ID counters\n    // Portable across all databases\n    // Poor performance under contention (row-level locking)\n    // Avoid unless you cannot use SEQUENCE or IDENTITY\n}\n\n@Entity\npublic class UuidExample {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.UUID)\n    private UUID id;\n\n    // Hibernate 6+ — generates RFC 4122 UUIDs automatically\n    // No round-trip to DB to determine ID\n    // Great for distributed systems and offline-first apps\n    // Storage: BINARY(16) in MySQL, UUID in PostgreSQL\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "performance-comparison",
      children: "Performance Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DB Round Trips"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch Inserts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contention"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Portability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDENTITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEQUENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per allocationSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per allocationSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UUID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-column--fine-tuning-column-definitions",
      children: "1.4 @Column — Fine-Tuning Column Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"products\")\npublic class Product {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(name = \"product_name\", nullable = false, unique = true, length = 150)\n    private String name;\n\n    @Column(nullable = false)\n    private String description;                  // Default: VARCHAR(255), nullable=true\n\n    @Column(precision = 10, scale = 2)          // DECIMAL(10,2)\n    private BigDecimal price;\n\n    @Column(columnDefinition = \"TEXT\")          // Raw SQL column DDL\n    private String longDescription;\n\n    @Column(columnDefinition = \"BOOLEAN DEFAULT FALSE\")\n    private boolean archived;\n\n    @Column(name = \"created_at\", updatable = false)\n    private LocalDateTime createdAt;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " — overrides column name (defaults to field name)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "nullable"
        }), " — adds NOT NULL constraint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "unique"
        }), " — adds UNIQUE constraint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "length"
        }), " — VARCHAR length (default 255), ignored for non-String types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "precision"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scale"
        }), " — for decimal types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "columnDefinition"
        }), " — raw DDL fragment, database-specific"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-basic--fetch-and-optional",
      children: "1.5 @Basic — Fetch and Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Document {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Basic(fetch = FetchType.LAZY)          // Load on demand (requires bytecode enhancement)\n    @Lob\n    private byte[] content;\n\n    @Basic(optional = false)                 // Marks as not nullable (similar to nullable=false)\n    private String title;\n\n    @Basic                                      // Default: FetchType.EAGER, optional=true\n    private String summary;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Basic(fetch = FetchType.LAZY)"
      }), " defers loading of large fields. Requires bytecode enhancement (Hibernate EnhancementPlugin for Gradle/Maven):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.hibernate.orm.tooling</groupId>\n    <artifactId>hibernate-enhance-maven-plugin</artifactId>\n    <version>${hibernate.version}</version>\n    <executions>\n        <execution>\n            <configuration>\n                <enableLazyInitialization>true</enableLazyInitialization>\n            </configuration>\n            <goals><goal>enhance</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-transient",
      children: "1.6 @Transient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fields not persisted to the database:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Invoice {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Column(name = \"subtotal_cents\")\n    private int subtotalCents;\n\n    @Column(name = \"tax_cents\")\n    private int taxCents;\n\n    @Transient\n    private int totalCents;            // Not persisted, computed at runtime\n\n    @PostLoad\n    private void computeTotal() {\n        this.totalCents = this.subtotalCents + this.taxCents;\n    }\n\n    public int getTotalCents() {\n        return totalCents;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-enumerated",
      children: "1.7 @Enumerated"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum OrderStatus {\n    PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED\n}\n\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Enumerated(EnumType.ORDINAL)          // Stores 0, 1, 2, 3, 4 — fragile if enum order changes\n    private OrderStatus statusOrdinal;\n\n    @Enumerated(EnumType.STRING)           // Stores 'PENDING', 'CONFIRMED', etc. — prefer this\n    private OrderStatus statusString;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Always prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EnumType.STRING"
        }), "."]
      }), " ORDINAL breaks if enum constants are reordered or new values are inserted. If you must use ORDINAL, never reorder the enum class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-temporal-deprecated-vs-java-8-time-api",
      children: "1.8 @Temporal (Deprecated) vs Java 8 Time API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// DEPRECATED — old-style date mapping\n@Entity\n@SuppressWarnings(\"deprecation\")\npublic class OldSchoolEvent {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Temporal(TemporalType.TIMESTAMP)       // java.util.Date → TIMESTAMP\n    private Date createdAt;\n\n    @Temporal(TemporalType.DATE)            // java.util.Date → DATE (no time)\n    private Date eventDate;\n\n    @Temporal(TemporalType.TIME)            // java.util.Date → TIME (no date)\n    private Date startTime;\n}\n\n// MODERN — Java 8+ time API (no @Temporal needed)\n@Entity\n@Table(name = \"events\")\npublic class Event {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    private LocalDate eventDate;            // maps to DATE\n    private LocalTime startTime;            // maps to TIME\n    private LocalDateTime createdAt;        // maps to TIMESTAMP\n    private ZonedDateTime zonedTimestamp;   // maps to TIMESTAMP WITH TIME ZONE\n    private OffsetDateTime offsetTimestamp; // maps to TIMESTAMP WITH TIME ZONE\n    private Instant instant;                // maps to TIMESTAMP\n    private Duration duration;              // maps to BIGINT (nanos)\n    private Period period;                  // maps to VARCHAR\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hibernate 6 automatically handles the Java 8 time types. No annotations needed. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Temporal"
      }), " is only for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.Date"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.Calendar"
      }), " — avoid these in new code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-lob--large-objects",
      children: "1.9 @Lob — Large Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"attachments\")\npublic class Attachment {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Lob\n    @Basic(fetch = FetchType.LAZY)\n    private byte[] data;                // Maps to BLOB (PostgreSQL: BYTEA, MySQL: LONGBLOB)\n\n    @Lob\n    @Column(columnDefinition = \"TEXT\")\n    private String content;             // Maps to CLOB (PostgreSQL: TEXT, MySQL: LONGTEXT)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Lob"
      }), " maps to database-specific large object types. For PostgreSQL, you may need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Type(JsonType.class)"
      }), " instead, depending on use case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-creationtimestamp-and-updatetimestamp",
      children: "1.10 @CreationTimestamp and @UpdateTimestamp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"auditable_entities\")\npublic class AuditableEntity {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @CreationTimestamp                    // Set once on persist\n    @Column(name = \"created_at\", updatable = false, nullable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp                      // Updated on every modification\n    @Column(name = \"updated_at\", nullable = false)\n    private LocalDateTime updatedAt;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These are Hibernate-specific annotations (not JPA standard). For a JPA-standard approach, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PrePersist"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreUpdate"
      }), " lifecycle callbacks or Spring Data JPA auditing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-entity-relationships",
      children: "2. Entity Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-onetoone",
      children: "2.1 @OneToOne"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "shared-primary-key",
      children: "Shared Primary Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"users\")\npublic class User {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @OneToOne(mappedBy = \"user\", cascade = CascadeType.ALL, optional = false)\n    private UserProfile profile;\n\n    // getters, setters\n}\n\n@Entity\n@Table(name = \"user_profiles\")\npublic class UserProfile {\n\n    @Id\n    @Column(name = \"user_id\")               // Same PK as User\n    private Long id;\n\n    @OneToOne\n    @MapsId                                    // Shares PK with User\n    @JoinColumn(name = \"user_id\")\n    private User user;\n\n    private String bio;\n    private String avatarUrl;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "foreign-key",
      children: "Foreign Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"employees\")\npublic class Employee {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToOne(cascade = CascadeType.ALL)\n    @JoinColumn(name = \"office_id\", referencedColumnName = \"id\")\n    private Office assignedOffice;\n}\n\n@Entity\n@Table(name = \"offices\")\npublic class Office {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToOne(mappedBy = \"assignedOffice\")      // Inverse side\n    private Employee occupant;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mappedBy"
        }), " — always on the inverse (non-owning) side, references the field name on the owning side"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@JoinColumn"
        }), " — on the owning side, defines the FK column"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "optional = false"
        }), " — adds NOT NULL constraint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cascade"
        }), " — propagates operations to the associated entity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-onetomany--manytoone-bidirectional",
      children: "2.2 @OneToMany / @ManyToOne (Bidirectional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"categories\")\npublic class Category {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String name;\n\n    @OneToMany(mappedBy = \"category\", cascade = CascadeType.ALL, orphanRemoval = true)\n    private List<Product> products = new ArrayList<>();\n\n    public void addProduct(Product product) {\n        products.add(product);\n        product.setCategory(this);\n    }\n\n    public void removeProduct(Product product) {\n        products.remove(product);\n        product.setCategory(null);\n    }\n}\n\n@Entity\n@Table(name = \"products\")\npublic class Product {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String title;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"category_id\")\n    private Category category;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mappedBy"
        }), " on the one side."]
      }), " The many side is always the owning side."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Always provide ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addXxx"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "removeXxx"
        }), " helper methods."]
      }), " They keep both sides in sync."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Always initialize collections"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new ArrayList<>()"
      }), " to avoid null checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-onetomany-unidirectional-with-joincolumn",
      children: "2.3 @OneToMany (Unidirectional with @JoinColumn)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"orders\")\npublic class Order {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)\n    @JoinColumn(name = \"order_id\")          // FK on the child table, no mappedBy\n    private List<OrderItem> items = new ArrayList<>();\n}\n\n@Entity\n@Table(name = \"order_items\")\npublic class OrderItem {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String productName;\n    private int quantity;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This approach puts the FK on the child table without requiring a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mappedBy"
      }), " back-reference in the child entity. It's simpler but less expressive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-manytomany",
      children: "2.4 @ManyToMany"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"students\")\npublic class Student {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String name;\n\n    @ManyToMany\n    @JoinTable(\n        name = \"student_courses\",\n        joinColumns = @JoinColumn(name = \"student_id\"),\n        inverseJoinColumns = @JoinColumn(name = \"course_id\")\n    )\n    private Set<Course> courses = new HashSet<>();\n\n    public void addCourse(Course course) {\n        courses.add(course);\n        course.getStudents().add(this);\n    }\n\n    public void removeCourse(Course course) {\n        courses.remove(course);\n        course.getStudents().remove(this);\n    }\n}\n\n@Entity\n@Table(name = \"courses\")\npublic class Course {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String title;\n\n    @ManyToMany(mappedBy = \"courses\")\n    private Set<Student> students = new HashSet<>();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Set<>"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<>"
        }), " for ManyToMany to avoid duplicate rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@JoinTable"
        }), " defines the junction table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "joinColumns"
        }), " — FK to the owning entity's table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "inverseJoinColumns"
        }), " — FK to the inverse entity's table"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid cascading ALL on ManyToMany (use PERSIST + MERGE only)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-orphanremoval",
      children: "2.5 orphanRemoval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Author {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL, orphanRemoval = true)\n    private List<Book> books = new ArrayList<>();\n}\n\n// When a Book is removed from the list and the owning Author is saved:\nauthor.getBooks().remove(0);\nauthorRepository.save(author);       // DELETE FROM books WHERE id = ?\n\n// Without orphanRemoval=true, the FK would be set to NULL instead of deleting the row\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "orphanRemoval = true"
      }), " deletes child entities when they are removed from the parent's collection. Only valid on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToOne"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToMany"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-relationships-in-equals-and-hashcode",
      children: "2.6 Relationships in equals() and hashCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Book {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String title;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"author_id\")\n    private Author author;\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n\n        Book other = (Book) o;\n\n        // Use business key, not ID (ID may be null before persist)\n        return title != null && title.equals(other.title);\n    }\n\n    @Override\n    public int hashCode() {\n        // Constant hash for transient entities; Hibernate guarantees\n        // same object identity within a session\n        return getClass().hashCode();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules for equals/hashCode with JPA:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never use the auto-generated ID in equals/hashCode (null before persist, changes after merge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never navigate lazy associations in equals/hashCode (triggers lazy loading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a business key (natural ID) when available, or fall back to the class-based hash"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ManyToOne"
        }), " associations are especially dangerous — they trigger n+1 in collections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-cascade-types",
      children: "3. Cascade Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cascade types determine which entity state transitions propagate from parent to child."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Post {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(mappedBy = \"post\", cascade = CascadeType.ALL)\n    private List<Comment> comments = new ArrayList<>();\n\n    // Saving a Post also saves all Comments\n    // Deleting a Post also deletes all Comments\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cascade Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "persist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "merge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "remove"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "refresh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "detach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERSIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MERGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REMOVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REFRESH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DETACH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// CascadeType.PERSIST — only propagate persist (safe for ManyToMany)\n@ManyToMany(cascade = CascadeType.PERSIST)\nprivate Set<Tag> tags = new HashSet<>();\n\n// CascadeType.MERGE — propagate merge (detached entities re-attached)\n@OneToMany(mappedBy = \"order\", cascade = CascadeType.MERGE)\nprivate List<OrderItem> items = new ArrayList<>();\n\n// CascadeType.REMOVE — cascade delete (orphanRemoval is safer)\n@OneToMany(mappedBy = \"invoice\", cascade = CascadeType.REMOVE)\nprivate List<LineItem> lineItems = new ArrayList<>();\n\n// CascadeType.REFRESH — reload from DB\n@OneToOne(cascade = CascadeType.REFRESH)\nprivate RefreshToken token;\n\n// CascadeType.DETACH — remove from persistence context\n@OneToMany(mappedBy = \"session\", cascade = CascadeType.DETACH)\nprivate List<SessionData> sessionDataList;\n\n// CascadeType.ALL — everything (convenient, but be careful with REMOVE on shared entities)\n@OneToMany(mappedBy = \"owner\", cascade = CascadeType.ALL, orphanRemoval = true)\nprivate List<OwnedEntity> ownedEntities = new ArrayList<>();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " Never use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CascadeType.ALL"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CascadeType.REMOVE"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToMany"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToOne"
      }), " — you will delete entities that belong to other owners."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-fetching-strategies",
      children: "4. Fetching Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-lazy-vs-eager",
      children: "4.1 LAZY vs EAGER"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Library {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(mappedBy = \"library\", fetch = FetchType.LAZY)     // Default for ToMany\n    private List<Book> books = new ArrayList<>();\n\n    @ManyToOne(fetch = FetchType.LAZY)                            // Always set LAZY on ToOne!\n    @JoinColumn(name = \"address_id\")\n    private Address address;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " All associations should be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FetchType.LAZY"
      }), ". EAGER is almost always wrong:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EAGER forces loading even when not needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EAGER on multiple associations causes Cartesian products"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EAGER has no effect on closed sessions (already-loaded data only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EAGER makes it impossible to write performant queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-the-n1-problem",
      children: "4.2 The n+1 Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// n+1 query problem\nList<Post> posts = entityManager\n    .createQuery(\"SELECT p FROM Post p\", Post.class)\n    .getResultList();                              // 1 query for all posts\n\nfor (Post post : posts) {\n    System.out.println(post.getComments().size());  // n queries for comments!\n}\n\n// Total: 1 + n = n+1 queries\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-1-batchsize",
      children: "Solution 1: @BatchSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Post {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(mappedBy = \"post\")\n    @BatchSize(size = 25)                   // Load 25 collections at once\n    private List<Comment> comments = new ArrayList<>();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@BatchSize"
      }), " loads lazy collections in batches of N. Instead of n queries, you get n/25 queries. It's transparent to the application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-2-fetchsubselect",
      children: "Solution 2: @Fetch(SUBSELECT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Post {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(mappedBy = \"post\")\n    @Fetch(FetchMode.SUBSELECT)             // SELECT ... WHERE post_id IN (SELECT id FROM posts)\n    private List<Comment> comments = new ArrayList<>();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FetchMode.SUBSELECT"
      }), " rewrites the collection load into a single subselect query. It loads comments for ALL previously loaded posts in one round trip."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-3-join-fetch-most-common",
      children: "Solution 3: JOIN FETCH (Most Common)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JPQL with JOIN FETCH\nTypedQuery<Post> query = entityManager.createQuery(\n    \"SELECT DISTINCT p FROM Post p LEFT JOIN FETCH p.comments\", Post.class);\nList<Post> posts = query.getResultList();\n// One query, all comments loaded eagerly — no n+1\n\n// Criteria API equivalent\nCriteriaBuilder cb = entityManager.getCriteriaBuilder();\nCriteriaQuery<Post> cq = cb.createQuery(Post.class);\nRoot<Post> root = cq.from(Post.class);\nroot.fetch(\"comments\", JoinType.LEFT);\ncq.select(root).distinct(true);\nList<Post> result = entityManager.createQuery(cq).getResultList();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "JOIN FETCH"
        }), " loads associations eagerly for that specific query"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DISTINCT"
        }), " to avoid duplicate root entities from inner joins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "LEFT JOIN FETCH"
        }), " for optional associations, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JOIN FETCH"
        }), " for required ones"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-4-entity-graphs",
      children: "Solution 4: Entity Graphs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Named entity graph\n@Entity\n@Table(name = \"posts\")\n@NamedEntityGraph(\n    name = \"Post.comments\",\n    attributeNodes = @NamedAttributeNode(\"comments\")\n)\npublic class Post {\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @OneToMany(mappedBy = \"post\")\n    private List<Comment> comments = new ArrayList<>();\n}\n\n// Usage\n@EntityGraph(value = \"Post.comments\", type = EntityGraphType.LOAD)\n@Query(\"SELECT p FROM Post p\")\nList<Post> findAllWithComments();\n\n// Programmatic entity graph (no named graph needed)\n@Query(\"SELECT p FROM Post p\")\n@EntityGraph(attributePaths = {\"comments\", \"comments.author\"})\nList<Post> findAllWithCommentsAndAuthors();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entity graphs are the most flexible approach — they can be defined at the repository method level and compose well."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-5-hibernate-6-query-tuning",
      children: "Solution 5: Hibernate 6 Query Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Hibernate 6 window-based batch fetching\n@OneToMany(mappedBy = \"post\")\n@BatchSize(size = 25)\nprivate List<Comment> comments = new ArrayList<>();\n\n// Hibernate 6.2+ array container optimization\n// settings:\n// hibernate.query.batch_fetch_style=PADDED\n// hibernate.query.fail_on_pagination_over_collection_fetch=true\n\n// Window-based batch loading (Hibernate 6 default)\n// SELECT c FROM Comment c WHERE c.post_id IN (?, ?, ?, ?, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-fetch-profiles",
      children: "4.3 Fetch Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Define a fetch profile (XML or annotation)\n@NamedEntityGraphs({\n    @NamedEntityGraph(name = \"Post.summary\",\n        attributeNodes = {@NamedAttributeNode(\"title\"), @NamedAttributeNode(\"createdAt\")}),\n    @NamedEntityGraph(name = \"Post.detail\",\n        attributeNodes = {\n            @NamedAttributeNode(\"comments\"),\n            @NamedAttributeNode(value = \"author\", subgraph = \"author-detail\")\n        },\n        subgraphs = @NamedSubgraph(name = \"author-detail\",\n            attributeNodes = @NamedAttributeNode(\"profile\")))\n})\n@Entity\npublic class Post {\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-inheritance-strategies",
      children: "5. Inheritance Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-single_table-default",
      children: "5.1 SINGLE_TABLE (Default)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Inheritance(strategy = InheritanceType.SINGLE_TABLE)     // Default\n@DiscriminatorColumn(name = \"vehicle_type\", discriminatorType = DiscriminatorType.STRING)\n@DiscriminatorValue(\"VEHICLE\")\npublic abstract class Vehicle {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String manufacturer;\n    private int year;\n}\n\n@Entity\n@DiscriminatorValue(\"CAR\")\npublic class Car extends Vehicle {\n\n    private int doors;\n    private boolean isElectric;\n}\n\n@Entity\n@DiscriminatorValue(\"TRUCK\")\npublic class Truck extends Vehicle {\n\n    private double payloadCapacity;\n    private int axles;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Single table"
      }), " stores all classes in one table with nullable columns for subclass-specific fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fastest reads (no joins)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polymorphic queries are efficient"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nullable columns for subclass-specific data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot have NOT NULL constraints on subclass columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Table grows wide with many subclasses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-joined",
      children: "5.2 JOINED"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Inheritance(strategy = InheritanceType.JOINED)\n@DiscriminatorColumn(name = \"payment_type\")\npublic abstract class Payment {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private BigDecimal amount;\n    private LocalDateTime paidAt;\n}\n\n@Entity\n@DiscriminatorValue(\"CC\")\npublic class CreditCardPayment extends Payment {\n\n    private String cardNumber;\n    private String cardHolderName;\n    private String expiryDate;\n}\n\n@Entity\n@DiscriminatorValue(\"PAYPAL\")\npublic class PayPalPayment extends Payment {\n\n    private String paypalEmail;\n    private String transactionId;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Joined"
      }), " creates one table per class, with subclass tables referencing the parent via FK."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normalized schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT NULL constraints on subclass columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No wasted space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polymorphic queries need joins (slower)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert requires multiple statements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-table_per_class",
      children: "5.3 TABLE_PER_CLASS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)\npublic abstract class Account {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String accountNumber;\n    private BigDecimal balance;\n}\n\n@Entity\n@Table(name = \"checking_accounts\")\npublic class CheckingAccount extends Account {\n\n    private double overdraftLimit;\n}\n\n@Entity\n@Table(name = \"savings_accounts\")\npublic class SavingsAccount extends Account {\n\n    private double interestRate;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Table per class"
      }), " creates a complete table for each concrete class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No nullable columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast reads for concrete type queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No joins for concrete type"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema duplication (base class columns repeated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polymorphic queries use UNION (expensive)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID generation cannot use IDENTITY (requires TABLE/SEQUENCE)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-mappedsuperclass",
      children: "5.4 @MappedSuperclass"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@MappedSuperclass                                // Not an entity — no table\npublic abstract class BaseEntity {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", updatable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp\n    @Column(name = \"updated_at\")\n    private LocalDateTime updatedAt;\n\n    // Getters and setters\n}\n\n@Entity\n@Table(name = \"articles\")\npublic class Article extends BaseEntity {\n\n    private String title;\n    private String content;\n}\n\n@Entity\n@Table(name = \"videos\")\npublic class Video extends BaseEntity {\n\n    private String url;\n    private int durationSeconds;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@MappedSuperclass"
      }), " is not an entity — it cannot be queried, and there is no table for it. Each subclass gets its own copy of the mapped columns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-polymorphic-queries-performance",
      children: "5.5 Polymorphic Queries Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Polymorphic query — hits all subclasses\nList<Vehicle> allVehicles = entityManager\n    .createQuery(\"SELECT v FROM Vehicle v\", Vehicle.class)\n    .getResultList();\n\n// Concrete-type query — hits only one subclass table\nList<Car> cars = entityManager\n    .createQuery(\"SELECT c FROM Car c\", Car.class)\n    .getResultList();\n\n// Performance characteristics:\n// SINGLE_TABLE:     Both queries hit one table — fast\n// JOINED:           Polymorphic = parent JOIN child; concrete = parent JOIN child (same!)\n// TABLE_PER_CLASS:  Polymorphic = UNION ALL across all tables; concrete = single table\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-mappedsuperclass-and-ordercolumn",
      children: "6. @MappedSuperclass and @OrderColumn"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mappedsuperclass-for-common-fields",
      children: "@MappedSuperclass for Common Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@MappedSuperclass\npublic abstract class BaseAuditableEntity {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp\n    @Column(name = \"updated_at\", nullable = false)\n    private LocalDateTime updatedAt;\n\n    @Version                                           // Optimistic locking\n    private Long version;\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\n    public Long getVersion() { return version; }\n}\n\n@Entity\n@Table(name = \"tags\")\npublic class Tag extends BaseAuditableEntity {\n\n    private String name;\n\n    @ManyToMany(mappedBy = \"tags\")\n    private Set<Post> posts = new HashSet<>();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ordercolumn-for-ordered-collections",
      children: "@OrderColumn for Ordered Collections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"playlists\")\npublic class Playlist {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String name;\n\n    @OneToMany(mappedBy = \"playlist\", cascade = CascadeType.ALL, orphanRemoval = true)\n    @OrderColumn(name = \"track_position\")               // Persists list index\n    private List<Track> tracks = new ArrayList<>();\n}\n\n@Entity\n@Table(name = \"tracks\")\npublic class Track {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String title;\n    private int durationSeconds;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"playlist_id\")\n    private Playlist playlist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@OrderColumn"
      }), " maintains the List index in a database column. Without it, the list order is undefined (no ORDER BY) or requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OrderBy(\"propertyName\")"
      }), " for in-memory sorting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-second-level-cache",
      children: "7. Second-Level Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-configuration",
      children: "7.1 Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nspring.jpa.properties.hibernate.cache.use_second_level_cache=true\nspring.jpa.properties.hibernate.cache.use_query_cache=true\nspring.jpa.properties.hibernate.cache.region.factory_class=org.hibernate.cache.jcache.JCacheRegionFactory\nspring.jpa.properties.hibernate.javax.cache.provider=org.ehcache.jsr107.EhcacheCachingProvider\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-entity-caching",
      children: "7.2 Entity Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"countries\")\n@Cacheable                                      // Enables 2LC for this entity\n@Cache(usage = CacheConcurrencyStrategy.READ_ONLY, region = \"referenceData\")\npublic class Country {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Column(nullable = false, unique = true)\n    private String code;\n\n    @Column(nullable = false)\n    private String name;\n\n    @OneToMany(mappedBy = \"country\")\n    private List<City> cities = new ArrayList<>();\n}\n\n@Entity\n@Table(name = \"products\")\n@Cacheable\n@Cache(usage = CacheConcurrencyStrategy.READ_WRITE, region = \"products\")\npublic class Product {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String sku;\n    private String name;\n    private BigDecimal price;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-cacheconcurrencystrategy",
      children: "7.3 CacheConcurrencyStrategy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "READ_ONLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable, no updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference data (countries, statuses)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "READ_WRITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft locks, good for read-heavy mutable data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Products, user profiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONSTRICT_READ_WRITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No locks, may serve stale data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely-updated but mutable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSACTIONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full XA support, requires JTA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mission-critical, needs JTA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-query-cache",
      children: "7.4 Query Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Enable query caching\n@QueryHints(@QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_CACHEABLE, value = \"true\"))\n@Query(\"SELECT c FROM Country c WHERE c.code = :code\")\nCountry findByCode(@Param(\"code\") String code);\n\n// Programmatic\nTypedQuery<Country> query = entityManager\n    .createQuery(\"SELECT c FROM Country c\", Country.class);\nquery.setHint(\"org.hibernate.cacheable\", \"true\");\nList<Country> countries = query.getResultList();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The query cache caches query result identifiers, not the entities themselves. Entities are cached separately in the 2LC. A change to any entity referenced in a cached query invalidates that query's cache entry."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-cache-regions",
      children: "7.5 Cache Regions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Distinct regions allow different TTL and eviction policies per entity group\n@Cache(usage = CacheConcurrencyStrategy.READ_ONLY, region = \"referenceData\")\n@Entity\npublic class State { }\n\n@Cache(usage = CacheConcurrencyStrategy.READ_WRITE, region = \"businessData\")\n@Entity\npublic class Order { }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure region timeouts in EHCache:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<config xmlns=\"http://www.ehcache.org/v3\">\n    <cache alias=\"referenceData\">\n        <expiry><ttl unit=\"hours\">24</ttl></expiry>\n        <resources>\n            <heap unit=\"entries\">1000</heap>\n            <offheap unit=\"MB\">10</offheap>\n        </resources>\n    </cache>\n    <cache alias=\"businessData\">\n        <expiry><ttl unit=\"minutes\">15</ttl></expiry>\n        <resources>\n            <heap unit=\"entries\">2000</heap>\n            <offheap unit=\"MB\">50</offheap>\n        </resources>\n    </cache>\n</config>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-cache-providers",
      children: "7.6 Cache Providers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Provider"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spring Boot Starter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clustering"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EHCache 3.x"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-cache"
            }), " + ehcache XML"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terracotta"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caffeine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "com.github.ben-manes.caffeine:caffeine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (near-Caffeine)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (local only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-data-redis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (distributed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Caffeine configuration\n@Configuration\npublic class CacheConfig {\n\n    @Bean\n    public CacheManager cacheManager() {\n        CaffeineCacheManager manager = new CaffeineCacheManager();\n        manager.setCaffeine(Caffeine.newBuilder()\n            .initialCapacity(100)\n            .maximumSize(500)\n            .expireAfterWrite(10, TimeUnit.MINUTES));\n        return manager;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-hibernate-types",
      children: "8. Hibernate Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-type-and-custom-types",
      children: "8.1 @Type and Custom Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Hibernate 6 @Type annotation\n@Entity\n@Table(name = \"documents\")\npublic class Document {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Type(JsonType.class)                       // Map JSON column to Java Map/List\n    @Column(name = \"metadata\", columnDefinition = \"jsonb\")\n    private Map<String, Object> metadata;\n\n    @Type(JsonType.class)\n    @Column(columnDefinition = \"jsonb\")\n    private List<String> tags;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-custom-usertype-hibernate-6",
      children: "8.2 Custom UserType (Hibernate 6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PhoneNumberType implements UserType<PhoneNumber> {\n\n    @Override\n    public int getSqlType() {\n        return Types.VARCHAR;\n    }\n\n    @Override\n    public Class<PhoneNumber> returnedClass() {\n        return PhoneNumber.class;\n    }\n\n    @Override\n    public PhoneNumber nullSafeGet(ResultSet rs, int position,\n                                    SharedSessionContractImplementor session,\n                                    Object owner) throws SQLException {\n        String value = rs.getString(position);\n        return value != null ? PhoneNumber.parse(value) : null;\n    }\n\n    @Override\n    public void nullSafeSet(PreparedStatement st, PhoneNumber value,\n                            int index, SharedSessionContractImplementor session)\n                            throws SQLException {\n        if (value == null) {\n            st.setNull(index, Types.VARCHAR);\n        } else {\n            st.setString(index, value.format());\n        }\n    }\n\n    @Override\n    public PhoneNumber deepCopy(PhoneNumber value) {\n        return value != null ? new PhoneNumber(value.getCountryCode(),\n                                               value.getNumber()) : null;\n    }\n\n    @Override\n    public boolean isMutable() {\n        return false;\n    }\n\n    @Override\n    public boolean equals(PhoneNumber x, PhoneNumber y) {\n        return Objects.equals(x, y);\n    }\n\n    @Override\n    public int hashCode(PhoneNumber x) {\n        return x != null ? x.hashCode() : 0;\n    }\n}\n\n// Usage\n@Entity\npublic class Contact {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Type(PhoneNumberType.class)\n    @Column(name = \"phone_number\", length = 20)\n    private PhoneNumber phone;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-json-mapping-in-postgresql-hibernate-6",
      children: "8.3 JSON Mapping in PostgreSQL (Hibernate 6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"customers\")\n@TypeDef(name = \"jsonb\", typeClass = JsonType.class)\npublic class Customer {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String name;\n\n    @Type(JsonType.class)\n    @Column(name = \"preferences\", columnDefinition = \"jsonb\")\n    private CustomerPreferences preferences;\n\n    @Type(JsonType.class)\n    @Column(name = \"tags\", columnDefinition = \"jsonb\")\n    private List<String> tags;\n\n    @Type(JsonType.class)\n    @Column(name = \"audit_log\", columnDefinition = \"jsonb\")\n    private List<AuditEntry> auditLog;\n}\n\npublic class CustomerPreferences {\n    private boolean newsletterEnabled;\n    private String preferredLanguage;\n    private Map<String, String> notificationSettings;\n\n    // getters, setters, no-arg constructor\n}\n\npublic class AuditEntry {\n    private LocalDateTime timestamp;\n    private String action;\n    private String details;\n\n    // getters, setters, no-arg constructor\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-array-types",
      children: "8.4 Array Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Hibernate 6 array type mapping (PostgreSQL)\n@Entity\n@Table(name = \"articles\")\npublic class Article {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Column(name = \"tag_list\", columnDefinition = \"text[]\")\n    private String[] tags;\n\n    @Column(name = \"scores\", columnDefinition = \"integer[]\")\n    private Integer[] scores;\n\n    @Column(name = \"ratings\", columnDefinition = \"numeric[]\")\n    private BigDecimal[] ratings;\n}\n\n// Using List with Hibernate 6 array types\n@Column(name = \"keywords\", columnDefinition = \"text[]\")\nprivate List<String> keywords;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-session-management",
      children: "9. Session Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-lazyinitializationexception",
      children: "9.1 LazyInitializationException"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// This throws LazyInitializationException\n@Service\n@Transactional(readOnly = true)\npublic class PostService {\n\n    public List<Post> findAllPosts() {\n        List<Post> posts = postRepository.findAll();\n        // Session is still open\n        for (Post post : posts) {\n            System.out.println(post.getComments().size());  // OK within transaction\n        }\n        return posts;\n    }\n}\n\n// Outside the transaction:\nList<Post> posts = postService.findAllPosts();\n// Session is closed now\nfor (Post post : posts) {\n    System.out.println(post.getComments().size());   // LAZY INIT EXCEPTION!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-open_session_in_view-osiv",
      children: "9.2 OPEN_SESSION_IN_VIEW (OSIV)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\n# Enabled by default in Spring Boot\nspring.jpa.open-in-view=true\n\n# When enabled, the Hibernate session stays open for the entire HTTP request\n# Lazy loading works in view/controller layer\n# WARNING: can cause session and connection leaks, unexpected lazy loads\n# Disable for production:\nspring.jpa.open-in-view=false    # Prefer explicit fetching\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// With OSIV disabled, always fetch what you need in the service layer\n@Service\npublic class PostService {\n\n    @Transactional(readOnly = true)\n    public List<PostDto> getPostSummaries() {\n        return postRepository.findAllWithCommentsAndAuthors()\n            .stream()\n            .map(post -> new PostDto(post.getId(), post.getTitle(),\n                                     post.getComments().size(),\n                                     post.getAuthor().getName()))\n            .toList();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-identity-vs-sequence-id-performance",
      children: "9.3 Identity vs Sequence ID Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Hibernate 6 batches require SEQUENCE or UUID\n// With IDENTITY, batch inserts are disabled because\n// Hibernate must execute the INSERT to get the ID\n\n// Perf comparison: inserting 10,000 rows\n//\n// IDENTITY without batching:   10,000 individual INSERTs\n// SEQUENCE with batch(50):    200 INSERTs with 50 rows each\n// UUID without batching:      10,000 INSERTs (but IDs known upfront)\n//\n// Winner: SEQUENCE with allocationSize matching batch size\n\n// Optimal configuration:\n@Id\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"batch_seq\")\n@SequenceGenerator(name = \"batch_seq\", allocationSize = 50)\nprivate Long id;\n\n// application.properties\nspring.jpa.properties.hibernate.jdbc.batch_size=50\nspring.jpa.properties.hibernate.order_inserts=true\nspring.jpa.properties.hibernate.order_updates=true\nspring.jpa.properties.hibernate.jdbc.batch_versioned_data=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "@Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPA entity mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps class to table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain model persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@OneToMany"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mappedBy, cascade, fetch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent-child relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N+1 Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra queries for lazy collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN FETCH or EntityGraph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_TABLE vs JOINED vs TABLE_PER_CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_TABLE is fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class hierarchy persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2nd Level Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-session entity cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only for reference data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fetch Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cascade Options"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@OneToOne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALL, PERSIST, MERGE, REMOVE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@OneToMany"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAZY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSIST, MERGE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ManyToOne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSIST, MERGE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ManyToMany"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LAZY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PERSIST, MERGE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read-Heavy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write-Heavy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reporting"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EAGER Fetch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2nd Level Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN FETCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Fetching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the most common cause of the N+1 query problem?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Too many tables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) LAZY loading in a loop"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) EAGER fetch strategy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Missing indexes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) LAZY loading in a loop.** N+1 occurs when an initial query loads entities, then iterates them triggering individual queries for each collection.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which inheritance strategy is most performant?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SINGLE_TABLE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) JOINED"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) TABLE_PER_CLASS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) MAPPED_SUPERCLASS"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) SINGLE_TABLE.** All classes in the hierarchy map to one table, avoiding joins but allowing nullable columns.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What annotation enables Hibernate 2nd level caching?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @Cacheable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @Cache(usage = ...)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @Cachable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @SecondLevelCache"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) @Cache(usage = ...).** Hibernate's @Cache annotation configures the cache concurrency strategy and region.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ummary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entity mapping"
        }), " supports field and property access with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Access"
        }), ". Always pick one strategy consistently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary keys"
        }), " support four generation strategies. SEQUENCE with proper ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allocationSize"
        }), " is the fastest for write-heavy workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relationships"
        }), " come in four cardinalities. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mappedBy"
        }), " on the inverse side, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "orphanRemoval"
        }), " for composition, and always provide ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addXxx"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "removeXxx"
        }), " helpers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cascade types"
        }), " propagate state transitions. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CascadeType.ALL"
        }), " is convenient but dangerous on shared entities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fetch strategies"
        }), " default to LAZY for ToMany, EAGER for ToOne. Override EAGER to LAZY explicitly. Use JOIN FETCH, entity graphs, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@BatchSize"
        }), " to solve n+1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inheritance"
        }), " has four strategies. Prefer SINGLE_TABLE for simple hierarchies, JOINED for normalized schemas, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MappedSuperclass"
        }), " for shared fields without polymorphism."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second-level cache"
        }), " boosts read performance dramatically for reference data. Pair with query cache for maximum benefit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom types"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Type"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UserType"
        }), " handle JSON columns, array types, and complex value objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session management"
        }), " requires understanding OSIV trade-offs. Prefer explicit fetching over OSIV in production."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entity Mapping:"
          }), " Create an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Order"
          }), " entity with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderItem"
          }), " children. Use SEQUENCE ID generation with allocationSize of 100. Map a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BigDecimal totalAmount"
          }), " with precision 12 and scale 2. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@CreationTimestamp"
          }), " for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "createdAt"
          }), ". Ensure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Column(updatable = false)"
          }), " on created-at fields."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Relationships:"
          }), " Build a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Teacher"
          }), " ↔ ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Course"
          }), " ↔ ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Student"
          }), " model. Teacher has Many Courses. Course has Many Students (ManyToMany). Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "orphanRemoval"
          }), " for Course→Student. Add bidirectional sync methods."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cascade Analysis:"
          }), " Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Author"
          }), " (OneToMany cascade=ALL) → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Book"
          }), " (ManyToOne) → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Publisher"
          }), ", trace what happens when ", (0,jsx_runtime.jsx)(_components.code, {
            children: "authorRepository.delete(author)"
          }), " is called. Which entities are deleted? Why is cascade=ALL dangerous on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Book.publisher"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "n+1 Detection:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Category"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@OneToMany List<Product>"
          }), ". Write a JPQL query that fetches all categories and their products in one query. Then implement the same using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@EntityGraph"
          }), ". Then using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@BatchSize"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inheritance Decision:"
          }), " You need to model ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Notification"
          }), " (abstract) → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EmailNotification"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SMSNotification"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PushNotification"
          }), ". Each has 3 unique fields. You query polymorphically 90% of the time. Which inheritance strategy do you pick? Justify your answer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache Tuning:"
          }), " Configure EHCache for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Country"
          }), " entity (read-only, 100 entries, 24h TTL) and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Product"
          }), " entity (read-write, 5000 entries, 10 min TTL). Show the XML configuration and the entity annotations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Type:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MonetaryAmount"
          }), " custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserType"
          }), " backed by a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NUMERIC(19,4)"
          }), " column. The type should store currency code and amount as a JSON or composite column. Handle nulls correctly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance:"
          }), " Given 100,000 orders to insert daily, design the entity with proper ID generation and batch settings to maximize throughput. Compare IDENTITY vs SEQUENCE vs UUID for this scenario and recommend with justification."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OSIV:"
          }), " Write a REST controller and service where OSIV is disabled. The endpoint returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderResponse"
          }), " containing order data and item count. Show how to fetch all required data within the transactional service method before the session closes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Refactoring:"
          }), " Given an entity with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ManyToOne(fetch = FetchType.EAGER)"
          }), " on three fields, refactor it to use LAZY loading with entity graphs at the query level. Show the before and after."]
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