"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[209],{

/***/ 3760
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_59_interview_databases_b_md_88e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-59-interview-databases-b-md-88e.json
const site_docs_courses_java_59_interview_databases_b_md_88e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/59-interview-databases-b","title":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","description":"JPA Auditing - Flowchart","source":"@site/docs/courses/java/59-interview-databases-b.md","sourceDirName":"courses/java","slug":"/java/59-interview-databases-b","permalink":"/ai-engineering-journey/java/59-interview-databases-b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"id":"59-interview-databases-b","slug":"/java/59-interview-databases-b","title":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","sidebar_label":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","sidebar_position":60},"sidebar":"course-java","previous":{"title":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","permalink":"/ai-engineering-journey/java/59-interview-databases-a"},"next":{"title":"Spring Boot default (enabled) → causes the anti-pattern:","permalink":"/ai-engineering-journey/java/59-interview-databases-c"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/59-interview-databases-b.md


const frontMatter = {
	id: '59-interview-databases-b',
	slug: '/java/59-interview-databases-b',
	title: '❌ WRONG: Hibernate can drop columns or change types unexpectedly',
	sidebar_label: '❌ WRONG: Hibernate can drop columns or change types unexpectedly',
	sidebar_position: 60
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
  "value": "Q9: What is the difference between <code>@ManyToMany</code> and <code>@OneToMany</code> with a join entity?",
  "id": "q9-what-is-the-difference-between-manytomany-and-onetomany-with-a-join-entity",
  "level": 3
}, {
  "value": "Q10: How do you map inheritance hierarchies in JPA?",
  "id": "q10-how-do-you-map-inheritance-hierarchies-in-jpa",
  "level": 3
}, {
  "value": "Q11: What is a projection in Spring Data JPA, and why use DTO projections over entities?",
  "id": "q11-what-is-a-projection-in-spring-data-jpa-and-why-use-dto-projections-over-entities",
  "level": 3
}, {
  "value": "Q12: How do you implement database migrations with Flyway in Spring Boot?",
  "id": "q12-how-do-you-implement-database-migrations-with-flyway-in-spring-boot",
  "level": 3
}, {
  "value": "Q13: How do you handle concurrent updates to the same row without data loss?",
  "id": "q13-how-do-you-handle-concurrent-updates-to-the-same-row-without-data-loss",
  "level": 3
}, {
  "value": "Q14: How do you test database code with TestContainers?",
  "id": "q14-how-do-you-test-database-code-with-testcontainers",
  "level": 3
}, {
  "value": "Q15: What is the difference between <code>JOIN</code>, <code>LEFT JOIN</code>, and <code>JOIN FETCH</code> in JPA?",
  "id": "q15-what-is-the-difference-between-join-left-join-and-join-fetch-in-jpa",
  "level": 3
}, {
  "value": "Q16: What is the difference between <code>@SequenceGenerator</code> <code>allocationSize</code> and database sequence increment?",
  "id": "q16-what-is-the-difference-between-sequencegenerator-allocationsize-and-database-sequence-increment",
  "level": 3
}, {
  "value": "Q17: How do you map PostgreSQL <code>jsonb</code> columns with Hibernate 6?",
  "id": "q17-how-do-you-map-postgresql-jsonb-columns-with-hibernate-6",
  "level": 3
}, {
  "value": "Q18: How do you handle database migrations in a distributed team without conflicts?",
  "id": "q18-how-do-you-handle-database-migrations-in-a-distributed-team-without-conflicts",
  "level": 3
}, {
  "value": "Common Mistakes with Database Migrations (GFG-Style)",
  "id": "common-mistakes-with-database-migrations-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Editing an already-applied migration",
  "id": "mistake-1-editing-an-already-applied-migration",
  "level": 3
}, {
  "value": "Mistake 2: Forgetting the <code>IF EXISTS</code> clause on destructive operations",
  "id": "mistake-2-forgetting-the-if-exists-clause-on-destructive-operations",
  "level": 3
}, {
  "value": "Mistake 3: Using <code>spring.jpa.hibernate.ddl-auto=update</code> in production",
  "id": "mistake-3-using-springjpahibernateddl-autoupdate-in-production",
  "level": 3
}, {
  "value": "Mistake 4: Not testing migrations against a real database",
  "id": "mistake-4-not-testing-migrations-against-a-real-database",
  "level": 3
}, {
  "value": "JPA vs Hibernate Comparison Table",
  "id": "jpa-vs-hibernate-comparison-table",
  "level": 2
}, {
  "value": "Mermaid: Sequence Generation Flow",
  "id": "mermaid-sequence-generation-flow",
  "level": 2
}, {
  "value": "Chapter Quiz — Database (Part 2)",
  "id": "chapter-quiz--database-part-2",
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
  "value": "TypeScript Optimistic Locking Retry Simulator",
  "id": "typescript-optimistic-locking-retry-simulator",
  "level": 2
}, {
  "value": "Mermaid: JPA Inheritance Strategy Comparison",
  "id": "mermaid-jpa-inheritance-strategy-comparison",
  "level": 2
}, {
  "value": "Mermaid: Flyway Migration Lifecycle",
  "id": "mermaid-flyway-migration-lifecycle",
  "level": 2
}, {
  "value": "Mermaid: JOIN vs LEFT JOIN vs JOIN FETCH",
  "id": "mermaid-join-vs-left-join-vs-join-fetch",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases-b.png",
        alt: "JPA Auditing - Flowchart"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q9-what-is-the-difference-between-manytomany-and-onetomany-with-a-join-entity",
      children: ["Q9: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToMany"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToMany"
      }), " with a join entity?"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToMany"
      }), " creates an implicit join table with only two columns (the foreign keys). You cannot add attributes to the relationship (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "createdAt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "role"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "quantity"
      }), "). A join entity (also called an association entity) creates an explicit third entity mapped to the join table, allowing you to add columns to the relationship itself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── @ManyToMany (simple, no extra columns) ──\r\n@Entity\r\npublic class Student {\r\n    @Id private Long id;\r\n\r\n    @ManyToMany\r\n    @JoinTable(name = \"student_course\",\r\n        joinColumns = @JoinColumn(name = \"student_id\"),\r\n        inverseJoinColumns = @JoinColumn(name = \"course_id\"))\r\n    private Set<Course> courses;\r\n}\r\n\r\n@Entity\r\npublic class Course {\r\n    @Id private Long id;\r\n\r\n    @ManyToMany(mappedBy = \"courses\")\r\n    private Set<Student> students;\r\n}\r\n\r\n// ── Join entity (extra columns possible) ──\r\n@Entity\r\npublic class Enrollment {\r\n    @Id private Long id;\r\n\r\n    @ManyToOne\r\n    private Student student;\r\n\r\n    @ManyToOne\r\n    private Course course;\r\n\r\n    private LocalDateTime enrolledAt;\r\n    private String grade;\r\n}\r\n\r\n@Entity\r\npublic class Student {\r\n    @OneToMany(mappedBy = \"student\")\r\n    private List<Enrollment> enrollments;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ManyToMany"
        }), " only when the relationship truly has no attributes → tags, categories, simple many-to-many labels"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a join entity whenever the relationship carries metadata (timestamps, roles, quantities, status)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A join entity also makes it easier to query the relationship itself: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT e FROM Enrollment e WHERE e.grade = 'A'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-map-inheritance-hierarchies-in-jpa",
      children: "Q10: How do you map inheritance hierarchies in JPA?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JPA provides three inheritance strategies, each mapped via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Inheritance"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. SINGLE_TABLE"
      }), " (default) → one table for the entire hierarchy, with a discriminator column:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Inheritance(strategy = InheritanceType.SINGLE_TABLE)\r\n@DiscriminatorColumn(name = \"vehicle_type\", discriminatorType = DiscriminatorType.STRING)\r\npublic abstract class Vehicle {\r\n    @Id @GeneratedValue private Long id;\r\n    private String manufacturer;\r\n}\r\n\r\n@Entity\r\n@DiscriminatorValue(\"CAR\")\r\npublic class Car extends Vehicle {\r\n    private int doors;\r\n}\r\n\r\n@Entity\r\n@DiscriminatorValue(\"TRUCK\")\r\npublic class Truck extends Vehicle {\r\n    private double payloadCapacity;\r\n}\r\n\r\n// Result: single \"vehicle\" table with columns: id, manufacturer, doors, payload_capacity, vehicle_type\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. JOINED"
      }), " → one table per class, with foreign keys to the parent:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Inheritance(strategy = InheritanceType.JOINED)\r\npublic abstract class Payment {\r\n    @Id @GeneratedValue private Long id;\r\n    private BigDecimal amount;\r\n}\r\n\r\n@Entity\r\npublic class CreditCardPayment extends Payment {\r\n    private String cardNumber;\r\n    private String cardHolder;\r\n}\r\n\r\n// Result: payment(id, amount), credit_card_payment(id, card_number, card_holder)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. TABLE_PER_CLASS"
      }), " → one complete table per concrete class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)\r\npublic abstract class Animal {\r\n    @Id @GeneratedValue private Long id;\r\n    private String name;\r\n}\r\n\r\n@Entity\r\npublic class Dog extends Animal {\r\n    private String breed;\r\n}\r\n\r\n// Result: dog(id, name, breed), cat(id, name, ...)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Query efficiency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Schema normalization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint support"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (no joins)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst (nullable columns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic queries need joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (normalized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full FK support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TABLE_PER_CLASS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst (UNION queries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No polymorphic FK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use SINGLE_TABLE for simple hierarchies with few subclasses. Use JOINED when subclasses have many distinct columns. Avoid TABLE_PER_CLASS unless you have specific reasons → most databases struggle with polymorphic UNION queries at scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-what-is-a-projection-in-spring-data-jpa-and-why-use-dto-projections-over-entities",
      children: "Q11: What is a projection in Spring Data JPA, and why use DTO projections over entities?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A projection is a subset of entity fields fetched instead of the full entity. DTO projections fetch only the columns you need, avoiding the overhead of loading large columns (BLOBs, TEXT) or eagerly-fetched associations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Interface-based projection ──\r\npublic interface UserSummary {\r\n    String getName();\r\n    String getEmail();\r\n}\r\n\r\n@Query(\"SELECT u.name AS name, u.email AS email FROM User u WHERE u.active = true\")\r\nList<UserSummary> findActiveUserSummaries();\r\n\r\n// ── Class-based DTO projection ──\r\npublic record UserDto(String name, String email, int orderCount) {}\r\n\r\n@Query(\"SELECT new com.example.UserDto(u.name, u.email, SIZE(u.orders)) \" +\r\n       \"FROM User u WHERE u.active = true\")\r\nList<UserDto> findActiveUserDtos();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Why use projections over entities:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance"
        }), ": Select only needed columns → avoids fetching large TEXT/BLOB columns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-only"
        }), ": No dirty checking overhead → Hibernate tracks changes only on managed entities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join efficiency"
        }), ": DTOs can aggregate data from multiple entities without loading them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety"
        }), ": No lazy-loading exceptions outside transactions → DTOs are plain objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API boundary"
        }), ": Expose only intended fields to REST clients → never accidentally serialize lazy proxies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EntityGraph can help with partial entity loading, but DTO projections give you the most control and the least overhead."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-do-you-implement-database-migrations-with-flyway-in-spring-boot",
      children: "Q12: How do you implement database migrations with Flyway in Spring Boot?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flyway manages schema changes as versioned SQL scripts. Spring Boot auto-configures Flyway when it finds ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flyway-core"
      }), " on the classpath."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1 → Add dependency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\r\n    <groupId>org.flywaydb</groupId>\r\n    <artifactId>flyway-core</artifactId>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Step 2 → Create migration scripts in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/db/migration/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V1__create_users_table.sql\r\nCREATE TABLE users (\r\n    id BIGSERIAL PRIMARY KEY,\r\n    name VARCHAR(255) NOT NULL,\r\n    email VARCHAR(255) UNIQUE NOT NULL,\r\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\r\n);\r\n\r\n-- V2__add_active_column.sql\r\nALTER TABLE users ADD COLUMN active BOOLEAN DEFAULT TRUE;\r\n\r\n-- V3__create_orders_table.sql\r\nCREATE TABLE orders (\r\n    id BIGSERIAL PRIMARY KEY,\r\n    user_id BIGINT NOT NULL REFERENCES users(id),\r\n    total DECIMAL(10,2) NOT NULL,\r\n    status VARCHAR(20) DEFAULT 'PENDING',\r\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\r\n);\r\n\r\n-- V3_1__add_index_on_orders_user_id.sql\r\nCREATE INDEX idx_orders_user_id ON orders(user_id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 3 → Configure (minimal → Spring Boot auto-configures):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\r\n  flyway:\r\n    enabled: true\r\n    locations: classpath:db/migration\r\n    baseline-on-migrate: true  # for existing databases\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V{version}__{description}.sql"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Underscore separates version from description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double underscore before the description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versions can be integers (V1) or dotted (V1_2_3)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeatable migrations: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R__{description}.sql"
        }), " (re-run if checksum changes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flyway tracks applied migrations in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flyway_schema_history"
      }), " table. Never modify an already-applied migration → create a new one instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-do-you-handle-concurrent-updates-to-the-same-row-without-data-loss",
      children: "Q13: How do you handle concurrent updates to the same row without data loss?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use optimistic locking with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Version"
      }), ". When two transactions read the same row and both try to update it, the second one to commit gets an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OptimisticLockException"
      }), " because the version has changed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\npublic class InventoryItem {\r\n    @Id private Long id;\r\n    private int quantity;\r\n\r\n    @Version\r\n    private long version;\r\n}\r\n\r\n@Service\r\npublic class InventoryService {\r\n    @Transactional\r\n    public void deductStock(Long itemId, int quantity) {\r\n        InventoryItem item = repo.findById(itemId).orElseThrow();\r\n        if (item.getQuantity() < quantity) {\r\n            throw new InsufficientStockException();\r\n        }\r\n        item.setQuantity(item.getQuantity() - quantity);\r\n        // Hibernate increments version on flush/commit\r\n        // If another transaction modified the row, version mismatch → OptimisticLockException\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For high-contention scenarios, use pessimistic locking:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Lock(LockModeType.PESSIMISTIC_WRITE)\r\n@Query(\"SELECT i FROM InventoryItem i WHERE i.id = :id\")\r\nOptional<InventoryItem> findByIdForUpdate(@Param(\"id\") Long id);\r\n\r\n@Transactional\r\npublic void deductStockPessimistic(Long itemId, int quantity) {\r\n    InventoryItem item = repo.findByIdForUpdate(itemId).orElseThrow();\r\n    // Database row is locked → other transactions wait\r\n    item.setQuantity(item.getQuantity() - quantity);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For counters and atomic updates, use a single UPDATE statement to avoid the read-then-write race entirely:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Modifying\r\n@Query(\"UPDATE InventoryItem i SET i.quantity = i.quantity - :qty WHERE i.id = :id AND i.quantity >= :qty\")\r\nint deductStockAtomic(@Param(\"id\") Long id, @Param(\"qty\") int qty);\r\n\r\n// Returns 0 if row didn't exist or quantity was insufficient → no race condition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The single-UPDATE approach is the most performant for high-contention counters because it avoids the round-trip for reading."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-do-you-test-database-code-with-testcontainers",
      children: "Q14: How do you test database code with TestContainers?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TestContainers spins up real database instances in Docker containers for integration tests. It is the industry standard for testing JPA repositories, native queries, and Flyway migrations against the actual database instead of H2 or HSQLDB."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\n@Testcontainers\r\nclass UserRepositoryTest {\r\n\r\n    @Container\r\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\")\r\n        .withDatabaseName(\"testdb\")\r\n        .withUsername(\"test\")\r\n        .withPassword(\"test\");\r\n\r\n    @DynamicPropertySource\r\n    static void configureProperties(DynamicPropertyRegistry reg) {\r\n        reg.add(\"spring.datasource.url\", postgres::getJdbcUrl);\r\n        reg.add(\"spring.datasource.username\", postgres::getUsername);\r\n        reg.add(\"spring.datasource.password\", postgres::getPassword);\r\n    }\r\n\r\n    @Autowired\r\n    private UserRepository userRepo;\r\n\r\n    @Test\r\n    void shouldSaveAndFindUser() {\r\n        User u = new User(\"alice@example.com\", \"Alice\");\r\n        userRepo.save(u);\r\n\r\n        Optional<User> found = userRepo.findByEmail(\"alice@example.com\");\r\n        assertThat(found).isPresent();\r\n        assertThat(found.get().getName()).isEqualTo(\"Alice\");\r\n    }\r\n\r\n    @Test\r\n    void shouldEnforceUniqueEmail() {\r\n        userRepo.save(new User(\"same@example.com\", \"First\"));\r\n        assertThrows(DataIntegrityViolationException.class, () -> {\r\n            userRepo.save(new User(\"same@example.com\", \"Second\"));\r\n            userRepo.flush();\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key benefits over H2:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same database dialect, same SQL features, same locking behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggers, stored procedures, and database-specific types work correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flyway migrations are validated against the real schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catches dialect-specific bugs before production"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Testcontainers"
      }), " + static ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Container"
      }), " for a shared container across tests (fastest), or instance ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Container"
      }), " for per-test isolation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q15-what-is-the-difference-between-join-left-join-and-join-fetch-in-jpa",
      children: ["Q15: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LEFT JOIN"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN FETCH"
      }), " in JPA?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "JOIN"
        }), " (inner join): Returns only entities that have matching associated entities. Excludes orphans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "LEFT JOIN"
        }), ": Returns all entities from the left side, with nulls for missing associations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "JOIN FETCH"
        }), ": A JPA-specific directive that tells Hibernate to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "eagerly load"
        }), " the association in the same query. Unlike plain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JOIN"
        }), ", it populates the entity's persistence state so that lazy loading is not triggered later."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// INNER JOIN → only posts with at least one comment\r\n// Result: List<Object[]> → [Post, Comment] pairs\r\n@Query(\"SELECT p, c FROM Post p JOIN p.comments c\")\r\nList<Object[]> findPostsWithComments();\r\n\r\n// LEFT JOIN → all posts, comments may be null\r\n@Query(\"SELECT p, c FROM Post p LEFT JOIN p.comments c\")\r\nList<Object[]> findAllPostsAndComments();\r\n\r\n// JOIN FETCH → eagerly loads comments, returns Post entities with comments populated\r\n@Query(\"SELECT p FROM Post p LEFT JOIN FETCH p.comments\")\r\nList<Post> findAllPostsWithComments();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The critical difference: plain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN"
      }), " adds a WHERE/HAVING filter → it doesn't change how the entity is loaded. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN FETCH"
      }), " actually populates the entity's collection field, preventing N+1 queries for that association."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Plain LEFT JOIN → comments are still lazy\r\n@Query(\"SELECT p FROM Post p LEFT JOIN p.comments c WHERE c.approved = true\")\r\nList<Post> findApprovedCommentPosts(); // p.getComments() will still trigger lazy load!\r\n\r\n// ✅ JOIN FETCH → comments are loaded\r\n@Query(\"SELECT p FROM Post p LEFT JOIN FETCH p.comments\")\r\nList<Post> findAllPostsWithComments(); // p.getComments() is already populated\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caveat:"
      }), " Multiple JOIN FETCHs on multiple collections create a Cartesian product. Fetch one collection per query, or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@BatchSize"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q16-what-is-the-difference-between-sequencegenerator-allocationsize-and-database-sequence-increment",
      children: ["Q16: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SequenceGenerator"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allocationSize"
      }), " and database sequence increment?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a critical configuration point that causes subtle bugs. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allocationSize"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SequenceGenerator"
      }), " tells Hibernate how many IDs to pre-allocate in memory. The database sequence ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INCREMENT BY"
      }), " value must match — otherwise, IDs will collide or leave gaps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// CORRECT: allocationSize = DB sequence increment\r\n@Id\r\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"order_seq\")\r\n@SequenceGenerator(name = \"order_seq\", sequenceName = \"order_sequence\", allocationSize = 50)\r\nprivate Long id;\r\n\r\n// Database: CREATE SEQUENCE order_sequence INCREMENT BY 50;\r\n// Hibernate pre-allocates 50 IDs (1, 51, 101, 151...)\r\n// Each app instance gets its own block of 50 → no contention\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mismatch scenarios:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "allocationSize"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DB INCREMENT BY"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Correct — IDs: 1, 51, 101 (no waste, no collision)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Hibernate assumes next ID is 51, DB gives 2 — collision!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Hibernate calls sequence for every INSERT — wastes DB round-trips"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 (2 instances)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Instance A gets 1-50, Instance B gets 51-100 — no conflict"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allocationSize"
      }), " to the same value as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INCREMENT BY"
      }), " in your DDL. Use 50 as a reasonable default — it balances pre-allocation memory against DB round-trips."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL\r\nCREATE SEQUENCE order_sequence INCREMENT BY 50 START 1;\r\n\r\n-- Oracle\r\nCREATE SEQUENCE order_sequence INCREMENT BY 50 START WITH 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Hibernate 6 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PooledLo"
        }), " optimizer"]
      }), " (default): Pre-allocates IDs in blocks. If the application restarts, some IDs in the pre-allocated block may be lost — that's expected and harmless."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q17-how-do-you-map-postgresql-jsonb-columns-with-hibernate-6",
      children: ["Q17: How do you map PostgreSQL ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jsonb"
      }), " columns with Hibernate 6?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hibernate 6 provides first-class support for JSON columns via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JsonType"
      }), " from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hibernate-types"
      }), " library (or the built-in Hibernate 6.2+ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@JdbcType"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@JdbcTypeCode"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\r\n    <groupId>com.vladmihalcea</groupId>\r\n    <artifactId>hibernate-types-6</artifactId>\r\n    <version>2.21.1</version>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Table(name = \"documents\")\r\n@TypeDef(name = \"jsonb\", typeClass = JsonType.class)\r\npublic class Document {\r\n\r\n    @Id\r\n    @GeneratedValue\r\n    private Long id;\r\n\r\n    @Type(JsonType.class)\r\n    @Column(name = \"metadata\", columnDefinition = \"jsonb\")\r\n    private Map<String, Object> metadata;\r\n\r\n    @Type(JsonType.class)\r\n    @Column(name = \"tags\", columnDefinition = \"jsonb\")\r\n    private List<String> tags;\r\n\r\n    @Type(JsonType.class)\r\n    @Column(name = \"audit_trail\", columnDefinition = \"jsonb\")\r\n    private List<AuditEntry> auditTrail;\r\n}\r\n\r\n// POJO for JSON deserialization\r\npublic class AuditEntry {\r\n    private String action;\r\n    private String performedBy;\r\n    private LocalDateTime timestamp;\r\n    // Must have no-arg constructor, getters, setters\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Native Hibernate 6.2+ approach (no extra dependency):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Table(name = \"products\")\r\npublic class Product {\r\n\r\n    @Id\r\n    @GeneratedValue\r\n    private Long id;\r\n\r\n    @JdbcTypeCode(SqlTypes.JSON)\r\n    @Column(columnDefinition = \"jsonb\")\r\n    private Map<String, String> attributes;\r\n\r\n    @JdbcTypeCode(SqlTypes.JSON)\r\n    @Column(columnDefinition = \"jsonb\")\r\n    private List<String> tags;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Querying JSON fields with native SQL:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Query(value = \"\"\"\r\n    SELECT * FROM documents\r\n    WHERE metadata @> '{\"status\": \"active\"}'::jsonb\r\n    ORDER BY id DESC\r\n    \"\"\", nativeQuery = true)\r\nList<Document> findActiveDocuments();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Native queries are needed for JSON path queries — JPQL does not support JSON operators. Keep JSON columns for semi-structured data only; use proper normalized columns for query-critical fields."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-handle-database-migrations-in-a-distributed-team-without-conflicts",
      children: "Q18: How do you handle database migrations in a distributed team without conflicts?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a team of 5+ developers, migration version conflicts are inevitable. Here's a strategy to minimize them:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 1: Timestamp-based versions"
      }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V20240707_120000__description.sql"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V1"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V2"
      }), ", etc. This eliminates the \"who gets V4?\" problem:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Each developer creates migrations with the current timestamp\r\n-- V20240707_120000__add_product_table.sql  (Alice, 10 AM)\r\n-- V20240707_143000__add_reviews_table.sql  (Bob, 2:30 PM)\r\n-- V20240708_090000__add_index_on_products.sql (Alice, next day)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 2: Git-based conflict detection"
      }), " — use a CI check that detects version collisions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript migration conflict detector\r\ninterface MigrationFile {\r\n  version: string;\r\n  path: string;\r\n  author: string;\r\n  checksum: string;\r\n}\r\n\r\nclass MigrationConflictDetector {\r\n  detectConflicts(migrations: MigrationFile[]): string[] {\r\n    const conflicts: string[] = [];\r\n    const versionMap = new Map<string, MigrationFile[]>();\r\n\r\n    for (const m of migrations) {\r\n      if (!versionMap.has(m.version)) {\r\n        versionMap.set(m.version, []);\r\n      }\r\n      versionMap.get(m.version)!.push(m);\r\n    }\r\n\r\n    for (const [version, files] of versionMap) {\r\n      if (files.length > 1) {\r\n        conflicts.push(\r\n          `Version ${version} conflict: ${files.map(f => `${f.path} (${f.author})`).join(', ')}`\r\n        );\r\n      }\r\n    }\r\n    return conflicts;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 3: Per-developer version ranges"
      }), " — each developer claims a version block:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice: V001–V099"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob: V100–V199"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Charlie: V200–V299"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V042__alice_feature.sql\r\n-- V142__bob_refactor.sql\r\n-- V243__charlie_fix.sql\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Strategy 4: Always use Flyway's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baseline-on-migrate: true"
        })]
      }), " for existing databases:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\r\n  flyway:\r\n    baseline-on-migrate: true\r\n    baseline-version: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This allows Flyway to start tracking migrations on a database that already has tables, without failing."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-with-database-migrations-gfg-style",
      children: "Common Mistakes with Database Migrations (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-editing-an-already-applied-migration",
      children: "Mistake 1: Editing an already-applied migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ❌ WRONG: You changed V2 after it was applied to production\r\n-- Flyway checksums the file content — any change fails validation\r\n-- FlywayException: \"Migration checksum mismatch for migration version 2\"\r\n\r\n-- ✅ CORRECT: Create V3 with the corrected schema\r\n-- V3__fix_email_column_type.sql\r\nALTER TABLE users ALTER COLUMN email TYPE VARCHAR(320);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-2-forgetting-the-if-exists-clause-on-destructive-operations",
      children: ["Mistake 2: Forgetting the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF EXISTS"
      }), " clause on destructive operations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ❌ WRONG: Fails if the column was already dropped\r\nALTER TABLE users DROP COLUMN temp_field;\r\n\r\n-- ✅ CORRECT: Safe even if column doesn't exist\r\nALTER TABLE users DROP COLUMN IF EXISTS temp_field;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-3-using-springjpahibernateddl-autoupdate-in-production",
      children: ["Mistake 3: Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.jpa.hibernate.ddl-auto=update"
      }), " in production"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ❌ WRONG: Hibernate can drop columns or change types unexpectedly\r\nspring.jpa.hibernate.ddl-auto=update\r\n\r\n# ✅ CORRECT: Use Flyway/Liquibase for all schema changes\r\nspring.jpa.hibernate.ddl-auto=validate\r\nspring.flyway.enabled=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-not-testing-migrations-against-a-real-database",
      children: "Mistake 4: Not testing migrations against a real database"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ✅ CORRECT: Testcontainers migration test\r\n@SpringBootTest\r\n@Testcontainers\r\nclass MigrationTest {\r\n\r\n    @Container\r\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\r\n\r\n    @DynamicPropertySource\r\n    static void configure(DynamicPropertyRegistry reg) {\r\n        reg.add(\"spring.datasource.url\", postgres::getJdbcUrl);\r\n        reg.add(\"spring.datasource.username\", postgres::getUsername);\r\n        reg.add(\"spring.datasource.password\", postgres::getPassword);\r\n    }\r\n\r\n    @Test\r\n    void allMigrationsApplySuccessfully() {\r\n        // If Flyway applies without exception, migrations are valid\r\n        assertThat(postgres.isRunning()).isTrue();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jpa-vs-hibernate-comparison-table",
      children: "JPA vs Hibernate Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JPA (Jakarta Persistence)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hibernate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specification (interface)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provider-neutral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — any JPA implementation works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No — proprietary APIs are Hibernate-specific"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines L1 cache concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds L2 cache, query cache, custom regions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Criteria API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe but verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hibernate Criteria (legacy) vs JPA Criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@GeneratedValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEQUENCE, IDENTITY, TABLE, AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds GENERATION_TYPE.UUID (Hibernate 6+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (no standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Type(JsonType.class), @JdbcTypeCode(SqlTypes.JSON)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch fetching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BatchSize, FetchMode.SUBSELECT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multitenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full discriminator/SCHEMA/DATABASE support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query plan hints, statistics, SQL logging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use pure JPA:"
      }), " You want to switch between providers (e.g., Hibernate → EclipseLink). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use Hibernate-specific features:"
      }), " You need caching, JSON mapping, batch fetching, or multitenancy — which covers most production applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-sequence-generation-flow",
      children: "Mermaid: Sequence Generation Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant App as Application\r\n    participant H as Hibernate\r\n    participant DB as Database\r\n\r\n    App->>H: persist(entity)\r\n    H->>H: Check ID generation strategy\r\n\r\n    alt IDENTITY\r\n        H->>DB: INSERT INTO table (cols) VALUES (vals)\r\n        DB-->>H: RETURNING id\r\n        H-->>App: Entity with ID assigned\r\n\r\n    else SEQUENCE\r\n        H->>H: Any pre-allocated IDs left?\r\n        alt Yes (allocationSize buffer)\r\n            H->>H: Use next ID from buffer\r\n        else No\r\n            H->>DB: SELECT nextval('seq_name')\r\n            DB-->>H: Next block start (e.g., 51)\r\n            H->>H: Pre-allocate 50 IDs (51-100)\r\n        end\r\n        H->>DB: INSERT ... WITH KNOWN ID\r\n        DB-->>H: Success\r\n    else UUID\r\n        H->>H: Generate UUID v4\r\n        H->>DB: INSERT ... WITH KNOWN UUID\r\n        DB-->>H: Success\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--database-part-2",
      children: "Chapter Quiz — Database (Part 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allocationSize"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SequenceGenerator"
        }), " does not match the database ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INCREMENT BY"
        }), " value?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Nothing — Hibernate auto-detects the correct value"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) IDs may collide or be wasted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The application fails to start"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Hibernate reverts to IDENTITY strategy"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) IDs may collide or be wasted.** If `allocationSize` > `INCREMENT BY`, Hibernate assumes the next ID is higher than what the DB will return, causing collisions. They must match exactly.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which dependency is NOT needed for mapping JSON columns in Hibernate 6.2+?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) hibernate-types-6"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@JdbcTypeCode(SqlTypes.JSON)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Column(columnDefinition = \"jsonb\")"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Hibernate Validator"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**D) Hibernate Validator.** Hibernate 6.2+ has built-in JSON support via `@JdbcTypeCode`. The hibernate-types library is optional. Validator is for bean validation, not JSON mapping.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the best strategy to avoid migration version conflicts in a large team?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Use a single V1.sql file that everyone edits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Use timestamp-based versions (V20240707_120000)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Use random version numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Store all migrations in a single directory without versioning"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Timestamp-based versions.** Timestamps eliminate the \"who gets V4?\" problem because every developer's migration has a unique, ordered timestamp. Git merge conflicts are also easier to resolve.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract without state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single inheritance, shared state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template method pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent data carrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generated methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, value objects"
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
      id: "typescript-optimistic-locking-retry-simulator",
      children: "TypeScript Optimistic Locking Retry Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript code simulates optimistic locking retry logic and migration validation patterns used in Spring Boot database applications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VersionedEntity {\r\n  id: number;\r\n  version: number;\r\n  data: Record<string, unknown>;\r\n}\r\n\r\ninterface MigrationScript {\r\n  version: string;\r\n  description: string;\r\n  sql: string;\r\n  checksum: string;\r\n  appliedAt: Date | null;\r\n}\r\n\r\nclass OptimisticLockSimulator {\r\n  private store = new Map<number, VersionedEntity>();\r\n\r\n  constructor() {\r\n    this.store.set(1, { id: 1, version: 1, data: { balance: 1000 } });\r\n    this.store.set(2, { id: 2, version: 1, data: { balance: 500 } });\r\n  }\r\n\r\n  read(id: number): VersionedEntity {\r\n    const entity = this.store.get(id);\r\n    if (!entity) throw new Error(`Entity ${id} not found`);\r\n    return { ...entity };\r\n  }\r\n\r\n  write(id: number, newData: Record<string, unknown>, expectedVersion: number): boolean {\r\n    const current = this.store.get(id);\r\n    if (!current) throw new Error(`Entity ${id} not found`);\r\n    if (current.version !== expectedVersion) {\r\n      console.log(\r\n        `[CONFLICT] Entity ${id}: expected v${expectedVersion}, actual v${current.version}`\r\n      );\r\n      return false;\r\n    }\r\n    this.store.set(id, {\r\n      ...current,\r\n      data: newData,\r\n      version: current.version + 1,\r\n    });\r\n    console.log(\r\n      `[COMMIT] Entity ${id} updated to v${current.version + 1}, balance=${newData['balance']}`\r\n    );\r\n    return true;\r\n  }\r\n\r\n  transfer(fromId: number, toId: number, amount: number, maxRetries = 3): boolean {\r\n    for (let attempt = 1; attempt <= maxRetries; attempt++) {\r\n      console.log(`\\n[ATTEMPT ${attempt}/${maxRetries}] Transfer $${amount} from ${fromId} to ${toId}`);\r\n\r\n      const from = this.read(fromId);\r\n      const to = this.read(toId);\r\n\r\n      const fromBalance = from.data['balance'] as number;\r\n      const toBalance = to.data['balance'] as number;\r\n\r\n      if (fromBalance < amount) {\r\n        console.log(`[FAIL] Insufficient balance in account ${fromId}: $${fromBalance}`);\r\n        return false;\r\n      }\r\n\r\n      const fromOk = this.write(fromId, { balance: fromBalance - amount }, from.version);\r\n      if (!fromOk) {\r\n        console.log(`[RETRY] Conflict on debit — retrying...`);\r\n        continue;\r\n      }\r\n\r\n      const toOk = this.write(toId, { balance: toBalance + amount }, to.version);\r\n      if (!toOk) {\r\n        console.log(`[RETRY] Conflict on credit — rolling back debit...`);\r\n        this.write(fromId, { balance: fromBalance }, from.version + 1);\r\n        continue;\r\n      }\r\n\r\n      console.log(`[SUCCESS] Transfer complete. From: $${fromBalance - amount}, To: $${toBalance + amount}`);\r\n      return true;\r\n    }\r\n    console.log(`[FAIL] Transfer failed after ${maxRetries} attempts`);\r\n    return false;\r\n  }\r\n}\r\n\r\n// ── Concurrent transfer simulation ──\r\nconst sim = new OptimisticLockSimulator();\r\nconsole.log('=== OPTIMISTIC LOCKING RETRY SIMULATION ===\\n');\r\nsim.transfer(1, 2, 200);\r\nsim.transfer(2, 1, 100);\r\n\r\n// ── Migration validator ──\r\nclass MigrationValidator {\r\n  private migrations: MigrationScript[] = [];\r\n\r\n  register(version: string, description: string, sql: string): void {\r\n    this.migrations.push({\r\n      version,\r\n      description,\r\n      sql,\r\n      checksum: this.hash(sql),\r\n      appliedAt: null,\r\n    });\r\n  }\r\n\r\n  private hash(input: string): string {\r\n    let hash = 0;\r\n    for (let i = 0; i < input.length; i++) {\r\n      const char = input.charCodeAt(i);\r\n      hash = ((hash << 5) - hash) + char;\r\n      hash |= 0;\r\n    }\r\n    return Math.abs(hash).toString(16);\r\n  }\r\n\r\n  validate(): string[] {\r\n    const errors: string[] = [];\r\n    const versions = this.migrations.map(m => m.version);\r\n\r\n    for (let i = 0; i < versions.length - 1; i++) {\r\n      const current = this.migrations[i];\r\n      const next = this.migrations[i + 1];\r\n      if (this.compareVersions(current.version, next.version) >= 0) {\r\n        errors.push(`Version order error: v${current.version} → v${next.version} must be ascending`);\r\n      }\r\n      if (current.sql.toLowerCase().includes('drop column') && !current.sql.toLowerCase().includes('if exists')) {\r\n        errors.push(`Safety: v${current.version} DROP COLUMN without IF EXISTS`);\r\n      }\r\n    }\r\n    return errors;\r\n  }\r\n\r\n  private compareVersions(a: string, b: string): number {\r\n    const partsA = a.split('_').map(Number);\r\n    const partsB = b.split('_').map(Number);\r\n    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {\r\n      const diff = (partsA[i] || 0) - (partsB[i] || 0);\r\n      if (diff !== 0) return diff;\r\n    }\r\n    return 0;\r\n  }\r\n\r\n  applyAll(): void {\r\n    const errors = this.validate();\r\n    if (errors.length > 0) {\r\n      console.log('\\nMigration validation FAILED:');\r\n      errors.forEach(e => console.log(`  ✗ ${e}`));\r\n      return;\r\n    }\r\n    for (const m of this.migrations) {\r\n      m.appliedAt = new Date();\r\n      console.log(`[APPLIED] v${m.version}: ${m.description} (${m.checksum})`);\r\n    }\r\n  }\r\n}\r\n\r\nconsole.log('\\n=== MIGRATION VALIDATOR ===\\n');\r\nconst validator = new MigrationValidator();\r\nvalidator.register('1', 'create_users_table', 'CREATE TABLE users (id BIGSERIAL PRIMARY KEY, name TEXT);');\r\nvalidator.register('2', 'add_email_column', 'ALTER TABLE users ADD COLUMN email VARCHAR(255);');\r\nvalidator.register('3', 'add_active_flag', 'ALTER TABLE users ADD COLUMN active BOOLEAN DEFAULT TRUE;');\r\nvalidator.applyAll();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-jpa-inheritance-strategy-comparison",
      children: "Mermaid: JPA Inheritance Strategy Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[JPA Inheritance] --> B[SINGLE_TABLE]\r\n    A --> C[JOINED]\r\n    A --> D[TABLE_PER_CLASS]\r\n\r\n    B --> E[One table, discriminator column]\r\n    B --> F[Best query performance]\r\n    B --> G[Nullable columns for subclasses]\r\n\r\n    C --> H[One table per class + parent FK]\r\n    C --> I[Best normalization]\r\n    C --> J[Requires JOINs for polymorphic queries]\r\n\r\n    D --> K[Complete table per concrete class]\r\n    D --> L[No polymorphism support]\r\n    D --> M[UNION queries are expensive]\r\n\r\n    style B fill:#4caf50,color:#fff\r\n    style C fill:#2196f3,color:#fff\r\n    style D fill:#ff9800,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-flyway-migration-lifecycle",
      children: "Mermaid: Flyway Migration Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Development\r\n        A[Write V1__init.sql]\r\n        B[Write V2__add_column.sql]\r\n    end\r\n\r\n    subgraph Build\r\n        C[Compile + package JAR]\r\n    end\r\n\r\n    subgraph Deploy\r\n        D[Flyway migrates]\r\n        E[Check flyway_schema_history]\r\n    end\r\n\r\n    subgraph Production\r\n        F[(Database)]\r\n        G[History table]\r\n    end\r\n\r\n    A --> C\r\n    B --> C\r\n    C --> D\r\n    D --> E\r\n    E -->|New migration found| D\r\n    D --> F\r\n    D --> G\r\n    E -->|Already applied| H[SKIP]\r\n\r\n    style D fill:#4caf50,color:#fff\r\n    style E fill:#ff9800,color:#fff\r\n    style H fill:#607d8b,color:#916"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-join-vs-left-join-vs-join-fetch",
      children: "Mermaid: JOIN vs LEFT JOIN vs JOIN FETCH"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Query Type] --> B[JOIN / INNER JOIN]\r\n    A --> C[LEFT JOIN]\r\n    A --> D[JOIN FETCH]\r\n\r\n    B --> E[Only matching rows]\r\n    B --> F[Excludes orphans]\r\n    B --> G[Does NOT populate entity]\r\n\r\n    C --> H[All left-side rows]\r\n    C --> I[NULL for non-matching]\r\n    C --> J[Does NOT populate entity]\r\n\r\n    D --> K[Eagerly loads association]\r\n    D --> L[Populates entity state]\r\n    D --> M[Prevents N+1 queries]\r\n\r\n    style B fill:#2196f3,color:#fff\r\n    style C fill:#ff9800,color:#fff\r\n    style D fill:#4caf50,color:#fff"
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