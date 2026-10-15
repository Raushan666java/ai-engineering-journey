"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2402],{

/***/ 9389
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_01_sql_basics_md_bc6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-01-sql-basics-md-bc6.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_01_sql_basics_md_bc6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/01-sql-basics","title":"SQL Basics — SELECT, WHERE, ORDER BY, DML","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/01-sql-basics.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/01-sql-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/01-sql-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"id":"01-sql-basics","slug":"/ai-engineering-placement/02-sql-and-databases/01-sql-basics","title":"SQL Basics — SELECT, WHERE, ORDER BY, DML","sidebar_label":"SQL Basics — SELECT, WHERE, ORDER BY, DML","sidebar_position":26},"sidebar":"placementSidebar","previous":{"title":"02 — SQL & Databases","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases"},"next":{"title":"Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/01-sql-basics.md


const frontMatter = {
	id: '01-sql-basics',
	slug: '/ai-engineering-placement/02-sql-and-databases/01-sql-basics',
	title: 'SQL Basics — SELECT, WHERE, ORDER BY, DML',
	sidebar_label: 'SQL Basics — SELECT, WHERE, ORDER BY, DML',
	sidebar_position: 26
};
const contentTitle = 'SQL Basics — SELECT, WHERE, ORDER BY, DML';

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
  "value": "1.1 SELECT Queries",
  "id": "11-select-queries",
  "level": 2
}, {
  "value": "1.2 WHERE Clauses",
  "id": "12-where-clauses",
  "level": 2
}, {
  "value": "1.3 Sorting &amp; Limiting",
  "id": "13-sorting--limiting",
  "level": 2
}, {
  "value": "1.4 NULL Handling",
  "id": "14-null-handling",
  "level": 2
}, {
  "value": "1.5 INSERT",
  "id": "15-insert",
  "level": 2
}, {
  "value": "1.6 UPDATE &amp; DELETE",
  "id": "16-update--delete",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
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
  "value": "True/False",
  "id": "truefalse",
  "level": 3
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 3
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 3
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "1.7 Data Definition Language (DDL)",
  "id": "17-data-definition-language-ddl",
  "level": 2
}, {
  "value": "1.8 Constraints",
  "id": "18-constraints",
  "level": 2
}, {
  "value": "1.9 Working with Indexes",
  "id": "19-working-with-indexes",
  "level": 2
}, {
  "value": "1.10 Transactions",
  "id": "110-transactions",
  "level": 2
}, {
  "value": "1.11 Common Pitfalls",
  "id": "111-common-pitfalls",
  "level": 2
}, {
  "value": "1.12 Real-World Query Examples",
  "id": "112-real-world-query-examples",
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
  "id": "truefalse-1",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank-1",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions-1",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions-1",
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
        id: "sql-basics--select-where-order-by-dml",
        children: "SQL Basics — SELECT, WHERE, ORDER BY, DML"
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
            children: "Query data with SELECT and filter rows with WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort results with ORDER BY and limit with LIMIT/OFFSET"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert new rows with INSERT and update data with UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete rows with DELETE and understand TRUNCATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use WHERE operators: =, <, IN, BETWEEN, LIKE, IS NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine conditions with AND, OR, NOT and precedence"
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
      children: "Understanding sql basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how sql basics works in practice."
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT, FROM, *, column aliases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE Clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "comparison, IN, BETWEEN, LIKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting & Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY, ASC/DESC, LIMIT, OFFSET"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IS NULL, IS NOT NULL, COALESCE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML — INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT INTO, multi-row, DEFAULT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML — UPDATE & DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE SET, DELETE, TRUNCATE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[SELECT] --> B[FROM table]\r\n    B --> C[WHERE conditions]\r\n    C --> D[ORDER BY]\r\n    D --> E[LIMIT/OFFSET]\r\n    F[DML] --> G[INSERT]\r\n    F --> H[UPDATE]\r\n    F --> I[DELETE]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-select-queries",
      children: "1.1 SELECT Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SELECT retrieves rows from a table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT * FROM employees;\r\nSELECT first_name, last_name, salary FROM employees;\r\nSELECT first_name AS \"First Name\", salary * 12 AS annual FROM employees;\r\nSELECT DISTINCT department_id FROM employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python simulation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\r\nconn = sqlite3.connect(\":memory:\")\r\ncur = conn.cursor()\r\ncur.execute(\"CREATE TABLE emp (id, name, salary, dept)\")\r\ncur.executemany(\"INSERT INTO emp VALUES (?,?,?,?)\", [\r\n    (1, \"Alice\", 75000, \"Eng\"), (2, \"Bob\", 68000, \"Eng\"),\r\n    (3, \"Charlie\", 82000, \"Sales\"),\r\n])\r\ncur.execute(\"SELECT name, salary FROM emp WHERE salary > 70000\")\r\nfor row in cur.fetchall():\r\n    print(row)\r\n\r\n## ('Alice', 75000) ('Charlie', 82000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-where-clauses",
      children: "1.2 WHERE Clauses"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT * FROM products WHERE price > 100;\r\nSELECT * FROM products WHERE price = 49.99;\r\nSELECT * FROM products WHERE price <> 0;\r\nSELECT * FROM employees WHERE dept_id IN (3, 5, 7);\r\nSELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';\r\nSELECT * FROM customers WHERE email LIKE '%@gmail.com';\r\nSELECT * FROM employees WHERE name LIKE '%son%';\r\nSELECT * FROM products WHERE sku LIKE 'A___';\r\nSELECT * FROM employees WHERE dept_id = 3 AND salary > 70000;\r\nSELECT * FROM products WHERE category = 'Electronics' OR category = 'Books';\r\nSELECT * FROM orders WHERE NOT status = 'Cancelled';\r\nSELECT * FROM employees WHERE (dept_id = 3 OR dept_id = 5) AND salary > 60000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-sorting--limiting",
      children: "1.3 Sorting & Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT name, price FROM products ORDER BY price;\r\nSELECT name, price FROM products ORDER BY price DESC;\r\nSELECT last_name, first_name FROM employees ORDER BY salary DESC, last_name;\r\nSELECT * FROM products ORDER BY price DESC LIMIT 10;\r\nSELECT * FROM products ORDER BY price DESC LIMIT 10 OFFSET 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "conn = sqlite3.connect(\":memory:\")\r\ncur = conn.cursor()\r\ncur.execute(\"CREATE TABLE scores (name, score)\")\r\ncur.executemany(\"INSERT INTO scores VALUES (?,?)\", [(\"Alice\",95),(\"Bob\",87),(\"Charlie\",92)])\r\ncur.execute(\"SELECT name, score FROM scores ORDER BY score DESC LIMIT 2\")\r\nfor r in cur.fetchall():\r\n    print(f\"{r[0]}: {r[1]}\")\r\n\r\n## Alice: 95, Charlie: 92\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-null-handling",
      children: "1.4 NULL Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT * FROM employees WHERE manager_id IS NULL;\r\nSELECT * FROM customers WHERE email IS NOT NULL;\r\nSELECT name, COALESCE(phone, email, 'No contact') AS contact FROM customers;\r\nSELECT * FROM products WHERE price < 100;  -- excludes NULL prices\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "conn = sqlite3.connect(\":memory:\")\r\ncur = conn.cursor()\r\ncur.execute(\"CREATE TABLE users (id, name, email)\")\r\ncur.execute(\"INSERT INTO users VALUES (1, 'Alice', 'a@test.com')\")\r\ncur.execute(\"INSERT INTO users VALUES (2, 'Bob', NULL)\")\r\ncur.execute(\"SELECT name, COALESCE(email, 'No email') FROM users\")\r\nfor r in cur.fetchall():\r\n    print(f\"{r[0]}: {r[1]}\")\r\n\r\n## Alice: a@test.com\r\n\r\n## Bob: No email\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-insert",
      children: "1.5 INSERT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "INSERT INTO employees (first_name, last_name, salary, dept_id)\r\nVALUES ('Eve', 'Wilson', 65000, 3);\r\n\r\nINSERT INTO departments (name, location) VALUES\r\n    ('Engineering', 'Building A'),\r\n    ('Sales', 'Building B');\r\n\r\nINSERT INTO high_value_customers (id, name, total)\r\nSELECT id, name, total_spent FROM customers WHERE total_spent > 10000;\r\n\r\nINSERT INTO users (id, name) VALUES (1, 'Alice')\r\nON CONFLICT(id) DO UPDATE SET name = EXCLUDED.name;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-update--delete",
      children: "1.6 UPDATE & DELETE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "UPDATE employees SET salary = 80000 WHERE employee_id = 5;\r\nUPDATE products SET price = price * 1.1 WHERE category = 'Electronics';\r\nDELETE FROM employees WHERE employee_id = 10;\r\nDELETE FROM logs;          -- slow for large tables\r\nTRUNCATE TABLE temp_data;  -- fast, DDL, non-recoverable\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "conn = sqlite3.connect(\":memory:\")\r\ncur = conn.cursor()\r\ncur.execute(\"CREATE TABLE emp(id, name, salary)\")\r\ncur.executemany(\"INSERT INTO emp VALUES (?,?,?)\", [(1,\"Alice\",50000),(2,\"Bob\",60000)])\r\ncur.execute(\"UPDATE emp SET salary = 55000 WHERE id = 1\")\r\nconn.commit()\r\nprint(f\"Updated: {cur.rowcount} rows\")\r\ncur.execute(\"DELETE FROM emp WHERE salary < 55000\")\r\nprint(f\"Deleted: {cur.rowcount} rows\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import sqlite3 from \"sqlite3\";\r\nimport { open } from \"sqlite\";\r\n\r\nasync function query() {\r\n    const db = await open({ filename: \":memory:\", driver: sqlite3.Database });\r\n    await db.exec(\"CREATE TABLE emp (id, name, salary)\");\r\n    await db.run(\"INSERT INTO emp VALUES (1, 'Alice', 75000)\");\r\n    const rows = await db.all(\"SELECT name, salary FROM emp WHERE salary > 70000\");\r\n    console.log(rows);\r\n    await db.close();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a SQL database like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "library card catalog system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tables"
        }), " = Bookshelves — each shelf holds a specific category (employees, products, orders)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rows"
        }), " = Individual books on the shelf — each row is one record, like a single employee or product."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Columns"
        }), " = Book attributes — title, author, year, genre. Each column stores one type of information about every book."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SELECT"
        }), " = Asking the librarian \"show me all books by Author X\" — you specify what you want to see."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHERE"
        }), " = Filtering criteria — \"only books published after 2020\" narrows down the results."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INSERT"
        }), " = Adding a new book to the shelf."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPDATE"
        }), " = Editing a book's record card (changing the author's address)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DELETE"
        }), " = Removing a book from the shelf entirely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This helps because databases are fundamentally organized storage, just like a library. The card catalog (indexes) helps you find books quickly without scanning every shelf, and SQL is the language you use to talk to the librarian."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SELECT retrieves data; WHERE filters rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND has higher precedence than OR — use parentheses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ORDER BY sorts results; ASC default, DESC for descending"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIMIT restricts rows; OFFSET for pagination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NULL is not equal to anything — use IS NULL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INSERT adds rows; multi-row VALUES is faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UPDATE modifies rows; always include WHERE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DELETE is DML (can rollback); TRUNCATE is DDL (cannot)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "COALESCE returns first non-null value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIKE uses % (any) and _ (one char) wildcards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List column names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT *"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column LIKE '%pattern%'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column = '%pattern%'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column IS NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "column = NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIMIT 10 OFFSET 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fetching all rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update caution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE without WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-row insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single INSERT multiple VALUES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple single INSERTs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Order of SQL query execution?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT. Explains why aliases can't be used in WHERE."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: DELETE vs TRUNCATE?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "DELETE: DML, rollback, triggers, slower, WHERE clause. TRUNCATE: DDL, no rollback, no triggers, fast, resets auto-increment."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: NULL behavior in SQL?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "NULL means unknown. NULL = NULL yields NULL (not True). Use IS NULL/IS NOT NULL. Arithmetic with NULL yields NULL. Aggregates ignore NULL (except COUNT(*))."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: LIKE '%test%' matches?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "% matches any sequence; _ matches one char. %test% matches any string containing test. test% matches strings starting with test."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: CHAR vs VARCHAR?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "CHAR(n): fixed-length, padded with spaces. VARCHAR(n): variable-length up to n. CHAR faster for fixed codes; VARCHAR space-efficient for variable text."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Pagination in SQL?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "LIMIT 20 OFFSET 40 for page 3 (20 items/page). Keyset pagination (WHERE id > last_id) is more efficient for large datasets than OFFSET."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What does COALESCE do?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns first non-null value: COALESCE(NULL, NULL, 'default') returns 'default'. Useful for NULL handling and providing defaults."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Rename columns in output?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use AS aliases: SELECT first_name AS \"First Name\". Aliases work in ORDER BY but not WHERE (execution order)."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: IN vs EXISTS?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "IN checks value in list/subquery. EXISTS checks if subquery returns rows. EXISTS can short-circuit and handles NULLs better, often faster."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: Insert and get generated ID?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PostgreSQL: INSERT ... RETURNING id. MySQL: LAST_INSERT_ID(). SQLite: last_insert_rowid(). Python: cur.lastrowid."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which clause filters rows before grouping? a) HAVING b) WHERE c) FILTER d) GROUP BY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) WHERE"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": LIKE 'A_' matches? a) starts with A b) A + 1 char c) A + 0+ chars d) any A"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) A followed by exactly 1 character"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Check for NULL? a) = NULL b) IS NULL c) == NULL d) EQUALS NULL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) IS NULL"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": True about TRUNCATE? a) Can rollback b) Fires triggers c) DDL d) WHERE clause"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) DDL statement"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": SELECT 5 + NULL returns? a) 5 b) NULL c) 0 d) Error"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s01-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) NULL"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding sql and databases is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to sql and databases.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": sql and databases concepts are independent of each other.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — Most concepts build on each other and are interconnected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 5"
      }), ": Real-world applications often combine multiple concepts from this chapter.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Production systems use combinations of these fundamental concepts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 1"
      }), ": The key concept in this chapter is ________."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 2"
      }), ": In sql and databases, the time complexity of the basic operation is ________."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1"
      }), ": How would you apply the concepts from this chapter in a real AI engineering project?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output 1"
      }), ": What is the time complexity of the main algorithm discussed in this chapter?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Query all customers from 2024 orders sorted by date descending.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Insert 3 new products into a products table.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Find employees with salary 50k-100k in Engineering or Sales, ordered by salary desc.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Give 10% bonus to dept 5 employees. Delete employees hired before 2000.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Paginate products table (25/page, page 4, by price).\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Convert Python list comprehension to SQL: [o for o in orders if o.status=='pending' and o.amount>100][:20]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-data-definition-language-ddl",
      children: "1.7 Data Definition Language (DDL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDL creates and modifies database structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- CREATE TABLE\r\nCREATE TABLE employees (\r\n    employee_id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n    first_name VARCHAR(50) NOT NULL,\r\n    last_name VARCHAR(50) NOT NULL,\r\n    email VARCHAR(100) UNIQUE NOT NULL,\r\n    hire_date DATE NOT NULL DEFAULT CURRENT_DATE,\r\n    salary DECIMAL(10,2) CHECK (salary > 0),\r\n    department_id INTEGER,\r\n    FOREIGN KEY (department_id) REFERENCES departments(id)\r\n);\r\n\r\n-- ALTER TABLE\r\nALTER TABLE employees ADD COLUMN phone VARCHAR(20);\r\nALTER TABLE employees RENAME COLUMN phone TO contact_number;\r\nALTER TABLE employees DROP COLUMN contact_number;  -- SQLite: not supported\r\nALTER TABLE employees RENAME TO staff;\r\n\r\n-- DROP TABLE\r\nDROP TABLE IF EXISTS temp_data;\r\n\r\n-- CREATE INDEX\r\nCREATE INDEX idx_employees_dept ON employees(department_id);\r\nCREATE UNIQUE INDEX idx_employees_email ON employees(email);\r\nCREATE INDEX idx_employees_name ON employees(last_name, first_name);\r\n\r\n-- CREATE VIEW\r\nCREATE VIEW high_earners AS\r\nSELECT first_name, last_name, salary, department_id\r\nFROM employees\r\nWHERE salary > 80000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-constraints",
      children: "1.8 Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- NOT NULL: column must have a value\r\nCREATE TABLE products (\r\n    id INTEGER PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    price DECIMAL(10,2) NOT NULL\r\n);\r\n\r\n-- UNIQUE: all values in column must be different\r\nCREATE TABLE users (\r\n    id INTEGER PRIMARY KEY,\r\n    username VARCHAR(50) UNIQUE NOT NULL,\r\n    email VARCHAR(100) UNIQUE\r\n);\r\n\r\n-- PRIMARY KEY: NOT NULL + UNIQUE (one per table)\r\nCREATE TABLE orders (\r\n    order_id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n    customer_id INTEGER NOT NULL,\r\n    order_date DATE DEFAULT CURRENT_DATE\r\n);\r\n\r\n-- FOREIGN KEY: references primary key in another table\r\nCREATE TABLE order_items (\r\n    item_id INTEGER PRIMARY KEY,\r\n    order_id INTEGER NOT NULL,\r\n    product_id INTEGER NOT NULL,\r\n    quantity INTEGER NOT NULL,\r\n    FOREIGN KEY (order_id) REFERENCES orders(order_id)\r\n        ON DELETE CASCADE,\r\n    FOREIGN KEY (product_id) REFERENCES products(product_id)\r\n        ON DELETE RESTRICT\r\n);\r\n\r\n-- CHECK: validates data before insert/update\r\nCREATE TABLE accounts (\r\n    id INTEGER PRIMARY KEY,\r\n    balance DECIMAL(10,2) CHECK (balance >= 0),\r\n    account_type VARCHAR(20) CHECK (account_type IN ('savings', 'checking', 'credit'))\r\n);\r\n\r\n-- DEFAULT: provides default value\r\nCREATE TABLE logs (\r\n    id INTEGER PRIMARY KEY,\r\n    message TEXT,\r\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\r\n    severity INTEGER DEFAULT 1\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-working-with-indexes",
      children: "1.9 Working with Indexes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indexes speed up data retrieval at the cost of slower writes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- When to use indexes:\r\n-- 1. Columns used frequently in WHERE clauses\r\n-- 2. Columns used in JOIN conditions\r\n-- 3. Columns used in ORDER BY\r\n-- 4. Columns with high cardinality (many unique values)\r\n\r\n-- Creating indexes\r\nCREATE INDEX idx_orders_customer ON orders(customer_id);\r\nCREATE INDEX idx_orders_date ON orders(order_date);\r\n\r\n-- Composite indexes (column order matters!)\r\nCREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);\r\n-- This index helps: WHERE customer_id = ? AND order_date BETWEEN ? AND ?\r\n-- This index does NOT help: WHERE order_date BETWEEN ? AND ?\r\n\r\n-- Index analysis (PostgreSQL)\r\n-- EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 5;\r\n\r\n-- Partial indexes\r\nCREATE INDEX idx_active_employees ON employees(employee_id)\r\nWHERE status = 'active';\r\n\r\n-- Covering indexes (include all needed columns)\r\nCREATE INDEX idx_employee_names ON employees(last_name, first_name)\r\nINCLUDE (email, department_id);\r\n\r\n-- View existing indexes\r\n-- PostgreSQL: SELECT * FROM pg_indexes WHERE tablename = 'employees';\r\n-- SQLite: .indexes employees\r\n-- MySQL: SHOW INDEX FROM employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "110-transactions",
      children: "1.10 Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transactions ensure data consistency with ACID properties."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Basic transaction\r\nBEGIN TRANSACTION;\r\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\r\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\r\nCOMMIT;  -- or ROLLBACK;\r\n\r\n-- Savepoints for partial rollback\r\nBEGIN;\r\nINSERT INTO logs (message) VALUES ('Step 1');\r\nSAVEPOINT sp1;\r\nINSERT INTO logs (message) VALUES ('Step 2');\r\nROLLBACK TO sp1;  -- undo Step 2, keep Step 1\r\nCOMMIT;\r\n\r\n-- Transaction isolation levels (PostgreSQL)\r\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\r\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\r\n\r\n-- ACID properties:\r\n-- Atomicity: all or nothing\r\n-- Consistency: data remains valid\r\n-- Isolation: concurrent transactions don't interfere\r\n-- Durability: committed changes persist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\r\n\r\nconn = sqlite3.connect(\"example.db\")\r\ntry:\r\n    with conn:  # auto-commit/rollback\r\n        conn.execute(\"UPDATE accounts SET balance = balance - 100 WHERE id = 1\")\r\n        conn.execute(\"UPDATE accounts SET balance = balance + 100 WHERE id = 2\")\r\nexcept sqlite3.Error as e:\r\n    print(f\"Transaction failed: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-common-pitfalls",
      children: "1.11 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Pitfall 1: SELECT * in production\r\nSELECT * FROM employees;  -- BAD: returns all columns, order-dependent\r\nSELECT id, name, email FROM employees;  -- GOOD: explicit columns\r\n\r\n-- Pitfall 2: Missing WHERE in UPDATE/DELETE\r\nUPDATE employees SET salary = 50000;  -- updates ALL rows!\r\nDELETE FROM employees;  -- deletes ALL rows!\r\n\r\n-- Pitfall 3: NULL comparisons\r\nSELECT * FROM employees WHERE salary = NULL;  -- WRONG: returns nothing\r\nSELECT * FROM employees WHERE salary IS NULL;  -- CORRECT\r\n\r\n-- Pitfall 4: String comparisons with trailing spaces\r\nSELECT * FROM users WHERE name = 'Alice';  -- may not match 'Alice '\r\n\r\n-- Pitfall 5: Implicit type conversion\r\nSELECT * FROM orders WHERE order_date = '2024-01-01';\r\n-- Better: WHERE order_date = DATE '2024-01-01'\r\n\r\n-- Pitfall 6: Not understanding execution order\r\nSELECT id, salary * 1.1 AS new_salary\r\nFROM employees\r\n-- WHERE new_salary > 80000  -- WRONG: alias not yet available\r\nHAVING new_salary > 80000  -- OK in some DBs (not standard)\r\nORDER BY new_salary;  -- OK: ORDER BY can use alias\r\n\r\n-- Pitfall 7: Forgetting to COMMIT transactions\r\nBEGIN;\r\nUPDATE inventory SET quantity = quantity - 1 WHERE product_id = 10;\r\n-- Missing COMMIT: other sessions see old data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-real-world-query-examples",
      children: "1.12 Real-World Query Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Customer order summary\r\nSELECT\r\n    c.customer_id,\r\n    c.name,\r\n    COUNT(o.order_id) AS total_orders,\r\n    COALESCE(SUM(o.total_amount), 0) AS total_spent,\r\n    MAX(o.order_date) AS last_order_date,\r\n    CASE\r\n        WHEN COUNT(o.order_id) = 0 THEN 'New'\r\n        WHEN MAX(o.order_date) >= DATE('now', '-90 days') THEN 'Active'\r\n        ELSE 'Inactive'\r\n    END AS customer_status\r\nFROM customers c\r\nLEFT JOIN orders o ON c.customer_id = o.customer_id\r\nGROUP BY c.customer_id\r\nORDER BY total_spent DESC;\r\n\r\n-- Product inventory report\r\nSELECT\r\n    p.product_id,\r\n    p.name,\r\n    p.category,\r\n    p.price,\r\n    COALESCE(i.quantity, 0) AS stock,\r\n    CASE\r\n        WHEN COALESCE(i.quantity, 0) = 0 THEN 'Out of Stock'\r\n        WHEN COALESCE(i.quantity, 0) < 10 THEN 'Low Stock'\r\n        ELSE 'In Stock'\r\n    END AS stock_status\r\nFROM products p\r\nLEFT JOIN inventory i ON p.product_id = i.product_id\r\nORDER BY stock_status, p.name;\r\n\r\n-- Paginated search with total count\r\nSELECT *\r\nFROM (\r\n    SELECT *, COUNT(*) OVER() AS total_count\r\n    FROM products\r\n    WHERE name LIKE '%search%'\r\n) AS search_results\r\nORDER BY price\r\nLIMIT 20 OFFSET 40;\r\n-- Returns items 41-60 along with total count\n"
      })
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
            children: "Explain the core idea of SQL Basics — SELECT, WHERE, ORDER BY, DML in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates SQL Basics — SELECT, WHERE, ORDER BY, DML."
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
            children: "Describe a production bug caused by misunderstanding SQL Basics — SELECT, WHERE, ORDER BY, DML. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on SQL Basics — SELECT, WHERE, ORDER BY, DML from 10 users to 10 million?"
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
            children: "Compare SQL Basics — SELECT, WHERE, ORDER BY, DML with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on SQL Basics — SELECT, WHERE, ORDER BY, DML."
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
            children: "How does SQL Basics — SELECT, WHERE, ORDER BY, DML behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of SQL Basics — SELECT, WHERE, ORDER BY, DML run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of SQL Basics — SELECT, WHERE, ORDER BY, DML that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name SQL Basics — SELECT, WHERE, ORDER BY, DML explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using SQL Basics — SELECT, WHERE, ORDER BY, DML\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies SQL Basics — SELECT, WHERE, ORDER BY, DML to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside SQL Basics — SELECT, WHERE, ORDER BY, DML (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of SQL Basics — SELECT, WHERE, ORDER BY, DML and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a SQL Basics — SELECT, WHERE, ORDER BY, DML-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic SQL Basics — SELECT, WHERE, ORDER BY, DML interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply SQL Basics — SELECT, WHERE, ORDER BY, DML in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse-1",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " SQL Basics — SELECT, WHERE, ORDER BY, DML builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for SQL Basics — SELECT, WHERE, ORDER BY, DML before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for SQL Basics — SELECT, WHERE, ORDER BY, DML is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for SQL Basics — SELECT, WHERE, ORDER BY, DML in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the SQL Basics — SELECT, WHERE, ORDER BY, DML chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers SQL Basics — SELECT, WHERE, ORDER BY, DML is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 01 Sql Basics is ___. — Answer: O(n log n) for sorted queries, O(1) for indexed lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 01 Sql Basics is ___. — Answer: NULL values, empty tables, duplicate rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug SQL Basics — SELECT, WHERE, ORDER BY, DML issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to SQL Basics — SELECT, WHERE, ORDER BY, DML in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving SQL Basics — SELECT, WHERE, ORDER BY, DML that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of SQL Basics — SELECT, WHERE, ORDER BY, DML is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain SQL Basics — SELECT, WHERE, ORDER BY, DML in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for SQL Basics — SELECT, WHERE, ORDER BY, DML and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of SQL Basics — SELECT, WHERE, ORDER BY, DML on an empty input?"
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
            children: "Complete Medium exercises, explain SQL Basics — SELECT, WHERE, ORDER BY, DML to someone else"
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
        children: "Always write a one-line example of SQL Basics — SELECT, WHERE, ORDER BY, DML from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered SQL Basics — SELECT, WHERE, ORDER BY, DML when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining SQL Basics — SELECT, WHERE, ORDER BY, DML twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own SQL Basics — SELECT, WHERE, ORDER BY, DML snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of SQL Basics — SELECT, WHERE, ORDER BY, DML listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link SQL Basics — SELECT, WHERE, ORDER BY, DML to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of SQL Basics — SELECT, WHERE, ORDER BY, DML by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain SQL Basics — SELECT, WHERE, ORDER BY, DML to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        }), " Basics — SELECT, WHERE, ORDER BY, DML"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 02 — builds the foundation for 01 Sql Basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 01 Sql Basics with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 01 Sql Basics fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 01 Sql Basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 01 Sql Basics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 01 Sql Basics?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 01 Sql Basics?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 01 Sql Basics asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 01 Sql Basics?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL Basics — SELECT, WHERE, ORDER BY, DML is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with SQL Basics — SELECT, WHERE, ORDER BY, DML."
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
        children: "SQL Basics — SELECT, WHERE, ORDER BY, DML emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for SQL Basics — SELECT, WHERE, ORDER BY, DML today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about SQL Basics — SELECT, WHERE, ORDER BY, DML — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around SQL Basics — SELECT, WHERE, ORDER BY, DML changes quickly; focus on fundamentals that remain stable."
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
            children: "01 Sql Basics is like a GPS navigation system"
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
          }), " — this chapter contributes the SQL Basics — SELECT, WHERE, ORDER BY, DML skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-01sqlbasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of SQL Basics — SELECT, WHERE, ORDER BY, DML in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL (Structured Query Language) is the standard language for managing relational databases — querying, inserting, updating, and deleting data with ACID transaction guarantees."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-01sqlbasics-flash2",
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
      "data-qid": "02sqlanddatabases-01sqlbasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard SQL Basics — SELECT, WHERE, ORDER BY, DML approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index lookup: O(log n). Full table scan: O(n). Hash join: O(n+m). Sort-merge join: O(n log n + m log m). Window function: O(n log n) for ordered partitions."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-01sqlbasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is SQL Basics — SELECT, WHERE, ORDER BY, DML NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL is NOT the right choice when: (1) data is unstructured (use document DB), (2) you need horizontal write scaling beyond a single node (use NoSQL), (3) graph traversals are the primary access pattern."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-01sqlbasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is SQL Basics — SELECT, WHERE, ORDER BY, DML applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for SQL Basics — SELECT, WHERE, ORDER BY, DML (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing SQL Basics — SELECT, WHERE, ORDER BY, DML (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for SQL Basics — SELECT, WHERE, ORDER BY, DML-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running SQL Basics — SELECT, WHERE, ORDER BY, DML in production at scale"
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
        }), " — connection pooler for PostgreSQL Basics — SELECT, WHERE, ORDER BY, DML"]
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
        }), ": Add structured logging at each stage of the 01 Sql Basics pipeline to identify exactly where the failure occurs."]
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
        children: "Explain SQL Basics — SELECT, WHERE, ORDER BY, DML in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of SQL Basics — SELECT, WHERE, ORDER BY, DML."
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
        children: "Tell me about a time you debugged a SQL Basics — SELECT, WHERE, ORDER BY, DML problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where SQL Basics — SELECT, WHERE, ORDER BY, DML is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_01_sql_basics(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 01 Sql Basics.\r\n\r\n    Key concepts: SELECT, JOIN, GROUP BY, indexes\r\n    Complexity: O(n log n) for sorted queries, O(1) for indexed lookups\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 01 Sql Basics here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain SQL Basics — SELECT, WHERE, ORDER BY, DML without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions",
        children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL Basics — SELECT, WHERE, ORDER BY, DML, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of SQL Basics — SELECT, WHERE, ORDER BY, DML depends on input size and distribution — always benchmark for your own data."
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