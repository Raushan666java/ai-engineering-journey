"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[78885],{

/***/ 75176
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_59_interview_databases_c_md_b0f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-59-interview-databases-c-md-b0f.json
const site_docs_courses_java_59_interview_databases_c_md_b0f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/59-interview-databases-c","title":"Spring Boot default (enabled) → causes the anti-pattern:","description":"Database Sharding - Flowchart","source":"@site/docs/courses/java/59-interview-databases-c.md","sourceDirName":"courses/java","slug":"/java/59-interview-databases-c","permalink":"/ai-engineering-journey/java/59-interview-databases-c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":61,"frontMatter":{"id":"59-interview-databases-c","slug":"/java/59-interview-databases-c","title":"Spring Boot default (enabled) → causes the anti-pattern:","sidebar_label":"Spring Boot default (enabled) → causes the anti-pattern:","sidebar_position":61},"sidebar":"course-java","previous":{"title":"❌ WRONG: Hibernate can drop columns or change types unexpectedly","permalink":"/ai-engineering-journey/java/59-interview-databases-b"},"next":{"title":"Best practice: Make LAZY the global default","permalink":"/ai-engineering-journey/java/59-interview-databases-d"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/59-interview-databases-c.md


const frontMatter = {
	id: '59-interview-databases-c',
	slug: '/java/59-interview-databases-c',
	title: 'Spring Boot default (enabled) → causes the anti-pattern:',
	sidebar_label: 'Spring Boot default (enabled) → causes the anti-pattern:',
	sidebar_position: 61
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
  "value": "Q23: What is the N+1 problem in the context of GraphQL vs JPA?",
  "id": "q23-what-is-the-n1-problem-in-the-context-of-graphql-vs-jpa",
  "level": 3
}, {
  "value": "Q24: What is write skew and how does it differ from dirty write?",
  "id": "q24-what-is-write-skew-and-how-does-it-differ-from-dirty-write",
  "level": 3
}, {
  "value": "Common Mistakes in Database Performance (GFG-Style)",
  "id": "common-mistakes-in-database-performance-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Ignoring the query plan",
  "id": "mistake-1-ignoring-the-query-plan",
  "level": 3
}, {
  "value": "Mistake 2: Not using database-specific types",
  "id": "mistake-2-not-using-database-specific-types",
  "level": 3
}, {
  "value": "Mistake 3: Missing composite indexes for multi-column filters",
  "id": "mistake-3-missing-composite-indexes-for-multi-column-filters",
  "level": 3
}, {
  "value": "Mistake 4: No pagination on unbounded queries",
  "id": "mistake-4-no-pagination-on-unbounded-queries",
  "level": 3
}, {
  "value": "Mistake 5: Using SELECT * in production queries",
  "id": "mistake-5-using-select--in-production-queries",
  "level": 3
}, {
  "value": "Index Type Comparison Table",
  "id": "index-type-comparison-table",
  "level": 2
}, {
  "value": "Mermaid: Query Plan Visualization",
  "id": "mermaid-query-plan-visualization",
  "level": 2
}, {
  "value": "Chapter Quiz — Database Performance (Part 4)",
  "id": "chapter-quiz--database-performance-part-4",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases-c.png",
        alt: "Database Sharding - Flowchart"
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
        href: "../../assets/images/lessons/java/59-interview-databases-c/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-c/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases-c/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-c/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/59-interview-databases-c/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/59-interview-databases-c/visual-explanation.png",
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
      id: "q16-how-do-you-implement-auditing-created_at-updated_at-in-jpa",
      children: "Q16: How do you implement auditing (created_at, updated_at) in JPA?"
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
        children: "# Spring Boot default (enabled) → causes the anti-pattern:\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-b.md) | **Next:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md)\nspring:\n  jpa:\n    open-in-view: true   # default is true → BAD for production\n"
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
        children: "# application.yml\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-b.md) | **Next:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md)\nspring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/\n  jpa:\n    properties:\n      hibernate:\n        multi_tenant_connection_provider: com.example.TenantConnectionProvider\n"
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
        children: "logging:\n  level:\n    org.hibernate.SQL: DEBUG\n    org.hibernate.type.descriptor.sql.BasicBinder: TRACE\n# OR for formatted output:\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-b.md) | **Next:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md)\nspring:\n  jpa:\n    show-sql: true\n    properties:\n      hibernate:\n        format_sql: true\n        use_sql_comments: true  # shows which code triggered each query\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-what-is-the-n1-problem-in-the-context-of-graphql-vs-jpa",
      children: "Q23: What is the N+1 problem in the context of GraphQL vs JPA?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both GraphQL and JPA can suffer from N+1 problems, but the manifestation differs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JPA N+1:"
      }), " Occurs when an entity loads lazy collections iteratively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JPA N+1: 1 query for posts + N queries for comments\nList<Post> posts = postRepository.findAll();\nfor (Post p : posts) {\n    System.out.println(p.getComments().size());  // Triggers N lazy loads\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GraphQL N+1:"
      }), " Occurs when a resolver fetches data per parent entity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-graphql",
        children: "# GraphQL query\nquery {\n  posts {\n    title\n    comments {     # This resolver runs once per post!\n      text\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ N+1 in GraphQL resolver\n@Component\npublic class PostResolver implements GraphQLResolver<Post> {\n    public List<Comment> getComments(Post post) {\n        // This executes a query for EVERY post!\n        return commentRepository.findByPostId(post.getId());\n    }\n}\n\n// ✅ Fix with DataLoader (batch loading)\n@Component\npublic class CommentDataLoader implements DataLoader<Long, List<Comment>> {\n    @Override\n    public CompletionStage<List<Comment>> load(Long postId) {\n        return CompletableFuture.supplyAsync(() ->\n            commentRepository.findByPostId(postId));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DataLoader pattern:"
      }), " Batches individual loads into a single query:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class DataLoaderConfig {\n    @Bean\n    public DataLoader<Long, List<Comment>> commentLoader(CommentRepository repo) {\n        return new DataLoader<>(postIds -> {\n            // Single query: WHERE post_id IN (:ids)\n            Map<Long, List<Comment>> grouped = repo.findByPostIdIn(postIds)\n                .stream()\n                .collect(Collectors.groupingBy(Comment::getPostId));\n            return CompletableFuture.completedFuture(\n                postIds.stream()\n                    .map(id -> grouped.getOrDefault(id, List.of()))\n                    .toList()\n            );\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The root cause is the same in both: fetching parent entities and loading children one-by-one. The fix is also the same: batch loading (JOIN FETCH, DataLoader, or @BatchSize)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-what-is-write-skew-and-how-does-it-differ-from-dirty-write",
      children: "Q24: What is write skew and how does it differ from dirty write?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Write skew"
      }), " occurs when two concurrent transactions read overlapping data and make conflicting decisions based on stale reads. Each transaction individually maintains database consistency, but together they violate a business rule."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Doctor on-call scheduling (two doctors must not both be off-call):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Database: doctors(id, name, on_call BOOLEAN)\n-- Constraint: at least one doctor must be on_call = true\n\n-- Transaction 1 (Doctor A removes self):\nBEGIN;\nSELECT COUNT(*) FROM doctors WHERE on_call = true;  -- Returns 2\nUPDATE doctors SET on_call = false WHERE id = 1;     -- A goes off\nCOMMIT;\n\n-- Transaction 2 (Doctor B removes self, concurrent):\nBEGIN;\nSELECT COUNT(*) FROM doctors WHERE on_call = true;  -- Returns 2 (same stale value!)\nUPDATE doctors SET on_call = false WHERE id = 2;     -- B goes off\nCOMMIT;\n\n-- Result: 0 doctors on call — constraint violated!\n-- No serialization anomaly detected by standard isolation levels.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ Write skew in JPA (REPEATABLE_READ)\n@Transactional\npublic void takeOffCall(Long doctorId) {\n    long onCallCount = doctorRepo.countByOnCallTrue();\n    if (onCallCount > 1) {\n        Doctor doc = doctorRepo.findById(doctorId).orElseThrow();\n        doc.setOnCall(false);\n        // Two concurrent calls → both succeed, no constraint violation detected\n    }\n}\n\n// ✅ Fix: SERIALIZABLE isolation or pessimistic lock\n@Transactional(isolation = Isolation.SERIALIZABLE)\npublic void takeOffCallSafe(Long doctorId) {\n    // Or use SELECT ... FOR UPDATE on the entire on-call set\n    List<Doctor> onCall = doctorRepo.findAllByOnCallTrueWithLock();  // PESSIMISTIC_WRITE\n    if (onCall.size() > 1) {\n        Doctor doc = doctorRepo.findById(doctorId).orElseThrow();\n        doc.setOnCall(false);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dirty write"
      }), " (simpler): Transaction A writes a value, Transaction B overwrites it before A commits or rolls back. This is prevented by READ_COMMITTED+ and is not the same as write skew."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anomaly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation level that prevents it"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read uncommitted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ_COMMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwrite uncommitted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repeatable read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REPEATABLE_READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different values on re-read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phantom read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERIALIZABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New rows appear in range query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write skew"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERIALIZABLE (or explicit lock)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conflicting decisions from stale snapshot"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write skew is subtle because each transaction's individual actions are correct — only the combination violates the constraint. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SERIALIZABLE"
      }), " isolation or explicit range locks to prevent it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-in-database-performance-gfg-style",
      children: "Common Mistakes in Database Performance (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-ignoring-the-query-plan",
      children: "Mistake 1: Ignoring the query plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ❌ WRONG: Guessing at slow queries instead of checking EXPLAIN ANALYZE\n-- \"I think adding an index will help\" → no data-driven decision\n\n-- ✅ CORRECT: Check the query plan first\nEXPLAIN ANALYZE SELECT * FROM orders\nWHERE customer_id = 42 AND created_at > '2024-01-01';\n-- Look for: Seq Scan → needs index, Nested Loop → may benefit from JOIN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-not-using-database-specific-types",
      children: "Mistake 2: Not using database-specific types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ❌ WRONG: Using VARCHAR for everything\nCREATE TABLE products (\n    id BIGSERIAL PRIMARY KEY,\n    price VARCHAR(20),  -- ❌ Sorting requires type conversion\n    tags VARCHAR(500)   -- ❌ Can't index JSON fields\n);\n\n-- ✅ CORRECT: Use proper types\nCREATE TABLE products (\n    id BIGSERIAL PRIMARY KEY,\n    price NUMERIC(10,2),  -- ✅ Proper numeric comparison\n    tags TEXT[]            -- ✅ PostgreSQL array type\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-missing-composite-indexes-for-multi-column-filters",
      children: "Mistake 3: Missing composite indexes for multi-column filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Query: SELECT * FROM orders WHERE status = 'PENDING' AND created_at > '2024-01-01'\n\n-- ❌ Separate indexes — database picks one, filters the other in memory\nCREATE INDEX idx_orders_status ON orders(status);\nCREATE INDEX idx_orders_created ON orders(created_at);\n\n-- ✅ Composite index — both conditions use the index\nCREATE INDEX idx_orders_status_created ON orders(status, created_at);\n-- Equality columns first (status), range column last (created_at)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-no-pagination-on-unbounded-queries",
      children: "Mistake 4: No pagination on unbounded queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Fetching all rows without limit\nList<Order> allOrders = orderRepository.findAll();\n// With 10M orders → OOM or network timeout\n\n// ✅ CORRECT: Always paginate\n@GetMapping(\"/orders\")\npublic Page<Order> getOrders(@PageableDefault(size = 20) Pageable pageable) {\n    return orderRepository.findAll(pageable);\n}\n\n// Or use Stream for batch processing\n@Transactional(readOnly = true)\npublic void processAllOrders() {\n    try (Stream<Order> stream = orderRepository.streamAll()) {\n        stream.forEach(this::processOrder);  // Processes in streaming fashion\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-5-using-select--in-production-queries",
      children: "Mistake 5: Using SELECT * in production queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ❌ WRONG: SELECT * pulls all columns including BLOBs, TEXT, unused fields\nSELECT * FROM users WHERE email = 'test@example.com';\n\n-- ✅ CORRECT: Specify only needed columns — faster I/O, less network\nSELECT id, name, email FROM users WHERE email = 'test@example.com';\n\n-- In JPA: Use projections or DTOs\npublic interface UserSummary {\n    String getName();\n    String getEmail();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "index-type-comparison-table",
      children: "Index Type Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default, general purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality and range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inefficient for pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality lookups only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple key-value lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No range queries, not WAL-logged in PostgreSQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite types (arrays, JSONB, tsvector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search, JSON containment queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower writes, larger index size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GiST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spatial, range, full-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric data, ranges, fuzzy matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower performance for simple equality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BRIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive, naturally ordered tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series, sequential IDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor for random access patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Covering (PostgreSQL 11+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoiding table lookups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index-only scans when all columns in index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger index storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-query-plan-visualization",
      children: "Mermaid: Query Plan Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Client\n        A[SELECT * FROM orders<br/>WHERE status = 'PENDING'<br/>AND created_at > '2024-01-01']\n    end\n\n    subgraph PostgreSQL\n        B[Query Planner]\n        C{Index available?}\n\n        D[Seq Scan on orders]\n        E[Index Scan: status_idx]\n        F[Bitmap Index Scan]\n        G[Bitmap Heap Scan]\n        H[Filter: created_at]\n        I[Result]\n\n        B --> C\n        C -->|No| D\n        C -->|Single-column index| E\n        C -->|Composite index| F\n\n        E --> H\n        H --> I\n\n        F --> G\n        G --> I\n\n        D --> I\n    end\n\n    I --> J[(Disk)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--database-performance-part-4",
      children: "Chapter Quiz — Database Performance (Part 4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between write skew and dirty write?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are the same thing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Write skew involves conflicting decisions based on stale snapshots; dirty write overwrites uncommitted data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Dirty write is unique to MongoDB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Write skew only happens in READ_COMMITTED"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Write skew involves conflicting decisions based on stale snapshots.** Each transaction's writes are individually valid, but the combination violates a constraint. Dirty write is simpler: writing over uncommitted data from another transaction.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which index type is best for JSONB containment queries (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE data @> '{\"active\": true}'"
        }), ")?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) B-tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Hash"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) GIN with jsonb_path_ops"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) BRIN"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**C) GIN with jsonb_path_ops.** GIN indexes are designed for composite types. The `jsonb_path_ops` operator class optimizes the `@>` containment operator, making JSONB queries fast.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the recommended fix for GraphQL N+1 queries?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Increase the timeout"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Use DataLoader for batch loading"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Disable lazy loading"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Use REST instead"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Use DataLoader for batch loading.** DataLoader batches individual resolver calls into a single query using `WHERE id IN (...)`, solving the N+1 problem at the GraphQL layer.\n"]
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