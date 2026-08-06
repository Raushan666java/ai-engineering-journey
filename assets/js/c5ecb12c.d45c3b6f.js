"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32189],{

/***/ 87759
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_23_nosql_md_c5e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-23-nosql-md-c5e.json
const site_docs_courses_java_23_nosql_md_c5e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/23-nosql","title":"Spring Data for NoSQL","description":"Previous Transactions","source":"@site/docs/courses/java/23-nosql.md","sourceDirName":"courses/java","slug":"/java/23-nosql","permalink":"/ai-engineering-journey/java/23-nosql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"id":"23-nosql","slug":"/java/23-nosql","title":"Spring Data for NoSQL","sidebar_label":"Spring Data for NoSQL","sidebar_position":23},"sidebar":"coursesSidebar","previous":{"title":"Database Migrations (Flyway & Liquibase)","permalink":"/ai-engineering-journey/java/22-migrations"},"next":{"title":"Transaction Management","permalink":"/ai-engineering-journey/java/24-transactions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/23-nosql.md


const frontMatter = {
	id: '23-nosql',
	slug: '/java/23-nosql',
	title: 'Spring Data for NoSQL',
	sidebar_label: 'Spring Data for NoSQL',
	sidebar_position: 23
};
const contentTitle = 'Spring Data for NoSQL';

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
  "value": "MongoDB with Spring Data",
  "id": "mongodb-with-spring-data",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup",
  "level": 3
}, {
  "value": "Document Modeling",
  "id": "document-modeling",
  "level": 3
}, {
  "value": "MongoRepository",
  "id": "mongorepository",
  "level": 3
}, {
  "value": "MongoTemplate",
  "id": "mongotemplate",
  "level": 3
}, {
  "value": "@Query with JSON",
  "id": "query-with-json",
  "level": 3
}, {
  "value": "Aggregation Pipeline",
  "id": "aggregation-pipeline",
  "level": 3
}, {
  "value": "Geo-Spatial Queries",
  "id": "geo-spatial-queries",
  "level": 3
}, {
  "value": "Index Management",
  "id": "index-management",
  "level": 3
}, {
  "value": "GridFS for File Storage",
  "id": "gridfs-for-file-storage",
  "level": 3
}, {
  "value": "Transactions in MongoDB",
  "id": "transactions-in-mongodb",
  "level": 3
}, {
  "value": "Application Configuration",
  "id": "application-configuration",
  "level": 3
}, {
  "value": "Redis with Spring Data",
  "id": "redis-with-spring-data",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup-1",
  "level": 3
}, {
  "value": "RedisTemplate",
  "id": "redistemplate",
  "level": 3
}, {
  "value": "@RedisHash and Spring Data Repositories",
  "id": "redishash-and-spring-data-repositories",
  "level": 3
}, {
  "value": "Redis Pub/Sub",
  "id": "redis-pubsub",
  "level": 3
}, {
  "value": "RedisCacheManager",
  "id": "rediscachemanager",
  "level": 3
}, {
  "value": "Redis Streams",
  "id": "redis-streams",
  "level": 3
}, {
  "value": "Redis Configuration",
  "id": "redis-configuration",
  "level": 3
}, {
  "value": "Elasticsearch with Spring Data",
  "id": "elasticsearch-with-spring-data",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup-2",
  "level": 3
}, {
  "value": "Document Modeling",
  "id": "document-modeling-1",
  "level": 3
}, {
  "value": "ElasticsearchRepository",
  "id": "elasticsearchrepository",
  "level": 3
}, {
  "value": "ElasticsearchTemplate",
  "id": "elasticsearchtemplate",
  "level": 3
}, {
  "value": "Full-Text Search",
  "id": "full-text-search",
  "level": 3
}, {
  "value": "Aggregations",
  "id": "aggregations",
  "level": 3
}, {
  "value": "Index Management",
  "id": "index-management-1",
  "level": 3
}, {
  "value": "Multi-Model Patterns",
  "id": "multi-model-patterns",
  "level": 2
}, {
  "value": "MongoDB + Redis for Caching",
  "id": "mongodb--redis-for-caching",
  "level": 3
}, {
  "value": "Elasticsearch + MongoDB for Search",
  "id": "elasticsearch--mongodb-for-search",
  "level": 3
}, {
  "value": "Multi-Store Transaction Pattern",
  "id": "multi-store-transaction-pattern",
  "level": 3
}, {
  "value": "Read Model with Query Service",
  "id": "read-model-with-query-service",
  "level": 3
}, {
  "value": "Comparing Database Characteristics",
  "id": "comparing-database-characteristics",
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
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
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
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/22-migrations",
          children: "Migrations"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/24-transactions",
          children: "Transactions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "spring-data-for-nosql",
        children: "Spring Data for NoSQL"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Relational databases have dominated enterprise storage for decades, but the rise of web-scale applications, unstructured data, and polyglot persistence has made NoSQL databases indispensable. Spring Data provides a unified programming model across SQL and NoSQL stores, reducing the boilerplate of connecting to MongoDB, Redis, Elasticsearch, and others while keeping the abstractions familiar — repositories, templates, and consistent exception hierarchies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers three major NoSQL engines — MongoDB (document store), Redis (key-value / in-memory data structure store), and Elasticsearch (search engine) — through the lens of Spring Data. Every example is complete and compilable against the respective database."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you should be able to:"
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
        href: "../../assets/images/lessons/java/23-nosql/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/23-nosql/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/23-nosql/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/23-nosql/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/23-nosql/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/23-nosql/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Model documents with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Document"
        }), " and query them via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MongoRepository"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Query"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write aggregation pipelines, geo-spatial queries, and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MongoTemplate"
        }), " for imperative data access"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store and retrieve files with GridFS and manage indexes and transactions in MongoDB"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RedisTemplate"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RedisHash"
        }), ", and Spring Data CRUD repositories with Redis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement publish/subscribe messaging with Redis, configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RedisCacheManager"
        }), ", and handle expiry policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consume Redis Streams with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StreamMessageListenerContainer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Model Elasticsearch documents with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Field"
        }), " and query them using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ElasticsearchRepository"
        }), " and the Elasticsearch Query DSL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform full-text search, aggregations, and index management with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ElasticsearchTemplate"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine MongoDB, Redis, and Elasticsearch in multi-model patterns for caching and search"
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
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document store with Spring Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Document, MongoRepository, MongoTemplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory data structure store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@RedisHash, RedisTemplate, pub/sub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Document, ElasticsearchRepository, query DSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining stores for real-world apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB for storage, Redis for cache, ES for search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID across documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB 4.0+ supports multi-document transactions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[MongoDB] --> B[Spring Data MongoDB]\n    B --> C[Redis]\n    C --> D[Spring Data Redis]\n    D --> E[Elasticsearch]\n    E --> F[Spring Data ES]\n    F --> G[Multi-Model Patterns]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use Redis for caching and session storage, MongoDB for persistent documents, and Elasticsearch for full-text search. Each database excels in its own domain → choose the right tool for each job."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mongodb-with-spring-data",
      children: "MongoDB with Spring Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/23-nosql.png",
        alt: "Spring Data NoSQL Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MongoDB is a document-oriented NoSQL database that stores data in BSON (Binary JSON) documents. Spring Data MongoDB maps Java objects to MongoDB documents with annotations and provides both repository-level abstractions and a lower-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MongoTemplate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-mongodb</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\nspring:\n  data:\n    mongodb:\n      uri: mongodb://localhost:27017/course\n      auto-index-creation: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "document-modeling",
      children: "Document Modeling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Document"
      }), " maps a Java class to a MongoDB collection. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Id"
      }), " marks the identifier field, which MongoDB stores as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_id"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.mongodb.core.index.CompoundIndex;\nimport org.springframework.data.mongodb.core.index.Indexed;\nimport org.springframework.data.mongodb.core.index.GeoSpatialIndexed;\nimport org.springframework.data.mongodb.core.mapping.Document;\nimport org.springframework.data.mongodb.core.mapping.Field;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@Document(collection = \"products\")\n@CompoundIndex(def = \"{'category': 1, 'price': -1}\", name = \"cat_price_idx\")\npublic class Product {\n\n    @Id\n    private String id;\n\n    @Field(\"product_name\")\n    @Indexed(unique = true)\n    private String name;\n\n    @Indexed\n    private String category;\n\n    private BigDecimal price;\n    private String description;\n    private List<String> tags;\n    private Integer stock;\n    private LocalDateTime createdAt;\n    private LocalDateTime updatedAt;\n\n    @GeoSpatialIndexed\n    private GeoLocation location;\n\n    private Supplier supplier;\n    private List<Review> reviews;\n\n    public Product() {}\n\n    public Product(String name, String category, BigDecimal price, GeoLocation location) {\n        this.name = name;\n        this.category = category;\n        this.price = price;\n        this.location = location;\n        this.createdAt = LocalDateTime.now();\n        this.updatedAt = LocalDateTime.now();\n    }\n\n    public String getId() { return id; }\n    public void setId(String id) { this.id = id; }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public String getCategory() { return category; }\n    public void setCategory(String category) { this.category = category; }\n\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n\n    public String getDescription() { return description; }\n    public void setDescription(String description) { this.description = description; }\n\n    public List<String> getTags() { return tags; }\n    public void setTags(List<String> tags) { this.tags = tags; }\n\n    public Integer getStock() { return stock; }\n    public void setStock(Integer stock) { this.stock = stock; }\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\n    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }\n\n    public GeoLocation getLocation() { return location; }\n    public void setLocation(GeoLocation location) { this.location = location; }\n\n    public Supplier getSupplier() { return supplier; }\n    public void setSupplier(Supplier supplier) { this.supplier = supplier; }\n\n    public List<Review> getReviews() { return reviews; }\n    public void setReviews(List<Review> reviews) { this.reviews = reviews; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Embedded documents do not need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Document"
      }), " — they are serialized inline:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport java.util.List;\n\npublic class Supplier {\n\n    private String name;\n    private String contactEmail;\n    private String phone;\n    private Address address;\n\n    public Supplier() {}\n\n    public Supplier(String name, String contactEmail) {\n        this.name = name;\n        this.contactEmail = contactEmail;\n    }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public String getContactEmail() { return contactEmail; }\n    public void setContactEmail(String contactEmail) { this.contactEmail = contactEmail; }\n\n    public String getPhone() { return phone; }\n    public void setPhone(String phone) { this.phone = phone; }\n\n    public Address getAddress() { return address; }\n    public void setAddress(Address address) { this.address = address; }\n}\n\nclass Address {\n    private String street;\n    private String city;\n    private String zipCode;\n\n    public Address() {}\n\n    public Address(String street, String city, String zipCode) {\n        this.street = street;\n        this.city = city;\n        this.zipCode = zipCode;\n    }\n\n    public String getStreet() { return street; }\n    public void setStreet(String street) { this.street = street; }\n\n    public String getCity() { return city; }\n    public void setCity(String city) { this.city = city; }\n\n    public String getZipCode() { return zipCode; }\n    public void setZipCode(String zipCode) { this.zipCode = zipCode; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport java.time.LocalDateTime;\n\npublic class Review {\n\n    private String userId;\n    private Integer rating;\n    private String comment;\n    private LocalDateTime createdAt;\n\n    public Review() {}\n\n    public Review(String userId, Integer rating, String comment) {\n        this.userId = userId;\n        this.rating = rating;\n        this.comment = comment;\n        this.createdAt = LocalDateTime.now();\n    }\n\n    public String getUserId() { return userId; }\n    public void setUserId(String userId) { this.userId = userId; }\n\n    public Integer getRating() { return rating; }\n    public void setRating(Integer rating) { this.rating = rating; }\n\n    public String getComment() { return comment; }\n    public void setComment(String comment) { this.comment = comment; }\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.core.geo.GeoJsonPoint;\n\npublic class GeoLocation {\n\n    private String type;\n    private double[] coordinates;\n\n    public GeoLocation() {\n        this.type = \"Point\";\n    }\n\n    public GeoLocation(double longitude, double latitude) {\n        this.type = \"Point\";\n        this.coordinates = new double[]{longitude, latitude};\n    }\n\n    public String getType() { return type; }\n    public void setType(String type) { this.type = type; }\n\n    public double[] getCoordinates() { return coordinates; }\n    public void setCoordinates(double[] coordinates) { this.coordinates = coordinates; }\n\n    public GeoJsonPoint toGeoJsonPoint() {\n        if (coordinates != null && coordinates.length == 2) {\n            return new GeoJsonPoint(coordinates[0], coordinates[1]);\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mongorepository",
      children: "MongoRepository"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MongoRepository<T, ID>"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PagingAndSortingRepository"
      }), " and provides CRUD operations plus MongoDB-specific methods like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insert"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.repository.MongoRepository;\nimport org.springframework.data.mongodb.repository.Query;\nimport org.springframework.stereotype.Repository;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport java.util.Optional;\n\n@Repository\npublic interface ProductRepository extends MongoRepository<Product, String> {\n\n    Optional<Product> findByName(String name);\n\n    List<Product> findByCategory(String category);\n\n    List<Product> findByPriceBetween(BigDecimal min, BigDecimal max);\n\n    List<Product> findByTagsIn(List<String> tags);\n\n    List<Product> findByStockLessThan(Integer threshold);\n\n    List<Product> findByCategoryAndPriceLessThan(String category, BigDecimal maxPrice);\n\n    @Query(\"{ 'supplier.name': ?0 }\")\n    List<Product> findBySupplierName(String supplierName);\n\n    @Query(\"{ 'category': ?0, 'price': { $gte: ?1, $lte: ?2 } }\")\n    List<Product> findByCategoryAndPriceRange(String category, BigDecimal min, BigDecimal max);\n\n    @Query(\"{ 'tags': { $all: ?0 } }\")\n    List<Product> findByAllTags(List<String> tags);\n\n    @Query(value = \"{ 'category': ?0 }\", fields = \"{ 'product_name': 1, 'price': 1 }\")\n    List<Product> findProjectedByCategory(String category);\n\n    @Query(value = \"{ 'category': ?0 }\", count = true)\n    long countByCategory(String category);\n\n    @Query(value = \"{ 'category': ?0 }\", exists = true)\n    boolean existsAnyByCategory(String category);\n\n    @Query(\"{ 'reviews': { $elemMatch: { 'rating': { $gte: ?0 } } } }\")\n    List<Product> findByMinReviewRating(Integer minRating);\n\n    @Query(\"{ 'reviews.rating': { $gte: ?0 } }\")\n    List<Product> findByAnyReviewRating(Integer minRating);\n\n    @Query(\"{ 'price': { $ne: null } }\")\n    List<Product> findAllWithPrice();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorting and pagination are inherited:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.data.mongodb.repository.MongoRepository;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\n\n@Repository\npublic interface ProductPagingRepository extends MongoRepository<Product, String> {\n\n    Page<Product> findByCategory(String category, Pageable pageable);\n\n    List<Product> findByPriceBetween(BigDecimal min, BigDecimal max, Sort sort);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mongotemplate",
      children: "MongoTemplate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MongoTemplate"
      }), " provides the imperative, non-repository API for MongoDB operations. Use it when you need fine-grained control that repositories do not expose."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.core.MongoTemplate;\nimport org.springframework.data.mongodb.core.query.Criteria;\nimport org.springframework.data.mongodb.core.query.Query;\nimport org.springframework.data.mongodb.core.query.Update;\nimport org.springframework.stereotype.Service;\n\nimport java.math.BigDecimal;\nimport java.util.List;\n\n@Service\npublic class ProductTemplateService {\n\n    private final MongoTemplate mongoTemplate;\n\n    public ProductTemplateService(MongoTemplate mongoTemplate) {\n        this.mongoTemplate = mongoTemplate;\n    }\n\n    public Product findById(String id) {\n        return mongoTemplate.findById(id, Product.class);\n    }\n\n    public List<Product> findByNameRegex(String regex) {\n        Query query = Query.query(Criteria.where(\"name\").regex(regex, \"i\"));\n        return mongoTemplate.find(query, Product.class);\n    }\n\n    public List<Product> findByCategoryAndStock(String category, Integer minStock) {\n        Query query = Query.query(\n            Criteria.where(\"category\").is(category)\n                .and(\"stock\").gte(minStock)\n        );\n        return mongoTemplate.find(query, Product.class);\n    }\n\n    public Product updatePrice(String id, BigDecimal newPrice) {\n        Query query = Query.query(Criteria.where(\"id\").is(id));\n        Update update = Update.update(\"price\", newPrice).set(\"updatedAt\", LocalDateTime.now());\n        return mongoTemplate.findAndModify(query, update, Product.class);\n    }\n\n    public Product upsertProduct(String name, BigDecimal defaultPrice) {\n        Query query = Query.query(Criteria.where(\"name\").is(name));\n        Update update = new Update()\n            .setOnInsert(\"name\", name)\n            .setOnInsert(\"price\", defaultPrice)\n            .setOnInsert(\"createdAt\", LocalDateTime.now());\n        return mongoTemplate.upsert(query, update, Product.class);\n    }\n\n    public void updateAllCategoryPrice(String category, BigDecimal increaseBy) {\n        Query query = Query.query(Criteria.where(\"category\").is(category));\n        Update update = new Update().inc(\"price\", increaseBy);\n        mongoTemplate.updateMulti(query, update, Product.class);\n    }\n\n    public void deleteByCategory(String category) {\n        Query query = Query.query(Criteria.where(\"category\").is(category));\n        mongoTemplate.remove(query, Product.class);\n    }\n\n    public List<Product> findWithPagination(int page, int size) {\n        Query query = new Query().skip((long) page * size).limit(size);\n        return mongoTemplate.find(query, Product.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-with-json",
      children: "@Query with JSON"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Query"
      }), " annotation accepts raw MongoDB JSON query syntax. Parameter placeholders use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?0"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?1"
      }), ", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.repository.MongoRepository;\nimport org.springframework.data.mongodb.repository.Query;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\n\n@Repository\npublic interface ProductQueryRepository extends MongoRepository<Product, String> {\n\n    @Query(\"\"\"\n        {\n            $or: [\n                { 'product_name': { $regex: ?0, $options: 'i' } },\n                { 'description': { $regex: ?0, $options: 'i' } }\n            ],\n            'price': { $lte: ?1 }\n        }\n        \"\"\")\n    List<Product> searchByNameOrDescription(String term, BigDecimal maxPrice);\n\n    @Query(\"\"\"\n        {\n            $and: [\n                { 'category': ?0 },\n                { 'tags': { $in: ?1 } },\n                { 'stock': { $gte: ?2 } }\n            ]\n        }\n        \"\"\")\n    List<Product> findByCategoryAndTagsAndMinStock(\n            String category, List<String> tags, Integer minStock);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aggregation-pipeline",
      children: "Aggregation Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MongoDB's aggregation pipeline processes documents through multiple stages (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$match"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$group"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$sort"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$project"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$unwind"
      }), ", etc.). Spring Data MongoDB models this with typed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Aggregation"
      }), " objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.core.MongoTemplate;\nimport org.springframework.data.mongodb.core.aggregation.*;\nimport org.springframework.data.mongodb.core.query.Criteria;\nimport org.springframework.stereotype.Service;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class ProductAggregationService {\n\n    private final MongoTemplate mongoTemplate;\n\n    public ProductAggregationService(MongoTemplate mongoTemplate) {\n        this.mongoTemplate = mongoTemplate;\n    }\n\n    public List<CategoryStats> aggregateCategoryStats() {\n        Aggregation aggregation = Aggregation.newAggregation(\n            Aggregation.group(\"category\")\n                .count().as(\"count\")\n                .avg(\"price\").as(\"avgPrice\")\n                .min(\"price\").as(\"minPrice\")\n                .max(\"price\").as(\"maxPrice\")\n                .sum(\"stock\").as(\"totalStock\"),\n            Aggregation.sort(Sort.by(Sort.Direction.DESC, \"count\")),\n            Aggregation.project(\"count\", \"avgPrice\", \"minPrice\", \"maxPrice\", \"totalStock\")\n                .and(\"_id\").as(\"category\")\n                .andExclude(\"_id\")\n        );\n\n        AggregationResults<CategoryStats> results = mongoTemplate.aggregate(\n            aggregation, \"products\", CategoryStats.class\n        );\n        return results.getMappedResults();\n    }\n\n    public List<Product> topRatedProducts(int limit) {\n        Aggregation aggregation = Aggregation.newAggregation(\n            Aggregation.unwind(\"reviews\"),\n            Aggregation.group(\"id\")\n                .first(\"product_name\").as(\"name\")\n                .avg(\"reviews.rating\").as(\"avgRating\")\n                .count().as(\"reviewCount\"),\n            Aggregation.match(Criteria.where(\"reviewCount\").gte(5)),\n            Aggregation.sort(Sort.by(Sort.Direction.DESC, \"avgRating\")),\n            Aggregation.limit(limit)\n        );\n\n        AggregationResults<Product> results = mongoTemplate.aggregate(\n            aggregation, \"products\", Product.class\n        );\n        return results.getMappedResults();\n    }\n\n    public List<Map> productPriceDistribution() {\n        Aggregation aggregation = Aggregation.newAggregation(\n            Aggregation.project()\n                .andExpression(\"floor(price / 100) * 100\").as(\"priceBucket\"),\n            Aggregation.group(\"priceBucket\")\n                .count().as(\"count\"),\n            Aggregation.sort(Sort.by(Sort.Direction.ASC, \"_id\")),\n            Aggregation.project()\n                .and(\"_id\").as(\"bucket\")\n                .and(\"count\").as(\"count\")\n                .andExclude(\"_id\")\n        );\n\n        AggregationResults<Map> results = mongoTemplate.aggregate(\n            aggregation, \"products\", Map.class\n        );\n        return results.getMappedResults();\n    }\n\n    public List<CategoryStats> categoryWithTagAnalysis() {\n        Aggregation aggregation = Aggregation.newAggregation(\n            Aggregation.unwind(\"tags\"),\n            Aggregation.group(\"category\", \"tags\")\n                .count().as(\"count\"),\n            Aggregation.group(\"_id.category\")\n                .push(new BasicDBObject(\"tag\", \"$_id.tags\")\n                    .append(\"count\", \"$count\"))\n                    .as(\"tags\"),\n            Aggregation.project()\n                .and(\"_id\").as(\"category\")\n                .and(\"tags\").as(\"tags\")\n                .andExclude(\"_id\")\n        );\n\n        AggregationResults<CategoryStats> results = mongoTemplate.aggregate(\n            aggregation, \"products\", CategoryStats.class\n        );\n        return results.getMappedResults();\n    }\n\n    public List<Map> supplierProductCount() {\n        Aggregation aggregation = Aggregation.newAggregation(\n            Aggregation.group(\"supplier.name\")\n                .count().as(\"productCount\")\n                .push(\"product_name\").as(\"products\"),\n            Aggregation.sort(Sort.by(Sort.Direction.DESC, \"productCount\"))\n        );\n\n        AggregationResults<Map> results = mongoTemplate.aggregate(\n            aggregation, \"products\", Map.class\n        );\n        return results.getMappedResults();\n    }\n\n    public List<Map> runningTotalByCategory(String category) {\n        Aggregation aggregation = Aggregation.newAggregation(\n            Aggregation.match(Criteria.where(\"category\").is(category)),\n            Aggregation.sort(Sort.by(Sort.Direction.ASC, \"createdAt\")),\n            Aggregation.project()\n                .and(\"product_name\").as(\"name\")\n                .and(\"price\").as(\"price\")\n                .and(\"createdAt\").as(\"createdAt\"),\n            Aggregation.group().push(\"$$ROOT\").as(\"docs\"),\n            Aggregation.project()\n                .and(\n                    AccumulatorOperators.AccumulatorOperators.FunctionOperators\n                        .reduce(\n                            Arrays.asList(\"$docs\", new BasicDBObject(\"running\", 0)),\n                            \"\"\"\n                            {\n                                $concatArrays: [\n                                    \"$$value.already\", [{\n                                        $mergeObjects: [\n                                            \"$$this\",\n                                            { runningTotal: { $add: [\"$$value.running\", \"$$this.price\"] } }\n                                        ]\n                                    }]\n                                ]\n                            }\n                            \"\"\",\n                            new BasicDBObject(\"already\", Arrays.asList())\n                        )\n                ).as(\"result\")\n        );\n\n        AggregationResults<Map> results = mongoTemplate.aggregate(\n            aggregation, \"products\", Map.class\n        );\n        return results.getMappedResults();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport java.math.BigDecimal;\n\npublic class CategoryStats {\n\n    private String category;\n    private long count;\n    private BigDecimal avgPrice;\n    private BigDecimal minPrice;\n    private BigDecimal maxPrice;\n    private long totalStock;\n    private List<Map<String, Object>> tags;\n\n    public CategoryStats() {}\n\n    public String getCategory() { return category; }\n    public void setCategory(String category) { this.category = category; }\n\n    public long getCount() { return count; }\n    public void setCount(long count) { this.count = count; }\n\n    public BigDecimal getAvgPrice() { return avgPrice; }\n    public void setAvgPrice(BigDecimal avgPrice) { this.avgPrice = avgPrice; }\n\n    public BigDecimal getMinPrice() { return minPrice; }\n    public void setMinPrice(BigDecimal minPrice) { this.minPrice = minPrice; }\n\n    public BigDecimal getMaxPrice() { return maxPrice; }\n    public void setMaxPrice(BigDecimal maxPrice) { this.maxPrice = maxPrice; }\n\n    public long getTotalStock() { return totalStock; }\n    public void setTotalStock(long totalStock) { this.totalStock = totalStock; }\n\n    public List<Map<String, Object>> getTags() { return tags; }\n    public void setTags(List<Map<String, Object>> tags) { this.tags = tags; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geo-spatial-queries",
      children: "Geo-Spatial Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MongoDB supports rich geo-spatial queries — finding documents near a point, within a polygon, or intersecting a geometry."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.geo.*;\nimport org.springframework.data.mongodb.core.MongoTemplate;\nimport org.springframework.data.mongodb.core.query.Criteria;\nimport org.springframework.data.mongodb.core.query.NearQuery;\nimport org.springframework.data.mongodb.core.query.Query;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\npublic class ProductGeoService {\n\n    private final MongoTemplate mongoTemplate;\n\n    public ProductGeoService(MongoTemplate mongoTemplate) {\n        this.mongoTemplate = mongoTemplate;\n    }\n\n    public List<Product> findNearby(double longitude, double latitude, double maxDistanceKm) {\n        Point location = new Point(longitude, latitude);\n        NearQuery nearQuery = NearQuery.near(location)\n            .maxDistance(new Distance(maxDistanceKm / 111.12, Metrics.KILOMETERS))\n            .spherical(true);\n\n        return mongoTemplate.geoNear(nearQuery, Product.class)\n            .getContent()\n            .stream()\n            .map(GeoResult::getContent)\n            .toList();\n    }\n\n    public List<Product> findWithinBox(double minLon, double minLat, double maxLon, double maxLat) {\n        Box box = new Box(new Point(minLon, minLat), new Point(maxLon, maxLat));\n        Query query = Query.query(Criteria.where(\"location\").within(box));\n        return mongoTemplate.find(query, Product.class);\n    }\n\n    public List<Product> findWithinCircle(double longitude, double latitude, double radiusKm) {\n        Point center = new Point(longitude, latitude);\n        Circle circle = new Circle(center, radiusKm / 111.12);\n        Query query = Query.query(Criteria.where(\"location\").within(circle));\n        return mongoTemplate.find(query, Product.class);\n    }\n\n    public List<Product> findWithinPolygon(List<Point> polygonPoints) {\n        Polygon polygon = new Polygon(polygonPoints);\n        Query query = Query.query(Criteria.where(\"location\").within(polygon));\n        return mongoTemplate.find(query, Product.class);\n    }\n\n    public long countNearby(double longitude, double latitude, double maxDistanceKm) {\n        Point location = new Point(longitude, latitude);\n        NearQuery nearQuery = NearQuery.near(location)\n            .maxDistance(new Distance(maxDistanceKm / 111.12, Metrics.KILOMETERS))\n            .spherical(true);\n\n        return mongoTemplate.geoNear(nearQuery, Product.class)\n            .getTotalElements();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "index-management",
      children: "Index Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data MongoDB can create indexes automatically when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-index-creation: true"
      }), " is set. For fine-grained control, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MongoTemplate.indexOps()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.domain.Sort;\nimport org.springframework.data.mongodb.core.MongoTemplate;\nimport org.springframework.data.mongodb.core.index.Index;\nimport org.springframework.data.mongodb.core.index.IndexInfo;\nimport org.springframework.stereotype.Service;\n\nimport jakarta.annotation.PostConstruct;\nimport java.util.List;\nimport java.util.concurrent.TimeUnit;\n\n@Service\npublic class IndexManagementService {\n\n    private final MongoTemplate mongoTemplate;\n\n    public IndexManagementService(MongoTemplate mongoTemplate) {\n        this.mongoTemplate = mongoTemplate;\n    }\n\n    @PostConstruct\n    public void createIndexes() {\n        mongoTemplate.indexOps(Product.class)\n            .ensureIndex(new Index(\"name\", Sort.Direction.ASC).unique());\n\n        mongoTemplate.indexOps(Product.class)\n            .ensureIndex(new Index(\"category\", Sort.Direction.ASC)\n                .on(\"price\", Sort.Direction.DESC));\n\n        mongoTemplate.indexOps(Product.class)\n            .ensureIndex(new Index(\"createdAt\", Sort.Direction.DESC)\n                .expire(90, TimeUnit.DAYS));\n\n        mongoTemplate.indexOps(Product.class)\n            .ensureIndex(new Index(\"location\", Sort.Direction.ASC)\n                .named(\"geo_index\")\n                .spatial());\n    }\n\n    public List<IndexInfo> getIndexes() {\n        return mongoTemplate.indexOps(Product.class).getIndexInfo();\n    }\n\n    public void dropIndex(String indexName) {\n        mongoTemplate.indexOps(Product.class).dropIndex(indexName);\n    }\n\n    public void dropAllIndexes() {\n        mongoTemplate.indexOps(Product.class).dropAllIndexes();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gridfs-for-file-storage",
      children: "GridFS for File Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MongoDB's GridFS stores files exceeding the 16 MB document size limit by splitting them into chunks. Spring Data MongoDB provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GridFsTemplate"
      }), " for this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport com.mongodb.client.gridfs.model.GridFSFile;\nimport org.springframework.data.mongodb.core.query.Criteria;\nimport org.springframework.data.mongodb.core.query.Query;\nimport org.springframework.data.mongodb.gridfs.GridFsResource;\nimport org.springframework.data.mongodb.gridfs.GridFsTemplate;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.io.InputStream;\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class FileStorageService {\n\n    private final GridFsTemplate gridFsTemplate;\n\n    public FileStorageService(GridFsTemplate gridFsTemplate) {\n        this.gridFsTemplate = gridFsTemplate;\n    }\n\n    public String storeFile(MultipartFile file, Map<String, String> metadata) {\n        var dbObject = new org.bson.Document(metadata);\n        return gridFsTemplate.store(\n            file.getInputStream(),\n            file.getOriginalFilename(),\n            file.getContentType(),\n            dbObject\n        ).toString();\n    }\n\n    public String storeFileFromStream(\n            InputStream inputStream, String filename, String contentType,\n            Map<String, String> metadata) {\n        var dbObject = new org.bson.Document(metadata);\n        return gridFsTemplate.store(inputStream, filename, contentType, dbObject)\n            .toString();\n    }\n\n    public GridFSFile findById(String fileId) {\n        return gridFsTemplate.findOne(\n            Query.query(Criteria.where(\"_id\").is(fileId))\n        );\n    }\n\n    public List<GridFSFile> findByMetadata(String key, String value) {\n        return gridFsTemplate.find(\n            Query.query(Criteria.where(\"metadata.\" + key).is(value))\n        ).into(new java.util.ArrayList<>());\n    }\n\n    public GridFsResource getFileResource(String fileId) {\n        GridFSFile file = findById(fileId);\n        if (file == null) {\n            throw new RuntimeException(\"File not found: \" + fileId);\n        }\n        return gridFsTemplate.getResource(file);\n    }\n\n    public void deleteFile(String fileId) {\n        gridFsTemplate.delete(\n            Query.query(Criteria.where(\"_id\").is(fileId))\n        );\n    }\n\n    public void deleteByFilename(String filename) {\n        gridFsTemplate.delete(\n            Query.query(Criteria.where(\"filename\").is(filename))\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactions-in-mongodb",
      children: "Transactions in MongoDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MongoDB supports multi-document ACID transactions since version 4.0 (replica sets) and 4.2 (sharded clusters). Spring Data MongoDB integrates with Spring's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.repository.MongoRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface OrderRepository extends MongoRepository<Order, String> {\n\n    List<Order> findByUserId(String userId);\n\n    List<Order> findByStatus(String status);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.mongodb.core.mapping.Document;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@Document(collection = \"orders\")\npublic class Order {\n\n    @Id\n    private String id;\n    private String userId;\n    private List<OrderItem> items;\n    private BigDecimal total;\n    private String status;\n    private LocalDateTime createdAt;\n\n    public Order() {}\n\n    public Order(String userId, List<OrderItem> items, BigDecimal total) {\n        this.userId = userId;\n        this.items = items;\n        this.total = total;\n        this.status = \"PENDING\";\n        this.createdAt = LocalDateTime.now();\n    }\n\n    public String getId() { return id; }\n    public void setId(String id) { this.id = id; }\n\n    public String getUserId() { return userId; }\n    public void setUserId(String userId) { this.userId = userId; }\n\n    public List<OrderItem> getItems() { return items; }\n    public void setItems(List<OrderItem> items) { this.items = items; }\n\n    public BigDecimal getTotal() { return total; }\n    public void setTotal(BigDecimal total) { this.total = total; }\n\n    public String getStatus() { return status; }\n    public void setStatus(String status) { this.status = status; }\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n}\n\nclass OrderItem {\n    private String productId;\n    private String productName;\n    private int quantity;\n    private BigDecimal unitPrice;\n\n    public OrderItem() {}\n\n    public OrderItem(String productId, String productName, int quantity, BigDecimal unitPrice) {\n        this.productId = productId;\n        this.productName = productName;\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n    }\n\n    public String getProductId() { return productId; }\n    public void setProductId(String productId) { this.productId = productId; }\n\n    public String getProductName() { return productName; }\n    public void setProductName(String productName) { this.productName = productName; }\n\n    public int getQuantity() { return quantity; }\n    public void setQuantity(int quantity) { this.quantity = quantity; }\n\n    public BigDecimal getUnitPrice() { return unitPrice; }\n    public void setUnitPrice(BigDecimal unitPrice) { this.unitPrice = unitPrice; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.mongo;\n\nimport org.springframework.data.mongodb.core.MongoTemplate;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.math.BigDecimal;\n\n@Service\npublic class OrderService {\n\n    private final OrderRepository orderRepository;\n    private final ProductRepository productRepository;\n    private final MongoTemplate mongoTemplate;\n\n    public OrderService(OrderRepository orderRepository,\n                        ProductRepository productRepository,\n                        MongoTemplate mongoTemplate) {\n        this.orderRepository = orderRepository;\n        this.productRepository = productRepository;\n        this.mongoTemplate = mongoTemplate;\n    }\n\n    @Transactional\n    public Order placeOrder(String userId, String productId, int quantity) {\n        Product product = productRepository.findById(productId)\n            .orElseThrow(() -> new RuntimeException(\"Product not found\"));\n\n        if (product.getStock() < quantity) {\n            throw new RuntimeException(\"Insufficient stock\");\n        }\n\n        product.setStock(product.getStock() - quantity);\n        productRepository.save(product);\n\n        BigDecimal total = product.getPrice().multiply(BigDecimal.valueOf(quantity));\n        OrderItem item = new OrderItem(productId, product.getName(), quantity, product.getPrice());\n        Order order = new Order(userId, List.of(item), total);\n\n        return orderRepository.save(order);\n    }\n\n    @Transactional\n    public void cancelOrder(String orderId) {\n        Order order = orderRepository.findById(orderId)\n            .orElseThrow(() -> new RuntimeException(\"Order not found\"));\n\n        for (OrderItem item : order.getItems()) {\n            Product product = productRepository.findById(item.getProductId())\n                .orElseThrow(() -> new RuntimeException(\"Product not found\"));\n            product.setStock(product.getStock() + item.getQuantity());\n            productRepository.save(product);\n        }\n\n        order.setStatus(\"CANCELLED\");\n        orderRepository.save(order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-configuration",
      children: "Application Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class NoSqlCourseApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NoSqlCourseApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "redis-with-spring-data",
      children: "Redis with Spring Data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Redis is an in-memory data structure store supporting strings, hashes, lists, sets, sorted sets, streams, and more. Spring Data Redis provides two access patterns: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RedisTemplate"
      }), " for imperative operations and repositories for domain-driven CRUD."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-1",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n<!-- Optional: Redis connection pool -->\n<dependency>\n    <groupId>org.apache.commons</groupId>\n    <artifactId>commons-pool2</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  data:\n    redis:\n      host: localhost\n      port: 6379\n      password:\n      timeout: 2000ms\n      lettuce:\n        pool:\n          max-active: 16\n          max-idle: 8\n          min-idle: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redistemplate",
      children: "RedisTemplate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RedisTemplate"
      }), " provides type-safe operations for every Redis data type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.redis.core.*;\nimport org.springframework.stereotype.Service;\n\nimport java.time.Duration;\nimport java.util.*;\nimport java.util.concurrent.TimeUnit;\n\n@Service\npublic class RedisExampleService {\n\n    private final StringRedisTemplate stringRedisTemplate;\n    private final RedisTemplate<String, Object> redisTemplate;\n\n    public RedisExampleService(StringRedisTemplate stringRedisTemplate,\n                               RedisTemplate<String, Object> redisTemplate) {\n        this.stringRedisTemplate = stringRedisTemplate;\n        this.redisTemplate = redisTemplate;\n    }\n\n    // String operations\n    public void setString(String key, String value) {\n        stringRedisTemplate.opsForValue().set(key, value);\n    }\n\n    public void setStringWithExpiry(String key, String value, long timeout, TimeUnit unit) {\n        stringRedisTemplate.opsForValue().set(key, value, timeout, unit);\n    }\n\n    public String getString(String key) {\n        return stringRedisTemplate.opsForValue().get(key);\n    }\n\n    public Long increment(String key) {\n        return stringRedisTemplate.opsForValue().increment(key);\n    }\n\n    public Long incrementBy(String key, long delta) {\n        return stringRedisTemplate.opsForValue().increment(key, delta);\n    }\n\n    public Double incrementDouble(String key, double delta) {\n        return stringRedisTemplate.opsForValue().increment(key, delta);\n    }\n\n    // List operations\n    public Long pushToList(String key, String... values) {\n        return stringRedisTemplate.opsForList().rightPushAll(key, values);\n    }\n\n    public String popFromList(String key) {\n        return stringRedisTemplate.opsForList().leftPop(key);\n    }\n\n    public List<String> getListRange(String key, long start, long end) {\n        return stringRedisTemplate.opsForList().range(key, start, end);\n    }\n\n    // Set operations\n    public Long addToSet(String key, String... values) {\n        return stringRedisTemplate.opsForSet().add(key, values);\n    }\n\n    public Set<String> getSetMembers(String key) {\n        return stringRedisTemplate.opsForSet().members(key);\n    }\n\n    public Boolean isSetMember(String key, String value) {\n        return stringRedisTemplate.opsForSet().isMember(key, value);\n    }\n\n    public Set<String> intersectSets(String key1, String key2) {\n        return stringRedisTemplate.opsForSet().intersect(key1, key2);\n    }\n\n    // Sorted set operations\n    public Boolean addToSortedSet(String key, String value, double score) {\n        return stringRedisTemplate.opsForZSet().add(key, value, score);\n    }\n\n    public Set<String> getTopFromSortedSet(String key, long count) {\n        return stringRedisTemplate.opsForZSet().reverseRange(key, 0, count - 1);\n    }\n\n    public Double getScore(String key, String value) {\n        return stringRedisTemplate.opsForZSet().score(key, value);\n    }\n\n    public Long getRank(String key, String value) {\n        return stringRedisTemplate.opsForZSet().rank(key, value);\n    }\n\n    public Set<String> getRangeByScore(String key, double min, double max) {\n        return stringRedisTemplate.opsForZSet().rangeByScore(key, min, max);\n    }\n\n    // Hash operations\n    public void putHash(String key, String hashKey, String value) {\n        stringRedisTemplate.opsForHash().put(key, hashKey, value);\n    }\n\n    public String getHash(String key, String hashKey) {\n        return (String) stringRedisTemplate.opsForHash().get(key, hashKey);\n    }\n\n    public Map<Object, Object> getAllHash(String key) {\n        return stringRedisTemplate.opsForHash().entries(key);\n    }\n\n    public Set<Object> getHashKeys(String key) {\n        return stringRedisTemplate.opsForHash().keys(key);\n    }\n\n    public List<Object> getHashValues(String key) {\n        return stringRedisTemplate.opsForHash().values(key);\n    }\n\n    // Key operations\n    public Boolean expire(String key, long timeout, TimeUnit unit) {\n        return stringRedisTemplate.expire(key, timeout, unit);\n    }\n\n    public Long getExpire(String key, TimeUnit unit) {\n        return stringRedisTemplate.getExpire(key, unit);\n    }\n\n    public Boolean delete(String key) {\n        return stringRedisTemplate.delete(key);\n    }\n\n    public Long deleteMany(Collection<String> keys) {\n        return stringRedisTemplate.delete(keys);\n    }\n\n    public Boolean hasKey(String key) {\n        return stringRedisTemplate.hasKey(key);\n    }\n\n    public Set<String> keys(String pattern) {\n        return stringRedisTemplate.keys(pattern);\n    }\n\n    public void rename(String oldKey, String newKey) {\n        stringRedisTemplate.rename(oldKey, newKey);\n    }\n\n    // Atomic operations with TTL\n    public Boolean setIfAbsent(String key, String value, long timeout, TimeUnit unit) {\n        return stringRedisTemplate.opsForValue()\n            .setIfAbsent(key, value, timeout, unit);\n    }\n\n    // Batch operations\n    public void multiSet(Map<String, String> map) {\n        stringRedisTemplate.opsForValue().multiSet(map);\n    }\n\n    public List<String> multiGet(List<String> keys) {\n        List<String> values = stringRedisTemplate.opsForValue().multiGet(keys);\n        return values == null ? List.of() : values;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redishash-and-spring-data-repositories",
      children: "@RedisHash and Spring Data Repositories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data Redis supports domain object mapping via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RedisHash"
      }), ", with keyspace-based expiration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.redis.core.RedisHash;\nimport org.springframework.data.redis.core.index.Indexed;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@RedisHash(\"sessions\")\npublic class UserSession {\n\n    @Id\n    private String sessionId;\n\n    @Indexed\n    private String userId;\n\n    private String username;\n    private String ipAddress;\n    private List<String> roles;\n    private LocalDateTime loginTime;\n    private LocalDateTime lastAccessTime;\n    private boolean active;\n\n    public UserSession() {}\n\n    public UserSession(String sessionId, String userId, String username) {\n        this.sessionId = sessionId;\n        this.userId = userId;\n        this.username = username;\n        this.loginTime = LocalDateTime.now();\n        this.lastAccessTime = LocalDateTime.now();\n        this.active = true;\n    }\n\n    public String getSessionId() { return sessionId; }\n    public void setSessionId(String sessionId) { this.sessionId = sessionId; }\n\n    public String getUserId() { return userId; }\n    public void setUserId(String userId) { this.userId = userId; }\n\n    public String getUsername() { return username; }\n    public void setUsername(String username) { this.username = username; }\n\n    public String getIpAddress() { return ipAddress; }\n    public void setIpAddress(String ipAddress) { this.ipAddress = ipAddress; }\n\n    public List<String> getRoles() { return roles; }\n    public void setRoles(List<String> roles) { this.roles = roles; }\n\n    public LocalDateTime getLoginTime() { return loginTime; }\n    public void setLoginTime(LocalDateTime loginTime) { this.loginTime = loginTime; }\n\n    public LocalDateTime getLastAccessTime() { return lastAccessTime; }\n    public void setLastAccessTime(LocalDateTime lastAccessTime) { this.lastAccessTime = lastAccessTime; }\n\n    public boolean isActive() { return active; }\n    public void setActive(boolean active) { this.active = active; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The repository interface follows the same pattern as JPA:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Repository\npublic interface SessionRepository extends CrudRepository<UserSession, String> {\n\n    Optional<UserSession> findByUserId(String userId);\n\n    List<UserSession> findByActive(boolean active);\n\n    List<UserSession> findByIpAddress(String ipAddress);\n\n    List<UserSession> findByRolesContaining(String role);\n\n    long countByActive(boolean active);\n\n    void deleteByUserId(String userId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expiry is configured both on the repository and on individual keys:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.stereotype.Service;\n\nimport java.time.Duration;\nimport java.util.Optional;\n\n@Service\npublic class SessionService {\n\n    private final SessionRepository sessionRepository;\n    private final RedisExampleService redisService;\n\n    public SessionService(SessionRepository sessionRepository,\n                          RedisExampleService redisService) {\n        this.sessionRepository = sessionRepository;\n        this.redisService = redisService;\n    }\n\n    public UserSession createSession(String sessionId, String userId, String username) {\n        UserSession session = new UserSession(sessionId, userId, username);\n        UserSession saved = sessionRepository.save(session);\n        // The @RedisHash(timeToLive = ...) handles TTL at the keyspace level\n        return saved;\n    }\n\n    public Optional<UserSession> getSession(String sessionId) {\n        return sessionRepository.findById(sessionId).map(session -> {\n            session.setLastAccessTime(java.time.LocalDateTime.now());\n            sessionRepository.save(session);\n            return session;\n        });\n    }\n\n    public void invalidateSession(String sessionId) {\n        sessionRepository.deleteById(sessionId);\n    }\n\n    public void invalidateUserSessions(String userId) {\n        sessionRepository.deleteByUserId(userId);\n    }\n\n    public long countActiveSessions() {\n        return sessionRepository.countByActive(true);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-pubsub",
      children: "Redis Pub/Sub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data Redis supports publish/subscribe messaging with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RedisMessageListenerContainer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.listener.ChannelTopic;\nimport org.springframework.data.redis.listener.RedisMessageListenerContainer;\nimport org.springframework.data.redis.listener.adapter.MessageListenerAdapter;\n\n@Configuration\npublic class RedisPubSubConfig {\n\n    public static final String CHANNEL_NOTIFICATIONS = \"notifications\";\n    public static final String CHANNEL_ALERTS = \"alerts\";\n\n    @Bean\n    public RedisMessageListenerContainer redisMessageListenerContainer(\n            RedisConnectionFactory connectionFactory,\n            MessageListenerAdapter notificationListener,\n            MessageListenerAdapter alertListener) {\n\n        RedisMessageListenerContainer container = new RedisMessageListenerContainer();\n        container.setConnectionFactory(connectionFactory);\n        container.addMessageListener(notificationListener,\n            new ChannelTopic(CHANNEL_NOTIFICATIONS));\n        container.addMessageListener(alertListener,\n            new ChannelTopic(CHANNEL_ALERTS));\n        return container;\n    }\n\n    @Bean\n    public MessageListenerAdapter notificationListener(\n            NotificationMessageHandler handler) {\n        return new MessageListenerAdapter(handler, \"handleMessage\");\n    }\n\n    @Bean\n    public MessageListenerAdapter alertListener(\n            AlertMessageHandler handler) {\n        return new MessageListenerAdapter(handler, \"handleMessage\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.redis.connection.Message;\nimport org.springframework.data.redis.connection.MessageListener;\nimport org.springframework.stereotype.Service;\n\nimport java.nio.charset.StandardCharsets;\n\n@Service\npublic class NotificationMessageHandler implements MessageListener {\n\n    @Override\n    public void onMessage(Message message, byte[] pattern) {\n        String channel = new String(message.getChannel(), StandardCharsets.UTF_8);\n        String body = new String(message.getBody(), StandardCharsets.UTF_8);\n        System.out.println(\"Received notification on channel '\" + channel + \"': \" + body);\n    }\n\n    public void handleMessage(String message) {\n        System.out.println(\"Handling notification: \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.redis.connection.Message;\nimport org.springframework.data.redis.connection.MessageListener;\nimport org.springframework.stereotype.Service;\n\nimport java.nio.charset.StandardCharsets;\n\n@Service\npublic class AlertMessageHandler implements MessageListener {\n\n    @Override\n    public void onMessage(Message message, byte[] pattern) {\n        String channel = new String(message.getChannel(), StandardCharsets.UTF_8);\n        String body = new String(message.getBody(), StandardCharsets.UTF_8);\n        System.err.println(\"ALERT on '\" + channel + \"': \" + body);\n    }\n\n    public void handleMessage(String message) {\n        System.err.println(\"Handling alert: \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Publishing messages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class RedisPublisherService {\n\n    private final RedisTemplate<String, Object> redisTemplate;\n\n    public RedisPublisherService(RedisTemplate<String, Object> redisTemplate) {\n        this.redisTemplate = redisTemplate;\n    }\n\n    public void publishNotification(String message) {\n        redisTemplate.convertAndSend(\n            RedisPubSubConfig.CHANNEL_NOTIFICATIONS, message);\n    }\n\n    public void publishAlert(String alert) {\n        redisTemplate.convertAndSend(\n            RedisPubSubConfig.CHANNEL_ALERTS, alert);\n    }\n\n    public void publishObject(String channel, Object payload) {\n        redisTemplate.convertAndSend(channel, payload);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rediscachemanager",
      children: "RedisCacheManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot auto-configures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RedisCacheManager"
      }), " when Redis is on the classpath. Customize it for fine-grained expiry policies per cache region."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.cache.CacheManager;\nimport org.springframework.cache.annotation.CachingConfigurer;\nimport org.springframework.cache.annotation.EnableCaching;\nimport org.springframework.cache.interceptor.KeyGenerator;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.data.redis.cache.RedisCacheConfiguration;\nimport org.springframework.data.redis.cache.RedisCacheManager;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;\nimport org.springframework.data.redis.serializer.RedisSerializationContext;\nimport org.springframework.data.redis.serializer.StringRedisSerializer;\n\nimport java.time.Duration;\nimport java.util.Map;\n\n@Configuration\n@EnableCaching\npublic class RedisCacheConfig implements CachingConfigurer {\n\n    @Bean\n    @Override\n    public CacheManager cacheManager() {\n        RedisCacheConfiguration defaultConfig = RedisCacheConfiguration\n            .defaultCacheConfig()\n            .disableCachingNullValues()\n            .entryTtl(Duration.ofMinutes(10))\n            .serializeKeysWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new StringRedisSerializer()))\n            .serializeValuesWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new GenericJackson2JsonRedisSerializer()));\n\n        Map<String, RedisCacheConfiguration> cacheConfigs = Map.of(\n            \"products\", RedisCacheConfiguration.defaultCacheConfig()\n                .entryTtl(Duration.ofMinutes(5)),\n            \"sessions\", RedisCacheConfiguration.defaultCacheConfig()\n                .entryTtl(Duration.ofHours(1)),\n            \"rateLimits\", RedisCacheConfiguration.defaultCacheConfig()\n                .entryTtl(Duration.ofSeconds(10)),\n            \"staticData\", RedisCacheConfiguration.defaultCacheConfig()\n                .entryTtl(Duration.ofDays(1))\n        );\n\n        return RedisCacheManager.builder(redisConnectionFactory)\n            .cacheDefaults(defaultConfig)\n            .withInitialCacheConfigurations(cacheConfigs)\n            .transactionAware()\n            .build();\n    }\n\n    private final RedisConnectionFactory redisConnectionFactory;\n\n    public RedisCacheConfig(RedisConnectionFactory redisConnectionFactory) {\n        this.redisConnectionFactory = redisConnectionFactory;\n    }\n\n    @Bean\n    @Override\n    public KeyGenerator keyGenerator() {\n        return (target, method, params) -> {\n            StringBuilder sb = new StringBuilder();\n            sb.append(target.getClass().getSimpleName());\n            sb.append(\".\").append(method.getName());\n            for (Object param : params) {\n                sb.append(\".\").append(param == null ? \"null\" : param.toString());\n            }\n            return sb.toString();\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the cache:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport com.course.nosql.mongo.Product;\nimport com.course.nosql.mongo.ProductRepository;\nimport org.springframework.cache.annotation.CacheEvict;\nimport org.springframework.cache.annotation.CachePut;\nimport org.springframework.cache.annotation.Cacheable;\nimport org.springframework.stereotype.Service;\n\nimport java.util.Optional;\n\n@Service\npublic class ProductCacheService {\n\n    private final ProductRepository productRepository;\n\n    public ProductCacheService(ProductRepository productRepository) {\n        this.productRepository = productRepository;\n    }\n\n    @Cacheable(value = \"products\", key = \"#id\")\n    public Optional<Product> getProductCached(String id) {\n        simulateSlowService();\n        return productRepository.findById(id);\n    }\n\n    @Cacheable(value = \"products\", key = \"#name\", unless = \"#result == null\")\n    public Optional<Product> getProductByNameCached(String name) {\n        simulateSlowService();\n        return productRepository.findByName(name);\n    }\n\n    @CachePut(value = \"products\", key = \"#product.id\")\n    public Product updateProductCache(Product product) {\n        return productRepository.save(product);\n    }\n\n    @CacheEvict(value = \"products\", key = \"#id\")\n    public void evictProductCache(String id) {\n    }\n\n    @CacheEvict(value = \"products\", allEntries = true)\n    public void evictAllProductCaches() {\n    }\n\n    @Cacheable(value = \"rateLimits\", key = \"#clientId\")\n    public Integer getRateLimit(String clientId) {\n        return 100;\n    }\n\n    private void simulateSlowService() {\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-streams",
      children: "Redis Streams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Redis Streams is a log-like data structure supporting consumer groups. Spring Data Redis provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamMessageListenerContainer"
      }), " for consuming streams."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.connection.stream.*;\nimport org.springframework.data.redis.stream.StreamMessageListenerContainer;\nimport org.springframework.data.redis.stream.Subscription;\n\nimport java.time.Duration;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\n@Configuration\npublic class RedisStreamConfig {\n\n    public static final String STREAM_ORDERS = \"stream:orders\";\n    public static final String CONSUMER_GROUP = \"order-processors\";\n\n    @Bean\n    public ExecutorService streamExecutor() {\n        return Executors.newFixedThreadPool(4);\n    }\n\n    @Bean(initMethod = \"start\", destroyMethod = \"stop\")\n    public StreamMessageListenerContainer<String, ObjectRecord<String, OrderEvent>>\n            orderStreamContainer(RedisConnectionFactory connectionFactory,\n                                 OrderStreamListener streamListener,\n                                 ExecutorService streamExecutor) {\n\n        var options = StreamMessageListenerContainer\n            .StreamMessageListenerContainerOptions\n            .builder()\n            .pollTimeout(Duration.ofMillis(100))\n            .batchSize(10)\n            .executor(streamExecutor)\n            .targetType(OrderEvent.class)\n            .build();\n\n        var container = StreamMessageListenerContainer\n            .create(connectionFactory, options);\n\n        var readRequest = StreamReadRequest\n            .builder(StreamOffset.create(STREAM_ORDERS, ReadOffset.lastConsumed()))\n            .consumer(Consumer.from(CONSUMER_GROUP, \"processor-1\"))\n            .autoAcknowledge(false)\n            .build();\n\n        container.register(readRequest, streamListener);\n        return container;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.redis.connection.stream.ObjectRecord;\nimport org.springframework.data.redis.stream.StreamListener;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class OrderStreamListener implements\n        StreamListener<String, ObjectRecord<String, OrderEvent>> {\n\n    @Override\n    public void onMessage(ObjectRecord<String, OrderEvent> record) {\n        OrderEvent event = record.getValue();\n        System.out.println(\"Processing order: \" + event.getOrderId()\n            + \" status: \" + event.getStatus());\n\n        try {\n            Thread.sleep(500);\n            System.out.println(\"Order \" + event.getOrderId() + \" processed successfully\");\n        } catch (Exception e) {\n            System.err.println(\"Failed to process order \" + event.getOrderId());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\n\npublic class OrderEvent {\n\n    private String orderId;\n    private String userId;\n    private BigDecimal total;\n    private String status;\n    private LocalDateTime timestamp;\n\n    public OrderEvent() {}\n\n    public OrderEvent(String orderId, String userId, BigDecimal total, String status) {\n        this.orderId = orderId;\n        this.userId = userId;\n        this.total = total;\n        this.status = status;\n        this.timestamp = LocalDateTime.now();\n    }\n\n    public String getOrderId() { return orderId; }\n    public void setOrderId(String orderId) { this.orderId = orderId; }\n\n    public String getUserId() { return userId; }\n    public void setUserId(String userId) { this.userId = userId; }\n\n    public BigDecimal getTotal() { return total; }\n    public void setTotal(BigDecimal total) { this.total = total; }\n\n    public String getStatus() { return status; }\n    public void setStatus(String status) { this.status = status; }\n\n    public LocalDateTime getTimestamp() { return timestamp; }\n    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.data.redis.connection.stream.ObjectRecord;\nimport org.springframework.data.redis.connection.stream.RecordId;\nimport org.springframework.data.redis.connection.stream.StreamRecords;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class OrderStreamPublisher {\n\n    private final RedisTemplate<String, Object> redisTemplate;\n\n    public OrderStreamPublisher(RedisTemplate<String, Object> redisTemplate) {\n        this.redisTemplate = redisTemplate;\n    }\n\n    public RecordId publishOrderEvent(OrderEvent event) {\n        ObjectRecord<String, OrderEvent> record = StreamRecords\n            .objectBacked(event)\n            .withStreamKey(RedisStreamConfig.STREAM_ORDERS);\n        return redisTemplate.opsForStream().add(record);\n    }\n\n    public Long getStreamLength() {\n        return redisTemplate.opsForStream().size(RedisStreamConfig.STREAM_ORDERS);\n    }\n\n    public void createConsumerGroup() {\n        redisTemplate.opsForStream().createGroup(\n            RedisStreamConfig.STREAM_ORDERS,\n            RedisStreamConfig.CONSUMER_GROUP\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redis-configuration",
      children: "Redis Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.redis;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.data.redis.repository.configuration.EnableRedisRepositories;\nimport org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;\nimport org.springframework.data.redis.serializer.StringRedisSerializer;\n\n@Configuration\n@EnableRedisRepositories(basePackages = \"com.course.nosql.redis\")\npublic class RedisConfig {\n\n    @Bean\n    public RedisTemplate<String, Object> redisTemplate(\n            RedisConnectionFactory connectionFactory) {\n        RedisTemplate<String, Object> template = new RedisTemplate<>();\n        template.setConnectionFactory(connectionFactory);\n        template.setKeySerializer(new StringRedisSerializer());\n        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());\n        template.setHashKeySerializer(new StringRedisSerializer());\n        template.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());\n        template.setDefaultSerializer(new GenericJackson2JsonRedisSerializer());\n        template.afterPropertiesSet();\n        return template;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "elasticsearch-with-spring-data",
      children: "Elasticsearch with Spring Data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Elasticsearch is a distributed full-text search and analytics engine. Spring Data Elasticsearch provides a repository abstraction and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ElasticsearchTemplate"
      }), " for lower-level operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-2",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  elasticsearch:\n    uris:\n      - http://localhost:9200\n    connection-timeout: 10s\n    socket-timeout: 30s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "document-modeling-1",
      children: "Document Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.elastic;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.elasticsearch.annotations.DateFormat;\nimport org.springframework.data.elasticsearch.annotations.Document;\nimport org.springframework.data.elasticsearch.annotations.Field;\nimport org.springframework.data.elasticsearch.annotations.FieldType;\nimport org.springframework.data.elasticsearch.annotations.Mapping;\nimport org.springframework.data.elasticsearch.annotations.Setting;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\n\n@Document(indexName = \"articles\", createIndex = true)\n@Setting(settingPath = \"elastic/article-settings.json\")\n@Mapping(mappingPath = \"elastic/article-mappings.json\")\npublic class Article {\n\n    @Id\n    private String id;\n\n    @Field(type = FieldType.Text, analyzer = \"standard\", searchAnalyzer = \"standard\")\n    private String title;\n\n    @Field(type = FieldType.Text, analyzer = \"english\")\n    private String content;\n\n    @Field(type = FieldType.Keyword)\n    private String author;\n\n    @Field(type = FieldType.Keyword)\n    private List<String> tags;\n\n    @Field(type = FieldType.Keyword)\n    private String category;\n\n    @Field(type = FieldType.Integer)\n    private Integer viewCount;\n\n    @Field(type = FieldType.Double)\n    private Double rating;\n\n    @Field(type = FieldType.Boolean)\n    private Boolean published;\n\n    @Field(type = FieldType.Date, format = DateFormat.date_hour_minute_second)\n    private LocalDateTime publishedAt;\n\n    @Field(type = FieldType.Date, format = DateFormat.date_hour_minute_second)\n    private LocalDateTime createdAt;\n\n    @Field(type = FieldType.Completion)\n    private String suggest;\n\n    public Article() {}\n\n    public Article(String title, String content, String author, String category) {\n        this.title = title;\n        this.content = content;\n        this.author = author;\n        this.category = category;\n        this.createdAt = LocalDateTime.now();\n        this.published = false;\n        this.viewCount = 0;\n        this.rating = 0.0;\n    }\n\n    public String getId() { return id; }\n    public void setId(String id) { this.id = id; }\n\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n\n    public String getContent() { return content; }\n    public void setContent(String content) { this.content = content; }\n\n    public String getAuthor() { return author; }\n    public void setAuthor(String author) { this.author = author; }\n\n    public List<String> getTags() { return tags; }\n    public void setTags(List<String> tags) { this.tags = tags; }\n\n    public String getCategory() { return category; }\n    public void setCategory(String category) { this.category = category; }\n\n    public Integer getViewCount() { return viewCount; }\n    public void setViewCount(Integer viewCount) { this.viewCount = viewCount; }\n\n    public Double getRating() { return rating; }\n    public void setRating(Double rating) { this.rating = rating; }\n\n    public Boolean getPublished() { return published; }\n    public void setPublished(Boolean published) { this.published = published; }\n\n    public LocalDateTime getPublishedAt() { return publishedAt; }\n    public void setPublishedAt(LocalDateTime publishedAt) { this.publishedAt = publishedAt; }\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n\n    public String getSuggest() { return suggest; }\n    public void setSuggest(String suggest) { this.suggest = suggest; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "elasticsearchrepository",
      children: "ElasticsearchRepository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.elastic;\n\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.elasticsearch.annotations.Query;\nimport org.springframework.data.elasticsearch.repository.ElasticsearchRepository;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\n\n@Repository\npublic interface ArticleRepository extends ElasticsearchRepository<Article, String> {\n\n    List<Article> findByAuthor(String author);\n\n    Page<Article> findByCategory(String category, Pageable pageable);\n\n    List<Article> findByTagsIn(List<String> tags);\n\n    List<Article> findByPublishedTrue();\n\n    List<Article> findByRatingGreaterThanEqual(Double minRating);\n\n    List<Article> findByTitleContainingIgnoreCase(String title);\n\n    Page<Article> findByTitleContainingOrContentContaining(\n            String title, String content, Pageable pageable);\n\n    @Query(\"{\\\"match\\\": {\\\"author\\\": \\\"?0\\\"}}\")\n    List<Article> findByAuthorUsingQuery(String author);\n\n    @Query(\"\"\"\n        {\n            \"bool\": {\n                \"must\": [\n                    { \"match\": { \"category\": \"?0\" } },\n                    { \"range\": { \"rating\": { \"gte\": ?1 } } }\n                ]\n            }\n        }\n        \"\"\")\n    List<Article> findByCategoryAndMinRating(String category, Double minRating);\n\n    @Query(\"\"\"\n        {\n            \"multi_match\": {\n                \"query\": \"?0\",\n                \"fields\": [\"title^3\", \"content^2\", \"tags\"],\n                \"type\": \"best_fields\"\n            }\n        }\n        \"\"\")\n    Page<Article> searchFullText(String query, Pageable pageable);\n\n    @Query(\"\"\"\n        {\n            \"bool\": {\n                \"must\": [\n                    { \"term\": { \"published\": true } }\n                ],\n                \"filter\": [\n                    { \"range\": { \"viewCount\": { \"gte\": ?0 } } }\n                ]\n            }\n        }\n        \"\"\")\n    List<Article> findPopularPublished(Integer minViews);\n\n    @Query(\"\"\"\n        {\n            \"function_score\": {\n                \"query\": { \"match\": { \"content\": \"?0\" } },\n                \"field_value_factor\": {\n                    \"field\": \"viewCount\",\n                    \"modifier\": \"log1p\",\n                    \"factor\": 0.5\n                },\n                \"boost_mode\": \"sum\"\n            }\n        }\n        \"\"\")\n    List<Article> searchWithPopularityBoost(String term);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "elasticsearchtemplate",
      children: "ElasticsearchTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.elastic;\n\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;\nimport org.springframework.data.elasticsearch.client.elc.NativeQuery;\nimport org.springframework.data.elasticsearch.client.elc.NativeQueryBuilder;\nimport org.springframework.data.elasticsearch.core.SearchHit;\nimport org.springframework.data.elasticsearch.core.SearchHits;\nimport org.springframework.data.elasticsearch.core.query.Query;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\npublic class ArticleSearchService {\n\n    private final ElasticsearchTemplate elasticsearchTemplate;\n\n    public ArticleSearchService(ElasticsearchTemplate elasticsearchTemplate) {\n        this.elasticsearchTemplate = elasticsearchTemplate;\n    }\n\n    public List<Article> termQuery(String field, String value) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.term(t -> t.field(field).value(value)))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> matchQuery(String field, String value) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.match(m -> m.field(field).query(value)))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> multiMatchQuery(String text, List<String> fields) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.multiMatch(mm -> {\n                fields.forEach(mm::fields);\n                return mm.query(text);\n            }))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> booleanQuery(String category, Double minRating) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.bool(b -> {\n                b.must(m -> m.term(t -> t.field(\"category\").value(category)));\n                b.filter(f -> f.range(r -> r.field(\"rating\").gte(rating -> minRating)));\n                return b;\n            }))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> fuzzyQuery(String field, String value) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.fuzzy(f -> f.field(field).value(value).fuzziness(\"AUTO\")))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> phraseQuery(String field, String phrase) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.matchPhrase(mp -> mp.field(field).query(phrase)))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> wildcardQuery(String field, String pattern) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.wildcard(w -> w.field(field).value(pattern)))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> rangeQuery(String field, Double gte, Double lte) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.range(r -> {\n                if (gte != null) r.gte(r -> gte.toString());\n                if (lte != null) r.lte(r -> lte.toString());\n                return r.field(field);\n            }))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public List<Article> moreLikeThisQuery(String text) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.moreLikeThis(mlt -> mlt\n                .like(l -> l.text(text))\n                .minTermFreq(1)\n                .minDocFreq(1)))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class)\n            .stream()\n            .map(SearchHit::getContent)\n            .toList();\n    }\n\n    public SearchHits<Article> searchWithHighlight(String field, String value) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.match(m -> m.field(field).query(value)))\n            .withHighlight(h -> h.fields(field, f -> f.preTags(\"<em>\").postTags(\"</em>\")))\n            .build();\n\n        return elasticsearchTemplate.search(query, Article.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-text-search",
      children: "Full-Text Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.elastic;\n\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.data.elasticsearch.core.ElasticsearchOperations;\nimport org.springframework.data.elasticsearch.core.SearchHit;\nimport org.springframework.data.elasticsearch.core.SearchHits;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n@Service\npublic class FullTextSearchService {\n\n    private final ArticleRepository articleRepository;\n    private final ElasticsearchOperations elasticsearchOperations;\n\n    public FullTextSearchService(ArticleRepository articleRepository,\n                                  ElasticsearchOperations elasticsearchOperations) {\n        this.articleRepository = articleRepository;\n        this.elasticsearchOperations = elasticsearchOperations;\n    }\n\n    public List<Article> search(String query, int page, int size) {\n        return articleRepository.searchFullText(\n            query, PageRequest.of(page, size)).getContent();\n    }\n\n    public List<Article> searchWithBoost(String term) {\n        return articleRepository.searchWithPopularityBoost(term);\n    }\n\n    public List<Article> searchByCategory(String category, Double minRating) {\n        return articleRepository.findByCategoryAndMinRating(category, minRating);\n    }\n\n    public List<String> getSuggestions(String prefix) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.matchAll(ma -> ma))\n            .withSuggest(s -> s.suggest(\"title-suggest\", sg -> sg\n                .prefix(prefix)\n                .completion(c -> c.field(\"suggest\"))))\n            .build();\n\n        return elasticsearchOperations.search(query, Article.class)\n            .getSuggest()\n            .getSuggestion(\"title-suggest\")\n            .getEntries()\n            .stream()\n            .flatMap(e -> e.getOptions().stream())\n            .map(o -> o.getText().string())\n            .toList();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aggregations",
      children: "Aggregations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.elastic;\n\nimport co.elastic.clients.elasticsearch._types.aggregations.StringTermsBucket;\nimport org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;\nimport org.springframework.data.elasticsearch.client.elc.NativeQuery;\nimport org.springframework.data.elasticsearch.client.elc.NativeQueryBuilder;\nimport org.springframework.data.elasticsearch.core.AggregationsContainer;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Map;\n\n@Service\npublic class ArticleAggregationService {\n\n    private final ElasticsearchTemplate elasticsearchTemplate;\n\n    public ArticleAggregationService(ElasticsearchTemplate elasticsearchTemplate) {\n        this.elasticsearchTemplate = elasticsearchTemplate;\n    }\n\n    public List<Map.Entry<String, Long>> categoryCounts() {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.matchAll(ma -> ma))\n            .withAggregation(\"by_category\", a -> a\n                .terms(t -> t.field(\"category\").size(20)))\n            .build();\n\n        AggregationsContainer<?> aggs = elasticsearchTemplate\n            .aggregate(query, Article.class);\n\n        var termsAgg = aggs.aggregations()\n            .get(\"by_category\")\n            .aggregation()\n            .getAggregate()\n            .sterms();\n\n        return termsAgg.buckets().array().stream()\n            .map(b -> Map.entry(b.key().stringValue(), b.docCount()))\n            .toList();\n    }\n\n    public Map<String, Object> statsByCategory() {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.matchAll(ma -> ma))\n            .withAggregation(\"category_stats\", a -> a\n                .terms(t -> t.field(\"category\"))\n                .aggregations(\"rating_stats\", sa -> sa\n                    .stats(st -> st.field(\"rating\")))\n                .aggregations(\"views_stats\", sa -> sa\n                    .stats(st -> st.field(\"viewCount\"))))\n            .build();\n\n        AggregationsContainer<?> aggs = elasticsearchTemplate\n            .aggregate(query, Article.class);\n\n        var bucketAgg = aggs.aggregations()\n            .get(\"category_stats\")\n            .aggregation()\n            .getAggregate()\n            .sterms();\n\n        return bucketAgg.buckets().array().stream()\n            .collect(Collectors.toMap(\n                b -> b.key().stringValue(),\n                b -> Map.of(\n                    \"docCount\", b.docCount(),\n                    \"ratingStats\", b.aggregations().get(\"rating_stats\").stStats(),\n                    \"viewsStats\", b.aggregations().get(\"views_stats\").stStats()\n                )\n            ));\n    }\n\n    public Map<String, Object> dateHistogram(String interval) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.matchAll(ma -> ma))\n            .withAggregation(\"articles_over_time\", a -> a\n                .dateHistogram(dh -> dh\n                    .field(\"publishedAt\")\n                    .calendarInterval(\n                        co.elastic.clients.elasticsearch._types.\n                            aggregate.CalendarInterval.valueOf(interval))))\n            .build();\n\n        AggregationsContainer<?> aggs = elasticsearchTemplate\n            .aggregate(query, Article.class);\n\n        var histAgg = aggs.aggregations()\n            .get(\"articles_over_time\")\n            .aggregation()\n            .getAggregate()\n            .dateHistogram();\n\n        return histAgg.buckets().array().stream()\n            .collect(Collectors.toMap(\n                b -> b.keyAsString(),\n                b -> b.docCount()\n            ));\n    }\n\n    public Map<String, Object> extendedStats(String field) {\n        NativeQuery query = new NativeQueryBuilder()\n            .withQuery(q -> q.matchAll(ma -> ma))\n            .withAggregation(\"field_stats\", a -> a\n                .extendedStats(es -> es.field(field)))\n            .build();\n\n        AggregationsContainer<?> aggs = elasticsearchTemplate\n            .aggregate(query, Article.class);\n\n        var stats = aggs.aggregations()\n            .get(\"field_stats\")\n            .aggregation()\n            .getAggregate()\n            .extendedStats();\n\n        return Map.of(\n            \"count\", stats.count(),\n            \"min\", stats.min(),\n            \"max\", stats.max(),\n            \"avg\", stats.avg(),\n            \"sum\", stats.sum(),\n            \"stdDeviation\", stats.stdDeviation(),\n            \"sumOfSquares\", stats.sumOfSquares()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "index-management-1",
      children: "Index Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.elastic;\n\nimport co.elastic.clients.elasticsearch._types.mapping.Property;\nimport co.elastic.clients.elasticsearch._types.mapping.TypeMapping;\nimport co.elastic.clients.elasticsearch.indices.*;\nimport org.springframework.data.elasticsearch.client.elc.ElasticsearchTemplate;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\npublic class IndexManagementService {\n\n    private final ElasticsearchTemplate elasticsearchTemplate;\n\n    public IndexManagementService(ElasticsearchTemplate elasticsearchTemplate) {\n        this.elasticsearchTemplate = elasticsearchTemplate;\n    }\n\n    public boolean createIndex(String indexName) {\n        return elasticsearchTemplate.indexOps(Article.class).create();\n    }\n\n    public boolean indexExists(String indexName) {\n        return elasticsearchTemplate.indexOps(Article.class).exists();\n    }\n\n    public boolean deleteIndex(String indexName) {\n        return elasticsearchTemplate.indexOps(Article.class).delete();\n    }\n\n    public void refreshIndex() {\n        elasticsearchTemplate.indexOps(Article.class).refresh();\n    }\n\n    public PutMappingResponse putMapping() {\n        return elasticsearchTemplate.indexOps(Article.class)\n            .putMapping();\n    }\n\n    public IndexSettings getSettings() {\n        return elasticsearchTemplate.indexOps(Article.class)\n            .getSettings(true);\n    }\n\n    public void reindex(String sourceIndex, String targetIndex) {\n        elasticsearchTemplate.opsForReindex()\n            .reindex(sourceIndex, targetIndex);\n    }\n\n    public long countDocuments() {\n        return elasticsearchTemplate.count(\n            org.springframework.data.elasticsearch.core.query.Query.findAll(),\n            Article.class\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-model-patterns",
      children: "Multi-Model Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production applications rarely use a single data store. The most common multi-model patterns combine MongoDB, Redis, and Elasticsearch to exploit each database's strengths."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mongodb--redis-for-caching",
      children: "MongoDB + Redis for Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MongoDB is the primary store; Redis caches frequently accessed documents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.multimodel;\n\nimport com.course.nosql.mongo.Product;\nimport com.course.nosql.mongo.ProductRepository;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport org.springframework.data.redis.core.StringRedisTemplate;\nimport org.springframework.stereotype.Service;\n\nimport java.util.Optional;\nimport java.util.concurrent.TimeUnit;\n\n@Service\npublic class CachedProductService {\n\n    private final ProductRepository productRepository;\n    private final StringRedisTemplate redisTemplate;\n    private final ObjectMapper objectMapper;\n\n    public CachedProductService(ProductRepository productRepository,\n                                 StringRedisTemplate redisTemplate,\n                                 ObjectMapper objectMapper) {\n        this.productRepository = productRepository;\n        this.redisTemplate = redisTemplate;\n        this.objectMapper = objectMapper;\n    }\n\n    public Optional<Product> findById(String id) {\n        String cacheKey = \"product:\" + id;\n        String cached = redisTemplate.opsForValue().get(cacheKey);\n\n        if (cached != null) {\n            try {\n                return Optional.of(objectMapper.readValue(cached, Product.class));\n            } catch (Exception e) {\n                redisTemplate.delete(cacheKey);\n            }\n        }\n\n        Optional<Product> product = productRepository.findById(id);\n        product.ifPresent(p -> {\n            try {\n                redisTemplate.opsForValue().set(\n                    cacheKey,\n                    objectMapper.writeValueAsString(p),\n                    10,\n                    TimeUnit.MINUTES\n                );\n            } catch (Exception e) {\n                // Log and continue\n            }\n        });\n\n        return product;\n    }\n\n    public Product save(Product product) {\n        Product saved = productRepository.save(product);\n        String cacheKey = \"product:\" + saved.getId();\n        try {\n            redisTemplate.opsForValue().set(\n                cacheKey,\n                objectMapper.writeValueAsString(saved),\n                10,\n                TimeUnit.MINUTES\n            );\n        } catch (Exception e) {\n            // Log and continue\n        }\n        return saved;\n    }\n\n    public void deleteById(String id) {\n        productRepository.deleteById(id);\n        redisTemplate.delete(\"product:\" + id);\n    }\n\n    public void invalidateCache(String id) {\n        redisTemplate.delete(\"product:\" + id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "elasticsearch--mongodb-for-search",
      children: "Elasticsearch + MongoDB for Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MongoDB is the source of truth; Elasticsearch provides full-text search. A background process synchronizes data from MongoDB to Elasticsearch."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.multimodel;\n\nimport com.course.nosql.elastic.Article;\nimport com.course.nosql.elastic.ArticleRepository;\nimport com.course.nosql.mongo.Product;\nimport com.course.nosql.mongo.ProductRepository;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.scheduling.annotation.Scheduled;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\npublic class SearchIndexSyncService {\n\n    private final ProductRepository productRepository;\n    private final ArticleRepository articleRepository;\n\n    public SearchIndexSyncService(ProductRepository productRepository,\n                                   ArticleRepository articleRepository) {\n        this.productRepository = productRepository;\n        this.articleRepository = articleRepository;\n    }\n\n    @Scheduled(fixedDelay = 60000)\n    public void syncProductsToSearchIndex() {\n        List<Product> products = productRepository.findAll();\n        for (Product product : products) {\n            Article article = new Article(\n                product.getName(),\n                product.getDescription() != null ? product.getDescription() : \"\",\n                \"system\",\n                product.getCategory()\n            );\n            article.setId(\"product_\" + product.getId());\n            article.setTags(product.getTags());\n            article.setPublished(product.getStock() > 0);\n            articleRepository.save(article);\n        }\n    }\n\n    public void indexProduct(Product product) {\n        Article article = new Article(\n            product.getName(),\n            product.getDescription() != null ? product.getDescription() : \"\",\n            \"system\",\n            product.getCategory()\n        );\n        article.setId(\"product_\" + product.getId());\n        article.setTags(product.getTags());\n        article.setPublished(product.getStock() > 0);\n        articleRepository.save(article);\n    }\n\n    public void removeProductFromIndex(String productId) {\n        articleRepository.deleteById(\"product_\" + productId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-store-transaction-pattern",
      children: "Multi-Store Transaction Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A service that spans multiple stores must handle partial failures explicitly. The saga pattern (covered further in the transactions chapter) or compensating actions are required."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.multimodel;\n\nimport com.course.nosql.elastic.Article;\nimport com.course.nosql.elastic.ArticleRepository;\nimport com.course.nosql.mongo.Product;\nimport com.course.nosql.mongo.ProductRepository;\nimport org.springframework.data.redis.core.StringRedisTemplate;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.math.BigDecimal;\n\n@Service\npublic class MultiStoreProductService {\n\n    private final ProductRepository productRepository;\n    private final ArticleRepository articleRepository;\n    private final StringRedisTemplate redisTemplate;\n\n    public MultiStoreProductService(ProductRepository productRepository,\n                                     ArticleRepository articleRepository,\n                                     StringRedisTemplate redisTemplate) {\n        this.productRepository = productRepository;\n        this.articleRepository = articleRepository;\n        this.redisTemplate = redisTemplate;\n    }\n\n    @Transactional\n    public Product createProduct(Product product) {\n        // 1. Save to MongoDB (source of truth)\n        Product saved = productRepository.save(product);\n\n        try {\n            // 2. Index in Elasticsearch\n            Article article = new Article(\n                saved.getName(),\n                saved.getDescription() != null ? saved.getDescription() : \"\",\n                \"system\",\n                saved.getCategory()\n            );\n            article.setId(\"product_\" + saved.getId());\n            article.setTags(saved.getTags());\n            articleRepository.save(article);\n\n            // 3. Cache in Redis\n            redisTemplate.opsForValue().set(\n                \"product:\" + saved.getId(),\n                saved.getName(),\n                java.time.Duration.ofMinutes(10)\n            );\n        } catch (Exception e) {\n            // Compensating action: rollback not automatic across stores\n            productRepository.deleteById(saved.getId());\n            throw new RuntimeException(\"Failed to synchronize product data\", e);\n        }\n\n        return saved;\n    }\n\n    public void deleteProduct(String id) {\n        productRepository.deleteById(id);\n        try {\n            articleRepository.deleteById(\"product_\" + id);\n        } catch (Exception e) {\n            // Log but continue — MongoDB is source of truth\n        }\n        redisTemplate.delete(\"product:\" + id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-model-with-query-service",
      children: "Read Model with Query Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A query service that reads from the fastest store based on the use case:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.nosql.multimodel;\n\nimport com.course.nosql.elastic.Article;\nimport com.course.nosql.elastic.ArticleRepository;\nimport com.course.nosql.elastic.ArticleSearchService;\nimport com.course.nosql.mongo.Product;\nimport com.course.nosql.mongo.ProductRepository;\nimport org.springframework.data.redis.core.StringRedisTemplate;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Service\npublic class ProductQueryService {\n\n    private final ProductRepository productRepository;\n    private final ArticleSearchService articleSearchService;\n    private final ArticleRepository articleRepository;\n    private final StringRedisTemplate redisTemplate;\n\n    public ProductQueryService(ProductRepository productRepository,\n                                ArticleSearchService articleSearchService,\n                                ArticleRepository articleRepository,\n                                StringRedisTemplate redisTemplate) {\n        this.productRepository = productRepository;\n        this.articleSearchService = articleSearchService;\n        this.articleRepository = articleRepository;\n        this.redisTemplate = redisTemplate;\n    }\n\n    // Reads from Redis cache first, falls back to MongoDB\n    public Optional<Product> getProductById(String id) {\n        String cachedName = redisTemplate.opsForValue().get(\"product:\" + id);\n        if (cachedName != null) {\n            return productRepository.findById(id);\n        }\n        return productRepository.findById(id);\n    }\n\n    // Reads from Elasticsearch for full-text search\n    public List<Article> searchProducts(String query) {\n        return articleSearchService.search(query, 0, 20);\n    }\n\n    // Reads from MongoDB for transactional consistency\n    public List<Product> getProductsByCategory(String category) {\n        return productRepository.findByCategory(category);\n    }\n\n    // Reads from Elasticsearch with aggregation\n    public List<Article> getPopularProducts() {\n        return articleRepository.findByPublishedTrue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparing-database-characteristics",
      children: "Comparing Database Characteristics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elasticsearch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document (BSON/JSON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value, data structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document (JSON)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose, schemaless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, session store, real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search, analytics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON queries, aggregation pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commands, Lua scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query DSL (JSON)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACID transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (replica sets 4.0+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (MULTI/EXEC/WATCH)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, compound, text, geo, TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (except secondary indexes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable (strong/eventual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (wait/replicate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk (WiredTiger)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk snapshot/AOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk (segments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master-slave, cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster (shards + replicas)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary store, documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache, counter, queue, pub/sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search, analytics, logs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON-like documents, flexible schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content management, catalogs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory data structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-millisecond latency, pub/sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, sessions, real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elasticsearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search, aggregations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search, analytics, logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified repository model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent API across stores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polyglot persistence"
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
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elasticsearch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Save"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mongoTemplate.save()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redisTemplate.opsForValue().set()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "elasticsearchTemplate.save()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find by ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "repository.findById()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redisTemplate.opsForValue().get()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "repository.findById()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Query with JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query DSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "repository.delete()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redisTemplate.delete()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "repository.delete()"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Elasticsearch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primary Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-Text Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pub/Sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation maps a Java class to a MongoDB collection?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @Entity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @Document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @Collection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @Table"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) @Document.** Spring Data MongoDB uses @Document to map classes to MongoDB collections.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is Redis best suited for in a typical Spring Boot application?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Primary data storage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Caching, session management, pub/sub"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Full-text search"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Relational data with joins"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Caching, session management, pub/sub.** Redis excels at in-memory operations with sub-millisecond latency.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Spring Data repository interface is used for Elasticsearch?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) MongoRepository"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ElasticsearchRepository"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) SearchRepository"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) CrudRepository"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) ElasticsearchRepository.** Spring Data Elasticsearch provides ElasticsearchRepository for search operations.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ummary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MongoDB"
          }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Document"
          }), " to map classes to collections, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MongoRepository"
          }), " for CRUD, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Query"
          }), " for custom MongoDB JSON queries, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MongoTemplate"
          }), " for imperative access, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Aggregation"
          }), " for pipeline operations. Geo-spatial queries use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NearQuery"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Criteria"
          }), " with geo predicates. GridFS handles files over 16 MB. Transactions require a replica set."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redis"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedisTemplate"
          }), " provides type-safe operations for strings, lists, sets, sorted sets, hashes, and streams. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@RedisHash"
          }), " enables Spring Data repositories with automatic keyspace management and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Indexed"
          }), " secondary indexes. Pub/sub uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedisMessageListenerContainer"
          }), ". Caching is configured via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedisCacheManager"
          }), " with per-region TTLs. Streams support consumer groups with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StreamMessageListenerContainer"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Elasticsearch"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Document"
          }), " maps entities to indices with explicit ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Field"
          }), " type specifications. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ElasticsearchRepository"
          }), " supports derived query methods and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Query"
          }), " with Elasticsearch Query DSL. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ElasticsearchTemplate"
          }), " provides native query building, aggregations, and index management. Full-text search uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "multi_match"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fuzzy"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "match_phrase"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "function_score"
          }), " queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-model"
          }), ": Combine MongoDB (source of truth), Redis (cache layer), and Elasticsearch (search engine) using background synchronization, compensating actions, and tiered read strategies."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MongoRepository"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MongoTemplate"
          }), "? When would you choose one over the other?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain how the MongoDB aggregation pipeline differs from a regular ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Query"
          }), ". Give an example where an aggregation is necessary."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does Redis achieve sub-millisecond latency? What trade-offs does this design impose?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between Redis Pub/Sub and Redis Streams? When should you use each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "inverted index"
          }), " in Elasticsearch. How does it enable fast full-text search?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the guarantees of MongoDB transactions? Which deployment topology is required?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare the indexing strategies of MongoDB, Redis, and Elasticsearch. How does each database's index structure affect query performance?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RedisCacheManager"
          }), " and how does its transaction awareness work?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Product Search API"
          }), ": Build a REST controller with endpoints:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "POST /api/products"
            }), " — create a product in MongoDB"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/products/search?q=...&category=...&minPrice=...&maxPrice=..."
            }), " — search across MongoDB and Elasticsearch"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET /api/products/{id}"
            }), " — read from Redis cache with MongoDB fallback"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE /api/products/{id}"
            }), " — delete from all three stores with compensating actions for partial failures"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Session Store"
          }), ": Implement a Redis-backed session store that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Stores user sessions with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@RedisHash"
            }), " and configurable TTL"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Publishes session expiry events to a Redis pub/sub channel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides a REST endpoint to list all active sessions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles bulk session invalidation for a user"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Analytics Dashboard"
          }), ": Build MongoDB aggregation pipelines that produce:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Top 10 products by revenue (quantity Ã→ price)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Product count by category with average rating"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Monthly sales trends with running totals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supplier performance metrics (total products, average price, stock levels)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Full-Text Search Engine"
          }), ": Implement an Elasticsearch-backed search for articles with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multi-field search (title boosted, content, tags)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Faceted aggregation by category, author, and date range"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fuzzy matching for typo tolerance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Highlighting in search results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Autocomplete suggestions using completion suggester"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Model Order System"
          }), ": Design and implement a distributed order system that stores orders in MongoDB, caches active orders in Redis, and indexes order data in Elasticsearch for analytics. Implement:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A background sync service that replicates MongoDB data to Elasticsearch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Redis cache warming on application startup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cache invalidation on order updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A query service that selects the optimal store per query type"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compensating transactions for cross-store failures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-Time Leaderboard"
          }), ": Build a real-time gaming leaderboard using Redis sorted sets:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Players earn points and their score updates atomically"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Top 100 leaderboard is cached and refreshed every 30 seconds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Player rank queries are served from Redis directly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Historical leaderboards are stored in MongoDB with daily snapshots"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide a REST API for current leaderboard, player rank, and historical snapshots"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Geo-Spatial Store Locator"
          }), ": Implement a store locator service with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MongoDB geo-spatial queries to find nearby stores"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Redis caching of popular locations with 5-minute TTL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Elasticsearch indexing of store metadata (name, category, opening hours) for text search"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A combined endpoint that returns stores within radius, sorted by distance, filtered by text match"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support for polygon-based boundary searches"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Content Management System"
          }), ": Build a CMS backend that stores content in MongoDB, caches rendered pages in Redis, and provides full-text search through Elasticsearch:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Content CRUD with MongoDB transactions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Redis cache-aside pattern for page rendering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Incremental Elasticsearch indexing on content publish"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Search with highlighting, faceted by content type and tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scheduled re-indexing for consistency verification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Graceful degradation — if Elasticsearch is down, fall back to MongoDB regex search"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redis Streams Order Pipeline"
          }), ": Implement an order processing pipeline entirely with Redis Streams:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Orders published to a stream from a REST endpoint"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multiple consumer groups: payment processor, inventory updater, notifier"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each consumer group has multiple consumers for parallelism"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Failed messages go to a dead-letter queue stream"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Monitoring endpoint shows stream length, consumer group lag, and pending messages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Idempotency keys prevent duplicate processing"
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