"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[67654],{

/***/ 77686
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_interview_preparation_04_database_sql_interview_md_50e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-interview-preparation-04-database-sql-interview-md-50e.json
const site_docs_courses_interview_preparation_04_database_sql_interview_md_50e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/interview-preparation/04-database-sql-interview","title":"Chapter 4: Database and SQL Interview","description":"Learning Objectives","source":"@site/docs/courses/interview-preparation/04-database-sql-interview.md","sourceDirName":"courses/interview-preparation","slug":"/interview-preparation/04-database-sql-interview","permalink":"/ai-engineering-journey/interview-preparation/04-database-sql-interview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-database-sql-interview","slug":"/interview-preparation/04-database-sql-interview","title":"Chapter 4: Database and SQL Interview","sidebar_label":"Chapter 4: Database and SQL Interview","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: System Design Interview","permalink":"/ai-engineering-journey/interview-preparation/03-system-design-interview"},"next":{"title":"Chapter 5: Behavioral and HR Interview","permalink":"/ai-engineering-journey/interview-preparation/05-behavioral-hr-interview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/interview-preparation/04-database-sql-interview.md


const frontMatter = {
	id: '04-database-sql-interview',
	slug: '/interview-preparation/04-database-sql-interview',
	title: 'Chapter 4: Database and SQL Interview',
	sidebar_label: 'Chapter 4: Database and SQL Interview',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Database and SQL Interview';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 2
}, {
  "value": "SQL Execution Order",
  "id": "sql-execution-order",
  "level": 3
}, {
  "value": "Sample Tables Used Across Problems",
  "id": "sample-tables-used-across-problems",
  "level": 3
}, {
  "value": "Section 1: Basic SELECT and Filtering (10 Problems)",
  "id": "section-1-basic-select-and-filtering-10-problems",
  "level": 2
}, {
  "value": "Q1: Retrieve all employees earning more than 50000.",
  "id": "q1-retrieve-all-employees-earning-more-than-50000",
  "level": 3
}, {
  "value": "Q2: Find employees hired in 2023.",
  "id": "q2-find-employees-hired-in-2023",
  "level": 3
}, {
  "value": "Q3: List departments without employees (using NOT EXISTS).",
  "id": "q3-list-departments-without-employees-using-not-exists",
  "level": 3
}, {
  "value": "Q4: Find employees whose names start with &#39;S&#39; and end with &#39;n&#39;.",
  "id": "q4-find-employees-whose-names-start-with-s-and-end-with-n",
  "level": 3
}, {
  "value": "Q5: Show top 5 highest paid employees.",
  "id": "q5-show-top-5-highest-paid-employees",
  "level": 3
}, {
  "value": "Q6: Find the oldest employee in each department.",
  "id": "q6-find-the-oldest-employee-in-each-department",
  "level": 3
}, {
  "value": "Q7: Count employees per department, showing only departments with more than 5 employees.",
  "id": "q7-count-employees-per-department-showing-only-departments-with-more-than-5-employees",
  "level": 3
}, {
  "value": "Q8: Find employees who have no manager assigned.",
  "id": "q8-find-employees-who-have-no-manager-assigned",
  "level": 3
}, {
  "value": "Q9: Calculate salary statistics per department.",
  "id": "q9-calculate-salary-statistics-per-department",
  "level": 3
}, {
  "value": "Q10: Find employees whose salary is within 10% of the department average.",
  "id": "q10-find-employees-whose-salary-is-within-10-of-the-department-average",
  "level": 3
}, {
  "value": "Section 2: JOIN Operations (10 Problems)",
  "id": "section-2-join-operations-10-problems",
  "level": 2
}, {
  "value": "Q11: List employees with their department names (INNER JOIN).",
  "id": "q11-list-employees-with-their-department-names-inner-join",
  "level": 3
}, {
  "value": "Q12: Show all employees including those in departments that don&#39;t exist (LEFT JOIN).",
  "id": "q12-show-all-employees-including-those-in-departments-that-dont-exist-left-join",
  "level": 3
}, {
  "value": "Q13: Find employees who work on projects with budgets over 100000.",
  "id": "q13-find-employees-who-work-on-projects-with-budgets-over-100000",
  "level": 3
}, {
  "value": "Q14: Self-join: Find employees and their managers&#39; names.",
  "id": "q14-self-join-find-employees-and-their-managers-names",
  "level": 3
}, {
  "value": "Q15: Find employees who work on MORE THAN one project.",
  "id": "q15-find-employees-who-work-on-more-than-one-project",
  "level": 3
}, {
  "value": "Q16: Cross join to generate all possible employee-project combinations.",
  "id": "q16-cross-join-to-generate-all-possible-employee-project-combinations",
  "level": 3
}, {
  "value": "Q17: Find departments that have NO projects assigned.",
  "id": "q17-find-departments-that-have-no-projects-assigned",
  "level": 3
}, {
  "value": "Q18: Complex JOIN: Find employees who earn more than their managers.",
  "id": "q18-complex-join-find-employees-who-earn-more-than-their-managers",
  "level": 3
}, {
  "value": "Q19: Find employees assigned to ALL projects in the company (Division operation).",
  "id": "q19-find-employees-assigned-to-all-projects-in-the-company-division-operation",
  "level": 3
}, {
  "value": "Q20: Find projects with NO employee assigned.",
  "id": "q20-find-projects-with-no-employee-assigned",
  "level": 3
}, {
  "value": "Section 3: Aggregate Functions and GROUP BY (8 Problems)",
  "id": "section-3-aggregate-functions-and-group-by-8-problems",
  "level": 2
}, {
  "value": "Q21: Find the department with the highest average salary.",
  "id": "q21-find-the-department-with-the-highest-average-salary",
  "level": 3
}, {
  "value": "Q22: Calculate the total hours worked per employee across all projects.",
  "id": "q22-calculate-the-total-hours-worked-per-employee-across-all-projects",
  "level": 3
}, {
  "value": "Q23: Find the second highest salary without using LIMIT/OFFSET.",
  "id": "q23-find-the-second-highest-salary-without-using-limitoffset",
  "level": 3
}, {
  "value": "Q24: Count employees hired in each year.",
  "id": "q24-count-employees-hired-in-each-year",
  "level": 3
}, {
  "value": "Q25: Find the month with the highest number of hires.",
  "id": "q25-find-the-month-with-the-highest-number-of-hires",
  "level": 3
}, {
  "value": "Q26: Calculate the cumulative salary expense by department.",
  "id": "q26-calculate-the-cumulative-salary-expense-by-department",
  "level": 3
}, {
  "value": "Q27: Find employees whose salary is above the average for their department.",
  "id": "q27-find-employees-whose-salary-is-above-the-average-for-their-department",
  "level": 3
}, {
  "value": "Q28: Minimum, maximum, and range of salaries across the company.",
  "id": "q28-minimum-maximum-and-range-of-salaries-across-the-company",
  "level": 3
}, {
  "value": "Section 4: Subqueries (8 Problems)",
  "id": "section-4-subqueries-8-problems",
  "level": 2
}, {
  "value": "Q29: Find employees who earn more than the average salary of the IT department.",
  "id": "q29-find-employees-who-earn-more-than-the-average-salary-of-the-it-department",
  "level": 3
}, {
  "value": "Q30: Find the department with the most employees (correlated subquery).",
  "id": "q30-find-the-department-with-the-most-employees-correlated-subquery",
  "level": 3
}, {
  "value": "Q31: Find employees who do NOT work on any project.",
  "id": "q31-find-employees-who-do-not-work-on-any-project",
  "level": 3
}, {
  "value": "Q32: Find projects where the total hours worked exceed the average total hours.",
  "id": "q32-find-projects-where-the-total-hours-worked-exceed-the-average-total-hours",
  "level": 3
}, {
  "value": "Q33: Find the third highest salary using a subquery.",
  "id": "q33-find-the-third-highest-salary-using-a-subquery",
  "level": 3
}, {
  "value": "Q34: Update salaries: give 10% raise to employees in departments with average salary below 50000.",
  "id": "q34-update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000",
  "level": 3
}, {
  "value": "Q35: Delete employees who haven&#39;t worked on any project in the last year.",
  "id": "q35-delete-employees-who-havent-worked-on-any-project-in-the-last-year",
  "level": 3
}, {
  "value": "Q36: Find employees who earn more than ALL employees in the Sales department.",
  "id": "q36-find-employees-who-earn-more-than-all-employees-in-the-sales-department",
  "level": 3
}, {
  "value": "Section 5: Window Functions (10 Problems)",
  "id": "section-5-window-functions-10-problems",
  "level": 2
}, {
  "value": "Q37: Rank employees by salary within each department.",
  "id": "q37-rank-employees-by-salary-within-each-department",
  "level": 3
}, {
  "value": "Q38: Running total of salary expense ordered by hire date.",
  "id": "q38-running-total-of-salary-expense-ordered-by-hire-date",
  "level": 3
}, {
  "value": "Q39: Calculate the salary difference from the previous employee (ordered by salary).",
  "id": "q39-calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary",
  "level": 3
}, {
  "value": "Q40: First and last employees hired per department.",
  "id": "q40-first-and-last-employees-hired-per-department",
  "level": 3
}, {
  "value": "Q41: Moving average of salary over 3 employees (ordered by hire date).",
  "id": "q41-moving-average-of-salary-over-3-employees-ordered-by-hire-date",
  "level": 3
}, {
  "value": "Q42: Find the top 3 highest-paid employees per department.",
  "id": "q42-find-the-top-3-highest-paid-employees-per-department",
  "level": 3
}, {
  "value": "Q43: Cumulative distribution of salaries.",
  "id": "q43-cumulative-distribution-of-salaries",
  "level": 3
}, {
  "value": "Q44: For each employee, show the total hours worked and the percentage of total project hours.",
  "id": "q44-for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours",
  "level": 3
}, {
  "value": "Q45: Compare each employee&#39;s salary with the department average using window functions.",
  "id": "q45-compare-each-employees-salary-with-the-department-average-using-window-functions",
  "level": 3
}, {
  "value": "Q46: Show the salary gap between consecutive employees in ranking.",
  "id": "q46-show-the-salary-gap-between-consecutive-employees-in-ranking",
  "level": 3
}, {
  "value": "Section 6: Common Table Expressions (CTE) (6 Problems)",
  "id": "section-6-common-table-expressions-cte-6-problems",
  "level": 2
}, {
  "value": "Q47: Recursive CTE — Generate employee hierarchy (org chart).",
  "id": "q47-recursive-cte--generate-employee-hierarchy-org-chart",
  "level": 3
}, {
  "value": "Q48: Recursive CTE — Generate date series for reporting.",
  "id": "q48-recursive-cte--generate-date-series-for-reporting",
  "level": 3
}, {
  "value": "Q49: CTE — Find employee projects with budget utilization.",
  "id": "q49-cte--find-employee-projects-with-budget-utilization",
  "level": 3
}, {
  "value": "Q50: CTE — Complex filtering: Projects with all senior employees.",
  "id": "q50-cte--complex-filtering-projects-with-all-senior-employees",
  "level": 3
}, {
  "value": "Q51: CTE — Department salary statistics with global comparison.",
  "id": "q51-cte--department-salary-statistics-with-global-comparison",
  "level": 3
}, {
  "value": "Q52: Multiple CTEs — Full management chain analysis.",
  "id": "q52-multiple-ctes--full-management-chain-analysis",
  "level": 3
}, {
  "value": "Section 7: Optimization and Indexing (6 Problems)",
  "id": "section-7-optimization-and-indexing-6-problems",
  "level": 2
}, {
  "value": "Q53: Create indexes for common query patterns.",
  "id": "q53-create-indexes-for-common-query-patterns",
  "level": 3
}, {
  "value": "Q54: Analyze a slow query and propose optimizations.",
  "id": "q54-analyze-a-slow-query-and-propose-optimizations",
  "level": 3
}, {
  "value": "Q55: Detect and remove duplicate rows.",
  "id": "q55-detect-and-remove-duplicate-rows",
  "level": 3
}, {
  "value": "Q56: Query performance comparison: JOIN vs IN vs EXISTS.",
  "id": "q56-query-performance-comparison-join-vs-in-vs-exists",
  "level": 3
}, {
  "value": "Q57: Partition table for better query performance.",
  "id": "q57-partition-table-for-better-query-performance",
  "level": 3
}, {
  "value": "Q58: Use EXPLAIN to understand query execution.",
  "id": "q58-use-explain-to-understand-query-execution",
  "level": 3
}, {
  "value": "Section 8: TypeScript Database Patterns (6 Problems)",
  "id": "section-8-typescript-database-patterns-6-problems",
  "level": 2
}, {
  "value": "Q59: Database connection pool with TypeScript.",
  "id": "q59-database-connection-pool-with-typescript",
  "level": 3
}, {
  "value": "Q60: TypeORM Repository pattern for cleaner data access.",
  "id": "q60-typeorm-repository-pattern-for-cleaner-data-access",
  "level": 3
}, {
  "value": "Q61: Query builder pattern with pagination and filtering.",
  "id": "q61-query-builder-pattern-with-pagination-and-filtering",
  "level": 3
}, {
  "value": "Q62: Normalization vs Denormalization — Practical scenario.",
  "id": "q62-normalization-vs-denormalization--practical-scenario",
  "level": 3
}, {
  "value": "Q63: Pagination strategies for large datasets.",
  "id": "q63-pagination-strategies-for-large-datasets",
  "level": 3
}, {
  "value": "Q64: Implementing full-text search.",
  "id": "q64-implementing-full-text-search",
  "level": 3
}, {
  "value": "Section 9: Advanced SQL Scenarios (6 Problems)",
  "id": "section-9-advanced-sql-scenarios-6-problems",
  "level": 2
}, {
  "value": "Q65: Gaps and Islands — Find employees whose IDs have gaps.",
  "id": "q65-gaps-and-islands--find-employees-whose-ids-have-gaps",
  "level": 3
}, {
  "value": "Q66: Pivot data — Convert rows to columns.",
  "id": "q66-pivot-data--convert-rows-to-columns",
  "level": 3
}, {
  "value": "Q67: Running totals and moving calculations.",
  "id": "q67-running-totals-and-moving-calculations",
  "level": 3
}, {
  "value": "Q68: Update with complex subquery logic.",
  "id": "q68-update-with-complex-subquery-logic",
  "level": 3
}, {
  "value": "Q69: Complex reporting query with multiple window functions.",
  "id": "q69-complex-reporting-query-with-multiple-window-functions",
  "level": 3
}, {
  "value": "Q70: Database deadlock diagnosis and prevention.",
  "id": "q70-database-deadlock-diagnosis-and-prevention",
  "level": 3
}, {
  "value": "Quick Reference Tables",
  "id": "quick-reference-tables",
  "level": 2
}, {
  "value": "SQL Keyword Reference",
  "id": "sql-keyword-reference",
  "level": 3
}, {
  "value": "Window Functions Summary",
  "id": "window-functions-summary",
  "level": 3
}, {
  "value": "Index Types and Use Cases",
  "id": "index-types-and-use-cases",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "chapter-4-database-and-sql-interview",
        children: "Chapter 4: Database and SQL Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master 60+ SQL query problems ranging from basic to advanced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand JOINs, subqueries, window functions, CTEs, and aggregate functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn optimization techniques including indexing, query plan analysis, and rewriting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design normalized and denormalized schemas with practical scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement TypeScript database access patterns with connection pooling and query building"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare for SQL rounds in TCS, Infosys, Wipro, and government technical interviews"
      }), "\n"]
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
        href: "../../assets/images/lessons/interview-preparation/04-database-sql-interview/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/04-database-sql-interview/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/interview-preparation/04-database-sql-interview/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/04-database-sql-interview/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/interview-preparation/04-database-sql-interview/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/04-database-sql-interview/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sql-execution-order",
      children: "SQL Execution Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the logical order of SQL statement execution is critical for writing correct queries:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT                          -- 5. Choose columns\nFROM                            -- 1. Tables\n  JOIN                          -- 2. Join tables\nWHERE                           -- 3. Filter rows\nGROUP BY                        -- 4. Group rows\nHAVING                          -- 6. Filter groups\nORDER BY                        -- 7. Sort results\nLIMIT / OFFSET                  -- 8. Paginate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sample-tables-used-across-problems",
      children: "Sample Tables Used Across Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Employees Database\nCREATE TABLE departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(100),\n    location VARCHAR(100)\n);\n\nCREATE TABLE employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(100),\n    salary DECIMAL(10,2),\n    dept_id INT,\n    manager_id INT,\n    hire_date DATE,\n    FOREIGN KEY (dept_id) REFERENCES departments(dept_id),\n    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)\n);\n\nCREATE TABLE projects (\n    project_id INT PRIMARY KEY,\n    project_name VARCHAR(100),\n    budget DECIMAL(12,2),\n    start_date DATE,\n    end_date DATE\n);\n\nCREATE TABLE employee_projects (\n    emp_id INT,\n    project_id INT,\n    hours_worked DECIMAL(8,2),\n    role VARCHAR(50),\n    PRIMARY KEY (emp_id, project_id),\n    FOREIGN KEY (emp_id) REFERENCES employees(emp_id),\n    FOREIGN KEY (project_id) REFERENCES projects(project_id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-basic-select-and-filtering-10-problems",
      children: "Section 1: Basic SELECT and Filtering (10 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-retrieve-all-employees-earning-more-than-50000",
      children: "Q1: Retrieve all employees earning more than 50000."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_id, emp_name, salary\nFROM employees\nWHERE salary > 50000\nORDER BY salary DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-find-employees-hired-in-2023",
      children: "Q2: Find employees hired in 2023."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_id, emp_name, hire_date\nFROM employees\nWHERE YEAR(hire_date) = 2023;\n\n-- Alternative for MySQL\nSELECT emp_id, emp_name, hire_date\nFROM employees\nWHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-list-departments-without-employees-using-not-exists",
      children: "Q3: List departments without employees (using NOT EXISTS)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT d.dept_id, d.dept_name\nFROM departments d\nWHERE NOT EXISTS (\n    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id\n);\n\n-- Alternative with LEFT JOIN\nSELECT d.dept_id, d.dept_name\nFROM departments d\nLEFT JOIN employees e ON d.dept_id = e.dept_id\nWHERE e.emp_id IS NULL;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-find-employees-whose-names-start-with-s-and-end-with-n",
      children: "Q4: Find employees whose names start with 'S' and end with 'n'."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_name\nFROM employees\nWHERE emp_name LIKE 'S%n';\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-show-top-5-highest-paid-employees",
      children: "Q5: Show top 5 highest paid employees."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 5;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-find-the-oldest-employee-in-each-department",
      children: "Q6: Find the oldest employee in each department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.dept_id, e.emp_name, e.hire_date\nFROM employees e\nWHERE e.hire_date = (\n    SELECT MIN(hire_date)\n    FROM employees\n    WHERE dept_id = e.dept_id\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-count-employees-per-department-showing-only-departments-with-more-than-5-employees",
      children: "Q7: Count employees per department, showing only departments with more than 5 employees."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT d.dept_name, COUNT(e.emp_id) as emp_count\nFROM departments d\nLEFT JOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_id, d.dept_name\nHAVING COUNT(e.emp_id) > 5\nORDER BY emp_count DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-find-employees-who-have-no-manager-assigned",
      children: "Q8: Find employees who have no manager assigned."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_id, emp_name\nFROM employees\nWHERE manager_id IS NULL;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-calculate-salary-statistics-per-department",
      children: "Q9: Calculate salary statistics per department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    d.dept_name,\n    COUNT(*) as emp_count,\n    ROUND(AVG(e.salary), 2) as avg_salary,\n    ROUND(MAX(e.salary), 2) as max_salary,\n    ROUND(MIN(e.salary), 2) as min_salary,\n    ROUND(SUM(e.salary), 2) as total_salary\nFROM departments d\nJOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_id, d.dept_name;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-find-employees-whose-salary-is-within-10-of-the-department-average",
      children: "Q10: Find employees whose salary is within 10% of the department average."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH dept_avg AS (\n    SELECT dept_id, AVG(salary) as avg_salary\n    FROM employees\n    GROUP BY dept_id\n)\nSELECT e.emp_name, e.salary, da.avg_salary\nFROM employees e\nJOIN dept_avg da ON e.dept_id = da.dept_id\nWHERE e.salary BETWEEN da.avg_salary * 0.9 AND da.avg_salary * 1.1;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-join-operations-10-problems",
      children: "Section 2: JOIN Operations (10 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-list-employees-with-their-department-names-inner-join",
      children: "Q11: List employees with their department names (INNER JOIN)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_id, e.emp_name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-show-all-employees-including-those-in-departments-that-dont-exist-left-join",
      children: "Q12: Show all employees including those in departments that don't exist (LEFT JOIN)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-find-employees-who-work-on-projects-with-budgets-over-100000",
      children: "Q13: Find employees who work on projects with budgets over 100000."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT DISTINCT e.emp_name, p.project_name, p.budget\nFROM employees e\nJOIN employee_projects ep ON e.emp_id = ep.emp_id\nJOIN projects p ON ep.project_id = p.project_id\nWHERE p.budget > 100000;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-self-join-find-employees-and-their-managers-names",
      children: "Q14: Self-join: Find employees and their managers' names."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    e.emp_name as employee,\n    m.emp_name as manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.emp_id;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-find-employees-who-work-on-more-than-one-project",
      children: "Q15: Find employees who work on MORE THAN one project."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name, COUNT(ep.project_id) as project_count\nFROM employees e\nJOIN employee_projects ep ON e.emp_id = ep.emp_id\nGROUP BY e.emp_id, e.emp_name\nHAVING COUNT(ep.project_id) > 1;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-cross-join-to-generate-all-possible-employee-project-combinations",
      children: "Q16: Cross join to generate all possible employee-project combinations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name, p.project_name\nFROM employees e\nCROSS JOIN projects p;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-find-departments-that-have-no-projects-assigned",
      children: "Q17: Find departments that have NO projects assigned."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT d.dept_name\nFROM departments d\nLEFT JOIN employee_projects ep ON d.dept_id = ep.emp_id -- using dept relation\nWHERE ep.project_id IS NULL;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-complex-join-find-employees-who-earn-more-than-their-managers",
      children: "Q18: Complex JOIN: Find employees who earn more than their managers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name as employee, e.salary as emp_salary,\n       m.emp_name as manager, m.salary as mgr_salary\nFROM employees e\nJOIN employees m ON e.manager_id = m.emp_id\nWHERE e.salary > m.salary;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-find-employees-assigned-to-all-projects-in-the-company-division-operation",
      children: "Q19: Find employees assigned to ALL projects in the company (Division operation)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name\nFROM employees e\nWHERE NOT EXISTS (\n    SELECT p.project_id\n    FROM projects p\n    WHERE NOT EXISTS (\n        SELECT 1\n        FROM employee_projects ep\n        WHERE ep.emp_id = e.emp_id\n        AND ep.project_id = p.project_id\n    )\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-find-projects-with-no-employee-assigned",
      children: "Q20: Find projects with NO employee assigned."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT p.project_name\nFROM projects p\nLEFT JOIN employee_projects ep ON p.project_id = ep.project_id\nWHERE ep.emp_id IS NULL;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-aggregate-functions-and-group-by-8-problems",
      children: "Section 3: Aggregate Functions and GROUP BY (8 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-find-the-department-with-the-highest-average-salary",
      children: "Q21: Find the department with the highest average salary."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT d.dept_name, ROUND(AVG(e.salary), 2) as avg_salary\nFROM departments d\nJOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_id, d.dept_name\nORDER BY avg_salary DESC\nLIMIT 1;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-calculate-the-total-hours-worked-per-employee-across-all-projects",
      children: "Q22: Calculate the total hours worked per employee across all projects."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name, COALESCE(SUM(ep.hours_worked), 0) as total_hours\nFROM employees e\nLEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id\nGROUP BY e.emp_id, e.emp_name\nORDER BY total_hours DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-find-the-second-highest-salary-without-using-limitoffset",
      children: "Q23: Find the second highest salary without using LIMIT/OFFSET."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT MAX(salary) as second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n\n-- Alternative using window function\nSELECT DISTINCT salary\nFROM (\n    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk\n    FROM employees\n) ranked\nWHERE rnk = 2;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-count-employees-hired-in-each-year",
      children: "Q24: Count employees hired in each year."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    YEAR(hire_date) as hire_year,\n    COUNT(*) as emp_count\nFROM employees\nGROUP BY YEAR(hire_date)\nORDER BY hire_year;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-find-the-month-with-the-highest-number-of-hires",
      children: "Q25: Find the month with the highest number of hires."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    MONTHNAME(hire_date) as hire_month,\n    COUNT(*) as hire_count\nFROM employees\nGROUP BY MONTH(hire_date), MONTHNAME(hire_date)\nORDER BY hire_count DESC\nLIMIT 1;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-calculate-the-cumulative-salary-expense-by-department",
      children: "Q26: Calculate the cumulative salary expense by department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    d.dept_name,\n    COUNT(e.emp_id) as employee_count,\n    SUM(e.salary) as total_salary_expense,\n    ROUND(SUM(e.salary) / (SELECT SUM(salary) FROM employees) * 100, 2) as expense_pct\nFROM departments d\nJOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_id, d.dept_name\nORDER BY total_salary_expense DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-find-employees-whose-salary-is-above-the-average-for-their-department",
      children: "Q27: Find employees whose salary is above the average for their department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name, e.salary, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE dept_id = e.dept_id\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-minimum-maximum-and-range-of-salaries-across-the-company",
      children: "Q28: Minimum, maximum, and range of salaries across the company."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    ROUND(MIN(salary), 2) as min_salary,\n    ROUND(MAX(salary), 2) as max_salary,\n    ROUND(AVG(salary), 2) as avg_salary,\n    ROUND(STDDEV(salary), 2) as salary_stddev,\n    ROUND(MAX(salary) - MIN(salary), 2) as salary_range\nFROM employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-subqueries-8-problems",
      children: "Section 4: Subqueries (8 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-find-employees-who-earn-more-than-the-average-salary-of-the-it-department",
      children: "Q29: Find employees who earn more than the average salary of the IT department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_name, salary\nFROM employees\nWHERE salary > (\n    SELECT AVG(salary)\n    FROM employees e\n    JOIN departments d ON e.dept_id = d.dept_id\n    WHERE d.dept_name = 'IT'\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-find-the-department-with-the-most-employees-correlated-subquery",
      children: "Q30: Find the department with the most employees (correlated subquery)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT dept_name\nFROM departments d\nWHERE (\n    SELECT COUNT(*)\n    FROM employees e\n    WHERE e.dept_id = d.dept_id\n) = (\n    SELECT MAX(emp_count)\n    FROM (\n        SELECT COUNT(*) as emp_count\n        FROM employees\n        GROUP BY dept_id\n    ) counts\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-find-employees-who-do-not-work-on-any-project",
      children: "Q31: Find employees who do NOT work on any project."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_id, emp_name\nFROM employees e\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM employee_projects ep\n    WHERE ep.emp_id = e.emp_id\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-find-projects-where-the-total-hours-worked-exceed-the-average-total-hours",
      children: "Q32: Find projects where the total hours worked exceed the average total hours."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH project_hours AS (\n    SELECT \n        project_id,\n        SUM(hours_worked) as total_hours\n    FROM employee_projects\n    GROUP BY project_id\n)\nSELECT p.project_name, ph.total_hours\nFROM projects p\nJOIN project_hours ph ON p.project_id = ph.project_id\nWHERE ph.total_hours > (\n    SELECT AVG(total_hours) FROM project_hours\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-find-the-third-highest-salary-using-a-subquery",
      children: "Q33: Find the third highest salary using a subquery."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT DISTINCT salary\nFROM employees e1\nWHERE 3 = (\n    SELECT COUNT(DISTINCT salary)\n    FROM employees e2\n    WHERE e2.salary >= e1.salary\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q34-update-salaries-give-10-raise-to-employees-in-departments-with-average-salary-below-50000",
      children: "Q34: Update salaries: give 10% raise to employees in departments with average salary below 50000."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "UPDATE employees e\nSET e.salary = e.salary * 1.1\nWHERE e.dept_id IN (\n    SELECT dept_id\n    FROM employees\n    GROUP BY dept_id\n    HAVING AVG(salary) < 50000\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-delete-employees-who-havent-worked-on-any-project-in-the-last-year",
      children: "Q35: Delete employees who haven't worked on any project in the last year."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "DELETE FROM employees\nWHERE emp_id NOT IN (\n    SELECT DISTINCT emp_id\n    FROM employee_projects ep\n    JOIN projects p ON ep.project_id = p.project_id\n    WHERE p.end_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-find-employees-who-earn-more-than-all-employees-in-the-sales-department",
      children: "Q36: Find employees who earn more than ALL employees in the Sales department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT emp_name, salary\nFROM employees\nWHERE salary > ALL (\n    SELECT e.salary\n    FROM employees e\n    JOIN departments d ON e.dept_id = d.dept_id\n    WHERE d.dept_name = 'Sales'\n    AND e.salary IS NOT NULL\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-5-window-functions-10-problems",
      children: "Section 5: Window Functions (10 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q37-rank-employees-by-salary-within-each-department",
      children: "Q37: Rank employees by salary within each department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    dept_id,\n    salary,\n    RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as salary_rank,\n    DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as dense_salary_rank,\n    ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) as row_num\nFROM employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-running-total-of-salary-expense-ordered-by-hire-date",
      children: "Q38: Running total of salary expense ordered by hire date."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    hire_date,\n    salary,\n    SUM(salary) OVER (ORDER BY hire_date) as running_total,\n    SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total_explicit\nFROM employees\nORDER BY hire_date;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-calculate-the-salary-difference-from-the-previous-employee-ordered-by-salary",
      children: "Q39: Calculate the salary difference from the previous employee (ordered by salary)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    salary,\n    LAG(salary, 1, 0) OVER (ORDER BY salary) as prev_salary,\n    salary - LAG(salary, 1, 0) OVER (ORDER BY salary) as diff_from_prev,\n    LEAD(salary, 1, 0) OVER (ORDER BY salary) as next_salary,\n    LEAD(salary, 1, 0) OVER (ORDER BY salary) - salary as diff_to_next\nFROM employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-first-and-last-employees-hired-per-department",
      children: "Q40: First and last employees hired per department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT DISTINCT\n    dept_id,\n    FIRST_VALUE(emp_name) OVER (PARTITION BY dept_id ORDER BY hire_date) as first_hired,\n    LAST_VALUE(emp_name) OVER (\n        PARTITION BY dept_id \n        ORDER BY hire_date\n        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING\n    ) as last_hired\nFROM employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-moving-average-of-salary-over-3-employees-ordered-by-hire-date",
      children: "Q41: Moving average of salary over 3 employees (ordered by hire date)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    hire_date,\n    salary,\n    ROUND(AVG(salary) OVER (\n        ORDER BY hire_date \n        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING\n    ), 2) as moving_avg_3\nFROM employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-find-the-top-3-highest-paid-employees-per-department",
      children: "Q42: Find the top 3 highest-paid employees per department."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH ranked_employees AS (\n    SELECT \n        emp_name,\n        dept_id,\n        salary,\n        DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk\n    FROM employees\n)\nSELECT emp_name, dept_id, salary\nFROM ranked_employees\nWHERE rnk <= 3;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-cumulative-distribution-of-salaries",
      children: "Q43: Cumulative distribution of salaries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    salary,\n    ROUND(CUME_DIST() OVER (ORDER BY salary), 4) as cum_dist,\n    ROUND(PERCENT_RANK() OVER (ORDER BY salary), 4) as pct_rank,\n    NTILE(4) OVER (ORDER BY salary) as salary_quartile\nFROM employees\nORDER BY salary;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q44-for-each-employee-show-the-total-hours-worked-and-the-percentage-of-total-project-hours",
      children: "Q44: For each employee, show the total hours worked and the percentage of total project hours."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    e.emp_name,\n    SUM(ep.hours_worked) as total_hours,\n    ROUND(\n        SUM(ep.hours_worked) * 100.0 / SUM(SUM(ep.hours_worked)) OVER (), \n        2\n    ) as pct_of_total\nFROM employees e\nJOIN employee_projects ep ON e.emp_id = ep.emp_id\nGROUP BY e.emp_id, e.emp_name\nORDER BY total_hours DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-compare-each-employees-salary-with-the-department-average-using-window-functions",
      children: "Q45: Compare each employee's salary with the department average using window functions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    dept_id,\n    salary,\n    ROUND(AVG(salary) OVER (PARTITION BY dept_id), 2) as dept_avg_salary,\n    ROUND(salary - AVG(salary) OVER (PARTITION BY dept_id), 2) as diff_from_avg,\n    CASE \n        WHEN salary > AVG(salary) OVER (PARTITION BY dept_id) THEN 'Above Average'\n        WHEN salary < AVG(salary) OVER (PARTITION BY dept_id) THEN 'Below Average'\n        ELSE 'At Average'\n    END as performance_category\nFROM employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-show-the-salary-gap-between-consecutive-employees-in-ranking",
      children: "Q46: Show the salary gap between consecutive employees in ranking."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT \n    emp_name,\n    salary,\n    RANK() OVER (ORDER BY salary DESC) as rnk,\n    COALESCE(\n        salary - LEAD(salary) OVER (ORDER BY salary DESC), \n        0\n    ) as gap_to_next\nFROM employees\nORDER BY salary DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-6-common-table-expressions-cte-6-problems",
      children: "Section 6: Common Table Expressions (CTE) (6 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-recursive-cte--generate-employee-hierarchy-org-chart",
      children: "Q47: Recursive CTE — Generate employee hierarchy (org chart)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH RECURSIVE emp_hierarchy AS (\n    -- Anchor: Top-level managers\n    SELECT \n        emp_id, \n        emp_name, \n        manager_id, \n        0 as level,\n        CAST(emp_name AS CHAR(500)) as path\n    FROM employees\n    WHERE manager_id IS NULL\n    \n    UNION ALL\n    \n    -- Recursive: Direct reports\n    SELECT \n        e.emp_id, \n        e.emp_name, \n        e.manager_id,\n        eh.level + 1,\n        CONCAT(eh.path, ' → ', e.emp_name)\n    FROM employees e\n    JOIN emp_hierarchy eh ON e.manager_id = eh.emp_id\n)\nSELECT emp_id, emp_name, level, path\nFROM emp_hierarchy\nORDER BY path;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-recursive-cte--generate-date-series-for-reporting",
      children: "Q48: Recursive CTE — Generate date series for reporting."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH RECURSIVE dates AS (\n    SELECT '2024-01-01' as dt\n    UNION ALL\n    SELECT DATE_ADD(dt, INTERVAL 1 DAY)\n    FROM dates\n    WHERE dt < '2024-12-31'\n)\nSELECT dt, DAYNAME(dt) as day_name\nFROM dates\nWHERE DAYOFWEEK(dt) IN (1, 7); -- Weekends only\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-cte--find-employee-projects-with-budget-utilization",
      children: "Q49: CTE — Find employee projects with budget utilization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH employee_hours AS (\n    SELECT \n        ep.emp_id,\n        ep.project_id,\n        SUM(ep.hours_worked) as total_hours\n    FROM employee_projects ep\n    GROUP BY ep.emp_id, ep.project_id\n),\nproject_totals AS (\n    SELECT \n        p.project_id,\n        p.project_name,\n        p.budget,\n        SUM(eh.total_hours) as project_hours,\n        COUNT(DISTINCT eh.emp_id) as assigned_employees\n    FROM projects p\n    LEFT JOIN employee_hours eh ON p.project_id = eh.project_id\n    GROUP BY p.project_id, p.project_name, p.budget\n)\nSELECT \n    project_name,\n    budget,\n    project_hours,\n    assigned_employees,\n    ROUND(project_hours * 100.0 / NULLIF(project_hours, 0), 2) as utilization_pct\nFROM project_totals\nORDER BY budget DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-cte--complex-filtering-projects-with-all-senior-employees",
      children: "Q50: CTE — Complex filtering: Projects with all senior employees."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH senior_employees AS (\n    SELECT emp_id, emp_name\n    FROM employees\n    WHERE salary > 80000\n),\nproject_seniors AS (\n    SELECT \n        ep.project_id,\n        COUNT(DISTINCT ep.emp_id) as total_emp,\n        COUNT(DISTINCT se.emp_id) as senior_emp\n    FROM employee_projects ep\n    LEFT JOIN senior_employees se ON ep.emp_id = se.emp_id\n    GROUP BY ep.project_id\n)\nSELECT p.project_name, ps.total_emp, ps.senior_emp\nFROM projects p\nJOIN project_seniors ps ON p.project_id = ps.project_id\nWHERE ps.total_emp = ps.senior_emp;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-cte--department-salary-statistics-with-global-comparison",
      children: "Q51: CTE — Department salary statistics with global comparison."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH dept_stats AS (\n    SELECT \n        d.dept_name,\n        COUNT(e.emp_id) as emp_count,\n        ROUND(AVG(e.salary), 2) as avg_salary,\n        ROUND(MAX(e.salary), 2) as max_salary,\n        ROUND(MIN(e.salary), 2) as min_salary\n    FROM departments d\n    JOIN employees e ON d.dept_id = e.dept_id\n    GROUP BY d.dept_id, d.dept_name\n),\nglobal_stats AS (\n    SELECT \n        ROUND(AVG(salary), 2) as company_avg,\n        ROUND(STDDEV(salary), 2) as company_stddev\n    FROM employees\n)\nSELECT \n    ds.*,\n    gs.company_avg,\n    ROUND((ds.avg_salary - gs.company_avg) / NULLIF(gs.company_stddev, 0), 2) as z_score\nFROM dept_stats ds\nCROSS JOIN global_stats gs\nORDER BY z_score DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-multiple-ctes--full-management-chain-analysis",
      children: "Q52: Multiple CTEs — Full management chain analysis."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "WITH RECURSIVE mgmt_chain AS (\n    SELECT \n        emp_id, \n        emp_name, \n        manager_id,\n        1 as chain_length\n    FROM employees\n    WHERE manager_id IS NOT NULL\n    \n    UNION ALL\n    \n    SELECT \n        e.emp_id,\n        e.emp_name,\n        e.manager_id,\n        mc.chain_length + 1\n    FROM employees e\n    JOIN mgmt_chain mc ON e.manager_id = mc.emp_id\n),\nchain_stats AS (\n    SELECT \n        manager_id as top_manager,\n        COUNT(*) as total_reports,\n        MAX(chain_length) as max_depth\n    FROM mgmt_chain\n    GROUP BY manager_id\n)\nSELECT \n    e.emp_name as manager_name,\n    cs.total_reports,\n    cs.max_depth\nFROM chain_stats cs\nJOIN employees e ON cs.top_manager = e.emp_id\nORDER BY cs.total_reports DESC;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-7-optimization-and-indexing-6-problems",
      children: "Section 7: Optimization and Indexing (6 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q53-create-indexes-for-common-query-patterns",
      children: "Q53: Create indexes for common query patterns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- For WHERE clauses on salary range queries\nCREATE INDEX idx_employees_salary ON employees(salary);\n\n-- For JOIN on dept_id (foreign key)\nCREATE INDEX idx_employees_dept_id ON employees(dept_id);\n\n-- For composite conditions\nCREATE INDEX idx_employees_dept_salary ON employees(dept_id, salary);\n\n-- For text search (prefix matching)\nCREATE INDEX idx_employees_name ON employees(emp_name);\n\n-- For date range filtering\nCREATE INDEX idx_employees_hire_date ON employees(hire_date);\n\n-- Covering index (includes all needed columns)\nCREATE INDEX idx_emp_dept_cover ON employees(dept_id, emp_name, salary) INCLUDE (hire_date);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-analyze-a-slow-query-and-propose-optimizations",
      children: "Q54: Analyze a slow query and propose optimizations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Slow query\nSELECT e.emp_name, d.dept_name, p.project_name, ep.hours_worked\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nJOIN employee_projects ep ON e.emp_id = ep.emp_id\nJOIN projects p ON ep.project_id = p.project_id\nWHERE d.location = 'Mumbai'\n  AND ep.hours_worked > 100\nORDER BY ep.hours_worked DESC;\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimizations:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Indexes needed:"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "CREATE INDEX idx_dept_location ON departments(location);\nCREATE INDEX idx_ep_hours ON employee_projects(emp_id, project_id, hours_worked);\nCREATE INDEX idx_emp_dept ON employees(dept_id) INCLUDE (emp_name);\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rewrite with EXISTS for early filtering:"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "SELECT e.emp_name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE d.location = 'Mumbai'\n  AND EXISTS (\n    SELECT 1 FROM employee_projects ep\n    WHERE ep.emp_id = e.emp_id AND ep.hours_worked > 100\n  );\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "3",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Query plan analysis:"
          }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EXPLAIN ANALYZE"
          }), " to identify full table scans, buffer misses, and join order issues."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q55-detect-and-remove-duplicate-rows",
      children: "Q55: Detect and remove duplicate rows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Find duplicates\nSELECT emp_name, dept_id, COUNT(*)\nFROM employees\nGROUP BY emp_name, dept_id\nHAVING COUNT(*) > 1;\n\n-- Delete duplicates keeping the one with lowest emp_id\nDELETE e1 FROM employees e1\nINNER JOIN employees e2 \nWHERE e1.emp_name = e2.emp_name \n  AND e1.dept_id = e2.dept_id\n  AND e1.emp_id > e2.emp_id;\n\n-- Using CTE and ROW_NUMBER\nWITH duplicates AS (\n    SELECT *,\n        ROW_NUMBER() OVER (\n            PARTITION BY emp_name, dept_id \n            ORDER BY emp_id\n        ) as rn\n    FROM employees\n)\nDELETE FROM employees\nWHERE emp_id IN (\n    SELECT emp_id FROM duplicates WHERE rn > 1\n);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-query-performance-comparison-join-vs-in-vs-exists",
      children: "Q56: Query performance comparison: JOIN vs IN vs EXISTS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- JOIN\nSELECT DISTINCT e.emp_name\nFROM employees e\nJOIN employee_projects ep ON e.emp_id = ep.emp_id\nWHERE ep.hours_worked > 50;\n\n-- IN\nSELECT emp_name\nFROM employees\nWHERE emp_id IN (\n    SELECT emp_id FROM employee_projects WHERE hours_worked > 50\n);\n\n-- EXISTS (usually fastest for large datasets)\nSELECT e.emp_name\nFROM employees e\nWHERE EXISTS (\n    SELECT 1 FROM employee_projects ep\n    WHERE ep.emp_id = e.emp_id AND ep.hours_worked > 50\n);\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance rule of thumb:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "EXISTS"
          }), " is best when the subquery is large and only checking existence"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "IN"
          }), " is fine for small, static lists"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "JOIN"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DISTINCT"
          }), " may be slower due to dedup but offers more flexibility"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-partition-table-for-better-query-performance",
      children: "Q57: Partition table for better query performance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Range partitioning by hire date\nCREATE TABLE employees_partitioned (\n    emp_id INT,\n    emp_name VARCHAR(100),\n    salary DECIMAL(10,2),\n    dept_id INT,\n    hire_date DATE\n)\nPARTITION BY RANGE (YEAR(hire_date)) (\n    PARTITION p_old VALUES LESS THAN (2020),\n    PARTITION p_2020 VALUES LESS THAN (2021),\n    PARTITION p_2021 VALUES LESS THAN (2022),\n    PARTITION p_2022 VALUES LESS THAN (2023),\n    PARTITION p_2023 VALUES LESS THAN (2024),\n    PARTITION p_future VALUES LESS THAN MAXVALUE\n);\n\n-- Query that benefits from partition pruning\nSELECT COUNT(*), YEAR(hire_date)\nFROM employees_partitioned\nWHERE hire_date BETWEEN '2022-01-01' AND '2023-12-31'\nGROUP BY YEAR(hire_date);\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "When to partition:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Tables larger than 1TB"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Queries frequently filter on a partition key (dates, regions)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Old data needs archival (drop partition is instant)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Maintenance operations (rebuild per partition)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-use-explain-to-understand-query-execution",
      children: "Q58: Use EXPLAIN to understand query execution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "EXPLAIN ANALYZE\nSELECT e.emp_name, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > 100000;\n\n-- Look for:\n-- 1. Seq Scan → Full table scan (needs index)\n-- 2. Nested Loop → For small result sets\n-- 3. Hash Join → For moderate results\n-- 4. Merge Join → For sorted data\n-- 5. Index Only Scan → Ideal (all data in index)\n\n-- Common issues in EXPLAIN output:\n-- \"Rows Removed by Filter\" → Index needed\n-- \"Sort Method: external merge\" → Memory pressure\n-- \"Parallel Seq Scan\" → Could benefit from partitioning\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-8-typescript-database-patterns-6-problems",
      children: "Section 8: TypeScript Database Patterns (6 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-database-connection-pool-with-typescript",
      children: "Q59: Database connection pool with TypeScript."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "import { createPool, Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';\n\ninterface DatabaseConfig {\n  host: string;\n  port: number;\n  user: string;\n  password: string;\n  database: string;\n  poolSize: number;\n}\n\nclass DatabasePool {\n  private pool: Pool;\n  private static instance: DatabasePool;\n\n  private constructor(config: DatabaseConfig) {\n    this.pool = createPool({\n      host: config.host,\n      port: config.port,\n      user: config.user,\n      password: config.password,\n      database: config.database,\n      connectionLimit: config.poolSize,\n      waitForConnections: true,\n      queueLimit: 0,\n      enableKeepAlive: true,\n      keepAliveInitialDelay: 0\n    });\n  }\n\n  static getInstance(config?: DatabaseConfig): DatabasePool {\n    if (!DatabasePool.instance) {\n      if (!config) throw new Error('Config required for initialization');\n      DatabasePool.instance = new DatabasePool(config);\n    }\n    return DatabasePool.instance;\n  }\n\n  async query<T extends RowDataPacket[]>(sql: string, params?: any[]): Promise<T> {\n    const [rows] = await this.pool.execute<T>(sql, params);\n    return rows;\n  }\n\n  async execute(sql: string, params?: any[]): Promise<ResultSetHeader> {\n    const [result] = await this.pool.execute<ResultSetHeader>(sql, params);\n    return result;\n  }\n\n  async transaction<T>(callback: (conn: any) => Promise<T>): Promise<T> {\n    const connection = await this.pool.getConnection();\n    try {\n      await connection.beginTransaction();\n      const result = await callback(connection);\n      await connection.commit();\n      return result;\n    } catch (error) {\n      await connection.rollback();\n      throw error;\n    } finally {\n      connection.release();\n    }\n  }\n}\n\n// Usage\nconst db = DatabasePool.getInstance({\n  host: 'localhost',\n  port: 3306,\n  user: 'root',\n  password: 'password',\n  database: 'company_db',\n  poolSize: 10\n});\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-typeorm-repository-pattern-for-cleaner-data-access",
      children: "Q60: TypeORM Repository pattern for cleaner data access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface Employee {\n  empId: number;\n  empName: string;\n  salary: number;\n  deptId: number;\n  hireDate: Date;\n}\n\ninterface Department {\n  deptId: number;\n  deptName: string;\n  location: string;\n}\n\nclass EmployeeRepository {\n  constructor(private db: DatabasePool) {}\n\n  async findByDepartment(deptName: string): Promise<Employee[]> {\n    const sql = `\n      SELECT e.*\n      FROM employees e\n      JOIN departments d ON e.dept_id = d.dept_id\n      WHERE d.dept_name = ?\n      ORDER BY e.salary DESC\n    `;\n    return this.db.query<Employee[]>(sql, [deptName]);\n  }\n\n  async findHighEarners(threshold: number, limit: number): Promise<Employee[]> {\n    const sql = `\n      SELECT emp_id, emp_name, salary, dept_id\n      FROM employees\n      WHERE salary > ?\n      ORDER BY salary DESC\n      LIMIT ?\n    `;\n    return this.db.query<Employee[]>(sql, [threshold, limit]);\n  }\n\n  async getDepartmentSalaryStats(): Promise<any[]> {\n    const sql = `\n      SELECT \n        d.dept_name,\n        COUNT(e.emp_id) as employee_count,\n        AVG(e.salary) as avg_salary,\n        MAX(e.salary) as max_salary,\n        MIN(e.salary) as min_salary\n      FROM departments d\n      LEFT JOIN employees e ON d.dept_id = e.dept_id\n      GROUP BY d.dept_id, d.dept_name\n      HAVING COUNT(e.emp_id) > 0\n      ORDER BY avg_salary DESC\n    `;\n    return this.db.query(sql);\n  }\n\n  async updateSalary(empId: number, newSalary: number): Promise<boolean> {\n    const result = await this.db.execute(\n      'UPDATE employees SET salary = ? WHERE emp_id = ?',\n      [newSalary, empId]\n    );\n    return result.affectedRows > 0;\n  }\n\n  async bulkInsert(employees: Partial<Employee>[]): Promise<number> {\n    // Use transaction for bulk operations\n    return this.db.transaction(async (conn) => {\n      let inserted = 0;\n      for (const emp of employees) {\n        await conn.execute(\n          'INSERT INTO employees (emp_name, salary, dept_id, hire_date) VALUES (?, ?, ?, ?)',\n          [emp.empName, emp.salary, emp.deptId, emp.hireDate]\n        );\n        inserted++;\n      }\n      return inserted;\n    });\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q61-query-builder-pattern-with-pagination-and-filtering",
      children: "Q61: Query builder pattern with pagination and filtering."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface QueryFilter {\n  field: string;\n  operator: '=' | '>' | '<' | '>=' | '<=' | '!=' | 'LIKE' | 'IN';\n  value: any;\n}\n\ninterface QueryOptions {\n  filters?: QueryFilter[];\n  sortBy?: string;\n  sortOrder?: 'ASC' | 'DESC';\n  page?: number;\n  pageSize?: number;\n  selectColumns?: string[];\n}\n\nclass QueryBuilder {\n  private sql: string = '';\n  private params: any[] = [];\n  private table: string = '';\n\n  from(table: string): this {\n    this.table = table;\n    this.sql = `SELECT * FROM ${table}`;\n    return this;\n  }\n\n  select(columns: string[]): this {\n    this.sql = `SELECT ${columns.join(', ')} FROM ${this.table}`;\n    return this;\n  }\n\n  where(filters: QueryFilter[]): this {\n    if (filters.length === 0) return this;\n    \n    const conditions = filters.map(f => {\n      if (f.operator === 'IN') {\n        const placeholders = (f.value as any[]).map(() => '?').join(', ');\n        this.params.push(...(f.value as any[]));\n        return `${f.field} IN (${placeholders})`;\n      }\n      this.params.push(f.value);\n      return `${f.field} ${f.operator} ?`;\n    });\n    \n    this.sql += ` WHERE ${conditions.join(' AND ')}`;\n    return this;\n  }\n\n  orderBy(sortBy: string, sortOrder: 'ASC' | 'DESC' = 'ASC'): this {\n    this.sql += ` ORDER BY ${sortBy} ${sortOrder}`;\n    return this;\n  }\n\n  paginate(page: number = 1, pageSize: number = 10): this {\n    const offset = (page - 1) * pageSize;\n    this.sql += ` LIMIT ? OFFSET ?`;\n    this.params.push(pageSize, offset);\n    return this;\n  }\n\n  build(): { sql: string; params: any[] } {\n    return { sql: this.sql, params: this.params };\n  }\n}\n\n// Usage\nasync function searchEmployees(options: QueryOptions) {\n  const query = new QueryBuilder()\n    .select(['emp_id', 'emp_name', 'salary', 'dept_id'])\n    .from('employees')\n    .where(options.filters || [])\n    .orderBy(options.sortBy || 'emp_id', options.sortOrder || 'ASC')\n    .paginate(options.page || 1, options.pageSize || 10);\n\n  const { sql, params } = query.build();\n  return db.query(sql, params);\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-normalization-vs-denormalization--practical-scenario",
      children: "Q62: Normalization vs Denormalization — Practical scenario."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Normalized Schema (3NF)\n// Pros: No redundancy, consistent updates, smaller storage\n// Cons: Multiple JOINs for read, slower complex queries\n\ninterface Order3NF {\n  orderId: number;\n  customerId: number;\n  orderDate: Date;\n  totalAmount: number;   // Computed or write-time calculated\n}\n\ninterface OrderItem3NF {\n  orderItemId: number;\n  orderId: number;\n  productId: number;\n  quantity: number;\n  unitPrice: number;\n}\n\ninterface Product3NF {\n  productId: number;\n  productName: string;\n  currentPrice: number;\n  category: string;\n}\n\n// Denormalized Schema (for analytics/reporting)\n// Pros: Fast reads, no JOINs needed\n// Cons: Data redundancy, update anomalies, more storage\n\ninterface OrderDenormalized {\n  orderId: number;\n  customerName: string;\n  customerEmail: string;\n  customerAddress: string;\n  productName: string;\n  category: string;\n  quantity: number;\n  unitPrice: number;\n  lineTotal: number;\n  orderDate: Date;\n  orderTotal: number;\n}\n\n// Hybrid approach: Normalized for OLTP + Denormalized for analytics\nclass OrderService {\n  async getOrderSummary(orderId: number) {\n    // Normalized for fast writes\n    const order = await this.db.query(`\n      SELECT o.*, c.name, c.email\n      FROM orders o\n      JOIN customers c ON o.customer_id = c.customer_id\n      WHERE o.order_id = ?\n    `, [orderId]);\n\n    // Denormalized for analytics\n    const denormalizedData = {\n      orderId: order.orderId,\n      customerName: order.name,\n      customerEmail: order.email,\n      products: await this.db.query(`\n        SELECT p.product_name, oi.quantity, oi.unit_price\n        FROM order_items oi\n        JOIN products p ON oi.product_id = p.product_id\n        WHERE oi.order_id = ?\n      `, [orderId])\n    };\n\n    return denormalizedData;\n  }\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision guide:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Scenario"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Choose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "OLTP (many writes)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Normalized"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Reporting/BI (many reads)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Denormalized"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Mixed workload"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Normalized + materialized views"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Real-time dashboards"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Denormalized + periodic sync"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Microservices (each owns data)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Per-service schemas, DB per service"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q63-pagination-strategies-for-large-datasets",
      children: "Q63: Pagination strategies for large datasets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Method 1: OFFSET/LIMIT (traditional)\n// Problem: OFFSET is expensive for deep pages\nasync function getEmployeesPage(page: number, pageSize: number) {\n  const offset = (page - 1) * pageSize;\n  const sql = `\n    SELECT emp_id, emp_name, salary\n    FROM employees\n    ORDER BY emp_id\n    LIMIT ? OFFSET ?\n  `;\n  return db.query(sql, [pageSize, offset]);\n}\n\n// Method 2: Keyset pagination (cursor-based) — FAST for deep pages\nasync function getEmployeesCursor(lastId: number | null, pageSize: number) {\n  const sql = `\n    SELECT emp_id, emp_name, salary\n    FROM employees\n    WHERE emp_id > ?\n    ORDER BY emp_id\n    LIMIT ?\n  `;\n  const result = await db.query(sql, [lastId || 0, pageSize]);\n  const nextCursor = result.length > 0 ? result[result.length - 1].emp_id : null;\n  return { data: result, nextCursor };\n}\n\n// Method 3: Seek method with composite index\nasync function getEmployeesSeek(\n  lastSalary: number | null,\n  lastName: string | null,\n  pageSize: number\n) {\n  // Uses composite index (salary, emp_name)\n  const sql = `\n    SELECT emp_id, emp_name, salary\n    FROM employees\n    WHERE (salary, emp_name) > (?, ?)\n    ORDER BY salary DESC, emp_name\n    LIMIT ?\n  `;\n  const result = await db.query(sql, [\n    lastSalary || 999999999,\n    lastName || '',\n    pageSize\n  ]);\n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q64-implementing-full-text-search",
      children: "Q64: Implementing full-text search."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// MySQL full-text search setup\n// ALTER TABLE employees ADD FULLTEXT INDEX ft_emp_name (emp_name);\n\ninterface SearchResult {\n  empId: number;\n  empName: string;\n  relevance: number;\n}\n\nclass FullTextSearch {\n  async searchEmployees(query: string, limit: number = 10): Promise<SearchResult[]> {\n    const sql = `\n      SELECT \n        emp_id,\n        emp_name,\n        MATCH(emp_name) AGAINST(? IN NATURAL LANGUAGE MODE) as relevance\n      FROM employees\n      WHERE MATCH(emp_name) AGAINST(? IN NATURAL LANGUAGE MODE)\n      ORDER BY relevance DESC\n      LIMIT ?\n    `;\n    return db.query(sql, [query, query, limit]);\n  }\n\n  async searchWithBooleanMode(query: string): Promise<SearchResult[]> {\n    // Boolean mode supports: +word (must), -word (must not), * (wildcard)\n    const sql = `\n      SELECT \n        emp_id,\n        emp_name,\n        MATCH(emp_name) AGAINST(? IN BOOLEAN MODE) as relevance\n      FROM employees\n      WHERE MATCH(emp_name) AGAINST(? IN BOOLEAN MODE)\n      HAVING relevance > 0\n      ORDER BY relevance DESC\n    `;\n    return db.query(sql, [query, query]);\n  }\n\n  // Alternative with pg_trgm (PostgreSQL)\n  async searchTrigram(query: string): Promise<SearchResult[]> {\n    const sql = `\n      SELECT emp_id, emp_name,\n        similarity(emp_name, $1) as relevance\n      FROM employees\n      WHERE emp_name % $1\n      ORDER BY relevance DESC\n      LIMIT 10\n    `;\n    return db.query(sql, [query]);\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-9-advanced-sql-scenarios-6-problems",
      children: "Section 9: Advanced SQL Scenarios (6 Problems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q65-gaps-and-islands--find-employees-whose-ids-have-gaps",
      children: "Q65: Gaps and Islands — Find employees whose IDs have gaps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Find missing employee IDs (gaps)\nWITH all_ids AS (\n    SELECT MIN(emp_id) as min_id, MAX(emp_id) as max_id\n    FROM employees\n),\nnumbers AS (\n    SELECT min_id as n FROM all_ids\n    UNION ALL\n    SELECT n + 1 FROM numbers, all_ids\n    WHERE n < max_id\n)\nSELECT n as missing_id\nFROM numbers\nWHERE n NOT IN (SELECT emp_id FROM employees)\nOPTION (MAXRECURSION 10000);\n\n-- Find contiguous ranges (islands) of employee IDs\nWITH ordered AS (\n    SELECT \n        emp_id,\n        emp_id - ROW_NUMBER() OVER (ORDER BY emp_id) as grp\n    FROM employees\n)\nSELECT \n    MIN(emp_id) as range_start,\n    MAX(emp_id) as range_end,\n    COUNT(*) as emp_count\nFROM ordered\nGROUP BY grp\nHAVING COUNT(*) > 1;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q66-pivot-data--convert-rows-to-columns",
      children: "Q66: Pivot data — Convert rows to columns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Pivot: Employee count per department (rows) per year (columns)\nSELECT \n    d.dept_name,\n    SUM(CASE WHEN YEAR(e.hire_date) = 2021 THEN 1 ELSE 0 END) as hired_2021,\n    SUM(CASE WHEN YEAR(e.hire_date) = 2022 THEN 1 ELSE 0 END) as hired_2022,\n    SUM(CASE WHEN YEAR(e.hire_date) = 2023 THEN 1 ELSE 0 END) as hired_2023,\n    COUNT(*) as total_hired\nFROM departments d\nJOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_id, d.dept_name;\n\n-- Dynamic pivot using GROUP_CONCAT (MySQL)\nSET @sql = NULL;\nSELECT GROUP_CONCAT(DISTINCT\n    CONCAT('SUM(CASE WHEN project_id = ', project_id, \n           ' THEN hours_worked ELSE 0 END) AS \"', project_name, '\"')\n) INTO @sql\nFROM projects;\n\nSET @sql = CONCAT('SELECT e.emp_name, ', @sql, ' \n                   FROM employees e\n                   LEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id\n                   GROUP BY e.emp_id, e.emp_name');\nPREPARE stmt FROM @sql;\nEXECUTE stmt;\nDEALLOCATE PREPARE stmt;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q67-running-totals-and-moving-calculations",
      children: "Q67: Running totals and moving calculations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Running total of projects budget by start date\nSELECT \n    project_name,\n    start_date,\n    budget,\n    SUM(budget) OVER (ORDER BY start_date) as running_budget,\n    AVG(budget) OVER (ORDER BY start_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg_3,\n    budget - AVG(budget) OVER (ORDER BY start_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as diff_from_moving_avg\nFROM projects\nORDER BY start_date;\n\n-- Year-over-year comparison\nSELECT \n    YEAR(hire_date) as year,\n    COUNT(*) as hires,\n    LAG(COUNT(*)) OVER (ORDER BY YEAR(hire_date)) as prev_year_hires,\n    ROUND(\n        (COUNT(*) - LAG(COUNT(*)) OVER (ORDER BY YEAR(hire_date))) \n        * 100.0 / LAG(COUNT(*)) OVER (ORDER BY YEAR(hire_date)), \n        2\n    ) as yoy_change_pct\nFROM employees\nGROUP BY YEAR(hire_date)\nORDER BY year;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q68-update-with-complex-subquery-logic",
      children: "Q68: Update with complex subquery logic."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Update employees: set performance bonus as percentage of salary\n-- Bonus = 10% if above dept avg, 5% if at dept avg, 0% if below\n\nWITH dept_avg AS (\n    SELECT dept_id, AVG(salary) as avg_salary\n    FROM employees\n    GROUP BY dept_id\n)\nUPDATE employees e\nJOIN dept_avg da ON e.dept_id = da.dept_id\nSET e.salary = CASE\n    WHEN e.salary > da.avg_salary THEN e.salary * 1.10\n    WHEN e.salary = da.avg_salary THEN e.salary * 1.05\n    ELSE e.salary\nEND;\n\n-- Update with MERGE (upsert) pattern\nINSERT INTO employee_projects (emp_id, project_id, hours_worked, role)\nVALUES (101, 5, 120, 'Developer')\nON DUPLICATE KEY UPDATE\n    hours_worked = VALUES(hours_worked),\n    role = VALUES(role);\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q69-complex-reporting-query-with-multiple-window-functions",
      children: "Q69: Complex reporting query with multiple window functions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Department-wise employee ranking with cumulative metrics\nWITH employee_metrics AS (\n    SELECT \n        d.dept_name,\n        e.emp_name,\n        e.salary,\n        COUNT(ep.project_id) as project_count,\n        COALESCE(SUM(ep.hours_worked), 0) as total_hours,\n        RANK() OVER (PARTITION BY d.dept_id ORDER BY e.salary DESC) as salary_rank,\n        RANK() OVER (PARTITION BY d.dept_id ORDER BY SUM(ep.hours_worked) DESC) as effort_rank\n    FROM employees e\n    JOIN departments d ON e.dept_id = d.dept_id\n    LEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id\n    GROUP BY d.dept_id, d.dept_name, e.emp_id, e.emp_name, e.salary\n)\nSELECT \n    dept_name,\n    emp_name,\n    salary,\n    total_hours,\n    salary_rank,\n    effort_rank,\n    CASE \n        WHEN salary_rank <= 3 AND effort_rank <= 3 THEN 'Star Performer'\n        WHEN salary_rank <= 3 THEN 'High Paid'\n        WHEN effort_rank <= 3 THEN 'High Effort'\n        ELSE 'Regular'\n    END as employee_category\nFROM employee_metrics\nORDER BY dept_name, salary_rank;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q70-database-deadlock-diagnosis-and-prevention",
      children: "Q70: Database deadlock diagnosis and prevention."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal SQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Diagnose current locks (MySQL)\nSHOW ENGINE INNODB STATUS;\n\n-- Find blocked transactions\nSELECT \n    r.trx_id as blocking_trx_id,\n    r.trx_mysql_thread_id as blocking_thread,\n    b.trx_id as blocked_trx_id,\n    b.trx_mysql_thread_id as blocked_thread,\n    l.lock_table,\n    l.lock_type,\n    l.lock_mode\nFROM performance_schema.data_locks l\nJOIN information_schema.innodb_trx r ON l.lock_trx_id = r.trx_id\nJOIN information_schema.innodb_trx b ON b.trx_id = l.lock_trx_id\nWHERE b.trx_state = 'LOCK WAIT'\n  AND r.trx_state != 'LOCK WAIT';\n\n-- Prevention strategies in code\nasync function transferFunds(fromAccount: number, toAccount: number, amount: number) {\n  // Always lock resources in the same order (by account ID)\n  const [first, second] = fromAccount < toAccount \n    ? [fromAccount, toAccount] \n    : [toAccount, fromAccount];\n\n  return db.transaction(async (conn) => {\n    // Lock first account\n    await conn.execute('SELECT * FROM accounts WHERE id = ? FOR UPDATE', [first]);\n    // Lock second account\n    await conn.execute('SELECT * FROM accounts WHERE id = ? FOR UPDATE', [second]);\n    \n    await conn.execute('UPDATE accounts SET balance = balance - ? WHERE id = ?', [amount, fromAccount]);\n    await conn.execute('UPDATE accounts SET balance = balance + ? WHERE id = ?', [amount, toAccount]);\n  });\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-tables",
      children: "Quick Reference Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sql-keyword-reference",
      children: "SQL Keyword Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT emp_name, salary"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specify tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FROM employees"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE salary > 50000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JOIN departments USING(dept_id)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GROUP BY dept_id"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "HAVING COUNT(*) > 5"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ORDER BY salary DESC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIMIT/OFFSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paginate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LIMIT 10 OFFSET 20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT DISTINCT dept_id"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... UNION SELECT ..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check existence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE EXISTS (SELECT ...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE dept_id IN (1,2,3)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BETWEEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE salary BETWEEN 30000 AND 50000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE name LIKE 'S%'"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CASE WHEN ... THEN ... END"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COALESCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COALESCE(salary, 0)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Window function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ROW_NUMBER() OVER (PARTITION BY dept_id)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Table Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WITH cte AS (SELECT ...)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "window-functions-summary",
      children: "Window Functions Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROW_NUMBER()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential number per partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ROW_NUMBER() OVER (ORDER BY salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RANK()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank with gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RANK() OVER (ORDER BY salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DENSE_RANK()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank without gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DENSE_RANK() OVER (ORDER BY salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTILE(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide into n buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NTILE(4) OVER (ORDER BY salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAG(col, n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Previous row value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LAG(salary, 1) OVER (ORDER BY hire_date)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEAD(col, n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next row value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LEAD(salary, 1) OVER (ORDER BY hire_date)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIRST_VALUE(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First value in window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FIRST_VALUE(salary) OVER (...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAST_VALUE(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last value in window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LAST_VALUE(salary) OVER (...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUM/AVG/COUNT over"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation over window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SUM(salary) OVER (PARTITION BY dept_id)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CUME_DIST()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CUME_DIST() OVER (ORDER BY salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERCENT_RANK()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Percentage rank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PERCENT_RANK() OVER (ORDER BY salary)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "index-types-and-use-cases",
      children: "Index Types and Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, range queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE INDEX idx_salary ON emp(salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality lookups only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE INDEX USING HASH ON emp(id)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-column queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE INDEX idx_dept_salary ON emp(dept, salary)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE FULLTEXT INDEX ON articles(content)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spatial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geographic queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SPATIAL INDEX(location)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UNIQUE INDEX idx_email(email)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Covering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All columns in index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include columns to avoid table access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtered index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE INDEX idx_active ON emp(salary) WHERE status='active'"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered 70 SQL and database problems:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problems"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Techniques"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic SELECT (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1-Q10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE, LIKE, LIMIT, GROUP BY, HAVING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOINs (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q11-Q20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER, LEFT, SELF, CROSS, Division"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregates (8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q21-Q28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVG, SUM, COUNT, STDDEV, GROUP BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subqueries (8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q29-Q36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated, NOT EXISTS, ALL, ANY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window Functions (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q37-Q46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RANK, LAG, LEAD, NTILE, Running Total"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CTEs (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q47-Q52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive CTE, Multiple CTEs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q53-Q58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing, EXPLAIN, Partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript Patterns (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q59-Q64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pool, Repository, Query Builder, Pagination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced SQL (6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q65-Q70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaps/Islands, Pivot, Deadlock Prevention"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Know the order of execution:"
          }), " SQL is evaluated in this order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Master window functions:"
          }), " They appear in 60% of advanced SQL interview questions. Practice RANK, LAG, LEAD, and running totals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Index strategy matters:"
          }), " Create indexes for WHERE columns, JOIN columns, and ORDER BY columns. Use composite indexes for multi-column queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "⭐ Must Know:"
          }), " All JOIN types, GROUP BY with HAVING, correlated subqueries, window functions (RANK, LAG), recursive CTEs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "For government exams:"
          }), " Focus on basic SELECT, JOINs, GROUP BY, subqueries, and normalization concepts. Window functions are less common."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Practice with real data:"
          }), " Set up a MySQL/PostgreSQL instance with the sample schema from this chapter and run all queries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimization mindset:"
          }), " Always think: \"Could this query be faster with an index? Could I reduce the number of JOINs?\""]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Common mistakes in interviews:"
          }), " Forgetting NULL handling (use COALESCE), wrong JOIN type, missing GROUP BY with aggregates, ORDER BY without LIMIT."]
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