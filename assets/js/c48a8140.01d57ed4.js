"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25434],{

/***/ 99866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_08_functions_md_c48_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-08-functions-md-c48.json
const site_docs_courses_c_programming_08_functions_md_c48_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/08-functions","title":"Chapter 8: Functions","description":"Previous Pointers","source":"@site/docs/courses/c-programming/08-functions.md","sourceDirName":"courses/c-programming","slug":"/c-programming/08-functions","permalink":"/ai-engineering-journey/c-programming/08-functions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-functions","slug":"/c-programming/08-functions","title":"Chapter 8: Functions","sidebar_label":"Chapter 8: Functions","sidebar_position":8},"sidebar":"course-c-programming","previous":{"title":"Chapter 7: Strings","permalink":"/ai-engineering-journey/c-programming/07-strings"},"next":{"title":"Chapter 9: Pointers","permalink":"/ai-engineering-journey/c-programming/09-pointers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/08-functions.md


const frontMatter = {
	id: '08-functions',
	slug: '/c-programming/08-functions',
	title: 'Chapter 8: Functions',
	sidebar_label: 'Chapter 8: Functions',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Functions';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "8.1 Function Components",
  "id": "81-function-components",
  "level": 2
}, {
  "value": "Real-World Analogy: Vending Machine",
  "id": "real-world-analogy-vending-machine",
  "level": 3
}, {
  "value": "8.1.1 Function Declaration (Prototype)",
  "id": "811-function-declaration-prototype",
  "level": 3
}, {
  "value": "8.1.2 Function Definition",
  "id": "812-function-definition",
  "level": 3
}, {
  "value": "8.1.3 Function Call",
  "id": "813-function-call",
  "level": 3
}, {
  "value": "8.1.4 Function Components Comparison",
  "id": "814-function-components-comparison",
  "level": 3
}, {
  "value": "8.2 Parameters and Arguments",
  "id": "82-parameters-and-arguments",
  "level": 2
}, {
  "value": "8.2.1 Formal vs Actual Parameters",
  "id": "821-formal-vs-actual-parameters",
  "level": 3
}, {
  "value": "8.2.2 Pass by Value (Call by Value)",
  "id": "822-pass-by-value-call-by-value",
  "level": 3
}, {
  "value": "8.2.3 Pass by Pointer (Often Misnamed &quot;Pass by Reference&quot;)",
  "id": "823-pass-by-pointer-often-misnamed-pass-by-reference",
  "level": 3
}, {
  "value": "8.2.4 Parameter Passing Comparison",
  "id": "824-parameter-passing-comparison",
  "level": 3
}, {
  "value": "8.3 Return Values",
  "id": "83-return-values",
  "level": 2
}, {
  "value": "8.3.1 Returning Basic Types",
  "id": "831-returning-basic-types",
  "level": 3
}, {
  "value": "8.3.2 void Functions",
  "id": "832-void-functions",
  "level": 3
}, {
  "value": "8.3.3 Returning Pointers",
  "id": "833-returning-pointers",
  "level": 3
}, {
  "value": "8.3.4 DANGER: Returning Address of Local Variable",
  "id": "834-danger-returning-address-of-local-variable",
  "level": 3
}, {
  "value": "8.3.5 Return struct vs Return Pointer",
  "id": "835-return-struct-vs-return-pointer",
  "level": 3
}, {
  "value": "8.4 Nested Function Calls",
  "id": "84-nested-function-calls",
  "level": 2
}, {
  "value": "8.5 Recursion Basics",
  "id": "85-recursion-basics",
  "level": 2
}, {
  "value": "8.5.1 Factorial → Step-by-Step",
  "id": "851-factorial--step-by-step",
  "level": 3
}, {
  "value": "8.5.2 Fibonacci → Two Recursive Calls",
  "id": "852-fibonacci--two-recursive-calls",
  "level": 3
}, {
  "value": "8.6 Variadic Functions",
  "id": "86-variadic-functions",
  "level": 2
}, {
  "value": "Custom Printf-style Function",
  "id": "custom-printf-style-function",
  "level": 3
}, {
  "value": "8.7 Inline Functions",
  "id": "87-inline-functions",
  "level": 2
}, {
  "value": "Inline Functions vs Macros",
  "id": "inline-functions-vs-macros",
  "level": 3
}, {
  "value": "When to Use Inline:",
  "id": "when-to-use-inline",
  "level": 3
}, {
  "value": "8.8 Function Pointers",
  "id": "88-function-pointers",
  "level": 2
}, {
  "value": "8.8.1 Function Pointer Array (Dispatch Table)",
  "id": "881-function-pointer-array-dispatch-table",
  "level": 3
}, {
  "value": "8.8.2 Callback with qsort",
  "id": "882-callback-with-qsort",
  "level": 3
}, {
  "value": "8.8.3 Typedef for Function Pointers",
  "id": "883-typedef-for-function-pointers",
  "level": 3
}, {
  "value": "8.9 main() Arguments: argc and argv",
  "id": "89-main-arguments-argc-and-argv",
  "level": 2
}, {
  "value": "8.9.1 Argument Parsing Example",
  "id": "891-argument-parsing-example",
  "level": 3
}, {
  "value": "8.9.2 main() Variants",
  "id": "892-main-variants",
  "level": 3
}, {
  "value": "8.10 Scope and Storage Classes (Existing)",
  "id": "810-scope-and-storage-classes-existing",
  "level": 2
}, {
  "value": "8.10.1 Scope Rules",
  "id": "8101-scope-rules",
  "level": 3
}, {
  "value": "8.10.2 Storage Classes",
  "id": "8102-storage-classes",
  "level": 3
}, {
  "value": "8.11 Interview Corner",
  "id": "811-interview-corner",
  "level": 2
}, {
  "value": "Q1: Does C have pass-by-reference?",
  "id": "q1-does-c-have-pass-by-reference",
  "level": 3
}, {
  "value": "Q2: Function pointer vs If-Else chain",
  "id": "q2-function-pointer-vs-if-else-chain",
  "level": 3
}, {
  "value": "Q3: Variadic vs Regular Arguments",
  "id": "q3-variadic-vs-regular-arguments",
  "level": 3
}, {
  "value": "Q4: Inline vs Macro",
  "id": "q4-inline-vs-macro",
  "level": 3
}, {
  "value": "Q5: Return struct vs Return pointer",
  "id": "q5-return-struct-vs-return-pointer",
  "level": 3
}, {
  "value": "Q6: What happens if you forget the return statement?",
  "id": "q6-what-happens-if-you-forget-the-return-statement",
  "level": 3
}, {
  "value": "8.12 Applications in Real Systems",
  "id": "812-applications-in-real-systems",
  "level": 2
}, {
  "value": "8.12.1 qsort with Function Pointer Callbacks",
  "id": "8121-qsort-with-function-pointer-callbacks",
  "level": 3
}, {
  "value": "8.12.2 Signal Handlers",
  "id": "8122-signal-handlers",
  "level": 3
}, {
  "value": "8.12.3 Event-Driven Architecture (Callback Table)",
  "id": "8123-event-driven-architecture-callback-table",
  "level": 3
}, {
  "value": "Concept Comparison Tables",
  "id": "concept-comparison-tables",
  "level": 2
}, {
  "value": "Function Components",
  "id": "function-components",
  "level": 3
}, {
  "value": "Parameter Passing",
  "id": "parameter-passing",
  "level": 3
}, {
  "value": "Recursion vs Iteration",
  "id": "recursion-vs-iteration",
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
    li: "li",
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
        id: "chapter-8-functions",
        children: "Chapter 8: Functions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/07-strings",
          children: "Strings"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/09-pointers",
          children: "Pointers"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare, define, and call functions correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand parameter passing: pass-by-value and pass-by-pointer semantics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between formal and actual parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use return values and return pointers safely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master recursion basics, nested calls, and variadic functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use inline functions, function pointers, and main() arguments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Function Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tells compiler signature before use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents implicit-int errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual body with code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must match declaration exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer control + arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each call creates a new stack frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal vs Actual Params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters vs arguments passed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal = definition, Actual = call site"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass by Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy made; original unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use pointers to modify caller's data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass by Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address copied; dereference to modify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common pattern for output params"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return Values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value sent back to caller via return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return type must match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address returned; danger with locals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never return &local_var"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls inside expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each pushed on stack, LIFO order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case required; risk of stack overflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable number of arguments (printf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_list/va_start/va_arg/va_end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inline Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suggestion to avoid call overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler may ignore; good for tiny functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store address of function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable callbacks and dispatch tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "main() Arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "argc/argv from command line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "argv[0] is program name"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"8.1 Declaration vs Definition & Call\"] --> B[\"8.2 Parameters & Arguments\"]\n    B --> C[\"8.3 Return Values & Return Pointer\"]\n    C --> D[\"8.4 Nested Calls & Recursion\"]\n    D --> E[\"8.5 Variadic & Inline Functions\"]\n    E --> F[\"8.6 Function Pointers & main() args\"]\n    F --> G[\"Interview Corner & Real Systems\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-function-components",
      children: "8.1 Function Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function"
      }), " is a named, reusable block of code that performs a specific task. Every function has three distinct components: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "declaration"
      }), " (prototype), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "definition"
      }), " (body), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "call"
      }), " (invocation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-vending-machine",
      children: "Real-World Analogy: Vending Machine"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vending Machine"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Menu panel showing what you can buy (selection A1, A2, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype telling compiler what the function accepts and returns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal mechanism → motors, coils, sensors that do the work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function body with actual implementation code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pressing A1 → you request a specific item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoking the function with arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The soda can that drops into the tray"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The value sent back via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coin slot → you insert coins (inputs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments passed to the function"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Just as you don't need to know how the vending machine's motor works to press A1, you don't need to know a function's implementation to call it → only its ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prototype"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-function-declaration-prototype",
      children: "8.1.1 Function Declaration (Prototype)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function declaration"
      }), " (also called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prototype"
      }), ") tells the compiler the function's name, return type, and parameter types. It ends with a semicolon and has no body."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "return_type function_name(parameter_type_list);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler encounters the declaration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It records the function's signature (name, return type, parameter types)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a call is encountered later, the compiler checks argument types against the declaration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If types mismatch, the compiler issues a warning or error"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Without a prototype, C assumes the function returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " (implicit-int, removed in C99)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE function with:\n    RETURN_TYPE -> int\n    NAME        -> add\n    PARAMETERS  -> int a, int b\nEND DECLARATION\n\n// Later, when compiler sees add(5, 3):\nCHECK add(5, 3) against declaration:\n    Return type: int (OK)\n    Argument 1: 5 -> int (OK)\n    Argument 2: 3 -> int (OK)\nPROCEED with call\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Compiler's View:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Line: int add(int a, int b);     → Registers function signature in symbol table\n                                    Symbol: add\n                                    Return: int\n                                    Params: int, int\n\nLine: int result = add(5, 3);    → Looks up \"add\" in symbol table\n                                    Found! Signature matches call.\n                                    Generated call instruction.\n\nLine: int add(int a, int b) {    → Matches existing declaration\n    return a + b;                   OK, body matches declaration.\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// Function declaration (prototype)\nint add(int a, int b);\n\nint main(void)\n{\n    int sum = add(10, 20);\n    printf(\"Sum = %d\\n\", sum);\n    return 0;\n}\n\n// Function definition\nint add(int a, int b)\n{\n    return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sum = 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) → declaration is a compile-time construct; no runtime cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) → stored in compiler's symbol table; no runtime memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing prototype"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compiler assumes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " return (implicit-int, warning in C99, error in C11+)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mismatched parameter types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler may warn or implicitly cast; undefined behavior possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Empty parameter list ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Means \"unspecified parameters\" in C; always use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void func(void);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicitly says: zero parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration without definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linker error: unresolved external symbol"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-function-definition",
      children: "8.1.2 Function Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function definition"
      }), " contains the executable body. It includes the return type, name, parameter list with names, and the function body in braces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "return_type function_name(parameter_list_with_names) {\n    // function body\n    return value;  // if return_type is not void\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps (Execution):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function is called with arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A new stack frame is allocated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parameters are initialized with copies of arguments (pass-by-value)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local variables are created on the stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Body code executes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return value is computed (if any)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stack frame is destroyed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control returns to caller with the value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DEFINE function max(a, b):\n    IF a > b THEN\n        RETURN a\n    ELSE\n        RETURN b\n    END IF\nEND DEFINE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// Definition with body\nint max(int a, int b)\n{\n    int result;          // local variable\n    if (a > b) {\n        result = a;\n    } else {\n        result = b;\n    }\n    return result;\n}\n\nint main(void)\n{\n    int m = max(15, 8);\n    printf(\"Max = %d\\n\", m);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Max = 15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) for the function call overhead (constant); body complexity depends on logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) where n = size of local variables + parameters on the stack frame"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Call Stack for max(15, 8):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Variables"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=15, b=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters copied to new frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=15, b=8, result=?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " created (uninitialized)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=15, b=8, result=15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "15 > 8"
            }), " → result = 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return value computed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m=15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max frame popped, result assigned"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-function-call",
      children: "8.1.3 Function Call"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function call"
      }), " transfers control and arguments to the function. The caller is suspended until the function returns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "return_variable = function_name(argument_list);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate each argument expression left-to-right (order unspecified in C, but typically left-to-right)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy each argument value into the corresponding parameter (pass-by-value)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push a new stack frame (activation record) onto the call stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Save the return address (next instruction after call)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jump to the function's code address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the function body"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), ", pop the stack frame"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resume execution at the saved return address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the returned value in the calling expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE CallFunction(func, args):\n    frame = AllocateStackFrame()\n    frame.returnAddress = nextInstruction\n    CopyArgumentsToParameters(args, frame)\n    JUMP to func\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example with Tracing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint multiply(int a, int b)\n{\n    return a * b;\n}\n\nint main(void)\n{\n    int x = 5;\n    int y = 4;\n    int product = multiply(x, y);  // function call\n    printf(\"%d * %d = %d\\n\", x, y, product);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5 * 4 = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Complete Call Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "main's vars"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "multiply's frame"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main starts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=?, y=?, product=?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=5, y=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "multiply(x,y) evaluated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=5, y=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push frame for multiply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=5, b=4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body executes: a*b = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop frame, assign result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=5, y=4, product=20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(popped)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printf executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=5, y=4, product=20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Function Calls:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too many arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra arguments evaluated but ignored; compiler warning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too few arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior; missing params get garbage values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Argument type mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit conversion if possible; UB otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Function call with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), " on function pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls through the pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function call as argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner call evaluated first, result passed to outer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "814-function-components-comparison",
      children: "8.1.4 Function Components Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration (Prototype)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int add(int, int);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int add(int a, int b) { return a+b; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "add(5, 3);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ends with"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Semicolon ", (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Closing brace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Semicolon ", (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Has body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When resolved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile + Link time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (symbol table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code in text segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frame per call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can appear multiple times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (redeclarations OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (multiple definition error)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (as many as needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tell compiler signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute function"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-parameters-and-arguments",
      children: "8.2 Parameters and Arguments"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-formal-vs-actual-parameters",
      children: "8.2.1 Formal vs Actual Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal parameters"
      }), " are the variables listed in the function definition. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual parameters"
      }), " (arguments) are the values passed at the call site."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant menu item (formal parameter) describes what the kitchen expects: \"Burger with cheese.\" When you order, you say \"Cheeseburger, no onions\" → that's the actual parameter. The kitchen slot (formal) receives your specific request (actual)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller evaluates actual arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each actual argument is copied into the corresponding formal parameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If types differ, implicit conversion occurs (if possible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The function body operates on the formal parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes to formals do NOT affect actuals (pass-by-value)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// formal parameters: x, y\nvoid display(int x, char y)\n{\n    printf(\"Formal params: x = %d, y = %c\\n\", x, y);\n}\n\nint main(void)\n{\n    int a = 65;\n    char ch = 'Z';\n    // actual arguments: a, ch\n    display(a, ch);\n\n    // type conversion example:\n    display(42.99, 100);  // double→int truncates, int→char converts\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Formal params: x = 65, y = Z\nFormal params: x = 42, y = d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Parameter Binding:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual (call site)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formal (function)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a = 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65 → x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ch = 'Z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'Z' → y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "display executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=65, y='Z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"65, Z\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42.99 (double)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x (int)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42.99 → 42 (truncated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 (int)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y (char)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 → 'd' (ASCII 100)"
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
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal parameter names missing in declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed; only types matter for prototype"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Actual is expression ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression evaluated first, then copied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array as actual parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decays to pointer to first element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mismatch: actual double, formal int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double truncated to int (loss of precision)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-pass-by-value-call-by-value",
      children: "8.2.2 Pass by Value (Call by Value)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "always"
      }), " passes arguments by value: the function receives a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy"
      }), " of the argument. Modifying the parameter inside the function does NOT affect the original variable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You give a photocopy of your ID to a hotel front desk. They write on the photocopy (stamp it, mark it), but your original ID remains untouched. Each function call gets its own \"photocopy\" of the data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller's argument expression is evaluated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A copy of the value is created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The copy is placed in the function's stack frame (as the formal parameter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function executes, potentially modifying the copy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When function returns, the copy is destroyed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Original variable is completely unaffected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION swap_fails(x, y):\n    temp = x      // x is a COPY of the original\n    x = y         // modifies the copy only\n    y = temp      // modifies the copy only\n    // original variables unchanged!\nEND FUNCTION\n\nCALL swap_fails(original_a, original_b)\n// original_a and original_b are unchanged\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid attempt_modify(int a)\n{\n    printf(\"  Inside (before): a = %d\\n\", a);\n    a = 999;  // modifies only the copy\n    printf(\"  Inside (after):  a = %d\\n\", a);\n}\n\nint main(void)\n{\n    int x = 42;\n    printf(\"Before call: x = %d\\n\", x);\n    attempt_modify(x);\n    printf(\"After call:  x = %d\\n\", x);  // x is STILL 42\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before call: x = 42\n  Inside (before): a = 42\n  Inside (after):  a = 999\nAfter call:  x = 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Stack Frames:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "main's frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "attempt_modify's frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main running"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x = 42 (suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a = 42 (COPY of x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call → copy x→a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x = 42 (suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a = 999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a modified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x = 42 (suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(popped, destroyed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return, frame freed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main continues, x unchanged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) for copying scalar values; O(n) for copying large structs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(size of parameters) per call on the stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(n) for structs?"
        }), " Because every byte of the struct must be copied. For large structs (>64 bytes), pass-by-pointer is faster."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large struct passed by value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full copy → slow and memory-intensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array passed \"by value\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array decays to pointer; the pointer is copied, not the array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer passed by value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The pointer (address) is copied; target can be modified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double/float passed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value copied exactly (IEEE 754)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying in function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes lost after return"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-pass-by-pointer-often-misnamed-pass-by-reference",
      children: "8.2.3 Pass by Pointer (Often Misnamed \"Pass by Reference\")"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since C has no true pass-by-reference, we simulate it by passing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pointer to the variable"
      }), ". The pointer itself is passed by value, but we dereference it to modify the original."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Instead of giving a photocopy (pass by value), you give the hotel your locker key (pointer). They don't have your locker, but they have the key → and they can use it to open your locker and change what's inside. The key itself is a copy (the address), but it points to the original."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Caller evaluates the address of the variable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&var"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The address is copied into the function's pointer parameter (pointer passed by value)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inside the function, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), " dereferences the pointer to access the original variable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changes through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), " affect the original"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pointer itself cannot be changed to point elsewhere permanently (that would require pointer-to-pointer)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION swap(ptr_x, ptr_y):\n    // ptr_x and ptr_y are COPIES of the addresses\n    temp = *ptr_x       // read original value through ptr_x\n    *ptr_x = *ptr_y     // write to original variable through ptr_x\n    *ptr_y = temp       // write to original variable through ptr_y\nEND FUNCTION\n\nCALL swap(&original_a, &original_b)\n// original_a and original_b ARE now swapped\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid swap(int *ptr_x, int *ptr_y)\n{\n    int temp = *ptr_x;   // read value at address ptr_x\n    *ptr_x = *ptr_y;     // write to address ptr_x\n    *ptr_y = temp;       // write to address ptr_y\n}\n\nint main(void)\n{\n    int a = 10, b = 20;\n    printf(\"Before: a = %d, b = %d\\n\", a, b);\n    swap(&a, &b);        // pass addresses\n    printf(\"After:  a = %d, b = %d\\n\", a, b);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before: a = 10, b = 20\nAfter:  a = 20, b = 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Memory and Stack Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "main's frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "swap's frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory at &a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory at &b"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=10, b=20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=10, b=20 (suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr_x = &a, ptr_y = &b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr_x=&a, ptr_y=&b, temp=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*ptr_x = *ptr_y → a = b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "a=20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(suspended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*ptr_y = temp → b = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "b=10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=20, b=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(popped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) → only address copied (4 or 8 bytes), regardless of what the pointer points to"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) → pointer size (4 bytes on 32-bit, 8 bytes on 64-bit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(1) for large data?"
        }), " We copy the address, not the data. Passing a 1 MB struct by pointer copies only 8 bytes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL pointer passed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing causes segmentation fault"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying the pointer itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only changes the local copy; caller unaffected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pointer to const (", (0,jsx_runtime.jsx)(_components.code, {
              children: "const int *p"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only access to original; modification disallowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pointer-to-pointer (", (0,jsx_runtime.jsx)(_components.code, {
              children: "int **p"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows modifying the original pointer's value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array parameter ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades to pointer automatically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-parameter-passing-comparison",
      children: "8.2.4 Parameter Passing Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What's copied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The actual data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The address of the data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can modify original?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via dereference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed for small types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (no indirection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower (indirection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed for large structs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (full copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (copy address only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nullable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (always has a value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (can be NULL → check it!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax in function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax at call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "func(var)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "func(&var)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only, small data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify original, large data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe → can't corrupt caller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of NULL deref, aliasing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Const correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const int *p"
            }), " for read-only"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-return-values",
      children: "8.3 Return Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-returning-basic-types",
      children: "8.3.1 Returning Basic Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function returns a value of the declared return type using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " statement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " The vending machine's dispensing tray. You put money in (arguments), press a button; the machine processes your request and drops a soda can into the tray → the return value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function computes the return expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The expression result is copied (or a temporary is created)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The stack frame begins to be torn down"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local variables are destroyed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The return value is placed where the caller can access it (typically in a register or a specific stack location)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control jumps back to the caller"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller uses the value in an expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION square(n):\n    result = n * n\n    RETURN result        // copy result to caller\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint square(int n)\n{\n    return n * n;\n}\n\ndouble circle_area(double radius)\n{\n    const double PI = 3.1415926535;\n    return PI * radius * radius;\n}\n\nint main(void)\n{\n    int sq = square(7);\n    double area = circle_area(5.0);\n\n    printf(\"7 squared = %d\\n\", sq);\n    printf(\"Area of r=5 = %.4f\\n\", area);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7 squared = 49\nArea of r=5 = 78.5398\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Return Flow for square(7):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "stack state"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call square(7): n=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → square"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute 7*7 = 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → square"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save 49 to return register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → square"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop square's stack frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return value 49 available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main, result = 49"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-void-functions",
      children: "8.3.2 void Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " functions perform actions but return no value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid print_header(const char *title)\n{\n    printf(\"\\n=== %s ===\\n\", title);\n}\n\nint main(void)\n{\n    print_header(\"Report\");\n    // no return value to use\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Report ===\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " You can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return;"
      }), " (without a value) in a void function to exit early:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void process(int value)\n{\n    if (value < 0) {\n        return;  // early exit, no value\n    }\n    printf(\"Processing %d\\n\", value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "833-returning-pointers",
      children: "8.3.3 Returning Pointers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returning a pointer from a function is powerful but dangerous. The pointer must point to memory that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outlives"
      }), " the function call."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe cases:"
      }), " Return pointer to static variable, heap-allocated memory, or an input parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n// Safe: returns pointer to static array\nint* get_fixed_array(void)\n{\n    static int arr[3] = {10, 20, 30};\n    return arr;\n}\n\n// Safe: returns heap-allocated memory\nint* create_array(int size)\n{\n    int* arr = (int*)malloc(size * sizeof(int));\n    return arr;\n}\n\n// Safe: returns one of the input pointers\nint* get_max_ptr(int *a, int *b)\n{\n    return (*a > *b) ? a : b;\n}\n\nint main(void)\n{\n    int *fixed = get_fixed_array();\n    printf(\"Fixed[0] = %d\\n\", fixed[0]);\n\n    int x = 50, y = 80;\n    int *max = get_max_ptr(&x, &y);\n    printf(\"Max is %d\\n\", *max);\n\n    int *heap_arr = create_array(5);\n    heap_arr[0] = 100;\n    printf(\"Heap[0] = %d\\n\", heap_arr[0]);\n    free(heap_arr);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fixed[0] = 10\nMax is 80\nHeap[0] = 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "834-danger-returning-address-of-local-variable",
      children: "8.3.4 DANGER: Returning Address of Local Variable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Never"
      }), " return a pointer to a local (automatic) variable. The variable's memory is reclaimed when the function returns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint* dangerous(void)\n{\n    int local = 42;\n    return &local;   // BUG: local is destroyed after return\n}\n\nint main(void)\n{\n    int *p = dangerous();\n    printf(\"%d\\n\", *p);  // UNDEFINED BEHAVIOR\n    // Could print 42, print garbage, or crash\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this fails:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value at &local"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dangerous() executing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → dangerous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "return &local executed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → dangerous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "address returned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dangerous() returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "frame popped → memory freed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "main prints *p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "memory may be overwritten by next call"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compiler Warning:"
      }), " Most modern compilers warn: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "function returns address of local variable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "835-return-struct-vs-return-pointer",
      children: "8.3.5 Return struct vs Return Pointer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return struct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return pointer (to static/global)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole struct copied (potentially large)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only pointer copied (4/8 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe (each call gets own copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsafe (static shared across calls)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can return NULL?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (indicate failure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller must free?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if heap-allocated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed for large data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct Point get_pos(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int* get_buffer(void)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-nested-function-calls",
      children: "8.4 Nested Function Calls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nested calls"
      }), " occur when a function call's argument is itself a function call. The inner calls are evaluated first, and their results become arguments to the outer call."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An assembly line: the output of station 1 feeds into station 2, which feeds into station 3. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final = station3(station2(station1(input)))"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the innermost function call first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suspend the outer call's argument evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push a stack frame for the inner function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inner function executes and returns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pop the inner frame; result is now a computed argument"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat for next level, if any"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finally, the outermost function executes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint add(int a, int b)\n{\n    printf(\"  add(%d, %d) called\\n\", a, b);\n    return a + b;\n}\n\nint multiply(int a, int b)\n{\n    printf(\"  multiply(%d, %d) called\\n\", a, b);\n    return a * b;\n}\n\nint main(void)\n{\n    // Nested call: multiply( add(3,4), add(5,2) )\n    int result = multiply(add(3, 4), add(5, 2));\n    printf(\"Result = %d\\n\", result);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  add(3, 4) called\n  add(5, 2) called\n  multiply(7, 7) called\nResult = 49\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Call Stack Evolution:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack (top →)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → multiply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before args evaluated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → multiply → add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate first arg: add(3,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → multiply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add returned 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arg1 = 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → multiply → add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate second arg: add(5,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → multiply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add returned 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arg2 = 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → multiply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "multiply(7,7) executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 49"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result = 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) where n = number of nested calls; each call adds overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(d) where d = depth of nesting (each level adds a stack frame)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why not O(1)?"
        }), " Each nested level consumes stack space; deeply nested calls can overflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case → Order of Evaluation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint next(int *x)\n{\n    return ++(*x);\n}\n\nint add(int a, int b)\n{\n    return a + b;\n}\n\nint main(void)\n{\n    int n = 10;\n    // Order of evaluation of arguments is UNSPECIFIED in C\n    // Could be add(next(&n), next(&n)) → add(11, 12) or add(12, 11)\n    int r = add(next(&n), next(&n));\n    printf(\"n = %d, result = %d\\n\", n, r);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (compiler-dependent):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "n = 12, result = 23   // or result = 23 either way\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The result is the same here since both arguments are 11 and 12 (sum 23) regardless of order. But avoid code where the order matters (", (0,jsx_runtime.jsx)(_components.code, {
        children: "sequence point"
      }), " rules)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-recursion-basics",
      children: "8.5 Recursion Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive function"
      }), " calls itself. Every recursive function needs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base case"
        }), " → a condition that stops the recursion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive case"
        }), " → the function calls itself with a simpler problem"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Russian nesting dolls (matryoshka). To open the largest doll, you open it → find a smaller one → open it → find a smaller one → ... → until you reach the smallest doll that doesn't open (the base case). Then you assemble them back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-factorial--step-by-step",
      children: "8.5.1 Factorial → Step-by-Step"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps for factorial(4):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(4): 4 > 1 → 4 * factorial(3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(3): 3 > 1 → 3 * factorial(2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(2): 2 > 1 → 2 * factorial(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(1): 1 <= 1 → return 1 (BASE CASE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(2) receives 1 → 2 * 1 = 2 → return 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(3) receives 2 → 3 * 2 = 6 → return 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "factorial(4) receives 6 → 4 * 6 = 24 → return 24"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION factorial(n):\n    IF n <= 1 THEN           // base case\n        RETURN 1\n    ELSE                     // recursive case\n        RETURN n * factorial(n - 1)\n    END IF\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint factorial(int n)\n{\n    if (n <= 1) {\n        printf(\"  base case: factorial(%d) = 1\\n\", n);\n        return 1;\n    }\n    printf(\"  factorial(%d) = %d * factorial(%d)\\n\", n, n, n-1);\n    int result = n * factorial(n - 1);\n    printf(\"  factorial(%d) = %d\\n\", n, result);\n    return result;\n}\n\nint main(void)\n{\n    printf(\"Final: 4! = %d\\n\", factorial(4));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  factorial(4) = 4 * factorial(3)\n  factorial(3) = 3 * factorial(2)\n  factorial(2) = 2 * factorial(1)\n  base case: factorial(1) = 1\n  factorial(2) = 2\n  factorial(3) = 6\n  factorial(4) = 24\nFinal: 4! = 24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Call Stack Trace for factorial(4):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Waiting for"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls factorial(4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fact(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 * fact(3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4) → fact(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fact(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 * fact(2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4) → fact(3) → fact(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fact(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 * fact(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4) → fact(3) → fact(2) → fact(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base! Returns 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4) → fact(3) → fact(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 2 * 1 = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4) → fact(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 3 * 2 = 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main → fact(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 4 * 6 = 24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "852-fibonacci--two-recursive-calls",
      children: "8.5.2 Fibonacci → Two Recursive Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint fib(int n)\n{\n    if (n <= 1) {\n        return n;\n    }\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main(void)\n{\n    printf(\"fib(6) = %d\\n\", fib(6));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fib(6) = 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(2^n) → exponential! Each call spawns 2 more calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(n) → maximum stack depth = n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(2^n)?"
        }), " Fib(n) calls Fib(n-1) and Fib(n-2); this binary tree doubles at each level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimization:"
        }), " Use memoization or iterative approach for O(n)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No base case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite recursion → stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always have a base case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May never reach base case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check input validity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large n (e.g., n=100000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iteration instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple recursive calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization or dynamic programming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-variadic-functions",
      children: "8.6 Variadic Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variadic functions"
      }), " accept a variable number of arguments. The most famous example is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), ". They require:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fixed"
        }), " parameter (to start the list)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdarg.h>"
        }), " macros: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_list"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_start"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_arg"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_end"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A buffet restaurant with a fixed entry price (the count parameter) and then you can take as many food items (variable arguments) as you want, as long as you have a plate (the va_list) to carry them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_list"
        }), " variable (acts as an iterator)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_start(ap, last_fixed)"
        }), " to initialize the list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_arg(ap, type)"
        }), " repeatedly to retrieve each argument"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_end(ap)"
        }), " to clean up"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION sum(count, ...):\n    total = 0\n    args = va_start(last_fixed = count)  // initialize iterator\n    FOR i = 0 TO count - 1:\n        value = va_arg(args, int)         // get next int argument\n        total = total + value\n    END FOR\n    va_end(args)                          // cleanup\n    RETURN total\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdarg.h>\n\n// Sum a variable number of integers\nint sum(int count, ...)\n{\n    va_list args;\n    int total = 0;\n\n    va_start(args, count);    // initialize after last fixed param\n\n    for (int i = 0; i < count; i++) {\n        int val = va_arg(args, int);  // get next int\n        total += val;\n    }\n\n    va_end(args);             // cleanup\n    return total;\n}\n\n// Variadic with type tag\ndouble average(int count, ...)\n{\n    va_list args;\n    double total = 0.0;\n\n    va_start(args, count);\n\n    for (int i = 0; i < count; i++) {\n        total += va_arg(args, double);  // NOTE: type must match!\n    }\n\n    va_end(args);\n    return total / count;\n}\n\nint main(void)\n{\n    printf(\"sum(3, 10, 20, 30) = %d\\n\", sum(3, 10, 20, 30));\n    printf(\"sum(5, 1,2,3,4,5)  = %d\\n\", sum(5, 1, 2, 3, 4, 5));\n\n    printf(\"average(4, 1.0, 2.0, 3.0, 4.0) = %.2f\\n\",\n           average(4, 1.0, 2.0, 3.0, 4.0));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sum(3, 10, 20, 30) = 60\nsum(5, 1,2,3,4,5)  = 15\naverage(4, 1.0, 2.0, 3.0, 4.0) = 2.50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Variadic Argument Retrieval for sum(3, 10, 20, 30):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "va_list state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_start(args, count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "args points to first variadic arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_arg(args, int) → reads 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_arg(args, int) → reads 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_arg(args, int) → reads 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_end(args)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "total = 60"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) where n = number of variadic arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) → only the va_list pointer; arguments are on the stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why not zero overhead?"
        }), " Each va_arg call must advance the pointer and check default argument promotions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No variadic arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_arg called when none left → UB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong type in va_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (default argument promotions apply)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No fixed parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed → must have at least one named parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "va_start with wrong param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (must use last named parameter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting va_end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined (may leak memory on some platforms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Passing float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default promotion: float → double; use va_arg(args, double)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Passing char/short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default promotion: char/short → int; use va_arg(args, int)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-printf-style-function",
      children: "Custom Printf-style Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdarg.h>\n\nvoid my_printf(const char *fmt, ...)\n{\n    va_list args;\n    va_start(args, fmt);\n\n    for (const char *p = fmt; *p != '\\0'; p++) {\n        if (*p == '%') {\n            p++;\n            switch (*p) {\n                case 'd':\n                    printf(\"%d\", va_arg(args, int));\n                    break;\n                case 'f':\n                    printf(\"%f\", va_arg(args, double));\n                    break;\n                case 'c':\n                    printf(\"%c\", va_arg(args, int));  // char promoted to int\n                    break;\n                case 's':\n                    printf(\"%s\", va_arg(args, const char*));\n                    break;\n                case '%':\n                    putchar('%');\n                    break;\n                default:\n                    putchar('%');\n                    putchar(*p);\n                    break;\n            }\n        } else {\n            putchar(*p);\n        }\n    }\n\n    va_end(args);\n}\n\nint main(void)\n{\n    my_printf(\"Int: %d, Float: %.2f, Str: %s\\n\", 42, 3.14, \"Hello\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Int: 42, Float: 3.14, Str: Hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-inline-functions",
      children: "8.7 Inline Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inline function"
      }), " suggests to the compiler that the function body be inserted directly at the call site, avoiding function-call overhead."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Instead of going to a separate office (calling a function) every time you need a stapler, you keep a stapler at your desk (inline the code). Faster, but every desk needs its own stapler (code bloat)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "inline return_type function_name(parameters) {\n    // body\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// Inline function definition (best with static)\nstatic inline int max(int a, int b)\n{\n    return (a > b) ? a : b;\n}\n\nstatic inline int clamp(int value, int low, int high)\n{\n    if (value < low) return low;\n    if (value > high) return high;\n    return value;\n}\n\nint main(void)\n{\n    int a = 42, b = 17;\n    printf(\"max(%d, %d) = %d\\n\", a, b, max(a, b));\n    // The compiler may replace max(a,b) with: (a > b) ? a : b\n\n    int v = 150;\n    printf(\"clamp(%d, 0, 100) = %d\\n\", v, clamp(v, 0, 100));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "max(42, 17) = 42\nclamp(150, 0, 100) = 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inline-functions-vs-macros",
      children: "Inline Functions vs Macros"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inline Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Macro (#define)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type checking (text substitution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments evaluated once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments re-evaluated each time in text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger can step through"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger sees expanded code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Safe: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max(x++, y)"
            }), " works correctly"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dangerous: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MAX(x++, y)"
            }), " evaluates x++ twice"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has its own scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global text replacement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can contain loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with do-while trick)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via expression or GCC extension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler control"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compiler may ignore ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inline"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always expanded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small expansions, worse if large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always expanded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Macro Danger Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\n// SQUARE(++a) expands to ((++a) * (++a)) → UB!\n\nstatic inline int square_inline(int x) { return x * x; }\n// square_inline(++a) works correctly: ++a evaluated once\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-inline",
      children: "When to Use Inline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Very small functions (2-5 lines)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functions called frequently in performance-critical code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Getters/setters in header files"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do NOT use for:"
        }), " Large functions, I/O-bound code, or virtual-like behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-function-pointers",
      children: "8.8 Function Pointers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function pointer"
      }), " stores the address of a function. Function pointers enable callbacks, dispatch tables, and runtime polymorphism in C."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A TV remote's buttons. You press \"Volume Up\" (the function pointer), and it calls the TV's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increase_volume()"
      }), " function. The remote doesn't know how the TV does it → it just holds a reference to the function. Different TVs can have different implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "return_type (*pointer_name)(parameter_types);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare a function pointer with matching signature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign the address of a function (use function name without parentheses)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call through the pointer (with or without explicit dereference)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pointer can be reassigned to any function with the same signature"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE operation as function pointer:\n    TYPE: int (*)(int, int)\n    NAME: operation\n\nASSIGN: operation = add\nCALL:   result = operation(5, 3)    // calls add(5, 3)\n\nREASSIGN: operation = subtract\nCALL:     result = operation(5, 3)  // calls subtract(5, 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// Functions with same signature\nint add(int a, int b)      { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nint divide(int a, int b)   { return b != 0 ? a / b : 0; }\n\nint main(void)\n{\n    // Declare function pointer\n    int (*operation)(int, int);\n\n    int x = 20, y = 5;\n\n    // Assign and call\n    operation = add;\n    printf(\"add: %d\\n\", operation(x, y));\n\n    operation = subtract;\n    printf(\"subtract: %d\\n\", operation(x, y));\n\n    operation = multiply;\n    printf(\"multiply: %d\\n\", operation(x, y));\n\n    operation = divide;\n    printf(\"divide: %d\\n\", operation(x, y));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add: 25\nsubtract: 15\nmultiply: 100\ndivide: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "881-function-pointer-array-dispatch-table",
      children: "8.8.1 Function Pointer Array (Dispatch Table)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of if-else chains, use an array of function pointers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint add(int a, int b)      { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nint divide(int a, int b)   { return b ? a / b : 0; }\n\nint main(void)\n{\n    // Array of function pointers\n    int (*ops[])(int, int) = {add, subtract, multiply, divide};\n    const char *names[] = {\"add\", \"subtract\", \"multiply\", \"divide\"};\n\n    int x = 20, y = 5;\n\n    for (int i = 0; i < 4; i++) {\n        printf(\"%s(%d, %d) = %d\\n\", names[i], x, y, ops[i](x, y));\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add(20, 5) = 25\nsubtract(20, 5) = 15\nmultiply(20, 5) = 100\ndivide(20, 5) = 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "882-callback-with-qsort",
      children: "8.8.2 Callback with qsort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\n// Comparison function for qsort\nint compare_int(const void *a, const void *b)\n{\n    int ia = *(const int*)a;\n    int ib = *(const int*)b;\n    return (ia > ib) - (ia < ib);  // returns -1, 0, or 1\n}\n\nint compare_desc(const void *a, const void *b)\n{\n    return compare_int(b, a);  // reverse order\n}\n\nvoid print_array(int arr[], int n)\n{\n    for (int i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nint main(void)\n{\n    int arr[] = {42, 7, 15, 3, 99, 22};\n    int n = sizeof(arr) / sizeof(arr[0]);\n\n    printf(\"Original: \"); print_array(arr, n);\n\n    // qsort takes a function pointer as callback\n    qsort(arr, n, sizeof(int), compare_int);\n    printf(\"Ascending: \"); print_array(arr, n);\n\n    qsort(arr, n, sizeof(int), compare_desc);\n    printf(\"Descending: \"); print_array(arr, n);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: 42 7 15 3 99 22\nAscending: 3 7 15 22 42 99\nDescending: 99 42 22 15 7 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "883-typedef-for-function-pointers",
      children: "8.8.3 Typedef for Function Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// Typedef makes function pointer syntax readable\ntypedef int (*MathOp)(int, int);\n\nint add(int a, int b)      { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\n\nint calculate(MathOp op, int x, int y)\n{\n    return op(x, y);\n}\n\nint main(void)\n{\n    MathOp op = add;\n    printf(\"%d\\n\", calculate(op, 10, 5));\n\n    op = multiply;\n    printf(\"%d\\n\", calculate(op, 10, 5));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "15\n50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) → indirect call through pointer (one extra indirection vs direct call)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) → pointer size (4 or 8 bytes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why not zero overhead?"
        }), " Function pointer calls cannot be inlined (compiler doesn't know target at compile time)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing causes crash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signature mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returning function pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax is complex but valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer to self"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid; can create recursive structures"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-main-arguments-argc-and-argv",
      children: "8.9 main() Arguments: argc and argv"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " function receives command-line arguments through two parameters:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argc"
        }), " (argument count) → number of command-line arguments including program name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argv"
        }), " (argument vector) → array of strings, each is one argument"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant order slip. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argc"
      }), " is the number of items on the slip; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argv"
      }), " is the slip itself: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argv[0]"
      }), " = \"waiter knows the restaurant name\" (program name), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argv[1]"
      }), " = \"burger\", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argv[2]"
      }), " = \"fries\", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Signatures:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int main(void);                                          // no args\nint main(int argc, char *argv[]);                        // with args\nint main(int argc, char **argv);                         // equivalent (pointer to pointer)\n// Implementation-defined variants:\nint main(int argc, char *argv[], char *envp[]);          // POSIX: environment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OS constructs command line from the shell input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OS splits the command line into tokens (arguments separated by whitespace)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argc"
        }), " is set to the number of tokens"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argv"
        }), " is an array of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "argc+1"
        }), " strings (last is NULL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argv[0]"
        }), " is always the program name (or path used to invoke it)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argv[1]"
        }), " through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "argv[argc-1]"
        }), " are the actual arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "argv[argc]"
        }), " is NULL (sentinel)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE main(argc, argv):\n    PRINT \"Program name:\", argv[0]\n    PRINT \"Argument count:\", argc - 1   // exclude program name\n    FOR i = 1 TO argc - 1:\n        PRINT \"Arg\", i, \":\", argv[i]\n    END FOR\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C Code Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(int argc, char *argv[])\n{\n    printf(\"Program name: %s\\n\", argv[0]);\n    printf(\"Number of arguments: %d\\n\", argc - 1);\n\n    for (int i = 1; i < argc; i++) {\n        printf(\"  argv[%d] = %s\\n\", i, argv[i]);\n    }\n\n    printf(\"argv[%d] = %s\\n\", argc, argv[argc] ? argv[argc] : \"NULL\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), " (run as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./program hello world 42"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Program name: ./program\nNumber of arguments: 3\n  argv[1] = hello\n  argv[2] = world\n  argv[3] = 42\nargv[4] = NULL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "891-argument-parsing-example",
      children: "8.9.1 Argument Parsing Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[])\n{\n    if (argc < 3) {\n        fprintf(stderr, \"Usage: %s <number> <name>\\n\", argv[0]);\n        return 1;\n    }\n\n    // Convert string argument to integer\n    int num = atoi(argv[1]);\n\n    // String argument\n    const char *name = argv[2];\n\n    printf(\"Number: %d, Name: %s\\n\", num, name);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output"
      }), " (run as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./app 42 Alice"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Number: 42, Name: Alice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "892-main-variants",
      children: "8.9.2 main() Variants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No arguments needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89, C99+ deprecated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Means \"unspecified parameters\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(int argc, char *argv[])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command-line arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(int argc, char **argv)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to above"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(int argc, char *argv[], char *envp[])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX/Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void main()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-standard, not recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong on hosted implementations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " The C standard says ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " shall be defined as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int main(void)"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int main(int argc, char *argv[])"
      }), ". Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void main()"
      }), " is non-standard and may cause undefined behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "argc = 1, argv[0] = program name, argv[1] = NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Empty string argument (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A token is counted: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "argv"
            }), " contains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Argument with spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be quoted on command line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very long arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-dependent limit (usually 128K-2MB on Linux)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "argv[0] could be NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some exotic systems; guard against it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "810-scope-and-storage-classes-existing",
      children: "8.10 Scope and Storage Classes (Existing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8101-scope-rules",
      children: "8.10.1 Scope Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inside a pair of braces ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " (global)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within the current source file only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Entire program (all source files that declare it ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            }), " label"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside the function containing the label"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint global = 100;          /* file scope → accessible everywhere */\n\nstatic int file_static = 200;  /* file scope → restricted to this file */\n\nvoid function(void)\n{\n    int local = 300;       /* block scope → only inside function */\n    static int calls = 0;  /* static local → persists across calls */\n    calls++;\n    printf(\"Called %d times\\n\", calls);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Block scope variables are created on entry and destroyed on exit from the block."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8102-storage-classes",
      children: "8.10.2 Storage Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void f(void) {\n    auto int x = 5;    /* same as: int x = 5; */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "static (local):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint next_id(void)\n{\n    static int id = 0;    /* initialized once */\n    return id++;\n}\n\nint main(void)\n{\n    for (int i = 0; i < 5; i++) {\n        printf(\"ID: %d\\n\", next_id());\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ID: 0\nID: 1\nID: 2\nID: 3\nID: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "extern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// file1.c\nint global_counter = 0;\nvoid increment(void) { global_counter++; }\n\n// file2.c\nextern int global_counter;\nextern void increment(void);\nint main(void) { increment(); return 0; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "register:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void quick_sum(int arr[], int n) {\n    register int sum = 0;    /* hint to compiler (mostly ignored today) */\n    for (register int i = 0; i < n; i++) {\n        sum += arr[i];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "811-interview-corner",
      children: "8.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-does-c-have-pass-by-reference",
      children: "Q1: Does C have pass-by-reference?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No."
      }), " C only has pass-by-value. What's often called \"pass-by-reference\" in C is actually ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pass-by-pointer"
      }), ", which is still pass-by-value of the address."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What's on stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy of the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy of the address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modify original?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (dereference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real pass-by-reference (C++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int &x)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), " is an alias; no dereference needed"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// This is NOT pass-by-reference → it's pass-by-pointer\nvoid swap(int *x, int *y) {\n    int t = *x; *x = *y; *y = t;\n}\n// In C++ true reference:\n// void swap(int &x, int &y) { int t = x; x = y; y = t; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-function-pointer-vs-if-else-chain",
      children: "Q2: Function pointer vs If-Else chain"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Pointer Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "If-Else/Select chain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) direct dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) linear search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add entry → add function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify chain → risk of bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small dispatch code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repetitive condition checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be built at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed at compile time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleaner with many options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clearer with 2-3 options"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " 3+ operations → use function pointer array; 2-3 → if-else is fine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-variadic-vs-regular-arguments",
      children: "Q3: Variadic vs Regular Arguments"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Variadic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler checks types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed count?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slight (va_list machinery)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marginally slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printf, format, flexible APIs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-inline-vs-macro",
      children: "Q4: Inline vs Macro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Covered in Â§8.7. Key interview points:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never"
        }), " use macros when an inline works"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Macros have no type safety, evaluate arguments multiple times"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inline functions follow scope rules; macros don't"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Side-effect bug: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAX(++x, y)"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max(++x, y)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-return-struct-vs-return-pointer",
      children: "Q5: Return struct vs Return pointer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return struct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies entire struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies 4/8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Who owns memory?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller (on their stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be static/global/heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (if static)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be NULL?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (if static)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview tip:"
      }), " \"If the struct is larger than 16 bytes and performance matters, return a pointer. But document ownership clearly → who frees the memory?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-happens-if-you-forget-the-return-statement",
      children: "Q6: What happens if you forget the return statement?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A non-void function that falls off without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " causes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), ". The caller gets whatever value happens to be in the return register (usually garbage)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int broken(void) {\n    // no return statement!\n}\n\nint main(void) {\n    int x = broken();  // x = garbage (UB)\n    printf(\"%d\\n\", x); // prints unpredictable value\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "812-applications-in-real-systems",
      children: "8.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8121-qsort-with-function-pointer-callbacks",
      children: "8.12.1 qsort with Function Pointer Callbacks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The C standard library's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "qsort"
      }), " uses a function pointer for the comparison callback, making it work with any data type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Sort integers\nint cmp_int(const void *a, const void *b)\n{\n    int ia = *(const int*)a;\n    int ib = *(const int*)b;\n    return (ia > ib) - (ia < ib);\n}\n\n// Sort strings (case-insensitive)\nint cmp_string(const void *a, const void *b)\n{\n    const char *sa = *(const char**)a;\n    const char *sb = *(const char**)b;\n    return strcasecmp(sa, sb);  // POSIX: case-insensitive compare\n}\n\n// Sort doubles (reverse)\nint cmp_double_desc(const void *a, const void *b)\n{\n    double da = *(const double*)a;\n    double db = *(const double*)b;\n    if (da < db) return 1;\n    if (da > db) return -1;\n    return 0;\n}\n\nint main(void)\n{\n    int nums[] = {42, 7, 15, 3, 99};\n    qsort(nums, 5, sizeof(int), cmp_int);\n    printf(\"Sorted ints: \");\n    for (int i = 0; i < 5; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");\n\n    const char *fruits[] = {\"banana\", \"Apple\", \"cherry\", \"date\"};\n    qsort(fruits, 4, sizeof(char*), cmp_string);\n    printf(\"Sorted strings: \");\n    for (int i = 0; i < 4; i++) printf(\"%s \", fruits[i]);\n    printf(\"\\n\");\n\n    double vals[] = {3.14, 2.71, 1.41, 0.57};\n    qsort(vals, 4, sizeof(double), cmp_double_desc);\n    printf(\"Desc doubles: \");\n    for (int i = 0; i < 4; i++) printf(\"%.2f \", vals[i]);\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sorted ints: 3 7 15 42 99\nSorted strings: Apple banana cherry date\nDesc doubles: 3.14 2.71 1.41 0.57\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8122-signal-handlers",
      children: "8.12.2 Signal Handlers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Signal handlers use function pointers. When a signal (like SIGINT from Ctrl+C) arrives, the OS calls the registered handler."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <signal.h>\n#include <stdlib.h>\n\n// Signal handler function\nvoid sigint_handler(int signum)\n{\n    printf(\"\\nCaught signal %d (SIGINT). Cleaning up...\\n\", signum);\n    printf(\"Exiting gracefully.\\n\");\n    exit(0);\n}\n\nint main(void)\n{\n    // Register signal handler using function pointer\n    void (*prev_handler)(int) = signal(SIGINT, sigint_handler);\n\n    if (prev_handler == SIG_ERR) {\n        fprintf(stderr, \"Failed to set signal handler\\n\");\n        return 1;\n    }\n\n    printf(\"Press Ctrl+C to trigger SIGINT...\\n\");\n\n    // Infinite loop; press Ctrl+C to break\n    int counter = 0;\n    while (1) {\n        printf(\"Working... %d\\r\", counter++);\n        fflush(stdout);\n        // Simulate work\n        for (volatile int i = 0; i < 1000000; i++);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8123-event-driven-architecture-callback-table",
      children: "8.12.3 Event-Driven Architecture (Callback Table)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// Event types\ntypedef enum {\n    EVENT_CLICK,\n    EVENT_KEYPRESS,\n    EVENT_MOUSEMOVE,\n    EVENT_COUNT\n} EventType;\n\n// Event handler type\ntypedef void (*EventHandler)(void *data);\n\n// Default handlers\nvoid on_click(void *data) {\n    printf(\"Click at (%d, %d)\\n\", ((int*)data)[0], ((int*)data)[1]);\n}\n\nvoid on_keypress(void *data) {\n    printf(\"Key pressed: %c\\n\", *(char*)data);\n}\n\nvoid on_mousemove(void *data) {\n    printf(\"Mouse moved\\n\");\n}\n\n// Dispatch table: array of function pointers\nEventHandler event_handlers[EVENT_COUNT] = {\n    on_click,\n    on_keypress,\n    on_mousemove\n};\n\n// Dispatcher function\nvoid dispatch_event(EventType type, void *data)\n{\n    if (type >= 0 && type < EVENT_COUNT && event_handlers[type] != NULL) {\n        event_handlers[type](data);\n    }\n}\n\nint main(void)\n{\n    int click_pos[] = {100, 200};\n    dispatch_event(EVENT_CLICK, click_pos);\n\n    char key = 'A';\n    dispatch_event(EVENT_KEYPRESS, &key);\n\n    dispatch_event(EVENT_MOUSEMOVE, NULL);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Click at (100, 200)\nKey pressed: A\nMouse moved\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "function-components",
      children: "Function Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int f(int, int);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int f(int a, int b) { ... }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(1, 2);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ends with"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Has body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds symbol table entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generates machine code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code in text segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frame allocated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed (identical OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error (ODR violation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code in text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-call on stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I promise this exists\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Here's what it does\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Execute it now\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parameter-passing",
      children: "Parameter Passing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int *x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(&a)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value of a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modify original?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "*x = new_val;"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size of type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → 4/8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must check for NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small, read-only data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output params, large data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Const correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const int *x"
            }), " for read-only"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recursion-vs-iteration",
      children: "Recursion vs Iteration"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code clarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant for tree/graph/dividing problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (unless infinite loop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function call overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct jumps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tail-call opt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be tail-recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return_type name(param_list);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return_type name(params) { body }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result = name(args);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Void function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void func(params) { ...; return; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inline (C99+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inline int max(int a, int b) { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*fp)(int, int);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer typedef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef int (*Op)(int, int);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_list ap; va_start(ap, last_fixed);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type val = va_arg(ap, type);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_end(ap);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "main with args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(int argc, char *argv[])"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls itself from its body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static int counter = 0;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the output?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void f(int x) { x = 100; }\nint main() { int a = 5; f(a); printf(\"%d\", a); return 0; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 5  B) 100  C) Compiler error  D) Undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** Pass by value → `a` is unchanged."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which is NOT a valid main() signature?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int main(void)"
        }), "  B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int main(int argc, char *argv[])"
        }), "  C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void main()"
        }), "  D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int main()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `void main()` is non-standard, though some compilers accept it."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does this print?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int *f() { int x = 42; return &x; }\nint main() { int *p = f(); printf(\"%d\", *p); return 0; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 42  B) Garbage  C) Undefined behavior  D) Compiler error"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Returning address of local variable = undefined behavior. Compiler may warn."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_arg(args, float)"
        }), " do in a variadic function?\nA) Returns the next float argument  B) Undefined behavior (float promoted to double)\nC) Returns a double  D) Rounding error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Default argument promotion promotes float to double; use `va_arg(args, double)`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inline functions are guaranteed to be inlined at the call site. True or False?\nA) True  B) False"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The `inline` keyword is a suggestion; the compiler may ignore it."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the value of argc for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "./app one two three"
        }), "?\nA) 3  B) 4  C) 5  D) 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** argc = 4 (program name + 3 arguments)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), " expect as its comparison parameter?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*)(void*, void*)"
        }), "  B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*)(const void*, const void*)"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (void*, void*)"
        }), "  D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int cmp(void*, void*)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `int (*)(const void*, const void*)`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A function pointer can be NULL. True or False?\nA) True  B) False"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** True. Always check before calling: `if (fp != NULL) fp();`."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function Declaration:"
        }), " Tells compiler the signature; prevents implicit-int errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function Definition:"
        }), " Provides the body; must match declaration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function Call:"
        }), " Passes arguments as copies (pass-by-value); each call gets a new stack frame"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal vs Actual:"
        }), " Formal = definition parameters; Actual = call-site arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass by Value:"
        }), " Copy of argument; original cannot be modified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass by Pointer:"
        }), " Copy of address; original can be modified via dereference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return Values:"
        }), " Match return type; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void"
        }), " for no return value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return Pointer:"
        }), " Must point to memory that outlives the function (static, heap, or caller-provided)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested Calls:"
        }), " Inner calls evaluated first, results flow outward"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursion:"
        }), " Function calls itself; needs base case; risk of stack overflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variadic Functions:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_start/va_arg/va_end"
        }), " for variable arguments; no type safety"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inline Functions:"
        }), " Suggestion to inline; use for tiny, hot functions; safer than macros"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function Pointers:"
        }), " Enable callbacks, dispatch tables, and runtime polymorphism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "main() Arguments:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "argc"
        }), " = count, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "argv"
        }), " = string array; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "argv[0]"
        }), " = program name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameter passing comparison:"
        }), " Value copies data; Pointer copies address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variadic vs Regular:"
        }), " Variadic has no type safety; regular is type-checked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inline vs Macro:"
        }), " Inline is type-safe; macros are text substitution with side-effect risks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return struct vs pointer:"
        }), " struct copy is safe but expensive; pointer is cheap but needs ownership rules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is pass-by-value? Give an example where it is insufficient and explain how pointers solve the problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a function declaration and a function definition?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " keyword mean when applied to (a) a local variable and (b) a global function?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens if you call a function without a visible prototype in C89? In C99?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should you not return the address of a local variable from a function?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a variadic function? Name the four macros used and their purposes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do inline functions differ from function-like macros?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), " callback parameter?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Command-line calculator:"
          }), " Write a program that takes an operator and two numbers as command-line arguments (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "./calc add 5 3"
          }), ") and prints the result. Use a function pointer dispatch table for the four operations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Variadic max:"
          }), " Write a variadic function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int max_n(int count, ...)"
          }), " that returns the maximum of a variable number of integers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Function pointer sort:"
          }), " Write a function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void sort(int arr[], int n, int (*cmp)(int, int))"
          }), " that implements bubble sort, and use it with both ascending and descending comparators."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recursive binary search:"
          }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int binary_search(int arr[], int low, int high, int target)"
          }), " recursively. Trace the call stack for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr = [1, 3, 5, 7, 9]"
          }), " searching for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "7"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Callback timer:"
          }), " Implement a simple timer that takes a function pointer and calls it every N seconds (use a busy loop; don't use sleep). The timer callback should print \"Tick!\" or \"Tock!\"."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a variadic formatting function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char* vformat(const char *fmt, ...)"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Supports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%d"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%s"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%c"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%%"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocates and returns a heap string with the formatted result"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Takes a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const char *fmt"
        }), " as the fixed parameter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Properly handles ", (0,jsx_runtime.jsx)(_components.code, {
          children: "va_start/va_arg/va_end"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Returns NULL on any error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a test that calls your function with: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vformat(\"Int: %d, Str: %s, Char: %c\", 42, \"hello\", 'X')"
      }), " and prints the result. Remember to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free()"
      }), " the returned string."]
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