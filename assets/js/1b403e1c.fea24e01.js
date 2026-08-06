"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39158],{

/***/ 84718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_59_interview_databases_md_1b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-59-interview-databases-md-1b4.json
const site_docs_courses_java_59_interview_databases_md_1b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/59-interview-databases","title":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","description":"Previous Databases Interview Q&amp;A (cont.)","source":"@site/docs/courses/java/59-interview-databases.md","sourceDirName":"courses/java","slug":"/java/59-interview-databases","permalink":"/ai-engineering-journey/java/59-interview-databases","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":63,"frontMatter":{"id":"59-interview-databases","slug":"/java/59-interview-databases","title":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","sidebar_label":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","sidebar_position":63},"sidebar":"coursesSidebar","previous":{"title":"Best practice: Make LAZY the global default","permalink":"/ai-engineering-journey/java/59-interview-databases-d"},"next":{"title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","permalink":"/ai-engineering-journey/java/60-interview-microservices-a"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/59-interview-databases.md


const frontMatter = {
	id: '59-interview-databases',
	slug: '/java/59-interview-databases',
	title: 'Chapter 59: Database Interview Q&A for Java & Spring Boot Developers',
	sidebar_label: 'Chapter 59: Database Interview Q&A for Java & Spring Boot Developers',
	sidebar_position: 63
};
const contentTitle = 'Chapter 59: Database Interview Q&A for Java & Spring Boot Developers';

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
  "value": "Q1: What is the difference between JDBC and JPA, and when would you use each?",
  "id": "q1-what-is-the-difference-between-jdbc-and-jpa-and-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q2: Explain the difference between <code>hibernate.hbm2ddl.auto</code> values: <code>validate</code>, <code>update</code>, <code>create</code>, <code>create-drop</code>",
  "id": "q2-explain-the-difference-between-hibernatehbm2ddlauto-values-validate-update-create-create-drop",
  "level": 3
}, {
  "value": "Q3: What is the N+1 query problem in Hibernate, and how do you solve it?",
  "id": "q3-what-is-the-n1-query-problem-in-hibernate-and-how-do-you-solve-it",
  "level": 3
}, {
  "value": "Q4: What is the difference between <code>FetchType.LAZY</code> and <code>FetchType.EAGER</code>?",
  "id": "q4-what-is-the-difference-between-fetchtypelazy-and-fetchtypeeager",
  "level": 3
}, {
  "value": "Q5: How do you handle optimistic and pessimistic locking in JPA?",
  "id": "q5-how-do-you-handle-optimistic-and-pessimistic-locking-in-jpa",
  "level": 3
}, {
  "value": "Q6: What is the difference between <code>@Transactional</code> and manual transaction management?",
  "id": "q6-what-is-the-difference-between-transactional-and-manual-transaction-management",
  "level": 3
}, {
  "value": "Q7: Explain Hibernate&#39;s first-level and second-level cache",
  "id": "q7-explain-hibernates-first-level-and-second-level-cache",
  "level": 3
}, {
  "value": "Q8: How does Spring Data JPA derive queries from method names?",
  "id": "q8-how-does-spring-data-jpa-derive-queries-from-method-names",
  "level": 3
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
  "value": "Q16: How do you implement auditing (created_at, updated_at) in JPA?",
  "id": "q16-how-do-you-implement-auditing-created_at-updated_at-in-jpa",
  "level": 3
}, {
  "value": "Q17: What is the Open Session In View (OSIV) anti-pattern, and why avoid it?",
  "id": "q17-what-is-the-open-session-in-view-osiv-anti-pattern-and-why-avoid-it",
  "level": 3
}, {
  "value": "Q18: How do you implement pagination and sorting in Spring Data JPA?",
  "id": "q18-how-do-you-implement-pagination-and-sorting-in-spring-data-jpa",
  "level": 3
}, {
  "value": "Q19: How do you use Spring Data JPA Specifications for dynamic queries?",
  "id": "q19-how-do-you-use-spring-data-jpa-specifications-for-dynamic-queries",
  "level": 3
}, {
  "value": "Q20: How do you implement multi-tenancy in Spring Boot with Hibernate?",
  "id": "q20-how-do-you-implement-multi-tenancy-in-spring-boot-with-hibernate",
  "level": 3
}, {
  "value": "Q21: What is the difference between <code>NativeQuery</code>, <code>JPQL</code>, and <code>CriteriaQuery</code>?",
  "id": "q21-what-is-the-difference-between-nativequery-jpql-and-criteriaquery",
  "level": 3
}, {
  "value": "Q22: How do you use MongoDB with Spring Data?",
  "id": "q22-how-do-you-use-mongodb-with-spring-data",
  "level": 3
}, {
  "value": "Q23: What is connection pooling, and how do you configure HikariCP?",
  "id": "q23-what-is-connection-pooling-and-how-do-you-configure-hikaricp",
  "level": 3
}, {
  "value": "Q24: How do you use Redis with Spring Boot for caching?",
  "id": "q24-how-do-you-use-redis-with-spring-boot-for-caching",
  "level": 3
}, {
  "value": "Q25: How do you troubleshoot slow queries in a Spring Boot + Hibernate application?",
  "id": "q25-how-do-you-troubleshoot-slow-queries-in-a-spring-boot--hibernate-application",
  "level": 3
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
        id: "chapter-59-database-interview-qa-for-java--spring-boot-developers",
        children: "Chapter 59: Database Interview Q&A for Java & Spring Boot Developers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/58-interview-rest-api",
          children: "REST API Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/59-interview-databases-a",
          children: "Databases Interview Q&A (cont.)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "25+ questions covering JDBC, JPA, Hibernate, transactions, locking, indexing, NoSQL, and production database patterns. Each answer includes compilable Java code."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases.png",
        alt: "Database Interview Topics - Flowchart"
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
        href: "../../assets/images/lessons/java/59-interview-databases/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases/visual-explanation.png",
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
      id: "q1-what-is-the-difference-between-jdbc-and-jpa-and-when-would-you-use-each",
      children: "Q1: What is the difference between JDBC and JPA, and when would you use each?"
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
      children: "JDBC (Java Database Connectivity) is a low-level API that lets you execute raw SQL directly against a database. You manage connections, statements, result sets, and transactions manually. JPA (Jakarta Persistence API) is a high-level specification for object-relational mapping (ORM) that maps Java objects to database tables and lets you work with entities instead of SQL strings."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use JDBC when you need fine-grained control over SQL, are doing bulk operations where ORM overhead hurts, or are interacting with database-specific features. Use JPA when you want to reduce boilerplate, need automatic dirty checking, lazy loading, or a unit-of-work pattern, and your queries are reasonably standard."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── JDBC approach ──\npublic User findUserByIdJdbc(long id) {\n    String sql = \"SELECT id, name, email FROM users WHERE id = ?\";\n    try (Connection conn = dataSource.getConnection();\n         PreparedStatement ps = conn.prepareStatement(sql)) {\n        ps.setLong(1, id);\n        try (ResultSet rs = ps.executeQuery()) {\n            if (rs.next()) {\n                User u = new User();\n                u.setId(rs.getLong(\"id\"));\n                u.setName(rs.getString(\"name\"));\n                u.setEmail(rs.getString(\"email\"));\n                return u;\n            }\n        }\n    } catch (SQLException e) {\n        throw new RuntimeException(e);\n    }\n    return null;\n}\n\n// ── JPA approach ──\n@Repository\npublic class UserRepository {\n    @PersistenceContext\n    private EntityManager em;\n\n    public User findUserByIdJpa(long id) {\n        return em.find(User.class, id);  // single line, automatic mapping\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JPA wraps JDBC under the hood. Every JPA operation translates to JDBC calls eventually. The tradeoff is control versus convenience."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q2-explain-the-difference-between-hibernatehbm2ddlauto-values-validate-update-create-create-drop",
      children: ["Q2: Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hibernate.hbm2ddl.auto"
      }), " values: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create-drop"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These control how Hibernate synchronizes your entity mappings with the database schema:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate"
        }), ": Checks that the database schema matches your entities. Throws an exception on mismatch. Safe for production → it never modifies the schema."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update"
        }), ": Automatically alters the schema to match your entities (adds new tables/columns, but never drops anything). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Not safe for production"
        }), " → it can make destructive guesses in edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "create"
        }), ": Drops all existing tables and recreates them from your entities. Data loss guaranteed. Useful for testing only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "create-drop"
        }), ": Same as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create"
        }), ", but also drops the schema when the session factory closes. Ideal for embedded databases in unit tests."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// application.yml\nspring:\n  jpa:\n    hibernate:\n      ddl-auto: validate   # production\n    # ddl-auto: create      # development only\n    # ddl-auto: create-drop # integration tests\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For production, always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "none"
      }), ") and manage schema changes through migrations (Flyway or Liquibase)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-n1-query-problem-in-hibernate-and-how-do-you-solve-it",
      children: "Q3: What is the N+1 query problem in Hibernate, and how do you solve it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The N+1 problem occurs when you fetch a collection of entities (1 query), then iterate over them and lazily load a relationship for each one (N additional queries). This turns a single operation into N+1 database round-trips."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Post {\n    @Id private Long id;\n    private String title;\n\n    @OneToMany(mappedBy = \"post\", fetch = FetchType.LAZY)\n    private List<Comment> comments;\n}\n\n// ❌ Triggers N+1 queries:\n// SELECT p FROM Post p                          -- 1 query\n// for each post: SELECT c FROM Comment c WHERE c.post_id = ?  -- N queries\nList<Post> posts = em.createQuery(\"SELECT p FROM Post p\", Post.class)\n    .getResultList();\nfor (Post p : posts) {\n    System.out.println(p.getComments().size());  // lazy load triggered\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solutions, from best to worst:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. JOIN FETCH → one query with a join:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ✅ Single query with LEFT JOIN FETCH\nTypedQuery<Post> q = em.createQuery(\n    \"SELECT p FROM Post p LEFT JOIN FETCH p.comments\", Post.class);\nList<Post> posts = q.getResultList();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["2. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EntityGraph"
        }), " → declarative fetch plan:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@NamedEntityGraph(name = \"Post.comments\", attributeNodes = @NamedAttributeNode(\"comments\"))\npublic class Post { /* ... */ }\n\n// Usage:\n@EntityGraph(\"Post.comments\")\nList<Post> findAll();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["3. Hibernate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@BatchSize"
        }), " → loads lazy proxies in batches:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@OneToMany(mappedBy = \"post\")\n@BatchSize(size = 20)\nprivate List<Comment> comments;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. DTO projection → avoid entity loading entirely:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "List<PostSummary> summaries = em.createQuery(\n    \"SELECT new com.example.PostSummary(p.id, p.title, SIZE(p.comments)) FROM Post p\",\n    PostSummary.class).getResultList();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JOIN FETCH is the most common fix. Watch for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultipleBagFetchException"
      }), " when fetching multiple collections → use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Set"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " or fetch one collection per query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-what-is-the-difference-between-fetchtypelazy-and-fetchtypeeager",
      children: ["Q4: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FetchType.LAZY"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FetchType.EAGER"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FetchType.LAZY"
      }), " defers loading of an association until it is accessed. Hibernate creates a proxy or collection wrapper that fetches the data from the database on first access. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FetchType.EAGER"
      }), " loads the association immediately, either via a join in the same query or a separate query right after."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Order {\n    @Id private Long id;\n\n    @ManyToOne(fetch = FetchType.EAGER)  // loaded immediately with Order\n    private Customer customer;\n\n    @OneToMany(mappedBy = \"order\", fetch = FetchType.LAZY)  // loaded on first access\n    private List<OrderItem> items;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rules of thumb:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LAZY"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@OneToMany"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ManyToMany"
        }), ". Eager loading a large collection can pull in the entire database."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ManyToOne"
        }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EAGER"
        }), ". Consider changing it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LAZY"
        }), " and using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JOIN FETCH"
        }), " when you actually need the parent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Basic"
        }), " (scalar fields) is always ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EAGER"
        }), " → there is no lazy loading for simple columns unless you enable bytecode enhancement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eager loading via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ManyToOne"
        }), " can cascade into multiple joins: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Order → Customer → Address → Country"
        }), ". One simple query becomes a 4-table Cartesian product."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@NamedEntityGraph"
      }), " approach gives you the best of both worlds: LAZY by default, eager via explicit fetch graph when needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-handle-optimistic-and-pessimistic-locking-in-jpa",
      children: "Q5: How do you handle optimistic and pessimistic locking in JPA?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimistic locking"
      }), " assumes conflicts are rare. You add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Version"
      }), " column, and Hibernate checks it on every update. If another transaction modified the row concurrently, an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OptimisticLockException"
      }), " is thrown."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Account {\n    @Id private Long id;\n    private BigDecimal balance;\n\n    @Version\n    private long version;  // incremented on every update\n}\n\n// Usage → retry on conflict:\n@Transactional\npublic void transfer(Long fromId, Long toId, BigDecimal amount) {\n    try {\n        Account from = accountRepo.findById(fromId).orElseThrow();\n        Account to = accountRepo.findById(toId).orElseThrow();\n        from.setBalance(from.getBalance().subtract(amount));\n        to.setBalance(to.getBalance().add(amount));\n        // Hibernate flushes at commit; if version changed, throws exception\n    } catch (OptimisticLockException e) {\n        // retry the entire operation\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pessimistic locking"
      }), " assumes conflicts are likely. You acquire a database-level lock on the row immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Lock(LockModeType.PESSIMISTIC_WRITE)\n@Query(\"SELECT a FROM Account a WHERE a.id = :id\")\nOptional<Account> findByIdWithLock(@Param(\"id\") Long id);\n\n// Usage:\n@Transactional\npublic void transfer(Long fromId, Long toId, BigDecimal amount) {\n    Account from = accountRepo.findByIdWithLock(fromId).orElseThrow();\n    Account to = accountRepo.findByIdWithLock(toId).orElseThrow();\n    // other transactions block until we commit\n    from.setBalance(from.getBalance().subtract(amount));\n    to.setBalance(to.getBalance().add(amount));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pessimistic lock modes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PESSIMISTIC_READ"
        }), " → shared lock, others can read but not write"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PESSIMISTIC_WRITE"
        }), " → exclusive lock, no one else can read or write"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PESSIMISTIC_FORCE_INCREMENT"
        }), " → pessimistic lock + version increment on commit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use optimistic for read-heavy workloads with rare writes. Use pessimistic for financial transactions, inventory reservations, and any operation where retry is expensive or unacceptable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-what-is-the-difference-between-transactional-and-manual-transaction-management",
      children: ["Q6: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " and manual transaction management?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " is declarative transaction management. Spring wraps the method in a proxy that begins a transaction before the method and commits (or rolls back) after it. Manual management uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionTemplate"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PlatformTransactionManager"
      }), " directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Declarative with @Transactional ──\n@Service\npublic class OrderService {\n    @Transactional\n    public void placeOrder(OrderRequest req) {\n        orderRepo.save(req.toOrder());\n        inventoryRepo.deductStock(req.productId(), req.quantity());\n        paymentService.charge(req.amount());  // any RuntimeException triggers rollback\n    }\n}\n\n// ── Manual with TransactionTemplate ──\n@Service\npublic class OrderService {\n    private final TransactionTemplate txTemplate;\n\n    public void placeOrder(OrderRequest req) {\n        txTemplate.executeWithoutResult(status -> {\n            try {\n                orderRepo.save(req.toOrder());\n                inventoryRepo.deductStock(req.productId(), req.quantity());\n                paymentService.charge(req.amount());\n            } catch (Exception e) {\n                status.setRollbackOnly();  // manual rollback\n                throw e;\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When to use manual:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need transaction boundaries that don't align with method boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need programmatic rollback decisions (rollback only if certain conditions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You're calling transactional code from non-beans or lambda expressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need nested transactions with savepoints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " covers 90% of use cases. Drop down to manual for the remaining 10%."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " attributes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "propagation"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRED"
        }), " (default), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRES_NEW"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NESTED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MANDATORY"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NEVER"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isolation"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "READ_COMMITTED"
        }), " (default in most databases), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SERIALIZABLE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REPEATABLE_READ"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rollbackFor"
        }), ": roll back on checked exceptions too (default is only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RuntimeException"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "timeout"
        }), ": seconds before automatic rollback"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "readOnly"
        }), ": hint for optimization (bypasses dirty checking, sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FLUSH_MODE = MANUAL"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-hibernates-first-level-and-second-level-cache",
      children: "Q7: Explain Hibernate's first-level and second-level cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "First-level cache"
      }), " (L1) is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EntityManager"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "Session"
      }), "-scoped cache. Every entity loaded or persisted within a session is stored in L1. Subsequent lookups by the same ID within the same session hit the cache instead of the database. L1 is always enabled and cannot be disabled → it is a core part of the unit-of-work pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// First-level cache in action:\nUser u1 = em.find(User.class, 1L);  // SQL: SELECT ... WHERE id = 1\nUser u2 = em.find(User.class, 1L);  // L1 cache hit → no SQL\n\nem.clear();  // clears L1 cache\n\nUser u3 = em.find(User.class, 1L);  // SQL again → L1 was empty\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Second-level cache"
      }), " (L2) is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SessionFactory"
      }), "-scoped cache shared across all sessions. You must explicitly enable it and configure a cache provider (Hazelcast, Redis, Ehcache, or the built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hibernate-jcache"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// application.yml\nspring:\n  jpa:\n    properties:\n      hibernate:\n        cache:\n          use_second_level_cache: true\n          region:\n            factory_class: org.hibernate.cache.jcache.JCacheRegionFactory\n        javax:\n          cache:\n            provider: org.ehcache.jsr107.EhcacheCachingProvider\n\n// Entity must be marked cacheable:\n@Entity\n@Cacheable\n@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)\npublic class Country {\n    @Id private Long id;\n    private String code;\n    private String name;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache concurrency strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "READ_ONLY"
        }), ": for reference data that never changes. Fastest, no locking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "READ_WRITE"
        }), ": for mutable data. Uses soft locks. Good for most cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "NONSTRICT_READ_WRITE"
        }), ": for data that rarely conflicts. Weaker isolation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TRANSACTIONAL"
        }), ": for JTA environments. Requires a transactional cache provider."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "L2 cache is not a replacement for a well-tuned database. Use it sparingly → cache only reference data (countries, status codes, configuration) and data that is expensive to compute but rarely changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-does-spring-data-jpa-derive-queries-from-method-names",
      children: "Q8: How does Spring Data JPA derive queries from method names?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Data JPA parses repository method names and generates queries automatically using a predefined keyword grammar. The method name is broken into a subject (optional), a predicate, and a series of connecting keywords."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface UserRepository extends JpaRepository<User, Long> {\n\n    // findBy + field + keyword\n    Optional<User> findByEmail(String email);\n    List<User> findByAgeGreaterThanEqual(int age);\n    List<User> findByNameStartingWith(String prefix);\n\n    // Multiple fields with And/Or\n    List<User> findByLastNameAndAgeBetween(String lastName, int from, int to);\n    List<User> findByFirstNameOrLastName(String first, String last);\n\n    // Sorting\n    List<User> findByActiveTrueOrderByCreatedAtDesc();\n\n    // Limiting\n    Optional<User> findFirstByOrderByScoreDesc();\n    List<User> findTop5ByActiveTrueOrderByScoreDesc();\n\n    // Distinct\n    List<String> findDistinctLastNamesByActiveTrue();\n\n    // Joining across associations\n    List<User> findByDepartmentName(String deptName);  // traverses User.department.name\n\n    // Negation\n    List<User> findByNameNot(String name);\n\n    // Exists\n    boolean existsByEmail(String email);\n\n    // Count\n    long countByStatus(UserStatus status);\n\n    // Delete\n    void deleteByEmail(String email);  // generates delete query\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Supported keywords: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "And"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Or"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "After"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Before"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Between"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Containing"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EndingWith"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Exists"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "False"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GreaterThan"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GreaterThanEqual"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "In"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Is"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IsEmpty"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IsNotNull"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IsNull"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LessThan"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LessThanEqual"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Like"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Near"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Not"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotContaining"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotIn"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotLike"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Regex"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StartingWith"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "True"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Within"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderBy"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Distinct"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "First"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Top"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For complex queries, method names become unwieldy. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Query"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Specification"
      }), " instead:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Query(\"SELECT u FROM User u WHERE u.email LIKE %:domain AND u.active = true \" +\n       \"ORDER BY u.createdAt DESC\")\nList<User> findActiveUsersByEmailDomain(@Param(\"domain\") String domain);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q9-what-is-the-difference-between-manytomany-and-onetomany-with-a-join-entity",
      children: ["Q9: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ManyToMany"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OneToMany"
      }), " with a join entity?"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-do-you-implement-auditing-created_at-updated_at-in-jpa",
      children: "Q16: How do you implement auditing (created_at, updated_at) in JPA?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data JPA provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CreatedDate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@LastModifiedDate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CreatedBy"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@LastModifiedBy"
      }), " annotations. Enable auditing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableJpaAuditing"
      }), " and an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuditorAware"
      }), " bean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Enable auditing ──\n@Configuration\n@EnableJpaAuditing(auditorAwareRef = \"auditorProvider\")\npublic class JpaConfig {\n\n    @Bean\n    public AuditorAware<String> auditorProvider() {\n        return () -> Optional.ofNullable(SecurityContextHolder.getContext())\n            .map(ctx -> ctx.getAuthentication())\n            .map(Authentication::getName)\n            .orElse(\"system\");\n    }\n}\n\n// ── Base entity ──\n@MappedSuperclass\n@EntityListeners(AuditingEntityListener.class)\npublic abstract class BaseEntity {\n\n    @CreatedDate\n    @Column(updatable = false)\n    private LocalDateTime createdAt;\n\n    @LastModifiedDate\n    private LocalDateTime updatedAt;\n\n    @CreatedBy\n    @Column(updatable = false)\n    private String createdBy;\n\n    @LastModifiedBy\n    private String lastModifiedBy;\n}\n\n// ── Usage ──\n@Entity\npublic class Product extends BaseEntity {\n    @Id @GeneratedValue private Long id;\n    private String name;\n    private BigDecimal price;\n}\n\n// Persisting a Product automatically sets createdAt, updatedAt, createdBy, lastModifiedBy\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EntityListeners(AuditingEntityListener.class)"
      }), " hooks into JPA lifecycle events (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PrePersist"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreUpdate"
      }), ") to populate the fields. No manual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setCreatedAt()"
      }), " calls needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For UUID-based IDs with automatic generation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Document {\n    @Id\n    @GeneratedValue(strategy = GenerationType.UUID)\n    private UUID id;\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-what-is-the-open-session-in-view-osiv-anti-pattern-and-why-avoid-it",
      children: "Q17: What is the Open Session In View (OSIV) anti-pattern, and why avoid it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OSIV keeps the Hibernate session open throughout the entire HTTP request, including during view rendering. This means lazy loading works in your templates → which sounds convenient → but it causes serious production problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Spring Boot default (enabled) → causes the anti-pattern:\n\n> **Previous:** [REST API Interview Q&amp;A](./58-interview-rest-api.md) | **Next:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-a.md)\nspring:\n  jpa:\n    open-in-view: true   # default is true → BAD for production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problems with OSIV:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection pool exhaustion"
        }), ": The database connection is held for the entire request, including slow view rendering or network I/O. Each connection is unavailable for other requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lazy loading in unexpected places"
        }), ": Templates trigger N+1 queries silently → developers don't notice until production load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction boundary confusion"
        }), ": Developers think a transaction is open because entities are still accessible, but the transaction may have already committed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard-to-debug performance issues"
        }), ": A page that renders fine locally with 10 entities triggers 100 queries in production with real data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fix: Disable OSIV and load everything you need in the service layer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  jpa:\n    open-in-view: false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOIN FETCH"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EntityGraph"
      }), ", or DTO projections to ensure all required data is loaded within the transaction:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n    @Transactional(readOnly = true)\n    public OrderDto getOrderWithDetails(Long orderId) {\n        Order order = orderRepo.findByIdWithItemsAndCustomer(orderId);\n        // All lazy associations are loaded inside the transaction\n        // After this method returns, the session is closed\n        return OrderDto.from(order);  // DTO → no lazy loading during serialization\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-implement-pagination-and-sorting-in-spring-data-jpa",
      children: "Q18: How do you implement pagination and sorting in Spring Data JPA?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data JPA provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pageable"
      }), " for pagination and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sort"
      }), " for sorting. The repository method accepts a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pageable"
      }), " parameter and returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Page"
      }), " object with metadata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface ProductRepository extends JpaRepository<Product, Long> {\n    Page<Product> findByCategory(String category, Pageable pageable);\n    Slice<Product> findByNameContaining(String name, Pageable pageable);\n    List<Product> findByActiveTrue(Sort sort);\n}\n\n// ── Usage in service ──\n@Service\npublic class ProductService {\n    public Page<ProductDto> getProductsByCategory(String category, int page, int size) {\n        Pageable pageable = PageRequest.of(page, size,\n            Sort.by(\"price\").ascending().and(Sort.by(\"name\")));\n\n        Page<Product> productPage = productRepo.findByCategory(category, pageable);\n\n        // Page contains: content, totalElements, totalPages, number, size, first, last, etc.\n        return productPage.map(ProductDto::from);\n    }\n}\n\n// ── REST controller with Spring MVC pagination ──\n@GetMapping(\"/products\")\npublic ResponseEntity<Page<ProductDto>> getProducts(\n        @RequestParam(defaultValue = \"0\") int page,\n        @RequestParam(defaultValue = \"20\") int size,\n        @RequestParam(defaultValue = \"name,asc\") String[] sort) {\n\n    Sort sortObj = Sort.by(\n        Arrays.stream(sort)\n            .map(s -> s.contains(\",\")\n                ? new Sort.Order(Sort.Direction.fromString(s.split(\",\")[1]), s.split(\",\")[0])\n                : new Sort.Order(Sort.Direction.ASC, s))\n            .collect(Collectors.toList()));\n\n    Pageable pageable = PageRequest.of(page, size, sortObj);\n    return ResponseEntity.ok(productService.getProducts(pageable));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key differences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Page"
        }), ": Includes total element count (requires a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COUNT"
        }), " query). Use for UIs that need total page numbers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Slice"
        }), ": Only knows if there's a next slice (no count query). More efficient for infinite scroll."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "List"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sort"
        }), ": No pagination header. Use for small result sets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Always set a maximum page size to prevent abuse: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PageableDefault(size = 20, maxSize = 100)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-do-you-use-spring-data-jpa-specifications-for-dynamic-queries",
      children: "Q19: How do you use Spring Data JPA Specifications for dynamic queries?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Specifications let you build dynamic, type-safe queries programmatically by composing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Specification"
      }), " objects with logical operators. They are the JPA equivalent of the Query Object pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Step 1: Have your repository extend JpaSpecificationExecutor ──\npublic interface UserRepository extends JpaRepository<User, Long>,\n        JpaSpecificationExecutor<User> {\n}\n\n// ── Step 2: Create specification factory methods ──\npublic class UserSpecifications {\n\n    public static Specification<User> hasName(String name) {\n        return (root, query, cb) ->\n            name == null ? null : cb.like(root.get(\"name\"), \"%\" + name + \"%\");\n    }\n\n    public static Specification<User> hasEmailDomain(String domain) {\n        return (root, query, cb) ->\n            root.get(\"email\").as(String.class).in(\n                cb.literal(\"%@\" + domain)\n            );\n    }\n\n    public static Specification<User> isActive() {\n        return (root, query, cb) -> cb.isTrue(root.get(\"active\"));\n    }\n\n    public static Specification<User> createdAfter(LocalDateTime date) {\n        return (root, query, cb) ->\n            date == null ? null : cb.greaterThan(root.get(\"createdAt\"), date);\n    }\n\n    public static Specification<User> hasRole(String role) {\n        return (root, query, cb) -> {\n            Join<User, Role> roles = root.join(\"roles\");\n            return cb.equal(roles.get(\"name\"), role);\n        };\n    }\n}\n\n// ── Step 3: Compose specifications ──\n@Service\npublic class UserSearchService {\n\n    private final UserRepository userRepo;\n\n    public List<User> search(String name, String domain, String role,\n                             LocalDateTime after, Boolean active) {\n        Specification<User> spec = Specification.where(null);\n\n        if (name != null)     spec = spec.and(UserSpecifications.hasName(name));\n        if (domain != null)   spec = spec.and(UserSpecifications.hasEmailDomain(domain));\n        if (role != null)     spec = spec.and(UserSpecifications.hasRole(role));\n        if (after != null)    spec = spec.and(UserSpecifications.createdAfter(after));\n        if (Boolean.TRUE.equals(active)) spec = spec.and(UserSpecifications.isActive());\n\n        return userRepo.findAll(spec, Sort.by(\"name\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use Specifications over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Query"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The number of filter combinations grows combinatorially"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filters are optional and the WHERE clause changes per request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to reuse predicates across different queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-implement-multi-tenancy-in-spring-boot-with-hibernate",
      children: "Q20: How do you implement multi-tenancy in Spring Boot with Hibernate?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-tenancy separates data across tenants (customers/organizations). Three approaches:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Separate Database"
      }), " → each tenant has its own database:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\n\n> **Previous:** [REST API Interview Q&amp;A](./58-interview-rest-api.md) | **Next:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-a.md)\nspring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/\n  jpa:\n    properties:\n      hibernate:\n        multi_tenant_connection_provider: com.example.TenantConnectionProvider\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class TenantConnectionProvider\n        implements MultiTenantConnectionProvider {\n    private final Map<String, DataSource> tenantDataSources = Map.of(\n        \"tenant_a\", createDataSource(\"jdbc:postgresql://localhost:5432/tenant_a\"),\n        \"tenant_b\", createDataSource(\"jdbc:postgresql://localhost:5432/tenant_b\")\n    );\n\n    @Override\n    public Connection getConnection(String tenantId) throws SQLException {\n        return tenantDataSources.get(tenantId).getConnection();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Separate Schema"
      }), " → same database, different schemas per tenant:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class TenantSchemaResolver implements CurrentTenantIdentifierResolver {\n    @Override\n    public String resolveCurrentTenantIdentifier() {\n        return RequestContextHolder.getRequestAttributes() != null\n            ? TenantContext.getTenantId()  // from HTTP header or JWT claim\n            : \"public\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Discriminator Column"
      }), " → same table, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenant_id"
      }), " column on every row:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Where(clause = \"tenant_id = current_tenant_id()\")\n@FilterDef(name = \"tenantFilter\", parameters = @ParamDef(name = \"tenantId\", type = Long.class))\n@Filter(name = \"tenantFilter\", condition = \"tenant_id = :tenantId\")\npublic class Document {\n    @Id private Long id;\n    private Long tenantId;\n    private String title;\n}\n\n// In service:\n@Transactional\npublic List<Document> getDocuments() {\n    Session session = em.unwrap(Session.class);\n    session.enableFilter(\"tenantFilter\")\n        .setParameter(\"tenantId\", TenantContext.getTenantId());\n    return repo.findAll();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Separate database is strongest isolation (best for compliance). Schema per tenant is a good middle ground. Discriminator column is simplest but riskiest → one bug can leak data between tenants. Never use discriminator-column tenancy for regulated data (HIPAA, GDPR financial)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q21-what-is-the-difference-between-nativequery-jpql-and-criteriaquery",
      children: ["Q21: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeQuery"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JPQL"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CriteriaQuery"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NativeQuery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JPQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CriteriaQuery"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity-based SQL-like"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java API (no string)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable across DBs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (Object[])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (TypedQuery)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (typed generics)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic query building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmatic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (direct SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slight overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── NativeQuery: raw SQL, returns Object[] ──\n@Query(value = \"SELECT id, name, COUNT(*) OVER() as total \" +\n       \"FROM users WHERE name ILIKE %:query% ORDER BY name \" +\n       \"OFFSET :offset LIMIT :limit\", nativeQuery = true)\nList<Object[]> searchNative(@Param(\"query\") String q,\n                            @Param(\"offset\") int offset,\n                            @Param(\"limit\") int limit);\n\n// ── JPQL: entity-based ──\n@Query(\"SELECT u FROM User u WHERE u.name LIKE %:query% ORDER BY u.name\")\nList<User> searchJpql(@Param(\"query\") String q, Pageable pageable);\n\n// ── CriteriaQuery: programmatic, type-safe ──\npublic List<User> searchCriteria(String name, String email, Boolean active) {\n    CriteriaBuilder cb = em.getCriteriaBuilder();\n    CriteriaQuery<User> cq = cb.createQuery(User.class);\n    Root<User> root = cq.from(User.class);\n\n    List<Predicate> predicates = new ArrayList<>();\n    if (name != null)   predicates.add(cb.like(root.get(\"name\"), \"%\" + name + \"%\"));\n    if (email != null)  predicates.add(cb.equal(root.get(\"email\"), email));\n    if (active != null) predicates.add(cb.equal(root.get(\"active\"), active));\n\n    cq.where(cb.and(predicates.toArray(new Predicate[0])));\n    cq.orderBy(cb.asc(root.get(\"name\")));\n\n    return em.createQuery(cq).getResultList();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use NativeQuery for database-specific features (window functions, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ILike"
      }), ", full-text search). Use JPQL for 80% of queries → it is expressive and portable. Use CriteriaQuery only when building dynamic queries with a combinatorial number of optional filters (but even then, Specifications are usually cleaner)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-how-do-you-use-mongodb-with-spring-data",
      children: "Q22: How do you use MongoDB with Spring Data?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Data MongoDB follows the same repository pattern as JPA but maps documents instead of relational rows."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-mongodb</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Document mapping ──\n@Document(collection = \"orders\")\npublic class Order {\n    @Id private String id;\n    private String customerId;\n    private LocalDateTime orderDate;\n    private String status;\n    private List<OrderItem> items;\n    private Address shippingAddress;\n}\n\n// ── Repository ──\npublic interface OrderRepository extends MongoRepository<Order, String> {\n    List<Order> findByCustomerId(String customerId);\n    List<Order> findByStatusOrderByOrderDateDesc(String status);\n\n    // JSON-like query with @Query\n    @Query(\"{ 'status': ?0, 'items.price': { $gt: ?1 } }\")\n    List<Order> findHighValueOrders(String status, double minPrice);\n\n    // Aggregation pipeline\n    @Aggregation(pipeline = {\n        \"{ $match: { status: 'COMPLETED' } }\",\n        \"{ $group: { _id: '$customerId', total: { $sum: '$total' } } }\",\n        \"{ $sort: { total: -1 } }\",\n        \"{ $limit: 10 }\"\n    })\n    List<CustomerSpending> findTopCustomers();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key differences from JPA:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No joins → embed related data or reference by ID"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No schema enforcement (unless you use schema validation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomic operations on single documents only → no cross-document transactions (unless using replica sets)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Indexes defined via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Indexed"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CompoundIndex"
        }), ", or programmatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Document\n@CompoundIndex(def = \"{'customerId': 1, 'status': 1}\")\npublic class Order {\n    @Id private String id;\n\n    @Indexed\n    private String customerId;\n\n    @Indexed(expireAfterSeconds = 7776000)  // TTL index → auto-delete after 90 days\n    private LocalDateTime createdAt;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use MongoDB when your data is document-shaped (JSON-like, nested, varying schema) and you don't need complex joins or ACID transactions across multiple entities."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-what-is-connection-pooling-and-how-do-you-configure-hikaricp",
      children: "Q23: What is connection pooling, and how do you configure HikariCP?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connection pooling reuses database connections instead of creating a new TCP connection for every request. Creating a connection is expensive (TCP handshake, SSL negotiation, authentication takes 10-100 ms). A pool maintains a set of open connections that are borrowed and returned."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot uses HikariCP by default → the fastest connection pool in the Java ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/mydb\n    username: app\n    password: secret\n    hikari:\n      maximum-pool-size: 20       # max connections in the pool\n      minimum-idle: 5              # connections to keep alive when idle\n      idle-timeout: 300000         # 5 min before an idle connection is evicted\n      connection-timeout: 5000     # 5 second wait for a connection before timeout\n      max-lifetime: 1800000        # 30 min max lifetime per connection\n      pool-name: MyAppPool\n      connection-test-query: SELECT 1\n      leak-detection-threshold: 60000  # log warning if connection held >60s\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Picking ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maximum-pool-size"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Formula: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(core_count * 2) + effective_spindle_count"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For a typical 8-core server: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(8 * 2) + 1 = 17"
        }), ", rounded to 20"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More connections do not mean more throughput → PostgreSQL (and most databases) scales poorly beyond 50-100 connections"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Monitor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pool.Wait"
        }), " time → if connections are waiting, increase the pool size gradually"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Programmatic configuration (if needed):\n@Configuration\npublic class DataSourceConfig {\n    @Bean\n    public HikariDataSource dataSource() {\n        HikariConfig config = new HikariConfig();\n        config.setJdbcUrl(\"jdbc:postgresql://localhost:5432/mydb\");\n        config.setUsername(\"app\");\n        config.setPassword(\"secret\");\n        config.setMaximumPoolSize(20);\n        config.setConnectionTimeout(5000);\n        config.setLeakDetectionThreshold(60000);\n        return new HikariDataSource(config);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Always set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "leak-detection-threshold"
      }), " in development to catch connection leaks (forgotten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finally"
      }), " blocks, unreleased streams)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-do-you-use-redis-with-spring-boot-for-caching",
      children: "Q24: How do you use Redis with Spring Boot for caching?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's caching abstraction works with Redis as the backing store. Configure Redis cache, then annotate methods with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Cacheable"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CacheEvict"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CachePut"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-cache</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Configuration ──\n@Configuration\n@EnableCaching\npublic class CacheConfig {\n\n    @Bean\n    public RedisCacheConfiguration cacheConfiguration() {\n        return RedisCacheConfiguration.defaultCacheConfig()\n            .entryTtl(Duration.ofMinutes(10))\n            .disableCachingNullValues()\n            .serializeKeysWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new StringRedisSerializer()))\n            .serializeValuesWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new GenericJackson2JsonRedisSerializer()));\n    }\n}\n\n// ── Usage ──\n@Service\npublic class ProductService {\n\n    @Cacheable(value = \"products\", key = \"#id\")\n    public Product getProduct(Long id) {\n        return productRepo.findById(id)\n            .orElseThrow(() -> new ProductNotFoundException(id));\n        // Result cached in Redis for 10 minutes\n    }\n\n    @CachePut(value = \"products\", key = \"#product.id\")\n    public Product updateProduct(Product product) {\n        return productRepo.save(product);\n        // Updates the cache → next read gets fresh data\n    }\n\n    @CacheEvict(value = \"products\", key = \"#id\")\n    public void deleteProduct(Long id) {\n        productRepo.deleteById(id);\n        // Removes from cache\n    }\n\n    @CacheEvict(value = \"products\", allEntries = true)\n    public void clearCache() {\n        // Clears entire products cache\n    }\n\n    @Cacheable(value = \"searchResults\", key = \"#query + '-' + #page\")\n    public List<Product> searchProducts(String query, int page, Pageable p) {\n        return productRepo.search(query, p).getContent();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  cache:\n    type: redis\n  redis:\n    host: localhost\n    port: 6379\n    timeout: 2000ms\n    lettuce:\n      pool:\n        max-active: 16\n        max-idle: 8\n        min-idle: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use caching for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference data (country lists, category trees)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expensive computations (report aggregations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External API responses (rate-limited or slow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User sessions (if using Redis for session store)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never cache mutable data without TTL or eviction. Stale data is worse than slow data."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-how-do-you-troubleshoot-slow-queries-in-a-spring-boot--hibernate-application",
      children: "Q25: How do you troubleshoot slow queries in a Spring Boot + Hibernate application?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A systematic approach from outermost to innermost:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Enable SQL logging:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "logging:\n  level:\n    org.hibernate.SQL: DEBUG\n    org.hibernate.type.descriptor.sql.BasicBinder: TRACE\n# OR for formatted output:\n\n> **Previous:** [REST API Interview Q&amp;A](./58-interview-rest-api.md) | **Next:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-a.md)\nspring:\n  jpa:\n    show-sql: true\n    properties:\n      hibernate:\n        format_sql: true\n        use_sql_comments: true  # shows which code triggered each query\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Enable slow query logging in Hibernate:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  jpa:\n    properties:\n      hibernate:\n        session:\n          events:\n            log:\n              LOG_QUERIES_SLOWER_THAN_MS: 200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Use Spring Boot Actuator metrics:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: metrics\n  metrics:\n    tags:\n      application: my-app\n    export:\n      datasource: hikaricp\n      hibernate: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/metrics/hibernate.query.executions"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/actuator/metrics/hikaricp.connections.timeout"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Enable P6Spy or datasource-proxy for query analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.github.gavlyukovskiy</groupId>\n    <artifactId>p6spy-spring-boot-starter</artifactId>\n    <version>1.9.1</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    url: jdbc:p6spy:postgresql://localhost:5432/mydb\n  p6spy:\n    log-format: \"[%SQL] %TIMESTAMP | %CONNECTION | took %ELAPSED ms | %SQL\"\n    execution-threshold: 200  # log queries slower than 200ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Database-level slow query log (PostgreSQL example):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Enable pg_stat_statements extension\nCREATE EXTENSION IF NOT EXISTS pg_stat_statements;\n\n-- Find the worst queries:\nSELECT query, calls, total_exec_time / calls AS avg_ms,\n       rows / calls AS avg_rows, shared_blks_hit\nFROM pg_stat_statements\nORDER BY total_exec_time DESC\nLIMIT 10;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common fixes by symptom:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N+1 queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy loading in loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN FETCH or @BatchSize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow COUNT query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination on complex query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Slice instead of Page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan on filter/join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add database index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large result set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No pagination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add Pageable with max size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hanging connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OSIV enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set open-in-view: false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query runs slow only under load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pool contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune HikariCP pool size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same query in logs 100x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No query plan cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Hibernate query cache"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most impactful single change: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enable slow query logging in both Hibernate and the database"
      }), ", correlate the logs, and fix the top 5 queries. That typically resolves 80% of database performance issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-what-is-database-sharding-and-how-do-you-implement-it",
      children: "Q26: What is database sharding, and how do you implement it?"
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