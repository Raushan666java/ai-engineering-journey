"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92550],{

/***/ 55393
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_05_sql_joins_md_a8d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-05-sql-joins-md-a8d.json
const site_docs_courses_database_management_systems_05_sql_joins_md_a8d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/05-sql-joins","title":"Chapter 5: SQL Joins and Subqueries","description":"Previous SQL Basics | Next Advanced SQL","source":"@site/docs/courses/database-management-systems/05-sql-joins.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/05-sql-joins","permalink":"/ai-engineering-journey/database-management-systems/05-sql-joins","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-sql-joins","slug":"/database-management-systems/05-sql-joins","title":"Chapter 5: SQL Joins and Subqueries","sidebar_label":"Chapter 5: SQL Joins and Subqueries","sidebar_position":5},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 4: SQL Basics","permalink":"/ai-engineering-journey/database-management-systems/04-sql-basics"},"next":{"title":"Chapter 6: Advanced SQL → Subqueries, CTEs, Window Functions, Pivot, MERGE, Dynamic SQL, Stored Procedures, Functions, Triggers, Views, Temp Tables","permalink":"/ai-engineering-journey/database-management-systems/06-sql-advanced"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/05-sql-joins.md


const frontMatter = {
	id: '05-sql-joins',
	slug: '/database-management-systems/05-sql-joins',
	title: 'Chapter 5: SQL Joins and Subqueries',
	sidebar_label: 'Chapter 5: SQL Joins and Subqueries',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: SQL Joins and Subqueries';

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
  "value": "5.1 Introduction to Joins",
  "id": "51-introduction-to-joins",
  "level": 3
}, {
  "value": "Sample Tables Used Throughout This Chapter",
  "id": "sample-tables-used-throughout-this-chapter",
  "level": 3
}, {
  "value": "5.2 INNER JOIN",
  "id": "52-inner-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Library Book Borrowing",
  "id": "real-world-analogy-library-book-borrowing",
  "level": 4
}, {
  "value": "Numbered Steps of INNER JOIN Execution",
  "id": "numbered-steps-of-inner-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code",
  "level": 4
}, {
  "value": "C++ Implementation (Nested Loop Join + Hash Join)",
  "id": "c-implementation-nested-loop-join--hash-join",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "A&amp;D Table (Advantages &amp; Disadvantages)",
  "id": "ad-table-advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "5.3 LEFT OUTER JOIN",
  "id": "53-left-outer-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Class Roster",
  "id": "real-world-analogy-class-roster",
  "level": 4
}, {
  "value": "Numbered Steps of LEFT JOIN Execution",
  "id": "numbered-steps-of-left-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-1",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-1",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "5.4 RIGHT OUTER JOIN",
  "id": "54-right-outer-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Venue Booking",
  "id": "real-world-analogy-venue-booking",
  "level": 4
}, {
  "value": "Numbered Steps of RIGHT JOIN Execution",
  "id": "numbered-steps-of-right-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-2",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-2",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "5.5 FULL OUTER JOIN",
  "id": "55-full-outer-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Conference Attendees and Speakers",
  "id": "real-world-analogy-conference-attendees-and-speakers",
  "level": 4
}, {
  "value": "Numbered Steps of FULL OUTER JOIN Execution",
  "id": "numbered-steps-of-full-outer-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-3",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-3",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "5.6 CROSS JOIN",
  "id": "56-cross-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Menu Combinations",
  "id": "real-world-analogy-menu-combinations",
  "level": 4
}, {
  "value": "Numbered Steps of CROSS JOIN Execution",
  "id": "numbered-steps-of-cross-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-4",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-4",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "5.7 NATURAL JOIN",
  "id": "57-natural-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Identical Forms",
  "id": "real-world-analogy-identical-forms",
  "level": 4
}, {
  "value": "Numbered Steps of NATURAL JOIN Execution",
  "id": "numbered-steps-of-natural-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-5",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-5",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-5",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 4
}, {
  "value": "5.8 SELF JOIN",
  "id": "58-self-join",
  "level": 3
}, {
  "value": "Real-World Analogy: Employee Directory with Managers",
  "id": "real-world-analogy-employee-directory-with-managers",
  "level": 4
}, {
  "value": "Numbered Steps of SELF JOIN Execution",
  "id": "numbered-steps-of-self-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-6",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-6",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-5",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-6",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-5",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 4
}, {
  "value": "5.9 SEMI JOIN (Logical)",
  "id": "59-semi-join-logical",
  "level": 3
}, {
  "value": "Real-World Analogy: Job Applications",
  "id": "real-world-analogy-job-applications",
  "level": 4
}, {
  "value": "Numbered Steps of SEMI JOIN Execution",
  "id": "numbered-steps-of-semi-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-7",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-7",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-6",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-7",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-6",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 4
}, {
  "value": "5.10 ANTI JOIN (Logical)",
  "id": "510-anti-join-logical",
  "level": 3
}, {
  "value": "Real-World Analogy: Unemployed Workers",
  "id": "real-world-analogy-unemployed-workers",
  "level": 4
}, {
  "value": "Numbered Steps of ANTI JOIN Execution",
  "id": "numbered-steps-of-anti-join-execution",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-8",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-8",
  "level": 4
}, {
  "value": "SQL Code",
  "id": "sql-code-8",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-7",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-8",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 4
}, {
  "value": "A&amp;D Table",
  "id": "ad-table-7",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-8",
  "level": 4
}, {
  "value": "5.11 JOIN Types Comparison Table",
  "id": "511-join-types-comparison-table",
  "level": 3
}, {
  "value": "5.12 JOIN vs Subquery Comparison",
  "id": "512-join-vs-subquery-comparison",
  "level": 3
}, {
  "value": "5.13 Join Algorithms Comparison",
  "id": "513-join-algorithms-comparison",
  "level": 3
}, {
  "value": "When Each Algorithm Is Chosen (Optimizer Logic)",
  "id": "when-each-algorithm-is-chosen-optimizer-logic",
  "level": 4
}, {
  "value": "Algorithm Deep Dive → Nested Loop Join",
  "id": "algorithm-deep-dive--nested-loop-join",
  "level": 4
}, {
  "value": "Algorithm Deep Dive → Hash Join",
  "id": "algorithm-deep-dive--hash-join",
  "level": 4
}, {
  "value": "Algorithm Deep Dive → Merge Join",
  "id": "algorithm-deep-dive--merge-join",
  "level": 4
}, {
  "value": "5.14 SQL Execution with Joins (Optimizer Details)",
  "id": "514-sql-execution-with-joins-optimizer-details",
  "level": 3
}, {
  "value": "Join Order Selection",
  "id": "join-order-selection",
  "level": 4
}, {
  "value": "How PostgreSQL&#39;s Optimizer Handles Joins",
  "id": "how-postgresqls-optimizer-handles-joins",
  "level": 4
}, {
  "value": "How MySQL&#39;s Optimizer Handles Joins",
  "id": "how-mysqls-optimizer-handles-joins",
  "level": 4
}, {
  "value": "Visualizing Join Order Decisions",
  "id": "visualizing-join-order-decisions",
  "level": 4
}, {
  "value": "Performance Implications of Join Order",
  "id": "performance-implications-of-join-order",
  "level": 4
}, {
  "value": "5.15 Subqueries (Original content preserved and expanded)",
  "id": "515-subqueries-original-content-preserved-and-expanded",
  "level": 3
}, {
  "value": "Subquery in WHERE clause",
  "id": "subquery-in-where-clause",
  "level": 4
}, {
  "value": "Subquery in SELECT clause (scalar subquery)",
  "id": "subquery-in-select-clause-scalar-subquery",
  "level": 4
}, {
  "value": "Subquery in FROM clause (derived table)",
  "id": "subquery-in-from-clause-derived-table",
  "level": 4
}, {
  "value": "5.16 EXISTS and NOT EXISTS",
  "id": "516-exists-and-not-exists",
  "level": 3
}, {
  "value": "5.17 Correlated Subqueries",
  "id": "517-correlated-subqueries",
  "level": 3
}, {
  "value": "5.18 ANY and ALL Operators",
  "id": "518-any-and-all-operators",
  "level": 3
}, {
  "value": "5.19 Join Performance Considerations",
  "id": "519-join-performance-considerations",
  "level": 3
}, {
  "value": "5.20 Interview Corner",
  "id": "520-interview-corner",
  "level": 3
}, {
  "value": "Q1: What is the difference between INNER JOIN and OUTER JOIN?",
  "id": "q1-what-is-the-difference-between-inner-join-and-outer-join",
  "level": 4
}, {
  "value": "Q2: When would you use a JOIN vs a subquery?",
  "id": "q2-when-would-you-use-a-join-vs-a-subquery",
  "level": 4
}, {
  "value": "Q3: How do NULLs behave in JOINs?",
  "id": "q3-how-do-nulls-behave-in-joins",
  "level": 4
}, {
  "value": "Q4: How can you optimize JOIN performance?",
  "id": "q4-how-can-you-optimize-join-performance",
  "level": 4
}, {
  "value": "Q5: What is a SELF JOIN and when would you use it?",
  "id": "q5-what-is-a-self-join-and-when-would-you-use-it",
  "level": 4
}, {
  "value": "Q6: What is a NATURAL JOIN and why is it discouraged?",
  "id": "q6-what-is-a-natural-join-and-why-is-it-discouraged",
  "level": 4
}, {
  "value": "Q7: How does the optimizer choose between Hash Join and Nested Loop Join?",
  "id": "q7-how-does-the-optimizer-choose-between-hash-join-and-nested-loop-join",
  "level": 4
}, {
  "value": "Q8: What is a CROSS JOIN and when is it useful?",
  "id": "q8-what-is-a-cross-join-and-when-is-it-useful",
  "level": 4
}, {
  "value": "5.21 Applications in Real Systems",
  "id": "521-applications-in-real-systems",
  "level": 3
}, {
  "value": "MySQL Join Optimizer",
  "id": "mysql-join-optimizer",
  "level": 4
}, {
  "value": "PostgreSQL Hash Join",
  "id": "postgresql-hash-join",
  "level": 4
}, {
  "value": "SQL Server Merge Join",
  "id": "sql-server-merge-join",
  "level": 4
}, {
  "value": "Oracle Join Optimizer",
  "id": "oracle-join-optimizer",
  "level": 4
}, {
  "value": "Real-World: Analytics Join Patterns",
  "id": "real-world-analytics-join-patterns",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "5.22 Join Algorithm Simulator (TypeScript)",
  "id": "522-join-algorithm-simulator-typescript",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
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
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "chapter-5-sql-joins-and-subqueries",
        children: "Chapter 5: SQL Joins and Subqueries"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/04-sql-basics",
          children: "Chapter 4: SQL Basics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/06-sql-advanced",
          children: "Chapter 6: Advanced SQL"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write INNER, LEFT, RIGHT, and FULL OUTER joins to combine tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand CROSS JOIN, NATURAL JOIN, and SELF JOIN use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate implicit (theta-style) vs explicit (ANSI) join syntax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write subqueries in WHERE, FROM, and SELECT clauses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use EXISTS, NOT EXISTS, IN, NOT IN, ANY, ALL operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand correlated subqueries and their performance implications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewrite subqueries as joins and vice versa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement join algorithms (nested loop, hash join) in C++ and Python"
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
        href: "../../assets/images/lessons/database-management-systems/05-sql-joins/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/05-sql-joins/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/05-sql-joins/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/05-sql-joins/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/05-sql-joins/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/05-sql-joins/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INNER JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns only matched rows → the most common join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use explicit ANSI JOIN syntax over theta-style"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OUTER JOINs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT, RIGHT, FULL preserve unmatched rows with NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN / IS NULL is the standard anti-join pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SELF JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join a table to itself using aliases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for hierarchies, pairs, and consecutive records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NATURAL JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-matches columns with same name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangerous in production → schema changes break queries silently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subqueries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested SELECT in WHERE, FROM, or SELECT clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS short-circuits and handles NULLs better than IN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correlated Subqueries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-execute per outer row → powerful but expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite as window functions or JOINs when possible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Join Concepts] --> B[INNER JOIN]\n    B --> C[OUTER JOINs]\n    C --> D[SELF & CROSS JOIN]\n    D --> E[NATURAL JOIN]\n    E --> F[Subqueries in WHERE]\n    F --> G[EXISTS & Correlated]\n    G --> H[ANY/ALL & Anti-joins]\n    H --> I[Performance & Algorithms]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Joins are the heart of relational querying → mastering INNER, OUTER, SELF, NATURAL, SEMI, ANTI, and subqueries lets you combine any data across normalized tables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch05-sql-joins-subqueries.png",
        alt: "SQL Joins and Subqueries Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-introduction-to-joins",
      children: "5.1 Introduction to Joins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Relational databases store data in normalized tables. To answer meaningful questions, we almost always need to combine data from multiple tables. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "join"
      }), " combines rows from two or more tables based on a related column."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Joins are the heart of relational querying. Understanding them deeply is essential for writing correct and efficient SQL."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Joins Exist:"
      }), " Normalization splits data into separate tables to reduce redundancy. Joins reverse this split at query time → reconnecting related data without duplicating storage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Join Condition:"
      }), " The predicate that determines how rows from two tables relate. Most common: foreign key = primary key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Join Types Overview:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Types"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER, NATURAL, SEMI (logical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT, RIGHT, FULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CROSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELF (any type applied to same table)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANTI (logical)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sample-tables-used-throughout-this-chapter",
      children: "Sample Tables Used Throughout This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All join examples use the following two tables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Table A → employees"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(50),\n    dept_id INT,\n    salary DECIMAL(10,2)\n);\n\nINSERT INTO employees VALUES\n(1, 'Alice',   10, 70000),\n(2, 'Bob',     10, 60000),\n(3, 'Charlie', 20, 80000),\n(4, 'Diana',   NULL, 55000),\n(5, 'Eve',     20, 75000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Table B → departments"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "dept_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(50)\n);\n\nINSERT INTO departments VALUES\n(10, 'Engineering'),\n(20, 'Sales'),\n(30, 'HR');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Departments 10 and 20 have employees; department 30 (HR) has none"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diana (emp_id=4) has NULL dept_id → no department match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "These edge cases make every join type produce distinct, instructive results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-inner-join",
      children: "5.2 INNER JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An inner join returns only rows where there is a match in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "both"
      }), " tables. It is the most common and most efficient join type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-library-book-borrowing",
      children: "Real-World Analogy: Library Book Borrowing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a library's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "borrowers table"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "books table"
      }), ". An INNER JOIN answers: \"Show me only books that are currently borrowed, along with the borrower's name.\" Books sitting on the shelf (no borrower) are excluded. Borrowers who haven't taken any books are excluded. Only the intersection appears."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-inner-join-execution",
      children: "Numbered Steps of INNER JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the first row of the left table (employees)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For that row, scan the right table (departments) and evaluate the join condition ", (0,jsx_runtime.jsx)(_components.code, {
          children: "employees.dept_id = departments.dept_id"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the condition is TRUE, emit a combined row (all columns from both tables)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move to the next left-table row and repeat from step 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After all left rows are processed, discard any left rows that never found a match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The final result contains only rows that had matches on both sides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE INNER_JOIN(table_left, table_right, condition)\n    result = empty list\n    FOR EACH row_l IN table_left\n        FOR EACH row_r IN table_right\n            IF condition(row_l, row_r) == TRUE THEN\n                result.append(combine(row_l, row_r))\n            END IF\n        END FOR\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step matching for INNER JOIN employees × departments ON dept_id:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row (employees)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row Scanned (departments)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "e.dept_id = d.dept_id"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accumulated Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10, 70000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 = 10 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10, 70000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 = 20 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10, 70000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 = 30 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10, 60000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 = 10 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Eng), (Bob, Eng)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10, 60000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 = 20 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Eng), (Bob, Eng)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10, 60000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 = 30 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Eng), (Bob, Eng)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20, 80000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 = 10 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Eng), (Bob, Eng)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20, 80000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 = 20 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20, 80000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 = 30 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL, 55000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL = 10 → UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(no change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL, 55000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL = 20 → UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(no change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL, 55000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL = 30 → UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(no change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20, 75000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 = 10 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(no change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20, 75000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 = 20 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20, 75000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 = 30 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(done)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diana (no department) and HR department are excluded → neither had a match."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ANSI SQL-92 syntax (preferred)\nSELECT e.emp_name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output:\n-- Alice    Engineering\n-- Bob      Engineering\n-- Charlie  Sales\n-- Eve      Sales\n\n-- Implicit (theta-style) syntax → older, harder to maintain\nSELECT e.emp_name, d.dept_name\nFROM employees e, departments d\nWHERE e.dept_id = d.dept_id;\n\n-- INNER JOIN with multiple conditions\nSELECT e.emp_name, d.dept_name\nFROM employees e\nINNER JOIN departments d\n    ON e.dept_id = d.dept_id\n    AND e.salary > 65000;\n\n-- Output:\n-- Alice    Engineering\n-- Charlie  Sales\n-- Eve      Sales\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-nested-loop-join--hash-join",
      children: "C++ Implementation (Nested Loop Join + Hash Join)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <optional>\n\nstruct Employee {\n    int emp_id;\n    std::string emp_name;\n    std::optional<int> dept_id;  // NULL support\n    double salary;\n};\n\nstruct Department {\n    int dept_id;\n    std::string dept_name;\n};\n\nstruct JoinRow {\n    std::string emp_name;\n    std::string dept_name;\n};\n\n// Nested Loop Inner Join → O(N * M)\nstd::vector<JoinRow> nestedLoopInnerJoin(\n    const std::vector<Employee>& employees,\n    const std::vector<Department>& departments) {\n    std::vector<JoinRow> result;\n    for (const auto& e : employees) {\n        if (!e.dept_id.has_value()) continue;  // NULL can't match\n        for (const auto& d : departments) {\n            if (e.dept_id.value() == d.dept_id) {\n                result.push_back({e.emp_name, d.dept_name});\n            }\n        }\n    }\n    return result;\n}\n\n// Hash Inner Join → O(N + M) average\nstd::vector<JoinRow> hashInnerJoin(\n    const std::vector<Employee>& employees,\n    const std::vector<Department>& departments) {\n    std::unordered_map<int, std::string> dept_map;\n    for (const auto& d : departments) {\n        dept_map[d.dept_id] = d.dept_name;\n    }\n    std::vector<JoinRow> result;\n    for (const auto& e : employees) {\n        if (!e.dept_id.has_value()) continue;\n        auto it = dept_map.find(e.dept_id.value());\n        if (it != dept_map.end()) {\n            result.push_back({e.emp_name, it->second});\n        }\n    }\n    return result;\n}\n\nint main() {\n    std::vector<Employee> employees = {\n        {1, \"Alice\", 10, 70000},\n        {2, \"Bob\", 10, 60000},\n        {3, \"Charlie\", 20, 80000},\n        {4, \"Diana\", std::nullopt, 55000},\n        {5, \"Eve\", 20, 75000}\n    };\n    std::vector<Department> departments = {\n        {10, \"Engineering\"},\n        {20, \"Sales\"},\n        {30, \"HR\"}\n    };\n    auto result = hashInnerJoin(employees, departments);\n    for (const auto& r : result) {\n        std::cout << r.emp_name << \" : \" << r.dept_name << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass Employee:\n    emp_id: int\n    emp_name: str\n    dept_id: Optional[int]\n    salary: float\n\n\n@dataclass\nclass Department:\n    dept_id: int\n    dept_name: str\n\n\ndef nested_loop_inner_join(employees, departments):\n    \"\"\"Nested Loop Inner Join → O(N * M)\"\"\"\n    result = []\n    for e in employees:\n        if e.dept_id is None:\n            continue  # NULL can't match in equi-join\n        for d in departments:\n            if e.dept_id == d.dept_id:\n                result.append((e.emp_name, d.dept_name))\n    return result\n\n\ndef hash_inner_join(employees, departments):\n    \"\"\"Hash Inner Join → O(N + M) average\"\"\"\n    dept_map = {d.dept_id: d.dept_name for d in departments}\n    result = []\n    for e in employees:\n        if e.dept_id is None:\n            continue\n        dept_name = dept_map.get(e.dept_id)\n        if dept_name is not None:\n            result.append((e.emp_name, dept_name))\n    return result\n\n\nemployees = [\n    Employee(1, \"Alice\", 10, 70000),\n    Employee(2, \"Bob\", 10, 60000),\n    Employee(3, \"Charlie\", 20, 80000),\n    Employee(4, \"Diana\", None, 55000),\n    Employee(5, \"Eve\", 20, 75000),\n]\ndepartments = [\n    Department(10, \"Engineering\"),\n    Department(20, \"Sales\"),\n    Department(30, \"HR\"),\n]\n\nfor name, dept in hash_inner_join(employees, departments):\n    print(f\"{name} : {dept}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nested Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Join"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M) average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M) for hash table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N left rows × M right rows checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash on smaller table, probe with larger"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Nested Loop is O(N×M):"
      }), " For each of the N left rows, we scan all M right rows. With 5 employees and 3 departments: 5×3 = 15 condition evaluations. With 1M employees and 100K departments: 10¹¹ evaluations → catastrophic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Hash Join is O(N+M):"
      }), " Building the hash table costs O(M), probing costs O(N) with O(1) average lookup. Total: O(N+M). With 1M employees and 100K departments: ~1.1M operations → dramatically faster."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Hash Join is not always used:"
      }), " Building the hash table requires memory (O(M)). For very large tables that don't fit in memory, the DB spills to disk, and Nested Loop (or Merge Join) may win. Hash joins only work for equi-joins (=), not range conditions (<, >)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-advantages--disadvantages",
      children: "A&D Table (Advantages & Disadvantages)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANSI Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separates join logic from filters, easier to read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more verbose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theta-style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact for simple joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixes join and filter; hard to maintain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any join condition, low memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic time → terrible for large tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear time for equi-joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory hungry, no range conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INNER JOIN itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most efficient join → smallest result set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loses unmatched rows (not always desired)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL in join column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL ≠ anything (even another NULL). Row is excluded."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana (NULL dept_id) never matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate join values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every pair is emitted → can cause row multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two employees in dept 20 × one dept 20 row → 2 rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty left table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result (nothing to iterate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero employees → zero rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result (no matches possible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero departments → zero rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mismatched key types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL performs implicit type coercion or fails"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "VARCHAR '10'"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INT 10"
            }), " works in most DBs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self-inner-join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join table to itself; must use aliases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairs of employees in same department"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-left-outer-join",
      children: "5.3 LEFT OUTER JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A LEFT JOIN returns ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all rows from the left table"
      }), ". When a match exists in the right table, columns are populated. When no match exists, right-table columns are filled with NULL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-class-roster",
      children: "Real-World Analogy: Class Roster"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "class roster"
      }), " (left table) listing all enrolled students and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "grades table"
      }), " (right table) with test scores. A LEFT JOIN answers: \"Show every student and their test score → if a student hasn't taken the test yet, show their name with NULL for the score.\" No student is omitted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-left-join-execution",
      children: "Numbered Steps of LEFT JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the first row of the left table (employees)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For that row, scan the right table (departments) and evaluate the join condition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the condition is TRUE, emit a combined row"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If multiple right rows match, emit one combined row per match (same left row repeated)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After scanning all right rows, if ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zero matches"
        }), " were found for this left row, emit one combined row with NULLs for all right-table columns"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move to the next left row and repeat from step 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unlike INNER JOIN, every left row appears at least once in the result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE LEFT_JOIN(table_left, table_right, condition)\n    result = empty list\n    FOR EACH row_l IN table_left\n        matched = FALSE\n        FOR EACH row_r IN table_right\n            IF condition(row_l, row_r) == TRUE THEN\n                result.append(combine(row_l, row_r))\n                matched = TRUE\n            END IF\n        END FOR\n        IF matched == FALSE THEN\n            result.append(combine(row_l, NULL_values_for_right))\n        END IF\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-1",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LEFT JOIN employees × departments ON dept_id:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matched?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result Accumulated"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=10→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=20→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=30→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=10→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=20→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=30→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=10→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie start)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=20→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=30→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=10→UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana start)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=20→UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana, no match)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=30→UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana, no match)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FALSE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT WITH NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Diana, NULL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=10→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve start)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=20→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=30→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve, Sales)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every employee appears at least once. Diana has NULL department because her dept_id is NULL (no match)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-1",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- All employees with their department (NULL if none)\nSELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output:\n-- Alice    Engineering\n-- Bob      Engineering\n-- Charlie  Sales\n-- Diana    NULL\n-- Eve      Sales\n\n-- LEFT JOIN with additional WHERE filter (be careful → WHERE can turn it into INNER!)\nSELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id\nWHERE d.dept_name = 'Engineering';\n-- Output (only matched rows → WHERE filters out NULLs):\n-- Alice    Engineering\n-- Bob      Engineering\n\n-- Correct way: use the filter in the ON clause to preserve unmatch rows\nSELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d\n    ON e.dept_id = d.dept_id AND d.dept_name = 'Engineering';\n\n-- Output:\n-- Alice    Engineering\n-- Bob      Engineering\n-- Charlie  NULL   (matched but ON filter failed → NULL)\n-- Diana    NULL\n-- Eve      NULL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <optional>\n\nstruct Employee { int id; std::string name; std::optional<int> dept_id; double sal; };\nstruct Department { int id; std::string name; };\nstruct JoinRow { std::string emp; std::optional<std::string> dept; };\n\nstd::vector<JoinRow> leftJoin(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::vector<JoinRow> result;\n    for (const auto& e : emp) {\n        bool matched = false;\n        for (const auto& d : dept) {\n            if (e.dept_id.has_value() && e.dept_id.value() == d.id) {\n                result.push_back({e.name, d.name});\n                matched = true;\n            }\n        }\n        if (!matched)\n            result.push_back({e.name, std::nullopt});\n    }\n    return result;\n}\n\nint main() {\n    std::vector<Employee> emp = {\n        {1,\"Alice\",10,70000},{2,\"Bob\",10,60000},\n        {3,\"Charlie\",20,80000},{4,\"Diana\",std::nullopt,55000},{5,\"Eve\",20,75000}};\n    std::vector<Department> dept = {{10,\"Engineering\"},{20,\"Sales\"},{30,\"HR\"}};\n    auto r = leftJoin(emp, dept);\n    for (auto& x : r) {\n        std::cout << x.emp << \" | \" << (x.dept.has_value() ? x.dept.value() : \"NULL\") << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass Employee:\n    emp_id: int\n    emp_name: str\n    dept_id: Optional[int]\n    salary: float\n\n\n@dataclass\nclass Department:\n    dept_id: int\n    dept_name: str\n\n\ndef left_join(employees, departments):\n    result = []\n    for e in employees:\n        matched = False\n        for d in departments:\n            if e.dept_id is not None and e.dept_id == d.dept_id:\n                result.append((e.emp_name, d.dept_name))\n                matched = True\n        if not matched:\n            result.append((e.emp_name, None))\n    return result\n\n\nemployees = [\n    Employee(1, \"Alice\", 10, 70000), Employee(2, \"Bob\", 10, 60000),\n    Employee(3, \"Charlie\", 20, 80000), Employee(4, \"Diana\", None, 55000),\n    Employee(5, \"Eve\", 20, 75000),\n]\ndepartments = [\n    Department(10, \"Engineering\"), Department(20, \"Sales\"), Department(30, \"HR\"),\n]\n\nfor name, dept in left_join(employees, departments):\n    print(f\"{name} | {dept}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N left rows × M right rows scanned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash smaller table, probe with larger"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same complexity as INNER JOIN → the difference is in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "result cardinality"
      }), ", not algorithm cost. LEFT JOIN may produce more rows (up to N + unmatched) but the computation per row is identical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves all left rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger result set than INNER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter in WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can inadvertently remove NULL rows (turns join into INNER)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter in ON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves left rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May produce unexpected NULLs in result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL join column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match found → right side is NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana gets (Diana, NULL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No matches at all"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All left rows appear with NULL right side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If departments is empty, all 5 employees appear with NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple matches"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left rows are duplicated per match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If two departments had id=10, Alice would appear twice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty left table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero rows returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No employees → empty result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All left rows appear with NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No departments → all employees with NULL dept"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-right-outer-join",
      children: "5.4 RIGHT OUTER JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A RIGHT JOIN returns ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all rows from the right table"
      }), ". It is the mirror of LEFT JOIN. Any SQL engine can swap table order and use LEFT JOIN instead → RIGHT JOIN exists mainly for syntactic convenience."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-venue-booking",
      children: "Real-World Analogy: Venue Booking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "events table"
      }), " (right table) lists all events, and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "venues table"
      }), " (left table) lists venues. A RIGHT JOIN answers: \"Show every event, along with the venue it's held at. If an event has no venue assigned, show it anyway with NULL for venue details.\" The right table (events) is the \"must-keep\" side."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-right-join-execution",
      children: "Numbered Steps of RIGHT JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with the first row of the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "right"
        }), " table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scan the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "left"
        }), " table for matching rows"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emit combined rows for each match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no match found, emit with NULLs for left-table columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat for all right rows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RIGHT JOIN is identical to LEFT JOIN with the tables swapped: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A RIGHT JOIN B"
      }), " = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B LEFT JOIN A"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE RIGHT_JOIN(table_left, table_right, condition)\n    // Equivalent to LEFT_JOIN(table_right, table_left, condition)\n    result = empty list\n    FOR EACH row_r IN table_right\n        matched = FALSE\n        FOR EACH row_l IN table_left\n            IF condition(row_l, row_r) == TRUE THEN\n                result.append(combine(row_l, row_r))\n                matched = TRUE\n            END IF\n        END FOR\n        IF matched == FALSE THEN\n            result.append(combine(NULL_values_for_left, row_r))\n        END IF\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-2",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RIGHT JOIN employees × departments ON dept_id:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row (dept)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row Scanned (emp)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matched"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=10→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=10→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=20→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=10→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=20→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=10→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=10→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=20→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=20→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=20→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30=10→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30=10→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30=20→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=30→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30=20→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FALSE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT WITH NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (NULL, HR)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HR department appears with NULL employee → no employee belongs to HR."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-2",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- All departments with their employees (departments with no employees still appear)\nSELECT e.emp_name, d.dept_name\nFROM employees e\nRIGHT JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output:\n-- Alice    Engineering\n-- Bob      Engineering\n-- Charlie  Sales\n-- Eve      Sales\n-- NULL     HR\n\n-- Equivalent using LEFT JOIN (preferred style):\nSELECT e.emp_name, d.dept_name\nFROM departments d\nLEFT JOIN employees e ON e.dept_id = d.dept_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <optional>\n\nstruct Employee { int id; std::string name; std::optional<int> dept_id; double sal; };\nstruct Department { int id; std::string name; };\nstruct JoinRow { std::optional<std::string> emp; std::string dept; };\n\nstd::vector<JoinRow> rightJoin(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::vector<JoinRow> result;\n    for (const auto& d : dept) {\n        bool matched = false;\n        for (const auto& e : emp) {\n            if (e.dept_id.has_value() && e.dept_id.value() == d.id) {\n                result.push_back({e.name, d.name});\n                matched = true;\n            }\n        }\n        if (!matched) result.push_back({std::nullopt, d.name});\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def right_join(employees, departments):\n    \"\"\"Mirror of LEFT JOIN with tables swapped.\"\"\"\n    result = []\n    for d in departments:\n        matched = False\n        for e in employees:\n            if e.dept_id is not None and e.dept_id == d.dept_id:\n                result.append((e.emp_name, d.dept_name))\n                matched = True\n        if not matched:\n            result.append((None, d.dept_name))\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N left × M right → same as LEFT JOIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) or O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash on smaller of two tables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-1",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric complement to LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely needed → swap tables and use LEFT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct when right table is the \"master\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing in complex multi-join queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL join column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee with NULL dept_id won't match any department"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana never matches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero rows returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No departments → empty result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty left table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All right rows appear with NULLs for left columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No employees → all depts with NULL emp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unmatched right rows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appear once with NULL left columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR department has NULL employee"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-full-outer-join",
      children: "5.5 FULL OUTER JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A FULL OUTER JOIN returns ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all rows from both tables"
      }), ". When a match exists, columns from both sides are populated. When no match exists on either side, the missing side gets NULLs. It is the union of LEFT JOIN and RIGHT JOIN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-conference-attendees-and-speakers",
      children: "Real-World Analogy: Conference Attendees and Speakers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "attendees list"
      }), " (left) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "speakers list"
      }), " (right) for a conference. A FULL OUTER JOIN answers: \"Show me all people → attendees who attended, speakers who presented, and anyone who did both.\" No one is omitted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-full-outer-join-execution",
      children: "Numbered Steps of FULL OUTER JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform a LEFT JOIN: all left rows kept, right-side NULLs where no match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform a RIGHT JOIN: all right rows kept, left-side NULLs where no match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove duplicate rows that already appeared in the LEFT JOIN result"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Union the two results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alternatively, implement in a single pass:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each left row, scan right table for matches (emit each match)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track which right rows never matched"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After left pass, emit unmatched right rows with NULLs for left columns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE FULL_OUTER_JOIN(table_left, table_right, condition)\n    result = empty list\n    matched_right = empty set  // track which right rows matched\n    \n    FOR EACH row_l IN table_left\n        matched = FALSE\n        FOR EACH row_r IN table_right\n            IF condition(row_l, row_r) == TRUE THEN\n                result.append(combine(row_l, row_r))\n                matched = TRUE\n                matched_right.add(row_r.id)\n            END IF\n        END FOR\n        IF matched == FALSE THEN\n            result.append(combine(row_l, NULL_values_for_right))\n        END IF\n    END FOR\n    \n    // Add unmatched right rows\n    FOR EACH row_r IN table_right\n        IF row_r.id NOT IN matched_right THEN\n            result.append(combine(NULL_values_for_left, row_r))\n        END IF\n    END FOR\n    \n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-3",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULL OUTER JOIN employees × departments ON dept_id:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 → LEFT JOIN pass:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Emitted"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none (NULL can't match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana, NULL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve, Sales)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Matched right rows so far: Engineering (id=10), Sales (id=20)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 → Unmatched right rows:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Was Matched?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip (already in result)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip (already in result)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emit (NULL, HR)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diana (no department) and HR (no employee) both appear."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-3",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- All employees and all departments, matched where applicable\nSELECT e.emp_name, d.dept_name\nFROM employees e\nFULL OUTER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output:\n-- Alice    Engineering\n-- Bob      Engineering\n-- Charlie  Sales\n-- Diana    NULL\n-- Eve      Sales\n-- NULL     HR\n\n-- FULL OUTER JOIN with COALESCE for display\nSELECT\n    COALESCE(e.emp_name, '(no employee)') AS employee,\n    COALESCE(d.dept_name, '(no department)') AS department\nFROM employees e\nFULL OUTER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output:\n-- Alice       Engineering\n-- Bob         Engineering\n-- Charlie     Sales\n-- Diana       (no department)\n-- Eve         Sales\n-- (no employee)  HR\n\n-- MySQL doesn't support FULL OUTER JOIN → simulate with UNION:\nSELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id\nUNION\nSELECT e.emp_name, d.dept_name\nFROM employees e\nRIGHT JOIN departments d ON e.dept_id = d.dept_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <optional>\n#include <unordered_set>\n\nstruct Employee { int id; std::string name; std::optional<int> dept_id; double sal; };\nstruct Department { int id; std::string name; };\nstruct JoinRow { std::optional<std::string> emp; std::optional<std::string> dept; };\n\nstd::vector<JoinRow> fullOuterJoin(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::vector<JoinRow> result;\n    std::unordered_set<int> matched_dept_ids;\n\n    // Phase 1: LEFT JOIN\n    for (const auto& e : emp) {\n        bool matched = false;\n        for (const auto& d : dept) {\n            if (e.dept_id.has_value() && e.dept_id.value() == d.id) {\n                result.push_back({e.name, d.name});\n                matched_dept_ids.insert(d.id);\n                matched = true;\n            }\n        }\n        if (!matched) result.push_back({e.name, std::nullopt});\n    }\n\n    // Phase 2: Unmatched right rows\n    for (const auto& d : dept) {\n        if (matched_dept_ids.find(d.id) == matched_dept_ids.end()) {\n            result.push_back({std::nullopt, d.name});\n        }\n    }\n\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Optional\n\n\ndef full_outer_join(employees, departments):\n    result = []\n    matched_dept_ids = set()\n\n    # Phase 1: LEFT JOIN\n    for e in employees:\n        matched = False\n        for d in departments:\n            if e.dept_id is not None and e.dept_id == d.dept_id:\n                result.append((e.emp_name, d.dept_name))\n                matched_dept_ids.add(d.dept_id)\n                matched = True\n        if not matched:\n            result.append((e.emp_name, None))\n\n    # Phase 2: Unmatched right rows\n    for d in departments:\n        if d.dept_id not in matched_dept_ids:\n            result.append((None, d.dept_name))\n\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pass (LEFT + unmatched Right)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left pass O(N×M), tracking set O(M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash both sides, then merge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Nested Loop is still O(N×M):"
      }), " The LEFT JOIN pass does N×M comparisons. The unmatched-right pass does M set lookups (O(1) each). Total is dominated by N×M."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Hash Join is O(N+M):"
      }), " Build hash on right table (O(M)). Probe with left (O(N)). Track matched keys. Emit unmatched right rows (O(M)). Total: O(N+M)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-2",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FULL OUTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete picture → no data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest result set; most expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COALESCE display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slight query complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL UNION workaround"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works without FULL JOIN support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two full scans; deduplication overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL join column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row kept with NULLs on the other side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana appears with NULL department"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All rows match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as INNER JOIN result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If every employee had a valid dept and every dept had employees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No rows match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows appear with NULLs on the other side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesians: every emp × NULL + every dept × NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty left table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All right rows appear with NULL left columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero employees → all depts with NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All left rows appear with NULL right columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero departments → all emps with NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Both empty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing to show"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-cross-join",
      children: "5.6 CROSS JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CROSS JOIN produces the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cartesian product"
      }), " of two tables → every row of the first table paired with every row of the second. No join condition is needed (and specifying one turns it into an INNER JOIN)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-menu-combinations",
      children: "Real-World Analogy: Menu Combinations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A restaurant has a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "main courses list"
      }), " (left) and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "side dishes list"
      }), " (right). A CROSS JOIN answers: \"Show every possible combination of one main course and one side dish.\" If there are 3 mains and 4 sides, the result has 3×4 = 12 rows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-cross-join-execution",
      children: "Numbered Steps of CROSS JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take the first row of the left table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair it with every row of the right table, emitting one row per pair"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move to the next left row and repeat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue until all left rows are processed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No matching logic → every left row pairs with every right row unconditionally."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE CROSS_JOIN(table_left, table_right)\n    result = empty list\n    FOR EACH row_l IN table_left\n        FOR EACH row_r IN table_right\n            result.append(combine(row_l, row_r))\n        END FOR\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-4",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CROSS JOIN employees × departments (no condition):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result Accumulated"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Eng), (Alice, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Eng), (Alice, Sales), (Alice, HR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Bob, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Bob, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Bob, HR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie, HR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Diana, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Diana, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Diana, HR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve, Engineering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve, Sales)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve, HR)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result → 5 × 3 = 15 rows:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every employee is paired with every department → even combinations that make no business sense (Diana in HR without a matching dept_id)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-4",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Explicit CROSS JOIN syntax\nSELECT e.emp_name, d.dept_name\nFROM employees e\nCROSS JOIN departments d;\n\n-- Implicit theta-style (same result → no WHERE clause)\nSELECT e.emp_name, d.dept_name\nFROM employees e, departments d;\n\n-- Practical use: generate a calendar of all combinations\nSELECT s.store_id, d.date\nFROM (SELECT DISTINCT store_id FROM sales) s\nCROSS JOIN (\n    SELECT generate_series('2026-01-01'::DATE, '2026-12-31'::DATE, '1 day') AS date\n) d;\n\n-- Practical use: attribute combinations for a product catalog\nSELECT s.size_name, c.color_name\nFROM sizes s\nCROSS JOIN colors c;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Employee { int id; std::string name; };\nstruct Department { int id; std::string name; };\nstruct JoinRow { std::string emp; std::string dept; };\n\nstd::vector<JoinRow> crossJoin(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::vector<JoinRow> result;\n    for (const auto& e : emp) {\n        for (const auto& d : dept) {\n            result.push_back({e.name, d.name});\n        }\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def cross_join(employees, departments):\n    return [(e.emp_name, d.dept_name)\n            for e in employees\n            for d in departments]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CROSS JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every left × every right → no shortcuts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Result size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result itself is the bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it's always O(N×M):"
      }), " There is no optimization possible → every row must pair with every other row. The result set itself is size N×M. With 1000 employees and 1000 departments, the result is 1,000,000 rows. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Never CROSS JOIN large tables accidentally"
      }), " → a forgotten WHERE clause in a theta-style join silently produces a Cartesian product."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-3",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CROSS JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple; generates all combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result size explosion (N × M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar grids, attribute combos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearly always wrong for business queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accidental Cartesian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common join bug → always qualify your joins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty left table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero employees → zero rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero departments → zero rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL join columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLs are treated as values, still pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana (NULL dept_id) still appears with all departments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large tables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result explosion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10K × 10K = 100M rows → can crash the server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-natural-join",
      children: "5.7 NATURAL JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A NATURAL JOIN automatically joins two tables based on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all columns with the same name"
      }), " in both tables. No explicit join condition is needed → the database infers it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-identical-forms",
      children: "Real-World Analogy: Identical Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two paper forms that share a field like \"Employee ID\" in the same position. A NATURAL JOIN says: \"Match these forms wherever the identically-named fields have the same value.\" Useful when forms were designed identically, but dangerous if the schema changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-natural-join-execution",
      children: "Numbered Steps of NATURAL JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examine both tables' schemas and find all columns that share the same name"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct an implicit join condition: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "table1.col1 = table2.col1 AND table1.col2 = table2.col2 AND ..."
        }), " for every shared column name"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform an INNER JOIN using that condition"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one copy"
        }), " of the shared columns (no duplication)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical downside:"
      }), " If a column is renamed or a new column with the same name is added to one table but not the other, the join behavior changes silently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE NATURAL_JOIN(table_left, table_right)\n    shared_columns = intersect(schema(table_left), schema(table_right))\n    condition = build_equi_condition(shared_columns)\n    // condition is: col1 = col1 AND col2 = col2 AND ...\n    result = INNER_JOIN(table_left, table_right, condition)\n    // Remove duplicate shared columns from output\n    RETURN result WITH deduplicated_columns\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-5",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For this example, we use modified tables to show natural join behavior:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Table: employees_nat"
      }), " (emp_id, emp_name, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dept_id"
      }), ", salary)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Table: departments_nat"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dept_id"
      }), ", dept_name, location)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Shared column: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dept_id"
      }), " (both tables have it)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row (emp)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row (dept)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "e.dept_id = d.dept_id"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10, 70000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng, Bldg-A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=10 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, 10, Eng, Bldg-A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10, 70000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales, Bldg-B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=20 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10, 70000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR, Bldg-C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=30 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10, 60000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng, Bldg-A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10=10 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob, 10, Eng, Bldg-A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20, 80000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng, Bldg-A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=10 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20, 80000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales, Bldg-B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=20 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie, 20, Sales, Bldg-B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL, 55000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng, Bldg-A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=10 → UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL, 55000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales, Bldg-B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=20 → UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL, 55000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR, Bldg-C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=30 → UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20, 75000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng, Bldg-A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=10 → FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20, 75000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales, Bldg-B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20=20 → TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve, 20, Sales, Bldg-B)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result (dept_id appears once):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bldg-A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bldg-A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bldg-B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bldg-B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same as INNER JOIN, but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dept_id"
      }), " column is not duplicated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-5",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- NATURAL JOIN → infers join on all common columns\nSELECT *\nFROM employees\nNATURAL JOIN departments;\n\n-- Equivalent explicit INNER JOIN:\nSELECT e.emp_id, e.emp_name, e.dept_id, e.salary, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Output (identical):\n-- 1  Alice  10  70000  Engineering\n-- 2  Bob    10  60000  Engineering\n-- 3  Charlie 20 80000  Sales\n-- 5  Eve    20  75000  Sales\n\n-- NATURAL JOIN with multiple shared columns\n-- If both tables also shared 'location', the join would be:\n-- ON e.dept_id = d.dept_id AND e.location = d.location\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <optional>\n\n// Generic natural join → joins on the common key column name \"dept_id\"\nstruct Employee { int id; std::string name; int dept_id; double sal; };\nstruct Department { int dept_id; std::string name; std::string loc; };\nstruct JoinResult { std::string emp; int dept_id; std::string dept; std::string loc; };\n\nstd::vector<JoinResult> naturalJoin(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::unordered_map<int, Department> dept_map;\n    for (const auto& d : dept) dept_map[d.dept_id] = d;\n\n    std::vector<JoinResult> result;\n    for (const auto& e : emp) {\n        auto it = dept_map.find(e.dept_id);\n        if (it != dept_map.end()) {\n            result.push_back({e.name, e.dept_id, it->second.name, it->second.loc});\n        }\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-5",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def natural_join(employees, departments):\n    \"\"\"Auto-joins on 'dept_id' (the common column name).\"\"\"\n    dept_map = {d.dept_id: d for d in departments}\n    result = []\n    for e in employees:\n        if e.dept_id is not None and e.dept_id in dept_map:\n            d = dept_map[e.dept_id]\n            result.append((e.emp_name, e.dept_id, d.dept_name))\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATURAL (hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as inner equi-join after condition discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C₁ + C₂)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C₁, C₂ = column counts of each table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The join itself has the same complexity as INNER JOIN. The extra work is schema introspection to find common columns → negligible (sub-millisecond)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-4",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATURAL JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concise → no join condition to write"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragile"
            }), " → schema changes silently change semantics"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short-term use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick ad-hoc queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use in production code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column dedup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean output with no duplicate columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot control which common columns to join on"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Production Rule:"
      }), " Never use NATURAL JOIN in production. Always spell out the join condition. A column rename or addition can silently change join semantics and produce wrong results without errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No common columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CROSS JOIN (all pairs)!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables with no matching column names produce Cartesian product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple common columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All become part of join condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both share ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dept_id"
            }), " AND ", (0,jsx_runtime.jsx)(_components.code, {
              children: "location"
            }), " → AND join"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL with NATURAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as INNER JOIN NULL behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana (NULL dept_id) excluded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema evolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New column with same name changes join silently"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adding ", (0,jsx_runtime.jsx)(_components.code, {
              children: "created_at"
            }), " to both tables adds it to the join"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-self-join",
      children: "5.8 SELF JOIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A SELF JOIN joins a table to itself. Since SQL doesn't have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELF JOIN"
      }), " keyword, you use any regular join type (INNER, LEFT, etc.) with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "table aliases"
      }), " to distinguish the two roles of the same table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-employee-directory-with-managers",
      children: "Real-World Analogy: Employee Directory with Managers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees"
      }), " contains both regular employees and their managers (via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "manager_id"
      }), "). You need to look up ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two rows from the same table"
      }), " → one for the employee, one for the manager → and pair them. A SELF JOIN treats the same table as if it were two separate copies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-self-join-execution",
      children: "Numbered Steps of SELF JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create two virtual copies of the table using aliases (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a join type (INNER, LEFT, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write the join condition relating columns from the alias copies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute exactly like a regular join between two separate tables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE SELF_JOIN(table, join_type, condition)\n    // Conceptually: create two copies\n    table_copy_1 = table  // alias A\n    table_copy_2 = table  // alias B\n    \n    // Join them like regular tables\n    result = JOIN(table_copy_1, table_copy_2, join_type, condition)\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-6",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using a modified employees table with manager_id:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dept_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "salary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "manager_id"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SELF JOIN: employees AS e (employee) LEFT JOIN employees AS m (manager) ON e.manager_id = m.emp_id"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "e Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "m Row Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition e.mgr_id = m.emp_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=1→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=2→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=3→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=4→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=5→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done, no match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT w/ NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, NULL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1=1→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Bob, Alice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob), (3, C), ..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rest FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1=1→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Charlie, Alice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2=1→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2=2→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana, Bob)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3=1→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3=2→FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3=3→TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Eve, Charlie)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana), (5, Eve)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rest FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "employee"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "manager"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL (she's the CEO → no manager)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-6",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Employee hierarchy: each employee with their manager's name\nSELECT e.emp_name AS employee, m.emp_name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.emp_id;\n\n-- Find pairs of employees in the same department (excluding self-pairs)\nSELECT a.emp_name AS employee1, b.emp_name AS employee2, a.dept_id\nFROM employees a\nINNER JOIN employees b ON a.dept_id = b.dept_id\nWHERE a.emp_id < b.emp_id;\n\n-- Output:\n-- Alice  Bob   10\n-- Alice  Eve   20\n-- Bob    Eve   20  -- Wait, Bob is dept 10, Eve is dept 20 → no!\n-- (Actually correct: Alice/Bob share dept 10, Charlie/Eve share dept 20)\n-- Alice  Bob   10\n-- Charlie Eve   20\n\n-- Consecutive seat bookings (a classic SELF JOIN problem)\nSELECT a.seat_id AS seat1, b.seat_id AS seat2\nFROM cinema_seats a\nINNER JOIN cinema_seats b ON b.seat_id = a.seat_id + 1\nWHERE a.is_available AND b.is_available;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-5",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <optional>\n\nstruct Employee { int id; std::string name; std::optional<int> mgr_id; };\nstruct Pair { std::string emp; std::optional<std::string> mgr; };\n\nstd::vector<Pair> selfJoin(const std::vector<Employee>& emp) {\n    std::vector<Pair> result;\n    for (const auto& e : emp) {           // \"employee\" copy\n        bool matched = false;\n        for (const auto& m : emp) {       // \"manager\" copy\n            if (e.mgr_id.has_value() && e.mgr_id.value() == m.id) {\n                result.push_back({e.name, m.name});\n                matched = true;\n            }\n        }\n        if (!matched) result.push_back({e.name, std::nullopt});\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-6",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Optional\n\n\n@dataclass\nclass Employee:\n    emp_id: int\n    emp_name: str\n    manager_id: Optional[int]\n\n\ndef self_join(employees):\n    result = []\n    for e in employees:  # employee copy\n        matched = False\n        for m in employees:  # manager copy\n            if e.manager_id is not None and e.manager_id == m.emp_id:\n                result.append((e.emp_name, m.emp_name))\n                matched = True\n        if not matched:\n            result.append((e.emp_name, None))\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELF JOIN (nested loop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N rows × N rows = N² comparisons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELF JOIN (hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash on manager emp_id, probe with employee manager_id"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(N²) for nested loop:"
      }), " The same table appears twice. For each of N \"employee\" rows, we scan all N \"manager\" rows. 5 rows → 25 comparisons. 1M rows → 10¹² comparisons (impractical without hash)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(N) for hash:"
      }), " Build hash map from emp_id → emp_name (O(N)). Then for each employee, look up their manager_id in the hash (O(1) each). Total: O(N)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-5",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELF JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves hierarchy, pairs, consecutive problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be confusing to read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table aliases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required → disambiguate role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting aliases causes error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-pair filtering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a.id < b.id"
            }), " avoids (A,A) and (A,B)=(B,A)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must remember to add this filter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL mgr_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row appears with NULL manager (if LEFT JOIN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice (CEO) has NULL manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Circular mgmt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works but creates a cycle in output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob manages Diana, Diana manages Bob"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self-pair"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A matches itself if condition allows"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a.id = b.id"
            }), " would match each employee to itself"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate pairs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both (A,B) and (B,A) appear"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a.id < b.id"
            }), ", you get both orderings"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single row"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single row with NULL (if no match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One employee with no manager reference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "59-semi-join-logical",
      children: "5.9 SEMI JOIN (Logical)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A SEMI JOIN returns rows from the left table that have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "at least one match"
      }), " in the right table. Unlike INNER JOIN, it never duplicates left rows → even if multiple right rows match, the left row appears exactly once."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SQL has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SEMI JOIN"
      }), " keyword. It is expressed using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXISTS"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-job-applications",
      children: "Real-World Analogy: Job Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "applicants table"
      }), " (left) lists all applicants, and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interviews table"
      }), " (right) lists scheduled interviews. A SEMI JOIN answers: \"Which applicants have at least one interview scheduled?\" Each applicant appears once regardless of how many interviews they have."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-semi-join-execution",
      children: "Numbered Steps of SEMI JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each row in the left table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the right table for matching rows using the join condition"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["As soon as the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "first match"
        }), " is found, emit the left row and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stop scanning"
        }), " (short-circuit)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move to the next left row"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A left row appears at most once → no duplication"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference from INNER JOIN:"
      }), " INNER JOIN emits one row per match. SEMI JOIN emits one row per left row that has at least one match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE SEMI_JOIN(table_left, table_right, condition)\n    result = empty list\n    FOR EACH row_l IN table_left\n        FOR EACH row_r IN table_right\n            IF condition(row_l, row_r) == TRUE THEN\n                result.append(row_l)  // Only left columns!\n                BREAK                // Short-circuit → first match only\n            END IF\n        END FOR\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-7",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SEMI JOIN employees × departments ON dept_id (which employees have ANY department?)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT (Alice) then BREAK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT (Bob) then BREAK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, Bob)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO (20≠10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT (Charlie) then BREAK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Charlie)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=10→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=20→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=30→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue, no match → skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(no Diana)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO (20≠10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMIT (Eve) then BREAK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ (Eve)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result (only left-table columns):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Eve"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Diana is excluded (no department match). Alice, Bob, Charlie, Eve appear once each → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no duplication"
      }), " despite Alice and Bob matching the same department row."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-7",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- SEMI JOIN using EXISTS\nSELECT e.emp_name\nFROM employees e\nWHERE EXISTS (\n    SELECT 1 FROM departments d WHERE d.dept_id = e.dept_id\n);\n\n-- Output:\n-- Alice\n-- Bob\n-- Charlie\n-- Eve\n\n-- SEMI JOIN using IN (equivalent, but watch for NULLs!)\nSELECT emp_name\nFROM employees\nWHERE dept_id IN (SELECT dept_id FROM departments);\n\n-- Output (same):\n-- Alice\n-- Bob\n-- Charlie\n-- Eve\n\n-- INNER JOIN with DISTINCT (semantically equivalent but executes differently)\nSELECT DISTINCT e.emp_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- EXISTS is generally preferred → it short-circuits and avoids dedup cost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-6",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <optional>\n#include <unordered_set>\n\nstruct Employee { int id; std::string name; std::optional<int> dept_id; double sal; };\nstruct Department { int id; std::string name; };\n\nstd::vector<std::string> semiJoinExists(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::unordered_set<int> dept_ids;\n    for (const auto& d : dept) dept_ids.insert(d.id);\n\n    std::vector<std::string> result;\n    for (const auto& e : emp) {\n        if (e.dept_id.has_value() && dept_ids.count(e.dept_id.value())) {\n            result.push_back(e.name);\n        }\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-7",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def semi_join(employees, departments):\n    \"\"\"Return employees who have at least one matching department.\"\"\"\n    dept_ids = {d.dept_id for d in departments}\n    return [e.emp_name for e in employees\n            if e.dept_id is not None and e.dept_id in dept_ids]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS (nested)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case: every left row scans until end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS (hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash on right key, O(1) probe per left row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Materializes subquery, then does hash lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INNER JOIN + DISTINCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N×M + sort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join then sort for dedup → most expensive option"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why SEMI JOIN can be faster than INNER JOIN:"
      }), " The short-circuit (", (0,jsx_runtime.jsx)(_components.code, {
        children: "BREAK"
      }), " on first match) means it doesn't need to find all matches → just the first one. For tables with many duplicates on the join key, this is significantly faster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-6",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuits, NULL-safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated → re-executes per row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear, non-correlated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL-sensitive; materializes full subquery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOIN + DISTINCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single query, no nesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedup overhead; can produce wrong results if join duplicates multiply"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEMI JOIN (logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No duplication; short-circuit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not explicit SQL → must use EXISTS/IN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL join column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row excluded (NULL ≠ anything)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana (NULL dept_id) not returned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple matches"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left row appears once (first match short-circuits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice matches Engineering → only Alice, not Alice×N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result (no matches possible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No departments → no employees returned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL in IN subquery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN handles NULLs; NOT IN with NULL returns empty"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE id NOT IN (1, NULL)"
            }), " returns zero rows"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "510-anti-join-logical",
      children: "5.10 ANTI JOIN (Logical)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ANTI JOIN returns rows from the left table that have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no match"
      }), " in the right table. It is the complement of SEMI JOIN."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SQL has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANTI JOIN"
      }), " keyword. It is expressed using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOT EXISTS"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOT IN"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LEFT JOIN / IS NULL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-unemployed-workers",
      children: "Real-World Analogy: Unemployed Workers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "workers table"
      }), " (left) lists all registered workers, and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "job assignments table"
      }), " (right) lists current job assignments. An ANTI JOIN answers: \"Which workers have no job assignment?\" Only unassigned workers are returned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-anti-join-execution",
      children: "Numbered Steps of ANTI JOIN Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each row in the left table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan the right table for matching rows using the join condition"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "any match"
        }), " is found, discard the left row (not wanted)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no match"
        }), " is found after scanning all right rows, emit the left row"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result contains only left rows with zero matches in the right"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-8",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE ANTI_JOIN(table_left, table_right, condition)\n    result = empty list\n    FOR EACH row_l IN table_left\n        matched = FALSE\n        FOR EACH row_r IN table_right\n            IF condition(row_l, row_r) == TRUE THEN\n                matched = TRUE\n                BREAK  // Early exit → we know this left row is out\n            END IF\n        END FOR\n        IF matched == FALSE THEN\n            result.append(row_l)  // This left row has NO match\n        END IF\n    END FOR\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-8",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ANTI JOIN employees × departments ON dept_id (which employees have NO department?)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Row Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark matched → skip Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, Bob, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark matched → skip Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Engineering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3, Charlie, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark matched → skip Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=10→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=20→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(30, HR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL=30→UNK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, Diana, NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ scan done, no match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EMIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Diana)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10, Eng)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, Eve, 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20, Sales)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark matched → skip Eve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "emp_name"
          })
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only Diana has no matching department (her dept_id is NULL)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-code-8",
      children: "SQL Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ANTI JOIN using NOT EXISTS (safest → handles NULLs correctly)\nSELECT e.emp_name\nFROM employees e\nWHERE NOT EXISTS (\n    SELECT 1 FROM departments d WHERE d.dept_id = e.dept_id\n);\n\n-- Output:\n-- Diana\n\n-- ANTI JOIN using LEFT JOIN / IS NULL (most common pattern)\nSELECT e.emp_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.dept_id\nWHERE d.dept_id IS NULL;\n\n-- Output:\n-- Diana\n\n-- ANTI JOIN using NOT IN (WARNING: fails if subquery contains NULL!)\nSELECT emp_name\nFROM employees\nWHERE dept_id NOT IN (SELECT dept_id FROM departments);\n\n-- This returns ZERO rows if the subquery has a NULL!\n-- Because: WHERE dept_id NOT IN (10, 20, 30, NULL) → UNKNOWN for all\n-- Always add: WHERE dept_id NOT IN (SELECT dept_id FROM departments WHERE dept_id IS NOT NULL)\n\n-- Anti-join: departments with no employees\nSELECT d.dept_name\nFROM departments d\nWHERE NOT EXISTS (\n    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id\n);\n\n-- Output:\n-- HR\n\n-- Anti-join: products never ordered (real-world use case)\nSELECT p.product_name\nFROM products p\nWHERE NOT EXISTS (\n    SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-7",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <optional>\n#include <unordered_set>\n\nstruct Employee { int id; std::string name; std::optional<int> dept_id; double sal; };\nstruct Department { int id; std::string name; };\n\nstd::vector<std::string> antiJoin(\n    const std::vector<Employee>& emp,\n    const std::vector<Department>& dept) {\n    std::unordered_set<int> dept_ids;\n    for (const auto& d : dept) dept_ids.insert(d.id);\n\n    std::vector<std::string> result;\n    for (const auto& e : emp) {\n        if (!e.dept_id.has_value() || dept_ids.find(e.dept_id.value()) == dept_ids.end()) {\n            result.push_back(e.name);\n        }\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-8",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def anti_join(employees, departments):\n    \"\"\"Return employees who have NO matching department.\"\"\"\n    dept_ids = {d.dept_id for d in departments}\n    return [e.emp_name for e in employees\n            if e.dept_id is None or e.dept_id not in dept_ids]\n\n\ndef anti_join_left_is_null(employees, departments):\n    \"\"\"Implementation matching LEFT JOIN / IS NULL pattern.\"\"\"\n    dept_map = {d.dept_id: d for d in departments}\n    result = []\n    for e in employees:\n        if e.dept_id is None or e.dept_id not in dept_map:\n            result.append(e.emp_name)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT EXISTS (nested)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each left row scans right until a match found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT EXISTS (hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash right keys, O(1) probe per left row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN / NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash join + null check → same complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Materializes subquery, then anti-probe"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why LEFT JOIN / IS NULL is the standard pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It handles three or more tables correctly in complex queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All major databases optimize this pattern well"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is immune to the NULL-problem that plagues NOT IN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It uses a hash join under the hood, making it O(N+M) in practice"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ad-table-7",
      children: "A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT EXISTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL-safe, short-circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated → slower for non-correlated cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN / NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not correlated, works well in complex queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly verbose; WHERE IS NULL confuses beginners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple syntax"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL-bug:"
            }), " returns empty if subquery has any NULL"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANTI JOIN (logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be expressed using NOT EXISTS or LEFT JOIN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-8",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL join column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row included (NULL can't match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diana appears in ANTI JOIN result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All rows match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If every employee has a valid department"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty right table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All left rows returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No departments → all employees are \"unmatched\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL in NOT IN subquery"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "All rows excluded"
            }), " (critical bug)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE id NOT IN (1, NULL, 3)"
            }), " returns zero rows"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple tables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT JOIN / NULL chains safely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A LEFT JOIN B LEFT JOIN C WHERE B.id IS NULL AND C.id IS NULL"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "511-join-types-comparison-table",
      children: "5.11 JOIN Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "INNER"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LEFT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RIGHT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FULL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CROSS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NATURAL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SELF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SEMI"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ANTI"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rows from left kept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmatched only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rows from right kept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matched only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL fill for no match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (right)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (left)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (both)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join condition required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (auto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (logical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate left rows possible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Left row appears at most once"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ N×M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N + (matched)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M + (matched)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N+M+matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N×M"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ N×M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ N²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick ad-hoc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Absence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INNER JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LEFT JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RIGHT JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FULL JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CROSS JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NATURAL JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alias join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "EXISTS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NOT EXISTS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL-safe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT IN is not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index boost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (probe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (probe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (probe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (full scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (semi)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (anti)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory need"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "512-join-vs-subquery-comparison",
      children: "5.12 JOIN vs Subquery Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JOIN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subquery"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines columns from multiple tables into a single result set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested query whose result is used by the outer query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better for multi-table reporting → all tables visible in FROM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Better for single-value comparisons (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE price > AVG(...)"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often faster → optimizer can reorder, index nested loop, hash join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be slower (especially correlated subqueries that re-execute per row)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equi-joins ignore NULLs naturally (NULL ≠ NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN/NOT IN have NULL pitfalls; EXISTS/NOT EXISTS handle NULLs correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May need DISTINCT to avoid duplicate rows from 1:N joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS/NOT EXISTS never duplicate; IN may duplicate (without DISTINCT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result columns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns from multiple tables in one result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subquery in SELECT (scalar) returns one value; FROM subquery (derived table) returns a table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for retrieving columns from multiple tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for existence checks, scalar comparisons, and aggregate comparisons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can use hash join, merge join, nested loop, index joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated = nested loop; non-correlated = materialized then joined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correlation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correlated subquery re-runs per outer row → can be expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressiveness"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cannot easily express ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE x > ALL(SELECT ...)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANY/ALL provide comparison semantics that joins cannot match"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Use JOIN to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "retrieve columns"
      }), " from related tables. Use subqueries for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "existence checks"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scalar comparisons"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "aggregate comparisons"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rewrite equivalences:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- IN → JOIN\n-- Slow: WHERE id IN (SELECT id FROM B WHERE ...)\n-- Fast: JOIN B USING(id) WHERE ...\n-- Watch for: JOIN can duplicate rows\n\n-- NOT IN → LEFT JOIN / NULL\n-- Buggy: WHERE id NOT IN (SELECT id FROM B)\n-- Safe:  LEFT JOIN B USING(id) WHERE B.id IS NULL\n\n-- EXISTS → SEMI JOIN\n-- Same:  WHERE EXISTS (SELECT 1 FROM B WHERE A.id = B.id)\n-- Same:  Optimizer often rewrites INNER JOIN DISTINCT to SEMI JOIN automatically\n\n-- Scalar subquery → LEFT JOIN with aggregation\n-- WHERE price > (SELECT AVG(price) FROM products)\n-- Can sometimes be: JOIN (SELECT AVG(price) AS avg FROM products) ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "513-join-algorithms-comparison",
      children: "5.13 Join Algorithms Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nested Loop Join"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Join"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Merge Join (Sort-Merge)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How it works"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each outer row, scan inner table looking for matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash table on smaller table, probe with larger table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort both tables on join key, then merge like zipper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N + M log M + N + M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(N, M)) for hash table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M) for sorting (or O(1) if indexed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join types supported"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (equi, theta, cross)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equi-joins only (=)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equi-joins only (=); range with optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best when"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small inner table (≤100 rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large tables, no indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables already sorted on join key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst when"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large tables (10K+ × 10K+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory pressure (spills to disk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large tables not pre-sorted (sort dominates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NULL handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally excludes NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash tables ignore NULL keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLs sort first or last per DB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index benefit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can use index on inner table (Index Nested Loop) → O(N log M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index not needed (full scan both tables)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index pre-sorts → O(N + M) no sort phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelizable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (partition outer rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (partition + build per partition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (sort in parallel, merge sequentially)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supported by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, MySQL, SQL Server, Oracle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, SQL Server, Oracle (MySQL limited)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory requirement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(N, M)) for hash table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N + M) for sort (or work area)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "when-each-algorithm-is-chosen-optimizer-logic",
      children: "When Each Algorithm Is Chosen (Optimizer Logic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IF join condition has no equality (=):\n    USE Nested Loop Join  (hash/merge need equi-join)\nELSE IF one table is very small (< threshold):\n    USE Hash Join  (build hash on small table)\nELSE IF both tables are sorted on join key (or have indexes):\n    USE Merge Join  (no sort overhead)\nELSE:\n    Cost-based decision between Hash and Nested Loop\n    Hash wins for large tables with enough memory\n    Nested Loop wins for small tables with inner index\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-deep-dive--nested-loop-join",
      children: "Algorithm Deep Dive → Nested Loop Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Pseudocode execution\nFOR each row r in outer_table:\n    FOR each row s in inner_table:\n        IF r.join_key = s.join_key:\n            OUTPUT combined row\n\n-- With index on inner table (Index Nested Loop):\nFOR each row r in outer_table:\n    use index on inner_table to find matching s rows directly\n    OUTPUT combined rows\n\n-- Time: Without index: O(R × S)\n--       With index:    O(R × log S)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-deep-dive--hash-join",
      children: "Algorithm Deep Dive → Hash Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Phase 1: Build\nFOR each row s in smaller_table:\n    hash = HASH(s.join_key)\n    insert (hash, s) into hash_table\n\n-- Phase 2: Probe\nFOR each row r in larger_table:\n    hash = HASH(r.join_key)\n    lookup hash_table[hash]\n    FOR each s with this hash:\n        IF r.join_key = s.join_key:\n            OUTPUT combined row\n\n-- Key insight: Hash function distributes rows evenly across buckets\n-- Worst case: All rows hash to same bucket → degenerates to Nested Loop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-deep-dive--merge-join",
      children: "Algorithm Deep Dive → Merge Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Phase 1: Sort (skip if indexed)\nSort outer_table on join_key\nSort inner_table on join_key\n\n-- Phase 2: Merge\ni = 0, j = 0\nWHILE i < outer_size AND j < inner_size:\n    IF outer[i].key < inner[j].key:\n        i++\n    ELSE IF outer[i].key > inner[j].key:\n        j++\n    ELSE:  // Equal keys\n        OUTPUT combined row\n        j++  // In case of duplicates, advance inner\n        // (For 1:N matches, additional logic tracks outer duplicates)\n\n-- Time: O(N log N + M log M) for sort + O(N + M) for merge\n--       If pre-sorted/indexed: O(N + M) only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "514-sql-execution-with-joins-optimizer-details",
      children: "5.14 SQL Execution with Joins (Optimizer Details)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you write a multi-table JOIN query, the database optimizer transforms it into an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "execution plan"
      }), ". Understanding how joins are executed helps you write faster queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "join-order-selection",
      children: "Join Order Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Given query:\nSELECT e.emp_name, d.dept_name, p.project_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nJOIN projects p ON e.emp_id = p.lead_id;\n\n-- Possible join orders:\n-- 1. (employees JOIN departments) JOIN projects\n-- 2. (employees JOIN projects) JOIN departments\n-- 3. (departments JOIN employees) JOIN projects\n-- 4. (departments JOIN projects) JOIN employees  -- nonsensical but possible\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The optimizer evaluates join orders using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cost estimation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cardinality estimation:"
        }), " How many rows will each step produce?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selectivity estimation:"
        }), " What fraction of rows pass the join condition?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost model:"
        }), " CPU cost + I/O cost + memory cost for each plan"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimizer heuristic:"
      }), " Join smaller intermediate results first. If departments has 3 rows and employees has 5, the optimizer starts with the smaller table when building hash tables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-postgresqls-optimizer-handles-joins",
      children: "How PostgreSQL's Optimizer Handles Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PostgreSQL uses:\n- Genetic Query Optimizer (GEQO) for 12+ tables (switches from exhaustive search)\n- Dynamic Programming for fewer tables (finds optimal join order)\n- pg_hint_plan extension for manual join order hints\n\nTo see the plan:\nEXPLAIN (ANALYZE, BUFFERS) SELECT ... ;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-mysqls-optimizer-handles-joins",
      children: "How MySQL's Optimizer Handles Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MySQL uses:\n- Only Nested Loop Join variants (Block Nested Loop, Batched Key Access)\n- No Hash Join before MySQL 8.0.18 (added in 8.0.18)\n- Straight_JOIN to force join order manually\n\nMySQL can only do one join algorithm (Nested Loop), so join order is everything.\nThe optimizer picks the smallest table as the outer (driving) table.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "visualizing-join-order-decisions",
      children: "Visualizing Join Order Decisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q[SQL Query] --> P[Parser]\n    P --> B[Bind/Validate]\n    B --> O[Optimizer]\n    O --> E1{Join condition type?}\n    E1 -->|Equality| E2{Table sizes?}\n    E1 -->|Range/Theta| NL1[Nested Loop Join]\n    E2 -->|Small inner < threshold| H1[Hash Join]\n    E2 -->|Both large| E3{Pre-sorted?}\n    E3 -->|Yes| M1[Merge Join]\n    E3 -->|No| H1\n    H1 --> C[Execute]\n    NL1 --> C\n    M1 --> C\n    C --> R[Result]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "performance-implications-of-join-order",
      children: "Performance Implications of Join Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Example: 100 employees, 3 departments\n-- Option A: employees (driving) × departments (inner)\nEXPLAIN SELECT * FROM employees e JOIN departments d ON e.dept_id = d.dept_id;\n-- Likely: Hash Join (build on departments=3 rows, probe employees=100 rows)\n\n-- For Nested Loop (pre-8.0.18 MySQL):\n-- Best: small table drives, large table has index\n-- Small table first as outer: 3 × 100 = 300 comparisons\n-- Large table first as outer: 100 × 3 = 300 comparisons\n-- (Same for cross join; with index, inner table scans are O(log N))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "515-subqueries-original-content-preserved-and-expanded",
      children: "5.15 Subqueries (Original content preserved and expanded)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A subquery is a SELECT statement nested inside another SQL statement. Subqueries can appear in SELECT, FROM, WHERE, HAVING, and even in DML statements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "subquery-in-where-clause",
      children: "Subquery in WHERE clause"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Find products that cost more than average\nSELECT product_name, price\nFROM products\nWHERE price > (SELECT AVG(price) FROM products);\n\n-- Find customers who have placed orders\nSELECT name, email\nFROM customers\nWHERE customer_id IN (SELECT DISTINCT customer_id FROM orders);\n\n-- Find customers who have NOT placed orders\nSELECT name, email\nFROM customers\nWHERE customer_id NOT IN (SELECT DISTINCT customer_id FROM orders);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "subquery-in-select-clause-scalar-subquery",
      children: "Subquery in SELECT clause (scalar subquery)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Show each product's price and how it compares to the average\nSELECT\n    product_name,\n    price,\n    (SELECT AVG(price) FROM products) AS avg_price,\n    price - (SELECT AVG(price) FROM products) AS price_difference\nFROM products;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "subquery-in-from-clause-derived-table",
      children: "Subquery in FROM clause (derived table)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Find the top 3 departments by average salary\nSELECT department_name, avg_salary\nFROM (\n    SELECT d.department_name, AVG(e.salary) AS avg_salary\n    FROM departments d\n    JOIN employees e ON d.department_id = e.department_id\n    GROUP BY d.department_name\n) dept_avg\nORDER BY avg_salary DESC\nLIMIT 3;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "516-exists-and-not-exists",
      children: "5.16 EXISTS and NOT EXISTS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EXISTS checks whether a subquery returns any rows. It returns TRUE if the subquery has at least one result row."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Customers who have placed at least one order\nSELECT c.name\nFROM customers c\nWHERE EXISTS (\n    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id\n);\n\n-- Customers who have NEVER placed an order\nSELECT c.name\nFROM customers c\nWHERE NOT EXISTS (\n    SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id\n);\n\n-- Products that have never been ordered\nSELECT p.product_name\nFROM products p\nWHERE NOT EXISTS (\n    SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXISTS vs. IN:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXISTS can be more efficient because it short-circuits on the first match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXISTS handles NULL values correctly; IN with NULL in subquery results can behave unexpectedly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IN is often clearer for simple, non-correlated conditions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "517-correlated-subqueries",
      children: "5.17 Correlated Subqueries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A correlated subquery references columns from the outer query and is re-executed for each row of the outer query. These can be expensive."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Find employees who earn more than the average in their department\nSELECT e.employee_id, e.name, e.salary, e.department_id\nFROM employees e\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE department_id = e.department_id\n)\nORDER BY e.department_id;\n\n-- Find products with above-average sales in their category\nSELECT p.product_name, p.category_id, p.price\nFROM products p\nWHERE p.price > (\n    SELECT AVG(p2.price)\n    FROM products p2\n    WHERE p2.category_id = p.category_id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "518-any-and-all-operators",
      children: "5.18 ANY and ALL Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- ANY: True if condition is true for ANY subquery row\nSELECT product_name, price\nFROM products\nWHERE price > ANY (\n    SELECT price FROM products WHERE category_id = 2\n);\n-- Equivalent to: price > MIN(price) of category 2\n\n-- ALL: True if condition is true for ALL subquery rows\nSELECT product_name, price\nFROM products\nWHERE price > ALL (\n    SELECT price FROM products WHERE category_id = 2\n);\n-- Equivalent to: price > MAX(price) of category 2\n\n-- Find employees who earn more than ALL employees in department 5\nSELECT name, salary\nFROM employees\nWHERE salary > ALL (\n    SELECT salary FROM employees WHERE department_id = 5\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "519-join-performance-considerations",
      children: "5.19 Join Performance Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join order matters"
        }), " to the optimizer, but modern optimizers usually find the best plan."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indexes on join columns"
        }), " dramatically improve join performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smaller table first"
        }), " (as inner table) is generally better for hash joins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subqueries can often be rewritten as joins"
        }), " (especially IN → INNER JOIN)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correlated subqueries"
        }), " can sometimes be rewritten as window functions or joins."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Subquery approach (can be slower)\nSELECT name FROM customers\nWHERE customer_id IN (SELECT customer_id FROM orders WHERE total > 1000);\n\n-- Join approach (often faster, deduplication needed)\nSELECT DISTINCT c.name\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nWHERE o.total > 1000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT IN vs. NOT EXISTS vs. LEFT JOIN / NULL:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Three ways to find customers without orders:\n\n-- Method 1: NOT IN (watch out for NULLs!)\nSELECT name FROM customers\nWHERE customer_id NOT IN (SELECT customer_id FROM orders WHERE customer_id IS NOT NULL);\n\n-- Method 2: NOT EXISTS (safe with NULLs, often efficient)\nSELECT name FROM customers c\nWHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);\n\n-- Method 3: LEFT JOIN + NULL check (standard pattern)\nSELECT c.name\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nWHERE o.order_id IS NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "520-interview-corner",
      children: "5.20 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common SQL join interview questions with expert answers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-what-is-the-difference-between-inner-join-and-outer-join",
      children: "Q1: What is the difference between INNER JOIN and OUTER JOIN?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " INNER JOIN returns only rows where the join condition matches in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "both"
      }), " tables. Any row without a match on either side is excluded. OUTER JOIN (LEFT/RIGHT/FULL) returns all rows from one or both tables, filling NULLs where no match exists."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key point:"
      }), " INNER JOIN can lose data. OUTER JOIN preserves data from the specified side(s). Choose INNER when you only want rows that have complete relationships. Choose OUTER when you need complete lists (e.g., \"all customers\" even if some have no orders)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-when-would-you-use-a-join-vs-a-subquery",
      children: "Q2: When would you use a JOIN vs a subquery?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use JOINs when you need columns from multiple tables in the result. Use subqueries for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scalar comparisons (", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE price > (SELECT AVG(price) ...)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existence checks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE EXISTS ..."
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derived tables (subquery in FROM)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Performance-wise, JOINs are often faster because the optimizer can reorder tables and use hash/merge joins. However, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXISTS"
      }), " can be faster than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INNER JOIN DISTINCT"
      }), " for existence checks because it short-circuits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-how-do-nulls-behave-in-joins",
      children: "Q3: How do NULLs behave in JOINs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In SQL, NULL ≠ NULL. Any comparison involving NULL yields UNKNOWN, not TRUE. Therefore:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["INNER JOIN: Rows with NULL in the join column are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "always excluded"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LEFT JOIN: Rows with NULL join column produce NULL for right-side columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FULL JOIN: Same behavior → NULL on either side prevents a match"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NOT IN: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dangerous"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE x NOT IN (1, NULL, 3)"
        }), " returns zero rows because ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x ≠ NULL"
        }), " is UNKNOWN"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Recommended: Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOT EXISTS"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LEFT JOIN / IS NULL"
      }), " for anti-joins. Never rely on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOT IN"
      }), " with subqueries that might contain NULLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-how-can-you-optimize-join-performance",
      children: "Q4: How can you optimize JOIN performance?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index join columns"
        }), " → especially foreign keys. Index Nested Loop turns O(N×M) into O(N log M)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduce result set early"
        }), " → filter with WHERE before joining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the right algorithm"
        }), " → let the optimizer decide, but understand: Hash (large, no index), Nested Loop (small inner table with index), Merge (pre-sorted data)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid joining unnecessary tables"
        }), " → each join multiplies rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use covering indexes"
        }), " → index includes all needed columns (index-only scan)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check EXPLAIN plans"
        }), " → verify actual vs estimated row counts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q5-what-is-a-self-join-and-when-would-you-use-it",
      children: "Q5: What is a SELF JOIN and when would you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A SELF JOIN joins a table to itself using table aliases. Common use cases:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Employee-manager hierarchies (one employees table with manager_id)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consecutive rows (find gaps in seat numbers, date ranges)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graph-like relationships (friends, product pairs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comparing rows within the same table (e.g., products with prices within 10% of each other)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT a.name, b.name FROM employees a JOIN employees b ON a.manager_id = b.emp_id"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q6-what-is-a-natural-join-and-why-is-it-discouraged",
      children: "Q6: What is a NATURAL JOIN and why is it discouraged?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " NATURAL JOIN auto-matches columns with the same name in both tables. It's discouraged because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schema changes silently change join behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a column is added to one table with a matching name in the other, the join suddenly includes it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It creates implicit coupling between table schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production, always spell out join conditions explicitly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q7-how-does-the-optimizer-choose-between-hash-join-and-nested-loop-join",
      children: "Q7: How does the optimizer choose between Hash Join and Nested Loop Join?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Join"
        }), " is chosen when joining ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "large tables"
        }), " with an equality condition. It builds a hash table on the smaller table and probes with the larger. It requires memory proportional to the smaller table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested Loop Join"
        }), " is chosen when one table is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "small"
        }), " (typically < 100 rows) or when the join condition uses non-equality operators (<, >, BETWEEN). With an index on the inner table, Index Nested Loop is very efficient."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge Join"
        }), " is chosen when both tables are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "already sorted"
        }), " on the join key (common with indexed columns). It avoids the hash table memory overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q8-what-is-a-cross-join-and-when-is-it-useful",
      children: "Q8: What is a CROSS JOIN and when is it useful?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CROSS JOIN produces the Cartesian product (every row of A × every row of B). It's useful for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generating all combinations of attributes (sizes × colors for a catalog)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating calendar tables (dates × stores for sales reporting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test data generation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It's dangerous when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accidentally"
      }), " produced by forgetting a WHERE clause in theta-style joins → this is the most common SQL join bug."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-applications-in-real-systems",
      children: "5.21 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mysql-join-optimizer",
      children: "MySQL Join Optimizer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MySQL uses only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nested Loop Join"
      }), " variants (no Hash Join before 8.0.18):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple Nested Loop Join"
        }), " → naive double loop (worst)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Nested Loop (BNL)"
        }), " → reads inner table in blocks into join buffer, reducing I/O"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batched Key Access (BKA)"
        }), " → batches outer rows and uses multi-range read (MRR) on the inner table index"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- MySQL: Force join order (STRAIGHT_JOIN)\nSELECT STRAIGHT_JOIN e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n-- Forces MySQL to read employees first (as driving table)\n\n-- MySQL: View join buffer usage\nEXPLAIN FORMAT=JSON SELECT ...;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL 8.0.18+"
      }), " added Hash Join support, which was a major milestone. Before that, large-table joins without indexes were extremely slow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "postgresql-hash-join",
      children: "PostgreSQL Hash Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL has a sophisticated Hash Join implementation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In-memory hash join"
        }), " → hash table fits in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "work_mem"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid hash join"
        }), " → partial hash table + batch spill to disk (grace hash join)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Semi Join"
        }), " → optimized hash join for EXISTS (stops after first match per probe key)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- PostgreSQL: Control work_mem for hash joins\nSET work_mem = '256MB';  -- More memory = faster hash joins\n\n-- PostgreSQL: Disable hash join (for testing)\nSET enable_hashjoin = off;\n\n-- PostgreSQL: View hash join statistics\nEXPLAIN (ANALYZE, BUFFERS, SETTINGS)\nSELECT * FROM employees e JOIN departments d ON e.dept_id = d.dept_id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How PostgreSQL builds hash tables:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Estimate size of smaller table\n2. Choose number of buckets (power of 2, typically 2× row count)\n3. Build: iterate smaller table, insert into hash\n4. If hash table exceeds work_mem → spill to disk in batches\n5. Probe: iterate larger table, probe hash, if hash spilled → probe per batch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-server-merge-join",
      children: "SQL Server Merge Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL Server excels at Merge Joins:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Force merge join hint in SQL Server\nSELECT e.name, d.dept_name\nFROM employees e\nINNER MERGE JOIN departments d ON e.dept_id = d.dept_id;\n\n-- SQL Server: View actual merge join plan\nSET STATISTICS PROFILE ON;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL Server uses three join types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested Loops"
        }), " → best for small inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Match"
        }), " → best for large unsorted inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge Join"
        }), " → best for large sorted inputs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "oracle-join-optimizer",
      children: "Oracle Join Optimizer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Oracle introduces ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "join method hints"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "star transformations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Oracle: Use LEADING hint to control join order\nSELECT /*+ LEADING(e d) USE_HASH(d) */ e.name, d.dept_name\nFROM employees e, departments d\nWHERE e.dept_id = d.dept_id;\n\n-- Oracle: Star transformation for data warehouse joins\nSELECT /*+ STAR_TRANSFORMATION */ ...\nFROM fact_table f, dim1, dim2, dim3\nWHERE f.dim1_id = dim1.id AND f.dim2_id = dim2.id AND f.dim3_id = dim3.id;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analytics-join-patterns",
      children: "Real-World: Analytics Join Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Snowflake schema in a data warehouse\n-- fact_orders (order_id, customer_id, product_id, date_id, amount)\n-- dim_customer (customer_id, name, region)\n-- dim_product (product_id, name, category)\n-- dim_date (date_id, date, month, year)\n\n-- Typical star-join query:\nSELECT\n    dc.region,\n    dp.category,\n    dd.month,\n    SUM(fo.amount) AS revenue\nFROM fact_orders fo\nJOIN dim_customer dc ON fo.customer_id = dc.customer_id\nJOIN dim_product dp ON fo.product_id = dp.product_id\nJOIN dim_date dd ON fo.date_id = dd.date_id\nWHERE dd.year = 2026\nGROUP BY dc.region, dp.category, dd.month;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This star-join pattern is highly optimized in all major databases. The fact table is the largest (millions to billions of rows), and dimension tables are smaller. The optimizer typically:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filters dimension tables (WHERE year=2026)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash joins filtered dimensions to the fact table (largest-to-smallest)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups and aggregates last"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Practicing multi-table JOINs → from employee-department analysis to customer spending reports → solidifies the ability to write correct, efficient queries for real reporting needs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.1: Employee Department Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Schema\n-- employees(emp_id, name, salary, dept_id, manager_id)\n-- departments(dept_id, dept_name, location)\n\n-- All employees with their department names\nSELECT e.name, e.salary, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- Full list: all departments, even empty ones\nSELECT d.dept_name, COUNT(e.emp_id) AS employee_count\nFROM departments d\nLEFT JOIN employees e ON d.dept_id = e.dept_id\nGROUP BY d.dept_name\nORDER BY employee_count DESC;\n\n-- Employees with salary above their department average\nSELECT e.name, e.salary, d.dept_name\nFROM employees e\nJOIN departments d ON e.dept_id = d.dept_id\nWHERE e.salary > (\n    SELECT AVG(e2.salary)\n    FROM employees e2\n    WHERE e2.dept_id = e.dept_id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.2: Multi-Table Reporting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Find the top 5 customers by total spending\nSELECT c.customer_id, c.first_name || ' ' || c.last_name AS name,\n       SUM(oi.quantity * oi.unit_price) AS total_spent\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nJOIN order_items oi ON o.order_id = oi.order_id\nWHERE o.status != 'cancelled'\nGROUP BY c.customer_id, c.first_name, c.last_name\nORDER BY total_spent DESC\nLIMIT 5;\n\n-- Products that have never been sold\nSELECT p.product_id, p.product_name\nFROM products p\nLEFT JOIN order_items oi ON p.product_id = oi.product_id\nWHERE oi.product_id IS NULL;\n\n-- The same with NOT EXISTS (anti-join)\nSELECT p.product_id, p.product_name\nFROM products p\nWHERE NOT EXISTS (\n    SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " NOT IN with NULLs in the subquery returns zero rows → use NOT EXISTS or LEFT JOIN / IS NULL for safe anti-joins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Test your joins on small data first → an incorrect join condition can produce a Cartesian product with millions of rows that is extremely hard to debug."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-join-algorithm-simulator-typescript",
      children: "5.22 Join Algorithm Simulator (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following code simulates three fundamental join algorithms — Nested Loop, Hash Join, and Sort-Merge Join — with cost analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Join Algorithm Simulator — TypeScript\n// ============================================================\n\ninterface JoinRow {\n  [key: string]: unknown;\n}\n\ninterface JoinResult {\n  rows: JoinRow[];\n  algorithm: string;\n  cost: number;\n  executionTimeMs: number;\n}\n\nclass JoinSimulator {\n  simulateNestedLoop(left: JoinRow[], right: JoinRow[], leftKey: string, rightKey: string): JoinResult {\n    const start = Date.now();\n    const result: JoinRow[] = [];\n    let comparisons = 0;\n    for (const l of left) {\n      for (const r of right) {\n        comparisons++;\n        if (String(l[leftKey]) === String(r[rightKey])) {\n          result.push({ ...l, ...r });\n        }\n      }\n    }\n    return {\n      rows: result,\n      algorithm: 'Nested Loop (O(n*m) = ' + left.length + 'x' + right.length + ')',\n      cost: comparisons,\n      executionTimeMs: Date.now() - start\n    };\n  }\n\n  simulateHashJoin(left: JoinRow[], right: JoinRow[], leftKey: string, rightKey: string): JoinResult {\n    const start = Date.now();\n    // Build hash table on smaller relation (left)\n    const hashTable = new Map<string, JoinRow[]>();\n    for (const row of left) {\n      const key = String(row[leftKey]);\n      if (!hashTable.has(key)) hashTable.set(key, []);\n      hashTable.get(key)!.push(row);\n    }\n    // Probe with larger relation (right)\n    const result: JoinRow[] = [];\n    let probes = 0;\n    for (const row of right) {\n      const key = String(row[rightKey]);\n      probes++;\n      const matches = hashTable.get(key);\n      if (matches) {\n        for (const match of matches) {\n          result.push({ ...match, ...row });\n        }\n      }\n    }\n    return {\n      rows: result,\n      algorithm: 'Hash Join (O(n+m) build+probe)',\n      cost: left.length + probes,\n      executionTimeMs: Date.now() - start\n    };\n  }\n\n  simulateSortMergeJoin(left: JoinRow[], right: JoinRow[], leftKey: string, rightKey: string): JoinResult {\n    const start = Date.now();\n    // Sort both relations by join key\n    const sortedLeft = [...left].sort((a, b) => String(a[leftKey]).localeCompare(String(b[leftKey])));\n    const sortedRight = [...right].sort((a, b) => String(a[rightKey]).localeCompare(String(b[rightKey])));\n    const result: JoinRow[] = [];\n    let i = 0, j = 0;\n    let comparisons = 0;\n    while (i < sortedLeft.length && j < sortedRight.length) {\n      comparisons++;\n      const lVal = String(sortedLeft[i][leftKey]);\n      const rVal = String(sortedRight[j][rightKey]);\n      if (lVal < rVal) {\n        i++;\n      } else if (lVal > rVal) {\n        j++;\n      } else {\n        // Match found — scan all matching tuples on both sides\n        let jStart = j;\n        while (j < sortedRight.length && String(sortedRight[j][rightKey]) === lVal) {\n          result.push({ ...sortedLeft[i], ...sortedRight[j] });\n          j++;\n        }\n        i++;\n        j = jStart;\n        while (i < sortedLeft.length && String(sortedLeft[i][leftKey]) === lVal) {\n          j = jStart;\n          while (j < sortedRight.length && String(sortedRight[j][rightKey]) === lVal) {\n            result.push({ ...sortedLeft[i], ...sortedRight[j] });\n            j++;\n          }\n          i++;\n        }\n      }\n    }\n    return {\n      rows: result,\n      algorithm: 'Sort-Merge Join (O(n log n + m log m + n + m))',\n      cost: sortedLeft.length * Math.log2(sortedLeft.length) + sortedRight.length * Math.log2(sortedRight.length) + comparisons,\n      executionTimeMs: Date.now() - start\n    };\n  }\n}\n\n// Demo\nconst simulator = new JoinSimulator();\nconst employees = [\n  { id: 1, name: 'Alice', dept_id: 10 },\n  { id: 2, name: 'Bob', dept_id: 20 },\n  { id: 3, name: 'Charlie', dept_id: 10 },\n  { id: 4, name: 'Diana', dept_id: 30 },\n];\n\nconst departments = [\n  { dept_id: 10, name: 'Engineering' },\n  { dept_id: 20, name: 'Marketing' },\n  { dept_id: 30, name: 'Sales' },\n  { dept_id: 10, name: 'Engineering' }, // duplicate for testing\n];\n\nconsole.log('Join Algorithm Comparison:\\n');\nconst nl = simulator.simulateNestedLoop(employees, departments, 'dept_id', 'dept_id');\nconsole.log('1. ' + nl.algorithm);\nconsole.log('   Comparisons: ' + nl.cost + ', Results: ' + nl.rows.length);\n\nconst hj = simulator.simulateHashJoin(employees, departments, 'dept_id', 'dept_id');\nconsole.log('2. ' + hj.algorithm);\nconsole.log('   Operations: ' + hj.cost + ', Results: ' + hj.rows.length);\n\nconst smj = simulator.simulateSortMergeJoin(employees, departments, 'dept_id', 'dept_id');\nconsole.log('3. ' + smj.algorithm);\nconsole.log('   Operations: ' + smj.cost + ', Results: ' + smj.rows.length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Join Decision Tree"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q[Join Operation] --> T[Table Sizes]\n    T -->|Small inner < 100 rows| NL[Nested Loop Join]\n    T -->|Large tables| EQ{Equi-join?}\n    EQ -->|Yes| H{Hash Join}\n    EQ -->|No| NL\n    H -->|Indexed| INL[Index Nested Loop]\n    H -->|No index| HJ[Hash Join]\n    H -->|Pre-sorted| MJ[Sort-Merge Join]\n    NL --> R[Result]\n    HJ --> R\n    MJ --> R\n    INL --> R\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which join algorithm requires the join condition to be an equality?\na) Nested Loop Join\nb) Hash Join\nc) Sort-Merge Join\nd) Both Hash Join and Sort-Merge Join (optimally)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main advantage of Hash Join over Nested Loop Join is:\na) It works with any join condition\nb) It has O(n + m) complexity for equi-joins vs O(n*m)\nc) It requires less memory\nd) It preserves sorted order"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When would Nested Loop Join outperform Hash Join?\na) When both tables are very large\nb) When the inner table is small and indexed\nc) When the join condition is an inequality\nd) Both b and c"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A LEFT JOIN / IS NULL pattern is equivalent to:\na) INNER JOIN\nb) ANTI JOIN\nc) SEMI JOIN\nd) CROSS JOIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when you use NOT IN with a subquery that contains NULL values?\na) NULL values are ignored\nb) The query returns zero rows\nc) NULL values are treated as matches\nd) The query returns an error"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 13-d, 14-b, 15-d, 16-b, 17-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Using the TypeScript JoinSimulator class, compare the performance of Nested Loop vs Hash Join on a dataset of 100 employees and 5 departments. Record the number of comparisons and execution time."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a SQL query using a FULL OUTER JOIN that finds all employees and all departments, showing unmatched rows on both sides. Schema: employees(id, name, dept_id), departments(dept_id, name)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a TypeScript function that detects Cartesian products from a SQL-like query plan by identifying join conditions that involve all table pairs."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer explicit ANSI JOIN syntax"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "INNER JOIN ... ON"
        }), ") over implicit theta-style (", (0,jsx_runtime.jsx)(_components.code, {
          children: "FROM a, b WHERE a.x = b.x"
        }), ") → it separates join conditions from filter conditions and is far more readable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LEFT JOIN / IS NULL is the standard anti-join pattern"
        }), " → but NOT EXISTS is often more efficient and handles NULLs correctly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SELF JOINs solve more problems than you expect"
        }), " → employee hierarchies, product pairs, consecutive seat bookings, and date range comparisons all use SELF JOIN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correlated subqueries can often be rewritten as window functions"
        }), " → which execute once instead of once per outer row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test your joins on small data first"
        }), " → an incorrect join condition can produce a Cartesian product (millions of rows) that is hard to debug."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use EXPLAIN PLAN"
        }), " → always verify the optimizer is using the join strategy you expect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never use NATURAL JOIN in production"
        }), " → schema changes silently break queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CROSS JOIN intentionally"
        }), " → always write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CROSS JOIN"
        }), " explicitly; never rely on a missing WHERE clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Join vs Nested Loop"
        }), " → for large tables with equi-joins, prefer hash join (increase ", (0,jsx_runtime.jsx)(_components.code, {
          children: "work_mem"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "join_buffer_size"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.1:"
        }), " Joins combine rows from multiple tables based on related columns → they are the heart of relational querying."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.2:"
        }), " INNER JOIN returns only matched rows; it is the most common and efficient join type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.3:"
        }), " OUTER JOINs (LEFT, RIGHT, FULL) preserve unmatched rows, filling missing values with NULL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.4:"
        }), " CROSS JOIN produces a Cartesian product; SELF JOIN joins a table to itself for hierarchical or pairwise queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.5:"
        }), " NATURAL JOIN auto-detects common columns → convenient but dangerous."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.6:"
        }), " EXISTS short-circuits on the first match and handles NULLs correctly, often outperforming IN."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.7:"
        }), " Correlated subqueries reference the outer query and re-execute per row → powerful but potentially expensive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.8:"
        }), " ANY and ALL compare a value against a subquery result set with intuitive semantics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.9:"
        }), " SEMI JOIN returns left rows with at least one match; ANTI JOIN returns left rows with no match."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5.10:"
        }), " Join order, indexes, and algorithm selection significantly impact query performance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Join Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rows Returned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INNER JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only matched rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common → orders with customer details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LEFT JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All left rows + matched right rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All customers, with or without orders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RIGHT JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All right rows + matched left rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare → usually rewritten as LEFT JOIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FULL JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows from both sides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All employees and all departments, matched if possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CROSS JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesian product (every × every)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generating date ranges or attribute combinations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NATURAL JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-matched on common columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick ad-hoc queries (never in production)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SELF JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on join condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchies, consecutive records, pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SEMI JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left rows with match in right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS queries → at least one match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ANTI JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left rows with no match in right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT EXISTS → orphan detection"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IN + Subquery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple membership test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE id IN (SELECT ...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXISTS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existence test, NULL-safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE EXISTS (SELECT 1 ...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NOT IN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-join (watch for NULLs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE id NOT IN (...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NOT EXISTS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-join, NULL-safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE NOT EXISTS (SELECT 1 ...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LEFT JOIN / NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-join (three-table safe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LEFT JOIN t2 ... WHERE t2.id IS NULL"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ANY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison against any value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE price > ANY (SELECT ...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison against all values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE price > ALL (SELECT ...)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Join Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inner Equi-join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A INNER JOIN B ON A.id = B.id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches rows where ids are equal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left Outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A LEFT JOIN B ON A.id = B.id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keeps all A rows; NULLs for unmatched B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right Outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A RIGHT JOIN B ON A.id = B.id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keeps all B rows; NULLs for unmatched A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A FULL JOIN B ON A.id = B.id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keeps all rows from both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A CROSS JOIN B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N_A × N_B rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A a JOIN A b ON a.parent = b.id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table joined to itself with aliases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A NATURAL JOIN B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-match on common column names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-join (logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE EXISTS (SELECT ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows from A with at least one match in B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-join (logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE NOT EXISTS (SELECT ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows from A with no match in B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Join Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applied In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INNER JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every multi-table query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The default way to combine related data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LEFT JOIN / NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data quality checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding orphan records, incomplete data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SELF JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Org charts, product recommendations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee reporting structure, \"customers who bought X also bought Y\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CROSS JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar tables, size/color combos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generating complete reference grids"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXISTS vs IN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any subquery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS short-circuits; IN materializes the full subquery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correlated Subquery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-row comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Above average in their department\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FULL OUTER JOIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing two time periods, finding records in either set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL, MySQL 8.0+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear-time joins for large tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Server, Oracle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest for pre-sorted data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which join returns only rows where there is a match in both tables?\na) LEFT JOIN   b) RIGHT JOIN   c) INNER JOIN   d) FULL OUTER JOIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A LEFT JOIN returns:\na) Only matched rows   b) All rows from the right table\nc) All rows from the left table, with NULLs for unmatched right rows\nd) All rows from both tables"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is the safest anti-join pattern (handles NULLs correctly)?\na) NOT IN   b) NOT EXISTS   c) FULL OUTER JOIN   d) CROSS JOIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A correlated subquery is:\na) Executed once for the entire query\nb) References columns from the outer query and re-executes per row\nc) A subquery that returns multiple columns\nd) A subquery that cannot be rewritten as a JOIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WHERE price > ALL (SELECT price FROM products WHERE category_id = 2)"
          }), " return?\na) Products priced higher than any product in category 2\nb) Products priced higher than the average in category 2\nc) Products priced higher than ALL products in category 2\nd) Products that are in category 2"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A SELF JOIN is used to:\na) Join a table to another table with the same name\nb) Join a table to itself using table aliases\nc) Create a copy of a table\nd) Join on the primary key only"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main performance concern with correlated subqueries is:\na) They cannot use indexes   b) They re-execute for each row of the outer query\nc) They always return NULL   d) They only work with small tables"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which is correct about NOT IN with NULLs?\na) NOT IN handles NULLs the same as NOT EXISTS\nb) NOT IN can produce unexpected results if the subquery contains NULL\nc) NOT IN is always more efficient   d) NOT IN cannot be used in WHERE clauses"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which join type produces a Cartesian product?\na) INNER JOIN   b) LEFT JOIN   c) CROSS JOIN   d) FULL JOIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the time complexity of a Hash Join?\na) O(N × M)   b) O(N²)   c) O(N + M)   d) O(log N)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which join algorithm requires the data to be pre-sorted on the join key?\na) Nested Loop   b) Hash Join   c) Merge Join   d) All of the above"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when you use NATURAL JOIN and the schema adds a new column with the same name to both tables?\na) Nothing → the join ignores it\nb) The join condition silently includes the new column\nc) An error is thrown   d) The new column is excluded automatically"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-c, 2-c, 3-b, 4-b, 5-c, 6-b, 7-b, 8-b, 9-c, 10-c, 11-c, 12-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INNER JOIN returns only matched rows; OUTER JOINs preserve unmatched rows with NULLs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SELF JOIN joins a table to itself for hierarchical or pair-wise queries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NATURAL JOIN auto-matches columns by name → convenient but fragile in production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CROSS JOIN produces Cartesian products → useful for grids but dangerous accidentally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SEMI JOIN (EXISTS) returns left rows with at least one match → no duplication, short-circuits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ANTI JOIN (NOT EXISTS / LEFT JOIN / NULL) returns rows with no match."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subqueries can appear in SELECT, FROM, WHERE, and HAVING clauses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EXISTS is often more efficient than IN for correlated subqueries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ANY and ALL compare a value against a subquery result set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LEFT JOIN / IS NULL is a common pattern for anti-joins (find unmatched rows)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlated subqueries execute per outer row and can be performance bottlenecks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash Join is O(N+M) for equi-joins → the go-to algorithm for large tables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge Join is fastest for pre-sorted data (indexed join columns)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested Loop Join works for any condition but is O(N×M) → best with small inner tables."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "employees(emp_id, name, dept_id)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "departments(dept_id, dept_name)"
          }), ", write a query to list each employee with their department name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a CROSS JOIN query that generates all combinations of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "colors"
          }), " (Red, Green, Blue) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sizes"
          }), " (S, M, L, XL)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between INNER JOIN and LEFT JOIN? Provide an example where they return different results."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a query using a subquery to find employees who earn more than the average salary of all employees."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Using SELF JOIN, write a query on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "employees(emp_id, name, manager_id)"
          }), " that shows each employee alongside their manager's name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert this subquery to a JOIN:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT name FROM products\nWHERE category_id IN (\n    SELECT category_id FROM categories WHERE is_active = TRUE\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a query that finds orders containing products from more than 3 different categories. Use JOINs and GROUP BY."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "students(student_id, name)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "courses(course_id, name)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "enrollments(student_id, course_id, grade)"
          }), ", write a query to find students who are enrolled in EVERY course. Use NOT EXISTS."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write an ANTI JOIN to find all departments with no employees assigned."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a SEMI JOIN using EXISTS to find all customers who have placed at least one order in the last 30 days."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a query to find \"product pairs\" that are frequently bought together (appear in the same order). Use a SELF JOIN on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "order_items"
          }), ". Avoid showing the pair twice (A-B vs B-A)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "stock_prices(symbol, date, close_price)"
          }), " table, write a query using a correlated subquery to find days where a stock's closing price was the highest it had ever been up to that date (all-time high)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consider the performance implications of:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Query A\nSELECT * FROM orders WHERE customer_id IN (\n    SELECT customer_id FROM customers WHERE registration_date < '2025-01-01'\n);\n\n-- Query B\nSELECT o.*\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nWHERE c.registration_date < '2025-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When would Query A be faster? When would Query B be faster? Assume appropriate indexes exist."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Using FULL OUTER JOIN, write a query that shows all employees and all projects, indicating which employees are assigned to which projects. Schema: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "employees(emp_id, name)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "projects(proj_id, name)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "assignments(emp_id, proj_id, hours)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a query using a Hash Join mental model: given two large tables (10M rows each) with an equality join on an indexed column, explain which join algorithm the optimizer would likely choose and why."
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