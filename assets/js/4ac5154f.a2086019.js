"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2114],{

/***/ 8114
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_02_variables_md_4ac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-02-variables-md-4ac.json
const site_docs_courses_python_programming_02_variables_md_4ac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/02-variables","title":"Chapter 2: Variables, Types, and Operators","description":"Previous Control Flow","source":"@site/docs/courses/python-programming/02-variables.md","sourceDirName":"courses/python-programming","slug":"/python-programming/02-variables","permalink":"/ai-engineering-journey/python-programming/02-variables","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-variables","slug":"/python-programming/02-variables","title":"Chapter 2: Variables, Types, and Operators","sidebar_label":"Chapter 2: Variables, Types, and Operators","sidebar_position":2},"sidebar":"course-python-programming","previous":{"title":"Chapter 1: Introduction to Python","permalink":"/ai-engineering-journey/python-programming/01-introduction"},"next":{"title":"Chapter 3: Control Flow","permalink":"/ai-engineering-journey/python-programming/03-control-flow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/02-variables.md


const frontMatter = {
	id: '02-variables',
	slug: '/python-programming/02-variables',
	title: 'Chapter 2: Variables, Types, and Operators',
	sidebar_label: 'Chapter 2: Variables, Types, and Operators',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Variables, Types, and Operators';

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
  "value": "2.1 Variables and Dynamic Typing",
  "id": "21-variables-and-dynamic-typing",
  "level": 2
}, {
  "value": "TypeScript Parallel: Static Typing",
  "id": "typescript-parallel-static-typing",
  "level": 3
}, {
  "value": "2.2 Basic Types",
  "id": "22-basic-types",
  "level": 2
}, {
  "value": "2.2.1 int",
  "id": "221-int",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "2.2.2 float",
  "id": "222-float",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-1",
  "level": 3
}, {
  "value": "2.2.3 str",
  "id": "223-str",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-2",
  "level": 3
}, {
  "value": "2.2.4 bool",
  "id": "224-bool",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-3",
  "level": 3
}, {
  "value": "2.2.5 NoneType",
  "id": "225-nonetype",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-4",
  "level": 3
}, {
  "value": "2.2.6 complex",
  "id": "226-complex",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-5",
  "level": 3
}, {
  "value": "Type Comparison Summary",
  "id": "type-comparison-summary",
  "level": 3
}, {
  "value": "2.3 Type Conversion",
  "id": "23-type-conversion",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-6",
  "level": 3
}, {
  "value": "2.4 Operators",
  "id": "24-operators",
  "level": 2
}, {
  "value": "2.4.1 Arithmetic Operators",
  "id": "241-arithmetic-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-7",
  "level": 3
}, {
  "value": "2.4.2 Comparison Operators",
  "id": "242-comparison-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-8",
  "level": 3
}, {
  "value": "2.4.3 Logical Operators",
  "id": "243-logical-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-9",
  "level": 3
}, {
  "value": "2.4.4 Assignment Operators",
  "id": "244-assignment-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-10",
  "level": 3
}, {
  "value": "2.4.5 Bitwise Operators",
  "id": "245-bitwise-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-11",
  "level": 3
}, {
  "value": "2.4.6 Identity Operators",
  "id": "246-identity-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-12",
  "level": 3
}, {
  "value": "2.4.7 Membership Operators",
  "id": "247-membership-operators",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-13",
  "level": 3
}, {
  "value": "2.5 Operator Precedence",
  "id": "25-operator-precedence",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-14",
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
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Type System Patterns",
  "id": "typescript-type-system-patterns",
  "level": 3
}, {
  "value": "TypeScript Advanced Variable Types",
  "id": "typescript-advanced-variable-types",
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
        id: "chapter-2-variables-types-and-operators",
        children: "Chapter 2: Variables, Types, and Operators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/01-introduction",
          children: "Introduction to Python"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/03-control-flow",
          children: "Control Flow"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare variables and understand dynamic typing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use all built-in atomic types correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert between types explicitly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply arithmetic, comparison, logical, assignment, bitwise, identity, and membership operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predict operator precedence and associativity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/02-variables.png",
        alt: "Python Data Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Variables & Dynamic Typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "References, naming rules, assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, float, str, bool, NoneType, complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit conversion, implicit promotion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic, comparison, logical, bitwise, identity, membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator Precedence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEMDAS-like hierarchy, parentheses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Variables] --> B[Dynamic Typing]\r\n    B --> C[Basic Types]\r\n    C --> D[Type Conversion]\r\n    D --> E[Arithmetic]\r\n    E --> F[Comparison]\r\n    F --> G[Logical]\r\n    G --> H[Bitwise/Identity/Membership]\r\n    H --> I[Precedence]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-variables-and-dynamic-typing",
      children: "2.1 Variables and Dynamic Typing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python variables are references to objects, not typed containers -- the same name can hold different types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A variable is a name that references an object in memory. Python variables are dynamically typed: the same name can refer to objects of different types over its lifetime."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 42          # x is an int\r\nprint(type(x))  # <class 'int'>\r\n\r\nx = \"hello\"     # x now references a str\r\nprint(type(x))  # <class 'str'>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assignment creates a reference, not a copy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Variables are references, not containers. Two variables can point to the same object, and mutating through one affects the other.\r\nVariables hold pointers to objects:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3]\r\nb = a           # b references the same list\r\nb.append(4)\r\nprint(a)        # [1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Variable names must begin with a letter or underscore, contain only alphanumeric characters and underscores, and are case-sensitive."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "valid = 1\r\n_valid = 2\r\n_ = 3          # conventional \"throwaway\" name\r\ncamelCase = 4  # unconventional in Python (PEP 8 prefers snake_case)\r\nsnake_case = 5 # preferred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-static-typing",
      children: "TypeScript Parallel: Static Typing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript uses static type annotations, so variables cannot change type once declared:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: variables are type-checked at compile time\r\nlet x: number = 42;   // x can only hold numbers\r\n// x = \"hello\";       // Error: Type 'string' is not assignable to type 'number'\r\n\r\n// Inferred typing (TypeScript infers the type)\r\nlet y = \"hello\";      // inferred as string\r\n// y = 42;            // Error: Type 'number' is not assignable to type 'string'\r\n\r\n// Union types allow multiple types\r\nlet z: number | string = 42;\r\nz = \"hello\";          // OK - z can be number or string\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python's dynamic typing offers flexibility but catches type errors only at runtime. TypeScript's static typing catches type mismatches during compilation, before the code ever runs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Reference behavior is identical: both are references\r\nconst a: number[] = [1, 2, 3];\r\nconst b = a;           // b references the same array\r\nb.push(4);\r\nconsole.log(a);        // [1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    subgraph Python[Dynamic Typing - Python]\r\n        P1[\"Declare: x = 42\"] --> P2[\"Runtime: x is int\"]\r\n        P2 --> P3[\"Reassign: x = \\#quot;hello\\#quot;\"]\r\n        P3 --> P4[\"Runtime: x is str\"]\r\n        P4 --> P5[x has no fixed type]\r\n    end\r\n\r\n    subgraph TS[Static Typing - TypeScript]\r\n        T1[\"Declare: let x: number = 42\"] --> T2[\"Compile: type checked\"]\r\n        T2 --> T3[\"Runtime: x is always number\"]\r\n        T3 --> T4[\"Reassign: x = \\#quot;hello\\#quot;\"]\r\n        T4 --> T5[Compile Error before running]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-basic-types",
      children: "2.2 Basic Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python provides six atomic built-in types: int, float, str, bool, NoneType, and complex."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-int",
      children: "2.2.1 int"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integers have arbitrary precision:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = 42\r\nb = 1_000_000       # underscores improve readability\r\nc = 0xFF            # hexadecimal (255)\r\nd = 0b1010          # binary (10)\r\ne = 0o77            # octal (63)\r\nf = 10 ** 100       # googol - huge integer\r\nprint(f)            # 100000000000000000000000000000000...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript numbers: all are 64-bit IEEE 754 floats\r\nlet a: number = 42;\r\nlet b = 1_000_000;    // underscores for readability\r\nlet c = 0xFF;         // hexadecimal (255)\r\nlet d = 0b1010;       // binary (10)\r\nlet e = 0o77;         // octal (63)\r\n\r\n// TypeScript does NOT have arbitrary precision numbers\r\n// BigInt for large integers:\r\nlet f = 10n ** 100n;  // BigInt supports arbitrary precision\r\nconsole.log(f.toString());\r\n\r\n// Python's int can grow without limit\r\n// TypeScript's number is capped at 2^53\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's arbitrary-precision integers can grow to any size limited only by memory. TypeScript's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "number"
      }), " type is a 64-bit float (safe integer up to 2^53), with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BigInt"
      }), " as an alternative for large integers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-float",
      children: "2.2.2 float"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Floating-point numbers are double-precision (64-bit IEEE 754):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "g = 3.14159\r\nh = 1.5e-10         # scientific notation\r\ni = float(\"inf\")    # infinity\r\nj = float(\"nan\")    # Not a Number\r\nprint(0.1 + 0.2)    # 0.30000000000000004 (floating-point error)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Never compare floats with ==. Use math.isclose(a, b) or round to a known precision.\r\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math.isclose()"
        }), " for safe floating-point comparison:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\r\nprint(math.isclose(0.1 + 0.2, 0.3))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-1",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same IEEE 754 doubles\r\nlet g: number = 3.14159;\r\nlet h = 1.5e-10;         // scientific notation\r\nlet i = Infinity;        // infinity\r\nlet j = NaN;             // Not a Number\r\nconsole.log(0.1 + 0.2);  // 0.30000000000000004\r\n\r\n// TypeScript: safe comparison\r\nconst epsilon = 0.000001;\r\nconst isClose = Math.abs((0.1 + 0.2) - 0.3) < epsilon;\r\nconsole.log(isClose);     // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-str",
      children: "2.2.3 str"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strings are immutable sequences of Unicode code points:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name = \"Alice\"\r\ngreeting = 'Hello'          # single or double quotes\r\nmulti = \"\"\"Line one\r\nLine two\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-2",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: strings are also immutable sequences\r\nlet name: string = \"Alice\";\r\nlet greeting = 'Hello';     // single or double quotes\r\nlet multi = `Line one\r\nLine two`;                 // backticks for multi-line\r\n\r\n// TypeScript has template literals (like f-strings):\r\nlet age = 30;\r\nlet message = `${name} is ${age} years old`;  // f-string equivalent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-bool",
      children: "2.2.4 bool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Booleans are a subclass of int. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "True == 1"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "False == 0"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "is_valid = True\r\nprint(is_valid + 2)  # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Falsy values: ", (0,jsx_runtime.jsx)(_components.code, {
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
      }), ". Everything else is truthy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-3",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: booleans are NOT numbers\r\nlet isValid: boolean = true;\r\n// console.log(isValid + 2);  // Error: Operator '+' cannot be applied\r\n\r\n// Falsy values: false, null, undefined, 0, NaN, \"\"\r\n// TypeScript has null AND undefined (Python has only None)\r\nlet val: any = null;\r\nlet notAssigned: undefined = undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "225-nonetype",
      children: "2.2.5 NoneType"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "None"
      }), " represents the absence of a value. It is Python's null:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "result = None\r\nif result is None:\r\n    print(\"No result yet\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-4",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: null and undefined\r\nlet result: null | undefined = null;\r\nif (result === null) {\r\n    console.log(\"No result yet\");\r\n}\r\n\r\n// Python has only None\r\n// TypeScript separates null (explicitly empty) from undefined (not yet assigned)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "226-complex",
      children: "2.2.6 complex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complex numbers with real and imaginary parts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "c = 3 + 4j\r\nprint(c.real, c.imag)  # 3.0 4.0\r\nprint(abs(c))          # 5.0 (magnitude)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-5",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: no built-in complex type (must use library or custom class)\r\n// Python has first-class complex numbers; TypeScript does not\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-comparison-summary",
      children: "Type Comparison Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (arbitrary precision)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "number"
            }), " (53-bit safe) or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bigint"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), " (double)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "number"
            }), " (double)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "str"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), " (subclass of int)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "None"
            }), " (one type)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined"
            }), " (two types)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "complex"
            }), " (built-in)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float(\"inf\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Infinity"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NaN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float(\"nan\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NaN"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-type-conversion",
      children: "2.3 Type Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Explicit conversion uses type constructors like int(); implicit conversion promotes int to float."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explicit conversion uses the type name as a function:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(int(3.99))       # 3 (truncation)\r\nprint(float(\"3.14\"))   # 3.14\r\nprint(str(42))         # \"42\"\r\nprint(bool(0))         # False\r\nprint(bool(\"\"))        # False\r\nprint(bool(\"hello\"))   # True\r\nprint(complex(1, 2))   # (1+2j)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implicit conversion happens in mixed-type operations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "result = 3 + 4.5       # 7.5 (int promoted to float)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Converting a string like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"hello\""
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " raises ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValueError"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "int(\"hello\")  # ValueError: invalid literal for int() with base 10: 'hello'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-6",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: explicit conversion uses functions, not constructors\r\nconsole.log(Math.floor(3.99));        // 3 (like int(3.99))\r\nconsole.log(Number(\"3.14\"));          // 3.14 (like float(\"3.14\"))\r\nconsole.log(String(42));              // \"42\" (like str(42))\r\nconsole.log(Boolean(0));              // false (like bool(0))\r\nconsole.log(Boolean(\"hello\"));        // true (like bool(\"hello\"))\r\n\r\n// Implicit conversion: TypeScript does NOT auto-promote types\r\n// let result = 3 + 4.5;   // Works (number)\r\n// \"3\" + 4 = \"34\"          // String concatenation, NOT addition\r\n// Python: (\"3\" + 4) => TypeError\r\n// TypeScript: \"3\" + 4 => \"34\" (string concatenation wins)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-operators",
      children: "2.4 Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python has seven operator categories: arithmetic, comparison, logical, assignment, bitwise, identity, membership."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-arithmetic-operators",
      children: "2.4.1 Arithmetic Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a, b = 10, 3\r\nprint(a + b)     # 13  addition\r\nprint(a - b)     # 7   subtraction\r\nprint(a * b)     # 30  multiplication\r\nprint(a / b)     # 3.333...  true division\r\nprint(a // b)    # 3   floor division\r\nprint(a % b)     # 1   modulus\r\nprint(a ** b)    # 1000  exponentiation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Floor division rounds toward negative infinity:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(-10 // 3)  # -4 (not -3)\r\nprint(10 // -3)  # -4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-7",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript arithmetic\r\nlet a = 10, b = 3;\r\nconsole.log(a + b);     // 13\r\nconsole.log(a - b);     // 7\r\nconsole.log(a * b);     // 30\r\nconsole.log(a / b);     // 3.333...  true division\r\nconsole.log(Math.floor(a / b));  // 3   floor division (manual)\r\nconsole.log(a % b);     // 1   modulus\r\nconsole.log(a ** b);    // 1000  exponentiation (ES2016+)\r\n\r\n// NO separate // operator - use Math.floor instead\r\n// Python: -10 // 3 = -4 (floor toward negative infinity)\r\n// TypeScript: Math.floor(-10 / 3) = -4 (same result)\r\n\r\n// TypeScript does NOT have Python's chained comparison\r\n// Python: 3 < x < 7\r\n// TypeScript: 3 < x && x < 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-comparison-operators",
      children: "2.4.2 Comparison Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(5 == 5)    # True   equal\r\nprint(5 != 4)    # True   not equal\r\nprint(5 > 3)     # True   greater than\r\nprint(5 < 3)     # False  less than\r\nprint(5 >= 5)    # True   greater or equal\r\nprint(5 <= 4)    # False  less or equal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Comparisons can be chained:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 5\r\nprint(3 < x < 7)   # True  equivalent to (3 < x) and (x < 7)\r\nprint(3 < x > 10)  # False equivalent to (3 < x) and (x > 10)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-8",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same comparison operators (no chaining)\r\nconsole.log(5 === 5);   // true (strict equal - recommended)\r\nconsole.log(5 == 5);    // true (loose equal - avoid)\r\nconsole.log(5 !== 4);   // true (strict not equal)\r\nconsole.log(5 > 3);     // true\r\nconsole.log(5 < 3);     // false\r\nconsole.log(5 >= 5);    // true\r\nconsole.log(5 <= 4);    // false\r\n\r\n// TypeScript uses === and !== instead of == and !=\r\n// Python's == is strict by default; TypeScript needs === to avoid type coercion\r\n\r\n// Chained comparison must use &&:\r\nlet x = 5;\r\nconsole.log(3 < x && x < 7);  // true (Python: 3 < x < 7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-logical-operators",
      children: "2.4.3 Logical Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a, b = True, False\r\nprint(a and b)   # False\r\nprint(a or b)    # True\r\nprint(not a)     # False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "and"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " short-circuit -- they stop evaluating as soon as the result is determined:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def expensive():\r\n    print(\"called\")\r\n    return True\r\n\r\nprint(False and expensive())   # False (expensive() not called)\r\nprint(True or expensive())     # True  (expensive() not called)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "and"
      }), " returns the first falsy operand or the last operand. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " returns the first truthy operand or the last operand:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(0 and 42)   # 0\r\nprint(3 and 42)   # 42\r\nprint(0 or 42)    # 42\r\nprint(3 or 42)    # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-9",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same logical operators (different keywords)\r\nlet a: boolean = true, b: boolean = false;\r\nconsole.log(a && b);  // false\r\nconsole.log(a || b);  // true\r\nconsole.log(!a);      // false\r\n\r\n// Short-circuit works identically\r\nfunction expensive(): boolean {\r\n    console.log(\"called\");\r\n    return true;\r\n}\r\nconsole.log(false && expensive());  // false (expensive() not called)\r\nconsole.log(true || expensive());   // true  (expensive() not called)\r\n\r\n// Truthy/falsy return values work the same:\r\nconsole.log(0 && 42);   // 0\r\nconsole.log(3 && 42);   // 42\r\nconsole.log(0 || 42);   // 42\r\nconsole.log(3 || 42);   // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "244-assignment-operators",
      children: "2.4.4 Assignment Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 10\r\nx += 5    # x = x + 5\r\nx -= 3    # x = x - 3\r\nx *= 2    # x = x * 2\r\nx /= 4    # x = x / 4\r\nx //= 2   # x = x // 2\r\nx %= 3    # x = x % 3\r\nx **= 2   # x = x ** 2\r\nx &= 7    # x = x & 7\r\nx |= 3    # x = x | 3\r\nx ^= 5    # x = x ^ 5\r\nx <<= 1   # x = x << 1\r\nx >>= 2   # x = x >> 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The walrus operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":="
      }), " (PEP 572, Python 3.8+) assigns and returns a value:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "if (n := len(\"hello\")) > 4:\r\n    print(f\"Length {n} exceeds 4\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-10",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same assignment operators\r\n// Python and TypeScript share all arithmetic assignment operators\r\n// TypeScript does NOT have a walrus operator equivalent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "245-bitwise-operators",
      children: "2.4.5 Bitwise Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a, b = 0b1100, 0b1010       # 12, 10\r\nprint(bin(a & b))   # 0b1000 bitwise AND\r\nprint(bin(a | b))   # 0b1110 bitwise OR\r\nprint(bin(a ^ b))   # 0b0110 bitwise XOR\r\nprint(bin(~a))      # -0b1101 bitwise NOT (two's complement)\r\nprint(bin(a << 2))  # 0b110000 left shift\r\nprint(bin(a >> 2))  # 0b11 right shift\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bitwise operators are commonly used for flags and low-level protocols."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-11",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: identical bitwise operators\r\nlet a: number = 0b1100;  // 12\r\nlet b: number = 0b1010;  // 10\r\nconsole.log((a & b).toString(2));   // 1000  AND\r\nconsole.log((a | b).toString(2));   // 1110  OR\r\nconsole.log((a ^ b).toString(2));   // 110   XOR\r\nconsole.log((~a).toString(2));      // ...11110011 (32-bit)\r\nconsole.log((a << 2).toString(2));  // 110000\r\nconsole.log((a >> 2).toString(2));  // 11\r\n\r\n// Python prints unsigned binary; TypeScript prints signed 32-bit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "246-identity-operators",
      children: "2.4.6 Identity Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "is"
      }), " checks object identity (same memory address). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is not"
      }), " is the negation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3]\r\nb = [1, 2, 3]\r\nc = a\r\n\r\nprint(a == b)    # True  (same value)\r\nprint(a is b)    # False (different objects)\r\nprint(a is c)    # True  (same object)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " (not ==) for None checks -- it is faster and more idiomatic.\r\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is None"
        }), " to check for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), ". Never use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "== None"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = None\r\nprint(x is None)     # True\r\nprint(x is not None)  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-12",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: === for value+type, Object.is() for identity\r\n// No built-in identity operator like 'is'\r\n// Use === for null/undefined checks\r\nlet x: any = null;\r\nconsole.log(x === null);   // True\r\n\r\n// For object identity comparison:\r\nconst a = [1, 2, 3];\r\nconst b = [1, 2, 3];\r\nconst c = a;\r\nconsole.log(a === b);   // false (different objects)\r\nconsole.log(a === c);   // true  (same object)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "247-membership-operators",
      children: "2.4.7 Membership Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "in"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "not in"
      }), " test whether a value is in a container:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(3 in [1, 2, 3])       # True\r\nprint(\"e\" in \"hello\")       # True\r\nprint(\"x\" not in \"hello\")   # True\r\nprint(4 in {1, 2, 3})       # False\r\nprint(\"key\" in {\"key\": 1})  # True (checks keys)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-13",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: includes() for arrays, includes() for strings, in for objects\r\nconsole.log([1, 2, 3].includes(3));     // true  (Python: 3 in [1,2,3])\r\nconsole.log(\"hello\".includes(\"e\"));     // true  (Python: \"e\" in \"hello\")\r\nconsole.log(!(\"hello\".includes(\"x\")));  // true  (Python: \"x\" not in \"hello\")\r\nconsole.log(!([1, 2, 3].includes(4)));  // true  (Python: 4 not in [1,2,3])\r\nconsole.log(\"key\" in { key: 1 });       // true  (Python: \"key\" in {\"key\": 1})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-operator-precedence",
      children: "2.5 Operator Precedence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use parentheses to make precedence explicit -- not > and > or is the key ordering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From highest to lowest precedence:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (highest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "**"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "~x"
            }), " (unary)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "//"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "not"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "and"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12 (lowest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "or"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When in doubt, use parentheses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "result = (2 + 3) * 4   # 20, not 2 + 12 = 14\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-14",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript's operator precedence mirrors C-family languages and differs from Python:"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Python[Python Precedence]\r\n        direction LR\r\n        PY[\"not > and > or\"]\r\n    end\r\n    subgraph TS[TypeScript Precedence]\r\n        direction LR\r\n        TY[\"! > && > ||\"]\r\n    end\r\n\r\n    PY --> Note[Same relative ordering]\r\n    TY --> Note"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C/Java"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type + name required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed (32/64 bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double-precision IEEE 754"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same (IEEE 754)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "None"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null (Java), NULL (C)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Variable assignment\r\nx = 42\r\ny = \"hello\"\r\n\r\n# Type conversion\r\nint(\"42\")\r\nfloat(\"3.14\")\r\nstr(100)\r\n\r\n# Common operators\r\nx + y, x - y, x * y, x / y\r\nx // y, x % y, x ** y\r\nx == y, x != y\r\nx and y, x or y, not x\r\nx is y, x is not y\r\nx in y, x not in y\n"
      })
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
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float precision in calculations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.2.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean flags in JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.2.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise flags for permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "is None in input validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.4.6"
          })]
        })]
      })]
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
            children: "Dynamic typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables are references, not containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing reassignment with mutation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use math.isclose()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using == on floats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None check"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is None"
            }), ", never ", (0,jsx_runtime.jsx)(_components.code, {
              children: "== None"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x == None"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool is a subclass of int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expecting True is not 1 in other langs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "and/or stop early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects in second operand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic vs static typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming TS allows type changes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the output of type(42.0)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) <class int>"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) <class float> ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) <class double>"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) <class number>"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which operator checks object identity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) =="
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ="
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) equals()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does bool([]) return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) True"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) False ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) None"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) TypeError"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the result of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3 and 42"
      }), " in Python?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) True"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) False"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 3"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) 42 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.1 + 0.2 == 0.3"
      }), " evaluate to?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) True"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) False ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) TypeError"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 0.30000000000000004"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 2: TypeScript Variable & Type Equivalents\r\n// Python: x = 42; name = \"Alice\"; is_valid = True\r\nconst x: number = 42;\r\nconst name: string = \"Alice\";\r\nconst isValid: boolean = true;\r\n\r\n// Python: dynamic typing lets variables change type\r\n// TypeScript: static typing catches type mismatches at compile time\r\nlet value: number = 10;\r\n// value = \"hello\";  // ❌ TypeScript error: Type 'string' not assignable to 'number'\r\n\r\n// Python: type() vs TypeScript: typeof\r\nconsole.log(typeof x);                 // \"number\"\r\nconsole.log(typeof name);              // \"string\"\r\n\r\n// Python: isinstance(x, int) → TypeScript: typeof / instanceof\r\nconsole.log(typeof x === \"number\");    // true\r\n\r\n// Python: None vs TypeScript: null / undefined\r\nlet maybe: string | null = null;      // union type with null\r\nlet unset: string | undefined;         // undefined by default\r\n\r\n// Python: type hints (not enforced at runtime)\r\nfunction add(a: number, b: number): number {\r\n  return a + b;  // TypeScript enforces types at compile time\r\n}\r\n\r\n// Python: f-strings vs TypeScript: template literals\r\nconst age: number = 30;\r\nconsole.log(`Name: ${name}, Age: ${age}`);\r\n// Equivalent Python: print(f\"Name: {name}, Age: {age}\")\r\n\r\n// Python: chained comparisons are not available in TypeScript\r\n// Python: 1 < x < 10  →  TypeScript: x > 1 && x < 10\r\nconst checkRange = (x: number): boolean => x > 1 && x < 10;\r\n\r\n// Python: walrus operator (:=) has no TypeScript equivalent\r\n// Python: if (n := len(x)) > 0:  →  TypeScript: const n = x.length; if (n > 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Type Inference Helper ===\r\nfunction inferType(v: unknown): string {\r\n  if (v === null) return \"null\";\r\n  if (v === undefined) return \"undefined\";\r\n  if (typeof v === \"number\") return Number.isInteger(v) ? \"integer\" : \"float\";\r\n  if (typeof v === \"string\") return \"string\";\r\n  if (typeof v === \"boolean\") return \"boolean\";\r\n  if (Array.isArray(v)) {\r\n    const types = [...new Set(v.map((e) => typeof e))];\r\n    return `${types.join(\" | \")}[]`;\r\n  }\r\n  return typeof v;\r\n}\r\nconsole.log(inferType(42), inferType(\"hi\"), inferType([1, \"a\"]));\r\n\r\n// === Const / Let / Var Analyzer ===\r\ntype DeclKind = \"const\" | \"let\" | \"var\";\r\ninterface DeclInfo { kind: DeclKind; name: string; type: string; mut: boolean; scoped: boolean }\r\nfunction analyzeDecl(kind: DeclKind, name: string, value: unknown, mut: boolean): DeclInfo {\r\n  return { kind, name, type: inferType(value), mut, scoped: kind !== \"var\" };\r\n}\r\nconsole.log(analyzeDecl(\"const\", \"PI\", 3.14, false));\r\nconsole.log(analyzeDecl(\"let\", \"count\", 0, true));\r\n\r\n// === Union Type Builder ===\r\ntype StringOrNum = string | number;\r\nfunction format(v: StringOrNum): string {\r\n  if (typeof v === \"string\") return `str:${v.length}`;\r\n  return `num:${v.toFixed(2)}`;\r\n}\r\nconsole.log(format(\"hello\"), format(42));\r\n\r\n// === Intersection Type vs Python Multiple Inheritance ===\r\ninterface Named { name: string }\r\ninterface Aged { age: number }\r\ntype Person = Named & Aged;\r\nconst p: Person = { name: \"Alice\", age: 30 };\r\n\r\n// === Literal Union vs Python Enum ===\r\ntype Color = \"red\" | \"green\" | \"blue\";\r\nfunction swatch(c: Color): string { return `Color: ${c}`; }\r\n\r\n// === Readonly vs Frozen Dataclass ===\r\ntype Config = Readonly<{ host: string; port: number }>;\r\nconst cfg: Config = { host: \"localhost\", port: 8080 };\r\n\r\n// === Pick / Omit Helpers ===\r\ninterface User { id: number; name: string; email: string; role: string }\r\ntype PublicUser = Pick<User, \"id\" | \"name\">;\r\ntype Sensitive = Omit<User, \"email\">;\r\nconst pub: PublicUser = { id: 1, name: \"Alice\" };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-type-system-patterns",
      children: "TypeScript Type System Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Type Inference vs. Python Dynamic Typing ===\r\nlet inferred = 42;         // TypeScript infers number\r\nlet annotated: string = \"hello\"; // Explicit annotation\r\n// Python: x = 42; x = \"hello\" (reassignment changes type)\r\n// TypeScript: inferred = \"world\" // Error: Type 'string' not assignable to 'number'\r\n\r\n// === Union Types (Python: Union[str, int]) ===\r\ntype ID = string | number;\r\nfunction lookup(id: ID): string {\r\n  if (typeof id === \"string\") return `User: ${id}`;\r\n  return `User #${id}`;\r\n}\r\nconsole.log(lookup(\"abc\")); // User: abc\r\nconsole.log(lookup(42));    // User #42\r\n\r\n// === Literal Types ===\r\ntype Status = \"active\" | \"inactive\" | \"pending\";\r\nfunction setUserStatus(status: Status): void {\r\n  console.log(`Status set to: ${status}`);\r\n}\r\nsetUserStatus(\"active\"); // OK\r\n// setUserStatus(\"disabled\"); // TypeScript error\r\n\r\n// === Type Aliases (Python: TypeAlias) ===\r\ntype Point = { x: number; y: number };\r\ntype Color = \"red\" | \"green\" | \"blue\";\r\ntype ColoredPoint = Point & { color: Color };\r\nconst cp: ColoredPoint = { x: 10, y: 20, color: \"red\" };\r\n\r\n// === Readonly (Python: Final from typing) ===\r\ninterface Config { readonly apiKey: string; readonly endpoint: string; }\r\nconst config: Config = { apiKey: \"sk-123\", endpoint: \"https://api.example.com\" };\r\n// config.apiKey = \"new-key\"; // Error: Cannot assign to readonly\r\n\r\n// === Optional Properties (Python: Optional) ===\r\ninterface UserProfile { name: string; age?: number; email?: string; }\r\nfunction greet(user: UserProfile): string {\r\n  const age = user.age ?? \"unknown\";\r\n  return `${user.name} (${age})`;\r\n}\r\nconsole.log(greet({ name: \"Alice\", age: 30 }));\r\nconsole.log(greet({ name: \"Bob\" }));\r\n\r\n// === Type Assertions ===\r\nconst rawValue: unknown = \"hello world\";\r\nconst strLength = (rawValue as string).length;\r\nconsole.log(strLength); // 11\r\n\r\n// === Enums (Python: Enum) ===\r\nenum Direction { Up = \"UP\", Down = \"DOWN\", Left = \"LEFT\", Right = \"RIGHT\" }\r\nfunction move(d: Direction): string { return `Moving ${d}`; }\r\nconsole.log(move(Direction.Up));\r\n\r\n// === Generics (Python: TypeVar) ===\r\nfunction first<T>(arr: T[]): T | undefined { return arr[0]; }\r\nconsole.log(first([1, 2, 3])); // 1\r\nconsole.log(first([\"a\", \"b\"])); // \"a\"\r\n\r\n// === Keyof and Indexed Access ===\r\nfunction getProp<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }\r\nconst car = { make: \"Tesla\", model: \"Model 3\", year: 2024 };\r\nconsole.log(getProp(car, \"make\")); // Tesla\r\n// getProp(car, \"color\"); // TypeScript error\r\n\r\n// === Mapped Types ===\r\ntype Readonly2<T> = { readonly [K in keyof T]: T[K] };\r\ntype Partial2<T> = { [K in keyof T]?: T[K] };\r\ntype Point2 = { x: number; y: number };\r\nconst readonlyPoint: Readonly2<Point2> = { x: 10, y: 20 };\r\n// readonlyPoint.x = 5; // Error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-variable-types",
      children: "TypeScript Advanced Variable Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Mapped Types (Python: type transformation) ===\r\ntype Nullable<T> = { [K in keyof T]: T[K] | null };\r\ntype ReadonlyDeep<T> = {\r\n  readonly [K in keyof T]: T[K] extends object ? ReadonlyDeep<T[K]> : T[K];\r\n};\r\ntype PickByValue<T, V> = { [K in keyof T as T[K] extends V ? K : never]: T[K] };\r\ntype OmitByValue<T, V> = { [K in keyof T as T[K] extends V ? never : K]: T[K] };\r\ntype RequiredBy<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: T[P] };\r\n\r\n// === Template Literal Types (Python: f-strings at type level) ===\r\ntype EventName = `on${Capitalize<string>}`;\r\ntype CSSUnit = `${number}px` | `${number}rem` | `${number}em` | `${number}%`;\r\ntype HexColor = `#${string}`;\r\ntype HttpMethod = \"GET\" | \"POST\" | \"PUT\" | \"DELETE\" | \"PATCH\";\r\ntype ApiEndpoint = `/api/${string}`;\r\n\r\n// === Conditional Types (Python: type narrowing) ===\r\ntype IsString<T> = T extends string ? \"yes\" : \"no\";\r\ntype ElementOf<T> = T extends (infer E)[] ? E : T;\r\ntype FunctionResult<T> = T extends (...args: any[]) => infer R ? R : never;\r\n\r\n// === Variadic Tuple Types (Python: *args typed) ===\r\ntype Head<T extends unknown[]> = T extends [infer H, ...unknown[]] ? H : never;\r\ntype Tail<T extends unknown[]> = T extends [unknown, ...infer Rest] ? Rest : never;\r\ntype Last<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never;\r\ntype Concat<A extends unknown[], B extends unknown[]> = [...A, ...B];\r\n\r\n// === Union Distribution (Python: type switching) ===\r\ntype ToArray<T> = T extends unknown ? T[] : never;\r\ntype Stringify<T> = T extends string ? T : T extends number ? `${T}` : never;\r\n\r\n// === Structural Type Testing ===\r\ninterface TypeTest { a: string; b: number; }\r\ntype ExtraKeys = { a: string; b: number; c: boolean };\r\ntype MissingKeys = { a: string };\r\ntype IsSubtype<S, T> = S extends T ? true : false;\r\ntype Test1 = IsSubtype<ExtraKeys, TypeTest>; // true (extra keys allowed)\r\ntype Test2 = IsSubtype<MissingKeys, TypeTest>; // false\r\n\r\n// === Recursive Type (Python: self-referential) ===\r\ntype JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };\r\ntype DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };\r\ntype DeepRequired<T> = { [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K] };\r\n\r\n// === Branded Types for Type Safety ===\r\ntype Branded<T, B> = T & { __brand: B };\r\ntype Email = Branded<string, \"Email\">;\r\ntype Phone = Branded<string, \"Phone\">;\r\nfunction sendEmail(to: Email, body: string): void { console.log(`Email to ${String(to)}: ${body}`); }\r\nfunction createEmail(s: string): Email { return s as Email; }\r\nconst email = createEmail(\"user@example.com\");\r\nsendEmail(email, \"Hello\"); // OK\r\n\r\n// === Type-safe Builder Pattern ===\r\nclass ConfigBuilder {\r\n  private config: Record<string, unknown> = {};\r\n  set<T>(key: string, value: T): this & Record<typeof key, T> { (this.config as any)[key] = value; return this as any; }\r\n  build(): Record<string, unknown> { return { ...this.config }; }\r\n}\r\nconst builder = new ConfigBuilder();\r\nconst cfg = builder.set(\"host\", \"localhost\").set(\"port\", 8080).build();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python is dynamically typed; variables are references to objects."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Core types: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "str"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NoneType"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "complex"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explicit conversion uses type constructors; implicit conversion promotes int to float."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operators span arithmetic, comparison, logical, assignment, bitwise, identity, and membership."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "and"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "or"
        }), " short-circuit; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " checks identity; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in"
        }), " checks membership."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chained comparisons are a unique Python feature."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The walrus operator ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":="
        }), " assigns within expressions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript uses static typing with type annotations, catching errors at compile time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript separates null and undefined where Python only has None."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1 + 0.2"
        }), " not equal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3"
        }), " exactly?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What values are considered falsy in Python?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain short-circuit evaluation with an example."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What operator precedence rule causes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2 ** 3 ** 2"
        }), " to compute 512 rather than 64?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Python's dynamic typing compare to TypeScript's static typing?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does TypeScript use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "==="
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that takes an integer input, then prints whether it is even or odd, positive or negative, and its absolute value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a BMI calculator: weight (kg) / height (m)^2. Use appropriate types and print a health category message."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = 0b1010"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b = 0b1100"
        }), ", write a program that prints the AND, OR, XOR, and left-shift results in binary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function that takes a string and returns whether it contains the letter \"a\". Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in"
        }), " operator. Write the equivalent TypeScript version using ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".includes()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a script that demonstrates the walrus operator by reading lines from a list and printing only those longer than 10 characters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a simple simulated-annealing flag decoder: define a set of bit flags (READ=1, WRITE=2, EXECUTE=4, DELETE=8). Accept an integer permission mask and print which flags are set. Then accept a flag name and toggle it in the mask using bitwise XOR. Use the walrus operator in at least one expression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rewrite the BMI calculator from Application Problem 2 in TypeScript. Add explicit type annotations for all variables. Compare the Python and TypeScript versions -- how does type safety help catch errors? Create a function signature with types for both the input parameters and return value."
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