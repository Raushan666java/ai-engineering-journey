"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2631],{

/***/ 3424
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Repository Interfaces] --> B[Derived Queries]\r\n    B --> C[\"@Query & @Modifying\"]\r\n    C --> D[Specifications]\r\n    D --> E[QueryDSL]\r\n    E --> F[Auditing]\r\n    F --> G[Pagination & Sorting]\r\n    G --> H[Projections]"
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
        children: "// Repository — Marker interface (no methods)\r\npublic interface Repository<T, ID> { }\r\n\r\n// CrudRepository — Basic CRUD operations\r\n//   save(S), saveAll(Iterable<S>), findById(ID), existsById(ID),\r\n//   findAll(), findAllById(Iterable<ID>), count(), deleteById(ID),\r\n//   delete(T), deleteAllById(Iterable<? extends ID>), deleteAll()\r\n\r\n// PagingAndSortingRepository — Adds pagination and sorting\r\n//   findAll(Sort), findAll(Pageable)\r\n\r\n// JpaRepository — JPA-specific extensions\r\n//   findAll(), findAll(Sort), findAll(Pageable), saveAllAndFlush(),\r\n//   saveAndFlush(), flush(), deleteInBatch(), deleteAllInBatch(),\r\n//   getOne(ID), getById(ID), getReferenceById(ID)\r\n//   Also exposes all methods of CrudRepository and PagingAndSortingRepository\r\n\r\n// ListCrudRepository — Modern variant returning List instead of Iterable\r\n// ListPagingAndSortingRepository — Modern pagination variant returning List/Page\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-choosing-the-right-interface",
      children: "1.2 Choosing the Right Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Minimal — just type-safe ID-based access\r\n@Repository\r\npublic interface CountryRepository extends Repository<Country, Long> {\r\n    Optional<Country> findByCode(String code);\r\n}\r\n\r\n// Standard CRUD\r\npublic interface CustomerRepository extends CrudRepository<Customer, Long> { }\r\n\r\n// CRUD + Pagination (most common)\r\npublic interface OrderRepository extends JpaRepository<Order, Long> { }\r\n\r\n// Modern List-based (Spring Data 3+)\r\npublic interface ProductRepository extends ListCrudRepository<Product, Long>,\r\n                                           ListPagingAndSortingRepository<Product, Long> { }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-complete-repository-example",
      children: "1.3 Complete Repository Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\n@Table(name = \"customers\")\r\npublic class Customer {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    @Column(nullable = false)\r\n    private String firstName;\r\n\r\n    @Column(nullable = false)\r\n    private String lastName;\r\n\r\n    @Column(unique = true, nullable = false)\r\n    private String email;\r\n\r\n    @Enumerated(EnumType.STRING)\r\n    private CustomerTier tier;\r\n\r\n    @CreationTimestamp\r\n    @Column(name = \"created_at\", updatable = false)\r\n    private LocalDateTime createdAt;\r\n\r\n    // getters, setters, equals, hashCode\r\n}\r\n\r\npublic enum CustomerTier {\r\n    STANDARD, GOLD, PLATINUM\r\n}\r\n\r\n@Repository\r\npublic interface CustomerRepository extends JpaRepository<Customer, Long> {\r\n\r\n    // Derived query methods\r\n    Optional<Customer> findByEmail(String email);\r\n\r\n    List<Customer> findByLastName(String lastName);\r\n\r\n    boolean existsByEmail(String email);\r\n\r\n    long countByTier(CustomerTier tier);\r\n\r\n    // Custom query\r\n    @Query(\"SELECT c FROM Customer c WHERE c.tier = :tier AND c.createdAt > :since\")\r\n    List<Customer> findCustomersByTierSince(@Param(\"tier\") CustomerTier tier,\r\n                                            @Param(\"since\") LocalDateTime since);\r\n}\n"
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
        children: "public interface CustomerRepository extends JpaRepository<Customer, Long> {\r\n\r\n    // find...By — Returns entity, Optional, List, Set, Stream\r\n    Optional<Customer> findByEmail(String email);\r\n    List<Customer> findByLastName(String lastName);\r\n    Set<Customer> findByTier(CustomerTier tier);\r\n    Stream<Customer> findByCreatedAtAfter(LocalDateTime date);  // Requires @Transactional\r\n\r\n    // exists...By — Returns boolean\r\n    boolean existsByEmail(String email);\r\n\r\n    // count...By — Returns long\r\n    long countByTier(CustomerTier tier);\r\n\r\n    // delete...By / remove...By — Returns void or int (number of deleted)\r\n    void deleteByEmail(String email);\r\n    int removeByLastName(String lastName);\r\n\r\n    // stream...By — Returns Stream<Entity>\r\n    @Transactional(readOnly = true)\r\n    Stream<Customer> streamByTier(CustomerTier tier);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-query-expressions",
      children: "2.2 Query Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // AND / OR\r\n    List<Order> findByCustomerIdAndStatus(Long customerId, OrderStatus status);\r\n    List<Order> findByCustomerIdOrAssignedUserId(Long customerId, Long userId);\r\n\r\n    // Between / LessThan / GreaterThan\r\n    List<Order> findByTotalBetween(BigDecimal min, BigDecimal max);\r\n    List<Order> findByCreatedAtAfter(LocalDateTime date);\r\n    List<Order> findByTotalLessThanEqual(BigDecimal threshold);\r\n\r\n    // Is / Equals (redundant but explicit)\r\n    List<Order> findByStatusIs(OrderStatus status);\r\n    List<Order> findByStatusEquals(OrderStatus status);\r\n\r\n    // Like / NotLike / StartingWith / EndingWith / Containing\r\n    List<Order> findByNotesLike(\"%urgent%\");\r\n    List<Order> findByNotesNotLike(\"%spam%\");\r\n    List<Order> findByCustomerNameStartingWith(\"A\");\r\n    List<Order> findByCustomerNameEndingWith(\"Inc\");\r\n    List<Order> findByCustomerNameContaining(\"tech\");  // LIKE '%tech%'\r\n\r\n    // In / NotIn\r\n    List<Order> findByStatusIn(List<OrderStatus> statuses);\r\n    List<Order> findByIdNotIn(List<Long> ids);\r\n\r\n    // Null / NotNull\r\n    List<Order> findByAssignedUserIdIsNull();\r\n    List<Order> findByAssignedUserIdIsNotNull();\r\n\r\n    // True / False\r\n    List<Order> findByPriorityIsTrue();\r\n\r\n    // IgnoreCase (can combine with other expressions)\r\n    List<Order> findByCustomerNameIgnoreCase(String name);\r\n    List<Order> findByCustomerNameContainingIgnoreCase(String fragment);\r\n\r\n    // OrderBy\r\n    List<Order> findByCustomerIdOrderByCreatedAtDesc(Long customerId);\r\n    List<Order> findByStatusOrderByTotalAscCreatedAtDesc(OrderStatus status);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-nested-property-traversal",
      children: "2.3 Nested Property Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\npublic class Shipment {\r\n\r\n    @Id\r\n    @GeneratedValue\r\n    private Long id;\r\n\r\n    @ManyToOne\r\n    @JoinColumn(name = \"order_id\")\r\n    private Order order;\r\n\r\n    private LocalDateTime shippedAt;\r\n    private String trackingNumber;\r\n}\r\n\r\npublic interface ShipmentRepository extends JpaRepository<Shipment, Long> {\r\n\r\n    // Traverse through Order → Customer → email\r\n    List<Shipment> findByOrderCustomerEmail(String email);\r\n\r\n    // Traverse through Order → status\r\n    List<Shipment> findByOrderStatus(OrderStatus status);\r\n\r\n    // Multiple levels\r\n    List<Shipment> findByOrderCustomerTierAndShippedAtAfter(\r\n        CustomerTier tier, LocalDateTime date);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-limiting-results",
      children: "2.4 Limiting Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface ProductRepository extends JpaRepository<Product, Long> {\r\n\r\n    // Top / First — limits results\r\n    List<Product> findTop10ByOrderByPriceDesc();\r\n    List<Product> findFirst5ByCategoryIdOrderByNameAsc(Long categoryId);\r\n    Optional<Product> findTopByOrderBySalesCountDesc();  // Single result\r\n\r\n    // Distinct\r\n    List<Product> findDistinctByCategoryName(String categoryName);\r\n}\n"
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
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // Simple JPQL\r\n    @Query(\"SELECT o FROM Order o WHERE o.status = :status\")\r\n    List<Order> findByStatus(@Param(\"status\") OrderStatus status);\r\n\r\n    // JPQL with JOIN FETCH to avoid n+1\r\n    @Query(\"SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items WHERE o.customer.id = :customerId\")\r\n    List<Order> findByCustomerIdWithItems(@Param(\"customerId\") Long customerId);\r\n\r\n    // JPQL with expression\r\n    @Query(\"SELECT o FROM Order o WHERE o.total > :min AND o.createdAt BETWEEN :start AND :end\")\r\n    List<Order> findLargeOrdersBetween(@Param(\"min\") BigDecimal min,\r\n                                       @Param(\"start\") LocalDateTime start,\r\n                                       @Param(\"end\") LocalDateTime end);\r\n\r\n    // JPQL aggregate\r\n    @Query(\"SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId\")\r\n    long countOrdersByCustomerId(@Param(\"customerId\") Long customerId);\r\n\r\n    // JPQL with IN clause\r\n    @Query(\"SELECT o FROM Order o WHERE o.status IN :statuses\")\r\n    List<Order> findByStatuses(@Param(\"statuses\") List<OrderStatus> statuses);\r\n\r\n    // JPQL with optional parameters (Spring Data 3+)\r\n    @Query(\"SELECT o FROM Order o WHERE (:status IS NULL OR o.status = :status)\")\r\n    List<Order> findByOptionalStatus(@Param(\"status\") OrderStatus status);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-native-queries",
      children: "3.2 Native Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // Native SQL query\r\n    @Query(value = \"\"\"\r\n        SELECT o.* FROM orders o\r\n        JOIN customers c ON o.customer_id = c.id\r\n        WHERE c.tier = :tier\r\n        ORDER BY o.total DESC\r\n        LIMIT :limit\r\n        \"\"\", nativeQuery = true)\r\n    List<Order> findTopOrdersByTier(@Param(\"tier\") String tier,\r\n                                    @Param(\"limit\") int limit);\r\n\r\n    // Native query with count query (needed for pagination)\r\n    @Query(value = \"\"\"\r\n        SELECT o.* FROM orders o\r\n        WHERE o.total > :min\r\n        \"\"\",\r\n        countQuery = \"SELECT COUNT(*) FROM orders o WHERE o.total > :min\",\r\n        nativeQuery = true)\r\n    Page<Order> findOrdersAboveMin(@Param(\"min\") BigDecimal min, Pageable pageable);\r\n\r\n    // Native update\r\n    @Modifying\r\n    @Query(value = \"UPDATE orders SET status = :newStatus WHERE status = :oldStatus\",\r\n           nativeQuery = true)\r\n    int bulkUpdateStatus(@Param(\"oldStatus\") String oldStatus,\r\n                         @Param(\"newStatus\") String newStatus);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-queryhints",
      children: "3.3 @QueryHints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface CountryRepository extends JpaRepository<Country, Long> {\r\n\r\n    // Hibernate query hints\r\n    @QueryHints({\r\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_FETCH_SIZE, value = \"100\"),\r\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_CACHEABLE, value = \"true\"),\r\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_READ_ONLY, value = \"true\"),\r\n        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_COMMENT, value = \"Find all countries\")\r\n    })\r\n    @Query(\"SELECT c FROM Country c\")\r\n    List<Country> findAllCached();\r\n\r\n    // Timeout hint\r\n    @QueryHints(@QueryHint(name = \"jakarta.persistence.query.timeout\", value = \"5000\"))\r\n    @Query(\"SELECT c FROM Country c WHERE c.code = :code\")\r\n    Optional<Country> findByCodeWithTimeout(@Param(\"code\") String code);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-dynamic-spel-queries",
      children: "3.4 Dynamic SpEL Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface CustomerRepository extends JpaRepository<Customer, Long> {\r\n\r\n    // Use SpEL to reference entity name (avoids hardcoding)\r\n    @Query(\"SELECT #{#entityName} FROM #{#entityName} c WHERE c.email = :email\")\r\n    Optional<Customer> findByEmailSpEL(@Param(\"email\") String email);\r\n\r\n    // SpEL with condition\r\n    @Query(\"SELECT c FROM #{#entityName} c WHERE c.tier = :#{#tier?.toString()}\")\r\n    List<Customer> findByTier(@Param(\"tier\") CustomerTier tier);\r\n\r\n    // SpEL for like pattern\r\n    @Query(\"SELECT c FROM Customer c WHERE c.lastName LIKE %:search%\")\r\n    List<Customer> searchByLastName(@Param(\"search\") String search);\r\n}\n"
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
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // Update query requires @Modifying\r\n    @Modifying\r\n    @Query(\"UPDATE Order o SET o.status = :newStatus WHERE o.id = :orderId\")\r\n    int updateOrderStatus(@Param(\"orderId\") Long orderId,\r\n                          @Param(\"newStatus\") OrderStatus newStatus);\r\n\r\n    // Delete query\r\n    @Modifying\r\n    @Query(\"DELETE FROM Order o WHERE o.createdAt < :cutoff\")\r\n    int deleteOldOrders(@Param(\"cutoff\") LocalDateTime cutoff);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-clearautomatically-and-flushautomatically",
      children: "4.2 clearAutomatically and flushAutomatically"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // After execution, automatically clear the persistence context\r\n    // Prevents stale data — the 1LC is cleared so subsequent reads hit the DB\r\n    @Modifying(clearAutomatically = true)\r\n    @Query(\"UPDATE Order o SET o.status = :newStatus WHERE o.customer.id = :customerId\")\r\n    int updateOrdersByCustomer(@Param(\"customerId\") Long customerId,\r\n                               @Param(\"newStatus\") OrderStatus newStatus);\r\n\r\n    // Before execution, automatically flush the persistence context\r\n    // Ensures pending changes are flushed before the bulk operation\r\n    @Modifying(flushAutomatically = true, clearAutomatically = true)\r\n    @Query(\"DELETE FROM Order o WHERE o.status = :status AND o.createdAt < :cutoff\")\r\n    int deleteProcessedOrders(@Param(\"status\") OrderStatus status,\r\n                              @Param(\"cutoff\") LocalDateTime cutoff);\r\n\r\n    // Usage is typically:\r\n    // 1. flushAutomatically = true  — flush pending changes first\r\n    // 2. clearAutomatically = true  — clear 1LC after to avoid stale state\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-transactional-on-modifications",
      children: "4.3 @Transactional on Modifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\n@Transactional\r\npublic class OrderService {\r\n\r\n    private final OrderRepository orderRepository;\r\n\r\n    public OrderService(OrderRepository orderRepository) {\r\n        this.orderRepository = orderRepository;\r\n    }\r\n\r\n    // Bulk cancel — service-layer transaction wraps the modifying operation\r\n    public int bulkCancelOrders(Long customerId) {\r\n        return orderRepository.updateOrdersByCustomer(customerId, OrderStatus.CANCELLED);\r\n    }\r\n\r\n    // Combined operations\r\n    public void cancelAndNotify(Long orderId) {\r\n        int updated = orderRepository.updateOrderStatus(orderId, OrderStatus.CANCELLED);\r\n        if (updated > 0) {\r\n            notificationService.sendCancellation(orderId);\r\n        }\r\n    }\r\n}\n"
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
        children: "// First, extend JpaSpecificationExecutor\r\n@Repository\r\npublic interface OrderRepository extends JpaRepository<Order, Long>,\r\n                                         JpaSpecificationExecutor<Order> {\r\n}\r\n\r\n// Now your repository supports:\r\n// findAll(Specification<T>)\r\n// findAll(Specification<T>, Sort)\r\n// findAll(Specification<T>, Pageable)\r\n// findOne(Specification<T>)\r\n// count(Specification<T>)\r\n// exists(Specification<T>)\r\n// delete(Specification<T>)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-building-specifications",
      children: "5.2 Building Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OrderSpecifications {\r\n\r\n    public static Specification<Order> byStatus(OrderStatus status) {\r\n        return (root, query, criteriaBuilder) ->\r\n            criteriaBuilder.equal(root.get(\"status\"), status);\r\n    }\r\n\r\n    public static Specification<Order> byCustomerId(Long customerId) {\r\n        return (root, query, cb) ->\r\n            cb.equal(root.get(\"customer\").get(\"id\"), customerId);\r\n    }\r\n\r\n    public static Specification<Order> totalGreaterThan(BigDecimal min) {\r\n        return (root, query, cb) ->\r\n            cb.greaterThan(root.get(\"total\"), min);\r\n    }\r\n\r\n    public static Specification<Order> createdAfter(LocalDateTime date) {\r\n        return (root, query, cb) ->\r\n            cb.greaterThan(root.get(\"createdAt\"), date);\r\n    }\r\n\r\n    public static Specification<Order> hasItems() {\r\n        return (root, query, cb) ->\r\n            cb.greaterThan(cb.size(root.get(\"items\")), 0);\r\n    }\r\n\r\n    public static Specification<Order> searchByCustomerName(String search) {\r\n        return (root, query, cb) ->\r\n            cb.like(cb.lower(root.get(\"customer\").get(\"name\")),\r\n                    \"%\" + search.toLowerCase() + \"%\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-combining-specifications",
      children: "5.3 Combining Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class OrderSearchService {\r\n\r\n    private final OrderRepository orderRepository;\r\n\r\n    public OrderSearchService(OrderRepository orderRepository) {\r\n        this.orderRepository = orderRepository;\r\n    }\r\n\r\n    public List<Order> findGoldCustomerLargeOrders(LocalDateTime since) {\r\n        Specification<Order> spec = Specification\r\n            .where(OrderSpecifications.byCustomerId(42L))\r\n            .and(OrderSpecifications.totalGreaterThan(new BigDecimal(\"500\")))\r\n            .and(OrderSpecifications.createdAfter(since));\r\n\r\n        return orderRepository.findAll(spec);\r\n    }\r\n\r\n    public Page<Order> searchOrders(String customerName, OrderStatus status,\r\n                                    BigDecimal minTotal, Pageable pageable) {\r\n        Specification<Order> spec = Specification.where(null);\r\n\r\n        if (customerName != null && !customerName.isBlank()) {\r\n            spec = spec.and(OrderSpecifications.searchByCustomerName(customerName));\r\n        }\r\n        if (status != null) {\r\n            spec = spec.and(OrderSpecifications.byStatus(status));\r\n        }\r\n        if (minTotal != null) {\r\n            spec = spec.and(OrderSpecifications.totalGreaterThan(minTotal));\r\n        }\r\n\r\n        return orderRepository.findAll(spec, pageable);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-criteria-api--advanced-usage",
      children: "5.4 Criteria API — Advanced Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\r\npublic class CustomOrderRepositoryImpl implements CustomOrderRepository {\r\n\r\n    @PersistenceContext\r\n    private EntityManager entityManager;\r\n\r\n    @Override\r\n    public List<OrderSummary> findOrderSummariesByCriteria(Long customerId,\r\n                                                            LocalDateTime start,\r\n                                                            LocalDateTime end) {\r\n        CriteriaBuilder cb = entityManager.getCriteriaBuilder();\r\n        CriteriaQuery<OrderSummary> query = cb.createQuery(OrderSummary.class);\r\n        Root<Order> order = query.from(Order.class);\r\n\r\n        // Joins\r\n        Join<Order, Customer> customer = order.join(\"customer\");\r\n        Join<Order, OrderItem> items = order.join(\"items\", JoinType.LEFT);\r\n\r\n        // Predicates\r\n        Predicate customerPredicate = cb.equal(customer.get(\"id\"), customerId);\r\n        Predicate datePredicate = cb.between(order.get(\"createdAt\"), start, end);\r\n        Predicate totalPredicate = cb.greaterThan(order.get(\"total\"), BigDecimal.ZERO);\r\n\r\n        // Select with constructor expression\r\n        query.select(cb.construct(OrderSummary.class,\r\n            order.get(\"id\"),\r\n            order.get(\"status\"),\r\n            order.get(\"total\"),\r\n            customer.get(\"name\"),\r\n            cb.count(items.get(\"id\"))));\r\n\r\n        // Group by and having\r\n        query.where(cb.and(customerPredicate, datePredicate, totalPredicate));\r\n        query.groupBy(order.get(\"id\"), order.get(\"status\"),\r\n                      order.get(\"total\"), customer.get(\"name\"));\r\n        query.having(cb.gt(cb.count(items.get(\"id\")), 0));\r\n\r\n        // Order\r\n        query.orderBy(cb.desc(order.get(\"createdAt\")));\r\n\r\n        return entityManager.createQuery(query).getResultList();\r\n    }\r\n\r\n    @Override\r\n    public Page<Order> findByDynamicFilters(OrderSearchFilters filters, Pageable pageable) {\r\n        CriteriaBuilder cb = entityManager.getCriteriaBuilder();\r\n\r\n        // Count query\r\n        CriteriaQuery<Long> countQuery = cb.createQuery(Long.class);\r\n        Root<Order> countRoot = countQuery.from(Order.class);\r\n        List<Predicate> predicates = buildPredicates(cb, countRoot, filters);\r\n        countQuery.select(cb.count(countRoot));\r\n        countQuery.where(predicates.toArray(new Predicate[0]));\r\n        Long totalCount = entityManager.createQuery(countQuery).getSingleResult();\r\n\r\n        // Data query\r\n        CriteriaQuery<Order> dataQuery = cb.createQuery(Order.class);\r\n        Root<Order> dataRoot = dataQuery.from(Order.class);\r\n        dataQuery.where(buildPredicates(cb, dataRoot, filters).toArray(new Predicate[0]));\r\n        dataQuery.orderBy(pageable.getSort().stream()\r\n            .map(sort -> sort.isAscending()\r\n                ? cb.asc(dataRoot.get(sort.getProperty()))\r\n                : cb.desc(dataRoot.get(sort.getProperty())))\r\n            .toList());\r\n\r\n        List<Order> result = entityManager.createQuery(dataQuery)\r\n            .setFirstResult((int) pageable.getOffset())\r\n            .setMaxResults(pageable.getPageSize())\r\n            .getResultList();\r\n\r\n        return new PageImpl<>(result, pageable, totalCount);\r\n    }\r\n\r\n    private List<Predicate> buildPredicates(CriteriaBuilder cb, Root<Order> root,\r\n                                             OrderSearchFilters filters) {\r\n        List<Predicate> predicates = new ArrayList<>();\r\n        if (filters.status() != null) {\r\n            predicates.add(cb.equal(root.get(\"status\"), filters.status()));\r\n        }\r\n        if (filters.customerId() != null) {\r\n            predicates.add(cb.equal(root.get(\"customer\").get(\"id\"), filters.customerId()));\r\n        }\r\n        if (filters.minTotal() != null) {\r\n            predicates.add(cb.greaterThanOrEqualTo(root.get(\"total\"), filters.minTotal()));\r\n        }\r\n        if (filters.createdAfter() != null) {\r\n            predicates.add(cb.greaterThan(root.get(\"createdAt\"), filters.createdAfter()));\r\n        }\r\n        return predicates;\r\n    }\r\n}\r\n\r\npublic record OrderSearchFilters(\r\n    OrderStatus status,\r\n    Long customerId,\r\n    BigDecimal minTotal,\r\n    LocalDateTime createdAfter\r\n) { }\r\n\r\npublic record OrderSummary(\r\n    Long id,\r\n    OrderStatus status,\r\n    BigDecimal total,\r\n    String customerName,\r\n    Long itemCount\r\n) { }\r\n\r\npublic interface CustomOrderRepository {\r\n    List<OrderSummary> findOrderSummariesByCriteria(Long customerId,\r\n                                                     LocalDateTime start,\r\n                                                     LocalDateTime end);\r\n    Page<Order> findByDynamicFilters(OrderSearchFilters filters, Pageable pageable);\r\n}\n"
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
        children: "<dependency>\r\n    <groupId>com.querydsl</groupId>\r\n    <artifactId>querydsl-jpa</artifactId>\r\n    <version>${querydsl.version}</version>\r\n</dependency>\r\n<dependency>\r\n    <groupId>com.querydsl</groupId>\r\n    <artifactId>querydsl-apt</artifactId>\r\n    <version>${querydsl.version}</version>\r\n    <scope>provided</scope>\r\n</dependency>\r\n\r\n<plugin>\r\n    <groupId>com.mysema.maven</groupId>\r\n    <artifactId>apt-maven-plugin</artifactId>\r\n    <version>1.1.3</version>\r\n    <executions>\r\n        <execution>\r\n            <goals><goal>process</goal></goals>\r\n            <configuration>\r\n                <outputDirectory>target/generated-sources/java</outputDirectory>\r\n                <processor>com.querydsl.apt.jpa.JPAAnnotationProcessor</processor>\r\n            </configuration>\r\n        </execution>\r\n    </executions>\r\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-querydslpredicateexecutor",
      children: "6.2 QuerydslPredicateExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\r\npublic class Customer {\r\n\r\n    @Id\r\n    @GeneratedValue\r\n    private Long id;\r\n\r\n    private String firstName;\r\n    private String lastName;\r\n    private String email;\r\n    private CustomerTier tier;\r\n    private Integer age;\r\n}\r\n\r\n// Extend QuerydslPredicateExecutor\r\n@Repository\r\npublic interface CustomerRepository extends JpaRepository<Customer, Long>,\r\n                                            QuerydslPredicateExecutor<Customer> {\r\n}\r\n\r\n// Now supports:\r\n// findAll(Predicate)\r\n// findAll(Predicate, Sort)\r\n// findAll(Predicate, Pageable)\r\n// findOne(Predicate)\r\n// count(Predicate)\r\n// exists(Predicate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-building-querydsl-predicates",
      children: "6.3 Building QueryDSL Predicates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import static com.example.domain.QCustomer.customer;\r\n\r\n@Service\r\npublic class CustomerSearchService {\r\n\r\n    private final CustomerRepository customerRepository;\r\n\r\n    public CustomerSearchService(CustomerRepository customerRepository) {\r\n        this.customerRepository = customerRepository;\r\n    }\r\n\r\n    public List<Customer> findGoldCustomers() {\r\n        return customerRepository.findAll(\r\n            customer.tier.eq(CustomerTier.GOLD)\r\n        );\r\n    }\r\n\r\n    public Page<Customer> searchCustomers(String name, CustomerTier tier,\r\n                                          Integer minAge, Pageable pageable) {\r\n        BooleanBuilder builder = new BooleanBuilder();\r\n\r\n        if (name != null) {\r\n            builder.and(customer.firstName.containsIgnoreCase(name)\r\n                .or(customer.lastName.containsIgnoreCase(name)));\r\n        }\r\n        if (tier != null) {\r\n            builder.and(customer.tier.eq(tier));\r\n        }\r\n        if (minAge != null) {\r\n            builder.and(customer.age.goe(minAge));\r\n        }\r\n\r\n        return customerRepository.findAll(builder, pageable);\r\n    }\r\n\r\n    public Optional<Customer> findByEmail(String email) {\r\n        return customerRepository.findOne(customer.email.eq(email));\r\n    }\r\n\r\n    public List<Customer> findByTierWithPagination(CustomerTier tier, int page, int size) {\r\n        return customerRepository.findAll(\r\n            customer.tier.eq(tier),\r\n            PageRequest.of(page, size, Sort.by(\"lastName\").ascending())\r\n        ).getContent();\r\n    }\r\n\r\n    // Complex predicates\r\n    public List<Customer> findEligibleForPromotion() {\r\n        Predicate predicate = customer.tier.in(CustomerTier.GOLD, CustomerTier.PLATINUM)\r\n            .and(customer.age.between(25, 60))\r\n            .and(customer.email.isNotNull());\r\n\r\n        return customerRepository.findAll(predicate, Sort.by(\"lastName\"));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-querydslbindercustomizer",
      children: "6.4 QuerydslBinderCustomizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\r\npublic interface ProductRepository extends JpaRepository<Product, Long>,\r\n                                           QuerydslPredicateExecutor<Product>,\r\n                                           QuerydslBinderCustomizer<QProduct> {\r\n\r\n    @Override\r\n    default void customize(QuerydslBinders binders, QProduct product) {\r\n        // Customize binding for specific paths\r\n\r\n        // Case-insensitive \"contains\" for name\r\n        binders.bind(product.name).first(\r\n            (path, value) -> path.containsIgnoreCase(value));\r\n\r\n        // Exact match for SKU (ignore case)\r\n        binders.bind(product.sku).first(\r\n            (path, value) -> path.equalsIgnoreCase(value));\r\n\r\n        // Range binding for price\r\n        binders.bind(product.price).all((path, values) -> {\r\n            List<? extends BigDecimal> numbers =\r\n                values.stream().map(v -> (BigDecimal) v).toList();\r\n            if (numbers.size() == 1) {\r\n                return Optional.of(path.goe(numbers.get(0)));\r\n            }\r\n            return Optional.of(path.between(numbers.get(0), numbers.get(1)));\r\n        });\r\n\r\n        // Ignore undefined paths (prevents binding errors for unknown filters)\r\n        binders.bind(path -> true).first(\r\n            (path, value) -> path.stringValue().containsIgnoreCase(value.toString()));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-querydslrepositorysupport",
      children: "6.5 QuerydslRepositorySupport"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\r\npublic class CustomOrderRepositoryImpl extends QuerydslRepositorySupport\r\n                                       implements CustomOrderRepository {\r\n\r\n    public CustomOrderRepositoryImpl() {\r\n        super(Order.class);\r\n    }\r\n\r\n    @Override\r\n    public List<Order> findOrdersWithComplexCriteria(Long customerId,\r\n                                                      LocalDateTime since,\r\n                                                      BigDecimal minTotal) {\r\n        QOrder order = QOrder.order;\r\n        QCustomer customer = QCustomer.customer;\r\n        QOrderItem item = QOrderItem.orderItem;\r\n\r\n        JPQLQuery<Order> query = from(order)\r\n            .innerJoin(order.customer, customer).fetchJoin()\r\n            .leftJoin(order.items, item).fetchJoin()\r\n            .where(customer.id.eq(customerId))\r\n            .where(order.createdAt.after(since))\r\n            .where(order.total.goe(minTotal))\r\n            .orderBy(order.createdAt.desc());\r\n\r\n        return query.fetch();\r\n    }\r\n\r\n    @Override\r\n    public long countByTier(CustomerTier tier) {\r\n        QCustomer customer = QCustomer.customer;\r\n        return from(customer)\r\n            .where(customer.tier.eq(tier))\r\n            .fetchCount();\r\n    }\r\n\r\n    @Override\r\n    public Page<Order> findFiltered(OrderSearchFilters filters, Pageable pageable) {\r\n        QOrder order = QOrder.order;\r\n        QCustomer customer = QCustomer.customer;\r\n\r\n        BooleanBuilder builder = new BooleanBuilder();\r\n        if (filters.status() != null) {\r\n            builder.and(order.status.eq(filters.status()));\r\n        }\r\n        if (filters.customerId() != null) {\r\n            builder.and(order.customer.id.eq(filters.customerId()));\r\n        }\r\n        if (filters.minTotal() != null) {\r\n            builder.and(order.total.goe(filters.minTotal()));\r\n        }\r\n\r\n        JPQLQuery<Order> query = from(order)\r\n            .innerJoin(order.customer, customer).fetchJoin()\r\n            .where(builder);\r\n\r\n        long total = query.fetchCount();\r\n\r\n        List<Order> results = query\r\n            .offset(pageable.getOffset())\r\n            .limit(pageable.getPageSize())\r\n            .orderBy(order.createdAt.desc())\r\n            .fetch();\r\n\r\n        return new PageImpl<>(results, pageable, total);\r\n    }\r\n}\n"
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
        children: "@Entity\r\n@Table(name = \"auditable_entities\")\r\n@EntityListeners(AuditingEntityListener.class)\r\npublic class AuditableEntity {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n\r\n    @CreatedDate\r\n    @Column(name = \"created_at\", nullable = false, updatable = false)\r\n    private LocalDateTime createdAt;\r\n\r\n    @LastModifiedDate\r\n    @Column(name = \"updated_at\", nullable = false)\r\n    private LocalDateTime updatedAt;\r\n\r\n    @CreatedBy\r\n    @Column(name = \"created_by\", updatable = false)\r\n    private String createdBy;\r\n\r\n    @LastModifiedBy\r\n    @Column(name = \"updated_by\")\r\n    private String lastModifiedBy;\r\n\r\n    // getters and setters\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-auditoraware-implementation",
      children: "7.2 AuditorAware Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableJpaAuditing(auditorAwareRef = \"auditorProvider\")\r\npublic class AuditingConfig {\r\n\r\n    @Bean\r\n    public AuditorAware<String> auditorProvider() {\r\n        return new SpringSecurityAuditorAware();\r\n    }\r\n}\r\n\r\n// With Spring Security\r\npublic class SpringSecurityAuditorAware implements AuditorAware<String> {\r\n\r\n    @Override\r\n    @NonNull\r\n    public Optional<String> getCurrentAuditor() {\r\n        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();\r\n\r\n        if (authentication == null || !authentication.isAuthenticated()) {\r\n            return Optional.of(\"SYSTEM\");\r\n        }\r\n\r\n        return Optional.of(authentication.getName());\r\n    }\r\n}\r\n\r\n// Without Spring Security (static context)\r\npublic class StaticAuditorAware implements AuditorAware<String> {\r\n\r\n    @Override\r\n    @NonNull\r\n    public Optional<String> getCurrentAuditor() {\r\n        // In a real app, get from request context or thread-local\r\n        return Optional.ofNullable(RequestContext.getCurrentUser())\r\n            .or(() -> Optional.of(\"SYSTEM\"));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-mappedsuperclass-for-reusable-auditing",
      children: "7.3 MappedSuperclass for Reusable Auditing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@MappedSuperclass\r\n@EntityListeners(AuditingEntityListener.class)\r\npublic abstract class BaseAuditEntity {\r\n\r\n    @CreatedDate\r\n    @Column(name = \"created_at\", nullable = false, updatable = false)\r\n    private LocalDateTime createdAt;\r\n\r\n    @LastModifiedDate\r\n    @Column(name = \"updated_at\", nullable = false)\r\n    private LocalDateTime updatedAt;\r\n\r\n    @CreatedBy\r\n    @Column(name = \"created_by\", updatable = false)\r\n    private String createdBy;\r\n\r\n    @LastModifiedBy\r\n    @Column(name = \"updated_by\")\r\n    private String lastModifiedBy;\r\n\r\n    public LocalDateTime getCreatedAt() { return createdAt; }\r\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\r\n    public String getCreatedBy() { return createdBy; }\r\n    public String getLastModifiedBy() { return lastModifiedBy; }\r\n}\r\n\r\n@Entity\r\n@Table(name = \"articles\")\r\npublic class Article extends BaseAuditEntity {\r\n\r\n    @Id\r\n    @GeneratedValue\r\n    private Long id;\r\n\r\n    private String title;\r\n    private String content;\r\n\r\n    // getters and setters\r\n}\n"
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
        children: "// Controller\r\n@RestController\r\n@RequestMapping(\"/api/orders\")\r\npublic class OrderController {\r\n\r\n    private final OrderRepository orderRepository;\r\n\r\n    public OrderController(OrderRepository orderRepository) {\r\n        this.orderRepository = orderRepository;\r\n    }\r\n\r\n    @GetMapping\r\n    public Page<Order> listOrders(\r\n            @RequestParam(defaultValue = \"0\") int page,\r\n            @RequestParam(defaultValue = \"20\") int size,\r\n            @RequestParam(defaultValue = \"createdAt,desc\") String[] sort) {\r\n\r\n        List<Sort.Order> orders = new ArrayList<>();\r\n        for (String sortField : sort) {\r\n            String[] parts = sortField.split(\",\");\r\n            String property = parts[0];\r\n            Sort.Direction direction = parts.length > 1\r\n                ? Sort.Direction.fromString(parts[1])\r\n                : Sort.Direction.ASC;\r\n            orders.add(new Sort.Order(direction, property).ignoreCase());\r\n        }\r\n\r\n        Pageable pageable = PageRequest.of(page, size, Sort.by(orders));\r\n        return orderRepository.findAll(pageable);\r\n    }\r\n\r\n    @GetMapping(\"/by-status\")\r\n    public Page<Order> filterByStatus(\r\n            @RequestParam OrderStatus status,\r\n            Pageable pageable) {                             // Spring auto-binds Pageable\r\n        return orderRepository.findByStatus(status, pageable);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-repository-methods-with-pagination",
      children: "8.2 Repository Methods with Pagination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // Spring Data automatically applies pagination\r\n    Page<Order> findByStatus(OrderStatus status, Pageable pageable);\r\n\r\n    // Slice — lighter than Page (no count query)\r\n    Slice<Order> findByCustomerId(Long customerId, Pageable pageable);\r\n\r\n    // List — ignores pagination in method signature but can still use Limit\r\n    List<Order> findByCustomerId(Long customerId);\r\n\r\n    // Custom query with pagination\r\n    @Query(\"SELECT o FROM Order o WHERE o.total > :min\")\r\n    Page<Order> findLargeOrders(@Param(\"min\") BigDecimal min, Pageable pageable);\r\n\r\n    // Native query with pagination (requires countQuery)\r\n    @Query(value = \"SELECT * FROM orders WHERE total > :min\",\r\n           countQuery = \"SELECT COUNT(*) FROM orders WHERE total > :min\",\r\n           nativeQuery = true)\r\n    Page<Order> findLargeOrdersNative(@Param(\"min\") BigDecimal min, Pageable pageable);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-page-vs-slice-vs-list",
      children: "8.3 Page vs Slice vs List"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class OrderService {\r\n\r\n    private final OrderRepository orderRepository;\r\n\r\n    // Page — full pagination with total count (expensive for large datasets)\r\n    public Page<Order> getOrdersPage(Pageable pageable) {\r\n        return orderRepository.findAll(pageable);\r\n        // Executes: SELECT ... LIMIT ? OFFSET ?\r\n        // Executes: SELECT COUNT(*) ...\r\n    }\r\n\r\n    // Slice — knows if there are more results, no count query (faster)\r\n    public Slice<Order> getOrdersSlice(Pageable pageable) {\r\n        return orderRepository.findByCustomerId(42L, pageable);\r\n        // Executes: SELECT ... LIMIT ? + 1 OFFSET ?\r\n        // The +1 determines hasNext without a count query\r\n    }\r\n\r\n    // List — no pagination (use with caution for large datasets)\r\n    public List<Order> getAllOrders() {\r\n        return orderRepository.findAll();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-jpasort-unsafe",
      children: "8.4 JpaSort (Unsafe)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class OrderService {\r\n\r\n    public Page<Order> getOrdersSortedByFunction(Pageable pageable) {\r\n        // JpaSort.unsafe allows function-based sorting\r\n        // Normal Sort would throw: \"Cannot sort by function\"\r\n        Sort sort = JpaSort.unsafe(\r\n            Sort.Direction.DESC,\r\n            \"COALESCE(total, 0)\"             // Raw SQL expression\r\n        );\r\n\r\n        Pageable unsafePageable = PageRequest.of(\r\n            pageable.getPageNumber(),\r\n            pageable.getPageSize(),\r\n            sort\r\n        );\r\n\r\n        return orderRepository.findAll(unsafePageable);\r\n    }\r\n}\n"
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
        children: "// Keyset pagination — efficient for large datasets\r\n// Instead of OFFSET, use WHERE createdAt < :lastCreatedAt\r\n\r\npublic interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    @Query(\"SELECT o FROM Order o WHERE o.createdAt < :lastCreatedAt \" +\r\n           \"ORDER BY o.createdAt DESC\")\r\n    List<Order> findNextPage(@Param(\"lastCreatedAt\") LocalDateTime lastCreatedAt,\r\n                             Pageable pageable);\r\n}\r\n\r\n// Spring Data 3+ — ScrollSubquery for keyset pagination\r\n@Query(\"SELECT o FROM Order o ORDER BY o.createdAt DESC, o.id DESC\")\r\nWindow<Order> findFirstWindow(Pageable pageable);\r\n\r\n// Usage in service\r\npublic Window<Order> findOrdersAfter(LocalDateTime cursor, int size) {\r\n    Pageable pageable = PageRequest.of(0, size);\r\n    if (cursor == null) {\r\n        return orderRepository.findFirstWindow(pageable);\r\n    }\r\n    // Manual implementation with ScrollSubquery\r\n    return orderRepository.findFirstWindow(pageable);\r\n}\n"
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
        children: "// Closed projection — only getter methods matching entity properties\r\n// Spring Data generates a proxy at runtime — no data is fetched for unneeded columns\r\npublic interface CustomerSummary {\r\n\r\n    Long getId();\r\n    String getFirstName();\r\n    String getLastName();\r\n    String getEmail();\r\n}\r\n\r\n// Nested projection\r\npublic interface OrderView {\r\n\r\n    Long getId();\r\n    OrderStatus getStatus();\r\n    BigDecimal getTotal();\r\n\r\n    CustomerSummary getCustomer();     // Nested projection for the customer\r\n\r\n    // Computed property (not in entity — SpEL evaluated)\r\n    @Value(\"#{target.total > 1000 ? 'HIGH' : 'NORMAL'}\")\r\n    String getPriority();\r\n}\r\n\r\n@Repository\r\npublic interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // Returns projection interface (only fetches needed columns)\r\n    List<CustomerSummary> findCustomerSummaryByTier(CustomerTier tier);\r\n\r\n    @Query(\"SELECT o FROM Order o WHERE o.customer.id = :customerId\")\r\n    List<OrderView> findOrderViewsByCustomer(@Param(\"customerId\") Long customerId);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-interface-based-open-projection",
      children: "9.2 Interface-Based Open Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Open projection — uses SpEL to compute values\r\n// Spring Data loads ALL columns because it cannot determine which ones are needed\r\npublic interface CustomerWithFullName {\r\n\r\n    String getFirstName();\r\n    String getLastName();\r\n\r\n    @Value(\"#{target.firstName + ' ' + target.lastName}\")\r\n    String getFullName();\r\n\r\n    @Value(\"#{target.email != null ? target.email : 'NO EMAIL'}\")\r\n    String getEmailOrDefault();\r\n\r\n    @Value(\"#{@customerFormatter.format(target)}\")  // Reference Spring bean\r\n    String getFormatted();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-class-based-dto-projection-dto",
      children: "9.3 Class-Based DTO Projection (DTO)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// DTO with constructor — most efficient projection\r\n// JPQL constructor expression must match DTO constructor exactly\r\npublic record CustomerDto(\r\n    Long id,\r\n    String firstName,\r\n    String lastName,\r\n    String email,\r\n    CustomerTier tier\r\n) { }\r\n\r\n// Another DTO\r\npublic class OrderListItem {\r\n\r\n    private final Long id;\r\n    private final OrderStatus status;\r\n    private final BigDecimal total;\r\n    private final String customerName;\r\n    private final LocalDateTime createdAt;\r\n\r\n    // Constructor must match the JPQL expression\r\n    public OrderListItem(Long id, OrderStatus status, BigDecimal total,\r\n                         String customerName, LocalDateTime createdAt) {\r\n        this.id = id;\r\n        this.status = status;\r\n        this.total = total;\r\n        this.customerName = customerName;\r\n        this.createdAt = createdAt;\r\n    }\r\n\r\n    // getters\r\n}\r\n\r\n@Repository\r\npublic interface OrderRepository extends JpaRepository<Order, Long> {\r\n\r\n    // JPQL constructor expression\r\n    @Query(\"\"\"\r\n        SELECT new com.example.dto.OrderListItem(\r\n            o.id, o.status, o.total, c.name, o.createdAt)\r\n        FROM Order o JOIN o.customer c\r\n        WHERE o.createdAt > :since\r\n        ORDER BY o.createdAt DESC\r\n        \"\"\")\r\n    List<OrderListItem> findOrderListItems(@Param(\"since\") LocalDateTime since);\r\n\r\n    // Interface projection — returns proxy (no constructor needed)\r\n    List<CustomerSummary> findCustomerSummaryByTier(CustomerTier tier);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-dynamic-projection",
      children: "9.4 Dynamic Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Single repository method that returns different projection types\r\n@Repository\r\npublic interface CustomerRepository extends JpaRepository<Customer, Long> {\r\n\r\n    // Class<T> parameter determines the return type\r\n    <T> List<T> findByTier(CustomerTier tier, Class<T> type);\r\n\r\n    <T> Optional<T> findByEmail(String email, Class<T> type);\r\n\r\n    @Query(\"SELECT c FROM Customer c WHERE c.lastName = :lastName\")\r\n    <T> List<T> findByLastName(@Param(\"lastName\") String lastName, Class<T> type);\r\n}\r\n\r\n// Usage\r\n@Service\r\npublic class CustomerService {\r\n\r\n    private final CustomerRepository customerRepository;\r\n\r\n    public List<CustomerSummary> getGoldCustomerSummaries() {\r\n        return customerRepository.findByTier(CustomerTier.GOLD, CustomerSummary.class);\r\n    }\r\n\r\n    public List<CustomerDto> getGoldCustomerDtos() {\r\n        return customerRepository.findByTier(CustomerTier.GOLD, CustomerDto.class);\r\n    }\r\n\r\n    public Optional<Customer> getFullCustomer(String email) {\r\n        return customerRepository.findByEmail(email, Customer.class);  // Full entity\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-projection-performance",
      children: "9.5 Projection Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Performance comparison:\r\n//\r\n// Full entity (Customer.class):\r\n//   SELECT id, first_name, last_name, email, tier, age, created_at, updated_at, version\r\n//   FROM customers\r\n//   — All columns loaded\r\n//   — Managed entity in persistence context\r\n//   — Supports lazy loading\r\n//\r\n// Interface projection (CustomerSummary):\r\n//   SELECT id, first_name, last_name, email\r\n//   FROM customers\r\n//   — Only requested columns loaded\r\n//   — Not managed (read-only)\r\n//   — No lazy loading\r\n//\r\n// DTO projection (new CustomerDto(...)):\r\n//   SELECT id, first_name, last_name, email, tier\r\n//   FROM customers\r\n//   — Same as interface projection\r\n//   — No proxy creation overhead\r\n//   — Not managed\r\n//\r\n// When to use each:\r\n// - Full entity: when you need to update data\r\n// - Interface projection: quick read-only queries\r\n// - DTO projection: service-layer DTOs, complex constructor logic\n"
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
            }), " (record/class-based: all fields including sensitive data)\r\nThen implement a dynamic projection repository method that accepts ", (0,jsx_runtime.jsx)(_components.code, {
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
            children: "A projection parameter to switch between full entity and summary\r\nUse Specifications for filtering and projections for the response."
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