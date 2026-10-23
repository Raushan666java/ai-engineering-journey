"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3616],{

/***/ 59
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_08_exceptions_md_101_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-08-exceptions-md-101.json
const site_docs_courses_oop_cpp_08_exceptions_md_101_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/08-exceptions","title":"Chapter 8: Exception Handling","description":"Previous 09-stl-containers","source":"@site/docs/courses/oop-cpp/08-exceptions.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/08-exceptions","permalink":"/ai-engineering-journey/oop-cpp/08-exceptions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-exceptions","slug":"/oop-cpp/08-exceptions","title":"Chapter 8: Exception Handling","sidebar_label":"Chapter 8: Exception Handling","sidebar_position":8},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 7: Templates","permalink":"/ai-engineering-journey/oop-cpp/07-templates"},"next":{"title":"Chapter 9: STL Containers -- In-Depth Mastery","permalink":"/ai-engineering-journey/oop-cpp/09-stl-containers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/oop-cpp/08-exceptions.md


const frontMatter = {
	id: '08-exceptions',
	slug: '/oop-cpp/08-exceptions',
	title: 'Chapter 8: Exception Handling',
	sidebar_label: 'Chapter 8: Exception Handling',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Exception Handling';

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
  "value": "8.1 Traditional Error Handling",
  "id": "81-traditional-error-handling",
  "level": 2
}, {
  "value": "8.1.1 The Old Way",
  "id": "811-the-old-way",
  "level": 3
}, {
  "value": "Return Codes",
  "id": "return-codes",
  "level": 4
}, {
  "value": "errno and strerror",
  "id": "errno-and-strerror",
  "level": 4
}, {
  "value": "Sentinel Values",
  "id": "sentinel-values",
  "level": 4
}, {
  "value": "8.1.2 Problems with Traditional Approaches",
  "id": "812-problems-with-traditional-approaches",
  "level": 3
}, {
  "value": "8.1.3 Analogy: Safety Net vs. Hand Signals",
  "id": "813-analogy-safety-net-vs-hand-signals",
  "level": 3
}, {
  "value": "8.2 Throw, Try, Catch",
  "id": "82-throw-try-catch",
  "level": 2
}, {
  "value": "8.2.1 The Three Keywords",
  "id": "821-the-three-keywords",
  "level": 3
}, {
  "value": "8.2.2 How <code>throw</code> Works",
  "id": "822-how-throw-works",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Code Example",
  "id": "code-example",
  "level": 4
}, {
  "value": "8.2.3 The <code>try</code> Block",
  "id": "823-the-try-block",
  "level": 3
}, {
  "value": "8.2.4 The <code>catch</code> Clause",
  "id": "824-the-catch-clause",
  "level": 3
}, {
  "value": "8.2.5 Multiple Catch Blocks",
  "id": "825-multiple-catch-blocks",
  "level": 3
}, {
  "value": "8.2.6 Catch-All Handler",
  "id": "826-catch-all-handler",
  "level": 3
}, {
  "value": "8.2.7 Rethrowing",
  "id": "827-rethrowing",
  "level": 3
}, {
  "value": "8.2.8 Function Try Blocks",
  "id": "828-function-try-blocks",
  "level": 3
}, {
  "value": "8.3 Catch by Value vs Reference",
  "id": "83-catch-by-value-vs-reference",
  "level": 2
}, {
  "value": "8.3.1 The Slicing Problem",
  "id": "831-the-slicing-problem",
  "level": 3
}, {
  "value": "8.3.2 Why Slicing Happens",
  "id": "832-why-slicing-happens",
  "level": 3
}, {
  "value": "8.3.3 The Fix: Catch by const Reference",
  "id": "833-the-fix-catch-by-const-reference",
  "level": 3
}, {
  "value": "8.3.4 Comparison Table: Catch by Value vs Reference",
  "id": "834-comparison-table-catch-by-value-vs-reference",
  "level": 3
}, {
  "value": "8.3.5 Catch by Pointer -- Why Not?",
  "id": "835-catch-by-pointer----why-not",
  "level": 3
}, {
  "value": "8.3.6 Rule of Thumb",
  "id": "836-rule-of-thumb",
  "level": 3
}, {
  "value": "8.4 Stack Unwinding",
  "id": "84-stack-unwinding",
  "level": 2
}, {
  "value": "8.4.1 What Is Stack Unwinding?",
  "id": "841-what-is-stack-unwinding",
  "level": 3
}, {
  "value": "8.4.2 Detailed Trace Example",
  "id": "842-detailed-trace-example",
  "level": 3
}, {
  "value": "8.4.3 Dry Run Trace Table",
  "id": "843-dry-run-trace-table",
  "level": 3
}, {
  "value": "8.4.4 What Happens During Unwinding",
  "id": "844-what-happens-during-unwinding",
  "level": 3
}, {
  "value": "8.4.5 Objects Not Destroyed During Unwinding",
  "id": "845-objects-not-destroyed-during-unwinding",
  "level": 3
}, {
  "value": "8.4.6 Complexity Analysis of Stack Unwinding",
  "id": "846-complexity-analysis-of-stack-unwinding",
  "level": 3
}, {
  "value": "8.5 RAII and Exceptions",
  "id": "85-raii-and-exceptions",
  "level": 2
}, {
  "value": "8.5.1 What RAII Provides",
  "id": "851-what-raii-provides",
  "level": 3
}, {
  "value": "8.5.2 RAII Wrapper Examples",
  "id": "852-raii-wrapper-examples",
  "level": 3
}, {
  "value": "8.5.3 Smart Pointers as RAII",
  "id": "853-smart-pointers-as-raii",
  "level": 3
}, {
  "value": "8.5.4 RAII Guideline",
  "id": "854-raii-guideline",
  "level": 3
}, {
  "value": "8.5.5 Transaction Safety with RAII",
  "id": "855-transaction-safety-with-raii",
  "level": 3
}, {
  "value": "8.6 Constructor / Destructor Exceptions",
  "id": "86-constructor--destructor-exceptions",
  "level": 2
}, {
  "value": "8.6.1 The Constructor Exception Problem",
  "id": "861-the-constructor-exception-problem",
  "level": 3
}, {
  "value": "The Memory Leak",
  "id": "the-memory-leak",
  "level": 4
}, {
  "value": "8.6.2 The Fix: Use RAII Members",
  "id": "862-the-fix-use-raii-members",
  "level": 3
}, {
  "value": "8.6.3 Two-Phase Construction",
  "id": "863-two-phase-construction",
  "level": 3
}, {
  "value": "8.6.4 The Destructor Exception Problem",
  "id": "864-the-destructor-exception-problem",
  "level": 3
}, {
  "value": "8.6.5 Destructor Exception Rules",
  "id": "865-destructor-exception-rules",
  "level": 3
}, {
  "value": "8.6.6 Handling Destructor Errors Safely",
  "id": "866-handling-destructor-errors-safely",
  "level": 3
}, {
  "value": "8.7 Exception Safety Guarantees",
  "id": "87-exception-safety-guarantees",
  "level": 2
}, {
  "value": "8.7.1 The Three Levels",
  "id": "871-the-three-levels",
  "level": 3
}, {
  "value": "8.7.2 No-throw Guarantee",
  "id": "872-no-throw-guarantee",
  "level": 3
}, {
  "value": "8.7.3 Strong Guarantee (Commit or Rollback)",
  "id": "873-strong-guarantee-commit-or-rollback",
  "level": 3
}, {
  "value": "8.7.4 Basic Guarantee (No Leaks, Valid State)",
  "id": "874-basic-guarantee-no-leaks-valid-state",
  "level": 3
}, {
  "value": "8.7.5 Safety Level Comparison Table",
  "id": "875-safety-level-comparison-table",
  "level": 3
}, {
  "value": "8.7.6 Achieving Strong Guarantee: The Copy-and-Swap Idiom",
  "id": "876-achieving-strong-guarantee-the-copy-and-swap-idiom",
  "level": 3
}, {
  "value": "8.8 The noexcept Specifier",
  "id": "88-the-noexcept-specifier",
  "level": 2
}, {
  "value": "8.8.1 noexcept Syntax",
  "id": "881-noexcept-syntax",
  "level": 3
}, {
  "value": "8.8.2 What noexcept Means",
  "id": "882-what-noexcept-means",
  "level": 3
}, {
  "value": "8.8.3 noexcept vs throw() vs Nothing",
  "id": "883-noexcept-vs-throw-vs-nothing",
  "level": 3
}, {
  "value": "8.8.4 Conditional noexcept",
  "id": "884-conditional-noexcept",
  "level": 3
}, {
  "value": "8.8.5 The noexcept Operator",
  "id": "885-the-noexcept-operator",
  "level": 3
}, {
  "value": "8.8.6 When to Use noexcept",
  "id": "886-when-to-use-noexcept",
  "level": 3
}, {
  "value": "8.8.7 The Vector Reallocation Optimization",
  "id": "887-the-vector-reallocation-optimization",
  "level": 3
}, {
  "value": "8.8.8 Common noexcept Mistakes",
  "id": "888-common-noexcept-mistakes",
  "level": 3
}, {
  "value": "8.9 Standard Exception Hierarchy",
  "id": "89-standard-exception-hierarchy",
  "level": 2
}, {
  "value": "8.9.1 Full Hierarchy",
  "id": "891-full-hierarchy",
  "level": 3
}, {
  "value": "8.9.2 Exception Categories",
  "id": "892-exception-categories",
  "level": 3
}, {
  "value": "8.9.3 Code: Using the Hierarchy",
  "id": "893-code-using-the-hierarchy",
  "level": 3
}, {
  "value": "8.9.4 The <code>what()</code> Method",
  "id": "894-the-what-method",
  "level": 3
}, {
  "value": "8.10 Custom Exception Classes",
  "id": "810-custom-exception-classes",
  "level": 2
}, {
  "value": "8.10.1 Design Guidelines",
  "id": "8101-design-guidelines",
  "level": 3
}, {
  "value": "8.10.2 Complete Custom Exception Hierarchy",
  "id": "8102-complete-custom-exception-hierarchy",
  "level": 3
}, {
  "value": "8.10.3 Exception Class Checklist",
  "id": "8103-exception-class-checklist",
  "level": 3
}, {
  "value": "8.11 Interview Corner",
  "id": "811-interview-corner",
  "level": 2
}, {
  "value": "8.12 Applications in Real Systems",
  "id": "812-applications-in-real-systems",
  "level": 2
}, {
  "value": "8.12.1 STL Exception Behavior",
  "id": "8121-stl-exception-behavior",
  "level": 3
}, {
  "value": "8.12.2 Smart Pointer Exception Safety",
  "id": "8122-smart-pointer-exception-safety",
  "level": 3
}, {
  "value": "8.12.3 Transaction Processing Systems",
  "id": "8123-transaction-processing-systems",
  "level": 3
}, {
  "value": "8.12.4 Server Request Handling",
  "id": "8124-server-request-handling",
  "level": 3
}, {
  "value": "8.12.5 noexcept in Real-World Code",
  "id": "8125-noexcept-in-real-world-code",
  "level": 3
}, {
  "value": "8.12.6 Exception-Safe Logger",
  "id": "8126-exception-safe-logger",
  "level": 3
}, {
  "value": "8.12.7 Performance Considerations",
  "id": "8127-performance-considerations",
  "level": 3
}, {
  "value": "Chapter Summary",
  "id": "chapter-summary",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "noexcept Decision Flowchart",
  "id": "noexcept-decision-flowchart",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
    input: "input",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-8-exception-handling",
        children: "Chapter 8: Exception Handling"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/07-templates",
          children: "07-templates"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/09-stl-containers",
          children: "09-stl-containers"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write exception-safe code using try/catch/throw with proper resource management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand stack unwinding and its interaction with destructors during exception propagation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply RAII for deterministic resource management in the presence of exceptions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " correctly in function declarations and understand its optimization impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create custom exception types derived from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::exception"
        }), " with domain-specific data"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish among error-handling strategies and choose appropriate mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze exception safety guarantees (basic, strong, nothrow) for any function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle constructor failures without memory leaks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Traditional Error Handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return codes are fragile; exceptions provide structured propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use exceptions for exceptional conditions, not control flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throw, Try, Catch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-keyword mechanism separates detection from handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always catch by reference to avoid slicing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack Unwinding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructors run automatically during scope rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep destructors noexcept — exceptions during unwinding terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catch by Value vs Reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value catches slice the exception object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Catch by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const&"
            }), " always"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAII"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource acquisition is initialization — deterministic cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer RAII wrappers over manual try/catch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declares functions that never throw, enabling optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark move operations and swap as noexcept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exception Hierarchy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::exception"
            }), " base class for polymorphic catching"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Derive custom exceptions from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::runtime_error"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constructor Exceptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partially-constructed objects leak resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RAII members to avoid manual cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety Guarantees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three levels: basic, strong, nothrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer strong guarantee for transactional operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Traditional Error Handling] --> B[Throw/Try/Catch]\r\n    B --> C[Stack Unwinding]\r\n    C --> D[RAII]\r\n    D --> E[noexcept]\r\n    D --> F[Exception Safety]\r\n    F --> G[Basic / Strong / Nothrow]\r\n    B --> H[Catch by Value vs Reference]\r\n    H --> I[Slicing Problem]\r\n    B --> J[Function Try Blocks]\r\n    B --> K[Rethrowing]\r\n    C --> L[Constructor / Destructor Exceptions]\r\n    L --> M[Memory Leak Problem & Fix]\r\n    E --> N[\"noexcept vs throw() vs nothing\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-traditional-error-handling",
      children: "8.1 Traditional Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-the-old-way",
      children: "8.1.1 The Old Way"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before C++ exceptions, error handling relied on return codes, sentinel values, and the global ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno"
      }), " variable. This approach is still common in C code and low-level libraries:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "return-codes",
      children: "Return Codes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C-style: return code indicates success/failure\r\nint divide(int a, int b, int* result) {\r\n    if (b == 0) return -1;          // error code\r\n    *result = a / b;\r\n    return 0;                        // success\r\n}\r\n\r\nint main() {\r\n    int res;\r\n    int status = divide(10, 0, &res);\r\n    if (status != 0) {\r\n        fprintf(stderr, \"Division failed\\n\");\r\n        return 1;\r\n    }\r\n    printf(\"Result: %d\\n\", res);\r\n    return 0;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "errno-and-strerror",
      children: "errno and strerror"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cmath>\r\n#include <cerrno>\r\n#include <cstring>\r\n#include <iostream>\r\n\r\nint main() {\r\n    errno = 0;\r\n    double result = std::sqrt(-1.0);\r\n    if (errno == EDOM) {\r\n        std::cerr << \"Domain error: \" << std::strerror(errno) << '\\n';\r\n    }\r\n    std::cout << \"sqrt(-1) = \" << result << '\\n';  // prints NaN\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sentinel-values",
      children: "Sentinel Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Using a sentinel to indicate \"not found\"\r\nint find_in_array(const int* arr, size_t size, int value) {\r\n    for (size_t i = 0; i < size; ++i) {\r\n        if (arr[i] == value) return static_cast<int>(i);\r\n    }\r\n    return -1;  // sentinel: \"not found\" (ambiguous if -1 is valid index)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-problems-with-traditional-approaches",
      children: "8.1.2 Problems with Traditional Approaches"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ignore return codes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"result: %d\", divide(a, b, &res));"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error silently swallowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mixed error paths"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), " nesting obscures normal flow"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code becomes unreadable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constructors can't return"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No return type possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object created in invalid state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global state (errno)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race conditions in multithreaded code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type-erased errors"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-1"
            }), " could mean anything"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No semantic information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No stack context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller knows \"what\" failed, not \"where\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder debugging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-analogy-safety-net-vs-hand-signals",
      children: "8.1.3 Analogy: Safety Net vs. Hand Signals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traditional error handling"
      }), " is like rock climbers using hand signals: every step requires explicit communication, signals can be missed, and if communication fails, the climber falls silently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exceptions"
      }), " are like a safety net: you don't need to signal on every step. If a climber falls, the net catches them automatically, regardless of where they are on the climb. The net (exception handler) is placed at strategic positions, not on every foothold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Traditional:           Exceptions:\r\nStep 1: check return   Step 1: just climb\r\nStep 2: check return   Step 2: just climb\r\nStep 3: check return   Step 3: fall → net catches\r\nStep 4: check return   Step 4: just climb\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-throw-try-catch",
      children: "8.2 Throw, Try, Catch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A hospital emergency system. Workers (code) detect problems and call a code (throw). The emergency response team (catch) is stationed in specific areas (try blocks) and responds only to specific emergencies (exception types). If the right team isnt in this area, the emergency propagates up the chain of command (stack unwinding)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-the-three-keywords",
      children: "8.2.1 The Three Keywords"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The C++ exception mechanism consists of three keywords:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "throw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates an exception object and transfers control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "try"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delineates a block where exceptions are monitored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "catch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specifies which exception type to handle"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "822-how-throw-works",
      children: ["8.2.2 How ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throw"
      }), " Works"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throw"
      }), " statement executes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An exception object is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copy-initialized"
        }), " from the thrown expression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A special ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "exception control block"
        }), " is allocated (typically heap-allocated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The compiler searches for a matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch"
        }), " handler in the current call stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no match is found in the current function, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stack unwinding"
        }), " begins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no match is found anywhere, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::terminate()"
        }), " is called"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "syntax",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "throw expression;                    // throw by value\r\nthrow;                               // rethrow current exception (only in catch block)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION readConfig(path):\r\n    IF file does not exist:\r\n        CREATE FileNotFoundError object\r\n        TRANSFER control to exception handling system\r\n    END IF\r\n    // normal execution continues if no throw\r\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <string>\r\n\r\ndouble divide(double a, double b) {\r\n    if (b == 0.0) {\r\n        throw std::runtime_error(\"Division by zero: denominator is 0\");\r\n    }\r\n    return a / b;\r\n}\r\n\r\nint main() {\r\n    try {\r\n        double result = divide(10.0, 0.0);\r\n        std::cout << \"Result: \" << result << '\\n';\r\n    } catch (const std::runtime_error& e) {\r\n        std::cerr << \"Error caught: \" << e.what() << '\\n';\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error caught: Division by zero: denominator is 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "823-the-try-block",
      children: ["8.2.3 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try"
      }), " Block"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try"
      }), " block establishes a context for exception handling:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "try {\r\n    // code that may throw\r\n    // if an exception is thrown here, execution jumps to a matching catch\r\n    // if no exception is thrown, catch blocks are skipped entirely\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "824-the-catch-clause",
      children: ["8.2.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch"
      }), " Clause"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch"
      }), " clause specifies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The type of exception it handles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The handler code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "catch (const Type& parameter) {\r\n    // handler code\r\n    // parameter contains the caught exception object\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "825-multiple-catch-blocks",
      children: "8.2.5 Multiple Catch Blocks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Catch clauses are evaluated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "in order"
      }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first"
      }), " matching type is selected:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <vector>\r\n\r\nvoid process(int value) {\r\n    if (value < 0) {\r\n        throw std::invalid_argument(\"Negative values not allowed\");\r\n    } else if (value == 0) {\r\n        throw std::runtime_error(\"Zero requires special handling\");\r\n    } else if (value > 100) {\r\n        throw std::out_of_range(\"Value exceeds maximum\");\r\n    }\r\n    std::cout << \"Processing \" << value << '\\n';\r\n}\r\n\r\nint main() {\r\n    for (int v : {-5, 0, 150, 42}) {\r\n        try {\r\n            process(v);\r\n        } catch (const std::invalid_argument& e) {\r\n            std::cerr << \"Invalid: \" << e.what() << '\\n';\r\n        } catch (const std::out_of_range& e) {\r\n            std::cerr << \"Range: \" << e.what() << '\\n';\r\n        } catch (const std::runtime_error& e) {\r\n            std::cerr << \"Runtime: \" << e.what() << '\\n';\r\n        } catch (const std::exception& e) {\r\n            std::cerr << \"Standard: \" << e.what() << '\\n';\r\n        }\r\n        std::cout << \"---\\n\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Invalid: Negative values not allowed\r\n---\r\nRuntime: Zero requires special handling\r\n---\r\nRange: Value exceeds maximum\r\n---\r\nProcessing 42\r\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " The order matters. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch (const std::exception&)"
      }), " appears before the more specific types, it will catch everything:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// WRONG: base class catches all derived types\r\ntry {\r\n    process(v);\r\n} catch (const std::exception& e) {     // catches everything!\r\n    // all exceptions land here\r\n} catch (const std::invalid_argument& e) {  // never reached\r\n    // unreachable code\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compiler warning:"
      }), " Most compilers will warn about \"exception of type X will be caught by earlier handler\" for unreachable catch blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "826-catch-all-handler",
      children: "8.2.6 Catch-All Handler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ellipsis catch-all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch(...)"
      }), " catches ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any"
      }), " exception, including non-standard types:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n\r\nint main() {\r\n    try {\r\n        throw 42;                 // throwing an int (not derived from std::exception)\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Standard: \" << e.what() << '\\n';\r\n    } catch (...) {               // catches the int\r\n        std::cerr << \"Caught unknown exception (non-standard type)\\n\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Caught unknown exception (non-standard type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases for catch-all:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logging and rethrowing in a high-level handler"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preventing exceptions from escaping ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main()"
        }), " or thread functions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleaning up resources before rethrowing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "try {\r\n    risky_operation();\r\n} catch (...) {\r\n    // log the error\r\n    std::cerr << \"Unknown exception at \" << __FILE__ << \":\" << __LINE__ << '\\n';\r\n    throw;   // rethrow -- must not swallow unknown exceptions\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " Never use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch(...)"
      }), " without rethrowing unless you are at the top level. Swallowing all exceptions hides bugs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "827-rethrowing",
      children: "8.2.7 Rethrowing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throw;"
      }), " statement (without an expression) rethrows the current exception:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n\r\nvoid level3() {\r\n    throw std::runtime_error(\"Error in level 3\");\r\n}\r\n\r\nvoid level2() {\r\n    try {\r\n        level3();\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"level2 caught: \" << e.what() << \" -- rethrowing\\n\";\r\n        throw;   // rethrow -- preserves the original exception object\r\n    }\r\n}\r\n\r\nvoid level1() {\r\n    try {\r\n        level2();\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"level1 caught: \" << e.what() << '\\n';\r\n    }\r\n}\r\n\r\nint main() {\r\n    level1();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "level2 caught: Error in level 3 -- rethrowing\r\nlevel1 caught: Error in level 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key points about rethrowing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The exception object is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same"
        }), " object, not a copy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rethrowing outside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch"
        }), " block calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::terminate()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use rethrow when you can partially handle but need upper-level handlers to finish"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "828-function-try-blocks",
      children: "8.2.8 Function Try Blocks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function try block"
      }), " wraps the entire function body in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try"
      }), " block, including the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constructor initializer list"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <string>\r\n\r\nclass Member {\r\npublic:\r\n    Member(const std::string& name) : name_(name) {\r\n        std::cout << \"Member \" << name_ << \" constructed\\n\";\r\n        if (name_ == \"bad\") {\r\n            throw std::runtime_error(\"Member \" + name_ + \" failed\");\r\n        }\r\n    }\r\n    ~Member() { std::cout << \"Member \" << name_ << \" destroyed\\n\"; }\r\nprivate:\r\n    std::string name_;\r\n};\r\n\r\nclass Container {\r\npublic:\r\n    // Function try block for constructor\r\n    Container(const std::string& member_name)\r\n    try : member_(member_name) {\r\n        std::cout << \"Container body\\n\";\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Container construction failed: \" << e.what() << '\\n';\r\n        // Rethrow is IMPLICIT at end of constructor catch block\r\n        // The member subobjects are already destroyed\r\n    }\r\n\r\n    ~Container() noexcept { std::cout << \"Container destroyed\\n\"; }\r\n\r\nprivate:\r\n    Member member_;\r\n};\r\n\r\nint main() {\r\n    try {\r\n        Container c(\"bad\");\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"main caught: \" << e.what() << '\\n';\r\n    }\r\n    std::cout << \"---\\n\";\r\n    Container c(\"good\");  // this one works\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Member bad constructed\r\nMember bad destroyed\r\nContainer construction failed: Member bad failed\r\nmain caught: Member bad failed\r\n---\r\nMember good constructed\r\nContainer body\r\nContainer destroyed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key points about function try blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Catch blocks in constructor function try blocks ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " rethrow (implicit rethrow if no explicit throw)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They catch exceptions from member initializers and base class constructors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The object is considered \"not fully constructed\" -- destructor will NOT be called"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructor function try blocks cannot swallow exceptions (they propagate unless caught and handled to termination)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use sparingly:"
        }), " usually better to use RAII members that handle their own errors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-catch-by-value-vs-reference",
      children: "8.3 Catch by Value vs Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-the-slicing-problem",
      children: "8.3.1 The Slicing Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you catch by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), ", the exception object is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sliced"
      }), " -- the dynamic type is lost:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n\r\nclass MyException : public std::runtime_error {\r\npublic:\r\n    MyException(const std::string& msg, int code)\r\n        : std::runtime_error(msg), code_(code) {}\r\n    int code() const { return code_; }\r\nprivate:\r\n    int code_;\r\n};\r\n\r\nint main() {\r\n    try {\r\n        throw MyException(\"custom error\", 42);\r\n\r\n    } catch (std::runtime_error e) {   // BY VALUE -- SLICING!\r\n        // e is a std::runtime_error, NOT a MyException\r\n        // e.code() does not exist -- compile error\r\n        std::cerr << \"Caught: \" << e.what() << '\\n';\r\n        // We lost the error_code information!\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-why-slicing-happens",
      children: "8.3.2 Why Slicing Happens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When catching by value, the catch parameter is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy-constructed"
      }), " from the exception object. The copy uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "static type"
      }), " of the catch parameter, not the dynamic type of the thrown object. Since ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::runtime_error"
      }), " has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code()"
      }), " method, the additional data from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MyException"
      }), " is sliced away."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-the-fix-catch-by-const-reference",
      children: "8.3.3 The Fix: Catch by const Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "try {\r\n    throw MyException(\"custom error\", 42);\r\n} catch (const std::runtime_error& e) {   // BY REFERENCE -- no slicing!\r\n    // e still refers to the original MyException object\r\n    // dynamic_cast or virtual dispatch works correctly\r\n    std::cerr << \"Caught: \" << e.what() << '\\n';\r\n    // We need a virtual interface or dynamic_cast to access code()\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "834-comparison-table-catch-by-value-vs-reference",
      children: "8.3.4 Comparison Table: Catch by Value vs Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Catch by Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Catch by Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "catch (Type e)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "catch (const Type& e)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slicing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -- derived type information lost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No -- original type preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least 2 copies (throw + catch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 copy (throw only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (extra copy + potential allocation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (no extra copy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polymorphism"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Broken -- ", (0,jsx_runtime.jsx)(_components.code, {
              children: "what()"
            }), " called on base slice"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works -- virtual dispatch on original"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can modify local copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot modify (const ref)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommended?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never for exception types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "835-catch-by-pointer----why-not",
      children: "8.3.5 Catch by Pointer -- Why Not?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some older code catches by pointer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "try {\r\n    throw new std::runtime_error(\"heap allocated\");\r\n} catch (std::runtime_error* e) {\r\n    // must remember to delete!\r\n    delete e;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual memory management -- who deletes?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inconsistency -- mixing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throw by value"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch by pointer"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exception object could be stack-allocated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not idiomatic in modern C++"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "836-rule-of-thumb",
      children: "8.3.6 Rule of Thumb"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Always catch by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "const&"
          })]
        }), ". Never catch by value (slicing), never catch by pointer (ownership ambiguity), and avoid non-const reference (no need to modify the exception)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Good -- idiomatic, efficient, polymorphic\r\ncatch (const std::exception& e) { ... }\r\n\r\n// Bad -- slicing, extra copies\r\ncatch (std::exception e) { ... }\r\n\r\n// Bad -- ownership problems\r\ncatch (std::exception* e) { ... }\r\n\r\n// Acceptable for catch-all\r\ncatch (...) { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-stack-unwinding",
      children: "8.4 Stack Unwinding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A row of dominoes. When you push the first domino (throw), each domino falls in sequence backward (stack frames unwind), and as each domino falls, it triggers a spring-loaded mechanism that cleans up (destructors run). The process is automatic, orderly, and guaranteed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "841-what-is-stack-unwinding",
      children: "8.4.1 What Is Stack Unwinding?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an exception is thrown, the runtime system ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unwinds"
      }), " the call stack:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It walks up the call stack looking for a matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch"
        }), " handler"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each function frame it passes through, it ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "destroys all local automatic objects"
        }), " in reverse order of construction"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When it finds a matching handler, control transfers to that handler with the exception object available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "842-detailed-trace-example",
      children: "8.4.2 Detailed Trace Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <string>\r\n\r\nclass Logger {\r\npublic:\r\n    Logger(const std::string& name) : name_(name) {\r\n        std::cout << \"  CONSTRUCT: \" << name_ << '\\n';\r\n    }\r\n    ~Logger() {\r\n        std::cout << \"  DESTROY:   \" << name_ << '\\n';\r\n    }\r\nprivate:\r\n    std::string name_;\r\n};\r\n\r\nvoid inner() {\r\n    Logger l3(\"l3 (inner)\");\r\n    Logger l4(\"l4 (inner)\");\r\n    std::cout << \"  ABOUT TO THROW\\n\";\r\n    throw std::runtime_error(\"exception from inner\");\r\n    std::cout << \"  AFTER THROW (never executed)\\n\";\r\n}\r\n\r\nvoid middle() {\r\n    Logger l2(\"l2 (middle)\");\r\n    std::cout << \"  Calling inner...\\n\";\r\n    inner();\r\n    std::cout << \"  After inner call (never executed)\\n\";\r\n}\r\n\r\nvoid outer() {\r\n    Logger l1(\"l1 (outer)\");\r\n    std::cout << \"  Calling middle...\\n\";\r\n    middle();\r\n    std::cout << \"  After middle call (never executed)\\n\";\r\n}\r\n\r\nint main() {\r\n    try {\r\n        outer();\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"  CATCH: \" << e.what() << '\\n';\r\n    }\r\n    std::cout << \"  Back in main -- program continues\\n\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  CONSTRUCT: l1 (outer)\r\n  Calling middle...\r\n  CONSTRUCT: l2 (middle)\r\n  Calling inner...\r\n  CONSTRUCT: l3 (inner)\r\n  CONSTRUCT: l4 (inner)\r\n  ABOUT TO THROW\r\n  DESTROY:   l4 (inner)\r\n  DESTROY:   l3 (inner)\r\n  DESTROY:   l2 (middle)\r\n  DESTROY:   l1 (outer)\r\n  CATCH: exception from inner\r\n  Back in main -- program continues\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "843-dry-run-trace-table",
      children: "8.4.3 Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Local Objects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main()"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "outer()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "outer()"
            }), " constructs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "l1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "outer()"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "middle()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "middle()"
            }), " constructs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "l2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "middle()"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inner()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle, inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "inner()"
            }), " constructs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "l3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle, inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2, l3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "inner()"
            }), " constructs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "l4"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle, inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2, l3, l4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "throw"
            }), " executes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle, inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2, l3, l4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exception active"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unwind ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inner()"
            }), " frame"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2, l3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "l4"
            }), " destroyed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unwind ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inner()"
            }), " frame"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer, middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1, l2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "l3"
            }), " destroyed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unwind ", (0,jsx_runtime.jsx)(_components.code, {
              children: "middle()"
            }), " frame"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, outer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "l2"
            }), " destroyed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unwind ", (0,jsx_runtime.jsx)(_components.code, {
              children: "outer()"
            }), " frame"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "l1"
            }), " destroyed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Match in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handler runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handler executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints CATCH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue after try/catch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal execution resumes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "844-what-happens-during-unwinding",
      children: "8.4.4 What Happens During Unwinding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During stack unwinding, the runtime performs these steps for each stack frame:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify automatic objects"
        }), " in the current scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Call destructors"
        }), " in reverse order of construction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release stack memory"
        }), " for the frame"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move to the next frame"
        }), " and repeat"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical rule:"
      }), " If a destructor throws during stack unwinding while another exception is active, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::terminate()"
      }), " is called immediately. This is why destructors must be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noexcept"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "845-objects-not-destroyed-during-unwinding",
      children: "8.4.5 Objects Not Destroyed During Unwinding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap-allocated objects"
        }), " (raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ") are NOT destroyed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static objects"
        }), " persist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread-local objects"
        }), " persist within the thread"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Objects in the frame that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "contains the catch handler"
        }), " are destroyed before the handler runs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n\r\nclass Resource {\r\npublic:\r\n    Resource(const char* name) : name_(name) {\r\n        std::cout << \"  Acquire: \" << name_ << '\\n';\r\n    }\r\n    ~Resource() {\r\n        std::cout << \"  Release: \" << name_ << '\\n';\r\n    }\r\nprivate:\r\n    const char* name_;\r\n};\r\n\r\nint main() {\r\n    Resource* leaked = nullptr;\r\n    try {\r\n        Resource r1(\"stack_resource\");\r\n        leaked = new Resource(\"heap_resource\");  // raw pointer -- will leak!\r\n        throw std::runtime_error(\"error\");\r\n        delete leaked;  // never reached\r\n    } catch (...) {\r\n        std::cerr << \"Caught -- heap_resource was leaked!\\n\";\r\n        delete leaked;  // manually clean up\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Acquire: stack_resource\r\n  Acquire: heap_resource\r\n  Release: stack_resource\r\nCaught -- heap_resource was leaked!\r\n  Release: heap_resource\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "heap_resource"
      }), " is not destroyed during unwinding because it is heap-allocated. Only automatic (stack) objects are destroyed. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Always use RAII wrappers"
      }), " (smart pointers) instead of raw pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "846-complexity-analysis-of-stack-unwinding",
      children: "8.4.6 Complexity Analysis of Stack Unwinding"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finding handler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d = stack depth, linear search up the stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destroying objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = number of automatic objects on the unwound path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total unwinding cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d + n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in stack depth and object count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory for exception"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size exception control block (typically heap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code size increase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f = number of functions with try/catch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime overhead"
            }), " (no throw)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-based dispatch, no cost on happy path"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern compilers use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "table-based exception handling"
      }), " (Itanium C++ ABI / SEH on Windows). The zero-cost exception model means:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No overhead on the non-exception (happy) path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All overhead is paid when an exception is actually thrown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The compiler generates static tables mapping PC ranges to handler addresses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-raii-and-exceptions",
      children: "8.5 RAII and Exceptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A self-closing faucet. When you leave the room (exit scope), the faucet automatically turns off (destructor runs) whether you left normally or were called away urgently (exception). You never have to remember to turn it off manually."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-what-raii-provides",
      children: "8.5.1 What RAII Provides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAII (Resource Acquisition Is Initialization) is the single most important technique for exception-safe C++:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Acquire in constructor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open file, allocate memory, lock mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource guaranteed to exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Release in destructor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close file, free memory, unlock mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource guaranteed to be released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No manual cleanup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor runs during unwinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception-safe by default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-raii-wrapper-examples",
      children: "8.5.2 RAII Wrapper Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File handle wrapper:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <cstdio>\r\n#include <stdexcept>\r\n#include <string>\r\n#include <iostream>\r\n\r\nclass FileHandle {\r\npublic:\r\n    explicit FileHandle(const char* path, const char* mode = \"r\")\r\n        : fp_(std::fopen(path, mode)) {\r\n        if (!fp_) {\r\n            throw std::runtime_error(\r\n                std::string(\"Cannot open file: \") + path);\r\n        }\r\n        std::cout << \"Opened: \" << path << '\\n';\r\n    }\r\n\r\n    ~FileHandle() {\r\n        if (fp_) {\r\n            std::fclose(fp_);\r\n            std::cout << \"Closed file\\n\";\r\n        }\r\n    }\r\n\r\n    // Non-copyable\r\n    FileHandle(const FileHandle&) = delete;\r\n    FileHandle& operator=(const FileHandle&) = delete;\r\n\r\n    // Movable\r\n    FileHandle(FileHandle&& other) noexcept : fp_(other.fp_) {\r\n        other.fp_ = nullptr;\r\n    }\r\n\r\n    FileHandle& operator=(FileHandle&& other) noexcept {\r\n        if (this != &other) {\r\n            if (fp_) std::fclose(fp_);\r\n            fp_ = other.fp_;\r\n            other.fp_ = nullptr;\r\n        }\r\n        return *this;\r\n    }\r\n\r\n    std::string read_line() {\r\n        // implementation omitted for brevity\r\n        return \"line content\";\r\n    }\r\n\r\nprivate:\r\n    std::FILE* fp_;\r\n};\r\n\r\nvoid process_file() {\r\n    FileHandle fh(\"data.txt\", \"r\");\r\n    // If read_line() throws, fh destructor still runs\r\n    auto line = fh.read_line();\r\n    std::cout << \"Read: \" << line << '\\n';\r\n}   // fh is destroyed here (normal exit or exception)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mutex lock wrapper:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\r\n#include <iostream>\r\n\r\nclass LockGuard {\r\npublic:\r\n    explicit LockGuard(std::mutex& mtx) : mtx_(mtx) {\r\n        mtx_.lock();\r\n        std::cout << \"Mutex locked\\n\";\r\n    }\r\n    ~LockGuard() {\r\n        mtx_.unlock();\r\n        std::cout << \"Mutex unlocked\\n\";\r\n    }\r\n    LockGuard(const LockGuard&) = delete;\r\n    LockGuard& operator=(const LockGuard&) = delete;\r\nprivate:\r\n    std::mutex& mtx_;\r\n};\r\n\r\nstd::mutex global_mutex;\r\nint shared_data = 0;\r\n\r\nvoid update_shared() {\r\n    LockGuard guard(global_mutex);\r\n    // If an exception is thrown here, the mutex is still released\r\n    shared_data++;\r\n    std::cout << \"Shared data: \" << shared_data << '\\n';\r\n}   // guard destructor unlocks even if exception propagates\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " C++17 provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::scoped_lock"
      }), " and C++11 provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::lock_guard"
      }), " which do exactly this. Always prefer standard RAII wrappers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "853-smart-pointers-as-raii",
      children: "8.5.3 Smart Pointers as RAII"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart pointers are RAII wrappers for heap memory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\r\n#include <iostream>\r\n#include <stdexcept>\r\n\r\nclass ExpensiveObject {\r\npublic:\r\n    ExpensiveObject(int id) : id_(id) {\r\n        std::cout << \"Creating object \" << id_ << '\\n';\r\n    }\r\n    ~ExpensiveObject() {\r\n        std::cout << \"Destroying object \" << id_ << '\\n';\r\n    }\r\n    void do_work() { /* ... */ }\r\nprivate:\r\n    int id_;\r\n};\r\n\r\nvoid process_with_raii() {\r\n    // Heap allocation wrapped in RAII -- automatically freed\r\n    auto obj = std::make_unique<ExpensiveObject>(42);\r\n    obj->do_work();\r\n    // If do_work() throws, unique_ptr destructor frees the memory\r\n}   // obj destroyed here (normal or exception path)\r\n\r\nvoid process_without_raii() {\r\n    // RAW pointer -- MEMORY LEAK if do_work() throws!\r\n    ExpensiveObject* obj = new ExpensiveObject(42);\r\n    obj->do_work();   // if this throws...\r\n    delete obj;       // ...this never executes\r\n}\r\n\r\nint main() {\r\n    try {\r\n        process_with_raii();  // safe\r\n        process_without_raii();  // leak if exception\r\n    } catch (...) {\r\n        std::cerr << \"Exception caught\\n\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "854-raii-guideline",
      children: "8.5.4 RAII Guideline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Every resource should be owned by an RAII object."
        }), " If you have a raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "socket"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateMutex"
        }), " in your code, you are likely doing it wrong. Wrap it in a class with a destructor or use the standard library wrapper."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "855-transaction-safety-with-raii",
      children: "8.5.5 Transaction Safety with RAII"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <string>\r\n\r\nclass Transaction {\r\npublic:\r\n    explicit Transaction(const std::string& name)\r\n        : name_(name), committed_(false) {\r\n        std::cout << \"BEGIN TRANSACTION: \" << name_ << '\\n';\r\n    }\r\n\r\n    ~Transaction() noexcept {\r\n        if (!committed_) {\r\n            rollback();\r\n        }\r\n    }\r\n\r\n    void commit() {\r\n        std::cout << \"COMMIT TRANSACTION: \" << name_ << '\\n';\r\n        committed_ = true;\r\n    }\r\n\r\n    // No copying or moving\r\n    Transaction(const Transaction&) = delete;\r\n    Transaction& operator=(const Transaction&) = delete;\r\n\r\nprivate:\r\n    void rollback() {\r\n        std::cout << \"ROLLBACK TRANSACTION: \" << name_ << '\\n';\r\n    }\r\n\r\n    std::string name_;\r\n    bool committed_;\r\n};\r\n\r\nvoid bank_transfer(double amount) {\r\n    Transaction tx(\"transfer\");\r\n    // perform transfer logic...\r\n    if (amount <= 0) {\r\n        throw std::invalid_argument(\"Amount must be positive\");\r\n    }\r\n    // send money...\r\n    if (amount > 10000) {\r\n        throw std::runtime_error(\"Requires manager approval\");\r\n    }\r\n    tx.commit();  // only commits if all checks pass\r\n}   // if exception, tx destructor calls rollback()\r\n\r\nint main() {\r\n    try {\r\n        bank_transfer(50000);\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Transfer failed: \" << e.what() << '\\n';\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BEGIN TRANSACTION: transfer\r\nROLLBACK TRANSACTION: transfer\r\nTransfer failed: Requires manager approval\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-constructor--destructor-exceptions",
      children: "8.6 Constructor / Destructor Exceptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " Building a house. If the roof collapses during construction (constructor exception), the partially built walls must be cleaned up. But if the roof collapses after the house is finished and occupied (destructor exception), its a disaster that collapses the whole neighborhood."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "861-the-constructor-exception-problem",
      children: "8.6.1 The Constructor Exception Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a constructor throws, the object is considered ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not fully constructed"
      }), ". The destructor will ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT"
      }), " be called because the object never completed construction. However, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "already-constructed base classes and members ARE destroyed"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-memory-leak",
      children: "The Memory Leak"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <cstring>\r\n\r\nclass StringBuffer {\r\npublic:\r\n    StringBuffer(const char* str) {\r\n        size_t len = std::strlen(str);\r\n        data_ = new char[len + 1];    // allocate\r\n        std::strcpy(data_, str);\r\n        // If we throw AFTER this allocation, data_ leaks!\r\n        if (len == 0) {\r\n            throw std::invalid_argument(\"Empty string not allowed\");\r\n        }\r\n        std::cout << \"Buffer allocated: \" << data_ << '\\n';\r\n    }\r\n\r\n    ~StringBuffer() {\r\n        delete[] data_;\r\n        std::cout << \"Buffer freed\\n\";\r\n    }\r\n\r\nprivate:\r\n    char* data_;\r\n};\r\n\r\nint main() {\r\n    try {\r\n        StringBuffer sb(\"\");   // throws -- leaks?\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Error: \" << e.what() << '\\n';\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StringBuffer"
      }), " constructor allocates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data_"
      }), " before throwing, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~StringBuffer()"
      }), " never runs because the object was never fully constructed. The heap memory leaks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "862-the-fix-use-raii-members",
      children: "8.6.2 The Fix: Use RAII Members"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The solution is to use RAII wrapper ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "members"
      }), " instead of raw resources:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <memory>\r\n#include <cstring>\r\n#include <vector>\r\n\r\nclass SafeStringBuffer {\r\npublic:\r\n    SafeStringBuffer(const char* str)\r\n        : size_(std::strlen(str)),\r\n          data_(std::make_unique<char[]>(size_ + 1))  // RAII wraps allocation\r\n    {\r\n        std::strcpy(data_.get(), str);\r\n        if (size_ == 0) {\r\n            // Even if we throw, data_ (unique_ptr) is already destroyed\r\n            // as a fully-constructed member\r\n            throw std::invalid_argument(\"Empty string not allowed\");\r\n        }\r\n        std::cout << \"Safe buffer: \" << data_.get() << '\\n';\r\n    }\r\n\r\n    // No need for user-declared destructor -- unique_ptr handles cleanup\r\n    // Rule of Zero in action!\r\n\r\nprivate:\r\n    size_t size_;\r\n    std::unique_ptr<char[]> data_;  // RAII -- automatically freed\r\n};\r\n\r\nint main() {\r\n    try {\r\n        SafeStringBuffer sb(\"\");\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Error: \" << e.what() << '\\n';\r\n    }\r\n    std::cout << \"No leak -- unique_ptr handled cleanup\\n\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error: Empty string not allowed\r\nNo leak -- unique_ptr handled cleanup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "863-two-phase-construction",
      children: "8.6.3 Two-Phase Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Another pattern is two-phase construction, though it is generally considered less idiomatic in C++:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class TwoPhaseObject {\r\npublic:\r\n    TwoPhaseObject() : initialized_(false) {}\r\n\r\n    // Second phase -- can fail safely because no resources held yet\r\n    void initialize(const std::string& config) {\r\n        // open files, allocate memory, connect to services\r\n        resource_ = new char[1024];  // raw only for illustration\r\n        initialized_ = true;\r\n    }\r\n\r\n    ~TwoPhaseObject() {\r\n        if (initialized_) {\r\n            delete[] resource_;\r\n        }\r\n    }\r\n\r\n    bool is_initialized() const { return initialized_; }\r\n\r\nprivate:\r\n    char* resource_ = nullptr;\r\n    bool initialized_;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Drawback:"
      }), " The object exists in an invalid state between construction and initialization. RAII is preferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "864-the-destructor-exception-problem",
      children: "8.6.4 The Destructor Exception Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Destructors should ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "never"
      }), " throw. If a destructor throws during stack unwinding (when another exception is active), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::terminate()"
      }), " is called:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n\r\nclass BadDestructor {\r\npublic:\r\n    ~BadDestructor() {\r\n        std::cout << \"Bad destructor running...\\n\";\r\n        throw std::runtime_error(\"destructor failed\");  // DONT DO THIS\r\n    }\r\n};\r\n\r\nint main() {\r\n    try {\r\n        BadDestructor b;\r\n        throw std::runtime_error(\"main exception\");\r\n        // When main exception unwinds, b destructor runs...\r\n        // b destructor throws -> std::terminate()\r\n    } catch (...) {\r\n        std::cerr << \"Never reached\\n\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typically):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bad destructor running...\r\nterminate called after throwing an instance of std::runtime_error\r\n  what():  destructor failed\r\n[1]    12345 abort (core dumped)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "865-destructor-exception-rules",
      children: "8.6.5 Destructor Exception Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Always mark destructors ", (0,jsx_runtime.jsx)(_components.code, {
                children: "noexcept"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++11 makes destructors noexcept by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Never throw from destructors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two active exceptions = terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handle errors internally"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log, swallow, or defer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["If you must propagate, use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "std::terminate"
              }), " handler"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set a custom terminate handler"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "866-handling-destructor-errors-safely",
      children: "8.6.6 Handling Destructor Errors Safely"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <exception>\r\n#include <stdexcept>\r\n\r\nclass FileWriter {\r\npublic:\r\n    explicit FileWriter(const char* path) {\r\n        // open file...\r\n        std::cout << \"File opened\\n\";\r\n    }\r\n\r\n    ~FileWriter() noexcept {\r\n        try {\r\n            // flush and close -- might fail\r\n            flush();\r\n            std::cout << \"File closed safely\\n\";\r\n        } catch (...) {\r\n            // Log the error but do NOT let exception escape\r\n            std::cerr << \"Warning: file close failed (suppressed)\\n\";\r\n        }\r\n    }\r\n\r\n    void write(const std::string& data) {\r\n        if (data.empty()) {\r\n            throw std::invalid_argument(\"Cannot write empty data\");\r\n        }\r\n        // write to file...\r\n    }\r\n\r\n    void flush() {\r\n        // might throw if disk is full\r\n        // throw std::runtime_error(\"Disk full during flush\");\r\n    }\r\n\r\nprivate:\r\n    // file handle would be here\r\n};\r\n\r\nint main() {\r\n    try {\r\n        FileWriter fw(\"output.txt\");\r\n        fw.write(\"Hello\");\r\n        // If write throws, fw destructor still runs safely\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Error: \" << e.what() << '\\n';\r\n    }\r\n    std::cout << \"Program continues\\n\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-exception-safety-guarantees",
      children: "8.7 Exception Safety Guarantees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A bank transaction. If it fails, the bank can either: put the money back (strong guarantee), or at minimum ensure no money disappears from the system (basic guarantee), or never fail at all (nothrow guarantee)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "871-the-three-levels",
      children: "8.7.1 The Three Levels"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Guarantee"
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
              children: "No-throw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function will never throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int size() const noexcept"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strong"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit or rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If exception occurs, state is unchanged"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector::push_back"
            }), " (C++98)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No leaks, valid state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resources released, invariants maintained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most STL operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May leak, may corrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your own buggy code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "872-no-throw-guarantee",
      children: "8.7.2 No-throw Guarantee"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The strongest level. The operation ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot fail"
      }), ". Used for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructors"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "swap"
        }), " operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move constructors/assignments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple queries (size, empty, begin, end)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void safe_swap(int& a, int& b) noexcept {\r\n    int temp = a;\r\n    a = b;\r\n    b = temp;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) for swaps, O(1) for queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "873-strong-guarantee-commit-or-rollback",
      children: "8.7.3 Strong Guarantee (Commit or Rollback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If an exception is thrown, the program state is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unchanged"
      }), " from before the call. This is the \"all-or-nothing\" guarantee."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <stdexcept>\r\n#include <string>\r\n\r\nclass Account {\r\npublic:\r\n    Account(const std::string& name, double balance)\r\n        : name_(name), balance_(balance) {}\r\n\r\n    // Strong guarantee: either both accounts are updated or neither\r\n    friend void transfer(Account& from, Account& to, double amount) {\r\n        // Pre-validate -- no side effects yet\r\n        if (amount < 0) {\r\n            throw std::invalid_argument(\"Negative transfer\");\r\n        }\r\n        if (from.balance_ < amount) {\r\n            throw std::runtime_error(\"Insufficient funds\");\r\n        }\r\n\r\n        // Now perform the actual state changes\r\n        from.balance_ -= amount;   // modify first account\r\n        // If the next line throws, we have a problem!\r\n        to.balance_ += amount;     // modify second account\r\n    }\r\n\r\n    double balance() const { return balance_; }\r\n\r\nprivate:\r\n    std::string name_;\r\n    double balance_;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transfer"
      }), " above is NOT strongly safe. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to.balance_ += amount"
      }), " throws (unlikely for double, but could with custom types), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "from"
      }), " is already modified."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strongly safe version using copy-and-swap:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>  // for swap\r\n\r\nclass AccountV2 {\r\npublic:\r\n    AccountV2(const std::string& name, double balance)\r\n        : name_(name), balance_(balance) {}\r\n\r\n    void deposit(double amount) {\r\n        if (amount < 0) {\r\n            throw std::invalid_argument(\"Negative deposit\");\r\n        }\r\n        balance_ += amount;\r\n    }\r\n\r\n    void withdraw(double amount) {\r\n        if (amount < 0) {\r\n            throw std::invalid_argument(\"Negative withdrawal\");\r\n        }\r\n        if (balance_ < amount) {\r\n            throw std::runtime_error(\"Insufficient funds\");\r\n        }\r\n        balance_ -= amount;\r\n    }\r\n\r\n    double balance() const noexcept { return balance_; }\r\n\r\n    // Strong guarantee via copy-and-swap\r\n    friend void transfer_v2(AccountV2& from, AccountV2& to, double amount) {\r\n        // Create copies\r\n        AccountV2 from_copy = from;\r\n        AccountV2 to_copy = to;\r\n\r\n        // Modify copies (if this throws, originals unchanged)\r\n        from_copy.withdraw(amount);\r\n        to_copy.deposit(amount);\r\n\r\n        // Only now commit via noexcept swap\r\n        using std::swap;\r\n        swap(from, from_copy);   // noexcept\r\n        swap(to, to_copy);       // noexcept\r\n    }\r\n\r\n    friend void swap(AccountV2& a, AccountV2& b) noexcept {\r\n        using std::swap;\r\n        swap(a.balance_, b.balance_);\r\n        swap(a.name_, b.name_);\r\n    }\r\n\r\nprivate:\r\n    std::string name_;\r\n    double balance_;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The copy-and-swap idiom:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copy"
        }), " of the object(s) to modify"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform operations on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copy"
        }), " (may throw)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If all operations succeed, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "swap"
        }), " the copy with the original (noexcept)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "874-basic-guarantee-no-leaks-valid-state",
      children: "8.7.4 Basic Guarantee (No Leaks, Valid State)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If an exception is thrown, the program remains in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "valid"
      }), " (but potentially indeterminate) state. No resources leak, all invariants are preserved, but the specific state may differ from before the call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class BasicSafeVector {\r\npublic:\r\n    BasicSafeVector() : data_(nullptr), size_(0), capacity_(0) {}\r\n\r\n    ~BasicSafeVector() noexcept {\r\n        delete[] data_;\r\n    }\r\n\r\n    void push_back(int value) {\r\n        if (size_ == capacity_) {\r\n            // Basic guarantee: even if reallocation fails (bad_alloc),\r\n            // the original data remains intact (valid state)\r\n            size_t new_cap = capacity_ == 0 ? 1 : capacity_ * 2;\r\n            int* new_data = new int[new_cap];  // may throw bad_alloc\r\n            for (size_t i = 0; i < size_; ++i) {\r\n                new_data[i] = data_[i];\r\n            }\r\n            delete[] data_;\r\n            data_ = new_data;\r\n            capacity_ = new_cap;\r\n        }\r\n        data_[size_++] = value;\r\n    }\r\n\r\n    size_t size() const noexcept { return size_; }\r\n\r\nprivate:\r\n    int* data_;\r\n    size_t size_;\r\n    size_t capacity_;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "875-safety-level-comparison-table",
      children: "8.7.5 Safety Level Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "No-throw"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No leaks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maybe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Valid state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maybe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State unchanged"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Never throws"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevalence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buggy code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactional code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queries, destructors, swap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No effort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Careful cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-and-swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "876-achieving-strong-guarantee-the-copy-and-swap-idiom",
      children: "8.7.6 Achieving Strong Guarantee: The Copy-and-Swap Idiom"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <utility>\r\n#include <cstring>\r\n\r\nclass String {\r\npublic:\r\n    String() : data_(new char[1]{}) {}\r\n\r\n    String(const char* str)\r\n        : data_(str ? new char[std::strlen(str) + 1]{} : new char[1]{}) {\r\n        if (str) std::strcpy(data_, str);\r\n    }\r\n\r\n    // Copy constructor (may throw bad_alloc -- but thats fine)\r\n    String(const String& other)\r\n        : data_(new char[std::strlen(other.data_) + 1]{}) {\r\n        std::strcpy(data_, other.data_);\r\n    }\r\n\r\n    // Move constructor -- noexcept for vector optimization\r\n    String(String&& other) noexcept\r\n        : data_(std::exchange(other.data_, nullptr)) {}\r\n\r\n    // Copy-and-swap assignment -- STRONG GUARANTEE\r\n    String& operator=(String other) noexcept {\r\n        // If copy construction throws, this never executes\r\n        swap(*this, other);\r\n        return *this;\r\n    }\r\n\r\n    ~String() noexcept { delete[] data_; }\r\n\r\n    friend void swap(String& a, String& b) noexcept {\r\n        using std::swap;\r\n        swap(a.data_, b.data_);\r\n    }\r\n\r\n    const char* c_str() const noexcept { return data_; }\r\n\r\nprivate:\r\n    char* data_;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this gives strong guarantee:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The parameter ", (0,jsx_runtime.jsx)(_components.code, {
          children: "other"
        }), " is passed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "by value"
        }), " -- copy happens at the call site"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the copy throws ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bad_alloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        }), " is untouched"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the copy succeeds, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "swap"
        }), " (noexcept) exchanges the state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Old state is destroyed when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "other"
        }), " goes out of scope"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-the-noexcept-specifier",
      children: "8.8 The noexcept Specifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A fireproof building. The builder guarantees (noexcept) that the building will never catch fire. Because of this guarantee, the city can optimize zoning (compiler optimizations) and use cheaper materials (no exception-handling bookkeeping). But if a fire somehow starts anyway, the building is immediately demolished (terminate)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "881-noexcept-syntax",
      children: "8.8.1 noexcept Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void function1() noexcept;            // guarantees: no exceptions\r\nvoid function2() noexcept(true);      // same as above\r\nvoid function3() noexcept(false);     // may throw (default)\r\nvoid function4() noexcept(condition); // conditional noexcept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "882-what-noexcept-means",
      children: "8.8.2 What noexcept Means"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contract:"
        }), " The function promises not to throw exceptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consequence of violation:"
        }), " If a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " function does throw, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::terminate()"
        }), " is called immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No stack unwinding:"
        }), " The stack may or may not be unwound -- behavior is implementation-defined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimization:"
        }), " The compiler can omit exception-handling bookkeeping code"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "883-noexcept-vs-throw-vs-nothing",
      children: "8.8.3 noexcept vs throw() vs Nothing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            }), " (C++11)"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "throw()"
            }), " (deprecated)"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nothing (default)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() throw()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Violation consequence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::terminate()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::unexpected()"
            }), " (old), then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "terminate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal unwinding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack unwinding on violation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maybe (impl-defined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (old standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (unexpected handler called)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compiler optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some (less reliable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated in C++17, removed in C++20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for non-noexcept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept(expr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operator form"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept(expr)"
            }), " (boolean)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "884-conditional-noexcept",
      children: "8.8.4 Conditional noexcept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noexcept(condition)"
      }), " for templates where noexcept-ness depends on the template parameter:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <type_traits>\r\n#include <iostream>\r\n#include <vector>\r\n\r\ntemplate <typename T>\r\nclass Container {\r\npublic:\r\n    // Move constructor is noexcept only if Ts move is noexcept\r\n    Container(Container&& other) noexcept(std::is_nothrow_move_constructible_v<T>)\r\n        : data_(std::move(other.data_)) {}\r\n\r\n    // The noexcept operator evaluates at compile time\r\n    void push_back(const T& value) noexcept(noexcept(data_.push_back(value))) {\r\n        data_.push_back(value);\r\n    }\r\n\r\nprivate:\r\n    std::vector<T> data_;\r\n};\r\n\r\n// Example: checking noexcept\r\nint main() {\r\n    std::cout << std::boolalpha;\r\n    std::cout << \"int move is noexcept: \"\r\n              << std::is_nothrow_move_constructible_v<int> << '\\n';\r\n    std::cout << \"std::vector<int> push_back noexcept: \"\r\n              << noexcept(std::declval<std::vector<int>&>().push_back(1)) << '\\n';\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "885-the-noexcept-operator",
      children: "8.8.5 The noexcept Operator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noexcept"
      }), " operator is a compile-time check that returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " if the expression is non-throwing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n\r\nvoid may_throw() noexcept(false) {}\r\nvoid no_throw() noexcept {}\r\n\r\nint main() {\r\n    std::cout << std::boolalpha;\r\n    std::cout << \"may_throw is noexcept: \"\r\n              << noexcept(may_throw()) << '\\n';         // false\r\n    std::cout << \"no_throw is noexcept: \"\r\n              << noexcept(no_throw()) << '\\n';           // true\r\n    std::cout << \"sizeof(int) is noexcept: \"\r\n              << noexcept(sizeof(int)) << '\\n';          // true\r\n    std::cout << \"new int is noexcept: \"\r\n              << noexcept(new int) << '\\n';              // false (bad_alloc)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "886-when-to-use-noexcept",
      children: "8.8.6 When to Use noexcept"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Apply noexcept?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destructors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (implicitly since C++11)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never throw from destructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move constructor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables vector reallocation optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables swap and reallocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "swap()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for strong guarantee idiom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simple getters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "size()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "empty()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "begin()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "end()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions that never throw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clarifies contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions that may throw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions throwing in rare edge cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dont lie to the compiler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions that wrap potentially-throwing code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "887-the-vector-reallocation-optimization",
      children: "8.8.7 The Vector Reallocation Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the most important practical effect of noexcept:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\r\n#include <iostream>\r\n\r\nstruct MovableButThrowing {\r\n    int id;\r\n    MovableButThrowing(int i) : id(i) {}\r\n    MovableButThrowing(MovableButThrowing&& other) noexcept(false) {\r\n        // This move constructor is NOT noexcept\r\n        id = other.id;\r\n        other.id = -1;\r\n        if (id == 42) {\r\n            throw std::runtime_error(\"move failed on 42\");\r\n        }\r\n    }\r\n};\r\n\r\nstruct MovableNoexcept {\r\n    int id;\r\n    MovableNoexcept(int i) : id(i) {}\r\n    MovableNoexcept(MovableNoexcept&& other) noexcept {\r\n        id = other.id;\r\n        other.id = -1;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // With noexcept(false) move -- vector will COPY, not move\r\n    std::vector<MovableButThrowing> v1;\r\n    v1.push_back(MovableButThrowing{1});\r\n    v1.push_back(MovableButThrowing{2});\r\n    // Reallocation uses COPY constructor (slower, but safe)\r\n\r\n    std::cout << \"\\n---\\n\";\r\n\r\n    // With noexcept(true) move -- vector will MOVE (fast)\r\n    std::vector<MovableNoexcept> v2;\r\n    v2.push_back(MovableNoexcept{1});\r\n    v2.push_back(MovableNoexcept{2});\r\n    // Reallocation uses MOVE constructor (fast, optimal)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this matters:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " grows its internal buffer when it runs out of capacity. During reallocation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the element type has a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " move constructor: elements are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "moved"
        }), " (fast, O(1) each)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If not (or pre-C++11): elements are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copied"
        }), " (potentially slow, O(n) each)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The difference can be 10x-100x for types with expensive copies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "888-common-noexcept-mistakes",
      children: "8.8.8 Common noexcept Mistakes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// MISTAKE 1: Calling throwing code from noexcept\r\nvoid safe() noexcept {\r\n    throw std::runtime_error(\"oops\");  // calls std::terminate()!\r\n}\r\n\r\n// MISTAKE 2: Wrong assumption about noexcept\r\nvoid might_throw() noexcept {\r\n    std::vector<int> v;\r\n    v.push_back(42);\r\n    // push_back may throw bad_alloc -- but we declared noexcept!\r\n    // If allocation fails, program terminates\r\n}\r\n\r\n// MISTAKE 3: noexcept on template without considering all instantiations\r\ntemplate <typename T>\r\nvoid wrap(T&& value) noexcept {\r\n    // fine for int, but what if Ts operator= throws?\r\n    value = T{};\r\n}\r\n\r\n// Correct: conditional noexcept\r\ntemplate <typename T>\r\nvoid wrap_correct(T&& value) noexcept(noexcept(value = T{})) {\r\n    value = T{};\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-standard-exception-hierarchy",
      children: "8.9 Standard Exception Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "891-full-hierarchy",
      children: "8.9.1 Full Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The C++ standard library defines a rich exception hierarchy rooted at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::exception"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::exception\r\n├── std::logic_error\r\n│   ├── std::invalid_argument\r\n│   ├── std::domain_error\r\n│   ├── std::length_error\r\n│   └── std::out_of_range\r\n├── std::runtime_error\r\n│   ├── std::range_error\r\n│   ├── std::overflow_error\r\n│   └── std::underflow_error\r\n├── std::bad_alloc\r\n│   └── std::bad_array_new_length\r\n├── std::bad_cast\r\n├── std::bad_typeid\r\n├── std::bad_exception\r\n├── std::bad_function_call\r\n├── std::bad_weak_ptr\r\n├── std::bad_optional_access\r\n├── std::bad_any_cast\r\n└── std::bad_variant_access\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "892-exception-categories",
      children: "8.9.2 Exception Categories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logic errors"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::logic_error"
      }), "): Errors detectable before program execution — precondition violations."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Exception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Thrown"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::invalid_argument"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::bitset::bitset(string with non-0/1)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::domain_error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Argument outside domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical domain violation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::length_error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size exceeds maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector::reserve(n > max_size())"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::out_of_range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index out of bounds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector::at(100)"
            }), " on 10-element vector"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Runtime errors"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::runtime_error"
      }), "): Errors detectable only during execution."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Exception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Thrown"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::range_error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result outside range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic result outside representable range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::overflow_error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic overflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::bitset::to_ulong()"
            }), " on too-large bitset"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::underflow_error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic underflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point underflow (rare)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "893-code-using-the-hierarchy",
      children: "8.9.3 Code: Using the Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n#include <stdexcept>\r\n#include <bitset>\r\n\r\nint main() {\r\n    try {\r\n        std::vector<int> v(5);\r\n        v.at(10) = 42;           // throws std::out_of_range\r\n    } catch (const std::out_of_range& e) {\r\n        std::cerr << \"Out of range: \" << e.what() << '\\n';\r\n    }\r\n\r\n    try {\r\n        std::bitset<5> b(\"11002\");  // invalid character 2\r\n    } catch (const std::invalid_argument& e) {\r\n        std::cerr << \"Invalid: \" << e.what() << '\\n';\r\n    }\r\n\r\n    try {\r\n        std::vector<int> big;\r\n        big.reserve(big.max_size() + 1);  // throws std::length_error\r\n    } catch (const std::length_error& e) {\r\n        std::cerr << \"Too long: \" << e.what() << '\\n';\r\n    }\r\n\r\n    try {\r\n        int* p = new int[100000000000000];  // throws std::bad_alloc\r\n    } catch (const std::bad_alloc& e) {\r\n        std::cerr << \"Allocation failed: \" << e.what() << '\\n';\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "894-the-what-method",
      children: ["8.9.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "what()"
      }), " Method"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::exception"
      }), " subclass provides a virtual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "what()"
      }), " method returning a C-string description:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <exception>\r\n#include <iostream>\r\n\r\n// what() signature:\r\n// virtual const char* what() const noexcept;\r\n\r\nvoid print_exception_info(const std::exception& e) {\r\n    std::cerr << \"Exception type: \" << typeid(e).name()\r\n              << \"\\n  what(): \" << e.what() << '\\n';\r\n}\r\n\r\nint main() {\r\n    try {\r\n        throw std::runtime_error(\"Something went wrong\");\r\n    } catch (const std::exception& e) {\r\n        print_exception_info(e);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "810-custom-exception-classes",
      children: "8.10 Custom Exception Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analogy:"
        }), " A hospital has a standard emergency code system (Code Blue = cardiac arrest, Code Red = fire). Similarly, your application should have a standard exception hierarchy where each exception type carries domain-specific information."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8101-design-guidelines",
      children: "8.10.1 Design Guidelines"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Guideline"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Derive from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "std::exception"
              }), " (or subclass)"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability with catch(const std::exception&)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "std::runtime_error"
              }), " as base for runtime errors"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common category"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "std::logic_error"
              }), " for precondition violations"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bugs that should be fixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Provide a meaningful ", (0,jsx_runtime.jsx)(_components.code, {
                children: "what()"
              }), " message"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging and logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Keep exception classes simple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception handling is already slow -- dont make it worse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Make destructors noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default, but be explicit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preserve copy semantics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exceptions are copied when thrown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add domain-specific data members"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error codes, file paths, line numbers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8102-complete-custom-exception-hierarchy",
      children: "8.10.2 Complete Custom Exception Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <string>\r\n#include <system_error>\r\n#include <sstream>\r\n\r\n//============================================================\r\n// Base: ApplicationError\r\n//============================================================\r\nclass ApplicationError : public std::runtime_error {\r\npublic:\r\n    explicit ApplicationError(const std::string& message,\r\n                              int error_code = 0)\r\n        : std::runtime_error(message), error_code_(error_code) {}\r\n\r\n    int error_code() const noexcept { return error_code_; }\r\n\r\nprotected:\r\n    // Helper for derived classes to build messages\r\n    static std::string build_message(const std::string& context,\r\n                                     const std::string& detail) {\r\n        return \"[\" + context + \"] \" + detail;\r\n    }\r\n\r\nprivate:\r\n    int error_code_;\r\n};\r\n\r\n//============================================================\r\n// Level 1: Domain-specific categories\r\n//============================================================\r\nclass DatabaseError : public ApplicationError {\r\npublic:\r\n    DatabaseError(const std::string& query, int db_error_code)\r\n        : ApplicationError(\r\n              build_message(\"Database\", \"Query failed with code \"\r\n                           + std::to_string(db_error_code)),\r\n              db_error_code),\r\n          query_(query) {}\r\n\r\n    const std::string& query() const noexcept { return query_; }\r\n\r\nprivate:\r\n    std::string query_;\r\n};\r\n\r\nclass NetworkError : public ApplicationError {\r\npublic:\r\n    NetworkError(const std::string& host, int port,\r\n                 const std::string& reason)\r\n        : ApplicationError(\r\n              build_message(\"Network\",\r\n                           \"Connection to \" + host + \":\" +\r\n                           std::to_string(port) + \" failed: \" + reason),\r\n              0),\r\n          host_(host), port_(port) {}\r\n\r\n    const std::string& host() const noexcept { return host_; }\r\n    int port() const noexcept { return port_; }\r\n\r\nprivate:\r\n    std::string host_;\r\n    int port_;\r\n};\r\n\r\nclass ConfigError : public ApplicationError {\r\npublic:\r\n    ConfigError(const std::string& file_path,\r\n                const std::string& reason)\r\n        : ApplicationError(\r\n              build_message(\"Config\",\r\n                           \"File \" + file_path + \": \" + reason),\r\n              0),\r\n          file_path_(file_path) {}\r\n\r\n    const std::string& file_path() const noexcept { return file_path_; }\r\n\r\nprivate:\r\n    std::string file_path_;\r\n};\r\n\r\n//============================================================\r\n// Level 2: More specific types\r\n//============================================================\r\nclass ConnectionTimeoutError : public NetworkError {\r\npublic:\r\n    ConnectionTimeoutError(const std::string& host, int port,\r\n                           int timeout_ms)\r\n        : NetworkError(host, port,\r\n                       \"Timeout after \" + std::to_string(timeout_ms) + \"ms\"),\r\n          timeout_ms_(timeout_ms) {}\r\n\r\n    int timeout_ms() const noexcept { return timeout_ms_; }\r\n\r\nprivate:\r\n    int timeout_ms_;\r\n};\r\n\r\nclass ConnectionRefusedError : public NetworkError {\r\npublic:\r\n    ConnectionRefusedError(const std::string& host, int port)\r\n        : NetworkError(host, port, \"Connection refused\") {}\r\n};\r\n\r\nclass QueryExecutionError : public DatabaseError {\r\npublic:\r\n    QueryExecutionError(const std::string& query, int error_code,\r\n                        const std::string& sql_state)\r\n        : DatabaseError(query, error_code),\r\n          sql_state_(sql_state) {}\r\n\r\n    const std::string& sql_state() const noexcept { return sql_state_; }\r\n\r\nprivate:\r\n    std::string sql_state_;\r\n};\r\n\r\n//============================================================\r\n// Using the hierarchy\r\n//============================================================\r\nvoid connect_to_service() {\r\n    // Simulate various failure modes\r\n    throw ConnectionTimeoutError(\"api.example.com\", 443, 5000);\r\n}\r\n\r\nvoid execute_query() {\r\n    throw QueryExecutionError(\"SELECT * FROM users\", 1062, \"23000\");\r\n}\r\n\r\nint main() {\r\n    // Polymorphic catch: use the most specific base you care about\r\n    try {\r\n        connect_to_service();\r\n    } catch (const ConnectionTimeoutError& e) {\r\n        std::cerr << \"Timeout on \" << e.host() << \":\"\r\n                  << e.port() << \" after \" << e.timeout_ms() << \"ms\\n\";\r\n    } catch (const NetworkError& e) {\r\n        std::cerr << \"Network issue: \" << e.what() << '\\n';\r\n    } catch (const ApplicationError& e) {\r\n        std::cerr << \"Application error [\" << e.error_code()\r\n                  << \"]: \" << e.what() << '\\n';\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Standard error: \" << e.what() << '\\n';\r\n    }\r\n\r\n    try {\r\n        execute_query();\r\n    } catch (const QueryExecutionError& e) {\r\n        std::cerr << \"Query failed [\" << e.sql_state() << \"]: \"\r\n                  << e.what() << '\\n';\r\n    } catch (const DatabaseError& e) {\r\n        std::cerr << \"Database error on query: \" << e.query() << '\\n';\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Timeout on api.example.com:443 after 5000ms\r\nQuery failed [23000]: [Database] Query failed with code 1062\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8103-exception-class-checklist",
      children: "8.10.3 Exception Class Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Properly derived from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::exception"
        }), " or subclass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Virtual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "what()"
        }), " inherited (no need to override if base is sufficient)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Public copy constructor (implicitly provided if no weird members)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " destructor (implicit, but verify)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Meaningful error message in constructor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Additional data members for context (error codes, file names, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Accessors for additional data (const, noexcept)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "811-interview-corner",
      children: "8.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1: Explain what happens during stack unwinding when an exception is thrown."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a C++ exception is thrown, the runtime performs a structured sequence of operations known as stack unwinding:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exception object creation:"
          }), " The thrown expression is used to copy-initialize a special exception object allocated in a compiler-managed location (usually on the heap in the Itanium C++ ABI)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handler search:"
          }), " The runtime searches up the call stack for a catch clause matching the exception type. This search examines each function frame in reverse call order."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Destructor invocation:"
          }), " For each frame passed through during the search, all local automatic objects are destroyed in reverse order of their construction. This is the core of RAII guarantees."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Control transfer:"
          }), " When a matching handler is found, the stack is rewound to that frame, and execution continues in the catch block."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Matching rules:"
          }), " The catch clauses are evaluated in order of appearance. A match occurs if:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The types are identical (ignoring top-level cv-qualifiers)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The thrown type is publicly derived from the catch type"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The catch is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "catch(...)"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The catch is a pointer type and standard pointer conversions apply"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No handler found:"
          }), " If no matching handler exists anywhere in the call stack, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::terminate()"
          }), " is called."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical point:"
      }), " If during stack unwinding a destructor throws another exception, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::terminate()"
      }), " is immediately called because the runtime cannot handle two simultaneous active exceptions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q2: Why should destructors never throw exceptions?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Destructors must never throw for several reasons:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stack unwinding during exception:"
          }), " If a destructor throws while the stack is already unwinding due to another exception, there are two active exceptions simultaneously. The C++ runtime cannot handle this and calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::terminate()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "C++11 default:"
          }), " Destructors are implicitly ", (0,jsx_runtime.jsx)(_components.code, {
            children: "noexcept(true)"
          }), " since C++11. If a destructor attempts to throw, the compiler may call ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::terminate()"
          }), " immediately, even during normal (non-exceptional) destruction."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RAII contract violation:"
          }), " RAII relies on destructors running successfully to release resources. If a destructor throws, resource cleanup is interrupted, potentially leaking resources."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Container guarantees:"
          }), " STL containers assume element destructors never throw. If a destructor throws during ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector::erase()"
          }), " or similar operations, the container is left in an undefined state."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What to do instead:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class SafeResource {\r\npublic:\r\n    ~SafeResource() noexcept {\r\n        try {\r\n            cleanup();  // might throw\r\n        } catch (...) {\r\n            // Log the error but never propagate\r\n            std::cerr << \"Cleanup failed (suppressed)\\n\";\r\n        }\r\n    }\r\n\r\nprivate:\r\n    void cleanup() {\r\n        // might logically fail (e.g., file close error)\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q3: What is the difference between catching by value vs catching by reference?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Catch by Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Catch by Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slicing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -- the exception object is copy-constructed into the catch parameter using the static type, losing any derived type information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No -- the reference binds to the original exception object, preserving dynamic type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least two: one for the throw and one for the catch parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one: just the throw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polymorphism"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Broken: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "e.what()"
            }), " calls the base class version even if a derived type was thrown"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Works: virtual dispatch resolves to the most-derived ", (0,jsx_runtime.jsx)(_components.code, {
              children: "what()"
            }), " override"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower -- extra copy, which may allocate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster -- no extra copy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example demonstrating the difference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Base : std::exception {\r\n    const char* what() const noexcept override {\r\n        return \"Base\";\r\n    }\r\n};\r\n\r\nstruct Derived : Base {\r\n    const char* what() const noexcept override {\r\n        return \"Derived\";\r\n    }\r\n};\r\n\r\nint main() {\r\n    try { throw Derived(); }\r\n    catch (Base b) { std::cout << b.what() << '\\n'; }  // prints \"Base\" (sliced)\r\n    // vs\r\n    try { throw Derived(); }\r\n    catch (const Base& b) { std::cout << b.what() << '\\n'; }  // prints \"Derived\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q4: What are the three levels of exception safety guarantees?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The three levels, from weakest to strongest:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Basic Guarantee:"
      }), " If an exception is thrown, no resources are leaked and objects remain in a valid (but unspecified) state. Invariants are maintained, but the specific value is unknown. Most operations in the standard library provide at least the basic guarantee."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Example:"
      }), " A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_back"
      }), " that leaks no memory even if reallocation fails."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Strong Guarantee (Commit or Rollback):"
      }), " If an exception is thrown, the program state is exactly as it was before the call. This is an \"all-or-nothing\" transaction semantics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Implementation strategy:"
      }), " The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy-and-swap idiom"
      }), " is the classic approach:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a copy of the object(s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify the copy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If all modifications succeed, swap (noexcept) the copy with the original"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If any modification throws, the copy is destroyed and the original is untouched"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. No-throw Guarantee:"
      }), " The operation will never throw an exception. This is the strongest guarantee and is required for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructors"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "swap"
        }), " operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move constructors (for optimal vector reallocation)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simple queries like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "empty()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                  NEVER THROWS\r\n                  ┌──────────────────────────────┐\r\n                  │  No-throw (swap, move, dtor) │\r\n                  │──────────────────────────────│\r\n                  │  Strong (commit or rollback) │\r\n                  │──────────────────────────────│\r\n     MAY THROW    │  Basic (no leaks, valid)     │\r\n                  └──────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Q5: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "noexcept"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "throw()"
          }), ", and no exception specification?"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void f1() noexcept;      // C++11: terminate on violation\r\nvoid f2() throw();       // deprecated C++03: unexpected() on violation\r\nvoid f3();               // Default: may throw\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "throw()"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "None"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++ Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++11 onward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++03 (deprecated in C++17, removed in C++20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "On violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::terminate()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::unexpected()"
            }), " then typically ", (0,jsx_runtime.jsx)(_components.code, {
              children: "terminate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack unwinding on violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined (may unwind, may not)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes, destructors run before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unexpected()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always (normal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero cost (static table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some (runtime checks for unexpected handler)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero cost (table-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum -- can omit EH tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less reliable optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept(expr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator form"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept(expr)"
            }), " (compile-time boolean)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The key insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noexcept"
      }), " is not just syntactic sugar for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throw()"
      }), ". The semantics differ in important ways:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " separates the optimization guarantee from the runtime enforcement mechanism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It enables the standard library to detect noexcept-ness via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::is_nothrow_*"
        }), " type traits"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It allows conditional noexcept, which is essential for templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The lack of guaranteed stack unwinding on violation enables greater compiler freedom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q6: How does RAII interact with exception handling?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAII (Resource Acquisition Is Initialization) and exception handling are complementary mechanisms that together form the backbone of C++ error management:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How they interact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic cleanup:"
          }), " When an exception propagates, stack unwinding guarantees that destructors of local objects run in reverse construction order. RAII leverages this to automatically release resources (memory, file handles, mutexes, connections)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No leak path:"
          }), " With RAII, there is no code path where a resource is forgotten. The destructor runs whether the scope exits normally or via exception."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exception safety:"
          }), " RAII is the primary tool for achieving basic and strong exception safety guarantees. Without RAII, every try/catch block would need manual cleanup code, which is error-prone and violates DRY."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example of bad code (manual cleanup, leak-prone):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void bad() {\r\n    Resource* r = new Resource();\r\n    // if doWork() throws, resource leaks\r\n    doWork(r);\r\n    delete r;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example of good code (RAII, exception-safe):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void good() {\r\n    auto r = std::make_unique<Resource>();\r\n    // if doWork() throws, unique_ptr destructor cleans up\r\n    doWork(r.get());\r\n    // if we get here, delete happens automatically\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The golden rule:"
      }), " If all resource management is done through RAII wrappers, your code is automatically exception-safe at the basic guarantee level."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q7: Can constructors throw exceptions? What happens to partially-constructed objects?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes, constructors can and should throw exceptions to indicate construction failure. Here is what happens:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No destructor call:"
          }), " If a constructor throws, the destructor of the object being constructed is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NOT called"
          }), " because the object was never fully constructed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Member and base destructors:"
          }), " Fully constructed subobjects (base classes and member variables) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ARE"
          }), " destroyed in reverse order of their construction."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory leak risk:"
          }), " If a constructor allocates a raw resource (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "new"
          }), ") and then throws before storing it in a member, that resource leaks."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The fix: Use RAII members"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// BAD: raw pointer member -- leaks on exception\r\nclass Bad {\r\n    int* data;\r\npublic:\r\n    Bad() {\r\n        data = new int[100];\r\n        throw std::runtime_error(\"fail\");  // data leaks!\r\n    }\r\n    ~Bad() { delete[] data; }\r\n};\r\n\r\n// GOOD: RAII member -- no leak\r\nclass Good {\r\n    std::unique_ptr<int[]> data;\r\npublic:\r\n    Good() : data(std::make_unique<int[]>(100)) {\r\n        throw std::runtime_error(\"fail\");  // data is destroyed as member\r\n    }\r\n    // No need for user-defined destructor (Rule of Zero)\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key guideline:"
      }), " Prefer RAII member objects over raw resources. If a member is an RAII wrapper, its destructor runs automatically even when the containing objects constructor throws. This is the \"RAII members protect constructor exceptions\" principle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "812-applications-in-real-systems",
      children: "8.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8121-stl-exception-behavior",
      children: "8.12.1 STL Exception Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The C++ Standard Library uses exceptions extensively. Every container operation documents its exception safety guarantee."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safety Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (if T move is noexcept)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy or move elements on reallocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic or Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on number of elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No reallocation (node-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::map"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "insert()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node-based, rarely throws"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reallocation may copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::shared_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates control block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::fstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May set failbit instead of throw"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8122-smart-pointer-exception-safety",
      children: "8.12.2 Smart Pointer Exception Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart pointers demonstrate RAII at work in the standard library:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\r\n#include <iostream>\r\n#include <stdexcept>\r\n\r\nstruct Connection {\r\n    Connection() { std::cout << \"Connection opened\\n\"; }\r\n    ~Connection() { std::cout << \"Connection closed\\n\"; }\r\n    void send(const std::string& data) {\r\n        if (data.empty())\r\n            throw std::runtime_error(\"Cannot send empty data\");\r\n        std::cout << \"Sent: \" << data << '\\n';\r\n    }\r\n};\r\n\r\n// Custom deleter for shared_ptr\r\nstruct ConnectionDeleter {\r\n    void operator()(Connection* c) const noexcept {\r\n        delete c;   // Connection destructor runs here\r\n    }\r\n};\r\n\r\nvoid process_data(const std::string& data) {\r\n    // RAII: connection is automatically closed\r\n    std::unique_ptr<Connection, ConnectionDeleter> conn(new Connection());\r\n    // Even if send() throws, ~unique_ptr calls the deleter\r\n    conn->send(data);\r\n    std::cout << \"Data processed successfully\\n\";\r\n}   // unique_ptr destructor runs even on exception\r\n\r\nint main() {\r\n    try {\r\n        process_data(\"\");   // throws\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Error: \" << e.what() << '\\n';\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Connection opened\r\nConnection closed\r\nError: Cannot send empty data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8123-transaction-processing-systems",
      children: "8.12.3 Transaction Processing Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Financial systems rely heavily on exception-safe transaction handling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <string>\r\n#include <vector>\r\n\r\nclass Account {\r\npublic:\r\n    Account(const std::string& id, double balance)\r\n        : id_(id), balance_(balance) {}\r\n\r\n    void withdraw(double amount) {\r\n        if (amount < 0) throw std::invalid_argument(\"Negative withdraw\");\r\n        if (balance_ < amount) throw std::runtime_error(\"Insufficient funds\");\r\n        balance_ -= amount;\r\n    }\r\n\r\n    void deposit(double amount) {\r\n        if (amount < 0) throw std::invalid_argument(\"Negative deposit\");\r\n        balance_ += amount;\r\n    }\r\n\r\n    double balance() const noexcept { return balance_; }\r\n    const std::string& id() const noexcept { return id_; }\r\n\r\nprivate:\r\n    std::string id_;\r\n    double balance_;\r\n};\r\n\r\n// Strong guarantee: transaction is atomic\r\nvoid wire_transfer(Account& from, Account& to, double amount) {\r\n    // Check preconditions first\r\n    if (&from == &to)\r\n        throw std::logic_error(\"Cannot transfer to self\");\r\n    if (amount <= 0)\r\n        throw std::invalid_argument(\"Amount must be positive\");\r\n\r\n    // Copy-and-swap approach\r\n    Account from_copy = from;  // copy\r\n    Account to_copy = to;      // copy\r\n\r\n    from_copy.withdraw(amount);  // modify copies (may throw)\r\n    to_copy.deposit(amount);     // modify copies (may throw)\r\n\r\n    // Commit: noexcept swap\r\n    using std::swap;\r\n    swap(from, from_copy);\r\n    swap(to, to_copy);\r\n}\r\n\r\nint main() {\r\n    Account alice(\"A001\", 1000.0);\r\n    Account bob(\"B002\", 500.0);\r\n\r\n    try {\r\n        wire_transfer(alice, bob, 200.0);\r\n        std::cout << \"Transfer succeeded\\n\";\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Transfer failed: \" << e.what() << '\\n';\r\n    }\r\n\r\n    std::cout << \"Alice: $\" << alice.balance()\r\n              << \", Bob: $\" << bob.balance() << '\\n';\r\n\r\n    // This will fail but leave state unchanged\r\n    try {\r\n        wire_transfer(alice, bob, 2000.0);  // insufficient\r\n    } catch (const std::exception& e) {\r\n        std::cerr << \"Transfer failed: \" << e.what() << '\\n';\r\n    }\r\n\r\n    std::cout << \"Alice: $\" << alice.balance()\r\n              << \", Bob: $\" << bob.balance() << '\\n';\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Transfer succeeded\r\nAlice: $800, Bob: $700\r\nTransfer failed: Insufficient funds\r\nAlice: $800, Bob: $700\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8124-server-request-handling",
      children: "8.12.4 Server Request Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <stdexcept>\r\n#include <memory>\r\n#include <string>\r\n\r\nclass Request { /* ... */ };\r\nclass Response { /* ... */ };\r\nclass DatabaseSession {\r\npublic:\r\n    DatabaseSession() { std::cout << \"DB session opened\\n\"; }\r\n    ~DatabaseSession() noexcept { std::cout << \"DB session closed\\n\"; }\r\n};\r\n\r\nclass RequestHandler {\r\npublic:\r\n    Response handle(const Request& req) {\r\n        // Function-level try block\r\n        try {\r\n            return process(req);\r\n        } catch (const DatabaseError& e) {\r\n            log_error(\"Database failure for request\", e);\r\n            throw;  // rethrow -- dont swallow\r\n        } catch (const NetworkError& e) {\r\n            log_error(\"Network failure\", e);\r\n            throw;\r\n        } catch (const std::exception& e) {\r\n            log_error(\"Unknown error\", e);\r\n            throw;\r\n        }\r\n    }\r\n\r\nprivate:\r\n    Response process(const Request& req) {\r\n        DatabaseSession session;  // RAII -- always closed\r\n        // ... process request ...\r\n        throw ConnectionTimeoutError(\"db.internal\", 5432, 30000);\r\n        return Response{};\r\n    }\r\n\r\n    void log_error(const std::string& context,\r\n                   const std::exception& e) {\r\n        std::cerr << \"[ERROR] \" << context << \": \" << e.what() << '\\n';\r\n    }\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8125-noexcept-in-real-world-code",
      children: "8.12.5 noexcept in Real-World Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// std::swap -- must be noexcept for generic code\r\ntemplate <typename T>\r\nvoid swap(T& a, T& b) noexcept(noexcept(T(std::move(a))) &&\r\n                                noexcept(a = std::move(b))) {\r\n    T tmp = std::move(a);\r\n    a = std::move(b);\r\n    b = std::move(tmp);\r\n}\r\n\r\n// std::vector growth decision:\r\n// Uses move if noexcept, copies otherwise\r\ntemplate <typename T>\r\nvoid vector_growth_example() {\r\n    std::vector<T> v;\r\n    // If T has noexcept move:\r\n    //   reallocation uses memcpy-like moves (fast)\r\n    // If T lacks noexcept move:\r\n    //   reallocation uses copies (slower, but safe)\r\n    for (int i = 0; i < 1000; ++i) {\r\n        v.push_back(T(i));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8126-exception-safe-logger",
      children: "8.12.6 Exception-Safe Logger"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\r\n#include <mutex>\r\n#include <string>\r\n#include <iostream>\r\n\r\nclass Logger {\r\npublic:\r\n    explicit Logger(const std::string& path)\r\n        : file_(path, std::ios::app) {\r\n        if (!file_.is_open()) {\r\n            throw std::runtime_error(\"Cannot open log file: \" + path);\r\n        }\r\n    }\r\n\r\n    // Non-copyable, non-movable\r\n    Logger(const Logger&) = delete;\r\n    Logger& operator=(const Logger&) = delete;\r\n\r\n    // Basic guarantee: log is in valid state after exception\r\n    void log(const std::string& level, const std::string& message) {\r\n        std::lock_guard<std::mutex> lock(mutex_);\r\n        // If file_ write fails, we log to stderr instead\r\n        try {\r\n            file_ << \"[\" << level << \"] \" << message << '\\n';\r\n            file_.flush();\r\n        } catch (const std::exception& e) {\r\n            std::cerr << \"[LOGGER FAILURE] \" << e.what() << '\\n';\r\n            // Falls back to stderr -- operation not lost entirely\r\n            std::cerr << \"[\" << level << \"] \" << message << '\\n';\r\n        }\r\n    }\r\n\r\nprivate:\r\n    std::ofstream file_;\r\n    std::mutex mutex_;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8127-performance-considerations",
      children: "8.12.7 Performance Considerations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost (typical)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-cost try block (no throw)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-based EH has no overhead on happy path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throwing an exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000-100,000 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack unwinding, destructor calls, handler search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catch by reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference bind is cheap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catch by value (with copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on exception types copy cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noexcept optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables compiler to omit EH tables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When NOT to use exceptions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-frequency loops (>1% throw rate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded systems with exception support disabled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time systems with strict latency requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "As normal control flow (exceptions are for exceptional conditions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-summary",
      children: "Chapter Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safety Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return Codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errno, sentinel values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-critical, frequent failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exceptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw/try/catch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic/Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exceptional, rare failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noexcept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No-throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions that truly never throw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAII"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor-based cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource management always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::optional (C++17)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value-or-nullopt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No-throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected absence, not failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::expected (C++23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value-or-error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No-throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected recoverable errors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "noexcept-decision-flowchart",
      children: "noexcept Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌─────────────┐\r\n                    │ Function    │\r\n                    └──────┬──────┘\r\n                           │\r\n                    ┌──────┴──────┐\r\n                    │ Destructor? │─── Yes ──► noexcept (implicit)\r\n                    └──────┬──────┘\r\n                           │ No\r\n                    ┌──────┴──────┐\r\n                    │ Move/Swap?  │─── Yes ──► noexcept (for optimization)\r\n                    └──────┬──────┘\r\n                           │ No\r\n                    ┌──────┴──────────┐\r\n                    │ Simple getter?  │─── Yes ──► noexcept\r\n                    └──────┬──────────┘\r\n                           │ No\r\n                    ┌──────┴────────────────────┐\r\n                    │ Uses throwing operations? │─── Yes ──► noexcept(false)\r\n                    └──────┬────────────────────┘\r\n                           │ No\r\n                    ┌──────┴──────┐\r\n                    │ noexcept    │ (carefully consider)\r\n                    └─────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Detail"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Pitfall"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates exception object, starts unwinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throwing during stack unwinding = terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "try/catch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches by reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catching by value slices the object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAII"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor releases resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting RAII = manual cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noexcept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Violating it calls terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "what()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual method on std::exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not overridden in custom types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function try block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches member init exceptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit rethrow in constructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catch-all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "catch(...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swallowing exceptions hides bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-and-swap idiom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting noexcept on swap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Catching by value"
        }), " -- causes slicing, extra copies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swallowing exceptions"
        }), " -- catch(...) without rethrow hides bugs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throwing from destructors"
        }), " -- calls std::terminate during unwinding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Raw pointers in classes"
        }), " -- leak if constructor throws"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "noexcept lying"
        }), " -- throwing from noexcept calls terminate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong catch order"
        }), " -- base class before derived class catches everything"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exception as control flow"
        }), " -- slower than if/else for frequent paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forgetting std::nothrow"
        }), " -- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new(std::nothrow)"
        }), " for non-throwing allocation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens to local objects during stack unwinding?\r\nA) They are leaked\r\nB) Their destructors run in reverse order of construction\r\nC) Their destructors run in construction order\r\nD) They are ignored"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Stack unwinding destroys local objects in reverse order of construction."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why should destructors never throw?\r\nA) It is undefined behaviour\r\nB) std::terminate is called during stack unwinding if a destructor throws\r\nC) The compiler forbids it\r\nD) It causes a segmentation fault"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** If a destructor throws during stack unwinding when another exception is active, std::terminate is called."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does noexcept enable that copy constructors do not?\r\nA) Virtual dispatch\r\nB) Move-based reallocation in std::vector\r\nC) Inline expansion\r\nD) Template instantiation"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** std::vector uses noexcept move constructors to choose moves over copies during reallocation."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The RAII idiom stands for:\r\nA) Resource Allocation in Initialisation\r\nB) Resource Acquisition Is Initialisation\r\nC) Runtime Allocation and Immediate Initialisation\r\nD) Random Access Iterator Integration"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Resource Acquisition Is Initialisation."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which catch-all handler is correct?\r\nA) catch()\r\nB) catch(...)\r\nC) catch(any)\r\nD) catch(*)"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** catch(...) is the catch-all handler."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main problem with catching exceptions by value?\r\nA) It is syntactically incorrect\r\nB) It slices the exception object, losing derived type information\r\nC) It is slower than catching by pointer\r\nD) The compiler forbids it"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Catching by value slices the exception object, losing polymorphic behavior and any additional data in derived types."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which exception safety level guarantees that the program state is unchanged if an exception occurs?\r\nA) Basic\r\nB) Strong\r\nC) No-throw\r\nD) Both Strong and No-throw"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** Both Strong (commit or rollback) and No-throw guarantee state is unchanged, but No-throw additionally guarantees no exception is emitted."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens if a constructor throws after allocating a raw resource?\r\nA) The resource is automatically freed\r\nB) The resource leaks because the destructor is not called\r\nC) The program terminates\r\nD) The resource is freed by the delete operator"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The destructor is not called for objects whose constructor did not complete. Use RAII wrappers to avoid leaks."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens to local objects during stack unwinding when an exception propagates?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should destructors never throw exceptions?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is RAII and why is it important for exception safety?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you declare a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch(...)"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "catch(const std::exception&)"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between catching by value and catching by reference?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three exception safety levels."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throw()"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Safe File Reader:"
          }), " Write a program that reads integers from a file and computes their average. Use exceptions to handle: file not found, empty file, and non-integer data. Define a custom exception hierarchy with a base class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FileError"
          }), " and derived ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FileNotFoundError"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ParseError"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SafeArray with Bounds Checking:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SafeArray"
          }), " class template with bounds checking. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "operator[]"
          }), " should throw ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::out_of_range"
          }), " for invalid indices. Demonstrate correct stack unwinding by creating several ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SafeArray"
          }), " objects in nested scopes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bank Transaction with Strong Guarantee:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Transaction"
          }), " class that provides the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "commit()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rollback()"
          }), " patterns. Wrap an operation between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "begin"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "end"
          }), " calls; if an exception occurs between them, the destructor calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rollback()"
          }), " automatically. Demonstrate with a simple bank-transfer scenario involving two ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Account"
          }), " objects."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exception-Safe Database Connection Pool:"
          }), "\r\nDesign and implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConnectionPool"
          }), " class that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintains a fixed-size pool of database connections (simulate with RAII wrapper)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provides ", (0,jsx_runtime.jsx)(_components.code, {
              children: "acquire()"
            }), " returning a RAII guard that releases on destruction"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Is exception-safe: if a connection throws during use, it is returned to the pool"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides strong guarantee for acquire/release operations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Handles the case where all connections are in use (throws ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::runtime_error"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a multithreaded test that demonstrates exception safety under contention"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Noexcept Audit:"
          }), "\r\nGiven the following class, identify which functions should be ", (0,jsx_runtime.jsx)(_components.code, {
            children: "noexcept"
          }), " and which should not. Justify each decision:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class ImageProcessor {\r\npublic:\r\n    ImageProcessor(const std::string& path);\r\n    ~ImageProcessor();\r\n    ImageProcessor(const ImageProcessor& other);\r\n    ImageProcessor(ImageProcessor&& other);\r\n    ImageProcessor& operator=(ImageProcessor other);\r\n    void resize(int width, int height);\r\n    void apply_filter(const std::string& filter_name);\r\n    int width() const;\r\n    int height() const;\r\n    void swap(ImageProcessor& other);\r\n    void save(const std::string& output_path);\r\n};\n"
      })
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



/***/ }

}]);