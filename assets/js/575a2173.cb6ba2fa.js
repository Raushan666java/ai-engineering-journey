"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[784],{

/***/ 5288
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_03_control_flow_md_575_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-03-control-flow-md-575.json
const site_docs_courses_python_programming_03_control_flow_md_575_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/03-control-flow","title":"Chapter 3: Control Flow","description":"Previous Loops and Iteration","source":"@site/docs/courses/python-programming/03-control-flow.md","sourceDirName":"courses/python-programming","slug":"/python-programming/03-control-flow","permalink":"/ai-engineering-journey/python-programming/03-control-flow","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-control-flow","slug":"/python-programming/03-control-flow","title":"Chapter 3: Control Flow","sidebar_label":"Chapter 3: Control Flow","sidebar_position":3},"sidebar":"course-python-programming","previous":{"title":"Chapter 2: Variables, Types, and Operators","permalink":"/ai-engineering-journey/python-programming/02-variables"},"next":{"title":"Chapter 4: Loops and Iteration","permalink":"/ai-engineering-journey/python-programming/04-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/03-control-flow.md


const frontMatter = {
	id: '03-control-flow',
	slug: '/python-programming/03-control-flow',
	title: 'Chapter 3: Control Flow',
	sidebar_label: 'Chapter 3: Control Flow',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Control Flow';

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
  "value": "3.1 The if Statement",
  "id": "31-the-if-statement",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "3.2 Truthiness and Condition Evaluation",
  "id": "32-truthiness-and-condition-evaluation",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-1",
  "level": 3
}, {
  "value": "3.3 Chained Comparisons",
  "id": "33-chained-comparisons",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-2",
  "level": 3
}, {
  "value": "3.4 Short-Circuit Evaluation",
  "id": "34-short-circuit-evaluation",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-3",
  "level": 3
}, {
  "value": "3.5 Ternary Conditional Expression",
  "id": "35-ternary-conditional-expression",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-4",
  "level": 3
}, {
  "value": "3.6 match-case (Structural Pattern Matching)",
  "id": "36-match-case-structural-pattern-matching",
  "level": 2
}, {
  "value": "3.6.1 Literal Patterns",
  "id": "361-literal-patterns",
  "level": 3
}, {
  "value": "3.6.2 Capture and Guard Patterns",
  "id": "362-capture-and-guard-patterns",
  "level": 3
}, {
  "value": "3.6.3 Sequence and Mapping Patterns",
  "id": "363-sequence-and-mapping-patterns",
  "level": 3
}, {
  "value": "3.6.4 Class Patterns",
  "id": "364-class-patterns",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-5",
  "level": 3
}, {
  "value": "3.7 Conditional Expressions and Assignment",
  "id": "37-conditional-expressions-and-assignment",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-6",
  "level": 3
}, {
  "value": "3.8 Boolean Operator Precedence in Conditions",
  "id": "38-boolean-operator-precedence-in-conditions",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-7",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
  "value": "More TypeScript Control Flow Patterns",
  "id": "more-typescript-control-flow-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Control Flow Patterns",
  "id": "typescript-control-flow-patterns",
  "level": 3
}, {
  "value": "TypeScript Advanced Flow Control",
  "id": "typescript-advanced-flow-control",
  "level": 3
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
  "value": "TypeScript Challenge",
  "id": "typescript-challenge",
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
    header: "header",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-3-control-flow",
        children: "Chapter 3: Control Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/02-variables",
          children: "Variables, Types, and Operators"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/04-loops",
          children: "Loops and Iteration"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write branching logic using if, elif, and else"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the match-case statement for structural pattern matching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain comparisons for concise range checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand short-circuit evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the ternary conditional expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/03-control-flow.png",
        alt: "Control Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if Statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching with if/elif/else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truthiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truthy/falsy values in conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chained Comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 < x < 10 syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-Circuit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "and/or lazy evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x if cond else y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "match-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural pattern matching (3.10+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walrus operator :="
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean Precedence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not > and > or"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[if/elif/else] --> B[Truthiness]\r\n    B --> C[Chained Comparisons]\r\n    C --> D[Short-Circuit]\r\n    D --> E[Ternary]\r\n    E --> F[match-case]\r\n    F --> G[Walrus Operator]\r\n    G --> H[Precedence]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-the-if-statement",
      children: "3.1 The if Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " if/elif/else chains replace the switch statement found in other languages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " statement executes a block when a condition is truthy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "temperature = 30\r\nif temperature > 25:\r\n    print(\"It is hot today\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Every if can stand alone -- elif and else are optional. An if with no else simply does nothing when false.\r\nAdd an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " clause for the complementary case:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "temperature = 10\r\nif temperature > 25:\r\n    print(\"It is hot today\")\r\nelse:\r\n    print(\"It is cool today\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chain multiple conditions with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "elif"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "temperature = 15\r\nif temperature > 35:\r\n    print(\"Extreme heat\")\r\nelif temperature > 25:\r\n    print(\"Warm\")\r\nelif temperature > 15:\r\n    print(\"Mild\")\r\nelif temperature > 5:\r\n    print(\"Cool\")\r\nelse:\r\n    print(\"Cold\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike some languages, Python has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " statement (prior to 3.10). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "elif"
      }), " chain serves the same purpose, and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "match-case"
      }), " statement provides a more powerful alternative in Python 3.10+."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Mixing tabs and spaces causes IndentationError. Configure your editor to convert tabs to spaces for Python files.\r\nIndentation is the only delimiter -- there is no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "endif"
        }), " or closing brace. The colon after each condition is mandatory:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "if x:     # colon required\r\n    ...   # indented block\r\n\r\n# Correct:\r\nif x > 0:\r\n    pass\r\nelse:\r\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: if/else if/else with curly braces\r\nlet temperature: number = 30;\r\nif (temperature > 35) {\r\n    console.log(\"Extreme heat\");\r\n} else if (temperature > 25) {\r\n    console.log(\"Warm\");\r\n} else if (temperature > 15) {\r\n    console.log(\"Mild\");\r\n} else if (temperature > 5) {\r\n    console.log(\"Cool\");\r\n} else {\r\n    console.log(\"Cold\");\r\n}\r\n\r\n// TypeScript switch statement (Python's if/elif/else is closer to this)\r\nswitch (temperature) {\r\n    case 0:\r\n        console.log(\"Freezing\");\r\n        break;\r\n    case 100:\r\n        console.log(\"Boiling\");\r\n        break;\r\n    default:\r\n        console.log(\"Neither\");\r\n        break;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "elif"
      }), "; TypeScript uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else if"
      }), ". Python has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), "-statement (until 3.10's match-case); TypeScript has a C-style ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Python[Python if/elif/else]\r\n        A1[if condition] -->|True| B1[if block]\r\n        A1 -->|False| C1[elif condition]\r\n        C1 -->|True| D1[elif block]\r\n        C1 -->|False| E1[elif ...]\r\n        E1 -->|None True| F1[else block]\r\n    end\r\n\r\n    subgraph TS[TypeScript if/else if/else + switch]\r\n        A2[\"if (condition)\"] -->|True| B2[if body]\r\n        A2 -->|False| C2[else if]\r\n        C2 -->|True| D2[else if body]\r\n        C2 -->|False| E2[\"else => default\"]\r\n        F2[\"switch (value)\"] --> G2[case matching]\r\n        G2 --> H2[break / default]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-truthiness-and-condition-evaluation",
      children: "3.2 Truthiness and Condition Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Any value works as a condition -- empty collections, zero, and None are falsy; everything else is truthy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditions do not need to be boolean. Any expression can serve as a condition:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name = input(\"Enter your name: \")\r\nif name:                 # truthy if non-empty string\r\n    print(f\"Hello, {name}\")\r\nelse:\r\n    print(\"No name entered\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common truthiness pitfalls:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Checking if a list is empty\r\nitems = []\r\nif items:           # Pythonic -- no len(items) > 0\r\n    print(items[0])\r\nelse:\r\n    print(\"Empty\")\r\n\r\n# None check\r\nresult = None\r\nif result is not None:   # correct\r\n    print(result)\r\n\r\nif result:               # wrong if result could be 0 or False\r\n    print(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-1",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same truthiness concept\r\nlet name: string = \"\";  // empty string\r\nif (name) {             // false for empty string\r\n    console.log(`Hello, ${name}`);\r\n} else {\r\n    console.log(\"No name entered\");\r\n}\r\n\r\n// Falsy values: false, 0, NaN, \"\", null, undefined\r\n// Python falsy: False, 0, 0.0, \"\", [], {}, (), set(), None\r\n\r\n// TypeScript has extra falsy values: NaN, undefined\r\nlet notANumber: number = NaN;\r\nif (notANumber) {\r\n    // This block NEVER runs - NaN is falsy in TypeScript\r\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Falsy Values"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "False"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "None"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NaN"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra in TS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "undefined"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NaN"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra in Python"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set()"
            }), " (all empty containers)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-chained-comparisons",
      children: "3.3 Chained Comparisons"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 < x < 10"
        }), " syntax is more readable and efficient than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 < x and x < 10"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python supports chained comparisons naturally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 5\r\nprint(1 < x < 10)         # True  (1 < x and x < 10)\r\nprint(1 < x < 5)          # False (1 < x and x < 5)\r\nprint(5 == x > 3)         # True  (5 == x and x > 3)\r\nprint(10 > x > 2)         # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chained comparisons evaluate each operand only once and short-circuit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def get_value():\r\n    print(\"get_value called\")\r\n    return 5\r\n\r\nprint(1 < get_value() < 10)  # get_value called once\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is more readable and efficient than the equivalent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 < x and x < 10"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-2",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: chained comparison NOT supported\r\n// Must use && explicitly\r\nlet x: number = 5;\r\nconsole.log(1 < x && x < 10);   // true  (Python: 1 < x < 10)\r\nconsole.log(1 < x && x < 5);    // false (Python: 1 < x < 5)\r\n\r\n// Python evaluates the middle operand ONCE\r\n// TypeScript evaluates x TWICE -- not identical behavior\r\nfunction getValue(): number {\r\n    console.log(\"getValue called\");\r\n    return 5;\r\n}\r\nconsole.log(1 < getValue() && getValue() < 10);  // getValue called TWICE!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's chained comparison is a unique feature. TypeScript (and most C-family languages) require explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " and evaluate the middle operand twice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-short-circuit-evaluation",
      children: "3.4 Short-Circuit Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " and stops at the first falsy operand; or stops at the first truthy operand."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The logical operators ", (0,jsx_runtime.jsx)(_components.code, {
        children: "and"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " stop evaluating as soon as the result is determined:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def divide(a, b):\r\n    return b != 0 and a / b   # returns False if b is 0, else the quotient\r\n\r\nprint(divide(10, 2))   # 5.0\r\nprint(divide(10, 0))   # False (no ZeroDivisionError)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " can provide default values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name = input(\"Name: \") or \"Guest\"\r\nprint(f\"Hello, {name}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the input is empty, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"\""
      }), " is falsy, so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"Guest\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This pattern is less common since the walrus operator and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "None"
      }), "-aware idioms gained popularity, but it remains concise for simple defaults."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-3",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same short-circuit behavior\r\nfunction divide(a: number, b: number): number | boolean {\r\n    return b !== 0 && a / b;   // returns false if b is 0\r\n}\r\n\r\nconsole.log(divide(10, 2));    // 5\r\nconsole.log(divide(10, 0));    // false (no error)\r\n\r\n// Default value (same pattern as Python)\r\nconst input = \"\";  // user input (empty)\r\nconst name = input || \"Guest\";\r\nconsole.log(`Hello, ${name}`);  // Hello, Guest\r\n\r\n// TypeScript also has nullish coalescing:\r\nconst displayName = input ?? \"Guest\";\r\n// ?? only checks null/undefined, not empty string\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-ternary-conditional-expression",
      children: "3.5 Ternary Conditional Expression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " x if cond else y is an expression, not a statement, so it can be used inside other expressions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python's conditional expression (ternary operator) takes the form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "value_if_true if condition else value_if_false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "age = 20\r\nstatus = \"Adult\" if age >= 18 else \"Minor\"\r\nprint(status)   # Adult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ternary expressions are expressions, not statements -- they can be used inside other expressions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"Even\" if 5 % 2 == 0 else \"Odd\")   # Odd\r\n\r\n# Nesting (discouraged for readability)\r\nresult = \"A\" if score >= 90 else \"B\" if score >= 80 else \"C\" if score >= 70 else \"F\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Nested ternaries are hard to read. Limit to one level; use if-elif-else blocks for anything more complex.\r\nAvoid deep nesting. For complex logic, use a full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if-elif-else"
        }), " block."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-4",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: C-style ternary operator\r\nlet age: number = 20;\r\nlet status: string = age >= 18 ? \"Adult\" : \"Minor\";\r\nconsole.log(status);   // Adult\r\n\r\n// Python:    value_if_true if condition else value_if_false\r\n// TypeScript: condition ? value_if_true : value_if_false\r\n\r\n// Can be used in expressions:\r\nconsole.log(5 % 2 === 0 ? \"Even\" : \"Odd\");   // Odd\r\n\r\n// Nesting (also discouraged):\r\nlet score: number = 85;\r\nlet result: string = score >= 90 ? \"A\" : score >= 80 ? \"B\" : score >= 70 ? \"C\" : \"F\";\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x if cond else y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cond ? x : y"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expression type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression (usable inline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression (usable inline)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads naturally as English"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-match-case-structural-pattern-matching",
      children: "3.6 match-case (Structural Pattern Matching)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " match-case supports literals, captures, guards, sequences, mappings, and class patterns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Introduced in Python 3.10, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "match-case"
      }), " provides powerful pattern matching inspired by Scala, Rust, and Haskell:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "361-literal-patterns",
      children: "3.6.1 Literal Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def describe_status(code: int) -> str:\r\n    match code:\r\n        case 200:\r\n            return \"OK\"\r\n        case 404:\r\n            return \"Not Found\"\r\n        case 500:\r\n            return \"Internal Server Error\"\r\n        case _:              # wildcard (default)\r\n            return \"Unknown\"\r\n\r\nprint(describe_status(404))  # Not Found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "362-capture-and-guard-patterns",
      children: "3.6.2 Capture and Guard Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def classify_point(point):\r\n    match point:\r\n        case (0, 0):\r\n            return \"Origin\"\r\n        case (0, y):\r\n            return f\"On Y axis at y={y}\"\r\n        case (x, 0):\r\n            return f\"On X axis at x={x}\"\r\n        case (x, y) if x == y:\r\n            return f\"On diagonal at ({x}, {y})\"\r\n        case (x, y):\r\n            return f\"At ({x}, {y})\"\r\n        case _:\r\n            return \"Not a 2D point\"\r\n\r\nprint(classify_point((0, 5)))  # On Y axis at y=5\r\nprint(classify_point((3, 3)))  # On diagonal at (3, 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "363-sequence-and-mapping-patterns",
      children: "3.6.3 Sequence and Mapping Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def handle_command(command):\r\n    match command.split():\r\n        case [\"quit\"]:\r\n            print(\"Exiting...\")\r\n        case [\"look\", direction]:\r\n            print(f\"Looking {direction}\")\r\n        case [\"go\", (\"north\" | \"south\" | \"east\" | \"west\") as dir]:\r\n            print(f\"Going {dir}\")\r\n        case [\"take\", *items]:\r\n            print(f\"Taking {items}\")\r\n        case _:\r\n            print(\"Unknown command\")\r\n\r\nhandle_command(\"go north\")      # Going north\r\nhandle_command(\"take sword potion\")  # Taking ['sword', 'potion']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "364-class-patterns",
      children: "3.6.4 Class Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\r\n\r\n@dataclass\r\nclass Person:\r\n    name: str\r\n    age: int\r\n\r\ndef greet(person):\r\n    match person:\r\n        case Person(name=\"Alice\", age=a) if a > 30:\r\n            print(f\"Hi Alice, you're {a}\")\r\n        case Person(name=n, age=a) if a < 18:\r\n            print(f\"Hello {n}, young one\")\r\n        case Person(name=n):\r\n            print(f\"Hey {n}\")\r\n        case _:\r\n            print(\"Not a person\")\r\n\r\ngreet(Person(\"Alice\", 35))   # Hi Alice, you're 35\r\ngreet(Person(\"Bob\", 15))     # Hello Bob, young one\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Match-case is exhaustive -- if no pattern matches and no wildcard ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_"
      }), " is provided, no exception is raised (the match simply does nothing). Use wildcards to avoid silent failures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-5",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: switch statement is the closest equivalent\r\n// (less powerful than Python's match-case)\r\n\r\nfunction describeStatus(code: number): string {\r\n    switch (code) {\r\n        case 200: return \"OK\";\r\n        case 404: return \"Not Found\";\r\n        case 500: return \"Internal Server Error\";\r\n        default:  return \"Unknown\";\r\n    }\r\n}\r\n\r\nconsole.log(describeStatus(404));  // Not Found\r\n\r\n// TypeScript does NOT have destructuring patterns in switch\r\n// No guards in case clauses\r\n// No sequence/mapping/class patterns\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-conditional-expressions-and-assignment",
      children: "3.7 Conditional Expressions and Assignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The walrus operator := assigns and returns a value in a single expression."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The walrus operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":="
      }), " can streamline conditional assignments:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Without walrus:\r\ndata = fetch_data()\r\nif data is None:\r\n    data = []\r\n\r\n# With walrus:\r\nif (data := fetch_data()) is None:\r\n    data = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# In comprehensions\r\nresults = [y for x in range(10) if (y := x ** 2) > 20]\r\nprint(results)  # [25, 36, 49, 64, 81]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-6",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: NO walrus operator equivalent\r\n// Must separate assignment from condition\r\n\r\nfunction fetchData(): string[] | null {\r\n    return null;\r\n}\r\n\r\n// TypeScript requires two statements:\r\nlet data = fetchData();\r\nif (data === null) {\r\n    data = [];\r\n}\r\n\r\n// No inline assignment in conditions\r\n// Python: if (n := len(items)) > 0: ...\r\n// TypeScript: const n = items.length; if (n > 0) { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-boolean-operator-precedence-in-conditions",
      children: "3.8 Boolean Operator Precedence in Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " not has highest precedence, then and, then or -- parenthesise when mixing them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding precedence is critical for complex conditions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Equivalent to (a and b) or c  -- and has higher precedence\r\nif a and b or c:\r\n    pass\r\n\r\n# Explicit grouping\r\nif (a and b) or c:\r\n    pass\r\n\r\nif a and (b or c):\r\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When mixing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "and"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), ", parenthesise for clarity:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "valid = (age >= 18) and (has_id or is_vip)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-7",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same precedence ordering: ! > && > ||\r\n// Python: not > and > or\r\n// TypeScript: ! > && > ||\r\n\r\nlet valid: boolean = (age >= 18) && (hasId || isVip);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C/Java"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JavaScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if/elif/else"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if/else if/else"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if/else if/else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "match-case (3.10+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "switch/case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "switch/case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x if cond else y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cond ? x : y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cond ? x : y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "and, or, not"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&&,"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chained compare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 < x < 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# if-elif-else\r\nif condition:\r\n    pass\r\nelif other:\r\n    pass\r\nelse:\r\n    pass\r\n\r\n# Ternary\r\nvalue = x if condition else y\r\n\r\n# match-case (3.10+)\r\nmatch value:\r\n    case 1: print(\"one\")\r\n    case _: print(\"other\")\r\n\r\n# Chained comparison\r\nif 0 < x < 100:\r\n    print(\"in range\")\r\n\r\n# Walrus\r\nif (n := len(items)) > 0:\r\n    print(f\"Count: {n}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Mistake"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "if/elif/else"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "elif chains replace switch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "else if"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "elif"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Truthiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty = falsy, non-empty = truthy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if result:"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " could be valid zero"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chained comparison"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1 < x < 10"
            }), " is Pythonic"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Writing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if x > 10 and x < 20"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10 < x < 20"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x if cond else y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Putting complex logic in ternaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "match-case"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), " for default case"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting wildcard causes silent fall-through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python has chained comparisons, walrus; TS has switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expecting same syntax across languages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevant Section"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input sanitisation with truthiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status code matching with match-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State machines with match-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.6.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe file checks with short-circuit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which of the following is falsy in Python?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) [0]"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) \"\" ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) \"False\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) -1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What does print(3 < 5 > 2) output?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) False"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) True ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) SyntaxError"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) (3 < 5) > 2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is x after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = \"A\" if False else \"B\""
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) \"A\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) \"B\" ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) False"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) None"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In match-case, what does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_"
      }), " represent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The default value"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) The wildcard pattern ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A variable capture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Syntax error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " not True and False or True evaluates to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) True ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) False"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) None"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) SyntaxError"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 3: TypeScript Control Flow Equivalents\r\n// Python: if/elif/else\r\nfunction grade(score: number): string {\r\n  if (score >= 90) return \"A\";\r\n  else if (score >= 80) return \"B\";\r\n  else if (score >= 70) return \"C\";\r\n  else if (score >= 60) return \"D\";\r\n  else return \"F\";\r\n}\r\n\r\n// Python: ternary expression (x if cond else y)\r\nconst status: string = grade(85) === \"A\" ? \"Excellent\" : \"Keep trying\";\r\n// Equivalent Python: status = \"Excellent\" if grade(85) == \"A\" else \"Keep trying\"\r\n\r\n// Python: match-case (3.10+) → TypeScript: switch\r\nfunction describe(value: unknown): string {\r\n  switch (typeof value) {\r\n    case \"number\":\r\n      return `Number: ${value}`;\r\n    case \"string\":\r\n      return `String (${value.length} chars)`;\r\n    case \"boolean\":\r\n      return value ? \"Boolean: true\" : \"Boolean: false\";\r\n    default:\r\n      return `Unknown type: ${String(value)}`;\r\n  }\r\n}\r\n\r\n// Python: chained comparisons (1 < x < 10) must be expanded\r\nfunction isBetween(x: number, lo: number, hi: number): boolean {\r\n  return x > lo && x < hi;\r\n}\r\n\r\n// Python: short-circuit evaluation works identically\r\nfunction validate(input: string | null): boolean {\r\n  return input !== null && input.length > 0;\r\n}\r\n\r\n// Python: match-case with pattern matching has no TS equivalent\r\n// but destructuring + switch approximates some use cases\r\ntype Shape =\r\n  | { kind: \"circle\"; radius: number }\r\n  | { kind: \"rect\"; width: number; height: number };\r\n\r\nfunction area(shape: Shape): number {\r\n  if (shape.kind === \"circle\") return Math.PI * shape.radius ** 2;\r\n  if (shape.kind === \"rect\") return shape.width * shape.height;\r\n  throw new Error(\"Unknown shape\");\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-control-flow-patterns",
      children: "More TypeScript Control Flow Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: ternary with complex expressions\r\nconst score = 85;\r\nconst grade2 = score >= 90 ? \"A\" : score >= 80 ? \"B\" : score >= 70 ? \"C\" : \"F\";\r\n// Equivalent Python: \"A\" if score >= 90 else \"B\" if score >= 80 else \"C\" else \"F\"\r\n\r\n// Python: short-circuit for default values → TypeScript: ??\r\nfunction getConfigValue(key: string, fallback: string): string {\r\n  return process.env[key] ?? fallback;\r\n}\r\n// Python: os.environ.get(key, fallback)\r\n\r\n// Python: match-case with OR patterns → TypeScript: fallthrough switch\r\nfunction isWeekend(day: string): boolean {\r\n  switch (day.toLowerCase()) {\r\n    case \"saturday\":\r\n    case \"sunday\":\r\n      return true;\r\n    default:\r\n      return false;\r\n  }\r\n}\r\n// Python: match day: case \"saturday\" | \"sunday\": return True\r\n\r\n// Python: match-case with guards → TypeScript: if-else chain\r\ninterface Admin { kind: \"admin\"; permissions: string[]; }\r\ninterface User { kind: \"user\"; email: string; }\r\ntype Account = Admin | User;\r\n\r\nfunction getInfo(account: Account): string {\r\n  if (account.kind === \"admin\" && account.permissions.includes(\"manage\")) {\r\n    return \"Admin with manage permissions\";\r\n  }\r\n  if (account.kind === \"user\") {\r\n    return `User: ${account.email}`;\r\n  }\r\n  return \"Unknown\";\r\n}\r\n\r\n// Python: while-else → TypeScript: flag-based pattern\r\nlet attempts = 0;\r\nlet connected = false;\r\nwhile (attempts < 3 && !connected) {\r\n  try {\r\n    // try connecting\r\n    connected = true;\r\n  } catch {\r\n    attempts++;\r\n  }\r\n}\r\nif (!connected) {\r\n  console.log(\"Failed after 3 attempts\");\r\n  // Python: else clause runs when while completes without break\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === If-Else Chain Optimizer ===\r\ninterface Branch { condition: string; cost: number; probability: number }\r\nfunction optimizeChain(branches: Branch[]): { reordered: Branch[]; avgCost: number } {\r\n  const sorted = [...branches].sort((a, b) => b.probability - a.probability);\r\n  const avgCost = sorted.reduce((s, b, i) => s + b.cost * (i + 1) * b.probability, 0);\r\n  return { reordered: sorted, avgCost: Math.round(avgCost * 100) / 100 };\r\n}\r\nconst branches = [\r\n  { condition: \"score >= 90\", cost: 2, probability: 0.15 },\r\n  { condition: \"score >= 80\", cost: 2, probability: 0.25 },\r\n  { condition: \"score >= 70\", cost: 2, probability: 0.30 },\r\n  { condition: \"else\", cost: 2, probability: 0.30 },\r\n];\r\nconsole.log(optimizeChain(branches));\r\n\r\n// === Switch/Case Builder ===\r\ntype CaseClause = { pattern: string; result: string };\r\nfunction buildSwitch(expr: string, cases: CaseClause[], default_: string): string {\r\n  const lines = cases.map((c) => `  case ${c.pattern}: return ${c.result};`);\r\n  return `switch (${expr}) {\\n${lines.join(\"\\n\")}\\n  default: return ${default_};\\n}`;\r\n}\r\nconst sw = buildSwitch(\"status\", [\r\n  { pattern: '\"ok\"', result: '\"Success\"' },\r\n  { pattern: '\"err\"', result: '\"Error\"' },\r\n], '\"Unknown\"');\r\nconsole.log(sw);\r\n\r\n// === Ternary Converter (flatten if-else to ternary) ===\r\nfunction toTernary(condition: string, thenVal: string, elseVal: string): string {\r\n  return `${condition} ? ${thenVal} : ${elseVal}`;\r\n}\r\nconsole.log(toTernary(\"age >= 18\", '\"Adult\"', '\"Minor\"'));\r\n\r\n// === Guard Clause Detector ===\r\nfunction needsGuard(conditions: string[], nestedBodies: number): boolean {\r\n  return conditions.length > 1 && nestedBodies > 2;\r\n}\r\nconsole.log(needsGuard([\"x == null\", \"y == null\"], 3)); // true\r\n\r\n// === Pattern Match Simulator (Python match-case in TS) ===\r\ntype MatchCase = { pattern: RegExp; handler: (...m: string[]) => string };\r\nclass PatternMatcher {\r\n  private cases: MatchCase[] = [];\r\n  add(pattern: RegExp, handler: (...m: string[]) => string): void { this.cases.push({ pattern, handler }); }\r\n  match(input: string): string {\r\n    for (const c of this.cases) {\r\n      const m = input.match(c.pattern);\r\n      if (m) return c.handler(...m.slice(1));\r\n    }\r\n    return \"No match\";\r\n  }\r\n}\r\nconst calc = new PatternMatcher();\r\ncalc.add(/^add (\\d+) (\\d+)$/, (a, b) => `${+a + +b}`);\r\ncalc.add(/^sub (\\d+) (\\d+)$/, (a, b) => `${+a - +b}`);\r\nconsole.log(calc.match(\"add 5 3\")); // 8\r\nconsole.log(calc.match(\"sub 10 4\")); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-control-flow-patterns",
      children: "TypeScript Control Flow Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === TypeScript guards vs Python isinstance ===\r\nfunction process(input: string | number): string {\r\n  if (typeof input === \"string\") return input.toUpperCase();\r\n  if (typeof input === \"number\") return input.toFixed(2);\r\n  return \"unknown\";\r\n}\r\n\r\n// === Switch (Python: match/case 3.10+) ===\r\ntype Command = \"start\" | \"stop\" | \"restart\" | \"status\";\r\nfunction executeCommand(cmd: Command): string {\r\n  switch (cmd) {\r\n    case \"start\": return \"Starting...\";\r\n    case \"stop\": return \"Stopping...\";\r\n    case \"restart\": return \"Restarting...\";\r\n    case \"status\": return \"Checking status...\";\r\n    default: const _exhaustive: never = cmd; return _exhaustive;\r\n  }\r\n}\r\nconsole.log(executeCommand(\"start\"));\r\n\r\n// === Ternary Operator (Python: conditional expression) ===\r\nconst age = 20;\r\nconst category = age >= 18 ? \"Adult\" : \"Minor\";\r\nconsole.log(category); // Adult\r\n\r\n// === Short-circuit evaluation ===\r\nconst user = { name: \"Alice\", preferences: { theme: \"dark\" } };\r\nconst theme = user.preferences?.theme ?? \"light\";\r\nconsole.log(theme); // dark\r\n\r\n// === Guard Clause Pattern ===\r\nfunction processOrder(order: { status: string; amount: number }): string {\r\n  if (!order) return \"No order\";\r\n  if (order.status === \"cancelled\") return \"Order cancelled\";\r\n  if (order.amount <= 0) return \"Invalid amount\";\r\n  if (order.status === \"pending\") return \"Processing payment...\";\r\n  return `Order ${order.status} for $${order.amount}`;\r\n}\r\n\r\n// === Pattern Matching with Discriminated Unions ===\r\ntype Shape =\r\n  | { kind: \"circle\"; radius: number }\r\n  | { kind: \"rectangle\"; width: number; height: number }\r\n  | { kind: \"triangle\"; base: number; height: number };\r\nfunction area(shape: Shape): number {\r\n  switch (shape.kind) {\r\n    case \"circle\": return Math.PI * shape.radius ** 2;\r\n    case \"rectangle\": return shape.width * shape.height;\r\n    case \"triangle\": return (shape.base * shape.height) / 2;\r\n  }\r\n}\r\nconsole.log(area({ kind: \"circle\", radius: 5 }));\r\n\r\n// === Nullish Coalescing (Python: or) ===\r\nconst score = 0;\r\nconst displayScore = score ?? 100; // 0 (nullish coalescing)\r\nconst displayScore2 = score || 100; // 100 (logical or)\r\n\r\n// === Early Return vs Python elif ===\r\nfunction classify(n: number): string {\r\n  if (n < 0) return \"negative\";\r\n  if (n === 0) return \"zero\";\r\n  if (n > 0 && n < 10) return \"small positive\";\r\n  return \"large positive\";\r\n}\r\n\r\n// === For Loop Control Flow ===\r\nconst matrix = [[1, 2], [3, 4], [5, 6]];\r\nouter: for (let i = 0; i < matrix.length; i++) {\r\n  for (let j = 0; j < matrix[i].length; j++) {\r\n    if (matrix[i][j] === 3) break outer;\r\n  }\r\n}\r\n\r\n// === While loop with sentinel ===\r\nfunction findFirst(arr: number[], predicate: (n: number) => boolean): number | undefined {\r\n  let i = 0;\r\n  while (i < arr.length && !predicate(arr[i])) i++;\r\n  return i < arr.length ? arr[i] : undefined;\r\n}\r\nconsole.log(findFirst([1, 3, 5, 7, 8, 9], (n) => n % 2 === 0)); // 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-flow-control",
      children: "TypeScript Advanced Flow Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Guard Function (Python: guard clause) ===\r\ntype GuardResult<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };\r\nfunction guard<T>(value: T, predicate: (v: T) => boolean, message: string): GuardResult<T> {\r\n  return predicate(value) ? { ok: true, value } : { ok: false, error: new Error(message) };\r\n}\r\n\r\n// === Exhaustive Check (Python: assert_never) ===\r\nfunction assertNever(value: never): never { throw new Error(`Unexpected value: ${value}`); }\r\nfunction exhaustiveCheck(x: never): never { throw new Error(`Unknown variant: ${x}`); }\r\n\r\n// === Control Flow via Monadic Error Handling ===\r\nclass Try<T> {\r\n  private constructor(private value: T | null, private error: Error | null) {}\r\n  static attempt<T>(fn: () => T): Try<T> {\r\n    try { return new Try(fn(), null); } catch (e) { return new Try(null, e as Error); }\r\n  }\r\n  map<R>(fn: (v: T) => R): Try<R> {\r\n    return this.error ? new Try<R>(null, this.error) : Try.attempt(() => fn(this.value!));\r\n  }\r\n  recover(fn: (e: Error) => T): T { return this.error ? fn(this.error) : this.value!; }\r\n  getOr(defaultValue: T): T { return this.error ? defaultValue : this.value!; }\r\n  get(): T { if (this.error) throw this.error; return this.value!; }\r\n}\r\n\r\n// === Lazy Evaluation ===\r\nclass Lazy<T> {\r\n  private computed = false;\r\n  private result!: T;\r\n  constructor(private factory: () => T) {}\r\n  force(): T {\r\n    if (!this.computed) { this.result = this.factory(); this.computed = true; }\r\n    return this.result;\r\n  }\r\n  map<R>(fn: (v: T) => R): Lazy<R> { return new Lazy(() => fn(this.force())); }\r\n}\r\n\r\n// === Promise-based Control Flow ===\r\nasync function retryAsync<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {\r\n  for (let i = 0; i < retries; i++) { try { return await fn(); } catch (e) { if (i === retries - 1) throw e; await new Promise(r => setTimeout(r, delay)); } }\r\n  throw new Error(\"Unreachable\");\r\n}\r\n\r\nasync function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {\r\n  const timer = new Promise<never>((_, reject) => setTimeout(() => reject(new Error(\"Timeout\")), ms));\r\n  return Promise.race([promise, timer]);\r\n}\r\n\r\n// === Coroutine Runner (Python: async/await basic impl) ===\r\ntype Coroutine<T> = Generator<Promise<unknown>, T, unknown>;\r\nfunction runCoroutine<T>(gen: Coroutine<T>): Promise<T> {\r\n  return new Promise((resolve, reject) => {\r\n    const step = (lastValue?: unknown) => {\r\n      try {\r\n        const { value, done } = gen.next(lastValue);\r\n        if (done) resolve(value as T);\r\n        else if (value instanceof Promise) value.then(step, reject);\r\n        else step(value);\r\n      } catch (e) { reject(e); }\r\n    };\r\n    step();\r\n  });\r\n}\r\n\r\n// === Async Pool (Python: asyncio.Semaphore) ===\r\nclass AsyncPool {\r\n  private pending = 0;\r\n  private queue: (() => void)[] = [];\r\n  constructor(private limit: number) {}\r\n  async run<T>(fn: () => Promise<T>): Promise<T> {\r\n    if (this.pending >= this.limit) await new Promise<void>(resolve => this.queue.push(resolve));\r\n    this.pending++;\r\n    try { return await fn(); } finally { this.pending--; this.queue.shift()?.(); }\r\n  }\r\n}\r\n\r\nconst tryResult = Try.attempt(() => JSON.parse('{\"valid\": true}')).map((v: any) => v.valid);\r\nconsole.log(tryResult.getOr(false)); // true\r\n\r\nconst pool = new AsyncPool(2);\r\nconst results2 = await Promise.all([1, 2, 3].map(i => pool.run(async () => {\r\n  await new Promise(r => setTimeout(r, 100));\r\n  return i * 10;\r\n})));\r\nconsole.log(results2); // [10, 20, 30]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "elif"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " provides branching; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "match-case"
        }), " (3.10+) adds structural pattern matching."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chained comparisons like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 < x < 10"
        }), " are idiomatic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "and"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "or"
        }), " short-circuit; ternary ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x if cond else y"
        }), " is an expression."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match-case supports literals, captures, guards, sequences, mappings, and class patterns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The walrus operator can simplify conditions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript uses C-style ternary ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cond ? x : y"
        }), " and does not have chained comparisons or the walrus operator."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Python delimit blocks in control flow statements?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "elif"
        }), " and a separate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " inside an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " block?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print(True and \"hello\" or \"world\")"
        }), " produce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"hello\""
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the wildcard pattern in match-case and why is it useful?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How are chained comparisons more efficient than their expanded form?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Python's ternary syntax differ from TypeScript's?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does TypeScript not have chained comparisons?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that reads a student's numeric score (0-100) and prints a letter grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60) with a descriptive message."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use match-case to implement a simple calculator that accepts \"add 5 3\", \"sub 10 4\", \"mul 6 7\", \"div 15 3\" strings and prints the result. Handle unknown operations and division by zero."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that reads three side lengths and classifies the triangle as equilateral, isosceles, scalene, or invalid (violates triangle inequality). Use chained comparisons."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewrite problem 1 in TypeScript. Use nested ternary operators for the grade logic. Compare readability with the Python version -- which do you prefer?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function that validates a password: must be 8+ characters, contain at least one digit and one uppercase letter. Use short-circuit evaluation to only check the next condition if the previous one passes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a simple state machine for a traffic light. The states are GREEN, YELLOW, RED. Transitions: GREEN -> YELLOW (after 30 seconds), YELLOW -> RED (after 5 seconds), RED -> GREEN (after 25 seconds). Use match-case to implement the transition logic. Accept the current state and elapsed time as input, and output the next state. Include validation for invalid states or negative time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a TypeScript version of the match-case based calculator from Application Problem 2. TypeScript's switch statement cannot destructure strings, so use string splitting and if-else chains instead. Compare the implementation effort and readability of both solutions."
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