"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82631],{

/***/ 61043
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_21_spring_data_jpa_md_9fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-21-spring-data-jpa-md-9fc.json
const site_docs_courses_java_21_spring_data_jpa_md_9fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/21-spring-data-jpa","title":"Spring Data JPA","description":"Previous Migrations","source":"@site/docs/courses/java/21-spring-data-jpa.md","sourceDirName":"courses/java","slug":"/java/21-spring-data-jpa","permalink":"/ai-engineering-journey/java/21-spring-data-jpa","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"id":"21-spring-data-jpa","slug":"/java/21-spring-data-jpa","title":"Spring Data JPA","sidebar_label":"Spring Data JPA","sidebar_position":21},"sidebar":"course-java","previous":{"title":"JPA & Hibernate Deep Dive","permalink":"/ai-engineering-journey/java/20-jpa-hibernate"},"next":{"title":"Database Migrations (Flyway & Liquibase)","permalink":"/ai-engineering-journey/java/22-migrations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/21-spring-data-jpa.md


const frontMatter = {
	id: '21-spring-data-jpa',
	slug: '/java/21-spring-data-jpa',
	title: 'Spring Data JPA',
	sidebar_label: 'Spring Data JPA',
	sidebar_position: 21
};
const contentTitle = 'Spring Data JPA';

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
  "value": "1. Repository Interfaces",
  "id": "1-repository-interfaces",
  "level": 2
}, {
  "value": "1.1 Interface Hierarchy",
  "id": "11-interface-hierarchy",
  "level": 3
}, {
  "value": "1.2 Choosing the Right Interface",
  "id": "12-choosing-the-right-interface",
  "level": 3
}, {
  "value": "1.3 Complete Repository Example",
  "id": "13-complete-repository-example",
  "level": 3
}, {
  "value": "2. Derived Query Methods",
  "id": "2-derived-query-methods",
  "level": 2
}, {
  "value": "2.1 Subject Keywords",
  "id": "21-subject-keywords",
  "level": 3
}, {
  "value": "2.2 Query Expressions",
  "id": "22-query-expressions",
  "level": 3
}, {
  "value": "2.3 Nested Property Traversal",
  "id": "23-nested-property-traversal",
  "level": 3
}, {
  "value": "2.4 Limiting Results",
  "id": "24-limiting-results",
  "level": 3
}, {
  "value": "3. @Query — Custom JPQL and Native Queries",
  "id": "3-query--custom-jpql-and-native-queries",
  "level": 2
}, {
  "value": "3.1 JPQL Queries",
  "id": "31-jpql-queries",
  "level": 3
}, {
  "value": "3.2 Native Queries",
  "id": "32-native-queries",
  "level": 3
}, {
  "value": "3.3 @QueryHints",
  "id": "33-queryhints",
  "level": 3
}, {
  "value": "3.4 Dynamic SpEL Queries",
  "id": "34-dynamic-spel-queries",
  "level": 3
}, {
  "value": "4. @Modifying",
  "id": "4-modifying",
  "level": 2
}, {
  "value": "4.1 Basic Usage",
  "id": "41-basic-usage",
  "level": 3
}, {
  "value": "4.2 clearAutomatically and flushAutomatically",
  "id": "42-clearautomatically-and-flushautomatically",
  "level": 3
}, {
  "value": "4.3 @Transactional on Modifications",
  "id": "43-transactional-on-modifications",
  "level": 3
}, {
  "value": "5. Specifications and Criteria API",
  "id": "5-specifications-and-criteria-api",
  "level": 2
}, {
  "value": "5.1 JpaSpecificationExecutor",
  "id": "51-jpaspecificationexecutor",
  "level": 3
}, {
  "value": "5.2 Building Specifications",
  "id": "52-building-specifications",
  "level": 3
}, {
  "value": "5.3 Combining Specifications",
  "id": "53-combining-specifications",
  "level": 3
}, {
  "value": "5.4 Criteria API — Advanced Usage",
  "id": "54-criteria-api--advanced-usage",
  "level": 3
}, {
  "value": "6. QueryDSL",
  "id": "6-querydsl",
  "level": 2
}, {
  "value": "6.1 Setup and Configuration",
  "id": "61-setup-and-configuration",
  "level": 3
}, {
  "value": "6.2 QuerydslPredicateExecutor",
  "id": "62-querydslpredicateexecutor",
  "level": 3
}, {
  "value": "6.3 Building QueryDSL Predicates",
  "id": "63-building-querydsl-predicates",
  "level": 3
}, {
  "value": "6.4 QuerydslBinderCustomizer",
  "id": "64-querydslbindercustomizer",
  "level": 3
}, {
  "value": "6.5 QuerydslRepositorySupport",
  "id": "65-querydslrepositorysupport",
  "level": 3
}, {
  "value": "7. Auditing",
  "id": "7-auditing",
  "level": 2
}, {
  "value": "7.1 Entity Auditing Annotations",
  "id": "71-entity-auditing-annotations",
  "level": 3
}, {
  "value": "7.2 AuditorAware Implementation",
  "id": "72-auditoraware-implementation",
  "level": 3
}, {
  "value": "7.3 MappedSuperclass for Reusable Auditing",
  "id": "73-mappedsuperclass-for-reusable-auditing",
  "level": 3
}, {
  "value": "8. Pagination and Sorting",
  "id": "8-pagination-and-sorting",
  "level": 2
}, {
  "value": "8.1 Pageable, Page, and Sort",
  "id": "81-pageable-page-and-sort",
  "level": 3
}, {
  "value": "8.2 Repository Methods with Pagination",
  "id": "82-repository-methods-with-pagination",
  "level": 3
}, {
  "value": "8.3 Page vs Slice vs List",
  "id": "83-page-vs-slice-vs-list",
  "level": 3
}, {
  "value": "8.4 JpaSort (Unsafe)",
  "id": "84-jpasort-unsafe",
  "level": 3
}, {
  "value": "8.5 Keyset Pagination",
  "id": "85-keyset-pagination",
  "level": 3
}, {
  "value": "9. Projections",
  "id": "9-projections",
  "level": 2
}, {
  "value": "9.1 Interface-Based Closed Projection",
  "id": "91-interface-based-closed-projection",
  "level": 3
}, {
  "value": "9.2 Interface-Based Open Projection",
  "id": "92-interface-based-open-projection",
  "level": 3
}, {
  "value": "9.3 Class-Based DTO Projection (DTO)",
  "id": "93-class-based-dto-projection-dto",
  "level": 3
}, {
  "value": "9.4 Dynamic Projection",
  "id": "94-dynamic-projection",
  "level": 3
}, {
  "value": "9.5 Projection Performance",
  "id": "95-projection-performance",
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
          href: "/ai-engineering-journey/java/20-jpa-hibernate",
          children: "JPA/Hibernate"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/22-migrations",
          children: "Migrations"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "spring-data-jpa",
        children: "Spring Data JPA"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the appropriate repository interface for any data access pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write derived query methods following Spring Data JPA naming conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement custom JPQL and native queries with @Query"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform bulk operations safely with @Modifying"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build dynamic queries using Specifications and the Criteria API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate QueryDSL for type-safe query construction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable JPA auditing for automatic timestamp and user tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement pagination, sorting, and keyset pagination for large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use projections to optimize data transfer between layers"
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
            children: "Repositories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CrudRepository, JpaRepository, PagingAndSortingRepository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JpaRepository extends all others"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "findBy*, countBy*, deleteBy*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow naming conventions for auto-implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom JPQL and native SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use native queries for database-specific features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic query building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine with JpaSpecificationExecutor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface-based, DTO-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce data transfer overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Repository Interfaces] --> B[Derived Queries]\n    B --> C[@Query & @Modifying]\n    C --> D[Specifications]\n    D --> E[QueryDSL]\n    E --> F[Auditing]\n    F --> G[Pagination & Sorting]\n    G --> H[Projections]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For read-only queries, use projections or DTO-based queries to avoid loading entire entities. This significantly reduces memory usage for large result sets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-repository-interfaces",
      children: "1. Repository Interfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/21-spring-data-jpa.png",
        alt: "Spring Data JPA Repository Hierarchy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Data JPA provides a hierarchy of repository interfaces. Each adds functionality on top of the previous one."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-interface-hierarchy",
      children: "1.1 Interface Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Repository — Marker interface (no methods)\npublic interface Repository<T, ID> { }\n\n// CrudRepository — Basic CRUD operations\n//   save(S), saveAll(Iterable<S>), findById(ID), existsById(ID),\n//   findAll(), findAllById(Iterable<ID>), count(), deleteById(ID),\n//   delete(T), deleteAllById(Iterable<? extends ID>), deleteAll()\n\n// PagingAndSortingRepository — Adds pagination and sorting\n//   findAll(Sort), findAll(Pageable)\n\n// JpaRepository — JPA-specific extensions\n//   findAll(), findAll(Sort), findAll(Pageable), saveAllAndFlush(),\n//   saveAndFlush(), flush(), deleteInBatch(), deleteAllInBatch(),\n//   getOne(ID), getById(ID), getReferenceById(ID)\n//   Also exposes all methods of CrudRepository and PagingAndSortingRepository\n\n// ListCrudRepository — Modern variant returning List instead of Iterable\n// ListPagingAndSortingRepository — Modern pagination variant returning List/Page\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-choosing-the-right-interface",
      children: "1.2 Choosing the Right Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Minimal — just type-safe ID-based access\n@Repository\npublic interface CountryRepository extends Repository<Country, Long> {\n    Optional<Country> findByCode(String code);\n}\n\n// Standard CRUD\npublic interface CustomerRepository extends CrudRepository<Customer, Long> { }\n\n// CRUD + Pagination (most common)\npublic interface OrderRepository extends JpaRepository<Order, Long> { }\n\n// Modern List-based (Spring Data 3+)\npublic interface ProductRepository extends ListCrudRepository<Product, Long>,\n                                           ListPagingAndSortingRepository<Product, Long> { }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-complete-repository-example",
      children: "1.3 Complete Repository Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"customers\")\npublic class Customer {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private String firstName;\n\n    @Column(nullable = false)\n    private String lastName;\n\n    @Column(unique = true, nullable = false)\n    private String email;\n\n    @Enumerated(EnumType.STRING)\n    private CustomerTier tier;\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", updatable = false)\n    private LocalDateTime createdAt;\n\n    // getters, setters, equals, hashCode\n}\n\npublic enum CustomerTier {\n    STANDARD, GOLD, PLATINUM\n}\n\n@Repository\npublic interface CustomerRepository extends JpaRepository<Customer, Long> {\n\n    // Derived query methods\n    Optional<Customer> findByEmail(String email);\n\n    List<Customer> findByLastName(String lastName);\n\n    boolean existsByEmail(String email);\n\n    long countByTier(CustomerTier tier);\n\n    // Custom query\n    @Query(\"SELECT c FROM Customer c WHERE c.tier = :tier AND c.createdAt > :since\")\n    List<Customer> findCustomersByTierSince(@Param(\"tier\") CustomerTier tier,\n                                            @Param(\"since\") LocalDateTime since);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-derived-query-methods",
      children: "2. Derived Query Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Data JPA parses method names to generate JPQL queries automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-subject-keywords",
      children: "2.1 Subject Keywords"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface CustomerRepository extends JpaRepository<Customer, Long> {\n\n    // find...By — Returns entity, Optional, List, Set, Stream\n    Optional<Customer> findByEmail(String email);\n    List<Customer> findByLastName(String lastName);\n    Set<Customer> findByTier(CustomerTier tier);\n    Stream<Customer> findByCreatedAtAfter(LocalDateTime date);  // Requires @Transactional\n\n    // exists...By — Returns boolean\n    boolean existsByEmail(String email);\n\n    // count...By — Returns long\n    long countByTier(CustomerTier tier);\n\n    // delete...By / remove...By — Returns void or int (number of deleted)\n    void deleteByEmail(String email);\n    int removeByLastName(String lastName);\n\n    // stream...By — Returns Stream<Entity>\n    @Transactional(readOnly = true)\n    Stream<Customer> streamByTier(CustomerTier tier);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-query-expressions",
      children: "2.2 Query Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // AND / OR\n    List<Order> findByCustomerIdAndStatus(Long customerId, OrderStatus status);\n    List<Order> findByCustomerIdOrAssignedUserId(Long customerId, Long userId);\n\n    // Between / LessThan / GreaterThan\n    List<Order> findByTotalBetween(BigDecimal min, BigDecimal max);\n    List<Order> findByCreatedAtAfter(LocalDateTime date);\n    List<Order> findByTotalLessThanEqual(BigDecimal threshold);\n\n    // Is / Equals (redundant but explicit)\n    List<Order> findByStatusIs(OrderStatus status);\n    List<Order> findByStatusEquals(OrderStatus status);\n\n    // Like / NotLike / StartingWith / EndingWith / Containing\n    List<Order> findByNotesLike(\"%urgent%\");\n    List<Order> findByNotesNotLike(\"%spam%\");\n    List<Order> findByCustomerNameStartingWith(\"A\");\n    List<Order> findByCustomerNameEndingWith(\"Inc\");\n    List<Order> findByCustomerNameContaining(\"tech\");  // LIKE '%tech%'\n\n    // In / NotIn\n    List<Order> findByStatusIn(List<OrderStatus> statuses);\n    List<Order> findByIdNotIn(List<Long> ids);\n\n    // Null / NotNull\n    List<Order> findByAssignedUserIdIsNull();\n    List<Order> findByAssignedUserIdIsNotNull();\n\n    // True / False\n    List<Order> findByPriorityIsTrue();\n\n    // IgnoreCase (can combine with other expressions)\n    List<Order> findByCustomerNameIgnoreCase(String name);\n    List<Order> findByCustomerNameContainingIgnoreCase(String fragment);\n\n    // OrderBy\n    List<Order> findByCustomerIdOrderByCreatedAtDesc(Long customerId);\n    List<Order> findByStatusOrderByTotalAscCreatedAtDesc(OrderStatus status);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-nested-property-traversal",
      children: "2.3 Nested Property Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Shipment {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    @ManyToOne\n    @JoinColumn(name = \"order_id\")\n    private Order order;\n\n    private LocalDateTime shippedAt;\n    private String trackingNumber;\n}\n\npublic interface ShipmentRepository extends JpaRepository<Shipment, Long> {\n\n    // Traverse through Order → Customer → email\n    List<Shipment> findByOrderCustomerEmail(String email);\n\n    // Traverse through Order → status\n    List<Shipment> findByOrderStatus(OrderStatus status);\n\n    // Multiple levels\n    List<Shipment> findByOrderCustomerTierAndShippedAtAfter(\n        CustomerTier tier, LocalDateTime date);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-limiting-results",
      children: "2.4 Limiting Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface ProductRepository extends JpaRepository<Product, Long> {\n\n    // Top / First — limits results\n    List<Product> findTop10ByOrderByPriceDesc();\n    List<Product> findFirst5ByCategoryIdOrderByNameAsc(Long categoryId);\n    Optional<Product> findTopByOrderBySalesCountDesc();  // Single result\n\n    // Distinct\n    List<Product> findDistinctByCategoryName(String categoryName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-query--custom-jpql-and-native-queries",
      children: "3. @Query — Custom JPQL and Native Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-jpql-queries",
      children: "3.1 JPQL Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // Simple JPQL\n    @Query(\"SELECT o FROM Order o WHERE o.status = :status\")\n    List<Order> findByStatus(@Param(\"status\") OrderStatus status);\n\n    // JPQL with JOIN FETCH to avoid n+1\n    @Query(\"SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items WHERE o.customer.id = :customerId\")\n    List<Order> findByCustomerIdWithItems(@Param(\"customerId\") Long customerId);\n\n    // JPQL with expression\n    @Query(\"SELECT o FROM Order o WHERE o.total > :min AND o.createdAt BETWEEN :start AND :end\")\n    List<Order> findLargeOrdersBetween(@Param(\"min\") BigDecimal min,\n                                       @Param(\"start\") LocalDateTime start,\n                                       @Param(\"end\") LocalDateTime end);\n\n    // JPQL aggregate\n    @Query(\"SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId\")\n    long countOrdersByCustomerId(@Param(\"customerId\") Long customerId);\n\n    // JPQL with IN clause\n    @Query(\"SELECT o FROM Order o WHERE o.status IN :statuses\")\n    List<Order> findByStatuses(@Param(\"statuses\") List<OrderStatus> statuses);\n\n    // JPQL with optional parameters (Spring Data 3+)\n    @Query(\"SELECT o FROM Order o WHERE (:status IS NULL OR o.status = :status)\")\n    List<Order> findByOptionalStatus(@Param(\"status\") OrderStatus status);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-native-queries",
      children: "3.2 Native Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // Native SQL query\n    @Query(value = \"\"\"\n        SELECT o.* FROM orders o\n        JOIN customers c ON o.customer_id = c.id\n        WHERE c.tier = :tier\n        ORDER BY o.total DESC\n        LIMIT :limit\n        \"\"\", nativeQuery = true)\n    List<Order> findTopOrdersByTier(@Param(\"tier\") String tier,\n                                    @Param(\"limit\") int limit);\n\n    // Native query with count query (needed for pagination)\n    @Query(value = \"\"\"\n        SELECT o.* FROM orders o\n        WHERE o.total > :min\n        \"\"\",\n        countQuery = \"SELECT COUNT(*) FROM orders o WHERE o.total > :min\",\n        nativeQuery = true)\n    Page<Order> findOrdersAboveMin(@Param(\"min\") BigDecimal min, Pageable pageable);\n\n    // Native update\n    @Modifying\n    @Query(value = \"UPDATE orders SET status = :newStatus WHERE status = :oldStatus\",\n           nativeQuery = true)\n    int bulkUpdateStatus(@Param(\"oldStatus\") String oldStatus,\n                         @Param(\"newStatus\") String newStatus);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-queryhints",
      children: "3.3 @QueryHints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface CountryRepository extends JpaRepository<Country, Long> {\n\n    // Hibernate query hints\n    @QueryHints({\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_FETCH_SIZE, value = \"100\"),\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_CACHEABLE, value = \"true\"),\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_READ_ONLY, value = \"true\"),\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_COMMENT, value = \"Find all countries\")\n    })\n    @Query(\"SELECT c FROM Country c\")\n    List<Country> findAllCached();\n\n    // Timeout hint\n    @QueryHints(@QueryHint(name = \"jakarta.persistence.query.timeout\", value = \"5000\"))\n    @Query(\"SELECT c FROM Country c WHERE c.code = :code\")\n    Optional<Country> findByCodeWithTimeout(@Param(\"code\") String code);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-dynamic-spel-queries",
      children: "3.4 Dynamic SpEL Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface CustomerRepository extends JpaRepository<Customer, Long> {\n\n    // Use SpEL to reference entity name (avoids hardcoding)\n    @Query(\"SELECT #{#entityName} FROM #{#entityName} c WHERE c.email = :email\")\n    Optional<Customer> findByEmailSpEL(@Param(\"email\") String email);\n\n    // SpEL with condition\n    @Query(\"SELECT c FROM #{#entityName} c WHERE c.tier = :#{#tier?.toString()}\")\n    List<Customer> findByTier(@Param(\"tier\") CustomerTier tier);\n\n    // SpEL for like pattern\n    @Query(\"SELECT c FROM Customer c WHERE c.lastName LIKE %:search%\")\n    List<Customer> searchByLastName(@Param(\"search\") String search);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-modifying",
      children: "4. @Modifying"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-basic-usage",
      children: "4.1 Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // Update query requires @Modifying\n    @Modifying\n    @Query(\"UPDATE Order o SET o.status = :newStatus WHERE o.id = :orderId\")\n    int updateOrderStatus(@Param(\"orderId\") Long orderId,\n                          @Param(\"newStatus\") OrderStatus newStatus);\n\n    // Delete query\n    @Modifying\n    @Query(\"DELETE FROM Order o WHERE o.createdAt < :cutoff\")\n    int deleteOldOrders(@Param(\"cutoff\") LocalDateTime cutoff);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-clearautomatically-and-flushautomatically",
      children: "4.2 clearAutomatically and flushAutomatically"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // After execution, automatically clear the persistence context\n    // Prevents stale data — the 1LC is cleared so subsequent reads hit the DB\n    @Modifying(clearAutomatically = true)\n    @Query(\"UPDATE Order o SET o.status = :newStatus WHERE o.customer.id = :customerId\")\n    int updateOrdersByCustomer(@Param(\"customerId\") Long customerId,\n                               @Param(\"newStatus\") OrderStatus newStatus);\n\n    // Before execution, automatically flush the persistence context\n    // Ensures pending changes are flushed before the bulk operation\n    @Modifying(flushAutomatically = true, clearAutomatically = true)\n    @Query(\"DELETE FROM Order o WHERE o.status = :status AND o.createdAt < :cutoff\")\n    int deleteProcessedOrders(@Param(\"status\") OrderStatus status,\n                              @Param(\"cutoff\") LocalDateTime cutoff);\n\n    // Usage is typically:\n    // 1. flushAutomatically = true  — flush pending changes first\n    // 2. clearAutomatically = true  — clear 1LC after to avoid stale state\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-transactional-on-modifications",
      children: "4.3 @Transactional on Modifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\n@Transactional\npublic class OrderService {\n\n    private final OrderRepository orderRepository;\n\n    public OrderService(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n\n    // Bulk cancel — service-layer transaction wraps the modifying operation\n    public int bulkCancelOrders(Long customerId) {\n        return orderRepository.updateOrdersByCustomer(customerId, OrderStatus.CANCELLED);\n    }\n\n    // Combined operations\n    public void cancelAndNotify(Long orderId) {\n        int updated = orderRepository.updateOrderStatus(orderId, OrderStatus.CANCELLED);\n        if (updated > 0) {\n            notificationService.sendCancellation(orderId);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " Bulk modifying queries bypass the persistence context. Entities already loaded in the 1LC will not reflect the changes unless ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clearAutomatically = true"
      }), " is set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-specifications-and-criteria-api",
      children: "5. Specifications and Criteria API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-jpaspecificationexecutor",
      children: "5.1 JpaSpecificationExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// First, extend JpaSpecificationExecutor\n@Repository\npublic interface OrderRepository extends JpaRepository<Order, Long>,\n                                         JpaSpecificationExecutor<Order> {\n}\n\n// Now your repository supports:\n// findAll(Specification<T>)\n// findAll(Specification<T>, Sort)\n// findAll(Specification<T>, Pageable)\n// findOne(Specification<T>)\n// count(Specification<T>)\n// exists(Specification<T>)\n// delete(Specification<T>)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-building-specifications",
      children: "5.2 Building Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OrderSpecifications {\n\n    public static Specification<Order> byStatus(OrderStatus status) {\n        return (root, query, criteriaBuilder) ->\n            criteriaBuilder.equal(root.get(\"status\"), status);\n    }\n\n    public static Specification<Order> byCustomerId(Long customerId) {\n        return (root, query, cb) ->\n            cb.equal(root.get(\"customer\").get(\"id\"), customerId);\n    }\n\n    public static Specification<Order> totalGreaterThan(BigDecimal min) {\n        return (root, query, cb) ->\n            cb.greaterThan(root.get(\"total\"), min);\n    }\n\n    public static Specification<Order> createdAfter(LocalDateTime date) {\n        return (root, query, cb) ->\n            cb.greaterThan(root.get(\"createdAt\"), date);\n    }\n\n    public static Specification<Order> hasItems() {\n        return (root, query, cb) ->\n            cb.greaterThan(cb.size(root.get(\"items\")), 0);\n    }\n\n    public static Specification<Order> searchByCustomerName(String search) {\n        return (root, query, cb) ->\n            cb.like(cb.lower(root.get(\"customer\").get(\"name\")),\n                    \"%\" + search.toLowerCase() + \"%\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-combining-specifications",
      children: "5.3 Combining Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderSearchService {\n\n    private final OrderRepository orderRepository;\n\n    public OrderSearchService(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n\n    public List<Order> findGoldCustomerLargeOrders(LocalDateTime since) {\n        Specification<Order> spec = Specification\n            .where(OrderSpecifications.byCustomerId(42L))\n            .and(OrderSpecifications.totalGreaterThan(new BigDecimal(\"500\")))\n            .and(OrderSpecifications.createdAfter(since));\n\n        return orderRepository.findAll(spec);\n    }\n\n    public Page<Order> searchOrders(String customerName, OrderStatus status,\n                                    BigDecimal minTotal, Pageable pageable) {\n        Specification<Order> spec = Specification.where(null);\n\n        if (customerName != null && !customerName.isBlank()) {\n            spec = spec.and(OrderSpecifications.searchByCustomerName(customerName));\n        }\n        if (status != null) {\n            spec = spec.and(OrderSpecifications.byStatus(status));\n        }\n        if (minTotal != null) {\n            spec = spec.and(OrderSpecifications.totalGreaterThan(minTotal));\n        }\n\n        return orderRepository.findAll(spec, pageable);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-criteria-api--advanced-usage",
      children: "5.4 Criteria API — Advanced Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class CustomOrderRepositoryImpl implements CustomOrderRepository {\n\n    @PersistenceContext\n    private EntityManager entityManager;\n\n    @Override\n    public List<OrderSummary> findOrderSummariesByCriteria(Long customerId,\n                                                            LocalDateTime start,\n                                                            LocalDateTime end) {\n        CriteriaBuilder cb = entityManager.getCriteriaBuilder();\n        CriteriaQuery<OrderSummary> query = cb.createQuery(OrderSummary.class);\n        Root<Order> order = query.from(Order.class);\n\n        // Joins\n        Join<Order, Customer> customer = order.join(\"customer\");\n        Join<Order, OrderItem> items = order.join(\"items\", JoinType.LEFT);\n\n        // Predicates\n        Predicate customerPredicate = cb.equal(customer.get(\"id\"), customerId);\n        Predicate datePredicate = cb.between(order.get(\"createdAt\"), start, end);\n        Predicate totalPredicate = cb.greaterThan(order.get(\"total\"), BigDecimal.ZERO);\n\n        // Select with constructor expression\n        query.select(cb.construct(OrderSummary.class,\n            order.get(\"id\"),\n            order.get(\"status\"),\n            order.get(\"total\"),\n            customer.get(\"name\"),\n            cb.count(items.get(\"id\"))));\n\n        // Group by and having\n        query.where(cb.and(customerPredicate, datePredicate, totalPredicate));\n        query.groupBy(order.get(\"id\"), order.get(\"status\"),\n                      order.get(\"total\"), customer.get(\"name\"));\n        query.having(cb.gt(cb.count(items.get(\"id\")), 0));\n\n        // Order\n        query.orderBy(cb.desc(order.get(\"createdAt\")));\n\n        return entityManager.createQuery(query).getResultList();\n    }\n\n    @Override\n    public Page<Order> findByDynamicFilters(OrderSearchFilters filters, Pageable pageable) {\n        CriteriaBuilder cb = entityManager.getCriteriaBuilder();\n\n        // Count query\n        CriteriaQuery<Long> countQuery = cb.createQuery(Long.class);\n        Root<Order> countRoot = countQuery.from(Order.class);\n        List<Predicate> predicates = buildPredicates(cb, countRoot, filters);\n        countQuery.select(cb.count(countRoot));\n        countQuery.where(predicates.toArray(new Predicate[0]));\n        Long totalCount = entityManager.createQuery(countQuery).getSingleResult();\n\n        // Data query\n        CriteriaQuery<Order> dataQuery = cb.createQuery(Order.class);\n        Root<Order> dataRoot = dataQuery.from(Order.class);\n        dataQuery.where(buildPredicates(cb, dataRoot, filters).toArray(new Predicate[0]));\n        dataQuery.orderBy(pageable.getSort().stream()\n            .map(sort -> sort.isAscending()\n                ? cb.asc(dataRoot.get(sort.getProperty()))\n                : cb.desc(dataRoot.get(sort.getProperty())))\n            .toList());\n\n        List<Order> result = entityManager.createQuery(dataQuery)\n            .setFirstResult((int) pageable.getOffset())\n            .setMaxResults(pageable.getPageSize())\n            .getResultList();\n\n        return new PageImpl<>(result, pageable, totalCount);\n    }\n\n    private List<Predicate> buildPredicates(CriteriaBuilder cb, Root<Order> root,\n                                             OrderSearchFilters filters) {\n        List<Predicate> predicates = new ArrayList<>();\n        if (filters.status() != null) {\n            predicates.add(cb.equal(root.get(\"status\"), filters.status()));\n        }\n        if (filters.customerId() != null) {\n            predicates.add(cb.equal(root.get(\"customer\").get(\"id\"), filters.customerId()));\n        }\n        if (filters.minTotal() != null) {\n            predicates.add(cb.greaterThanOrEqualTo(root.get(\"total\"), filters.minTotal()));\n        }\n        if (filters.createdAfter() != null) {\n            predicates.add(cb.greaterThan(root.get(\"createdAt\"), filters.createdAfter()));\n        }\n        return predicates;\n    }\n}\n\npublic record OrderSearchFilters(\n    OrderStatus status,\n    Long customerId,\n    BigDecimal minTotal,\n    LocalDateTime createdAfter\n) { }\n\npublic record OrderSummary(\n    Long id,\n    OrderStatus status,\n    BigDecimal total,\n    String customerName,\n    Long itemCount\n) { }\n\npublic interface CustomOrderRepository {\n    List<OrderSummary> findOrderSummariesByCriteria(Long customerId,\n                                                     LocalDateTime start,\n                                                     LocalDateTime end);\n    Page<Order> findByDynamicFilters(OrderSearchFilters filters, Pageable pageable);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-querydsl",
      children: "6. QueryDSL"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-setup-and-configuration",
      children: "6.1 Setup and Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-jpa</artifactId>\n    <version>${querydsl.version}</version>\n</dependency>\n<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-apt</artifactId>\n    <version>${querydsl.version}</version>\n    <scope>provided</scope>\n</dependency>\n\n<plugin>\n    <groupId>com.mysema.maven</groupId>\n    <artifactId>apt-maven-plugin</artifactId>\n    <version>1.1.3</version>\n    <executions>\n        <execution>\n            <goals><goal>process</goal></goals>\n            <configuration>\n                <outputDirectory>target/generated-sources/java</outputDirectory>\n                <processor>com.querydsl.apt.jpa.JPAAnnotationProcessor</processor>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-querydslpredicateexecutor",
      children: "6.2 QuerydslPredicateExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\npublic class Customer {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String firstName;\n    private String lastName;\n    private String email;\n    private CustomerTier tier;\n    private Integer age;\n}\n\n// Extend QuerydslPredicateExecutor\n@Repository\npublic interface CustomerRepository extends JpaRepository<Customer, Long>,\n                                            QuerydslPredicateExecutor<Customer> {\n}\n\n// Now supports:\n// findAll(Predicate)\n// findAll(Predicate, Sort)\n// findAll(Predicate, Pageable)\n// findOne(Predicate)\n// count(Predicate)\n// exists(Predicate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-building-querydsl-predicates",
      children: "6.3 Building QueryDSL Predicates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import static com.example.domain.QCustomer.customer;\n\n@Service\npublic class CustomerSearchService {\n\n    private final CustomerRepository customerRepository;\n\n    public CustomerSearchService(CustomerRepository customerRepository) {\n        this.customerRepository = customerRepository;\n    }\n\n    public List<Customer> findGoldCustomers() {\n        return customerRepository.findAll(\n            customer.tier.eq(CustomerTier.GOLD)\n        );\n    }\n\n    public Page<Customer> searchCustomers(String name, CustomerTier tier,\n                                          Integer minAge, Pageable pageable) {\n        BooleanBuilder builder = new BooleanBuilder();\n\n        if (name != null) {\n            builder.and(customer.firstName.containsIgnoreCase(name)\n                .or(customer.lastName.containsIgnoreCase(name)));\n        }\n        if (tier != null) {\n            builder.and(customer.tier.eq(tier));\n        }\n        if (minAge != null) {\n            builder.and(customer.age.goe(minAge));\n        }\n\n        return customerRepository.findAll(builder, pageable);\n    }\n\n    public Optional<Customer> findByEmail(String email) {\n        return customerRepository.findOne(customer.email.eq(email));\n    }\n\n    public List<Customer> findByTierWithPagination(CustomerTier tier, int page, int size) {\n        return customerRepository.findAll(\n            customer.tier.eq(tier),\n            PageRequest.of(page, size, Sort.by(\"lastName\").ascending())\n        ).getContent();\n    }\n\n    // Complex predicates\n    public List<Customer> findEligibleForPromotion() {\n        Predicate predicate = customer.tier.in(CustomerTier.GOLD, CustomerTier.PLATINUM)\n            .and(customer.age.between(25, 60))\n            .and(customer.email.isNotNull());\n\n        return customerRepository.findAll(predicate, Sort.by(\"lastName\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-querydslbindercustomizer",
      children: "6.4 QuerydslBinderCustomizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic interface ProductRepository extends JpaRepository<Product, Long>,\n                                           QuerydslPredicateExecutor<Product>,\n                                           QuerydslBinderCustomizer<QProduct> {\n\n    @Override\n    default void customize(QuerydslBinders binders, QProduct product) {\n        // Customize binding for specific paths\n\n        // Case-insensitive \"contains\" for name\n        binders.bind(product.name).first(\n            (path, value) -> path.containsIgnoreCase(value));\n\n        // Exact match for SKU (ignore case)\n        binders.bind(product.sku).first(\n            (path, value) -> path.equalsIgnoreCase(value));\n\n        // Range binding for price\n        binders.bind(product.price).all((path, values) -> {\n            List<? extends BigDecimal> numbers =\n                values.stream().map(v -> (BigDecimal) v).toList();\n            if (numbers.size() == 1) {\n                return Optional.of(path.goe(numbers.get(0)));\n            }\n            return Optional.of(path.between(numbers.get(0), numbers.get(1)));\n        });\n\n        // Ignore undefined paths (prevents binding errors for unknown filters)\n        binders.bind(path -> true).first(\n            (path, value) -> path.stringValue().containsIgnoreCase(value.toString()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-querydslrepositorysupport",
      children: "6.5 QuerydslRepositorySupport"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class CustomOrderRepositoryImpl extends QuerydslRepositorySupport\n                                       implements CustomOrderRepository {\n\n    public CustomOrderRepositoryImpl() {\n        super(Order.class);\n    }\n\n    @Override\n    public List<Order> findOrdersWithComplexCriteria(Long customerId,\n                                                      LocalDateTime since,\n                                                      BigDecimal minTotal) {\n        QOrder order = QOrder.order;\n        QCustomer customer = QCustomer.customer;\n        QOrderItem item = QOrderItem.orderItem;\n\n        JPQLQuery<Order> query = from(order)\n            .innerJoin(order.customer, customer).fetchJoin()\n            .leftJoin(order.items, item).fetchJoin()\n            .where(customer.id.eq(customerId))\n            .where(order.createdAt.after(since))\n            .where(order.total.goe(minTotal))\n            .orderBy(order.createdAt.desc());\n\n        return query.fetch();\n    }\n\n    @Override\n    public long countByTier(CustomerTier tier) {\n        QCustomer customer = QCustomer.customer;\n        return from(customer)\n            .where(customer.tier.eq(tier))\n            .fetchCount();\n    }\n\n    @Override\n    public Page<Order> findFiltered(OrderSearchFilters filters, Pageable pageable) {\n        QOrder order = QOrder.order;\n        QCustomer customer = QCustomer.customer;\n\n        BooleanBuilder builder = new BooleanBuilder();\n        if (filters.status() != null) {\n            builder.and(order.status.eq(filters.status()));\n        }\n        if (filters.customerId() != null) {\n            builder.and(order.customer.id.eq(filters.customerId()));\n        }\n        if (filters.minTotal() != null) {\n            builder.and(order.total.goe(filters.minTotal()));\n        }\n\n        JPQLQuery<Order> query = from(order)\n            .innerJoin(order.customer, customer).fetchJoin()\n            .where(builder);\n\n        long total = query.fetchCount();\n\n        List<Order> results = query\n            .offset(pageable.getOffset())\n            .limit(pageable.getPageSize())\n            .orderBy(order.createdAt.desc())\n            .fetch();\n\n        return new PageImpl<>(results, pageable, total);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-auditing",
      children: "7. Auditing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-entity-auditing-annotations",
      children: "7.1 Entity Auditing Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"auditable_entities\")\n@EntityListeners(AuditingEntityListener.class)\npublic class AuditableEntity {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @CreatedDate\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @LastModifiedDate\n    @Column(name = \"updated_at\", nullable = false)\n    private LocalDateTime updatedAt;\n\n    @CreatedBy\n    @Column(name = \"created_by\", updatable = false)\n    private String createdBy;\n\n    @LastModifiedBy\n    @Column(name = \"updated_by\")\n    private String lastModifiedBy;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-auditoraware-implementation",
      children: "7.2 AuditorAware Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableJpaAuditing(auditorAwareRef = \"auditorProvider\")\npublic class AuditingConfig {\n\n    @Bean\n    public AuditorAware<String> auditorProvider() {\n        return new SpringSecurityAuditorAware();\n    }\n}\n\n// With Spring Security\npublic class SpringSecurityAuditorAware implements AuditorAware<String> {\n\n    @Override\n    @NonNull\n    public Optional<String> getCurrentAuditor() {\n        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();\n\n        if (authentication == null || !authentication.isAuthenticated()) {\n            return Optional.of(\"SYSTEM\");\n        }\n\n        return Optional.of(authentication.getName());\n    }\n}\n\n// Without Spring Security (static context)\npublic class StaticAuditorAware implements AuditorAware<String> {\n\n    @Override\n    @NonNull\n    public Optional<String> getCurrentAuditor() {\n        // In a real app, get from request context or thread-local\n        return Optional.ofNullable(RequestContext.getCurrentUser())\n            .or(() -> Optional.of(\"SYSTEM\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-mappedsuperclass-for-reusable-auditing",
      children: "7.3 MappedSuperclass for Reusable Auditing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@MappedSuperclass\n@EntityListeners(AuditingEntityListener.class)\npublic abstract class BaseAuditEntity {\n\n    @CreatedDate\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @LastModifiedDate\n    @Column(name = \"updated_at\", nullable = false)\n    private LocalDateTime updatedAt;\n\n    @CreatedBy\n    @Column(name = \"created_by\", updatable = false)\n    private String createdBy;\n\n    @LastModifiedBy\n    @Column(name = \"updated_by\")\n    private String lastModifiedBy;\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\n    public String getCreatedBy() { return createdBy; }\n    public String getLastModifiedBy() { return lastModifiedBy; }\n}\n\n@Entity\n@Table(name = \"articles\")\npublic class Article extends BaseAuditEntity {\n\n    @Id\n    @GeneratedValue\n    private Long id;\n\n    private String title;\n    private String content;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-pagination-and-sorting",
      children: "8. Pagination and Sorting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-pageable-page-and-sort",
      children: "8.1 Pageable, Page, and Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Controller\n@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n\n    private final OrderRepository orderRepository;\n\n    public OrderController(OrderRepository orderRepository) {\n        this.orderRepository = orderRepository;\n    }\n\n    @GetMapping\n    public Page<Order> listOrders(\n            @RequestParam(defaultValue = \"0\") int page,\n            @RequestParam(defaultValue = \"20\") int size,\n            @RequestParam(defaultValue = \"createdAt,desc\") String[] sort) {\n\n        List<Sort.Order> orders = new ArrayList<>();\n        for (String sortField : sort) {\n            String[] parts = sortField.split(\",\");\n            String property = parts[0];\n            Sort.Direction direction = parts.length > 1\n                ? Sort.Direction.fromString(parts[1])\n                : Sort.Direction.ASC;\n            orders.add(new Sort.Order(direction, property).ignoreCase());\n        }\n\n        Pageable pageable = PageRequest.of(page, size, Sort.by(orders));\n        return orderRepository.findAll(pageable);\n    }\n\n    @GetMapping(\"/by-status\")\n    public Page<Order> filterByStatus(\n            @RequestParam OrderStatus status,\n            Pageable pageable) {                             // Spring auto-binds Pageable\n        return orderRepository.findByStatus(status, pageable);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-repository-methods-with-pagination",
      children: "8.2 Repository Methods with Pagination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // Spring Data automatically applies pagination\n    Page<Order> findByStatus(OrderStatus status, Pageable pageable);\n\n    // Slice — lighter than Page (no count query)\n    Slice<Order> findByCustomerId(Long customerId, Pageable pageable);\n\n    // List — ignores pagination in method signature but can still use Limit\n    List<Order> findByCustomerId(Long customerId);\n\n    // Custom query with pagination\n    @Query(\"SELECT o FROM Order o WHERE o.total > :min\")\n    Page<Order> findLargeOrders(@Param(\"min\") BigDecimal min, Pageable pageable);\n\n    // Native query with pagination (requires countQuery)\n    @Query(value = \"SELECT * FROM orders WHERE total > :min\",\n           countQuery = \"SELECT COUNT(*) FROM orders WHERE total > :min\",\n           nativeQuery = true)\n    Page<Order> findLargeOrdersNative(@Param(\"min\") BigDecimal min, Pageable pageable);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-page-vs-slice-vs-list",
      children: "8.3 Page vs Slice vs List"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n\n    private final OrderRepository orderRepository;\n\n    // Page — full pagination with total count (expensive for large datasets)\n    public Page<Order> getOrdersPage(Pageable pageable) {\n        return orderRepository.findAll(pageable);\n        // Executes: SELECT ... LIMIT ? OFFSET ?\n        // Executes: SELECT COUNT(*) ...\n    }\n\n    // Slice — knows if there are more results, no count query (faster)\n    public Slice<Order> getOrdersSlice(Pageable pageable) {\n        return orderRepository.findByCustomerId(42L, pageable);\n        // Executes: SELECT ... LIMIT ? + 1 OFFSET ?\n        // The +1 determines hasNext without a count query\n    }\n\n    // List — no pagination (use with caution for large datasets)\n    public List<Order> getAllOrders() {\n        return orderRepository.findAll();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-jpasort-unsafe",
      children: "8.4 JpaSort (Unsafe)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n\n    public Page<Order> getOrdersSortedByFunction(Pageable pageable) {\n        // JpaSort.unsafe allows function-based sorting\n        // Normal Sort would throw: \"Cannot sort by function\"\n        Sort sort = JpaSort.unsafe(\n            Sort.Direction.DESC,\n            \"COALESCE(total, 0)\"             // Raw SQL expression\n        );\n\n        Pageable unsafePageable = PageRequest.of(\n            pageable.getPageNumber(),\n            pageable.getPageSize(),\n            sort\n        );\n\n        return orderRepository.findAll(unsafePageable);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JpaSort.unsafe"
      }), " is vulnerable to SQL injection if user input reaches the sort expression. Never concatenate user input into unsafe sort strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-keyset-pagination",
      children: "8.5 Keyset Pagination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Keyset pagination — efficient for large datasets\n// Instead of OFFSET, use WHERE createdAt < :lastCreatedAt\n\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n\n    @Query(\"SELECT o FROM Order o WHERE o.createdAt < :lastCreatedAt \" +\n           \"ORDER BY o.createdAt DESC\")\n    List<Order> findNextPage(@Param(\"lastCreatedAt\") LocalDateTime lastCreatedAt,\n                             Pageable pageable);\n}\n\n// Spring Data 3+ — ScrollSubquery for keyset pagination\n@Query(\"SELECT o FROM Order o ORDER BY o.createdAt DESC, o.id DESC\")\nWindow<Order> findFirstWindow(Pageable pageable);\n\n// Usage in service\npublic Window<Order> findOrdersAfter(LocalDateTime cursor, int size) {\n    Pageable pageable = PageRequest.of(0, size);\n    if (cursor == null) {\n        return orderRepository.findFirstWindow(pageable);\n    }\n    // Manual implementation with ScrollSubquery\n    return orderRepository.findFirstWindow(pageable);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keyset pagination advantages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(1) performance regardless of page depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No OFFSET drift (new rows don't shift pages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works with real-time data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disadvantages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only supports forward pagination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires a unique, sortable key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot jump to arbitrary pages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-projections",
      children: "9. Projections"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projections allow you to fetch only the data you need, reducing network transfer and improving performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-interface-based-closed-projection",
      children: "9.1 Interface-Based Closed Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Closed projection — only getter methods matching entity properties\n// Spring Data generates a proxy at runtime — no data is fetched for unneeded columns\npublic interface CustomerSummary {\n\n    Long getId();\n    String getFirstName();\n    String getLastName();\n    String getEmail();\n}\n\n// Nested projection\npublic interface OrderView {\n\n    Long getId();\n    OrderStatus getStatus();\n    BigDecimal getTotal();\n\n    CustomerSummary getCustomer();     // Nested projection for the customer\n\n    // Computed property (not in entity — SpEL evaluated)\n    @Value(\"#{target.total > 1000 ? 'HIGH' : 'NORMAL'}\")\n    String getPriority();\n}\n\n@Repository\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // Returns projection interface (only fetches needed columns)\n    List<CustomerSummary> findCustomerSummaryByTier(CustomerTier tier);\n\n    @Query(\"SELECT o FROM Order o WHERE o.customer.id = :customerId\")\n    List<OrderView> findOrderViewsByCustomer(@Param(\"customerId\") Long customerId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-interface-based-open-projection",
      children: "9.2 Interface-Based Open Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Open projection — uses SpEL to compute values\n// Spring Data loads ALL columns because it cannot determine which ones are needed\npublic interface CustomerWithFullName {\n\n    String getFirstName();\n    String getLastName();\n\n    @Value(\"#{target.firstName + ' ' + target.lastName}\")\n    String getFullName();\n\n    @Value(\"#{target.email != null ? target.email : 'NO EMAIL'}\")\n    String getEmailOrDefault();\n\n    @Value(\"#{@customerFormatter.format(target)}\")  // Reference Spring bean\n    String getFormatted();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-class-based-dto-projection-dto",
      children: "9.3 Class-Based DTO Projection (DTO)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// DTO with constructor — most efficient projection\n// JPQL constructor expression must match DTO constructor exactly\npublic record CustomerDto(\n    Long id,\n    String firstName,\n    String lastName,\n    String email,\n    CustomerTier tier\n) { }\n\n// Another DTO\npublic class OrderListItem {\n\n    private final Long id;\n    private final OrderStatus status;\n    private final BigDecimal total;\n    private final String customerName;\n    private final LocalDateTime createdAt;\n\n    // Constructor must match the JPQL expression\n    public OrderListItem(Long id, OrderStatus status, BigDecimal total,\n                         String customerName, LocalDateTime createdAt) {\n        this.id = id;\n        this.status = status;\n        this.total = total;\n        this.customerName = customerName;\n        this.createdAt = createdAt;\n    }\n\n    // getters\n}\n\n@Repository\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n\n    // JPQL constructor expression\n    @Query(\"\"\"\n        SELECT new com.example.dto.OrderListItem(\n            o.id, o.status, o.total, c.name, o.createdAt)\n        FROM Order o JOIN o.customer c\n        WHERE o.createdAt > :since\n        ORDER BY o.createdAt DESC\n        \"\"\")\n    List<OrderListItem> findOrderListItems(@Param(\"since\") LocalDateTime since);\n\n    // Interface projection — returns proxy (no constructor needed)\n    List<CustomerSummary> findCustomerSummaryByTier(CustomerTier tier);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-dynamic-projection",
      children: "9.4 Dynamic Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Single repository method that returns different projection types\n@Repository\npublic interface CustomerRepository extends JpaRepository<Customer, Long> {\n\n    // Class<T> parameter determines the return type\n    <T> List<T> findByTier(CustomerTier tier, Class<T> type);\n\n    <T> Optional<T> findByEmail(String email, Class<T> type);\n\n    @Query(\"SELECT c FROM Customer c WHERE c.lastName = :lastName\")\n    <T> List<T> findByLastName(@Param(\"lastName\") String lastName, Class<T> type);\n}\n\n// Usage\n@Service\npublic class CustomerService {\n\n    private final CustomerRepository customerRepository;\n\n    public List<CustomerSummary> getGoldCustomerSummaries() {\n        return customerRepository.findByTier(CustomerTier.GOLD, CustomerSummary.class);\n    }\n\n    public List<CustomerDto> getGoldCustomerDtos() {\n        return customerRepository.findByTier(CustomerTier.GOLD, CustomerDto.class);\n    }\n\n    public Optional<Customer> getFullCustomer(String email) {\n        return customerRepository.findByEmail(email, Customer.class);  // Full entity\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-projection-performance",
      children: "9.5 Projection Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Performance comparison:\n//\n// Full entity (Customer.class):\n//   SELECT id, first_name, last_name, email, tier, age, created_at, updated_at, version\n//   FROM customers\n//   — All columns loaded\n//   — Managed entity in persistence context\n//   — Supports lazy loading\n//\n// Interface projection (CustomerSummary):\n//   SELECT id, first_name, last_name, email\n//   FROM customers\n//   — Only requested columns loaded\n//   — Not managed (read-only)\n//   — No lazy loading\n//\n// DTO projection (new CustomerDto(...)):\n//   SELECT id, first_name, last_name, email, tier\n//   FROM customers\n//   — Same as interface projection\n//   — No proxy creation overhead\n//   — Not managed\n//\n// When to use each:\n// - Full entity: when you need to update data\n// - Interface projection: quick read-only queries\n// - DTO projection: service-layer DTOs, complex constructor logic\n"
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
            children: "Derived Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method name to query auto-generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "findBy*, countBy*, deleteBy*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple lookups by fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom JPQL or native SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full query control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex or optimized queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, combinable query predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "and/or/not composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter-based search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QueryDSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe query construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q-types generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex dynamic queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Projections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface-based data transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize data retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only data views"
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
            children: "Query Method Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JPQL Translation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "findBy..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field-based lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countBy..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteBy..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk deletion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "existsBy..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existence check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "findBy...OrderBy..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted results"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Query Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Simple Lookups"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complex Filters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Aggregations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pagination"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QueryDSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which method name deletes user records by email?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) removeByEmail"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) deleteByEmail"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) eraseByEmail"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) dropByEmail"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) deleteByEmail.** Spring Data JPA derives delete operations from the deleteBy prefix in method names.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary advantage of Specifications?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Better performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Dynamic, composable query predicates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Automatic caching"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) No SQL knowledge needed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Dynamic, composable query predicates.** Specifications allow building dynamic WHERE clauses programmatically.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you implement pagination in Spring Data JPA?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @Pageable annotation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Pageable parameter in repository method"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Manual LIMIT/OFFSET"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @Query(native=true)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Pageable parameter in repository method.** Spring Data automatically applies pagination when the method accepts a Pageable parameter.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ummary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository hierarchy"
        }), " progresses from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Repository"
        }), " (minimal) through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CrudRepository"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PagingAndSortingRepository"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JpaRepository"
        }), " (full feature set). Modern ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ListCrudRepository"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ListPagingAndSortingRepository"
        }), " return List instead of Iterable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived query methods"
        }), " parse method names into JPQL. Support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "findBy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "existsBy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "countBy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deleteBy"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "streamBy"
        }), " prefixes with rich expressions (And, Or, Between, Like, In, OrderBy, IgnoreCase)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "@Query"
        }), " supports JPQL and native SQL with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@QueryHints"
        }), " for tuning. Use SpEL for dynamic entity references and LIKE patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "@Modifying"
        }), " marks update/delete queries. Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clearAutomatically = true"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flushAutomatically = true"
        }), " for predictable results with bulk operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specifications"
        }), " build dynamic queries through composable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Specification<T>"
        }), " predicates. Combine with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "where()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "and()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "or()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "not()"
        }), " for complex filters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QueryDSL"
        }), " provides type-safe query building with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QuerydslPredicateExecutor"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BooleanBuilder"
        }), ". ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QuerydslBinderCustomizer"
        }), " customizes property bindings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auditing"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CreatedDate"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@LastModifiedDate"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CreatedBy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@LastModifiedBy"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuditorAware"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableJpaAuditing"
        }), " provides automatic timestamp and user tracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pagination"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pageable"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "Page"
        }), " includes total count queries. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Slice"
        }), " avoids count queries. Keyset pagination (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ScrollSubquery"
        }), ") provides O(1) navigation through deep pages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projections"
        }), " reduce data transfer. Closed interface projections fetch only needed columns. DTO projections with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new"
        }), " expressions are most efficient. Dynamic projections via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Class<T>"
        }), " parameters allow flexible return types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Repository Selection:"
          }), " You have three entities: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Country"
          }), " (read-only reference data), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Product"
          }), " (CRUD + pagination), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AuditLog"
          }), " (write-only, millions of rows). Which repository interface would you choose for each and why?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Derived Queries:"
          }), " Write a repository interface for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Transaction"
          }), " with methods to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find all transactions for a given account ID sorted by date descending"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Count transactions above a certain amount created after a date"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Delete all transactions older than a cutoff date"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check if a transaction with a given reference exists"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@Query and @Modifying:"
          }), " Create a bulk archiving operation that moves orders older than 90 days to an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "archived_orders"
          }), " table using a native query with @Modifying. Include proper flush and clear behavior. Then write a JPQL @Query that fetches active orders with their items using JOIN FETCH."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Specifications:"
          }), " Build a dynamic filter system for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Person"
          }), " entity with fields: name, age range, city, occupation. Create ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PersonSpecifications"
          }), " and a service that accepts optional filter parameters and returns a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Page<Person>"
          }), ". Support case-insensitive name search."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "QueryDSL:"
          }), " Implement the same dynamic filter system from exercise 4 using QueryDSL instead of Specifications. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BooleanBuilder"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "QuerydslPredicateExecutor"
          }), ". Then add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "QuerydslBinderCustomizer"
          }), " that makes string matching case-insensitive by default."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auditing:"
          }), " Create a complete auditing setup with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BaseAuditEntity"
          }), " (createdAt, updatedAt, createdBy, lastModifiedBy), an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AuditorAware"
          }), " that extracts the username from Spring Security, and an entity ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Ticket"
          }), " that extends the base. Show all configuration classes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pagination Benchmark:"
          }), " Write a controller that accepts page, size, and sort parameters and returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Page<Order>"
          }), ". Then compare performance characteristics of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Page"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Slice"
          }), " vs keyset pagination for a dataset of 1 million orders. Which would you choose for a real-time order list?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Projections:"
          }), " Create three projection variants for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "User"
          }), " entity:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UserSummary"
            }), " (closed interface: id, name, email)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UserDetails"
            }), " (open interface: fullName = firstName + lastName, age computed from birthDate)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UserAdminDto"
            }), " (record/class-based: all fields including sensitive data)\nThen implement a dynamic projection repository method that accepts ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Class<T>"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Combined Features:"
          }), " Build a complete REST endpoint ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/search/orders"
          }), " that accepts:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional filters (status, customerId, minTotal, dateRange)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sort and pagination parameters"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A projection parameter to switch between full entity and summary\nUse Specifications for filtering and projections for the response."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance Analysis:"
          }), " Given the following query method:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "List<Order> findByCustomerId(Long customerId);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The controller iterates ", (0,jsx_runtime.jsx)(_components.code, {
            children: "order.getItems()"
          }), " for each order, causing n+1. Refactor to eliminate n+1 using:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "JOIN FETCH in @Query"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Entity Graphs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@BatchSize"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Show the Hibernate SQL log output for each approach"
          }), "\n"]
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