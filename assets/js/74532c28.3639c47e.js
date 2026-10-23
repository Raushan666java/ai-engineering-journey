"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6037],{

/***/ 42986
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_03_joins_md_745_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-03-joins-md-745.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_03_joins_md_745_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/03-joins","title":"Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/03-joins.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/03-joins","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/03-joins","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"id":"03-joins","slug":"/ai-engineering-placement/02-sql-and-databases/03-joins","title":"Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins","sidebar_label":"Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins","sidebar_position":28},"sidebar":"placementSidebar","previous":{"title":"Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions"},"next":{"title":"Subqueries & CTEs — Correlated, WITH, Recursive","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/03-joins.md


const frontMatter = {
	id: '03-joins',
	slug: '/ai-engineering-placement/02-sql-and-databases/03-joins',
	title: 'Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins',
	sidebar_label: 'Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins',
	sidebar_position: 28
};
const contentTitle = 'Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins';

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
  "value": "3.1 INNER JOIN",
  "id": "31-inner-join",
  "level": 2
}, {
  "value": "3.2 LEFT / RIGHT JOIN",
  "id": "32-left--right-join",
  "level": 2
}, {
  "value": "3.3 FULL / CROSS JOIN",
  "id": "33-full--cross-join",
  "level": 2
}, {
  "value": "3.4 Self-Join",
  "id": "34-self-join",
  "level": 2
}, {
  "value": "3.5 Multi-Table Joins",
  "id": "35-multi-table-joins",
  "level": 2
}, {
  "value": "3.6 Advanced Join Patterns",
  "id": "36-advanced-join-patterns",
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
  "value": "3.7 Joins with Aggregates",
  "id": "37-joins-with-aggregates",
  "level": 2
}, {
  "value": "3.8 Join Performance Optimization",
  "id": "38-join-performance-optimization",
  "level": 2
}, {
  "value": "3.9 Complex Join Patterns",
  "id": "39-complex-join-patterns",
  "level": 2
}, {
  "value": "3.10 Using JOINs with UPDATE and DELETE",
  "id": "310-using-joins-with-update-and-delete",
  "level": 2
}, {
  "value": "3.11 Common Pitfalls",
  "id": "311-common-pitfalls",
  "level": 2
}, {
  "value": "3.12 Real-World Join Examples",
  "id": "312-real-world-join-examples",
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
        id: "joins--inner-left-right-full-cross-self-joins",
        children: "Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins"
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
            children: "Combine tables with INNER JOIN to match related rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use LEFT JOIN to preserve all rows from the left table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write self-joins for hierarchical data (employees/managers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join multiple tables with proper join conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish between equi-joins, non-equi joins, and anti-joins"
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching rows from both tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT / RIGHT JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserving rows from one side"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FULL / CROSS JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows / Cartesian product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table joined to itself"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Table Joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joining 3+ tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equi, natural, anti-join patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Joins] --> B[INNER JOIN]\r\n    A --> C[LEFT JOIN]\r\n    A --> D[RIGHT JOIN]\r\n    A --> E[FULL JOIN]\r\n    A --> F[CROSS JOIN]\r\n    A --> G[Self-Join]\r\n    B --> H[Equi-join / Non-equi]\r\n    C --> I[Anti-join pattern]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-inner-join",
      children: "3.1 INNER JOIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns only rows where the join condition matches in both tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT e.name, d.department_name\r\nFROM employees e\r\nINNER JOIN departments d ON e.department_id = d.department_id;\r\n\r\n-- With aliases\r\nSELECT o.order_id, c.name AS customer, o.amount\r\nFROM orders o\r\nJOIN customers c ON o.customer_id = c.customer_id;\r\n\r\n-- INNER is optional (just JOIN)\r\nSELECT p.name, c.name AS category\r\nFROM products p\r\nJOIN categories c ON p.category_id = c.category_id;\r\n\r\n-- Multiple conditions\r\nSELECT *\r\nFROM orders o\r\nJOIN shipments s ON o.order_id = s.order_id\r\n    AND o.status = 'Shipped';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python simulation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\r\nconn = sqlite3.connect(\":memory:\")\r\ncur = conn.cursor()\r\ncur.execute(\"CREATE TABLE emp(id, name, dept_id)\")\r\ncur.execute(\"CREATE TABLE dept(id, name)\")\r\ncur.executemany(\"INSERT INTO emp VALUES (?,?,?)\", [(1,\"Alice\",1),(2,\"Bob\",1),(3,\"Charlie\",2)])\r\ncur.executemany(\"INSERT INTO dept VALUES (?,?)\", [(1,\"Engineering\"),(2,\"Sales\")])\r\n\r\ncur.execute(\"\"\"\r\n    SELECT e.name, d.name\r\n    FROM emp e\r\n    JOIN dept d ON e.dept_id = d.id\r\n\"\"\")\r\nfor row in cur.fetchall():\r\n    print(f\"{row[0]}: {row[1]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-left--right-join",
      children: "3.2 LEFT / RIGHT JOIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- LEFT JOIN: all rows from left table, NULLs where no match\r\nSELECT c.name, o.order_id, o.amount\r\nFROM customers c\r\nLEFT JOIN orders o ON c.customer_id = o.customer_id;\r\n\r\n-- Customers with no orders\r\nSELECT c.name\r\nFROM customers c\r\nLEFT JOIN orders o ON c.customer_id = o.customer_id\r\nWHERE o.order_id IS NULL;\r\n\r\n-- RIGHT JOIN: all rows from right table (less common; use LEFT JOIN)\r\nSELECT e.name, d.department_name\r\nFROM employees e\r\nRIGHT JOIN departments d ON e.department_id = d.department_id;\r\n-- Same as: SELECT ... FROM departments d LEFT JOIN employees e ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-full--cross-join",
      children: "3.3 FULL / CROSS JOIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- FULL OUTER JOIN: all rows from both tables, NULLs where no match\r\nSELECT e.name, d.department_name\r\nFROM employees e\r\nFULL OUTER JOIN departments d ON e.department_id = d.department_id;\r\n\r\n-- Full join pattern in SQLite (no FULL OUTER JOIN)\r\nSELECT e.name, d.name FROM emp e LEFT JOIN dept d ON e.dept_id = d.id\r\nUNION\r\nSELECT e.name, d.name FROM emp e RIGHT JOIN dept d ON e.dept_id = d.id;\r\n\r\n-- CROSS JOIN: Cartesian product (every row of A paired with every row of B)\r\nSELECT c.name, p.name\r\nFROM customers c\r\nCROSS JOIN products p;\r\n\r\n-- Useful for generating combinations\r\nSELECT sizes.size, colors.color\r\nFROM (VALUES('S'),('M'),('L')) AS sizes(size)\r\nCROSS JOIN (VALUES('Red'),('Blue'),('Green')) AS colors(color);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-self-join",
      children: "3.4 Self-Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A table joined to itself (requires table aliases)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Employees and their managers\r\nSELECT e.name AS employee, m.name AS manager\r\nFROM employees e\r\nLEFT JOIN employees m ON e.manager_id = m.employee_id;\r\n\r\n-- Find employees who earn more than their manager\r\nSELECT e.name AS employee, e.salary AS emp_salary,\r\n       m.name AS manager, m.salary AS mgr_salary\r\nFROM employees e\r\nJOIN employees m ON e.manager_id = m.employee_id\r\nWHERE e.salary > m.salary;\r\n\r\n-- Find duplicate emails\r\nSELECT a.email, a.name, b.name AS duplicate_user\r\nFROM users a\r\nJOIN users b ON a.email = b.email AND a.id < b.id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-multi-table-joins",
      children: "3.5 Multi-Table Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT\r\n    o.order_id,\r\n    c.name AS customer,\r\n    e.name AS employee,\r\n    p.name AS product,\r\n    oi.quantity,\r\n    oi.unit_price\r\nFROM orders o\r\nJOIN customers c ON o.customer_id = c.customer_id\r\nJOIN employees e ON o.sales_emp_id = e.employee_id\r\nJOIN order_items oi ON o.order_id = oi.order_id\r\nJOIN products p ON oi.product_id = p.product_id\r\nWHERE o.order_date >= '2024-01-01'\r\nORDER BY o.order_date;\r\n\r\n-- Implicit join (old syntax, avoid)\r\nSELECT e.name, d.name\r\nFROM employees e, departments d\r\nWHERE e.department_id = d.department_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-advanced-join-patterns",
      children: "3.6 Advanced Join Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "conn = sqlite3.connect(\":memory:\")\r\ncur = conn.cursor()\r\ncur.execute(\"CREATE TABLE orders(id, customer_id, amount)\")\r\ncur.execute(\"CREATE TABLE customers(id, name)\")\r\ncur.executemany(\"INSERT INTO customers VALUES (?,?)\", [(1,\"Alice\"),(2,\"Bob\"),(3,\"Charlie\")])\r\ncur.executemany(\"INSERT INTO orders VALUES (?,?,?)\", [(1,1,100),(2,1,200),(3,2,150)])\r\n\r\n## Anti-join: customers with no orders\r\ncur.execute(\"\"\"\r\n    SELECT c.name FROM customers c\r\n    LEFT JOIN orders o ON c.id = o.customer_id\r\n    WHERE o.id IS NULL\r\n\"\"\")\r\nprint(\"No orders:\", [r[0] for r in cur.fetchall()])  # ['Charlie']\r\n\r\n## Semi-join: customers who have placed orders\r\ncur.execute(\"\"\"\r\n    SELECT DISTINCT c.name\r\n    FROM customers c\r\n    WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)\r\n\"\"\")\r\nprint(\"Have orders:\", [r[0] for r in cur.fetchall()])  # ['Alice', 'Bob']\r\n\r\n## Non-equi join (condition is not equality)\r\nSELECT a.name, a.salary, b.name AS higher_earner\r\nFROM employees a\r\nJOIN employees b ON a.salary < b.salary;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Employee = { id: number; name: string; deptId: number };\r\ntype Department = { id: number; name: string };\r\n\r\nconst employees: Employee[] = [{ id: 1, name: \"Alice\", deptId: 1 }];\r\nconst departments: Department[] = [{ id: 1, name: \"Engineering\" }];\r\n\r\n// INNER JOIN\r\nconst joined = employees.flatMap(e =>\r\n    departments.filter(d => d.id === e.deptId).map(d => ({\r\n        name: e.name, dept: d.name\r\n    }))\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INNER JOIN returns only matching rows from both tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LEFT JOIN returns all left table rows, NULL for non-matching right"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RIGHT JOIN is the reverse (use LEFT JOIN for consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FULL OUTER JOIN returns all rows from both sides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CROSS JOIN produces Cartesian product of all row combinations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-join joins a table to itself using aliases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anti-join finds rows without matches using LEFT JOIN + IS NULL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semi-join finds rows with matches using EXISTS or DISTINCT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-table joins connect 3+ tables with multiple JOIN clauses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always specify join conditions with ON (not WHERE for older syntax)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Match rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering in WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All left + matching right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT JOIN (less intuitive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All rows from both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FULL OUTER JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION of two LEFT JOINs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CROSS JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit CROSS JOIN in FROM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-join with aliases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find missing rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN + NULL check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IN (with possible NULLs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check existence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS (semi-join)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT on join result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: INNER JOIN vs LEFT JOIN?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "INNER JOIN returns only rows with matches in both tables. LEFT JOIN returns all rows from left table regardless of match, with NULLs on right side for non-matches."
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
      "data-qid": "sql-s03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: What is a self-join?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Joining a table to itself using different aliases. Used for hierarchical data (employees/managers), finding duplicates, or comparing rows within the same table."
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
      "data-qid": "sql-s03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What is a Cartesian product?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Every row from table A paired with every row from table B. Produced by CROSS JOIN or implicit joins without WHERE. Results in M * N rows. Useful for generating combinations but dangerous if accidental."
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
      "data-qid": "sql-s03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How do you avoid duplicate rows from joins?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Ensure join conditions are specific enough (correct columns). Use DISTINCT if duplicates are acceptable. Use EXISTS instead of JOIN for existence checks. For one-to-many joins, aggregate after joining."
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
      "data-qid": "sql-s03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is an anti-join?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Finds rows in one table that have no match in another. Pattern: LEFT JOIN + WHERE right_table.key IS NULL. Alternative: NOT EXISTS (subquery) or NOT IN. LEFT JOIN + NULL handles NULLs in subquery better than NOT IN."
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
      "data-qid": "sql-s03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Can you join more than 2 tables?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Yes, chain JOIN clauses: FROM a JOIN b ON a.id = b.a_id JOIN c ON b.id = c.b_id. Execution order may vary; optimizer chooses the best join order. Use parentheses for controlling join order if needed."
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
      "data-qid": "sql-s03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: When to use RIGHT JOIN?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "RIGHT JOIN is less common. Most developers prefer LEFT JOIN for consistency (always join from main table). RIGHT JOIN is useful when adding a new table to an existing query without rewriting the FROM clause."
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
      "data-qid": "sql-s03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: What is a natural join?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "NATURAL JOIN automatically joins on all columns with the same name in both tables. Avoid in production — it's implicit and breaks if column names change. Always prefer explicit USING or ON clauses."
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
      "data-qid": "sql-s03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How does FULL OUTER JOIN work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns all rows from both tables. Rows with matches show combined data. Non-matching rows from left have NULL on right side, and vice versa. Not all databases support it (e.g., MySQL, SQLite lack it)."
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
      "data-qid": "sql-s03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is the difference between ON and USING?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ON specifies the join condition explicitly (table1.col = table2.col). USING(column) is shorthand when both tables have the same column name: FROM a JOIN b USING(id). USING removes the duplicate column from results."
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
      }), ": Which join returns only matching rows? a) LEFT b) INNER c) FULL d) CROSS"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s03-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) INNER JOIN"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": How to find customers with no orders? a) LEFT + NULL b) INNER c) RIGHT + NULL d) CROSS + NULL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s03-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) LEFT JOIN + WHERE orders.id IS NULL"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": How many rows does CROSS JOIN 3x5 tables produce? a) 3 b) 5 c) 15 d) 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s03-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 15 (Cartesian product: 3 * 5)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Self-join requires? a) different tables b) table aliases c) subqueries d) indexes"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s03-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) table aliases to distinguish the two roles"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which pattern is an anti-join? a) INNER JOIN b) LEFT + NULL c) CROSS d) FULL + NULL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s03-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) LEFT JOIN + IS NULL on right side"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a query joining employees with their departments using INNER JOIN.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Find all products and their supplier names using a join.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a self-join to find employees who have the same manager.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Find customers who have never placed an order (anti-join).\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write a multi-table query joining orders, customers, products, and order_items for a sales report.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a recursive join using a self-referencing employees table to show each employee's full reporting chain (employee -> manager -> senior manager -> ...)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-joins-with-aggregates",
      children: "3.7 Joins with Aggregates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combining joins with aggregation for summary reports."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Department summary with employee count and salary stats\r\nSELECT\r\n    d.department_name,\r\n    COUNT(e.employee_id) AS employee_count,\r\n    ROUND(AVG(e.salary), 2) AS avg_salary,\r\n    ROUND(SUM(e.salary), 2) AS total_payroll,\r\n    MIN(e.salary) AS min_salary,\r\n    MAX(e.salary) AS max_salary\r\nFROM departments d\r\nLEFT JOIN employees e ON d.department_id = e.department_id\r\nGROUP BY d.department_id, d.department_name\r\nORDER BY avg_salary DESC;\r\n\r\n-- Customers with their most recent order\r\nSELECT\r\n    c.customer_id,\r\n    c.name,\r\n    COUNT(o.order_id) AS total_orders,\r\n    SUM(o.amount) AS lifetime_value,\r\n    MAX(o.order_date) AS last_order_date,\r\n    AVG(o.amount) AS avg_order_value\r\nFROM customers c\r\nLEFT JOIN orders o ON c.customer_id = o.customer_id\r\nGROUP BY c.customer_id, c.name\r\nHAVING COUNT(o.order_id) >= 1\r\nORDER BY lifetime_value DESC;\r\n\r\n-- Top products by category with supplier info\r\nSELECT\r\n    cat.name AS category,\r\n    p.name AS product,\r\n    s.name AS supplier,\r\n    SUM(oi.quantity) AS units_sold,\r\n    SUM(oi.quantity * oi.unit_price) AS revenue\r\nFROM categories cat\r\nJOIN products p ON cat.category_id = p.category_id\r\nJOIN suppliers s ON p.supplier_id = s.supplier_id\r\nJOIN order_items oi ON p.product_id = oi.product_id\r\nJOIN orders o ON oi.order_id = o.order_id\r\nWHERE o.order_date >= DATE('now', '-6 months')\r\nGROUP BY cat.category_id, cat.name, p.product_id, p.name, s.supplier_id, s.name\r\nORDER BY revenue DESC\r\nLIMIT 20;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-join-performance-optimization",
      children: "3.8 Join Performance Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- 1. Always join on indexed columns\r\nCREATE INDEX idx_employees_dept ON employees(department_id);\r\nCREATE INDEX idx_orders_customer ON orders(customer_id);\r\nCREATE INDEX idx_order_items_order ON order_items(order_id);\r\n\r\n-- 2. Filter before joining (reduce rows early)\r\n-- BAD: join all rows, then filter\r\nSELECT c.name, o.amount\r\nFROM customers c\r\nJOIN orders o ON c.customer_id = o.customer_id\r\nWHERE o.order_date >= '2024-01-01' AND c.status = 'active';\r\n\r\n-- GOOD: filter each table before join\r\nSELECT c.name, o.amount\r\nFROM (SELECT * FROM customers WHERE status = 'active') c\r\nJOIN (SELECT * FROM orders WHERE order_date >= '2024-01-01') o\r\n    ON c.customer_id = o.customer_id;\r\n\r\n-- 3. Use EXPLAIN to check query plans\r\n-- PostgreSQL: EXPLAIN ANALYZE SELECT ...\r\n-- SQLite: EXPLAIN QUERY PLAN SELECT ...\r\n-- MySQL: EXPLAIN SELECT ...\r\n\r\n-- 4. Choose the right join type\r\n-- INNER JOIN when you only need matches\r\n-- LEFT JOIN when you need all left-side rows\r\n-- Avoid RIGHT JOIN (can usually be rewritten as LEFT JOIN)\r\n\r\n-- 5. Beware of join explosion\r\n-- One-to-many join with another one-to-many creates Cartesian product\r\n-- Fix: aggregate before joining or use DISTINCT\r\n\r\n-- 6. Use EXISTS instead of LEFT JOIN for existence checks\r\n-- BAD: LEFT JOIN + GROUP BY\r\nSELECT c.name\r\nFROM customers c\r\nLEFT JOIN orders o ON c.customer_id = o.customer_id\r\nGROUP BY c.customer_id, c.name\r\nHAVING COUNT(o.order_id) > 0;\r\n\r\n-- GOOD: EXISTS\r\nSELECT c.name\r\nFROM customers c\r\nWHERE EXISTS (\r\n    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "39-complex-join-patterns",
      children: "3.9 Complex Join Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Self-join: employee hierarchy with levels\r\nSELECT\r\n    e1.name AS employee,\r\n    e2.name AS manager,\r\n    e3.name AS senior_manager\r\nFROM employees e1\r\nLEFT JOIN employees e2 ON e1.manager_id = e2.employee_id\r\nLEFT JOIN employees e3 ON e2.manager_id = e3.employee_id\r\nORDER BY e3.name, e2.name, e1.name;\r\n\r\n-- Non-equi join: find nearby events\r\nSELECT a.event_name, a.event_date AS date_a,\r\n       b.event_name, b.event_date AS date_b,\r\n       ABS(julianday(a.event_date) - julianday(b.event_date)) AS days_apart\r\nFROM events a\r\nJOIN events b ON a.event_id < b.event_id\r\n    AND ABS(julianday(a.event_date) - julianday(b.event_date)) <= 7\r\nORDER BY days_apart;\r\n\r\n-- Semi-join: customers who ordered expensive items\r\nSELECT DISTINCT c.customer_id, c.name\r\nFROM customers c\r\nWHERE c.customer_id IN (\r\n    SELECT o.customer_id\r\n    FROM orders o\r\n    JOIN order_items oi ON o.order_id = oi.order_id\r\n    WHERE oi.unit_price > 500\r\n);\r\n\r\n-- Anti-join: products never ordered\r\nSELECT p.product_id, p.name\r\nFROM products p\r\nLEFT JOIN order_items oi ON p.product_id = oi.product_id\r\nWHERE oi.product_id IS NULL;\r\n\r\n-- Cross join practical: date and time dimension\r\nSELECT d.date, t.time_slot\r\nFROM (\r\n    SELECT DATE('2024-01-01', '+' || n || ' days') AS date\r\n    FROM (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 ... UNION SELECT 364)\r\n) d\r\nCROSS JOIN (\r\n    SELECT '09:00' AS time_slot\r\n    UNION SELECT '10:00'\r\n    UNION SELECT '11:00'\r\n    UNION SELECT '14:00'\r\n    UNION SELECT '15:00'\r\n) t\r\nORDER BY d.date, t.time_slot;\r\n\r\n-- Lateral join (PostgreSQL, MySQL 8+)\r\n-- For each customer, get their 3 most recent orders\r\nSELECT c.name, recent_orders.order_id, recent_orders.amount\r\nFROM customers c\r\nCROSS JOIN LATERAL (\r\n    SELECT order_id, amount, order_date\r\n    FROM orders\r\n    WHERE customer_id = c.customer_id\r\n    ORDER BY order_date DESC\r\n    LIMIT 3\r\n) recent_orders;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "310-using-joins-with-update-and-delete",
      children: "3.10 Using JOINs with UPDATE and DELETE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- UPDATE with JOIN\r\n-- Bonus employees based on department performance\r\nUPDATE employees e\r\nSET salary = salary * 1.1\r\nFROM departments d\r\nWHERE e.department_id = d.department_id\r\n  AND d.performance_score > 90;\r\n\r\n-- MySQL variant\r\nUPDATE employees e\r\nJOIN departments d ON e.department_id = d.department_id\r\nSET e.salary = e.salary * 1.1\r\nWHERE d.performance_score > 90;\r\n\r\n-- DELETE with JOIN\r\n-- Remove orphaned order items\r\nDELETE FROM order_items\r\nWHERE order_id NOT IN (\r\n    SELECT order_id FROM orders\r\n);\r\n\r\n-- PostgreSQL variant with USING\r\nDELETE FROM order_items oi\r\nUSING orders o\r\nWHERE oi.order_id = o.order_id\r\n  AND o.order_date < '2020-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "311-common-pitfalls",
      children: "3.11 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Pitfall 1: Unintentional Cartesian product\r\nSELECT e.name, d.department_name\r\nFROM employees e, departments d;  -- forgot WHERE/ON!\r\n-- Every employee paired with every department!\r\n-- Always use explicit JOIN syntax\r\n\r\n-- Pitfall 2: Missing join condition\r\nSELECT e.name, d.department_name\r\nFROM employees e\r\nJOIN departments d;  -- CROSS JOIN without ON clause\r\n\r\n-- Pitfall 3: Duplicate rows from one-to-many joins\r\n-- Employee has multiple projects -> duplicates\r\nSELECT DISTINCT e.name, d.name\r\nFROM employees e\r\nJOIN departments d ON e.dept_id = d.id\r\nJOIN projects p ON e.id = p.employee_id;  -- may duplicate employees\r\n\r\n-- Pitfall 4: Wrong join type\r\n-- Use LEFT JOIN to keep employees without departments\r\n-- Use INNER JOIN to exclude employees without departments\r\n\r\n-- Pitfall 5: NULL in join column\r\nSELECT * FROM employees e\r\nJOIN departments d ON e.department_id = d.id;\r\n-- Employees with NULL department_id will NOT appear (NULL != anything)\r\n\r\n-- Pitfall 6: RIGHT JOIN readability\r\n-- Prefer LEFT JOIN; RIGHT JOIN is less intuitive\r\nSELECT *\r\nFROM departments d\r\nRIGHT JOIN employees e ON d.id = e.department_id;\r\n-- Same as: LEFT JOIN departments d ON ...\r\n\r\n-- Pitfall 7: Performance with large joins\r\n-- Always join on indexed columns\r\n-- Use appropriate join types\r\n-- Filter before joining when possible\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "312-real-world-join-examples",
      children: "3.12 Real-World Join Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- E-commerce order fulfillment report\r\nSELECT\r\n    o.order_id,\r\n    c.name AS customer_name,\r\n    c.email,\r\n    o.order_date,\r\n    o.status,\r\n    p.name AS product,\r\n    oi.quantity,\r\n    oi.unit_price,\r\n    oi.quantity * oi.unit_price AS line_total,\r\n    s.name AS shipped_by,\r\n    tr.tracking_number,\r\n    pay.payment_method,\r\n    pay.status AS payment_status\r\nFROM orders o\r\nJOIN customers c ON o.customer_id = c.customer_id\r\nJOIN order_items oi ON o.order_id = oi.order_id\r\nJOIN products p ON oi.product_id = p.product_id\r\nLEFT JOIN shipments s ON o.order_id = s.order_id\r\nLEFT JOIN tracking tr ON s.shipment_id = tr.shipment_id\r\nLEFT JOIN payments pay ON o.order_id = pay.order_id\r\nWHERE o.order_date >= DATE('now', '-30 days')\r\nORDER BY o.order_date DESC, o.order_id;\r\n\r\n-- HR department org chart\r\nSELECT\r\n    e.name AS employee_name,\r\n    e.title,\r\n    e.hire_date,\r\n    m.name AS manager_name,\r\n    m.title AS manager_title,\r\n    d.department_name,\r\n    l.city,\r\n    l.state\r\nFROM employees e\r\nJOIN employees m ON e.manager_id = m.employee_id\r\nJOIN departments d ON e.department_id = d.department_id\r\nJOIN locations l ON d.location_id = l.location_id\r\nORDER BY d.department_name, m.name, e.name;\r\n\r\n-- Product recommendation candidates\r\nSELECT\r\n    p1.product_id AS product_a,\r\n    p1.name AS product_a_name,\r\n    p2.product_id AS product_b,\r\n    p2.name AS product_b_name,\r\n    COUNT(*) AS times_bought_together\r\nFROM order_items oi1\r\nJOIN order_items oi2 ON oi1.order_id = oi2.order_id\r\n    AND oi1.product_id < oi2.product_id\r\nJOIN products p1 ON oi1.product_id = p1.product_id\r\nJOIN products p2 ON oi2.product_id = p2.product_id\r\nGROUP BY p1.product_id, p1.name, p2.product_id, p2.name\r\nHAVING COUNT(*) >= 5\r\nORDER BY times_bought_together DESC;\n"
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
            children: "Explain the core idea of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins."
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
            children: "Describe a production bug caused by misunderstanding Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins from 10 users to 10 million?"
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
            children: "Compare Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins."
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
            children: "How does Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in production today?"
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
        }), " Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Joins is ___. — Answer: O(n log n) for sorted queries, O(1) for indexed lookups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Joins is ___. — Answer: NULL values, empty tables, duplicate rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins on an empty input?"
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
            children: "Complete Medium exercises, explain Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins to someone else"
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
        children: "Always write a one-line example of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        }), " — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 02 — builds the foundation for 03 Joins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Joins with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Joins fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Joins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Joins"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Joins?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Joins?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Joins asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Joins?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins."
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
        children: "Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins changes quickly; focus on fundamentals that remain stable."
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
            children: "03 Joins is like a GPS navigation system"
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
          }), " — this chapter contributes the Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-03joins-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL (Structured Query Language) is the standard language for managing relational databases — querying, inserting, updating, and deleting data with ACID transaction guarantees."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-03joins-flash2",
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
      "data-qid": "02sqlanddatabases-03joins-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Index lookup: O(log n). Full table scan: O(n). Hash join: O(n+m). Sort-merge join: O(n log n + m log m). Window function: O(n log n) for ordered partitions."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-03joins-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL is NOT the right choice when: (1) data is unstructured (use document DB), (2) you need horizontal write scaling beyond a single node (use NoSQL), (3) graph traversals are the primary access pattern."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-03joins-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in production at scale"
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
        }), " — connection pooler for PostgreSQL — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins"]
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
        }), ": Add structured logging at each stage of the 03 Joins pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins."
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
        children: "Tell me about a time you debugged a Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_joins(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Joins.\r\n\r\n    Key concepts: SELECT, JOIN, GROUP BY, indexes\r\n    Complexity: O(n log n) for sorted queries, O(1) for indexed lookups\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Joins here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes",
        children: "Subqueries & CTEs — Correlated, WITH, Recursive"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins depends on input size and distribution — always benchmark for your own data."
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