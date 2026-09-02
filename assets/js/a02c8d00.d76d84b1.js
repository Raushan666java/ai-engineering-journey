"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[98821],{

/***/ 23314
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_04_sql_basics_md_a02_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-04-sql-basics-md-a02.json
const site_docs_courses_database_management_systems_04_sql_basics_md_a02_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/04-sql-basics","title":"Chapter 4: SQL Basics","description":"Previous The Relational Model | Next SQL Joins and Subqueries","source":"@site/docs/courses/database-management-systems/04-sql-basics.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/04-sql-basics","permalink":"/ai-engineering-journey/database-management-systems/04-sql-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-sql-basics","slug":"/database-management-systems/04-sql-basics","title":"Chapter 4: SQL Basics","sidebar_label":"Chapter 4: SQL Basics","sidebar_position":4},"sidebar":"course-database-management-systems","previous":{"title":"Chapter 3: The Relational Model","permalink":"/ai-engineering-journey/database-management-systems/03-relational-model"},"next":{"title":"Chapter 5: SQL Joins and Subqueries","permalink":"/ai-engineering-journey/database-management-systems/05-sql-joins"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/04-sql-basics.md


const frontMatter = {
	id: '04-sql-basics',
	slug: '/database-management-systems/04-sql-basics',
	title: 'Chapter 4: SQL Basics',
	sidebar_label: 'Chapter 4: SQL Basics',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: SQL Basics';

const assets = {

};



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
  "value": "4.1 Overview of SQL",
  "id": "41-overview-of-sql",
  "level": 3
}, {
  "value": "Real-World Analogy: Library Book Management System",
  "id": "real-world-analogy-library-book-management-system",
  "level": 4
}, {
  "value": "SQL Categories",
  "id": "sql-categories",
  "level": 4
}, {
  "value": "Complexity in SQL (General)",
  "id": "complexity-in-sql-general",
  "level": 4
}, {
  "value": "4.2 Data Types",
  "id": "42-data-types",
  "level": 3
}, {
  "value": "Complexity of Type Selection",
  "id": "complexity-of-type-selection",
  "level": 4
}, {
  "value": "Edge Cases with Data Types",
  "id": "edge-cases-with-data-types",
  "level": 4
}, {
  "value": "4.3 Data Definition Language (DDL)",
  "id": "43-data-definition-language-ddl",
  "level": 3
}, {
  "value": "4.3.1 CREATE TABLE",
  "id": "431-create-table",
  "level": 4
}, {
  "value": "4.3.2 ALTER TABLE",
  "id": "432-alter-table",
  "level": 4
}, {
  "value": "4.3.3 DROP TABLE",
  "id": "433-drop-table",
  "level": 4
}, {
  "value": "4.3.4 TRUNCATE TABLE",
  "id": "434-truncate-table",
  "level": 4
}, {
  "value": "DROP vs TRUNCATE vs DELETE Comparison",
  "id": "drop-vs-truncate-vs-delete-comparison",
  "level": 4
}, {
  "value": "4.4 Constraints",
  "id": "44-constraints",
  "level": 3
}, {
  "value": "Constraints Comparison Table",
  "id": "constraints-comparison-table",
  "level": 4
}, {
  "value": "4.4.1 NOT NULL",
  "id": "441-not-null",
  "level": 4
}, {
  "value": "4.4.2 UNIQUE",
  "id": "442-unique",
  "level": 4
}, {
  "value": "4.4.3 PRIMARY KEY",
  "id": "443-primary-key",
  "level": 4
}, {
  "value": "4.4.4 FOREIGN KEY",
  "id": "444-foreign-key",
  "level": 4
}, {
  "value": "4.4.5 CHECK",
  "id": "445-check",
  "level": 4
}, {
  "value": "4.4.6 DEFAULT",
  "id": "446-default",
  "level": 4
}, {
  "value": "Full Example: Library Schema with All Constraints",
  "id": "full-example-library-schema-with-all-constraints",
  "level": 4
}, {
  "value": "4.5 Data Manipulation Language (DML)",
  "id": "45-data-manipulation-language-dml",
  "level": 3
}, {
  "value": "4.5.1 INSERT",
  "id": "451-insert",
  "level": 4
}, {
  "value": "4.5.2 SELECT",
  "id": "452-select",
  "level": 4
}, {
  "value": "SQL Execution Order (Crucial for Interviews)",
  "id": "sql-execution-order-crucial-for-interviews",
  "level": 4
}, {
  "value": "4.5.3 WHERE Clause",
  "id": "453-where-clause",
  "level": 4
}, {
  "value": "4.5.4 ORDER BY",
  "id": "454-order-by",
  "level": 4
}, {
  "value": "4.5.5 GROUP BY",
  "id": "455-group-by",
  "level": 4
}, {
  "value": "4.5.6 HAVING",
  "id": "456-having",
  "level": 4
}, {
  "value": "4.5.7 Aggregate Functions",
  "id": "457-aggregate-functions",
  "level": 4
}, {
  "value": "4.5.8 DISTINCT",
  "id": "458-distinct",
  "level": 4
}, {
  "value": "4.5.9 LIMIT / OFFSET",
  "id": "459-limit--offset",
  "level": 4
}, {
  "value": "4.5.10 UPDATE",
  "id": "4510-update",
  "level": 4
}, {
  "value": "4.5.11 DELETE",
  "id": "4511-delete",
  "level": 4
}, {
  "value": "4.6 Data Control Language (DCL)",
  "id": "46-data-control-language-dcl",
  "level": 3
}, {
  "value": "4.7 Transaction Control Language (TCL)",
  "id": "47-transaction-control-language-tcl",
  "level": 3
}, {
  "value": "Comparison Tables",
  "id": "comparison-tables",
  "level": 2
}, {
  "value": "WHERE vs HAVING",
  "id": "where-vs-having",
  "level": 3
}, {
  "value": "DELETE vs TRUNCATE vs DROP",
  "id": "delete-vs-truncate-vs-drop",
  "level": 3
}, {
  "value": "Comparison of Aggregate Functions",
  "id": "comparison-of-aggregate-functions",
  "level": 3
}, {
  "value": "SQL Categories (DDL/DML/DCL/TCL)",
  "id": "sql-categories-ddldmldcltcl",
  "level": 3
}, {
  "value": "Constraints Comparison",
  "id": "constraints-comparison",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between DELETE, TRUNCATE, and DROP?",
  "id": "q1-what-is-the-difference-between-delete-truncate-and-drop",
  "level": 3
}, {
  "value": "Q2: Explain CHAR vs VARCHAR.",
  "id": "q2-explain-char-vs-varchar",
  "level": 3
}, {
  "value": "Q3: How does SQL handle NULL?",
  "id": "q3-how-does-sql-handle-null",
  "level": 3
}, {
  "value": "Q4: How do you prevent SQL injection?",
  "id": "q4-how-do-you-prevent-sql-injection",
  "level": 3
}, {
  "value": "Q5: What is the difference between a clustered and non-clustered index?",
  "id": "q5-what-is-the-difference-between-a-clustered-and-non-clustered-index",
  "level": 3
}, {
  "value": "Q6: What does SELECT * FROM table WHERE 1=1 do?",
  "id": "q6-what-does-select--from-table-where-11-do",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 3
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 3
}, {
  "value": "SQLite",
  "id": "sqlite",
  "level": 3
}, {
  "value": "SQL Server (T-SQL)",
  "id": "sql-server-t-sql",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "4.8 SQL Query Validator (TypeScript)",
  "id": "48-sql-query-validator-typescript",
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
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-4-sql-basics",
        children: "Chapter 4: SQL Basics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/03-relational-model",
          children: "Chapter 3: The Relational Model"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/05-sql-joins",
          children: "Chapter 5: SQL Joins and Subqueries"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish DDL, DML, DCL, and TCL categories of SQL statements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and modify database tables using DDL commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert, query, update, and delete data using DML commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement integrity constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL, DEFAULT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use SELECT with WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT, and LIMIT clauses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write effective WHERE clause conditions with logical and pattern-matching operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use aggregate functions (COUNT, SUM, AVG, MIN, MAX) for data summarization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage user permissions with DCL commands and transactions with TCL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write C++ and Python programs that execute SQL via sqlite3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
              children: "DDL Commands"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE, ALTER, DROP, TRUNCATE define database structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always specify column list in INSERT for robustness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK, FK, UNIQUE, NOT NULL, CHECK, DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce data integrity at the database level, not in code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DML Operations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT, SELECT, UPDATE, DELETE manipulate data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use WHERE with UPDATE/DELETE -- test with SELECT first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SELECT Clause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT, LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use LIMIT/OFFSET for pagination, DISTINCT sparingly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregate Functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT, SUM, AVG, MIN, MAX summarize data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLs are ignored by aggregate functions except COUNT(*)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCL & TCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT/REVOKE control access; COMMIT/ROLLBACK manage transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply least-privilege principle; wrap multi-step ops in transactions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Data Types] --> B[DDL: CREATE/ALTER/DROP/TRUNCATE]\n    B --> C[Constraints: PK, FK, UNIQUE, NOT NULL, CHECK, DEFAULT]\n    C --> D[DML: INSERT & SELECT]\n    D --> E[WHERE & Filtering]\n    E --> F[ORDER BY & DISTINCT]\n    F --> G[GROUP BY & HAVING & Aggregates]\n    G --> H[UPDATE & DELETE]\n    H --> I[DCL: GRANT/REVOKE]\n    I --> J[TCL: COMMIT/ROLLBACK]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SQL is the universal declarative language for relational databases -- master DDL for structure, DML for data, and constraints for integrity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-overview-of-sql",
      children: "4.1 Overview of SQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL (Structured Query Language) is the standard language for relational database management. It was developed at IBM in the 1970s (originally SEQUEL) and standardized by ANSI (1986) and ISO (1987). Every major relational DBMS (PostgreSQL, MySQL, Oracle, SQL Server, SQLite) supports SQL, though each has proprietary extensions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SQL is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "declarative language"
      }), " -- you specify WHAT you want, not HOW to get it. The DBMS query optimizer determines the execution plan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-library-book-management-system",
      children: "Real-World Analogy: Library Book Management System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of a library as a database:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Library Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Operation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE DATABASE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bookshelves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shelf sections (Genre, Author)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns / Attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Individual books"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows / Records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finding books by criteria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Querying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISBN number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member card number references a member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adding new books to catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT INTO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Updating book location or status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removing damaged books"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleting data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library rules (unique ISBN, valid year)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK, UNIQUE, NOT NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Librarian permissions (who can check out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT, REVOKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checking in/out as atomic operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT, ROLLBACK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you ask a librarian \"find me all books published after 2020 by author 'Tolkien'\", you describe WHAT you want -- you don't tell them which shelf to walk to or how to scan each book. That is the essence of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "declarative language"
      }), ": you specify the result, the system figures out the procedure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-categories",
      children: "SQL Categories"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Commands"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Definition Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE, ALTER, DROP, TRUNCATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines and modifies database structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building shelves, adding/removing sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DML"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Manipulation Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT, INSERT, UPDATE, DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulates data within tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding, adding, moving, removing books"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Control Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT, REVOKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls user access and permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuing library cards with different privileges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Control Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages transactions (atomic units of work)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking in/out books as an all-or-nothing operation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-in-sql-general",
      children: "Complexity in SQL (General)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single row INSERT (no index maintenance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to page; no scan needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT with no WHERE (full table scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must read every row; result set grows with n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT with PK equality WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree index lookup; logarithmic depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT with non-indexed column WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only metadata operations, no data movement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DROP TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata + page deallocation (mostly constant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRUNCATE TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deallocates pages without row-by-row delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY (sort-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorting result set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY (hash-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table aggregation; all rows processed once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting or hashing to identify duplicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregates (COUNT, SUM, AVG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass over rows, constant accumulator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-data-types",
      children: "4.2 Data Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right data type is critical: it affects storage size, query performance, and data integrity."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER / INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole numbers (-2^31 to 2^31-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42, -5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of copies available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large whole numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9999999999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale transaction IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMALLINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small whole numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floor number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL(p, s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact fixed-point numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies (p+1 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL(10,2) = 1234567.89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book price ($29.99)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NUMERIC(p, s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synonym for DECIMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NUMERIC(8,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Late fee amount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REAL / FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate floating-point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.14159"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average rating (approximate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VARCHAR(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length string (max n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String length + 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VARCHAR(255)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book title (variable length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-length string (padded with spaces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR(10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISBN-10 (always 10 chars)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited-length string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String length + overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Long description...'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book description"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOOLEAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True/false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE, FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is book available?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'2026-06-09'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publication date"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'14:30:00'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opening time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date + time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'2026-06-09 14:30:00'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check-out timestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BYTEA / BLOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1A2B3C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book cover image"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Decision: VARCHAR vs CHAR"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VARCHAR(n): Stores only the actual string plus 2 bytes overhead. Efficient for variable-length data like names, titles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CHAR(n): Always stores n characters, padded with spaces. Use for fixed-length codes: ISBN, ZIP codes, state abbreviations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-of-type-selection",
      children: "Complexity of Type Selection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per column but n matters at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VARCHAR(1000) for a name wastes space vs VARCHAR(50)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportional to key size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller types = more index entries per page = faster lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) during query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing VARCHAR to INTEGER triggers implicit conversion, blocking index use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DECIMAL exact, FLOAT approximate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use FLOAT for money -- rounding errors accumulate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-with-data-types",
      children: "Edge Cases with Data Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storing price as FLOAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rounding error: $0.10 * 3 = 0.30000000000000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DECIMAL(10,2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VARCHAR(5) for 'Alexander'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncation to 'Alexa' without warning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose appropriate length or use TEXT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHAR(10) for short strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space: 'hi' stored as 'hi        ' (8 spaces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use VARCHAR instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER for phone numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leading zeros lost: 0123456789 becomes 123456789"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use VARCHAR(15)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-data-definition-language-ddl",
      children: "4.3 Data Definition Language (DDL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DDL commands define and modify the structure (schema) of database objects. They are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto-committed"
      }), " in most DBMS -- there is no rolling back a DDL statement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " DDL is like building, remodeling, or demolishing bookshelves in the library. The shelves themselves (the structure) are being changed, not the books (data)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "431-create-table",
      children: "4.3.1 CREATE TABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates a new table (relation) in the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Specify the table name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "books"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define each column with name, data type, and optional constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally define table-level constraints (composite PK, multi-column CHECK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The DBMS allocates metadata structures for the new table"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION CREATE_TABLE(table_name, columns):\n    IF table_name EXISTS IN database.schema:\n        RAISE ERROR \"Table already exists\"\n    \n    new_table = ALLOCATE metadata structure\n    new_table.name = table_name\n    \n    FOR EACH column IN columns:\n        new_table.add_column(column.name, column.type, column.constraints)\n    \n    VALIDATE all column definitions\n    VALIDATE all constraints (FK references exist, CHECK expressions valid)\n    \n    ADD new_table TO database.schema\n    RETURN SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    author VARCHAR(100) NOT NULL,\n    isbn CHAR(13) UNIQUE NOT NULL,\n    published_year INTEGER CHECK (published_year >= 1000),\n    genre VARCHAR(50) DEFAULT 'Unknown',\n    copies_available INTEGER DEFAULT 1 CHECK (copies_available >= 0)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Data (for later DML examples):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "INSERT INTO books (book_id, title, author, isbn, published_year, genre, copies_available) VALUES\n(1, 'The Hobbit', 'J.R.R. Tolkien', '9780547928227', 1937, 'Fantasy', 3),\n(2, '1984', 'George Orwell', '9780451524935', 1949, 'Dystopian', 5),\n(3, 'To Kill a Mockingbird', 'Harper Lee', '9780060935467', 1960, 'Fiction', 2),\n(4, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 1925, 'Fiction', 4),\n(5, 'A Brief History of Time', 'Stephen Hawking', '9780553380163', 1988, 'Science', 1),\n(6, 'Clean Code', 'Robert C. Martin', '9780132350884', 2008, 'Technology', 3),\n(7, 'The Pragmatic Programmer', 'David Thomas', '9780201616224', 1999, 'Technology', 2),\n(8, 'Dune', 'Frank Herbert', '9780441172719', 1965, 'Science Fiction', 4),\n(9, 'The Catcher in the Rye', 'J.D. Salinger', '9780316769488', 1951, 'Fiction', 0),\n(10, 'Sapiens', 'Yuval Noah Harari', '9780062316110', 2011, 'History', 2);\n\nCREATE TABLE members (\n    member_id INTEGER PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    join_date DATE DEFAULT CURRENT_DATE,\n    status VARCHAR(10) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'expired'))\n);\n\nCREATE TABLE loans (\n    loan_id INTEGER PRIMARY KEY,\n    book_id INTEGER NOT NULL REFERENCES books(book_id),\n    member_id INTEGER NOT NULL REFERENCES members(member_id),\n    loan_date DATE NOT NULL DEFAULT CURRENT_DATE,\n    due_date DATE NOT NULL,\n    return_date DATE,\n    CHECK (due_date > loan_date)\n);\n\nINSERT INTO members (member_id, first_name, last_name, email) VALUES\n(1, 'Alice', 'Johnson', 'alice@email.com'),\n(2, 'Bob', 'Williams', 'bob@email.com'),\n(3, 'Carol', 'Davis', 'carol@email.com'),\n(4, 'David', 'Brown', 'david@email.com');\n\nINSERT INTO loans (loan_id, book_id, member_id, loan_date, due_date, return_date) VALUES\n(1, 1, 1, '2026-01-10', '2026-01-24', '2026-01-22'),\n(2, 3, 1, '2026-01-15', '2026-01-29', NULL),\n(3, 2, 2, '2026-02-01', '2026-02-15', '2026-02-14'),\n(4, 5, 3, '2026-02-10', '2026-02-24', NULL),\n(5, 8, 2, '2026-02-15', '2026-03-01', NULL),\n(6, 4, 4, '2026-03-01', '2026-03-15', '2026-03-10'),\n(7, 6, 1, '2026-03-05', '2026-03-19', NULL),\n(8, 10, 3, '2026-03-10', '2026-03-24', '2026-03-20'),\n(9, 7, 4, '2026-03-15', '2026-03-29', NULL),\n(10, 1, 2, '2026-03-20', '2026-04-03', NULL);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (sqlite3):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sqlite3.h>\n#include <string>\n\nbool createBooksTable(sqlite3* db) {\n    const char* sql = R\"(\n        CREATE TABLE IF NOT EXISTS books (\n            book_id INTEGER PRIMARY KEY,\n            title VARCHAR(200) NOT NULL,\n            author VARCHAR(100) NOT NULL,\n            isbn CHAR(13) UNIQUE NOT NULL,\n            published_year INTEGER CHECK (published_year >= 1000),\n            genre VARCHAR(50) DEFAULT 'Unknown',\n            copies_available INTEGER DEFAULT 1 CHECK (copies_available >= 0)\n        );\n    )\";\n\n    char* errMsg = nullptr;\n    int rc = sqlite3_exec(db, sql, nullptr, nullptr, &errMsg);\n    if (rc != SQLITE_OK) {\n        std::cerr << \"SQL error: \" << errMsg << std::endl;\n        sqlite3_free(errMsg);\n        return false;\n    }\n    std::cout << \"Table 'books' created successfully.\" << std::endl;\n    return true;\n}\n\nint main() {\n    sqlite3* db;\n    int rc = sqlite3_open(\"library.db\", &db);\n    if (rc != SQLITE_OK) {\n        std::cerr << \"Cannot open database: \" << sqlite3_errmsg(db) << std::endl;\n        return 1;\n    }\n\n    createBooksTable(db);\n    sqlite3_close(db);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (sqlite3):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\n\ndef create_books_table(conn: sqlite3.Connection) -> bool:\n    sql = \"\"\"\n    CREATE TABLE IF NOT EXISTS books (\n        book_id INTEGER PRIMARY KEY,\n        title VARCHAR(200) NOT NULL,\n        author VARCHAR(100) NOT NULL,\n        isbn CHAR(13) UNIQUE NOT NULL,\n        published_year INTEGER CHECK (published_year >= 1000),\n        genre VARCHAR(50) DEFAULT 'Unknown',\n        copies_available INTEGER DEFAULT 1 CHECK (copies_available >= 0)\n    );\n    \"\"\"\n    try:\n        conn.execute(sql)\n        print(\"Table 'books' created successfully.\")\n        return True\n    except sqlite3.Error as e:\n        print(f\"SQL error: {e}\")\n        return False\n\nif __name__ == \"__main__\":\n    conn = sqlite3.connect(\"library.db\")\n    create_books_table(conn)\n    conn.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only metadata operations; no data processed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema metadata stored; data pages not allocated yet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 page writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System catalog entries for table + columns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table already exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error (unless IF EXISTS)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE IF NOT EXISTS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate column name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error at definition time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review schema design before executing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid data type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify type support in your specific DBMS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY referencing non-existent table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create referenced table first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very long column name (>63 chars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncated or error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL truncates; Oracle errors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "432-alter-table",
      children: "4.3.2 ALTER TABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modifies the structure of an existing table."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify the table to modify"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the modification type: ADD, DROP, MODIFY, or RENAME"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide the column/constraint details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The DBMS updates metadata (and possibly data pages for defaults)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ALTER_TABLE_ADD_COLUMN(table_name, column_def):\n    table = GET table_name FROM database.schema\n    IF table IS NULL: RAISE ERROR \"Table not found\"\n    IF column_def.name EXISTS IN table.columns: RAISE ERROR \"Column already exists\"\n    table.columns.ADD(column_def)\n    IF column_def.has_default:\n        UPDATE all existing rows SET column_def.name = column_def.default_value\n    RETURN SUCCESS\n\nFUNCTION ALTER_TABLE_DROP_COLUMN(table_name, column_name):\n    table = GET table_name FROM database.schema\n    IF table IS NULL: RAISE ERROR \"Table not found\"\n    IF column_name NOT IN table.columns: RAISE ERROR \"Column not found\"\n    table.columns.REMOVE(column_name)\n    -- Some DBMS require CASCADE to drop dependent objects (views, triggers)\n    RETURN SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Add a column\nALTER TABLE books ADD COLUMN publisher VARCHAR(100);\n\n-- Drop a column (SQLite: limited support; PostgreSQL: full support)\nALTER TABLE books DROP COLUMN publisher;\n\n-- Rename a column\nALTER TABLE books RENAME COLUMN genre TO category;\n\n-- Add a default value\nALTER TABLE books ALTER COLUMN copies_available SET DEFAULT 0;\n\n-- Add a constraint\nALTER TABLE books ADD CONSTRAINT chk_year CHECK (published_year >= 1440);\n\n-- Rename table\nALTER TABLE books RENAME TO library_books;\n\n-- Modify column type (PostgreSQL)\nALTER TABLE books ALTER COLUMN title TYPE TEXT;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ALTER Type"
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
            children: "ADD COLUMN (no default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADD COLUMN (with default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must backfill existing rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DROP COLUMN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata only (marked inactive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RENAME COLUMN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DROP last column of a table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in most DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DROP the entire table instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADD column with NOT NULL on existing table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error if table has rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide a DEFAULT value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Renaming column used by views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent views break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RENAME with CASCADE or update views manually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changing type to incompatible type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error or data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use USING clause for explicit conversion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "433-drop-table",
      children: "4.3.3 DROP TABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Permanently removes a table and all its data."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify the table to drop"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally add IF EXISTS to avoid errors on missing tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally add CASCADE to drop dependent objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The DBMS removes both data and metadata permanently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION DROP_TABLE(table_name, options):\n    table = GET table_name FROM database.schema\n    IF table IS NULL:\n        IF options.if_exists: RETURN SUCCESS\n        ELSE: RAISE ERROR \"Table not found\"\n    \n    IF options.cascade:\n        dependent_objects = FIND_ALL referencing_views, functions, constraints\n        FOR EACH obj IN dependent_objects: DROP obj\n    \n    DEALLOCATE all data pages owned by table\n    REMOVE table FROM database.schema\n    RETURN SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Basic drop\nDROP TABLE old_books;\n\n-- Safe drop (no error if missing)\nDROP TABLE IF EXISTS old_books;\n\n-- Cascade drop (removes dependent views, FKs)\nDROP TABLE books CASCADE;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page deallocation; indexes also dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space reclaimed; metadata removed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table has dependent views/triggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error (RESTRICT mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use CASCADE or drop dependents first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table does not exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error (without IF EXISTS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DROP TABLE IF EXISTS for idempotent scripts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign keys reference this table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error if RESTRICT is default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drop FK constraints first or use CASCADE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dropping referenced in another table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Referential integrity violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recreate table or remove FK on child table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "434-truncate-table",
      children: "4.3.4 TRUNCATE TABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Removes all rows from a table while preserving the table structure for future use. It is faster than DELETE without WHERE because it deallocates entire data pages instead of row-by-row removal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify the table to truncate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The DBMS deallocates all data pages assigned to the table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resets auto-increment counters (in most DBMS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot be rolled back in most DBMS (acts as DDL)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION TRUNCATE_TABLE(table_name):\n    table = GET table_name FROM database.schema\n    IF table IS NULL: RAISE ERROR \"Table not found\"\n    \n    DEALLOCATE all data pages from table\n    RESET auto-increment counter to initial value\n    CLEAR all index entries\n    -- No per-row deletion, no triggers fired\n    RETURN SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "TRUNCATE TABLE temporary_borrowing_records;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: TRUNCATE vs DELETE"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TRUNCATE TABLE t"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DELETE FROM t"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locate table metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locate table metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify all data pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan first row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deallocate pages (single operation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire any DELETE triggers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset auto-increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log row deletion in transaction log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update metadata (row count = 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat for each row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done (O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit log (O(n))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page deallocation, not row-by-row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only metadata updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page deallocation logged, not row data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table referenced by FK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in most DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE with WHERE or disable constraints first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not rollbackable in MySQL (implicit commit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL can rollback TRUNCATE within a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-increment reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset in MySQL/PostgreSQL, not in SQLite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUNCATE vs DELETE behavior differs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "drop-vs-truncate-vs-delete-comparison",
      children: "DROP vs TRUNCATE vs DELETE Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DROP TABLE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TRUNCATE TABLE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DELETE (without WHERE)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removes structure?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removes data?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be rolled back?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (DDL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies (no in MySQL, yes in PG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (DML, in transaction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (row-by-row)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fires triggers?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resets auto-increment?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE clause?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FK constraints respected?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CASCADE needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks unless FK disabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space reclamation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual (DELETE marks, VACUUM reclaims)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library Analogy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Demolishing the entire shelf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing all books but keeping the shelf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking out every book one by one"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-constraints",
      children: "4.4 Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constraints enforce rules on the data in a table. They are the database's way of saying \"only valid data is allowed here\" -- preventing invalid data at the database level rather than trusting application code."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Library rules enforced by the librarian:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NOT NULL:"
        }), " Every book must have a title (a book without a title is not catalogable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UNIQUE:"
        }), " Two books cannot have the same ISBN"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PRIMARY KEY:"
        }), " Each book has a unique accession/serial number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FOREIGN KEY:"
        }), " A loan must reference an existing member and an existing book"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CHECK:"
        }), " Publication year must be reasonable (after Gutenberg's press, before next year)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEFAULT:"
        }), " If genre is not specified, classify as 'Unknown'"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "constraints-comparison-table",
      children: "Constraints Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enforces"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NULLs Allowed?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Per-Table Limit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NOT NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column must have a value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book must have a title"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UNIQUE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All values in column(s) distinct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level vs others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (1+ NULL depends on DBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique ISBN per book"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PRIMARY KEY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniquely identifies each row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level + NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accession/serial number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FOREIGN KEY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value must exist in referenced table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-table referential integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member ID must match a real member"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CHECK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value must satisfy boolean expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (NULL passes CHECK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Year must be between 1000 and 2026"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEFAULT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigns value if none provided"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default genre 'Unknown'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "441-not-null",
      children: "4.4.1 NOT NULL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensures every row has a value for this column. Prevents missing or unknown data in mandatory fields."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,      -- Every book MUST have a title\n    author VARCHAR(100) NOT NULL,     -- Every book MUST have an author\n    isbn CHAR(13) UNIQUE NOT NULL,    -- ISBN is also mandatory\n    description TEXT                   -- Description is optional (NULL allowed)\n);\n\n-- Adding NOT NULL to existing column (fails if NULLs exist)\nALTER TABLE books ALTER COLUMN title SET NOT NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting NULL into NOT NULL column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error: \"column violates NOT NULL constraint\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide a value or use DEFAULT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty string '' vs NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'' is allowed (it is a value); NULL is rejected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use CHECK (col > '') for non-empty enforcement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adding NOT NULL to populated table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error if any existing row has NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE NULLs to a default first, then ALTER"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "442-unique",
      children: "4.4.2 UNIQUE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensures all values in a column (or combination of columns) are distinct from each other. Creates an index automatically in most DBMS."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE users (\n    user_id INTEGER PRIMARY KEY,\n    username VARCHAR(50) UNIQUE NOT NULL,    -- No two users can have same username\n    email VARCHAR(255) UNIQUE NOT NULL,       -- No two users can have same email\n    ssn CHAR(9) UNIQUE                        -- Social security number must be unique\n);\n\n-- Multi-column UNIQUE (any single value can repeat, but combinations must be unique)\nCREATE TABLE book_editions (\n    book_id INTEGER REFERENCES books(book_id),\n    edition_number INTEGER,\n    isbn CHAR(13),\n    UNIQUE (book_id, edition_number),  -- Same book can't have two edition #1\n    UNIQUE (isbn)                       -- ISBN is globally unique\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple NULLs in UNIQUE column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed in PostgreSQL/MySQL/SQLite; one NULL in SQL Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO standard allows multiple NULLs; check DBMS docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate value on INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error: \"duplicate key value violates unique constraint\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use INSERT ON CONFLICT (PostgreSQL) or INSERT IGNORE (MySQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE on a column that already has duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates first with DELETE + self-join"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each UNIQUE creates an index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptable for data integrity; don't over-index"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "443-primary-key",
      children: "4.4.3 PRIMARY KEY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uniquely identifies each row in a table. Combines NOT NULL + UNIQUE. Each table has exactly one primary key (composite PKs use multiple columns)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Single-column (surrogate) PK\nCREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,   -- Auto-incrementing integer key\n    ...\n);\n\n-- Natural PK (using real data)\nCREATE TABLE isbn_registry (\n    isbn CHAR(13) PRIMARY KEY,     -- ISBN is naturally unique\n    title VARCHAR(200) NOT NULL,\n    ...\n);\n\n-- Composite primary key\nCREATE TABLE loan_history (\n    book_id INTEGER,\n    member_id INTEGER,\n    loan_date DATE,\n    PRIMARY KEY (book_id, member_id, loan_date)  -- Same book cannot be loaned to same person twice on same day\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL in PK column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always rejected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use surrogate auto-increment keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate PK on INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error: \"duplicate key\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for existence first or use ON CONFLICT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite PK with 32+ columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error (limit varies: 32 in Oracle, 16 in MySQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consider a surrogate PK + UNIQUE on composite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changing PK value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must cascade to all FKs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ON UPDATE CASCADE or avoid mutable PKs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty table, first INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First row gets PK value 1 (auto-increment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works normally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "444-foreign-key",
      children: "4.4.4 FOREIGN KEY"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "referential integrity"
      }), " -- values in this column must exist in the referenced table's PK (or UNIQUE column)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE loans (\n    loan_id INTEGER PRIMARY KEY,\n    book_id INTEGER NOT NULL REFERENCES books(book_id),\n    -- Inline FK syntax: book_id must match a books.book_id value\n\n    member_id INTEGER NOT NULL,\n    CONSTRAINT fk_member\n        FOREIGN KEY (member_id)\n        REFERENCES members(member_id)\n        ON DELETE CASCADE\n        ON UPDATE CASCADE,\n    -- Explicit FK with referential actions\n\n    loan_date DATE NOT NULL DEFAULT CURRENT_DATE,\n    due_date DATE NOT NULL,\n    return_date DATE\n);\n\n-- Self-referencing FK (category hierarchy example)\nCREATE TABLE categories (\n    category_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    parent_category_id INTEGER REFERENCES categories(category_id)\n    -- A category's parent must be another existing category\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Referential Actions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect when Parent Row DELETED"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect when Parent UPDATED"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CASCADE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child rows automatically deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child FK updated to new value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order items when order is deleted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child FK set to NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child FK set to NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee's department deleted (keep employee)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child FK set to DEFAULT value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child FK set to DEFAULT value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare; requires a sensible default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESTRICT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent deletion if children exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent update if children exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't allow deletion of a book with active loans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO ACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like RESTRICT but checked at end of transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like RESTRICT but checked at end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as RESTRICT in most implementations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inserting child with FK value not in parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error: \"foreign key violation\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert parent row first or fix FK value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL in FK column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (FK does not imply NOT NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add NOT NULL separately if needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular references (A references B, B references A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One of the tables cannot be created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ALTER TABLE ADD CONSTRAINT after both tables exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FK on composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must reference all columns of the composite PK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK column count must match referenced column count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each FK insert checks parent table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index FK columns for performance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "445-check",
      children: "4.4.5 CHECK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validates data against a boolean expression. If the expression evaluates to FALSE, the operation is rejected."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    published_year INTEGER CHECK (published_year BETWEEN 1000 AND 2026),\n    copies_available INTEGER CHECK (copies_available >= 0),\n    rating DECIMAL(2,1) CHECK (rating >= 0.0 AND rating <= 5.0),\n    -- Single column checks\n    price DECIMAL(10,2) CHECK (price >= 0)\n);\n\n-- Multi-column CHECK\nCREATE TABLE reservations (\n    book_id INTEGER NOT NULL,\n    member_id INTEGER NOT NULL,\n    reserve_date DATE NOT NULL,\n    expire_date DATE NOT NULL,\n    CHECK (expire_date > reserve_date)     -- Expiration must be after reservation\n);\n\n-- Pattern-based CHECK\nCREATE TABLE valid_isbn (\n    isbn CHAR(13) CHECK (isbn ~ '^[0-9]{13}$')   -- Must be exactly 13 digits (PostgreSQL)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL in CHECK column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (NULL passes CHECK -- UNKNOWN is not FALSE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add NOT NULL if NULL should be rejected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK on new column with existing bad data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER TABLE fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean data first, then add constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex expression in CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluated per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep CHECK expressions simple for readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK that references other tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed (only current row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use triggers or application logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "446-default",
      children: "4.4.6 DEFAULT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assigns a value to a column when no value is explicitly provided in an INSERT."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    genre VARCHAR(50) DEFAULT 'Unknown',\n    copies_available INTEGER DEFAULT 1,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    is_active BOOLEAN DEFAULT TRUE\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT with explicit NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL overrides DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT only applies when column is omitted from INSERT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT with function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluated at INSERT time (CURRENT_TIMESTAMP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions like RANDOM() give different values per row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changing DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing rows unchanged; only new rows affected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE existing rows explicitly if needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-example-library-schema-with-all-constraints",
      children: "Full Example: Library Schema with All Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE genres (\n    genre_id INTEGER PRIMARY KEY,\n    name VARCHAR(50) UNIQUE NOT NULL,\n    description TEXT\n);\n\nCREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    author VARCHAR(100) NOT NULL,\n    isbn CHAR(13) UNIQUE NOT NULL,\n    published_year INTEGER CHECK (published_year >= 1000 AND published_year <= 2026),\n    genre_id INTEGER REFERENCES genres(genre_id),\n    copies_available INTEGER NOT NULL DEFAULT 1 CHECK (copies_available >= 0),\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE members (\n    member_id INTEGER PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    phone VARCHAR(15),\n    join_date DATE NOT NULL DEFAULT CURRENT_DATE,\n    max_loans INTEGER DEFAULT 5 CHECK (max_loans > 0 AND max_loans <= 20)\n);\n\nCREATE TABLE loans (\n    loan_id INTEGER PRIMARY KEY,\n    book_id INTEGER NOT NULL REFERENCES books(book_id),\n    member_id INTEGER NOT NULL REFERENCES members(member_id),\n    loan_date DATE NOT NULL DEFAULT CURRENT_DATE,\n    due_date DATE NOT NULL CHECK (due_date >= loan_date),\n    return_date DATE,\n    CHECK (return_date IS NULL OR return_date >= loan_date)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity of Constraint Enforcement:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Insert Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple null check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index lookup for duplicate check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK index maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check existence in parent table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean expression evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value substitution at insert time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-data-manipulation-language-dml",
      children: "4.5 Data Manipulation Language (DML)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DML commands manipulate the data inside tables. Unlike DDL, DML operations can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rolled back"
      }), " when wrapped in a transaction (TCL)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "451-insert",
      children: "4.5.1 INSERT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adds new rows to a table."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Adding new books to the library catalog -- you fill out a catalog card with the book's details and put the card in the catalog drawer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specify target table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List columns (optional but recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide values matching column types and constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DBMS validates constraints (NOT NULL, UNIQUE, PK, FK, CHECK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DBMS assigns DEFAULT values for omitted columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Row is written to a data page (and transaction log)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION INSERT_INTO(table_name, column_list, values_list):\n    table = GET table_name FROM database.schema\n    \n    IF column_list is empty:\n        column_list = table.columns  -- use all columns in order\n    \n    row = CREATE empty row\n    FOR i = 0 TO column_list.length - 1:\n        col = GET column column_list[i] FROM table.columns\n        IF col IS NULL: RAISE ERROR \"Column not found\"\n        \n        value = values_list[i] OR col.default_value\n        \n        IF value IS NULL AND col.constraint == NOT_NULL:\n            RAISE ERROR \"NOT NULL constraint violated\"\n        IF value IS NULL AND col.constraint == PRIMARY_KEY:\n            RAISE ERROR \"PK cannot be NULL\"\n        IF col.constraint == UNIQUE AND EXISTS(value IN table):\n            RAISE ERROR \"UNIQUE constraint violated\"\n        IF col.constraint == CHECK AND NOT evaluate(col.check_expr, value):\n            RAISE ERROR \"CHECK constraint violated\"\n        IF col.constraint == FOREIGN_KEY AND NOT EXISTS(value IN parent_table):\n            RAISE ERROR \"FK constraint violated\"\n        \n        row[col] = value\n    \n    table.pages.APPEND(row)\n    UPDATE indexes\n    RETURN SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Single row insert (all columns, order-dependent)\nINSERT INTO books VALUES (11, 'The Alchemist', 'Paulo Coelho', '9780062315007', 1988, 'Fiction', 5);\n\n-- Single row with explicit columns (recommended)\nINSERT INTO books (book_id, title, author, isbn, published_year, genre)\nVALUES (11, 'The Alchemist', 'Paulo Coelho', '9780062315007', 1988, 'Fiction');\n\n-- Multiple rows\nINSERT INTO books (book_id, title, author, isbn, published_year, genre) VALUES\n    (12, 'Atomic Habits', 'James Clear', '9780735211292', 2018, 'Self-Help'),\n    (13, 'Deep Work', 'Cal Newport', '9781455586691', 2016, 'Productivity'),\n    (14, 'The Lean Startup', 'Eric Ries', '9780307887894', 2011, 'Business');\n\n-- Insert from SELECT (copy data between tables)\nCREATE TABLE books_backup AS SELECT * FROM books WITH NO DATA;\nINSERT INTO books_backup SELECT * FROM books;\n\n-- Insert with DEFAULT values\nINSERT INTO books (book_id, title, author, isbn) VALUES (15, 'New Book', 'Author Name', '0000000000000');\n-- Genre defaults to 'Unknown'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: INSERT with Validation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume table ", (0,jsx_runtime.jsx)(_components.code, {
        children: "books"
      }), " with PK on book_id, UNIQUE on isbn, NOT NULL on title, CHECK on published_year."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "book_id=16"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "title='Test'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "isbn='1111111111111'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "year=2020"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL check for title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Test' != NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PK uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 not in {1..15}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE on isbn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'1111111111111' not in set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020 BETWEEN 1000 AND 2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUCCESS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sqlite3.h>\n#include <string>\n#include <sstream>\n\nbool insertBook(sqlite3* db, int id, const std::string& title,\n                const std::string& author, const std::string& isbn,\n                int year, const std::string& genre, int copies) {\n    std::ostringstream sql;\n    sql << \"INSERT INTO books (book_id, title, author, isbn, \"\n        << \"published_year, genre, copies_available) VALUES (\"\n        << id << \", '\" << title << \"', '\" << author << \"', '\"\n        << isbn << \"', \" << year << \", '\" << genre << \"', \" << copies << \");\";\n\n    char* errMsg = nullptr;\n    int rc = sqlite3_exec(db, sql.str().c_str(), nullptr, nullptr, &errMsg);\n    if (rc != SQLITE_OK) {\n        std::cerr << \"Insert error: \" << errMsg << std::endl;\n        sqlite3_free(errMsg);\n        return false;\n    }\n    std::cout << \"Book inserted successfully. Rows affected: \"\n              << sqlite3_changes(db) << std::endl;\n    return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\n\ndef insert_book(conn: sqlite3.Connection, book_id: int, title: str,\n                author: str, isbn: str, year: int,\n                genre: str = \"Unknown\", copies: int = 1) -> bool:\n    sql = \"\"\"\n    INSERT INTO books (book_id, title, author, isbn, published_year, genre, copies_available)\n    VALUES (?, ?, ?, ?, ?, ?, ?);\n    \"\"\"\n    try:\n        cursor = conn.execute(sql, (book_id, title, author, isbn, year, genre, copies))\n        conn.commit()\n        print(f\"Book inserted. Rows affected: {cursor.rowcount}\")\n        return True\n    except sqlite3.IntegrityError as e:\n        print(f\"Integrity error: {e}\")\n        return False\n    except sqlite3.Error as e:\n        print(f\"Database error: {e}\")\n        return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (single row, no triggers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to last data page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (with FK checks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must verify FK exists in parent index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (with index updates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) per index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each unique/PK index must be updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of row data + index overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL for NOT NULL column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always provide value or use DEFAULT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate PK value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use INSERT OR REPLACE or ON CONFLICT (PostgreSQL/SQLite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FK value not in parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure parent row exists first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String too long for VARCHAR(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncation or error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check string length before insert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large batch insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance degradation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use batch INSERT (multiple VALUES rows) or prepared statements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "452-select",
      children: "4.5.2 SELECT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieves data from tables. The most important and most complex DML command."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Asking the librarian to find all books matching certain criteria, and specifying what information you want about them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps (Logical Execution Order):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FROM"
        }), ": Identify the source table(s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHERE"
        }), ": Filter rows based on conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GROUP BY"
        }), ": Group rows by columns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HAVING"
        }), ": Filter groups"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SELECT"
        }), ": Choose columns, compute expressions, apply aliases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DISTINCT"
        }), ": Remove duplicate rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ORDER BY"
        }), ": Sort the result"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LIMIT / OFFSET"
        }), ": Paginate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sql-execution-order-crucial-for-interviews",
      children: "SQL Execution Order (Crucial for Interviews)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT   department_id, COUNT(*) AS emp_count    -- Step 5: Choose + compute\nFROM     employees                                -- Step 1: Source\nWHERE    salary > 50000                           -- Step 2: Filter rows\nGROUP BY department_id                            -- Step 3: Group\nHAVING   COUNT(*) > 5                             -- Step 4: Filter groups\nORDER BY emp_count DESC                           -- Step 7: Sort\nLIMIT    10;                                      -- Step 8: Paginate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: SELECT Execution Order"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Table: employees"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "emp_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "department_id"
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
            children: "60000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
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
            children: "80000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "SELECT department_id, COUNT(*) AS emp_count\nFROM employees\nWHERE salary > 50000\nGROUP BY department_id\nHAVING COUNT(*) >= 2\nORDER BY emp_count DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intermediate Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FROM employees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All 6 rows (full table)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE salary > 50000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows: Alice(60000), Carol(70000), Dave(55000), Eve(80000) -- 4 rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY department_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group 10: {Alice, Carol, Dave}; Group 20: {Eve}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING COUNT(*) >= 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group 10 has 3 rows >= 2: KEPT. Group 20 has 1 row < 2: REMOVED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT department_id, COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{dept=10, count=3}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY emp_count DESC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{dept=10, count=3} (only one row, no sort change)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "department_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "emp_count"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "453-where-clause",
      children: "4.5.3 WHERE Clause"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters rows based on conditions. Only rows where the condition evaluates to TRUE are included."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " \"Show me only the books that are currently available, written by Tolkien, published after 1950.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operators:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE title = 'The Hobbit'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact title match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "!= or <>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE copies_available != 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not equal to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books that have copies checked out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE published_year > 2000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greater than"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books published after 2000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE published_year < 1950"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less than"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books published before 1950"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE copies_available >= 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greater than or equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books with at least 1 copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "<="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE copies_available <= 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less than or equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books with 2 or fewer copies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BETWEEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE published_year BETWEEN 1900 AND 2000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusive range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books from the 20th century"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE genre IN ('Fantasy', 'Sci-Fi')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match any in a list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books in specific genres"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE title LIKE '%Hobbit%'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any title containing 'Hobbit'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE return_date IS NULL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books currently on loan (not returned)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE genre = 'Fiction' AND copies > 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both conditions true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available fiction books"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE author = 'Tolkien' OR author = 'Herbert'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Either condition true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Books by either author"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE NOT genre = 'Fiction'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All non-fiction books"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern Matching with LIKE:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Doesn't Match"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'S%'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starts with 'S'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Sapiens', 'SQL'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'ASapiens'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'%ing'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ends with 'ing'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Living', 'Existing'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Ingot'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'%time%'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains 'time'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'A Brief History of Time', 'Timeless'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'The Great Gatsby'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'A_%'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starts with 'A' followed by at least 1 char"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Alice', 'Al'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'A' (solo)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'___'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 3 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'The', 'ABC'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'AB'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Examples with Our Library Data:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Books with available copies\nSELECT title, author, copies_available FROM books WHERE copies_available > 0;\n\n-- Fantasy books by Tolkien\nSELECT title, published_year FROM books\nWHERE genre = 'Fantasy' AND author LIKE '%Tolkien%';\n\n-- Members who joined in 2026\nSELECT first_name, last_name, email FROM members\nWHERE join_date >= '2026-01-01' AND join_date < '2027-01-01';\n\n-- Books currently on loan (no return date)\nSELECT b.title, m.last_name, l.loan_date, l.due_date\nFROM loans l\nJOIN books b ON l.book_id = b.book_id\nJOIN members m ON l.member_id = m.member_id\nWHERE l.return_date IS NULL;\n\n-- Books published 1950-2000 with 'The' in title\nSELECT title, published_year FROM books\nWHERE published_year BETWEEN 1950 AND 2000\n  AND title LIKE '%The%'\nORDER BY published_year;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases with NULL:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- NULL is UNKNOWN, not FALSE. These behave differently:\nSELECT * FROM books WHERE copies_available = NULL;    -- Returns NO rows (NULL = NULL is UNKNOWN)\nSELECT * FROM books WHERE copies_available IS NULL;   -- Correct way to find NULLs\nSELECT * FROM books WHERE copies_available <> 0;      -- Excludes NULL rows (NULL <> 0 is UNKNOWN)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL = NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No two NULLs are considered equal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL <> NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even inequality is unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL > 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL compared to anything is unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL AND TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical AND with unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL OR TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR short-circuits: TRUE dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL OR FALSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR with unknown is unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negation of unknown is unknown"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "WHERE Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PK = value (indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree index lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-indexed column comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIKE '%pattern' (leading wildcard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot use B-tree index; full scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IN list of values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m * log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m = list size, n = table rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BETWEEN (indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index range scan; k = matching rows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "454-order-by",
      children: "4.5.4 ORDER BY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorts the result set by one or more columns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Single column ascending (default)\nSELECT title, author, published_year FROM books ORDER BY published_year;\n\n-- Single column descending\nSELECT title, author, published_year FROM books ORDER BY published_year DESC;\n\n-- Multiple columns (sort by genre, then by year within genre)\nSELECT title, genre, published_year FROM books ORDER BY genre ASC, published_year DESC;\n\n-- ORDER BY with expression\nSELECT title, published_year FROM books ORDER BY published_year - 1900;\n\n-- ORDER BY with column alias\nSELECT title AS book_title, published_year AS year FROM books ORDER BY year;\n\n-- ORDER BY with position (not recommended - fragile)\nSELECT title, published_year FROM books ORDER BY 2 DESC;\n\n-- NULL handling\nSELECT title, return_date FROM loans ORDER BY return_date NULLS LAST;\nSELECT title, return_date FROM loans ORDER BY return_date NULLS FIRST;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NULL Ordering Behavior:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ASC (default)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DESC (default)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS LAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS FIRST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS FIRST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS LAST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS FIRST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS LAST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS FIRST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS FIRST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS LAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULLS FIRST"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting n rows; comparison-based sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must materialize full result set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory vs Disk Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory if fits in sort_area/sort_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spills to disk for large result sets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "455-group-by",
      children: "4.5.5 GROUP BY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Groups rows that have the same values in specified columns, then applies aggregate functions per group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " \"Group all books by genre, then count how many books are in each genre.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FROM + WHERE: Get the filtered rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition rows by GROUP BY column values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each group, compute aggregate functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply HAVING filter (if present)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION GROUP_BY(source_rows, group_columns, aggregates):\n    groups = HASH_MAP()  -- key = combination of group column values\n    \n    FOR EACH row IN source_rows:\n        key = EXTRACT(row, group_columns)\n        IF key NOT IN groups:\n            groups[key] = NEW GROUP\n        \n        FOR EACH agg IN aggregates:\n            groups[key].UPDATE(agg.function, row)\n    \n    result = []\n    FOR EACH (key, group) IN groups:\n        result_row = key\n        FOR EACH agg IN aggregates:\n            result_row[agg.alias] = group.COMPUTE(agg.function)\n        result.APPEND(result_row)\n    \n    RETURN result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Count books per genre\nSELECT genre, COUNT(*) AS book_count\nFROM books\nGROUP BY genre;\n\n-- Average copies available per genre\nSELECT genre, AVG(copies_available) AS avg_copies\nFROM books\nGROUP BY genre;\n\n-- Total loan count per member (with names)\nSELECT m.member_id, m.last_name, COUNT(l.loan_id) AS loan_count\nFROM members m\nLEFT JOIN loans l ON m.member_id = l.member_id\nGROUP BY m.member_id, m.last_name;\n\n-- Most borrowed books\nSELECT b.title, COUNT(l.loan_id) AS times_borrowed\nFROM books b\nLEFT JOIN loans l ON b.book_id = l.book_id\nGROUP BY b.book_id, b.title\nORDER BY times_borrowed DESC;\n\n-- GROUP BY with expressions\nSELECT published_year / 10 * 10 AS decade, COUNT(*) AS book_count\nFROM books\nGROUP BY decade\nORDER BY decade;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: GROUP BY Aggregation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input: books table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "book_id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "genre"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "copies_available"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Hobbit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fantasy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1984"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dystopian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To Kill a Mockingbird"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Great Gatsby"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Brief History of Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Pragmatic Programmer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Science Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Catcher in the Rye"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sapiens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Query: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT genre, COUNT(*) AS cnt, SUM(copies_available) AS total FROM books GROUP BY genre ORDER BY cnt DESC;"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fantasy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dystopian"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fiction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sci-Fi"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "History"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cnt=0,sum=0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 1 (Fantasy,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 2 (Dystopian,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 3 (Fiction,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 4 (Fiction,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 5 (Science,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 6 (Technology,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 7 (Technology,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 8 (Sci-Fi,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 9 (Fiction,0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row 10 (History,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,2}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "genre"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cnt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dystopian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fantasy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Science Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "456-having",
      children: "4.5.6 HAVING"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters groups after GROUP BY (WHERE filters rows before grouping)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHERE vs HAVING Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHERE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HAVING"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groups (after aggregation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When executed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After GROUP BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can use aggregate functions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE COUNT(*) > 5"
            }), " is illegal)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "HAVING COUNT(*) > 5"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can reference column aliases from SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (WHERE runs before SELECT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (except in some DBMS like MySQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can reference non-aggregated columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, but must be in GROUP BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library Analogy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Show me books published after 2000\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Show me genres that have more than 2 books\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- WHERE filters individual books, HAVING filters genres\nSELECT genre, COUNT(*) AS book_count, AVG(copies_available) AS avg_copies\nFROM books\nWHERE published_year > 1950           -- Step 1: Only books after 1950\nGROUP BY genre                         -- Step 2: Group by genre\nHAVING COUNT(*) >= 2                   -- Step 3: Only genres with 2+ books\nORDER BY book_count DESC;\n\n-- Without HAVING, find genres with many books:\nSELECT genre, COUNT(*) AS cnt FROM books\nGROUP BY genre\nHAVING cnt > 1;   -- Above average genres\n\n-- HAVING with multiple conditions\nSELECT genre, COUNT(*) AS cnt, AVG(copies_available) AS avg_copies\nFROM books\nGROUP BY genre\nHAVING COUNT(*) >= 1 AND AVG(copies_available) > 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY (hash-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash table, one pass per row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY (sort-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by group columns, then scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(g)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g = number of groups (usually g <= n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(g)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table or sort area per group"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "457-aggregate-functions",
      children: "4.5.7 Aggregate Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute a single value from a set of rows. Often used with GROUP BY but valid without it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate Functions Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NULL Handling"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count all rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counts everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How many books total?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count non-NULL values in col"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How many books have a known publisher?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUM(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of non-NULL values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as col type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Total copies of all books\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVG(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average of non-NULL values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT / DECIMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Average copies per book\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIN(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum value in col"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as col type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Oldest publication year\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum value in col"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as col type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Newest publication year\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Overall statistics\nSELECT\n    COUNT(*) AS total_books,\n    COUNT(DISTINCT genre) AS unique_genres,\n    SUM(copies_available) AS total_copies,\n    AVG(copies_available) AS avg_copies_per_book,\n    MIN(published_year) AS oldest_book,\n    MAX(published_year) AS newest_book\nFROM books;\n\n-- Aggregate with GROUP BY\nSELECT genre,\n    COUNT(*) AS books_in_genre,\n    SUM(copies_available) AS total_copies,\n    ROUND(AVG(copies_available), 2) AS avg_copies,\n    MIN(published_year) AS earliest,\n    MAX(published_year) AS latest\nFROM books\nGROUP BY genre\nORDER BY books_in_genre DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "genre"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "books_in_genre"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "total_copies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "avg_copies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "earliest"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "latest"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1925"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1960"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2008"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dystopian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1949"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1949"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fantasy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1937"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1937"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1988"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1988"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Science Fiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1965"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1965"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate with NULL in Data:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- If return_date has some NULLs (books not yet returned)\nSELECT COUNT(return_date) AS returned_books FROM loans;  -- Counts only non-NULL\nSELECT COUNT(*) AS total_loans FROM loans;                 -- Counts all rows\nSELECT AVG(return_date - loan_date) AS avg_days_borrowed FROM loans;  -- Only considers returned books\n\n-- DATEDIFF equivalent in PostgreSQL:\nSELECT AVG(return_date - loan_date) AS avg_days FROM loans WHERE return_date IS NOT NULL;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, single counter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, skip NULLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUM(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, accumulate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVG(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, sum+count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIN(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, track min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, track max"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All five simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single scan for all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "458-distinct",
      children: "4.5.8 DISTINCT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Removes duplicate rows from the result set."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " \"Give me a list of all unique genres in the library -- don't repeat a genre just because there are multiple books in it.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Distinct single column\nSELECT DISTINCT genre FROM books;\n\n-- Distinct multiple columns (unique combinations)\nSELECT DISTINCT genre, author FROM books;\n\n-- DISTINCT with COUNT\nSELECT COUNT(DISTINCT genre) AS unique_genres FROM books;\n\n-- DISTINCT vs GROUP BY (equivalent but GROUP BY allows aggregates)\nSELECT DISTINCT genre FROM books;\nSELECT genre FROM books GROUP BY genre;  -- Same result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT with NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL appears once in result (all NULLs are grouped)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT on multiple columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Considers ALL columns combined; row is unique if any column differs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT on large result set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting overhead: O(n log n) time, O(n) space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "459-limit--offset",
      children: "4.5.9 LIMIT / OFFSET"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limits the number of rows returned and optionally skips a number of rows (for pagination)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- First 3 books\nSELECT title, author FROM books LIMIT 3;\n\n-- Skip 3, return next 2 (pagination: page 2 with size 2)\nSELECT title, author FROM books ORDER BY book_id LIMIT 2 OFFSET 3;\n\n-- Alternative syntax in MySQL:\nSELECT title, author FROM books ORDER BY book_id LIMIT 3, 2;  -- LIMIT offset, count\n\n-- LIMIT with ORDER BY (most recent)\nSELECT title, published_year FROM books ORDER BY published_year DESC LIMIT 5;\n\n-- Top-N per group (advanced)\nSELECT genre, title, published_year FROM (\n    SELECT genre, title, published_year,\n           ROW_NUMBER() OVER (PARTITION BY genre ORDER BY published_year DESC) AS rn\n    FROM books\n) ranked WHERE rn <= 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIMIT without ORDER BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must still scan all rows; stop after k results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIMIT with ORDER BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort first, then take top k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFFSET m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must skip m rows; still scans full table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4510-update",
      children: "4.5.10 UPDATE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modifies existing rows in a table."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Updating a book's catalog entry -- changing its location, marking it as lost, updating the number of available copies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(Optional but critical) Add WHERE clause to specify which rows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SET column(s) to new value(s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DBMS validates constraints on modified columns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes written to data pages and transaction log"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggers (if any) fire"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION UPDATE_TABLE(table_name, set_clauses, condition):\n    table = GET table_name FROM database.schema\n    matched_rows = SELECT * FROM table WHERE condition\n    \n    FOR EACH row IN matched_rows:\n        FOR EACH (column, new_value) IN set_clauses:\n            IF NOT VALIDATE_CONSTRAINTS(column, new_value):\n                RAISE ERROR\n            old_row.VALUE(column) = new_value\n    \n    table.PERSIST_CHANGES()\n    LOG_CHANGES(matched_rows)\n    RETURN matched_rows.COUNT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Update single column\nUPDATE books SET copies_available = 4 WHERE book_id = 1;\n\n-- Update multiple columns\nUPDATE books SET genre = 'Classic Fiction', copies_available = 10\nWHERE book_id = 3;\n\n-- Update with expression\nUPDATE books SET copies_available = copies_available + 1\nWHERE genre = 'Fantasy';\n\n-- Update all rows (CAREFUL!)\nUPDATE books SET is_active = TRUE;  -- Activates all books\n\n-- Parameterized update (from programming)\nUPDATE books SET copies_available = ? WHERE book_id = ?;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sqlite3.h>\n#include <string>\n#include <sstream>\n\nint updateCopies(sqlite3* db, int bookId, int newCopies) {\n    std::ostringstream sql;\n    sql << \"UPDATE books SET copies_available = \" << newCopies\n        << \" WHERE book_id = \" << bookId << \";\";\n\n    char* errMsg = nullptr;\n    int rc = sqlite3_exec(db, sql.str().c_str(), nullptr, nullptr, &errMsg);\n    if (rc != SQLITE_OK) {\n        std::cerr << \"Update error: \" << errMsg << std::endl;\n        sqlite3_free(errMsg);\n        return -1;\n    }\n    int affected = sqlite3_changes(db);\n    std::cout << \"Rows updated: \" << affected << std::endl;\n    return affected;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\n\ndef update_book_copies(conn: sqlite3.Connection, book_id: int, copies: int) -> int:\n    sql = \"UPDATE books SET copies_available = ? WHERE book_id = ?;\"\n    try:\n        cursor = conn.execute(sql, (copies, book_id))\n        conn.commit()\n        print(f\"Rows updated: {cursor.rowcount}\")\n        return cursor.rowcount\n    except sqlite3.Error as e:\n        print(f\"Update error: {e}\")\n        return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update by PK (indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index lookup, single row modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update by non-indexed column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full scan to find matching rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update all rows (no WHERE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must modify every row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) per index per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each index on modified column must be updated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No WHERE clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows updated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALWAYS test with SELECT first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE violates constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error, entire UPDATE rolls back"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check values before executing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE with subquery returning NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sets column to NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use COALESCE or guard with WHERE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent UPDATE (same row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last writer wins (lost update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SELECT FOR UPDATE or optimistic locking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4511-delete",
      children: "4.5.11 DELETE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Removes rows from a table."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Removing a book from the catalog because it was lost or damaged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Delete by condition\nDELETE FROM books WHERE book_id = 11;\n\n-- Delete multiple rows\nDELETE FROM books WHERE copies_available = 0 AND genre = 'Fiction';\n\n-- Delete all rows (CAREFUL!)\nDELETE FROM books;\n\n-- Delete with subquery\nDELETE FROM members\nWHERE member_id NOT IN (SELECT DISTINCT member_id FROM loans);\n\n-- Delete with JOIN (PostgreSQL syntax)\nDELETE FROM books b\nUSING loans l\nWHERE b.book_id = l.book_id AND l.return_date IS NULL\n  AND l.due_date < '2026-01-01';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sqlite3.h>\n\nint deleteBook(sqlite3* db, int bookId) {\n    const char* sql = \"DELETE FROM books WHERE book_id = ?;\";\n    sqlite3_stmt* stmt;\n\n    if (sqlite3_prepare_v2(db, sql, -1, &stmt, nullptr) != SQLITE_OK) {\n        std::cerr << \"Prepare error: \" << sqlite3_errmsg(db) << std::endl;\n        return -1;\n    }\n\n    sqlite3_bind_int(stmt, 1, bookId);\n\n    int rc = sqlite3_step(stmt);\n    if (rc != SQLITE_DONE) {\n        std::cerr << \"Delete error: \" << sqlite3_errmsg(db) << std::endl;\n        sqlite3_finalize(stmt);\n        return -1;\n    }\n\n    int affected = sqlite3_changes(db);\n    std::cout << \"Rows deleted: \" << affected << std::endl;\n    sqlite3_finalize(stmt);\n    return affected;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sqlite3\n\ndef delete_old_members(conn: sqlite3.Connection, cutoff_year: int) -> int:\n    sql = \"\"\"\n    DELETE FROM members\n    WHERE member_id NOT IN (SELECT DISTINCT member_id FROM loans)\n      AND strftime('%Y', join_date) < ?;\n    \"\"\"\n    try:\n        cursor = conn.execute(sql, (str(cutoff_year),))\n        conn.commit()\n        print(f\"Members deleted: {cursor.rowcount}\")\n        return cursor.rowcount\n    except sqlite3.IntegrityError as e:\n        print(f\"Cannot delete due to FK constraint: {e}\")\n        return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Measure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete by PK (indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index lookup + row/page removal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete without WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-by-row scan + trigger firing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete + FK check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) per child table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must verify no referencing rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space reclamation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE marks space as reusable; VACUUM needed for physical reclaim"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No WHERE clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always test with SELECT first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FK violation (children exist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use CASCADE, SET NULL, or delete children first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large DELETE (millions of rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running, may fill transaction log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch in chunks using LIMIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE with FK on self (tree structure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use recursive CTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle parent-child relationships carefully"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-data-control-language-dcl",
      children: "4.6 Data Control Language (DCL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controls user access to database objects."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " The head librarian decides who can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View the catalog (SELECT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new books (INSERT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update book information (UPDATE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove books (DELETE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue library cards (GRANT privileges)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revoke library cards (REVOKE privileges)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create roles (groups of privileges)\nCREATE ROLE librarian;\nCREATE ROLE assistant;\nCREATE ROLE patron;\n\n-- Grant system-level privileges\nGRANT CONNECT TO librarian;\nGRANT CREATE TABLE TO librarian;\n\n-- Grant object-level privileges\nGRANT SELECT, INSERT, UPDATE, DELETE ON books TO librarian;\nGRANT SELECT ON books TO patron;\nGRANT SELECT, INSERT ON loans TO assistant;\n\n-- Column-level privileges\nGRANT SELECT (member_id, first_name, last_name, email) ON members TO assistant;\nGRANT UPDATE (email, phone) ON members TO assistant;\n\n-- Grant with GRANT OPTION (allows cascading)\nGRANT SELECT ON books TO assistant WITH GRANT OPTION;\n\n-- Grant role to users\nGRANT librarian TO head_librarian_user;\nGRANT assistant TO assistant_user;\nGRANT patron TO public;\n\n-- Revoke privileges\nREVOKE DELETE ON books FROM assistant;\nREVOKE ALL PRIVILEGES ON members FROM assistant;\nREVOKE librarian FROM former_librarian_user;\n\n-- View current privileges\nSELECT * FROM information_schema.table_privileges WHERE table_name = 'books';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REVOKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission check at query time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p = number of privileges; cached"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-transaction-control-language-tcl",
      children: "4.7 Transaction Control Language (TCL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manages transactions -- groups of SQL statements that execute as an atomic unit (all succeed or all fail)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Checking out a book is a multi-step process:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify member has no overdue books"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrement copies_available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create loan record"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update member's loan count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If step 2 succeeds but step 3 fails, the system is in an inconsistent state. A transaction ensures ALL steps complete or NONE do."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Basic transaction\nBEGIN TRANSACTION;\n\nUPDATE books SET copies_available = copies_available - 1 WHERE book_id = 1;\nINSERT INTO loans (book_id, member_id, due_date)\nVALUES (1, 1, DATE('now', '+14 days'));\n\nCOMMIT;  -- Makes changes permanent\n-- If any error occurs before COMMIT, ROLLBACK undoes changes\n\n-- Transaction with ROLLBACK\nBEGIN TRANSACTION;\n\nUPDATE books SET copies_available = copies_available - 1 WHERE book_id = 1;\n\n-- Oops! Member ID doesn't exist\nINSERT INTO loans (book_id, member_id, due_date)\nVALUES (1, 999, '2026-04-10');\n-- ERROR! FK violation\n\nROLLBACK;  -- Undoes the UPDATE (copies_available goes back to original)\n\n-- Transaction with SAVEPOINT (nested rollback)\nBEGIN TRANSACTION;\n\nUPDATE books SET copies_available = copies_available - 1 WHERE book_id = 1;\nSAVEPOINT after_update;\n\nINSERT INTO loans (book_id, member_id, due_date)\nVALUES (1, 1, '2026-04-10');\n\n-- Something goes wrong with another operation\nROLLBACK TO SAVEPOINT after_update;\n-- The UPDATE is preserved, the INSERT is undone\n\n-- More corrections...\nINSERT INTO loans (book_id, member_id, due_date, loan_date)\nVALUES (1, 1, '2026-04-10', '2026-03-27');\n\nCOMMIT;  -- Final commit of corrected transaction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ACID Properties:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All or nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT / ROLLBACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data stays valid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints, triggers, rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions don't interfere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locking, MVCC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Durability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committed changes persist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead log (WAL)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) in WAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead log recording"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush log to disk (fsync)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROLLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must undo all changes in reverse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAVEPOINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks a point in the log"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-tables",
      children: "Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "where-vs-having",
      children: "WHERE vs HAVING"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHERE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HAVING"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After GROUP BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column aliases from SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible (except MySQL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters early (reduces work)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters late (after grouping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library Analogy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Books published after 2000\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Genres with more than 2 books\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only with GROUP BY"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-vs-truncate-vs-drop",
      children: "DELETE vs TRUNCATE vs DROP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TRUNCATE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DROP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removes data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (row by row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (page deallocation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removes structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trigger firing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (in transaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies (PG yes, MySQL no)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-increment reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most DBMS reset it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space to OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (marked reusable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-of-aggregate-functions",
      children: "Comparison of Aggregate Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NULL Handling"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Empty Table"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counts all rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total number of rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of non-NULL values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUM(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total of numeric column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVG(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIN(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum value (works on strings too)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX(col)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores NULLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum value (works on strings too)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sql-categories-ddldmldcltcl",
      children: "SQL Categories (DDL/DML/DCL/TCL)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Commands"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auto-Commit?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rollback?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE, ALTER, DROP, TRUNCATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (most DBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build, remodel, or demolish shelves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DML"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT, INSERT, UPDATE, DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (in transaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (within TX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find, add, move, or remove books"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT, REVOKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issue or revoke library cards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-step check-in/out process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constraints-comparison",
      children: "Constraints Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rows Affected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Index Created?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NULL Allowed?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every book needs a title"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (1+ in MySQL, multiple in PG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No two books share an ISBN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (clustered in some DBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accession number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent + child tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (recommended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member ID must be a real member"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single column(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column(s)/Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (NULL passes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Year must be between 1000 and 2026"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New rows only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default genre 'Unknown'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common SQL interview questions with detailed explanations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-delete-truncate-and-drop",
      children: "Q1: What is the difference between DELETE, TRUNCATE, and DROP?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TRUNCATE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DROP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removes rows?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (row by row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (page deallocation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (table gone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Removes structure?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE clause?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fires triggers?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback possible?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (in transaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL: no; PG: yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (log each row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (deallocate pages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " DELETE logs every row for rollback capability. TRUNCATE deallocates entire pages (a single metadata operation). DROP removes the table object itself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-char-vs-varchar",
      children: "Q2: Explain CHAR vs VARCHAR."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CHAR(n)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VARCHAR(n)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n characters (padded with spaces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual string length + 2 bytes overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255 (traditional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65,535 (MySQL) or unlimited (PG TEXT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-length: ISBN, ZIP, state code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable: names, titles, descriptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly faster for fixed data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage efficient for variable data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trailing spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padded and compared with spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not padded; trimmed on storage in some DBMS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " CHAR aligns data at fixed offsets making row scanning faster for short, fixed-length data. VARCHAR saves space for variable-length data at the cost of length-prefix overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-sql-handle-null",
      children: "Q3: How does SQL handle NULL?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NULL represents ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unknown"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "missing"
        }), " data, not zero or empty string."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NULL = NULL evaluates to UNKNOWN (not TRUE), so use IS NULL / IS NOT NULL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate functions (except COUNT(*)) ignore NULLs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NULL in WHERE clause comparison returns UNKNOWN, which filters the row out."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NULL in UNIQUE column: multiple NULLs allowed in PostgreSQL/MySQL (ISO standard)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Three-valued logic (TRUE/FALSE/UNKNOWN) is a common interview trap. Remember: NULL IS NULL is TRUE; NULL = NULL is UNKNOWN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-prevent-sql-injection",
      children: "Q4: How do you prevent SQL injection?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL injection occurs when user input is concatenated into SQL strings:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- VULNERABLE (never do this):\nstring sql = \"SELECT * FROM users WHERE username = '\" + userInput + \"'\";\n-- If userInput = \"' OR '1'='1\", query becomes:\n-- SELECT * FROM users WHERE username = '' OR '1'='1'  (returns ALL users)\n\n-- SAFE: Use parameterized queries / prepared statements\n-- Python:\ncursor.execute(\"SELECT * FROM users WHERE username = ?\", (user_input,))\n\n-- C++:\nsqlite3_prepare_v2(db, \"SELECT * FROM users WHERE username = ?\", -1, &stmt, nullptr);\nsqlite3_bind_text(stmt, 1, user_input.c_str(), -1, SQLITE_TRANSIENT);\n\n-- Java (JDBC):\nPreparedStatement ps = conn.prepareStatement(\"SELECT * FROM users WHERE username = ?\");\nps.setString(1, userInput);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always"
        }), " use parameterized queries / prepared statements"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate input types (e.g., ensure integer fields are integers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ORM frameworks (Hibernate, SQLAlchemy) which handle escaping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply least-privilege database permissions (no DROP/CREATE to app user)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never concatenate user input into SQL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-a-clustered-and-non-clustered-index",
      children: "Q5: What is the difference between a clustered and non-clustered index?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clustered Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Clustered Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical table order matches index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate structure; data in heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (only one physical order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple (up to 999 in SQL Server)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual data rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers to data rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (data = index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (index -> pointer -> data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default clustered in SQL Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually non-clustered in MySQL InnoDB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-does-select--from-table-where-11-do",
      children: "Q6: What does SELECT * FROM table WHERE 1=1 do?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns all rows (1=1 is always TRUE). This pattern is used in dynamic query building to easily add AND conditions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "query = \"SELECT * FROM books WHERE 1=1\"\nif genre_filter:\n    query += f\" AND genre = '{genre_filter}'\"  # Use parameterized -- example only\nif year_filter:\n    query += f\" AND published_year >= {year_filter}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mysql",
      children: "MySQL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PRIMARY KEY"
        }), " creates a clustered index (data stored in PK order)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AUTO_INCREMENT"
        }), " for surrogate keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ENGINE=InnoDB"
        }), " for FK support (MyISAM does not support FKs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SHOW CREATE TABLE"
        }), " to inspect schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EXPLAIN SELECT"
        }), " for query plan analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "LIMIT n OFFSET m"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LIMIT m, n"
        }), " syntax"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "INSERT IGNORE"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ON DUPLICATE KEY UPDATE"
        }), " for upsert"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postgresql",
      children: "PostgreSQL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SERIAL"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IDENTITY"
        }), " for auto-incrementing keys"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full ACID compliance with MVCC"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ILIKE"
        }), " for case-insensitive LIKE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RETURNING"
        }), " clause: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DELETE FROM books WHERE book_id = 1 RETURNING *;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ON CONFLICT"
        }), " for upsert: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSERT INTO books VALUES (...) ON CONFLICT (book_id) DO UPDATE SET ...;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "LIMIT n OFFSET m"
        }), " (standard syntax)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schemas"
        }), " for namespace organization (public by default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EXPLAIN ANALYZE"
        }), " for detailed query plans"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sqlite",
      children: "SQLite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serverless"
        }), " (embedded library, not client-server)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic typing"
        }), " (column type is a hint, not enforcement except for INTEGER PRIMARY KEY)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-increment"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INTEGER PRIMARY KEY"
        }), " (rowid alias)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited ALTER TABLE (can ADD COLUMN but not DROP or MODIFY)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No GRANT/REVOKE (file permissions instead)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BEGIN TRANSACTION"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMMIT"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROLLBACK"
        }), " fully supported"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Excellent for embedded applications, mobile, and testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sql-server-t-sql",
      children: "SQL Server (T-SQL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "IDENTITY(seed, increment)"
        }), " for auto-increment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TOP n"
        }), " instead of LIMIT: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT TOP 10 * FROM books"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "OFFSET n ROWS FETCH NEXT m ROWS ONLY"
        }), " (standard since 2012)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GO"
        }), " as batch separator"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clustered indexes by default on PRIMARY KEY"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "N'string'"
        }), " for Unicode (NVARCHAR)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Real-world SQL examples -- from library management to e-commerce -- illustrate the practical power of DDL, constraints, and DML working together."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4.1: Library Database Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Complete library database schema\nCREATE TABLE genres (\n    genre_id INTEGER PRIMARY KEY,\n    name VARCHAR(50) UNIQUE NOT NULL\n);\n\nCREATE TABLE books (\n    book_id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    author VARCHAR(100) NOT NULL,\n    isbn CHAR(13) UNIQUE NOT NULL,\n    published_year INTEGER CHECK (published_year >= 1000),\n    genre_id INTEGER REFERENCES genres(genre_id),\n    copies_available INTEGER DEFAULT 1 CHECK (copies_available >= 0),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE members (\n    member_id INTEGER PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    join_date DATE DEFAULT CURRENT_DATE,\n    max_loans INTEGER DEFAULT 5 CHECK (max_loans > 0)\n);\n\nCREATE TABLE loans (\n    loan_id INTEGER PRIMARY KEY,\n    book_id INTEGER NOT NULL REFERENCES books(book_id),\n    member_id INTEGER NOT NULL REFERENCES members(member_id),\n    loan_date DATE NOT NULL DEFAULT CURRENT_DATE,\n    due_date DATE NOT NULL CHECK (due_date > loan_date),\n    return_date DATE,\n    CHECK (return_date IS NULL OR return_date >= loan_date)\n);\n\n-- Insert sample data\nINSERT INTO genres (genre_id, name) VALUES\n    (1, 'Fantasy'), (2, 'Dystopian'), (3, 'Fiction'),\n    (4, 'Science'), (5, 'Technology'), (6, 'Science Fiction'), (7, 'History');\n\nINSERT INTO books (book_id, title, author, isbn, published_year, genre_id, copies_available) VALUES\n    (1, 'The Hobbit', 'J.R.R. Tolkien', '9780547928227', 1937, 1, 3),\n    (2, '1984', 'George Orwell', '9780451524935', 1949, 2, 5),\n    (3, 'To Kill a Mockingbird', 'Harper Lee', '9780060935467', 1960, 3, 2),\n    (4, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 1925, 3, 4),\n    (5, 'A Brief History of Time', 'Stephen Hawking', '9780553380163', 1988, 4, 1);\n\nINSERT INTO members (member_id, first_name, last_name, email) VALUES\n    (1, 'Alice', 'Johnson', 'alice@email.com'),\n    (2, 'Bob', 'Williams', 'bob@email.com');\n\nINSERT INTO loans (loan_id, book_id, member_id, loan_date, due_date, return_date) VALUES\n    (1, 1, 1, '2026-01-10', '2026-01-24', '2026-01-22'),\n    (2, 3, 1, '2026-01-15', '2026-01-29', NULL),\n    (3, 2, 2, '2026-02-01', '2026-02-15', '2026-02-14');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4.2: Querying the Library Database"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Books currently on loan (not returned)\nSELECT b.title, m.last_name AS borrower, l.loan_date, l.due_date\nFROM loans l\nJOIN books b ON l.book_id = b.book_id\nJOIN members m ON l.member_id = m.member_id\nWHERE l.return_date IS NULL\nORDER BY l.due_date;\n\n-- Overdue books\nSELECT b.title, m.last_name, l.due_date,\n       julianday('now') - julianday(l.due_date) AS days_overdue\nFROM loans l\nJOIN books b ON l.book_id = b.book_id\nJOIN members m ON l.member_id = m.member_id\nWHERE l.return_date IS NULL AND l.due_date < DATE('now');\n\n-- Most borrowed books\nSELECT b.title, COUNT(l.loan_id) AS times_borrowed\nFROM books b\nLEFT JOIN loans l ON b.book_id = l.book_id\nGROUP BY b.book_id, b.title\nORDER BY times_borrowed DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-sql-query-validator-typescript",
      children: "4.8 SQL Query Validator (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TypeScript implementation below validates SQL DDL and DML statements, checks constraint compliance, and simulates query execution order."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// SQL Validator & Execution Simulator — TypeScript\n// ============================================================\n\ninterface ColumnDef {\n  name: string;\n  type: string;\n  notNull: boolean;\n  isPrimaryKey: boolean;\n  isUnique: boolean;\n  defaultValue?: string;\n  foreignKey?: { table: string; column: string };\n  checkExpr?: string;\n}\n\ninterface TableDef {\n  name: string;\n  columns: ColumnDef[];\n}\n\ntype SQLStatement =\n  | { type: 'CREATE_TABLE'; table: TableDef }\n  | { type: 'INSERT'; table: string; values: Record<string, unknown> }\n  | { type: 'SELECT'; table: string; columns: string[]; where?: (row: Record<string, unknown>) => boolean }\n  | { type: 'UPDATE'; table: string; set: Record<string, unknown>; where?: (row: Record<string, unknown>) => boolean }\n  | { type: 'DELETE'; table: string; where?: (row: Record<string, unknown>) => boolean }\n  | { type: 'GRANT'; privilege: string; table: string; user: string }\n  | { type: 'BEGIN'; } | { type: 'COMMIT'; } | { type: 'ROLLBACK'; };\n\nclass SQLValidator {\n  private tables: Map<string, TableDef> = new Map();\n  private rows: Map<string, Record<string, unknown>[]> = new Map();\n  private inTransaction = false;\n  private transactionLog: Array<{ table: string; row: Record<string, unknown>; action: 'INSERT' | 'UPDATE' | 'DELETE' }> = [];\n\n  execute(stmt: SQLStatement): string {\n    try {\n      switch (stmt.type) {\n        case 'CREATE_TABLE':\n          return this.createTable(stmt.table);\n        case 'INSERT':\n          return this.insert(stmt.table, stmt.values);\n        case 'SELECT':\n          return this.select(stmt.table, stmt.columns, stmt.where);\n        case 'UPDATE':\n          return this.update(stmt.table, stmt.set, stmt.where);\n        case 'DELETE':\n          return this.delete(stmt.table, stmt.where);\n        case 'GRANT':\n          return 'GRANT ' + stmt.privilege + ' ON ' + stmt.table + ' TO ' + stmt.user + ' — OK';\n        case 'BEGIN':\n          this.inTransaction = true;\n          this.transactionLog = [];\n          return 'BEGIN TRANSACTION';\n        case 'COMMIT':\n          this.inTransaction = false;\n          this.transactionLog = [];\n          return 'COMMIT — ' + this.transactionLog.length + ' changes persisted';\n        case 'ROLLBACK':\n          this.rollbackTransaction();\n          this.inTransaction = false;\n          return 'ROLLBACK — all changes undone';\n      }\n    } catch (e) {\n      if (this.inTransaction) this.rollbackTransaction();\n      return 'ERROR: ' + (e as Error).message;\n    }\n  }\n\n  private createTable(table: TableDef): string {\n    if (this.tables.has(table.name)) throw new Error('Table ' + table.name + ' already exists');\n    this.tables.set(table.name, table);\n    this.rows.set(table.name, []);\n    return 'CREATE TABLE ' + table.name + ' — ' + table.columns.length + ' columns';\n  }\n\n  private getTable(name: string): TableDef {\n    const t = this.tables.get(name);\n    if (!t) throw new Error('Table ' + name + ' not found');\n    return t;\n  }\n\n  private insert(tableName: string, values: Record<string, unknown>): string {\n    const table = this.getTable(tableName);\n    // Validate NOT NULL constraints\n    for (const col of table.columns) {\n      if (col.notNull && (values[col.name] === undefined || values[col.name] === null)) {\n        throw new Error('NOT NULL constraint violated on column ' + col.name);\n      }\n    }\n    // Validate CHECK constraints (simulated)\n    // Validate FK constraints (simulated)\n    // Check for PK uniqueness\n    const pkCols = table.columns.filter(c => c.isPrimaryKey);\n    const existingRows = this.rows.get(tableName) || [];\n    for (const existing of existingRows) {\n      let pkMatch = true;\n      for (const pk of pkCols) {\n        if (String(values[pk.name]) !== String(existing[pk.name])) { pkMatch = false; break; }\n      }\n      if (pkMatch && pkCols.length > 0) throw new Error('Duplicate primary key');\n    }\n    if (this.inTransaction) {\n      this.transactionLog.push({ table: tableName, row: { ...values }, action: 'INSERT' });\n    }\n    this.rows.get(tableName)!.push(values);\n    return 'INSERT INTO ' + tableName + ' — 1 row inserted';\n  }\n\n  private select(tableName: string, columns: string[], where?: (row: Record<string, unknown>) => boolean): string {\n    const table = this.getTable(tableName);\n    const allRows = this.rows.get(tableName) || [];\n    // SQL execution order simulation: FROM -> WHERE -> SELECT\n    const filtered = where ? allRows.filter(where) : allRows;\n    const projected = filtered.map(r => {\n      const result: Record<string, unknown> = {};\n      for (const col of columns) {\n        result[col] = r[col] ?? 'NULL';\n      }\n      return result;\n    });\n    let result = 'SELECT ' + columns.join(', ') + ' FROM ' + tableName + ' (' + projected.length + ' rows)\\n';\n    for (const row of projected) {\n      result += '  ' + columns.map(c => String(row[c])).join(' | ') + '\\n';\n    }\n    return result.trim();\n  }\n\n  private update(tableName: string, set: Record<string, unknown>, where?: (row: Record<string, unknown>) => boolean): string {\n    const rows = this.rows.get(tableName);\n    if (!rows) throw new Error('Table ' + tableName + ' not found');\n    let count = 0;\n    for (let i = 0; i < rows.length; i++) {\n      if (!where || where(rows[i])) {\n        if (this.inTransaction) {\n          this.transactionLog.push({ table: tableName, row: { ...rows[i] }, action: 'UPDATE' });\n        }\n        rows[i] = { ...rows[i], ...set };\n        count++;\n      }\n    }\n    return 'UPDATE ' + tableName + ' — ' + count + ' rows updated';\n  }\n\n  private delete(tableName: string, where?: (row: Record<string, unknown>) => boolean): string {\n    const rows = this.rows.get(tableName);\n    if (!rows) throw new Error('Table ' + tableName + ' not found');\n    const toDelete = where ? rows.filter(where) : rows;\n    for (const r of toDelete) {\n      if (this.inTransaction) {\n        this.transactionLog.push({ table: tableName, row: { ...r }, action: 'DELETE' });\n      }\n    }\n    this.rows.set(tableName, where ? rows.filter(r => !where(r)) : []);\n    return 'DELETE FROM ' + tableName + ' — ' + toDelete.length + ' rows deleted';\n  }\n\n  private rollbackTransaction(): void {\n    for (const entry of this.transactionLog) {\n      const tableRows = this.rows.get(entry.table);\n      if (!tableRows) continue;\n      switch (entry.action) {\n        case 'INSERT':\n          const idx = tableRows.findIndex(r => JSON.stringify(r) === JSON.stringify(entry.row));\n          if (idx >= 0) tableRows.splice(idx, 1);\n          break;\n        case 'UPDATE':\n        case 'DELETE':\n          // In a real system we'd restore the original row\n          break;\n      }\n    }\n    this.transactionLog = [];\n  }\n}\n\n// Demo\nconst db = new SQLValidator();\nconsole.log(db.execute({\n  type: 'CREATE_TABLE',\n  table: {\n    name: 'employees',\n    columns: [\n      { name: 'id', type: 'INTEGER', notNull: true, isPrimaryKey: true, isUnique: true },\n      { name: 'name', type: 'VARCHAR(100)', notNull: true, isPrimaryKey: false, isUnique: false },\n      { name: 'salary', type: 'DECIMAL', notNull: false, isPrimaryKey: false, isUnique: false },\n    ]\n  }\n}));\nconsole.log(db.execute({ type: 'BEGIN' }));\nconsole.log(db.execute({ type: 'INSERT', table: 'employees', values: { id: 1, name: 'Alice', salary: 75000 } }));\nconsole.log(db.execute({ type: 'INSERT', table: 'employees', values: { id: 2, name: 'Bob', salary: 82000 } }));\nconsole.log(db.execute({ type: 'COMMIT' }));\nconsole.log(db.execute({ type: 'SELECT', table: 'employees', columns: ['id', 'name', 'salary'] }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: SQL Execution Order"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Logical Order\"\n        A1[FROM / JOIN] --> A2[WHERE]\n        A2 --> A3[GROUP BY]\n        A3 --> A4[HAVING]\n        A4 --> A5[SELECT]\n        A5 --> A6[ORDER BY]\n        A6 --> A7[LIMIT / OFFSET]\n    end\n    subgraph \"Written Order\"\n        B1[SELECT] --> B2[FROM]\n        B2 --> B3[WHERE]\n        B3 --> B4[GROUP BY]\n        B4 --> B5[HAVING]\n        B5 --> B6[ORDER BY]\n        B6 --> B7[LIMIT]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following data types is best for storing a fixed-length code like an ISBN?\na) VARCHAR(13)\nb) CHAR(13)\nc) TEXT\nd) BLOB"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the result of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT COUNT(*), COUNT(col) FROM empty_table"
          }), "?\na) 0, 0\nb) 0, NULL\nc) 0, 1\nd) NULL, NULL"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The main purpose of a CHECK constraint is to:\na) Ensure column uniqueness\nb) Validate values against a boolean expression\nc) Create an index on the column\nd) Define a foreign key"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following statements about TRUNCATE is true?\na) It fires triggers for each deleted row\nb) It can be rolled back in a transaction\nc) It removes the table structure\nd) It supports a WHERE clause"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In SQL execution order, which clause is evaluated first?\na) SELECT\nb) WHERE\nc) FROM / JOIN\nd) ORDER BY"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The purpose of the DEFAULT constraint is to:\na) Enforce uniqueness\nb) Provide a value when no value is specified\nc) Create an index\nd) Reference another table"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 13-b, 14-a, 15-b, 16-b, 17-c, 18-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write the SQL DDL for a BLOG database with tables: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "authors(author_id, name, email)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "posts(post_id, author_id, title, body, published_date)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tags(tag_id, name)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "post_tags(post_id, tag_id)"
          }), ". Include PKs, FKs, NOT NULL, UNIQUE, and CHECK constraints."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a SQL query that creates a computed column ", (0,jsx_runtime.jsx)(_components.code, {
            children: "full_name"
          }), " which concatenates ", (0,jsx_runtime.jsx)(_components.code, {
            children: "first_name"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "last_name"
          }), " with a space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a TypeScript function that generates CREATE TABLE statements from a JSON schema definition. Support the following types: string, number, boolean, date, and support constraints: required, unique, default, min/max."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always list columns explicitly in INSERT statements"
        }), " -- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSERT INTO t VALUES (...)"
        }), " breaks when the schema changes; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSERT INTO t (col1, col2) VALUES (...)"
        }), " is robust."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use WHERE with UPDATE and DELETE"
        }), " -- a missing WHERE clause modifies or removes ALL rows. In production, first write the SELECT to verify your condition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer VARCHAR with a reasonable max"
        }), " over TEXT or huge VARCHAR limits -- DBMS stores short strings inline, which is faster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composite primary keys are powerful but make JOINs verbose"
        }), " -- consider a surrogate integer PK and a UNIQUE constraint on the natural composite key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test your constraints with intentional bad data"
        }), " -- INSERT rows that violate each constraint to confirm error messages are clear."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index FK columns"
        }), " -- Every FK column should have an index to avoid full table scans during referential integrity checks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use EXPLAIN (or EXPLAIN ANALYZE)"
        }), " to understand query execution plans and identify missing indexes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use transactions for multi-step operations"
        }), " -- ensures atomicity: either all changes apply, or none do."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use parameterized queries"
        }), " in application code to prevent SQL injection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DISTINCT is not a function"
        }), " -- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT DISTINCT col1, col2"
        }), " applies to all selected columns, not just the one in parentheses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.1:"
        }), " SQL is a declarative language with four sub-language categories: DDL, DML, DCL, and TCL."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.2:"
        }), " Choosing the right data types balances storage efficiency with query performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.3:"
        }), " DDL commands (CREATE, ALTER, DROP, TRUNCATE) define and modify database structures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.4:"
        }), " Constraints enforce data integrity at the database level, not in application code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.5:"
        }), " DML commands (INSERT, SELECT, UPDATE, DELETE) provide complete data manipulation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.6:"
        }), " DCL commands (GRANT, REVOKE) control access at the user and role level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.7:"
        }), " TCL commands (COMMIT, ROLLBACK, SAVEPOINT) manage transactional integrity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DDL Statement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE t (col type constraint, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER TABLE ADD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE t ADD COLUMN c type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER TABLE DROP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE t DROP COLUMN c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unused column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER TABLE RENAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE t RENAME COLUMN a TO b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rename"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DROP TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DROP TABLE t [CASCADE]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove permanently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRUNCATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TRUNCATE TABLE t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove data, keep structure"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DML Statement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Caution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use WHERE to avoid full table scans on large tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specify column list for robustness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include WHERE; test with SELECT first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always include WHERE; knows no undo in most systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Feature"
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
              children: "FOREIGN KEY + CASCADE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order management, content CMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleans up child records when parent removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CHECK Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial systems, healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces business rules at DB level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GRANT/REVOKE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tenant apps, government"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row/table-level security for user roles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DISTINCT + ORDER BY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean duplicate-free sorted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LIKE / ILIKE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search functionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching for product lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Junction tables (M:N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces uniqueness of combinations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transactions + TCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking, booking systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomicity for multi-step operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which SQL statement belongs to DDL?\na) SELECT\nb) INSERT\nc) ALTER TABLE\nd) GRANT"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The PRIMARY KEY constraint is equivalent to:\na) UNIQUE\nb) NOT NULL + UNIQUE\nc) NOT NULL + FOREIGN KEY\nd) CHECK + UNIQUE"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when you DELETE FROM students without a WHERE clause?\na) An error is returned\nb) All rows in the students table are deleted\nc) Only the first row is deleted\nd) The table structure is removed"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which referential action automatically deletes child rows when a parent is deleted?\na) ON DELETE RESTRICT\nb) ON DELETE SET NULL\nc) ON DELETE CASCADE\nd) ON DELETE NO ACTION"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The purpose of a CHECK constraint is to:\na) Ensure a column is unique\nb) Verify values satisfy a boolean expression\nc) Create an index\nd) Define a foreign key"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which SQL command removes all rows but preserves the table structure?\na) DROP TABLE\nb) DELETE FROM\nc) TRUNCATE TABLE\nd) ALTER TABLE"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A composite primary key is:\na) A key made of two or more columns\nb) Two separate primary keys\nc) A key that references another table\nd) A key with a default value"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The UPDATE statement without a WHERE clause:\na) Updates only the first row\nb) Updates all rows in the table\nc) Returns an error\nd) Updates rows with NULL values only"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which clause filters groups after aggregation?\na) WHERE\nb) HAVING\nc) GROUP BY\nd) ORDER BY"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the correct way to check for NULL in SQL?\na) WHERE col = NULL\nb) WHERE col IS NULL\nc) WHERE col == NULL\nd) WHERE col EQUALS NULL"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which aggregate function returns NULL on an empty table?\na) COUNT(*)\nb) COUNT(col)\nc) SUM(col)\nd) Both COUNT variants return 0"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the logical execution order of SQL clauses?\na) SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY\nb) FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY\nc) FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY\nd) WHERE -> FROM -> GROUP BY -> HAVING -> SELECT -> ORDER BY"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-c, 2-b, 3-b, 4-c, 5-b, 6-c, 7-a, 8-b, 9-b, 10-b, 11-c, 12-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL is the universal language for relational databases, divided into DDL, DML, DCL, and TCL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CREATE TABLE defines the schema with columns, data types, and constraints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL, DEFAULT) enforce data integrity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INSERT adds data; SELECT retrieves it with powerful filtering (WHERE, LIKE, IN, BETWEEN)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GROUP BY + HAVING enables grouped aggregation; WHERE filters rows, HAVING filters groups."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL execution order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UPDATE modifies existing rows; DELETE removes them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate functions (COUNT, SUM, AVG, MIN, MAX) compute single values from multiple rows."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DCL commands (GRANT, REVOKE) manage access control; TCL commands (COMMIT, ROLLBACK) manage transactions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use WHERE clauses carefully with UPDATE and DELETE to avoid unintended changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use parameterized queries to prevent SQL injection."
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
          children: ["Write the SQL to create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "departments"
          }), " table with columns: dept_id (INTEGER PK), dept_name (VARCHAR(100), NOT NULL, UNIQUE), location (VARCHAR(100)), budget (DECIMAL(12,2))."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Insert three departments into your table: ('Engineering', 'Building A', 500000), ('Marketing', 'Building B', 200000), ('Sales', 'Building A', 300000)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a SELECT query that finds all products with a price between ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "10"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "10 and "
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6944em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "10"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "an"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                })]
              })
            })]
          }), "100, sorted by price descending."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between DROP TABLE and TRUNCATE TABLE? When would you use each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a query to find customers whose last name starts with 'M' and who registered after January 1, 2025."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write the complete DDL for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "library"
          }), " database with tables: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "books"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "members"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "loans"
          }), ". Include appropriate PKs, FKs, NOT NULL, and CHECK constraints. Include a constraint that the return_date must be after the loan_date."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE employees (\n    emp_id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    salary DECIMAL(10,2),\n    dept_id INTEGER REFERENCES departments(dept_id)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write queries to:\na) Increase all employees' salaries by 10%\nb) Delete employees in department 5\nc) Find the highest-paid employee name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain what ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ON DELETE CASCADE"
          }), " does and provide a scenario where it is appropriate. When would you choose ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ON DELETE SET NULL"
          }), " instead?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a query using LIKE that finds all email addresses from the domain 'company.org' and where the username portion is between 5 and 10 characters long."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Using the library database schema from this chapter, write a query that uses GROUP BY to find which genre has the most books on loan (not returned yet). Include the genre name and count in the result."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Design a complete schema for a HOTEL BOOKING system with tables: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hotels"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rooms"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "guests"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bookings"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "payments"
          }), ". Include at least:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Composite keys where appropriate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CHECK constraints (e.g., check_in < check_out)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DEFAULT values"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Foreign keys with appropriate referential actions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "At least one UNIQUE constraint across multiple columns\nWrite INSERT statements for sample data and three meaningful SELECT queries."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a migration script that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates a table ", (0,jsx_runtime.jsx)(_components.code, {
              children: "audit_log"
            }), " with columns for action, table_name, record_id, old_data (TEXT), new_data (TEXT), timestamp"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Modifies the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "employees"
            }), " table to add a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "last_modified"
            }), " column"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates a trigger (in concept) that logs changes to employees\n(Write the core SQL, noting that trigger syntax varies by DBMS)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the schema below, write a query that uses a subquery to find customers who have never placed an order. Then write the same query using a LEFT JOIN. Which is more efficient?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "customers(customer_id, name, email)\norders(order_id, customer_id, order_date, total)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a SQL query using the library database that shows each member's name, the number of books they've borrowed, and their rank by borrowing count (using window functions if your DBMS supports them)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given a table with duplicate rows (no PK), write a query that deletes all duplicates except one, keeping the row with the smallest ID. (Hint: use a self-join or ROW_NUMBER() window function.)"
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