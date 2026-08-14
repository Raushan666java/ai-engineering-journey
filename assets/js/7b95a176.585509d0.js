"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[16951],{

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
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
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
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[PostgreSQL Advanced] --> B[JSONB]\n    A --> C[Full-Text Search]\n    A --> D[Partitioning]\n    A --> E[Extensions]\n    A --> F[PL/pgSQL]\n    A --> G[Advanced Queries]\n    B --> H[Operators / Indexes]\n    C --> I[tsvector / tsquery / GIN]\n    D --> J[Range / List / Hash]\n    E --> K[pg_trgm / PostGIS / uuid-ossp]\n    F --> L[Functions / Triggers / Cursors]\n    G --> M[Recursive CTEs / Lateral / FDW]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-jsonb",
      children: "10.1 JSONB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSONB stores JSON data in a binary format, supporting indexing and efficient querying."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create table with JSONB column\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(200) NOT NULL,\n    attributes JSONB NOT NULL DEFAULT '{}',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Insert JSONB data\nINSERT INTO products (name, attributes) VALUES\n    ('Laptop', '{\"brand\": \"Dell\", \"specs\": {\"ram\": 16, \"storage\": 512, \"cpu\": \"i7\"}, \"colors\": [\"silver\", \"black\"]}'),\n    ('Phone', '{\"brand\": \"Apple\", \"specs\": {\"ram\": 8, \"storage\": 256, \"cpu\": \"A16\"}, \"colors\": [\"midnight\", \"starlight\", \"blue\"]}'),\n    ('Tablet', '{\"brand\": \"Samsung\", \"specs\": {\"ram\": 12, \"storage\": 256, \"cpu\": \"Snapdragon\"}, \"colors\": [\"gray\", \"silver\"]}');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSONB operators"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ->  : get JSON object field (returns JSON)\nSELECT attributes -> 'brand' AS brand FROM products;\n-- \"Dell\"\n-- \"Apple\"\n-- \"Samsung\"\n\n-- ->> : get JSON object field as text\nSELECT attributes ->> 'brand' AS brand FROM products;\n-- Dell\n-- Apple\n-- Samsung\n\n-- #>  : get JSON object at path (returns JSON)\nSELECT attributes #> '{specs, ram}' AS ram FROM products;\n-- 16\n-- 8\n-- 12\n\n-- #>> : get JSON object at path as text\nSELECT attributes #>> '{specs, cpu}' AS cpu FROM products;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSONB containment and existence"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- @> : contains (does JSON contain the right operand?)\nSELECT * FROM products WHERE attributes @> '{\"brand\": \"Apple\"}';\n-- Phone (Apple product)\n\n-- ?  : does key exist?\nSELECT * FROM products WHERE attributes ? 'specs';\n-- All products (all have specs key)\n\n-- ?| : any of keys exist?\nSELECT * FROM products WHERE attributes ?| ARRAY['warranty', 'brand'];\n\n-- ?& : all keys exist?\nSELECT * FROM products WHERE attributes ?& ARRAY['brand', 'specs'];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN indexes for JSONB"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Default GIN index (supports ?, ?|, ?&, @>)\nCREATE INDEX idx_products_attrs ON products USING gin(attributes);\n\n-- More compact index for @> only (smaller, faster for containment)\nCREATE INDEX idx_products_attrs_path ON products USING gin(attributes jsonb_path_ops);\n\n-- Query using the index:\nSELECT * FROM products\nWHERE attributes @> '{\"specs\": {\"ram\": 16}}';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSONB modification functions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- jsonb_set: set/replace a value at path\nUPDATE products\nSET attributes = jsonb_set(attributes, '{specs, ram}', '32')\nWHERE id = 1;\n\n-- jsonb_insert: insert value (if not exists)\nUPDATE products\nSET attributes = jsonb_insert(attributes, '{specs, gpu}', '\"RTX 4060\"')\nWHERE id = 1;\n\n-- Delete key\nUPDATE products\nSET attributes = attributes - 'temporary_field';\n\n-- Concatenate JSONB\nUPDATE products\nSET attributes = attributes || '{\"in_stock\": true}';\n\n-- Array operations\nSELECT id, jsonb_array_elements_text(attributes -> 'colors') AS color\nFROM products;\n-- Expands array into rows: id=1, color=silver; id=1, color=black; etc.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-full-text-search",
      children: "10.2 Full-Text Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL's built-in full-text search is a powerful alternative to Elasticsearch for many applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Enable full-text search\nCREATE TABLE documents (\n    id SERIAL PRIMARY KEY,\n    title TEXT NOT NULL,\n    body TEXT NOT NULL,\n    -- Pre-computed tsvector for performance\n    search_vector tsvector\n);\n\n-- Insert data\nINSERT INTO documents (title, body) VALUES\n    ('PostgreSQL Performance Tuning', 'Learn how to optimize database queries and indexes for better performance.'),\n    ('Full-Text Search in PostgreSQL', 'Discover the power of built-in text search with tsvector and GIN indexes.'),\n    ('Advanced JSONB Techniques', 'Working with JSONB data in PostgreSQL for flexible schema applications.');\n\n-- Update tsvector column (or use a trigger)\nUPDATE documents SET\n    search_vector = to_tsvector('english', title || ' ' || body);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Search functions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Basic search (lexemes match)\nSELECT title FROM documents\nWHERE search_vector @@ to_tsquery('english', 'database & performance');\n-- PostgreSQL Performance Tuning\n\n-- Plain to tsquery (no operators)\nSELECT title FROM documents\nWHERE search_vector @@ plainto_tsquery('english', 'text search');\n-- Full-Text Search in PostgreSQL\n\n-- Search with phrase matching\nSELECT title FROM documents\nWHERE search_vector @@ phraseto_tsquery('english', 'built-in text search');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranking results"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\n    title,\n    ts_rank(search_vector, to_tsquery('english', 'database | postgresql')) AS rank\nFROM documents\nWHERE search_vector @@ to_tsquery('english', 'database | postgresql')\nORDER BY rank DESC;\n\n-- Normalized rank (0 to 1)\nSELECT\n    title,\n    ts_rank_cd(search_vector, to_tsquery('english', 'jsonb')) AS cover_density_rank\nFROM documents\nWHERE search_vector @@ to_tsquery('english', 'jsonb');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Highlighting"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\n    title,\n    ts_headline('english', body, to_tsquery('english', 'postgresql'),\n                'StartSel = <mark>, StopSel = </mark>') AS highlighted\nFROM documents\nWHERE search_vector @@ to_tsquery('english', 'postgresql');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic tsvector with triggers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION documents_search_update() RETURNS trigger AS $$\nBEGIN\n    NEW.search_vector := to_tsvector('english', NEW.title || ' ' || NEW.body);\n    RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_documents_search\n    BEFORE INSERT OR UPDATE ON documents\n    FOR EACH ROW\n    EXECUTE FUNCTION documents_search_update();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GIN index for full-text search"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE INDEX idx_documents_search ON documents USING gin(search_vector);\n\n-- Dictionary configuration\n-- 'english', 'simple', 'french', 'german' — language-specific stemming\n-- Custom dictionaries: thesaurus, stop words, Ispell\n"
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
        children: "CREATE TABLE sales (\n    id SERIAL,\n    sale_date DATE NOT NULL,\n    amount DECIMAL(10, 2),\n    customer_id INTEGER\n) PARTITION BY RANGE (sale_date);\n\nCREATE TABLE sales_2024_q1 PARTITION OF sales\n    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');\nCREATE TABLE sales_2024_q2 PARTITION OF sales\n    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');\nCREATE TABLE sales_2024_q3 PARTITION OF sales\n    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');\nCREATE TABLE sales_2024_q4 PARTITION OF sales\n    FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');\n\n-- Partition pruning: only scans relevant partitions\nEXPLAIN SELECT * FROM sales WHERE sale_date = '2024-05-15';\n-- Seq Scan on sales_2024_q2 (prunes other partitions)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "List partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE customers (\n    id SERIAL,\n    name VARCHAR(100),\n    country_code CHAR(2),\n    created_at DATE\n) PARTITION BY LIST (country_code);\n\nCREATE TABLE customers_us PARTITION OF customers\n    FOR VALUES IN ('US');\nCREATE TABLE customers_eu PARTITION OF customers\n    FOR VALUES IN ('GB', 'DE', 'FR', 'IT', 'ES');\nCREATE TABLE customers_apac PARTITION OF customers\n    FOR VALUES IN ('JP', 'KR', 'AU', 'SG', 'IN');\nCREATE TABLE customers_other PARTITION OF customers\n    DEFAULT;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE sessions (\n    session_id UUID NOT NULL,\n    user_id INTEGER,\n    created_at TIMESTAMP,\n    payload JSONB\n) PARTITION BY HASH (session_id);\n\nCREATE TABLE sessions_0 PARTITION OF sessions\n    FOR VALUES WITH (MODULUS 4, REMAINDER 0);\nCREATE TABLE sessions_1 PARTITION OF sessions\n    FOR VALUES WITH (MODULUS 4, REMAINDER 1);\nCREATE TABLE sessions_2 PARTITION OF sessions\n    FOR VALUES WITH (MODULUS 4, REMAINDER 2);\nCREATE TABLE sessions_3 PARTITION OF sessions\n    FOR VALUES WITH (MODULUS 4, REMAINDER 3);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sub-partitioning"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE measurements (\n    id SERIAL,\n    sensor_id INTEGER,\n    reading DECIMAL(10, 2),\n    recorded_at TIMESTAMP\n) PARTITION BY RANGE (recorded_at);\n\nCREATE TABLE measurements_2024 PARTITION OF measurements\n    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01')\n    PARTITION BY RANGE (sensor_id);\n\nCREATE TABLE measurements_2024_s1 PARTITION OF measurements_2024\n    FOR VALUES FROM (1) TO (100);\nCREATE TABLE measurements_2024_s2 PARTITION OF measurements_2024\n    FOR VALUES FROM (100) TO (200);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition management"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Detach partition for archiving\nALTER TABLE sales DETACH PARTITION sales_2024_q1;\n\n-- Attach existing table as partition\nALTER TABLE sales ATTACH PARTITION sales_new\n    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');\n\n-- Drop partition (fast, no vacuum needed)\nDROP TABLE sales_2024_q1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-extensions",
      children: "10.4 Extensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extensions add functionality to PostgreSQL."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- List installed extensions\nSELECT * FROM pg_available_extensions;\nSELECT * FROM pg_extension;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "uuid-ossp"
      }), " (generate UUIDs):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\n\nSELECT uuid_generate_v4();           -- Random UUID\nSELECT uuid_generate_v1();           -- Time-based UUID\nSELECT uuid_generate_v1mc();         -- Time-based with random MAC\n\nCREATE TABLE users (\n    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n    name VARCHAR(100)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pgcrypto"
      }), " (encryption and hashing):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS pgcrypto;\n\n-- Password hashing\nUPDATE users SET password_hash = crypt('user_password', gen_salt('bf'));\n\n-- Password verification\nSELECT * FROM users\nWHERE password_hash = crypt('login_password', password_hash);\n\n-- Encryption\nSELECT encrypt('sensitive_data', 'encryption_key', 'aes');\nSELECT decrypt(encrypted_data, 'encryption_key', 'aes');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pg_trgm"
      }), " (trigram text search):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS pg_trgm;\n\n-- Trigram index for fuzzy text search\nCREATE INDEX idx_products_name_trgm ON products USING gin(name gin_trgm_ops);\n\n-- Similarity search\nSELECT name, similarity(name, 'laptop') AS sim\nFROM products\nWHERE name % 'laptop'              -- similarity > pg_trgm.similarity_threshold\nORDER BY sim DESC;\n\n-- Show me the closest\nSELECT name, show_trgm(name) FROM products WHERE id = 1;\n\n-- Word similarity (word boundaries)\nSELECT word_similarity('postgre', 'PostgreSQL');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PostGIS"
      }), " (geospatial):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS postgis;\n\nCREATE TABLE locations (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(200),\n    geom GEOMETRY(Point, 4326)  -- WGS 84 lat/lng\n);\n\nINSERT INTO locations (name, geom) VALUES\n    ('New York', ST_SetSRID(ST_MakePoint(-74.006, 40.7128), 4326)),\n    ('London', ST_SetSRID(ST_MakePoint(-0.1278, 51.5074), 4326)),\n    ('Tokyo', ST_SetSRID(ST_MakePoint(139.6917, 35.6895), 4326));\n\n-- Distance query\nSELECT name, ST_Distance(\n    geom,\n    ST_SetSRID(ST_MakePoint(-73.9352, 40.7306), 4326)  -- Times Square\n) AS distance_degrees\nFROM locations\nORDER BY distance_degrees\nLIMIT 5;\n\n-- Spatial index\nCREATE INDEX idx_locations_geom ON locations USING gist(geom);\n\n-- Within bounding box\nSELECT * FROM locations\nWHERE geom && ST_MakeEnvelope(-80, 30, -70, 45, 4326);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "hstore"
      }), " (key-value store, predecessor to JSONB):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION IF NOT EXISTS hstore;\n\nCREATE TABLE config (\n    id SERIAL PRIMARY KEY,\n    settings hstore\n);\n\nINSERT INTO config (settings) VALUES\n    ('theme => dark, language => en, notifications => on');\n\n-- Query hstore\nSELECT settings -> 'theme' FROM config;\nSELECT * FROM config WHERE settings ? 'language';\nSELECT * FROM config WHERE settings @> 'notifications => on';\n"
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
        children: "CREATE FUNCTION get_products_by_category(cat_id INTEGER)\nRETURNS TABLE(id INTEGER, name VARCHAR, price DECIMAL)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    RETURN QUERY\n    SELECT p.id, p.name, p.price\n    FROM products p\n    WHERE p.category_id = cat_id\n    ORDER BY p.name;\nEND;\n$$;\n\n-- Usage\nSELECT * FROM get_products_by_category(5);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functions with OUT parameters"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION get_order_summary(order_id INTEGER,\n    OUT customer_name VARCHAR,\n    OUT total DECIMAL,\n    OUT item_count INTEGER)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    SELECT c.name, o.total, COUNT(oi.id)\n    INTO customer_name, total, item_count\n    FROM orders o\n    JOIN customers c ON c.id = o.customer_id\n    JOIN order_items oi ON oi.order_id = o.id\n    WHERE o.id = order_id\n    GROUP BY c.name, o.total;\nEND;\n$$;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Procedures"
      }), " (PostgreSQL 11+):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE PROCEDURE transfer_funds(\n    from_account INTEGER,\n    to_account INTEGER,\n    amount DECIMAL\n)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    -- Check balance\n    IF (SELECT balance FROM accounts WHERE id = from_account) < amount THEN\n        RAISE EXCEPTION 'Insufficient balance in account %', from_account;\n    END IF;\n\n    -- Perform transfer\n    UPDATE accounts SET balance = balance - amount WHERE id = from_account;\n    UPDATE accounts SET balance = balance + amount WHERE id = to_account;\n\n    -- Log transaction\n    INSERT INTO transfer_log (from_account, to_account, amount)\n    VALUES (from_account, to_account, amount);\nEND;\n$$;\n\n-- Execute procedure\nCALL transfer_funds(1, 2, 100.00);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Triggers"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION audit_orders()\nRETURNS TRIGGER\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    IF TG_OP = 'INSERT' THEN\n        INSERT INTO audit_log (table_name, action, new_data)\n        VALUES ('orders', 'INSERT', row_to_json(NEW)::text);\n        RETURN NEW;\n    ELSIF TG_OP = 'UPDATE' THEN\n        INSERT INTO audit_log (table_name, action, old_data, new_data)\n        VALUES ('orders', 'UPDATE', row_to_json(OLD)::text, row_to_json(NEW)::text);\n        RETURN NEW;\n    ELSIF TG_OP = 'DELETE' THEN\n        INSERT INTO audit_log (table_name, action, old_data)\n        VALUES ('orders', 'DELETE', row_to_json(OLD)::text);\n        RETURN OLD;\n    END IF;\nEND;\n$$;\n\nCREATE TRIGGER trg_orders_audit\n    AFTER INSERT OR UPDATE OR DELETE ON orders\n    FOR EACH ROW\n    EXECUTE FUNCTION audit_orders();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION safe_transfer(from_id INTEGER, to_id INTEGER, amount DECIMAL)\nRETURNS TEXT\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    PERFORM transfer_funds(from_id, to_id, amount);\n    RETURN 'Success';\nEXCEPTION\n    WHEN insufficient_balance THEN\n        RETURN 'Insufficient balance';\n    WHEN OTHERS THEN\n        RETURN 'Error: ' || SQLERRM;\nEND;\n$$;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cursors"
      }), " for processing large result sets in batches:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION process_large_table()\nRETURNS VOID\nLANGUAGE plpgsql\nAS $$\nDECLARE\n    cur CURSOR FOR SELECT id, status FROM orders WHERE status = 'pending';\n    rec RECORD;\n    batch_count INTEGER := 0;\nBEGIN\n    OPEN cur;\n    LOOP\n        FETCH cur INTO rec;\n        EXIT WHEN NOT FOUND;\n\n        UPDATE orders SET status = 'processing' WHERE id = rec.id;\n        batch_count := batch_count + 1;\n\n        -- Commit every 1000 rows\n        IF batch_count % 1000 = 0 THEN\n            COMMIT;\n        END IF;\n    END LOOP;\n    CLOSE cur;\nEND;\n$$;\n"
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
        children: "WITH RECURSIVE org_chart AS (\n    -- Base case: CEO\n    SELECT id, name, manager_id, 1 AS level, name::TEXT AS path\n    FROM employees\n    WHERE manager_id IS NULL\n\n    UNION ALL\n\n    -- Recursive step: direct reports\n    SELECT e.id, e.name, e.manager_id, oc.level + 1,\n           oc.path || ' -> ' || e.name\n    FROM employees e\n    JOIN org_chart oc ON e.manager_id = oc.id\n)\nSELECT * FROM org_chart ORDER BY path;\n\n-- Tree traversal for categories\nWITH RECURSIVE category_tree AS (\n    SELECT id, name, parent_id, name AS full_path\n    FROM categories WHERE parent_id IS NULL\n\n    UNION ALL\n\n    SELECT c.id, c.name, c.parent_id,\n           ct.full_path || ' / ' || c.name\n    FROM categories c\n    JOIN category_tree ct ON c.parent_id = ct.id\n)\nSELECT * FROM category_tree ORDER BY full_path;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lateral joins"
      }), " (subqueries that can reference columns from preceding FROM items):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Top 3 products per category\nSELECT c.name AS category, p.name AS product, p.price\nFROM categories c\nCROSS JOIN LATERAL (\n    SELECT name, price\n    FROM products\n    WHERE category_id = c.id\n    ORDER BY price DESC\n    LIMIT 3\n) p;\n\n-- Nearest locations\nSELECT u.name, l.name AS nearest_location\nFROM users u\nCROSS JOIN LATERAL (\n    SELECT name, geom\n    FROM locations\n    ORDER BY u.geom <-> geom\n    LIMIT 1\n) l;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom aggregates"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE FUNCTION int_array_accum(s INTEGER[], n INTEGER)\nRETURNS INTEGER[]\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    RETURN s || n;\nEND;\n$$;\n\nCREATE AGGREGATE array_agg_custom(INTEGER) (\n    SFUNC = int_array_accum,\n    STYPE = INTEGER[],\n    INITCOND = '{}'\n);\n\n-- Usage\nSELECT department_id, array_agg_custom(employee_id ORDER BY name)\nFROM employees\nGROUP BY department_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Foreign Data Wrappers (FDW)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE EXTENSION postgres_fdw;\n\n-- Create foreign server\nCREATE SERVER remote_db\n    FOREIGN DATA WRAPPER postgres_fdw\n    OPTIONS (host 'remote.example.com', port '5432', dbname 'analytics');\n\n-- User mapping\nCREATE USER MAPPING FOR local_user\n    SERVER remote_db\n    OPTIONS (user 'remote_user', password 'secret');\n\n-- Foreign table\nCREATE FOREIGN TABLE remote_orders (\n    id INTEGER,\n    customer_id INTEGER,\n    total DECIMAL(10, 2),\n    order_date DATE\n)\nSERVER remote_db\nOPTIONS (schema_name 'public', table_name 'orders');\n\n-- Query remote data as if local\nSELECT * FROM remote_orders WHERE order_date > '2024-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Full-text search in TypeScript\nclass FullTextSearch {\n    private documents: Map<number, string> = new Map();\n\n    add(id: number, content: string): void {\n        this.documents.set(id, content.toLowerCase());\n    }\n\n    search(query: string): { id: number; score: number }[] {\n        const terms = query.toLowerCase().split(/\\s+/);\n        const results: { id: number; score: number }[] = [];\n\n        for (const [id, content] of this.documents) {\n            const score = terms.reduce((acc, term) => {\n                const regex = new RegExp(term, \"g\");\n                const matches = content.match(regex);\n                return acc + (matches ? matches.length : 0);\n            }, 0);\n\n            if (score > 0) {\n                results.push({ id, score });\n            }\n        }\n\n        return results.sort((a, b) => b.score - a.score);\n    }\n}\n\n// JSONB-like operations\nclass JsonStore {\n    private data: Map<number, Record<string, any>> = new Map();\n\n    set(id: number, obj: Record<string, any>): void {\n        this.data.set(id, obj);\n    }\n\n    get(id: number, path: string): any {\n        const obj = this.data.get(id);\n        if (!obj) return undefined;\n        return path.split(\".\").reduce((acc, key) => acc?.[key], obj);\n    }\n\n    contains(pathValue: Record<string, any>): number[] {\n        return [...this.data.entries()]\n            .filter(([_, obj]) => this.matches(obj, pathValue))\n            .map(([id]) => id);\n    }\n\n    private matches(obj: any, pattern: Record<string, any>): boolean {\n        for (const [key, value] of Object.entries(pattern)) {\n            if (typeof value === \"object\" && value !== null) {\n                if (!this.matches(obj[key], value)) return false;\n            } else if (obj[key] !== value) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n"
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
            children: "Design a minimal, well-typed function that demonstrates PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
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
            children: "Describe a production bug caused by misunderstanding PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL from 10 users to 10 million?"
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
            children: "Walk through how you would test a component that depends on PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
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
            children: "How would you make an implementation of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL that is production-quality."
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
        children: "The time complexity of the standard approach to PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL example code."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
          children: "Startup"
        }), ": a small team uses PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL to the business outcome, not just the code."]
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