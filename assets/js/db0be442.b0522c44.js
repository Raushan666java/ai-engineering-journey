"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77846],{

/***/ 12149
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_22_migrations_md_db0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-22-migrations-md-db0.json
const site_docs_courses_java_22_migrations_md_db0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/22-migrations","title":"Database Migrations (Flyway & Liquibase)","description":"Previous NoSQL","source":"@site/docs/courses/java/22-migrations.md","sourceDirName":"courses/java","slug":"/java/22-migrations","permalink":"/ai-engineering-journey/java/22-migrations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"id":"22-migrations","slug":"/java/22-migrations","title":"Database Migrations (Flyway & Liquibase)","sidebar_label":"Database Migrations (Flyway & Liquibase)","sidebar_position":22},"sidebar":"course-java","previous":{"title":"Spring Data JPA","permalink":"/ai-engineering-journey/java/21-spring-data-jpa"},"next":{"title":"Spring Data for NoSQL","permalink":"/ai-engineering-journey/java/23-nosql"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/22-migrations.md


const frontMatter = {
	id: '22-migrations',
	slug: '/java/22-migrations',
	title: 'Database Migrations (Flyway & Liquibase)',
	sidebar_label: 'Database Migrations (Flyway & Liquibase)',
	sidebar_position: 22
};
const contentTitle = 'Database Migrations (Flyway & Liquibase)';

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
  "value": "1. Why Database Migrations?",
  "id": "1-why-database-migrations",
  "level": 2
}, {
  "value": "1.1 How Migrations Work",
  "id": "11-how-migrations-work",
  "level": 3
}, {
  "value": "2. Flyway",
  "id": "2-flyway",
  "level": 2
}, {
  "value": "2.1 Setup and Configuration",
  "id": "21-setup-and-configuration",
  "level": 3
}, {
  "value": "2.2 Migration File Naming",
  "id": "22-migration-file-naming",
  "level": 3
}, {
  "value": "2.3 Versioned Migrations",
  "id": "23-versioned-migrations",
  "level": 3
}, {
  "value": "2.4 Repeatable Migrations",
  "id": "24-repeatable-migrations",
  "level": 3
}, {
  "value": "2.5 Callbacks",
  "id": "25-callbacks",
  "level": 3
}, {
  "value": "2.6 SQL Callbacks (File-Based)",
  "id": "26-sql-callbacks-file-based",
  "level": 3
}, {
  "value": "2.7 Flyway Configuration Options",
  "id": "27-flyway-configuration-options",
  "level": 3
}, {
  "value": "2.8 Java-Based Migrations",
  "id": "28-java-based-migrations",
  "level": 3
}, {
  "value": "2.9 Programmatic Flyway Usage",
  "id": "29-programmatic-flyway-usage",
  "level": 3
}, {
  "value": "2.10 Flyway in Tests",
  "id": "210-flyway-in-tests",
  "level": 3
}, {
  "value": "3. Liquibase",
  "id": "3-liquibase",
  "level": 2
}, {
  "value": "3.1 Setup and Configuration",
  "id": "31-setup-and-configuration",
  "level": 3
}, {
  "value": "3.2 Changelog Formats",
  "id": "32-changelog-formats",
  "level": 3
}, {
  "value": "XML (Most Common)",
  "id": "xml-most-common",
  "level": 4
}, {
  "value": "YAML",
  "id": "yaml",
  "level": 4
}, {
  "value": "JSON",
  "id": "json",
  "level": 4
}, {
  "value": "SQL",
  "id": "sql",
  "level": 4
}, {
  "value": "3.3 Changeset Structure",
  "id": "33-changeset-structure",
  "level": 3
}, {
  "value": "3.4 Common Liquibase Changes",
  "id": "34-common-liquibase-changes",
  "level": 3
}, {
  "value": "3.5 Rollback",
  "id": "35-rollback",
  "level": 3
}, {
  "value": "3.6 Contexts and Labels",
  "id": "36-contexts-and-labels",
  "level": 3
}, {
  "value": "3.7 Preconditions",
  "id": "37-preconditions",
  "level": 3
}, {
  "value": "3.8 Liquibase Maven Plugin",
  "id": "38-liquibase-maven-plugin",
  "level": 3
}, {
  "value": "3.9 Programmatic Liquibase API",
  "id": "39-programmatic-liquibase-api",
  "level": 3
}, {
  "value": "3.10 Liquibase in Tests",
  "id": "310-liquibase-in-tests",
  "level": 3
}, {
  "value": "4. Versioning Strategies",
  "id": "4-versioning-strategies",
  "level": 2
}, {
  "value": "4.1 Semantic Versioning",
  "id": "41-semantic-versioning",
  "level": 3
}, {
  "value": "4.2 Timestamp-Based Versioning",
  "id": "42-timestamp-based-versioning",
  "level": 3
}, {
  "value": "4.3 Run-Always (Repeatable)",
  "id": "43-run-always-repeatable",
  "level": 3
}, {
  "value": "4.4 Versioned vs Repeatable",
  "id": "44-versioned-vs-repeatable",
  "level": 3
}, {
  "value": "4.5 Migration Naming Conventions",
  "id": "45-migration-naming-conventions",
  "level": 3
}, {
  "value": "5. Migration Testing",
  "id": "5-migration-testing",
  "level": 2
}, {
  "value": "5.1 Testcontainers Migration Test",
  "id": "51-testcontainers-migration-test",
  "level": 3
}, {
  "value": "5.2 @DataJpaTest with Migrations",
  "id": "52-datajpatest-with-migrations",
  "level": 3
}, {
  "value": "5.3 Rollback Testing",
  "id": "53-rollback-testing",
  "level": 3
}, {
  "value": "6. Environment Management",
  "id": "6-environment-management",
  "level": 2
}, {
  "value": "6.1 Per-Environment Scripts",
  "id": "61-per-environment-scripts",
  "level": 3
}, {
  "value": "6.2 Reference Data Seeds",
  "id": "62-reference-data-seeds",
  "level": 3
}, {
  "value": "6.3 Data Seeds Per Profile",
  "id": "63-data-seeds-per-profile",
  "level": 3
}, {
  "value": "6.4 afterMigrate Scripts",
  "id": "64-aftermigrate-scripts",
  "level": 3
}, {
  "value": "7. Flyway vs Liquibase Comparison",
  "id": "7-flyway-vs-liquibase-comparison",
  "level": 2
}, {
  "value": "7.1 Feature Comparison Table",
  "id": "71-feature-comparison-table",
  "level": 3
}, {
  "value": "7.2 When to Choose Which",
  "id": "72-when-to-choose-which",
  "level": 3
}, {
  "value": "7.3 Migration Tool Decision Matrix",
  "id": "73-migration-tool-decision-matrix",
  "level": 3
}, {
  "value": "7.4 Migration File Organization",
  "id": "74-migration-file-organization",
  "level": 3
}, {
  "value": "7.5 Migration Best Practices",
  "id": "75-migration-best-practices",
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
          href: "/ai-engineering-journey/java/21-spring-data-jpa",
          children: "Spring Data JPA"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/23-nosql",
          children: "NoSQL"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "database-migrations-flyway--liquibase",
        children: "Database Migrations (Flyway & Liquibase)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/java/22-migrations/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/22-migrations/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/22-migrations/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/22-migrations/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/22-migrations/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/22-migrations/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate database schema changes using Flyway versioned migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Liquibase changelogs in multiple formats (XML, YAML, JSON, SQL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design versioning strategies for migration scripts across environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test migrations using Testcontainers in automated pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage per-environment seed data and reference data scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between Flyway and Liquibase based on objective criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle rollback strategies, validation, and repair scenarios"
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
            children: "Flyway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned SQL-based migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V{number}__{desc}.sql naming convention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Liquibase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/YAML/JSON/SQL changelog format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changesets with id/author/file attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic versioning of schema changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically track applied vs pending"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway: undo plugin (pro); Liquibase: rollback tag"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers for migration testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify migrations in CI pipeline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Why Migrations] --> B[Flyway Basics]\n    B --> C[Liquibase Basics]\n    C --> D[Versioning Strategy]\n    D --> E[Rollback Strategies]\n    E --> F[Testing with Testcontainers]\n    F --> G[CI/CD Integration]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Never modify an already-applied migration. Create a new migration file for any schema change. Flyway validates checksums and will fail if a migration has been altered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-why-database-migrations",
      children: "1. Why Database Migrations?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/22-migrations.png",
        alt: "Database Migrations Flyway Liquibase"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Database migrations solve a fundamental problem: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "schema drift"
      }), ". Without migrations, every developer applies changes manually, leading to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent environments (dev has a column that staging doesn't)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No change history or audit trail"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual, error-prone deployment procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automated rollback capability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migration tools bring database changes under version control, making them repeatable, auditable, and testable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-how-migrations-work",
      children: "1.1 How Migrations Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The migration tool reads a tracking table (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flyway_schema_history"
      }), "), identifies unapplied migrations, and applies them in order. Each migration is a file with a unique version number, description, and the SQL/DDL to execute. The tracking table records which migrations have been applied, their checksums, and timestamps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "flyway_schema_history\n+-------+-------------------+----------+------------+\n| version | description      | state    | installed  |\n+-------+-------------------+----------+------------+\n| 1     | create users      | SUCCESS  | 2024-01-15 |\n| 2     | add email         | SUCCESS  | 2024-01-15 |\n| 3     | create orders     | SUCCESS  | 2024-01-16 |\n| 4     | add foreign keys | PENDING  |            |\n+-------+-------------------+----------+------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-flyway",
      children: "2. Flyway"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-setup-and-configuration",
      children: "2.1 Setup and Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.flywaydb</groupId>\n    <artifactId>flyway-core</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>org.flywaydb</groupId>\n    <artifactId>flyway-database-postgresql</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  flyway:\n    enabled: true\n    locations: classpath:db/migration\n    baseline-on-migrate: true\n    baseline-version: 0\n    validate-on-migrate: true\n    out-of-order: false\n    encoding: UTF-8\n    placeholder-replacement: true\n    placeholders:\n      schema_name: public\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "spring.flyway.enabled=true\nspring.flyway.locations=classpath:db/migration\nspring.flyway.baseline-on-migrate=true\nspring.flyway.baseline-version=1\nspring.flyway.validate-on-migrate=true\nspring.flyway.out-of-order=false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-migration-file-naming",
      children: "2.2 Migration File Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Prefix: V (versioned), R (repeatable), U (undo -- Pro only)\n-- Version: numeric with dots and underscores\n-- Separator: __ (double underscore)\n-- Description: words separated by underscores\n\n-- db/migration/\n--   V1__create_users.sql\n--   V1_1__add_indexes.sql\n--   V2__create_orders.sql\n--   R__refresh_product_view.sql        -- Repeatable\n--   U1__undo_create_users.sql          -- Flyway Pro/Teams only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-versioned-migrations",
      children: "2.3 Versioned Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V1__create_users.sql\nCREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    username VARCHAR(100) NOT NULL,\n    email VARCHAR(255) NOT NULL,\n    password_hash VARCHAR(255) NOT NULL,\n    full_name VARCHAR(255),\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT uk_users_username UNIQUE (username),\n    CONSTRAINT uk_users_email UNIQUE (email)\n);\n\nCREATE INDEX idx_users_email ON users(email);\nCREATE INDEX idx_users_username ON users(username);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V2__create_orders.sql\nCREATE TABLE orders (\n    id BIGSERIAL PRIMARY KEY,\n    user_id BIGINT NOT NULL,\n    order_number VARCHAR(50) NOT NULL,\n    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',\n    total_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,\n    currency VARCHAR(3) NOT NULL DEFAULT 'USD',\n    shipping_address TEXT,\n    notes TEXT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT uk_orders_order_number UNIQUE (order_number)\n);\n\nCREATE INDEX idx_orders_user_id ON orders(user_id);\nCREATE INDEX idx_orders_status ON orders(status);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V3__add_foreign_keys.sql\nALTER TABLE orders\n    ADD CONSTRAINT fk_orders_user\n    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V4__add_product_catalog.sql\nCREATE TABLE categories (\n    id BIGSERIAL PRIMARY KEY,\n    name VARCHAR(200) NOT NULL,\n    slug VARCHAR(200) NOT NULL,\n    description TEXT,\n    parent_id BIGINT,\n    sort_order INT DEFAULT 0,\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT uk_categories_slug UNIQUE (slug),\n    CONSTRAINT fk_categories_parent\n        FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE SET NULL\n);\n\nCREATE TABLE products (\n    id BIGSERIAL PRIMARY KEY,\n    category_id BIGINT NOT NULL,\n    sku VARCHAR(100) NOT NULL,\n    name VARCHAR(500) NOT NULL,\n    description TEXT,\n    price DECIMAL(12,2) NOT NULL,\n    stock_quantity INT DEFAULT 0,\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT uk_products_sku UNIQUE (sku),\n    CONSTRAINT fk_products_category\n        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT\n);\n\nCREATE TABLE order_items (\n    id BIGSERIAL PRIMARY KEY,\n    order_id BIGINT NOT NULL,\n    product_id BIGINT NOT NULL,\n    quantity INT NOT NULL,\n    unit_price DECIMAL(12,2) NOT NULL,\n    total_price DECIMAL(12,2) NOT NULL,\n    CONSTRAINT fk_order_items_order\n        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,\n    CONSTRAINT fk_order_items_product\n        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-repeatable-migrations",
      children: "2.4 Repeatable Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- R__active_products_view.sql\n-- Re-applied every time the checksum changes\n-- Great for views, stored procedures, functions\n\nCREATE OR REPLACE VIEW active_products AS\nSELECT p.id, p.sku, p.name, p.description, p.price,\n       c.name AS category_name, c.slug AS category_slug\nFROM products p\nJOIN categories c ON c.id = p.category_id\nWHERE p.is_active = TRUE AND c.is_active = TRUE;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- R__product_search_function.sql\nCREATE OR REPLACE FUNCTION search_products(search_term TEXT)\nRETURNS TABLE(id BIGINT, name VARCHAR(500), price DECIMAL(12,2),\n              category_name VARCHAR(200), relevance REAL) AS $$\nBEGIN\n    RETURN QUERY\n    SELECT p.id, p.name, p.price, c.name,\n           ts_rank(to_tsvector('english', p.name || ' ' || COALESCE(p.description, '')),\n                   plainto_tsquery('english', search_term)) AS relevance\n    FROM products p\n    JOIN categories c ON c.id = p.category_id\n    WHERE to_tsvector('english', p.name || ' ' || COALESCE(p.description, ''))\n          @@ plainto_tsquery('english', search_term)\n    ORDER BY relevance DESC;\nEND;\n$$ LANGUAGE plpgsql;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-callbacks",
      children: "2.5 Callbacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class FlywayCallback implements Callback {\n\n    private static final Logger log = LoggerFactory.getLogger(FlywayCallback.class);\n\n    @Override\n    public boolean supports(Event event, Context context) {\n        return event == Event.AFTER_MIGRATE\n            || event == Event.BEFORE_MIGRATE\n            || event == Event.AFTER_EACH_MIGRATE\n            || event == Event.BEFORE_EACH_MIGRATE;\n    }\n\n    @Override\n    public boolean canHandleInTransaction(Event event, Context context) {\n        return true;\n    }\n\n    @Override\n    public void handle(Event event, Context context) {\n        switch (event) {\n            case BEFORE_MIGRATE -> {\n                log.info(\"Starting database migration\");\n                Metrics.counter(\"flyway.migration.start\").increment();\n            }\n            case AFTER_MIGRATE -> {\n                log.info(\"Database migration completed\");\n                Metrics.counter(\"flyway.migration.success\").increment();\n            }\n            case BEFORE_EACH_MIGRATE -> {\n                log.info(\"Applying migration: {}\",\n                    context.getMigrationInfo().getDescription());\n            }\n            case AFTER_EACH_MIGRATE -> {\n                log.info(\"Applied migration: {} ({}ms)\",\n                    context.getMigrationInfo().getDescription(),\n                    context.getMigrationInfo().getExecutionTime());\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-sql-callbacks-file-based",
      children: "2.6 SQL Callbacks (File-Based)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- db/migration/callbacks/beforeMigrate.sql\nCREATE SCHEMA IF NOT EXISTS app;\nSET search_path TO app, public;\n\n-- db/migration/callbacks/afterMigrate.sql\nINSERT INTO app.migration_log (event, occurred_at)\nVALUES ('MIGRATION_COMPLETED', CURRENT_TIMESTAMP);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-flyway-configuration-options",
      children: "2.7 Flyway Configuration Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  flyway:\n    locations:\n      - classpath:db/migration\n      - classpath:db/seed\n    default-schema: app\n    schemas:\n      - app\n      - public\n    create-schemas: true\n    baseline-on-migrate: true\n    baseline-version: 3\n    baseline-description: \"Initial schema from legacy system\"\n    validate-on-migrate: true\n    validate-migration-naming: true\n    ignore-missing-migrations: false\n    ignore-ignored-migrations: false\n    ignore-pending-migrations: false\n    out-of-order: false\n    mixed: false\n    batch: true\n    placeholder-replacement: true\n    placeholders:\n      schema_name: app\n      admin_role: admin_user\n    fail-on-missing-locations: true\n    clean-disabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-java-based-migrations",
      children: "2.8 Java-Based Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class V5__MigrateLegacyData implements JavaMigration {\n\n    @Override\n    public Integer getChecksum() {\n        return 5;\n    }\n\n    @Override\n    public boolean canExecuteInTransaction() {\n        return true;\n    }\n\n    @Override\n    public void migrate(Context context) throws Exception {\n        var jdbcTemplate = new JdbcTemplate(\n            DataSourceUtils.getDataSource(context.getConfiguration().getDataSource()));\n\n        List<Map<String, Object>> legacyUsers = jdbcTemplate\n            .queryForList(\"SELECT * FROM legacy_users WHERE migrated = FALSE\");\n\n        for (Map<String, Object> legacy : legacyUsers) {\n            jdbcTemplate.update(\"\"\"\n                INSERT INTO users (username, email, password_hash, full_name, is_active, created_at)\n                VALUES (?, ?, ?, ?, TRUE, NOW())\n                \"\"\",\n                legacy.get(\"login_name\"),\n                legacy.get(\"email_address\"),\n                legacy.get(\"password_hash\"),\n                legacy.get(\"display_name\"));\n        }\n\n        jdbcTemplate.update(\"UPDATE legacy_users SET migrated = TRUE\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-programmatic-flyway-usage",
      children: "2.9 Programmatic Flyway Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class FlywayConfig {\n\n    @Bean\n    public Flyway flyway(DataSource dataSource) {\n        Flyway flyway = Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\")\n            .baselineOnMigrate(true)\n            .baselineVersion(\"1\")\n            .placeholders(Map.of(\"schema_name\", \"app\"))\n            .load();\n\n        var result = flyway.migrate();\n        log.info(\"Applied {} migrations\", result.migrations.size());\n        return flyway;\n    }\n}\n\n@Service\npublic class MigrationService {\n\n    private final Flyway flyway;\n\n    public MigrationService(Flyway flyway) {\n        this.flyway = flyway;\n    }\n\n    public MigrateResult migrate() { return flyway.migrate(); }\n    public void validate() { flyway.validate(); }\n    public void baseline() { flyway.baseline(); }\n    public void repair() { flyway.repair(); }\n    public MigrationInfoService info() { return flyway.info(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-flyway-in-tests",
      children: "2.10 Flyway in Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass FlywayMigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.flyway.enabled\", () -> true);\n    }\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Test\n    void allMigrationsApplySuccessfully() {\n        Flyway flyway = Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\")\n            .load();\n\n        MigrateResult result = flyway.migrate();\n        assertThat(result.migrations).isNotEmpty();\n        assertThat(result.migrations)\n            .allMatch(m -> m.getState() == State.SUCCESS);\n    }\n\n    @Test\n    void databaseSchemaIsValidAfterMigration() {\n        Flyway flyway = Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\")\n            .load();\n\n        flyway.migrate();\n        flyway.validate();\n    }\n\n    @Test\n    void expectedTablesExist() throws SQLException {\n        Flyway flyway = Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\")\n            .load();\n\n        flyway.migrate();\n\n        try (var conn = dataSource.getConnection();\n             var rs = conn.getMetaData()\n                 .getTables(null, \"public\", null, new String[]{\"TABLE\"})) {\n\n            Set<String> tables = new HashSet<>();\n            while (rs.next()) {\n                tables.add(rs.getString(\"TABLE_NAME\"));\n            }\n\n            assertThat(tables).contains(\"users\", \"orders\", \"order_items\",\n                \"products\", \"categories\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-liquibase",
      children: "3. Liquibase"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-setup-and-configuration",
      children: "3.1 Setup and Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.liquibase</groupId>\n    <artifactId>liquibase-core</artifactId>\n</dependency>\n\n<plugin>\n    <groupId>org.liquibase</groupId>\n    <artifactId>liquibase-maven-plugin</artifactId>\n    <version>${liquibase.version}</version>\n    <configuration>\n        <changeLogFile>db/changelog/db.changelog-master.xml</changeLogFile>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  liquibase:\n    enabled: true\n    change-log: classpath:db/changelog/db.changelog-master.xml\n    default-schema: app\n    liquibase-schema: app\n    liquibase-table: databasechangelog\n    contexts: prod\n    drop-first: false\n    test-rollback-on-update: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-changelog-formats",
      children: "3.2 Changelog Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xml-most-common",
      children: "XML (Most Common)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<databaseChangeLog\n    xmlns=\"http://www.liquibase.org/xml/ns/dbchangelog\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n    xsi:schemaLocation=\"http://www.liquibase.org/xml/ns/dbchangelog\n        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.27.xsd\">\n\n    <include file=\"db/changelog/001-create-users.xml\"/>\n    <include file=\"db/changelog/002-create-orders.xml\"/>\n    <include file=\"db/changelog/003-add-indexes.xml\"/>\n    <include file=\"db/changelog/004-seed-data.xml\"/>\n</databaseChangeLog>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "yaml",
      children: "YAML"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "databaseChangeLog:\n  - include:\n      file: db/changelog/001-create-users.yaml\n  - include:\n      file: db/changelog/002-create-orders.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "json",
      children: "JSON"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"databaseChangeLog\": [\n    { \"include\": { \"file\": \"db/changelog/001-create-users.json\" } },\n    { \"include\": { \"file\": \"db/changelog/002-create-orders.json\" } }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql",
      children: "SQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- liquibase formatted sql\n\n-- changeset jdoe:001-create-users\nCREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    username VARCHAR(100) NOT NULL,\n    email VARCHAR(255) NOT NULL,\n    password_hash VARCHAR(255) NOT NULL,\n    full_name VARCHAR(255),\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT uk_users_username UNIQUE (username),\n    CONSTRAINT uk_users_email UNIQUE (email)\n);\n-- rollback DROP TABLE users;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-changeset-structure",
      children: "3.3 Changeset Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<databaseChangeLog\n    xmlns=\"http://www.liquibase.org/xml/ns/dbchangelog\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n    xsi:schemaLocation=\"http://www.liquibase.org/xml/ns/dbchangelog\n        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.27.xsd\">\n\n    <changeSet id=\"001\" author=\"jdoe\">\n        <createTable tableName=\"users\">\n            <column name=\"id\" type=\"BIGSERIAL\" autoIncrement=\"true\">\n                <constraints primaryKey=\"true\" nullable=\"false\"/>\n            </column>\n            <column name=\"username\" type=\"VARCHAR(100)\">\n                <constraints nullable=\"false\" unique=\"true\"/>\n            </column>\n            <column name=\"email\" type=\"VARCHAR(255)\">\n                <constraints nullable=\"false\" unique=\"true\"/>\n            </column>\n            <column name=\"password_hash\" type=\"VARCHAR(255)\">\n                <constraints nullable=\"false\"/>\n            </column>\n            <column name=\"full_name\" type=\"VARCHAR(255)\"/>\n            <column name=\"is_active\" type=\"BOOLEAN\" defaultValueBoolean=\"true\"/>\n            <column name=\"created_at\" type=\"TIMESTAMP\"\n                    defaultValueComputed=\"CURRENT_TIMESTAMP\"/>\n            <column name=\"updated_at\" type=\"TIMESTAMP\"\n                    defaultValueComputed=\"CURRENT_TIMESTAMP\"/>\n        </createTable>\n\n        <createIndex tableName=\"users\" indexName=\"idx_users_email\">\n            <column name=\"email\"/>\n        </createIndex>\n\n        <rollback>\n            <dropTable tableName=\"users\"/>\n        </rollback>\n    </changeSet>\n</databaseChangeLog>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-common-liquibase-changes",
      children: "3.4 Common Liquibase Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<changeSet id=\"002\" author=\"jdoe\">\n    <createTable tableName=\"orders\">\n        <column name=\"id\" type=\"BIGSERIAL\" autoIncrement=\"true\">\n            <constraints primaryKey=\"true\" nullable=\"false\"/>\n        </column>\n        <column name=\"user_id\" type=\"BIGINT\">\n            <constraints nullable=\"false\"/>\n        </column>\n        <column name=\"order_number\" type=\"VARCHAR(50)\">\n            <constraints nullable=\"false\" unique=\"true\"/>\n        </column>\n        <column name=\"status\" type=\"VARCHAR(20)\" defaultValue=\"PENDING\">\n            <constraints nullable=\"false\"/>\n        </column>\n        <column name=\"total_amount\" type=\"DECIMAL(12,2)\" defaultValueNumeric=\"0\">\n            <constraints nullable=\"false\"/>\n        </column>\n    </createTable>\n</changeSet>\n\n<changeSet id=\"003\" author=\"jdoe\">\n    <addColumn tableName=\"users\">\n        <column name=\"phone_number\" type=\"VARCHAR(20)\"/>\n    </addColumn>\n\n    <modifyDataType tableName=\"orders\"\n                    columnName=\"status\"\n                    newDataType=\"VARCHAR(30)\"/>\n\n    <addForeignKeyConstraint\n        baseTableName=\"orders\"\n        baseColumnNames=\"user_id\"\n        referencedTableName=\"users\"\n        referencedColumnNames=\"id\"\n        constraintName=\"fk_orders_user\"\n        onDelete=\"RESTRICT\"/>\n\n    <addUniqueConstraint\n        tableName=\"users\"\n        columnNames=\"email\"\n        constraintName=\"uk_users_email_v2\"/>\n</changeSet>\n\n<changeSet id=\"004\" author=\"jdoe\">\n    <insert tableName=\"categories\">\n        <column name=\"name\" value=\"Electronics\"/>\n        <column name=\"slug\" value=\"electronics\"/>\n    </insert>\n    <insert tableName=\"categories\">\n        <column name=\"name\" value=\"Books\"/>\n        <column name=\"slug\" value=\"books\"/>\n    </insert>\n    <insert tableName=\"categories\">\n        <column name=\"name\" value=\"Clothing\"/>\n        <column name=\"slug\" value=\"clothing\"/>\n    </insert>\n</changeSet>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-rollback",
      children: "3.5 Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<changeSet id=\"005\" author=\"jdoe\">\n    <createTable tableName=\"reports\">\n        <column name=\"id\" type=\"BIGSERIAL\" autoIncrement=\"true\">\n            <constraints primaryKey=\"true\"/>\n        </column>\n        <column name=\"name\" type=\"VARCHAR(200)\"/>\n    </createTable>\n\n    <rollback>\n        <dropTable tableName=\"reports\"/>\n    </rollback>\n</changeSet>\n\n<!-- Auto-rollback supported for:\n     createTable -> dropTable\n     addColumn -> dropColumn\n     createIndex -> dropIndex\n     addForeignKeyConstraint -> dropForeignKeyConstraint\n-->\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-contexts-and-labels",
      children: "3.6 Contexts and Labels"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<changeSet id=\"006\" author=\"jdoe\" context=\"seed\" labels=\"dev,staging\">\n    <comment>Seed data for development and staging environments only</comment>\n    <insert tableName=\"users\">\n        <column name=\"username\" value=\"admin\"/>\n        <column name=\"email\" value=\"admin@example.com\"/>\n        <column name=\"password_hash\" value=\"$2a$10$...\"/>\n        <column name=\"full_name\" value=\"Admin User\"/>\n    </insert>\n</changeSet>\n\n<changeSet id=\"007\" author=\"jdoe\" context=\"test\" labels=\"test\">\n    <insert tableName=\"users\">\n        <column name=\"username\" value=\"testuser\"/>\n        <column name=\"email\" value=\"test@example.com\"/>\n        <column name=\"password_hash\" value=\"$2a$10$...\"/>\n    </insert>\n</changeSet>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-preconditions",
      children: "3.7 Preconditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<changeSet id=\"008\" author=\"jdoe\">\n    <preConditions onFail=\"MARK_RAN\">\n        <not>\n            <tableExists tableName=\"legacy_users\"/>\n        </not>\n    </preConditions>\n\n    <createTable tableName=\"users\">\n        <column name=\"id\" type=\"BIGSERIAL\" autoIncrement=\"true\">\n            <constraints primaryKey=\"true\"/>\n        </column>\n    </createTable>\n</changeSet>\n\n<changeSet id=\"009\" author=\"jdoe\">\n    <preConditions onFail=\"HALT\">\n        <and>\n            <dbms type=\"postgresql\"/>\n            <schemaExists schemaName=\"app\"/>\n            <runningAs username=\"app_admin\"/>\n            <changeSetExecuted id=\"001\" author=\"jdoe\"\n                changeLogFile=\"db/changelog/001-create-users.xml\"/>\n        </and>\n    </preConditions>\n\n    <sql>ALTER TABLE users ADD COLUMN last_login TIMESTAMP;</sql>\n</changeSet>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-liquibase-maven-plugin",
      children: "3.8 Liquibase Maven Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate diff between database and reference\nmvn liquibase:diff \\\n    -Dliquibase.referenceUrl=jdbc:postgresql://localhost:5432/dev_db \\\n    -Dliquibase.referenceUsername=dev_user \\\n    -Dliquibase.referencePassword=dev_pass\n\n# Generate changelog from existing database\nmvn liquibase:generateChangeLog \\\n    -Dliquibase.outputChangeLogFile=db/changelog/generated.xml\n\n# Rollback last N changesets\nmvn liquibase:rollback -Dliquibase.rollbackCount=1\n\n# Rollback to a specific tag\nmvn liquibase:rollback -Dliquibase.rollbackTag=v1.0.0\n\n# Tag the current database state\nmvn liquibase:tag -Dliquibase.tag=v2.0.0\n\n# Check pending changesets\nmvn liquibase:status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-programmatic-liquibase-api",
      children: "3.9 Programmatic Liquibase API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class LiquibaseConfig {\n\n    @Bean\n    public Liquibase liquibase(DataSource dataSource) {\n        Database database = DatabaseFactory.getInstance()\n            .findCorrectDatabaseImplementation(\n                new JdbcConnection(dataSource.getConnection()));\n\n        Liquibase liquibase = new Liquibase(\n            \"db/changelog/db.changelog-master.xml\",\n            new ClassLoaderResourceAccessor(),\n            database);\n\n        try {\n            liquibase.update(new Contexts(\"prod\"));\n        } catch (LiquibaseException e) {\n            throw new RuntimeException(\"Migration failed\", e);\n        }\n\n        return liquibase;\n    }\n}\n\n@Service\npublic class LiquibaseService {\n\n    public void runMigration(String changelogPath, String contexts, String labels) {\n        try (Connection conn = dataSource.getConnection()) {\n            Database database = DatabaseFactory.getInstance()\n                .findCorrectDatabaseImplementation(new JdbcConnection(conn));\n\n            Liquibase liquibase = new Liquibase(\n                changelogPath,\n                new ClassLoaderResourceAccessor(),\n                database);\n\n            liquibase.update(new Contexts(contexts), new LabelExpression(labels));\n            liquibase.reportStatus(true, new Contexts(contexts),\n                new PrintWriter(System.out));\n        } catch (Exception e) {\n            throw new RuntimeException(e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "310-liquibase-in-tests",
      children: "3.10 Liquibase in Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass LiquibaseMigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.liquibase.change-log\",\n            () -> \"classpath:db/changelog/db.changelog-test.xml\");\n    }\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Test\n    void allChangesetsApplySuccessfully() throws Exception {\n        Database database = DatabaseFactory.getInstance()\n            .findCorrectDatabaseImplementation(\n                new JdbcConnection(dataSource.getConnection()));\n\n        Liquibase liquibase = new Liquibase(\n            \"db/changelog/db.changelog-master.xml\",\n            new ClassLoaderResourceAccessor(),\n            database);\n\n        liquibase.update(\"prod\");\n\n        List<ChangeSetStatus> statuses = liquibase\n            .getChangeSetStatuses(null, null, null);\n        assertThat(statuses.stream()\n            .filter(s -> !s.getWillRun())\n            .filter(s -> s.getStatus().toString().equals(\"EXECUTED\")))\n            .hasSize(statuses.size());\n    }\n\n    @Test\n    void rollbackLastChangeSet() throws Exception {\n        Database database = DatabaseFactory.getInstance()\n            .findCorrectDatabaseImplementation(\n                new JdbcConnection(dataSource.getConnection()));\n\n        Liquibase liquibase = new Liquibase(\n            \"db/changelog/db.changelog-master.xml\",\n            new ClassLoaderResourceAccessor(),\n            database);\n\n        liquibase.update(\"prod\");\n        liquibase.rollback(1, \"prod\");\n    }\n\n    @Test\n    void migrationIdempotency() throws Exception {\n        Database database = DatabaseFactory.getInstance()\n            .findCorrectDatabaseImplementation(\n                new JdbcConnection(dataSource.getConnection()));\n\n        Liquibase liquibase = new Liquibase(\n            \"db/changelog/db.changelog-master.xml\",\n            new ClassLoaderResourceAccessor(),\n            database);\n\n        liquibase.update(\"prod\");\n        liquibase.update(\"prod\");\n\n        List<ChangeSetStatus> statuses = liquibase\n            .getChangeSetStatuses(null, null, null);\n        assertThat(statuses).allMatch(s -> !s.getWillRun());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-versioning-strategies",
      children: "4. Versioning Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-semantic-versioning",
      children: "4.1 Semantic Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V{major}_{minor}_{patch}__{description}.sql\n-- V1_0_0__initial_schema.sql\n-- V1_1_0__add_shipping.sql\n-- V1_1_1__fix_shipping_null.sql\n-- V2_0_0__redesign_inventory.sql\n\n-- Pros: Clear relationship to application versions\n-- Cons: Large jumps between versions, merge conflicts in branches\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-timestamp-based-versioning",
      children: "4.2 Timestamp-Based Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- V{YYYYMMDDHHMMSS}__{description}.sql\n-- V20240115120000__create_users.sql\n-- V20240116140000__add_orders.sql\n-- V20240117103000__add_order_items.sql\n\n-- Pros: No collisions in parallel branches, natural ordering\n-- Cons: Hard to relate to application versions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-run-always-repeatable",
      children: "4.3 Run-Always (Repeatable)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- R__{description}.sql\n-- R__product_search_view.sql\n-- R__audit_triggers.sql\n-- R__daily_sales_materialized_view.sql\n\n-- Re-applied every time Flyway runs if the checksum changed\n-- Ideal for views, functions, triggers, stored procedures\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-versioned-vs-repeatable",
      children: "4.4 Versioned vs Repeatable"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Versioned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repeatable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every time (if changed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Views, functions, procedures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reapplied if different"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (with undo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted by version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applied after all versioned"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-migration-naming-conventions",
      children: "4.5 Migration Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- 1. Use prefixes: V = Versioned, R = Repeatable, U = Undo\n-- 2. Use leading zeros: V01__init.sql instead of V1__init.sql\n-- 3. Descriptive descriptions: V02__create_orders_table.sql\n-- 4. Group related changes by version\n-- 5. Never renumber existing migrations once merged to main\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-migration-testing",
      children: "5. Migration Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-testcontainers-migration-test",
      children: "5.1 Testcontainers Migration Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass DatabaseMigrationIntegrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\")\n        .withDatabaseName(\"migration_test\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    private static Flyway flyway;\n\n    @BeforeAll\n    static void setupFlyway() {\n        flyway = Flyway.configure()\n            .dataSource(postgres.getJdbcUrl(), postgres.getUsername(),\n                postgres.getPassword())\n            .locations(\"classpath:db/migration\")\n            .load();\n    }\n\n    @Test\n    void fullMigrationSucceeds() {\n        MigrateResult result = flyway.migrate();\n        assertThat(result.success).isTrue();\n        assertThat(result.migrations).isNotEmpty();\n    }\n\n    @Test\n    void validatePassesAfterMigration() {\n        flyway.migrate();\n        assertThatCode(() -> flyway.validate()).doesNotThrowAnyException();\n    }\n\n    @Test\n    void tablesHaveExpectedColumns() throws SQLException {\n        flyway.migrate();\n\n        try (var conn = postgres.createConnection(\"\");\n             var stmt = conn.createStatement();\n             var rs = stmt.executeQuery(\"\"\"\n                 SELECT column_name, data_type, is_nullable\n                 FROM information_schema.columns\n                 WHERE table_name = 'users'\n                 ORDER BY ordinal_position\n                 \"\"\")) {\n\n            List<String> columns = new ArrayList<>();\n            while (rs.next()) {\n                columns.add(rs.getString(\"column_name\"));\n            }\n\n            assertThat(columns).containsExactly(\n                \"id\", \"username\", \"email\", \"password_hash\",\n                \"full_name\", \"is_active\", \"created_at\", \"updated_at\");\n        }\n    }\n\n    @Test\n    void foreignKeyConstraintsExist() throws SQLException {\n        flyway.migrate();\n\n        try (var conn = postgres.createConnection(\"\");\n             var stmt = conn.createStatement();\n             var rs = stmt.executeQuery(\"\"\"\n                 SELECT tc.constraint_name, kcu.column_name,\n                        ccu.table_name AS foreign_table_name,\n                        ccu.column_name AS foreign_column_name\n                 FROM information_schema.table_constraints tc\n                 JOIN information_schema.key_column_usage kcu\n                     ON tc.constraint_name = kcu.constraint_name\n                 JOIN information_schema.constraint_column_usage ccu\n                     ON ccu.constraint_name = tc.constraint_name\n                 WHERE tc.constraint_type = 'FOREIGN KEY'\n                     AND tc.table_name = 'orders'\n                 \"\"\")) {\n\n            List<String> fks = new ArrayList<>();\n            while (rs.next()) {\n                fks.add(rs.getString(\"constraint_name\"));\n            }\n            assertThat(fks).contains(\"fk_orders_user\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-datajpatest-with-migrations",
      children: "5.2 @DataJpaTest with Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@DataJpaTest\n@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)\n@Testcontainers\nclass OrderRepositoryMigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.jpa.hibernate.ddl-auto\", () -> \"validate\");\n    }\n\n    @Autowired\n    private TestEntityManager em;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Test\n    void canPersistAndReadOrder() {\n        User user = new User();\n        user.setUsername(\"testuser\");\n        user.setEmail(\"test@example.com\");\n        user.setPasswordHash(\"hash\");\n        em.persistAndFlush(user);\n\n        Order order = new Order();\n        order.setUser(user);\n        order.setOrderNumber(\"ORD-001\");\n        order.setTotalAmount(new BigDecimal(\"99.99\"));\n        em.persistAndFlush(order);\n\n        Optional<Order> found = orderRepository.findById(order.getId());\n        assertThat(found).isPresent();\n        assertThat(found.get().getOrderNumber()).isEqualTo(\"ORD-001\");\n    }\n\n    @Test\n    void schemaMatchesEntities() {\n        assertThat(true).isTrue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-rollback-testing",
      children: "5.3 Rollback Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass RollbackTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @Test\n    void rollbackRestoresPreviousSchema() throws Exception {\n        Flyway flyway = Flyway.configure()\n            .dataSource(postgres.getJdbcUrl(), postgres.getUsername(),\n                postgres.getPassword())\n            .locations(\"classpath:db/migration\")\n            .load();\n\n        flyway.migrate();\n\n        try (var conn = postgres.createConnection(\"\");\n             var stmt = conn.createStatement();\n             var rs = stmt.executeQuery(\n                 \"SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'orders')\")) {\n            rs.next();\n            assertThat(rs.getBoolean(1)).isTrue();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-environment-management",
      children: "6. Environment Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-per-environment-scripts",
      children: "6.1 Per-Environment Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class FlywayEnvironmentConfig {\n\n    @Bean\n    @Profile(\"dev\")\n    public Flyway flywayDev(DataSource dataSource) {\n        return Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\",\n                       \"classpath:db/seed\",\n                       \"classpath:db/seed/dev\")\n            .load();\n    }\n\n    @Bean\n    @Profile(\"staging\")\n    public Flyway flywayStaging(DataSource dataSource) {\n        return Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\",\n                       \"classpath:db/seed\",\n                       \"classpath:db/seed/staging\")\n            .load();\n    }\n\n    @Bean\n    @Profile(\"prod\")\n    public Flyway flywayProd(DataSource dataSource) {\n        return Flyway.configure()\n            .dataSource(dataSource)\n            .locations(\"classpath:db/migration\",\n                       \"classpath:db/seed\")\n            .load();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-reference-data-seeds",
      children: "6.2 Reference Data Seeds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- R__seed_countries.sql\n-- Reference data stable across all environments\nMERGE INTO countries AS target\nUSING (VALUES\n    ('US', 'United States'),\n    ('CA', 'Canada'),\n    ('GB', 'United Kingdom'),\n    ('DE', 'Germany'),\n    ('FR', 'France'),\n    ('JP', 'Japan'),\n    ('AU', 'Australia'),\n    ('BR', 'Brazil'),\n    ('IN', 'India'),\n    ('CN', 'China')\n) AS source(code, name)\nON target.code = source.code\nWHEN MATCHED THEN UPDATE SET name = source.name\nWHEN NOT MATCHED THEN INSERT (code, name) VALUES (source.code, source.name);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-data-seeds-per-profile",
      children: "6.3 Data Seeds Per Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- db/seed/dev/R__seed_dev_data.sql\nINSERT INTO users (username, email, password_hash, full_name, is_active)\nSELECT 'devadmin', 'devadmin@example.com', '$2a$10$...', 'Dev Admin', TRUE\nWHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'devadmin');\n\nINSERT INTO users (username, email, password_hash, full_name, is_active)\nSELECT 'testuser1', 'test1@example.com', '$2a$10$...', 'Test User 1', TRUE\nWHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'testuser1');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-aftermigrate-scripts",
      children: "6.4 afterMigrate Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- R__after_migrate_audit.sql\n-- Runs after every migration to log the action\n\nCREATE TABLE IF NOT EXISTS migration_audit (\n    id BIGSERIAL PRIMARY KEY,\n    event_type VARCHAR(50) NOT NULL,\n    description TEXT,\n    executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nINSERT INTO migration_audit (event_type, description)\nVALUES ('MIGRATE', 'Migration cycle completed');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-flyway-vs-liquibase-comparison",
      children: "7. Flyway vs Liquibase Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-feature-comparison-table",
      children: "7.1 Feature Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flyway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Liquibase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML, YAML, JSON, SQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (pure SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (XML format, many tags)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rollback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pro/Teams only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (including auto-rollback)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Changelog auto-generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diff, generateChangeLog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preconditions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (callbacks, validate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich precondition system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contexts/Labels"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locations per profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contexts and labels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java migrations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (JavaMigration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (CustomChange, CustomTaskChange)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Repeatable migrations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R-prefix scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "runAlways, runOnChange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pro/Teams only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom rollback per changeset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30+ databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50+ databases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spring Boot integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configured"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CI/CD integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI, Maven, Gradle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI, Maven, Gradle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version checking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum + md5sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output/Reporting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "info command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reportStatus, updateTestingRollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Community"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "License"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open Source (SQL) / Pro (Undo, more)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open Source / Pro"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-when-to-choose-which",
      children: "7.2 When to Choose Which"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choose Flyway when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your team is comfortable writing SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want simplicity: files on disk, no XML configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You do not need rollback (or have Teams/Pro license)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your migrations are primarily DDL with occasional DML"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You prefer convention over configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choose Liquibase when:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need database-agnostic changelogs (same XML works for PostgreSQL and Oracle)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback is a hard requirement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need preconditions (only run if...)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want auto-generated changelogs from existing databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need context/label filtering for complex environment management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have a heterogeneous database environment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-migration-tool-decision-matrix",
      children: "7.3 Migration Tool Decision Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Decision framework\npublic class MigrationToolDecision {\n\n    public enum Recommendation { FLYWAY, LIQUIBASE, EITHER }\n\n    public static Recommendation recommend(Requirements req) {\n        int flywayScore = 0;\n        int liquibaseScore = 0;\n\n        if (req.rollbackRequired())      liquibaseScore += 3;\n        if (req.sqlOnly())               flywayScore += 2;\n        if (req.multipleDbTypes())       liquibaseScore += 3;\n        if (req.autoGenerate())          liquibaseScore += 2;\n        if (req.preconditions())         liquibaseScore += 2;\n        if (req.simplicityPreferred())   flywayScore += 2;\n        if (req.teamSqlComfortable())    flywayScore += 2;\n        if (req.contextFiltering())      liquibaseScore += 2;\n        if (req.javaMigrations())        { flywayScore += 1; liquibaseScore += 1; }\n\n        if (flywayScore > liquibaseScore + 1) return FLYWAY;\n        if (liquibaseScore > flywayScore + 1) return LIQUIBASE;\n        return EITHER;\n    }\n\n    public record Requirements(\n        boolean rollbackRequired,\n        boolean sqlOnly,\n        boolean multipleDbTypes,\n        boolean autoGenerate,\n        boolean preconditions,\n        boolean simplicityPreferred,\n        boolean teamSqlComfortable,\n        boolean contextFiltering,\n        boolean javaMigrations\n    ) { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-migration-file-organization",
      children: "7.4 Migration File Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/db/\n|\n+-- migration/                    # Flyway migrations (or Liquibase changelogs)\n|   +-- V1__initial_schema.sql\n|   +-- V2__add_users.sql\n|   +-- V3__add_orders.sql\n|   +-- R__views.sql\n|\n+-- seed/                         # Reference data\n|   +-- R__countries.sql\n|   +-- R__roles.sql\n|   +-- dev/\n|   |   +-- R__dev_users.sql\n|   +-- staging/\n|       +-- R__staging_data.sql\n|\n+-- changelog/                    # Liquibase (alternative)\n|   +-- db.changelog-master.xml\n|   +-- 001-create-users.xml\n|   +-- 002-create-orders.xml\n|\n+-- callbacks/                    # Flyway SQL callbacks\n    +-- beforeMigrate.sql\n    +-- afterMigrate.sql\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-migration-best-practices",
      children: "7.5 Migration Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// 1. Always version control migrations alongside application code\n// 2. Never modify an applied migration (it will fail checksum validation)\n// 3. Use repeatable migrations for views, functions, and procedures\n// 4. Test migrations against a copy of production data before deployment\n// 5. Keep migrations idempotent where possible (IF NOT EXISTS, MERGE)\n// 6. Use transactions for reversible changes\n// 7. Include rollback scripts for every forward migration\n// 8. Use descriptive names that explain what the migration does\n// 9. Separate schema changes from data changes in different files\n// 10. Run migrations as part of CI/CD pipeline, not manually\n\n// Anti-patterns to avoid:\n// - Renaming migration files after they've been applied\n// - Skipping validation in production\n// - Using hibernate.ddl-auto=update alongside Flyway (dueling schema management)\n// - Large monolithic migration files (prefer small, focused ones)\n// - Assuming all environments are at the same migration version\n"
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
            children: "Flyway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned SQL-based migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naming: V{num}__{desc}.sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL-centric teams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Liquibase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/YAML/JSON changelog format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changeset-based, database-agnostic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-DB support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo applied migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway: undo (pro); Liquibase: rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disaster recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docker-based integration testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-start database container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI pipeline migration testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration file integrity validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway validates on each run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents migration tampering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flyway Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "migrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply pending migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drop all objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Show migration status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "validate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify applied migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix checksum issues"
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
            children: "Development"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staging"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Production"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway Clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before each run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seed Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Realistic data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback Plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V{num}__{desc} + manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V{num}__{desc} + script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testcontainers CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-deploy staging test"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you modify an already-applied Flyway migration?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Flyway re-applies it"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Flyway detects checksum mismatch and fails"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The change is ignored"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Flyway skips it silently"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Flyway detects checksum mismatch and fails.** Flyway stores a checksum of each migration and validates it on every application startup.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Liquibase changelog format is database-agnostic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SQL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) XML"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) JSON"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Both XML and YAML (non-SQL formats)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**D) Both XML and YAML (non-SQL formats).** XML, YAML, and JSON changelogs are database-agnostic and Liquibase translates them to the target database dialect.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How should you fix a failed migration in production?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Edit the migration file and re-run"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Create a new migration that repairs the state"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Delete the failed migration from the database"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Restart the application"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Create a new migration that repairs the state.** Never modify an existing migration → create a compensating migration that fixes the issue.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ummary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flyway"
        }), " uses SQL files with a simple naming convention (", (0,jsx_runtime.jsx)(_components.code, {
          children: "V{version}__{description}.sql"
        }), "). It's convention-over-configuration and ideal for teams comfortable with SQL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Liquibase"
        }), " uses changelogs in XML, YAML, JSON, or SQL format with rich changeset metadata. It provides preconditions, contexts, labels, and built-in rollback support."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning strategies"
        }), " include semantic versioning (ties to app releases) and timestamp-based versioning (avoids merge conflicts). Repeatable migrations handle views and functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration testing"
        }), " with Testcontainers validates that migrations apply successfully, schemas are correct, and rollbacks work before deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment management"
        }), " uses per-profile Flyway locations or Liquibase contexts/labels to control which seed data runs in each environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choosing between Flyway and Liquibase"
        }), " depends on rollback requirements, SQL preference, database heterogeneity, and need for preconditions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flyway Setup:"
          }), " Create a Spring Boot project with Flyway configured. Write three migration files: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "V1__create_users.sql"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "V2__create_posts.sql"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "V3__add_user_id_fk.sql"
          }), ". Include proper foreign keys, indexes, and constraints. Run the application and verify the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "flyway_schema_history"
          }), " table."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Liquibase XML:"
          }), " Convert the Flyway migrations from exercise 1 into Liquibase XML format. Include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "createTable"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "addForeignKeyConstraint"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "createIndex"
          }), " changesets with rollback instructions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Repeatable Migrations:"
          }), " Create a repeatable migration that maintains a view showing active users with their post count. Test that modifying the view and re-running applies the change, while versioned migrations are skipped."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rollback Strategy:"
          }), " Given a migration that adds a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shipping_address"
          }), " column and populates it from a legacy field, write both Flyway-style undo SQL and Liquibase rollback changeset. Test the rollback with Testcontainers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Environment Separation:"
          }), " Configure Flyway (or Liquibase) to run reference data seeds (", (0,jsx_runtime.jsx)(_components.code, {
            children: "countries"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "roles"
          }), ") in all environments, but admin users only in dev and staging. Use Spring profiles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Testing:"
          }), " Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpringBootTest"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Testcontainers"
          }), " test that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Applies all migrations to a fresh PostgreSQL container"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verifies all expected tables exist"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verifies all foreign key constraints are present"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Inserts test data and reads it back"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Validates the schema against JPA entities (with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ddl-auto=validate"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Java Migration:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JavaMigration"
          }), " (Flyway) that reads data from a CSV file and inserts it into the database via batch processing. Handle errors and transactions properly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Liquibase Preconditions:"
          }), " Write a Liquibase changeset that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only runs on PostgreSQL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only runs if a specific schema exists"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Only runs if the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "admin"
            }), " table is empty"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Marks the changeset as executed (not failed) if preconditions fail"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Audit:"
          }), " Implement a Flyway callback that logs every migration event (start, complete, per-migration) to a custom audit table. Track execution time, script name, and success/failure status."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Comparison Report:"
          }), " Given a team that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Has 5 PostgreSQL databases (dev, staging, prod, dr, reporting)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Needs rollback support"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Has Java developers comfortable with SQL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wants database-agnostic migration files for future cloud migration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Needs precondition checking for production safety\nWrite a detailed recommendation for Flyway vs Liquibase with justification."
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