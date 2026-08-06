"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10209],{

/***/ 43760
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
const site_docs_courses_java_59_interview_databases_b_md_88e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/59-interview-databases-b","title":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","description":"JPA Auditing - Flowchart","source":"@site/docs/courses/java/59-interview-databases-b.md","sourceDirName":"courses/java","slug":"/java/59-interview-databases-b","permalink":"/ai-engineering-journey/java/59-interview-databases-b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"id":"59-interview-databases-b","slug":"/java/59-interview-databases-b","title":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","sidebar_label":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","sidebar_position":60},"sidebar":"coursesSidebar","previous":{"title":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","permalink":"/ai-engineering-journey/java/59-interview-databases-a"},"next":{"title":"Spring Boot default (enabled) → causes the anti-pattern:","permalink":"/ai-engineering-journey/java/59-interview-databases-c"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases-b.png",
        alt: "JPA Auditing - Flowchart"
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
        href: "../../assets/images/lessons/java/59-interview-databases-b/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-b/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases-b/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-b/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases-b/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-b/visual-explanation.png",
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
        children: "// ── @ManyToMany (simple, no extra columns) ──\n@Entity\npublic class Student {\n    @Id private Long id;\n\n    @ManyToMany\n    @JoinTable(name = \"student_course\",\n        joinColumns = @JoinColumn(name = \"student_id\"),\n        inverseJoinColumns = @JoinColumn(name = \"course_id\"))\n    private Set<Course> courses;\n}\n\n@Entity\npublic class Course {\n    @Id private Long id;\n\n    @ManyToMany(mappedBy = \"courses\")\n    private Set<Student> students;\n}\n\n// ── Join entity (extra columns possible) ──\n@Entity\npublic class Enrollment {\n    @Id private Long id;\n\n    @ManyToOne\n    private Student student;\n\n    @ManyToOne\n    private Course course;\n\n    private LocalDateTime enrolledAt;\n    private String grade;\n}\n\n@Entity\npublic class Student {\n    @OneToMany(mappedBy = \"student\")\n    private List<Enrollment> enrollments;\n}\n"
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
        children: "@Entity\n@Inheritance(strategy = InheritanceType.SINGLE_TABLE)\n@DiscriminatorColumn(name = \"vehicle_type\", discriminatorType = DiscriminatorType.STRING)\npublic abstract class Vehicle {\n    @Id @GeneratedValue private Long id;\n    private String manufacturer;\n}\n\n@Entity\n@DiscriminatorValue(\"CAR\")\npublic class Car extends Vehicle {\n    private int doors;\n}\n\n@Entity\n@DiscriminatorValue(\"TRUCK\")\npublic class Truck extends Vehicle {\n    private double payloadCapacity;\n}\n\n// Result: single \"vehicle\" table with columns: id, manufacturer, doors, payload_capacity, vehicle_type\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. JOINED"
      }), " → one table per class, with foreign keys to the parent:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Inheritance(strategy = InheritanceType.JOINED)\npublic abstract class Payment {\n    @Id @GeneratedValue private Long id;\n    private BigDecimal amount;\n}\n\n@Entity\npublic class CreditCardPayment extends Payment {\n    private String cardNumber;\n    private String cardHolder;\n}\n\n// Result: payment(id, amount), credit_card_payment(id, card_number, card_holder)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. TABLE_PER_CLASS"
      }), " → one complete table per concrete class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)\npublic abstract class Animal {\n    @Id @GeneratedValue private Long id;\n    private String name;\n}\n\n@Entity\npublic class Dog extends Animal {\n    private String breed;\n}\n\n// Result: dog(id, name, breed), cat(id, name, ...)\n"
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
        children: "// ── Interface-based projection ──\npublic interface UserSummary {\n    String getName();\n    String getEmail();\n}\n\n@Query(\"SELECT u.name AS name, u.email AS email FROM User u WHERE u.active = true\")\nList<UserSummary> findActiveUserSummaries();\n\n// ── Class-based DTO projection ──\npublic record UserDto(String name, String email, int orderCount) {}\n\n@Query(\"SELECT new com.example.UserDto(u.name, u.email, SIZE(u.orders)) \" +\n       \"FROM User u WHERE u.active = true\")\nList<UserDto> findActiveUserDtos();\n"
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
        children: "<dependency>\n    <groupId>org.flywaydb</groupId>\n    <artifactId>flyway-core</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Step 2 → Create migration scripts in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/db/migration/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V1__create_users_table.sql\nCREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- V2__add_active_column.sql\nALTER TABLE users ADD COLUMN active BOOLEAN DEFAULT TRUE;\n\n-- V3__create_orders_table.sql\nCREATE TABLE orders (\n    id BIGSERIAL PRIMARY KEY,\n    user_id BIGINT NOT NULL REFERENCES users(id),\n    total DECIMAL(10,2) NOT NULL,\n    status VARCHAR(20) DEFAULT 'PENDING',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- V3_1__add_index_on_orders_user_id.sql\nCREATE INDEX idx_orders_user_id ON orders(user_id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 3 → Configure (minimal → Spring Boot auto-configures):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  flyway:\n    enabled: true\n    locations: classpath:db/migration\n    baseline-on-migrate: true  # for existing databases\n"
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
        children: "@Entity\npublic class InventoryItem {\n    @Id private Long id;\n    private int quantity;\n\n    @Version\n    private long version;\n}\n\n@Service\npublic class InventoryService {\n    @Transactional\n    public void deductStock(Long itemId, int quantity) {\n        InventoryItem item = repo.findById(itemId).orElseThrow();\n        if (item.getQuantity() < quantity) {\n            throw new InsufficientStockException();\n        }\n        item.setQuantity(item.getQuantity() - quantity);\n        // Hibernate increments version on flush/commit\n        // If another transaction modified the row, version mismatch → OptimisticLockException\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For high-contention scenarios, use pessimistic locking:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Lock(LockModeType.PESSIMISTIC_WRITE)\n@Query(\"SELECT i FROM InventoryItem i WHERE i.id = :id\")\nOptional<InventoryItem> findByIdForUpdate(@Param(\"id\") Long id);\n\n@Transactional\npublic void deductStockPessimistic(Long itemId, int quantity) {\n    InventoryItem item = repo.findByIdForUpdate(itemId).orElseThrow();\n    // Database row is locked → other transactions wait\n    item.setQuantity(item.getQuantity() - quantity);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For counters and atomic updates, use a single UPDATE statement to avoid the read-then-write race entirely:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Modifying\n@Query(\"UPDATE InventoryItem i SET i.quantity = i.quantity - :qty WHERE i.id = :id AND i.quantity >= :qty\")\nint deductStockAtomic(@Param(\"id\") Long id, @Param(\"qty\") int qty);\n\n// Returns 0 if row didn't exist or quantity was insufficient → no race condition\n"
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
        children: "@SpringBootTest\n@Testcontainers\nclass UserRepositoryTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry reg) {\n        reg.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        reg.add(\"spring.datasource.username\", postgres::getUsername);\n        reg.add(\"spring.datasource.password\", postgres::getPassword);\n    }\n\n    @Autowired\n    private UserRepository userRepo;\n\n    @Test\n    void shouldSaveAndFindUser() {\n        User u = new User(\"alice@example.com\", \"Alice\");\n        userRepo.save(u);\n\n        Optional<User> found = userRepo.findByEmail(\"alice@example.com\");\n        assertThat(found).isPresent();\n        assertThat(found.get().getName()).isEqualTo(\"Alice\");\n    }\n\n    @Test\n    void shouldEnforceUniqueEmail() {\n        userRepo.save(new User(\"same@example.com\", \"First\"));\n        assertThrows(DataIntegrityViolationException.class, () -> {\n            userRepo.save(new User(\"same@example.com\", \"Second\"));\n            userRepo.flush();\n        });\n    }\n}\n"
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
        children: "// INNER JOIN → only posts with at least one comment\n// Result: List<Object[]> → [Post, Comment] pairs\n@Query(\"SELECT p, c FROM Post p JOIN p.comments c\")\nList<Object[]> findPostsWithComments();\n\n// LEFT JOIN → all posts, comments may be null\n@Query(\"SELECT p, c FROM Post p LEFT JOIN p.comments c\")\nList<Object[]> findAllPostsAndComments();\n\n// JOIN FETCH → eagerly loads comments, returns Post entities with comments populated\n@Query(\"SELECT p FROM Post p LEFT JOIN FETCH p.comments\")\nList<Post> findAllPostsWithComments();\n"
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
        children: "// ❌ Plain LEFT JOIN → comments are still lazy\n@Query(\"SELECT p FROM Post p LEFT JOIN p.comments c WHERE c.approved = true\")\nList<Post> findApprovedCommentPosts(); // p.getComments() will still trigger lazy load!\n\n// ✅ JOIN FETCH → comments are loaded\n@Query(\"SELECT p FROM Post p LEFT JOIN FETCH p.comments\")\nList<Post> findAllPostsWithComments(); // p.getComments() is already populated\n"
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
        children: "// CORRECT: allocationSize = DB sequence increment\n@Id\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"order_seq\")\n@SequenceGenerator(name = \"order_seq\", sequenceName = \"order_sequence\", allocationSize = 50)\nprivate Long id;\n\n// Database: CREATE SEQUENCE order_sequence INCREMENT BY 50;\n// Hibernate pre-allocates 50 IDs (1, 51, 101, 151...)\n// Each app instance gets its own block of 50 → no contention\n"
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
        children: "-- PostgreSQL\nCREATE SEQUENCE order_sequence INCREMENT BY 50 START 1;\n\n-- Oracle\nCREATE SEQUENCE order_sequence INCREMENT BY 50 START WITH 1;\n"
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
        children: "<dependency>\n    <groupId>com.vladmihalcea</groupId>\n    <artifactId>hibernate-types-6</artifactId>\n    <version>2.21.1</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"documents\")\n@TypeDef(name = \"jsonb\", typeClass = JsonType.class)\npublic class Document {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @Type(JsonType.class)\n    @Column(name = \"metadata\", columnDefinition = \"jsonb\")\n    private Map<String, Object> metadata;\n\n    @Type(JsonType.class)\n    @Column(name = \"tags\", columnDefinition = \"jsonb\")\n    private List<String> tags;\n\n    @Type(JsonType.class)\n    @Column(name = \"audit_trail\", columnDefinition = \"jsonb\")\n    private List<AuditEntry> auditTrail;\n}\n\n// POJO for JSON deserialization\npublic class AuditEntry {\n    private String action;\n    private String performedBy;\n    private LocalDateTime timestamp;\n    // Must have no-arg constructor, getters, setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Native Hibernate 6.2+ approach (no extra dependency):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"products\")\npublic class Product {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @JdbcTypeCode(SqlTypes.JSON)\n    @Column(columnDefinition = \"jsonb\")\n    private Map<String, String> attributes;\n\n    @JdbcTypeCode(SqlTypes.JSON)\n    @Column(columnDefinition = \"jsonb\")\n    private List<String> tags;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Querying JSON fields with native SQL:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Query(value = \"\"\"\n    SELECT * FROM documents\n    WHERE metadata @> '{\"status\": \"active\"}'::jsonb\n    ORDER BY id DESC\n    \"\"\", nativeQuery = true)\nList<Document> findActiveDocuments();\n"
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
        children: "-- Each developer creates migrations with the current timestamp\n-- V20240707_120000__add_product_table.sql  (Alice, 10 AM)\n-- V20240707_143000__add_reviews_table.sql  (Bob, 2:30 PM)\n-- V20240708_090000__add_index_on_products.sql (Alice, next day)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 2: Git-based conflict detection"
      }), " — use a CI check that detects version collisions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript migration conflict detector\ninterface MigrationFile {\n  version: string;\n  path: string;\n  author: string;\n  checksum: string;\n}\n\nclass MigrationConflictDetector {\n  detectConflicts(migrations: MigrationFile[]): string[] {\n    const conflicts: string[] = [];\n    const versionMap = new Map<string, MigrationFile[]>();\n\n    for (const m of migrations) {\n      if (!versionMap.has(m.version)) {\n        versionMap.set(m.version, []);\n      }\n      versionMap.get(m.version)!.push(m);\n    }\n\n    for (const [version, files] of versionMap) {\n      if (files.length > 1) {\n        conflicts.push(\n          `Version ${version} conflict: ${files.map(f => `${f.path} (${f.author})`).join(', ')}`\n        );\n      }\n    }\n    return conflicts;\n  }\n}\n"
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
        children: "-- V042__alice_feature.sql\n-- V142__bob_refactor.sql\n-- V243__charlie_fix.sql\n"
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
        children: "spring:\n  flyway:\n    baseline-on-migrate: true\n    baseline-version: 0\n"
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
        children: "-- ❌ WRONG: You changed V2 after it was applied to production\n-- Flyway checksums the file content — any change fails validation\n-- FlywayException: \"Migration checksum mismatch for migration version 2\"\n\n-- ✅ CORRECT: Create V3 with the corrected schema\n-- V3__fix_email_column_type.sql\nALTER TABLE users ALTER COLUMN email TYPE VARCHAR(320);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-2-forgetting-the-if-exists-clause-on-destructive-operations",
      children: ["Mistake 2: Forgetting the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF EXISTS"
      }), " clause on destructive operations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ❌ WRONG: Fails if the column was already dropped\nALTER TABLE users DROP COLUMN temp_field;\n\n-- ✅ CORRECT: Safe even if column doesn't exist\nALTER TABLE users DROP COLUMN IF EXISTS temp_field;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "mistake-3-using-springjpahibernateddl-autoupdate-in-production",
      children: ["Mistake 3: Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.jpa.hibernate.ddl-auto=update"
      }), " in production"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ❌ WRONG: Hibernate can drop columns or change types unexpectedly\nspring.jpa.hibernate.ddl-auto=update\n\n# ✅ CORRECT: Use Flyway/Liquibase for all schema changes\nspring.jpa.hibernate.ddl-auto=validate\nspring.flyway.enabled=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-not-testing-migrations-against-a-real-database",
      children: "Mistake 4: Not testing migrations against a real database"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ✅ CORRECT: Testcontainers migration test\n@SpringBootTest\n@Testcontainers\nclass MigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @DynamicPropertySource\n    static void configure(DynamicPropertyRegistry reg) {\n        reg.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        reg.add(\"spring.datasource.username\", postgres::getUsername);\n        reg.add(\"spring.datasource.password\", postgres::getPassword);\n    }\n\n    @Test\n    void allMigrationsApplySuccessfully() {\n        // If Flyway applies without exception, migrations are valid\n        assertThat(postgres.isRunning()).isTrue();\n    }\n}\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant App as Application\n    participant H as Hibernate\n    participant DB as Database\n\n    App->>H: persist(entity)\n    H->>H: Check ID generation strategy\n\n    alt IDENTITY\n        H->>DB: INSERT INTO table (cols) VALUES (vals)\n        DB-->>H: RETURNING id\n        H-->>App: Entity with ID assigned\n\n    else SEQUENCE\n        H->>H: Any pre-allocated IDs left?\n        alt Yes (allocationSize buffer)\n            H->>H: Use next ID from buffer\n        else No\n            H->>DB: SELECT nextval('seq_name')\n            DB-->>H: Next block start (e.g., 51)\n            H->>H: Pre-allocate 50 IDs (51-100)\n        end\n        H->>DB: INSERT ... WITH KNOWN ID\n        DB-->>H: Success\n    else UUID\n        H->>H: Generate UUID v4\n        H->>DB: INSERT ... WITH KNOWN UUID\n        DB--->>H: Success\n    end\n"
      })
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
        children: "interface VersionedEntity {\n  id: number;\n  version: number;\n  data: Record<string, unknown>;\n}\n\ninterface MigrationScript {\n  version: string;\n  description: string;\n  sql: string;\n  checksum: string;\n  appliedAt: Date | null;\n}\n\nclass OptimisticLockSimulator {\n  private store = new Map<number, VersionedEntity>();\n\n  constructor() {\n    this.store.set(1, { id: 1, version: 1, data: { balance: 1000 } });\n    this.store.set(2, { id: 2, version: 1, data: { balance: 500 } });\n  }\n\n  read(id: number): VersionedEntity {\n    const entity = this.store.get(id);\n    if (!entity) throw new Error(`Entity ${id} not found`);\n    return { ...entity };\n  }\n\n  write(id: number, newData: Record<string, unknown>, expectedVersion: number): boolean {\n    const current = this.store.get(id);\n    if (!current) throw new Error(`Entity ${id} not found`);\n    if (current.version !== expectedVersion) {\n      console.log(\n        `[CONFLICT] Entity ${id}: expected v${expectedVersion}, actual v${current.version}`\n      );\n      return false;\n    }\n    this.store.set(id, {\n      ...current,\n      data: newData,\n      version: current.version + 1,\n    });\n    console.log(\n      `[COMMIT] Entity ${id} updated to v${current.version + 1}, balance=${newData['balance']}`\n    );\n    return true;\n  }\n\n  transfer(fromId: number, toId: number, amount: number, maxRetries = 3): boolean {\n    for (let attempt = 1; attempt <= maxRetries; attempt++) {\n      console.log(`\\n[ATTEMPT ${attempt}/${maxRetries}] Transfer $${amount} from ${fromId} to ${toId}`);\n\n      const from = this.read(fromId);\n      const to = this.read(toId);\n\n      const fromBalance = from.data['balance'] as number;\n      const toBalance = to.data['balance'] as number;\n\n      if (fromBalance < amount) {\n        console.log(`[FAIL] Insufficient balance in account ${fromId}: $${fromBalance}`);\n        return false;\n      }\n\n      const fromOk = this.write(fromId, { balance: fromBalance - amount }, from.version);\n      if (!fromOk) {\n        console.log(`[RETRY] Conflict on debit — retrying...`);\n        continue;\n      }\n\n      const toOk = this.write(toId, { balance: toBalance + amount }, to.version);\n      if (!toOk) {\n        console.log(`[RETRY] Conflict on credit — rolling back debit...`);\n        this.write(fromId, { balance: fromBalance }, from.version + 1);\n        continue;\n      }\n\n      console.log(`[SUCCESS] Transfer complete. From: $${fromBalance - amount}, To: $${toBalance + amount}`);\n      return true;\n    }\n    console.log(`[FAIL] Transfer failed after ${maxRetries} attempts`);\n    return false;\n  }\n}\n\n// ── Concurrent transfer simulation ──\nconst sim = new OptimisticLockSimulator();\nconsole.log('=== OPTIMISTIC LOCKING RETRY SIMULATION ===\\n');\nsim.transfer(1, 2, 200);\nsim.transfer(2, 1, 100);\n\n// ── Migration validator ──\nclass MigrationValidator {\n  private migrations: MigrationScript[] = [];\n\n  register(version: string, description: string, sql: string): void {\n    this.migrations.push({\n      version,\n      description,\n      sql,\n      checksum: this.hash(sql),\n      appliedAt: null,\n    });\n  }\n\n  private hash(input: string): string {\n    let hash = 0;\n    for (let i = 0; i < input.length; i++) {\n      const char = input.charCodeAt(i);\n      hash = ((hash << 5) - hash) + char;\n      hash |= 0;\n    }\n    return Math.abs(hash).toString(16);\n  }\n\n  validate(): string[] {\n    const errors: string[] = [];\n    const versions = this.migrations.map(m => m.version);\n\n    for (let i = 0; i < versions.length - 1; i++) {\n      const current = this.migrations[i];\n      const next = this.migrations[i + 1];\n      if (this.compareVersions(current.version, next.version) >= 0) {\n        errors.push(`Version order error: v${current.version} → v${next.version} must be ascending`);\n      }\n      if (current.sql.toLowerCase().includes('drop column') && !current.sql.toLowerCase().includes('if exists')) {\n        errors.push(`Safety: v${current.version} DROP COLUMN without IF EXISTS`);\n      }\n    }\n    return errors;\n  }\n\n  private compareVersions(a: string, b: string): number {\n    const partsA = a.split('_').map(Number);\n    const partsB = b.split('_').map(Number);\n    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {\n      const diff = (partsA[i] || 0) - (partsB[i] || 0);\n      if (diff !== 0) return diff;\n    }\n    return 0;\n  }\n\n  applyAll(): void {\n    const errors = this.validate();\n    if (errors.length > 0) {\n      console.log('\\nMigration validation FAILED:');\n      errors.forEach(e => console.log(`  ✗ ${e}`));\n      return;\n    }\n    for (const m of this.migrations) {\n      m.appliedAt = new Date();\n      console.log(`[APPLIED] v${m.version}: ${m.description} (${m.checksum})`);\n    }\n  }\n}\n\nconsole.log('\\n=== MIGRATION VALIDATOR ===\\n');\nconst validator = new MigrationValidator();\nvalidator.register('1', 'create_users_table', 'CREATE TABLE users (id BIGSERIAL PRIMARY KEY, name TEXT);');\nvalidator.register('2', 'add_email_column', 'ALTER TABLE users ADD COLUMN email VARCHAR(255);');\nvalidator.register('3', 'add_active_flag', 'ALTER TABLE users ADD COLUMN active BOOLEAN DEFAULT TRUE;');\nvalidator.applyAll();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-jpa-inheritance-strategy-comparison",
      children: "Mermaid: JPA Inheritance Strategy Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[JPA Inheritance] --> B[SINGLE_TABLE]\n    A --> C[JOINED]\n    A --> D[TABLE_PER_CLASS]\n\n    B --> E[One table, discriminator column]\n    B --> F[Best query performance]\n    B --> G[Nullable columns for subclasses]\n\n    C --> H[One table per class + parent FK]\n    C --> I[Best normalization]\n    C --> J[Requires JOINs for polymorphic queries]\n\n    D --> K[Complete table per concrete class]\n    D --> L[No polymorphism support]\n    D --> M[UNION queries are expensive]\n\n    style B fill:#4caf50,color:#fff\n    style C fill:#2196f3,color:#fff\n    style D fill:#ff9800,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-flyway-migration-lifecycle",
      children: "Mermaid: Flyway Migration Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Development\n        A[Write V1__init.sql]\n        B[Write V2__add_column.sql]\n    end\n\n    subgraph Build\n        C[Compile + package JAR]\n    end\n\n    subgraph Deploy\n        D[Flyway migrates]\n        E[Check flyway_schema_history]\n    end\n\n    subgraph Production\n        F[(Database)]\n        G[History table]\n    end\n\n    A --> C\n    B --> C\n    C --> D\n    D --> E\n    E -->|New migration found| D\n    D --> F\n    D --> G\n    E -->|Already applied| H[SKIP]\n\n    style D fill:#4caf50,color:#fff\n    style E fill:#ff9800,color:#fff\n    style H fill:#607d8b,color:#916\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-join-vs-left-join-vs-join-fetch",
      children: "Mermaid: JOIN vs LEFT JOIN vs JOIN FETCH"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Query Type] --> B[JOIN / INNER JOIN]\n    A --> C[LEFT JOIN]\n    A --> D[JOIN FETCH]\n\n    B --> E[Only matching rows]\n    B --> F[Excludes orphans]\n    B --> G[Does NOT populate entity]\n\n    C --> H[All left-side rows]\n    C --> I[NULL for non-matching]\n    C --> J[Does NOT populate entity]\n\n    D --> K[Eagerly loads association]\n    D --> L[Populates entity state]\n    D --> M[Prevents N+1 queries]\n\n    style B fill:#2196f3,color:#fff\n    style C fill:#ff9800,color:#fff\n    style D fill:#4caf50,color:#fff\n"
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