"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94206],{

/***/ 30101
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_48_graphql_md_e87_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-48-graphql-md-e87.json
const site_docs_courses_java_48_graphql_md_e87_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/48-graphql","title":"Spring GraphQL","description":"Previous Spring Batch","source":"@site/docs/courses/java/48-graphql.md","sourceDirName":"courses/java","slug":"/java/48-graphql","permalink":"/ai-engineering-journey/java/48-graphql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":48,"frontMatter":{"id":"48-graphql","slug":"/java/48-graphql","title":"Spring GraphQL","sidebar_label":"Spring GraphQL","sidebar_position":48},"sidebar":"course-java","previous":{"title":"Spring AI","permalink":"/ai-engineering-journey/java/47-spring-ai"},"next":{"title":"Spring Batch","permalink":"/ai-engineering-journey/java/49-batch"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/48-graphql.md


const frontMatter = {
	id: '48-graphql',
	slug: '/java/48-graphql',
	title: 'Spring GraphQL',
	sidebar_label: 'Spring GraphQL',
	sidebar_position: 48
};
const contentTitle = 'Spring GraphQL';

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
  "value": "1. GraphQL Schema Language",
  "id": "1-graphql-schema-language",
  "level": 2
}, {
  "value": "1.1 Project Dependencies",
  "id": "11-project-dependencies",
  "level": 3
}, {
  "value": "1.2 Application Configuration",
  "id": "12-application-configuration",
  "level": 3
}, {
  "value": "1.3 Schema Definition",
  "id": "13-schema-definition",
  "level": 3
}, {
  "value": "1.4 GraphQL Configuration",
  "id": "14-graphql-configuration",
  "level": 3
}, {
  "value": "2. Domain Models",
  "id": "2-domain-models",
  "level": 2
}, {
  "value": "2.1 Enums and DTOs",
  "id": "21-enums-and-dtos",
  "level": 3
}, {
  "value": "3. Repository Layer",
  "id": "3-repository-layer",
  "level": 2
}, {
  "value": "4. Query Mapping",
  "id": "4-query-mapping",
  "level": 2
}, {
  "value": "5. Mutation Mapping",
  "id": "5-mutation-mapping",
  "level": 2
}, {
  "value": "6. DataLoader and BatchMapping",
  "id": "6-dataloader-and-batchmapping",
  "level": 2
}, {
  "value": "7. Subscriptions",
  "id": "7-subscriptions",
  "level": 2
}, {
  "value": "8. Security",
  "id": "8-security",
  "level": 2
}, {
  "value": "9. Exception Handling",
  "id": "9-exception-handling",
  "level": 2
}, {
  "value": "10. File Upload",
  "id": "10-file-upload",
  "level": 2
}, {
  "value": "11. Testing",
  "id": "11-testing",
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
        id: "spring-graphql",
        children: "Spring GraphQL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/47-spring-ai",
          children: "Spring AI"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/49-batch",
          children: "Spring Batch"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
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
        href: "../../assets/images/lessons/java/48-graphql/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/48-graphql/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/48-graphql/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/48-graphql/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/48-graphql/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/48-graphql/visual-explanation.png",
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
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common pitfalls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Concepts] --> B[Setup/Configuration]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and implement GraphQL schemas with types, queries, mutations, and subscriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use @QueryMapping, @MutationMapping, and @SubscriptionMapping annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement custom data fetchers with @SchemaMapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure GraphQL Java with @EnableGraphQl"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch load data efficiently with DataLoader and @BatchMapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement real-time subscriptions using WebSocket transport"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure GraphiQL and GraphQL Voyager for API exploration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure GraphQL endpoints with Spring Security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement cursor-based and offset-based pagination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle exceptions with @GraphQlExceptionResolver"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write comprehensive tests with @GraphQlTest and GraphQlTester"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support file uploads via multipart requests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-graphql-schema-language",
      children: "1. GraphQL Schema Language"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Test with production-like configurations → dev setups often hide issues that surface under real load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start simple. Add complexity only when proven necessary. Premature abstraction creates maintenance burden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/48-graphql.png",
        alt: "Spring GraphQL - Schema, DataLoader, Subscriptions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphQL defines a schema language for describing data types, relationships, and operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-project-dependencies",
      children: "1.1 Project Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.4.0</version>\n        <relativePath/>\n    </parent>\n    <groupId>com.aiengineering</groupId>\n    <artifactId>graphql-course</artifactId>\n    <version>1.0.0</version>\n    <name>graphql-course</name>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-webflux</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-graphql</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-security</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-validation</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>com.graphql-java</groupId>\n            <artifactId>graphql-java-extended-scalars</artifactId>\n            <version>22.0</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.graphql</groupId>\n            <artifactId>spring-graphql-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-application-configuration",
      children: "1.2 Application Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\n\n> **Previous:** [Spring AI](./47-spring-ai.md) | **Next:** [Spring Batch](./49-batch.md)\nspring:\n  application:\n    name: graphql-course\n\n  graphql:\n    graphiql:\n      enabled: true\n      path: /graphiql\n    voyager:\n      enabled: true\n      path: /voyager\n    schema:\n      locations: classpath:graphql/\n      file-extensions: .graphqls,.gqls\n    path: /graphql\n    websocket:\n      path: /graphql\n    cors:\n      allowed-origins: \"*\"\n      allowed-methods: GET,POST\n    query:\n      complexity:\n        enabled: true\n        default-complexity: 1\n        maximum-complexity: 100\n\n  datasource:\n    url: jdbc:postgresql://localhost:5432/graphql_course\n    username: postgres\n    password: postgres\n    driver-class-name: org.postgresql.Driver\n\n  jpa:\n    hibernate:\n      ddl-auto: update\n    show-sql: true\n    properties:\n      hibernate:\n        format_sql: true\n\nserver:\n  port: 8080\n\nlogging:\n  level:\n    org.springframework.graphql: DEBUG\n    org.springframework.security: DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-schema-definition",
      children: "1.3 Schema Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-graphql",
        children: "# src/main/resources/graphql/schema.graphqls\n\n> **Previous:** [Spring AI](./47-spring-ai.md) | **Next:** [Spring Batch](./49-batch.md)\n\nscalar DateTime\nscalar Long\nscalar BigDecimal\nscalar JSON\nscalar Upload\n\nenum PostStatus {\n    DRAFT\n    PUBLISHED\n    ARCHIVED\n    DELETED\n}\n\nenum UserRole {\n    ADMIN\n    MODERATOR\n    AUTHOR\n    READER\n}\n\nenum SortDirection {\n    ASC\n    DESC\n}\n\ninterface Node {\n    id: ID!\n    createdAt: DateTime!\n    updatedAt: DateTime\n}\n\ntype PageInfo {\n    hasNextPage: Boolean!\n    hasPreviousPage: Boolean!\n    startCursor: String\n    endCursor: String\n    totalCount: Int!\n}\n\ntype UserConnection {\n    edges: [UserEdge!]!\n    pageInfo: PageInfo!\n}\n\ntype UserEdge {\n    node: User!\n    cursor: String!\n}\n\ntype PostConnection {\n    edges: [PostEdge!]!\n    pageInfo: PageInfo!\n}\n\ntype PostEdge {\n    node: Post!\n    cursor: String!\n}\n\ntype CommentConnection {\n    edges: [CommentEdge!]!\n    pageInfo: PageInfo!\n}\n\ntype CommentEdge {\n    node: Comment!\n    cursor: String!\n}\n\ntype User implements Node {\n    id: ID!\n    username: String!\n    email: String!\n    displayName: String!\n    avatarUrl: String\n    bio: String\n    role: UserRole!\n    posts(first: Int, after: String, last: Int, before: String): PostConnection!\n    comments(first: Int, after: String): CommentConnection!\n    postCount: Int!\n    commentCount: Int!\n    createdAt: DateTime!\n    updatedAt: DateTime\n}\n\ntype Post implements Node {\n    id: ID!\n    title: String!\n    slug: String!\n    content: String!\n    excerpt: String\n    status: PostStatus!\n    author: User!\n    tags: [String!]!\n    comments(first: Int, after: String, last: Int, before: String): CommentConnection!\n    commentCount: Int!\n    viewCount: Long!\n    publishedAt: DateTime\n    createdAt: DateTime!\n    updatedAt: DateTime\n}\n\ntype Comment implements Node {\n    id: ID!\n    content: String!\n    author: User!\n    post: Post!\n    parentComment: Comment\n    replies(first: Int, after: String): CommentConnection!\n    replyCount: Int!\n    depth: Int!\n    createdAt: DateTime!\n    updatedAt: DateTime\n}\n\ntype Query {\n    node(id: ID!): Node\n\n    user(id: ID, username: String): User\n    users(first: Int!, after: String, sortBy: String, sortDir: SortDirection): UserConnection!\n    searchUsers(query: String!, first: Int!, after: String): UserConnection!\n    me: User\n\n    post(id: ID, slug: String): Post\n    posts(\n        first: Int!,\n        after: String,\n        last: Int,\n        before: String,\n        status: PostStatus,\n        authorId: ID,\n        tag: String,\n        search: String,\n        sortBy: String,\n        sortDir: SortDirection\n    ): PostConnection!\n    postsByTag(tag: String!, first: Int!, after: String): PostConnection!\n    recentPosts(limit: Int!): [Post!]!\n    popularPosts(limit: Int!): [Post!]!\n\n    comment(id: ID!): Comment\n    comments(first: Int!, after: String): CommentConnection!\n    searchComments(query: String!, first: Int!, after: String): CommentConnection!\n\n    _service: _Service\n}\n\ntype Mutation {\n    createUser(input: CreateUserInput!): UserMutationResult!\n    updateUser(id: ID!, input: UpdateUserInput!): UserMutationResult!\n    deleteUser(id: ID!): DeleteResult!\n    changeUserRole(id: ID!, role: UserRole!): UserMutationResult!\n\n    createPost(input: CreatePostInput!): PostMutationResult!\n    updatePost(id: ID!, input: UpdatePostInput!): PostMutationResult!\n    deletePost(id: ID!): DeleteResult!\n    publishPost(id: ID!): PostMutationResult!\n    archivePost(id: ID!): PostMutationResult!\n\n    createComment(input: CreateCommentInput!): CommentMutationResult!\n    updateComment(id: ID!, content: String!): CommentMutationResult!\n    deleteComment(id: ID!): DeleteResult!\n\n    login(username: String!, password: String!): AuthResult!\n    refreshToken(token: String!): AuthResult!\n    logout: Boolean!\n\n    uploadFile(file: Upload!, description: String): FileUploadResult!\n}\n\ntype Subscription {\n    postCreated: Post!\n    postUpdated: Post!\n    postDeleted: ID!\n    commentAdded(postId: ID!): Comment!\n    commentDeleted(postId: ID!): ID!\n    notificationReceived(userId: ID!): Notification!\n    metricsUpdated: MetricsUpdate!\n}\n\ninput CreateUserInput {\n    username: String!\n    email: String!\n    password: String!\n    displayName: String!\n    avatarUrl: String\n    bio: String\n}\n\ninput UpdateUserInput {\n    displayName: String\n    avatarUrl: String\n    bio: String\n}\n\ninput CreatePostInput {\n    title: String!\n    content: String!\n    excerpt: String\n    tags: [String!]\n    status: PostStatus = DRAFT\n}\n\ninput UpdatePostInput {\n    title: String\n    content: String\n    excerpt: String\n    tags: [String!]\n    status: PostStatus\n}\n\ninput CreateCommentInput {\n    postId: ID!\n    content: String!\n    parentCommentId: ID\n}\n\nunion MutationResult = UserMutationResult | PostMutationResult | CommentMutationResult\n\ntype UserMutationResult {\n    success: Boolean!\n    message: String!\n    user: User\n}\n\ntype PostMutationResult {\n    success: Boolean!\n    message: String!\n    post: Post\n}\n\ntype CommentMutationResult {\n    success: Boolean!\n    message: String!\n    comment: Comment\n}\n\ntype DeleteResult {\n    success: Boolean!\n    message: String!\n    deletedId: ID!\n}\n\ntype AuthResult {\n    success: Boolean!\n    token: String\n    refreshToken: String\n    user: User\n    message: String\n}\n\ntype FileUploadResult {\n    success: Boolean!\n    url: String\n    filename: String\n    size: Long\n    message: String\n}\n\ntype Notification {\n    id: ID!\n    type: String!\n    message: String!\n    data: JSON\n    createdAt: DateTime!\n    read: Boolean!\n}\n\ntype MetricsUpdate {\n    totalUsers: Int!\n    totalPosts: Int!\n    totalComments: Int!\n    activeUsers24h: Int!\n    timestamp: DateTime!\n}\n\ntype _Service {\n    sdl: String!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-graphql-configuration",
      children: "1.4 GraphQL Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport graphql.scalars.ExtendedScalars;\nimport graphql.schema.GraphQLScalarType;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.graphql.execution.RuntimeWiringConfigurer;\n\n@Configuration(proxyBeanMethods = false)\npublic class GraphQlConfig {\n\n    @Bean\n    public RuntimeWiringConfigurer runtimeWiringConfigurer() {\n        return wiring -> wiring\n            .scalar(ExtendedScalars.DateTime)\n            .scalar(ExtendedScalars.GraphQLLong)\n            .scalar(ExtendedScalars.GraphQLBigDecimal)\n            .scalar(ExtendedScalars.Json)\n            .scalar(ExtendedScalars.Upload)\n            .build();\n    }\n\n    @Bean\n    public GraphQLScalarType dateTimeScalar() {\n        return ExtendedScalars.DateTime;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-domain-models",
      children: "2. Domain Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.Email;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\nimport lombok.*;\nimport org.hibernate.annotations.CreationTimestamp;\nimport org.hibernate.annotations.UpdateTimestamp;\n\nimport java.time.LocalDateTime;\nimport java.util.HashSet;\nimport java.util.Set;\n\n@Entity\n@Table(name = \"users\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\npublic class User {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @NotBlank @Size(min = 3, max = 50)\n    @Column(unique = true, nullable = false, length = 50)\n    private String username;\n\n    @NotBlank @Email\n    @Column(unique = true, nullable = false, length = 100)\n    private String email;\n\n    @NotBlank\n    @Column(nullable = false)\n    private String password;\n\n    @NotBlank @Size(max = 100)\n    @Column(name = \"display_name\", nullable = false, length = 100)\n    private String displayName;\n\n    @Column(name = \"avatar_url\", length = 500)\n    private String avatarUrl;\n\n    @Column(length = 500)\n    private String bio;\n\n    @Enumerated(EnumType.STRING)\n    @Column(nullable = false, length = 20)\n    @Builder.Default\n    private UserRole role = UserRole.READER;\n\n    @Builder.Default\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL, orphanRemoval = true)\n    private Set<Post> posts = new HashSet<>();\n\n    @Builder.Default\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL, orphanRemoval = true)\n    private Set<Comment> comments = new HashSet<>();\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp\n    @Column(name = \"updated_at\")\n    private LocalDateTime updatedAt;\n\n    @Version\n    private Long version;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\nimport lombok.*;\nimport org.hibernate.annotations.CreationTimestamp;\nimport org.hibernate.annotations.UpdateTimestamp;\n\nimport java.time.LocalDateTime;\nimport java.util.*;\n\n@Entity\n@Table(name = \"posts\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\npublic class Post {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @NotBlank @Size(min = 5, max = 200)\n    @Column(nullable = false, length = 200)\n    private String title;\n\n    @NotBlank @Size(max = 200)\n    @Column(unique = true, nullable = false, length = 200)\n    private String slug;\n\n    @NotBlank\n    @Column(nullable = false, columnDefinition = \"TEXT\")\n    private String content;\n\n    @Column(columnDefinition = \"TEXT\")\n    private String excerpt;\n\n    @Enumerated(EnumType.STRING)\n    @Column(nullable = false, length = 20)\n    @Builder.Default\n    private PostStatus status = PostStatus.DRAFT;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"author_id\", nullable = false)\n    private User author;\n\n    @ElementCollection(fetch = FetchType.EAGER)\n    @CollectionTable(name = \"post_tags\", joinColumns = @JoinColumn(name = \"post_id\"))\n    @Column(name = \"tag\", length = 50)\n    @Builder.Default\n    private Set<String> tags = new HashSet<>();\n\n    @Builder.Default\n    @OneToMany(mappedBy = \"post\", cascade = CascadeType.ALL, orphanRemoval = true)\n    @OrderBy(\"createdAt ASC\")\n    private Set<Comment> comments = new HashSet<>();\n\n    @Column(name = \"view_count\")\n    @Builder.Default\n    private Long viewCount = 0L;\n\n    @Column(name = \"published_at\")\n    private LocalDateTime publishedAt;\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp\n    @Column(name = \"updated_at\")\n    private LocalDateTime updatedAt;\n\n    @Version\n    private Long version;\n\n    public int getCommentCount() {\n        return comments != null ? comments.size() : 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\nimport lombok.*;\nimport org.hibernate.annotations.CreationTimestamp;\nimport org.hibernate.annotations.UpdateTimestamp;\n\nimport java.time.LocalDateTime;\n\n@Entity\n@Table(name = \"comments\")\n@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\npublic class Comment {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @EqualsAndHashCode.Include\n    private Long id;\n\n    @NotBlank @Size(max = 5000)\n    @Column(nullable = false, columnDefinition = \"TEXT\")\n    private String content;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"author_id\", nullable = false)\n    private User author;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"post_id\", nullable = false)\n    private Post post;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"parent_comment_id\")\n    private Comment parentComment;\n\n    @Column(name = \"depth\")\n    @Builder.Default\n    private Integer depth = 0;\n\n    @CreationTimestamp\n    @Column(name = \"created_at\", nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @UpdateTimestamp\n    @Column(name = \"updated_at\")\n    private LocalDateTime updatedAt;\n\n    @Version\n    private Long version;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-enums-and-dtos",
      children: "2.1 Enums and DTOs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\npublic enum PostStatus {\n    DRAFT,\n    PUBLISHED,\n    ARCHIVED,\n    DELETED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\npublic enum UserRole {\n    ADMIN,\n    MODERATOR,\n    AUTHOR,\n    READER\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport java.time.LocalDateTime;\n\npublic record PostInput(\n    String title,\n    String content,\n    String excerpt,\n    java.util.Set<String> tags,\n    PostStatus status\n) {}\n\npublic record CommentInput(\n    Long postId,\n    String content,\n    Long parentCommentId\n) {}\n\npublic record UserInput(\n    String username,\n    String email,\n    String password,\n    String displayName,\n    String avatarUrl,\n    String bio\n) {}\n\npublic record AuthResponse(\n    boolean success,\n    String token,\n    String refreshToken,\n    User user,\n    String message\n) {}\n\npublic record MutationResponse<T>(\n    boolean success,\n    String message,\n    T data\n) {}\n\npublic record DeleteResponse(\n    boolean success,\n    String message,\n    Long deletedId\n) {}\n\npublic record FileUploadResponse(\n    boolean success,\n    String url,\n    String filename,\n    Long size,\n    String message\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-repository-layer",
      children: "3. Repository Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.repository;\n\nimport com.aiengineering.course.model.Post;\nimport com.aiengineering.course.model.PostStatus;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\nimport org.springframework.stereotype.Repository;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.Optional;\n\n@Repository\npublic interface PostRepository extends JpaRepository<Post, Long> {\n\n    Optional<Post> findBySlug(String slug);\n\n    List<Post> findByStatus(PostStatus status, Sort sort);\n\n    Page<Post> findByStatus(PostStatus status, Pageable pageable);\n\n    Page<Post> findByAuthorId(Long authorId, Pageable pageable);\n\n    @Query(\"SELECT p FROM Post p JOIN p.tags t WHERE t = :tag\")\n    Page<Post> findByTag(@Param(\"tag\") String tag, Pageable pageable);\n\n    @Query(\"SELECT p FROM Post p WHERE p.status = 'PUBLISHED' \" +\n           \"AND (LOWER(p.title) LIKE LOWER(CONCAT('%', :search, '%')) \" +\n           \"OR LOWER(p.content) LIKE LOWER(CONCAT('%', :search, '%')))\")\n    Page<Post> searchPosts(@Param(\"search\") String search, Pageable pageable);\n\n    @Query(\"SELECT p FROM Post p WHERE p.status = 'PUBLISHED' \" +\n           \"AND p.createdAt >= :since ORDER BY p.viewCount DESC\")\n    List<Post> findPopularPostsSince(@Param(\"since\") LocalDateTime since, Pageable pageable);\n\n    @Query(\"SELECT p FROM Post p WHERE p.status = 'PUBLISHED' \" +\n           \"ORDER BY p.createdAt DESC\")\n    List<Post> findRecentPosts(Pageable pageable);\n\n    @Query(\"SELECT COUNT(p) FROM Post p WHERE p.status = 'PUBLISHED'\")\n    long countPublishedPosts();\n\n    @Query(\"SELECT DISTINCT t FROM Post p JOIN p.tags t\")\n    List<String> findAllTags();\n\n    @Query(\"SELECT p FROM Post p WHERE p.author.id = :authorId AND p.status = :status\")\n    List<Post> findByAuthorIdAndStatus(@Param(\"authorId\") Long authorId,\n                                        @Param(\"status\") PostStatus status);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.repository;\n\nimport com.aiengineering.course.model.Comment;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\n\n@Repository\npublic interface CommentRepository extends JpaRepository<Comment, Long> {\n\n    Page<Comment> findByPostId(Long postId, Pageable pageable);\n\n    Page<Comment> findByAuthorId(Long authorId, Pageable pageable);\n\n    List<Comment> findByParentCommentId(Long parentCommentId);\n\n    @Query(\"SELECT c FROM Comment c WHERE \" +\n           \"LOWER(c.content) LIKE LOWER(CONCAT('%', :query, '%'))\")\n    Page<Comment> searchComments(@Param(\"query\") String query, Pageable pageable);\n\n    @Query(\"SELECT COUNT(c) FROM Comment c WHERE c.post.id = :postId\")\n    long countByPostId(@Param(\"postId\") Long postId);\n\n    @Query(\"SELECT COUNT(c) FROM Comment c WHERE c.author.id = :authorId\")\n    long countByAuthorId(@Param(\"authorId\") Long authorId);\n\n    @Query(\"SELECT c FROM Comment c WHERE c.parentComment IS NULL \" +\n           \"AND c.post.id = :postId ORDER BY c.createdAt ASC\")\n    List<Comment> findRootCommentsByPostId(@Param(\"postId\") Long postId);\n\n    void deleteByPostId(Long postId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.repository;\n\nimport com.aiengineering.course.model.User;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.Optional;\n\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n\n    Optional<User> findByUsername(String username);\n\n    Optional<User> findByEmail(String email);\n\n    Optional<User> findByUsernameOrEmail(String username, String email);\n\n    boolean existsByUsername(String username);\n\n    boolean existsByEmail(String email);\n\n    @Query(\"SELECT u FROM User u WHERE \" +\n           \"LOWER(u.username) LIKE LOWER(CONCAT('%', :query, '%')) \" +\n           \"OR LOWER(u.displayName) LIKE LOWER(CONCAT('%', :query, '%')) \" +\n           \"OR LOWER(u.email) LIKE LOWER(CONCAT('%', :query, '%'))\")\n    Page<User> searchUsers(@Param(\"query\") String query, Pageable pageable);\n\n    @Query(\"SELECT u FROM User u ORDER BY u.createdAt DESC\")\n    Page<User> findAllOrderByNewest(Pageable pageable);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-query-mapping",
      children: "4. Query Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.*;\nimport com.aiengineering.course.service.UserService;\nimport graphql.relay.*;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.graphql.data.method.annotation.SchemaMapping;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.time.LocalDateTime;\nimport java.util.*;\nimport java.util.stream.Collectors;\n\n@Controller\npublic class PostQueryController {\n\n    private final PostRepository postRepository;\n    private final CommentRepository commentRepository;\n    private final UserRepository userRepository;\n\n    public PostQueryController(\n            PostRepository postRepository,\n            CommentRepository commentRepository,\n            UserRepository userRepository) {\n        this.postRepository = postRepository;\n        this.commentRepository = commentRepository;\n        this.userRepository = userRepository;\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public Optional<Post> post(@Argument Long id, @Argument String slug) {\n        if (id != null) return postRepository.findById(id);\n        if (slug != null) return postRepository.findBySlug(slug);\n        return Optional.empty();\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public PostConnection posts(\n            @Argument int first,\n            @Argument String after,\n            @Argument Integer last,\n            @Argument String before,\n            @Argument PostStatus status,\n            @Argument Long authorId,\n            @Argument String tag,\n            @Argument String search,\n            @Argument String sortBy,\n            @Argument SortDirection sortDir) {\n\n        Sort sort = buildSort(sortBy, sortDir, Sort.by(Sort.Direction.DESC, \"createdAt\"));\n        int pageSize = first > 0 ? first : (last > 0 ? last : 10);\n\n        int offset = 0;\n        if (after != null) {\n            offset = decodeCursor(after);\n            offset = offset + 1;\n        } else if (before != null) {\n            int endOffset = decodeCursor(before);\n            offset = Math.max(0, endOffset - pageSize);\n        }\n\n        Page<Post> postPage;\n\n        if (search != null && !search.isBlank()) {\n            postPage = postRepository.searchPosts(search, PageRequest.of(0, pageSize + offset + 1, sort));\n            List<Post> filtered = postPage.getContent().stream()\n                .skip(offset).limit(pageSize).toList();\n            return buildConnection(filtered, offset, (int) postPage.getTotalElements());\n        }\n\n        if (tag != null && !tag.isBlank()) {\n            postPage = postRepository.findByTag(tag, PageRequest.of(0, pageSize + offset + 1, sort));\n            List<Post> filtered = postPage.getContent().stream()\n                .skip(offset).limit(pageSize).toList();\n            return buildConnection(filtered, offset, (int) postPage.getTotalElements());\n        }\n\n        if (authorId != null) {\n            postPage = postRepository.findByAuthorId(authorId, PageRequest.of(0, pageSize + offset + 1, sort));\n            List<Post> filtered = postPage.getContent().stream()\n                .skip(offset).limit(pageSize).toList();\n            return buildConnection(filtered, offset, (int) postPage.getTotalElements());\n        }\n\n        PostStatus queryStatus = status != null ? status : PostStatus.PUBLISHED;\n        postPage = postRepository.findByStatus(queryStatus, PageRequest.of(0, pageSize + offset + 1, sort));\n\n        List<Post> filtered = postPage.getContent().stream()\n            .skip(offset).limit(pageSize).toList();\n\n        return buildConnection(filtered, offset, (int) postPage.getTotalElements());\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public List<Post> recentPosts(@Argument int limit) {\n        return postRepository.findRecentPosts(PageRequest.of(0, Math.min(limit, 50)));\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public List<Post> popularPosts(@Argument int limit) {\n        LocalDateTime since = LocalDateTime.now().minusDays(30);\n        return postRepository.findPopularPostsSince(since, PageRequest.of(0, Math.min(limit, 50)));\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public PostConnection postsByTag(@Argument String tag, @Argument int first,\n                                      @Argument String after) {\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n        Page<Post> page = postRepository.findByTag(tag,\n            PageRequest.of(0, offset + first + 1));\n        List<Post> filtered = page.getContent().stream()\n            .skip(offset).limit(first).toList();\n        return buildConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @SchemaMapping(typeName = \"Post\", field = \"comments\")\n    @Transactional(readOnly = true)\n    public CommentConnection comments(Post post, @Argument int first, @Argument String after,\n                                       @Argument Integer last, @Argument String before) {\n        int pageSize = first > 0 ? first : (last > 0 ? last : 10);\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n\n        Page<Comment> page = commentRepository.findByPostId(post.getId(),\n            PageRequest.of(0, offset + pageSize + 1, Sort.by(Sort.Direction.ASC, \"createdAt\")));\n\n        List<Comment> filtered = page.getContent().stream()\n            .skip(offset).limit(pageSize).toList();\n\n        long total = commentRepository.countByPostId(post.getId());\n        return buildCommentConnection(filtered, offset, (int) total);\n    }\n\n    @SchemaMapping(typeName = \"Post\", field = \"commentCount\")\n    public int commentCount(Post post) {\n        return (int) commentRepository.countByPostId(post.getId());\n    }\n\n    private PostConnection buildConnection(List<Post> posts, int offset, int totalCount) {\n        List<PostEdge> edges = new ArrayList<>();\n        for (int i = 0; i < posts.size(); i++) {\n            Post post = posts.get(i);\n            String cursor = encodeCursor(offset + i);\n            edges.add(new PostEdge(post, cursor));\n        }\n\n        PageInfo pageInfo = new PageInfo(\n            offset + posts.size() < totalCount,\n            offset > 0,\n            edges.isEmpty() ? null : edges.getFirst().getCursor(),\n            edges.isEmpty() ? null : edges.getLast().getCursor(),\n            totalCount\n        );\n\n        return new PostConnection(edges, pageInfo);\n    }\n\n    private CommentConnection buildCommentConnection(List<Comment> comments, int offset, int totalCount) {\n        List<CommentEdge> edges = new ArrayList<>();\n        for (int i = 0; i < comments.size(); i++) {\n            String cursor = encodeCursor(offset + i);\n            edges.add(new CommentEdge(comments.get(i), cursor));\n        }\n\n        PageInfo pageInfo = new PageInfo(\n            offset + comments.size() < totalCount,\n            offset > 0,\n            edges.isEmpty() ? null : edges.getFirst().getCursor(),\n            edges.isEmpty() ? null : edges.getLast().getCursor(),\n            totalCount\n        );\n\n        return new CommentConnection(edges, pageInfo);\n    }\n\n    private String encodeCursor(int offset) {\n        return Base64.getEncoder().encodeToString(String.valueOf(offset).getBytes());\n    }\n\n    private int decodeCursor(String cursor) {\n        try {\n            byte[] decoded = Base64.getDecoder().decode(cursor);\n            return Integer.parseInt(new String(decoded));\n        } catch (Exception e) {\n            return 0;\n        }\n    }\n\n    private Sort buildSort(String sortBy, SortDirection sortDir, Sort defaultSort) {\n        if (sortBy == null) return defaultSort;\n        Sort.Direction direction = sortDir == SortDirection.ASC\n            ? Sort.Direction.ASC : Sort.Direction.DESC;\n        String field = switch (sortBy) {\n            case \"title\" -> \"title\";\n            case \"createdAt\" -> \"createdAt\";\n            case \"updatedAt\" -> \"updatedAt\";\n            case \"viewCount\" -> \"viewCount\";\n            case \"publishedAt\" -> \"publishedAt\";\n            default -> \"createdAt\";\n        };\n        return Sort.by(direction, field);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.*;\nimport com.aiengineering.course.service.UserService;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.graphql.data.method.annotation.SchemaMapping;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.util.*;\nimport java.util.stream.Collectors;\n\n@Controller\npublic class UserQueryController {\n\n    private final UserRepository userRepository;\n    private final PostRepository postRepository;\n    private final CommentRepository commentRepository;\n    private final UserService userService;\n\n    public UserQueryController(\n            UserRepository userRepository,\n            PostRepository postRepository,\n            CommentRepository commentRepository,\n            UserService userService) {\n        this.userRepository = userRepository;\n        this.postRepository = postRepository;\n        this.commentRepository = commentRepository;\n        this.userService = userService;\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public Optional<User> user(@Argument Long id, @Argument String username) {\n        if (id != null) return userRepository.findById(id);\n        if (username != null) return userRepository.findByUsername(username);\n        return Optional.empty();\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public UserConnection users(\n            @Argument int first,\n            @Argument String after,\n            @Argument String sortBy,\n            @Argument SortDirection sortDir) {\n\n        Sort sort = Sort.by(Sort.Direction.DESC, \"createdAt\");\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n\n        Page<User> page = userRepository.findAll(\n            PageRequest.of(0, offset + first + 1, sort));\n\n        List<User> filtered = page.getContent().stream()\n            .skip(offset).limit(first).toList();\n\n        return buildUserConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public UserConnection searchUsers(\n            @Argument String query,\n            @Argument int first,\n            @Argument String after) {\n\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n        Page<User> page = userRepository.searchUsers(query,\n            PageRequest.of(0, offset + first + 1));\n\n        List<User> filtered = page.getContent().stream()\n            .skip(offset).limit(first).toList();\n\n        return buildUserConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public User me() {\n        return userService.getCurrentUser()\n            .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public Optional<Comment> comment(@Argument Long id) {\n        return commentRepository.findById(id);\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public CommentConnection comments(\n            @Argument int first,\n            @Argument String after) {\n\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n        Page<Comment> page = commentRepository.findAll(\n            PageRequest.of(0, offset + first + 1,\n                Sort.by(Sort.Direction.DESC, \"createdAt\")));\n\n        List<Comment> filtered = page.getContent().stream()\n            .skip(offset).limit(first).toList();\n\n        return buildCommentConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public CommentConnection searchComments(\n            @Argument String query,\n            @Argument int first,\n            @Argument String after) {\n\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n        Page<Comment> page = commentRepository.searchComments(query,\n            PageRequest.of(0, offset + first + 1));\n\n        List<Comment> filtered = page.getContent().stream()\n            .skip(offset).limit(first).toList();\n\n        return buildCommentConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @QueryMapping\n    @Transactional(readOnly = true)\n    public Node node(@Argument Long id) {\n        return userRepository.findById(id)\n            .map(u -> (Node) u)\n            .orElseGet(() -> postRepository.findById(id)\n                .map(p -> (Node) p)\n                .orElse(null));\n    }\n\n    @QueryMapping\n    public _Service _service() {\n        return new _Service();\n    }\n\n    @SchemaMapping(typeName = \"User\", field = \"posts\")\n    @Transactional(readOnly = true)\n    public PostConnection userPosts(User user, @Argument int first, @Argument String after,\n                                     @Argument Integer last, @Argument String before) {\n        int pageSize = first > 0 ? first : (last > 0 ? last : 10);\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n\n        Page<Post> page = postRepository.findByAuthorId(user.getId(),\n            PageRequest.of(0, offset + pageSize + 1,\n                Sort.by(Sort.Direction.DESC, \"createdAt\")));\n\n        List<Post> filtered = page.getContent().stream()\n            .skip(offset).limit(pageSize).toList();\n\n        return buildPostConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @SchemaMapping(typeName = \"User\", field = \"comments\")\n    @Transactional(readOnly = true)\n    public CommentConnection userComments(User user, @Argument int first, @Argument String after) {\n        int offset = after != null ? decodeCursor(after) + 1 : 0;\n        Page<Comment> page = commentRepository.findByAuthorId(user.getId(),\n            PageRequest.of(0, offset + first + 1,\n                Sort.by(Sort.Direction.DESC, \"createdAt\")));\n\n        List<Comment> filtered = page.getContent().stream()\n            .skip(offset).limit(first).toList();\n\n        return buildCommentConnection(filtered, offset, (int) page.getTotalElements());\n    }\n\n    @SchemaMapping(typeName = \"User\", field = \"postCount\")\n    public int userPostCount(User user) {\n        return (int) postRepository.findByAuthorIdAndStatus(user.getId(), PostStatus.PUBLISHED).size();\n    }\n\n    @SchemaMapping(typeName = \"User\", field = \"commentCount\")\n    public int userCommentCount(User user) {\n        return (int) commentRepository.countByAuthorId(user.getId());\n    }\n\n    @SchemaMapping(typeName = \"Comment\", field = \"replies\")\n    @Transactional(readOnly = true)\n    public CommentConnection commentReplies(Comment comment, @Argument int first, @Argument String after) {\n        List<Comment> replies = commentRepository.findByParentCommentId(comment.getId());\n        return buildCommentConnection(replies, 0, replies.size());\n    }\n\n    @SchemaMapping(typeName = \"Comment\", field = \"replyCount\")\n    public int commentReplyCount(Comment comment) {\n        return commentRepository.findByParentCommentId(comment.getId()).size();\n    }\n\n    private String encodeCursor(int offset) {\n        return Base64.getEncoder().encodeToString(String.valueOf(offset).getBytes());\n    }\n\n    private int decodeCursor(String cursor) {\n        try {\n            return Integer.parseInt(new String(Base64.getDecoder().decode(cursor)));\n        } catch (Exception e) {\n            return 0;\n        }\n    }\n\n    private UserConnection buildUserConnection(List<User> users, int offset, int totalCount) {\n        List<UserEdge> edges = new ArrayList<>();\n        for (int i = 0; i < users.size(); i++) {\n            edges.add(new UserEdge(users.get(i), encodeCursor(offset + i)));\n        }\n        PageInfo pageInfo = new PageInfo(\n            offset + users.size() < totalCount,\n            offset > 0,\n            edges.isEmpty() ? null : edges.getFirst().getCursor(),\n            edges.isEmpty() ? null : edges.getLast().getCursor(),\n            totalCount\n        );\n        return new UserConnection(edges, pageInfo);\n    }\n\n    private PostConnection buildPostConnection(List<Post> posts, int offset, int totalCount) {\n        List<PostEdge> edges = new ArrayList<>();\n        for (int i = 0; i < posts.size(); i++) {\n            edges.add(new PostEdge(posts.get(i), encodeCursor(offset + i)));\n        }\n        PageInfo pageInfo = new PageInfo(\n            offset + posts.size() < totalCount,\n            offset > 0,\n            edges.isEmpty() ? null : edges.getFirst().getCursor(),\n            edges.isEmpty() ? null : edges.getLast().getCursor(),\n            totalCount\n        );\n        return new PostConnection(edges, pageInfo);\n    }\n\n    private CommentConnection buildCommentConnection(List<Comment> comments, int offset, int totalCount) {\n        List<CommentEdge> edges = new ArrayList<>();\n        for (int i = 0; i < comments.size(); i++) {\n            edges.add(new CommentEdge(comments.get(i), encodeCursor(offset + i)));\n        }\n        PageInfo pageInfo = new PageInfo(\n            offset + comments.size() < totalCount,\n            offset > 0,\n            edges.isEmpty() ? null : edges.getFirst().getCursor(),\n            edges.isEmpty() ? null : edges.getLast().getCursor(),\n            totalCount\n        );\n        return new CommentConnection(edges, pageInfo);\n    }\n\n    public record PostEdge(Post node, String cursor) {}\n    public record PostConnection(List<PostEdge> edges, PageInfo pageInfo) {}\n    public record CommentEdge(Comment node, String cursor) {}\n    public record CommentConnection(List<CommentEdge> edges, PageInfo pageInfo) {}\n    public record UserEdge(User node, String cursor) {}\n    public record UserConnection(List<UserEdge> edges, PageInfo pageInfo) {}\n    public record PageInfo(boolean hasNextPage, boolean hasPreviousPage,\n                           String startCursor, String endCursor, int totalCount) {}\n    public record Node(User user, Post post, Comment comment) {}\n    public record _Service(String sdl) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-mutation-mapping",
      children: "5. Mutation Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.*;\nimport com.aiengineering.course.service.UserService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.time.LocalDateTime;\nimport java.util.*;\n\n@Controller\npublic class PostMutationController {\n\n    private static final Logger log = LoggerFactory.getLogger(PostMutationController.class);\n\n    private final PostRepository postRepository;\n    private final UserRepository userRepository;\n    private final UserService userService;\n\n    public PostMutationController(\n            PostRepository postRepository,\n            UserRepository userRepository,\n            UserService userService) {\n        this.postRepository = postRepository;\n        this.userRepository = userRepository;\n        this.userService = userService;\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public PostMutationResult createPost(@Argument CreatePostInput input) {\n        try {\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            String slug = generateSlug(input.title());\n\n            Post post = Post.builder()\n                .title(input.title())\n                .slug(slug)\n                .content(input.content())\n                .excerpt(input.excerpt())\n                .author(currentUser)\n                .status(input.status() != null ? input.status() : PostStatus.DRAFT)\n                .tags(input.tags() != null ? new HashSet<>(input.tags()) : new HashSet<>())\n                .build();\n\n            post = postRepository.save(post);\n            log.info(\"Created post: {} by user: {}\", post.getId(), currentUser.getUsername());\n\n            return new PostMutationResult(true, \"Post created successfully\", post);\n        } catch (Exception e) {\n            log.error(\"Failed to create post\", e);\n            return new PostMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public PostMutationResult updatePost(@Argument Long id, @Argument UpdatePostInput input) {\n        try {\n            Post post = postRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"Post not found: \" + id));\n\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            if (!post.getAuthor().getId().equals(currentUser.getId())\n                && currentUser.getRole() != UserRole.ADMIN) {\n                return new PostMutationResult(false, \"Not authorized to update this post\", null);\n            }\n\n            if (input.title() != null) {\n                post.setTitle(input.title());\n                post.setSlug(generateSlug(input.title()));\n            }\n            if (input.content() != null) post.setContent(input.content());\n            if (input.excerpt() != null) post.setExcerpt(input.excerpt());\n            if (input.tags() != null) post.setTags(new HashSet<>(input.tags()));\n            if (input.status() != null) {\n                post.setStatus(input.status());\n                if (input.status() == PostStatus.PUBLISHED && post.getPublishedAt() == null) {\n                    post.setPublishedAt(LocalDateTime.now());\n                }\n            }\n\n            post = postRepository.save(post);\n            log.info(\"Updated post: {}\", post.getId());\n\n            return new PostMutationResult(true, \"Post updated successfully\", post);\n        } catch (Exception e) {\n            log.error(\"Failed to update post\", e);\n            return new PostMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public DeleteResult deletePost(@Argument Long id) {\n        try {\n            Post post = postRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"Post not found: \" + id));\n\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            if (!post.getAuthor().getId().equals(currentUser.getId())\n                && currentUser.getRole() != UserRole.ADMIN) {\n                return new DeleteResult(false, \"Not authorized\", id);\n            }\n\n            post.setStatus(PostStatus.DELETED);\n            postRepository.save(post);\n            log.info(\"Deleted post: {}\", id);\n\n            return new DeleteResult(true, \"Post deleted successfully\", id);\n        } catch (Exception e) {\n            log.error(\"Failed to delete post\", e);\n            return new DeleteResult(false, e.getMessage(), id);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public PostMutationResult publishPost(@Argument Long id) {\n        try {\n            Post post = postRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"Post not found: \" + id));\n\n            post.setStatus(PostStatus.PUBLISHED);\n            post.setPublishedAt(LocalDateTime.now());\n            post = postRepository.save(post);\n\n            return new PostMutationResult(true, \"Post published\", post);\n        } catch (Exception e) {\n            return new PostMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public PostMutationResult archivePost(@Argument Long id) {\n        try {\n            Post post = postRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"Post not found: \" + id));\n\n            post.setStatus(PostStatus.ARCHIVED);\n            post = postRepository.save(post);\n\n            return new PostMutationResult(true, \"Post archived\", post);\n        } catch (Exception e) {\n            return new PostMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    private String generateSlug(String title) {\n        String baseSlug = title.toLowerCase()\n            .replaceAll(\"[^a-z0-9\\\\s-]\", \"\")\n            .replaceAll(\"\\\\s+\", \"-\")\n            .replaceAll(\"-+\", \"-\")\n            .replaceAll(\"^-|-$\", \"\");\n\n        String slug = baseSlug;\n        int counter = 1;\n        while (postRepository.findBySlug(slug).isPresent()) {\n            slug = baseSlug + \"-\" + counter++;\n        }\n        return slug;\n    }\n\n    public record PostMutationResult(boolean success, String message, Post post) {}\n    public record DeleteResult(boolean success, String message, Long deletedId) {}\n    public record CreatePostInput(String title, String content, String excerpt,\n                                   List<String> tags, PostStatus status) {}\n    public record UpdatePostInput(String title, String content, String excerpt,\n                                   List<String> tags, PostStatus status) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.*;\nimport com.aiengineering.course.service.UserService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.time.LocalDateTime;\nimport java.util.*;\n\n@Controller\npublic class UserMutationController {\n\n    private static final Logger log = LoggerFactory.getLogger(UserMutationController.class);\n\n    private final UserRepository userRepository;\n    private final PostRepository postRepository;\n    private final CommentRepository commentRepository;\n    private final PasswordEncoder passwordEncoder;\n    private final UserService userService;\n\n    public UserMutationController(\n            UserRepository userRepository,\n            PostRepository postRepository,\n            CommentRepository commentRepository,\n            PasswordEncoder passwordEncoder,\n            UserService userService) {\n        this.userRepository = userRepository;\n        this.postRepository = postRepository;\n        this.commentRepository = commentRepository;\n        this.passwordEncoder = passwordEncoder;\n        this.userService = userService;\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"permitAll()\")\n    public UserMutationResult createUser(@Argument CreateUserInput input) {\n        try {\n            if (userRepository.existsByUsername(input.username())) {\n                return new UserMutationResult(\n                    false, \"Username already taken\", null);\n            }\n            if (userRepository.existsByEmail(input.email())) {\n                return new UserMutationResult(\n                    false, \"Email already registered\", null);\n            }\n\n            User user = User.builder()\n                .username(input.username())\n                .email(input.email())\n                .password(passwordEncoder.encode(input.password()))\n                .displayName(input.displayName())\n                .avatarUrl(input.avatarUrl())\n                .bio(input.bio())\n                .role(UserRole.AUTHOR)\n                .build();\n\n            user = userRepository.save(user);\n            log.info(\"Created user: {}\", user.getUsername());\n\n            return new UserMutationResult(true, \"User created successfully\", user);\n        } catch (Exception e) {\n            log.error(\"Failed to create user\", e);\n            return new UserMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public UserMutationResult updateUser(@Argument Long id, @Argument UpdateUserInput input) {\n        try {\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            if (!currentUser.getId().equals(id) && currentUser.getRole() != UserRole.ADMIN) {\n                return new UserMutationResult(false, \"Not authorized\", null);\n            }\n\n            User user = userRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"User not found: \" + id));\n\n            if (input.displayName() != null) user.setDisplayName(input.displayName());\n            if (input.avatarUrl() != null) user.setAvatarUrl(input.avatarUrl());\n            if (input.bio() != null) user.setBio(input.bio());\n\n            user = userRepository.save(user);\n\n            return new UserMutationResult(true, \"User updated successfully\", user);\n        } catch (Exception e) {\n            return new UserMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    public UserMutationResult changeUserRole(@Argument Long id, @Argument UserRole role) {\n        try {\n            User user = userRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"User not found: \" + id));\n\n            user.setRole(role);\n            user = userRepository.save(user);\n\n            return new UserMutationResult(true, \"Role changed to \" + role, user);\n        } catch (Exception e) {\n            return new UserMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    public DeleteResult deleteUser(@Argument Long id) {\n        try {\n            User user = userRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"User not found: \" + id));\n\n            commentRepository.deleteByPostId(id);\n            postRepository.deleteAll(user.getPosts());\n            userRepository.delete(user);\n\n            return new DeleteResult(true, \"User deleted\", id);\n        } catch (Exception e) {\n            return new DeleteResult(false, e.getMessage(), id);\n        }\n    }\n\n    public record UserMutationResult(boolean success, String message, User user) {}\n    public record DeleteResult(boolean success, String message, Long deletedId) {}\n    public record CreateUserInput(String username, String email, String password,\n                                   String displayName, String avatarUrl, String bio) {}\n    public record UpdateUserInput(String displayName, String avatarUrl, String bio) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.*;\nimport com.aiengineering.course.service.UserService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.transaction.annotation.Transactional;\n\n@Controller\npublic class CommentMutationController {\n\n    private static final Logger log = LoggerFactory.getLogger(CommentMutationController.class);\n\n    private final CommentRepository commentRepository;\n    private final PostRepository postRepository;\n    private final UserService userService;\n\n    public CommentMutationController(\n            CommentRepository commentRepository,\n            PostRepository postRepository,\n            UserService userService) {\n        this.commentRepository = commentRepository;\n        this.postRepository = postRepository;\n        this.userService = userService;\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public CommentMutationResult createComment(@Argument CreateCommentInput input) {\n        try {\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            Post post = postRepository.findById(input.postId())\n                .orElseThrow(() -> new RuntimeException(\"Post not found: \" + input.postId()));\n\n            if (post.getStatus() != PostStatus.PUBLISHED) {\n                return new CommentMutationResult(\n                    false, \"Cannot comment on non-published post\", null);\n            }\n\n            Comment.CommentBuilder builder = Comment.builder()\n                .content(input.content())\n                .author(currentUser)\n                .post(post)\n                .depth(0);\n\n            if (input.parentCommentId() != null) {\n                Comment parent = commentRepository.findById(input.parentCommentId())\n                    .orElseThrow(() -> new RuntimeException(\n                        \"Parent comment not found: \" + input.parentCommentId()));\n                builder.parentComment(parent);\n                builder.depth(parent.getDepth() + 1);\n\n                if (parent.getDepth() >= 5) {\n                    return new CommentMutationResult(\n                        false, \"Maximum reply depth exceeded\", null);\n                }\n            }\n\n            Comment comment = builder.build();\n            comment = commentRepository.save(comment);\n            log.info(\"Created comment {} on post {}\", comment.getId(), post.getId());\n\n            return new CommentMutationResult(true, \"Comment created\", comment);\n        } catch (Exception e) {\n            log.error(\"Failed to create comment\", e);\n            return new CommentMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public CommentMutationResult updateComment(@Argument Long id, @Argument String content) {\n        try {\n            Comment comment = commentRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"Comment not found: \" + id));\n\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            if (!comment.getAuthor().getId().equals(currentUser.getId())\n                && currentUser.getRole() != UserRole.ADMIN) {\n                return new CommentMutationResult(false, \"Not authorized\", null);\n            }\n\n            comment.setContent(content);\n            comment = commentRepository.save(comment);\n\n            return new CommentMutationResult(true, \"Comment updated\", comment);\n        } catch (Exception e) {\n            return new CommentMutationResult(false, e.getMessage(), null);\n        }\n    }\n\n    @MutationMapping\n    @Transactional\n    @PreAuthorize(\"isAuthenticated()\")\n    public DeleteResult deleteComment(@Argument Long id) {\n        try {\n            Comment comment = commentRepository.findById(id)\n                .orElseThrow(() -> new RuntimeException(\"Comment not found: \" + id));\n\n            User currentUser = userService.getCurrentUser()\n                .orElseThrow(() -> new RuntimeException(\"Not authenticated\"));\n\n            if (!comment.getAuthor().getId().equals(currentUser.getId())\n                && currentUser.getRole() != UserRole.ADMIN) {\n                return new DeleteResult(false, \"Not authorized\", id);\n            }\n\n            commentRepository.delete(comment);\n            return new DeleteResult(true, \"Comment deleted\", id);\n        } catch (Exception e) {\n            return new DeleteResult(false, e.getMessage(), id);\n        }\n    }\n\n    public record CommentMutationResult(boolean success, String message, Comment comment) {}\n    public record DeleteResult(boolean success, String message, Long deletedId) {}\n    public record CreateCommentInput(Long postId, String content, Long parentCommentId) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-dataloader-and-batchmapping",
      children: "6. DataLoader and BatchMapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport com.aiengineering.course.model.User;\nimport com.aiengineering.course.repository.UserRepository;\nimport org.dataloader.*;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\nimport java.util.*;\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ConcurrentHashMap;\n\n@Configuration(proxyBeanMethods = false)\npublic class DataLoaderConfig {\n\n    private final UserRepository userRepository;\n\n    public DataLoaderConfig(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n\n    @Bean\n    public DataLoader<Long, User> userDataLoader() {\n        return DataLoaderFactory.newDataLoader(new MappedBatchLoader<Long, User>() {\n            @Override\n            public CompletableFuture<Map<Long, User>> load(Set<Long> keys) {\n                return CompletableFuture.supplyAsync(() -> {\n                    List<User> users = userRepository.findAllById(keys);\n                    Map<Long, User> map = new ConcurrentHashMap<>();\n                    for (User user : users) {\n                        map.put(user.getId(), user);\n                    }\n                    return map;\n                });\n            }\n        });\n    }\n\n    @Bean\n    public DataLoaderRegistry dataLoaderRegistry(DataLoader<Long, User> userDataLoader) {\n        return DataLoaderRegistry.newRegistry()\n            .register(\"user\", userDataLoader)\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.Comment;\nimport com.aiengineering.course.model.Post;\nimport com.aiengineering.course.model.User;\nimport com.aiengineering.course.repository.CommentRepository;\nimport com.aiengineering.course.repository.PostRepository;\nimport org.springframework.graphql.data.method.annotation.BatchMapping;\nimport org.springframework.graphql.data.method.annotation.SchemaMapping;\nimport org.springframework.stereotype.Controller;\n\nimport java.util.*;\nimport java.util.concurrent.CompletableFuture;\n\n@Controller\npublic class BatchMappingController {\n\n    private final PostRepository postRepository;\n    private final CommentRepository commentRepository;\n\n    public BatchMappingController(\n            PostRepository postRepository,\n            CommentRepository commentRepository) {\n        this.postRepository = postRepository;\n        this.commentRepository = commentRepository;\n    }\n\n    @BatchMapping(typeName = \"Post\", field = \"author\")\n    public CompletableFuture<Map<Post, User>> postAuthors(List<Post> posts) {\n        return CompletableFuture.supplyAsync(() -> {\n            Set<Long> authorIds = new HashSet<>();\n            for (Post post : posts) {\n                authorIds.add(post.getAuthor().getId());\n            }\n\n            List<User> users = List.of();\n            Map<Long, User> userMap = new HashMap<>();\n            for (User user : users) {\n                userMap.put(user.getId(), user);\n            }\n\n            Map<Post, User> result = new HashMap<>();\n            for (Post post : posts) {\n                User author = userMap.get(post.getAuthor().getId());\n                if (author != null) {\n                    result.put(post, author);\n                }\n            }\n            return result;\n        });\n    }\n\n    @BatchMapping(typeName = \"Comment\", field = \"author\")\n    public CompletableFuture<Map<Comment, User>> commentAuthors(List<Comment> comments) {\n        return CompletableFuture.supplyAsync(() -> {\n            Map<Comment, User> result = new HashMap<>();\n            for (Comment comment : comments) {\n                result.put(comment, comment.getAuthor());\n            }\n            return result;\n        });\n    }\n\n    @BatchMapping(typeName = \"Comment\", field = \"post\")\n    public CompletableFuture<Map<Comment, Post>> commentPosts(List<Comment> comments) {\n        return CompletableFuture.supplyAsync(() -> {\n            Set<Long> postIds = new HashSet<>();\n            for (Comment comment : comments) {\n                postIds.add(comment.getPost().getId());\n            }\n\n            List<Post> posts = postRepository.findAllById(postIds);\n            Map<Long, Post> postMap = new HashMap<>();\n            for (Post post : posts) {\n                postMap.put(post.getId(), post);\n            }\n\n            Map<Comment, Post> result = new HashMap<>();\n            for (Comment comment : comments) {\n                Post post = postMap.get(comment.getPost().getId());\n                if (post != null) {\n                    result.put(comment, post);\n                }\n            }\n            return result;\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-subscriptions",
      children: "7. Subscriptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.PostRepository;\nimport org.reactivestreams.Publisher;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.SubscriptionMapping;\nimport org.springframework.stereotype.Controller;\nimport reactor.core.publisher.*;\n\nimport java.time.LocalDateTime;\nimport java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\n@Controller\npublic class PostSubscriptionController {\n\n    private static final Logger log = LoggerFactory.getLogger(PostSubscriptionController.class);\n\n    private final PostRepository postRepository;\n\n    private final CopyOnWriteArrayList<Sink<Post>> postCreatedSinks = new CopyOnWriteArrayList<>();\n    private final CopyOnWriteArrayList<Sink<Post>> postUpdatedSinks = new CopyOnWriteArrayList<>();\n    private final CopyOnWriteArrayList<Sink<Long>> postDeletedSinks = new CopyOnWriteArrayList<>();\n    private final Map<Long, CopyOnWriteArrayList<Sink<Comment>>> commentAddedSinks = new ConcurrentHashMap<>();\n    private final Map<String, CopyOnWriteArrayList<Sink<Notification>>> notificationSinks = new ConcurrentHashMap<>();\n    private final CopyOnWriteArrayList<Sink<MetricsUpdate>> metricsSinks = new CopyOnWriteArrayList<>();\n\n    public PostSubscriptionController(PostRepository postRepository) {\n        this.postRepository = postRepository;\n    }\n\n    @SubscriptionMapping\n    public Publisher<Post> postCreated() {\n        Sinks.Many<Post> sink = Sinks.many().multicast().directBestEffort();\n        postCreatedSinks.add(sink);\n        log.info(\"New subscriber to postCreated\");\n\n        return sink.asFlux()\n            .doOnCancel(() -> {\n                postCreatedSinks.remove(sink);\n                log.info(\"Subscriber cancelled postCreated\");\n            })\n            .doOnTerminate(() -> postCreatedSinks.remove(sink));\n    }\n\n    @SubscriptionMapping\n    public Publisher<Post> postUpdated() {\n        Sinks.Many<Post> sink = Sinks.many().multicast().directBestEffort();\n        postUpdatedSinks.add(sink);\n\n        return sink.asFlux()\n            .doOnCancel(() -> postUpdatedSinks.remove(sink))\n            .doOnTerminate(() -> postUpdatedSinks.remove(sink));\n    }\n\n    @SubscriptionMapping\n    public Publisher<Long> postDeleted() {\n        Sinks.Many<Long> sink = Sinks.many().multicast().directBestEffort();\n        postDeletedSinks.add(sink);\n\n        return sink.asFlux()\n            .doOnCancel(() -> postDeletedSinks.remove(sink))\n            .doOnTerminate(() -> postDeletedSinks.remove(sink));\n    }\n\n    @SubscriptionMapping\n    public Publisher<Comment> commentAdded(@Argument Long postId) {\n        Sinks.Many<Comment> sink = Sinks.many().multicast().directBestEffort();\n\n        commentAddedSinks.computeIfAbsent(postId, k -> new CopyOnWriteArrayList<>())\n            .add(sink);\n\n        log.info(\"New subscriber to commentAdded for post: {}\", postId);\n\n        return sink.asFlux()\n            .doOnCancel(() -> {\n                CopyOnWriteArrayList<Sink<Comment>> sinks = commentAddedSinks.get(postId);\n                if (sinks != null) {\n                    sinks.remove(sink);\n                    if (sinks.isEmpty()) {\n                        commentAddedSinks.remove(postId);\n                    }\n                }\n            })\n            .doOnTerminate(() -> {\n                CopyOnWriteArrayList<Sink<Comment>> sinks = commentAddedSinks.get(postId);\n                if (sinks != null) sinks.remove(sink);\n            });\n    }\n\n    @SubscriptionMapping\n    public Publisher<Long> commentDeleted(@Argument Long postId) {\n        return Flux.create(emitter -> {\n            log.info(\"Subscriber to commentDeleted for post: {}\", postId);\n            emitter.onDispose(() -> log.info(\"Unsubscribed from commentDeleted: {}\", postId));\n        });\n    }\n\n    @SubscriptionMapping\n    public Publisher<Notification> notificationReceived(@Argument Long userId) {\n        Sinks.Many<Notification> sink = Sinks.many().multicast().directBestEffort();\n        String key = \"user:\" + userId;\n\n        notificationSinks.computeIfAbsent(key, k -> new CopyOnWriteArrayList<>())\n            .add(sink);\n\n        return sink.asFlux()\n            .doOnCancel(() -> {\n                CopyOnWriteArrayList<Sink<Notification>> sinks = notificationSinks.get(key);\n                if (sinks != null) sinks.remove(sink);\n            });\n    }\n\n    @SubscriptionMapping\n    public Publisher<MetricsUpdate> metricsUpdated() {\n        Sinks.Many<MetricsUpdate> sink = Sinks.many().multicast().directBestEffort();\n        metricsSinks.add(sink);\n\n        return sink.asFlux()\n            .doOnCancel(() -> metricsSinks.remove(sink))\n            .doOnTerminate(() -> metricsSinks.remove(sink));\n    }\n\n    public void emitPostCreated(Post post) {\n        for (Sink<Post> sink : postCreatedSinks) {\n            sink.tryEmitNext(post);\n        }\n    }\n\n    public void emitPostUpdated(Post post) {\n        for (Sink<Post> sink : postUpdatedSinks) {\n            sink.tryEmitNext(post);\n        }\n    }\n\n    public void emitPostDeleted(Long postId) {\n        for (Sink<Long> sink : postDeletedSinks) {\n            sink.tryEmitNext(postId);\n        }\n    }\n\n    public void emitCommentAdded(Long postId, Comment comment) {\n        CopyOnWriteArrayList<Sink<Comment>> sinks = commentAddedSinks.get(postId);\n        if (sinks != null) {\n            for (Sink<Comment> sink : sinks) {\n                sink.tryEmitNext(comment);\n            }\n        }\n\n        User postAuthor = comment.getPost().getAuthor();\n        if (!postAuthor.getId().equals(comment.getAuthor().getId())) {\n            emitNotification(postAuthor.getId(), Notification.of(\n                \"new_comment\",\n                comment.getAuthor().getDisplayName() + \" commented on your post\",\n                Map.of(\"postId\", postId.toString(), \"commentId\", comment.getId().toString())\n            ));\n        }\n    }\n\n    public void emitNotification(Long userId, Notification notification) {\n        String key = \"user:\" + userId;\n        CopyOnWriteArrayList<Sink<Notification>> sinks = notificationSinks.get(key);\n        if (sinks != null) {\n            for (Sink<Notification> sink : sinks) {\n                sink.tryEmitNext(notification);\n            }\n        }\n    }\n\n    @SubscriptionMapping\n    public Publisher<MetricsUpdate> metricsUpdatedDirect() {\n        return Flux.interval(java.time.Duration.ofSeconds(30))\n            .map(tick -> new MetricsUpdate(\n                (int) postRepository.count(),\n                (int) postRepository.countPublishedPosts(),\n                0,\n                0,\n                LocalDateTime.now()\n            ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.model;\n\nimport java.time.LocalDateTime;\nimport java.util.Map;\n\npublic record Notification(\n    String id,\n    String type,\n    String message,\n    Map<String, String> data,\n    LocalDateTime createdAt,\n    boolean read\n) {\n    public static Notification of(String type, String message, Map<String, String> data) {\n        return new Notification(\n            java.util.UUID.randomUUID().toString(),\n            type,\n            message,\n            data,\n            LocalDateTime.now(),\n            false\n        );\n    }\n}\n\npublic record MetricsUpdate(\n    int totalUsers,\n    int totalPosts,\n    int totalComments,\n    int activeUsers24h,\n    LocalDateTime timestamp\n) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-security",
      children: "8. Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.security.web.SecurityFilterChain;\nimport org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;\nimport org.springframework.web.cors.CorsConfiguration;\nimport org.springframework.web.cors.CorsConfigurationSource;\nimport org.springframework.web.cors.UrlBasedCorsConfigurationSource;\n\nimport java.util.List;\n\n@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity\npublic class SecurityConfig {\n\n    private final JwtAuthenticationFilter jwtAuthenticationFilter;\n\n    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {\n        this.jwtAuthenticationFilter = jwtAuthenticationFilter;\n    }\n\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http\n            .cors(cors -> cors.configurationSource(corsConfigurationSource()))\n            .csrf(csrf -> csrf.disable())\n            .sessionManagement(session ->\n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/graphql\").permitAll()\n                .requestMatchers(\"/graphiql/**\").permitAll()\n                .requestMatchers(\"/voyager/**\").permitAll()\n                .requestMatchers(\"/uploads/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .addFilterBefore(jwtAuthenticationFilter,\n                UsernamePasswordAuthenticationFilter.class);\n\n        return http.build();\n    }\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration configuration = new CorsConfiguration();\n        configuration.setAllowedOrigins(List.of(\"*\"));\n        configuration.setAllowedMethods(List.of(\"GET\", \"POST\", \"OPTIONS\"));\n        configuration.setAllowedHeaders(List.of(\"*\"));\n        configuration.setExposedHeaders(List.of(\"Authorization\"));\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/**\", configuration);\n        return source;\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder(12);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport io.jsonwebtoken.*;\nimport io.jsonwebtoken.security.Keys;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.stereotype.Component;\n\nimport javax.crypto.SecretKey;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Date;\nimport java.util.List;\n\n@Component\npublic class JwtTokenProvider {\n\n    private final SecretKey key;\n    private final long accessTokenValidityMs;\n    private final long refreshTokenValidityMs;\n\n    public JwtTokenProvider(\n            @Value(\"${jwt.secret:default-secret-key-change-in-production-minimum-256-bits}\") String secret,\n            @Value(\"${jwt.access-token-validity-ms:3600000}\") long accessValidity,\n            @Value(\"${jwt.refresh-token-validity-ms:604800000}\") long refreshValidity) {\n        this.key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));\n        this.accessTokenValidityMs = accessValidity;\n        this.refreshTokenValidityMs = refreshValidity;\n    }\n\n    public String createAccessToken(Long userId, String username, List<String> roles) {\n        Date now = new Date();\n        Date validity = new Date(now.getTime() + accessTokenValidityMs);\n\n        return Jwts.builder()\n            .subject(userId.toString())\n            .claim(\"username\", username)\n            .claim(\"roles\", roles)\n            .issuedAt(now)\n            .expiration(validity)\n            .signWith(key)\n            .compact();\n    }\n\n    public String createRefreshToken(Long userId) {\n        Date now = new Date();\n        Date validity = new Date(now.getTime() + refreshTokenValidityMs);\n\n        return Jwts.builder()\n            .subject(userId.toString())\n            .claim(\"type\", \"refresh\")\n            .issuedAt(now)\n            .expiration(validity)\n            .signWith(key)\n            .compact();\n    }\n\n    public boolean validateToken(String token) {\n        try {\n            Jwts.parser().verifyWith(key).build().parseSignedClaims(token);\n            return true;\n        } catch (JwtException | IllegalArgumentException e) {\n            return false;\n        }\n    }\n\n    public Long getUserIdFromToken(String token) {\n        Claims claims = Jwts.parser()\n            .verifyWith(key)\n            .build()\n            .parseSignedClaims(token)\n            .getPayload();\n        return Long.parseLong(claims.getSubject());\n    }\n\n    public String getUsernameFromToken(String token) {\n        Claims claims = Jwts.parser()\n            .verifyWith(key)\n            .build()\n            .parseSignedClaims(token)\n            .getPayload();\n        return claims.get(\"username\", String.class);\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public List<String> getRolesFromToken(String token) {\n        Claims claims = Jwts.parser()\n            .verifyWith(key)\n            .build()\n            .parseSignedClaims(token)\n            .getPayload();\n        return claims.get(\"roles\", List.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport com.aiengineering.course.model.User;\nimport com.aiengineering.course.repository.UserRepository;\nimport jakarta.servlet.FilterChain;\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.security.authentication.UsernamePasswordAuthenticationToken;\nimport org.springframework.security.core.authority.SimpleGrantedAuthority;\nimport org.springframework.security.core.context.SecurityContextHolder;\nimport org.springframework.stereotype.Component;\nimport org.springframework.util.StringUtils;\nimport org.springframework.web.filter.OncePerRequestFilter;\n\nimport java.io.IOException;\nimport java.util.List;\nimport java.util.Optional;\n\n@Component\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n\n    private static final Logger log = LoggerFactory.getLogger(JwtAuthenticationFilter.class);\n\n    private final JwtTokenProvider jwtTokenProvider;\n    private final UserRepository userRepository;\n\n    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider,\n                                    UserRepository userRepository) {\n        this.jwtTokenProvider = jwtTokenProvider;\n        this.userRepository = userRepository;\n    }\n\n    @Override\n    protected void doFilterInternal(\n            HttpServletRequest request,\n            HttpServletResponse response,\n            FilterChain filterChain) throws ServletException, IOException {\n\n        String token = extractToken(request);\n\n        if (token != null && jwtTokenProvider.validateToken(token)) {\n            try {\n                Long userId = jwtTokenProvider.getUserIdFromToken(token);\n                Optional<User> userOpt = userRepository.findById(userId);\n\n                if (userOpt.isPresent()) {\n                    User user = userOpt.get();\n                    List<SimpleGrantedAuthority> authorities = List.of(\n                        new SimpleGrantedAuthority(\"ROLE_\" + user.getRole().name())\n                    );\n\n                    UsernamePasswordAuthenticationToken authentication =\n                        new UsernamePasswordAuthenticationToken(\n                            user, null, authorities);\n                    authentication.setDetails(user);\n\n                    SecurityContextHolder.getContext().setAuthentication(authentication);\n                    log.debug(\"Authenticated user: {}\", user.getUsername());\n                }\n            } catch (Exception e) {\n                log.error(\"Failed to authenticate token\", e);\n                SecurityContextHolder.clearContext();\n            }\n        }\n\n        filterChain.doFilter(request, response);\n    }\n\n    private String extractToken(HttpServletRequest request) {\n        String bearerToken = request.getHeader(\"Authorization\");\n        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(\"Bearer \")) {\n            return bearerToken.substring(7);\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.service;\n\nimport com.aiengineering.course.config.JwtTokenProvider;\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.UserRepository;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.core.context.SecurityContextHolder;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Service\npublic class UserService {\n\n    private final UserRepository userRepository;\n    private final PasswordEncoder passwordEncoder;\n    private final JwtTokenProvider jwtTokenProvider;\n\n    public UserService(\n            UserRepository userRepository,\n            PasswordEncoder passwordEncoder,\n            JwtTokenProvider jwtTokenProvider) {\n        this.userRepository = userRepository;\n        this.passwordEncoder = passwordEncoder;\n        this.jwtTokenProvider = jwtTokenProvider;\n    }\n\n    public Optional<User> getCurrentUser() {\n        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();\n        if (authentication != null && authentication.isAuthenticated()\n            && authentication.getPrincipal() instanceof User user) {\n            return Optional.of(user);\n        }\n        return Optional.empty();\n    }\n\n    @Transactional\n    public AuthResponse login(String username, String password) {\n        Optional<User> userOpt = userRepository.findByUsername(username);\n\n        if (userOpt.isEmpty()) {\n            userOpt = userRepository.findByEmail(username);\n        }\n\n        if (userOpt.isEmpty()) {\n            return new AuthResponse(false, null, null, null, \"User not found\");\n        }\n\n        User user = userOpt.get();\n\n        if (!passwordEncoder.matches(password, user.getPassword())) {\n            return new AuthResponse(false, null, null, null, \"Invalid password\");\n        }\n\n        List<String> roles = List.of(\"ROLE_\" + user.getRole().name());\n        String accessToken = jwtTokenProvider.createAccessToken(\n            user.getId(), user.getUsername(), roles);\n        String refreshToken = jwtTokenProvider.createRefreshToken(user.getId());\n\n        return new AuthResponse(true, accessToken, refreshToken, user, \"Login successful\");\n    }\n\n    @Transactional\n    public AuthResponse refreshToken(String token) {\n        if (!jwtTokenProvider.validateToken(token)) {\n            return new AuthResponse(false, null, null, null, \"Invalid refresh token\");\n        }\n\n        Long userId = jwtTokenProvider.getUserIdFromToken(token);\n        Optional<User> userOpt = userRepository.findById(userId);\n\n        if (userOpt.isEmpty()) {\n            return new AuthResponse(false, null, null, null, \"User not found\");\n        }\n\n        User user = userOpt.get();\n        List<String> roles = List.of(\"ROLE_\" + user.getRole().name());\n        String accessToken = jwtTokenProvider.createAccessToken(\n            user.getId(), user.getUsername(), roles);\n        String newRefreshToken = jwtTokenProvider.createRefreshToken(user.getId());\n\n        return new AuthResponse(true, accessToken, newRefreshToken, user, \"Token refreshed\");\n    }\n\n    @Transactional\n    public AuthResponse register(String username, String email, String password,\n                                  String displayName) {\n        if (userRepository.existsByUsername(username)) {\n            return new AuthResponse(false, null, null, null, \"Username already taken\");\n        }\n        if (userRepository.existsByEmail(email)) {\n            return new AuthResponse(false, null, null, null, \"Email already registered\");\n        }\n\n        User user = User.builder()\n            .username(username)\n            .email(email)\n            .password(passwordEncoder.encode(password))\n            .displayName(displayName)\n            .role(UserRole.AUTHOR)\n            .build();\n\n        user = userRepository.save(user);\n\n        List<String> roles = List.of(\"ROLE_\" + user.getRole().name());\n        String accessToken = jwtTokenProvider.createAccessToken(\n            user.getId(), user.getUsername(), roles);\n        String refreshToken = jwtTokenProvider.createRefreshToken(user.getId());\n\n        return new AuthResponse(true, accessToken, refreshToken, user, \"Registration successful\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.AuthResponse;\nimport com.aiengineering.course.service.UserService;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.stereotype.Controller;\n\n@Controller\npublic class AuthMutationController {\n\n    private final UserService userService;\n\n    public AuthMutationController(UserService userService) {\n        this.userService = userService;\n    }\n\n    @MutationMapping\n    public AuthResponse login(@Argument String username, @Argument String password) {\n        return userService.login(username, password);\n    }\n\n    @MutationMapping\n    public AuthResponse refreshToken(@Argument String token) {\n        return userService.refreshToken(token);\n    }\n\n    @MutationMapping\n    public boolean logout() {\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-exception-handling",
      children: "9. Exception Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport graphql.GraphQLError;\nimport graphql.GraphqlErrorBuilder;\nimport graphql.schema.DataFetchingEnvironment;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.graphql.execution.DataFetcherExceptionResolver;\nimport org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;\nimport org.springframework.graphql.execution.ErrorType;\nimport org.springframework.security.access.AccessDeniedException;\nimport org.springframework.stereotype.Component;\nimport org.springframework.validation.BindException;\nimport org.springframework.validation.FieldError;\n\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n@Component\npublic class GraphQlExceptionResolver extends DataFetcherExceptionResolverAdapter {\n\n    private static final Logger log = LoggerFactory.getLogger(GraphQlExceptionResolver.class);\n\n    @Override\n    protected GraphQLError resolveToSingleError(Throwable ex, DataFetchingEnvironment env) {\n        log.error(\"GraphQL error: {} at path: {}\", ex.getMessage(), env.getExecutionStepInfo().getPath());\n\n        if (ex instanceof AccessDeniedException) {\n            return GraphqlErrorBuilder.newError()\n                .errorType(ErrorType.FORBIDDEN)\n                .message(\"Access denied: \" + ex.getMessage())\n                .path(env.getExecutionStepInfo().getPath())\n                .location(env.getField().getSourceLocation())\n                .build();\n        }\n\n        if (ex instanceof IllegalArgumentException) {\n            return GraphqlErrorBuilder.newError()\n                .errorType(ErrorType.BAD_REQUEST)\n                .message(ex.getMessage())\n                .path(env.getExecutionStepInfo().getPath())\n                .location(env.getField().getSourceLocation())\n                .build();\n        }\n\n        if (ex instanceof jakarta.validation.ConstraintViolationException) {\n            return GraphqlErrorBuilder.newError()\n                .errorType(ErrorType.BAD_REQUEST)\n                .message(\"Validation error: \" + ex.getMessage())\n                .path(env.getExecutionStepInfo().getPath())\n                .location(env.getField().getSourceLocation())\n                .build();\n        }\n\n        if (ex instanceof org.springframework.dao.DataIntegrityViolationException) {\n            return GraphqlErrorBuilder.newError()\n                .errorType(ErrorType.BAD_REQUEST)\n                .message(\"Data integrity violation: \" + ex.getMostSpecificCause().getMessage())\n                .path(env.getExecutionStepInfo().getPath())\n                .location(env.getField().getSourceLocation())\n                .build();\n        }\n\n        return GraphqlErrorBuilder.newError()\n            .errorType(ErrorType.INTERNAL_ERROR)\n            .message(\"Internal server error: \" + ex.getMessage())\n            .path(env.getExecutionStepInfo().getPath())\n            .location(env.getField().getSourceLocation())\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.config;\n\nimport graphql.GraphQLError;\nimport graphql.GraphqlErrorBuilder;\nimport graphql.schema.DataFetchingEnvironment;\nimport org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;\nimport org.springframework.stereotype.Component;\n\nimport java.util.concurrent.CompletionException;\n\n@Component\npublic class ValidationExceptionResolver extends DataFetcherExceptionResolverAdapter {\n\n    @Override\n    protected GraphQLError resolveToSingleError(Throwable ex, DataFetchingEnvironment env) {\n        Throwable cause = ex;\n        if (ex instanceof CompletionException && ex.getCause() != null) {\n            cause = ex.getCause();\n        }\n\n        if (cause instanceof jakarta.validation.ConstraintViolationException cve) {\n            var violations = cve.getConstraintViolations().stream()\n                .map(v -> v.getPropertyPath() + \": \" + v.getMessage())\n                .toList();\n\n            return GraphqlErrorBuilder.newError()\n                .errorType(graphql.execution.ErrorType.ValidationError)\n                .message(\"Validation failed: \" + String.join(\", \", violations))\n                .path(env.getExecutionStepInfo().getPath())\n                .location(env.getField().getSourceLocation())\n                .build();\n        }\n\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-file-upload",
      children: "10. File Upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course.controller;\n\nimport com.aiengineering.course.model.FileUploadResponse;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardCopyOption;\nimport java.util.UUID;\n\n@Controller\npublic class FileUploadController {\n\n    private static final Logger log = LoggerFactory.getLogger(FileUploadController.class);\n\n    private final Path uploadDir = Paths.get(\"uploads\");\n\n    public FileUploadController() {\n        try {\n            Files.createDirectories(uploadDir);\n        } catch (IOException e) {\n            throw new RuntimeException(\"Could not create upload directory\", e);\n        }\n    }\n\n    @MutationMapping\n    public FileUploadResponse uploadFile(@Argument MultipartFile file,\n                                          @Argument String description) {\n        try {\n            String originalFilename = file.getOriginalFilename();\n            String extension = \"\";\n            if (originalFilename != null && originalFilename.contains(\".\")) {\n                extension = originalFilename.substring(originalFilename.lastIndexOf(\".\"));\n            }\n\n            String storedFilename = UUID.randomUUID().toString() + extension;\n            Path targetPath = uploadDir.resolve(storedFilename);\n\n            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);\n\n            long fileSize = file.getSize();\n            String fileUrl = \"/uploads/\" + storedFilename;\n\n            log.info(\"Uploaded file: {} ({}) as {}\", originalFilename, fileSize, storedFilename);\n\n            return new FileUploadResponse(true, fileUrl, originalFilename, fileSize,\n                \"File uploaded successfully\");\n        } catch (IOException e) {\n            log.error(\"File upload failed\", e);\n            return new FileUploadResponse(false, null, null, 0L,\n                \"Upload failed: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-testing",
      children: "11. Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport com.aiengineering.course.model.*;\nimport com.aiengineering.course.repository.PostRepository;\nimport com.aiengineering.course.repository.UserRepository;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;\nimport org.springframework.boot.test.autoconfigure.graphql.tester.AutoConfigureGraphQlTester;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.graphql.test.tester.GraphQlTester;\nimport org.springframework.test.context.ActiveProfiles;\n\n@SpringBootTest\n@AutoConfigureGraphQlTester\n@ActiveProfiles(\"test\")\npublic class GraphQlQueryTest {\n\n    @Autowired\n    private GraphQlTester graphQlTester;\n\n    @Autowired\n    private PostRepository postRepository;\n\n    @Autowired\n    private UserRepository userRepository;\n\n    private User testUser;\n    private Post testPost;\n\n    @BeforeEach\n    void setUp() {\n        userRepository.deleteAll();\n        postRepository.deleteAll();\n\n        testUser = User.builder()\n            .username(\"testuser\")\n            .email(\"test@example.com\")\n            .password(\"password\")\n            .displayName(\"Test User\")\n            .role(UserRole.AUTHOR)\n            .build();\n        testUser = userRepository.save(testUser);\n\n        testPost = Post.builder()\n            .title(\"Test Post\")\n            .slug(\"test-post\")\n            .content(\"This is a test post content\")\n            .author(testUser)\n            .status(PostStatus.PUBLISHED)\n            .tags(java.util.Set.of(\"java\", \"spring\"))\n            .build();\n        testPost = postRepository.save(testPost);\n    }\n\n    @Test\n    void testPostQuery() {\n        String document = \"\"\"\n            query post($slug: String) {\n                post(slug: $slug) {\n                    id\n                    title\n                    slug\n                    content\n                    status\n                    author {\n                        username\n                        displayName\n                    }\n                    tags\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .variable(\"slug\", \"test-post\")\n            .execute()\n            .path(\"post.id\")\n            .entity(String.class)\n            .isEqualTo(testPost.getId().toString())\n            .path(\"post.title\")\n            .entity(String.class)\n            .isEqualTo(\"Test Post\")\n            .path(\"post.author.username\")\n            .entity(String.class)\n            .isEqualTo(\"testuser\")\n            .path(\"post.tags\")\n            .entityList(String.class)\n            .contains(\"java\", \"spring\");\n    }\n\n    @Test\n    void testPostsQueryWithPagination() {\n        String document = \"\"\"\n            query posts($first: Int!) {\n                posts(first: $first) {\n                    edges {\n                        node {\n                            id\n                            title\n                        }\n                        cursor\n                    }\n                    pageInfo {\n                        hasNextPage\n                        totalCount\n                    }\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .variable(\"first\", 10)\n            .execute()\n            .path(\"posts.edges\")\n            .entityList(Object.class)\n            .hasSize(1)\n            .path(\"posts.pageInfo.totalCount\")\n            .entity(int.class)\n            .isEqualTo(1);\n    }\n\n    @Test\n    void testCreatePostMutation() {\n        String document = \"\"\"\n            mutation createPost($input: CreatePostInput!) {\n                createPost(input: $input) {\n                    success\n                    message\n                    post {\n                        id\n                        title\n                        status\n                    }\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .variable(\"input\", Map.of(\n                \"title\", \"New Post\",\n                \"content\", \"New content\",\n                \"tags\", List.of(\"java\"),\n                \"status\", PostStatus.DRAFT\n            ))\n            .execute()\n            .path(\"createPost.success\")\n            .entity(boolean.class)\n            .isEqualTo(true)\n            .path(\"createPost.post.title\")\n            .entity(String.class)\n            .isEqualTo(\"New Post\");\n    }\n\n    @Test\n    void testUserQueryWithConnection() {\n        String document = \"\"\"\n            query users($first: Int!) {\n                users(first: $first) {\n                    edges {\n                        node {\n                            username\n                            displayName\n                            role\n                        }\n                    }\n                    pageInfo {\n                        totalCount\n                    }\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .variable(\"first\", 10)\n            .execute()\n            .path(\"users.edges[0].node.username\")\n            .entity(String.class)\n            .isEqualTo(\"testuser\")\n            .path(\"users.pageInfo.totalCount\")\n            .entity(int.class)\n            .isEqualTo(1);\n    }\n\n    @Test\n    void testSearchPosts() {\n        String document = \"\"\"\n            query search($first: Int!, $search: String) {\n                posts(first: $first, search: $search) {\n                    edges {\n                        node {\n                            id\n                            title\n                        }\n                    }\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .variable(\"first\", 10)\n            .variable(\"search\", \"test\")\n            .execute()\n            .path(\"posts.edges[*].node.title\")\n            .entityList(String.class)\n            .contains(\"Test Post\");\n    }\n\n    @Test\n    void testErrorHandling() {\n        String document = \"\"\"\n            query post($slug: String) {\n                post(slug: $slug) {\n                    id\n                    title\n                    nonexistentField\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .variable(\"slug\", \"test-post\")\n            .execute()\n            .errors()\n            .expect(graphql.GraphQLError.class)\n            .verify()\n            .path(\"$.errors\")\n            .hasValue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.aiengineering.course;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;\nimport org.springframework.graphql.test.tester.GraphQlTester;\n\n@GraphQlTest\npublic class GraphQlSchemaTest {\n\n    @Autowired\n    private GraphQlTester graphQlTester;\n\n    @Test\n    void testIntrospection() {\n        String document = \"\"\"\n            query {\n                __schema {\n                    types {\n                        name\n                        kind\n                        fields {\n                            name\n                            type {\n                                name\n                                kind\n                            }\n                        }\n                    }\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .execute()\n            .path(\"__schema.types[*].name\")\n            .entityList(String.class)\n            .contains(\"Query\", \"Mutation\", \"Subscription\", \"Post\", \"User\", \"Comment\");\n    }\n\n    @Test\n    void testTypeDefinitions() {\n        String document = \"\"\"\n            {\n                __type(name: \"Post\") {\n                    name\n                    fields {\n                        name\n                        type {\n                            name\n                        }\n                    }\n                    interfaces {\n                        name\n                    }\n                }\n            }\n            \"\"\";\n\n        graphQlTester.document(document)\n            .execute()\n            .path(\"__type.name\")\n            .entity(String.class)\n            .isEqualTo(\"Post\")\n            .path(\"__type.fields[*].name\")\n            .entityList(String.class)\n            .contains(\"id\", \"title\", \"content\", \"author\", \"comments\")\n            .path(\"__type.interfaces[0].name\")\n            .entity(String.class)\n            .isEqualTo(\"Node\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Approach A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Commands/APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required dependencies and configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify versions match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core code patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cover success and failure paths"
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
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern C"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of this chapter's main topic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enhanced reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Enhanced reliability.** While all are benefits, the core value proposition is reliability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which approach is recommended for production deployments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The simplest solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The most feature-rich option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The one with best operational characteristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Whatever the team knows best"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) The one with best operational characteristics.** Production choices should prioritize observability, maintainability, and operability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you consider this pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) For every project regardless of size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When complexity justifies the overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only in legacy systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Never → it is outdated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When complexity justifies the overhead.** Apply patterns when the problem complexity warrants the additional abstraction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring GraphQL enables type-safe, efficient API development:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Annotation/Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".graphqls"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define types, queries, mutations, subscriptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@QueryMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map GraphQL queries to controller methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@MutationMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle data modification operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subscription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@SubscriptionMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time data streaming via WebSocket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Loading"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DataLoader"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@BatchMapping"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N+1 prevention through batch loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@GraphQlExceptionResolver"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreAuthorize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method-level authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection/Edge/PageInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor-based pagination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@GraphQlTest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GraphQlTester"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Upload"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Upload"
            }), " scalar"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multipart file upload support"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schema Design"
          }), ": Create a GraphQL schema for an e-commerce platform with Product, Order, Customer types and related queries/mutations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Batch Loading"
          }), ": Implement DataLoader for a many-to-many relationship (e.g., posts and tags) and demonstrate N+1 prevention."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subscriptions"
          }), ": Build a real-time chat subscription that broadcasts messages to all connected clients."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security"
          }), ": Implement role-based access where ADMIN can delete any post, but AUTHOR can only delete their own."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pagination"
          }), ": Add cursor-based pagination to a search query that returns thousands of results."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Testing"
          }), ": Write comprehensive tests for all query, mutation, and error scenarios using GraphQlTester."]
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