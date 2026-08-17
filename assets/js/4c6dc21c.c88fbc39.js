"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[91661],{

/***/ 37233
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_19_jdbc_jooq_md_4c6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-19-jdbc-jooq-md-4c6.json
const site_docs_courses_java_19_jdbc_jooq_md_4c6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/19-jdbc-jooq","title":"JDBC, Connection Pooling & JOOQ","description":"Previous JPA/Hibernate","source":"@site/docs/courses/java/19-jdbc-jooq.md","sourceDirName":"courses/java","slug":"/java/19-jdbc-jooq","permalink":"/ai-engineering-journey/java/19-jdbc-jooq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"19-jdbc-jooq","slug":"/java/19-jdbc-jooq","title":"JDBC, Connection Pooling & JOOQ","sidebar_label":"JDBC, Connection Pooling & JOOQ","sidebar_position":19},"sidebar":"course-java","previous":{"title":"File Upload, Download & Streaming","permalink":"/ai-engineering-journey/java/18-file-handling"},"next":{"title":"JPA & Hibernate Deep Dive","permalink":"/ai-engineering-journey/java/20-jpa-hibernate"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/19-jdbc-jooq.md


const frontMatter = {
	id: '19-jdbc-jooq',
	slug: '/java/19-jdbc-jooq',
	title: 'JDBC, Connection Pooling & JOOQ',
	sidebar_label: 'JDBC, Connection Pooling & JOOQ',
	sidebar_position: 19
};
const contentTitle = 'JDBC, Connection Pooling & JOOQ';

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
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "1. JDBC Core",
  "id": "1-jdbc-core",
  "level": 2
}, {
  "value": "1.1 What is JDBC?",
  "id": "11-what-is-jdbc",
  "level": 3
}, {
  "value": "1.2 Database Connectivity with DriverManager",
  "id": "12-database-connectivity-with-drivermanager",
  "level": 3
}, {
  "value": "1.3 Statement &amp; SQL Injection",
  "id": "13-statement--sql-injection",
  "level": 3
}, {
  "value": "1.4 PreparedStatement &amp; SQL Injection Prevention",
  "id": "14-preparedstatement--sql-injection-prevention",
  "level": 3
}, {
  "value": "1.5 CallableStatement for Stored Procedures",
  "id": "15-callablestatement-for-stored-procedures",
  "level": 3
}, {
  "value": "1.6 ResultSet &amp; ResultSetMetaData",
  "id": "16-resultset--resultsetmetadata",
  "level": 3
}, {
  "value": "1.7 DatabaseMetaData",
  "id": "17-databasemetadata",
  "level": 3
}, {
  "value": "1.8 Batch Updates",
  "id": "18-batch-updates",
  "level": 3
}, {
  "value": "1.9 Scrollable &amp; Updatable ResultSets",
  "id": "19-scrollable--updatable-resultsets",
  "level": 3
}, {
  "value": "2. DataSource &amp; Connection Pooling",
  "id": "2-datasource--connection-pooling",
  "level": 2
}, {
  "value": "2.1 The DataSource Interface",
  "id": "21-the-datasource-interface",
  "level": 3
}, {
  "value": "2.2 DriverManagerDataSource",
  "id": "22-drivermanagerdatasource",
  "level": 3
}, {
  "value": "2.3 HikariCP Configuration",
  "id": "23-hikaricp-configuration",
  "level": 3
}, {
  "value": "2.4 Pool Metrics &amp; Monitoring",
  "id": "24-pool-metrics--monitoring",
  "level": 3
}, {
  "value": "3. JdbcTemplate",
  "id": "3-jdbctemplate",
  "level": 2
}, {
  "value": "3.1 query, queryForObject, queryForList",
  "id": "31-query-queryforobject-queryforlist",
  "level": 3
}, {
  "value": "3.2 update, batchUpdate, queryForMap",
  "id": "32-update-batchupdate-queryformap",
  "level": 3
}, {
  "value": "3.3 ResultSetExtractor, RowMapper, RowCallbackHandler",
  "id": "33-resultsetextractor-rowmapper-rowcallbackhandler",
  "level": 3
}, {
  "value": "3.4 BeanPropertyRowMapper",
  "id": "34-beanpropertyrowmapper",
  "level": 3
}, {
  "value": "4. NamedParameterJdbcTemplate",
  "id": "4-namedparameterjdbctemplate",
  "level": 2
}, {
  "value": "4.1 Named Parameters",
  "id": "41-named-parameters",
  "level": 3
}, {
  "value": "4.2 SqlParameterSource",
  "id": "42-sqlparametersource",
  "level": 3
}, {
  "value": "4.3 IN Clause with Named Parameters",
  "id": "43-in-clause-with-named-parameters",
  "level": 3
}, {
  "value": "5. jOOQ DSL",
  "id": "5-jooq-dsl",
  "level": 2
}, {
  "value": "5.1 Introduction to jOOQ",
  "id": "51-introduction-to-jooq",
  "level": 3
}, {
  "value": "5.2 Code Generation with jOOQ",
  "id": "52-code-generation-with-jooq",
  "level": 3
}, {
  "value": "5.3 DSL Queries (select, from, where, join, groupBy, having, orderBy, limit)",
  "id": "53-dsl-queries-select-from-where-join-groupby-having-orderby-limit",
  "level": 3
}, {
  "value": "5.4 Type-Safe Queries",
  "id": "54-type-safe-queries",
  "level": 3
}, {
  "value": "5.5 Multi-Tenancy with jOOQ",
  "id": "55-multi-tenancy-with-jooq",
  "level": 3
}, {
  "value": "5.6 jOOQ with Spring Boot",
  "id": "56-jooq-with-spring-boot",
  "level": 3
}, {
  "value": "5.7 CRUD with jOOQ (insertInto, update, delete)",
  "id": "57-crud-with-jooq-insertinto-update-delete",
  "level": 3
}, {
  "value": "5.8 DAO Generation",
  "id": "58-dao-generation",
  "level": 3
}, {
  "value": "5.9 jOOQ vs JPA",
  "id": "59-jooq-vs-jpa",
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
          href: "/ai-engineering-journey/java/18-file-handling",
          children: "File Handling"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/20-jpa-hibernate",
          children: "JPA/Hibernate"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jdbc-connection-pooling--jooq",
        children: "JDBC, Connection Pooling & JOOQ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish database connections using DriverManager and DataSource"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute SQL queries with Statement, PreparedStatement, and CallableStatement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent SQL injection attacks using parameterized queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate result sets and extract metadata from queries and database schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform batch updates for efficient bulk operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use scrollable and updatable ResultSets for advanced data navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure and tune HikariCP connection pools in Spring Boot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leverage JdbcTemplate for simplified database access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use NamedParameterJdbcTemplate for named parameter queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate type-safe database access code with jOOQ code generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build complex queries using the jOOQ DSL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement multi-tenancy strategies with jOOQ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare jOOQ with JPA for different use cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "JDBC Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DriverManager, Connection, Statement, ResultSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level, full control over SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection Pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HikariCP manages reusable connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure pool size, timeout, leak detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JdbcTemplate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring template for JDBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces boilerplate, maps results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jOOQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe SQL DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time SQL validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema/table per tenant with jOOQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter queries by tenant context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[JDBC Core] --> B[DataSource & Pooling]\n    B --> C[JdbcTemplate]\n    C --> D[jOOQ DSL]\n    D --> E[Code Generation]\n    E --> F[Advanced Queries]\n    F --> G[Multi-tenancy]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always use PreparedStatement over Statement to prevent SQL injection. The parameterized query approach ensures user input is never interpreted as SQL code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1-jdbc-core",
          children: "JDBC Core"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-datasource--connection-pooling",
          children: "DataSource & Connection Pooling"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-jdbctemplate",
          children: "JdbcTemplate"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-namedparameterjdbctemplate",
          children: "NamedParameterJdbcTemplate"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-jooq-dsl",
          children: "jOOQ DSL"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#summary",
          children: "Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#exercises",
          children: "Exercises"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-jdbc-core",
      children: "1. JDBC Core"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/19-jdbc-jooq.png",
        alt: "JDBC Connection Pooling & jOOQ Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-what-is-jdbc",
      children: "1.1 What is JDBC?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JDBC (Java Database Connectivity) is the standard Java API for interacting with relational databases. It provides a vendor-independent interface that lets applications execute SQL statements, retrieve results, and manage transactions without coupling to a specific database product."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JDBC architecture consists of two layers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JDBC API"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.sql"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "javax.sql"
        }), " packages) — the application-facing interfaces and classes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JDBC Drivers"
        }), " — vendor-specific implementations that translate JDBC calls into database-native protocols"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Every JDBC program follows this pattern:\n// 1. Load driver (optional in Java 6+)\n// 2. Obtain connection\n// 3. Create statement\n// 4. Execute query\n// 5. Process results\n// 6. Close resources\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are four types of JDBC drivers:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JDBC-ODBC Bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translates to ODBC; removed in Java 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts to database native client API; platform-specific"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware server translates to database protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thin Driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure Java, direct socket connection to database"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Type 4 drivers (thin drivers) are the standard today. Examples: PostgreSQL ", (0,jsx_runtime.jsx)(_components.code, {
        children: "org.postgresql.Driver"
      }), ", MySQL ", (0,jsx_runtime.jsx)(_components.code, {
        children: "com.mysql.cj.jdbc.Driver"
      }), ", H2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "org.h2.Driver"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-database-connectivity-with-drivermanager",
      children: "1.2 Database Connectivity with DriverManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DriverManager"
      }), " class manages a registry of JDBC drivers and establishes connections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.basic;\n\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class DriverManagerExample {\n\n    private static final String URL = \"jdbc:postgresql://localhost:5432/course_db\";\n    private static final String USER = \"appuser\";\n    private static final String PASSWORD = \"secret\";\n\n    public static void main(String[] args) {\n        // In Java 6+, DriverManager automatically discovers drivers\n        // via the ServiceLoader mechanism. Explicit Class.forName()\n        // is only needed for legacy drivers.\n        //\n        // Java 5 and earlier required:\n        // Class.forName(\"org.postgresql.Driver\");\n\n        String sql = \"SELECT COUNT(*) FROM users\";\n\n        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);\n             var stmt = conn.createStatement();\n             var rs = stmt.executeQuery(sql)) {\n\n            if (rs.next()) {\n                long count = rs.getLong(1);\n                System.out.println(\"User count: \" + count);\n            }\n\n        } catch (SQLException e) {\n            System.err.println(\"Database error: \" + e.getMessage());\n            System.err.println(\"SQL state: \" + e.getSQLState());\n            System.err.println(\"Error code: \" + e.getErrorCode());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DriverManager.getConnection()"
      }), " method has three overloads:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Full URL, user, password\nConnection c1 = DriverManager.getConnection(url, user, password);\n\n// URL + Properties (supports driver-specific properties)\nProperties props = new Properties();\nprops.setProperty(\"user\", \"appuser\");\nprops.setProperty(\"password\", \"secret\");\nprops.setProperty(\"ssl\", \"true\");\nprops.setProperty(\"sslmode\", \"verify-full\");\nConnection c2 = DriverManager.getConnection(url, props);\n\n// URL only (credentials embedded in URL)\nConnection c3 = DriverManager.getConnection(\n    \"jdbc:postgresql://localhost:5432/course_db?user=appuser&password=secret\"\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-statement--sql-injection",
      children: "1.3 Statement & SQL Injection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Statement"
      }), " interface sends SQL strings directly to the database. It is suitable for DDL statements but dangerous for dynamic queries with user input."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.statement;\n\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\n\npublic class StatementExample {\n\n    public static void main(String[] args) {\n        String sql = \"SELECT id, username, email FROM users\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             Statement stmt = conn.createStatement();\n             ResultSet rs = stmt.executeQuery(sql)) {\n\n            while (rs.next()) {\n                long id = rs.getLong(\"id\");\n                String username = rs.getString(\"username\");\n                String email = rs.getString(\"email\");\n                System.out.printf(\"%d | %s | %s%n\", id, username, email);\n            }\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Injection — The Critical Problem"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// VULNERABLE — NEVER DO THIS\npublic User findUserByUsername(String username) {\n    // If username = \"' OR '1'='1\", this becomes:\n    // SELECT * FROM users WHERE username = '' OR '1'='1'\n    // Which returns ALL users\n    String sql = \"SELECT * FROM users WHERE username = '\" + username + \"'\";\n\n    try (Statement stmt = connection.createStatement();\n         ResultSet rs = stmt.executeQuery(sql)) {\n        if (rs.next()) {\n            return mapUser(rs);\n        }\n    }\n    return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example injection attacks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Input: ' OR '1'='1\nSELECT * FROM users WHERE username = '' OR '1'='1'\n\n-- Input: '; DROP TABLE users; --\nSELECT * FROM users WHERE username = ''; DROP TABLE users; --'\n\n-- Input: ' UNION SELECT id, password, email FROM credentials; --\nSELECT * FROM users WHERE username = '' UNION SELECT id, password, email FROM credentials; --'\n\n-- Input: admin'--\nSELECT * FROM users WHERE username = 'admin'--'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Statement execute methods:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// executeQuery — for SELECT, returns ResultSet\nResultSet rs = stmt.executeQuery(\"SELECT * FROM users\");\n\n// executeUpdate — for INSERT, UPDATE, DELETE, DDL; returns affected row count\nint rowsInserted = stmt.executeUpdate(\"INSERT INTO users (username) VALUES ('newuser')\");\nint rowsUpdated = stmt.executeUpdate(\"UPDATE users SET active = true WHERE id = 1\");\nint rowsDeleted = stmt.executeUpdate(\"DELETE FROM users WHERE last_login IS NULL\");\n\n// execute — for any SQL; returns boolean (true = ResultSet, false = update count)\nboolean isResultSet = stmt.execute(\"SELECT * FROM users\");\nif (isResultSet) {\n    try (ResultSet rs = stmt.getResultSet()) { }\n} else {\n    int updateCount = stmt.getUpdateCount();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-preparedstatement--sql-injection-prevention",
      children: "1.4 PreparedStatement & SQL Injection Prevention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PreparedStatement"
      }), " precompiles SQL with parameter placeholders (", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), "), separating SQL structure from data. This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prevents SQL injection"
      }), " because parameter values are never interpreted as SQL code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.prepared;\n\nimport java.sql.*;\nimport java.time.LocalDate;\n\npublic class PreparedStatementExample {\n\n    private static final String INSERT_USER =\n        \"INSERT INTO users (username, email, password_hash, birth_date, active) \" +\n        \"VALUES (?, ?, ?, ?, ?)\";\n\n    private static final String FIND_BY_EMAIL =\n        \"SELECT id, username, email, birth_date, active, created_at \" +\n        \"FROM users WHERE email = ?\";\n\n    public void createUser(User user) throws SQLException {\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             PreparedStatement ps = conn.prepareStatement(INSERT_USER,\n                     Statement.RETURN_GENERATED_KEYS)) {\n\n            ps.setString(1, user.getUsername());\n            ps.setString(2, user.getEmail());\n            ps.setString(3, user.getPasswordHash());\n            ps.setObject(4, user.getBirthDate());\n            ps.setBoolean(5, user.isActive());\n\n            int affected = ps.executeUpdate();\n\n            try (ResultSet keys = ps.getGeneratedKeys()) {\n                if (keys.next()) {\n                    user.setId(keys.getLong(\"id\"));\n                }\n            }\n        }\n    }\n\n    public User findByEmail(String email) throws SQLException {\n        String sql = \"SELECT * FROM users WHERE email = ?\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             PreparedStatement ps = conn.prepareStatement(sql)) {\n\n            ps.setString(1, email);\n\n            try (ResultSet rs = ps.executeQuery()) {\n                if (rs.next()) {\n                    return mapUser(rs);\n                }\n            }\n        }\n        return null;\n    }\n\n    private User mapUser(ResultSet rs) throws SQLException {\n        User user = new User();\n        user.setId(rs.getLong(\"id\"));\n        user.setUsername(rs.getString(\"username\"));\n        user.setEmail(rs.getString(\"email\"));\n        user.setPasswordHash(rs.getString(\"password_hash\"));\n        user.setBirthDate(rs.getObject(\"birth_date\", LocalDate.class));\n        user.setActive(rs.getBoolean(\"active\"));\n        user.setCreatedAt(rs.getTimestamp(\"created_at\").toInstant());\n        return user;\n    }\n\n    // Why PreparedStatement prevents injection:\n    // Input: \"' OR '1'='1\"\n    // Query becomes: SELECT * FROM users WHERE email = ''' OR ''1''=''1'\n    // The parameter value is treated as data, not SQL syntax.\n\n    public static class User {\n        private Long id;\n        private String username;\n        private String email;\n        private String passwordHash;\n        private LocalDate birthDate;\n        private boolean active;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getUsername() { return username; }\n        public void setUsername(String username) { this.username = username; }\n        public String getEmail() { return email; }\n        public void setEmail(String email) { this.email = email; }\n        public String getPasswordHash() { return passwordHash; }\n        public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }\n        public LocalDate getBirthDate() { return birthDate; }\n        public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\n        public boolean isActive() { return active; }\n        public void setActive(boolean active) { this.active = active; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PreparedStatement setter methods:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "PreparedStatement ps = conn.prepareStatement(\"INSERT INTO widgets VALUES (?, ?, ?, ?, ?, ?, ?)\");\n\n// String types\nps.setString(1, \"text\");\nps.setNString(2, \"unicode text\");\n\n// Numeric types\nps.setInt(3, 42);\nps.setLong(4, 1000000L);\nps.setShort(5, (short) 1);\nps.setByte(6, (byte) 0x0F);\nps.setDouble(7, 3.14159);\nps.setFloat(8, 2.718f);\nps.setBigDecimal(9, new BigDecimal(\"199.99\"));\n\n// Date/Time types\nps.setDate(1, java.sql.Date.valueOf(LocalDate.now()));\nps.setTime(2, java.sql.Time.valueOf(LocalTime.now()));\nps.setTimestamp(3, java.sql.Timestamp.valueOf(LocalDateTime.now()));\n\n// Modern Java 8+ types (using setObject)\nps.setObject(4, LocalDate.now());\nps.setObject(5, LocalDateTime.now());\nps.setObject(6, Instant.now());\n\n// Binary types\nps.setBytes(7, new byte[]{0x00, 0x01, 0x02});\nps.setBinaryStream(8, inputStream, length);\nps.setBlob(9, blob);\n\n// Other types\nps.setBoolean(10, true);\nps.setNull(11, Types.VARCHAR);\nps.setObject(12, someJavaObject);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-callablestatement-for-stored-procedures",
      children: "1.5 CallableStatement for Stored Procedures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CallableStatement"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PreparedStatement"
      }), " for calling stored procedures and functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.callable;\n\nimport java.sql.*;\nimport java.math.BigDecimal;\n\npublic class CallableStatementExample {\n\n    // PostgreSQL stored procedure:\n    // CREATE OR REPLACE PROCEDURE transfer_funds(\n    //     p_from_account INT,\n    //     p_to_account INT,\n    //     p_amount DECIMAL(12,2),\n    //     INOUT p_status VARCHAR(50)\n    // )\n    // LANGUAGE plpgsql AS $$\n    // BEGIN\n    //     UPDATE accounts SET balance = balance - p_amount WHERE id = p_from_account;\n    //     UPDATE accounts SET balance = balance + p_amount WHERE id = p_to_account;\n    //     p_status := 'SUCCESS';\n    // EXCEPTION WHEN OTHERS THEN\n    //     p_status := 'ERROR: ' || SQLERRM;\n    // END; $$;\n\n    public String transferFunds(long fromAccount, long toAccount, BigDecimal amount) throws SQLException {\n        String sql = \"{CALL transfer_funds(?, ?, ?, ?)}\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             CallableStatement cs = conn.prepareCall(sql)) {\n\n            cs.setLong(1, fromAccount);\n            cs.setLong(2, toAccount);\n            cs.setBigDecimal(3, amount);\n            cs.registerOutParameter(4, Types.VARCHAR);\n\n            cs.execute();\n\n            return cs.getString(4);\n        }\n    }\n\n    // PostgreSQL function:\n    // CREATE OR REPLACE FUNCTION calculate_order_total(p_order_id INT)\n    // RETURNS DECIMAL(12,2) LANGUAGE plpgsql AS $$\n    // BEGIN\n    //     RETURN (SELECT SUM(quantity * unit_price) FROM order_items WHERE order_id = p_order_id);\n    // END; $$;\n\n    public BigDecimal calculateOrderTotal(long orderId) throws SQLException {\n        String sql = \"{? = CALL calculate_order_total(?)}\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             CallableStatement cs = conn.prepareCall(sql)) {\n\n            cs.registerOutParameter(1, Types.DECIMAL);\n            cs.setLong(2, orderId);\n            cs.execute();\n\n            return cs.getBigDecimal(1);\n        }\n    }\n\n    // MySQL stored procedure returning a result set:\n    // CREATE PROCEDURE get_users_by_status(p_active BOOLEAN)\n    // BEGIN\n    //     SELECT id, username, email FROM users WHERE active = p_active;\n    // END;\n\n    public void getUsersByStatus(boolean active) throws SQLException {\n        String sql = \"{CALL get_users_by_status(?)}\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/course_db\", \"appuser\", \"secret\");\n             CallableStatement cs = conn.prepareCall(sql)) {\n\n            cs.setBoolean(1, active);\n\n            boolean hasResults = cs.execute();\n\n            if (hasResults) {\n                try (ResultSet rs = cs.getResultSet()) {\n                    while (rs.next()) {\n                        System.out.printf(\"%d | %s | %s%n\",\n                            rs.getLong(\"id\"),\n                            rs.getString(\"username\"),\n                            rs.getString(\"email\"));\n                    }\n                }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-resultset--resultsetmetadata",
      children: "1.6 ResultSet & ResultSetMetaData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.resultset;\n\nimport java.sql.*;\nimport java.util.*;\n\npublic class ResultSetMetaDataExample {\n\n    public void exploreResultSet() throws SQLException {\n        String sql = \"SELECT u.id, u.username, u.email, u.created_at, \" +\n                     \"COUNT(o.id) AS order_count \" +\n                     \"FROM users u LEFT JOIN orders o ON u.id = o.user_id \" +\n                     \"GROUP BY u.id, u.username, u.email, u.created_at\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             Statement stmt = conn.createStatement();\n             ResultSet rs = stmt.executeQuery(sql)) {\n\n            ResultSetMetaData meta = rs.getMetaData();\n            int columnCount = meta.getColumnCount();\n\n            System.out.println(\"=== ResultSet Metadata ===\");\n            System.out.println(\"Column count: \" + columnCount);\n\n            for (int i = 1; i <= columnCount; i++) {\n                System.out.printf(\"Column %d:%n\", i);\n                System.out.printf(\"  Name:          %s%n\", meta.getColumnName(i));\n                System.out.printf(\"  Label:         %s%n\", meta.getColumnLabel(i));\n                System.out.printf(\"  Type:          %s (%d)%n\",\n                    meta.getColumnTypeName(i), meta.getColumnType(i));\n                System.out.printf(\"  Class:         %s%n\", meta.getColumnClassName(i));\n                System.out.printf(\"  Size:          %d%n\", meta.getColumnDisplaySize(i));\n                System.out.printf(\"  Precision:     %d%n\", meta.getPrecision(i));\n                System.out.printf(\"  Scale:         %d%n\", meta.getScale(i));\n                System.out.printf(\"  Nullable:      %s%n\", meta.isNullable(i) == ResultSetMetaData.columnNullable);\n                System.out.printf(\"  Auto-increment:%s%n\", meta.isAutoIncrement(i));\n                System.out.printf(\"  Signed:        %s%n\", meta.isSigned(i));\n                System.out.printf(\"  Table name:    %s%n\", meta.getTableName(i));\n                System.out.println();\n            }\n\n            // Generic ResultSet-to-List-of-Maps utility\n            List<Map<String, Object>> results = new ArrayList<>();\n            while (rs.next()) {\n                Map<String, Object> row = new LinkedHashMap<>();\n                for (int i = 1; i <= columnCount; i++) {\n                    row.put(meta.getColumnLabel(i), rs.getObject(i));\n                }\n                results.add(row);\n            }\n\n            System.out.println(\"Rows returned: \" + results.size());\n            for (int row = 0; row < Math.min(3, results.size()); row++) {\n                System.out.printf(\"Row %d: %s%n\", row + 1, results.get(row));\n            }\n        }\n    }\n\n    public static List<Map<String, Object>> toListOfMaps(ResultSet rs) throws SQLException {\n        ResultSetMetaData meta = rs.getMetaData();\n        int columnCount = meta.getColumnCount();\n        List<Map<String, Object>> results = new ArrayList<>();\n        while (rs.next()) {\n            Map<String, Object> row = new LinkedHashMap<>();\n            for (int i = 1; i <= columnCount; i++) {\n                row.put(meta.getColumnLabel(i), rs.getObject(i));\n            }\n            results.add(row);\n        }\n        return results;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ResultSet navigation methods:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "rs.next();             // move forward (false at end)\nrs.previous();         // move backward (scrollable only)\nrs.first();            // move to first row\nrs.last();             // move to last row\nrs.absolute(5);        // move to row 5 (1-indexed, negative = from end)\nrs.relative(3);        // move forward 3 rows\nrs.beforeFirst();      // move to before first row\nrs.afterLast();        // move to after last row\nrs.isFirst();          // check if at first row\nrs.isLast();           // check if at last row\nrs.getRow();           // get current row number\nrs.wasNull();          // check if last read value was SQL NULL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-databasemetadata",
      children: "1.7 DatabaseMetaData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.metadata;\n\nimport java.sql.*;\n\npublic class DatabaseMetaDataExample {\n\n    public void inspectDatabase(Connection conn) throws SQLException {\n        DatabaseMetaData dbMeta = conn.getMetaData();\n\n        System.out.println(\"=== Database Product Info ===\");\n        System.out.println(\"DB Name:        \" + dbMeta.getDatabaseProductName());\n        System.out.println(\"DB Version:     \" + dbMeta.getDatabaseProductVersion());\n        System.out.println(\"Driver Name:    \" + dbMeta.getDriverName());\n        System.out.println(\"Driver Version: \" + dbMeta.getDriverVersion());\n        System.out.println(\"JDBC Version:   \" + dbMeta.getJDBCMajorVersion() + \".\" + dbMeta.getJDBCMinorVersion());\n        System.out.println();\n\n        System.out.println(\"=== Feature Support ===\");\n        System.out.println(\"Batch updates:        \" + dbMeta.supportsBatchUpdates());\n        System.out.println(\"Stored procedures:    \" + dbMeta.supportsStoredProcedures());\n        System.out.println(\"Scrollable results:   \" + dbMeta.supportsResultSetType(ResultSet.TYPE_SCROLL_INSENSITIVE));\n        System.out.println(\"Full outer joins:     \" + dbMeta.supportsFullOuterJoins());\n        System.out.println(\"Savepoints:           \" + dbMeta.supportsSavepoints());\n        System.out.println();\n\n        System.out.println(\"=== Tables in 'public' schema ===\");\n        try (ResultSet tables = dbMeta.getTables(null, \"public\", \"%\", new String[]{\"TABLE\"})) {\n            while (tables.next()) {\n                System.out.printf(\"  %s (%s)%n\",\n                    tables.getString(\"TABLE_NAME\"),\n                    tables.getString(\"TABLE_TYPE\"));\n            }\n        }\n\n        System.out.println();\n        System.out.println(\"=== Columns in 'users' table ===\");\n        try (ResultSet columns = dbMeta.getColumns(null, \"public\", \"users\", \"%\")) {\n            while (columns.next()) {\n                System.out.printf(\"  %s %s(%d) nullable=%s%n\",\n                    columns.getString(\"COLUMN_NAME\"),\n                    columns.getString(\"TYPE_NAME\"),\n                    columns.getInt(\"COLUMN_SIZE\"),\n                    columns.getInt(\"NULLABLE\") == DatabaseMetaData.columnNullable ? \"Y\" : \"N\");\n            }\n        }\n\n        System.out.println();\n        System.out.println(\"=== Primary keys in 'users' ===\");\n        try (ResultSet pk = dbMeta.getPrimaryKeys(null, \"public\", \"users\")) {\n            while (pk.next()) {\n                System.out.printf(\"  %s (seq=%d)%n\",\n                    pk.getString(\"COLUMN_NAME\"),\n                    pk.getShort(\"KEY_SEQ\"));\n            }\n        }\n\n        System.out.println();\n        System.out.println(\"=== Foreign keys referencing 'users' ===\");\n        try (ResultSet fk = dbMeta.getExportedKeys(null, \"public\", \"users\")) {\n            while (fk.next()) {\n                System.out.printf(\"  %s.%s → users%n\",\n                    fk.getString(\"FKTABLE_NAME\"),\n                    fk.getString(\"FKCOLUMN_NAME\"));\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-batch-updates",
      children: "1.8 Batch Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Batch updates send multiple SQL statements in a single round-trip, drastically improving performance for bulk operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.batch;\n\nimport java.sql.*;\nimport java.time.LocalDate;\nimport java.util.List;\n\npublic class BatchUpdateExample {\n\n    private static final String INSERT_USER =\n        \"INSERT INTO users (username, email, password_hash, birth_date, active) \" +\n        \"VALUES (?, ?, ?, ?, ?)\";\n\n    public int[] insertBatch(List<User> users) throws SQLException {\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             PreparedStatement ps = conn.prepareStatement(INSERT_USER)) {\n\n            conn.setAutoCommit(false);\n\n            try {\n                for (User user : users) {\n                    ps.setString(1, user.getUsername());\n                    ps.setString(2, user.getEmail());\n                    ps.setString(3, user.getPasswordHash());\n                    ps.setObject(4, user.getBirthDate());\n                    ps.setBoolean(5, user.isActive());\n                    ps.addBatch();\n                }\n\n                int[] results = ps.executeBatch();\n                conn.commit();\n\n                for (int i = 0; i < results.length; i++) {\n                    System.out.printf(\"  Row %d: %d rows%n\", i, results[i]);\n                }\n\n                return results;\n\n            } catch (SQLException e) {\n                conn.rollback();\n                throw e;\n            } finally {\n                conn.setAutoCommit(true);\n            }\n        }\n    }\n\n    // Mixed batch with different SQL statements\n    public int[] mixedBatch() throws SQLException {\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             Statement stmt = conn.createStatement()) {\n\n            conn.setAutoCommit(false);\n\n            try {\n                stmt.addBatch(\"UPDATE users SET active = false WHERE last_login < '2024-01-01'\");\n                stmt.addBatch(\"DELETE FROM sessions WHERE expires_at < NOW()\");\n\n                int[] results = stmt.executeBatch();\n                conn.commit();\n                return results;\n\n            } catch (SQLException e) {\n                conn.rollback();\n                throw e;\n            } finally {\n                conn.setAutoCommit(true);\n            }\n        }\n    }\n\n    // Batch with generated keys\n    public void insertBatchWithKeys(List<User> users) throws SQLException {\n        String sql = \"INSERT INTO users (username, email, password_hash, active) VALUES (?, ?, ?, ?)\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {\n\n            conn.setAutoCommit(false);\n\n            try {\n                for (User user : users) {\n                    ps.setString(1, user.getUsername());\n                    ps.setString(2, user.getEmail());\n                    ps.setString(3, user.getPasswordHash());\n                    ps.setBoolean(4, user.isActive());\n                    ps.addBatch();\n                }\n\n                ps.executeBatch();\n\n                try (ResultSet keys = ps.getGeneratedKeys()) {\n                    int i = 0;\n                    while (keys.next()) {\n                        users.get(i).setId(keys.getLong(\"id\"));\n                        i++;\n                    }\n                }\n\n                conn.commit();\n            } catch (SQLException e) {\n                conn.rollback();\n                throw e;\n            } finally {\n                conn.setAutoCommit(true);\n            }\n        }\n    }\n\n    // Batch with size limits to avoid memory issues\n    public int[] insertBatchWithSizeLimit(List<User> users, int batchSize) throws SQLException {\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             PreparedStatement ps = conn.prepareStatement(INSERT_USER)) {\n\n            conn.setAutoCommit(false);\n            int totalProcessed = 0;\n\n            try {\n                for (int i = 0; i < users.size(); i++) {\n                    User user = users.get(i);\n                    ps.setString(1, user.getUsername());\n                    ps.setString(2, user.getEmail());\n                    ps.setString(3, user.getPasswordHash());\n                    ps.setObject(4, user.getBirthDate());\n                    ps.setBoolean(5, user.isActive());\n                    ps.addBatch();\n\n                    if ((i + 1) % batchSize == 0 || i == users.size() - 1) {\n                        int[] result = ps.executeBatch();\n                        conn.commit();\n                        totalProcessed += result.length;\n                    }\n                }\n\n                return new int[]{totalProcessed};\n\n            } catch (SQLException e) {\n                conn.rollback();\n                throw e;\n            } finally {\n                conn.setAutoCommit(true);\n            }\n        }\n    }\n\n    public static class User {\n        private Long id;\n        private String username;\n        private String email;\n        private String passwordHash;\n        private LocalDate birthDate;\n        private boolean active;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getUsername() { return username; }\n        public void setUsername(String username) { this.username = username; }\n        public String getEmail() { return email; }\n        public void setEmail(String email) { this.email = email; }\n        public String getPasswordHash() { return passwordHash; }\n        public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }\n        public LocalDate getBirthDate() { return birthDate; }\n        public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\n        public boolean isActive() { return active; }\n        public void setActive(boolean active) { this.active = active; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-scrollable--updatable-resultsets",
      children: "1.9 Scrollable & Updatable ResultSets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResultSet"
      }), " is forward-only and read-only. You can create scrollable and updatable result sets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbc.scrollable;\n\nimport java.sql.*;\n\npublic class ScrollableUpdatableExample {\n\n    public void scrollableExample() throws SQLException {\n        String sql = \"SELECT id, username, email, active FROM users ORDER BY id\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             Statement stmt = conn.createStatement(\n                     ResultSet.TYPE_SCROLL_INSENSITIVE,\n                     ResultSet.CONCUR_READ_ONLY);\n             ResultSet rs = stmt.executeQuery(sql)) {\n\n            rs.last();\n            System.out.println(\"Total rows: \" + rs.getRow());\n\n            rs.first();\n            System.out.println(\"First: \" + rs.getString(\"username\"));\n\n            rs.last();\n            System.out.println(\"Last: \" + rs.getString(\"username\"));\n\n            rs.absolute(rs.getRow() / 2 + 1);\n            System.out.println(\"Middle: \" + rs.getString(\"username\"));\n\n            rs.relative(-1);\n            System.out.println(\"Previous: \" + rs.getString(\"username\"));\n\n            System.out.println(\"\\\\nReverse order:\");\n            while (rs.previous()) {\n                System.out.printf(\"  %d: %s%n\", rs.getLong(\"id\"), rs.getString(\"username\"));\n            }\n        }\n    }\n\n    // Updatable ResultSet — modify data through ResultSet\n    public void updatableExample() throws SQLException {\n        String sql = \"SELECT id, username, email, active FROM users WHERE active = false\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             Statement stmt = conn.createStatement(\n                     ResultSet.TYPE_SCROLL_SENSITIVE,\n                     ResultSet.CONCUR_UPDATABLE);\n             ResultSet rs = stmt.executeQuery(sql)) {\n\n            while (rs.next()) {\n                rs.updateBoolean(\"active\", true);\n                rs.updateRow();\n            }\n        }\n    }\n\n    // Insert and delete via ResultSet\n    public void insertDeleteViaResultSet() throws SQLException {\n        String sql = \"SELECT id, username, email, active FROM users\";\n\n        try (Connection conn = DriverManager.getConnection(\n                \"jdbc:postgresql://localhost:5432/course_db\", \"appuser\", \"secret\");\n             Statement stmt = conn.createStatement(\n                     ResultSet.TYPE_SCROLL_SENSITIVE,\n                     ResultSet.CONCUR_UPDATABLE);\n             ResultSet rs = stmt.executeQuery(sql)) {\n\n            rs.moveToInsertRow();\n            rs.updateString(\"username\", \"temp_user\");\n            rs.updateString(\"email\", \"temp@example.com\");\n            rs.updateBoolean(\"active\", true);\n            rs.insertRow();\n\n            rs.moveToCurrentRow();\n\n            rs.absolute(2);\n            rs.deleteRow();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-datasource--connection-pooling",
      children: "2. DataSource & Connection Pooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-datasource-interface",
      children: "2.1 The DataSource Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), " is the preferred alternative to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DriverManager"
      }), ". Defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javax.sql.DataSource"
      }), ", it provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection pooling"
        }), " — reuse connections instead of creating new ones"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed transactions"
        }), " — support for XA transactions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JNDI lookup"
        }), " — centralized configuration in application servers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.datasource;\n\nimport javax.sql.DataSource;\nimport java.sql.Connection;\nimport java.sql.SQLException;\n\npublic class DataSourceUsage {\n\n    private final DataSource dataSource;\n\n    public DataSourceUsage(DataSource dataSource) {\n        this.dataSource = dataSource;\n    }\n\n    public void doWork() {\n        String sql = \"SELECT COUNT(*) FROM users\";\n\n        try (Connection conn = dataSource.getConnection();\n             var ps = conn.prepareStatement(sql);\n             var rs = ps.executeQuery()) {\n\n            if (rs.next()) {\n                System.out.println(\"Users: \" + rs.getLong(1));\n            }\n\n        } catch (SQLException e) {\n            throw new RuntimeException(\"Database failure\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-drivermanagerdatasource",
      children: "2.2 DriverManagerDataSource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DriverManagerDataSource"
      }), " is a simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), " that returns a new connection on every call. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not pooled"
      }), " — for development/testing only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.datasource;\n\nimport org.springframework.jdbc.datasource.DriverManagerDataSource;\nimport javax.sql.DataSource;\n\npublic class DriverManagerDataSourceConfig {\n\n    public static DataSource createDataSource() {\n        DriverManagerDataSource ds = new DriverManagerDataSource();\n        ds.setDriverClassName(\"org.postgresql.Driver\");\n        ds.setUrl(\"jdbc:postgresql://localhost:5432/course_db\");\n        ds.setUsername(\"appuser\");\n        ds.setPassword(\"secret\");\n        return ds;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-hikaricp-configuration",
      children: "2.3 HikariCP Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HikariCP"
      }), " is the default connection pool in Spring Boot 2.x and 3.x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nspring.datasource.url=jdbc:postgresql://localhost:5432/course_db\nspring.datasource.username=appuser\nspring.datasource.password=secret\nspring.datasource.driver-class-name=org.postgresql.Driver\n\nspring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.connection-timeout=30000\nspring.datasource.hikari.idle-timeout=600000\nspring.datasource.hikari.max-lifetime=1800000\nspring.datasource.hikari.connection-test-query=SELECT 1\nspring.datasource.hikari.pool-name=CourseAppPool\nspring.datasource.hikari.auto-commit=false\nspring.datasource.hikari.leak-detection-threshold=60000\nspring.datasource.hikari.validation-timeout=5000\nspring.datasource.hikari.transaction-isolation=TRANSACTION_READ_COMMITTED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML equivalent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/course_db\n    username: appuser\n    password: secret\n    driver-class-name: org.postgresql.Driver\n    hikari:\n      maximum-pool-size: 20\n      minimum-idle: 5\n      connection-timeout: 30000\n      idle-timeout: 600000\n      max-lifetime: 1800000\n      connection-test-query: SELECT 1\n      pool-name: CourseAppPool\n      auto-commit: false\n      leak-detection-threshold: 60000\n      transaction-isolation: TRANSACTION_READ_COMMITTED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Programmatic configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.datasource.config;\n\nimport com.zaxxer.hikari.HikariConfig;\nimport com.zaxxer.hikari.HikariDataSource;\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\nimport javax.sql.DataSource;\nimport java.util.Properties;\n\n@Configuration\npublic class DataSourceConfig {\n\n    @Bean\n    @ConfigurationProperties(prefix = \"spring.datasource.hikari\")\n    public HikariConfig hikariConfig() {\n        return new HikariConfig();\n    }\n\n    @Bean\n    public DataSource dataSource() {\n        return new HikariDataSource(hikariConfig());\n    }\n\n    public static DataSource createProgrammaticPool() {\n        HikariConfig config = new HikariConfig();\n        config.setJdbcUrl(\"jdbc:postgresql://localhost:5432/course_db\");\n        config.setUsername(\"appuser\");\n        config.setPassword(\"secret\");\n        config.setMaximumPoolSize(20);\n        config.setMinimumIdle(5);\n        config.setConnectionTimeout(30000);\n        config.setIdleTimeout(600000);\n        config.setMaxLifetime(1800000);\n        config.setLeakDetectionThreshold(60000);\n        config.setPoolName(\"AppPool\");\n        config.setAutoCommit(false);\n        config.setTransactionIsolation(\"TRANSACTION_READ_COMMITTED\");\n        config.setConnectionTestQuery(\"SELECT 1\");\n        config.setConnectionInitSql(\"SET TIME ZONE 'UTC'\");\n\n        Properties dsProps = new Properties();\n        dsProps.setProperty(\"sslmode\", \"require\");\n        dsProps.setProperty(\"ApplicationName\", \"CourseApp\");\n        config.setDataSourceProperties(dsProps);\n\n        return new HikariDataSource(config);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HikariCP configuration parameters:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maximumPoolSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum connections in the pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "minimumIdle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= maximumPoolSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum idle connections to maintain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connectionTimeout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30000 (30s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max wait time for a connection from the pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "idleTimeout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600000 (10min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max time an idle connection lives before retirement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maxLifetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1800000 (30min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max lifetime of any connection in the pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "leakDetectionThreshold"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (disabled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log warning if connection held longer than this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validationTimeout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000 (5s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max time for connection validation query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "connectionTestQuery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL to test connection validity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "poolName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "auto-generated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool name for logging and JMX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "autoCommit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default auto-commit behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pool sizing guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Formula: Pool Size = T * (C - 1) + 1\n// T = number of threads, C = avg connections per task\n//\n// General guidelines:\n// - OLTP apps: 5-15 connections per CPU core\n// - PostgreSQL: effective_connections = cores * 4 + 1\n// - Start at 10-20 and monitor\n//\n// Rule of thumb: smaller pools often perform better.\n// HikariCP author: \"15 connections per core is a good starting point\"\n//\n// maximumPoolSize = 10   : development / low traffic\n// maximumPoolSize = 20   : standard web app (4-8 cores)\n// maximumPoolSize = 50   : high-traffic API (8-16 cores)\n// maximumPoolSize = 5-10 : batch processing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-pool-metrics--monitoring",
      children: "2.4 Pool Metrics & Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HikariCP exposes metrics via Micrometer (Spring Boot Actuator)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.datasource.metrics;\n\nimport com.zaxxer.hikari.HikariDataSource;\nimport com.zaxxer.hikari.HikariPoolMXBean;\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.stereotype.Component;\n\nimport javax.sql.DataSource;\nimport java.sql.Connection;\nimport java.sql.SQLException;\n\n@Component\npublic class ConnectionPoolHealthIndicator implements HealthIndicator {\n\n    private final HikariDataSource dataSource;\n\n    public ConnectionPoolHealthIndicator(DataSource dataSource) {\n        this.dataSource = (HikariDataSource) dataSource;\n    }\n\n    @Override\n    public Health health() {\n        HikariPoolMXBean poolMXBean = dataSource.getHikariPoolMXBean();\n\n        int active = poolMXBean.getActiveConnections();\n        int idle = poolMXBean.getIdleConnections();\n        int pending = poolMXBean.getPendingThreads();\n        int total = poolMXBean.getTotalConnections();\n\n        boolean valid = false;\n        try (Connection conn = dataSource.getConnection()) {\n            valid = conn.isValid(3);\n        } catch (SQLException e) {\n            valid = false;\n        }\n\n        return Health.up()\n            .withDetail(\"valid\", valid)\n            .withDetail(\"active\", active)\n            .withDetail(\"idle\", idle)\n            .withDetail(\"pending\", pending)\n            .withDetail(\"total\", total)\n            .withDetail(\"poolName\", dataSource.getPoolName())\n            .withDetail(\"maximumPoolSize\", dataSource.getMaximumPoolSize())\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registering HikariCP metrics with Micrometer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class PoolMetricsConfig {\n\n    @Bean\n    @ConditionalOnBean(DataSource.class)\n    public Object registerHikariMetrics(DataSource dataSource, MeterRegistry meterRegistry) {\n        HikariDataSource hikariDS = (HikariDataSource) dataSource;\n        HikariPoolMXBean poolMXBean = hikariDS.getHikariPoolMXBean();\n\n        meterRegistry.gauge(\"hikaricp.connections.active\", poolMXBean,\n            HikariPoolMXBean::getActiveConnections);\n        meterRegistry.gauge(\"hikaricp.connections.idle\", poolMXBean,\n            HikariPoolMXBean::getIdleConnections);\n        meterRegistry.gauge(\"hikaricp.connections.pending\", poolMXBean,\n            HikariPoolMXBean::getPendingThreads);\n        meterRegistry.gauge(\"hikaricp.connections.total\", poolMXBean,\n            HikariPoolMXBean::getTotalConnections);\n\n        return poolMXBean;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Actuator exposure\nmanagement.endpoints.web.exposure.include=health,metrics\nmanagement.endpoint.health.show-details=always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Querying pool metrics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl http://localhost:8080/actuator/health\ncurl http://localhost:8080/actuator/metrics/hikaricp.connections.active\ncurl http://localhost:8080/actuator/prometheus | grep hikaricp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-jdbctemplate",
      children: "3. JdbcTemplate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "JdbcTemplate"
      }), " is Spring's central class for JDBC operations. It eliminates boilerplate resource management and exception handling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Maven dependency (included by spring-boot-starter-jdbc) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jdbc</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class UserDao {\n    private final JdbcTemplate jdbcTemplate;\n\n    public UserDao(DataSource dataSource) {\n        this.jdbcTemplate = new JdbcTemplate(dataSource);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-query-queryforobject-queryforlist",
      children: "3.1 query, queryForObject, queryForList"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// --- queryForObject: returns a single value ---\n\npublic Long countUsers() {\n    String sql = \"SELECT COUNT(*) FROM users\";\n    return jdbcTemplate.queryForObject(sql, Long.class);\n}\n\npublic String findUsernameById(Long id) {\n    String sql = \"SELECT username FROM users WHERE id = ?\";\n    return jdbcTemplate.queryForObject(sql, String.class, id);\n}\n\npublic User findById(Long id) {\n    String sql = \"SELECT id, username, email, password_hash, active, created_at FROM users WHERE id = ?\";\n    return jdbcTemplate.queryForObject(sql, new UserRowMapper(), id);\n}\n\n// With lambda RowMapper\npublic User findByIdLambda(Long id) {\n    String sql = \"SELECT * FROM users WHERE id = ?\";\n    return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> mapUser(rs), id);\n}\n\n// --- query: returns a List ---\n\npublic List<User> findAll() {\n    String sql = \"SELECT * FROM users ORDER BY id\";\n    return jdbcTemplate.query(sql, new UserRowMapper());\n}\n\npublic List<User> findActiveUsers() {\n    String sql = \"SELECT * FROM users WHERE active = ? ORDER BY username\";\n    return jdbcTemplate.query(sql, new UserRowMapper(), true);\n}\n\npublic List<User> findUsersCreatedAfter(LocalDate date) {\n    String sql = \"SELECT * FROM users WHERE created_at >= ? ORDER BY created_at\";\n    return jdbcTemplate.query(sql, new UserRowMapper(),\n        Timestamp.valueOf(date.atStartOfDay()));\n}\n\n// --- queryForList: returns List<Map<String, Object>> ---\n\npublic List<Map<String, Object>> findAllAsMaps() {\n    String sql = \"SELECT id, username, email FROM users\";\n    return jdbcTemplate.queryForList(sql);\n}\n\npublic List<Map<String, Object>> findActiveAsMaps() {\n    String sql = \"SELECT id, username, email FROM users WHERE active = ?\";\n    return jdbcTemplate.queryForList(sql, true);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-update-batchupdate-queryformap",
      children: "3.2 update, batchUpdate, queryForMap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// --- update: INSERT, UPDATE, DELETE ---\n\npublic int createUser(User user) {\n    String sql = \"INSERT INTO users (username, email, password_hash, birth_date, active) \" +\n                 \"VALUES (?, ?, ?, ?, ?)\";\n    return jdbcTemplate.update(sql,\n        user.getUsername(), user.getEmail(), user.getPasswordHash(),\n        user.getBirthDate(), user.isActive());\n}\n\npublic int createUserAndReturnKey(User user) {\n    String sql = \"INSERT INTO users (username, email, password_hash, active) VALUES (?, ?, ?, ?)\";\n\n    KeyHolder keyHolder = new GeneratedKeyHolder();\n\n    jdbcTemplate.update(connection -> {\n        PreparedStatement ps = connection.prepareStatement(sql, new String[]{\"id\"});\n        ps.setString(1, user.getUsername());\n        ps.setString(2, user.getEmail());\n        ps.setString(3, user.getPasswordHash());\n        ps.setBoolean(4, user.isActive());\n        return ps;\n    }, keyHolder);\n\n    return keyHolder.getKey().intValue();\n}\n\npublic int updateEmail(Long id, String newEmail) {\n    String sql = \"UPDATE users SET email = ? WHERE id = ?\";\n    return jdbcTemplate.update(sql, newEmail, id);\n}\n\npublic int deleteUser(Long id) {\n    String sql = \"DELETE FROM users WHERE id = ?\";\n    return jdbcTemplate.update(sql, id);\n}\n\n// --- queryForMap: single row as a Map ---\n\npublic Map<String, Object> findByIdAsMap(Long id) {\n    String sql = \"SELECT * FROM users WHERE id = ?\";\n    return jdbcTemplate.queryForMap(sql, id);\n}\n\n// --- batchUpdate: bulk operations ---\n\npublic int[] batchInsert(List<User> users) {\n    String sql = \"INSERT INTO users (username, email, password_hash, active) VALUES (?, ?, ?, ?)\";\n\n    List<Object[]> batchArgs = users.stream()\n        .map(u -> new Object[]{u.getUsername(), u.getEmail(),\n            u.getPasswordHash(), u.isActive()})\n        .toList();\n\n    return jdbcTemplate.batchUpdate(sql, batchArgs);\n}\n\npublic int[] batchUpdate(List<User> users) {\n    String sql = \"UPDATE users SET email = ?, active = ? WHERE id = ?\";\n\n    List<Object[]> batchArgs = users.stream()\n        .map(u -> new Object[]{u.getEmail(), u.isActive(), u.getId()})\n        .toList();\n\n    return jdbcTemplate.batchUpdate(sql, batchArgs);\n}\n\n// With BatchPreparedStatementSetter for fine-grained control\npublic int[] batchInsertWithSetter(List<User> users) {\n    String sql = \"INSERT INTO users (username, email, password_hash, active) VALUES (?, ?, ?, ?)\";\n\n    return jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {\n        @Override\n        public void setValues(PreparedStatement ps, int i) throws SQLException {\n            User user = users.get(i);\n            ps.setString(1, user.getUsername());\n            ps.setString(2, user.getEmail());\n            ps.setString(3, user.getPasswordHash());\n            ps.setBoolean(4, user.isActive());\n        }\n\n        @Override\n        public int getBatchSize() {\n            return users.size();\n        }\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-resultsetextractor-rowmapper-rowcallbackhandler",
      children: "3.3 ResultSetExtractor, RowMapper, RowCallbackHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jdbctemplate.mapping;\n\nimport org.springframework.jdbc.core.*;\nimport org.springframework.stereotype.Repository;\n\nimport javax.sql.DataSource;\nimport java.sql.ResultSet;\nimport java.sql.SQLException;\nimport java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.util.*;\n\n@Repository\npublic class MappingStrategiesDao {\n\n    private final JdbcTemplate jdbcTemplate;\n\n    public MappingStrategiesDao(DataSource dataSource) {\n        this.jdbcTemplate = new JdbcTemplate(dataSource);\n    }\n\n    // --- RowMapper: one row → one object ---\n\n    public static class UserRowMapper implements RowMapper<User> {\n        @Override\n        public User mapRow(ResultSet rs, int rowNum) throws SQLException {\n            User user = new User();\n            user.setId(rs.getLong(\"id\"));\n            user.setUsername(rs.getString(\"username\"));\n            user.setEmail(rs.getString(\"email\"));\n            user.setPasswordHash(rs.getString(\"password_hash\"));\n            user.setBirthDate(rs.getObject(\"birth_date\", LocalDate.class));\n            user.setActive(rs.getBoolean(\"active\"));\n            user.setCreatedAt(rs.getTimestamp(\"created_at\").toLocalDateTime());\n            return user;\n        }\n    }\n\n    // --- ResultSetExtractor: processes entire ResultSet ---\n    // Use for parent-child relationships, custom aggregations\n\n    public List<OrderWithItems> getOrdersWithItems(Long userId) {\n        String sql = \"\"\"\n            SELECT o.id AS order_id, o.order_date, o.total,\n                   oi.id AS item_id, oi.product_name, oi.quantity, oi.unit_price\n            FROM orders o\n            LEFT JOIN order_items oi ON oi.order_id = o.id\n            WHERE o.user_id = ?\n            ORDER BY o.id, oi.id\n        \"\"\";\n\n        return jdbcTemplate.query(sql, (ResultSet rs) -> {\n            Map<Long, OrderWithItems> orderMap = new LinkedHashMap<>();\n\n            while (rs.next()) {\n                Long orderId = rs.getLong(\"order_id\");\n                OrderWithItems order = orderMap.computeIfAbsent(orderId, id -> {\n                    OrderWithItems o = new OrderWithItems();\n                    try {\n                        o.setId(orderId);\n                        o.setOrderDate(rs.getTimestamp(\"order_date\").toLocalDateTime());\n                        o.setTotal(rs.getBigDecimal(\"total\"));\n                        o.setItems(new ArrayList<>());\n                    } catch (SQLException e) { throw new RuntimeException(e); }\n                    return o;\n                });\n\n                long itemId = rs.getLong(\"item_id\");\n                if (itemId > 0) {\n                    OrderItem item = new OrderItem();\n                    item.setId(itemId);\n                    item.setProductName(rs.getString(\"product_name\"));\n                    item.setQuantity(rs.getInt(\"quantity\"));\n                    item.setUnitPrice(rs.getBigDecimal(\"unit_price\"));\n                    order.getItems().add(item);\n                }\n            }\n\n            return new ArrayList<>(orderMap.values());\n        }, userId);\n    }\n\n    // --- RowCallbackHandler: per-row callback, no collection ---\n    // Use for streaming large result sets\n\n    public void processUsersLargeDataset() {\n        String sql = \"SELECT id, username, email FROM users\";\n\n        jdbcTemplate.query(sql, (RowCallbackHandler) rs -> {\n            long id = rs.getLong(\"id\");\n            String username = rs.getString(\"username\");\n            String email = rs.getString(\"email\");\n            System.out.printf(\"Processing %d: %s <%s>%n\", id, username, email);\n        });\n    }\n\n    public void exportUsersToCsv(String filePath) {\n        String sql = \"SELECT id, username, email, active, created_at FROM users ORDER BY id\";\n\n        try (var writer = new java.io.FileWriter(filePath)) {\n            writer.write(\"id,username,email,active,created_at\\n\");\n\n            jdbcTemplate.query(sql, (RowCallbackHandler) rs -> {\n                writer.write(String.format(\"%d,%s,%s,%b,%s%n\",\n                    rs.getLong(\"id\"), rs.getString(\"username\"),\n                    rs.getString(\"email\"), rs.getBoolean(\"active\"),\n                    rs.getTimestamp(\"created_at\")));\n            });\n        } catch (Exception e) {\n            throw new RuntimeException(\"CSV export failed\", e);\n        }\n    }\n\n    // Comparison:\n    // RowMapper         | 1 row → 1 object   | query() collects into List\n    // ResultSetExtractor| Entire RS → 1 result| You control the loop\n    // RowCallbackHandler | Callback per row    | Side effects, no collection\n\n    public static class User {\n        private Long id; private String username; private String email;\n        private String passwordHash; private LocalDate birthDate;\n        private boolean active; private LocalDateTime createdAt;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getUsername() { return username; }\n        public void setUsername(String username) { this.username = username; }\n        public String getEmail() { return email; }\n        public void setEmail(String email) { this.email = email; }\n        public String getPasswordHash() { return passwordHash; }\n        public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }\n        public LocalDate getBirthDate() { return birthDate; }\n        public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\n        public boolean isActive() { return active; }\n        public void setActive(boolean active) { this.active = active; }\n        public LocalDateTime getCreatedAt() { return createdAt; }\n        public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n    }\n\n    public static class OrderWithItems {\n        private Long id; private LocalDateTime orderDate;\n        private java.math.BigDecimal total; private List<OrderItem> items;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public LocalDateTime getOrderDate() { return orderDate; }\n        public void setOrderDate(LocalDateTime orderDate) { this.orderDate = orderDate; }\n        public java.math.BigDecimal getTotal() { return total; }\n        public void setTotal(java.math.BigDecimal total) { this.total = total; }\n        public List<OrderItem> getItems() { return items; }\n        public void setItems(List<OrderItem> items) { this.items = items; }\n    }\n\n    public static class OrderItem {\n        private Long id; private String productName;\n        private int quantity; private java.math.BigDecimal unitPrice;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getProductName() { return productName; }\n        public void setProductName(String productName) { this.productName = productName; }\n        public int getQuantity() { return quantity; }\n        public void setQuantity(int quantity) { this.quantity = quantity; }\n        public java.math.BigDecimal getUnitPrice() { return unitPrice; }\n        public void setUnitPrice(java.math.BigDecimal unitPrice) { this.unitPrice = unitPrice; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-beanpropertyrowmapper",
      children: "3.4 BeanPropertyRowMapper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BeanPropertyRowMapper"
      }), " auto-maps ResultSet columns to JavaBean properties by name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class BeanPropertyDao {\n\n    private final JdbcTemplate jdbcTemplate;\n\n    public BeanPropertyDao(DataSource dataSource) {\n        this.jdbcTemplate = new JdbcTemplate(dataSource);\n    }\n\n    // Maps column names to property names case-insensitively.\n    // user_name → userName (underscore to camelCase)\n\n    public List<User> findAll() {\n        String sql = \"SELECT * FROM users ORDER BY id\";\n        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));\n    }\n\n    public Optional<User> findById(Long id) {\n        String sql = \"SELECT * FROM users WHERE id = ?\";\n        List<User> results = jdbcTemplate.query(sql,\n            new BeanPropertyRowMapper<>(User.class), id);\n        return results.isEmpty() ? Optional.empty() : Optional.of(results.get(0));\n    }\n\n    public static class User {\n        private Long id;\n        private String username;\n        private String email;\n        private String passwordHash;\n        private LocalDate birthDate;\n        private boolean active;\n        private LocalDateTime createdAt;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getUsername() { return username; }\n        public void setUsername(String username) { this.username = username; }\n        public String getEmail() { return email; }\n        public void setEmail(String email) { this.email = email; }\n        public String getPasswordHash() { return passwordHash; }\n        public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }\n        public LocalDate getBirthDate() { return birthDate; }\n        public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\n        public boolean isActive() { return active; }\n        public void setActive(boolean active) { this.active = active; }\n        public LocalDateTime getCreatedAt() { return createdAt; }\n        public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-namedparameterjdbctemplate",
      children: "4. NamedParameterJdbcTemplate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "NamedParameterJdbcTemplate"
      }), " wraps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JdbcTemplate"
      }), " and supports named parameters (", (0,jsx_runtime.jsx)(_components.code, {
        children: ":paramName"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-named-parameters",
      children: "4.1 Named Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class NamedParameterUserDao {\n\n    private final NamedParameterJdbcTemplate namedTemplate;\n\n    public NamedParameterUserDao(DataSource dataSource) {\n        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);\n    }\n\n    public User findById(Long id) {\n        String sql = \"SELECT * FROM users WHERE id = :id\";\n        return namedTemplate.queryForObject(sql,\n            Map.of(\"id\", id), new UserRowMapper());\n    }\n\n    public List<User> findUsers(String username, String email, Boolean active) {\n        String sql = \"SELECT * FROM users WHERE \" +\n            \"(:username IS NULL OR username = :username) AND \" +\n            \"(:email IS NULL OR email = :email) AND \" +\n            \"(:active IS NULL OR active = :active)\";\n\n        Map<String, Object> params = new HashMap<>();\n        params.put(\"username\", username);\n        params.put(\"email\", email);\n        params.put(\"active\", active);\n\n        return namedTemplate.query(sql, params, new UserRowMapper());\n    }\n\n    public int createUser(User user) {\n        String sql = \"INSERT INTO users (username, email, password_hash, birth_date, active) \" +\n                     \"VALUES (:username, :email, :passwordHash, :birthDate, :active)\";\n\n        Map<String, Object> params = new HashMap<>();\n        params.put(\"username\", user.getUsername());\n        params.put(\"email\", user.getEmail());\n        params.put(\"passwordHash\", user.getPasswordHash());\n        params.put(\"birthDate\", user.getBirthDate());\n        params.put(\"active\", user.isActive());\n\n        return namedTemplate.update(sql, params);\n    }\n\n    public int updateEmail(Long id, String newEmail) {\n        String sql = \"UPDATE users SET email = :email WHERE id = :id\";\n        return namedTemplate.update(sql, Map.of(\"email\", newEmail, \"id\", id));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-sqlparametersource",
      children: "4.2 SqlParameterSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class SqlParameterSourceExamples {\n\n    private final NamedParameterJdbcTemplate namedTemplate;\n\n    public SqlParameterSourceExamples(DataSource dataSource) {\n        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);\n    }\n\n    // --- MapSqlParameterSource: fluent API ---\n\n    public User findById(Long id) {\n        String sql = \"SELECT * FROM users WHERE id = :id\";\n        SqlParameterSource params = new MapSqlParameterSource(\"id\", id);\n        return namedTemplate.queryForObject(sql, params, new UserRowMapper());\n    }\n\n    public int createUser(User user) {\n        String sql = \"INSERT INTO users (username, email, password_hash, birth_date, active) \" +\n                     \"VALUES (:username, :email, :passwordHash, :birthDate, :active)\";\n\n        SqlParameterSource params = new MapSqlParameterSource()\n            .addValue(\"username\", user.getUsername())\n            .addValue(\"email\", user.getEmail())\n            .addValue(\"passwordHash\", user.getPasswordHash())\n            .addValue(\"birthDate\", user.getBirthDate())\n            .addValue(\"active\", user.isActive());\n\n        return namedTemplate.update(sql, params);\n    }\n\n    // MapSqlParameterSource with type information\n    public int createUserWithTypes(User user) {\n        String sql = \"INSERT INTO users (username, email, password_hash, salary, active) \" +\n                     \"VALUES (:username, :email, :passwordHash, :salary, :active)\";\n\n        SqlParameterSource params = new MapSqlParameterSource()\n            .addValue(\"username\", user.getUsername())\n            .addValue(\"email\", user.getEmail())\n            .addValue(\"passwordHash\", user.getPasswordHash())\n            .addValue(\"salary\", user.getSalary(), java.sql.Types.DECIMAL)\n            .addValue(\"active\", user.isActive(), java.sql.Types.BOOLEAN);\n\n        return namedTemplate.update(sql, params);\n    }\n\n    // --- BeanPropertySqlParameterSource: maps JavaBean properties ---\n\n    public int createUserFromBean(User user) {\n        String sql = \"INSERT INTO users (username, email, password_hash, birth_date, active) \" +\n                     \"VALUES (:username, :email, :passwordHash, :birthDate, :active)\";\n        return namedTemplate.update(sql, new BeanPropertySqlParameterSource(user));\n    }\n\n    // --- Return generated keys ---\n\n    public User createUserAndReturn(User user) {\n        String sql = \"INSERT INTO users (username, email, password_hash, active) \" +\n                     \"VALUES (:username, :email, :passwordHash, :active)\";\n\n        KeyHolder keyHolder = new GeneratedKeyHolder();\n        namedTemplate.update(sql, new BeanPropertySqlParameterSource(user),\n            keyHolder, new String[]{\"id\"});\n\n        if (keyHolder.getKey() != null) {\n            user.setId(keyHolder.getKey().longValue());\n        }\n        return user;\n    }\n\n    // --- Batch with SqlParameterSource ---\n\n    public int[] batchCreate(List<User> users) {\n        String sql = \"INSERT INTO users (username, email, password_hash, active) \" +\n                     \"VALUES (:username, :email, :passwordHash, :active)\";\n\n        SqlParameterSource[] batch = users.stream()\n            .map(BeanPropertySqlParameterSource::new)\n            .toArray(SqlParameterSource[]::new);\n\n        return namedTemplate.batchUpdate(sql, batch);\n    }\n\n    public static class User {\n        private Long id; private String username; private String email;\n        private String passwordHash; private java.time.LocalDate birthDate;\n        private java.math.BigDecimal salary; private boolean active;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getUsername() { return username; }\n        public void setUsername(String username) { this.username = username; }\n        public String getEmail() { return email; }\n        public void setEmail(String email) { this.email = email; }\n        public String getPasswordHash() { return passwordHash; }\n        public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }\n        public java.time.LocalDate getBirthDate() { return birthDate; }\n        public void setBirthDate(java.time.LocalDate birthDate) { this.birthDate = birthDate; }\n        public java.math.BigDecimal getSalary() { return salary; }\n        public void setSalary(java.math.BigDecimal salary) { this.salary = salary; }\n        public boolean isActive() { return active; }\n        public void setActive(boolean active) { this.active = active; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-in-clause-with-named-parameters",
      children: "4.3 IN Clause with Named Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NamedParameterJdbcTemplate handles IN clauses with lists natively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class InClauseExamples {\n\n    private final NamedParameterJdbcTemplate namedTemplate;\n\n    public InClauseExamples(DataSource dataSource) {\n        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);\n    }\n\n    public List<User> findUsersByIds(List<Long> ids) {\n        String sql = \"SELECT * FROM users WHERE id IN (:ids)\";\n        return namedTemplate.query(sql, Map.of(\"ids\", ids), new UserRowMapper());\n    }\n\n    public List<User> findUsersByStatusAndIds(List<Long> ids, boolean active) {\n        String sql = \"SELECT * FROM users WHERE id IN (:ids) AND active = :active\";\n        Map<String, Object> params = new HashMap<>();\n        params.put(\"ids\", ids);\n        params.put(\"active\", active);\n        return namedTemplate.query(sql, params, new UserRowMapper());\n    }\n\n    // Dynamic IN clause building\n    public List<User> searchUsers(List<Long> ids, String emailDomain, Boolean active) {\n        StringBuilder sql = new StringBuilder(\"SELECT * FROM users WHERE 1=1\");\n        Map<String, Object> params = new HashMap<>();\n\n        if (ids != null && !ids.isEmpty()) {\n            sql.append(\" AND id IN (:ids)\");\n            params.put(\"ids\", ids);\n        }\n        if (emailDomain != null) {\n            sql.append(\" AND email LIKE :emailDomain\");\n            params.put(\"emailDomain\", \"%@\" + emailDomain);\n        }\n        if (active != null) {\n            sql.append(\" AND active = :active\");\n            params.put(\"active\", active);\n        }\n\n        sql.append(\" ORDER BY username\");\n        return namedTemplate.query(sql.toString(), params, new UserRowMapper());\n    }\n\n    // Empty list handling\n    public List<User> findUsersByIdsSafe(List<Long> ids) {\n        if (ids == null || ids.isEmpty()) {\n            return Collections.emptyList();\n        }\n        String sql = \"SELECT * FROM users WHERE id IN (:ids)\";\n        return namedTemplate.query(sql, Map.of(\"ids\", ids), new UserRowMapper());\n    }\n\n    // IN with Set\n    public List<User> findUsersByRoles(Set<String> roles) {\n        String sql = \"SELECT DISTINCT u.* FROM users u \" +\n                     \"JOIN user_roles r ON r.user_id = u.id \" +\n                     \"WHERE r.role_name IN (:roles)\";\n        return namedTemplate.query(sql,\n            new MapSqlParameterSource(\"roles\", roles), new UserRowMapper());\n    }\n\n    public static class User {\n        private Long id; private String username;\n        private String email; private boolean active;\n\n        public Long getId() { return id; }\n        public void setId(Long id) { this.id = id; }\n        public String getUsername() { return username; }\n        public void setUsername(String username) { this.username = username; }\n        public String getEmail() { return email; }\n        public void setEmail(String email) { this.email = email; }\n        public boolean isActive() { return active; }\n        public void setActive(boolean active) { this.active = active; }\n    }\n\n    public static class UserRowMapper implements RowMapper<User> {\n        @Override\n        public User mapRow(ResultSet rs, int rowNum) throws SQLException {\n            User u = new User();\n            u.setId(rs.getLong(\"id\"));\n            u.setUsername(rs.getString(\"username\"));\n            u.setEmail(rs.getString(\"email\"));\n            u.setActive(rs.getBoolean(\"active\"));\n            return u;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-jooq-dsl",
      children: "5. jOOQ DSL"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-introduction-to-jooq",
      children: "5.1 Introduction to jOOQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jOOQ (Java Object Oriented Querying) is a type-safe SQL DSL. It generates Java code from your database schema that lets you write type-safe queries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key philosophy:"
      }), " SQL is the best DSL for data access. jOOQ makes it type-safe, composable, and refactorable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// jOOQ vs JDBC for the same query:\n\n// JDBC — string-based, error-prone\nString sql = \"SELECT u.id, u.username FROM users u \" +\n             \"WHERE u.active = ? ORDER BY u.username LIMIT ?\";\nPreparedStatement ps = conn.prepareStatement(sql);\nps.setBoolean(1, true);\nps.setInt(2, 20);\n\n// jOOQ — type-safe DSL, compile-time checked\nList<UserRecord> result = dslContext.selectFrom(USERS)\n    .where(USERS.ACTIVE.eq(true))\n    .orderBy(USERS.USERNAME)\n    .limit(20)\n    .fetch();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jooq</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-code-generation-with-jooq",
      children: "5.2 Code Generation with jOOQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven plugin configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.jooq</groupId>\n    <artifactId>jooq-codegen-maven</artifactId>\n    <version>3.19.0</version>\n    <executions>\n        <execution>\n            <id>generate-jooq</id>\n            <phase>generate-sources</phase>\n            <goals><goal>generate</goal></goals>\n        </execution>\n    </executions>\n    <configuration>\n        <jdbc>\n            <driver>org.postgresql.Driver</driver>\n            <url>jdbc:postgresql://localhost:5432/course_db</url>\n            <user>appuser</user>\n            <password>secret</password>\n        </jdbc>\n        <generator>\n            <database>\n                <name>org.jooq.meta.postgres.PostgresDatabase</name>\n                <includes>.*</includes>\n                <excludes>flyway_schema_history</excludes>\n                <inputSchema>public</inputSchema>\n            </database>\n            <generate>\n                <pojos>true</pojos>\n                <daos>true</daos>\n                <springAnnotations>true</springAnnotations>\n                <fluentSetters>true</fluentSetters>\n                <javaTimeTypes>true</javaTimeTypes>\n            </generate>\n            <target>\n                <packageName>com.example.course.jooq.generated</packageName>\n                <directory>target/generated-sources/jooq</directory>\n            </target>\n        </generator>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradle configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    id(\"nu.studer.jooq\") version \"9.0\"\n}\n\njooq {\n    configurations {\n        create(\"main\") {\n            generationTool {\n                jdbc {\n                    driver = \"org.postgresql.Driver\"\n                    url = \"jdbc:postgresql://localhost:5432/course_db\"\n                    user = \"appuser\"\n                    password = \"secret\"\n                }\n                generator {\n                    database {\n                        name = \"org.jooq.meta.postgres.PostgresDatabase\"\n                        inputSchema = \"public\"\n                    }\n                    generate {\n                        isPojos = true\n                        isDaos = true\n                        isSpringAnnotations = true\n                        isJavaTimeTypes = true\n                    }\n                    target {\n                        packageName = \"com.example.course.jooq.generated\"\n                        directory = \"build/generated/sources/jooq/main\"\n                    }\n                }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generated code example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Generated table — PUBLIC.USERS\npublic class Users extends TableImpl<UsersRecord> {\n    public static final Users USERS = new Users();\n\n    public final TableField<UsersRecord, Long> ID =\n        createField(DSL.name(\"id\"), SQLDataType.BIGINT.nullable(false)\n            .identity(true), this, \"\");\n\n    public final TableField<UsersRecord, String> USERNAME =\n        createField(DSL.name(\"username\"), SQLDataType.VARCHAR(50)\n            .nullable(false), this, \"\");\n\n    public final TableField<UsersRecord, String> EMAIL =\n        createField(DSL.name(\"email\"), SQLDataType.VARCHAR(255)\n            .nullable(false), this, \"\");\n\n    public final TableField<UsersRecord, String> PASSWORD_HASH =\n        createField(DSL.name(\"password_hash\"), SQLDataType.VARCHAR(255)\n            .nullable(false), this, \"\");\n\n    public final TableField<UsersRecord, LocalDate> BIRTH_DATE =\n        createField(DSL.name(\"birth_date\"), SQLDataType.LOCALDATE, this, \"\");\n\n    public final TableField<UsersRecord, Boolean> ACTIVE =\n        createField(DSL.name(\"active\"), SQLDataType.BOOLEAN\n            .nullable(false).defaultValue(true), this, \"\");\n\n    public final TableField<UsersRecord, LocalDateTime> CREATED_AT =\n        createField(DSL.name(\"created_at\"), SQLDataType.LOCALDATETIME\n            .nullable(false).defaultValue(DSL.field(\"CURRENT_TIMESTAMP\")), this, \"\");\n}\n\n// Generated record\npublic class UsersRecord extends UpdatableRecordImpl<UsersRecord> {\n    public Long getId() { return get(Users.USERS.ID); }\n    public void setId(Long value) { set(Users.USERS.ID, value); }\n    public String getUsername() { return get(Users.USERS.USERNAME); }\n    public void setUsername(String value) { set(Users.USERS.USERNAME, value); }\n}\n\n// Generated POJO\npublic class UsersPojo {\n    private Long id;\n    private String username;\n    private String email;\n    private String passwordHash;\n    private LocalDate birthDate;\n    private Boolean active;\n    private LocalDateTime createdAt;\n\n    // getters, setters, equals, hashCode, toString\n}\n\n// Generated DAO\n@Repository\npublic class UsersDao extends DAOImpl<UsersRecord, UsersPojo, Long> {\n    public UsersDao(Configuration configuration) {\n        super(Users.USERS, UsersPojo.class, configuration);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-dsl-queries-select-from-where-join-groupby-having-orderby-limit",
      children: "5.3 DSL Queries (select, from, where, join, groupBy, having, orderBy, limit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class JooxDslQueries {\n\n    private final DSLContext dsl;\n\n    public JooxDslQueries(DSLContext dsl) {\n        this.dsl = dsl;\n    }\n\n    // --- SELECT with specific columns ---\n\n    public List<Record2<Long, String>> findUsernames() {\n        return dsl.select(USERS.ID, USERS.USERNAME)\n            .from(USERS)\n            .orderBy(USERS.USERNAME)\n            .fetch();\n    }\n\n    // --- SELECT with WHERE conditions ---\n\n    public List<UsersRecord> findActiveUsers() {\n        return dsl.selectFrom(USERS)\n            .where(USERS.ACTIVE.eq(true))\n            .orderBy(USERS.USERNAME)\n            .fetch();\n    }\n\n    public UsersRecord findById(Long id) {\n        return dsl.selectFrom(USERS)\n            .where(USERS.ID.eq(id))\n            .fetchOne();\n    }\n\n    // Dynamic WHERE conditions\n    public List<UsersRecord> searchUsers(String username, Boolean active, LocalDateTime createdAfter) {\n        Condition condition = DSL.noCondition();\n\n        if (username != null && !username.isEmpty()) {\n            condition = condition.and(USERS.USERNAME.containsIgnoreCase(username));\n        }\n        if (active != null) {\n            condition = condition.and(USERS.ACTIVE.eq(active));\n        }\n        if (createdAfter != null) {\n            condition = condition.and(USERS.CREATED_AT.greaterOrEqual(createdAfter));\n        }\n\n        return dsl.selectFrom(USERS)\n            .where(condition)\n            .orderBy(USERS.USERNAME)\n            .fetch();\n    }\n\n    // --- JOIN queries ---\n\n    public List<Record5<Long, String, String, BigDecimal, LocalDateTime>> getOrdersWithUsers() {\n        return dsl.select(\n                ORDERS.ID, USERS.USERNAME, USERS.EMAIL,\n                ORDERS.TOTAL, ORDERS.ORDER_DATE\n            )\n            .from(ORDERS)\n            .join(USERS).on(ORDERS.USER_ID.eq(USERS.ID))\n            .where(ORDERS.STATUS.eq(\"COMPLETED\"))\n            .orderBy(ORDERS.ORDER_DATE.desc())\n            .fetch();\n    }\n\n    // LEFT JOIN with aggregation\n    public List<Record3<Long, String, Integer>> getUserOrderCounts() {\n        return dsl.select(\n                USERS.ID, USERS.USERNAME,\n                DSL.count(ORDERS.ID).coerce(Integer.class).as(\"order_count\")\n            )\n            .from(USERS)\n            .leftJoin(ORDERS).on(ORDERS.USER_ID.eq(USERS.ID))\n            .groupBy(USERS.ID, USERS.USERNAME)\n            .orderBy(DSL.field(\"order_count\").desc())\n            .fetch();\n    }\n\n    // --- GROUP BY / HAVING ---\n\n    public List<Record3<Long, String, BigDecimal>> getHighValueUsers() {\n        return dsl.select(\n                USERS.ID, USERS.USERNAME,\n                DSL.sum(ORDERS.TOTAL).as(\"total_spent\")\n            )\n            .from(USERS)\n            .join(ORDERS).on(ORDERS.USER_ID.eq(USERS.ID))\n            .where(ORDERS.STATUS.eq(\"COMPLETED\"))\n            .groupBy(USERS.ID, USERS.USERNAME)\n            .having(DSL.sum(ORDERS.TOTAL).gt(new BigDecimal(\"1000.00\")))\n            .orderBy(DSL.field(\"total_spent\").desc())\n            .limit(10)\n            .fetch();\n    }\n\n    // --- Aggregation functions ---\n\n    public Record4<Long, BigDecimal, BigDecimal, BigDecimal> getOrderStats() {\n        return dsl.select(\n                DSL.count().as(\"total_orders\"),\n                DSL.sum(ORDERS.TOTAL).as(\"revenue\"),\n                DSL.avg(ORDERS.TOTAL).as(\"avg_order\"),\n                DSL.max(ORDERS.TOTAL).as(\"largest_order\")\n            )\n            .from(ORDERS)\n            .where(ORDERS.STATUS.eq(\"COMPLETED\"))\n            .fetchOne();\n    }\n\n    // --- Subqueries ---\n\n    public List<UsersRecord> findUsersWithAboveAverageOrders() {\n        var avgTotal = dsl.select(DSL.avg(ORDERS.TOTAL)).from(ORDERS);\n\n        return dsl.selectFrom(USERS)\n            .where(USERS.ID.in(\n                dsl.select(ORDERS.USER_ID)\n                    .from(ORDERS)\n                    .groupBy(ORDERS.USER_ID)\n                    .having(DSL.sum(ORDERS.TOTAL).gt(avgTotal))\n            ))\n            .fetch();\n    }\n\n    // --- Common table expressions (WITH) ---\n\n    public List<Record> getMonthlyRevenue(int year) {\n        var monthlyRevenue = DSL.name(\"monthly_revenue\").as(\n            dsl.select(\n                    DSL.trunc(ORDERS.ORDER_DATE).as(\"month\"),\n                    DSL.sum(ORDERS.TOTAL).as(\"revenue\")\n                )\n                .from(ORDERS)\n                .where(DSL.extract(ORDERS.ORDER_DATE, DSL.year()).eq(year))\n                .groupBy(DSL.trunc(ORDERS.ORDER_DATE))\n        );\n\n        return dsl.with(monthlyRevenue)\n            .select()\n            .from(DSL.table(DSL.name(\"monthly_revenue\")))\n            .orderBy(DSL.field(DSL.name(\"month\")))\n            .fetch();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-type-safe-queries",
      children: "5.4 Type-Safe Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jOOQ's code generation ensures every table, column, and relationship is a Java type."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class TypeSafeQueryExamples {\n\n    private final DSLContext dsl;\n\n    public TypeSafeQueryExamples(DSLContext dsl) {\n        this.dsl = dsl;\n    }\n\n    // Compile-time column checking\n    public void columnExists() {\n        dsl.select(USERS.ID, USERS.USERNAME).from(USERS).fetch();\n    }\n\n    // Compile-time type checking\n    public void typeChecking() {\n        dsl.selectFrom(USERS).where(USERS.ID.eq(42L)).fetch();     // Long\n        dsl.selectFrom(USERS).where(USERS.ID.eq(42)).fetch();       // int auto-boxed\n        // dsl.selectFrom(USERS).where(USERS.ID.eq(\"hello\"));       // COMPILE ERROR\n    }\n\n    // Type-safe condition from non-null fields\n    public List<UsersRecord> findByExample(UsersRecord example) {\n        Condition condition = DSL.noCondition();\n\n        if (example.getId() != null)\n            condition = condition.and(USERS.ID.eq(example.getId()));\n        if (example.getUsername() != null)\n            condition = condition.and(USERS.USERNAME.eq(example.getUsername()));\n        if (example.getEmail() != null)\n            condition = condition.and(USERS.EMAIL.eq(example.getEmail()));\n        if (example.getActive() != null)\n            condition = condition.and(USERS.ACTIVE.eq(example.getActive()));\n\n        return dsl.selectFrom(USERS).where(condition).fetch();\n    }\n\n    // If you rename \"email\" to \"email_address\" in the database:\n    // 1. Re-run code generation\n    // 2. USERS.EMAIL becomes USERS.EMAIL_ADDRESS\n    // 3. Old code referencing USERS.EMAIL fails to compile\n    // Result: zero runtime errors from schema changes\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-multi-tenancy-with-jooq",
      children: "5.5 Multi-Tenancy with jOOQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Strategy 1: Filter on every query using ThreadLocal\n@Repository\npublic class TenantAwareRepository {\n\n    private static final ThreadLocal<Long> CURRENT_TENANT = new ThreadLocal<>();\n\n    private final DSLContext dsl;\n\n    public TenantAwareRepository(DSLContext dsl) {\n        this.dsl = dsl;\n    }\n\n    public static void setTenantId(Long tenantId) {\n        CURRENT_TENANT.set(tenantId);\n    }\n\n    public static void clear() {\n        CURRENT_TENANT.remove();\n    }\n\n    public List<OrdersRecord> findOrders() {\n        Long tenantId = CURRENT_TENANT.get();\n        if (tenantId == null) {\n            throw new IllegalStateException(\"No tenant context\");\n        }\n\n        return dsl.selectFrom(ORDERS)\n            .where(ORDERS.TENANT_ID.eq(tenantId))\n            .orderBy(ORDERS.ORDER_DATE.desc())\n            .fetch();\n    }\n\n    public OrdersRecord createOrder(OrdersRecord order) {\n        order.setTenantId(CURRENT_TENANT.get());\n        return dsl.insertInto(ORDERS)\n            .set(order)\n            .returning()\n            .fetchOne();\n    }\n}\n\n// Strategy 2: ExecuteListener — auto-append tenant filter\nclass TenantExecuteListener extends DefaultExecuteListener {\n    private final ThreadLocal<Long> tenantId = new ThreadLocal<>();\n\n    public void setTenantId(Long id) { tenantId.set(id); }\n    public void clear() { tenantId.remove(); }\n\n    @Override\n    public void renderStart(ExecuteContext ctx) {\n        Long id = this.tenantId.get();\n        if (id != null) {\n            // Add tenant condition to SELECT/UPDATE/DELETE\n        }\n    }\n}\n\n// Strategy 3: Separate schema per tenant\n// jOOQ supports runtime schema switching\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-jooq-with-spring-boot",
      children: "5.6 jOOQ with Spring Boot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot auto-configures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DSLContext"
      }), " when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-jooq"
      }), " is on the classpath."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nspring.datasource.url=jdbc:postgresql://localhost:5432/course_db\nspring.datasource.username=appuser\nspring.datasource.password=secret\nspring.datasource.hikari.maximum-pool-size=10\n\nspring.jooq.sql-dialect=POSTGRES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/course_db\n    username: appuser\n    password: secret\n    hikari:\n      maximum-pool-size: 10\n  jooq:\n    sql-dialect: POSTGRES\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Spring Boot service with jOOQ:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\n@Transactional\npublic class OrderService {\n\n    private final DSLContext dsl;\n\n    public OrderService(DSLContext dsl) {\n        this.dsl = dsl;\n    }\n\n    public UsersRecord getUserWithOrders(Long userId) {\n        return dsl.selectFrom(USERS)\n            .where(USERS.ID.eq(userId))\n            .fetchOptional()\n            .orElseThrow(() -> new RuntimeException(\"User not found\"));\n    }\n\n    @Transactional(readOnly = true)\n    public List<Record> getUserOrderSummary(Long userId) {\n        return dsl.select(\n                USERS.USERNAME, ORDERS.ID.as(\"order_id\"),\n                ORDERS.ORDER_DATE, ORDERS.STATUS, ORDERS.TOTAL\n            )\n            .from(USERS)\n            .join(ORDERS).on(ORDERS.USER_ID.eq(USERS.ID))\n            .where(USERS.ID.eq(userId))\n            .orderBy(ORDERS.ORDER_DATE.desc())\n            .fetch();\n    }\n\n    @Transactional(readOnly = true)\n    public Result<Record> getMonthlySalesReport(int year) {\n        return dsl.select(\n                DSL.trunc(ORDERS.ORDER_DATE).as(\"month\"),\n                DSL.count().as(\"order_count\"),\n                DSL.sum(ORDERS.TOTAL).as(\"revenue\"),\n                DSL.avg(ORDERS.TOTAL).as(\"avg_order_value\")\n            )\n            .from(ORDERS)\n            .where(ORDERS.STATUS.eq(\"COMPLETED\"))\n            .and(DSL.extract(ORDERS.ORDER_DATE, DSL.year()).eq(year))\n            .groupBy(DSL.trunc(ORDERS.ORDER_DATE))\n            .orderBy(DSL.field(\"month\"))\n            .fetch();\n    }\n\n    @Transactional\n    public OrdersRecord placeOrder(Long userId, List<OrderItemInput> items) {\n        BigDecimal total = items.stream()\n            .map(i -> i.unitPrice().multiply(BigDecimal.valueOf(i.quantity())))\n            .reduce(BigDecimal.ZERO, BigDecimal::add);\n\n        OrdersRecord order = dsl.insertInto(ORDERS)\n            .set(ORDERS.USER_ID, userId)\n            .set(ORDERS.ORDER_DATE, LocalDateTime.now())\n            .set(ORDERS.STATUS, \"PENDING\")\n            .set(ORDERS.TOTAL, total)\n            .returning()\n            .fetchOne();\n\n        for (OrderItemInput item : items) {\n            dsl.insertInto(ORDER_ITEMS)\n                .set(ORDER_ITEMS.ORDER_ID, order.getId())\n                .set(ORDER_ITEMS.PRODUCT_ID, item.productId())\n                .set(ORDER_ITEMS.QUANTITY, item.quantity())\n                .set(ORDER_ITEMS.UNIT_PRICE, item.unitPrice())\n                .execute();\n        }\n\n        return order;\n    }\n\n    @Transactional\n    public void cancelOrder(Long orderId) {\n        dsl.update(ORDERS)\n            .set(ORDERS.STATUS, \"CANCELLED\")\n            .where(ORDERS.ID.eq(orderId))\n            .execute();\n    }\n\n    public record OrderItemInput(Long productId, int quantity, BigDecimal unitPrice) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-crud-with-jooq-insertinto-update-delete",
      children: "5.7 CRUD with jOOQ (insertInto, update, delete)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class CrudRepository {\n\n    private final DSLContext dsl;\n\n    public CrudRepository(DSLContext dsl) {\n        this.dsl = dsl;\n    }\n\n    // --- CREATE ---\n\n    public UsersRecord createUser(String username, String email, String passwordHash) {\n        return dsl.insertInto(USERS)\n            .set(USERS.USERNAME, username)\n            .set(USERS.EMAIL, email)\n            .set(USERS.PASSWORD_HASH, passwordHash)\n            .set(USERS.ACTIVE, true)\n            .returning(USERS.ID, USERS.CREATED_AT)\n            .fetchOne();\n    }\n\n    public long createUserWithDefaults(String username, String email) {\n        dsl.insertInto(USERS, USERS.USERNAME, USERS.EMAIL, USERS.PASSWORD_HASH)\n            .values(username, email, \"default_hash\")\n            .execute();\n        return dsl.lastID().longValue();\n    }\n\n    public int[] batchInsert(List<UsersRecord> users) {\n        var insert = dsl.insertInto(USERS,\n            USERS.USERNAME, USERS.EMAIL, USERS.PASSWORD_HASH,\n            USERS.BIRTH_DATE, USERS.ACTIVE);\n\n        for (UsersRecord user : users) {\n            insert = insert.values(\n                user.getUsername(), user.getEmail(), user.getPasswordHash(),\n                user.getBirthDate(), user.getActive());\n        }\n\n        return insert.execute();\n    }\n\n    // --- READ ---\n\n    public UsersRecord findById(Long id) {\n        return dsl.selectFrom(USERS)\n            .where(USERS.ID.eq(id))\n            .fetchOne();\n    }\n\n    public List<UsersRecord> findAll() {\n        return dsl.selectFrom(USERS).orderBy(USERS.ID).fetch();\n    }\n\n    public long countActive() {\n        return dsl.fetchCount(USERS, USERS.ACTIVE.eq(true));\n    }\n\n    public boolean exists(String email) {\n        return dsl.fetchExists(\n            dsl.selectOne().from(USERS).where(USERS.EMAIL.eq(email)));\n    }\n\n    // --- UPDATE ---\n\n    public int updateEmail(Long id, String newEmail) {\n        return dsl.update(USERS)\n            .set(USERS.EMAIL, newEmail)\n            .where(USERS.ID.eq(id))\n            .execute();\n    }\n\n    public int updateUser(Long id, UsersRecord changes) {\n        return dsl.update(USERS)\n            .set(USERS.USERNAME, changes.getUsername())\n            .set(USERS.EMAIL, changes.getEmail())\n            .set(USERS.PASSWORD_HASH, changes.getPasswordHash())\n            .set(USERS.BIRTH_DATE, changes.getBirthDate())\n            .set(USERS.ACTIVE, changes.getActive())\n            .where(USERS.ID.eq(id))\n            .execute();\n    }\n\n    // --- DELETE ---\n\n    public int deleteById(Long id) {\n        return dsl.deleteFrom(USERS)\n            .where(USERS.ID.eq(id))\n            .execute();\n    }\n\n    public int deleteInactiveUsers() {\n        return dsl.deleteFrom(USERS)\n            .where(USERS.ACTIVE.eq(false))\n            .and(USERS.CREATED_AT.lessThan(LocalDateTime.now().minusYears(1)))\n            .execute();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-dao-generation",
      children: "5.8 DAO Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jOOQ generates DAO classes that provide standard CRUD out of the box."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Generated DAO (with daos=true in codegen config):\n@Repository\npublic class UsersDao extends DAOImpl<UsersRecord, UsersPojo, Long> {\n\n    public UsersDao(Configuration configuration) {\n        super(Users.USERS, UsersPojo.class, configuration);\n    }\n\n    // Provided by DAOImpl:\n    // void insert(UsersPojo)\n    // void update(UsersPojo)\n    // void delete(UsersPojo)\n    // void deleteById(Long)\n    // boolean existsById(Long)\n    // UsersPojo findById(Long)\n    // List<UsersPojo> findAll()\n    // List<UsersPojo> fetchByUsername(String)  // by unique/foreign keys\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using generated DAOs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\n@Transactional\npublic class UserService {\n\n    private final UsersDao usersDao;\n\n    public UserService(UsersDao usersDao) {\n        this.usersDao = usersDao;\n    }\n\n    public UsersPojo findById(Long id) {\n        return usersDao.findById(id);\n    }\n\n    public List<UsersPojo> findAll() {\n        return usersDao.findAll();\n    }\n\n    public void create(UsersPojo user) {\n        usersDao.insert(user);\n    }\n\n    public void update(UsersPojo user) {\n        usersDao.update(user);\n    }\n\n    public void delete(Long id) {\n        usersDao.deleteById(id);\n    }\n\n    public List<UsersPojo> findByActive(boolean active) {\n        return usersDao.fetchByActive(active);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom DAO extending generated DAO:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Repository\npublic class CustomUserDao extends UsersDao {\n\n    private final DSLContext dsl;\n\n    public CustomUserDao(Configuration configuration, DSLContext dsl) {\n        super(configuration);\n        this.dsl = dsl;\n    }\n\n    public List<UsersPojo> findRecentlyActive(LocalDateTime since) {\n        return dsl.selectFrom(USERS)\n            .where(USERS.LAST_LOGIN.isNotNull()\n                .and(USERS.LAST_LOGIN.greaterOrEqual(since)))\n            .orderBy(USERS.LAST_LOGIN.desc())\n            .fetchInto(UsersPojo.class);\n    }\n\n    public List<UsersPojo> search(String query) {\n        return dsl.selectFrom(USERS)\n            .where(USERS.USERNAME.containsIgnoreCase(query)\n                .or(USERS.EMAIL.containsIgnoreCase(query)))\n            .orderBy(USERS.USERNAME)\n            .fetchInto(UsersPojo.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "59-jooq-vs-jpa",
      children: "5.9 jOOQ vs JPA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "jOOQ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JPA (Hibernate)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Philosophy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL is king"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP is king"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPQL / Criteria API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (every SQL feature)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (JPQL subset)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DB → Java code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entities → DB DDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable, direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N+1, caching, dirty checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know SQL = know jOOQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity states, cascade, fetch strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specification / Criteria API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual flush/clear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stored procedures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awkward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON/XML columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hibernate Types ext"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema/filter/column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@TenantId / Filter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use jOOQ when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You own the schema and want compile-time safety"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need complex SQL: CTEs, window functions, pivot, recursive queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance is critical with full SQL control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Working with an existing database (schema-first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stored procedure/function support is needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use JPA when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want schema generation from Java entities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L1/L2 caching is needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep object graphs with lazy loading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switching databases easily (JPQL is DB-agnostic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entity state management (dirty checking, auto-flush)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use both (hybrid approach):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\nclass HybridApproachService {\n\n    private final DSLContext dsl;\n    private final JpaRepository<UserEntity, Long> userRepo;\n\n    public HybridApproachService(DSLContext dsl,\n            JpaRepository<UserEntity, Long> userRepo) {\n        this.dsl = dsl;\n        this.userRepo = userRepo;\n    }\n\n    // JPA for simple CRUD\n    public UserEntity findByIdJpa(Long id) {\n        return userRepo.findById(id).orElseThrow();\n    }\n\n    // jOOQ for complex queries\n    public List<Record> getMonthlyReport() {\n        return dsl.select(\n                DSL.trunc(ORDERS.ORDER_DATE).as(\"month\"),\n                DSL.count().as(\"order_count\"),\n                DSL.sum(ORDERS.TOTAL).as(\"revenue\")\n            )\n            .from(ORDERS)\n            .join(USERS).on(ORDERS.USER_ID.eq(USERS.ID))\n            .groupBy(DSL.trunc(ORDERS.ORDER_DATE))\n            .orderBy(DSL.field(\"month\"))\n            .fetch();\n    }\n\n    // jOOQ for batch operations\n    public int batchUpdateStatus(Long[] orderIds, String newStatus) {\n        return dsl.update(ORDERS)\n            .set(ORDERS.STATUS, newStatus)\n            .where(ORDERS.ID.in(orderIds))\n            .execute();\n    }\n}\n"
      })
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
            children: "JDBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level database access API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual connection, statement, result set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple queries, full control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JdbcTemplate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring template for JDBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces boilerplate, maps rows to objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common CRUD operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jOOQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe SQL DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated classes match schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex queries, compile-time safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HikariCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance connection pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, lightweight, reliable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production connection pooling"
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
            children: "JDBC Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Practice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DriverManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct connection creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DataSource in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PreparedStatement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized query execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents SQL injection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query result iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RowMapper for mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HikariCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pool configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set pool size, connection timeout"
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
            children: "Data Access Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JDBC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JdbcTemplate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "jOOQ"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple CRUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex Joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSL-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
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
        children: ["What is the best practice for preventing SQL injection?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Input validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) PreparedStatement with parameterized queries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Escaping user input"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Stored procedures"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) PreparedStatement with parameterized queries.** Parameterized queries ensure user input is never interpreted as SQL code.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which jOOQ feature provides compile-time SQL validation?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) DSL API"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Code generation from schema"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Query logging"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Result mapping"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Code generation from schema.** jOOQ generates Java classes matching your database schema, enabling type-safe query construction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is HikariCP's default pool size?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 20"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 50"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) 10.** HikariCP defaults to a maximum of 10 connections in the pool.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ummary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the complete Java database access stack from low-level JDBC to type-safe jOOQ queries:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JDBC Core"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DriverManager"
      }), " for basic connections. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PreparedStatement"
      }), " prevents SQL injection through parameterized queries. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CallableStatement"
      }), " invokes stored procedures. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResultSetMetaData"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatabaseMetaData"
      }), " provide schema introspection. Batch updates improve bulk operation performance. Scrollable/updatable ResultSets enable backward navigation and direct data modification."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DataSource & HikariCP"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), " is the preferred connection factory. HikariCP is Spring Boot's default pool with configurable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maximumPoolSize"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "minimumIdle"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "connectionTimeout"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maxLifetime"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "leakDetectionThreshold"
      }), ". Metrics are exposed via Micrometer and Actuator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JdbcTemplate"
      }), ": Eliminates JDBC boilerplate. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query()"
      }), " returns lists, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "queryForObject()"
      }), " single results, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "queryForList()"
      }), " maps, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update()"
      }), " modifications, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "batchUpdate()"
      }), " bulk operations. Three mapping strategies: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RowMapper"
      }), " (one row → one object), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResultSetExtractor"
      }), " (full set → one result), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RowCallbackHandler"
      }), " (streaming callback). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeanPropertyRowMapper"
      }), " auto-maps columns to properties."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NamedParameterJdbcTemplate"
      }), ": Named parameters (", (0,jsx_runtime.jsx)(_components.code, {
        children: ":param"
      }), ") instead of positional (", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), "). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MapSqlParameterSource"
      }), " for fluent API. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeanPropertySqlParameterSource"
      }), " auto-derives names from beans. Native IN clause support with lists."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "jOOQ DSL"
      }), ": Type-safe SQL DSL with code generation from database schemas. Supports every SQL feature: JOINs, GROUP BY/HAVING, subqueries, CTEs, aggregations. Multi-tenancy via ThreadLocal, ExecuteListeners, or schema switching. Spring Boot auto-configures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DSLContext"
      }), " through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-jooq"
      }), ". Generated DAOs provide standard CRUD. jOOQ excels at complex SQL and complements JPA for reporting and batch operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is SQL injection and how does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PreparedStatement"
          }), " prevent it? Provide an injection attack example and the safe equivalent."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Statement"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PreparedStatement"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CallableStatement"
          }), ". When would you use each?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RowMapper"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ResultSetExtractor"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RowCallbackHandler"
          }), "? Give a use case for each."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What advantage does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NamedParameterJdbcTemplate"
          }), " provide over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JdbcTemplate"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["List and explain five HikariCP configuration parameters. What happens if ", (0,jsx_runtime.jsx)(_components.code, {
            children: "maximumPoolSize"
          }), " is set too high?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does jOOQ code generation work? What classes does it generate from a database schema?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare jOOQ and JPA. List three scenarios where each is the better choice."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How do you handle multi-tenancy in jOOQ? Describe two approaches."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BeanPropertySqlParameterSource"
          }), " and how does it reduce boilerplate?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the three ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ResultSet"
          }), " type constants (", (0,jsx_runtime.jsx)(_components.code, {
            children: "TYPE_FORWARD_ONLY"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TYPE_SCROLL_INSENSITIVE"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TYPE_SCROLL_SENSITIVE"
          }), "). When would you use each?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "JDBC CRUD with H2"
          }), ": Create a standalone Java application that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses H2 in-memory database"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "products"
            }), " table (id, name, price, stock, created_at)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implements full CRUD using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PreparedStatement"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses batch insert for 1000 products"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses scrollable ResultSet to display products in reverse order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Logs all SQL exceptions with error codes and SQL states"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HikariCP Pool Tuning"
          }), ": Create a Spring Boot application that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Configures HikariCP with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maximumPoolSize=5"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "minimumIdle=2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "leakDetectionThreshold=10000"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates a REST endpoint ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/orders"
            }), " that simulates slow queries (Thread.sleep(2000))"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates a health indicator showing pool metrics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a test that sends 20 concurrent requests and observes pool behavior"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document how the pool handles the overload"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "JdbcTemplate Reporting Service"
          }), ": Implement a report service that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "JdbcTemplate"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResultSetExtractor"
            }), " to build a nested order summary"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Groups orders by user, includes user info + order list + total per user"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RowCallbackHandler"
            }), " to stream 100K rows to a CSV file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BeanPropertyRowMapper"
            }), " for a flat listing endpoint"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Handles ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EmptyResultDataAccessException"
            }), " gracefully"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NamedParameterJdbcTemplate Search"
          }), ": Build a dynamic search API with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Search users by any combination of: ids (IN clause), username (partial match), email domain, active status, date range"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MapSqlParameterSource"
            }), " for all parameters"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BeanPropertySqlParameterSource"
            }), " for inserts"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement batch status update using named parameters"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handle empty list for IN clause gracefully"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "jOOQ Type-Safe Queries"
          }), ": Set up jOOQ code generation against a PostgreSQL database and implement:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "selectFrom"
            }), " query with 5 conditions composed dynamically"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A 3-table JOIN with GROUP BY and HAVING"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A CTE (WITH clause) for monthly aggregation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A subquery in WHERE clause"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Batch insert with generated keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Convert the same queries from jOOQ to JdbcTemplate and compare code size"
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
            children: "Mini ORM Framework"
          }), ": Build a minimal ORM framework on top of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JdbcTemplate"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses reflection to map any ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Table"
            }), "-annotated class to SQL"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates INSERT, SELECT, UPDATE, DELETE from annotations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Id"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Column"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Transient"
            }), " annotations"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Handles ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OneToMany"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ManyToOne"
            }), " relationships"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provides a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "findByExample()"
            }), " method using non-null fields"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The final framework must be under 500 lines"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Connection Pool Profiler"
          }), ": Build a monitoring tool that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Wraps any ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DataSource"
            }), " with a proxy that tracks every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getConnection()"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Logs stack traces for connections held longer than a configurable threshold"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exposes metrics: active connections, average hold time, connection leak count"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reports the top-5 calling stack traces holding connections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrates with Micrometer for Grafana dashboards"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "jOOQ-to-JPA Migration Adapter"
          }), ": Create a bridge that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reads jOOQ generated table metadata via reflection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Auto-generates equivalent JPA entities with proper annotations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Maps jOOQ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Record"
            }), " objects to JPA entities and vice versa"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@OneToMany"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ManyToOne"
            }), " relationship inference from foreign keys"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Benchmarks the same query executed via jOOQ DSL and JPA Criteria API"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Produces a report comparing generated SQL, execution time, and result mapping overhead"
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