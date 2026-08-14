"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[23446],{

/***/ 71163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_02_aggregate_functions_md_bfe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-02-aggregate-functions-md-bfe.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_02_aggregate_functions_md_bfe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/02-aggregate-functions","title":"Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"id":"02-aggregate-functions","slug":"/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions","title":"Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING","sidebar_label":"Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING","sidebar_position":25},"sidebar":"placementSidebar","previous":{"title":"SQL Basics — SELECT, WHERE, ORDER BY, DML","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/01-sql-basics"},"next":{"title":"Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/03-joins"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions.md


const frontMatter = {
	id: '02-aggregate-functions',
	slug: '/ai-engineering-placement/02-sql-and-databases/02-aggregate-functions',
	title: 'Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING',
	sidebar_label: 'Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING',
	sidebar_position: 25
};
const contentTitle = 'Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING';

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
  "value": "2.1 Basic Aggregates",
  "id": "21-basic-aggregates",
  "level": 2
}, {
  "value": "2.2 GROUP BY",
  "id": "22-group-by",
  "level": 2
}, {
  "value": "2.3 HAVING",
  "id": "23-having",
  "level": 2
}, {
  "value": "2.4 DISTINCT with Aggregates",
  "id": "24-distinct-with-aggregates",
  "level": 2
}, {
  "value": "2.5 NULL Handling",
  "id": "25-null-handling",
  "level": 2
}, {
  "value": "2.6 Multi-Aggregate Reports",
  "id": "26-multi-aggregate-reports",
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
  "value": "2.7 Window Functions Introduction",
  "id": "27-window-functions-introduction",
  "level": 2
}, {
  "value": "2.8 GROUP BY Extensions",
  "id": "28-group-by-extensions",
  "level": 2
}, {
  "value": "2.9 Common Mistakes",
  "id": "29-common-mistakes",
  "level": 2
}, {
  "value": "2.10 Advanced Report Examples",
  "id": "210-advanced-report-examples",
  "level": 2
}, {
  "value": "2.11 Performance Considerations",
  "id": "211-performance-considerations",
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
        id: "aggregate-functions--count-sum-avg-group-by-having",
        children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
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
            children: "Use COUNT, SUM, AVG, MIN, MAX for data summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group rows with GROUP BY and understand grouping behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter groups with HAVING (vs WHERE for rows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DISTINCT with aggregate functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle NULLs in aggregate calculations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create summary reports with multiple aggregate columns"
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
      children: "Understanding aggregate functions is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how aggregate functions works in practice."
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Aggregates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT, SUM, AVG, MIN, MAX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping rows, multiple columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering groups after aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT with Aggregates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT DISTINCT, unique counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How aggregates treat NULLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Aggregate Reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining aggregates in one query"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Aggregate Functions] --> B[COUNT/SUM/AVG]\n    A --> C[MIN/MAX]\n    A --> D[GROUP BY]\n    D --> E[HAVING filter]\n    F[DISTINCT] --> G[COUNT DISTINCT]\n    H[NULL behavior] -.-> A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-basic-aggregates",
      children: "2.1 Basic Aggregates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT COUNT(*) FROM employees;\nSELECT COUNT(employee_id) FROM employees;  -- non-null count\nSELECT SUM(salary) AS total_payroll FROM employees;\nSELECT AVG(salary) AS average_salary FROM employees;\nSELECT MIN(salary) AS lowest, MAX(salary) AS highest FROM employees;\nSELECT COUNT(*), SUM(amount), AVG(amount), MIN(amount), MAX(amount) FROM orders;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "data = [75000, 68000, 82000, 72000]\nprint(f\"Count: {len(data)}\")\nprint(f\"Sum: {sum(data)}\")\nprint(f\"Avg: {sum(data)/len(data):.0f}\")\nprint(f\"Min: {min(data)}, Max: {max(data)}\")\n\n## Count: 4, Sum: 297000, Avg: 74250, Min: 68000, Max: 82000\n\nimport sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE emp(id, name, salary, dept)\")\ncur.executemany(\"INSERT INTO emp VALUES (?,?,?,?)\", [\n    (1,\"Alice\",75000,\"Eng\"), (2,\"Bob\",68000,\"Eng\"),\n    (3,\"Charlie\",82000,\"Sales\"), (4,\"Diana\",72000,\"Sales\"),\n])\ncur.execute(\"SELECT dept, AVG(salary), MAX(salary) FROM emp GROUP BY dept\")\nfor row in cur.fetchall():\n    print(f\"{row[0]}: avg={row[1]:.0f}, max={row[2]}\")\n\n## Eng: avg=71500, max=75000\n\n## Sales: avg=77000, max=82000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-group-by",
      children: "2.2 GROUP BY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GROUP BY splits rows into groups and applies aggregate functions per group."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Single column group\nSELECT department_id, COUNT(*) AS emp_count\nFROM employees\nGROUP BY department_id;\n\n-- Multiple columns\nSELECT department_id, job_id, COUNT(*) AS count\nFROM employees\nGROUP BY department_id, job_id\nORDER BY department_id, count DESC;\n\n-- GROUP BY with expressions\nSELECT EXTRACT(YEAR FROM hire_date) AS year, COUNT(*) AS hires\nFROM employees\nGROUP BY EXTRACT(YEAR FROM hire_date);\n\n-- All non-aggregate columns in SELECT must be in GROUP BY\nSELECT dept_id, job_id, COUNT(*)\nFROM employees\nGROUP BY dept_id, job_id;\n-- Error: SELECT name (not in GROUP BY or aggregate)\n\n-- GROUP BY without aggregate — acts like DISTINCT\nSELECT department_id FROM employees GROUP BY department_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-having",
      children: "2.3 HAVING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAVING filters groups after aggregation (WHERE filters rows before aggregation)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Departments with more than 5 employees\nSELECT department_id, COUNT(*) AS headcount\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 5\nORDER BY headcount DESC;\n\n-- Departments with average salary > 80000\nSELECT department_id, AVG(salary) AS avg_sal\nFROM employees\nGROUP BY department_id\nHAVING AVG(salary) > 80000;\n\n-- WHERE filters rows, HAVING filters groups\nSELECT department_id, AVG(salary) AS avg_sal\nFROM employees\nWHERE hire_date > '2020-01-01'    -- filter rows first\nGROUP BY department_id\nHAVING AVG(salary) > 70000;       -- then filter groups\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHERE vs HAVING"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Clause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Use Aggregates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Use Aliases"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (some DBs)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\ndf = pd.DataFrame({\n    \"dept\": [\"Eng\",\"Eng\",\"Sales\",\"Sales\"],\n    \"salary\": [75000, 68000, 82000, 72000]\n})\nresult = df.groupby(\"dept\").agg(avg_salary=(\"salary\", \"mean\"), count=(\"salary\", \"count\"))\nresult = result[result[\"avg_salary\"] > 70000]\nprint(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-distinct-with-aggregates",
      children: "2.4 DISTINCT with Aggregates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Count total vs distinct\nSELECT COUNT(*) AS total, COUNT(DISTINCT department_id) AS unique_depts\nFROM employees;\n\n-- COUNT DISTINCT\nSELECT department_id, COUNT(DISTINCT job_id) AS unique_jobs\nFROM employees\nGROUP BY department_id;\n\n-- SUM DISTINCT\nSELECT SUM(DISTINCT salary) FROM employees;  -- sum of unique salaries\n\n-- Multi-column distinct count (not standard SQL)\n-- COUNT(DISTINCT col1, col2) — supported in PostgreSQL, SQL Server\nSELECT COUNT(DISTINCT (department_id, job_id)) FROM employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-null-handling",
      children: "2.5 NULL Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "conn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE scores (name, score)\")\ncur.executemany(\"INSERT INTO scores VALUES (?,?)\", [\n    (\"Alice\", 95), (\"Bob\", None), (\"Charlie\", 88), (\"Diana\", None)\n])\n\n## COUNT(*) includes NULL rows; COUNT(score) excludes NULLs\ncur.execute(\"SELECT COUNT(*), COUNT(score), AVG(score) FROM scores\")\nprint(cur.fetchone())  # (4, 2, 91.5) — NULLs ignored in AVG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- NULLs in aggregates\nSELECT COUNT(*) FROM scores;      -- 4 (includes all rows)\nSELECT COUNT(score) FROM scores;  -- 2 (excludes NULLs)\nSELECT AVG(score) FROM scores;    -- (95+88)/2 = 91.5\nSELECT SUM(score) FROM scores;    -- 183 (NULLs skipped)\nSELECT MIN(score) FROM scores;    -- 88\n\n-- COALESCE for default values\nSELECT AVG(COALESCE(score, 0)) FROM scores;  -- (95+0+88+0)/4 = 45.75\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-multi-aggregate-reports",
      children: "2.6 Multi-Aggregate Reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Comprehensive department report\nSELECT\n    department_id,\n    COUNT(*) AS employee_count,\n    SUM(salary) AS total_salary,\n    ROUND(AVG(salary), 2) AS avg_salary,\n    MIN(salary) AS min_salary,\n    MAX(salary) AS max_salary,\n    ROUND(AVG(salary) - MIN(salary), 2) AS salary_spread\nFROM employees\nWHERE active = 1\nGROUP BY department_id\nHAVING COUNT(*) >= 3\nORDER BY avg_salary DESC;\n\n-- Monthly sales summary\nSELECT\n    strftime('%Y-%m', order_date) AS month,\n    COUNT(*) AS orders,\n    SUM(amount) AS revenue,\n    AVG(amount) AS avg_order,\n    COUNT(DISTINCT customer_id) AS unique_customers\nFROM orders\nGROUP BY month\nORDER BY month;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Employee = { name: string; dept: string; salary: number };\n\nconst employees: Employee[] = [\n    { name: \"Alice\", dept: \"Eng\", salary: 75000 },\n    { name: \"Bob\", dept: \"Eng\", salary: 68000 },\n];\n\n// Group by\nconst grouped = employees.reduce((acc, emp) => {\n    if (!acc[emp.dept]) acc[emp.dept] = [];\n    acc[emp.dept].push(emp.salary);\n    return acc;\n}, {} as Record<string, number[]>);\n\nfor (const [dept, salaries] of Object.entries(grouped)) {\n    const avg = salaries.reduce((a, b) => a + b, 0) / salaries.length;\n    console.log(${dept}: avg=, count=);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate functions summarize data: COUNT, SUM, AVG, MIN, MAX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GROUP BY splits rows into groups; non-aggregate columns in SELECT must be in GROUP BY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HAVING filters groups after aggregation (WHERE filters rows before)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "COUNT(*) includes all rows; COUNT(col) excludes NULLs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AVG(col) ignores NULLs; use AVG(COALESCE(col, 0)) to include as zero"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DISTINCT with aggregates: COUNT(DISTINCT col) counts unique values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple aggregates can be combined in one SELECT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ORDER BY works after GROUP BY — can use aggregate expressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GROUP BY without aggregate functions acts like DISTINCT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use COALESCE to handle NULL defaults in aggregate calculations"
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
            children: "Count rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(col) if NULLs exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count unique values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(DISTINCT col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subquery with DISTINCT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter before group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING (slower)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter after group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE (can't use aggregate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handle NULL in AVG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVG(COALESCE(col, 0))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVG(col) ignoring zeros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Group by year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY EXTRACT(YEAR FROM date)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Casting to string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Summary report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple aggregates in one SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is the difference between WHERE and HAVING?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "WHERE filters individual rows before grouping. HAVING filters groups after aggregation. WHERE cannot use aggregate functions; HAVING can. WHERE is executed first, reducing rows for aggregation."
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
      "data-qid": "sql-s02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How does AVG handle NULL values?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "AVG ignores NULL values — it divides by the count of non-NULL rows only. To include NULLs as zeros: AVG(COALESCE(col, 0)). The same applies to SUM, COUNT(col), MIN, MAX."
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
      "data-qid": "sql-s02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: Can you GROUP BY without an aggregate function?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Yes, but it acts like SELECT DISTINCT — it returns unique combinations of the grouped columns. This is generally less efficient than DISTINCT. Most practical GROUP BY queries include aggregate functions."
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
      "data-qid": "sql-s02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: What is the difference between COUNT(*) and COUNT(column)?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "COUNT(*) counts all rows in the group, including rows with NULL values. COUNT(column) counts only rows where that column is NOT NULL. COUNT(DISTINCT column) counts unique non-null values."
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
      "data-qid": "sql-s02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: Can you use column aliases in GROUP BY or HAVING?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Most databases allow column aliases in GROUP BY (PostgreSQL, MySQL, SQLite). HAVING may or may not support aliases depending on the database (PostgreSQL supports them, MySQL does not). ORDER BY always supports aliases. For portability, repeat the expression."
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
      "data-qid": "sql-s02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How do you find duplicates with GROUP BY?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "GROUP BY the columns that should be unique, use HAVING COUNT(*) > 1: SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1. This returns all duplicate emails along with their count."
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
      "data-qid": "sql-s02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What is execution order of a query with GROUP BY?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT. This explains why aliases created in SELECT aren't available in WHERE/GROUP BY, and why HAVING can use aggregate functions."
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
      "data-qid": "sql-s02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Can you nest aggregate functions?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard SQL does not allow nested aggregates (AVG(SUM(...))). Use subqueries or CTEs instead: SELECT AVG(dept_total) FROM (SELECT SUM(salary) AS dept_total FROM emp GROUP BY dept). Some databases (PostgreSQL, SQL Server) allow window functions for intermediate aggregates."
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
      "data-qid": "sql-s02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How do you get the top N per group?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use window functions: SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn FROM emp) WHERE rn <= 3. Or use a LATERAL join / correlated subquery for databases without window functions."
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
      "data-qid": "sql-s02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is ROLLUP and CUBE?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ROLLUP and CUBE are GROUP BY extensions that generate subtotals and grand totals. ROLLUP creates hierarchical subtotals: GROUP BY ROLLUP(year, month) gives totals per year and overall. CUBE creates all combinations: GROUP BY CUBE(a, b) gives subtotals for a, b, and overall."
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
      }), ": Which clause filters groups after aggregation? a) WHERE b) HAVING c) FILTER d) GROUP BY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s02-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) HAVING"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": COUNT(*) counts what? a) non-NULL rows b) all rows c) unique values d) non-NULL columns"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s02-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) all rows regardless of NULLs"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": SELECT dept, COUNT(*) FROM emp GROUP BY dept — what's missing? a) HAVING b) nothing, it's valid c) ORDER BY d) WHERE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s02-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) nothing, valid query"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which is correct? a) WHERE AVG(sal) > 0 b) HAVING AVG(sal) > 0 c) both d) neither"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s02-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) HAVING can use aggregate functions; WHERE cannot"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does AVG of (10, NULL, 20) return? a) 15 b) 10 c) 20 d) NULL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "sql-s02-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) 15 (NULL ignored; average of 10 and 20)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a query that counts the number of customers who signed up in each year."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Find the average price of products in each category."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a query that shows departments with more than 10 employees and average salary below 50000, ordered by headcount desc."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Find customers who have placed more than 5 orders, showing their name, order count, and total spent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write a query using GROUP BY ROLLUP to show sales totals by region and product category with subtotals."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Create a department comparison report showing: dept, employee count, total salary, avg salary, salary range, and the difference from company-wide avg."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-window-functions-introduction",
      children: "2.7 Window Functions Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Window functions perform calculations across a set of rows related to the current row."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ROW_NUMBER: sequential number within partition\nSELECT\n    name,\n    department_id,\n    salary,\n    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_in_dept\nFROM employees;\n\n-- RANK and DENSE_RANK\nSELECT\n    name, salary,\n    RANK() OVER (ORDER BY salary DESC) AS rank,        -- skips ties\n    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense  -- no skips\nFROM employees;\n\n-- Aggregate window functions\nSELECT\n    name, department_id, salary,\n    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg,\n    salary - AVG(salary) OVER (PARTITION BY department_id) AS diff_from_avg,\n    MAX(salary) OVER (PARTITION BY department_id) AS dept_max,\n    ROUND(salary * 100.0 / SUM(salary) OVER (PARTITION BY department_id), 2) AS pct_of_dept\nFROM employees;\n\n-- Running totals and moving averages\nSELECT\n    order_date, amount,\n    SUM(amount) OVER (ORDER BY order_date) AS running_total,\n    AVG(amount) OVER (ORDER BY order_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3,\n    SUM(amount) OVER (ORDER BY order_date ROWS UNBOUNDED PRECEDING) AS cumulative_sum\nFROM orders\nORDER BY order_date;\n\n-- FIRST_VALUE and LAST_VALUE\nSELECT\n    name, department_id, salary,\n    FIRST_VALUE(name) OVER (PARTITION BY department_id ORDER BY salary DESC) AS top_earner,\n    LAST_VALUE(name) OVER (\n        PARTITION BY department_id ORDER BY salary DESC\n        RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING\n    ) AS lowest_earner\nFROM employees;\n\n-- LAG and LEAD for comparing with adjacent rows\nSELECT\n    order_date, amount,\n    LAG(amount, 1) OVER (ORDER BY order_date) AS prev_order_amount,\n    amount - LAG(amount, 1) OVER (ORDER BY order_date) AS change_from_prev,\n    LEAD(amount, 1) OVER (ORDER BY order_date) AS next_order_amount\nFROM orders\nORDER BY order_date;\n\n-- NTILE for bucketing\nSELECT\n    name, salary,\n    NTILE(4) OVER (ORDER BY salary DESC) AS salary_quartile\nFROM employees;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-group-by-extensions",
      children: "2.8 GROUP BY Extensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- GROUPING SETS: multiple groupings in one query\nSELECT\n    COALESCE(department_id, -1) AS dept,\n    COALESCE(job_id, -1) AS job,\n    COUNT(*) AS emp_count,\n    AVG(salary) AS avg_salary\nFROM employees\nGROUP BY GROUPING SETS (\n    (department_id, job_id),\n    (department_id),\n    (job_id),\n    ()\n);\n\n-- ROLLUP: hierarchical subtotals\nSELECT\n    department_id,\n    job_id,\n    COUNT(*) AS emp_count,\n    SUM(salary) AS total_salary\nFROM employees\nGROUP BY ROLLUP(department_id, job_id);\n-- Creates subtotals for each department and grand total\n\n-- CUBE: all combinations of subtotals\nSELECT\n    EXTRACT(YEAR FROM hire_date) AS year,\n    department_id,\n    COUNT(*) AS hires,\n    AVG(salary) AS avg_salary\nFROM employees\nGROUP BY CUBE(year, department_id);\n-- Subtotals for year, department_id, and grand total\n\n-- Practical monthly report with ROLLUP\nSELECT\n    EXTRACT(YEAR FROM order_date) AS year,\n    EXTRACT(MONTH FROM order_date) AS month,\n    COUNT(*) AS orders,\n    SUM(amount) AS revenue,\n    AVG(amount) AS avg_order\nFROM orders\nGROUP BY ROLLUP(year, month)\nORDER BY year, month;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-common-mistakes",
      children: "2.9 Common Mistakes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Mistake 1: Using WHERE instead of HAVING for aggregate filters\nSELECT department_id, AVG(salary) AS avg_sal\nFROM employees\nWHERE AVG(salary) > 70000  -- ERROR: can't use aggregate in WHERE\nGROUP BY department_id;\n-- Correct:\nSELECT department_id, AVG(salary) AS avg_sal\nFROM employees\nGROUP BY department_id\nHAVING AVG(salary) > 70000;\n\n-- Mistake 2: Missing non-aggregate columns from GROUP BY\nSELECT department_id, job_id, COUNT(*)  -- job_id not in GROUP BY\nFROM employees\nGROUP BY department_id;\n-- Error: column job_id must appear in GROUP BY or be in an aggregate\n\n-- Mistake 3: Assuming COUNT(*) equals COUNT(column)\nSELECT COUNT(*) FROM employees;  -- all rows including those with NULL dept\nSELECT COUNT(department_id) FROM employees;  -- excludes NULL department_id\n\n-- Mistake 4: Nested aggregates\nSELECT AVG(SUM(salary)) FROM employees;  -- ERROR: can't nest aggregates\n-- Correct with subquery:\nSELECT AVG(dept_total) FROM (\n    SELECT department_id, SUM(salary) AS dept_total\n    FROM employees GROUP BY department_id\n);\n\n-- Mistake 5: Forgetting that AVG ignores NULLs\n-- If you want NULL treated as 0:\nSELECT AVG(COALESCE(score, 0)) FROM exam_results;\n\n-- Mistake 6: FILTER clause vs WHERE\n-- WHERE filters before aggregation\n-- FILTER filters within aggregation (PostgreSQL 9.4+)\nSELECT\n    COUNT(*) AS total,\n    COUNT(*) FILTER (WHERE score >= 90) AS excellent,\n    COUNT(*) FILTER (WHERE score >= 70) AS passing\nFROM exam_results;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-advanced-report-examples",
      children: "2.10 Advanced Report Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Employee demographics report\nSELECT\n    department_id,\n    COUNT(*) AS headcount,\n    ROUND(AVG(salary), 2) AS avg_salary,\n    ROUND(STDDEV(salary), 2) AS salary_stddev,\n    MIN(salary) AS min_salary,\n    MAX(salary) AS max_salary,\n    MAX(salary) - MIN(salary) AS salary_range,\n    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) AS median_salary,\n    SUM(CASE WHEN salary > 100000 THEN 1 ELSE 0 END) AS high_earners,\n    ROUND(AVG(CASE WHEN gender = 'F' THEN salary END), 2) AS avg_female_salary,\n    ROUND(AVG(CASE WHEN gender = 'M' THEN salary END), 2) AS avg_male_salary\nFROM employees\nWHERE active = TRUE\nGROUP BY department_id\nHAVING COUNT(*) >= 5\nORDER BY avg_salary DESC;\n\n-- Sales funnel analysis\nSELECT\n    stage,\n    COUNT(*) AS prospects,\n    COUNT(*) * 100.0 / MAX(COUNT(*)) OVER () AS pct_of_total,\n    COUNT(*) * 100.0 / LAG(COUNT(*)) OVER (ORDER BY stage_order) AS conversion_rate\nFROM sales_pipeline\nGROUP BY stage, stage_order\nORDER BY stage_order;\n\n-- Inventory turnover by category\nSELECT\n    category_id,\n    COUNT(DISTINCT product_id) AS products,\n    SUM(quantity_sold) AS total_sold,\n    AVG(quantity_sold) AS avg_per_product,\n    SUM(revenue) AS total_revenue,\n    SUM(revenue) / NULLIF(SUM(quantity_sold), 0) AS avg_price,\n    SUM(quantity_sold) * 1.0 / AVG(stock_level) AS turnover_ratio\nFROM sales_data\nWHERE sale_date >= DATE('now', '-1 year')\nGROUP BY category_id\nORDER BY turnover_ratio DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-performance-considerations",
      children: "2.11 Performance Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- 1. Filter before aggregating\n-- BAD: Groups all rows, then filters\nSELECT department_id, AVG(salary)\nFROM employees\nGROUP BY department_id\nHAVING department_id IN (1, 2, 3);\n\n-- GOOD: Filters before group by\nSELECT department_id, AVG(salary)\nFROM employees\nWHERE department_id IN (1, 2, 3)\nGROUP BY department_id;\n\n-- 2. Use indexes on GROUP BY and WHERE columns\nCREATE INDEX idx_emp_dept ON employees(department_id);\nCREATE INDEX idx_emp_salary ON employees(salary);\n\n-- 3. Avoid DISTINCT in aggregate subqueries\n-- BAD: Subquery computes all rows\nSELECT department_id,\n    (SELECT COUNT(DISTINCT employee_id) FROM projects WHERE dept_id = e.department_id)\nFROM employees e;\n-- BETTER: Pre-aggregate in a CTE\n\n-- 4. Consider materialized views for heavy reports\nCREATE MATERIALIZED VIEW dept_summary AS\nSELECT department_id, COUNT(*), AVG(salary), SUM(salary)\nFROM employees GROUP BY department_id;\n"
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
            children: "Explain the core idea of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING."
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
            children: "Describe a production bug caused by misunderstanding Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING from 10 users to 10 million?"
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
            children: "Compare Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING."
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
            children: "How does Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in production today?"
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
        }), " Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING on an empty input?"
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
            children: "Complete Medium exercises, explain Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING to someone else"
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
        children: "Always write a one-line example of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING."
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
        children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING."
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
        children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is like a recipe"
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
        }), " — this chapter contributes the Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-02aggregatefunctions-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-02aggregatefunctions-flash2",
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
      "data-qid": "02sqlanddatabases-02aggregatefunctions-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-02aggregatefunctions-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "02sqlanddatabases-02aggregatefunctions-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in production at scale"
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
        children: "Testing: pytest for unit tests of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING code."]
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
        }), " or your IDE's debugger to step through the Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING example code."]
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
        children: "Explain Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING."
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
        children: "Tell me about a time you debugged a Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING without notes"
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
        }), ": a small team uses Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/03-joins",
        children: "Joins — INNER, LEFT, RIGHT, FULL, CROSS, Self-Joins"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Aggregate Functions — COUNT, SUM, AVG, GROUP BY, HAVING depends on input size and distribution — always benchmark for your own data."
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