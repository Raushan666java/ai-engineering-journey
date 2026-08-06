"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[68860],{

/***/ 70327
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_03_relational_model_md_8b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-03-relational-model-md-8b7.json
const site_docs_courses_database_management_systems_03_relational_model_md_8b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/03-relational-model","title":"Chapter 3: The Relational Model","description":"Previous Entity-Relationship Model | Next SQL Basics","source":"@site/docs/courses/database-management-systems/03-relational-model.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/03-relational-model","permalink":"/ai-engineering-journey/database-management-systems/03-relational-model","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-relational-model","slug":"/database-management-systems/03-relational-model","title":"Chapter 3: The Relational Model","sidebar_label":"Chapter 3: The Relational Model","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"Chapter 2: Entity-Relationship Model","permalink":"/ai-engineering-journey/database-management-systems/02-er-model"},"next":{"title":"Chapter 4: SQL Basics","permalink":"/ai-engineering-journey/database-management-systems/04-sql-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/03-relational-model.md


const frontMatter = {
	id: '03-relational-model',
	slug: '/database-management-systems/03-relational-model',
	title: 'Chapter 3: The Relational Model',
	sidebar_label: 'Chapter 3: The Relational Model',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: The Relational Model';

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
  "value": "3.1 Introduction to the Relational Model",
  "id": "31-introduction-to-the-relational-model",
  "level": 3
}, {
  "value": "3.2 Relational Model Concepts",
  "id": "32-relational-model-concepts",
  "level": 3
}, {
  "value": "3.2.1 Real-World Analogy: The Spreadsheet",
  "id": "321-real-world-analogy-the-spreadsheet",
  "level": 4
}, {
  "value": "3.2.2 Formal Definitions",
  "id": "322-formal-definitions",
  "level": 4
}, {
  "value": "3.2.3 Relation Schema vs. Relation Instance",
  "id": "323-relation-schema-vs-relation-instance",
  "level": 4
}, {
  "value": "3.2.4 Properties of Relations",
  "id": "324-properties-of-relations",
  "level": 4
}, {
  "value": "3.2.5 Step-by-Step: Defining a Relation",
  "id": "325-step-by-step-defining-a-relation",
  "level": 4
}, {
  "value": "3.2.6 Pseudocode: Relation Data Structure",
  "id": "326-pseudocode-relation-data-structure",
  "level": 4
}, {
  "value": "3.2.7 C++ Implementation: Relation Structure",
  "id": "327-c-implementation-relation-structure",
  "level": 4
}, {
  "value": "3.2.8 Python Implementation: Relation Structure",
  "id": "328-python-implementation-relation-structure",
  "level": 4
}, {
  "value": "3.2.9 Complexity Analysis of Relation Operations",
  "id": "329-complexity-analysis-of-relation-operations",
  "level": 4
}, {
  "value": "3.3 Keys",
  "id": "33-keys",
  "level": 3
}, {
  "value": "3.3.1 Real-World Analogy: The Passport System",
  "id": "331-real-world-analogy-the-passport-system",
  "level": 4
}, {
  "value": "3.3.2 Super Key",
  "id": "332-super-key",
  "level": 4
}, {
  "value": "3.3.3 Candidate Key",
  "id": "333-candidate-key",
  "level": 4
}, {
  "value": "3.3.4 Primary Key",
  "id": "334-primary-key",
  "level": 4
}, {
  "value": "3.3.5 Foreign Key",
  "id": "335-foreign-key",
  "level": 4
}, {
  "value": "3.3.6 Alternate Key",
  "id": "336-alternate-key",
  "level": 4
}, {
  "value": "3.3.7 Composite Key",
  "id": "337-composite-key",
  "level": 4
}, {
  "value": "3.3.8 Surrogate Key",
  "id": "338-surrogate-key",
  "level": 4
}, {
  "value": "3.3.9 Keys Comparison Table",
  "id": "339-keys-comparison-table",
  "level": 4
}, {
  "value": "3.3.10 Key Detection Algorithm",
  "id": "3310-key-detection-algorithm",
  "level": 4
}, {
  "value": "3.3.11 Complexity Analysis for Key Detection",
  "id": "3311-complexity-analysis-for-key-detection",
  "level": 4
}, {
  "value": "3.4 Integrity Constraints",
  "id": "34-integrity-constraints",
  "level": 3
}, {
  "value": "3.4.1 Domain Constraints",
  "id": "341-domain-constraints",
  "level": 4
}, {
  "value": "3.4.2 Entity Integrity",
  "id": "342-entity-integrity",
  "level": 4
}, {
  "value": "3.4.3 Referential Integrity",
  "id": "343-referential-integrity",
  "level": 4
}, {
  "value": "3.4.4 Semantic Integrity (Business Rules)",
  "id": "344-semantic-integrity-business-rules",
  "level": 4
}, {
  "value": "3.5 Relational Algebra",
  "id": "35-relational-algebra",
  "level": 3
}, {
  "value": "3.5.1 Real-World Analogy: Recipe Instructions",
  "id": "351-real-world-analogy-recipe-instructions",
  "level": 4
}, {
  "value": "3.5.2 SELECT Operation (σ)",
  "id": "352-select-operation-σ",
  "level": 4
}, {
  "value": "3.5.3 PROJECT Operation (π)",
  "id": "353-project-operation-π",
  "level": 4
}, {
  "value": "3.5.4 RENAME Operation (ρ)",
  "id": "354-rename-operation-ρ",
  "level": 4
}, {
  "value": "3.5.5 UNION Operation (∪)",
  "id": "355-union-operation-",
  "level": 4
}, {
  "value": "3.5.6 SET DIFFERENCE Operation (−)",
  "id": "356-set-difference-operation-",
  "level": 4
}, {
  "value": "3.5.7 CARTESIAN PRODUCT Operation (×)",
  "id": "357-cartesian-product-operation-",
  "level": 4
}, {
  "value": "3.5.8 INTERSECTION Operation (∩)",
  "id": "358-intersection-operation-",
  "level": 4
}, {
  "value": "3.5.9 Relational Algebra Operations Comparison Table",
  "id": "359-relational-algebra-operations-comparison-table",
  "level": 4
}, {
  "value": "3.6 Join Operations",
  "id": "36-join-operations",
  "level": 3
}, {
  "value": "3.6.1 Theta Join (⨝_θ)",
  "id": "361-theta-join-_θ",
  "level": 4
}, {
  "value": "3.6.2 Equi Join",
  "id": "362-equi-join",
  "level": 4
}, {
  "value": "3.6.3 Natural Join (⨝)",
  "id": "363-natural-join-",
  "level": 4
}, {
  "value": "3.6.4 Outer Joins",
  "id": "364-outer-joins",
  "level": 4
}, {
  "value": "3.6.5 Semi Join (⋉)",
  "id": "365-semi-join-",
  "level": 4
}, {
  "value": "3.6.6 Anti Join (▷)",
  "id": "366-anti-join-",
  "level": 4
}, {
  "value": "3.6.7 Self Join",
  "id": "367-self-join",
  "level": 4
}, {
  "value": "3.6.8 Join Types Comparison Table",
  "id": "368-join-types-comparison-table",
  "level": 4
}, {
  "value": "3.6.9 C++ Join Implementation",
  "id": "369-c-join-implementation",
  "level": 4
}, {
  "value": "3.6.10 Python Join Implementation",
  "id": "3610-python-join-implementation",
  "level": 4
}, {
  "value": "3.6.11 Complexity Analysis for Joins",
  "id": "3611-complexity-analysis-for-joins",
  "level": 4
}, {
  "value": "3.7 Division Operation (÷)",
  "id": "37-division-operation-",
  "level": 3
}, {
  "value": "3.7.1 Purpose and Formal Definition",
  "id": "371-purpose-and-formal-definition",
  "level": 4
}, {
  "value": "3.7.2 Real-World Analogy: All-You-Can-Eat Buffet",
  "id": "372-real-world-analogy-all-you-can-eat-buffet",
  "level": 4
}, {
  "value": "3.7.3 Step-by-Step Procedure",
  "id": "373-step-by-step-procedure",
  "level": 4
}, {
  "value": "3.7.4 Dry Run Trace Table",
  "id": "374-dry-run-trace-table",
  "level": 4
}, {
  "value": "3.7.5 Alternative Expression",
  "id": "375-alternative-expression",
  "level": 4
}, {
  "value": "3.7.6 C++ Division Implementation",
  "id": "376-c-division-implementation",
  "level": 4
}, {
  "value": "3.7.7 Python Division Implementation",
  "id": "377-python-division-implementation",
  "level": 4
}, {
  "value": "3.7.8 Complexity Analysis for Division",
  "id": "378-complexity-analysis-for-division",
  "level": 4
}, {
  "value": "3.7.9 A&amp;D Table for Division",
  "id": "379-ad-table-for-division",
  "level": 4
}, {
  "value": "3.8 Relational Calculus",
  "id": "38-relational-calculus",
  "level": 3
}, {
  "value": "3.8.1 Tuple Relational Calculus (TRC)",
  "id": "381-tuple-relational-calculus-trc",
  "level": 4
}, {
  "value": "3.8.2 Domain Relational Calculus (DRC)",
  "id": "382-domain-relational-calculus-drc",
  "level": 4
}, {
  "value": "3.8.3 Safety of Relational Calculus Expressions",
  "id": "383-safety-of-relational-calculus-expressions",
  "level": 4
}, {
  "value": "3.8.4 RA vs RC vs SQL Comparison",
  "id": "384-ra-vs-rc-vs-sql-comparison",
  "level": 4
}, {
  "value": "3.8.5 Query Equivalence Examples",
  "id": "385-query-equivalence-examples",
  "level": 4
}, {
  "value": "3.9 Relational Algebra Equivalences",
  "id": "39-relational-algebra-equivalences",
  "level": 3
}, {
  "value": "3.9.1 Fundamental Equivalence Rules",
  "id": "391-fundamental-equivalence-rules",
  "level": 4
}, {
  "value": "3.9.2 Why Equivalences Matter: Example",
  "id": "392-why-equivalences-matter-example",
  "level": 4
}, {
  "value": "3.10 Interview Corner",
  "id": "310-interview-corner",
  "level": 3
}, {
  "value": "3.10.1 Relational Algebra vs SQL",
  "id": "3101-relational-algebra-vs-sql",
  "level": 4
}, {
  "value": "3.10.2 Codd&#39;s 12 Rules",
  "id": "3102-codds-12-rules",
  "level": 4
}, {
  "value": "3.10.3 Key Selection Strategy",
  "id": "3103-key-selection-strategy",
  "level": 4
}, {
  "value": "3.10.4 1NF Requirements",
  "id": "3104-1nf-requirements",
  "level": 4
}, {
  "value": "3.10.5 Common Interview Questions and Answers",
  "id": "3105-common-interview-questions-and-answers",
  "level": 4
}, {
  "value": "3.11 Applications in Real Systems",
  "id": "311-applications-in-real-systems",
  "level": 3
}, {
  "value": "3.11.1 PostgreSQL Query Optimizer",
  "id": "3111-postgresql-query-optimizer",
  "level": 4
}, {
  "value": "3.11.2 MySQL Internals",
  "id": "3112-mysql-internals",
  "level": 4
}, {
  "value": "3.11.3 Oracle Database",
  "id": "3113-oracle-database",
  "level": 4
}, {
  "value": "3.11.4 How Query Optimizers Use Relational Algebra",
  "id": "3114-how-query-optimizers-use-relational-algebra",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Complete University Query",
  "id": "example-1-complete-university-query",
  "level": 3
}, {
  "value": "Example 2: Division with Dry Run",
  "id": "example-2-division-with-dry-run",
  "level": 3
}, {
  "value": "Example 3: Multiple Joins",
  "id": "example-3-multiple-joins",
  "level": 3
}, {
  "value": "Example 4: Anti-Join (Not Exists)",
  "id": "example-4-anti-join-not-exists",
  "level": 3
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
}, {
  "value": "3.12 Aggregate Operations (Extended)",
  "id": "312-aggregate-operations-extended",
  "level": 3
}, {
  "value": "3.13 Complete Relational Algebra Engine (Python)",
  "id": "313-complete-relational-algebra-engine-python",
  "level": 3
}, {
  "value": "3.14 Foreign Key Implementation with Referential Actions (C++)",
  "id": "314-foreign-key-implementation-with-referential-actions-c",
  "level": 3
}, {
  "value": "Applications in Real Systems — Extended",
  "id": "applications-in-real-systems--extended",
  "level": 2
}, {
  "value": "MongoDB&#39;s Journey Toward Relational Concepts",
  "id": "mongodbs-journey-toward-relational-concepts",
  "level": 3
}, {
  "value": "Apache Spark SQL — Catalyst Optimizer",
  "id": "apache-spark-sql--catalyst-optimizer",
  "level": 3
}, {
  "value": "SQLite&#39;s Simple Optimizer",
  "id": "sqlites-simple-optimizer",
  "level": 3
}, {
  "value": "Additional Exercises with Solutions",
  "id": "additional-exercises-with-solutions",
  "level": 2
}, {
  "value": "Exercise A: Complex Join Chain",
  "id": "exercise-a-complex-join-chain",
  "level": 3
}, {
  "value": "Exercise B: Self-Join",
  "id": "exercise-b-self-join",
  "level": 3
}, {
  "value": "Exercise C: Division with Empty Divisor",
  "id": "exercise-c-division-with-empty-divisor",
  "level": 3
}, {
  "value": "Exercise D: NULL Handling in Joins",
  "id": "exercise-d-null-handling-in-joins",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "3.15 TypeScript Relational Algebra Engine",
  "id": "315-typescript-relational-algebra-engine",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    n: "n",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sub: "sub",
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
        id: "chapter-3-the-relational-model",
        children: "Chapter 3: The Relational Model"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/02-er-model",
          children: "Chapter 2: Entity-Relationship Model"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/database-management-systems/04-sql-basics",
          children: "Chapter 4: SQL Basics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define relations, tuples, attributes, and domains formally with real-world analogies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify keys: superkey, candidate key, primary key, foreign key, alternate key, composite key, surrogate key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain and enforce integrity constraints: domain, entity, referential"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express queries using relational algebra operations with step-by-step traces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the closure property of relational algebra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply selection, projection, join, set operations, and division with implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between tuple and domain relational calculus"
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
        href: "../../assets/images/lessons/database-management-systems/03-relational-model/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/03-relational-model/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/03-relational-model/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/03-relational-model/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/03-relational-model/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/03-relational-model/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Relation Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A relation is a set of tuples with atomic values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every cell holds exactly one value (1NF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superkey, candidate, primary, foreign key hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose minimal candidate keys as primary keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrity Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain, entity, and referential rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce at DB level, not in application code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relational Algebra"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural query language with closure property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every operation outputs a relation — enabling composition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relational Calculus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative alternative — specify WHAT not HOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand both for complete query mastery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Relation Concepts] --> B[Keys & Integrity]\n    B --> C[Algebra Basics]\n    C --> D[Derived Operations]\n    D --> E[Query Composition]\n    E --> F[Relational Calculus]\n    F --> G[Equivalence Rules]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The relational model, rooted in set theory and predicate logic, represents all data as simple relations and provides a small set of powerful algebraic operations for querying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-introduction-to-the-relational-model",
      children: "3.1 Introduction to the Relational Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The relational model was proposed by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E.F. Codd in 1970"
      }), " in his seminal paper ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"A Relational Model of Data for Large Shared Data Banks.\""
      }), " It revolutionized database management by providing a mathematically rigorous framework for data organization and manipulation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The model is built on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set theory"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first-order predicate logic"
      }), ". Its elegance comes from representing all data as simple ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relations (tables)"
      }), " and providing a small set of powerful operations for querying and manipulating that data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why the relational model dominates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data independence:"
        }), " Physical storage is decoupled from logical structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set-at-a-time operations:"
        }), " Unlike earlier navigational models (IMS, CODASYL) that processed one record at a time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solid mathematical foundation:"
        }), " Query optimization is provably correct via algebraic equivalence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplicity:"
        }), " Users only need to understand tables, keys, and a handful of operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-relational-model-concepts",
      children: "3.2 Relational Model Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "321-real-world-analogy-the-spreadsheet",
      children: "3.2.1 Real-World Analogy: The Spreadsheet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spreadsheet"
      }), " like Microsoft Excel or Google Sheets:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "StudentID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Major"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relation"
        }), " = The entire spreadsheet (table)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tuple"
        }), " = One row (one student's data)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attribute"
        }), " = One column header (e.g., \"Name\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain"
        }), " = The type of data allowed in a column (e.g., GPA must be 0.0–4.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cardinality"
        }), " = Number of data rows (3 students)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Degree"
        }), " = Number of columns (4 columns)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A spreadsheet is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "almost"
      }), " a relation, but spreadsheets allow duplicate rows, formulas, and multi-cell merges — pure relations reject all of these."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "322-formal-definitions",
      children: "3.2.2 Formal Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relation:"
      }), " Let ( D_1, D_2, \\ldots, D_n ) be domains (sets of atomic values). A relation ( R ) is a subset of the Cartesian product ( D_1 \\times D_2 \\times \\ldots \\times D_n ):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nR \\subseteq D_1 \\times D_2 \\times \\ldots \\times D_n\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each element of ( R ) is an n-tuple ( (v_1, v_2, \\ldots, v_n) ) where each ( v_i \\in D_i )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tuple:"
      }), " An ordered sequence of ( n ) values, each drawn from its respective domain. Represented as ( t = \\langle v_1, v_2, \\ldots, v_n \\rangle ). In practice, a tuple corresponds to a row in a table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attribute:"
      }), " A named column of a relation. The schema defines attributes as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AttributeName: Domain"
      }), ". Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "student_id: INTEGER"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain:"
      }), " A set of atomic (indivisible) values. Examples:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "INTEGER"
        }), ": set of all integers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "VARCHAR(50)"
        }), ": set of all strings up to 50 characters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BOOLEAN"
        }), ": {true, false}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GPA"
        }), ": real numbers in [0.0, 4.0]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cardinality:"
      }), " The number of tuples (rows) in a relation instance. Denoted |R|. Example: If STUDENT has 1000 students, cardinality = 1000."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Degree (Arity):"
      }), " The number of attributes (columns) in a relation schema. A relation of degree 3 has three columns. A relation of degree 1 is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "unary"
      }), ", degree 2 is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "binary"
      }), ", degree 3 is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "ternary"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "323-relation-schema-vs-relation-instance",
      children: "3.2.3 Relation Schema vs. Relation Instance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema (intension)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical definition — name + attribute names + domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "STUDENT(sid: INT, name: VARCHAR(50), major: VARCHAR(30))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instance (extension)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual data at a point in time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The set of currently enrolled students"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The schema is stable (changes rarely), while the instance changes with every INSERT, UPDATE, DELETE."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "324-properties-of-relations",
      children: "3.2.4 Properties of Relations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique name:"
        }), " Each relation has a unique name within the database schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic values:"
        }), " Every cell contains exactly one atomic value (the relational model mandates 1NF)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique attributes:"
        }), " Each attribute has a unique name within the relation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attribute order is insignificant:"
        }), " Columns can be rearranged without changing the relation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tuple order is insignificant:"
        }), " A relation is a ", (0,jsx_runtime.jsx)(_components.em, {
          children: "set"
        }), " of tuples, not a list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No duplicate tuples:"
        }), " Every relation has a key that guarantees uniqueness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every tuple has the same structure:"
        }), " Same number of attributes, same domains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "325-step-by-step-defining-a-relation",
      children: "3.2.5 Step-by-Step: Defining a Relation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Identify the entity (e.g., Student)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " List its relevant properties (sid, name, major, gpa)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Determine the domain for each property\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Choose a primary key (e.g., sid)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Write the schema: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid: INT, name: VARCHAR(50), major: VARCHAR(30), gpa: FLOAT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Populate with tuples (the instance)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "326-pseudocode-relation-data-structure",
      children: "3.2.6 Pseudocode: Relation Data Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STRUCTURE Relation:\n    name: String\n    attributes: List<Attribute>   // ordered list of (name, domain)\n    tuples: Set<List<Value>>       // set of tuples (no duplicates)\n\nMETHOD insert(relation, tuple):\n    IF tuple.domain != relation.attributes.domain:\n        REJECT \"Domain mismatch\"\n    IF tuple IN relation.tuples:\n        REJECT \"Duplicate tuple\"\n    relation.tuples += tuple\n\nMETHOD project(relation, attrNames):\n    attrIndices = [index of each attrName in relation.attributes]\n    result = new Relation\n    FOR each tuple IN relation.tuples:\n        newTuple = [tuple[i] FOR i IN attrIndices]\n        result.tuples += newTuple  // set addition removes duplicates\n    RETURN result\n\nMETHOD select(relation, predicate):\n    result = new Relation(same schema as relation)\n    FOR each tuple IN relation.tuples:\n        IF predicate(tuple):\n            result.tuples += tuple\n    RETURN result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "327-c-implementation-relation-structure",
      children: "3.2.7 C++ Implementation: Relation Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <set>\n#include <string>\n#include <variant>\n#include <functional>\n\nusing Value = std::variant<int, double, std::string>;\n\nstruct Attribute {\n    std::string name;\n    std::string domain; // \"INT\", \"FLOAT\", \"VARCHAR\"\n};\n\nstruct Tuple {\n    std::vector<Value> values;\n    bool operator<(const Tuple& other) const {\n        if (values.size() != other.values.size())\n            return values.size() < other.values.size();\n        for (size_t i = 0; i < values.size(); ++i) {\n            if (values[i] < other.values[i]) return true;\n            if (other.values[i] < values[i]) return false;\n        }\n        return false;\n    }\n};\n\nclass Relation {\nprivate:\n    std::string name;\n    std::vector<Attribute> attrs;\n    std::set<Tuple> tuples;\n\npublic:\n    Relation(std::string n, std::vector<Attribute> a)\n        : name(n), attrs(a) {}\n\n    bool insert(const Tuple& t) {\n        if (t.values.size() != attrs.size()) return false;\n        auto [_, inserted] = tuples.insert(t);\n        return inserted;\n    }\n\n    size_t cardinality() const { return tuples.size(); }\n    size_t degree() const { return attrs.size(); }\n\n    Relation select(std::function<bool(const Tuple&)> pred) const {\n        Relation result(\"SELECT(\" + name + \")\", attrs);\n        for (const auto& t : tuples) {\n            if (pred(t)) result.insert(t);\n        }\n        return result;\n    }\n\n    Relation project(const std::vector<int>& indices) const {\n        std::vector<Attribute> newAttrs;\n        for (int i : indices) newAttrs.push_back(attrs[i]);\n        Relation result(\"PROJ(\" + name + \")\", newAttrs);\n        for (const auto& t : tuples) {\n            Tuple newTuple;\n            for (int i : indices) newTuple.values.push_back(t.values[i]);\n            result.insert(newTuple);\n        }\n        return result;\n    }\n\n    void print() const {\n        std::cout << \"Relation: \" << name << \" (|R|=\" << cardinality()\n                  << \", deg=\" << degree() << \")\\n\";\n        for (const auto& t : tuples) {\n            std::cout << \"  (\";\n            for (size_t i = 0; i < t.values.size(); ++i) {\n                if (i > 0) std::cout << \", \";\n                if (std::holds_alternative<int>(t.values[i]))\n                    std::cout << std::get<int>(t.values[i]);\n                else if (std::holds_alternative<double>(t.values[i]))\n                    std::cout << std::get<double>(t.values[i]);\n                else\n                    std::cout << std::get<std::string>(t.values[i]);\n            }\n            std::cout << \")\\n\";\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "328-python-implementation-relation-structure",
      children: "3.2.8 Python Implementation: Relation Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Tuple as TupleType, Any, Callable, Set, Optional\n\nclass Relation:\n    \"\"\"A relation (table) in the relational model.\"\"\"\n\n    def __init__(self, name: str, attributes: List[TupleType[str, str]]):\n        self.name = name\n        self.attributes = attributes  # [(name, domain), ...]\n        self.tuples: Set[TupleType[Any, ...]] = set()\n\n    def insert(self, values: TupleType[Any, ...]) -> bool:\n        if len(values) != len(self.attributes):\n            raise ValueError(\"Value count doesn't match attribute count\")\n        if values in self.tuples:\n            return False  # duplicate\n        self.tuples.add(values)\n        return True\n\n    def cardinality(self) -> int:\n        return len(self.tuples)\n\n    def degree(self) -> int:\n        return len(self.attributes)\n\n    def select(self, predicate: Callable[[TupleType[Any, ...]], bool]) -> 'Relation':\n        result = Relation(f\"σ({self.name})\", self.attributes)\n        for t in self.tuples:\n            if predicate(t):\n                result.tuples.add(t)\n        return result\n\n    def project(self, attr_indices: List[int]) -> 'Relation':\n        new_attrs = [self.attributes[i] for i in attr_indices]\n        result = Relation(f\"π({self.name})\", new_attrs)\n        for t in self.tuples:\n            result.tuples.add(tuple(t[i] for i in attr_indices))\n        return result\n\n    def rename(self, new_name: str) -> 'Relation':\n        result = Relation(new_name, self.attributes)\n        result.tuples = set(self.tuples)\n        return result\n\n    def union(self, other: 'Relation') -> 'Relation':\n        if self.attributes != other.attributes:\n            raise ValueError(\"Relations must be union-compatible\")\n        result = Relation(f\"{self.name} ∪ {other.name}\", self.attributes)\n        result.tuples = self.tuples | other.tuples\n        return result\n\n    def difference(self, other: 'Relation') -> 'Relation':\n        if self.attributes != other.attributes:\n            raise ValueError(\"Relations must be union-compatible\")\n        result = Relation(f\"{self.name} - {other.name}\", self.attributes)\n        result.tuples = self.tuples - other.tuples\n        return result\n\n    def __str__(self) -> str:\n        header = f\"Relation: {self.name} (|R|={self.cardinality()}, deg={self.degree()})\"\n        rows = [str(t) for t in self.tuples]\n        return header + \"\\n\" + \"\\n\".join(rows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "329-complexity-analysis-of-relation-operations",
      children: "3.2.9 Complexity Analysis of Relation Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg, O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based set insertion; worst case when collision resolution needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Select (full scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = result size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan all n tuples; predicate evaluation per tuple is O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Select (with index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree index reduces search to logarithmic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = unique values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan all tuples; deduplication via set adds overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must combine both sets and deduplicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * m) naive, O(n + m) with hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) or O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based set difference is linear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesian Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every tuple of R combined with every tuple of S"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-keys",
      children: "3.3 Keys"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "331-real-world-analogy-the-passport-system",
      children: "3.3.1 Real-World Analogy: The Passport System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of a country's passport system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Superkey:"
        }), " Any combination of identifiers that uniquely finds a person. (Passport#), (Passport#, Name), (SSN), (SSN, BirthDate) — all are superkeys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Candidate Key:"
        }), " The minimal identifiers. Passport# alone works. SSN alone works. (Passport#, Name) is NOT a candidate key because Name is redundant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary Key:"
        }), " The one chosen as the official identifier. The government chooses Passport# as the primary lookup key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Foreign Key:"
        }), " A visa stamp in your passport references another country's record system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternate Key:"
        }), " SSN is a valid identifier but wasn't chosen as primary — it's an alternate key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composite Key:"
        }), " (Passport#, CountryCode) together uniquely identify you globally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Surrogate Key:"
        }), " An auto-generated internal ID like a database row number that has no real-world meaning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "332-super-key",
      children: "3.3.2 Super Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A set of one or more attributes that uniquely identifies every tuple in a relation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal:"
      }), " ( K \\subseteq attributes(R) ) such that for any two distinct tuples ( t_1, t_2 \\in R ), ( t_1[K] \\neq t_2[K] )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " In STUDENT(sid, name, major, email):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{sid}"
        }), " is a superkey (no two students share an ID)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{email}"
        }), " is a superkey (email is unique)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{sid, name}"
        }), " is a superkey (but name adds no value)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{name}"
        }), " is NOT a superkey (two students can share a name)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Property:"
      }), " Any superset of a superkey is also a superkey."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "333-candidate-key",
      children: "3.3.3 Candidate Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A minimal superkey — no proper subset is a superkey."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal:"
      }), " ( K ) is a candidate key iff:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( K ) is a superkey, AND"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No proper subset ( K' \\subset K ) is a superkey"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step to find candidate keys:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all attributes of the relation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify all functional dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with single attributes — check each for uniqueness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no single attribute is a key, try pairs, then triples, etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove any key that contains another key as a subset"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " In STUDENT(sid, name, email):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{sid}"
        }), " — unique, no subset → candidate key ✓"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{email}"
        }), " — unique, no subset → candidate key ✓"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{name}"
        }), " — not unique → not a candidate key ✗"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Candidate keys: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{sid}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{email}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "334-primary-key",
      children: "3.3.4 Primary Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " One candidate key chosen by the database designer as the principal identifier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stability:"
        }), " Values should never change (e.g., sid is better than email)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimality:"
        }), " Prefer single-attribute keys over composite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-null:"
        }), " Must never be NULL (entity integrity rule)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplicity:"
        }), " Prefer numeric keys over string"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notation:"
      }), " Underline the primary key in the schema: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, name, email)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "335-foreign-key",
      children: "3.3.5 Foreign Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " An attribute (or set of attributes) in one relation that references the primary key of another relation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Establishes relationships between relations. Enforces referential integrity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, name, dept_id)\n                  ^^^^^^^^ FOREIGN KEY REFERENCES DEPARTMENT(dept_id)\n\nDEPARTMENT(dept_id, dept_name, location)\n           ^^^^^^^ PRIMARY KEY\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Referential Integrity Rule:"
      }), " A foreign key value must either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match a primary key value in the referenced relation, OR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be NULL (if the FK allows NULLs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step to add a foreign key:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the parent table (where the PK lives)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the child table (where the FK will go)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure the FK attributes match the PK in number, type, and domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide: allow NULL in FK? (optional relationship vs mandatory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide: ON DELETE CASCADE / SET NULL / RESTRICT"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "336-alternate-key",
      children: "3.3.6 Alternate Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A candidate key that was NOT selected as the primary key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " In STUDENT(sid, name, email):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Primary key: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{sid}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alternate key: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{email}"
        }), " (unique but not chosen as primary)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL equivalent:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNIQUE"
      }), " constraint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "337-composite-key",
      children: "3.3.7 Composite Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A key consisting of two or more attributes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When needed:"
      }), " When no single attribute uniquely identifies a tuple."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " In ENROLLMENT(sid, cid, semester):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{sid, cid, semester}"
        }), " is a composite key (same student can take same course in different semesters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{sid}"
        }), " alone is NOT a key (one student takes many courses)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ENROLLMENT(sid, cid, semester, grade)\n           ^^^^^^^^^^^^^^^^^^^\n           Composite Primary Key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "338-surrogate-key",
      children: "3.3.8 Surrogate Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " An artificial, system-generated key with no real-world meaning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Avoid natural key problems:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Natural keys can change (email, phone number)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Natural keys can be long (URLs, composite keys)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Natural keys may not exist (no universally unique attribute)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CUSTOMER(cust_id, name, email, phone)\n         ^^^^^^^\n         Surrogate key (auto-increment INTEGER or UUID)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "339-keys-comparison-table",
      children: "3.3.9 Keys Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Key Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Uniqueness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Minimality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nullable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Number per Relation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Super Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{sid, name}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Candidate Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{sid}, {email}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (chosen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{sid}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Foreign Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (reference)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{dept_id}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternate Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{email}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (minimal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{sid,cid,semester}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Surrogate Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (artificial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{cust_id}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*Foreign keys may be nullable for optional relationships."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3310-key-detection-algorithm",
      children: "3.3.10 Key Detection Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION find_candidate_keys(R, FDs):\n    // R: relation with attributes A\n    // FDs: set of functional dependencies\n    keys = empty_set\n    FOR subset_size = 1 TO |A|:\n        FOR each subset K OF A with size = subset_size:\n            closure = compute_closure(K, FDs)\n            IF closure == A:  // K is a superkey\n                is_minimal = TRUE\n                FOR each key IN keys:\n                    IF key IS_SUBSET_OF K:\n                        is_minimal = FALSE\n                        BREAK\n                IF is_minimal:\n                    keys += K\n    RETURN keys\n\nFUNCTION compute_closure(attrs, FDs):\n    closure = attrs\n    WHILE changes occur:\n        FOR each FD (X -> Y) IN FDs:\n            IF X IS_SUBSET_OF closure:\n                closure += Y\n    RETURN closure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <set>\n#include <string>\n#include <algorithm>\n\nusing AttributeSet = std::set<std::string>;\nusing FD = std::pair<AttributeSet, AttributeSet>;\n\nAttributeSet computeClosure(AttributeSet attrs, const std::vector<FD>& fds) {\n    AttributeSet closure = attrs;\n    bool changed = true;\n    while (changed) {\n        changed = false;\n        for (const auto& fd : fds) {\n            const auto& lhs = fd.first;\n            const auto& rhs = fd.second;\n            bool lhsSubset = std::includes(closure.begin(), closure.end(),\n                                           lhs.begin(), lhs.end());\n            if (lhsSubset) {\n                for (const auto& attr : rhs) {\n                    if (closure.insert(attr).second) {\n                        changed = true;\n                    }\n                }\n            }\n        }\n    }\n    return closure;\n}\n\nstd::vector<AttributeSet> findCandidateKeys(\n    const AttributeSet& allAttrs, const std::vector<FD>& fds) {\n\n    std::vector<AttributeSet> candidates;\n    std::vector<AttributeSet> attrsList(allAttrs.begin(), allAttrs.end());\n    int n = attrsList.size();\n\n    for (int mask = 1; mask < (1 << n); ++mask) {\n        AttributeSet subset;\n        for (int i = 0; i < n; ++i) {\n            if (mask & (1 << i)) subset.insert(attrsList[i]);\n        }\n\n        AttributeSet closure = computeClosure(subset, fds);\n        if (closure == allAttrs) {\n            bool minimal = true;\n            for (const auto& key : candidates) {\n                if (std::includes(subset.begin(), subset.end(),\n                                  key.begin(), key.end())) {\n                    minimal = false;\n                    break;\n                }\n            }\n            if (minimal) {\n                // Remove any existing candidates that contain subset\n                candidates.erase(\n                    std::remove_if(candidates.begin(), candidates.end(),\n                        [&](const AttributeSet& k) {\n                            return std::includes(k.begin(), k.end(),\n                                                 subset.begin(), subset.end());\n                        }),\n                    candidates.end());\n                candidates.push_back(subset);\n            }\n        }\n    }\n    return candidates;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Set, List, Tuple, FrozenSet\n\ndef compute_closure(attrs: Set[str], fds: List[Tuple[Set[str], Set[str]]]) -> Set[str]:\n    closure = set(attrs)\n    changed = True\n    while changed:\n        changed = False\n        for lhs, rhs in fds:\n            if lhs.issubset(closure):\n                for attr in rhs:\n                    if attr not in closure:\n                        closure.add(attr)\n                        changed = True\n    return closure\n\ndef find_candidate_keys(all_attrs: Set[str],\n                        fds: List[Tuple[Set[str], Set[str]]]) -> List[Set[str]]:\n    attrs_list = list(all_attrs)\n    n = len(attrs_list)\n    candidates = []\n\n    for mask in range(1, 1 << n):\n        subset = {attrs_list[i] for i in range(n) if mask & (1 << i)}\n        closure = compute_closure(subset, fds)\n\n        if closure == all_attrs:  # It's a superkey\n            minimal = True\n            for key in candidates:\n                if key.issubset(subset):\n                    minimal = False\n                    break\n            if minimal:\n                candidates = [k for k in candidates if not subset.issuperset(k)]\n                candidates.append(subset)\n\n    return candidates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3311-complexity-analysis-for-key-detection",
      children: "3.3.11 Complexity Analysis for Key Detection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enumerate subsets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "There are 2^n possible attribute subsets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute closure per subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each closure iterates over f FDs; n rounds worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimality check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare each new key against k existing candidates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total worst-case:"
      }), " O(2^n * n * f) where n = number of attributes, f = number of FDs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why exponential:"
      }), " Finding candidate keys is NP-hard in general (the hypergraph transversal problem). In practice, n is small (typically < 20 attributes per relation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case:"
      }), " If no subset produces full closure (incomplete FD set), no candidate key exists — the relation cannot exist in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-integrity-constraints",
      children: "3.4 Integrity Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrity constraints ensure the correctness and consistency of data. They are rules that every instance of the database must satisfy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "341-domain-constraints",
      children: "3.4.1 Domain Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Each attribute value must be from its declared domain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE Student (\n    sid INTEGER PRIMARY KEY,\n    name VARCHAR(50),\n    age INTEGER CHECK (age >= 16 AND age <= 120),\n    gender CHAR(1) CHECK (gender IN ('M', 'F', 'O'))\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation:"
      }), " Inserting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "age = -5"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gender = 'X'"
      }), " would violate domain constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "342-entity-integrity",
      children: "3.4.2 Entity Integrity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " No attribute that is part of the primary key can be NULL."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " If the primary key were NULL, the tuple would not be uniquely identifiable — the definition of \"key\" would break."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE Student (\n    sid INTEGER PRIMARY KEY,   -- sid cannot be NULL\n    name VARCHAR(50)\n);\n-- INSERT INTO Student VALUES (NULL, 'Alice'); -- REJECTED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "343-referential-integrity",
      children: "3.4.3 Referential Integrity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " A foreign key value must either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match a primary key value in the referenced relation, OR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be entirely NULL (if all FK attributes allow NULL)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE Student (\n    sid INTEGER PRIMARY KEY,\n    dept_id INTEGER REFERENCES Department(dept_id)\n);\n-- INSERT INTO Student VALUES (1, 'CS101'); -- REJECTED if no Dept with id 'CS101'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Referential actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CASCADE:"
        }), " Delete/update parent, propagate to child"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SET NULL:"
        }), " Set child FK to NULL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RESTRICT/NO ACTION:"
        }), " Reject delete/update if children exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SET DEFAULT:"
        }), " Set child FK to a default value"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "344-semantic-integrity-business-rules",
      children: "3.4.4 Semantic Integrity (Business Rules)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Application-specific rules enforced via CHECK constraints or triggers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"An employee's salary cannot exceed their manager's salary.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"A student's GPA must be between 0.0 and 4.0.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"End date must be after start date.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RULE: salary_check\n  FOR EACH Employee e, Employee m\n  WHERE e.manager_id = m.emp_id\n  CHECK: e.salary <= m.salary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-relational-algebra",
      children: "3.5 Relational Algebra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Relational algebra is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "procedural query language"
      }), " — it describes ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how"
      }), " to compute a result by applying operations to relations. Every operation takes one or two relations as input and produces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new relation"
      }), " as output (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "closure property"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core operators:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic (unary)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection (σ), Projection (π), Rename (ρ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic (binary)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union (∪), Set Difference (−), Cartesian Product (×)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Derived (binary)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection (∩), Join (⨝), Division (÷)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "351-real-world-analogy-recipe-instructions",
      children: "3.5.1 Real-World Analogy: Recipe Instructions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Relational algebra is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recipe"
      }), " — it gives step-by-step instructions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Take all students\" (relation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Filter to those with GPA > 3.5\" (selection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Keep only their names\" (projection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Combine with their course enrollments\" (join)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Serve the result\" (final relation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SQL, by contrast, is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "meal order"
      }), " — \"Give me the names of high-GPA students and their courses.\" The database figures out the steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "352-select-operation-σ",
      children: "3.5.2 SELECT Operation (σ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Filter rows (tuples) based on a condition."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "σ<predicate>(R)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with relation R"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each tuple t in R, evaluate predicate P(t)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If P(t) is TRUE, include t in output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If P(t) is FALSE or NULL, exclude t"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find students with GPA > 3.5:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "σ<GPA > 3.5>(STUDENT)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
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
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ (1, Alice, CS, 3.8), (2, Bob, Math, 3.2), (3, Charlie, CS, 3.5), (4, Diana, CS, 3.9) }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate t₁: GPA=3.8 > 3.5?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE → Keep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate t₂: GPA=3.2 > 3.5?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FALSE → Drop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate t₃: GPA=3.5 > 3.5?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FALSE → Drop (not strictly greater)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate t₄: GPA=3.9 > 3.5?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE → Keep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ (1, Alice, CS, 3.8), (4, Diana, CS, 3.9) }"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commutative: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "σ<cond1>(σ<cond2>(R)) = σ<cond2>(σ<cond1>(R))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cascading: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "σ<cond1>(σ<cond2>(R)) = σ<cond1 ∧ cond2>(R)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Idempotent: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "σ<cond>(σ<cond>(R)) = σ<cond>(R)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Relation Relation::select(std::function<bool(const Tuple&)> pred) const {\n    Relation result(\"σ(\" + name + \")\", attrs);\n    for (const auto& t : tuples) {\n        if (pred(t)) result.insert(t);\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def select(relation: Relation, predicate) -> Relation:\n    result = Relation(f\"σ({relation.name})\", relation.attributes)\n    for t in relation.tuples:\n        if predicate(t):\n            result.tuples.add(t)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) time, O(k) space where n = |R|, k = number of tuples satisfying predicate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "353-project-operation-π",
      children: "3.5.3 PROJECT Operation (π)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Select specific columns (attributes). Remove duplicates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<attribute_list>(R)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the attributes to keep"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each tuple, extract only those attribute values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove any duplicate tuples in the result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Get names and majors:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<name, major>(STUDENT)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intermediate Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1, Alice, CS, 3.8), (2, Bob, Math, 3.2), (3, Charlie, CS, 3.5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full relation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract name, major"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, CS), (Bob, Math), (Charlie, CS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed sid, gpa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Alice, CS), (Bob, Math), (Charlie, CS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No dups in this case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ (Alice, CS), (Bob, Math), (Charlie, CS) }"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " If another student also named Alice in CS, duplicates would be removed. This is why projection can reduce cardinality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      }), " (see project() in section 3.2.7)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      }), " (see project() in section 3.2.8)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) to scan, O(m) for dedup where m = unique output tuples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "354-rename-operation-ρ",
      children: "3.5.4 RENAME Operation (ρ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Rename a relation or its attributes. Essential for self-joins and disambiguation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ρ<new_name>(R)"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ρ<new_name(attr1, ..., attrN)>(R)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ρ<EMP(empID, empName)>(EMPLOYEE)"
      }), " renames both the relation and its attributes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage in queries:"
      }), " Allows joining a table with itself:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ρ<E1>(EMPLOYEE) ⨝<E1.manager_id = E2.emp_id> ρ<E2>(EMPLOYEE)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finds employee-manager pairs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Relation Relation::rename(const std::string& newName,\n                           const std::vector<std::string>& newAttrNames) const {\n    std::vector<Attribute> newAttrs;\n    for (size_t i = 0; i < attrs.size(); ++i) {\n        std::string n = (i < newAttrNames.size()) ? newAttrNames[i] : attrs[i].name;\n        newAttrs.push_back({n, attrs[i].domain});\n    }\n    Relation result(newName, newAttrs);\n    result.tuples = tuples;  // Copy all tuples\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "355-union-operation-",
      children: "3.5.5 UNION Operation (∪)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Combine tuples from two relations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Relations must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "union-compatible"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same number of attributes (same degree)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corresponding attributes must be from the same domain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ∪ S"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify union-compatibility (same degree, matching domains)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take all tuples from R"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add all tuples from S (set semantics removes duplicates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find employees who are managers OR engineers:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<emp_id>(MANAGER) ∪ π<emp_id>(ENGINEER)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGER emp_ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 102, 104}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENGINEER emp_ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{102, 103, 105}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 102, 103, 104, 105}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 102, 103, 104, 105}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n + m) with hash sets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "356-set-difference-operation-",
      children: "3.5.6 SET DIFFERENCE Operation (−)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Find tuples in R that are NOT in S."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R − S"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Relations must be union-compatible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find employees who are NOT managers:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<emp_id>(EMPLOYEE) − π<emp_id>(MANAGER)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMPLOYEE ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 102, 103, 104, 105}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGER ids"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 102}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove 101 from EMPLOYEE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{102, 103, 104, 105}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove 102 from remaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{103, 104, 105}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{103, 104, 105}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n + m) with hash sets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "357-cartesian-product-operation-",
      children: "3.5.7 CARTESIAN PRODUCT Operation (×)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Combine every tuple of R with every tuple of S."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R × S"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " If R has n tuples and S has m tuples, result has n × m tuples. This is expensive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Combine all students with all courses (useful before selection):\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT × COURSE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "R (STUDENT)"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "S (COURSE)"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "R × S (4 × 3 = 12 tuples)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n × m) time and space — never use raw Cartesian product without a selection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "358-intersection-operation-",
      children: "3.5.8 INTERSECTION Operation (∩)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition (derived):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ∩ S = R − (R − S)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find tuples in R not in S: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R − S"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subtract those from R: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R − (R − S)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result is tuples in both R and S"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative derivation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ∩ S = S − (S − R)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Employees who are BOTH managers and engineers:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<emp_id>(MANAGER) ∩ π<emp_id>(ENGINEER)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MANAGER ids M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 102, 104}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENGINEER ids E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{102, 103, 105}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M − E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{101, 104}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M − (M − E) = M − {101, 104}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{102}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M ∩ E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{102}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n + m) via hash sets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "359-relational-algebra-operations-comparison-table",
      children: "3.5.9 Relational Algebra Operations Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Arity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unary/Binary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Removes Dups?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Set Semantics?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Select"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (filters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ρ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Union"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intersection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Theta Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝_θ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Division"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "÷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-join-operations",
      children: "3.6 Join Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Joins combine tuples from two relations based on a condition. They are the most important derived operations — the heart of multi-table querying."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "361-theta-join-_θ",
      children: "3.6.1 Theta Join (⨝_θ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⨝_θ S = σ_θ(R × S)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Cartesian product followed by a selection on condition θ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute R × S (all pairs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply selection σ_θ to keep only pairs satisfying θ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " R ⨝_{R.A < S.B} S"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(|R| × |S|) for the product, then a scan. Never implement as product-then-select — always push the selection into the join."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "362-equi-join",
      children: "3.6.2 Equi Join"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A theta join where the condition θ contains only equality comparisons (=)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⨝_{R.sid = S.sid} S"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key distinction from Natural Join:"
      }), " Equi join keeps both join attributes (R.sid and S.sid appear in output). Natural join removes the duplicate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "363-natural-join-",
      children: "3.6.3 Natural Join (⨝)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " An equi join over ", (0,jsx_runtime.jsx)(_components.em, {
        children: "all"
      }), " attributes with the same name, with duplicate columns removed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic matching:"
      }), " No explicit join condition. The system finds all pairs of attributes with the same name in R and S, and joins on their equality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify common attributes: C = attr_names(R) ∩ attr_names(S)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Form join condition: ∧_{c ∈ C} R.c = S.c"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute equi join on condition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove the duplicate S.C columns (keep only one copy of each common attribute)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, name, dept_id)\nDEPARTMENT(dept_id, dept_name)\nSTUDENT ⨝ DEPARTMENT → (sid, name, dept_id, dept_name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STUDENT"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "DEPARTMENT"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Natural Join"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dept_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dept_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dept_name"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "sid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case:"
      }), " If no common attributes, Natural Join degenerates to Cartesian Product."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "364-outer-joins",
      children: "3.6.4 Outer Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Outer joins preserve tuples from one or both relations that don't have matching tuples. Missing values become NULL."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LEFT OUTER JOIN (⨝_L):"
      }), " Preserves all tuples from left relation R."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R = {(1, A), (2, B)}\nS = {(1, X), (3, Y)}\nR ⨝_L S = {(1, A, X), (2, B, NULL)}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RIGHT OUTER JOIN (⨝_R):"
      }), " Preserves all tuples from right relation S."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⨝_R S = {(1, A, X), (3, NULL, Y)}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FULL OUTER JOIN (⨝_F):"
      }), " Preserves all tuples from both relations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⨝_F S = {(1, A, X), (2, B, NULL), (3, NULL, Y)}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step for Left Outer Join:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute natural join: J = R ⨝ S"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find unmatched R tuples: U = R − π_attrs(R)(J)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend U with NULLs for S's attributes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: J ∪ extended_U"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table — Left Outer Join:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ⨝ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1, A, X)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π_sid(R) − π_sid(J)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get tuples: σ_sid=2(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(2, B)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extend with NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(2, B, NULL)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J ∪ Extended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1, A, X), (2, B, NULL)}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "365-semi-join-",
      children: "3.6.5 Semi Join (⋉)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Returns tuples from R that have at least one matching tuple in S. Like a join but only returns R's attributes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⋉ S"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find students who are enrolled in at least one course:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT ⋉ ENROLLED"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key property:"
      }), " Semi join is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "not"
      }), " associative. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⋉ (S ⋉ T) ≠ (R ⋉ S) ⋉ T"
      }), " in general."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Can be expressed as:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⋉ S = π_attrs(R)(R ⨝ S)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "366-anti-join-",
      children: "3.6.6 Anti Join (▷)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Returns tuples from R that have NO matching tuple in S."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ▷ S"
      }), " (also written as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ⋉̅ S"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find students not enrolled in any course:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT ▷ ENROLLED"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Can be expressed as:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R ▷ S = R − π_attrs(R)(R ⨝ S)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = STUDENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1, Alice), (2, Bob), (3, Charlie)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = ENROLLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1, CS101), (1, CS102), (2, CS101)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ⨝ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1, Alice, CS101), (1, Alice, CS102), (2, Bob, CS101)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π(R ⨝ S) over R attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1, Alice), (2, Bob)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R − π(R ⨝ S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(3, Charlie)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ▷ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(3, Charlie)}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "367-self-join",
      children: "3.6.7 Self Join"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Joining a relation with itself. Requires renaming to disambiguate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Find pairs of employees where one earns more than the other:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ρ<E1>(EMPLOYEE) ⨝_{E1.salary < E2.salary} ρ<E2>(EMPLOYEE)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create two copies via rename: ρ<E1>(EMPLOYEE), ρ<E2>(EMPLOYEE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Join on condition involving attributes from both copies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project desired attributes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "368-join-types-comparison-table",
      children: "3.6.8 Join Types Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Join Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duplicate Columns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preserves Unmatched"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Theta"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any predicate θ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝_θ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝_{=}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common join"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality on same-named attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple FK joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Left Outer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality on same-named attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⟕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All from A, match B if exists\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Right Outer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality on same-named attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⟖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All from B, match A if exists\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Outer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality on same-named attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both sides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⟗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All from both, match if possible\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality on same-named attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R's attrs only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Exists\" subqueries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality on same-named attrs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R's attrs only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R's unmatched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "▷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Not exists\" subqueries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with aliases)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝ via ρ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical/recursive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "369-c-join-implementation",
      children: "3.6.9 C++ Join Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Natural join\nRelation naturalJoin(const Relation& R, const Relation& S) {\n    // Find common attribute names\n    std::vector<int> commonR, commonS;\n    for (size_t i = 0; i < R.degree(); ++i) {\n        for (size_t j = 0; j < S.degree(); ++j) {\n            if (R.getAttrs()[i].name == S.getAttrs()[j].name) {\n                commonR.push_back(i);\n                commonS.push_back(j);\n            }\n        }\n    }\n\n    // Build output schema\n    std::vector<Attribute> outAttrs = R.getAttrs();\n    for (size_t j = 0; j < S.degree(); ++j) {\n        bool duplicate = false;\n        for (int c : commonS) {\n            if (c == (int)j) { duplicate = true; break; }\n        }\n        if (!duplicate) outAttrs.push_back(S.getAttrs()[j]);\n    }\n\n    Relation result(\"R ⨝ S\", outAttrs);\n\n    for (const auto& tR : R.getTuples()) {\n        for (const auto& tS : S.getTuples()) {\n            bool match = true;\n            for (size_t k = 0; k < commonR.size(); ++k) {\n                if (tR.values[commonR[k]] != tS.values[commonS[k]]) {\n                    match = false;\n                    break;\n                }\n            }\n            if (match) {\n                Tuple outTuple;\n                outTuple.values = tR.values;\n                for (size_t j = 0; j < S.degree(); ++j) {\n                    bool dup = false;\n                    for (int c : commonS) { if (c == (int)j) dup = true; }\n                    if (!dup) outTuple.values.push_back(tS.values[j]);\n                }\n                result.insert(outTuple);\n            }\n        }\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3610-python-join-implementation",
      children: "3.6.10 Python Join Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def natural_join(R: Relation, S: Relation) -> Relation:\n    \"\"\"Natural join: equijoin on common attribute names with dedup.\"\"\"\n    # Find common attribute names by index\n    r_attrs = {name: idx for idx, (name, _) in enumerate(R.attributes)}\n    s_attrs = {name: idx for idx, (name, _) in enumerate(S.attributes)}\n    common = [name for name in r_attrs if name in s_attrs]\n\n    # Build output schema\n    out_attrs = R.attributes.copy()\n    seen = set(name for name, _ in R.attributes)\n    for name, domain in S.attributes:\n        if name not in seen:\n            out_attrs.append((name, domain))\n            seen.add(name)\n\n    result = Relation(f\"{R.name} ⨝ {S.name}\", out_attrs)\n\n    for tR in R.tuples:\n        for tS in S.tuples:\n            # Check equality on common attributes\n            if all(tR[r_attrs[c]] == tS[s_attrs[c]] for c in common):\n                out = list(tR)\n                for idx, (name, _) in enumerate(S.attributes):\n                    if name not in r_attrs:\n                        out.append(tS[idx])\n                result.tuples.add(tuple(out))\n\n    return result\n\ndef left_outer_join(R: Relation, S: Relation) -> Relation:\n    \"\"\"Left outer join.\"\"\"\n    inner = natural_join(R, S)\n    s_only_attrs = [(n, d) for n, d in S.attributes\n                    if n not in {n2 for n2, _ in R.attributes}]\n\n    # Find unmatched R tuples\n    r_proj_attrs = list(range(len(R.attributes)))\n    r_inner = inner.project(r_proj_attrs)\n\n    unmatched = R.difference(r_inner.rename(\"temp\"))\n\n    null_extended = Relation(\"extended\", inner.attributes)\n    for t in unmatched.tuples:\n        out = list(t)\n        out.extend([None] * len(s_only_attrs))\n        null_extended.tuples.add(tuple(out))\n\n    return inner.union(null_extended.rename(\"result\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3611-complexity-analysis-for-joins",
      children: "3.6.11 Complexity Analysis for Joins"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Join Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested Loop Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each tuple in R, scan all of S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hash on S, probe with R tuples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sort-Merge Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n + m log m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort both, then merge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index Nested Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × log m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use B-tree on S for each R tuple"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why hash join is usually fastest:"
      }), " It avoids the sorting step. Build a hash table on the smaller relation, then scan the larger one probing the hash table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested Loop: O(1) extra space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hash Join: O(min(|R|, |S|)) for hash table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort-Merge: O(n + m) for external sort buffers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Joins:"
      })
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
              children: "NULL in join attribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not equal to anything (even another NULL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ_{R.a = S.a} skips NULL-NULL pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No common attributes (natural join)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degenerates to Cartesian product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R(a,b) ⨝ S(c,d) → R × S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate join values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All combinations appear in output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R={(1),(1)} ⨝ S={(1),(1)} → 4 tuples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty relation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result is empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = ∅ → R ⨝ S = ∅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All tuples match"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result = Cartesian product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R.sid = S.sid covers all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Considerations for Join Algorithms:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any condition, low overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n×m) worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest for equi-joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for equality, needs memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sort-Merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for large sorted data, range joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting cost, not incremental"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index NL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Great when S is indexed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useless without index"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-division-operation-",
      children: "3.7 Division Operation (÷)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The division operation answers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"all\" queries"
      }), ": \"Find X that are associated with ALL Y.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "371-purpose-and-formal-definition",
      children: "3.7.1 Purpose and Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " R ÷ S returns tuples from R that are associated with ", (0,jsx_runtime.jsx)(_components.em, {
        children: "every"
      }), " tuple of S."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S's attributes must be a subset of R's attributes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result attributes = R's attributes − S's attributes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notation:"
      }), " Let Z = attrs(R) − attrs(S). Then:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R ÷ S = { t[Z] | t ∈ R ∧ ∀ s ∈ S, ∃ t' ∈ R such that t'[Z] = t[Z] ∧ t'[attrs(S)] = s }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In English: Find all Z-values in R that appear paired with every s in S."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "372-real-world-analogy-all-you-can-eat-buffet",
      children: "3.7.2 Real-World Analogy: All-You-Can-Eat Buffet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have a menu of dishes (S = {pizza, pasta, salad}). You want customers (R = customer × dish ordered) who ordered EVERY dish. A customer who ordered pizza and pasta but not salad → NOT in the result. Only customers who ordered all three are included."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "373-step-by-step-procedure",
      children: "3.7.3 Step-by-Step Procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Given:"
      }), " R(sid, cid) — which students took which courses. S(cid) — all courses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Find students who took ALL courses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Project R onto the non-S attributes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sid>(R)"
      }), " → all student IDs\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Compute ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sid>(R) × S"
      }), " → all possible (student, course) pairs\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Subtract R from the above → (student, course) pairs that DON'T exist:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "(π<sid>(R) × S) − R"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Project onto sid: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sid>((π<sid>(R) × S) − R)"
      }), " → students missing at least one course\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Subtract from all students: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sid>(R) − π<sid>((π<sid>(R) × S) − R)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final expression:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R ÷ S = π<Z>(R) − π<Z>((π<Z>(R) × S) − R)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "374-dry-run-trace-table",
      children: "3.7.4 Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Input data:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R (ENROLLED): sid = {1, 1, 1, 2, 2, 3}\n              cid = {C1, C2, C3, C1, C2, C1}\nS (ALL COURSES): cid = {C1, C2, C3}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
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
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z = {sid}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "attrs(R) − attrs(S)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sid>(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1, 2, 3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All student IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sid>(R) × S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,C1),(1,C2),(1,C3),(2,C1),(2,C2),(2,C3),(3,C1),(3,C2),(3,C3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All possible enrollments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Step 3) − R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,C3),(3,C2),(3,C3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing enrollments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sid>(Step 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2, 3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Students missing at least one course"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sid>(R) − Step 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Students missing zero courses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ÷ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only student 1 took ALL courses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Student 1: took C1, C2, C3 → ✓ ALL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Student 2: took C1, C2 → ✗ missing C3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Student 3: took C1 only → ✗ missing C2, C3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "375-alternative-expression",
      children: "3.7.5 Alternative Expression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Division can also be expressed using set difference and rename:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "R ÷ S = π<Z>(R) − π<Z>((π<Z>(R) × S) − R)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where Z = attrs(R) − attrs(S)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "376-c-division-implementation",
      children: "3.7.6 C++ Division Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Relation division(const Relation& R, const Relation& S) {\n    // Determine Z = attrs(R) - attrs(S)\n    std::vector<int> zIndices;\n    std::set<std::string> sAttrNames;\n    for (const auto& a : S.getAttrs()) sAttrNames.insert(a.name);\n\n    for (size_t i = 0; i < R.degree(); ++i) {\n        if (sAttrNames.find(R.getAttrs()[i].name) == sAttrNames.end()) {\n            zIndices.push_back(i);\n        }\n    }\n\n    // Step 1: π<Z>(R)\n    Relation piZ_R = R.project(zIndices);\n\n    // Step 2: π<Z>(R) × S (Cartesian product needs compatible schemas)\n    // In practice, we check that S's attrs are subset of R's attrs\n\n    // Step 3: (π<Z>(R) × S) − R\n    // Step 4: π<Z> of step 3\n    // Step 5: π<Z>(R) − step 4\n\n    // Simplified direct implementation:\n    // For each Z-value in R, check it appears with every S tuple\n    Relation result(\"R ÷ S\", {R.getAttrs()[i] for i in zIndices});\n\n    // Build index: Z-value -> set of S-tuples it pairs with\n    std::map<Tuple, std::set<Tuple>> pairs;\n    for (const auto& t : R.getTuples()) {\n        Tuple zPart;\n        Tuple sPart;\n        int zi = 0, si = 0;\n        for (size_t i = 0; i < R.degree(); ++i) {\n            if (sAttrNames.find(R.getAttrs()[i].name) != sAttrNames.end()) {\n                // This is an S attribute\n                if (si < (int)t.values.size()) {\n                    // Build sPart\n                }\n                si++;\n            } else {\n                if (zi < (int)t.values.size()) {\n                    // Build zPart\n                }\n                zi++;\n            }\n        }\n        // Simplified: in production, handle the splitting properly\n    }\n\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "377-python-division-implementation",
      children: "3.7.7 Python Division Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def division(R: Relation, S: Relation) -> Relation:\n    \"\"\"\n    R ÷ S: Find Z-values in R associated with ALL S tuples.\n    Z = attrs(R) - attrs(S)\n    \"\"\"\n    # Determine Z indices (attributes in R but not in S)\n    s_attr_names = {name for name, _ in S.attributes}\n    z_indices = [i for i, (name, _) in enumerate(R.attributes)\n                 if name not in s_attr_names]\n    s_indices = [i for i, (name, _) in enumerate(R.attributes)\n                 if name in s_attr_names]\n\n    if not s_indices:\n        raise ValueError(\"S's attributes must be a subset of R's attributes\")\n\n    # Build mapping: Z-value → set of S-values it pairs with\n    from collections import defaultdict\n    z_to_s_pairs = defaultdict(set)\n\n    for t in R.tuples:\n        z_key = tuple(t[i] for i in z_indices)\n        s_val = tuple(t[i] for i in s_indices)\n        z_to_s_pairs[z_key].add(s_val)\n\n    # Set of all S tuples\n    all_s_tuples = set(S.tuples)\n\n    # Keep Z-values that pair with ALL S tuples\n    z_attrs = [R.attributes[i] for i in z_indices]\n    result = Relation(f\"{R.name} ÷ {S.name}\", z_attrs)\n\n    for z_val, paired_s in z_to_s_pairs.items():\n        if paired_s == all_s_tuples:\n            result.tuples.add(z_val)\n\n    return result\n\n\n# Example usage\nR = Relation(\"ENROLLED\", [(\"sid\", \"INT\"), (\"cid\", \"VARCHAR\")])\nR.tuples = {(1, \"C1\"), (1, \"C2\"), (1, \"C3\"),\n            (2, \"C1\"), (2, \"C2\"),\n            (3, \"C1\")}\n\nS = Relation(\"COURSES\", [(\"cid\", \"VARCHAR\")])\nS.tuples = {(\"C1\",), (\"C2\",), (\"C3\",)}\n\nresult = division(R, S)\nprint(result)  # Should show only sid=1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "378-complexity-analysis-for-division",
      children: "3.7.8 Complexity Analysis for Division"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let |R| = n, |S| = m, |Z| = k (distinct Z-values)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build Z→S map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pass through R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store S tuples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read all of S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare each Z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k × m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each Z, check against all S tuples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k × m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically dominated by k × m"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space complexity:"
      }), " O(n + m) for the hash maps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
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
              children: "S = ∅"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ÷ ∅ = π_Z(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "By convention, all Z-values qualify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R = ∅"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result is empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data to divide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No Z-values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ÷ S = {⟨⟩} or ∅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result is a single empty tuple if all S exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "S has tuples not in R"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works normally — those S tuples are part of \"all\""
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate S tuples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set semantics removes duplicates naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "379-ad-table-for-division",
      children: "3.7.9 A&D Table for Division"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answers \"all\" queries directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely needed; confusing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based O(n + k×m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't use standard indexes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-10 lines of real code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-prone to get right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL alternative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No direct SQL ÷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use NOT EXISTS or GROUP BY/HAVING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-relational-calculus",
      children: "3.8 Relational Calculus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Relational calculus is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "declarative"
      }), " query language — you specify ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what"
      }), " to retrieve, not ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how"
      }), " to compute it. The database system figures out the execution plan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "381-tuple-relational-calculus-trc",
      children: "3.8.1 Tuple Relational Calculus (TRC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ t | CONDITION(t) }"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The set of all tuples t satisfying CONDITION(t)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Building blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tuple variable:"
        }), " t ranges over tuples of a relation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Condition:"
        }), " Predicate involving tuple attributes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantifiers:"
        }), " ∃ (there exists), ∀ (for all)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connectors:"
        }), " ∧ (AND), ∨ (OR), ¬ (NOT), ⇒ (implies)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Find students with GPA > 3.5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ t | t ∈ STUDENT ∧ t.gpa > 3.5 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step to write a TRC query:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the tuple variable and its relation: t ∈ R"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add selection conditions: t.attr op value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add join conditions using ∃: ∃ e ∈ ENROLLED (e.sid = t.sid ∧ ...)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add \"all\" conditions using ∀ ... ⇒ ..."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Find names of students in courses taught by Dr. Smith:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ s.name | s ∈ STUDENT ∧ ∃ e ∈ ENROLLED (e.sid = s.sid ∧\n           ∃ c ∈ COURSE (c.cid = e.cid ∧ c.instructor = 'Dr. Smith')) }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Find students who take ALL courses (using ∀):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ t.sid | t ∈ ENROLLED ∧ ∀ c ∈ COURSE (∃ e ∈ ENROLLED (e.sid = t.sid ∧ e.cid = c.cid))}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "382-domain-relational-calculus-drc",
      children: "3.8.2 Domain Relational Calculus (DRC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ <a1, ..., an> | CONDITION(a1, ..., an) }"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "domain variables"
      }), " (individual values) instead of tuple variables. Each variable ranges over a domain rather than over a relation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Find student IDs and names:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ <i, n> | ∃ m, g (<i, n, m, g> ∈ STUDENT) }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Find names of CS students with GPA > 3.5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ <n> | ∃ i, m, g (<i, n, m, g> ∈ STUDENT ∧ m = 'CS' ∧ g > 3.5) }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Find students in Dr. Smith's courses (DRC):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ <n> | ∃ i, m, g (<i, n, m, g> ∈ STUDENT) ∧\n        ∃ c, t, cr (<c, t, cr> ∈ COURSE ∧ t = 'Dr. Smith') ∧\n        ∃ sem, gr (<i, c, sem, gr> ∈ ENROLLED) }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step to convert TRC to DRC:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace each tuple variable with individual domain variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace t.attr with the corresponding domain variable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add the membership condition: <domain_vars> ∈ Relation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjust quantifiers: ∃ ranges over the domain vars of the relation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "383-safety-of-relational-calculus-expressions",
      children: "3.8.3 Safety of Relational Calculus Expressions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Some calculus expressions can produce infinite results."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unsafe example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ t | ¬(t ∈ STUDENT) }"
      }), " — the set of ALL tuples NOT in STUDENT. This includes every conceivable tuple not in the database — infinite!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe expression rule:"
      }), " All values in the result must appear in the database (or be constants in the query). This is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "domain independence"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A TRC expression is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "safe"
      }), " if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It doesn't produce values not in the active domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every ∀-quantified variable is range-restricted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every ¬-condition can be evaluated finitely"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "384-ra-vs-rc-vs-sql-comparison",
      children: "3.8.4 RA vs RC vs SQL Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relational Algebra"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relational Calculus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paradigm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mostly declarative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What you write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How to compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What you want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What you want (with some how)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (operators only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tuple/domain variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range variables (aliases)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∃, ∀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS, NOT EXISTS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set ops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∪, −, ×, ∩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical ∧, ∨, ¬"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNION, EXCEPT, CROSS JOIN, INTERSECT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subqueries, CTEs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimizer role"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User plans the steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System plans all steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System optimizes the query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Turing complete?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (relational complete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (if safe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with extensions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equivalence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algebra = Calculus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculus = Algebra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL can express both"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational Completeness:"
      }), " A language is relationally complete if it can express every query expressible in relational algebra. Both TRC and DRC are relationally complete. SQL (without recursion) is also relationally complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "385-query-equivalence-examples",
      children: "3.8.5 Query Equivalence Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Find names of students enrolled in CS101."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "π<name>(σ<cid='CS101'>(ENROLLED) ⨝ STUDENT)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TRC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`{ s.name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DRC"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["`{ ", (0,jsx_runtime.jsx)(_components.n, {})]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT s.name FROM Student s WHERE s.sid IN (SELECT e.sid FROM Enrolled e WHERE e.cid = 'CS101')"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-relational-algebra-equivalences",
      children: "3.9 Relational Algebra Equivalences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Understanding equivalences is crucial for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "query optimization"
      }), ". The database query optimizer uses these rules to transform your query into a faster equivalent form."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "391-fundamental-equivalence-rules",
      children: "3.9.1 Fundamental Equivalence Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Helps"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascading Selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ_c1(σ_c2(R)) = σ_{c1 ∧ c2}(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine multiple filters into one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Commuting Selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ_c1(σ_c2(R)) = σ_c2(σ_c1(R))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder for earlier filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cascading Projection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π_A(π_B(R)) = π_A(R) if A ⊆ B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove redundant projections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection + Projection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π_A(σ_c(R)) = σ_c(π_A(R)) if c involves only A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push project before select"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection over Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ_c(R × S) = σ_c(R) × S if c involves only R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce product size early"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection over Union"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ_c(R ∪ S) = σ_c(R) ∪ σ_c(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push select into both branches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Projection over Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π_{A∪B}(R × S) = π_A(R) × π_B(S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce columns before product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection over Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ_c(R ⨝ S) = σ_c(R) ⨝ S if c involves only R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce tuples before join"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join Commutativity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ⨝ S = S ⨝ R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose smaller as inner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Join Associativity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(R ⨝ S) ⨝ T = R ⨝ (S ⨝ T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose join order"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "392-why-equivalences-matter-example",
      children: "3.9.2 Why Equivalences Matter: Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original query (naive):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "π<name>(σ<gpa > 3.5>(STUDENT ⨝ ENROLLED))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimized (using equivalences):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push selection into STUDENT: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "π<name>((σ<gpa>3.5>(STUDENT)) ⨝ ENROLLED)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce STUDENT rows before join — fewer tuple comparisons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "With proper indexes, the optimizer may find an even better plan"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Without optimization:"
      }), " Join 10,000 students × 50,000 enrollments, then filter\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "With optimization:"
      }), " Filter 10,000 → 2,000 students, then join 2,000 × 50,000"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Saving:"
      }), " 80% fewer join comparisons."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "310-interview-corner",
      children: "3.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3101-relational-algebra-vs-sql",
      children: "3.10.1 Relational Algebra vs SQL"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relational Algebra"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nature"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal mathematical language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical industrial language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-level operator composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-level declarative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User specifies execution order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS decides execution plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set semantics (no duplicates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bag semantics (duplicates allowed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nulls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No concept of NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL is a real value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grouping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No aggregate operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY, HAVING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not expressible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WITH RECURSIVE (SQL:1999)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Turing complete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with extensions)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Question:"
      }), " \"Write this SQL query in relational algebra.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SQL: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT sname FROM Student WHERE sid IN (SELECT sid FROM Enrolled WHERE grade = 'A')"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RA: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sname>(σ<grade='A'>(Enrolled) ⨝ Student)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3102-codds-12-rules",
      children: "3.10.2 Codd's 12 Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "E.F. Codd defined 12 rules that a database system must satisfy to be considered truly relational. Key rules:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Violation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0. Foundation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use relational capabilities exclusively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixing relational and navigational"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1. Information"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All data in tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata also in tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2. Guaranteed Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every value accessible by table + PK + column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some systems required navigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3. NULL Handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic treatment of missing data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some treated NULL as zero or empty string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4. Active Catalog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database catalog is itself relational"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sys.tables"
            }), " as a table"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5. Sublanguage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one language with all operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL qualifies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6. View Updatability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All views theoretically updatable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most DBMS fail here"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7. Set-level ops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT/UPDATE/DELETE on sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some only row-at-a-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8. Physical Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes to storage don't affect applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding an index doesn't break queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9. Logical Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table changes don't break views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding a column doesn't break old views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10. Integrity Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraints stored in catalog, not in apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK constraints in DDL, not app code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11. Distribution Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database can be distributed and appear local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding transparent to queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "12. Nonsubversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No low-level bypass of integrity rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't modify a row without triggering constraints"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Question:"
      }), " \"What are Codd's rules? Why do they matter?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3103-key-selection-strategy",
      children: "3.10.3 Key Selection Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to choose a primary key from candidate keys:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stability:"
          }), " Choose attributes that never change"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "❌ Email (people change email providers)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Employee ID (never changes)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Simplicity:"
          }), " Prefer single attribute over composite"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "❌ (first_name, last_name, birth_date) — composite, may collide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ Auto-increment ID"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Familiarity:"
          }), " Use natural keys when stable and simple"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ ISBN for books"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ SSN for US persons (with privacy caveats)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance:"
          }), " Prefer small, numeric keys"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "✓ INTEGER (4 bytes) over VARCHAR(100) — faster index, less storage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Surrogate when in doubt:"
          }), " If no stable natural key exists"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add an auto-increment column as surrogate PK"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add UNIQUE constraint on natural keys"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3104-1nf-requirements",
      children: "3.10.4 1NF Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A relation is in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "First Normal Form (1NF)"
      }), " if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic values:"
        }), " Every cell contains exactly one value (no lists, sets, or nested tables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No repeating groups:"
        }), " No column that stores multiple values"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, name, phones)"
      }), " where phones = \"555-0100, 555-0200\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix — Separate relation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, name)\nPHONE(sid, phone_number)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or separate columns (if fixed number):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, name, phone1, phone2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3105-common-interview-questions-and-answers",
      children: "3.10.5 Common Interview Questions and Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Why is relational algebra important for a software engineer?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Answer:"
      }), " Relational algebra is the theoretical foundation of SQL. Understanding it helps you:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write more efficient SQL queries (you know what the optimizer does)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug slow queries (recognize Cartesian products, missing join conditions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design better schemas (understand how joins use keys)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work with query plan explain output (which directly mirrors algebra operators)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Can you express division using basic operations?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Answer:"
      }), " Yes. R ÷ S = π", (0,jsx_runtime.jsxs)(_components.sub, {
        children: ["Z</sub>(R) − π", (0,jsx_runtime.jsxs)(_components.sub, {
          children: ["Z</sub>((π", (0,jsx_runtime.jsx)(_components.sub, {
            children: "Z</sub>(R) × S) − R), where Z = attrs(R) − attrs(S)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What's the difference between a primary key and a unique key?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Answer:"
      }), " Both enforce uniqueness, but:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A table has exactly one primary key; multiple unique keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primary key cannot be NULL; unique key can (one NULL in most DBMS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primary key is the clustered index by default in many DBMS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foreign keys reference primary keys, not unique keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Natural join vs equi join — what's the difference?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Answer:"
      }), " Natural join automatically joins on all same-named attributes and removes duplicate columns. Equi join requires an explicit equality condition and keeps both copies of the join columns. Natural join is syntactic sugar; equi join is explicit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Your query is slow. How does knowing relational algebra help?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Answer:"
      }), " I look at the query execution plan — it shows operators like Seq Scan (full table scan = σ without index), Hash Join (⨝), Nested Loop (⨝ without index). Using equivalence rules, I can mentally rewrite the query: push filters down, reorder joins to put smaller tables first, avoid Cartesian products. RA knowledge lets me read the plan and know what to change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "311-applications-in-real-systems",
      children: "3.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3111-postgresql-query-optimizer",
      children: "3.11.1 PostgreSQL Query Optimizer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PostgreSQL's optimizer internally represents every query as a tree of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational Algebra operators"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Seq Scan on student  (cost=0.00..35.50 rows=10 width=40)\n  Filter: (gpa > 3.5)\n  → σ<gpa>3.5>(student)\n\nHash Join  (cost=72.50..135.20 rows=50 width=80)\n  Hash Cond: (enrolled.sid = student.sid)\n  → Seq Scan on enrolled\n  → Hash\n      → Seq Scan on student\n  → π<...>(σ<...>(enrolled ⨝ student))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PostgreSQL uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selection pushdown:"
        }), " Moves σ closer to the data scan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join ordering:"
        }), " Estimates which join order minimizes cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index selection:"
        }), " Chooses between σ (filter) vs index scan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash vs Merge vs Nested Loop:"
        }), " Picks join algorithm per pair"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EXPLAIN ANALYZE"
      }), " output directly mirrors relational algebra trees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3112-mysql-internals",
      children: "3.11.2 MySQL Internals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MySQL's optimizer transforms SQL into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relational algebra expressions"
      }), " during the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "query rewrite phase"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parsing:"
        }), " SQL → parse tree"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preprocessing:"
        }), " View expansion, constant folding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query rewrite:"
        }), " Convert to relational algebra"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimization:"
        }), " Apply equivalence rules, generate plans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution:"
        }), " Evaluate the chosen plan"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MySQL's optimizer applies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Join reordering:"
        }), " Uses a greedy search to find the best join order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Condition pushdown:"
        }), " Pushes WHERE clause filters closer to table scans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived table merging:"
        }), " Merges subqueries into the main query"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3113-oracle-database",
      children: "3.11.3 Oracle Database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Oracle's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost-Based Optimizer (CBO)"
      }), " uses relational algebra internally:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query Transformer:"
        }), " Rewrites queries using algebraic equivalences (predicate pushdown, view merging, subquery unnesting)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Estimator:"
        }), " Computes cardinality and selectivity for each algebra operator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan Generator:"
        }), " Generates alternative algebra trees, picks lowest cost"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Oracle's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXPLAIN PLAN"
      }), " output shows operators like:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TABLE ACCESS FULL"
        }), " → σ without index"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TABLE ACCESS BY INDEX ROWID"
        }), " → σ with index"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HASH JOIN"
        }), " → ⨝ using hash algorithm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SORT JOIN"
        }), " → ⨝ using sort-merge"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FILTER"
        }), " → σ with subquery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3114-how-query-optimizers-use-relational-algebra",
      children: "3.11.4 How Query Optimizers Use Relational Algebra"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SQL Query: SELECT s.name FROM Student s, Enrolled e\n           WHERE s.sid = e.sid AND e.grade = 'A'\n\nAlgebra Tree (canonical):          Optimized Algebra Tree:\n     π<name>                            π<name>\n        |                                  |\n     σ<grade='A'>                       ⨝<s.sid=e.sid>\n        |                               /        \\\n     ⨝<s.sid=e.sid>                σ<grade='A'>    Student\n      /         \\                      |\n  Student     Enrolled              Enrolled\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimizer steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cartesian product is replaced with join"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selection (grade='A') is pushed to Enrolled first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Join order is chosen (smaller result of σ(Enrolled) first if Student is larger)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index scan replaces Seq Scan if beneficial indexes exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-complete-university-query",
      children: "Example 1: Complete University Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STUDENT(sid, sname, major)\nENROLLED(sid, course)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Find names of students enrolled in 'DBMS' or 'OS'."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cardinality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ<course='DBMS' ∨ course='OS'>(ENROLLED)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter enrollments to relevant courses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT ⨝ (Step 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e (≤"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUDENT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sname>(Step 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project only names"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sname>(STUDENT ⨝ σ<course='DBMS' ∨ course='OS'>(ENROLLED))"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-division-with-dry-run",
      children: "Example 2: Division with Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PRODUCT(pid, pname)\nSALE(sid, pid)\nSTORE(sid, sname)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Find stores that sell ALL products."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace table with sample data:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| SALE | | | PRODUCT | | STORE | |\n|------|---|---|---------|---|---|-------|---|\n| sid | pid | | pid | pname | | sid | sname |\n| S1 | P1 | | P1 | Widget | | S1 | Amazon |\n| S1 | P2 | | P2 | Gadget | | S2 | BestBuy |\n| S1 | P3 | | P3 | Tool | | S3 | Walmart |\n| S2 | P1 | | | | | | |\n| S2 | P2 | | | | | | |\n| S3 | P1 | | | | | | |"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<pid>(PRODUCT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sid,pid>(SALE) ÷ Step 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<sname>(STORE ⨝ Step 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Amazon}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " Only S1 (Amazon) sells all three products (P1, P2, P3)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-multiple-joins",
      children: "Example 3: Multiple Joins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SUPPLIER(sid, sname, city)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PART(pid, pname, color)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SHIPMENT(sid, pid, qty)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Find supplier names who ship red parts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RA:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<sname>(σ<color='red'>(PART) ⨝ SHIPMENT ⨝ SUPPLIER)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution plan:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "σ<color='red'>(PART) — filter parts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result ⨝ SHIPMENT — get shipment records for those parts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result ⨝ SUPPLIER — get supplier details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "π<sname> — extract names"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-anti-join-not-exists",
      children: "Example 4: Anti-Join (Not Exists)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Find products that have never been sold."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RA:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "π<pid>(PRODUCT) − π<pid>(SALE)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL equivalent:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT pid FROM Product WHERE pid NOT IN (SELECT pid FROM Sale)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<pid>(PRODUCT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3, P4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<pid>(SALE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P1, P2, P3}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 1 − Step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{P4}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.1:"
        }), " The relational model, proposed by E.F. Codd in 1970, provides a mathematically rigorous framework for data organization using set theory and predicate logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.2:"
        }), " A relation is a set of tuples (rows) with attributes (columns) drawn from domains (data types), with properties including atomic values, unique tuples, and unordered rows/columns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.3:"
        }), " Keys — superkey, candidate, primary, foreign, alternate, composite, surrogate — provide unique identification and establish relationships between relations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.4:"
        }), " Integrity constraints — domain, entity, referential, and semantic — ensure data correctness and consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.5:"
        }), " Relational algebra is a procedural language where every operation takes relations as input and produces a new relation (closure property)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.6:"
        }), " Basic operations include selection (σ), projection (π), union (∪), set difference (−), Cartesian product (×), and rename (ρ)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.7:"
        }), " Derived operations — join types (theta, equi, natural, outer, semi, anti), intersection, and division — provide powerful querying capabilities built from basic operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.8:"
        }), " Algebraic equivalence rules (pushing selection through join, commuting projection with product) are the foundation of query optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.9:"
        }), " Relational calculus takes a declarative approach — specifying WHAT to retrieve, not HOW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3.10:"
        }), " Division (÷) answers \"all\" queries: find X-values associated with EVERY Y-value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Arity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Closure?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters rows by condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ<gpa>3.5>(STUDENT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Projection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selects columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "π<name,major>(STUDENT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Union"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines rows from two relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ∪ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows in first but not second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R − S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cartesian Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every row of R paired with every row of S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R × S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ρ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes relation or attribute name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ρ<new>(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intersection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows in both relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ∩ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Theta Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝_θ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product + selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ<cond>(R × S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⨝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equijoin on common attributes, deduplicated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ⨝ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Division"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "÷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows in R associated with ALL rows in S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R ÷ S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Keys:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Key Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Superkey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of attributes that uniquely identifies a tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any set containing a UNIQUE column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Candidate Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal superkey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each UNIQUE or PRIMARY KEY candidate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chosen candidate key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Foreign Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "References primary key of another relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY (col) REFERENCES other(col)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternate Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Candidate keys not chosen as primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key with 2+ attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY (col1, col2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Surrogate Key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artificial key with no real-world meaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_INCREMENT / SERIAL / UUID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrity Constraints:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Enforcement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value must be from declared type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data type + CHECK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary key cannot be null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL on PK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Referential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foreign key must match PK or be null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY + REFERENCES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semantic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK constraints, triggers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a property of a relation?\na) Each cell contains an atomic value\nb) The order of tuples matters\nc) Each attribute has a unique name\nd) No duplicate tuples are allowed"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A candidate key is:\na) A set of attributes that uniquely identifies a tuple\nb) A minimal superkey\nc) The same as a primary key\nd) A foreign key reference"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which operation returns only tuples that appear in both relations?\na) Union\nb) Set difference\nc) Intersection\nd) Cartesian product"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Relational algebra is:\na) A declarative query language\nb) A procedural query language\nc) A data definition language\nd) A programming language"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The closure property of relational algebra means:\na) Every operation returns a single value\nb) Every operation produces a relation as output\nc) Operations cannot be combined\nd) Results are always closed to modification"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Division (÷) is used for:\na) Finding rows in R that match all rows in S\nb) Splitting a relation into two parts\nc) Dividing attribute values\nd) Removing duplicate tuples"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which join preserves all tuples from the left relation?\na) INNER JOIN\nb) LEFT OUTER JOIN\nc) RIGHT OUTER JOIN\nd) FULL OUTER JOIN"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The natural join differs from an equijoin because:\na) It only uses inequality conditions\nb) It joins on all common attributes and removes duplicate columns\nc) It includes non-matching rows\nd) It produces a Cartesian product first"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of these is NOT a valid superkey in STUDENT(sid, name, email)?\na) {sid}\nb) {email}\nc) {name}\nd) {sid, name}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A surrogate key is:\na) A natural key used for primary identification\nb) A key that references another table\nc) An artificial key with no real-world meaning\nd) A key made of multiple attributes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In relational calculus, unsafe expressions:\na) Produce infinite results\nb) Have no primary key\nc) Use only existential quantifiers\nd) Can't be expressed in SQL"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PostgreSQL's EXPLAIN ANALYZE output:\na) Shows the relational algebra tree used for execution\nb) Only shows execution time\nc) Cannot be understood without relational algebra knowledge\nd) Is always in XML format"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-c, 4-b, 5-b, 6-a, 7-b, 8-b, 9-c, 10-c, 11-a, 12-a"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "relation"
        }), " is a set of tuples; every attribute has a domain; every tuple is unique."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keys"
        }), " (superkey, candidate, primary, foreign, alternate, composite, surrogate) provide identity and relationships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrity constraints"
        }), " (domain, entity, referential) maintain data correctness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relational algebra"
        }), " is a procedural query language with operations: selection (σ), projection (π), union (∪), difference (−), product (×), join (⨝), and division (÷)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each operation takes relations as input and produces a new relation (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "closure"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relational calculus"
        }), " provides a declarative alternative — TRC uses tuple variables, DRC uses domain variables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Equivalence rules"
        }), " let query optimizers transform queries into faster forms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Division (÷)"
        }), " answers \"all\" queries and can be expressed using basic operations."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Major DBMS (PostgreSQL, MySQL, Oracle) internally use relational algebra trees for query optimization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Define the following terms: relation, tuple, attribute, domain, degree, cardinality. Give a real-world analogy for each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given the relation ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EMPLOYEE(emp_id, name, department, salary)"
          }), ":\na) What is the degree of this relation?\nb) If there are 50 employees, what is the cardinality?\nc) Write the relational algebra expression to find names of employees in the 'Sales' department.\nd) Write the expression to find the department of employee with ID 101."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between a superkey and a candidate key? Give an example of each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain why entity integrity requires that primary key attributes cannot be null."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write the relational algebra expression for: \"Find all courses where no student received a grade below C.\""
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "STUDENT(sid, sname) with tuples: (1, 'Alice'), (2, 'Bob'), (3, 'Charlie')\nTAKES(sid, course) with tuples: (1, 'DBMS'), (1, 'OS'), (2, 'DBMS'), (3, 'OS')\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compute the result of:\na) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "π<sname>(σ<sid=1>(STUDENT))"
          }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "π<sid>(TAKES) − π<sid>(σ<course='OS'>(TAKES))"
          }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "STUDENT ⨝ TAKES"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write relational algebra for: \"Find employee IDs of employees who work on ALL projects.\"\nSchema: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WORKS_ON(emp_id, proj_id)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PROJECT(proj_id, name)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Convert the SQL query:\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT sname FROM Student WHERE major = 'CS' AND sid IN (SELECT sid FROM Enrolled WHERE grade = 'A')"
          }), "\ninto relational algebra."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a Python function that performs theta join on two Relation objects. Handle the case where the join condition involves multiple attributes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write pseudocode for detecting all candidate keys given a set of functional dependencies. What is the time complexity?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prove the equivalence: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "σ<cond>(R ⨝ S) = σ<cond>(R) ⨝ S"
          }), " when cond involves only attributes of R."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Given the relational algebra expression ", (0,jsx_runtime.jsx)(_components.code, {
            children: "π<course>(σ<grade='F'>(ENROLLED))"
          }), ", explain what it returns. Write the equivalent SQL query and a real-world scenario where this query would be useful."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For the division operation R ÷ S:\na) Explain the condition under which R ÷ S is defined (attribute compatibility)\nb) Show that division can be expressed using basic operations:\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "R ÷ S = π<Z>(R) − π<Z>((π<Z>(R) × S) − R)"
          }), "\nc) Trace this expression with R = {(1,a), (1,b), (2,a), (2,b), (3,a)} and S = {(a), (b)}"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a C++ class that can represent any relational algebra operation as an expression tree (composite pattern). Show how the tree can be optimized using pushdown rules."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare and contrast nested loop join, hash join, and sort-merge join. For each:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Give the time complexity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Describe the scenario where it performs best"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Describe the scenario where it performs worst"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Show a C++ implementation skeleton"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a basic query optimizer in Python that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Accepts a relational algebra expression tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Applies at least 3 pushdown rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Returns the optimized expression tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Measures the estimated cost improvement"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the following relation and functional dependencies, find all candidate keys:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "R(A, B, C, D, E)\nFDs: A → B, BC → D, D → E, E → A\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a Python program that implements the division operation correctly for all edge cases (empty S, no Z-values, duplicate tuples). Include unit tests."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain why query optimizers use cost estimation rather than exhaustive search. What role does relational algebra play in this?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Research and explain how Spark SQL's Catalyst optimizer uses relational algebra. How does it differ from a traditional DBMS optimizer?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "312-aggregate-operations-extended",
      children: "3.12 Aggregate Operations (Extended)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While not part of the original relational algebra, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "aggregation"
      }), " (GROUP BY) is essential for practical querying. Extended relational algebra adds:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations:"
      }), " SUM, COUNT, AVG, MIN, MAX, GROUP BY"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "𝒢<agg_func_list>(R)"
      }), " — group by with aggregation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Count students per major:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "𝒢<major, COUNT(sid)>(STUDENT)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition R into groups by GROUP BY attributes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each group, compute the aggregate functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output one tuple per group"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table — Count per major:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "STUDENT"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count per major"
          }), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "major"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gpa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "major"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Charlie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\ndef aggregate(relation: Relation, group_by_indices: List[int],\n              agg_funcs: List[tuple]) -> Relation:\n    \"\"\"\n    agg_funcs: list of (agg_name, func, attr_index)\n    Example: [(\"avg_gpa\", lambda vals: sum(vals)/len(vals), 3)]\n    \"\"\"\n    groups = defaultdict(list)\n    for t in relation.tuples:\n        key = tuple(t[i] for i in group_by_indices)\n        groups[key].append(t)\n\n    # Build output schema\n    out_attrs = [relation.attributes[i] for i in group_by_indices]\n    for name, func, idx in agg_funcs:\n        out_attrs.append((name, \"AGGREGATE\"))\n\n    result = Relation(\"AGG(\" + relation.name + \")\", out_attrs)\n    for key, group_tuples in groups.items():\n        out = list(key)\n        for name, func, idx in agg_funcs:\n            values = [t[idx] for t in group_tuples if t[idx] is not None]\n            out.append(func(values))\n        result.tuples.add(tuple(out))\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "313-complete-relational-algebra-engine-python",
      children: "3.13 Complete Relational Algebra Engine (Python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RelationalAlgebraEngine:\n    \"\"\"A minimal relational algebra engine with all core operations.\"\"\"\n\n    @staticmethod\n    def select(relation: Relation, predicate) -> Relation:\n        return relation.select(predicate)\n\n    @staticmethod\n    def project(relation: Relation, indices: List[int]) -> Relation:\n        return relation.project(indices)\n\n    @staticmethod\n    def union(R: Relation, S: Relation) -> Relation:\n        return R.union(S)\n\n    @staticmethod\n    def intersect(R: Relation, S: Relation) -> Relation:\n        return R.difference(R.difference(S))\n\n    @staticmethod\n    def difference(R: Relation, S: Relation) -> Relation:\n        return R.difference(S)\n\n    @staticmethod\n    def cross_product(R: Relation, S: Relation) -> Relation:\n        out_attrs = R.attributes + S.attributes\n        result = Relation(f\"{R.name}×{S.name}\", out_attrs)\n        for tR in R.tuples:\n            for tS in S.tuples:\n                result.tuples.add(tR + tS)\n        return result\n\n    @staticmethod\n    def theta_join(R: Relation, S: Relation, predicate) -> Relation:\n        product = RelationalAlgebraEngine.cross_product(R, S)\n        return product.select(predicate)\n\n    @staticmethod\n    def natural_join(R: Relation, S: Relation) -> Relation:\n        return natural_join(R, S)\n\n    @staticmethod\n    def division(R: Relation, S: Relation) -> Relation:\n        return division(R, S)\n\n    @staticmethod\n    def rename(relation: Relation, new_name: str,\n               new_attrs: Optional[List[str]] = None) -> Relation:\n        return relation.rename(new_name, new_attrs or [])\n\n    @staticmethod\n    def aggregate(relation: Relation, group_by: List[int],\n                  aggs: List[tuple]) -> Relation:\n        return aggregate(relation, group_by, aggs)\n\n    def show_plan(self, expr, depth=0):\n        \"\"\"Display the algebra tree.\"\"\"\n        indent = \"  \" * depth\n        if isinstance(expr, tuple):\n            op, args = expr[0], expr[1:]\n            print(f\"{indent}{op}\")\n            for arg in args:\n                self.show_plan(arg, depth + 1)\n        else:\n            print(f\"{indent}{expr}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "314-foreign-key-implementation-with-referential-actions-c",
      children: "3.14 Foreign Key Implementation with Referential Actions (C++)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Database {\nprivate:\n    std::map<std::string, Relation> relations;\n    struct ForeignKey {\n        std::string childRel;\n        std::vector<std::string> childAttrs;\n        std::string parentRel;\n        std::vector<std::string> parentAttrs;\n        enum Action { RESTRICT, CASCADE, SET_NULL };\n        Action onDelete;\n        Action onUpdate;\n    };\n    std::vector<ForeignKey> foreignKeys;\n\npublic:\n    bool insertTuple(const std::string& relName, const Tuple& t) {\n        // Check foreign key constraints\n        for (const auto& fk : foreignKeys) {\n            if (fk.childRel != relName) continue;\n            // Extract FK values from t\n            // Check they exist in parent or are NULL\n            // Reject if RESTRICT and no match\n        }\n        // Also check PK uniqueness and domain constraints\n        return relations[relName].insert(t);\n    }\n\n    bool deleteTuple(const std::string& relName,\n                     std::function<bool(const Tuple&)> pred) {\n        // Find tuples to delete\n        // For each, check FK references\n        // CASCADE: delete children too\n        // SET_NULL: set child FK to NULL\n        // RESTRICT: reject if children exist\n        auto toDelete = relations[relName].select(pred);\n        for (const auto& t : toDelete.getTuples()) {\n            for (const auto& fk : foreignKeys) {\n                if (fk.parentRel != relName) continue;\n                // Check for referencing children\n                // Apply referential action\n            }\n        }\n        return true;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems--extended",
      children: "Applications in Real Systems — Extended"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mongodbs-journey-toward-relational-concepts",
      children: "MongoDB's Journey Toward Relational Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While MongoDB is document-based (NoSQL), recent versions (5.0+) have added:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "$lookup"
        }), " aggregation stage — equivalent to LEFT OUTER JOIN"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACID transactions"
        }), " — multi-document atomicity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema validation"
        }), " — domain constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique indexes"
        }), " — superkey enforcement"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This shows that even NoSQL systems are converging on relational model guarantees."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apache-spark-sql--catalyst-optimizer",
      children: "Apache Spark SQL — Catalyst Optimizer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spark SQL's Catalyst optimizer is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rule-based + cost-based"
      }), " optimizer built on relational algebra:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-scala",
        children: "// Catalyst internal representation mirrors RA operators\ncase class Project(projectList: Seq[NamedExpression], child: LogicalPlan) extends LogicalPlan\ncase class Filter(condition: Expression, child: LogicalPlan) extends LogicalPlan\ncase class Join(left: LogicalPlan, right: LogicalPlan,\n                joinType: JoinType, condition: Option[Expression]) extends LogicalPlan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Catalyst applies 200+ optimization rules including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predicate pushdown (σ before ⨝)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projection pruning (π before scan)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constant folding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Join reordering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sqlites-simple-optimizer",
      children: "SQLite's Simple Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite uses a simpler but effective approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop join"
        }), " as the only join algorithm (nested loop)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic index creation"
        }), " for foreign keys"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHERE clause analysis"
        }), " to pick the best scan"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Its optimizer is minimalist but sufficient for embedded use — the RA principles still apply."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises-with-solutions",
      children: "Additional Exercises with Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-a-complex-join-chain",
      children: "Exercise A: Complex Join Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUSTOMER(cid, name, city)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ORDER(oid, cid, date)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LINEITEM(oid, pid, qty)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PRODUCT(pid, pname, price)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write RA for: \"Find customer names who ordered products priced over $100.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "π<name>(σ<price>100>(PRODUCT) ⨝ LINEITEM ⨝ ORDER ⨝ CUSTOMER)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result attributes:"
      }), " {name}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-b-self-join",
      children: "Exercise B: Self-Join"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find pairs of employees in the same department:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ρ<E1>(EMPLOYEE) ⨝_{E1.dept = E2.dept ∧ E1.id < E2.id} ρ<E2>(EMPLOYEE)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E1.id < E2.id"
      }), "? To avoid duplicate pairs (A,B) and (B,A), and self-pairs (A,A)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-c-division-with-empty-divisor",
      children: "Exercise C: Division with Empty Divisor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given R = {(1,a), (1,b), (2,a)} and S = {} (empty), compute R ÷ S."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " R ÷ ∅ = π_Z(R) = {1, 2}. Every Z-value trivially pairs with all (zero) S-tuples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-d-null-handling-in-joins",
      children: "Exercise D: NULL Handling in Joins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "R = {(1, NULL), (2, 'A')}, S = {(NULL, 'X'), (3, 'Y')}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Natural join on first attribute: Result = {} (empty)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " NULL ≠ NULL in SQL semantics. Even though both relations contain NULL in the join attribute, they don't match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relational Algebra Concept"
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
              children: "Selection + Projection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every SQL SELECT with WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters rows and columns — the most common operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-table queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines related data from normalized tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Division"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All\" queries in any domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Students taking all courses, stores selling all products"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-joins, missing records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customers without orders, products never sold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cartesian Product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross joins, date range generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generating all combinations of independent sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Closure Property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested queries, CTEs, subqueries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables composable, modular query design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Outer Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reports with optional matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customers and their (optional) orders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semi Join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXISTS subqueries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiently check for existence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregate + Group By"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporting queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarize data by categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-joins, subquery aliases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disambiguate multiple uses of same table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "315-typescript-relational-algebra-engine",
      children: "3.15 TypeScript Relational Algebra Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following code implements a relational algebra engine in TypeScript — supporting selection, projection, join, set operations, and division."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Relational Algebra Engine — TypeScript\n// ============================================================\n\nclass Tuple {\n  constructor(public values: Map<string, unknown>) {}\n  get(attr: string): unknown { return this.values.get(attr); }\n  has(attr: string): boolean { return this.values.has(attr); }\n  project(attrs: string[]): Tuple {\n    const newVals = new Map<string, unknown>();\n    for (const a of attrs) {\n      if (this.values.has(a)) newVals.set(a, this.values.get(a));\n    }\n    return new Tuple(newVals);\n  }\n  toString(): string {\n    return '{' + Array.from(this.values.entries()).map(([k, v]) => k + '=' + v).join(', ') + '}';\n  }\n}\n\nclass Relation {\n  constructor(public name: string, public attributes: string[], public tuples: Tuple[]) {}\n\n  // Selection (sigma) — filter rows by predicate\n  select(predicate: (t: Tuple) => boolean): Relation {\n    return new Relation('sigma(' + this.name + ')', this.attributes, this.tuples.filter(predicate));\n  }\n\n  // Projection (pi) — keep only specified columns, remove duplicates\n  project(attrs: string[]): Relation {\n    const seen = new Set<string>();\n    const result: Tuple[] = [];\n    for (const t of this.tuples) {\n      const projected = t.project(attrs);\n      const key = projected.toString();\n      if (!seen.has(key)) {\n        seen.add(key);\n        result.push(projected);\n      }\n    }\n    return new Relation('pi(' + this.name + ')', attrs, result);\n  }\n\n  // Rename (rho)\n  rename(newName: string, newAttrs?: string[]): Relation {\n    return new Relation(newName, newAttrs || this.attributes, this.tuples);\n  }\n\n  // Union (compatible attributes required)\n  union(other: Relation): Relation {\n    if (JSON.stringify(this.attributes) !== JSON.stringify(other.attributes)) {\n      throw new Error('Union requires identical schemas');\n    }\n    const seen = new Set<string>();\n    const result: Tuple[] = [];\n    for (const t of [...this.tuples, ...other.tuples]) {\n      const key = t.toString();\n      if (!seen.has(key)) { seen.add(key); result.push(t); }\n    }\n    return new Relation(this.name + ' U ' + other.name, this.attributes, result);\n  }\n\n  // Set difference\n  minus(other: Relation): Relation {\n    const otherKeys = new Set(other.tuples.map(t => t.toString()));\n    return new Relation(this.name + ' - ' + other.name, this.attributes,\n      this.tuples.filter(t => !otherKeys.has(t.toString())));\n  }\n\n  // Cartesian product\n  crossProduct(other: Relation): Relation {\n    const newAttrs = [...this.attributes, ...other.attributes];\n    const result: Tuple[] = [];\n    for (const t1 of this.tuples) {\n      for (const t2 of other.tuples) {\n        const merged = new Map([...t1.values, ...t2.values]);\n        result.push(new Tuple(merged));\n      }\n    }\n    return new Relation(this.name + ' x ' + other.name, newAttrs, result);\n  }\n\n  // Natural join (equi-join on common attributes)\n  naturalJoin(other: Relation): Relation {\n    const common = this.attributes.filter(a => other.attributes.includes(a));\n    const allAttrs = [...new Set([...this.attributes, ...other.attributes])];\n    const result: Tuple[] = [];\n    for (const t1 of this.tuples) {\n      for (const t2 of other.tuples) {\n        let match = true;\n        for (const attr of common) {\n          if (String(t1.get(attr)) !== String(t2.get(attr))) { match = false; break; }\n        }\n        if (match) {\n          const merged = new Map(t1.values);\n          for (const [k, v] of t2.values) {\n            if (!t1.has(k)) merged.set(k, v);\n          }\n          result.push(new Tuple(merged));\n        }\n      }\n    }\n    return new Relation(this.name + ' ⨝ ' + other.name, allAttrs, result);\n  }\n\n  // Division: find tuples in this that match ALL tuples in other\n  division(other: Relation): Relation {\n    const zAttrs = this.attributes.filter(a => !other.attributes.includes(a));\n    if (zAttrs.length === 0) throw new Error('Division: no unique attributes');\n    const zTuples = this.project(zAttrs).tuples;\n    const result: Tuple[] = [];\n    for (const z of zTuples) {\n      const zVals = new Map(z.values);\n      // Find tuples in this that match this z-value\n      const matched = this.tuples.filter(t => {\n        for (const [k, v] of zVals) {\n          if (String(t.get(k)) !== String(v)) return false;\n        }\n        return true;\n      });\n      // Project matched onto other's schema\n      const matchedProj = matched.map(t => t.project(other.attributes));\n      // Check if all tuples in other are present\n      let allFound = true;\n      for (const o of other.tuples) {\n        const found = matchedProj.some(mp => {\n          for (const [k, v] of o.values) {\n            if (String(mp.get(k)) !== String(v)) return false;\n          }\n          return true;\n        });\n        if (!found) { allFound = false; break; }\n      }\n      if (allFound) result.push(new Tuple(zVals));\n    }\n    return new Relation(this.name + ' ÷ ' + other.name, zAttrs, result);\n  }\n\n  display(): void {\n    console.log('\\n' + this.name + ' (' + this.attributes.join(', ') + '): ' + this.tuples.length + ' rows');\n    console.log('-'.repeat(60));\n    for (const t of this.tuples) {\n      console.log('  ' + this.attributes.map(a => String(t.get(a) ?? 'NULL')).join(' | '));\n    }\n  }\n}\n\n// Demo\nconst students = new Relation('Student', ['sid', 'sname', 'major'], [\n  new Tuple(new Map([['sid', 1], ['sname', 'Alice'], ['major', 'CS']])),\n  new Tuple(new Map([['sid', 2], ['sname', 'Bob'], ['major', 'Math']])),\n  new Tuple(new Map([['sid', 3], ['sname', 'Charlie'], ['major', 'CS']])),\n]);\n\nconst enrolled = new Relation('Enrolled', ['sid', 'course', 'grade'], [\n  new Tuple(new Map([['sid', 1], ['course', 'DBMS'], ['grade', 'A']])),\n  new Tuple(new Map([['sid', 1], ['course', 'OS'], ['grade', 'B']])),\n  new Tuple(new Map([['sid', 2], ['course', 'DBMS'], ['grade', 'C']])),\n  new Tuple(new Map([['sid', 3], ['course', 'OS'], ['grade', 'A']])),\n]);\n\n// Query: Find CS students enrolled in DBMS\nconst csStudents = students.select(t => t.get('major') === 'CS');\nconst dbmsEnrolled = enrolled.select(t => t.get('course') === 'DBMS');\nconst result = csStudents.naturalJoin(dbmsEnrolled).project(['sname']);\nresult.display();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: Relational Algebra Query Tree"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"SQL Query\"\n        Q[\"SELECT sname FROM Student, Enrolled\n             WHERE Student.sid = Enrolled.sid\n               AND major = 'CS' AND course = 'DBMS'\"]\n    end\n    subgraph \"Relational Algebra Tree\"\n        P[\"π sname\"] --> J[\"⨝ Student.sid = Enrolled.sid\"]\n        J --> S1[\"σ major='CS' (Student)\"]\n        J --> S2[\"σ course='DBMS' (Enrolled)\"]\n    end\n    Q -.-> P\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a valid relational algebra operation?\na) Division\nb) Group By\nc) Projection\nd) Selection"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The closure property of relational algebra means:\na) Every operation requires two relations\nb) The result of any operation is a relation\nc) Relations cannot be nested\nd) All operations are commutative"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A theta join differs from natural join because:\na) Theta join uses any condition; natural join uses equality on common attributes\nb) Theta join is faster\nc) Natural join always produces fewer rows\nd) Theta join cannot use equality"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Division operation answers which type of query?\na) Find values associated with at least one other value\nb) Find values associated with ALL other values\nc) Find values that never appear\nd) Find the maximum value"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a precedence graph used for query optimization, a cycle indicates:\na) The query is optimal\nb) The joins cannot be reordered\nc) There are redundant predicates\nd) The query has a Cartesian product"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 13-b, 14-b, 15-a, 16-b, 17-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement the following relational algebra queries using the TypeScript engine above on the schema: Product(pid, pname, price), Supplier(sid, sname, city), Shipment(sid, pid, qty):\na) Find supplier names who ship red parts (assume Product has a color attribute)\nb) Find products supplied by ALL suppliers\nc) Find suppliers who supply at least one product priced over $100"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write the relational algebra expression tree for: \"Find the names of students who took 'DBMS' and got an 'A' grade.\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare and contrast the expressiveness of relational algebra vs. SQL. What can SQL do that pure relational algebra cannot?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Master relational algebra first"
        }), " — it is the theoretical foundation of SQL query optimization. Every SQL query is a relational algebra expression under the hood."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Division is the trickiest operation"
        }), " — it answers \"all\" queries (\"students who take ALL courses\"). Practice it with simple examples to build intuition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keys are not just constraints — they are query design tools"
        }), " — understanding which columns are keys tells you where to join and what results to expect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The closure property is why you can nest queries"
        }), " — because every algebra operation produces a relation, you can compose them arbitrarily."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learn the equivalence rules"
        }), " — they are what the query optimizer uses to transform your slow query into a fast one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash join beats nested loop for large datasets"
        }), " — but only works for equi-joins. Know when to use each."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always check your division queries"
        }), " — test with small datasets first. It's the most error-prone operation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULLs break everything"
        }), " — in joins, in comparisons, in aggregates. Design your schema to minimize nullable columns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final Thought:"
        }), " The relational model turned data management from an art into a science. Its 1970-era insights — set-based operations, declarative queries, physical data independence — remain the foundation of virtually every modern data system. Understanding relational algebra is not academic; it's the single best investment you can make in understanding how databases actually work."]
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