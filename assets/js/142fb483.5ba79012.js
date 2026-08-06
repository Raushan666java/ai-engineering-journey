"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[23289],{

/***/ 97236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_interview_preparation_01_technical_interview_core_cs_md_142_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-interview-preparation-01-technical-interview-core-cs-md-142.json
const site_docs_courses_interview_preparation_01_technical_interview_core_cs_md_142_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/interview-preparation/01-technical-interview-core-cs","title":"Chapter 1: Technical Interview — Core Computer Science Subjects","description":"Learning Objectives","source":"@site/docs/courses/interview-preparation/01-technical-interview-core-cs.md","sourceDirName":"courses/interview-preparation","slug":"/interview-preparation/01-technical-interview-core-cs","permalink":"/ai-engineering-journey/interview-preparation/01-technical-interview-core-cs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-technical-interview-core-cs","slug":"/interview-preparation/01-technical-interview-core-cs","title":"Chapter 1: Technical Interview — Core Computer Science Subjects","sidebar_label":"Chapter 1: Technical Interview — Core Computer Science Subjects","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Interview Preparation Module","permalink":"/ai-engineering-journey/interview-preparation/index"},"next":{"title":"Chapter 2: Coding Problem Solving","permalink":"/ai-engineering-journey/interview-preparation/02-coding-problem-solving"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/interview-preparation/01-technical-interview-core-cs.md


