"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87186],{

/***/ 74809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_15_database_devops_md_3a2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-15-database-devops-md-3a2.json
const site_docs_courses_devops_15_database_devops_md_3a2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/15-database-devops","title":"Chapter 15: Database DevOps","description":"Previous Container Networking","source":"@site/docs/courses/devops/15-database-devops.md","sourceDirName":"courses/devops","slug":"/devops/15-database-devops","permalink":"/ai-engineering-journey/devops/15-database-devops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"id":"15-database-devops","slug":"/devops/15-database-devops","title":"Chapter 15: Database DevOps","sidebar_label":"Chapter 15: Database DevOps","sidebar_position":24},"sidebar":"course-devops","previous":{"title":"Chapter 14: DevSecOps","permalink":"/ai-engineering-journey/devops/14-devsecops"},"next":{"title":"Chapter 16: Container Networking","permalink":"/ai-engineering-journey/devops/16-networking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/15-database-devops.md


const frontMatter = {
	id: '15-database-devops',
	slug: '/devops/15-database-devops',
	title: 'Chapter 15: Database DevOps',
	sidebar_label: 'Chapter 15: Database DevOps',
	sidebar_position: 24
};
const contentTitle = 'Chapter 15: Database DevOps';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "15.1 Database as Code",
  "id": "151-database-as-code",
  "level": 3
}, {
  "value": "15.2 Schema Migration Tools",
  "id": "152-schema-migration-tools",
  "level": 3
}, {
  "value": "15.3 Database CI/CD",
  "id": "153-database-cicd",
  "level": 3
}, {
  "value": "15.4 Blue-Green Database Deployments",
  "id": "154-blue-green-database-deployments",
  "level": 3
}, {
  "value": "15.5 Backup and Restore",
  "id": "155-backup-and-restore",
  "level": 3
}, {
  "value": "15.6 Point-in-Time Recovery (PITR)",
  "id": "156-point-in-time-recovery-pitr",
  "level": 3
}, {
  "value": "15.7 Database Testing",
  "id": "157-database-testing",
  "level": 3
}, {
  "value": "15.8 Migration Validation",
  "id": "158-migration-validation",
  "level": 3
}, {
  "value": "15.9 Rollback Strategies",
  "id": "159-rollback-strategies",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Migration Manager",
  "id": "example-1-migration-manager",
  "level": 3
}, {
  "value": "Example 2: Backup and Restore Simulator",
  "id": "example-2-backup-and-restore-simulator",
  "level": 3
}, {
  "value": "Example 3: Query Performance Regression Detector",
  "id": "example-3-query-performance-regression-detector",
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
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
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
        id: "chapter-15-database-devops",
        children: "Chapter 15: Database DevOps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/14-devsecops",
          children: "DevSecOps"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/16-networking",
          children: "Container Networking"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/devops/15-database-devops/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/15-database-devops/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/15-database-devops/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/15-database-devops/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/15-database-devops/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/15-database-devops/visual-explanation.png",
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
        children: "Manage database schema migrations using Flyway, Liquibase, and Alembic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design CI/CD pipelines that include database changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement blue-green and rolling database deployment strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure backup, restore, and point-in-time recovery procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop database testing strategies including integration, unit, and performance tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement database as code with version-controlled schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design rollback strategies for database migrations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Database as Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes version-controlled in Git"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply engineering discipline to database management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Migration Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway, Liquibase, Alembic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose based on language (Alembic for Python, Flyway for SQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate, test, stage, production pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always test migrations on a production-like database copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green DB Deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward-compatible changes enable zero-downtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-phase approach for column renames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup & PITR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full backup, WAL shipping, point-in-time recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test backups regularly — untested backups are useless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward-only vs with rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare downgrade paths for every migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax, empty DB, prod-like, rollback tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four-stage validation before production"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Database as Code] --> B[Migration Tools]\n    B --> C[Flyway]\n    B --> D[Liquibase]\n    B --> E[Alembic]\n    C & D & E --> F[CI/CD Pipeline]\n    F --> G[Validate]\n    F --> H[Test]\n    F --> I[Stage]\n    F --> J[Production]\n    J --> K[Blue-Green Deploy]\n    J --> L[Backup & PITR]\n    J --> M[Rollback]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-database-as-code",
      children: "15.1 Database as Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database as Code applies version control, CI/CD, and automation principles to database schemas. Historically, database changes were manual, scripted by DBAs, and applied outside the application release process. This created a bottleneck, introduced errors, and prevented rapid delivery."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database as Code stores schema definitions, migrations, and configuration in Git. Changes undergo code review, automated testing, and pipeline-based deployment alongside application changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every schema change is a version-controlled migration file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrations are immutable after creation (never edit an applied migration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward migrations are additive when possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructive operations require explicit approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback plans are prepared before production application"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-schema-migration-tools",
      children: "15.2 Schema Migration Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flyway"
      }), " — Open-source database migration tool. Migrations are SQL files named with versioned or repeatable conventions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "V1__create_users.sql\nV2__add_email_column.sql\nV3__create_orders.sql\nR__create_admin_user.sql\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Apply pending migrations\nflyway migrate\n\n# Check migration status\nflyway info\n\n# Rollback (Flyway Pro/Teams only)\nflyway undo\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flyway records applied migrations in a schema history table (", (0,jsx_runtime.jsx)(_components.code, {
        children: "flyway_schema_history"
      }), "). It calculates which migrations are pending by comparing available migration files against this table. Each migration is applied exactly once — Flyway validates checksums to detect tampering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Liquibase"
      }), " — More feature-rich than Flyway:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports SQL, XML, JSON, and YAML changelog formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides rollback (built-in, not Pro-only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context-aware execution (run certain changesets only in specific environments)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preconditions (skip changesets if conditions aren't met)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate changelogs from existing databases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<databaseChangeLog>\n  <changeSet id=\"1\" author=\"dev\">\n    <createTable tableName=\"users\">\n      <column name=\"id\" type=\"bigint\" autoIncrement=\"true\">\n        <constraints primaryKey=\"true\"/>\n      </column>\n      <column name=\"email\" type=\"varchar(255)\">\n        <constraints unique=\"true\" nullable=\"false\"/>\n      </column>\n    </createTable>\n  </changeSet>\n</databaseChangeLog>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "liquibase update\nliquibase rollbackCount 3\nliquibase rollbackSQL --tag v2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alembic"
      }), " — Python-specific migration tool for SQLAlchemy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-generates migrations from model changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports branching, merging, and multiple databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python-based migration scripts (not plain SQL)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"Add users table.\nRevision ID: 2a1b3c4d5e6f\nRevises: 1a2b3c4d5e6f\nCreate Date: 2026-06-09 14:30:00\n\"\"\"\ndef upgrade():\n    op.create_table('users',\n        sa.Column('id', sa.Integer(), nullable=False),\n        sa.Column('email', sa.String(length=255), nullable=False),\n        sa.PrimaryKeyConstraint('id'),\n        sa.UniqueConstraint('email')\n    )\n\ndef downgrade():\n    op.drop_table('users')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-database-cicd",
      children: "15.3 Database CI/CD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrating database changes into CI/CD requires careful design. The pipeline must handle schema changes without disrupting existing data or service availability."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline Stages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate"
        }), " — Check migration file naming convention, SQL syntax, and history consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test"
        }), " — Apply migrations to a test database, run integration tests, verify data integrity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage"
        }), " — Apply migrations to staging environment with production-like data for performance testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production"
        }), " — Apply with health monitoring and automatic rollback on failure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database as Code CI/CD Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/database.yml\nname: Database Migrations\non:\n  pull_request:\n    paths:\n      - 'migrations/**'\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_DB: test\n          POSTGRES_PASSWORD: test\n    steps:\n      - uses: actions/checkout@v4\n      - name: Validate migrations\n        run: flyway validate -url=jdbc:postgresql://postgres/test -schemas=public\n\n  test:\n    needs: validate\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_DB: test\n          POSTGRES_PASSWORD: test\n    steps:\n      - uses: actions/checkout@v4\n      - name: Apply migrations\n        run: flyway migrate -url=jdbc:postgresql://postgres/test -schemas=public\n      - name: Run integration tests\n        run: npm run test:integration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "154-blue-green-database-deployments",
      children: "15.4 Blue-Green Database Deployments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database changes that are backward-compatible enable zero-downtime deployments:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Change Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zero-Downtime Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add column (nullable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe. Old code ignores new column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add column (NOT NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add with default, backfill, then add NOT NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe. Old code ignores new table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-phase: stop using, then drop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rename column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-phase: add new, dual-write, drop old"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modify column type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add new column, migrate data, swap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three-Phase Column Rename:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 1:"
        }), " Add new column with new name. Deploy code that writes to both columns and reads from new. Monitor for errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 2:"
        }), " Deploy code that only reads/writes to new column. Remove writes to old column."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 3:"
        }), " Drop old column in a separate migration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "155-backup-and-restore",
      children: "15.5 Backup and Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Backup"
      }), " — Complete copy of the database:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slowest to create, fastest to restore"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typical nightly schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File size equals database size"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pg_dump"
        }), " (logical), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pg_basebackup"
        }), " (physical)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incremental Backup"
      }), " — Only changes since last backup:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast to create, small size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex to restore (requires base + all increments)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces backup window and storage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Continuous Archiving (WAL shipping)"
      }), " — Streams transaction logs to archive:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables point-in-time recovery to any moment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal data loss potential (seconds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required for production databases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# PostgreSQL: pg_dump (logical backup)\npg_dump -h prod-host -U app -d mydb > backup.sql\n\n# PostgreSQL: pg_basebackup (physical backup)\npg_basebackup -h prod-host -U replicator -D /backup/$(date +%Y%m%d) -X stream\n\n# MySQL: mysqldump\nmysqldump -h prod-host -u app -p mydb > backup.sql\n\n# MongoDB: mongodump\nmongodump --uri=\"mongodb://prod-host:27017/mydb\" --out /backup/$(date +%Y%m%d)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "156-point-in-time-recovery-pitr",
      children: "15.6 Point-in-Time Recovery (PITR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PITR restores a database to a specific moment, not just the last backup. Required for recovering from data corruption, accidental deletion, or logical errors."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full base backup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All WAL (Write-Ahead Log) segments since the backup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The target timestamp or transaction ID"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# PostgreSQL PITR\n# 1. Restore base backup to data directory\n# 2. Restore WAL archive to pg_wal directory\n# 3. Create recovery.signal and postgresql.conf with:\n#    restore_command = 'cp /wal_archive/%f %p'\n#    recovery_target_time = '2026-06-09 14:30:00 UTC'\n# 4. Start PostgreSQL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "157-database-testing",
      children: "15.7 Database Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit Tests"
      }), " — Test database functions, stored procedures, and triggers in isolation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test individual SQL functions and procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mock table data as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast execution (milliseconds per test)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Tests"
      }), " — Test application code with a real database:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use migration tools to create the schema from scratch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seed test data (fixtures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run application tests against the database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teardown after each test run (transaction rollback or fresh database)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tools: Testcontainers, Docker Compose, in-memory databases (SQLite for testing)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Testcontainers-based integration test\nservices:\n  test:\n    image: test-runner\n    depends_on:\n      db:\n        condition: service_healthy\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: test\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction Tests"
      }), " — Test concurrent access:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Isolation levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deadlock handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback behavior on failure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimistic locking verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance Tests"
      }), " — Query performance regression detection:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture query plans before and after schema changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure execution time for critical queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare index usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for full table scans on large tables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "158-migration-validation",
      children: "15.8 Migration Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate migrations before production application:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syntax check"
        }), " — Parse SQL for syntax errors. Catch typos and missing keywords."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty database test"
        }), " — Apply to a clean database, verify schema matches expectations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production-like test"
        }), " — Apply to a copy of production data, measure execution time. Slow migrations (hours) need optimization or online schema change tools (pt-online-schema-change, gh-ost)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback test"
        }), " — Verify downgrade works correctly. Test that data is preserved or correctly handled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data preservation"
        }), " — Verify no data loss occurs during migration. Run before/after data counts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "159-rollback-strategies",
      children: "15.9 Rollback Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variant A: Forward-only"
      }), " — Rollback is a new forward migration that reverses the change:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "V2__add_column.sql ? V3__remove_column.sql\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simple, works with all tools. All actions are audited. Best practice for most teams."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variant B: With rollback"
      }), " — Flyway Pro and Liquibase support versioned rollbacks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "flyway undo   # Applies the down migration\nliquibase rollbackCount 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Down migration reverses the up migration. Must be written and tested alongside the up migration."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variant C: Blue-green schema"
      }), " — Maintain two schema versions simultaneously:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traffic switches after rollback capability is verified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both schemas must be backward-compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex but enables instant rollback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write rollback migrations before deploying forward migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test rollback on a production-like database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include data migration rollback (not just schema)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor rollback execution time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback procedures in runbooks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-migration-manager",
      children: "Example 1: Migration Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Migration {\n  version: string;\n  description: string;\n  sql: string[];\n  rollbackSql: string[];\n  author: string;\n  timestamp: Date;\n  checksum: string;\n}\n\ninterface MigrationState {\n  applied: string[];\n  pending: Migration[];\n  failed: string[];\n}\n\nclass MigrationManager {\n  private migrations: Map<string, Migration> = new Map();\n  private state: MigrationState = { applied: [], pending: [], failed: [] };\n\n  register(migration: Migration): void {\n    migration.checksum = this.computeChecksum(migration.sql.join(';'));\n    this.migrations.set(migration.version, migration);\n  }\n\n  private computeChecksum(sql: string): string {\n    let hash = 0;\n    for (let i = 0; i < sql.length; i++) {\n      const char = sql.charCodeAt(i);\n      hash = ((hash << 5) - hash) + char;\n      hash |= 0;\n    }\n    return hash.toString(16);\n  }\n\n  plan(version: string): Migration[] {\n    const planned: Migration[] = [];\n    const sorted = [...this.migrations.values()]\n      .sort((a, b) => a.version.localeCompare(b.version));\n\n    for (const migration of sorted) {\n      if (migration.version > version && !this.state.applied.includes(migration.version)) {\n        planned.push(migration);\n      }\n    }\n\n    this.state.pending = planned;\n    return planned;\n  }\n\n  apply(version: string): void {\n    this.state.applied.push(version);\n    this.state.pending = this.state.pending.filter(m => m.version !== version);\n  }\n\n  rollback(version: string): boolean {\n    const migration = this.migrations.get(version);\n    if (!migration || migration.rollbackSql.length === 0) return false;\n\n    this.state.applied = this.state.applied.filter(v => v !== version);\n    return true;\n  }\n\n  validate(): string[] {\n    const issues: string[] = [];\n\n    for (const [version, migration] of this.migrations) {\n      const currentChecksum = this.computeChecksum(migration.sql.join(';'));\n      if (migration.checksum !== currentChecksum) {\n        issues.push(`Checksum mismatch for migration ${version}`);\n      }\n    }\n\n    return issues;\n  }\n\n  generateReport(): string {\n    let report = '# Migration Status Report\\n\\n';\n    report += `Applied: ${this.state.applied.length}\\n`;\n    report += `Pending: ${this.state.pending.length}\\n`;\n    report += `Failed: ${this.state.failed.length}\\n\\n`;\n\n    report += '## Pending Migrations\\n\\n';\n    for (const m of this.state.pending) {\n      report += `- V${m.version}: ${m.description} (${m.author})\\n`;\n    }\n\n    return report;\n  }\n}\n\nconst manager = new MigrationManager();\nmanager.register({\n  version: '1', description: 'Create users table', author: 'dev',\n  sql: ['CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL)'],\n  rollbackSql: ['DROP TABLE users'], timestamp: new Date(),\n  checksum: '',\n});\nmanager.register({\n  version: '2', description: 'Add orders table', author: 'dev',\n  sql: ['CREATE TABLE orders (id SERIAL PRIMARY KEY, user_id INT REFERENCES users(id), amount DECIMAL)'],\n  rollbackSql: ['DROP TABLE orders'], timestamp: new Date(),\n  checksum: '',\n});\n\nconsole.log('Plan:', manager.plan('1').map(m => `V${m.version}: ${m.description}`));\nconsole.log('Valid:', manager.validate());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-backup-and-restore-simulator",
      children: "Example 2: Backup and Restore Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Backup {\n  id: string;\n  type: 'full' | 'incremental' | 'wal';\n  timestamp: Date;\n  sizeGB: number;\n  verified: boolean;\n}\n\ninterface BackupPolicy {\n  fullBackupIntervalHours: number;\n  incrementalBackupIntervalHours: number;\n  walArchiveEnabled: boolean;\n  retentionDays: number;\n  targetRPO: number; // seconds\n  targetRTO: number; // seconds\n}\n\nclass BackupManager {\n  private backups: Backup[] = [];\n  private policy: BackupPolicy;\n\n  constructor(policy: BackupPolicy) {\n    this.policy = policy;\n  }\n\n  performBackup(type: Backup['type']): Backup {\n    const backup: Backup = {\n      id: crypto.randomUUID().substring(0, 8),\n      type,\n      timestamp: new Date(),\n      sizeGB: type === 'full' ? 100 : type === 'incremental' ? 5 : 0.5,\n      verified: false,\n    };\n    this.backups.push(backup);\n    return backup;\n  }\n\n  verifyBackup(id: string): boolean {\n    const backup = this.backups.find(b => b.id === id);\n    if (backup) backup.verified = true;\n    return !!backup;\n  }\n\n  estimateRPO(): number {\n    const lastBackup = this.backups[this.backups.length - 1];\n    if (!lastBackup) return Infinity;\n    return (Date.now() - lastBackup.timestamp.getTime()) / 1000;\n  }\n\n  estimateRTO(): number {\n    const lastFull = [...this.backups].reverse().find(b => b.type === 'full');\n    if (!lastFull) return Infinity;\n    const restoreTime = lastFull.sizeGB * 60; // 1 min per GB\n    const walApplyTime = 300; // 5 min for WAL replay\n    return restoreTime + walApplyTime;\n  }\n\n  complianceCheck(): string[] {\n    const issues: string[] = [];\n\n    const rpo = this.estimateRPO();\n    if (rpo > this.policy.targetRPO) {\n      issues.push(`RPO violation: ${rpo}s > ${this.policy.targetRPO}s target`);\n    }\n\n    const rto = this.estimateRTO();\n    if (rto > this.policy.targetRTO) {\n      issues.push(`RTO violation: ${rto}s > ${this.policy.targetRTO}s target`);\n    }\n\n    const unverified = this.backups.filter(b => !b.verified);\n    if (unverified.length > 5) {\n      issues.push(`Unverified backups: ${unverified.length} — restore test needed`);\n    }\n\n    return issues;\n  }\n\n  generateReport(): string {\n    let report = '# Backup Status Report\\n\\n';\n    report += `Total backups: ${this.backups.length}\\n`;\n    report += `Last full backup: ${this.backups.filter(b => b.type === 'full').slice(-1)[0]?.timestamp.toISOString() || 'Never'}\\n`;\n    report += `Estimated RPO: ${this.estimateRPO()}s (target: ${this.policy.targetRPO}s)\\n`;\n    report += `Estimated RTO: ${this.estimateRTO()}s (target: ${this.policy.targetRTO}s)\\n\\n`;\n\n    const issues = this.complianceCheck();\n    if (issues.length > 0) {\n      report += '## Compliance Issues\\n' + issues.map(i => `- ?? ${i}`).join('\\n');\n    } else {\n      report += '? All compliance requirements met\\n';\n    }\n\n    return report;\n  }\n}\n\nconst policy: BackupPolicy = {\n  fullBackupIntervalHours: 24,\n  incrementalBackupIntervalHours: 4,\n  walArchiveEnabled: true,\n  retentionDays: 30,\n  targetRPO: 3600,\n  targetRTO: 7200,\n};\n\nconst manager = new BackupManager(policy);\nmanager.performBackup('full');\nmanager.performBackup('wal');\nmanager.performBackup('incremental');\nmanager.verifyBackup(manager['backups'][0].id);\nconsole.log(manager.generateReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-query-performance-regression-detector",
      children: "Example 3: Query Performance Regression Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface QueryPlan {\n  query: string;\n  executionTimeMs: number;\n  rowsExamined: number;\n  rowsReturned: number;\n  indexUsed: string | null;\n  tableScan: boolean;\n}\n\ninterface SchemaChange {\n  description: string;\n  migrationVersion: string;\n}\n\nclass QueryPerformanceDetector {\n  private baseline: Map<string, QueryPlan> = new Map();\n  private afterChange: Map<string, QueryPlan> = new Map();\n\n  recordBaseline(plan: QueryPlan): void {\n    this.baseline.set(plan.query, plan);\n  }\n\n  recordAfterChange(plan: QueryPlan): void {\n    this.afterChange.set(plan.query, plan);\n  }\n\n  detectRegressions(): Array<{ query: string; before: number; after: number; degradation: number }> {\n    const regressions: Array<{ query: string; before: number; after: number; degradation: number }> = [];\n\n    for (const [query, after] of this.afterChange) {\n      const before = this.baseline.get(query);\n      if (!before) continue;\n\n      const degradation = ((after.executionTimeMs - before.executionTimeMs) / before.executionTimeMs) * 100;\n      if (degradation > 20) {\n        regressions.push({ query, before: before.executionTimeMs, after: after.executionTimeMs, degradation });\n      }\n    }\n\n    return regressions;\n  }\n\n  generateReport(change: SchemaChange): string {\n    let report = `# Performance Regression Report\\n\\n`;\n    report += `Schema change: ${change.description} (V${change.migrationVersion})\\n\\n`;\n\n    const regressions = this.detectRegressions();\n    if (regressions.length === 0) {\n      report += '? No significant performance regressions detected\\n';\n      return report;\n    }\n\n    report += '## Regressions\\n\\n';\n    report += '| Query | Before (ms) | After (ms) | Degradation |\\n';\n    report += '|-------|-------------|------------|-------------|\\n';\n\n    for (const r of regressions) {\n      const icon = r.degradation > 100 ? '??' : '??';\n      report += `| ${r.query.substring(0, 60)}... | ${r.before} | ${r.after} | ${icon} ${r.degradation.toFixed(0)}% |\\n`;\n    }\n\n    report += '\\n## Recommendations\\n';\n    for (const r of regressions) {\n      if (r.degradation > 100) {\n        report += `- Add index for query: ${r.query.substring(0, 60)}...\\n`;\n      }\n    }\n\n    return report;\n  }\n}\n\nconst detector = new QueryPerformanceDetector();\ndetector.recordBaseline({ query: 'SELECT * FROM orders WHERE user_id = $1', executionTimeMs: 5, rowsExamined: 100, rowsReturned: 1, indexUsed: 'idx_orders_user_id', tableScan: false });\ndetector.recordBaseline({ query: 'SELECT SUM(amount) FROM orders', executionTimeMs: 50, rowsExamined: 10000, rowsReturned: 1, indexUsed: null, tableScan: true });\ndetector.recordAfterChange({ query: 'SELECT * FROM orders WHERE user_id = $1', executionTimeMs: 150, rowsExamined: 10000, rowsReturned: 1, indexUsed: null, tableScan: true });\ndetector.recordAfterChange({ query: 'SELECT SUM(amount) FROM orders', executionTimeMs: 55, rowsExamined: 10000, rowsReturned: 1, indexUsed: null, tableScan: true });\n\nconsole.log(detector.generateReport({ description: 'Drop index on user_id', migrationVersion: '5' }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned SQL migrations, schema history table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Liquibase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML/JSON/YAML changelogs, rollback, contexts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alembic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python/SQLAlchemy, auto-generation from models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PITR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full backup + WAL stream to any point in time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward-compat changes for zero-downtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax, empty DB, prod-like, rollback tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RPO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery Point Objective — max acceptable data loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery Time Objective — max acceptable downtime"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flyway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1__description.sql, migrate, info, undo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Liquibase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "changelog.xml, update, rollbackCount, rollbackSQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alembic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "revision --autogenerate, upgrade, downgrade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pg_dump, pg_basebackup, mysqldump, mongodump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PITR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base backup + WAL archive + recovery.conf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue-Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-phase: add, dual-write, drop old"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward-only (new migration) or with-rollback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce database schema management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed database migration pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance-aligned database changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature store schema evolution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: How does Flyway track applied migrations?"
      }), "**A)** Git tags", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Schema history table", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** File timestamps", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Manual tracking", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Schema history table</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: What backup method enables PITR?"
        }), "**A)** Full backup only", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Full backup + WAL archiving", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Incremental backup only", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Snapshot backup only", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Full backup + WAL archiving</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: How many phases for a column rename with zero-downtime?"
          }), "**A)** One", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Two", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Three", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Four", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: C)** Three (add new, update dual-write, drop old)</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the primary purpose of a rollback migration?"
            }), "**A)** Revert schema changes safely", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Delete old data", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Speed up deployments", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Create backups", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: A)** Revert schema changes safely</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: What does RTO measure?"
              }), "**A)** Recovery Point Objective — max data loss", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Recovery Time Objective — max downtime", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Return to Operations", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Runtime Optimization", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Recovery Time Objective — max downtime</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// database devops\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'database devops', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Database DevOps applies engineering discipline to schema management. Migration tools (Flyway, Liquibase, Alembic) version database changes and apply them programmatically through CI/CD pipelines. Backward-compatible changes enable zero-downtime deployments with blue-green or rolling strategies. Backup strategies (full, incremental, WAL archiving) and PITR protect against data loss with defined RPO/RTO targets. Database testing (unit, integration, transaction, performance) validates schema changes before production. Migration validation with syntax, empty database, production-like, and rollback tests reduces deployment risk. Rollback strategies provide safety nets for failed migrations."
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Compare Flyway and Liquibase: how does each track migration state?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Why is a three-phase approach required for renaming a database column in a zero-downtime deployment?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is WAL shipping and how does it enable point-in-time recovery?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Why should rollback migrations be tested before production deployment?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does Testcontainers facilitate database integration testing?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Create a Flyway migration set for an e-commerce database: V1 creates users and products tables, V2 adds an orders table with foreign keys, V3 adds an inventory_count column to products. Write rollback scripts. Apply to a PostgreSQL instance and verify the schema."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Set up an automated database CI/CD pipeline: when a migration is committed, apply it to a test database, run five integration tests, fail if any test fails."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure PostgreSQL continuous archiving. Take a base backup, simulate a database failure, and perform point-in-time recovery to a specific timestamp."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Design a zero-downtime database deployment strategy for a high-traffic e-commerce platform (20,000 requests/second, PostgreSQL, 200 GB database) with weekly deployments. The application has 50 tables and uses Flyway for migrations. Design a blue-green schema deployment process that handles: adding a NOT NULL column (with backfilling), removing an indexed column, changing a column type from INTEGER to BIGINT, and adding a unique constraint on an existing column with duplicate values. For each change type, specify the migration order, code deployment phases, rollback procedure, and data integrity verification steps."
              }), "\n"]
            })]
          })]
        })]
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