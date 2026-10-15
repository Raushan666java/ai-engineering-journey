"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3969],{

/***/ 70064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_08_database_design_md_9c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-08-database-design-md-9c3.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_08_database_design_md_9c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/08-database-design","title":"Database Design — Normalization, ERD, Keys, Constraints, Schema Design","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/08-database-design.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/08-database-design","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/08-database-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":33,"frontMatter":{"id":"08-database-design","slug":"/ai-engineering-placement/02-sql-and-databases/08-database-design","title":"Database Design — Normalization, ERD, Keys, Constraints, Schema Design","sidebar_label":"Database Design — Normalization, ERD, Keys, Constraints, Schema Design","sidebar_position":33},"sidebar":"placementSidebar","previous":{"title":"Indexes & Performance — B-Tree, Hash, Composite, EXPLAIN ANALYZE, Query Planning","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/07-indexes-and-performance"},"next":{"title":"Transactions & ACID — BEGIN, COMMIT, ROLLBACK, Isolation Levels, Locks","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/09-transactions-and-acid"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/08-database-design.md


const frontMatter = {
	id: '08-database-design',
	slug: '/ai-engineering-placement/02-sql-and-databases/08-database-design',
	title: 'Database Design — Normalization, ERD, Keys, Constraints, Schema Design',
	sidebar_label: 'Database Design — Normalization, ERD, Keys, Constraints, Schema Design',
	sidebar_position: 33
};
const contentTitle = 'Database Design — Normalization, ERD, Keys, Constraints, Schema Design';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "8.1 Entity-Relationship Diagrams",
  "id": "81-entity-relationship-diagrams",
  "level": 2
}, {
  "value": "8.2 Normalization",
  "id": "82-normalization",
  "level": 2
}, {
  "value": "8.3 Keys and Constraints",
  "id": "83-keys-and-constraints",
  "level": 2
}, {
  "value": "8.4 Schema Design Patterns",
  "id": "84-schema-design-patterns",
  "level": 2
}, {
  "value": "8.5 Design for Performance",
  "id": "85-design-for-performance",
  "level": 2
}, {
  "value": "8.6 Schema Evolution",
  "id": "86-schema-evolution",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "database-design--normalization-erd-keys-constraints-schema-design",
        children: "Database Design — Normalization, ERD, Keys, Constraints, Schema Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design relational database schemas using Entity-Relationship Diagrams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply normalization up to BCNF and understand denormalization trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define primary, foreign, unique, and composite keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement table constraints: CHECK, DEFAULT, NOT NULL, EXCLUDE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design schemas for different application patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand indexing strategies and their impact on schema design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data is the fuel of AI. SQL and database design skills let you query, transform, and store the data that powers machine learning models. This module covers everything from basic queries to advanced indexing and optimization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding database design is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how database design works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity-Relationship Diagrams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entities, attributes, relationships, cardinality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1NF, 2NF, 3NF, BCNF, denormalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys and Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary, foreign, unique, composite, CHECK, EXCLUDE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star schema, snowflake, EAV, polymorphic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design for Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning, sharding, materialized views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migrations, versioning, backward compatibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Database Design] --> B[ERD]\r\n    A --> C[Normalization]\r\n    A --> D[Keys & Constraints]\r\n    A --> E[Design Patterns]\r\n    A --> F[Performance]\r\n    A --> G[Schema Evolution]\r\n    B --> H[Entities & Relationships]\r\n    C --> I[1NF -> 2NF -> 3NF -> BCNF]\r\n    C --> J[Denormalization]\r\n    D --> K[Primary / Foreign / Unique]\r\n    E --> L[Star / Snowflake / EAV]\r\n    F --> M[Partitioning / Sharding]\r\n    G --> N[Migrations / Versioning]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-entity-relationship-diagrams",
      children: "8.1 Entity-Relationship Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ERDs visually represent database structure: entities (tables), attributes (columns), and relationships (foreign keys)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Components of an ERD"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity (table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer, Order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ellipse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute (column)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name, email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Places, Contains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crow's foot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many orders per customer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cardinality notations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Customer ────< Places >──── Order\r\n  1              N\r\nOne customer places many orders.\r\n\r\nOrder ────< Contains >──── Product\r\n  1              N\r\nOne order contains many products.\r\n```text\r\n\r\n**Converting ERD to SQL**:\r\n\r\n```sql\r\n-- One-to-many: Customer to Orders\r\nCREATE TABLE customers (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    email VARCHAR(255) UNIQUE NOT NULL\r\n);\r\n\r\nCREATE TABLE orders (\r\n    id SERIAL PRIMARY KEY,\r\n    customer_id INTEGER NOT NULL REFERENCES customers(id),\r\n    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\r\n    total DECIMAL(10, 2) NOT NULL\r\n);\r\n\r\n-- Many-to-many: Students to Courses\r\nCREATE TABLE students (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL\r\n);\r\n\r\nCREATE TABLE courses (\r\n    id SERIAL PRIMARY KEY,\r\n    title VARCHAR(200) NOT NULL\r\n);\r\n\r\nCREATE TABLE enrollments (\r\n    student_id INTEGER REFERENCES students(id),\r\n    course_id INTEGER REFERENCES courses(id),\r\n    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\r\n    grade CHAR(2),\r\n    PRIMARY KEY (student_id, course_id)\r\n);\r\n\r\n-- One-to-one: User to Profile\r\nCREATE TABLE users (\r\n    id SERIAL PRIMARY KEY,\r\n    username VARCHAR(50) UNIQUE NOT NULL\r\n);\r\n\r\nCREATE TABLE profiles (\r\n    id INTEGER PRIMARY KEY REFERENCES users(id),\r\n    bio TEXT,\r\n    avatar_url VARCHAR(500)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weak entities"
      }), " (depend on a parent entity):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Invoice Line Items depend on Invoice\r\nCREATE TABLE invoice_items (\r\n    invoice_id INTEGER REFERENCES invoices(id),\r\n    line_number INTEGER,\r\n    product_name VARCHAR(200) NOT NULL,\r\n    quantity INTEGER NOT NULL,\r\n    unit_price DECIMAL(10, 2) NOT NULL,\r\n    PRIMARY KEY (invoice_id, line_number)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-normalization",
      children: "8.2 Normalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Normalization reduces data redundancy and prevents anomalies."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "First Normal Form (1NF)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each column contains atomic (indivisible) values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each row is unique"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No repeating groups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Violates 1NF: multiple phone numbers in one column\r\nCREATE TABLE bad_customers (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(100),\r\n    phone_numbers VARCHAR(500)  -- \"555-0100,555-0200,555-0300\"\r\n);\r\n\r\n-- 1NF compliant: separate rows\r\nCREATE TABLE customer_phones (\r\n    customer_id INTEGER REFERENCES customers(id),\r\n    phone VARCHAR(20),\r\n    phone_type VARCHAR(10),\r\n    PRIMARY KEY (customer_id, phone)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Second Normal Form (2NF)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be in 1NF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All non-key columns must depend on the entire primary key (no partial dependency)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Violates 2NF: course_name depends only on course_id, not on (student_id, course_id)\r\nCREATE TABLE bad_enrollments (\r\n    student_id INTEGER,\r\n    course_id INTEGER,\r\n    course_name VARCHAR(200),  -- partial dependency\r\n    grade CHAR(2),\r\n    PRIMARY KEY (student_id, course_id)\r\n);\r\n\r\n-- 2NF compliant: separate courses table\r\nCREATE TABLE courses (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(200) NOT NULL\r\n);\r\n\r\nCREATE TABLE enrollments (\r\n    student_id INTEGER,\r\n    course_id INTEGER REFERENCES courses(id),\r\n    grade CHAR(2),\r\n    PRIMARY KEY (student_id, course_id)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Third Normal Form (3NF)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be in 2NF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No transitive dependencies (non-key column depends on another non-key column)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Violates 3NF: instructor_department depends on instructor_id, not on course_id\r\nCREATE TABLE bad_courses (\r\n    id SERIAL PRIMARY KEY,\r\n    title VARCHAR(200),\r\n    instructor_id INTEGER,\r\n    instructor_name VARCHAR(100),\r\n    instructor_department VARCHAR(100)  -- transitive dependency\r\n);\r\n\r\n-- 3NF compliant: separate instructors table\r\nCREATE TABLE instructors (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(100),\r\n    department VARCHAR(100)\r\n);\r\n\r\nCREATE TABLE courses (\r\n    id SERIAL PRIMARY KEY,\r\n    title VARCHAR(200),\r\n    instructor_id INTEGER REFERENCES instructors(id)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Boyce-Codd Normal Form (BCNF)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every determinant must be a candidate key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stricter than 3NF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Violates BCNF: {student_id, subject} -> professor, but professor -> subject\r\nCREATE TABLE bad_assignments (\r\n    student_id INTEGER,\r\n    subject VARCHAR(100),\r\n    professor VARCHAR(100),\r\n    PRIMARY KEY (student_id, subject)\r\n);\r\n-- professor Smith teaches only Math, but this repeats for each student\r\n\r\n-- BCNF compliant:\r\nCREATE TABLE professors (\r\n    name VARCHAR(100) PRIMARY KEY,\r\n    subject VARCHAR(100) UNIQUE NOT NULL\r\n);\r\n\r\nCREATE TABLE enrollments (\r\n    student_id INTEGER,\r\n    professor_name VARCHAR(100) REFERENCES professors(name),\r\n    PRIMARY KEY (student_id, professor_name)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Denormalization trade-offs"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Normalized"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Denormalized"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less (no redundancy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More (duplicated data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT/UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (one place to update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (multiple places)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT with JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (needs JOINs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (all in one table)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (single source of truth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of inconsistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex queries with JOINs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When to denormalize: read-heavy workloads, reporting/analytics, caching computed values."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-keys-and-constraints",
      children: "8.3 Keys and Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary keys"
      }), " uniquely identify each row:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Single column\r\nCREATE TABLE products (\r\n    id SERIAL PRIMARY KEY,\r\n    sku VARCHAR(50) UNIQUE NOT NULL,\r\n    name VARCHAR(200) NOT NULL\r\n);\r\n\r\n-- Composite primary key\r\nCREATE TABLE order_items (\r\n    order_id INTEGER REFERENCES orders(id),\r\n    product_id INTEGER REFERENCES products(id),\r\n    quantity INTEGER NOT NULL,\r\n    PRIMARY KEY (order_id, product_id)\r\n);\r\n\r\n-- Natural key (meaningful data as PK)\r\nCREATE TABLE countries (\r\n    iso_code CHAR(2) PRIMARY KEY,  -- 'US', 'GB', 'IN'\r\n    name VARCHAR(100) NOT NULL\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Foreign keys"
      }), " enforce referential integrity:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE orders (\r\n    id SERIAL PRIMARY KEY,\r\n    customer_id INTEGER NOT NULL\r\n        REFERENCES customers(id)\r\n        ON DELETE CASCADE,        -- delete orders when customer deleted\r\n        -- ON DELETE SET NULL,    -- set customer_id to NULL\r\n        -- ON DELETE RESTRICT,   -- prevent deletion if orders exist\r\n        -- ON DELETE SET DEFAULT, -- set to default value\r\n    total DECIMAL(10, 2)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique constraints"
      }), " prevent duplicate values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE users (\r\n    id SERIAL PRIMARY KEY,\r\n    username VARCHAR(50) UNIQUE NOT NULL,\r\n    email VARCHAR(255) UNIQUE NOT NULL,\r\n    -- Composite unique\r\n    UNIQUE (first_name, last_name)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CHECK constraints"
      }), " enforce data validity:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employees (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    age INTEGER CHECK (age >= 18 AND age <= 120),\r\n    salary DECIMAL(10, 2) CHECK (salary > 0),\r\n    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'terminated')),\r\n    hire_date DATE CHECK (hire_date <= CURRENT_DATE),\r\n    -- Named constraint\r\n    CONSTRAINT valid_termination CHECK (\r\n        status != 'terminated' OR termination_date IS NOT NULL\r\n    )\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EXCLUDE constraints"
      }), " (PostgreSQL):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Prevent overlapping date ranges\r\nCREATE TABLE room_bookings (\r\n    room_id INTEGER REFERENCES rooms(id),\r\n    guest_name VARCHAR(100),\r\n    check_in DATE NOT NULL,\r\n    check_out DATE NOT NULL,\r\n    EXCLUDE USING gist (\r\n        room_id WITH =,\r\n        daterange(check_in, check_out) WITH &&\r\n    )\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DEFAULT values"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE logs (\r\n    id SERIAL PRIMARY KEY,\r\n    message TEXT NOT NULL,\r\n    severity VARCHAR(10) DEFAULT 'info',\r\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\r\n    created_by VARCHAR(100) DEFAULT CURRENT_USER,\r\n    processed BOOLEAN DEFAULT FALSE\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-schema-design-patterns",
      children: "8.4 Schema Design Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Star schema"
      }), " for data warehousing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Dimension tables (denormalized)\r\nCREATE TABLE dim_customer (\r\n    customer_sk SERIAL PRIMARY KEY,\r\n    customer_id INTEGER,\r\n    name VARCHAR(100),\r\n    city VARCHAR(100),\r\n    state VARCHAR(50),\r\n    country VARCHAR(50),\r\n    effective_date DATE,\r\n    end_date DATE\r\n);\r\n\r\nCREATE TABLE dim_product (\r\n    product_sk SERIAL PRIMARY KEY,\r\n    product_id INTEGER,\r\n    name VARCHAR(200),\r\n    category VARCHAR(100),\r\n    price DECIMAL(10, 2)\r\n);\r\n\r\nCREATE TABLE dim_date (\r\n    date_sk INTEGER PRIMARY KEY,\r\n    date DATE,\r\n    year INTEGER,\r\n    quarter INTEGER,\r\n    month INTEGER,\r\n    week INTEGER,\r\n    day_of_week INTEGER\r\n);\r\n\r\n-- Fact table\r\nCREATE TABLE fact_sales (\r\n    customer_sk INTEGER REFERENCES dim_customer(customer_sk),\r\n    product_sk INTEGER REFERENCES dim_product(product_sk),\r\n    date_sk INTEGER REFERENCES dim_date(date_sk),\r\n    quantity INTEGER NOT NULL,\r\n    unit_price DECIMAL(10, 2) NOT NULL,\r\n    discount DECIMAL(5, 2) DEFAULT 0,\r\n    total_amount DECIMAL(12, 2) GENERATED ALWAYS AS (quantity * unit_price * (1 - discount)) STORED\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entity-Attribute-Value (EAV)"
      }), " for highly variable attributes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE entities (\r\n    id SERIAL PRIMARY KEY,\r\n    entity_type VARCHAR(50) NOT NULL\r\n);\r\n\r\nCREATE TABLE attributes (\r\n    id SERIAL PRIMARY KEY,\r\n    entity_id INTEGER REFERENCES entities(id),\r\n    attribute_name VARCHAR(100) NOT NULL,\r\n    attribute_value TEXT,\r\n    data_type VARCHAR(20) CHECK (data_type IN ('string', 'integer', 'float', 'date', 'boolean'))\r\n);\r\n\r\n-- Querying EAV (requires pivot)\r\nSELECT\r\n    e.id,\r\n    MAX(CASE WHEN a.attribute_name = 'color' THEN a.attribute_value END) AS color,\r\n    MAX(CASE WHEN a.attribute_name = 'weight' THEN a.attribute_value END) AS weight,\r\n    MAX(CASE WHEN a.attribute_name = 'material' THEN a.attribute_value END) AS material\r\nFROM entities e\r\nJOIN attributes a ON a.entity_id = e.id\r\nWHERE e.entity_type = 'product'\r\nGROUP BY e.id;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Polymorphic associations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Bad: nullable foreign keys for each possible parent\r\nCREATE TABLE bad_comments (\r\n    id SERIAL PRIMARY KEY,\r\n    text TEXT NOT NULL,\r\n    post_id INTEGER REFERENCES posts(id),      -- NULL if comment on photo\r\n    photo_id INTEGER REFERENCES photos(id),    -- NULL if comment on post\r\n    video_id INTEGER REFERENCES videos(id)     -- NULL if comment on post/photo\r\n);\r\n\r\n-- Better: single polymorphic reference\r\nCREATE TABLE comments (\r\n    id SERIAL PRIMARY KEY,\r\n    text TEXT NOT NULL,\r\n    parent_type VARCHAR(20) NOT NULL CHECK (parent_type IN ('post', 'photo', 'video')),\r\n    parent_id INTEGER NOT NULL,\r\n    UNIQUE (parent_type, parent_id)  -- only one comment per parent\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft delete pattern"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE documents (\r\n    id SERIAL PRIMARY KEY,\r\n    title VARCHAR(200) NOT NULL,\r\n    content TEXT,\r\n    deleted_at TIMESTAMP,\r\n    deleted_by INTEGER REFERENCES users(id),\r\n    UNIQUE (title, deleted_at)  -- allow reusing title for non-deleted records\r\n);\r\n\r\n-- Query only active records\r\nSELECT * FROM documents WHERE deleted_at IS NULL;\r\n\r\n-- Partial unique index for active records\r\nCREATE UNIQUE INDEX idx_active_document_title ON documents(title) WHERE deleted_at IS NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-design-for-performance",
      children: "8.5 Design for Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Table partitioning"
      }), " (PostgreSQL):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Range partitioning by date\r\nCREATE TABLE orders (\r\n    id SERIAL,\r\n    customer_id INTEGER,\r\n    order_date DATE NOT NULL,\r\n    total DECIMAL(10, 2)\r\n) PARTITION BY RANGE (order_date);\r\n\r\nCREATE TABLE orders_2024_q1 PARTITION OF orders\r\n    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');\r\nCREATE TABLE orders_2024_q2 PARTITION OF orders\r\n    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');\r\nCREATE TABLE orders_2024_q3 PARTITION OF orders\r\n    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');\r\n\r\n-- List partitioning\r\nCREATE TABLE customers\r\n    PARTITION BY LIST (region);\r\nCREATE TABLE customers_na PARTITION OF customers\r\n    FOR VALUES IN ('US', 'CA', 'MX');\r\nCREATE TABLE customers_eu PARTITION OF customers\r\n    FOR VALUES IN ('GB', 'DE', 'FR', 'IT');\r\n\r\n-- Hash partitioning\r\nCREATE TABLE sessions\r\n    PARTITION BY HASH (session_id);\r\nCREATE TABLE sessions_0 PARTITION OF sessions\r\n    FOR VALUES WITH (MODULUS 4, REMAINDER 0);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sharding"
      }), " distributes data across databases:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Application-level sharding: choose database based on shard key\r\n-- Shard key: customer_id % 4 = database number\r\n\r\n-- Each shard has same schema but different data\r\n-- Shard 0: customer_id % 4 == 0\r\n-- Shard 1: customer_id % 4 == 1\r\n-- etc.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Materialized views"
      }), " for pre-computed data:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE MATERIALIZED VIEW monthly_sales_summary AS\r\nSELECT\r\n    DATE_TRUNC('month', order_date) AS month,\r\n    product_id,\r\n    SUM(quantity) AS total_quantity,\r\n    SUM(total) AS total_revenue,\r\n    COUNT(*) AS order_count\r\nFROM orders o\r\nJOIN order_items oi ON o.id = oi.order_id\r\nGROUP BY DATE_TRUNC('month', order_date), product_id\r\nWITH DATA;\r\n\r\n-- Refresh periodically\r\nREFRESH MATERIALIZED VIEW monthly_sales_summary;\r\n\r\n-- Concurrent refresh (no lock, requires unique index)\r\nCREATE UNIQUE INDEX idx_mv_monthly ON monthly_sales_summary(month, product_id);\r\nREFRESH MATERIALIZED VIEW CONCURRENTLY monthly_sales_summary;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-schema-evolution",
      children: "8.6 Schema Evolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration-based schema changes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- 001_create_users.sql\r\nCREATE TABLE users (\r\n    id SERIAL PRIMARY KEY,\r\n    email VARCHAR(255) UNIQUE NOT NULL,\r\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\r\n);\r\n\r\n-- 002_add_user_profile.sql\r\nALTER TABLE users ADD COLUMN name VARCHAR(200);\r\nALTER TABLE users ADD COLUMN avatar_url VARCHAR(500);\r\n\r\n-- 003_add_user_status.sql\r\nALTER TABLE users ADD COLUMN status VARCHAR(20)\r\n    DEFAULT 'active'\r\n    CHECK (status IN ('active', 'suspended', 'deleted'));\r\n\r\n-- 004_create_orders.sql\r\nCREATE TABLE orders (\r\n    id SERIAL PRIMARY KEY,\r\n    user_id INTEGER NOT NULL REFERENCES users(id),\r\n    total DECIMAL(10, 2) NOT NULL,\r\n    status VARCHAR(20) NOT NULL DEFAULT 'pending'\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backward-compatible changes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Safe: add nullable column\r\nALTER TABLE users ADD COLUMN phone VARCHAR(20);\r\n\r\n-- Safe: add column with default (lock on large tables)\r\nALTER TABLE users ADD COLUMN newsletter BOOLEAN DEFAULT TRUE;\r\n\r\n-- Safe: create new index (concurrent)\r\nCREATE INDEX CONCURRENTLY idx_users_email ON users(email);\r\n\r\n-- Risky: rename column (breaks queries)\r\n-- ALTER TABLE users RENAME COLUMN email TO email_address;\r\n\r\n-- Risky: change column type (may fail)\r\n-- ALTER TABLE users ALTER COLUMN status TYPE VARCHAR(50);\r\n\r\n-- Safe approach: add new column, migrate data, drop old\r\nALTER TABLE users ADD COLUMN email_address VARCHAR(255);\r\nUPDATE users SET email_address = email WHERE email_address IS NULL;\r\n-- Then update application to use email_address\r\n-- Finally: ALTER TABLE users DROP COLUMN email;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning strategies"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Type 1: Overwrite (lose history)\r\nUPDATE users SET email = 'new@email.com' WHERE id = 1;\r\n\r\n-- Type 2: Add new row (keep history)\r\nINSERT INTO user_emails (user_id, email, effective_date)\r\nVALUES (1, 'new@email.com', CURRENT_DATE);\r\n\r\n-- Type 3: Separate history table\r\nCREATE TABLE user_history (\r\n    id INTEGER,\r\n    email VARCHAR(255),\r\n    name VARCHAR(200),\r\n    valid_from TIMESTAMP NOT NULL,\r\n    valid_to TIMESTAMP,\r\n    PRIMARY KEY (id, valid_from)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simple ORM with schema validation\r\ninterface ColumnDef {\r\n    name: string;\r\n    type: \"string\" | \"number\" | \"boolean\" | \"date\";\r\n    required?: boolean;\r\n    unique?: boolean;\r\n    default?: any;\r\n    references?: { table: string; column: string };\r\n}\r\n\r\ninterface TableSchema {\r\n    name: string;\r\n    columns: ColumnDef[];\r\n    primaryKey: string | string[];\r\n}\r\n\r\nclass SchemaBuilder {\r\n    private tables: Map<string, TableSchema> = new Map();\r\n\r\n    createTable(name: string, columns: ColumnDef[], primaryKey: string | string[]): this {\r\n        this.tables.set(name, { name, columns, primaryKey });\r\n        return this;\r\n    }\r\n\r\n    generateCreateSQL(): string[] {\r\n        const statements: string[] = [];\r\n        for (const [name, schema] of this.tables) {\r\n            const cols = schema.columns.map(col => {\r\n                let sql = `    ${col.name} ${this.mapType(col.type)}`;\r\n                if (col.required) sql += \" NOT NULL\";\r\n                if (col.unique) sql += \" UNIQUE\";\r\n                if (col.default !== undefined) sql += ` DEFAULT ${JSON.stringify(col.default)}`;\r\n                if (col.references) sql += ` REFERENCES ${col.references.table}(${col.references.column})`;\r\n                return sql;\r\n            }).join(\",\\n\");\r\n\r\n            const pk = Array.isArray(schema.primaryKey)\r\n                ? `    PRIMARY KEY (${schema.primaryKey.join(\", \")})`\r\n                : `    PRIMARY KEY (${schema.primaryKey})`;\r\n\r\n            statements.push(`CREATE TABLE ${name} (\\n${cols},\\n${pk}\\n);`);\r\n        }\r\n        return statements;\r\n    }\r\n\r\n    private mapType(type: string): string {\r\n        const map: Record<string, string> = {\r\n            string: \"VARCHAR(255)\",\r\n            number: \"INTEGER\",\r\n            boolean: \"BOOLEAN\",\r\n            date: \"TIMESTAMP\"\r\n        };\r\n        return map[type] || \"TEXT\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ERDs model entities (tables), attributes (columns), and relationships (foreign keys)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normalization: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies), BCNF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primary keys uniquely identify rows; foreign keys enforce referential integrity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CHECK constraints validate data; EXCLUDE prevents overlaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Star schema uses denormalized dimensions and a central fact table for analytics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EAV pattern handles variable attributes but complicates querying"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partitioning splits tables for manageability; sharding splits across databases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Materialized views pre-compute expensive aggregations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema changes should be backward-compatible and use migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soft deletes preserve data while hiding it from queries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core application data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully normalized (3NF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denormalized from the start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting / analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star schema with materialized views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalized OLTP schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable products"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAV pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed columns per variant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time-series data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning by time range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single giant table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level security or sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared-everything with no isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft deletes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deleted_at + partial index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard deletes with CASCADE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural keys (ISO codes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surrogate keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-facing search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIKE '%term%' on large text"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is normalization and why use it?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Normalization organizes data to reduce redundancy and prevent update anomalies. 1NF eliminates repeating groups. 2NF removes partial dependencies. 3NF removes transitive dependencies. BCNF ensures every determinant is a candidate key. Benefits: less storage, consistent data, easier maintenance."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: When to denormalize?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Denormalize when: (1) read throughput is critical and JOINs are expensive, (2) pre-computing aggregations for dashboards, (3) caching derived values like order totals, (4) designing star schemas for data warehousing. Trade-off: faster reads at the cost of write complexity and data redundancy."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: Surrogate vs natural keys?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Surrogate keys (SERIAL, UUID) are artificial, immutable, and independent of business data. Natural keys (SSN, email, ISO code) have business meaning. Surrogate keys are preferred: they never change, are efficiently indexed, and avoid cascading updates. Use natural keys only for stable, small lookup tables."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: Difference between partitioning and sharding?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Partitioning splits a table within the same database. Queries can still access all partitions transparently. Sharding splits data across different database servers. Each shard is independent. Partitioning improves manageability and scan performance. Sharding improves scalability beyond a single server."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is a materialized view?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A materialized view stores the result of a query as a physical table. Unlike regular views (virtual, re-evaluated each time), materialized views persist data and must be refreshed periodically. Used for pre-computing expensive aggregations, improving report query performance by 10-100x."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Star schema vs snowflake schema?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Star schema has denormalized dimension tables (all attributes in one table per dimension). Snowflake schema normalizes dimensions into multiple related tables. Star is simpler for queries (fewer JOINs). Snowflake saves storage and enforces consistency. Star is generally preferred for analytics."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How to handle schema migrations safely?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use numbered migration files (001, 002...). Always add backward-compatible changes first (nullable columns, new tables). Never rename or remove columns without a deprecation period. Use CREATE INDEX CONCURRENTLY to avoid locks. Test migrations on a staging database. Have a rollback plan."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Polymorphic associations anti-pattern?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Polymorphic associations (parent_type + parent_id) violate referential integrity because foreign keys cannot reference multiple tables. Solutions: separate join tables per parent type, or use a shared super-table with inheritance. Polymorphic is acceptable for lightweight cases like comments and likes."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What is an EXCLUDE constraint?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "EXCLUDE prevents rows that would violate a condition based on operators. Most common use: preventing overlapping date ranges with GiST indexes (daterange &&). Can also prevent spatial overlaps (circle &&), or equality conflicts beyond simple unique constraints."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: How to choose between EAV and JSONB?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "EAV is useful when attributes need their own metadata (data types, validation rules, history). JSONB is better for simple variable attributes with GIN indexing. JSONB supports containment queries (@>) and has better performance. EAV is more normalized but requires complex pivoting for queries."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✓ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "★ Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which normal form removes transitive dependencies? a) 1NF b) 2NF c) 3NF d) BCNF"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 3NF removes transitive dependencies"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does ON DELETE CASCADE do? a) prevents deletion b) deletes related rows c) sets FK to NULL d) ignores deletion"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) deletes related rows when parent is deleted"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which schema pattern is best for data warehousing? a) EAV b) Star schema c) Polymorphic d) Single table"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Star schema with denormalized dimensions and fact table"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What partitioning type distributes rows across a fixed number of partitions by a hash function? a) Range b) List c) Hash d) Composite"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Hash partitioning"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which is NOT a safe schema migration? a) add nullable column b) add column with default c) rename column d) CREATE INDEX CONCURRENTLY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) renaming a column breaks existing queries"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Design an ERD for a library system: books, members, loans. Convert to SQL with proper keys and constraints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Normalize a denormalized table with repeating columns (phone1, phone2, phone3) to 3NF."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Design a star schema for an e-commerce analytics database with sales, products, customers, and time dimensions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement soft delete with a partial unique index that prevents duplicate active usernames but allows duplicates for deleted accounts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write a migration plan for splitting a monolith users table into users, profiles, and settings tables with backward compatibility."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design a multi-tenant schema with row-level security. Support tenant isolation with shared tables (using tenant_id column) and demonstrate queries with automatic RLS filtering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Database Design — Normalization, ERD, Keys, Constraints, Schema Design in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Normalization, ERD, Keys, Constraints, Schema Design."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding this technique — Normalization, ERD, Keys, Constraints, Schema Design. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Normalization, ERD, Keys, Constraints, Schema Design from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Database Design — Normalization, ERD, Keys, Constraints, Schema Design with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Normalization, ERD, Keys, Constraints, Schema Design."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Database Design — Normalization, ERD, Keys, Constraints, Schema Design behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Normalization, ERD, Keys, Constraints, Schema Design run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of this technique — Normalization, ERD, Keys, Constraints, Schema Design that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Database Design — Normalization, ERD, Keys, Constraints, Schema Design explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Database Design — Normalization, ERD, Keys, Constraints, Schema Design\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Database Design — Normalization, ERD, Keys, Constraints, Schema Design to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Database Design — Normalization, ERD, Keys, Constraints, Schema Design (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Database Design — Normalization, ERD, Keys, Constraints, Schema Design and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Database Design — Normalization, ERD, Keys, Constraints, Schema Design-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Database Design — Normalization, ERD, Keys, Constraints, Schema Design interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Database Design — Normalization, ERD, Keys, Constraints, Schema Design in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Database Design — Normalization, ERD, Keys, Constraints, Schema Design builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Database Design — Normalization, ERD, Keys, Constraints, Schema Design before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Database Design — Normalization, ERD, Keys, Constraints, Schema Design is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Database Design — Normalization, ERD, Keys, Constraints, Schema Design in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Database Design — Normalization, ERD, Keys, Constraints, Schema Design chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Database Design — Normalization, ERD, Keys, Constraints, Schema Design is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Database Design is ___. — Answer: O(n log n) for sorted queries, O(1) for indexed lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Database Design is ___. — Answer: NULL values, empty tables, duplicate rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Database Design — Normalization, ERD, Keys, Constraints, Schema Design issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Database Design — Normalization, ERD, Keys, Constraints, Schema Design in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Database Design — Normalization, ERD, Keys, Constraints, Schema Design that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Normalization, ERD, Keys, Constraints, Schema Design is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Database Design — Normalization, ERD, Keys, Constraints, Schema Design in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Database Design — Normalization, ERD, Keys, Constraints, Schema Design and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Normalization, ERD, Keys, Constraints, Schema Design on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Database Design — Normalization, ERD, Keys, Constraints, Schema Design to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Database Design — Normalization, ERD, Keys, Constraints, Schema Design from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Database Design — Normalization, ERD, Keys, Constraints, Schema Design when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Database Design — Normalization, ERD, Keys, Constraints, Schema Design twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Database Design — Normalization, ERD, Keys, Constraints, Schema Design snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Database Design — Normalization, ERD, Keys, Constraints, Schema Design listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Database Design — Normalization, ERD, Keys, Constraints, Schema Design to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Database Design — Normalization, ERD, Keys, Constraints, Schema Design by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Database Design — Normalization, ERD, Keys, Constraints, Schema Design to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Learning SQL' by Alan Beaulieu (O'Reilly) — best SQL fundamentals book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'SQL Performance Explained' by Markus Winand — index optimization deep dive"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use The Index, Luke: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://use-the-index-luke.com",
          children: "https://use-the-index-luke.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PostgreSQL documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.postgresql.org/docs",
          children: "https://www.postgresql.org/docs"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mode SQL tutorial: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://mode.com/sql-tutorial",
          children: "https://mode.com/sql-tutorial"
        }), " Design — Normalization, ERD, Keys, Constraints, Schema Design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 02 — builds the foundation for 08 Database Design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Database Design with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Database Design fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Database Design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Database Design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Database Design?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Database Design?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Database Design asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Database Design?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database Design — Normalization, ERD, Keys, Constraints, Schema Design is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Database Design — Normalization, ERD, Keys, Constraints, Schema Design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database Design — Normalization, ERD, Keys, Constraints, Schema Design emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Database Design — Normalization, ERD, Keys, Constraints, Schema Design today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Database Design — Normalization, ERD, Keys, Constraints, Schema Design — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Database Design — Normalization, ERD, Keys, Constraints, Schema Design changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use parameterized queries or prepared statements — never concatenate user input into SQL strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grant minimum necessary privileges — application users should not have DROP or ALTER permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt sensitive columns (PII, passwords) at the application layer before storing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable row-level security (RLS) in PostgreSQL for multi-tenant applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit all DDL changes and log slow queries for security monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL window functions are the data engineering equivalent of rolling statistics in pandas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CTEs (Common Table Expressions) enable recursive queries for graph traversal — useful for hierarchical ML features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature engineering for ML often starts in SQL: aggregations, time-based features, and join-based features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXPLAIN ANALYZE output shows the query optimizer's choices — understanding it is like reading a model's decision tree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Columnar storage (Parquet, BigQuery) is optimized for analytical ML queries vs row storage for OLTP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Database Design is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Database Design — Normalization, ERD, Keys, Constraints, Schema Design skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-08databasedesign-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Database Design — Normalization, ERD, Keys, Constraints, Schema Design in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL (Structured Query Language) is the standard language for managing relational databases — querying, inserting, updating, and deleting data with ACID transaction guarantees."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-08databasedesign-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common SQL mistake: SELECT * in production. Always specify columns explicitly — SELECT * fetches unnecessary data, breaks when schema changes, and prevents index-only scans."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-08databasedesign-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Database Design — Normalization, ERD, Keys, Constraints, Schema Design approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index lookup: O(log n). Full table scan: O(n). Hash join: O(n+m). Sort-merge join: O(n log n + m log m). Window function: O(n log n) for ordered partitions."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-08databasedesign-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Database Design — Normalization, ERD, Keys, Constraints, Schema Design NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL is NOT the right choice when: (1) data is unstructured (use document DB), (2) you need horizontal write scaling beyond a single node (use NoSQL), (3) graph traversals are the primary access pattern."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-08databasedesign-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Database Design — Normalization, ERD, Keys, Constraints, Schema Design applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production SQL stack: PostgreSQL for OLTP, dbt for transformations, pgBouncer for connection pooling, EXPLAIN ANALYZE for query optimization, pg_stat_statements for slow query monitoring."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Database Design — Normalization, ERD, Keys, Constraints, Schema Design (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Database Design — Normalization, ERD, Keys, Constraints, Schema Design (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Database Design — Normalization, ERD, Keys, Constraints, Schema Design-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Database Design — Normalization, ERD, Keys, Constraints, Schema Design in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL"
        }), " — most feature-rich open-source relational database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pgAdmin"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DBeaver"
        }), " — GUI database clients"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EXPLAIN ANALYZE"
        }), " — built-in query plan analyzer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dbt"
        }), " — SQL transformation framework for analytics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pgBouncer"
        }), " — connection pooler for PostgreSQL Design — Normalization, ERD, Keys, Constraints, Schema Design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 08 Database Design pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Database Design — Normalization, ERD, Keys, Constraints, Schema Design in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Database Design — Normalization, ERD, Keys, Constraints, Schema Design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Database Design — Normalization, ERD, Keys, Constraints, Schema Design problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Database Design — Normalization, ERD, Keys, Constraints, Schema Design is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_database_design(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Database Design.\r\n\r\n    Key concepts: SELECT, JOIN, GROUP BY, indexes\r\n    Complexity: O(n log n) for sorted queries, O(1) for indexed lookups\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Database Design here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Database Design — Normalization, ERD, Keys, Constraints, Schema Design without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shopify"
        }), " runs one of the world's largest PostgreSQL deployments, handling Black Friday peaks of 80K orders/minute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instagram"
        }), " uses PostgreSQL sharded across hundreds of nodes for user data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notion"
        }), " migrated from MongoDB to PostgreSQL for stronger consistency guarantees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Airbnb"
        }), " uses SQL-based dbt pipelines to transform 100TB+ of data daily"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": window functions (ROW_NUMBER, RANK, LAG, LEAD) are the most-tested advanced SQL topic in FAANG interviews"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/09-transactions-and-acid",
        children: "Transactions & ACID — BEGIN, COMMIT, ROLLBACK, Isolation Levels, Locks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database Design — Normalization, ERD, Keys, Constraints, Schema Design, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Database Design — Normalization, ERD, Keys, Constraints, Schema Design depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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