const frontMatter = {
	id: '01-technical-interview-core-cs',
	slug: '/interview-preparation/01-technical-interview-core-cs',
	title: 'Chapter 1: Technical Interview — Core Computer Science Subjects',
	sidebar_label: 'Chapter 1: Technical Interview — Core Computer Science Subjects',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Technical Interview — Core Computer Science Subjects';

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
  "value": "Section A: Database Management Systems (DBMS)",
  "id": "section-a-database-management-systems-dbms",
  "level": 3
}, {
  "value": "Q1: What is normalization? Explain 1NF, 2NF, 3NF, and BCNF with examples.",
  "id": "q1-what-is-normalization-explain-1nf-2nf-3nf-and-bcnf-with-examples",
  "level": 4
}, {
  "value": "Q2: What are ACID properties in database transactions?",
  "id": "q2-what-are-acid-properties-in-database-transactions",
  "level": 4
}, {
  "value": "Q3: Explain different types of JOINs with examples.",
  "id": "q3-explain-different-types-of-joins-with-examples",
  "level": 4
}, {
  "value": "Q4: What is indexing? Explain clustered vs non-clustered index.",
  "id": "q4-what-is-indexing-explain-clustered-vs-non-clustered-index",
  "level": 4
}, {
  "value": "Q5: What is a deadlock in databases? How is it handled?",
  "id": "q5-what-is-a-deadlock-in-databases-how-is-it-handled",
  "level": 4
}, {
  "value": "Q6: Explain the difference between DELETE, TRUNCATE, and DROP.",
  "id": "q6-explain-the-difference-between-delete-truncate-and-drop",
  "level": 4
}, {
  "value": "Q7: What are NoSQL databases? When would you use them over RDBMS?",
  "id": "q7-what-are-nosql-databases-when-would-you-use-them-over-rdbms",
  "level": 4
}, {
  "value": "Q8: Explain the CAP theorem.",
  "id": "q8-explain-the-cap-theorem",
  "level": 4
}, {
  "value": "Q9: What is a transaction? Explain SAVEPOINT and COMMIT.",
  "id": "q9-what-is-a-transaction-explain-savepoint-and-commit",
  "level": 4
}, {
  "value": "Q10: What is a view? Can we update data through a view?",
  "id": "q10-what-is-a-view-can-we-update-data-through-a-view",
  "level": 4
}, {
  "value": "Q11: Explain the differences between SQL and NoSQL databases.",
  "id": "q11-explain-the-differences-between-sql-and-nosql-databases",
  "level": 4
}, {
  "value": "Q12: What is sharding in databases?",
  "id": "q12-what-is-sharding-in-databases",
  "level": 4
}, {
  "value": "Q13: Explain ER diagrams with components.",
  "id": "q13-explain-er-diagrams-with-components",
  "level": 4
}, {
  "value": "Q14: What is the difference between WHERE and HAVING clauses?",
  "id": "q14-what-is-the-difference-between-where-and-having-clauses",
  "level": 4
}, {
  "value": "Q15: What is a stored procedure? How is it different from a function?",
  "id": "q15-what-is-a-stored-procedure-how-is-it-different-from-a-function",
  "level": 4
}, {
  "value": "Section B: Computer Networks",
  "id": "section-b-computer-networks",
  "level": 3
}, {
  "value": "Q16: Explain the OSI model with each layer and its function.",
  "id": "q16-explain-the-osi-model-with-each-layer-and-its-function",
  "level": 4
}, {
  "value": "Q17: What is the difference between TCP and UDP?",
  "id": "q17-what-is-the-difference-between-tcp-and-udp",
  "level": 4
}, {
  "value": "Q18: What is DNS and how does it work?",
  "id": "q18-what-is-dns-and-how-does-it-work",
  "level": 4
}, {
  "value": "Q19: Explain the differences between HTTP and HTTPS.",
  "id": "q19-explain-the-differences-between-http-and-https",
  "level": 4
}, {
  "value": "Q20: What is a firewall and how does it work?",
  "id": "q20-what-is-a-firewall-and-how-does-it-work",
  "level": 4
}, {
  "value": "Q21: What is subnetting? Explain with example.",
  "id": "q21-what-is-subnetting-explain-with-example",
  "level": 4
}, {
  "value": "Q22: Explain IP addressing classes.",
  "id": "q22-explain-ip-addressing-classes",
  "level": 4
}, {
  "value": "Q23: What is ARP and how does it work?",
  "id": "q23-what-is-arp-and-how-does-it-work",
  "level": 4
}, {
  "value": "Q24: What is the difference between Hub, Switch, and Router?",
  "id": "q24-what-is-the-difference-between-hub-switch-and-router",
  "level": 4
}, {
  "value": "Q25: What are the HTTP methods and their purposes?",
  "id": "q25-what-are-the-http-methods-and-their-purposes",
  "level": 4
}, {
  "value": "Q26: What is CIDR notation?",
  "id": "q26-what-is-cidr-notation",
  "level": 4
}, {
  "value": "Q27: What is a VPN?",
  "id": "q27-what-is-a-vpn",
  "level": 4
}, {
  "value": "Q28: What is the difference between IPv4 and IPv6?",
  "id": "q28-what-is-the-difference-between-ipv4-and-ipv6",
  "level": 4
}, {
  "value": "Q29: What is a MAC address?",
  "id": "q29-what-is-a-mac-address",
  "level": 4
}, {
  "value": "Q30: Explain the Sliding Window Protocol.",
  "id": "q30-explain-the-sliding-window-protocol",
  "level": 4
}, {
  "value": "Q31: What is CSMA/CD?",
  "id": "q31-what-is-csmacd",
  "level": 4
}, {
  "value": "Q32: What is the difference between Symmetric and Asymmetric encryption?",
  "id": "q32-what-is-the-difference-between-symmetric-and-asymmetric-encryption",
  "level": 4
}, {
  "value": "Section C: Operating Systems",
  "id": "section-c-operating-systems",
  "level": 3
}, {
  "value": "Q33: What is a process? Differentiate between process and thread.",
  "id": "q33-what-is-a-process-differentiate-between-process-and-thread",
  "level": 4
}, {
  "value": "Q34: Explain different CPU scheduling algorithms.",
  "id": "q34-explain-different-cpu-scheduling-algorithms",
  "level": 4
}, {
  "value": "Q35: What is deadlock? Explain necessary conditions.",
  "id": "q35-what-is-deadlock-explain-necessary-conditions",
  "level": 4
}, {
  "value": "Q36: Explain paging and segmentation.",
  "id": "q36-explain-paging-and-segmentation",
  "level": 4
}, {
  "value": "Q37: What is virtual memory?",
  "id": "q37-what-is-virtual-memory",
  "level": 4
}, {
  "value": "Q38: Explain the producer-consumer problem with solution.",
  "id": "q38-explain-the-producer-consumer-problem-with-solution",
  "level": 4
}, {
  "value": "Q39: What is the difference between mutex and semaphore?",
  "id": "q39-what-is-the-difference-between-mutex-and-semaphore",
  "level": 4
}, {
  "value": "Q40: What is the Banker&#39;s Algorithm?",
  "id": "q40-what-is-the-bankers-algorithm",
  "level": 4
}, {
  "value": "Q41: What are the different IPC mechanisms?",
  "id": "q41-what-are-the-different-ipc-mechanisms",
  "level": 4
}, {
  "value": "Q42: What is a system call? Give examples.",
  "id": "q42-what-is-a-system-call-give-examples",
  "level": 4
}, {
  "value": "Q43: Explain the difference between internal and external fragmentation.",
  "id": "q43-explain-the-difference-between-internal-and-external-fragmentation",
  "level": 4
}, {
  "value": "Q44: What is RAID? Explain levels.",
  "id": "q44-what-is-raid-explain-levels",
  "level": 4
}, {
  "value": "Q45: Explain the boot process of a computer.",
  "id": "q45-explain-the-boot-process-of-a-computer",
  "level": 4
}, {
  "value": "Q46: What is the difference between user mode and kernel mode?",
  "id": "q46-what-is-the-difference-between-user-mode-and-kernel-mode",
  "level": 4
}, {
  "value": "Q47: Explain the concept of &quot;Thrashing&quot;.",
  "id": "q47-explain-the-concept-of-thrashing",
  "level": 4
}, {
  "value": "Q48: What is the dining philosophers problem?",
  "id": "q48-what-is-the-dining-philosophers-problem",
  "level": 4
}, {
  "value": "Section D: Data Structures",
  "id": "section-d-data-structures",
  "level": 3
}, {
  "value": "Q49: What is the difference between an array and a linked list?",
  "id": "q49-what-is-the-difference-between-an-array-and-a-linked-list",
  "level": 4
}, {
  "value": "Q50: Implement a stack using arrays in TypeScript.",
  "id": "q50-implement-a-stack-using-arrays-in-typescript",
  "level": 4
}, {
  "value": "Q51: Implement a queue using linked list.",
  "id": "q51-implement-a-queue-using-linked-list",
  "level": 4
}, {
  "value": "Q52: Explain binary search and implement it.",
  "id": "q52-explain-binary-search-and-implement-it",
  "level": 4
}, {
  "value": "Q53: What is a binary tree? Implement tree traversal.",
  "id": "q53-what-is-a-binary-tree-implement-tree-traversal",
  "level": 4
}, {
  "value": "Q54: What is a binary search tree (BST)? Validate a BST.",
  "id": "q54-what-is-a-binary-search-tree-bst-validate-a-bst",
  "level": 4
}, {
  "value": "Q55: Implement a hash map from scratch.",
  "id": "q55-implement-a-hash-map-from-scratch",
  "level": 4
}, {
  "value": "Q56: Explain sorting algorithms with time/space complexity.",
  "id": "q56-explain-sorting-algorithms-with-timespace-complexity",
  "level": 4
}, {
  "value": "Section E: Object-Oriented Programming (OOPs)",
  "id": "section-e-object-oriented-programming-oops",
  "level": 3
}, {
  "value": "Q57: What are the four pillars of OOPs?",
  "id": "q57-what-are-the-four-pillars-of-oops",
  "level": 4
}, {
  "value": "Q58: What is the difference between abstract class and interface?",
  "id": "q58-what-is-the-difference-between-abstract-class-and-interface",
  "level": 4
}, {
  "value": "Q59: Explain method overloading vs overriding.",
  "id": "q59-explain-method-overloading-vs-overriding",
  "level": 4
}, {
  "value": "Q60: What is SOLID? Explain each principle.",
  "id": "q60-what-is-solid-explain-each-principle",
  "level": 4
}, {
  "value": "Q61: What is a design pattern? Name common GoF patterns.",
  "id": "q61-what-is-a-design-pattern-name-common-gof-patterns",
  "level": 4
}, {
  "value": "Q62: Implement Singleton pattern in TypeScript.",
  "id": "q62-implement-singleton-pattern-in-typescript",
  "level": 4
}, {
  "value": "Q63: Explain the Observer pattern with example.",
  "id": "q63-explain-the-observer-pattern-with-example",
  "level": 4
}, {
  "value": "Q64: What is the difference between composition and inheritance?",
  "id": "q64-what-is-the-difference-between-composition-and-inheritance",
  "level": 4
}, {
  "value": "Section F: Software Engineering",
  "id": "section-f-software-engineering",
  "level": 3
}, {
  "value": "Q65: Explain SDLC phases.",
  "id": "q65-explain-sdlc-phases",
  "level": 4
}, {
  "value": "Q66: Compare Waterfall vs Agile methodologies.",
  "id": "q66-compare-waterfall-vs-agile-methodologies",
  "level": 4
}, {
  "value": "Q67: What is version control? Explain Git basic commands.",
  "id": "q67-what-is-version-control-explain-git-basic-commands",
  "level": 4
}, {
  "value": "Q68: What is the difference between verification and validation?",
  "id": "q68-what-is-the-difference-between-verification-and-validation",
  "level": 4
}, {
  "value": "Q69: Explain the different types of testing.",
  "id": "q69-explain-the-different-types-of-testing",
  "level": 4
}, {
  "value": "Q70: What is CI/CD?",
  "id": "q70-what-is-cicd",
  "level": 4
}, {
  "value": "Q71: What are microservices? How are they different from monolithic?",
  "id": "q71-what-are-microservices-how-are-they-different-from-monolithic",
  "level": 4
}, {
  "value": "Q72: What is the difference between functional and non-functional requirements?",
  "id": "q72-what-is-the-difference-between-functional-and-non-functional-requirements",
  "level": 4
}, {
  "value": "Q73: What are the different software process models?",
  "id": "q73-what-are-the-different-software-process-models",
  "level": 4
}, {
  "value": "Q74: Explain the concept of technical debt.",
  "id": "q74-explain-the-concept-of-technical-debt",
  "level": 4
}, {
  "value": "Q75: What are code smells? Give examples.",
  "id": "q75-what-are-code-smells-give-examples",
  "level": 4
}, {
  "value": "Quick Reference Tables",
  "id": "quick-reference-tables",
  "level": 2
}, {
  "value": "DBMS Quick Reference",
  "id": "dbms-quick-reference",
  "level": 3
}, {
  "value": "Networks Quick Reference",
  "id": "networks-quick-reference",
  "level": 3
}, {
  "value": "OS Quick Reference",
  "id": "os-quick-reference",
  "level": 3
}, {
  "value": "DS Quick Reference",
  "id": "ds-quick-reference",
  "level": 3
}, {
  "value": "OOPs Quick Reference",
  "id": "oops-quick-reference",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
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
    summary: "summary",
    sup: "sup",
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
        id: "chapter-1-technical-interview--core-computer-science-subjects",
        children: "Chapter 1: Technical Interview — Core Computer Science Subjects"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master 100+ frequently asked interview questions across DBMS, Computer Networks, Operating Systems, Data Structures, OOPs, and Software Engineering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand concepts with clear, concise answers suitable for both fresher and experienced level interviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write TypeScript code examples for data structure and algorithm questions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build quick-reference tables for rapid last-minute revision before interviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize question patterns that repeat across TCS, Infosys, Wipro, Google, Amazon, Microsoft, and government exam interviews"
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
        href: "../../assets/images/lessons/interview-preparation/01-technical-interview-core-cs/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/01-technical-interview-core-cs/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/interview-preparation/01-technical-interview-core-cs/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/01-technical-interview-core-cs/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/interview-preparation/01-technical-interview-core-cs/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/interview-preparation/01-technical-interview-core-cs/visual-explanation.png",
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
      id: "section-a-database-management-systems-dbms",
      children: "Section A: Database Management Systems (DBMS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-what-is-normalization-explain-1nf-2nf-3nf-and-bcnf-with-examples",
      children: "Q1: What is normalization? Explain 1NF, 2NF, 3NF, and BCNF with examples."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Normalization is the process of organizing data to reduce redundancy and improve data integrity by decomposing tables into smaller related tables."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1NF (First Normal Form):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each column contains atomic (indivisible) values"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each column has unique name"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The order of data does not matter"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Example violation:"
        }), " A \"PhoneNumbers\" column containing \"9876543210, 8765432109\" — must be split into separate rows."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2NF (Second Normal Form):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In 1NF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Every non-key column is fully functionally dependent on the primary key (no partial dependency)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Example violation:"
        }), " Table(StudentID, CourseID, StudentName, Instructor) — StudentName depends only on StudentID, not on the composite key (StudentID, CourseID)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3NF (Third Normal Form):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In 2NF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No transitive dependency (non-key column should not depend on another non-key column)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Example violation:"
        }), " Table(EmployeeID, DepartmentID, DepartmentName) — DepartmentName depends on DepartmentID, which is not a candidate key."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCNF (Boyce-Codd Normal Form):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In 3NF"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For every functional dependency X → Y, X must be a super key"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Example violation:"
        }), " Table(StudentID, Subject, Professor) where one Professor teaches only one Subject, but a Subject can have multiple Professors. Here Professor → Subject, but Professor is not a super key."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-what-are-acid-properties-in-database-transactions",
      children: "Q2: What are ACID properties in database transactions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ACID properties guarantee reliable processing of database transactions."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Property"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Meaning"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Atomicity"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transaction is all-or-nothing; partial execution rolls back completely"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transfer of ₹1000 from A to B deducts from A AND adds to B, or neither happens"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Consistency"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Database moves from one valid state to another; all constraints preserved"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "After transfer, total money remains same (A+B is constant)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Isolation"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Concurrent transactions don't interfere; each appears to execute alone"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Two simultaneous transfers from A to B and A to C don't create inconsistency"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Durability"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Committed changes survive system failures"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Once transfer is committed, it persists even if power fails immediately after"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-explain-different-types-of-joins-with-examples",
      children: "Q3: Explain different types of JOINs with examples."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " JOINs combine rows from two or more tables based on related columns."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Sample Tables\nEmployees: EmpID, Name, DeptID\nDepartments: DeptID, DeptName\n\n-- INNER JOIN: Returns matching rows from both tables\nSELECT E.Name, D.DeptName\nFROM Employees E\nINNER JOIN Departments D ON E.DeptID = D.DeptID;\n\n-- LEFT JOIN: All rows from left table, matched rows from right\nSELECT E.Name, D.DeptName\nFROM Employees E\nLEFT JOIN Departments D ON E.DeptID = D.DeptID;\n\n-- RIGHT JOIN: All rows from right table, matched rows from left\nSELECT E.Name, D.DeptName\nFROM Employees E\nRIGHT JOIN Departments D ON E.DeptID = D.DeptID;\n\n-- FULL OUTER JOIN: All rows from both tables\nSELECT E.Name, D.DeptName\nFROM Employees E\nFULL OUTER JOIN Departments D ON E.DeptID = D.DeptID;\n\n-- CROSS JOIN: Cartesian product (every row with every row)\nSELECT E.Name, D.DeptName\nFROM Employees E\nCROSS JOIN Departments D;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-what-is-indexing-explain-clustered-vs-non-clustered-index",
      children: "Q4: What is indexing? Explain clustered vs non-clustered index."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Indexing is a data structure technique to quickly locate data without scanning the entire table."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
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
              children: "Physical order matches index"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Logical order, separate structure"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Per table"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only 1 allowed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multiple allowed"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Storage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No extra space (table itself is index)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Extra space for index structure"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Speed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Faster for range queries"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slower than clustered"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Leaf nodes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Contain actual data"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Contain pointers to data"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Clustered index (automatically created on PK)\nCREATE CLUSTERED INDEX idx_emp_id ON Employees(EmpID);\n\n-- Non-clustered index\nCREATE NONCLUSTERED INDEX idx_emp_name ON Employees(Name);\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⭐ Must Know:"
        }), " In SQL Server, primary key creates a clustered index by default. In MySQL (InnoDB), primary key is always a clustered index."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q5-what-is-a-deadlock-in-databases-how-is-it-handled",
      children: "Q5: What is a deadlock in databases? How is it handled?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A deadlock occurs when two or more transactions hold locks on resources each other needs, creating a circular wait."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Transaction 1: Locks Table A → waits for Table B\nTransaction 2: Locks Table B → waits for Table A\nBoth transactions wait indefinitely → Deadlock\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadlock handling strategies:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prevention:"
          }), " Acquire all locks upfront, or enforce lock ordering"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detection:"
          }), " Wait-for graph; DBMS periodically checks for cycles"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolution:"
          }), " Choose a victim transaction to rollback (usually the one with least cost)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Avoidance:"
          }), " Use lock timeouts (", (0,jsx_runtime.jsx)(_components.code, {
            children: "LOCK_TIMEOUT"
          }), " in SQL Server)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Set lock timeout in SQL Server\nSET LOCK_TIMEOUT 5000; -- 5 seconds\n\n-- In MySQL\nSET innodb_lock_wait_timeout = 5;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q6-explain-the-difference-between-delete-truncate-and-drop",
      children: "Q6: Explain the difference between DELETE, TRUNCATE, and DROP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " All three remove data but with different semantics."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
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
              children: "Removes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Specific rows (with WHERE)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "All rows"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Entire table structure + data"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Speed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slow (logs each row)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fast (deallocates pages)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Immediate"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Rollback"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Possible in transaction"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Possible in transaction"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cannot rollback (in most cases)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Triggers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fires triggers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Does not fire triggers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Does not fire"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Identity reset"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes (resets to seed)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "N/A"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "DELETE FROM Employees WHERE DeptID = 10;\nTRUNCATE TABLE Employees;\nDROP TABLE Employees;\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q7-what-are-nosql-databases-when-would-you-use-them-over-rdbms",
      children: "Q7: What are NoSQL databases? When would you use them over RDBMS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " NoSQL databases are non-relational databases designed for scale, flexibility, and specific data models."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Types:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Use Case"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Document"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MongoDB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Content management, catalogs"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Key-Value"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Redis"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Caching, session storage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Column-Family"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cassandra"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Time-series, IoT"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Graph"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Neo4j"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Social networks, recommendation"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "When to use NoSQL over RDBMS:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Schema-less or rapidly changing data models"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Horizontal scaling required (sharding)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "High-velocity data ingestion"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Simple key-based lookups"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When ACID compliance is not critical"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "When NOT to use:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Complex joins and transactions needed"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Strict consistency requirements"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Well-defined schema"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Reporting/BI workloads"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q8-explain-the-cap-theorem",
      children: "Q8: Explain the CAP theorem."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The CAP theorem states that a distributed data store can provide only two of three guarantees simultaneously:"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Guarantee"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Meaning"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Consistency"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Every read receives the most recent write"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Availability"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Every request receives a non-error response"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Partition Tolerance"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "System continues operating despite network partitions"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trade-offs:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CP (Consistency + Partition Tolerance):"
          }), " Bank transactions, financial systems"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AP (Availability + Partition Tolerance):"
          }), " Social media feeds, CDNs"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CA (Consistency + Availability):"
          }), " Traditional RDBMS (single-node)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real Experience:"
          }), " In my NIC interview, the panel asked me to explain CAP with real-world examples. I mentioned UPI payments (CP) vs. Facebook news feed (AP)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q9-what-is-a-transaction-explain-savepoint-and-commit",
      children: "Q9: What is a transaction? Explain SAVEPOINT and COMMIT."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A transaction is a logical unit of work that contains one or more SQL statements."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction control commands:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "BEGIN TRANSACTION;\n  UPDATE Accounts SET Balance = Balance - 1000 WHERE AccID = 1;\n  SAVEPOINT after_debit;\n  UPDATE Accounts SET Balance = Balance + 1000 WHERE AccID = 2;\n  \n  IF @@ERROR &lt;&gt; 0\n    ROLLBACK TO after_debit;\n  ELSE\n    COMMIT;\n"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Command"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Effect"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BEGIN TRANSACTION"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Marks start of transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "COMMIT"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Saves all changes permanently"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ROLLBACK"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Undoes all changes since BEGIN"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SAVEPOINT"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Creates a rollback point within transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ROLLBACK TO SAVEPOINT"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Undoes changes to a savepoint"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q10-what-is-a-view-can-we-update-data-through-a-view",
      children: "Q10: What is a view? Can we update data through a view?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A view is a virtual table based on the result set of a SELECT query. It does not store data physically."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Create a view\nCREATE VIEW ActiveEmployees AS\nSELECT EmpID, Name, DeptID\nFROM Employees\nWHERE Status = 'Active';\n\n-- Query the view\nSELECT * FROM ActiveEmployees;\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Updatable views requirements:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Must be based on a single table (no joins)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Must include all NOT NULL columns from the base table"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cannot use aggregate functions, GROUP BY, DISTINCT, or set operations"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cannot use subqueries in the SELECT list"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- This view is updatable\nCREATE VIEW EmpBasic AS\nSELECT EmpID, Name, Salary FROM Employees;\n\nUPDATE EmpBasic SET Salary = 60000 WHERE EmpID = 101; -- Works\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q11-explain-the-differences-between-sql-and-nosql-databases",
      children: "Q11: Explain the differences between SQL and NoSQL databases."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Key differences between SQL and NoSQL databases:"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Dimension"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "SQL (RDBMS)"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "NoSQL"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Data Model"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tables with rows/columns"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Documents, key-value, graphs, columns"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Schema"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fixed, predefined"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dynamic, flexible"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "ACID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Full support"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BASE (Basically Available, Soft state, Eventually consistent)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Scalability"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Vertical (scale-up)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Horizontal (scale-out)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Joins"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Supported"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No native joins (application-level)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Consistency"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Strong consistency"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Eventual consistency"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Examples"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL, PostgreSQL, Oracle, SQL Server"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MongoDB, Redis, Cassandra, Neo4j"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Best for"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Structured data, complex queries"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Big data, real-time apps, unstructured data"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q12-what-is-sharding-in-databases",
      children: "Q12: What is sharding in databases?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Sharding is a horizontal partitioning technique where data is distributed across multiple database instances (shards). Each shard holds a subset of data."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Application → Router → Shard 1 (Users A-M)\n                       → Shard 2 (Users N-Z)\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sharding strategies:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Strategy"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Range-based"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Data distributed by value range"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Users A-H in Shard 1, I-P in Shard 2"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Hash-based"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash of key determines shard"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hash(user_id) % N"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Directory-based"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Lookup table maps keys to shards"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Central catalog service"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Geographic"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Data placed near users"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "US users in US shard, EU users in EU shard"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenges:"
        }), " Cross-shard joins, distributed transactions, resharding, backup complexity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q13-explain-er-diagrams-with-components",
      children: "Q13: Explain ER diagrams with components."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Entity-Relationship (ER) diagrams model the logical structure of databases."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Components:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Symbol"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Represents"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Rectangle"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Entity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Student, Course, Employee"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Ellipse"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Attribute"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Name, Age, Address"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Diamond"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Relationship"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Enrolls, Manages, Works"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Line"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connects components"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Links entities to relationships"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Relationships:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1:1"
          }), " — One student has one locker"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1:N"
          }), " — One department has many employees"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "M:N"
          }), " — Many students enroll in many courses"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Keys:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Primary Key:"
          }), " Uniquely identifies each row"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Foreign Key:"
          }), " References primary key in another table"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Composite Key:"
          }), " Combination of two or more columns"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Candidate Key:"
          }), " All columns that could be primary key"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Super Key:"
          }), " Any set of columns that uniquely identifies rows"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q14-what-is-the-difference-between-where-and-having-clauses",
      children: "Q14: What is the difference between WHERE and HAVING clauses?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Both filter rows but at different stages."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Applied"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Before GROUP BY"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "After GROUP BY"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Used with"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SELECT, UPDATE, DELETE"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "GROUP BY clause"
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
              children: "Performance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Filters rows early (efficient)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Filters groups (less efficient)"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- WHERE filters individual rows before grouping\nSELECT DeptID, AVG(Salary) as AvgSalary\nFROM Employees\nWHERE Status = 'Active'           -- Filter active employees\nGROUP BY DeptID\nHAVING AVG(Salary) &gt; 50000;       -- Filter departments\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q15-what-is-a-stored-procedure-how-is-it-different-from-a-function",
      children: "Q15: What is a stored procedure? How is it different from a function?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A stored procedure is a precompiled set of SQL statements stored in the database."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "-- Stored Procedure\nCREATE PROCEDURE GetEmployeeByDept\n  @DeptID INT\nAS\nBEGIN\n  SELECT EmpID, Name, Salary\n  FROM Employees\n  WHERE DeptID = @DeptID;\nEND;\n\n-- Execute\nEXEC GetEmployeeByDept @DeptID = 10;\n"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Stored Procedure"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Function"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Return value"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can return 0 or more values"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must return a single value"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DML operations"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Allowed (INSERT, UPDATE, DELETE)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cannot modify data"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Called from"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "EXEC statement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SELECT statement"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Transaction"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can have transactions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cannot have transactions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Output parameters"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Supported"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not supported"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Exception handling"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TRY-CATCH supported"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not supported"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-b-computer-networks",
      children: "Section B: Computer Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q16-explain-the-osi-model-with-each-layer-and-its-function",
      children: "Q16: Explain the OSI model with each layer and its function."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The OSI model has 7 layers, each responsible for specific network functions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart TB\n    subgraph \"OSI Model (7 Layers)\"\n        L7[\"7. Application<br/>HTTP, FTP, SMTP, DNS\"]\n        L6[\"6. Presentation<br/>SSL, TLS, Encryption\"]\n        L5[\"5. Session<br/>NetBIOS, RPC, Session Mgmt\"]\n        L4[\"4. Transport<br/>TCP, UDP, Ports\"]\n        L3[\"3. Network<br/>IP, ICMP, ARP, Routing\"]\n        L2[\"2. Data Link<br/>Ethernet, MAC, Switching\"]\n        L1[\"1. Physical<br/>Cables, Hubs, Signals\"]\n    end\n"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Layer"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Function"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Protocols"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Devices"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Application"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "User-facing network services"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HTTP, FTP, SMTP, DNS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gateway"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Presentation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Data translation, encryption"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SSL, TLS, JPEG, MPEG"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gateway"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Session"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Session management, sync"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetBIOS, RPC, PPTP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gateway"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Transport"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "End-to-end delivery, error recovery"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TCP, UDP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gateway"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Network"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Logical addressing, routing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IP, ICMP, ARP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Router"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Data Link"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Framing, MAC addressing, error detection"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Ethernet, PPP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Switch, Bridge"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Physical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bit transmission over medium"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "RS-232, 1000BASE-T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hub, Repeater"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mnemonic:"
        }), " \"Please Do Not Throw Sausage Pizza Away\" (Physical → Application)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q17-what-is-the-difference-between-tcp-and-udp",
      children: "Q17: What is the difference between TCP and UDP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " TCP and UDP are transport layer protocols with different characteristics."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "TCP"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "UDP"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Full form"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transmission Control Protocol"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "User Datagram Protocol"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection-oriented (3-way handshake)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection-less"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Reliability"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Guaranteed delivery"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No guarantee (best effort)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Ordering"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maintains packet order"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No ordering"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Speed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slower (overhead)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Faster (no overhead)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Header size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "20-60 bytes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "8 bytes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Flow control"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes (sliding window)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Error checking"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes (checksum + ACK)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes (checksum only)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Use cases"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Web (HTTP), Email (SMTP), File (FTP)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Streaming, DNS, VoIP, Gaming"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP Three-Way Handshake:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. Client → Server: SYN (seq=x)\n2. Client ← Server: SYN-ACK (seq=y, ack=x+1)\n3. Client → Server: ACK (seq=x+1, ack=y+1)\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q18-what-is-dns-and-how-does-it-work",
      children: "Q18: What is DNS and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " DNS (Domain Name System) translates human-readable domain names to IP addresses."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution process:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. User types \"www.google.com\" in browser\n2. Browser checks local cache → if not found\n3. Query goes to Recursive DNS Resolver (ISP)\n4. Resolver queries Root DNS Server → gets .com TLD server\n5. Resolver queries .com TLD Server → gets google.com nameserver\n6. Resolver queries google.com Authoritative nameserver → gets IP\n7. IP returned to browser → HTTPS connection established\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart LR\n    User[User Browser] --> Recursive[Recursive Resolver]\n    Recursive --> Root[Root Server]\n    Recursive --> TLD[.com TLD Server]\n    Recursive --> Auth[Authoritative Server<br/>google.com]\n    Auth --> IP[Returns 142.250.67.78]\n    IP --> User\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS Record Types:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Record"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maps domain to IPv4 address"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "AAAA"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maps domain to IPv6 address"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CNAME"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Canonical name (alias)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "MX"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mail exchange server"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "NS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Nameserver"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "TXT"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Text information (SPF, DKIM)"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q19-explain-the-differences-between-http-and-https",
      children: "Q19: Explain the differences between HTTP and HTTPS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " HTTPS is HTTP over SSL/TLS encryption."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "HTTP"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "HTTPS"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Full form"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HyperText Transfer Protocol"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HTTP Secure"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Encryption"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "None (plain text)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SSL/TLS encryption"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Default port"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "80"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "443"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Certificate"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not required"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SSL certificate needed"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Security"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Vulnerable to MITM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resistant to MITM"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Faster"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slower (encryption overhead)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SEO ranking"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Lower priority"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Higher priority"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Browser indicator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "\"Not Secure\" warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Padlock icon"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "SSL/TLS Handshake (Simplified):"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. Client Hello (supports TLS 1.3, cipher suites)\n2. Server Hello (selects TLS version, cipher)\n3. Server sends Certificate (SSL cert with public key)\n4. Client verifies certificate with CA\n5. Client generates Pre-Master Secret, encrypts with server's public key\n6. Both derive session keys\n7. Begin encrypted communication\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q20-what-is-a-firewall-and-how-does-it-work",
      children: "Q20: What is a firewall and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A firewall is a network security device that monitors and filters incoming/outgoing traffic based on security rules."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Types:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Layer"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "How it works"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Packet Filter"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Network (L3)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Inspects packet headers (IP, port)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Stateful"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transport (L4)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tracks connection state"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Application"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Application (L7)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Inspects packet payload"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Proxy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Application (L7)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Acts as intermediary"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Next-Gen"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multi-layer"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Deep packet inspection, IDS/IPS"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⭐ Must Know:"
        }), " In government exams, questions about firewall types and OSI layers are common."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q21-what-is-subnetting-explain-with-example",
      children: "Q21: What is subnetting? Explain with example."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Subnetting divides a larger network into smaller subnetworks to improve performance and security."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Given IP 192.168.1.0/24, create 4 subnets."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Original: 192.168.1.0/24 → 256 IPs (254 usable)\nSubnet mask: 255.255.255.0\n\nTo create 4 subnets, borrow 2 bits from host portion:\nNew prefix: /26 (255.255.255.192)\n\nSubnet 1: 192.168.1.0/26   → 192.168.1.1 - 192.168.1.62\nSubnet 2: 192.168.1.64/26  → 192.168.1.65 - 192.168.1.126\nSubnet 3: 192.168.1.128/26 → 192.168.1.129 - 192.168.1.190\nSubnet 4: 192.168.1.192/26 → 192.168.1.193 - 192.168.1.254\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnetting Shortcut:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/24 = 256 IPs (254 usable)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/25 = 128 IPs (126 usable)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/26 = 64 IPs (62 usable)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/27 = 32 IPs (30 usable)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/28 = 16 IPs (14 usable)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/29 = 8 IPs (6 usable)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "/30 = 4 IPs (2 usable)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q22-explain-ip-addressing-classes",
      children: "Q22: Explain IP addressing classes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " IP addresses are classified into classes based on the first octet."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Class"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "First Octet"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Default Mask"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Network/Host Bits"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Range"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1-126"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "/8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1N.3H"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1.0.0.0 - 126.255.255.255"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "B"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "128-191"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "/16"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2N.2H"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "128.0.0.0 - 191.255.255.255"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "C"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "192-223"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "/24"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3N.1H"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "192.0.0.0 - 223.255.255.255"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "D"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "224-239"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multicast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "224.0.0.0 - 239.255.255.255"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "E"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "240-255"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Experimental"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "240.0.0.0 - 255.255.255.255"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Special addresses:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "127.0.0.0/8:"
          }), " Loopback (localhost)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "169.254.0.0/16:"
          }), " APIPA (Auto-configuration)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16:"
          }), " Private IP ranges"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q23-what-is-arp-and-how-does-it-work",
      children: "Q23: What is ARP and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ARP (Address Resolution Protocol) maps IP addresses to MAC addresses in a local network."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ARP workflow:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. Host A wants to send packet to 192.168.1.5\n2. Host A checks ARP cache for mapping\n3. If not found, Host A broadcasts ARP request:\n   \"Who has 192.168.1.5? Tell 192.168.1.2 (MAC: AA:BB:CC:DD:EE:FF)\"\n4. Host B (192.168.1.5) responds with ARP reply:\n   \"192.168.1.5 is at MAC: 11:22:33:44:55:66\"\n5. Host A caches the mapping and sends the packet\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ARP Spoofing/Poisoning:"
        }), " An attacker sends fake ARP replies to associate their MAC with another host's IP, enabling MITM attacks. Mitigation: Dynamic ARP Inspection (DAI), static ARP entries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q24-what-is-the-difference-between-hub-switch-and-router",
      children: "Q24: What is the difference between Hub, Switch, and Router?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " These are network devices operating at different OSI layers."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Hub"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Switch"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Router"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "OSI Layer"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Physical (L1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Data Link (L2)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Network (L3)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Data unit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Signal/Bits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Frame"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Packet"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Addressing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "None"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAC address"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IP address"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Collision domain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single (all ports)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Per port"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Per port"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Broadcast domain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Per interface"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Intelligence"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "None (repeats all)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Learning (MAC table)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Routing protocols"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Use"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Small home networks"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "LAN networks"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connecting networks (WAN)"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q25-what-are-the-http-methods-and-their-purposes",
      children: "Q25: What are the HTTP methods and their purposes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " HTTP methods define the action to be performed on a resource."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Method"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "CRUD Equivalent"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Idempotent"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Safe"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Body"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Use Case"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GET"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Read"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Retrieve resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "POST"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Create"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Create resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "PUT"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Update/Replace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Replace resource entirely"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "PATCH"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Partial Update"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Partial modification"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DELETE"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Delete"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Remove resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "HEAD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Get headers only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "OPTIONS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Get allowed methods"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP Status Codes quick reference:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1xx:"
          }), " Informational (100 Continue, 101 Switching Protocols)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "2xx:"
          }), " Success (200 OK, 201 Created, 204 No Content)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "3xx:"
          }), " Redirection (301 Moved Permanently, 302 Found, 304 Not Modified)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "4xx:"
          }), " Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "5xx:"
          }), " Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q26-what-is-cidr-notation",
      children: "Q26: What is CIDR notation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " CIDR (Classless Inter-Domain Routing) notation specifies IP addresses with a prefix length indicating the network bits."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Format: IP_Address / Prefix_Length\nExample: 192.168.1.0/24\n\n/24 means the first 24 bits are network bits, last 8 bits are host bits.\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CIDR vs Classful:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Classful (A, B, C)"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Classless (CIDR)"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Flexibility"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fixed blocks"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Variable sizes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Efficiency"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Wastes IPs"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Efficient allocation"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Subnet mask"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Implicit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Explicit (/n notation)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Example"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Class C = 256 IPs"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "/27 = 32 IPs"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q27-what-is-a-vpn",
      children: "Q27: What is a VPN?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A VPN (Virtual Private Network) creates an encrypted tunnel over a public network, ensuring privacy and secure communication."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Types:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Site-to-Site"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connects entire networks"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Branch office to HQ"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Remote Access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Individual connects to network"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Employee working from home"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSL VPN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Uses browser (no client needed)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Clientless access"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "IPsec VPN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dedicated VPN protocol"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Secure site-to-site"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "VPN Protocols:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Protocol"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Port"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Security"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Speed"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "PPTP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1723"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Weak"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fast"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "L2TP/IPsec"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1701"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Strong"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Medium"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "OpenVPN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1194 (UDP)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Very strong"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Medium"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "WireGuard"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "51820"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Very strong"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fast"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q28-what-is-the-difference-between-ipv4-and-ipv6",
      children: "Q28: What is the difference between IPv4 and IPv6?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " IPv6 is the successor to IPv4, designed to address IPv4 exhaustion."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "IPv4"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "IPv6"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Address length"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32 bits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "128 bits"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Address space"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "~4.3 billion"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "~340 undecillion"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Format"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dotted decimal (192.168.1.1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hexadecimal (2001:db8::1)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Header size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "20-60 bytes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "40 bytes (fixed)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Fragmentation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "By routers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "By sender only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Security"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional (IPsec)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Built-in (IPsec mandatory)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "NAT"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Commonly needed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not needed"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "ARP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Uses ARP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Uses NDP (Neighbor Discovery Protocol)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Broadcast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Available"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No broadcast (uses multicast)"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q29-what-is-a-mac-address",
      children: "Q29: What is a MAC address?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A MAC (Media Access Control) address is a unique hardware identifier assigned to network interface cards (NICs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " 48-bit, usually written as 12 hexadecimal digits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "00:1A:2B:3C:4D:5E"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "First 24 bits (OUI):"
          }), " Organizationally Unique Identifier — identifies manufacturer"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Last 24 bits:"
          }), " Device-specific, assigned by manufacturer"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Types:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Unicast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique to one device"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Multicast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Identifies group of devices"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Broadcast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "FF:FF:FF:FF:FF:FF (all devices)"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real Experience:"
          }), " An IBPS SO technical panel asked me: \"If two devices have the same IP but different MACs, how does the switch handle it?\" The answer: Switch forwards based on MAC table; duplicate IPs cause address conflicts at L3."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q30-explain-the-sliding-window-protocol",
      children: "Q30: Explain the Sliding Window Protocol."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Sliding Window Protocol controls the flow of data between sender and receiver, allowing multiple frames to be in transit simultaneously."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Types:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stop-and-Wait ARQ:"
          }), " Sender sends one frame, waits for ACK (inefficient)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Go-Back-N ARQ:"
          }), " Sender sends N frames without waiting; on error, resends all from lost frame"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Selective Repeat ARQ:"
          }), " Sender sends N frames; on error, resends only the lost frame(s)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Window Size Calculation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "For efficiency:"
          }), " Window size ≥ 2 * Bandwidth * Propagation Delay / Frame Size"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "In Go-Back-N:"
          }), " Window size ≤ 2", (0,jsx_runtime.jsx)(_components.sup, {
            children: "m"
          }), " - 1 (where m is sequence number bits)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "In Selective Repeat:"
          }), " Window size ≤ 2", (0,jsx_runtime.jsx)(_components.sup, {
            children: "m-1"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q31-what-is-csmacd",
      children: "Q31: What is CSMA/CD?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Carrier Sense Multiple Access with Collision Detection (CSMA/CD) is a protocol for Ethernet networks to handle collisions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Process:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Carrier Sense:"
          }), " Listen before transmitting"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiple Access:"
          }), " Multiple devices share the medium"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Collision Detection:"
          }), " If collision detected, transmit jam signal"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Backoff:"
          }), " Wait random time (exponential backoff) before retrying"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithm:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. Sense carrier → if busy, wait\n2. Transmit data\n3. If collision detected:\n   - Send jam signal (32-bit)\n   - Increment collision counter\n   - Wait random backoff time (0 to 2^k - 1 slot times)\n   - Retry (max 16 attempts)\n4. If no collision → transmission successful\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⭐ Must Know:"
        }), " Modern Ethernet (switched) uses full-duplex, eliminating collisions. CSMA/CD is mainly historical."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q32-what-is-the-difference-between-symmetric-and-asymmetric-encryption",
      children: "Q32: What is the difference between Symmetric and Asymmetric encryption?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Two main encryption approaches with different key management."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Symmetric"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Asymmetric"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Keys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single shared key"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Public + Private key pair"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Speed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slow (100-1000x slower)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Key length"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "128-256 bits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2048-4096 bits"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Key distribution"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Problematic (must share securely)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Easy (public key is public)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Use case"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bulk encryption"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Key exchange, digital signatures"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Algorithms"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "AES, DES, 3DES, Blowfish"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "RSA, ECC, Diffie-Hellman"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid approach:"
        }), " Use asymmetric (RSA) to exchange a session key, then symmetric (AES) for bulk encryption. This is how HTTPS works."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-c-operating-systems",
      children: "Section C: Operating Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q33-what-is-a-process-differentiate-between-process-and-thread",
      children: "Q33: What is a process? Differentiate between process and thread."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A process is a program in execution with its own memory space."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Process"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Thread"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Definition"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Program in execution"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Lightweight unit of a process"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Separate address space"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Shares process memory"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Communication"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC (pipes, sockets, shared memory)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Direct memory access"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Context switch"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Heavy (expensive)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Light (cheap)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Overhead"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Low"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Creation"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "fork()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CreateProcess()"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "pthread_create()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CreateThread()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Failure"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "One process does not affect others"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "One thread can crash the process"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Resources"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Own code, data, heap, stack"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Own stack only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Example"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running Chrome browser"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Each tab as thread"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q34-explain-different-cpu-scheduling-algorithms",
      children: "Q34: Explain different CPU scheduling algorithms."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " CPU scheduling algorithms determine which process gets the CPU next."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Algorithm"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Pros"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Cons"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "FCFS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Non-preemptive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "First-come, first-served"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Simple, fair"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Convoy effect"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SJF"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Non/Preemptive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Shortest job first"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optimal avg wait time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Starvation possible"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SRTF"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Preemptive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Shortest remaining time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optimal response"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Overhead, starvation"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Round Robin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Preemptive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fixed time quantum"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fair, responsive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Higher context switch"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Priority"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Both"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Higher priority first"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Important tasks first"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Starvation (aging solves)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Multilevel Queue"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Both"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multiple queues by priority"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Good for mixed workloads"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Queue starvation"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Formulas:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Turnaround Time"
          }), " = Completion Time - Arrival Time"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Waiting Time"
          }), " = Turnaround Time - Burst Time"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Response Time"
          }), " = First Response - Arrival Time"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q35-what-is-deadlock-explain-necessary-conditions",
      children: "Q35: What is deadlock? Explain necessary conditions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Deadlock is a state where two or more processes are waiting indefinitely for resources held by each other."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Four Necessary Conditions (Coffman Conditions):"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Condition"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Analogy"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Mutual Exclusion"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resources cannot be shared"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only one car can use the bridge at a time"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Hold and Wait"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Process holds resources while waiting for others"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Holding one key while waiting for another"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "No Preemption"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resources cannot be forcibly taken"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cannot take key from someone's hand"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Circular Wait"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Circular chain of processes waiting"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "A waits for B, B waits for C, C waits for A"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadlock Handling:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prevention:"
          }), " Ensure at least one condition never holds"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Avoidance:"
          }), " Banker's algorithm (safe state check)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detection:"
          }), " Wait-for graph (cycle detection)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recovery:"
          }), " Kill process or preempt resources"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q36-explain-paging-and-segmentation",
      children: "Q36: Explain paging and segmentation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Memory management techniques for efficient use of physical memory."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Paging:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Divides virtual memory into fixed-size blocks called ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "pages"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Physical memory divided into same-size blocks called ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "frames"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Uses ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Page Table"
          }), " to map virtual pages to physical frames"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Eliminates external fragmentation"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Internal fragmentation possible (last page)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Segmentation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Divides program into logical segments (code, data, stack, heap)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each segment has variable size"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Uses ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Segment Table"
          }), " with base and limit"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Allows sharing at segment level"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "External fragmentation possible (variable sizes)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paged Segmentation:"
        }), " Combines both — segments are divided into pages. Used in some architectures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q37-what-is-virtual-memory",
      children: "Q37: What is virtual memory?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Virtual memory allows execution of processes larger than physical RAM by using disk space as an extension of memory."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key concepts:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demand Paging:"
          }), " Pages loaded only when needed"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Page Fault:"
          }), " When accessed page is not in memory"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Page Replacement:"
          }), " Choosing which page to evict"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thrashing:"
          }), " Excessive paging (system spends more time paging than executing)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Page Replacement Algorithms:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Algorithm"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Strategy"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Pros"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Cons"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "FIFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "First-in, first-out"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Simple"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Belady's anomaly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "LRU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Least Recently Used"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Good performance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hardware support needed"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Optimal"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Replace page used farthest in future"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Best (theoretical)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Impossible to implement"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Clock"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Approximates LRU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Efficient"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Approximate only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "NRU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not Recently Used"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Simple"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Coarse granularity"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q38-explain-the-producer-consumer-problem-with-solution",
      children: "Q38: Explain the producer-consumer problem with solution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The Producer-Consumer problem involves two processes sharing a bounded buffer. Producer adds items, Consumer removes items."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution using semaphores:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-c",
          children: "Semaphore empty = N;  // Buffer capacity\nSemaphore full = 0;   // Items in buffer\nSemaphore mutex = 1;  // Mutual exclusion\n\n// Producer\nvoid producer() {\n    while (true) {\n        item = produce();\n        wait(empty);     // Decrease empty count\n        wait(mutex);     // Enter critical section\n        buffer[in] = item;\n        in = (in + 1) % N;\n        signal(mutex);   // Exit critical section\n        signal(full);    // Increase full count\n    }\n}\n\n// Consumer\nvoid consumer() {\n    while (true) {\n        wait(full);      // Decrease full count\n        wait(mutex);     // Enter critical section\n        item = buffer[out];\n        out = (out + 1) % N;\n        signal(mutex);   // Exit critical section\n        signal(empty);   // Increase empty count\n        consume(item);\n    }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q39-what-is-the-difference-between-mutex-and-semaphore",
      children: "Q39: What is the difference between mutex and semaphore?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Both are synchronization mechanisms but with key differences."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Mutex"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Semaphore"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Locking mechanism"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Signaling mechanism"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Ownership"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Owned by locking thread"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No ownership"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Value"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Binary (0/1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can be any non-negative integer"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mutual exclusion"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resource counting"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Unlocking"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must be unlocked by same thread"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can be signaled by any thread"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Priority inversion"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can occur"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not applicable"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Recursive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can be recursive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not typically"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary Semaphore vs Mutex:"
        }), " A binary semaphore (value 0 or 1) is functionally similar to mutex, but:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mutex has ownership; semaphore does not"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mutex supports priority inheritance"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Semaphore can be used for signaling between threads"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q40-what-is-the-bankers-algorithm",
      children: "Q40: What is the Banker's Algorithm?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The Banker's Algorithm is a deadlock avoidance algorithm that ensures the system remains in a safe state."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Data structures:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Available:"
          }), " Vector of available resources of each type"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Max:"
          }), " Maximum demand of each process"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Allocation:"
          }), " Currently allocated resources"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Need:"
          }), " Remaining need (Max - Allocation)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety Algorithm:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. Let Work = Available, Finish[i] = false for all i\n2. Find i such that Finish[i] = false AND Need[i] <= Work\n3. If found: Work = Work + Allocation[i]; Finish[i] = true; goto 2\n4. If all Finish[i] = true → Safe state\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real Experience:"
          }), " In an Infosys interview, the interviewer asked me to simulate Banker's Algorithm with a given allocation matrix. This is very common in both IT and government technical interviews."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q41-what-are-the-different-ipc-mechanisms",
      children: "Q41: What are the different IPC mechanisms?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Inter-Process Communication (IPC) mechanisms allow processes to exchange data."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Mechanism"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example Use"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Pipes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unidirectional data flow (parent-child)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "`ls"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Named Pipes (FIFO)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bidirectional, unrelated processes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Client-server"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Message Queues"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Structured messages with priority"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Job scheduling"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Shared Memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fastest IPC, processes share memory region"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Database buffer pool"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Semaphores"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Synchronization primitive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sync"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Producer-consumer"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Sockets"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Communication over network"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Web servers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Signals"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Async notification to process"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Signal"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Ctrl+C (SIGINT)"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Memory-mapped Files"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "File mapped to process address space"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Large file processing"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q42-what-is-a-system-call-give-examples",
      children: "Q42: What is a system call? Give examples."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A system call is the programmatic way for a user-space program to request services from the operating system kernel."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Categories of system calls:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Category"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Examples"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Process Control"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "fork()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "exec()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "wait()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "exit()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "File Management"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "open()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "read()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "write()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "close()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Device Management"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "ioctl()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "read()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "write()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Information"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "getpid()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "gettimeofday()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "alarm()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Communication"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "pipe()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "shmget()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "socket()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "send()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Protection"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "chmod()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "chown()"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "umask()"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow:"
        }), " User App → Library (glibc) → System Call → Kernel → Hardware"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q43-explain-the-difference-between-internal-and-external-fragmentation",
      children: "Q43: Explain the difference between internal and external fragmentation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Two types of memory fragmentation that waste space."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Internal Fragmentation"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "External Fragmentation"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Definition"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Wasted space inside allocated block"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Wasted space between allocated blocks"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Occurs in"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Paging (fixed-size allocation)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Segmentation (variable-size allocation)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Cause"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Allocated block larger than requested"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Repeated allocate/free creates holes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Solution"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slab allocation, adjust page size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Compaction, coalescing"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Analogy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Giving a 100ml cup for 80ml water"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Scattered empty spaces in a parking lot"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compaction:"
        }), " Moving allocated processes to one end of memory to free contiguous space. Not always possible (process relocation must be dynamic)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q44-what-is-raid-explain-levels",
      children: "Q44: What is RAID? Explain levels."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " RAID (Redundant Array of Independent Disks) combines multiple drives for performance and/or redundancy."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Min Drives"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Capacity"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Redundancy"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Performance"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAID 0"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Striping (no redundancy)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "N × Disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "None"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Best"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAID 1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Mirroring"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "N/2 × Disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Excellent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Good read, slower write"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAID 5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Striping + Parity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "(N-1) × Disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Good (1 disk)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Good read, slow write"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAID 6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Striping + Dual Parity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "(N-2) × Disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Very good (2 disks)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Good read, slow write"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAID 10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Striping + Mirroring"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "N/2 × Disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Excellent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Best all-round"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Common in interviews:"
        }), " \"Why is RAID 5 write performance slower?\" — Because parity calculation overhead and read-modify-write cycle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q45-explain-the-boot-process-of-a-computer",
      children: "Q45: Explain the boot process of a computer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The boot process is the sequence of events from power-on to OS loading."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "1. Power-On Self-Test (POST) — BIOS/UEFI checks hardware\n2. BIOS/UEFI identifies boot device (HDD, SSD, USB)\n3. Bootloader (GRUB, Windows Boot Manager) loads\n4. Bootloader loads kernel into memory\n5. Kernel initializes drivers, filesystem, and processes\n6. init/systemd starts system services\n7. Login prompt / Desktop environment loads\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UEFI vs BIOS:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "BIOS"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "UEFI"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Interface"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Text-based (16-bit)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Graphical (64-bit)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Partition"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MBR (2TB max)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "GPT (9.4ZB max)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Boot time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Slower"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Faster"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Secure Boot"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Network boot"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PXE"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UEFI HTTP Boot"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q46-what-is-the-difference-between-user-mode-and-kernel-mode",
      children: "Q46: What is the difference between user mode and kernel mode?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Modern CPUs support dual-mode operation for system protection."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Aspect"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "User Mode"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Kernel Mode"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Privilege level"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Low (Ring 3)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High (Ring 0)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Limited memory (user space)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Full memory access"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Hardware access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No direct access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Full access"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "System calls"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Required for OS services"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not needed"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Failure"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only user process crashes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Entire system may crash"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Examples"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Browsers, games, text editors"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "OS kernel, device drivers"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition:"
        }), " User → System Call → Kernel Mode → Execute → Return → User Mode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q47-explain-the-concept-of-thrashing",
      children: "Q47: Explain the concept of \"Thrashing\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Thrashing occurs when the system spends more time on page faults and swapping than on actual execution."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Causes:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Too many processes in memory (low degree of multiprogramming)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Insufficient RAM for working set of processes"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Poor locality of reference"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Symptoms:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "CPU utilization drops (CPU waits for I/O)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Disk activity very high (constant page faults)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "System becomes unresponsive"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solutions:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Reduce degree of multiprogramming (suspend some processes)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Increase RAM"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use better page replacement algorithms"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apply working set model"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q48-what-is-the-dining-philosophers-problem",
      children: "Q48: What is the dining philosophers problem?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A classic synchronization problem illustrating deadlock and resource allocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem statement:"
        }), " Five philosophers sit at a round table with five forks. Each philosopher alternates between thinking and eating. To eat, a philosopher needs both left and right forks."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solutions:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resource hierarchy:"
          }), " Number forks; always pick up lower-numbered fork first"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Waiter (arbitrator):"
          }), " Introduce a waiter who allows max 4 philosophers"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chandy-Misra:"
          }), " Use clean/dirty fork states"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Test-and-set:"
          }), " Use mutex per fork, but pick both only if both available"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Livelock vs Deadlock:"
        }), " If all philosophers pick up left fork simultaneously → deadlock. If they put down left fork after timeout → could lead to livelock (repeated attempt)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-d-data-structures",
      children: "Section D: Data Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q49-what-is-the-difference-between-an-array-and-a-linked-list",
      children: "Q49: What is the difference between an array and a linked list?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Both are linear data structures with different trade-offs."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Array"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Linked List"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Contiguous allocation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dynamic, non-contiguous"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fixed (static) / Expandable (dynamic)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dynamic"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(1) random access"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n) sequential access"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Insert/Delete"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n) (shifting required)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(1) if node known"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Memory overhead"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Low (only data)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Extra for pointers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Cache locality"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Excellent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Poor"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Reallocation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "May need when full"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No reallocation"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Frequent reads, fixed size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Frequent insert/delete"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// TypeScript: Array vs Linked List\nclass ListNode<T> {\n  constructor(\n    public data: T,\n    public next: ListNode<T> | null = null\n  ) {}\n}\n\nclass LinkedList<T> {\n  constructor(public head: ListNode<T> | null = null) {}\n\n  insertAtBeginning(data: T): void {\n    const newNode = new ListNode(data, this.head);\n    this.head = newNode;\n  }\n\n  // Array equivalent\n  insertAtBeginningArray(arr: T[], data: T): T[] {\n    return [data, ...arr]; // O(n) due to copy\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q50-implement-a-stack-using-arrays-in-typescript",
      children: "Q50: Implement a stack using arrays in TypeScript."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Stack is LIFO (Last-In-First-Out) data structure."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class Stack<T> {\n  private items: T[] = [];\n\n  push(item: T): void {\n    this.items.push(item);\n  }\n\n  pop(): T | undefined {\n    return this.items.pop();\n  }\n\n  peek(): T | undefined {\n    return this.items[this.items.length - 1];\n  }\n\n  isEmpty(): boolean {\n    return this.items.length === 0;\n  }\n\n  size(): number {\n    return this.items.length;\n  }\n\n  // Reverse a string using stack\n  static reverseString(str: string): string {\n    const stack = new Stack<string>();\n    for (const ch of str) {\n      stack.push(ch);\n    }\n    let reversed = '';\n    while (!stack.isEmpty()) {\n      reversed += stack.pop();\n    }\n    return reversed;\n  }\n}\n\n// Usage\nconst stack = new Stack<number>();\nstack.push(1);\nstack.push(2);\nstack.push(3);\nconsole.log(stack.pop());    // 3\nconsole.log(stack.peek());   // 2\nconsole.log(Stack.reverseString('hello')); // 'olleh'\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q51-implement-a-queue-using-linked-list",
      children: "Q51: Implement a queue using linked list."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Queue is FIFO (First-In-First-Out) data structure."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class QueueNode<T> {\n  constructor(\n    public data: T,\n    public next: QueueNode<T> | null = null\n  ) {}\n}\n\nclass Queue<T> {\n  private front: QueueNode<T> | null = null;\n  private rear: QueueNode<T> | null = null;\n  private count: number = 0;\n\n  enqueue(data: T): void {\n    const newNode = new QueueNode(data);\n    if (this.rear) {\n      this.rear.next = newNode;\n    }\n    this.rear = newNode;\n    if (!this.front) {\n      this.front = newNode;\n    }\n    this.count++;\n  }\n\n  dequeue(): T | null {\n    if (!this.front) return null;\n    const data = this.front.data;\n    this.front = this.front.next;\n    if (!this.front) this.rear = null;\n    this.count--;\n    return data;\n  }\n\n  peek(): T | null {\n    return this.front ? this.front.data : null;\n  }\n\n  isEmpty(): boolean {\n    return this.count === 0;\n  }\n\n  size(): number {\n    return this.count;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q52-explain-binary-search-and-implement-it",
      children: "Q52: Explain binary search and implement it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Binary search finds element in sorted array in O(log n) time."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Binary Search - Iterative\nfunction binarySearchIterative(arr: number[], target: number): number {\n  let left = 0;\n  let right = arr.length - 1;\n\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\n\n// Binary Search - Recursive\nfunction binarySearchRecursive(\n  arr: number[],\n  target: number,\n  left: number,\n  right: number\n): number {\n  if (left > right) return -1;\n\n  const mid = Math.floor((left + right) / 2);\n\n  if (arr[mid] === target) return mid;\n  if (arr[mid] < target) {\n    return binarySearchRecursive(arr, target, mid + 1, right);\n  }\n  return binarySearchRecursive(arr, target, left, mid - 1);\n}\n\n// Find first occurrence (duplicates)\nfunction binarySearchFirst(arr: number[], target: number): number {\n  let left = 0, right = arr.length - 1, result = -1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) {\n      result = mid;\n      right = mid - 1; // Keep searching left\n    } else if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  return result;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q53-what-is-a-binary-tree-implement-tree-traversal",
      children: "Q53: What is a binary tree? Implement tree traversal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A binary tree is a hierarchical data structure where each node has at most two children."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class TreeNode<T> {\n  constructor(\n    public data: T,\n    public left: TreeNode<T> | null = null,\n    public right: TreeNode<T> | null = null\n  ) {}\n}\n\nclass BinaryTree<T> {\n  constructor(public root: TreeNode<T> | null = null) {}\n\n  // Inorder: Left → Root → Right\n  inorder(node: TreeNode<T> | null = this.root): T[] {\n    if (!node) return [];\n    return [\n      ...this.inorder(node.left),\n      node.data,\n      ...this.inorder(node.right),\n    ];\n  }\n\n  // Preorder: Root → Left → Right\n  preorder(node: TreeNode<T> | null = this.root): T[] {\n    if (!node) return [];\n    return [\n      node.data,\n      ...this.preorder(node.left),\n      ...this.preorder(node.right),\n    ];\n  }\n\n  // Postorder: Left → Right → Root\n  postorder(node: TreeNode<T> | null = this.root): T[] {\n    if (!node) return [];\n    return [\n      ...this.postorder(node.left),\n      ...this.postorder(node.right),\n      node.data,\n    ];\n  }\n\n  // Level Order (BFS)\n  levelOrder(): T[][] {\n    if (!this.root) return [];\n    const result: T[][] = [];\n    let queue: TreeNode<T>[] = [this.root];\n\n    while (queue.length > 0) {\n      const level: T[] = [];\n      const nextQueue: TreeNode<T>[] = [];\n      for (const node of queue) {\n        level.push(node.data);\n        if (node.left) nextQueue.push(node.left);\n        if (node.right) nextQueue.push(node.right);\n      }\n      result.push(level);\n      queue = nextQueue;\n    }\n    return result;\n  }\n}\n\n// Usage\nconst tree = new BinaryTree(\n  new TreeNode(1,\n    new TreeNode(2, new TreeNode(4), new TreeNode(5)),\n    new TreeNode(3, new TreeNode(6), new TreeNode(7))\n  )\n);\nconsole.log(tree.inorder());    // [4, 2, 5, 1, 6, 3, 7]\nconsole.log(tree.preorder());   // [1, 2, 4, 5, 3, 6, 7]\nconsole.log(tree.postorder());  // [4, 5, 2, 6, 7, 3, 1]\nconsole.log(tree.levelOrder()); // [[1], [2, 3], [4, 5, 6, 7]]\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q54-what-is-a-binary-search-tree-bst-validate-a-bst",
      children: "Q54: What is a binary search tree (BST)? Validate a BST."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A BST is a binary tree where left subtree values < root < right subtree values."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function isValidBST(\n  root: TreeNode<number> | null,\n  min: number = -Infinity,\n  max: number = Infinity\n): boolean {\n  if (!root) return true;\n  if (root.data <= min || root.data >= max) return false;\n  return (\n    isValidBST(root.left, min, root.data) &&\n    isValidBST(root.right, root.data, max)\n  );\n}\n\n// BST Search\nfunction searchBST(root: TreeNode<number> | null, key: number): TreeNode<number> | null {\n  if (!root || root.data === key) return root;\n  if (key < root.data) return searchBST(root.left, key);\n  return searchBST(root.right, key);\n}\n\n// BST Insert\nfunction insertBST(root: TreeNode<number> | null, key: number): TreeNode<number> {\n  if (!root) return new TreeNode(key);\n  if (key < root.data) root.left = insertBST(root.left, key);\n  else root.right = insertBST(root.right, key);\n  return root;\n}\n\n// Find Inorder Successor\nfunction inorderSuccessor(root: TreeNode<number> | null, p: TreeNode<number> | null): TreeNode<number> | null {\n  let successor: TreeNode<number> | null = null;\n  while (root) {\n    if (p && p.data < root.data) {\n      successor = root;\n      root = root.left;\n    } else {\n      root = root.right;\n    }\n  }\n  return successor;\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q55-implement-a-hash-map-from-scratch",
      children: "Q55: Implement a hash map from scratch."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A hash map stores key-value pairs with O(1) average lookup."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "class HashMap<K, V> {\n  private buckets: Array<Array<[K, V]>>;\n  private size: number = 0;\n  private readonly loadFactor: number = 0.75;\n\n  constructor(private capacity: number = 16) {\n    this.buckets = new Array(capacity).fill(null).map(() => []);\n  }\n\n  private hash(key: K): number {\n    const str = String(key);\n    let hash = 0;\n    for (let i = 0; i < str.length; i++) {\n      hash = (hash << 5) - hash + str.charCodeAt(i);\n      hash |= 0; // Convert to 32-bit integer\n    }\n    return Math.abs(hash) % this.capacity;\n  }\n\n  put(key: K, value: V): void {\n    const index = this.hash(key);\n    const bucket = this.buckets[index];\n    const existing = bucket.find(([k]) => k === key);\n    if (existing) {\n      existing[1] = value;\n    } else {\n      bucket.push([key, value]);\n      this.size++;\n      if (this.size > this.capacity * this.loadFactor) {\n        this.resize();\n      }\n    }\n  }\n\n  get(key: K): V | undefined {\n    const index = this.hash(key);\n    const entry = this.buckets[index].find(([k]) => k === key);\n    return entry ? entry[1] : undefined;\n  }\n\n  delete(key: K): boolean {\n    const index = this.hash(key);\n    const bucket = this.buckets[index];\n    const entryIndex = bucket.findIndex(([k]) => k === key);\n    if (entryIndex !== -1) {\n      bucket.splice(entryIndex, 1);\n      this.size--;\n      return true;\n    }\n    return false;\n  }\n\n  private resize(): void {\n    const entries: Array<[K, V]> = [];\n    for (const bucket of this.buckets) {\n      for (const entry of bucket) {\n        entries.push(entry);\n      }\n    }\n    this.capacity *= 2;\n    this.buckets = new Array(this.capacity).fill(null).map(() => []);\n    this.size = 0;\n    for (const [key, value] of entries) {\n      this.put(key, value);\n    }\n  }\n\n  getSize(): number {\n    return this.size;\n  }\n\n  keys(): K[] {\n    const result: K[] = [];\n    for (const bucket of this.buckets) {\n      for (const [key] of bucket) {\n        result.push(key);\n      }\n    }\n    return result;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q56-explain-sorting-algorithms-with-timespace-complexity",
      children: "Q56: Explain sorting algorithms with time/space complexity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Common sorting algorithms and their characteristics."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Algorithm"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Best"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Average"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Worst"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Space"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Stable"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Bubble"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Selection"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Insertion"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Merge"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Quick"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n²)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Heap"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n log n)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(1)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Counting"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n+k)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n+k)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n+k)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(k)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Radix"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(nk)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(nk)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(nk)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "O(n+k)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Yes"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⭐ Must Know:"
        }), " Quick sort for average case, Merge sort for worst-case guarantees, Counting sort for small integer ranges."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-e-object-oriented-programming-oops",
      children: "Section E: Object-Oriented Programming (OOPs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q57-what-are-the-four-pillars-of-oops",
      children: "Q57: What are the four pillars of OOPs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The four fundamental concepts of object-oriented programming."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pillar"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Real-world analogy"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "TypeScript/Java"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Encapsulation"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bundling data and methods, hiding internal state"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ATM machine (buttons visible, internals hidden)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "private"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "getters/setters"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Abstraction"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hiding implementation details, exposing only functionality"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Car steering wheel (interface), engine (implementation)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "abstract class"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "interface"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Inheritance"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Child class derives properties from parent class"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Parent-child genetic traits"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "extends"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "super()"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Polymorphism"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Same interface, different implementations"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Animal sound → Dog barks, Cat meows"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "method overriding"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "overloading"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Encapsulation\nclass BankAccount {\n  private _balance: number = 0;\n\n  get balance(): number {\n    return this._balance;\n  }\n\n  deposit(amount: number): void {\n    if (amount > 0) this._balance += amount;\n  }\n\n  withdraw(amount: number): boolean {\n    if (amount <= this._balance) {\n      this._balance -= amount;\n      return true;\n    }\n    return false;\n  }\n}\n\n// Inheritance + Polymorphism\nabstract class Animal {\n  constructor(protected name: string) {}\n  abstract makeSound(): string;\n}\n\nclass Dog extends Animal {\n  makeSound(): string {\n    return `${this.name} says Woof!`;\n  }\n}\n\nclass Cat extends Animal {\n  makeSound(): string {\n    return `${this.name} says Meow!`;\n  }\n}\n\n// Polymorphism in action\nconst animals: Animal[] = [new Dog('Buddy'), new Cat('Whiskers')];\nanimals.forEach(a => console.log(a.makeSound()));\n// Buddy says Woof!\n// Whiskers says Meow!\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q58-what-is-the-difference-between-abstract-class-and-interface",
      children: "Q58: What is the difference between abstract class and interface?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Both support abstraction but with different design intents."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Abstract Class"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Interface"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Instantiation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cannot be instantiated"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cannot be instantiated"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Method implementation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can have both abstract + concrete"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only declarations (Java 8+ default methods)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Fields"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can have instance variables"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only static final (constants)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Constructors"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Can have constructors"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No constructors"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Access modifiers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "All allowed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Public only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Inheritance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single inheritance (extends)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multiple inheritance (implements)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "TypeScript"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "abstract class Foo {}"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "interface Foo {}"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Java"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "abstract class Foo {}"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "interface Foo {}"
              })
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// When to use what\n// Abstract class: \"IS-A\" relationship with shared implementation\nabstract class Database {\n  abstract connect(): void;\n  abstract disconnect(): void;\n  logQuery(query: string): void {  // Shared implementation\n    console.log(`Executing: ${query}`);\n  }\n}\n\n// Interface: \"CAN-DO\" capability contract\ninterface Serializable {\n  toJSON(): object;\n  fromJSON(data: object): void;\n}\n\ninterface Loggable {\n  log(message: string): void;\n}\n\nclass MySQLDatabase extends Database implements Serializable, Loggable {\n  connect(): void { /* ... */ }\n  disconnect(): void { /* ... */ }\n  toJSON(): object { return { type: 'mysql' }; }\n  fromJSON(data: object): void { /* ... */ }\n  log(message: string): void { console.log(message); }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q59-explain-method-overloading-vs-overriding",
      children: "Q59: Explain method overloading vs overriding."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Two forms of polymorphism with different timing and context."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Method Overloading"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Method Overriding"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Context"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Same class"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Parent-child classes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Same"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Same"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Parameters"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must differ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must be same"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Return type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "May differ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must be covariant or same"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Keyword"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "override"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Binding"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Compile-time (static)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Run-time (dynamic)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Purpose"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Convenience (same operation, different inputs)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Specialized behavior"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Overloading (TypeScript uses optional params)\nclass Calculator {\n  add(a: number, b: number): number;\n  add(a: string, b: string): string;\n  add(a: any, b: any): any {\n    return a + b;\n  }\n}\n\n// Overriding\nclass Payment {\n  process(amount: number): string {\n    return `Processing generic payment: ₹${amount}`;\n  }\n}\n\nclass CreditCardPayment extends Payment {\n  override process(amount: number): string {\n    return `Processing credit card payment: ₹${amount}`;\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q60-what-is-solid-explain-each-principle",
      children: "Q60: What is SOLID? Explain each principle."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " SOLID are five design principles for maintainable OOP code."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Letter"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Principle"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Meaning"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Violation"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "S"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single Responsibility"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "One class = one reason to change"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "God class"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "O"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open/Closed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open for extension, closed for modification"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Switch-case everywhere"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "L"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Liskov Substitution"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Subtypes must replace base types"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Square extending Rectangle"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "I"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Interface Segregation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Many specific interfaces > one general"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fat interface"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dependency Inversion"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Depend on abstractions, not concretions"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Hardcoded ", (0,jsx_runtime.jsx)(_components.code, {
                children: "new()"
              }), " calls"]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Single Responsibility (SRP)\nclass Invoice {\n  constructor(public items: Item[]) {}\n  calculateTotal(): number { /* ... */ }\n}\n\nclass InvoicePrinter {\n  print(invoice: Invoice): void { /* ... */ }\n}\n\nclass InvoiceRepository {\n  save(invoice: Invoice): void { /* ... */ }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q61-what-is-a-design-pattern-name-common-gof-patterns",
      children: "Q61: What is a design pattern? Name common GoF patterns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Design patterns are reusable solutions to common software design problems. The Gang of Four (GoF) described 23 patterns in 3 categories:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Creational (5):"
        }), " Object creation mechanisms"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pattern"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Singleton"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "One instance globally"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Factory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Creates objects without specifying exact class"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Abstract Factory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Creates families of related objects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Builder"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Constructs complex objects step-by-step"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Prototype"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Creates clone of existing object"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structural (7):"
        }), " Object composition"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pattern"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Adapter"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connects incompatible interfaces"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Decorator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Add behavior dynamically"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Facade"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Simplified interface to subsystem"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Proxy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Controls access to another object"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Composite"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tree structure of objects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Bridge"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Separates abstraction from implementation"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Flyweight"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Shares fine-grained objects"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behavioral (11):"
        }), " Object communication"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pattern"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Observer"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "One-to-many notification"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Strategy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Interchangeable algorithms"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Encapsulates request as object"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "State"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Changes behavior based on state"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Template"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Skeleton algorithm with overridable steps"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Iterator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sequential access to collection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Chain of Responsibility"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Request passes through handlers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Mediator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Centralizes communication"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Visitor"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "New operations on object structure"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Memento"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Captures/restores object state"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Interpreter"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Evaluates language/expressions"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⭐ Must Know:"
        }), " Singleton, Factory, Observer, Strategy, Decorator — most frequently asked."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q62-implement-singleton-pattern-in-typescript",
      children: "Q62: Implement Singleton pattern in TypeScript."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Singleton ensures only one instance of a class exists."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Method 1: Classic Singleton\nclass DatabaseConnection {\n  private static instance: DatabaseConnection;\n\n  private constructor() {\n    // Private constructor prevents direct instantiation\n  }\n\n  static getInstance(): DatabaseConnection {\n    if (!DatabaseConnection.instance) {\n      DatabaseConnection.instance = new DatabaseConnection();\n    }\n    return DatabaseConnection.instance;\n  }\n\n  query(sql: string): void {\n    console.log(`Executing: ${sql}`);\n  }\n}\n\n// Method 2: Singleton with initialization\nclass Logger {\n  private static instance: Logger = new Logger();\n  private logs: string[] = [];\n\n  private constructor() {}\n\n  static getInstance(): Logger {\n    return Logger.instance;\n  }\n\n  log(message: string): void {\n    this.logs.push(message);\n    console.log(message);\n  }\n\n  getLogs(): string[] {\n    return [...this.logs];\n  }\n}\n\n// Usage\nconst db1 = DatabaseConnection.getInstance();\nconst db2 = DatabaseConnection.getInstance();\nconsole.log(db1 === db2); // true\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q63-explain-the-observer-pattern-with-example",
      children: "Q63: Explain the Observer pattern with example."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " The Observer pattern defines a one-to-many dependency between objects."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "interface Observer {\n  update(stock: string, price: number): void;\n}\n\nclass StockMarket {\n  private observers: Observer[] = [];\n  private stocks: Map<string, number> = new Map();\n\n  addObserver(observer: Observer): void {\n    this.observers.push(observer);\n  }\n\n  removeObserver(observer: Observer): void {\n    this.observers = this.observers.filter(o => o !== observer);\n  }\n\n  setPrice(stock: string, price: number): void {\n    this.stocks.set(stock, price);\n    this.notifyObservers(stock, price);\n  }\n\n  private notifyObservers(stock: string, price: number): void {\n    for (const observer of this.observers) {\n      observer.update(stock, price);\n    }\n  }\n}\n\nclass Investor implements Observer {\n  constructor(private name: string) {}\n\n  update(stock: string, price: number): void {\n    console.log(\n      `${this.name} notified: ${stock} is now ₹${price}`\n    );\n  }\n}\n\n// Usage\nconst market = new StockMarket();\nconst ramesh = new Investor('Ramesh');\nconst suresh = new Investor('Suresh');\n\nmarket.addObserver(ramesh);\nmarket.addObserver(suresh);\nmarket.setPrice('TCS', 3450.50);\n// Ramesh notified: TCS is now ₹3450.50\n// Suresh notified: TCS is now ₹3450.50\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q64-what-is-the-difference-between-composition-and-inheritance",
      children: "Q64: What is the difference between composition and inheritance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Two approaches for code reuse with different relationships."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Inheritance"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Composition"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Relationship"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IS-A (Car IS-A Vehicle)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HAS-A (Car HAS-A Engine)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Coupling"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tight (parent-child)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Loose (independent)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Flexibility"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Limited (single parent)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High (can compose any objects)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Code reuse"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Via override"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Via delegation"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Change impact"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Changes to parent affect children"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimal"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Best for"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Related classes with shared behavior"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Complex, changing behaviors"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Inheritance (IS-A)\nclass Animal {\n  eat(): void { console.log('Eating'); }\n}\nclass Dog extends Animal {\n  bark(): void { console.log('Barking'); }\n}\n\n// Composition (HAS-A)\nclass Engine {\n  start(): void { console.log('Engine started'); }\n}\nclass Car {\n  constructor(private engine: Engine) {}\n  start(): void {\n    this.engine.start();\n    console.log('Car is moving');\n  }\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "section-f-software-engineering",
      children: "Section F: Software Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q65-explain-sdlc-phases",
      children: "Q65: Explain SDLC phases."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Software Development Life Cycle (SDLC) has 7 phases."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart LR\n    A[Requirement Analysis] --> B[System Design]\n    B --> C[Implementation/Coding]\n    C --> D[Testing]\n    D --> E[Deployment]\n    E --> F[Maintenance]\n    F -.->|Changes| A\n"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Phase"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Activities"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Output"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Requirement Analysis"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gather requirements, feasibility study"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SRS Document"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "System Design"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Architecture, HLD, LLD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Design Document"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Implementation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Coding, unit testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Source Code"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Integration, system, UAT"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Test Reports"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Deployment"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Installation, training, rollout"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Live System"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Maintenance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bug fixes, enhancements, updates"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Change Logs"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q66-compare-waterfall-vs-agile-methodologies",
      children: "Q66: Compare Waterfall vs Agile methodologies."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Two major SDLC approaches with different philosophies."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Waterfall"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Agile"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Approach"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sequential, linear"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Iterative, incremental"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Requirements"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fixed at start"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Evolving throughout"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Customer involvement"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "At milestones"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Continuous"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Delivery"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single final delivery"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Frequent small releases"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "After development phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughout (continuous)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Documentation"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Heavy, comprehensive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimal, just-in-time"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Flexibility"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Low (changes hard)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High (embraces change)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Best for"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Safety-critical (medical, aviation)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Web apps, startups, evolving products"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Team size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Large"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Small (5-9 members)"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q67-what-is-version-control-explain-git-basic-commands",
      children: "Q67: What is version control? Explain Git basic commands."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Version control tracks changes to files over time."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart LR\n    A[Working Directory] -->|git add| B[Staging Area]\n    B -->|git commit| C[Local Repository]\n    C -->|git push| D[Remote Repository]\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Git commands:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Command"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git init"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Initialize repository"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git clone"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Copy remote repository"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git add"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Stage changes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git commit -m \"msg\""
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Commit staged changes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git push"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Upload commits to remote"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git pull"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fetch + merge from remote"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git branch"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "List/create branches"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git checkout -b branch"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Create and switch branch"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git merge branch"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Merge branch into current"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git rebase"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Reapply commits on top of another base"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git log"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "View commit history"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git diff"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Show changes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git status"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Show file status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "git stash"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Temporarily save changes"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q68-what-is-the-difference-between-verification-and-validation",
      children: "Q68: What is the difference between verification and validation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Verification checks if we built the product right; Validation checks if we built the right product."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Aspect"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Verification"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Validation"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Question"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "\"Are we building the product right?\""
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "\"Are we building the right product?\""
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Focus"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Requirements, design, specifications"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Customer needs, user expectations"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Activities"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Reviews, walkthroughs, inspections"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Testing, UAT"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Artifact"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Documents, code"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Working software"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Stage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Before testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "During/after testing"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q69-explain-the-different-types-of-testing",
      children: "Q69: Explain the different types of testing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Software testing spans multiple levels and types."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-mermaid",
          children: "flowchart TD\n    Testing[Software Testing] --> Level[Testing Levels]\n    Testing --> Type[Testing Types]\n    \n    Level --> Unit[Unit Testing<br/>Individual components]\n    Level --> Integration[Integration Testing<br/>Module interaction]\n    Level --> System[System Testing<br/>Complete system]\n    Level --> Acceptance[Acceptance Testing<br/>UAT, Beta]\n    \n    Type --> Functional[Functional Testing]\n    Type --> NonFunctional[Non-Functional Testing]\n    \n    Functional --> Smoke[Smoke/Sanity]\n    Functional --> Regression[Regression]\n    Functional --> Integration\n    Functional --> System\n    Functional --> UAT\n    \n    NonFunctional --> Performance[Performance/Load]\n    NonFunctional --> Security[Security]\n    NonFunctional --> Usability[Usability]\n    NonFunctional --> Compatibility[Compatibility]\n"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Test Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Who Performs"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Test individual functions/modules"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Developers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Integration"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Test interfaces between modules"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Developers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "System"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Test complete application"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QA team"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Acceptance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Validates business requirements"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Client/end users"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q70-what-is-cicd",
      children: "Q70: What is CI/CD?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " CI/CD automates building, testing, and deployment of applications."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CI (Continuous Integration):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Developers merge code frequently (multiple times/day)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Automated build and test on each merge"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Early detection of integration issues"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CD (Continuous Delivery/Deployment):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Continuous Delivery:"
          }), " Code is always in a deployable state, but deployment is manual"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Continuous Deployment:"
          }), " Every change that passes tests is automatically deployed"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD Pipeline stages:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Source → Build → Test → Deploy to Staging → Integration Test → Deploy to Production\n"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Tool"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Purpose"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Jenkins"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Open-source automation server"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GitHub Actions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CI/CD integrated with GitHub"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GitLab CI"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Built-in GitLab CI/CD"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CircleCI"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cloud CI service"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Docker"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Containerization"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Container orchestration"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q71-what-are-microservices-how-are-they-different-from-monolithic",
      children: "Q71: What are microservices? How are they different from monolithic?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Microservices architecture structures an application as a collection of loosely coupled, independently deployable services."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Aspect"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Monolithic"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Microservices"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Architecture"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single codebase, single deployable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multiple independent services"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Scaling"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Scale entire application"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Scale individual services"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Development"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Large team, complex coordination"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Small teams own each service"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Deployment"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single deployment process"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Independent deployments"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Technology"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "One tech stack per application"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Polyglot (different stacks per service)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Database"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single database"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Database per service"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Failure"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Single point of failure"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Failure isolated to service"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "End-to-end testing is simpler"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Complex integration testing"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenges with microservices:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Network latency (inter-service calls)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Data consistency (distributed transactions)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Monitoring and logging complexity"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Service discovery and load balancing"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Debugging across services"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q72-what-is-the-difference-between-functional-and-non-functional-requirements",
      children: "Q72: What is the difference between functional and non-functional requirements?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Two categories of software requirements."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Aspect"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Functional Requirements"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Non-Functional Requirements"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Definition"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "What the system should do"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "How the system should behave"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Examples"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "\"User can login\""
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "\"Login should respond within 2 seconds\""
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verified by functional testing"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verified by performance/security testing"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Measurability"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Binary (works/doesn't work)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Quantitative (response time, uptime %)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Priority"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must-have"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Important, but negotiable"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Change impact"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Affects features"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Affects architecture"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Categories"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Business rules, features, data"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance, security, scalability, usability"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q73-what-are-the-different-software-process-models",
      children: "Q73: What are the different software process models?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Various process models for software development."]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Model"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Best For"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Waterfall"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sequential phases"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Simple, well-understood projects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "V-Model"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification & validation parallel"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Safety-critical systems"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Iterative"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Repeated cycles of development"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Large, complex projects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Spiral"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Risk-driven iterations"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "High-risk projects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Agile (Scrum)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2-week sprints, adaptive"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Changing requirements"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Rapid Application Development"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UI-heavy, short timeline projects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Prototyping"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Build prototypes for feedback"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unclear requirements"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DevOps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dev + Ops integration, CI/CD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cloud-native applications"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real Experience:"
          }), " In a TCS interview, I was asked: \"Which SDLC model does TCS use?\" Answer: Most TCS projects use Agile (Scrum) or a customized version of Agile depending on client requirements."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q74-explain-the-concept-of-technical-debt",
      children: "Q74: Explain the concept of technical debt."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Technical debt is the implied cost of additional rework caused by choosing an easy (quick) solution now instead of a better approach that would take longer."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Types:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Example"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Code debt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Duplicate code, dead code, complex logic"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Design debt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Poor architecture, missing abstractions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Test debt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Insufficient test coverage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Documentation debt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Missing or outdated docs"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Infrastructure debt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Outdated dependencies, manual deployments"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Management strategies:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Track tech debt in backlog"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Allocate 20% of sprint for debt reduction"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Boy Scout Rule: \"Leave the code better than you found it\""
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Refactor during feature development (incremental improvement)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q75-what-are-code-smells-give-examples",
      children: "Q75: What are code smells? Give examples."
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Click to reveal answer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Code smells are indicators of potential problems in code that may require refactoring."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Common code smells:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Smell"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Solution"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Long Method"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Method does too much"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Extract methods"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Large Class"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "God class with too many responsibilities"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Split into smaller classes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Primitive Obsession"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Using primitives instead of objects"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Create value objects"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Duplicate Code"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Same code appears multiple times"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Extract into shared method/class"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Feature Envy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Method more interested in another class"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Move method to that class"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Switch Statements"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Switching on type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Use polymorphism"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Lazy Class"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Class that does too little"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Inline into parent or remove"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Dead Code"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unused code"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Remove it"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Data Clumps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Groups of data appearing together"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Create class for the group"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-tables",
      children: "Quick Reference Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dbms-quick-reference",
      children: "DBMS Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomicity, Consistency, Isolation, Durability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normal forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1NF (atomic), 2NF (no partial dep), 3NF (no transitive dep), BCNF (super key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JOINs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INNER, LEFT, RIGHT, FULL, CROSS, SELF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustered (1 per table), Non-clustered (multiple)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency, Availability, Partition Tolerance (pick 2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL vs NoSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured vs flexible, ACID vs BASE, vertical vs horizontal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networks-quick-reference",
      children: "Networks Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSI layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical, Data Link, Network, Transport, Session, Presentation, Application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCP vs UDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-oriented vs connectionless, reliable vs best-effort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET (read), POST (create), PUT (replace), DELETE (remove)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain → IP mapping, hierarchical resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnetting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Borrow bits from host portion, /24 = 256 IPs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "os-quick-reference",
      children: "OS Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process vs Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate address space vs shared memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS, SJF, RR, Priority, Multilevel Queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paging (fixed), Segmentation (variable), Virtual Memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipes, Shared Memory, Message Queues, Sockets, Semaphores"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ds-quick-reference",
      children: "DS Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BST (balanced)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) peek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oops-quick-reference",
      children: "OOPs Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data hiding with private members and public methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiding complexity, showing only essential features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child class derives from parent class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same method name, different implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOLID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRP, OCP, LSP, ISP, DIP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the core computer science subjects that form the foundation of any technical interview:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DBMS (15 Q&A):"
        }), " Normalization, ACID, JOINs, indexing, transactions, CAP theorem, NoSQL, ER diagrams, sharding, views, stored procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Networks (17 Q&A):"
        }), " OSI model, TCP/IP, DNS, HTTP/HTTPS, firewall, subnetting, IP classes, ARP, VPN, IPv4/IPv6, MAC, encryption, CIDR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operating Systems (16 Q&A):"
        }), " Process vs thread, CPU scheduling, deadlock, paging vs segmentation, virtual memory, IPC, system calls, RAID, boot process, synchronization problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Structures (8 Q&A):"
        }), " Arrays vs linked lists, stack, queue, binary search, trees, BST, hash map, sorting algorithms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OOPs (8 Q&A):"
        }), " Four pillars, abstract vs interface, overloading vs overriding, SOLID, design patterns, Singleton, Observer, composition vs inheritance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Software Engineering (11 Q&A):"
        }), " SDLC, Waterfall vs Agile, Git, verification vs validation, testing types, CI/CD, microservices, requirements, process models, technical debt, code smells"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Total: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "75 Q&A pairs"
      }), " covering the most commonly asked topics across IT and government exam interviews."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prioritize by company:"
          }), " For product-based companies (Google, Amazon), focus on DS/Algo + System Design. For service-based (TCS, Infosys), focus on DBMS + OOPs + SE. For government exams, focus on Networks + OS + DBMS + general concepts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Practice writing code by hand:"
          }), " Most technical interviews involve writing code on paper or whiteboard. Practice solving problems without an IDE."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain as you solve:"
          }), " Interviewers evaluate thought process as much as correctness. Talk through your approach before coding."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use the collapsible Q&A:"
          }), " Use this chapter for quick revision. Cover your answer, read the question, attempt to answer, then expand to verify."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Connect concepts:"
          }), " Many interview questions combine topics (e.g., \"Design a URL shortener\" combines DBMS design, system design, and networking). Practice cross-topic thinking."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "⭐ Must Know topics:"
          }), " Deadlock conditions, ACID properties, OSI model, TCP vs UDP, SQL JOINs, normalization, process scheduling, BST properties, four pillars of OOPs, SOLID principles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mock drill:"
          }), " Set a timer for 30 minutes. Randomly pick 10 questions from this chapter and answer them verbally. Repeat until you can answer naturally without hesitation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "For government exams:"
          }), " Pay special attention to: OSI layer functions, IP addressing, subnetting, process states, page replacement algorithms, RAID levels, normalization forms, transaction properties."]
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