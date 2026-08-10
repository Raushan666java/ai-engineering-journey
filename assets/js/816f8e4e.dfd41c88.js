"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81542],{

/***/ 92330
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_18_advanced_c_md_816_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-18-advanced-c-md-816.json
const site_docs_courses_c_programming_18_advanced_c_md_816_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/18-advanced-c","title":"Chapter 18: Advanced C","description":"Previous: The C Standard Library","source":"@site/docs/courses/c-programming/18-advanced-c.md","sourceDirName":"courses/c-programming","slug":"/c-programming/18-advanced-c","permalink":"/ai-engineering-journey/c-programming/18-advanced-c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"18-advanced-c","slug":"/c-programming/18-advanced-c","title":"Chapter 18: Advanced C","sidebar_label":"Chapter 18: Advanced C","sidebar_position":18},"sidebar":"coursesSidebar","previous":{"title":"Chapter 17: The C Standard Library","permalink":"/ai-engineering-journey/c-programming/17-standard-library"},"next":{"title":"Computer Networks — Complete Course Textbook","permalink":"/ai-engineering-journey/computer-networks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/18-advanced-c.md


const frontMatter = {
	id: '18-advanced-c',
	slug: '/c-programming/18-advanced-c',
	title: 'Chapter 18: Advanced C',
	sidebar_label: 'Chapter 18: Advanced C',
	sidebar_position: 18
};
const contentTitle = 'Chapter 18: Advanced C';

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
  "level": 3
}, {
  "value": "18.1 Multi-File Programming",
  "id": "181-multi-file-programming",
  "level": 2
}, {
  "value": "18.1.1 Header Files and Header Guards",
  "id": "1811-header-files-and-header-guards",
  "level": 3
}, {
  "value": "18.1.2 The <code>extern</code> Keyword",
  "id": "1812-the-extern-keyword",
  "level": 3
}, {
  "value": "18.1.3 Makefiles",
  "id": "1813-makefiles",
  "level": 3
}, {
  "value": "18.2 Function Pointers",
  "id": "182-function-pointers",
  "level": 2
}, {
  "value": "18.2.1 Function Pointer Basics",
  "id": "1821-function-pointer-basics",
  "level": 3
}, {
  "value": "18.2.2 Callbacks",
  "id": "1822-callbacks",
  "level": 3
}, {
  "value": "18.2.3 Dispatch Tables",
  "id": "1823-dispatch-tables",
  "level": 3
}, {
  "value": "18.3 Variadic Functions",
  "id": "183-variadic-functions",
  "level": 2
}, {
  "value": "18.3.1 Mechanics → <code>stdarg.h</code> Macros",
  "id": "1831-mechanics--stdargh-macros",
  "level": 3
}, {
  "value": "18.3.2 Building a Custom printf",
  "id": "1832-building-a-custom-printf",
  "level": 3
}, {
  "value": "18.3.3 Rules and Pitfalls",
  "id": "1833-rules-and-pitfalls",
  "level": 3
}, {
  "value": "18.4 Complex Declarations (Spiral Rule)",
  "id": "184-complex-declarations-spiral-rule",
  "level": 2
}, {
  "value": "18.4.1 The Spiral Rule",
  "id": "1841-the-spiral-rule",
  "level": 3
}, {
  "value": "18.4.2 Declaration Cheat Sheet",
  "id": "1842-declaration-cheat-sheet",
  "level": 3
}, {
  "value": "18.5 <code>volatile</code> and <code>restrict</code>",
  "id": "185-volatile-and-restrict",
  "level": 2
}, {
  "value": "18.5.1 The <code>volatile</code> Qualifier",
  "id": "1851-the-volatile-qualifier",
  "level": 3
}, {
  "value": "18.5.2 The <code>restrict</code> Qualifier",
  "id": "1852-the-restrict-qualifier",
  "level": 3
}, {
  "value": "18.5.3 <code>volatile</code> vs <code>const</code> vs <code>restrict</code> → Comparison",
  "id": "1853-volatile-vs-const-vs-restrict--comparison",
  "level": 3
}, {
  "value": "18.6 <code>setjmp</code>/<code>longjmp</code> for Error Handling",
  "id": "186-setjmplongjmp-for-error-handling",
  "level": 2
}, {
  "value": "18.6.1 Basic Usage",
  "id": "1861-basic-usage",
  "level": 3
}, {
  "value": "18.6.2 Practical Error Recovery Pattern",
  "id": "1862-practical-error-recovery-pattern",
  "level": 3
}, {
  "value": "18.6.3 <code>setjmp</code>/<code>longjmp</code> vs <code>try-catch</code>",
  "id": "1863-setjmplongjmp-vs-try-catch",
  "level": 3
}, {
  "value": "18.7 Signal Handling",
  "id": "187-signal-handling",
  "level": 2
}, {
  "value": "18.7.1 Standard Signals",
  "id": "1871-standard-signals",
  "level": 3
}, {
  "value": "18.7.2 Safe Signal Handling → the <code>volatile sig_atomic_t</code> Pattern",
  "id": "1872-safe-signal-handling--the-volatile-sig_atomic_t-pattern",
  "level": 3
}, {
  "value": "18.7.3 Signal Disposition",
  "id": "1873-signal-disposition",
  "level": 3
}, {
  "value": "18.8 Variable-Length Arrays (VLAs)",
  "id": "188-variable-length-arrays-vlas",
  "level": 2
}, {
  "value": "18.8.1 Basic VLA",
  "id": "1881-basic-vla",
  "level": 3
}, {
  "value": "18.8.2 VLA in Function Parameters",
  "id": "1882-vla-in-function-parameters",
  "level": 3
}, {
  "value": "18.8.3 Caveats",
  "id": "1883-caveats",
  "level": 3
}, {
  "value": "18.9 Flexible Array Members",
  "id": "189-flexible-array-members",
  "level": 2
}, {
  "value": "18.9.1 Syntax and Usage",
  "id": "1891-syntax-and-usage",
  "level": 3
}, {
  "value": "18.9.2 Rules",
  "id": "1892-rules",
  "level": 3
}, {
  "value": "18.10 Threading (pthreads Basics)",
  "id": "1810-threading-pthreads-basics",
  "level": 2
}, {
  "value": "18.10.1 Creating and Joining Threads",
  "id": "18101-creating-and-joining-threads",
  "level": 3
}, {
  "value": "18.10.2 Mutex Synchronization",
  "id": "18102-mutex-synchronization",
  "level": 3
}, {
  "value": "18.10.3 Condition Variables → Producer/Consumer",
  "id": "18103-condition-variables--producerconsumer",
  "level": 3
}, {
  "value": "18.10.4 pthreads Functions Reference",
  "id": "18104-pthreads-functions-reference",
  "level": 3
}, {
  "value": "18.11 Type Punning and Strict Aliasing",
  "id": "1811-type-punning-and-strict-aliasing",
  "level": 2
}, {
  "value": "18.11.1 The Strict Aliasing Rule (C99 6.5)",
  "id": "18111-the-strict-aliasing-rule-c99-65",
  "level": 3
}, {
  "value": "18.11.2 Legal Type Punning",
  "id": "18112-legal-type-punning",
  "level": 3
}, {
  "value": "18.11.3 Common Strict Aliasing Violations",
  "id": "18113-common-strict-aliasing-violations",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: What happens if <code>volatile</code> is omitted on a memory-mapped register?",
  "id": "q1-what-happens-if-volatile-is-omitted-on-a-memory-mapped-register",
  "level": 3
}, {
  "value": "Q2: What is the strict aliasing rule and when does it bite you?",
  "id": "q2-what-is-the-strict-aliasing-rule-and-when-does-it-bite-you",
  "level": 3
}, {
  "value": "Q3: Function pointer vs <code>switch</code> → when to use which?",
  "id": "q3-function-pointer-vs-switch--when-to-use-which",
  "level": 3
}, {
  "value": "Q4: How do you safely share data between pthreads?",
  "id": "q4-how-do-you-safely-share-data-between-pthreads",
  "level": 3
}, {
  "value": "Q5: How does a signal handler differ from a regular function?",
  "id": "q5-how-does-a-signal-handler-differ-from-a-regular-function",
  "level": 3
}, {
  "value": "Q6: Explain the spiral rule for complex declarations.",
  "id": "q6-explain-the-spiral-rule-for-complex-declarations",
  "level": 3
}, {
  "value": "Q7: What&#39;s the difference between <code>#ifndef</code> guard and <code>#pragma once</code>?",
  "id": "q7-whats-the-difference-between-ifndef-guard-and-pragma-once",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Linux Kernel",
  "id": "linux-kernel",
  "level": 3
}, {
  "value": "Embedded Systems",
  "id": "embedded-systems",
  "level": 3
}, {
  "value": "Database Engines (SQLite, MySQL internals)",
  "id": "database-engines-sqlite-mysql-internals",
  "level": 3
}, {
  "value": "Concept Comparison Tables",
  "id": "concept-comparison-tables",
  "level": 2
}, {
  "value": "Error Recovery: Return Codes vs setjmp/longjmp vs Signals",
  "id": "error-recovery-return-codes-vs-setjmplongjmp-vs-signals",
  "level": 3
}, {
  "value": "Storage Class Comparison",
  "id": "storage-class-comparison",
  "level": 3
}, {
  "value": "Pointer Qualifiers Deep Dive",
  "id": "pointer-qualifiers-deep-dive",
  "level": 3
}, {
  "value": "Table: Sections vs Descriptions",
  "id": "table-sections-vs-descriptions",
  "level": 3
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
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "Self-Checklist",
  "id": "self-checklist",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "chapter-18-advanced-c",
        children: "Chapter 18: Advanced C"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/17-standard-library",
          children: "The C Standard Library"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage multi-file C projects with header guards, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), ", and Makefiles"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use function pointers for callbacks and dispatch tables"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write variadic functions using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdarg.h"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse complex C declarations using the spiral rule"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restrict"
        }), ", and their interplay with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), " for non-local error recovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle signals safely with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sig_atomic_t"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use variable-length arrays and flexible array members"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write multi-threaded programs with pthreads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand type punning and strict aliasing rules"
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
        href: "../../assets/images/lessons/c-programming/18-advanced-c/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/18-advanced-c/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/18-advanced-c/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/18-advanced-c/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/18-advanced-c/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/18-advanced-c/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Multi-File Projects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Split ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".h"
            }), " (interface) and ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".c"
            }), " (implementation)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use header guards; each ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".c"
            }), " includes only what it needs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store and pass function addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables callbacks, dispatch tables, and OOP patterns in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions with variable argument lists"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdarg.h>"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "va_list"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "va_start"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "va_end"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex Declarations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spiral rule: start at identifier, spiral outward"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int (*(*fp)(int))[5]"
            }), " → fp is ptr to fn(int) returning ptr to array[5] of int"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents compiler from optimizing away memory accesses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for hardware registers, signal handlers, shared variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "restrict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promises exclusive pointer access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables auto-vectorization and better code generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-local goto for deep error unwinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More portable than inline assembly; skips destructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asynchronous notifications to a process"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only async-signal-safe functions in handlers; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile sig_atomic_t"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-Length Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime-sized stack arrays (C99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handy but can overflow stack; optional in C11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible Array Members"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Struct with last member ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[]"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " excludes the array; allocate with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pthreads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX threads for concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronize with mutexes and condition variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strict Aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule: don't access same memory via different pointer types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Violation is UB; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "union"
            }), " for type punning"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"18.1 Multi-File\"] --> B[\"18.2 Function Ptrs\"]\n    B --> C[\"18.3 Variadic\"]\n    C --> D[\"18.4 Complex Decl\"]\n    D --> E[\"18.5 volatile/restrict\"]\n    E --> F[\"18.6 setjmp/longjmp\"]\n    F --> G[\"18.7 Signals\"]\n    G --> H[\"18.8 VLAs\"]\n    H --> I[\"18.9 Flexible Arrays\"]\n    I --> J[\"18.10 pthreads\"]\n    J --> K[\"18.11 Strict Aliasing\"]\n    K --> L[\"Interview & Applications\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch-18-advanced-c.png",
        alt: "C Advanced Topics: Multi-file, Function Pointers, pthreads, Strict Aliasing and More"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "181-multi-file-programming",
      children: "18.1 Multi-File Programming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A large corporation divides work into departments (accounting, engineering, HR). Each department has a public interface (reception desk, published phone number) and private internals (internal memos, databases). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".h"
      }), " file is the public face; the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".c"
      }), " file is the implementation behind closed doors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1811-header-files-and-header-guards",
      children: "18.1.1 Header Files and Header Guards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A header file ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".h"
      }), " declares functions, types, and macros that multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".c"
      }), " files share. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "header guard"
      }), " prevents the same header from being ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include"
      }), "d more than once in the same translation unit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why header guards matter:"
      }), " Without them, double inclusion causes redefinition errors for types, structs, and enums."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 1 → Traditional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), " guard (most portable):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// math_utils.h\n#ifndef MATH_UTILS_H\n#define MATH_UTILS_H\n\nint add(int a, int b);\nint multiply(int a, int b);\n\n#endif /* MATH_UTILS_H */\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preprocessor encounters ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include \"math_utils.h\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Checks if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MATH_UTILS_H"
            }), " is defined"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If not: defines ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MATH_UTILS_H"
            }), ", includes entire content"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If yes: skips entire content (file is idempotent)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 2 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#pragma once"
        }), " (shorter, compiler-specific but widely supported):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// math_utils.h\n#pragma once\n\nint add(int a, int b);\nint multiply(int a, int b);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef"
            }), " Guard"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All C compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most (MSVC, GCC, Clang, ICC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typo risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Macro name mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower on large codebases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Libraries targeting obscure compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everyday projects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1812-the-extern-keyword",
      children: ["18.1.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extern"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "extern"
      }), " declares a variable or function that is defined in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "another translation unit"
      }), ". It does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " allocate storage → it tells the linker to resolve the symbol elsewhere."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern → one definition, multiple declarations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// counter.h\n#pragma once\nextern int global_counter;   /* declaration → no storage */\nvoid increment_counter(void);\n\n// counter.c\n#include \"counter.h\"\nint global_counter = 0;      /* definition → storage allocated HERE */\n\nvoid increment_counter(void) { global_counter++; }\n\n// main.c\n#include <stdio.h>\n#include \"counter.h\"\n\nint main(void) {\n    increment_counter();\n    increment_counter();\n    printf(\"Counter: %d\\n\", global_counter);   /* 2 */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Counter: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Rules for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), " declaration at file scope = \"promise this exists elsewhere\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exactly ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one"
        }), " definition across all translation units (ODR → One Definition Rule)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), " can appear in header files; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), " propagates it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Arrays: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern int arr[]"
        }), " (size omitted → linker fills in)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Functions are implicitly ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), "; writing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), " is redundant but stylistically clear"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case → Conflicting Linkage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// a.c\nint x = 10;\n\n// b.c\nextern int x;   /* OK → refers to a.c's x */\n\n// c.c\nstatic int x;   /* ERROR at link: static x in c.c conflicts with external x from a.c */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1813-makefiles",
      children: "18.1.3 Makefiles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Makefile"
      }), " automates compilation so you don't recompile everything from scratch. It tracks file timestamps and rebuilds only what changed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A chef's prep list. If the sauce is already made (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".o"
      }), " file is newer than ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".c"
      }), " file), skip it. Only cook what's needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anatomy of a Makefile rule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target: prerequisites\n\trecipe\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "target"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["File to produce (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "program.exe"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main.o"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prerequisites"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files the target depends on"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "recipe"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Shell command(s) to build the target (must be preceded by a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "tab"
            }), ", not spaces)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Example → three-file project:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-makefile",
        children: "# Makefile\nCC = gcc\nCFLAGS = -Wall -Wextra -std=c99\nOBJS = main.o math_utils.o\nTARGET = program\n\n$(TARGET): $(OBJS)\n\t$(CC) $(CFLAGS) -o $(TARGET) $(OBJS)\n\nmain.o: main.c math_utils.h\n\t$(CC) $(CFLAGS) -c main.c -o main.o\n\nmath_utils.o: math_utils.c math_utils.h\n\t$(CC) $(CFLAGS) -c math_utils.c -o math_utils.o\n\n.PHONY: clean\nclean:\n\trm -f $(OBJS) $(TARGET)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Makefile Targets:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "all"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build everything (default if first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove all build artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy binary to system path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build and run tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "debug"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Build with debug symbols (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-g"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run → what happens when you type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Make Checks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "program"
            }), " exists?"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No -> build it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main.o"
            }), " timestamp vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main.c"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "math_utils.h"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main.c"
            }), " newer -> recompile"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "math_utils.o"
            }), " timestamp vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "math_utils.c"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "math_utils.h"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".o"
            }), " up to date -> skip"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Link ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main.o"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "math_utils.o"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "program"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run linker"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spaces instead of tab:"
        }), " Make refuses to run recipe lines → \"missing separator\" error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Header changes:"
        }), " If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math_utils.h"
        }), " changes, both ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".o"
        }), " files rebuild (correct)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phony targets:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".PHONY"
        }), " tells Make that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clean"
        }), " is not a real file (prevents confusion if a file named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clean"
        }), " exists)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "182-function-pointers",
      children: "18.2 Function Pointers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A TV remote has buttons. Each button points to a different function (volume up, channel change, mute). Pressing a button calls whatever function it's currently mapped to → you don't need to know which circuit handles it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1821-function-pointer-basics",
      children: "18.2.1 Function Pointer Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "return_type (*pointer_name)(parameter_types);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\n\nint main(void) {\n    int (*fp)(int, int);\n\n    fp = add;\n    printf(\"add(5,3) = %d\\n\", fp(5, 3));    /* 8 */\n\n    fp = sub;\n    printf(\"sub(5,3) = %d\\n\", fp(5, 3));    /* 2 */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add(5,3) = 8\nsub(5,3) = 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step declaration reading (see 18.4 for full spiral rule):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int (*fp)(int, int);\n// 1. fp                          → identifier\n// 2. *fp                         → pointer to\n// 3. (*fp)(int, int)             → function taking (int, int)\n// 4. int (*fp)(int, int)         → returning int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1822-callbacks",
      children: "18.2.2 Callbacks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "callback"
      }), " is a function pointer passed as an argument to another function. The receiving function \"calls back\" through the pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Example → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), " from the standard library:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint compare_ints(const void *a, const void *b) {\n    int ia = *(const int *)a;\n    int ib = *(const int *)b;\n    return (ia > ib) - (ia < ib);\n}\n\nint main(void) {\n    int arr[] = {42, 7, 19, 3, 88, 55};\n    size_t n = sizeof(arr) / sizeof(arr[0]);\n\n    qsort(arr, n, sizeof(int), compare_ints);   /* callback! */\n\n    for (size_t i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3 7 19 42 55 88\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["How ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), " uses the callback:"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qsort"
            }), " picks two elements from the array"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compare_ints(&a, &b)"
            }), " through the function pointer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "compare_ints"
            }), " returns -1, 0, or +1"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qsort"
            }), " swaps or leaves based on the comparison result"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeats until the array is sorted"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qsort"
            }), " average"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quickselect-based partitioning; callback is O(1) per call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qsort"
            }), " worst"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor pivot choices; same callback cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callback overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect call through pointer (one extra indirection vs direct call)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1823-dispatch-tables",
      children: "18.2.3 Dispatch Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dispatch table"
      }), " is an array of function pointers. It replaces long ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " statements with O(1) indexed lookups."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An elevator panel. Floor numbers (indices) map to buttons, each button triggers a different action. No if-else chain needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example → calculator with dispatch table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\nint divide(int a, int b) { return b ? a / b : 0; }\n\nint main(void) {\n    int (*ops[])(int, int) = {add, sub, mul, divide};\n    const char *names[] = {\"add\", \"sub\", \"mul\", \"div\"};\n    int a = 10, b = 3;\n\n    for (int i = 0; i < 4; i++) {\n        printf(\"%s(%d,%d) = %d\\n\", names[i], a, b, ops[i](a, b));\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add(10,3) = 13\nsub(10,3) = 7\nmul(10,3) = 30\ndiv(10,3) = 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dispatch Table vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dispatch Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst-case (if values are sparse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows linearly with cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed table + function definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must recompile to add cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can load plugins at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to set breakpoints per case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to trace indirect calls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NULL function pointer:"
        }), " Calling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp()"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fp == NULL"
        }), " is UB (segfault). Always validate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out-of-bounds index:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ops[5](a, b)"
        }), " on a 4-element table - UB. Guard with bounds check."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ABI mismatch:"
        }), " Calling convention mismatch (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__stdcall"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__cdecl"
        }), " on Windows) corrupts the stack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "183-variadic-functions",
      children: "18.3 Variadic Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A buffet restaurant. Every customer pays a fixed entry (the named parameter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), "), then takes a variable number of dishes. The kitchen doesn't know how many dishes each customer will take → the customer communicates the count upfront."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1831-mechanics--stdargh-macros",
      children: ["18.3.1 Mechanics → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stdarg.h"
      }), " Macros"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdarg.h>\n\n/* Last named parameter tells va_start where to begin */\ndouble average(int count, ...)\n{\n    va_list args;\n    double sum = 0.0;\n\n    va_start(args, count);\n\n    for (int i = 0; i < count; i++) {\n        sum += va_arg(args, double);\n    }\n\n    va_end(args);\n\n    return count ? sum / count : 0.0;\n}\n\nint main(void)\n{\n    printf(\"Avg of 3: %.2f\\n\", average(3, 1.5, 2.0, 3.5));\n    printf(\"Avg of 5: %.2f\\n\", average(5, 10.0, 20.0, 30.0, 40.0, 50.0));\n    printf(\"Avg of 0: %.2f\\n\", average(0));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Avg of 3: 2.33\nAvg of 5: 30.00\nAvg of 0: 0.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step-by-step → what ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_start"
        }), " actually does:"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_start(args, count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "args"
            }), " points to stack slot ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "after"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg(args, double)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reads 8 bytes at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "args"
            }), ", advances ", (0,jsx_runtime.jsx)(_components.code, {
              children: "args"
            }), " by 8"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg(args, double)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads next 8 bytes, advances again"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat until all args consumed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_end(args)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "args"
            }), " (no-op on most ABIs)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1832-building-a-custom-printf",
      children: "18.3.2 Building a Custom printf"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdarg.h>\n\nvoid my_printf(const char *format, ...)\n{\n    va_list args;\n    va_start(args, format);\n\n    for (const char *p = format; *p; p++) {\n        if (*p == '%') {\n            p++;\n            switch (*p) {\n                case 'd': { int v = va_arg(args, int); printf(\"%d\", v); break; }\n                case 'f': { double v = va_arg(args, double); printf(\"%f\", v); break; }\n                case 's': { char *v = va_arg(args, char*); printf(\"%s\", v); break; }\n                case 'c': { int v = va_arg(args, int); putchar(v); break; }\n                case '%': putchar('%'); break;\n                default:  putchar('%'); putchar(*p);\n            }\n        } else {\n            putchar(*p);\n        }\n    }\n\n    va_end(args);\n}\n\nint main(void)\n{\n    my_printf(\"Name: %s, Score: %d/%d (%.1f%%)\\n\", \"Alice\", 85, 100, 85.0);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Name: Alice, Score: 85/100 (85.0%)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1833-rules-and-pitfalls",
      children: "18.3.3 Rules and Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one named parameter before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        }), " (required by standard)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default argument promotions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "short"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No type checking on variadic arguments → if you pass an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " but read a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", UB"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No way for the function to know argument count → you must pass it (count, format string, sentinel)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always pair ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_start"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_end"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero variadic arguments:"
        }), " Works if you don't call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_arg"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "average(0)"
        }), " returns 0.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type mismatch:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_arg(args, char*)"
        }), " when the actual arg is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " = UB (likely crash)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "va_copy:"
        }), " C99 provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_copy(dest, src)"
        }), " to save a position for re-scanning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just computes stack offset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg"
            }), " each call"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read + pointer advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_end"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually a no-op"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whole function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of variadic arguments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "184-complex-declarations-spiral-rule",
      children: "18.4 Complex Declarations (Spiral Rule)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Russian nesting dolls (matryoshka). Each layer wraps the previous one. To understand the outermost doll, you open it, see the next, open that, and so on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1841-the-spiral-rule",
      children: "18.4.1 The Spiral Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Also called the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "right-left rule"
      }), ": start at the identifier, move right as far as possible (respecting parentheses), then left, spiraling outward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start at the identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Look right → if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[n]"
            }), " -> array, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(params)"
            }), " -> function"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Look left → if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), " -> pointer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If a closing ", (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            }), " is hit, go back right from there"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat until the type is fully parsed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1 → Simple pointer to function:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int (*fp)(int);\n// Start at fp\n// Right: ) → pause (parenthesis closed)\n// Left: *  → fp is a pointer\n// Right: (int) → to a function taking int\n// Left: int → returning int\n// Result: fp is a pointer to a function taking int returning int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2 → Array of pointers to functions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int (*fpa[5])(double);\n// Start at fpa\n// Right: [5] → fpa is an array of 5\n// Left: *   → pointers\n// Right: (double) → to functions taking double\n// Left: int → returning int\n// Result: fpa is an array[5] of pointers to functions taking double returning int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3 → The \"complex declaration\" classic:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int (*(*fp)(int))[5];\n// Start at fp\n// Right: ) -> go left\n// Left: *  -> fp is a pointer\n// Right: (int) -> to a function taking int\n// Left: *  -> returning a pointer\n// Right: [5] -> to an array of 5\n// Left: int -> ints\n// Result: fp is a pointer to a function taking int returning a pointer to an array[5] of int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Example 4 → Signal handler (actual prototype of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signal()"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void (*signal(int sig, void (*handler)(int)))(int);\n// Start at signal\n// Right: (int sig, void (*handler)(int))\n//   -> function taking (int, pointer-to-function(int)->void)\n// Left: *  -> returning a pointer\n// Right: (int) -> to a function taking int\n// Left: void -> returning void\n// Result: signal is a function taking (int, pointer-to-function(int)->void)\n//         returning pointer-to-function(int)->void\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typedef"
        }), " to simplify:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "typedef void (*sighandler_t)(int);\nsighandler_t signal(int sig, sighandler_t handler);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1842-declaration-cheat-sheet",
      children: "18.4.2 Declaration Cheat Sheet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p[5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is array[5] of pointer to int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is pointer to array[5] of int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *f()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f is function returning pointer to int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*f)()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f is pointer to function returning int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*(*f)[5])()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f is pointer to array[5] of pointer to function returning int"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "185-volatile-and-restrict",
      children: ["18.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1851-the-volatile-qualifier",
      children: ["18.5.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), " Qualifier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A thermometer in a server room. The temperature changes independently of the monitoring program. The program must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "always"
      }), " read the actual thermometer, not a cached value from an hour ago."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), " tells the compiler: \"This variable can change at any time, outside the program's control. Always read it from memory. Never optimize away accesses.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <signal.h>\n\nvolatile sig_atomic_t flag = 0;\n\nvoid handler(int sig) {\n    flag = 1;   /* Signal handler modifies flag asynchronously */\n}\n\nint main(void) {\n    signal(SIGINT, handler);\n    printf(\"Press Ctrl+C...\\n\");\n\n    /* Without volatile, the compiler might hoist flag into a register\n       and never re-read it → loop would never terminate */\n    while (!flag) {\n        /* wait */\n    }\n\n    printf(\"Signal received!\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), " → what could happen:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int flag = 0;   /* non-volatile → BUG */\nwhile (!flag) {\n    /* Compiler optimizes:\n       if (!flag) goto loop;   <- flag is read ONCE, then infinite loop */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), " is essential:"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-mapped I/O registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware changes the value → compiler must not cache it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handler writes, main loop reads → no synchronizing code path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-threaded flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread A writes, Thread B spins → not atomic but prevents caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            }), " variables"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Values modified between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            }), " may be indeterminate"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1852-the-restrict-qualifier",
      children: ["18.5.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), " Qualifier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A single-occupancy restroom. Only one person can use it at a time. The building manager knows this and can schedule maintenance without worrying about conflicts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), " (C99) is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "promise"
      }), " to the compiler that for the lifetime of the pointer, only that pointer (or a copy derived from it) will access the memory it points to."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nvoid vector_add(int *restrict c, const int *restrict a, const int *restrict b, int n)\n{\n    for (int i = 0; i < n; i++) {\n        c[i] = a[i] + b[i];\n    }\n}\n\nint main(void)\n{\n    int a[] = {1, 2, 3, 4, 5};\n    int b[] = {10, 20, 30, 40, 50};\n    int c[5];\n\n    vector_add(c, a, b, 5);\n\n    for (int i = 0; i < 5; i++) printf(\"%d \", c[i]);\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "11 22 33 44 55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restrict"
        }), " enables for the compiler:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), ", the compiler must assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " could overlap, so every iteration re-reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[i]"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b[i]"
      }), " from memory. With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), ", the compiler can keep values in registers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Violating ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restrict"
        }), " → undefined behavior:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[] = {1, 2, 3, 4, 5};\nvector_add(arr, arr, arr + 2, 3);   /* UB: c and a alias */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1853-volatile-vs-const-vs-restrict--comparison",
      children: ["18.5.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), " → Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Qualifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Means"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compiler Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I promise not to modify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents writes; enables const-propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only data, API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External forces may modify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disables caching; forces loads/stores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware registers, signals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "restrict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No other pointer aliases this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables reordering; auto-vectorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical loops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Combined examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Read-only hardware register → value changes externally but program can't write */\nconst volatile uint32_t *status_reg = (uint32_t *)0xFF200000;\n//   ^^^^^   ^^^^^^^^\n//   can't write   must re-read every time\n\n/* Restrict + const → read-only, no aliasing */\nint sum_array(const int *restrict arr, int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += arr[i];\n    return s;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "volatile"
          }), " is not atomic:"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile int x = 0;"
        }), " in thread A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x++"
        }), ", thread B reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " → race condition. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Atomic"
        }), " (C11) for atomics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "volatile"
          }), " does not prevent all optimizations:"]
        }), " The compiler still reorders ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-volatile"
        }), " accesses around volatile ones."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "restrict"
          }), " is a promise, not a check:"]
        }), " The compiler will not warn you if you violate it. The resulting UB is often silent data corruption."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "186-setjmplongjmp-for-error-handling",
      children: ["18.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " for Error Handling"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A fire evacuation plan for a skyscraper. Instead of slowly walking down every floor (unwinding one stack frame at a time through return codes), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp"
      }), " places emergency exits on every floor, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " teleports everyone to the ground floor instantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1861-basic-usage",
      children: "18.6.1 Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <setjmp.h>\n\njmp_buf env;\n\nvoid risky_function(void) {\n    printf(\"  In risky_function → about to longjmp!\\n\");\n    longjmp(env, 42);   /* 42 = return value seen by setjmp */\n}\n\nint main(void) {\n    int ret;\n\n    ret = setjmp(env);\n    if (ret == 0) {\n        printf(\"Calling risky_function...\\n\");\n        risky_function();\n        printf(\"This line is never reached.\\n\");\n    } else {\n        printf(\"Back in main after longjmp. Code: %d\\n\", ret);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Calling risky_function...\n  In risky_function → about to longjmp!\nBack in main after longjmp. Code: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step execution:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ret = setjmp(env)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saves registers/stack pointer -> returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "risky_function()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal call → pushes frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp(env, 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores saved context → pops frame back to 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ret = setjmp(env)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 42 (the value from longjmp)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1862-practical-error-recovery-pattern",
      children: "18.6.2 Practical Error Recovery Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <setjmp.h>\n#include <stdlib.h>\n\njmp_buf env;\n\nvoid process_file(const char *path) {\n    FILE *f = fopen(path, \"r\");\n    if (!f) {\n        longjmp(env, 1);   /* file error */\n    }\n    fclose(f);\n}\n\nvoid process_data(void) {\n    int *data = malloc(1000000 * sizeof(int));\n    if (!data) {\n        longjmp(env, 2);   /* memory error */\n    }\n    free(data);\n}\n\nint main(void) {\n    int err = setjmp(env);\n    if (err == 0) {\n        process_file(\"/nonexistent/path\");\n        process_data();\n    } else {\n        fprintf(stderr, \"Error %d occurred. Recovering...\\n\", err);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1863-setjmplongjmp-vs-try-catch",
      children: ["18.6.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try-catch"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "try-catch"
            }), " (C++ / Java)"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++, Java, C#"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual → stack is unwound without destructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic → destructors run (stack unwinding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast → just restore registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate → type matching, stack unwinding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            }), " passes an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can throw any type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested handlers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One active ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jmp_buf"
            }), " per scope"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lexical nesting with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "try"
            }), " blocks"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skipped → no cleanup runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All local objects destroyed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Resource Cleanup Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <setjmp.h>\n#include <stdlib.h>\n\njmp_buf env;\n\nvoid func(void) {\n    int *p = malloc(100);\n    if (!p) longjmp(env, 1);\n\n    /* ... some work ... */\n\n    if (/* error condition */) {\n        free(p);            /* MUST free before longjmp! */\n        longjmp(env, 2);\n    }\n\n    free(p);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "volatile"
          }), " local variables:"]
        }), " If a local variable is modified between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), ", its value after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), " is indeterminate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unless"
        }), " it's declared ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Nested ", (0,jsx_runtime.jsx)(_components.code, {
            children: "longjmp"
          }), ":"]
        }), " Only the most recent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), " context is valid after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jmp_buf"
          }), ":"]
        }), " Calling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), " with an uninitialized ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jmp_buf"
        }), " is UB."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(register count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saves CPU registers and stack pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restores saved context, no iteration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "187-signal-handling",
      children: "18.7 Signal Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A smoke alarm in a building. It interrupts whatever you're doing (asynchronously). You have a predefined response: stop cooking, open windows, investigate. You don't call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " while handling the alarm → you do minimal safe actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1871-standard-signals",
      children: "18.7.1 Standard Signals"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGABRT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate + core"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "abort()"
            }), " called"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGFPE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate + core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero, overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGILL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate + core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Illegal instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGINT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGSEGV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate + core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segfault (null pointer, invalid access)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGTERM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kill"
            }), " command"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGUSR1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SIGALRM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Timer expired (", (0,jsx_runtime.jsx)(_components.code, {
              children: "alarm()"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1872-safe-signal-handling--the-volatile-sig_atomic_t-pattern",
      children: ["18.7.2 Safe Signal Handling → the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile sig_atomic_t"
      }), " Pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <signal.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nvolatile sig_atomic_t interrupted = 0;\n\nvoid handler(int sig) {\n    interrupted = 1;   /* Only safe operations here */\n}\n\nint main(void) {\n    signal(SIGINT, handler);\n\n    printf(\"Running. Press Ctrl+C to stop.\\n\");\n    while (!interrupted) {\n        printf(\"Working...\\n\");\n        sleep(1);\n    }\n\n    printf(\"\\nGraceful shutdown. Cleanup performed.\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Async-Signal-Safe Functions (short list):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unsafe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Exit()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "abort()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signal()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sig_atomic_t"
            }), " writes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most library functions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1873-signal-disposition",
      children: "18.7.3 Signal Disposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <signal.h>\n#include <unistd.h>\n\nint main(void) {\n    signal(SIGINT, SIG_IGN);\n    printf(\"SIGINT ignored for 3 seconds...\\n\");\n    sleep(3);\n\n    signal(SIGINT, SIG_DFL);\n    printf(\"Default restored. Try Ctrl+C now.\\n\");\n    sleep(3);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reentrancy:"
        }), " Signal handler might interrupt itself if the same signal arrives twice → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile sig_atomic_t"
        }), " which guarantees lock-free read/write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "signal()"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sigaction()"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sigaction()"
        }), " (POSIX) is preferred for production → it's more portable and gives finer control over signal masks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undefined behavior:"
        }), " Calling non-async-signal-safe functions in a handler is UB, often manifesting as deadlocks (if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), "'s internal lock is held when the signal arrives)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "188-variable-length-arrays-vlas",
      children: "18.8 Variable-Length Arrays (VLAs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A custom-tailored suit. Unlike off-the-rack (fixed-size array), a tailored suit is cut to your exact measurements at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1881-basic-vla",
      children: "18.8.1 Basic VLA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int n;\n\n    printf(\"Enter array size: \");\n    scanf(\"%d\", &n);\n\n    int arr[n];                /* VLA → size determined at runtime */\n    printf(\"Size of VLA: %zu bytes\\n\", sizeof(arr));\n\n    for (int i = 0; i < n; i++) {\n        arr[i] = i * i;\n        printf(\"arr[%d] = %d\\n\", i, arr[i]);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (n = 4):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[i] = i*i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base + 0 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base + 4 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base + 8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base + 12 bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1882-vla-in-function-parameters",
      children: "18.8.2 VLA in Function Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid print_matrix(int rows, int cols, int matrix[rows][cols]) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            printf(\"%3d \", matrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n}\n\nint main(void) {\n    int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    print_matrix(2, 3, m);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1883-caveats",
      children: "18.8.3 Caveats"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large VLA exhausts stack silently"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            }), " for large arrays"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No error detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segfault instead of NULL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n"
            }), " against a sane limit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No file scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLAs only have automatic storage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Move to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " or use dynamic alloc"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof runtime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(vla)"
            }), " is evaluated at runtime"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid in perf-critical paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optional in C11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler may not support (MSVC)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifdef __STDC_NO_VLA__"
            }), " to detect"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Allocate n elements on stack (single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "alloca"
            }), "-like instruction)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as fixed array → pointer + offset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime value stored in hidden local"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "189-flexible-array-members",
      children: "18.9 Flexible Array Members"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A suitcase with an expandable compartment. The main structure (handle, wheels, zippers) has fixed size, but the internal volume expands to whatever you need."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1891-syntax-and-usage",
      children: "18.9.1 Syntax and Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flexible array member"
      }), " is the last member of a struct with no specified size:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nstruct buffer {\n    size_t length;\n    char data[];          /* flexible array member → no size */\n};\n\nint main(void) {\n    size_t n = 100;\n    struct buffer *buf = malloc(sizeof(struct buffer) + n);\n\n    if (!buf) return 1;\n\n    buf->length = n;\n    for (size_t i = 0; i < n; i++) {\n        buf->data[i] = (char)i;\n    }\n\n    printf(\"sizeof(struct buffer) = %zu\\n\", sizeof(struct buffer));\n    printf(\"Total allocation       = %zu\\n\", sizeof(struct buffer) + n);\n    printf(\"buf->data[42]          = %d\\n\", buf->data[42]);\n\n    free(buf);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(struct buffer) = 8\nTotal allocation       = 108\nbuf->data[42]          = 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory layout (64-bit system):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Offset 0:  length (8 bytes)\nOffset 8:  data[0], data[1], ... data[n-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1892-rules",
      children: "18.9.2 Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Must be last member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible array must be the final element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "At least one other member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot have only the flexible array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " excludes the array"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(struct) = offset of data"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy is shallow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            }), " copies the struct header only"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array of flexible structs:"
        }), " Not possible → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct buffer arr[5];"
        }), " is invalid (elements would overlap)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assignment:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct buffer b = *buf;"
        }), " copies only the fixed members → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " not copied."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-length:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc(sizeof(struct buffer) + 0)"
        }), " is legal → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " points to nothing useful."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison with fixed-size array:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flexible Array"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Fixed Array ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char data[256]"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → exact fit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted if actual data < 256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by struct size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excludes array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes full size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1810-threading-pthreads-basics",
      children: "18.10 Threading (pthreads Basics)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant kitchen with multiple chefs. Each chef (thread) works independently but shares the stove, sink, and ingredients (shared resources). The head chef (main thread) coordinates without collisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18101-creating-and-joining-threads",
      children: "18.10.1 Creating and Joining Threads"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <pthread.h>\n#include <stdlib.h>\n\n#define NUM_THREADS 4\n\ntypedef struct {\n    int id;\n    int start;\n    int end;\n} thread_arg_t;\n\nvoid *work(void *arg) {\n    thread_arg_t *t = (thread_arg_t *)arg;\n    long long sum = 0;\n\n    for (int i = t->start; i < t->end; i++) {\n        sum += i * i;\n    }\n\n    printf(\"Thread %d: sum(%d..%d) = %lld\\n\", t->id, t->start, t->end - 1, sum);\n\n    long long *result = malloc(sizeof(long long));\n    *result = sum;\n    return result;\n}\n\nint main(void) {\n    pthread_t threads[NUM_THREADS];\n    thread_arg_t args[NUM_THREADS];\n    int chunk = 1000 / NUM_THREADS;\n\n    for (int i = 0; i < NUM_THREADS; i++) {\n        args[i].id = i;\n        args[i].start = i * chunk;\n        args[i].end = (i == NUM_THREADS - 1) ? 1000 : (i + 1) * chunk;\n        pthread_create(&threads[i], NULL, work, &args[i]);\n    }\n\n    long long total = 0;\n    for (int i = 0; i < NUM_THREADS; i++) {\n        long long *res;\n        pthread_join(threads[i], (void **)&res);\n        total += *res;\n        free(res);\n    }\n\n    printf(\"Total sum of squares 0..999 = %lld\\n\", total);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Thread 0: sum(0..249) = 5154125\nThread 1: sum(250..499) = 36179125\nThread 2: sum(500..749) = 102954125\nThread 3: sum(750..999) = 204229125\nTotal sum of squares 0..999 = 348654500\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compile with:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gcc -pthread program.c -o program"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18102-mutex-synchronization",
      children: "18.10.2 Mutex Synchronization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <pthread.h>\n\n#define ITERATIONS 1000000\n\nlong long counter = 0;\npthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;\n\nvoid *increment(void *arg) {\n    for (int i = 0; i < ITERATIONS; i++) {\n        pthread_mutex_lock(&mutex);\n        counter++;\n        pthread_mutex_unlock(&mutex);\n    }\n    return NULL;\n}\n\nint main(void) {\n    pthread_t t1, t2;\n\n    pthread_create(&t1, NULL, increment, NULL);\n    pthread_create(&t2, NULL, increment, NULL);\n\n    pthread_join(t1, NULL);\n    pthread_join(t2, NULL);\n\n    printf(\"Expected: %d\\n\", 2 * ITERATIONS);\n    printf(\"Got:      %lld\\n\", counter);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (with mutex):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected: 2000000\nGot:      2000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What happens without the mutex:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expected: 2000000\nGot:      1823491   <- race condition: lost updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18103-condition-variables--producerconsumer",
      children: "18.10.3 Condition Variables → Producer/Consumer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <pthread.h>\n#include <unistd.h>\n\npthread_mutex_t mtx = PTHREAD_MUTEX_INITIALIZER;\npthread_cond_t cond = PTHREAD_COND_INITIALIZER;\nint ready = 0;\n\nvoid *producer(void *arg) {\n    sleep(1);   /* simulate work */\n    pthread_mutex_lock(&mtx);\n    ready = 1;\n    printf(\"Producer: data is ready\\n\");\n    pthread_cond_signal(&cond);    /* wake up consumer */\n    pthread_mutex_unlock(&mtx);\n    return NULL;\n}\n\nvoid *consumer(void *arg) {\n    pthread_mutex_lock(&mtx);\n    while (!ready) {\n        printf(\"Consumer: waiting...\\n\");\n        pthread_cond_wait(&cond, &mtx);   /* atomically unlocks mutex, sleeps */\n    }\n    printf(\"Consumer: got data!\\n\");\n    pthread_mutex_unlock(&mtx);\n    return NULL;\n}\n\nint main(void) {\n    pthread_t t1, t2;\n    pthread_create(&t1, NULL, producer, NULL);\n    pthread_create(&t2, NULL, consumer, NULL);\n    pthread_join(t1, NULL);\n    pthread_join(t2, NULL);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Consumer: waiting...\nProducer: data is ready\nConsumer: got data!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18104-pthreads-functions-reference",
      children: "18.10.4 pthreads Functions Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spawn a new thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for thread to finish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_lock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquire mutex (blocking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_unlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release mutex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_cond_wait"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait on condition variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_cond_signal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wake one waiting thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_exit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit current thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_detach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make thread unjoinable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadlock:"
        }), " Thread A locks mutex1 then mutex2; Thread B locks mutex2 then mutex1 → both wait forever. Fix: always acquire locks in the same order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority inversion:"
        }), " Low-priority thread holds lock needed by high-priority thread → solved by priority inheritance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detached threads:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_detach"
        }), " → no need to join, but you lose the return value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spurious wakeup:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_cond_wait"
        }), " may return without signal → always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while (!condition)"
        }), " loop."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) ~10-100us"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(stack) ~8MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel allocates stack, scheduler entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_lock"
            }), " (uncontended)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) ~10ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-space atomic (futex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_lock"
            }), " (contended)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(context switch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel sleep/wake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_join"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(wait time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block until thread exits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1811-type-punning-and-strict-aliasing",
      children: "18.11 Type Punning and Strict Aliasing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A USB-C port can carry power, video, or data → different protocols through the same physical connector. If you plug in a charger and try to read it as a display signal, you get garbage. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strict aliasing rule"
      }), " says: don't read a memory location as a type different from what was last written."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18111-the-strict-aliasing-rule-c99-65",
      children: "18.11.1 The Strict Aliasing Rule (C99 6.5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "An object shall have its stored value accessed only by an lvalue expression that has one of the following types:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The object's effective type"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["A qualified version of that type (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "const int"
          }), " for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), ")"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A signed or unsigned variant of that type"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "An aggregate or union type containing one of the above"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["A character type (", (0,jsx_runtime.jsx)(_components.code, {
            children: "char"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "signed char"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unsigned char"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation example (UB):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "float f = 3.14f;\nint *p = (int *)&f;\nprintf(\"%d\\n\", *p);   /* UB → reading float bits as int */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it's UB:"
      }), " The compiler may optimize based on the assumption that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int*"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float*"
      }), " never alias. When they do, the optimizer produces wrong code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18112-legal-type-punning",
      children: "18.11.2 Legal Type Punning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Method 1 → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy"
        }), " (the portable way):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n#include <stdint.h>\n\nfloat bits_to_float(uint32_t bits) {\n    float f;\n    memcpy(&f, &bits, sizeof(f));   /* Always legal → char* exception */\n    return f;\n}\n\nint main(void) {\n    uint32_t n = 0x40490FDB;   /* ~3.14159 in IEEE 754 */\n    float pi = bits_to_float(n);\n    printf(\"pi = %f\\n\", pi);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pi = 3.14159\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2 → Union (legal in C, undefined in C++):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdint.h>\n\nunion float_bits {\n    float f;\n    uint32_t u;\n};\n\nint main(void) {\n    union float_bits fb;\n    fb.f = 3.14f;\n    printf(\"Float: %f\\n\", fb.f);\n    printf(\"Bits:  0x%08X\\n\", fb.u);    /* Legal in C: read a different union member */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18113-common-strict-aliasing-violations",
      children: "18.11.3 Common Strict Aliasing Violations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Violation 1: Pointer cast then dereference */\nvoid process_word(uint32_t *w) {\n    uint16_t *half = (uint16_t *)w;\n    *half = 0xFFFF;            /* UB */\n}\n\n/* Violation 2: Different pointer arithmetic */\nfloat *fp = malloc(10 * sizeof(float));\nint *ip = (int *)fp;\nip[0] = 42;                    /* UB */\n\n/* Correct: use memcpy */\nvoid process_word_safe(uint32_t *w) {\n    uint16_t half;\n    memcpy(&half, w, sizeof(half));\n    half = 0xFFFF;\n    memcpy(w, &half, sizeof(half));\n}\n\n/* Correct: use character type for byte access */\nvoid set_bytes(uint32_t *w, uint8_t b) {\n    unsigned char *bytes = (unsigned char *)w;   /* char* is always legal */\n    for (size_t i = 0; i < sizeof(*w); i++)\n        bytes[i] = b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safety"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct cast + dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) ~2 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C only (UB in C++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char*"
            }), " access"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q1-what-happens-if-volatile-is-omitted-on-a-memory-mapped-register",
      children: ["Q1: What happens if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), " is omitted on a memory-mapped register?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Embedded: reading a status register */\nint *status = (int *)0xFF200000;\nwhile (!(*status & 0x01)) {  /* Compiler may read status ONCE into register */\n    /* infinite loop → status never re-read from hardware */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The compiler hoists the read out of the loop. Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), ", the loop becomes an infinite spin on a cached value. Hardware changes the register, but the program never sees it. Embedded developers rank this as their #1 \"mysterious bug\" cause."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-strict-aliasing-rule-and-when-does-it-bite-you",
      children: "Q2: What is the strict aliasing rule and when does it bite you?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The strict aliasing rule (C99 6.5) forbids accessing the same memory via incompatible pointer types. It bites hardest in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serialization/deserialization:"
        }), " Reinterpreting a byte buffer as a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct"
        }), " is UB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Networking:"
        }), " Casting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char*"
        }), " packet data to a network header struct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Math libraries:"
        }), " Treating ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float*"
        }), " as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int*"
        }), " to extract exponent/mantissa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom allocators:"
        }), " Casting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), " blocks to different types"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The common fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memcpy"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "union"
      }), " (if staying in C)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-function-pointer-vs-switch--when-to-use-which",
      children: ["Q3: Function pointer vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " → when to use which?"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Pointer Table"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            }), " Statement"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatching cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) indirect call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) jump table or O(n) comparison chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → load from plugin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → compile-time only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback patterns can be opaque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear, explicit cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inlining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not possible (indirect call)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (direct call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin architectures, state machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed, known-at-compile dispatch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-safely-share-data-between-pthreads",
      children: "Q4: How do you safely share data between pthreads?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutexes"
        }), " for exclusive access (most common)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Condition variables"
        }), " for producer-consumer patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic operations"
        }), " (C11 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stdatomic.h>"
        }), ") for simple flags/counters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read-write locks"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_rwlock_t"
        }), ") for read-heavy workloads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread-local storage"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "__thread"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Thread_local"
        }), ") for per-thread data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-a-signal-handler-differ-from-a-regular-function",
      children: "Q5: How does a signal handler differ from a regular function?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signal Handler"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asynchronous interrupt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same stack, normal call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate/current stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be reentrant (can be called again while running)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only async-signal-safe functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can only touch ", (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile sig_atomic_t"
            }), " safely"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-explain-the-spiral-rule-for-complex-declarations",
      children: "Q6: Explain the spiral rule for complex declarations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Start at the identifier, move right as far as possible (respecting parentheses), then left, spiraling outward. Each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[n]"
      }), " = array of, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(params)"
      }), " = function taking, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " = pointer to. Parentheses override the default right-left precedence. Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int (*(*fp)(int))[5]"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fp"
      }), " is a pointer to a function taking ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " and returning a pointer to an array[5] of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q7-whats-the-difference-between-ifndef-guard-and-pragma-once",
      children: ["Q7: What's the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef"
      }), " guard and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#pragma once"
      }), "?"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma once"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (C89+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (compiler extension)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error-prone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typo in macro name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No macro to mistype"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower on large trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unique path detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-kernel",
      children: "Linux Kernel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "volatile"
          }), ":"]
        }), " Used sparingly → mostly for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jiffies"
        }), " (system timer tick) and memory-mapped I/O. The kernel developers prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "READ_ONCE()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "WRITE_ONCE()"
        }), " macros instead of raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "restrict"
          }), ":"]
        }), " Used extensively in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "copy_from_user"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "copy_to_user"
        }), ", crypto routines, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy"
        }), " implementations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function pointers:"
        }), " The VFS (Virtual File System) uses dispatch tables → every filesystem implements ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct file_operations"
        }), " with function pointers for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "open"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ioctl"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signals:"
        }), " Kernel delivers signals to user-space via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "force_sig()"
        }), ". Signal delivery involves saving/restoring the interrupted context on the user stack."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "setjmp/longjmp:"
        }), " Used internally in some arch-specific code for exception handling (e.g., page fault recovery in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do_page_fault"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedded-systems",
      children: "Embedded Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "volatile"
          }), ":"]
        }), " Every memory-mapped peripheral register is declared ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), " → UART status registers, GPIO pin values, ADC conversion results, interrupt status flags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupt handlers (ISRs):"
        }), " Direct analog of signal handlers → do minimal work (clear flag, read/write hardware), set a volatile flag, return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexible array members:"
        }), " Common in communication protocol buffers (variable-length CAN frames, UART packets)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function pointers:"
        }), " State machines for protocol handling (e.g., TCP/IP stack, I2C master/slave)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "const volatile"
          }), ":"]
        }), " Read-only hardware registers (e.g., device ID registers) → the value changes externally but firmware must not write."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-engines-sqlite-mysql-internals",
      children: "Database Engines (SQLite, MySQL internals)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dispatch tables:"
        }), " SQL execution engines use function pointer tables for each operation (scan, join, sort, aggregate)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "restrict"
          }), ":"]
        }), " Buffer pool operations use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restrict"
        }), " for page copies (memcpy of database pages)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threading:"
        }), " Connection pools, background writers, checkpoint threads, replication → all built on pthreads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Makefiles:"
        }), " Complex build systems with multiple targets (debug, release, embedded, with/without features)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-recovery-return-codes-vs-setjmplongjmp-vs-signals",
      children: "Error Recovery: Return Codes vs setjmp/longjmp vs Signals"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Codes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "setjmp/longjmp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signals"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual → every caller checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic → jump to handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-driven → process-wide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on each return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skipped → must clean before longjmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited → async-signal-safe only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any depth (instant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(context switch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer code only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal number only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "storage-class-comparison",
      children: "Storage Class Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linkage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (hint only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " (local)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " (global/function)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Thread_local"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block/File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pointer-qualifiers-deep-dive",
      children: "Pointer Qualifiers Deep Dive"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to const int (can't change *p, can change p)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *const p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const pointer to int (can't change p, can change *p)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int *const p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const pointer to const int (neither changes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile int *p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to volatile int (value changes externally)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *restrict p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer is sole access path to memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "table-sections-vs-descriptions",
      children: "Table: Sections vs Descriptions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lines of Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-File + Makefiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header guards, extern, Makefile targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callbacks, dispatch tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdarg.h macros, promotions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex Declarations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spiral rule parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "volatile/restrict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualifier comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setjmp/longjmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-local goto, cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sig_atomic_t pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLAs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime stack arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible Array Members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length struct tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pthreads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create/join/mutex/condvar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18.11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict Aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memcpy/union approach"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header guard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#ifndef HEADER_H"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define HEADER_H"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#endif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef int (*op_t)(int, int);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*ops[])(int,int) = {add, sub, mul, div};"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void log(const char *fmt, ...) { va_list ap; va_start(ap, fmt); ... va_end(ap); }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex decl parse"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int (*(*fp)(int))[5]"
            }), " → start at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fp"
            }), ", spiral outward"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volatile read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile uint32_t *reg = (uint32_t *)0x4000;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restrict promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *memcpy(void *restrict d, const void *restrict s, size_t n)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setjmp/longjmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (setjmp(buf)) /* error */; ... longjmp(buf, 1);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile sig_atomic_t flag = 0;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[n];"
            }), " (n runtime)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct buf { size_t len; char data[]; };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pthread create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_create(&t, NULL, func, arg);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutex lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_lock(&mtx); ... pthread_mutex_unlock(&mtx);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memcpy for aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy(&f, &bits, sizeof(f));"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Thread_local int tls_val;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of a header guard?\nA) Prevent linker errors\nB) Prevent double inclusion in one translation unit\nC) Optimize compilation speed\nD) Define external symbols"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The header guard prevents the preprocessor from including the same header twice in one `.c` file, avoiding redefinition errors."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which declares a pointer to a function taking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " and returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *fp(int);"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*fp)(int);"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *(*fp)(int);"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *(fp)(int);"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `int (*fp)(int);` → parentheses around `*fp` bind the pointer before the function call."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), " guarantee?\nA) Atomic access\nB) Thread safety\nC) Every read/write goes to memory\nD) The variable is stored in ROM"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `volatile` forces the compiler to emit a memory access every time, preventing register caching."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "restrict"
        }), " a promise of?\nA) The pointer is non-null\nB) The pointer is the only way to access that memory in its scope\nC) The pointed-to data is read-only\nD) The pointer is aligned"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `restrict` promises exclusive access → violating it is undefined behavior."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following is a strict aliasing violation?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy(&f, &i, sizeof(f));"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float *fp = (float *)&i; *fp = 3.14;"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned char *cp = (unsigned char *)&i;"
        }), "\nD) All of the above"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Casting `int*` to `float*` and dereferencing violates strict aliasing. `memcpy` and `char*` access are legal."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is wrong with calling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf"
        }), " inside a signal handler?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf"
        }), " is not async-signal-safe → it may deadlock on internal locks\nB) Signals cannot call library functions\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf"
        }), " will corrupt the stack\nD) Nothing → it's perfectly safe"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** `printf` uses internal locks (for `stdout` buffering) that could be held when the signal arrives, causing deadlock."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why must variables shared between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), " be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        }), "?\nA) The compiler may keep them in registers and restore stale values\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), " only saves volatile registers\nC) It's not required\nD) To prevent the linker from optimizing them away"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** After `longjmp`, non-volatile local variables have indeterminate values because the register state is restored to the `setjmp` point."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which is NOT a valid use of flexible array members?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct buffer { size_t len; char data[]; };"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct buffer arr[10];"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc(sizeof(struct buffer) + n);"
        }), "\nD) Accessing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buf->data[i]"
        }), " for i < n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** You cannot create an array of structs with flexible array members → each element would have unknown size."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is a Makefile ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".PHONY"
        }), " target used for?\nA) To build faster\nB) To prevent Make from confusing a target with a real file name\nC) To compile with optimization flags\nD) To specify the compiler"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `.PHONY` tells Make that the target name does not refer to a file, so Make always runs the recipe (e.g., `clean`)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which pthreads synchronization primitive is best for producer-consumer patterns?\nA) Mutex alone\nB) Condition variable + mutex\nC) Spinlock\nD) Read-write lock"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Condition variables with a mutex allow the consumer to sleep while waiting and be woken when the producer has data."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-file programming"
        }), " separates interface (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".h"
        }), ") from implementation (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".c"
        }), ") using header guards and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Makefiles"
        }), " automate builds with timestamp-based dependency tracking → targets, prerequisites, recipes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function pointers"
        }), " enable callbacks (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), ") and O(1) dispatch tables replacing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variadic functions"
        }), " use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<stdarg.h>"
        }), " but pass type info explicitly → no compiler type checking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complex declarations"
        }), " are parsed with the spiral rule: start at identifier, go right, then left"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "volatile"
          })
        }), " prevents compiler from caching values that change externally (hardware, signals)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "restrict"
          })
        }), " promises alias-free pointers → enables auto-vectorization (violation = UB)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "setjmp"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "longjmp"
          })]
        }), " provide non-local error recovery → skip destructors, require manual cleanup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signal handlers"
        }), " must be minimal: set a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile sig_atomic_t"
        }), " flag, return"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VLAs"
        }), " are runtime-sized stack arrays → convenient but risk stack overflow; optional in C11"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexible array members"
        }), " are variable-sized trailing arrays in structs → efficient for variable-length data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pthreads"
        }), " provide threading with mutexes + condition variables for synchronization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strict aliasing"
        }), " forbids accessing memory via incompatible pointer types → use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy"
        }), " or union"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What pattern do you use to prevent multiple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), " of the same header?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write the declaration of a pointer to a function that takes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), " and returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default argument promotion for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " in variadic functions?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parse this declaration: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char *(*(*fp)(int))[10];"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int *"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *const"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why can't you ", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), " out of a signal handler safely in all cases?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Thread_local"
        }), " do?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do you detect at compile time whether VLAs are supported?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic array with flexible member:"
          }), " Write a struct ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int_vector"
          }), " with a flexible array member holding integers. Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int_vector *int_vector_create(size_t n)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void int_vector_destroy(int_vector *v)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dispatch table calculator:"
          }), " Build a calculator with +, -, x, / using a function pointer dispatch table. Read operator and operands from stdin."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Threaded prime counter:"
          }), " Write a program that counts primes up to 1,000,000 using 4 threads, each checking a quarter of the range. Use a mutex to safely accumulate the total count."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Safe type pun:"
          }), " Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t raw_bytes = 0x40490FDB;"
          }), ", produce the corresponding ", (0,jsx_runtime.jsx)(_components.code, {
            children: "float"
          }), " value using both ", (0,jsx_runtime.jsx)(_components.code, {
            children: "memcpy"
          }), " and a union. Print both results."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Signal-safe logging:"
          }), " Write a program that sets up a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SIGINT"
          }), " handler which sets a flag, and a main loop that checks the flag. On receiving the signal, the main loop writes \"Shutting down\" to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "stderr"
          }), " (using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "write()"
          }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fprintf"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Makefile challenge:"
          }), " Create a Makefile for a project with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "main.c"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "utils.c"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "utils.h"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "data.c"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "data.h"
          }), ". Targets: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "all"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "program"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clean"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "test"
          }), ". Ensure header changes trigger recompilation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VLA matrix transpose:"
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void transpose(int rows, int cols, int src[rows][cols], int dst[cols][rows])"
          }), " that transposes a matrix using VLAs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimal plugin system"
      }), " using function pointers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// plugin.h\n#pragma once\ntypedef struct {\n    const char *name;\n    int (*init)(void);\n    int (*process)(const char *input, char *output, size_t out_size);\n    void (*shutdown)(void);\n} plugin_t;\n\nextern plugin_t *plugins[];\nextern int plugin_count;\nint register_plugin(plugin_t *p);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define two plugins: one that uppercases strings, one that reverses strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register them at startup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read input from stdin, dispatch to each plugin, print results"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(Bonus) Load plugins from ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".so"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dll"
        }), " files using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dlopen"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "LoadLibrary"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "self-checklist",
      children: "Self-Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Know It"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Explain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Header guards / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Makefile targets"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointers / callbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch tables"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "va_list"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spiral rule"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "volatile"
            }), " use cases"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "restrict"
            }), " and aliasing"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async-signal-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLAs and flexible arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pthreads create/join/mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strict aliasing violations"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
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