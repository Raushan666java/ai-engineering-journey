"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[80207],{

/***/ 49352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_04_subqueries_and_ctes_md_a59_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-04-subqueries-and-ctes-md-a59.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_04_subqueries_and_ctes_md_a59_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/04-subqueries-and-ctes","title":"Subqueries & CTEs — Correlated, WITH, Recursive","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"id":"04-subqueries-and-ctes","slug":"/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes","title":"Subqueries & CTEs — Correlated, WITH, Recursive","sidebar_label":"Subqueries & CTEs — Correlated, WITH, Recursive","sidebar_position":27},"sidebar":"placementSidebar","previous":{"title":"Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/03-joins"},"next":{"title":"Window Functions — ROW_NUMBER, RANK, LAG, LEAD, NTILE, Frames","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/05-window-functions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes.md


const frontMatter = {
	id: '04-subqueries-and-ctes',
	slug: '/ai-engineering-placement/02-sql-and-databases/04-subqueries-and-ctes',
	title: 'Subqueries & CTEs — Correlated, WITH, Recursive',
	sidebar_label: 'Subqueries & CTEs — Correlated, WITH, Recursive',
	sidebar_position: 27
};
const contentTitle = 'Subqueries & CTEs — Correlated, WITH, Recursive';

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
  "value": "4.1 Scalar Subqueries",
  "id": "41-scalar-subqueries",
  "level": 2
}, {
  "value": "4.2 Row &amp; Table Subqueries",
  "id": "42-row--table-subqueries",
  "level": 2
}, {
  "value": "4.3 Correlated Subqueries",
  "id": "43-correlated-subqueries",
  "level": 2
}, {
  "value": "4.4 EXISTS / ANY / ALL",
  "id": "44-exists--any--all",
  "level": 2
}, {
  "value": "4.5 CTEs with WITH",
  "id": "45-ctes-with-with",
  "level": 2
}, {
  "value": "4.6 Recursive CTEs",
  "id": "46-recursive-ctes",
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
  "value": "4.7 LATERAL Joins",
  "id": "47-lateral-joins",
  "level": 2
}, {
  "value": "4.8 Multiple CTEs and CTE Modifications",
  "id": "48-multiple-ctes-and-cte-modifications",
  "level": 2
}, {
  "value": "4.9 Performance: Subqueries vs CTEs vs Joins",
  "id": "49-performance-subqueries-vs-ctes-vs-joins",
  "level": 2
}, {
  "value": "4.10 Recursive CTE Advanced Examples",
  "id": "410-recursive-cte-advanced-examples",
  "level": 2
}, {
  "value": "4.11 Common Pitfalls",
  "id": "411-common-pitfalls",
  "level": 2
}, {
  "value": "4.12 Real-World CTE Applications",
  "id": "412-real-world-cte-applications",
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
        id: "subqueries--ctes--correlated-with-recursive",
        children: "Subqueries & CTEs — Correlated, WITH, Recursive"
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
            children: "Write scalar and row subqueries in SELECT and WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use correlated subqueries for row-by-row comparisons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplify queries with Common Table Expressions (CTEs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write recursive CTEs for hierarchical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand performance implications of subqueries vs joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use EXISTS, NOT EXISTS, ANY, ALL with subqueries"
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
      children: "Understanding subqueries and ctes is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how subqueries and ctes works in practice."
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar Subqueries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single value in SELECT/WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row & Table Subqueries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FROM clause subqueries, derived tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated Subqueries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "References outer query, per-row execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS / ANY / ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean subqueries for existence/comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTEs with WITH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named subqueries, readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive CTEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WITH RECURSIVE for trees, graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Subqueries] --> B[Scalar: single value]\n    A --> C[Row/Table: FROM clause]\n    A --> D[Correlated: per-row]\n    A --> E[EXISTS / ANY / ALL]\n    F[CTEs] --> G[WITH ... AS]\n    F --> H[Recursive CTEs]\n    F --> I[Multiple CTEs]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-scalar-subqueries",
      children: "4.1 Scalar Subqueries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Return a single value, used in SELECT or WHERE."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- In SELECT — employee salary vs average\nSELECT name, salary,\n    (SELECT AVG(salary) FROM employees) AS company_avg,\n    salary - (SELECT AVG(salary) FROM employees) AS diff_from_avg\nFROM employees;\n\n-- In WHERE — find employees earning above average\nSELECT name, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- In WHERE — find products priced above category average\nSELECT name, price, category_id\nFROM products p\nWHERE price > (SELECT AVG(price) FROM products WHERE category_id = p.category_id);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python simulation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE emp(id, name, salary, dept_id)\")\ncur.executemany(\"INSERT INTO emp VALUES (?,?,?,?)\", [\n    (1, \"Alice\", 75000, 1), (2, \"Bob\", 68000, 1),\n    (3, \"Charlie\", 82000, 2), (4, \"Diana\", 72000, 2),\n])\n\n## Employees earning above their department average\ncur.execute(\"\"\"\n    SELECT e.name, e.salary, e.dept_id\n    FROM emp e\n    WHERE e.salary > (SELECT AVG(salary) FROM emp WHERE dept_id = e.dept_id)\n\"\"\")\nfor row in cur.fetchall():\n    print(f\"{row[0]}: {row[1]} > dept avg\")\n\n## Alice: 75000 > Eng avg (71500)\n\n## Charlie: 82000 > Sales avg (77000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-row--table-subqueries",
      children: "4.2 Row & Table Subqueries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- FROM clause subquery (derived table)\nSELECT dept_stats.dept_id, dept_stats.avg_sal\nFROM (\n    SELECT dept_id, AVG(salary) AS avg_sal\n    FROM employees\n    GROUP BY dept_id\n) AS dept_stats\nWHERE dept_stats.avg_sal > 70000;\n\n-- Row comparison\nSELECT name, salary\nFROM employees\nWHERE (department_id, salary) = (\n    SELECT department_id, MAX(salary)\n    FROM employees\n    GROUP BY department_id\n    LIMIT 1\n);\n\n-- IN with subquery\nSELECT name FROM employees\nWHERE department_id IN (\n    SELECT id FROM departments WHERE location = 'New York'\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-correlated-subqueries",
      children: "4.3 Correlated Subqueries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A correlated subquery references columns from the outer query and executes once per outer row."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Find each employee's rank within their department\nSELECT e.name, e.salary, e.department_id,\n    (SELECT COUNT(*) + 1 FROM employees\n     WHERE department_id = e.department_id\n       AND salary > e.salary) AS rank_in_dept\nFROM employees e;\n\n-- Find the most recent order for each customer\nSELECT c.name, o.order_date, o.amount\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nWHERE o.order_date = (\n    SELECT MAX(order_date) FROM orders\n    WHERE customer_id = c.customer_id\n);\n\n-- Find products with above-average price in their category\nSELECT p.product_id, p.name, p.price, p.category_id\nFROM products p\nWHERE p.price > (\n    SELECT AVG(price) FROM products\n    WHERE category_id = p.category_id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-exists--any--all",
      children: "4.4 EXISTS / ANY / ALL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- EXISTS: true if subquery returns any rows\nSELECT name FROM customers c\nWHERE EXISTS (\n    SELECT 1 FROM orders o\n    WHERE o.customer_id = c.customer_id AND o.amount > 1000\n);\n\n-- NOT EXISTS: customers with no orders\nSELECT name FROM customers c\nWHERE NOT EXISTS (\n    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id\n);\n\n-- ANY: true if comparison is true for any subquery value\nSELECT name, salary\nFROM employees\nWHERE salary > ANY (\n    SELECT salary FROM employees WHERE department_id = 3\n);\n\n-- ALL: true if comparison is true for ALL subquery values\nSELECT name, salary\nFROM employees\nWHERE salary > ALL (\n    SELECT AVG(salary) FROM employees GROUP BY department_id\n);\n\n-- Equivalent to MAX/MIN\nWHERE salary > ANY (...)  -- same as salary > MIN(...)\nWHERE salary > ALL (...)  -- same as salary > MAX(...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-ctes-with-with",
      children: "4.5 CTEs with WITH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CTEs (Common Table Expressions) name a subquery for reuse."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE emp(id, name, salary, dept)\")\ncur.executemany(\"INSERT INTO emp VALUES (?,?,?,?)\", [\n    (1,\"Alice\",75000,\"Eng\"), (2,\"Bob\",68000,\"Eng\"),\n    (3,\"Charlie\",82000,\"Sales\"), (4,\"Diana\",72000,\"Sales\"),\n])\n\ncur.execute(\"\"\"\n    WITH dept_avg AS (\n        SELECT dept, AVG(salary) AS avg_sal\n        FROM emp GROUP BY dept\n    )\n    SELECT e.name, e.salary, d.avg_sal\n    FROM emp e\n    JOIN dept_avg d ON e.dept = d.dept\n    WHERE e.salary > d.avg_sal\n\"\"\")\nfor row in cur.fetchall():\n    print(f\"{row[0]}:  > dept avg \")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Multiple CTEs\nWITH\ndept_stats AS (\n    SELECT department_id, AVG(salary) AS avg_sal FROM employees GROUP BY department_id\n),\nhigh_performers AS (\n    SELECT e.* FROM employees e\n    JOIN dept_stats d ON e.department_id = d.department_id\n    WHERE e.salary > d.avg_sal * 1.2\n)\nSELECT * FROM high_performers ORDER BY salary DESC;\n\n-- CTE in INSERT/UPDATE/DELETE\nWITH deleted AS (\n    DELETE FROM orders WHERE order_date < '2020-01-01' RETURNING *\n)\nSELECT COUNT(*) AS archived FROM deleted;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-recursive-ctes",
      children: "4.6 Recursive CTEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive CTEs reference themselves to traverse hierarchical or graph data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Organization chart: employee -> manager chain\nWITH RECURSIVE org_chain AS (\n    -- Anchor: top-level employees\n    SELECT id, name, manager_id, 1 AS level\n    FROM employees\n    WHERE manager_id IS NULL\n\n    UNION ALL\n\n    -- Recursive: employees reporting to those above\n    SELECT e.id, e.name, e.manager_id, oc.level + 1\n    FROM employees e\n    JOIN org_chain oc ON e.manager_id = oc.id\n)\nSELECT * FROM org_chain ORDER BY level, name;\n\n-- Fibonacci sequence\nWITH RECURSIVE fib(n, a, b) AS (\n    SELECT 1, 0, 1\n    UNION ALL\n    SELECT n + 1, b, a + b\n    FROM fib\n    WHERE n < 10\n)\nSELECT n, a AS fibonacci FROM fib;\n\n-- Date series\nWITH RECURSIVE dates(d) AS (\n    SELECT DATE('2024-01-01')\n    UNION ALL\n    SELECT DATE(d, '+1 day')\n    FROM dates\n    WHERE d < '2024-01-10'\n)\nSELECT * FROM dates;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: subquery-like patterns with arrays\nconst employees = [\n    { name: \"Alice\", salary: 75000, dept: \"Eng\" },\n    { name: \"Bob\", salary: 68000, dept: \"Eng\" },\n];\n\n// Correlated subquery equivalent\nconst deptAvgs = employees.reduce((acc, e) => {\n    acc[e.dept] = (acc[e.dept] || 0) + e.salary;\n    return acc;\n}, {} as Record<string, number>);\n\nconst aboveAvg = employees.filter(e =>\n    e.salary > deptAvgs[e.dept] / employees.filter(x => x.dept === e.dept).length\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scalar subqueries return one value; table subqueries return multiple rows/columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlated subqueries reference outer query and run per outer row (potential performance issue)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXISTS checks for existence (short-circuits); IN compares against a list"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ANY/ALL compare against any/all values from subquery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CTEs (WITH) name subqueries for readability and reuse"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive CTEs traverse hierarchies: anchor + UNION ALL + recursive member"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CTEs can be used in INSERT/UPDATE/DELETE (with RETURNING)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subqueries in FROM require an alias (derived table)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typically rewrite correlated subqueries as JOINs for performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive CTEs have MAXRECURSION limit (default 100 in SQL Server, 1000 in PostgreSQL)"
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
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single aggregate per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar subquery in SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple separate queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex derived data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTE (WITH)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested subqueries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive CTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level recursion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Existence check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN with large subquery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find missing rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IN (if subquery has NULLs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-group comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated subquery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple queries + app logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Correlated vs non-correlated subquery?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Non-correlated: independent of outer query, executed once. Correlated: references outer columns, executed once per outer row. Correlated can be slower but more powerful for per-row calculations."
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
      "data-qid": "sql-s04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: EXISTS vs IN?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "EXISTS short-circuits (stops on first match), handles NULLs correctly (returns true/false without NULL complications). IN lists all values first, treats NULL as unknown. EXISTS often faster for large subqueries. NOT EXISTS is safer than NOT IN when NULLs exist."
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
      "data-qid": "sql-s04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What is a CTE and when to use it?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "CTE (Common Table Expression) is a named temporary result set with WITH clause. Use for: complex queries needing multiple references, recursive queries, breaking down complex logic, alternatives to views for one-time use."
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
      "data-qid": "sql-s04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How does a recursive CTE work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Two parts: anchor member (initial query, no self-reference) and recursive member (references the CTE name). UNION ALL combines them. The recursive member uses the previous iteration's results. Stops when the recursive step returns no rows."
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
      "data-qid": "sql-s04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: Can subqueries be used in UPDATE/DELETE?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Yes. UPDATE ... SET col = (subquery) WHERE ... or DELETE FROM ... WHERE col IN (subquery). CTEs also work with UPDATE/DELETE/INSERT, especially with RETURNING clause in PostgreSQL."
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
      "data-qid": "sql-s04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Performance: subquery vs join?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Joins are generally faster because the optimizer can use various join strategies. Subqueries (especially correlated) can be slower as they execute per row. However, EXISTS with a subquery can be faster than a DISTINCT join. Modern optimizers often rewrite subqueries to joins automatically."
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
      "data-qid": "sql-s04-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What is a lateral join/subquery?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "LATERAL allows a subquery in FROM to reference columns from preceding FROM items. Like a correlated subquery but in the FROM clause. Powerful for top-N-per-group, complex calculations. Supported in PostgreSQL, Oracle, MySQL 8+."
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
      "data-qid": "sql-s04-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: How do you handle NULL in subqueries?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "IN with NULL in subquery: if any NULL exists, IN evaluates to unknown for non-matching rows (handled as false in WHERE). NOT IN with NULL: if NULL exists,.\nALL rows are excluded (returns empty). Use NOT EXISTS instead of NOT IN for safety with NULLs."
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
      "data-qid": "sql-s04-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What are derived tables?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A derived table is a subquery in the FROM clause: SELECT * FROM (SELECT ... ) AS alias. Must have an alias. Can be nested. Less reusable than CTEs but useful for intermediate calculations in simple queries."
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
      "data-qid": "sql-s04-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: Difference between ANY and ALL?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ANY: true if condition holds for at least one subquery value (like OR). ALL: true if condition holds for all subquery values (like AND). salary > ANY(SELECT ... ) is same as salary > MIN(...). salary > ALL(...) is same as salary > MAX(...)."
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
      }), ": Correlated subquery references? a) outer query b) itself c) nothing d) another DB"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s04-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) references columns from the outer query"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which clause defines a CTE? a) WITH b) CTE c) USING d) DEFINE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s04-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) WITH"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Recursive CTE uses which operator? a) UNION b) UNION ALL c) JOIN d) INTERSECT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s04-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) UNION ALL"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What's wrong with NOT IN (SELECT ...)? a) slow b) NULL issue c) syntax error d) nothing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s04-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) if subquery returns NULL, NOT IN returns empty"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": ALL with WHERE x > ALL(SELECT y FROM t) is like? a) x > MIN(y) b) x > MAX(y) c) x > AVG(y) d) x > COUNT(y)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s04-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) x > MAX(y) — greater than all is greater than the maximum"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a subquery in SELECT showing each employee's salary vs department average.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Use EXISTS to find customers who placed at least one order.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Rewrite a multi-table join as a CTE with two named subqueries.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a correlated subquery that finds products priced above their category average.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Use a recursive CTE to generate a date series for every day in 2024.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write a recursive CTE to traverse a category hierarchy and compute total products at each level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-lateral-joins",
      children: "4.7 LATERAL Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LATERAL allows subqueries in FROM to reference columns from preceding tables."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- For each department, get the top 3 highest-paid employees\nSELECT d.department_name, top_emp.name, top_emp.salary\nFROM departments d\nCROSS JOIN LATERAL (\n    SELECT name, salary\n    FROM employees\n    WHERE department_id = d.department_id\n    ORDER BY salary DESC\n    LIMIT 3\n) top_emp;\n\n-- Without LATERAL (more complex):\nSELECT d.department_name, e.name, e.salary\nFROM departments d\nJOIN employees e ON d.department_id = e.department_id\nWHERE e.employee_id IN (\n    SELECT e2.employee_id\n    FROM employees e2\n    WHERE e2.department_id = d.department_id\n    ORDER BY e2.salary DESC\n    LIMIT 3\n);\n\n-- LATERAL with functions\nSELECT\n    u.user_id,\n    u.name,\n    recent_orders.*\nFROM users u\nLEFT JOIN LATERAL (\n    SELECT order_id, order_date, amount\n    FROM orders\n    WHERE customer_id = u.user_id\n    ORDER BY order_date DESC\n    LIMIT 5\n) recent_orders ON true;\n\n-- Using LATERAL for complex calculations\nSELECT\n    p.product_id,\n    p.name,\n    stats.avg_price,\n    stats.total_sold\nFROM products p\nLEFT JOIN LATERAL (\n    SELECT\n        AVG(oi.unit_price) AS avg_price,\n        SUM(oi.quantity) AS total_sold\n    FROM order_items oi\n    WHERE oi.product_id = p.product_id\n) stats ON true;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-multiple-ctes-and-cte-modifications",
      children: "4.8 Multiple CTEs and CTE Modifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Multiple CTEs working together\nWITH\nsales_summary AS (\n    SELECT\n        customer_id,\n        COUNT(*) AS total_orders,\n        SUM(amount) AS total_spent,\n        AVG(amount) AS avg_order_value\n    FROM orders\n    WHERE order_date >= DATE('now', '-1 year')\n    GROUP BY customer_id\n),\ncustomer_ranking AS (\n    SELECT\n        c.customer_id,\n        c.name,\n        c.email,\n        COALESCE(s.total_orders, 0) AS total_orders,\n        COALESCE(s.total_spent, 0) AS total_spent,\n        NTILE(4) OVER (ORDER BY s.total_spent DESC NULLS LAST) AS spending_quartile\n    FROM customers c\n    LEFT JOIN sales_summary s ON c.customer_id = s.customer_id\n)\nSELECT *\nFROM customer_ranking\nWHERE spending_quartile = 1  -- top 25%\nORDER BY total_spent DESC;\n\n-- CTE with INSERT\nWITH new_customer AS (\n    INSERT INTO customers (name, email, signup_date)\n    VALUES ('New User', 'new@example.com', CURRENT_DATE)\n    RETURNING customer_id\n)\nINSERT INTO loyalty_program (customer_id, points, tier)\nSELECT customer_id, 100, 'Bronze'\nFROM new_customer;\n\n-- CTE with UPDATE\nWITH dept_avg AS (\n    SELECT department_id, AVG(salary) AS avg_sal\n    FROM employees GROUP BY department_id\n)\nUPDATE employees e\nSET salary = salary * 1.1\nFROM dept_avg d\nWHERE e.department_id = d.department_id\n  AND e.salary < d.avg_sal;\n\n-- CTE with DELETE (archive old records)\nWITH old_orders AS (\n    DELETE FROM orders\n    WHERE order_date < DATE('now', '-3 years')\n    RETURNING *\n)\nINSERT INTO orders_archive\nSELECT * FROM old_orders;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-performance-subqueries-vs-ctes-vs-joins",
      children: "4.9 Performance: Subqueries vs CTEs vs Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Scenario 1: Correlated subquery\nSELECT e.name, e.salary,\n    (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) AS dept_avg\nFROM employees e;\n-- Pro: Simple, self-contained\n-- Con: Runs per outer row (can be slow on large tables)\n\n-- Scenario 2: CTE equivalent\nWITH dept_avg AS (\n    SELECT department_id, AVG(salary) AS avg_sal\n    FROM employees\n    GROUP BY department_id\n)\nSELECT e.name, e.salary, d.avg_sal\nFROM employees e\nLEFT JOIN dept_avg d ON e.department_id = d.department_id;\n-- Pro: Department average computed once\n-- Con: Slightly more verbose\n\n-- Scenario 3: Window function (most efficient for this case)\nSELECT name, salary,\n    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg\nFROM employees;\n-- Pro: Single pass over data\n-- Con: Window functions not available everywhere\n\n-- Performance guidelines:\n-- 1. Use JOIN for straightforward row combining\n-- 2. Use CTE for complex queries needing reuse\n-- 3. Use EXISTS over IN for large subqueries\n-- 4. Use window functions over correlated subqueries\n-- 5. Avoid subqueries in SELECT for large tables\n-- 6. LATERAL joins can replace some correlated subqueries efficiently\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410-recursive-cte-advanced-examples",
      children: "4.10 Recursive CTE Advanced Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Generate a calendar year\nWITH RECURSIVE calendar(date) AS (\n    SELECT DATE('2024-01-01')\n    UNION ALL\n    SELECT DATE(date, '+1 day')\n    FROM calendar\n    WHERE date < '2024-12-31'\n)\nSELECT\n    date,\n    CAST(strftime('%w', date) AS INTEGER) AS day_of_week,\n    CASE CAST(strftime('%w', date) AS INTEGER)\n        WHEN 0 THEN 'Sunday'\n        WHEN 1 THEN 'Monday'\n        WHEN 2 THEN 'Tuesday'\n        WHEN 3 THEN 'Wednesday'\n        WHEN 4 THEN 'Thursday'\n        WHEN 5 THEN 'Friday'\n        WHEN 6 THEN 'Saturday'\n    END AS day_name,\n    strftime('%m', date) AS month,\n    strftime('%Y', date) AS year\nFROM calendar\nWHERE CAST(strftime('%w', date) AS INTEGER) NOT IN (0, 6);  -- exclude weekends\n\n-- Tree traversal with path\nWITH RECURSIVE org_chart AS (\n    -- Anchor: top-level\n    SELECT\n        employee_id,\n        name,\n        manager_id,\n        name AS path,\n        1 AS level\n    FROM employees\n    WHERE manager_id IS NULL\n\n    UNION ALL\n\n    -- Recursive: children\n    SELECT\n        e.employee_id,\n        e.name,\n        e.manager_id,\n        oc.path || ' -> ' || e.name,\n        oc.level + 1\n    FROM employees e\n    JOIN org_chart oc ON e.manager_id = oc.employee_id\n)\nSELECT employee_id, name, level, path\nFROM org_chart\nORDER BY path;\n\n-- Bill of Materials (BOM) explosion\nWITH RECURSIVE bom AS (\n    -- Anchor: top-level product\n    SELECT\n        part_id,\n        part_name,\n        quantity,\n        1 AS level,\n        CAST(quantity AS REAL) AS total_quantity\n    FROM parts\n    WHERE part_id = 1  -- root product\n\n    UNION ALL\n\n    SELECT\n        p.part_id,\n        p.part_name,\n        p.quantity,\n        bom.level + 1,\n        bom.total_quantity * p.quantity\n    FROM parts p\n    JOIN bom ON p.parent_part_id = bom.part_id\n)\nSELECT * FROM bom ORDER BY level, part_name;\n\n-- Graph traversal (social network connections)\nWITH RECURSIVE connections AS (\n    -- Anchor: start user\n    SELECT user_id, 0 AS degrees, CAST(user_id AS TEXT) AS path\n    FROM users WHERE user_id = 1\n\n    UNION ALL\n\n    SELECT\n        f.friend_id,\n        c.degrees + 1,\n        c.path || ',' || f.friend_id\n    FROM connections c\n    JOIN friendships f ON c.user_id = f.user_id\n    WHERE c.degrees < 3  -- limit to 3 degrees\n      AND ',' || c.path || ',' NOT LIKE '%,' || f.friend_id || ',%'  -- avoid cycles\n)\nSELECT DISTINCT user_id, degrees, path\nFROM connections\nWHERE user_id != 1\nORDER BY degrees, user_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "411-common-pitfalls",
      children: "4.11 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Pitfall 1: NOT IN with NULLs\nSELECT name FROM customers\nWHERE customer_id NOT IN (\n    SELECT customer_id FROM orders  -- if ANY customer_id is NULL, returns empty!\n);\n-- Fix: Use NOT EXISTS\nSELECT name FROM customers c\nWHERE NOT EXISTS (\n    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id\n);\n\n-- Pitfall 2: Infinite recursive CTE\nWITH RECURSIVE infinite AS (\n    SELECT 1 AS n\n    UNION ALL\n    SELECT n + 1 FROM infinite  -- no termination condition!\n)\nSELECT * FROM infinite;\n-- Fix: Add WHERE n < 1000 or use MAXRECURSION hint\n\n-- Pitfall 3: Correlated subquery performance\n-- Can be very slow on large tables without proper indexes\n-- Add indexes on the correlation columns\n\n-- Pitfall 4: Ambiguous column names in CTE\nWITH t AS (\n    SELECT id, name FROM table1\n    UNION ALL\n    SELECT id, name FROM table2\n)\nSELECT id FROM t;  -- OK\n-- But if column names differ:\nWITH t AS (\n    SELECT id AS user_id FROM users\n)\nSELECT user_id FROM t;  -- use the alias\n\n-- Pitfall 5: CTE materialization\n-- Some databases materialize CTE results (PostgreSQL < 12)\n-- May be worse than subquery repeated inline\n-- Check with EXPLAIN ANALYZE\n\n-- Pitfall 6: Scalar subquery returns multiple rows\nSELECT name, salary,\n    (SELECT salary FROM employees WHERE department_id = e.department_id)  -- ERROR if multiple\nFROM employees e;\n-- Fix: Use aggregate or ensure single-row subquery\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "412-real-world-cte-applications",
      children: "4.12 Real-World CTE Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Session segmentation analysis (web analytics)\nWITH session_data AS (\n    SELECT\n        user_id,\n        session_start,\n        session_end,\n        duration_seconds,\n        page_views,\n        CASE\n            WHEN page_views = 1 THEN 'Bounce'\n            WHEN duration_seconds > 300 THEN 'Engaged'\n            ELSE 'Casual'\n        END AS session_type\n    FROM sessions\n    WHERE session_start >= DATE('now', '-30 days')\n),\nsegment_summary AS (\n    SELECT\n        session_type,\n        COUNT(*) AS sessions,\n        COUNT(DISTINCT user_id) AS unique_users,\n        AVG(duration_seconds) AS avg_duration,\n        AVG(page_views) AS avg_page_views,\n        SUM(CASE WHEN conversions > 0 THEN 1 ELSE 0 END) AS with_conversion\n    FROM session_data\n    GROUP BY session_type\n)\nSELECT\n    session_type,\n    sessions,\n    unique_users,\n    ROUND(100.0 * sessions / SUM(sessions) OVER(), 1) AS pct_of_total,\n    ROUND(avg_duration, 0) AS avg_duration_secs,\n    ROUND(avg_page_views, 1) AS avg_pages,\n    ROUND(100.0 * with_conversion / sessions, 2) AS conversion_rate\nFROM segment_summary\nORDER BY sessions DESC;\n\n-- Recursive: find all subordinates of a manager\nWITH RECURSIVE team_hierarchy AS (\n    SELECT employee_id, name, 1 AS depth\n    FROM employees\n    WHERE manager_id = 42  -- target manager\n\n    UNION ALL\n\n    SELECT e.employee_id, e.name, th.depth + 1\n    FROM employees e\n    JOIN team_hierarchy th ON e.manager_id = th.employee_id\n)\nSELECT * FROM team_hierarchy ORDER BY depth, name;\n\n-- Moving average with CTE\nWITH daily_revenue AS (\n    SELECT\n        order_date,\n        SUM(amount) AS revenue\n    FROM orders\n    WHERE order_date >= DATE('now', '-60 days')\n    GROUP BY order_date\n),\nrevenue_with_ma AS (\n    SELECT\n        order_date,\n        revenue,\n        AVG(revenue) OVER (\n            ORDER BY order_date\n            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n        ) AS moving_avg_7d,\n        revenue - AVG(revenue) OVER (\n            ORDER BY order_date\n            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n        ) AS deviation\n    FROM daily_revenue\n)\nSELECT * FROM revenue_with_ma\nWHERE moving_avg_7d IS NOT NULL\nORDER BY order_date;\n"
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
            children: "Explain the core idea of Subqueries & CTEs — Correlated, WITH, Recursive in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Subqueries & CTEs — Correlated, WITH, Recursive."
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
            children: "Describe a production bug caused by misunderstanding Subqueries & CTEs — Correlated, WITH, Recursive. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Subqueries & CTEs — Correlated, WITH, Recursive from 10 users to 10 million?"
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
            children: "Compare Subqueries & CTEs — Correlated, WITH, Recursive with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Subqueries & CTEs — Correlated, WITH, Recursive."
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
            children: "How does Subqueries & CTEs — Correlated, WITH, Recursive behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Subqueries & CTEs — Correlated, WITH, Recursive run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Subqueries & CTEs — Correlated, WITH, Recursive that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Subqueries & CTEs — Correlated, WITH, Recursive explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Subqueries & CTEs — Correlated, WITH, Recursive\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Subqueries & CTEs — Correlated, WITH, Recursive to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Subqueries & CTEs — Correlated, WITH, Recursive (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Subqueries & CTEs — Correlated, WITH, Recursive and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Subqueries & CTEs — Correlated, WITH, Recursive-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Subqueries & CTEs — Correlated, WITH, Recursive interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Subqueries & CTEs — Correlated, WITH, Recursive in production today?"
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
        }), " Subqueries & CTEs — Correlated, WITH, Recursive builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Subqueries & CTEs — Correlated, WITH, Recursive before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Subqueries & CTEs — Correlated, WITH, Recursive is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Subqueries & CTEs — Correlated, WITH, Recursive in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Subqueries & CTEs — Correlated, WITH, Recursive chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Subqueries & CTEs — Correlated, WITH, Recursive is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Subqueries & CTEs — Correlated, WITH, Recursive is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Subqueries & CTEs — Correlated, WITH, Recursive is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Subqueries & CTEs — Correlated, WITH, Recursive issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Subqueries & CTEs — Correlated, WITH, Recursive in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Subqueries & CTEs — Correlated, WITH, Recursive that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Subqueries & CTEs — Correlated, WITH, Recursive is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Subqueries & CTEs — Correlated, WITH, Recursive in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Subqueries & CTEs — Correlated, WITH, Recursive and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Subqueries & CTEs — Correlated, WITH, Recursive on an empty input?"
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
            children: "Complete Medium exercises, explain Subqueries & CTEs — Correlated, WITH, Recursive to someone else"
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
        children: "Always write a one-line example of Subqueries & CTEs — Correlated, WITH, Recursive from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Subqueries & CTEs — Correlated, WITH, Recursive when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Subqueries & CTEs — Correlated, WITH, Recursive twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Subqueries & CTEs — Correlated, WITH, Recursive snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Subqueries & CTEs — Correlated, WITH, Recursive listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Subqueries & CTEs — Correlated, WITH, Recursive to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Subqueries & CTEs — Correlated, WITH, Recursive by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Subqueries & CTEs — Correlated, WITH, Recursive to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Subqueries & CTEs — Correlated, WITH, Recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Subqueries & CTEs — Correlated, WITH, Recursive (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Subqueries & CTEs — Correlated, WITH, Recursive problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Subqueries & CTEs — Correlated, WITH, Recursive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Subqueries & CTEs — Correlated, WITH, Recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Subqueries & CTEs — Correlated, WITH, Recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Subqueries & CTEs — Correlated, WITH, Recursive fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Subqueries & CTEs — Correlated, WITH, Recursive is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Subqueries & CTEs — Correlated, WITH, Recursive is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Subqueries & CTEs — Correlated, WITH, Recursive, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Subqueries & CTEs — Correlated, WITH, Recursive asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subqueries & CTEs — Correlated, WITH, Recursive is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Subqueries & CTEs — Correlated, WITH, Recursive."
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
        children: "Subqueries & CTEs — Correlated, WITH, Recursive emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Subqueries & CTEs — Correlated, WITH, Recursive today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Subqueries & CTEs — Correlated, WITH, Recursive — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Subqueries & CTEs — Correlated, WITH, Recursive changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Subqueries & CTEs — Correlated, WITH, Recursive."
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
        children: "Subqueries & CTEs — Correlated, WITH, Recursive appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Subqueries & CTEs — Correlated, WITH, Recursive helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Subqueries & CTEs — Correlated, WITH, Recursive concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Subqueries & CTEs — Correlated, WITH, Recursive skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Subqueries & CTEs — Correlated, WITH, Recursive to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subqueries & CTEs — Correlated, WITH, Recursive is like a recipe"
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
        }), " — this chapter contributes the Subqueries & CTEs — Correlated, WITH, Recursive skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-04subqueriesandctes-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Subqueries & CTEs — Correlated, WITH, Recursive in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-04subqueriesandctes-flash2",
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
      "data-qid": "02sqlanddatabases-04subqueriesandctes-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Subqueries & CTEs — Correlated, WITH, Recursive approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-04subqueriesandctes-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Subqueries & CTEs — Correlated, WITH, Recursive NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-04subqueriesandctes-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Subqueries & CTEs — Correlated, WITH, Recursive applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Subqueries & CTEs — Correlated, WITH, Recursive (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Subqueries & CTEs — Correlated, WITH, Recursive (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Subqueries & CTEs — Correlated, WITH, Recursive-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Subqueries & CTEs — Correlated, WITH, Recursive in production at scale"
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
        children: "Testing: pytest for unit tests of Subqueries & CTEs — Correlated, WITH, Recursive code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Subqueries & CTEs — Correlated, WITH, Recursive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Subqueries & CTEs — Correlated, WITH, Recursive code."]
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
        }), " or your IDE's debugger to step through the Subqueries & CTEs — Correlated, WITH, Recursive example code."]
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
        children: "Explain Subqueries & CTEs — Correlated, WITH, Recursive in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Subqueries & CTEs — Correlated, WITH, Recursive."
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
        children: "Tell me about a time you debugged a Subqueries & CTEs — Correlated, WITH, Recursive problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Subqueries & CTEs — Correlated, WITH, Recursive is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Subqueries & CTEs — Correlated, WITH, Recursive."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Subqueries & CTEs — Correlated, WITH, Recursive logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Subqueries & CTEs — Correlated, WITH, Recursive without notes"
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
        }), ": a small team uses Subqueries & CTEs — Correlated, WITH, Recursive daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Subqueries & CTEs — Correlated, WITH, Recursive patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Subqueries & CTEs — Correlated, WITH, Recursive principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Subqueries & CTEs — Correlated, WITH, Recursive shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Subqueries & CTEs — Correlated, WITH, Recursive to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/05-window-functions",
        children: "Window Functions — ROW_NUMBER, RANK, LAG, LEAD, NTILE, Frames"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subqueries & CTEs — Correlated, WITH, Recursive, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Subqueries & CTEs — Correlated, WITH, Recursive depends on input size and distribution — always benchmark for your own data."
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