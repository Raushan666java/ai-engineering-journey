"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6951],{

/***/ 10866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_10_postgresql_advanced_md_7b9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-10-postgresql-advanced-md-7b9.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_10_postgresql_advanced_md_7b9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/10-postgresql-advanced","title":"PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"id":"10-postgresql-advanced","slug":"/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced","title":"PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL","sidebar_label":"PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL","sidebar_position":35},"sidebar":"placementSidebar","previous":{"title":"Transactions & ACID — BEGIN, COMMIT, ROLLBACK, Isolation Levels, Locks","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/09-transactions-and-acid"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced.md


const frontMatter = {
	id: '10-postgresql-advanced',
	slug: '/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced',
	title: 'PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL',
	sidebar_label: 'PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL',
	sidebar_position: 35
};
const contentTitle = 'PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL';

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
  "value": "10.1 JSONB",
  "id": "101-jsonb",
  "level": 2
}, {
  "value": "10.2 Full-Text Search",
  "id": "102-full-text-search",
  "level": 2
}, {
  "value": "10.3 Partitioning",
  "id": "103-partitioning",
  "level": 2
}, {
  "value": "10.4 Extensions",
  "id": "104-extensions",
  "level": 2
}, {
  "value": "10.5 PL/pgSQL",
  "id": "105-plpgsql",
  "level": 2
}, {
  "value": "10.6 Advanced Queries",
  "id": "106-advanced-queries",
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
    mermaid: "mermaid",
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
        id: "postgresql-advanced--jsonb-full-text-search-partitioning-extensions-plpgsql",
        children: "PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"
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
            children: "Use JSONB for flexible schema-less data storage and querying"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement full-text search with tsvector, tsquery, and GIN indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design and manage table partitioning for large-scale data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install and use PostgreSQL extensions (pg_trgm, PostGIS, uuid-ossp)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write stored procedures and functions using PL/pgSQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand advanced features: CTEs, window functions, and custom aggregates"
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
      children: "Understanding postgresql advanced is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how postgresql advanced works in practice."
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
            children: "10.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage, operators, GIN indexes, jsonb_path_ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-Text Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tsvector, tsquery, to_tsvector, plainto_tsquery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range, list, hash, sub-partitioning, partition pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pg_trgm, PostGIS, uuid-ossp, pgcrypto, hstore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PL/pgSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions, procedures, triggers, cursors, exceptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive CTEs, lateral joins, custom aggregates, FDW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[PostgreSQL Advanced] --> B[JSONB]\r\n    A --> C[Full-Text Search]\r\n    A --> D[Partitioning]\r\n    A --> E[Extensions]\r\n    A --> F[PL/pgSQL]\r\n    A --> G[Advanced Queries]\r\n    B --> H[Operators / Indexes]\r\n    C --> I[tsvector / tsquery / GIN]\r\n    D --> J[Range / List / Hash]\r\n    E --> K[pg_trgm / PostGIS / uuid-ossp]\r\n    F --> L[Functions / Triggers / Cursors]\r\n    G --> M[Recursive CTEs / Lateral / FDW]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-jsonb",
      children: "10.1 JSONB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSONB stores JSON data in a binary format, supporting indexing and efficient querying."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create table with JSONB column\r\nCREATE TABLE products (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(200) NOT NULL,\r\n    attributes JSONB NOT NULL DEFAULT '{}',\r\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\r\n);\r\n\r\n-- Insert JSONB data\r\nINSERT INTO products (name, attributes) VALUES\r\n    ('Laptop', '{\"brand\": \"Dell\", \"specs\": {\"ram\": 16, \"storage\": 512, \"cpu\": \"i7\"}, \"colors\": [\"silver\", \"black\"]}'),\r\n    ('Phone', '{\"brand\": \"Apple\", \"specs\": {\"ram\": 8, \"storage\": 256, \"cpu\": \"A16\"}, \"colors\": [\"midnight\", \"starlight\", \"blue\"]}'),\r\n    ('Tablet', '{\"brand\": \"Samsung\", \"specs\": {\"ram\": 12, \"storage\": 256, \"cpu\": \"Snapdragon\"}, \"colors\": [\"gray\", \"silver\"]}');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSONB operators"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ->  : get JSON object field (returns JSON)\r\nSELECT attributes -> 'brand' AS brand FROM products;\r\n-- \"Dell\"\r\n-- \"Apple\"\r\n-- \"Samsung\"\r\n\r\n-- ->> : get JSON object field as text\r\nSELECT attributes ->> 'brand' AS brand FROM products;\r\n-- Dell\r\n-- Apple\r\n-- Samsung\r\n\r\n-- #>  : get JSON object at path (returns JSON)\r\nSELECT attributes #> '{specs, ram}' AS ram FROM products;\r\n-- 16\r\n-- 8\r\n-- 12\r\n\r\n-- #>> : get JSON object at path as text\r\nSELECT attributes #>> '{specs, cpu}' AS cpu FROM products;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSONB containment and existence"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- @> : contains (does JSON contain the right operand?)\r\nSELECT * FROM products WHERE attributes @> '{\"brand\": \"Apple\"}';\r\n-- Phone (Apple product)\r\n\r\n-- ?  : does key exist?\r\nSELECT * FROM products WHERE attributes ? 'specs';\r\n-- All products (all have specs key)\r\n\r\n-- ?| : any of keys exist?\r\nSELECT * FROM products WHERE attributes ?| ARRAY['warranty', 'brand'];\r\n\r\n-- ?& : all keys exist?\r\nSELECT * FROM products WHERE attributes ?& ARRAY['brand', 'specs'];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN indexes for JSONB"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Default GIN index (supports ?, ?|, ?&, @>)\r\nCREATE INDEX idx_products_attrs ON products USING gin(attributes);\r\n\r\n-- More compact index for @> only (smaller, faster for containment)\r\nCREATE INDEX idx_products_attrs_path ON products USING gin(attributes jsonb_path_ops);\r\n\r\n-- Query using the index:\r\nSELECT * FROM products\r\nWHERE attributes @> '{\"specs\": {\"ram\": 16}}';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSONB modification functions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- jsonb_set: set/replace a value at path\r\nUPDATE products\r\nSET attributes = jsonb_set(attributes, '{specs, ram}', '32')\r\nWHERE id = 1;\r\n\r\n-- jsonb_insert: insert value (if not exists)\r\nUPDATE products\r\nSET attributes = jsonb_insert(attributes, '{specs, gpu}', '\"RTX 4060\"')\r\nWHERE id = 1;\r\n\r\n-- Delete key\r\nUPDATE products\r\nSET attributes = attributes - 'temporary_field';\r\n\r\n-- Concatenate JSONB\r\nUPDATE products\r\nSET attributes = attributes || '{\"in_stock\": true}';\r\n\r\n-- Array operations\r\nSELECT id, jsonb_array_elements_text(attributes -> 'colors') AS color\r\nFROM products;\r\n-- Expands array into rows: id=1, color=silver; id=1, color=black; etc.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-full-text-search",
      children: "10.2 Full-Text Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL's built-in full-text search is a powerful alternative to Elasticsearch for many applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Enable full-text search\r\nCREATE TABLE documents (\r\n    id SERIAL PRIMARY KEY,\r\n    title TEXT NOT NULL,\r\n    body TEXT NOT NULL,\r\n    -- Pre-computed tsvector for performance\r\n    search_vector tsvector\r\n);\r\n\r\n-- Insert data\r\nINSERT INTO documents (title, body) VALUES\r\n    ('PostgreSQL Performance Tuning', 'Learn how to optimize database queries and indexes for better performance.'),\r\n    ('Full-Text Search in PostgreSQL', 'Discover the power of built-in text search with tsvector and GIN indexes.'),\r\n    ('Advanced JSONB Techniques', 'Working with JSONB data in PostgreSQL for flexible schema applications.');\r\n\r\n-- Update tsvector column (or use a trigger)\r\nUPDATE documents SET\r\n    search_vector = to_tsvector('english', title || ' ' || body);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Search functions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Basic search (lexemes match)\r\nSELECT title FROM documents\r\nWHERE search_vector @@ to_tsquery('english', 'database & performance');\r\n-- PostgreSQL Performance Tuning\r\n\r\n-- Plain to tsquery (no operators)\r\nSELECT title FROM documents\r\nWHERE search_vector @@ plainto_tsquery('english', 'text search');\r\n-- Full-Text Search in PostgreSQL\r\n\r\n-- Search with phrase matching\r\nSELECT title FROM documents\r\nWHERE search_vector @@ phraseto_tsquery('english', 'built-in text search');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranking results"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\r\n    title,\r\n    ts_rank(search_vector, to_tsquery('english', 'database | postgresql')) AS rank\r\nFROM documents\r\nWHERE search_vector @@ to_tsquery('english', 'database | postgresql')\r\nORDER BY rank DESC;\r\n\r\n-- Normalized rank (0 to 1)\r\nSELECT\r\n    title,\r\n    ts_rank_cd(search_vector, to_tsquery('english', 'jsonb')) AS cover_density_rank\r\nFROM documents\r\nWHERE search_vector @@ to_tsquery('english', 'jsonb');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Highlighting"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\r\n    title,\r\n    ts_headline('english', body, to_tsquery('english', 'postgresql'),\r\n                'StartSel = <mark>, StopSel = </mark>') AS highlighted\r\nFROM documents\r\nWHERE search_vector @@ to_tsquery('english', 'postgresql');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic tsvector with triggers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION documents_search_update() RETURNS trigger AS $$\r\nBEGIN\r\n    NEW.search_vector := to_tsvector('english', NEW.title || ' ' || NEW.body);\r\n    RETURN NEW;\r\nEND;\r\n$$ LANGUAGE plpgsql;\r\n\r\nCREATE TRIGGER trg_documents_search\r\n    BEFORE INSERT OR UPDATE ON documents\r\n    FOR EACH ROW\r\n    EXECUTE FUNCTION documents_search_update();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN index for full-text search"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_documents_search ON documents USING gin(search_vector);\r\n\r\n-- Dictionary configuration\r\n-- 'english', 'simple', 'french', 'german' — language-specific stemming\r\n-- Custom dictionaries: thesaurus, stop words, Ispell\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-partitioning",
      children: "10.3 Partitioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partitioning divides large tables into smaller, more manageable pieces."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Range partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE sales (\r\n    id SERIAL,\r\n    sale_date DATE NOT NULL,\r\n    amount DECIMAL(10, 2),\r\n    customer_id INTEGER\r\n) PARTITION BY RANGE (sale_date);\r\n\r\nCREATE TABLE sales_2024_q1 PARTITION OF sales\r\n    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');\r\nCREATE TABLE sales_2024_q2 PARTITION OF sales\r\n    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');\r\nCREATE TABLE sales_2024_q3 PARTITION OF sales\r\n    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');\r\nCREATE TABLE sales_2024_q4 PARTITION OF sales\r\n    FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');\r\n\r\n-- Partition pruning: only scans relevant partitions\r\nEXPLAIN SELECT * FROM sales WHERE sale_date = '2024-05-15';\r\n-- Seq Scan on sales_2024_q2 (prunes other partitions)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "List partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE customers (\r\n    id SERIAL,\r\n    name VARCHAR(100),\r\n    country_code CHAR(2),\r\n    created_at DATE\r\n) PARTITION BY LIST (country_code);\r\n\r\nCREATE TABLE customers_us PARTITION OF customers\r\n    FOR VALUES IN ('US');\r\nCREATE TABLE customers_eu PARTITION OF customers\r\n    FOR VALUES IN ('GB', 'DE', 'FR', 'IT', 'ES');\r\nCREATE TABLE customers_apac PARTITION OF customers\r\n    FOR VALUES IN ('JP', 'KR', 'AU', 'SG', 'IN');\r\nCREATE TABLE customers_other PARTITION OF customers\r\n    DEFAULT;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE sessions (\r\n    session_id UUID NOT NULL,\r\n    user_id INTEGER,\r\n    created_at TIMESTAMP,\r\n    payload JSONB\r\n) PARTITION BY HASH (session_id);\r\n\r\nCREATE TABLE sessions_0 PARTITION OF sessions\r\n    FOR VALUES WITH (MODULUS 4, REMAINDER 0);\r\nCREATE TABLE sessions_1 PARTITION OF sessions\r\n    FOR VALUES WITH (MODULUS 4, REMAINDER 1);\r\nCREATE TABLE sessions_2 PARTITION OF sessions\r\n    FOR VALUES WITH (MODULUS 4, REMAINDER 2);\r\nCREATE TABLE sessions_3 PARTITION OF sessions\r\n    FOR VALUES WITH (MODULUS 4, REMAINDER 3);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sub-partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE measurements (\r\n    id SERIAL,\r\n    sensor_id INTEGER,\r\n    reading DECIMAL(10, 2),\r\n    recorded_at TIMESTAMP\r\n) PARTITION BY RANGE (recorded_at);\r\n\r\nCREATE TABLE measurements_2024 PARTITION OF measurements\r\n    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01')\r\n    PARTITION BY RANGE (sensor_id);\r\n\r\nCREATE TABLE measurements_2024_s1 PARTITION OF measurements_2024\r\n    FOR VALUES FROM (1) TO (100);\r\nCREATE TABLE measurements_2024_s2 PARTITION OF measurements_2024\r\n    FOR VALUES FROM (100) TO (200);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Detach partition for archiving\r\nALTER TABLE sales DETACH PARTITION sales_2024_q1;\r\n\r\n-- Attach existing table as partition\r\nALTER TABLE sales ATTACH PARTITION sales_new\r\n    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');\r\n\r\n-- Drop partition (fast, no vacuum needed)\r\nDROP TABLE sales_2024_q1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-extensions",
      children: "10.4 Extensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extensions add functionality to PostgreSQL."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- List installed extensions\r\nSELECT * FROM pg_available_extensions;\r\nSELECT * FROM pg_extension;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "uuid-ossp"
      }), " (generate UUIDs):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\r\n\r\nSELECT uuid_generate_v4();           -- Random UUID\r\nSELECT uuid_generate_v1();           -- Time-based UUID\r\nSELECT uuid_generate_v1mc();         -- Time-based with random MAC\r\n\r\nCREATE TABLE users (\r\n    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\r\n    name VARCHAR(100)\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pgcrypto"
      }), " (encryption and hashing):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS pgcrypto;\r\n\r\n-- Password hashing\r\nUPDATE users SET password_hash = crypt('user_password', gen_salt('bf'));\r\n\r\n-- Password verification\r\nSELECT * FROM users\r\nWHERE password_hash = crypt('login_password', password_hash);\r\n\r\n-- Encryption\r\nSELECT encrypt('sensitive_data', 'encryption_key', 'aes');\r\nSELECT decrypt(encrypted_data, 'encryption_key', 'aes');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pg_trgm"
      }), " (trigram text search):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS pg_trgm;\r\n\r\n-- Trigram index for fuzzy text search\r\nCREATE INDEX idx_products_name_trgm ON products USING gin(name gin_trgm_ops);\r\n\r\n-- Similarity search\r\nSELECT name, similarity(name, 'laptop') AS sim\r\nFROM products\r\nWHERE name % 'laptop'              -- similarity > pg_trgm.similarity_threshold\r\nORDER BY sim DESC;\r\n\r\n-- Show me the closest\r\nSELECT name, show_trgm(name) FROM products WHERE id = 1;\r\n\r\n-- Word similarity (word boundaries)\r\nSELECT word_similarity('postgre', 'PostgreSQL');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PostGIS"
      }), " (geospatial):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS postgis;\r\n\r\nCREATE TABLE locations (\r\n    id SERIAL PRIMARY KEY,\r\n    name VARCHAR(200),\r\n    geom GEOMETRY(Point, 4326)  -- WGS 84 lat/lng\r\n);\r\n\r\nINSERT INTO locations (name, geom) VALUES\r\n    ('New York', ST_SetSRID(ST_MakePoint(-74.006, 40.7128), 4326)),\r\n    ('London', ST_SetSRID(ST_MakePoint(-0.1278, 51.5074), 4326)),\r\n    ('Tokyo', ST_SetSRID(ST_MakePoint(139.6917, 35.6895), 4326));\r\n\r\n-- Distance query\r\nSELECT name, ST_Distance(\r\n    geom,\r\n    ST_SetSRID(ST_MakePoint(-73.9352, 40.7306), 4326)  -- Times Square\r\n) AS distance_degrees\r\nFROM locations\r\nORDER BY distance_degrees\r\nLIMIT 5;\r\n\r\n-- Spatial index\r\nCREATE INDEX idx_locations_geom ON locations USING gist(geom);\r\n\r\n-- Within bounding box\r\nSELECT * FROM locations\r\nWHERE geom && ST_MakeEnvelope(-80, 30, -70, 45, 4326);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "hstore"
      }), " (key-value store, predecessor to JSONB):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS hstore;\r\n\r\nCREATE TABLE config (\r\n    id SERIAL PRIMARY KEY,\r\n    settings hstore\r\n);\r\n\r\nINSERT INTO config (settings) VALUES\r\n    ('theme => dark, language => en, notifications => on');\r\n\r\n-- Query hstore\r\nSELECT settings -> 'theme' FROM config;\r\nSELECT * FROM config WHERE settings ? 'language';\r\nSELECT * FROM config WHERE settings @> 'notifications => on';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-plpgsql",
      children: "10.5 PL/pgSQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PL/pgSQL is PostgreSQL's built-in procedural language for functions, procedures, and triggers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION get_products_by_category(cat_id INTEGER)\r\nRETURNS TABLE(id INTEGER, name VARCHAR, price DECIMAL)\r\nLANGUAGE plpgsql\r\nAS $$\r\nBEGIN\r\n    RETURN QUERY\r\n    SELECT p.id, p.name, p.price\r\n    FROM products p\r\n    WHERE p.category_id = cat_id\r\n    ORDER BY p.name;\r\nEND;\r\n$$;\r\n\r\n-- Usage\r\nSELECT * FROM get_products_by_category(5);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functions with OUT parameters"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION get_order_summary(order_id INTEGER,\r\n    OUT customer_name VARCHAR,\r\n    OUT total DECIMAL,\r\n    OUT item_count INTEGER)\r\nLANGUAGE plpgsql\r\nAS $$\r\nBEGIN\r\n    SELECT c.name, o.total, COUNT(oi.id)\r\n    INTO customer_name, total, item_count\r\n    FROM orders o\r\n    JOIN customers c ON c.id = o.customer_id\r\n    JOIN order_items oi ON oi.order_id = o.id\r\n    WHERE o.id = order_id\r\n    GROUP BY c.name, o.total;\r\nEND;\r\n$$;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Procedures"
      }), " (PostgreSQL 11+):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE PROCEDURE transfer_funds(\r\n    from_account INTEGER,\r\n    to_account INTEGER,\r\n    amount DECIMAL\r\n)\r\nLANGUAGE plpgsql\r\nAS $$\r\nBEGIN\r\n    -- Check balance\r\n    IF (SELECT balance FROM accounts WHERE id = from_account) < amount THEN\r\n        RAISE EXCEPTION 'Insufficient balance in account %', from_account;\r\n    END IF;\r\n\r\n    -- Perform transfer\r\n    UPDATE accounts SET balance = balance - amount WHERE id = from_account;\r\n    UPDATE accounts SET balance = balance + amount WHERE id = to_account;\r\n\r\n    -- Log transaction\r\n    INSERT INTO transfer_log (from_account, to_account, amount)\r\n    VALUES (from_account, to_account, amount);\r\nEND;\r\n$$;\r\n\r\n-- Execute procedure\r\nCALL transfer_funds(1, 2, 100.00);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Triggers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION audit_orders()\r\nRETURNS TRIGGER\r\nLANGUAGE plpgsql\r\nAS $$\r\nBEGIN\r\n    IF TG_OP = 'INSERT' THEN\r\n        INSERT INTO audit_log (table_name, action, new_data)\r\n        VALUES ('orders', 'INSERT', row_to_json(NEW)::text);\r\n        RETURN NEW;\r\n    ELSIF TG_OP = 'UPDATE' THEN\r\n        INSERT INTO audit_log (table_name, action, old_data, new_data)\r\n        VALUES ('orders', 'UPDATE', row_to_json(OLD)::text, row_to_json(NEW)::text);\r\n        RETURN NEW;\r\n    ELSIF TG_OP = 'DELETE' THEN\r\n        INSERT INTO audit_log (table_name, action, old_data)\r\n        VALUES ('orders', 'DELETE', row_to_json(OLD)::text);\r\n        RETURN OLD;\r\n    END IF;\r\nEND;\r\n$$;\r\n\r\nCREATE TRIGGER trg_orders_audit\r\n    AFTER INSERT OR UPDATE OR DELETE ON orders\r\n    FOR EACH ROW\r\n    EXECUTE FUNCTION audit_orders();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION safe_transfer(from_id INTEGER, to_id INTEGER, amount DECIMAL)\r\nRETURNS TEXT\r\nLANGUAGE plpgsql\r\nAS $$\r\nBEGIN\r\n    PERFORM transfer_funds(from_id, to_id, amount);\r\n    RETURN 'Success';\r\nEXCEPTION\r\n    WHEN insufficient_balance THEN\r\n        RETURN 'Insufficient balance';\r\n    WHEN OTHERS THEN\r\n        RETURN 'Error: ' || SQLERRM;\r\nEND;\r\n$$;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cursors"
      }), " for processing large result sets in batches:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION process_large_table()\r\nRETURNS VOID\r\nLANGUAGE plpgsql\r\nAS $$\r\nDECLARE\r\n    cur CURSOR FOR SELECT id, status FROM orders WHERE status = 'pending';\r\n    rec RECORD;\r\n    batch_count INTEGER := 0;\r\nBEGIN\r\n    OPEN cur;\r\n    LOOP\r\n        FETCH cur INTO rec;\r\n        EXIT WHEN NOT FOUND;\r\n\r\n        UPDATE orders SET status = 'processing' WHERE id = rec.id;\r\n        batch_count := batch_count + 1;\r\n\r\n        -- Commit every 1000 rows\r\n        IF batch_count % 1000 = 0 THEN\r\n            COMMIT;\r\n        END IF;\r\n    END LOOP;\r\n    CLOSE cur;\r\nEND;\r\n$$;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-advanced-queries",
      children: "10.6 Advanced Queries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recursive CTEs"
      }), " (for hierarchical data):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "WITH RECURSIVE org_chart AS (\r\n    -- Base case: CEO\r\n    SELECT id, name, manager_id, 1 AS level, name::TEXT AS path\r\n    FROM employees\r\n    WHERE manager_id IS NULL\r\n\r\n    UNION ALL\r\n\r\n    -- Recursive step: direct reports\r\n    SELECT e.id, e.name, e.manager_id, oc.level + 1,\r\n           oc.path || ' -> ' || e.name\r\n    FROM employees e\r\n    JOIN org_chart oc ON e.manager_id = oc.id\r\n)\r\nSELECT * FROM org_chart ORDER BY path;\r\n\r\n-- Tree traversal for categories\r\nWITH RECURSIVE category_tree AS (\r\n    SELECT id, name, parent_id, name AS full_path\r\n    FROM categories WHERE parent_id IS NULL\r\n\r\n    UNION ALL\r\n\r\n    SELECT c.id, c.name, c.parent_id,\r\n           ct.full_path || ' / ' || c.name\r\n    FROM categories c\r\n    JOIN category_tree ct ON c.parent_id = ct.id\r\n)\r\nSELECT * FROM category_tree ORDER BY full_path;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lateral joins"
      }), " (subqueries that can reference columns from preceding FROM items):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Top 3 products per category\r\nSELECT c.name AS category, p.name AS product, p.price\r\nFROM categories c\r\nCROSS JOIN LATERAL (\r\n    SELECT name, price\r\n    FROM products\r\n    WHERE category_id = c.id\r\n    ORDER BY price DESC\r\n    LIMIT 3\r\n) p;\r\n\r\n-- Nearest locations\r\nSELECT u.name, l.name AS nearest_location\r\nFROM users u\r\nCROSS JOIN LATERAL (\r\n    SELECT name, geom\r\n    FROM locations\r\n    ORDER BY u.geom <-> geom\r\n    LIMIT 1\r\n) l;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom aggregates"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION int_array_accum(s INTEGER[], n INTEGER)\r\nRETURNS INTEGER[]\r\nLANGUAGE plpgsql\r\nAS $$\r\nBEGIN\r\n    RETURN s || n;\r\nEND;\r\n$$;\r\n\r\nCREATE AGGREGATE array_agg_custom(INTEGER) (\r\n    SFUNC = int_array_accum,\r\n    STYPE = INTEGER[],\r\n    INITCOND = '{}'\r\n);\r\n\r\n-- Usage\r\nSELECT department_id, array_agg_custom(employee_id ORDER BY name)\r\nFROM employees\r\nGROUP BY department_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Foreign Data Wrappers (FDW)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION postgres_fdw;\r\n\r\n-- Create foreign server\r\nCREATE SERVER remote_db\r\n    FOREIGN DATA WRAPPER postgres_fdw\r\n    OPTIONS (host 'remote.example.com', port '5432', dbname 'analytics');\r\n\r\n-- User mapping\r\nCREATE USER MAPPING FOR local_user\r\n    SERVER remote_db\r\n    OPTIONS (user 'remote_user', password 'secret');\r\n\r\n-- Foreign table\r\nCREATE FOREIGN TABLE remote_orders (\r\n    id INTEGER,\r\n    customer_id INTEGER,\r\n    total DECIMAL(10, 2),\r\n    order_date DATE\r\n)\r\nSERVER remote_db\r\nOPTIONS (schema_name 'public', table_name 'orders');\r\n\r\n-- Query remote data as if local\r\nSELECT * FROM remote_orders WHERE order_date > '2024-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Full-text search in TypeScript\r\nclass FullTextSearch {\r\n    private documents: Map<number, string> = new Map();\r\n\r\n    add(id: number, content: string): void {\r\n        this.documents.set(id, content.toLowerCase());\r\n    }\r\n\r\n    search(query: string): { id: number; score: number }[] {\r\n        const terms = query.toLowerCase().split(/\\s+/);\r\n        const results: { id: number; score: number }[] = [];\r\n\r\n        for (const [id, content] of this.documents) {\r\n            const score = terms.reduce((acc, term) => {\r\n                const regex = new RegExp(term, \"g\");\r\n                const matches = content.match(regex);\r\n                return acc + (matches ? matches.length : 0);\r\n            }, 0);\r\n\r\n            if (score > 0) {\r\n                results.push({ id, score });\r\n            }\r\n        }\r\n\r\n        return results.sort((a, b) => b.score - a.score);\r\n    }\r\n}\r\n\r\n// JSONB-like operations\r\nclass JsonStore {\r\n    private data: Map<number, Record<string, any>> = new Map();\r\n\r\n    set(id: number, obj: Record<string, any>): void {\r\n        this.data.set(id, obj);\r\n    }\r\n\r\n    get(id: number, path: string): any {\r\n        const obj = this.data.get(id);\r\n        if (!obj) return undefined;\r\n        return path.split(\".\").reduce((acc, key) => acc?.[key], obj);\r\n    }\r\n\r\n    contains(pathValue: Record<string, any>): number[] {\r\n        return [...this.data.entries()]\r\n            .filter(([_, obj]) => this.matches(obj, pathValue))\r\n            .map(([id]) => id);\r\n    }\r\n\r\n    private matches(obj: any, pattern: Record<string, any>): boolean {\r\n        for (const [key, value] of Object.entries(pattern)) {\r\n            if (typeof value === \"object\" && value !== null) {\r\n                if (!this.matches(obj[key], value)) return false;\r\n            } else if (obj[key] !== value) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSONB stores JSON in binary format with efficient indexing and query operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GIN indexes on JSONB support containment (@>), existence (?, ?|, ?&) queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full-text search uses tsvector (document) and tsquery (query) with ranking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pg_trgm enables fuzzy string matching with % operator and similarity()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partitioning splits tables by range, list, or hash for manageability and performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition pruning automatically scans only relevant partitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PL/pgSQL supports functions, procedures, triggers, cursors, and error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive CTEs handle tree and graph traversal (org charts, bill of materials)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LATERAL joins allow correlated subqueries in the FROM clause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foreign Data Wrappers (FDW) enable cross-database queries"
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
            children: "Flexible attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSONB with GIN index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAV pattern with separate tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search within text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-text search with tsvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIKE '%term%' on large text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fuzzy user search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pg_trgm GIN index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Levenshtein implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large time-series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range partitioning by date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single giant table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geo queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostGIS with GiST index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level distance calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trigger + audit table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive CTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple self-joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-database query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign Data Wrapper (FDW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETL duplication for simple queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s10-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: JSONB vs JSON data types?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "JSON stores text as-is (preserving whitespace, key order, duplicates). JSONB stores a decomposed binary format (no duplicates, sorted keys). JSONB supports indexing (GIN),.\nthe @> containment operator, and is faster for querying. JSON preserves original formatting and is slightly faster for input. Use JSONB for.\nquerying, JSON for archival."
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
      "data-qid": "sql-s10-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How does full-text search ranking work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ts_rank() uses term frequency (TF) and inverse document frequency (IDF) to calculate relevance. ts_rank_cd() uses cover density (how close the search terms are in the document). Both can be normalized by document length. Higher-ranked documents match more terms or have denser term clusters."
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
      "data-qid": "sql-s10-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: When is partitioning beneficial?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Partitioning benefits tables with 100M+ rows or when: (1) old data can be dropped by detaching partitions (nearly instant), (2) queries consistently filter by partition key, (3) data is time-series, (4) you need to spread I/O across tablespaces. Partition pruning eliminates full-table scans."
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
      "data-qid": "sql-s10-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: PL/pgSQL function vs procedure?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Functions return values and can be used in SQL (SELECT func()). Procedures (PostgreSQL 11+) use CALL, can manage transactions (COMMIT/ROLLBACK), and don't require a return value. Use procedures for data modification operations that need transaction control."
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
      "data-qid": "sql-s10-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: Recursive CTE use cases?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Recursive CTEs handle hierarchical or graph data: org charts (manager hierarchy), category trees (parent-child navigation), bill of materials (component breakdown), graph traversal (friend-of-a-friend), and sequence generation (date range expansion). Uses UNION ALL with a base case and recursive step."
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
      "data-qid": "sql-s10-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: What is a lateral join?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "LATERAL allows a subquery in FROM to reference columns from preceding FROM items. Each row from the left table \"feeds\" into the lateral subquery. Used for: top-N per group,.\nnearest neighbor search, and unnesting complex JSONB or array data. Without LATERAL, subqueries cannot reference outer FROM items."
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
      "data-qid": "sql-s10-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: pg_trgm use cases?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "pg_trgm enables fuzzy string matching by dividing text into trigrams (3-character sequences). Use cases: autocomplete/search suggestions (similarity()), misspelling correction (word_similarity()), deduplication (show_trgm()), and substring search with GIN index. Works with ILIKE for case-insensitive fuzzy search."
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
      "data-qid": "sql-s10-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Foreign Data Wrappers (FDW) purpose?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "FDW allows querying remote databases as if they were local tables. Supports cross-database JOINs without ETL. postgres_fdw connects to remote PostgreSQL. Other wrappers exist for MySQL, MongoDB, CSV files, and more. FDW can push down WHERE conditions to the remote server for efficiency."
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
      "data-qid": "sql-s10-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: PostGIS geography vs geometry?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "GEOMETRY uses Cartesian coordinates and planar calculations. GEOGRAPHY uses spherical coordinates (lat/lng) and accounts for Earth's curvature. GEOGRAPHY is more accurate for large areas but slower. Use GEOMETRY for local/regional data, GEOGRAPHY for global data. ST_Distance on GEOGRAPHY returns meters."
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
      "data-qid": "sql-s10-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: When to use PL/pgSQL vs application code?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use PL/pgSQL when the logic is tightly coupled to data: complex validation triggers, audit trails, permission checks that must be enforced regardless of application. Use application code for.\nbusiness logic, complex transformations, and operations needing external services. PL/pgSQL reduces network round-trips but is harder to test and version."
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
      }), ": Which JSONB operator checks containment? a) @> b) -> c) ? d) #>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s10-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) @> checks if the left JSONB contains the right operand"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does to_tsvector('english', text) do? a) search text b) convert to query c) convert to search vector d) highlight text"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s10-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) converts text to a tsvector (lexemes with positions)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What extension enables fuzzy text matching? a) uuid-ossp b) pg_trgm c) postgres_fdw d) hstore"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s10-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) pg_trgm provides trigram-based fuzzy matching"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which command calls a stored procedure? a) EXECUTE b) CALL c) SELECT d) RUN"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s10-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) CALL invokes a stored procedure"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does partition pruning do? a) deletes old partitions b) scans only relevant partitions c) reorganizes partitions d) creates new partitions"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s10-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) partition pruning scans only partitions matching the query filter"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Store product attributes as JSONB and query for products with specific specs (e.g., \"ram: 16, storage: 512\")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a full-text search index on a blog posts table and perform ranked searches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Design a partitioned sales table by month with automatic partition creation using a PL/pgSQL function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a recursive CTE to traverse a categories table with parent_id hierarchy, showing the full path for each category."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Create a trigger-based audit system that logs INSERT, UPDATE, and DELETE operations on an orders table into an audit_log table with old and new values."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a fuzzy search system for a contacts table: use pg_trgm with a GIN index and implement autocomplete that handles typos and partial matches."]
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
            children: "Explain the core idea of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
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
            children: "Describe a production bug caused by misunderstanding this technique — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL from 10 users to 10 million?"
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
            children: "Compare PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
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
            children: "How does PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in production today?"
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
        }), " PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 10 Postgresql Advanced is ___. — Answer: O(n log n) for sorted queries, O(1) for indexed lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 10 Postgresql Advanced is ___. — Answer: NULL values, empty tables, duplicate rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL on an empty input?"
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
            children: "Complete Medium exercises, explain PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL to someone else"
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
        children: "Always write a one-line example of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        }), " Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 02 — builds the foundation for 10 Postgresql Advanced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 10 Postgresql Advanced with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 10 Postgresql Advanced fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 10 Postgresql Advanced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 10 Postgresql Advanced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 10 Postgresql Advanced?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 10 Postgresql Advanced?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 10 Postgresql Advanced asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 10 Postgresql Advanced?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
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
        children: "PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL changes quickly; focus on fundamentals that remain stable."
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
            children: "10 Postgresql Advanced is like a GPS navigation system"
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
          }), " — this chapter contributes the PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-10postgresqladvanced-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL (Structured Query Language) is the standard language for managing relational databases — querying, inserting, updating, and deleting data with ACID transaction guarantees."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-10postgresqladvanced-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common SQL mistake: SELECT * in production. Always specify columns explicitly — SELECT * fetches unnecessary data, breaks when schema changes, and prevents index-only scans."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-10postgresqladvanced-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index lookup: O(log n). Full table scan: O(n). Hash join: O(n+m). Sort-merge join: O(n log n + m log m). Window function: O(n log n) for ordered partitions."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-10postgresqladvanced-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL is NOT the right choice when: (1) data is unstructured (use document DB), (2) you need horizontal write scaling beyond a single node (use NoSQL), (3) graph traversals are the primary access pattern."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-10postgresqladvanced-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in production at scale"
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
        }), " — connection pooler for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"]
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
        }), ": Add structured logging at each stage of the 10 Postgresql Advanced pipeline to identify exactly where the failure occurs."]
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
        children: "Explain PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
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
        children: "Tell me about a time you debugged a PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_10_postgresql_advanced(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 10 Postgresql Advanced.\r\n\r\n    Key concepts: SELECT, JOIN, GROUP BY, indexes\r\n    Complexity: O(n log n) for sorted queries, O(1) for indexed lookups\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 10 Postgresql Advanced here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL without notes"
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
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL depends on input size and distribution — always benchmark for your own data."
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