"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8948],{

/***/ 1989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_10_lambda_md_379_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-10-lambda-md-379.json
const site_docs_courses_python_programming_10_lambda_md_379_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/10-lambda","title":"Chapter 10: Lambda and Functional Programming","description":"Previous Modules and Packages","source":"@site/docs/courses/python-programming/10-lambda.md","sourceDirName":"courses/python-programming","slug":"/python-programming/10-lambda","permalink":"/ai-engineering-journey/python-programming/10-lambda","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-lambda","slug":"/python-programming/10-lambda","title":"Chapter 10: Lambda and Functional Programming","sidebar_label":"Chapter 10: Lambda and Functional Programming","sidebar_position":10},"sidebar":"course-python-programming","previous":{"title":"Chapter 9: Functions","permalink":"/ai-engineering-journey/python-programming/09-functions"},"next":{"title":"Chapter 11: Modules and Packages","permalink":"/ai-engineering-journey/python-programming/11-modules"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/10-lambda.md


const frontMatter = {
	id: '10-lambda',
	slug: '/python-programming/10-lambda',
	title: 'Chapter 10: Lambda and Functional Programming',
	sidebar_label: 'Chapter 10: Lambda and Functional Programming',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Lambda and Functional Programming';

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
  "value": "10.1 Lambda Functions",
  "id": "101-lambda-functions",
  "level": 2
}, {
  "value": "10.2 map()",
  "id": "102-map",
  "level": 2
}, {
  "value": "10.3 filter()",
  "id": "103-filter",
  "level": 2
}, {
  "value": "10.4 reduce()",
  "id": "104-reduce",
  "level": 2
}, {
  "value": "10.5 functools.partial",
  "id": "105-functoolspartial",
  "level": 2
}, {
  "value": "10.6 The operator Module",
  "id": "106-the-operator-module",
  "level": 2
}, {
  "value": "10.7 Function Composition",
  "id": "107-function-composition",
  "level": 2
}, {
  "value": "10.8 When to Use Functional Constructs",
  "id": "108-when-to-use-functional-constructs",
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
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Arrow Functions vs Python Lambdas",
  "id": "arrow-functions-vs-python-lambdas",
  "level": 3
}, {
  "value": "Functional Programming vs Pythonic Style",
  "id": "functional-programming-vs-pythonic-style",
  "level": 3
}, {
  "value": "Advanced Partial Application",
  "id": "advanced-partial-application",
  "level": 3
}, {
  "value": "Performance: Lambda vs Named Function",
  "id": "performance-lambda-vs-named-function",
  "level": 3
}, {
  "value": "Lambda Pitfalls",
  "id": "lambda-pitfalls",
  "level": 3
}, {
  "value": "TypeScript Functional Composition Patterns",
  "id": "typescript-functional-composition-patterns",
  "level": 3
}, {
  "value": "TypeScript Currying &amp; Advanced Functional Patterns",
  "id": "typescript-currying--advanced-functional-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Functional Programming in Depth",
  "id": "typescript-functional-programming-in-depth",
  "level": 3
}, {
  "value": "TypeScript Advanced Functional Patterns",
  "id": "typescript-advanced-functional-patterns",
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
        id: "chapter-10-lambda-and-functional-programming",
        children: "Chapter 10: Lambda and Functional Programming"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/09-functions",
          children: "Functions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/11-modules",
          children: "Modules and Packages"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write lambda functions for concise inline operations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce"
        }), " for functional data processing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create partial functions with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "functools.partial"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator"
        }), " module for common operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compose functions and build functional pipelines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/10-lambda.png",
        alt: "Lambda and Functional Programming"
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
            children: "10.1 Lambda Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lambdas are anonymous single-expression functions — use them where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "def"
            }), " is overkill."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.2 map()"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map()"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "filter()"
            }), " are lazy; list comprehensions often read better."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.3 filter()"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "reduce()"
            }), " cumulatively applies a binary function — explicit loops are often clearer."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.4 reduce()"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "partial()"
            }), " fixes arguments; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator"
            }), " module replaces common lambdas for speed."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.5 functools.partial"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function composition chains transformations; Python supports both left-to-right (pipe) and right-to-left (compose)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.6 The operator Module"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.7 Function Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.8 When to Use Functional Constructs"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S0[Lambda Functions]\r\n    S1[\"map()\"]\r\n    S2[\"filter()\"]\r\n    S3[\"reduce()\"]\r\n    S4[functools.partial]\r\n    S5[The operator Module]\r\n    S6[Function Composition]\r\n    S7[When to Use Functional Constructs]\r\n    S0 --> S1\r\n    S1 --> S2\r\n    S2 --> S3\r\n    S3 --> S4\r\n    S4 --> S5\r\n    S5 --> S6\r\n    S6 --> S7"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-lambda-functions",
      children: "10.1 Lambda Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Lambdas are anonymous single-expression functions — use them where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "def"
        }), " is overkill."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lambda is an anonymous function defined with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lambda"
      }), " keyword:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "lambda arguments: expression\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It can only contain a single expression (no statements):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "square = lambda x: x ** 2\r\nprint(square(5))            # 25\r\n\r\nadd = lambda a, b: a + b\r\nprint(add(3, 4))            # 7\r\n\r\nmultiline = lambda x, y, z: (x + y) * z\r\nprint(multiline(2, 3, 4))   # 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lambdas are most useful where a function is needed temporarily:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "pairs = [(1, \"banana\"), (3, \"apple\"), (2, \"cherry\")]\r\npairs.sort(key=lambda pair: pair[1])  # sort by the string element\r\nprint(pairs)  # [(3, 'apple'), (1, 'banana'), (2, 'cherry')]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Equivalent named function:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sort_key(pair):\r\n    return pair[1]\r\n\r\npairs.sort(key=sort_key)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use a lambda when the function logic is simple and only needed once. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "def"
      }), " for anything complex or reused."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-map",
      children: "10.2 map()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter()"
        }), " are lazy; list comprehensions often read better.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " List comprehensions are often more readable than map/filter — use the functional form only when it improves clarity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "map()"
      }), " applies a function to every element of an iterable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "numbers = [1, 2, 3, 4, 5]\r\nsquared = list(map(lambda x: x ** 2, numbers))\r\nprint(squared)  # [1, 4, 9, 16, 25]\r\n\r\n# Multiple iterables\r\na = [1, 2, 3]\r\nb = [10, 20, 30]\r\nsummed = list(map(lambda x, y: x + y, a, b))\r\nprint(summed)  # [11, 22, 33]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "map()"
      }), " is lazy → it returns an iterator. Wrap with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list()"
      }), " to materialise:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "result = map(str, [1, 2, 3])\r\nprint(result)         # <map object at 0x...>\r\nprint(list(result))   # ['1', '2', '3']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List comprehensions are often more readable than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# These are equivalent:\r\nsquares1 = list(map(lambda x: x ** 2, range(10)))\r\nsquares2 = [x ** 2 for x in range(10)]\r\n\r\nprint(squares1 == squares2)  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-filter",
      children: "10.3 filter()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce()"
        }), " cumulatively applies a binary function — explicit loops are often clearer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "filter()"
      }), " keeps elements for which the function returns truthy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "numbers = [1, 2, 3, 4, 5, 6]\r\nevens = list(filter(lambda x: x % 2 == 0, numbers))\r\nprint(evens)  # [2, 4, 6]\r\n\r\n# Filter out None values\r\nvalues = [0, None, 1, \"\", \"hello\", [], [1], False]\r\ntruthy = list(filter(None, values))  # passing None as function keeps truthy\r\nprint(truthy)  # [1, 'hello', [1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Again, a comprehension is often clearer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "evens2 = [x for x in numbers if x % 2 == 0]\r\nprint(evens == evens2)  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-reduce",
      children: "10.4 reduce()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "partial()"
        }), " fixes arguments; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator"
        }), " module replaces common lambdas for speed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "reduce()"
      }), " applies a binary function cumulatively, reducing the iterable to a single value:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import reduce\r\n\r\nnumbers = [1, 2, 3, 4, 5]\r\ntotal = reduce(lambda a, b: a + b, numbers)\r\nprint(total)  # 15\r\n\r\n# With initial value\r\ntotal_with_init = reduce(lambda a, b: a + b, numbers, 100)\r\nprint(total_with_init)  # 115\r\n\r\n# Factorial\r\nfactorial = reduce(lambda a, b: a * b, range(1, 6))\r\nprint(factorial)  # 120\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tracing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reduce(lambda a, b: a + b, [1, 2, 3, 4])"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "a=1, b=2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "a=3, b=3"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "6"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "a=6, b=4"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "functools.reduce"
      }), ", the function must take two arguments. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reduce"
      }), " is powerful but less readable than explicit loops for many cases:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# reduce\r\nmax_val = reduce(lambda a, b: a if a > b else b, [3, 1, 4, 1, 5, 9])\r\nprint(max_val)  # 9\r\n\r\n# equivalent loop\r\nmax_val = float(\"-inf\")\r\nfor x in [3, 1, 4, 1, 5, 9]:\r\n    if x > max_val:\r\n        max_val = x\r\nprint(max_val)  # 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-functoolspartial",
      children: "10.5 functools.partial"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Function composition chains transformations; Python supports both left-to-right (pipe) and right-to-left (compose)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "partial"
      }), " fixes some arguments of a function, creating a new callable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import partial\r\n\r\ndef power(base, exponent):\r\n    return base ** exponent\r\n\r\nsquare = partial(power, exponent=2)\r\ncube = partial(power, exponent=3)\r\n\r\nprint(square(5))  # 25\r\nprint(cube(3))    # 27\r\n\r\n# Real-world: decimal with fixed precision\r\nfrom decimal import Decimal, ROUND_HALF_UP\r\nround_decimal = partial(Decimal.quantize, exp=Decimal(\"0.01\"), rounding=ROUND_HALF_UP)\r\n# Not quite right → partial on bound method needs care. Better:\r\ndef round_to_2dp(value):\r\n    return Decimal(value).quantize(Decimal(\"0.01\"), rounding=ROUND_HALF_UP)\r\n\r\n# Fixed argument for configuration\r\ndef connect(host, port, timeout, retries):\r\n    print(f\"Connecting to {host}:{port} (timeout={timeout}, retries={retries})\")\r\n\r\nconnect_local = partial(connect, host=\"localhost\", timeout=5, retries=3)\r\nconnect_local(port=8080)   # Connecting to localhost:8080 (timeout=5, retries=3)\r\nconnect_local(port=5432)   # Connecting to localhost:5432 (timeout=5, retries=3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-the-operator-module",
      children: "10.6 The operator Module"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator"
      }), " module provides function equivalents of built-in operators:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from operator import add, mul, itemgetter, attrgetter, methodcaller\r\n\r\n# Instead of lambda a, b: a + b\r\nprint(add(3, 4))    # 7\r\nprint(mul(5, 6))    # 30\r\n\r\n# itemgetter → instead of lambda x: x[0]\r\npeople = [(\"Alice\", 30), (\"Bob\", 25), (\"Charlie\", 35)]\r\nsorted_by_age = sorted(people, key=itemgetter(1))\r\nprint(sorted_by_age)  # [('Bob', 25), ('Alice', 30), ('Charlie', 35)]\r\n\r\n# Multiple indices\r\npoints = [(3, 4, 5), (1, 2, 3), (6, 7, 8)]\r\nprint(itemgetter(0, 2)(points[0]))  # (3, 5)\r\n\r\n# attrgetter → instead of lambda x: x.attribute\r\nfrom collections import namedtuple\r\nPerson = namedtuple(\"Person\", \"name age\")\r\npeople2 = [Person(\"Alice\", 30), Person(\"Bob\", 25), Person(\"Charlie\", 35)]\r\nnames = list(map(attrgetter(\"name\"), people2))\r\nprint(names)  # ['Alice', 'Bob', 'Charlie']\r\n\r\n# methodcaller\r\ns = \"hello world\"\r\nupper = methodcaller(\"upper\")\r\nprint(upper(s))  # HELLO WORLD\r\nsplit = methodcaller(\"split\", \" \")\r\nprint(split(s))  # ['hello', 'world']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-function-composition",
      children: "10.7 Function Composition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Function composition chains functions: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compose(f, g)(x) = f(g(x))"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compose(*funcs):\r\n    \"\"\"Compose functions right-to-left.\"\"\"\r\n    def composed(arg):\r\n        result = arg\r\n        for func in reversed(funcs):\r\n            result = func(result)\r\n        return result\r\n    return composed\r\n\r\ndef add_one(x): return x + 1\r\ndef double(x): return x * 2\r\ndef square(x): return x ** 2\r\n\r\npipeline = compose(square, double, add_one)\r\nprint(pipeline(3))  # square(double(add_one(3))) = square(double(4)) = square(8) = 64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A left-to-right pipeline (like Unix pipes):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def pipe(arg, *funcs):\r\n    \"\"\"Apply functions left-to-right.\"\"\"\r\n    result = arg\r\n    for func in funcs:\r\n        result = func(result)\r\n    return result\r\n\r\nprint(pipe(3, add_one, double, square))  # ((3+1)*2)^2 = 64\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This pattern becomes powerful when combined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "partial"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import partial, reduce\r\n\r\ndef process_data(data):\r\n    pipeline = [\r\n        partial(map, str.upper),\r\n        partial(filter, lambda s: len(s) > 2),\r\n        partial(map, lambda s: f\"[{s}]\"),\r\n        list,\r\n    ]\r\n    return reduce(lambda d, f: f(d), pipeline, data)\r\n\r\nresult = process_data([\"a\", \"hello\", \"bc\", \"world\"])\r\nprint(result)  # ['[HELLO]', '[WORLD]']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-when-to-use-functional-constructs",
      children: "10.8 When to Use Functional Constructs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Construct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preferable Alternative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lambda"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple one-expression function"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "def"
            }), " for multi-line"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform iterable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List comprehension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "filter()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select from iterable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List comprehension with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reduce()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative operation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explicit loop or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sum()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix function arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda with default args"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator"
            }), " functions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Avoid inline lambdas in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sorted"
            }), ", etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda or itemgetter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is a multi-paradigm language. Use functional constructs when they improve readability; use imperative style when it does."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Functional"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Imperative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "map/filter/reduce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for loop + if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable, no side effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concise for simple ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear for complex logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparable (lazy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "square = lambda x: x ** 2\r\nlist(map(str.upper, [\"a\",\"b\"]))\r\nlist(filter(None, [0, 1, None, 2]))\r\nfrom functools import reduce\r\nreduce(lambda a,b: a+b, [1,2,3,4])\n"
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
            children: "map() for feature transforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "filter() for request validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reduce() for log aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "partial() for config presets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the main limitation of lambda?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "no return value"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["single expression only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "no parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slow execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Are map() and filter() eager or lazy?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eager"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["lazy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "depends on Python version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "both"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does reduce() do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "filters elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maps a function"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["cumulatively applies binary function ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sorts elements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What does functools.partial do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "splits a function"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["fixes some function arguments ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates lambdas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "decorates functions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which operator import is equivalent to lambda a,b: a+b?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "operator.mul"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["operator.add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "operator.concat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "operator.sum"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript uses arrow functions ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(args) => expr"
      }), " as the direct equivalent of Python lambdas:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript arrow functions (equivalent to Python lambdas)\r\nconst square = (x: number): number => x * x;\r\nconst add = (a: number, b: number): number => a + b;\r\n\r\n// map equivalent (Python: map(lambda x: x*2, nums))\r\nconst nums: number[] = [1, 2, 3, 4, 5];\r\nconst doubled = nums.map(x => x * 2);  // [2, 4, 6, 8, 10]\r\n\r\n// filter equivalent (Python: filter(lambda x: x > 2, nums))\r\nconst big = nums.filter(x => x > 2);   // [3, 4, 5]\r\n\r\n// reduce equivalent (Python: reduce(lambda a, b: a + b, nums))\r\nconst sum = nums.reduce((acc, x) => acc + x, 0);  // 15\r\n\r\n// partial application via bind and closures\r\nfunction multiply(a: number, b: number): number {\r\n  return a * b;\r\n}\r\nconst doubleTS = multiply.bind(null, 2);\r\nconsole.log(doubleTS(5));  // 10\r\n\r\n// Curried closure (like partial)\r\nconst multiplyBy = (a: number) => (b: number) => a * b;\r\nconst triple = multiplyBy(3);\r\nconsole.log(triple(7));  // 21\r\n\r\n// Method reference equivalent\r\ntype Op = (a: number, b: number) => number;\r\nconst ops: Record<string, Op> = {\r\n  add: (a, b) => a + b,\r\n  mul: (a, b) => a * b\r\n};\r\nconsole.log(ops[\"add\"](3, 4));  // 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arrow-functions-vs-python-lambdas",
      children: "Arrow Functions vs Python Lambdas"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python lambda"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript Arrow"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lambda x: expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x => expr"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lambda a,b: expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(a,b) => expr"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Statements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single expression only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Expression or block ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " binding"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (lexical)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lexical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "filter"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "reduce"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".map()"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: ".filter()"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: ".reduce()"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-programming-vs-pythonic-style",
      children: "Functional Programming vs Pythonic Style"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is not a purely functional language, so idiomatic Python often prefers alternatives:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Lambda style vs Pythonic style\r\n\r\n# 1. Sorting with complex keys\r\ndata = [(\"Alice\", 30), (\"Bob\", 25), (\"Charlie\", 35)]\r\n\r\n# Lambda approach\r\nsorted_by_age = sorted(data, key=lambda x: x[1])\r\n\r\n# operator approach (preferred for simple attribute access)\r\nfrom operator import itemgetter\r\nsorted_by_age = sorted(data, key=itemgetter(1))\r\n\r\n# 2. Conditional logic\r\nnums = [1, 2, 3, 4, 5, 6]\r\n\r\n# Lambda approach\r\nresult = list(map(lambda x: x * 2 if x % 2 == 0 else x * 3, nums))\r\n\r\n# Comprehension approach (more readable)\r\nresult = [x * 2 if x % 2 == 0 else x * 3 for x in nums]\r\n\r\n# 3. Multiple aggregations\r\nrecords = [{\"sales\": 100}, {\"sales\": 200}, {\"sales\": 150}]\r\n\r\n# Functional approach\r\nfrom functools import reduce\r\ntotal = reduce(lambda acc, r: acc + r[\"sales\"], records, 0)\r\n\r\n# Comprehension approach (more pythonic)\r\ntotal = sum(r[\"sales\"] for r in records)\r\n\r\n# 4. Data transformation pipeline\r\n# Lambda pipeline\r\npipeline = lambda data: list(\r\n    map(lambda x: x.upper(),\r\n        filter(lambda x: len(x) > 3, data))\r\n)\r\n\r\n# Comprehension pipeline\r\npipeline = [x.upper() for x in data if len(x) > 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-partial-application",
      children: "Advanced Partial Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Partial with keyword arguments\r\nfrom functools import partial\r\n\r\ndef log_message(level: str, source: str, message: str) -> str:\r\n    return f\"[{level.upper()}] [{source}] {message}\"\r\n\r\ninfo_logger = partial(log_message, \"info\", \"app\")\r\nerror_logger = partial(log_message, \"error\", \"app\")\r\n\r\nprint(info_logger(\"Server started\"))      # [INFO] [app] Server started\r\nprint(error_logger(\"Connection failed\"))  # [ERROR] [app] Connection failed\r\n\r\n# Partial as callback factory\r\ndef make_request(url: str, method: str = \"GET\", timeout: int = 30):\r\n    return f\"{method} {url} (timeout={timeout}s)\"\r\n\r\nget_api = partial(make_request, method=\"GET\", timeout=10)\r\npost_api = partial(make_request, method=\"POST\", timeout=30)\r\nprint(get_api(\"https://api.example.com/users\"))\r\n# GET https://api.example.com/users (timeout=10s)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-lambda-vs-named-function",
      children: "Performance: Lambda vs Named Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import timeit\r\n\r\n# Lambda\r\nlambda_time = timeit.timeit(\r\n    'list(map(lambda x: x * 2, range(1000)))',\r\n    number=10000\r\n)\r\n\r\n# List comprehension\r\ncomp_time = timeit.timeit(\r\n    '[x * 2 for x in range(1000)]',\r\n    number=10000\r\n)\r\n\r\n# Named function\r\ndef double(x):\r\n    return x * 2\r\n\r\nnamed_time = timeit.timeit(\r\n    'list(map(double, range(1000)))',\r\n    globals={'double': double},\r\n    number=10000\r\n)\r\n\r\nprint(f\"Lambda:   {lambda_time:.3f}s\")\r\nprint(f\"Comprehension: {comp_time:.3f}s\")\r\nprint(f\"Named:    {named_time:.3f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["List comprehensions are typically faster than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " with lambdas because they avoid function call overhead. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " with a built-in function (", (0,jsx_runtime.jsx)(_components.code, {
        children: "map(str.upper, items)"
      }), ") can be faster than the equivalent comprehension. Always profile when performance matters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lambda-pitfalls",
      children: "Lambda Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Pitfall 1: Late binding in closures\r\nfuncs = [lambda: i for i in range(5)]\r\nprint([f() for f in funcs])  # [4, 4, 4, 4] not [0, 1, 2, 3, 4]\r\n\r\n# Fix: capture value at creation time\r\nfuncs = [lambda i=i: i for i in range(5)]\r\nprint([f() for f in funcs])  # [0, 1, 2, 3, 4]\r\n\r\n# Pitfall 2: Overusing lambda when def is clearer\r\n# Hard to read:\r\nprocess = lambda items: list(\r\n    filter(lambda x: x > 0,\r\n        map(lambda x: x.strip().lower(), items))\r\n)\r\n\r\n# Better as named function:\r\ndef process(items):\r\n    result = []\r\n    for item in items:\r\n        cleaned = item.strip().lower()\r\n        if cleaned:\r\n            result.append(cleaned)\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 10: TypeScript Arrow Function Equivalents (Python lambdas)\r\n// Python: lambda x: x * 2\r\nconst double = (x: number): number => x * 2;\r\nconsole.log(double(5));  // 10\r\n\r\n// Python: sorted(lst, key=lambda x: x[1])\r\nconst pairs: [string, number][] = [[\"b\", 3], [\"a\", 1], [\"c\", 2]];\r\npairs.sort((a, b) => a[1] - b[1]);\r\nconsole.log(pairs);  // [[\"a\", 1], [\"c\", 2], [\"b\", 3]]\r\n\r\n// Python: map(lambda x: x.upper(), items)\r\nconst words: string[] = [\"hello\", \"world\"];\r\nconst uppercased: string[] = words.map((w) => w.toUpperCase());\r\nconsole.log(uppercased);  // [\"HELLO\", \"WORLD\"]\r\n\r\n// Python: filter(lambda x: x > 0, numbers)\r\nconst nums: number[] = [-1, 0, 3, -2, 5];\r\nconst positive: number[] = nums.filter((n) => n > 0);\r\nconsole.log(positive);  // [3, 5]\r\n\r\n// Python: reduce(lambda a, b: a + b, numbers)\r\nconst sum: number = nums.reduce((acc, n) => acc + n, 0);\r\n\r\n// Python: functools.partial → TypeScript: .bind() or closure\r\nconst multiply = (a: number, b: number): number => a * b;\r\nconst double2 = (x: number): number => multiply(2, x);\r\nconsole.log(double2(5));  // 10\r\n\r\n// Python: operator.itemgetter(1) → TypeScript: destructuring\r\nconst getSecond = <T,>(_: unknown, index: number, arr: T[]): T => arr[index];\r\n// More idiomatic: destructure in callback\r\npairs.forEach(([key, val]) => console.log(key, val));\r\n\r\n// Python: lambda limitations (single expression) — same for arrow functions\r\n// But TypeScript arrow functions can have blocks:\r\nconst safeDivide = (a: number, b: number): number => {\r\n  if (b === 0) throw new Error(\"Division by zero\");\r\n  return a / b;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-functional-composition-patterns",
      children: "TypeScript Functional Composition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: multiple lambdas composed → TypeScript: pipes\r\nconst add = (x: number) => (y: number) => x + y;\r\nconst multiply = (x: number) => (y: number) => x * y;\r\n\r\n// Function composition: (f ∘ g)(x) = f(g(x))\r\nfunction compose<T>(...fns: ((x: T) => T)[]): (x: T) => T {\r\n  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);\r\n}\r\n\r\nconst addThenMultiply = compose(add(2), multiply(3));\r\nconsole.log(addThenMultiply(5));  // (5 * 3) + 2 = 17\r\n\r\n// Python: partial() → TypeScript: arrow function binding\r\nconst pow = (base: number, exp: number): number => base ** exp;\r\nconst square = (x: number): number => pow(x, 2);\r\nconst cube = (x: number): number => pow(x, 3);\r\nconsole.log(square(4), cube(4));  // 16, 64\r\n\r\n// Python: operator functions → TypeScript: explicit functions\r\nconst gt = (a: number) => (b: number) => b > a;\r\nconst greaterThan5 = gt(5);\r\n[1, 6, 3, 8].filter(greaterThan5);  // [6, 8]\r\n\r\n// Python: reduce with lambda → TypeScript: reduce with arrow\r\nconst numbers: number[] = [1, 2, 3, 4, 5];\r\nconst product = numbers.reduce((a, b) => a * b, 1);\r\nconsole.log(product);  // 120\r\n\r\n// Python: sorted with key=lambda → TypeScript: sort with comparator\r\ntype Person = { name: string; age: number };\r\nconst people: Person[] = [\r\n  { name: \"Alice\", age: 30 },\r\n  { name: \"Bob\", age: 25 },\r\n  { name: \"Charlie\", age: 35 },\r\n];\r\npeople.sort((a, b) => a.age - b.age);  // sort by age ascending\r\nconsole.log(people.map((p) => p.name));  // [\"Bob\", \"Alice\", \"Charlie\"]\r\n\r\n// Python: map and filter with lambda → TypeScript: chained array methods\r\nconst result = [1, 2, 3, 4, 5, 6]\r\n  .filter((x) => x % 2 === 0)\r\n  .map((x) => x ** 2);\r\nconsole.log(result);  // [4, 16, 36]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-currying--advanced-functional-patterns",
      children: "TypeScript Currying & Advanced Functional Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: currying with lambda → TypeScript: curried arrow functions\r\nconst curriedAdd = (a: number) => (b: number) => (c: number) => a + b + c;\r\nconsole.log(curriedAdd(1)(2)(3));  // 6\r\n// Python equivalent: lambda a: lambda b: lambda c: a + b + c\r\n\r\n// Python: functools.compose → TypeScript: pipe function\r\nfunction pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {\r\n  return (x: T) => fns.reduce((acc, fn) => fn(acc), x);\r\n}\r\nconst trim = (s: string) => s.trim();\r\nconst lower = (s: string) => s.toLowerCase();\r\nconst truncate = (s: string) => s.slice(0, 10);\r\nconst clean = pipe(trim, lower, truncate);\r\nconsole.log(clean(\"  HELLO WORLD  \"));  // \"hello worl\"\r\n\r\n// Python: filter(None, items) → TypeScript: Boolean constructor\r\nconst mixed2 = [0, 1, \"\", \"hello\", null, undefined, false, 42];\r\nconst truthy = mixed2.filter(Boolean);\r\nconsole.log(truthy);  // [1, \"hello\", 42]\r\n\r\n// Python: sorted with lambda and operator.attrgetter\r\ntype Task = { name: string; priority: number; due: Date };\r\nconst tasks: Task[] = [\r\n  { name: \"Fix bug\", priority: 1, due: new Date(\"2026-01-15\") },\r\n  { name: \"Add feature\", priority: 2, due: new Date(\"2026-02-01\") },\r\n];\r\ntasks.sort((a, b) => a.priority - b.priority || a.due.getTime() - b.due.getTime());\r\n\r\n// Python: functools.partial for callback binding\r\nfunction fetchApi(endpoint: string, params: Record<string, string>): Promise<Response> {\r\n  const url = new URL(endpoint);\r\n  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));\r\n  return fetch(url.toString());\r\n}\r\nconst fetchUsers = (params: Record<string, string>) => fetchApi(\"/api/users\", params);\r\nconst fetchProducts = (params: Record<string, string>) => fetchApi(\"/api/products\", params);\r\n\r\n// Python: map with multiple iterables → TypeScript: Function.apply or zip\r\nfunction elementWise<T>(a: T[], b: T[], fn: (x: T, y: T) => T): T[] {\r\n  return a.map((val, i) => fn(val, b[i]));\r\n}\r\nconsole.log(elementWise([1, 2, 3], [4, 5, 6], (x, y) => x + y));  // [5, 7, 9]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Function Pipeline Composer (Python pipe pattern) ===\r\nclass Pipeline<T> {\r\n  private fns: Array<(x: T) => T> = [];\r\n  add(fn: (x: T) => T): this { this.fns.push(fn); return this; }\r\n  execute(initial: T): T { return this.fns.reduce((acc, fn) => fn(acc), initial); }\r\n}\r\nconst pipe = new Pipeline<number>();\r\npipe.add((x) => x * 2).add((x) => x + 1).add((x) => Math.abs(x));\r\nconsole.log(pipe.execute(-5)); // |(-5*2)+1| = 9\r\n\r\n// === Compose (right-to-left) and Pipe (left-to-right) ===\r\nfunction compose<T>(...fns: Array<(x: T) => T>): (x: T) => T {\r\n  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);\r\n}\r\nfunction piped<T>(...fns: Array<(x: T) => T>): (x: T) => T {\r\n  return (x: T) => fns.reduce((acc, fn) => fn(acc), x);\r\n}\r\nconst add1 = (x: number) => x + 1;\r\nconst double = (x: number) => x * 2;\r\nconst square = (x: number) => x * x;\r\nconst comp = compose(add1, double, square); // square(double(add1(x)))\r\nconst p = piped(add1, double, square);      // square(double(add1(x)))\r\nconsole.log(comp(5), p(5)); // square(double(6)) = 144, same\r\n\r\n// === Partial Applier (functools.partial) ===\r\ntype Fn = (...args: any[]) => any;\r\nfunction partial2<T extends Fn>(fn: T, ...bound: Parameters<T>): (...rest: Parameters<T>) => ReturnType<T> {\r\n  return (...rest: Parameters<T>) => fn(...bound, ...rest);\r\n}\r\nconst greet = (greeting: string, name: string) => `${greeting}, ${name}!`;\r\nconst sayHello = partial2(greet, \"Hello\");\r\nconsole.log(sayHello(\"Alice\")); // Hello, Alice!\r\n\r\n// === Map / Filter / Reduce as Python-style ===\r\nfunction pyMap<T, U>(arr: T[], fn: (x: T) => U): U[] { return arr.map(fn); }\r\nfunction pyFilter<T>(arr: T[], fn: (x: T) => boolean): T[] { return arr.filter(fn); }\r\nfunction pyReduce<T, U>(arr: T[], fn: (acc: U, x: T, i: number) => U, init: U): U {\r\n  return arr.reduce(fn, init);\r\n}\r\nconst nums = [1, 2, 3, 4, 5];\r\nconsole.log(pyMap(pyFilter(nums, (x) => x % 2 === 1), (x) => x * x)); // [1, 9, 25]\r\n\r\n// === Lambda Cache (memoize for closures) ===\r\nfunction memoize<T extends (...args: any[]) => any>(fn: T): T {\r\n  const cache = new Map<string, ReturnType<T>>();\r\n  return ((...args: Parameters<T>) => {\r\n    const key = JSON.stringify(args);\r\n    if (!cache.has(key)) cache.set(key, fn(...args));\r\n    return cache.get(key);\r\n  }) as T;\r\n}\r\nconst fib = memoize((n: number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2));\r\nconsole.log(fib(40)); // 102334155 (fast due to memoization)\r\n\r\n// === Throttle / Debounce (functional utilities) ===\r\nfunction debounce<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {\r\n  let timer: ReturnType<typeof setTimeout>;\r\n  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };\r\n}\r\nfunction throttle<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {\r\n  let last = 0;\r\n  return (...args) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...args); } };\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-functional-programming-in-depth",
      children: "TypeScript Functional Programming in Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Pure Function Utilities ===\r\nconst identity = <T>(x: T): T => x;\r\nconst constant = <T>(x: T) => () => x;\r\nconst apply = <T, R>(fn: (x: T) => R) => (x: T): R => fn(x);\r\n\r\n// === Point-free Style ===\r\ntype UnaryFn<T, R> = (x: T) => R;\r\nconst compose2 = <T, R>(...fns: UnaryFn<any, any>[]): UnaryFn<T, R> =>\r\n  (x: T) => fns.reduceRight((acc, fn) => fn(acc), x) as R;\r\nconst pipe3 = <T, R>(...fns: UnaryFn<any, any>[]): UnaryFn<T, R> =>\r\n  (x: T) => fns.reduce((acc, fn) => fn(acc), x) as R;\r\n\r\n// === Either Monad ===\r\nclass Either<E, A> {\r\n  private constructor(private left?: E, private right?: A) {}\r\n  static left<E, A>(value: E): Either<E, A> { return new Either<E, A>(value, undefined); }\r\n  static right<E, A>(value: A): Either<E, A> { return new Either<E, A>(undefined, value); }\r\n  isLeft(): boolean { return this.left !== undefined; }\r\n  isRight(): boolean { return this.right !== undefined; }\r\n  map<B>(fn: (a: A) => B): Either<E, B> {\r\n    return this.isRight() ? Either.right(fn(this.right!)) : Either.left(this.left!);\r\n  }\r\n  flatMap<B>(fn: (a: A) => Either<E, B>): Either<E, B> {\r\n    return this.isRight() ? fn(this.right!) : Either.left(this.left!);\r\n  }\r\n  fold<B>(leftFn: (e: E) => B, rightFn: (a: A) => B): B {\r\n    return this.isRight() ? rightFn(this.right!) : leftFn(this.left!);\r\n  }\r\n}\r\nfunction safeDivide(a: number, b: number): Either<string, number> {\r\n  return b === 0 ? Either.left(\"Division by zero\") : Either.right(a / b);\r\n}\r\nconst divResult = safeDivide(10, 2).map(x => x * 3).fold(\r\n  err => `Error: ${err}`,\r\n  val => `Result: ${val}`\r\n);\r\nconsole.log(divResult); // \"Result: 15\"\r\n\r\n// === Task/Future Monad ===\r\nclass Task<A> {\r\n  constructor(private run: () => Promise<A>) {}\r\n  static of<A>(value: A): Task<A> { return new Task(() => Promise.resolve(value)); }\r\n  map<B>(fn: (a: A) => B): Task<B> { return new Task(() => this.run().then(fn)); }\r\n  chain<B>(fn: (a: A) => Task<B>): Task<B> { return new Task(() => this.run().then(a => fn(a).run())); }\r\n  async execute(): Promise<A> { return this.run(); }\r\n}\r\nconst task = Task.of(5).map(x => x * 2).chain(x => Task.of(x + 1));\r\ntask.execute().then(console.log); // 11\r\n\r\n// === Transducer Pattern ===\r\ntype Reducer<A, B> = (acc: A, val: B) => A;\r\ntype Transducer<A, B, C> = (next: Reducer<A, C>) => Reducer<A, B>;\r\nfunction mapping<A, B, C>(fn: (x: B) => C): Transducer<A, B, C> {\r\n  return (next: Reducer<A, C>) => (acc: A, val: B) => next(acc, fn(val));\r\n}\r\nfunction filtering<A, B>(pred: (x: B) => boolean): Transducer<A, B, B> {\r\n  return (next: Reducer<A, B>) => (acc: A, val: B) => pred(val) ? next(acc, val) : acc;\r\n}\r\nfunction transduce<A, B, C>(xf: Transducer<A, B, C>, reducer: Reducer<A, C>, initial: A, input: B[]): A {\r\n  const tr = xf(reducer);\r\n  return input.reduce(tr, initial);\r\n}\r\nconst isEven2 = (x: number) => x % 2 === 0;\r\nconst double3 = (x: number) => x * 2;\r\nconst sum3 = (acc: number, val: number) => acc + val;\r\nconst result2 = transduce(mapping(double3), sum3, 0, [1, 2, 3, 4, 5, 6]);\r\nconsole.log(result2); // 42 (2+4+6+8+10+12)\r\n\r\n// === Applicative Functor ===\r\nclass ApplicativeBox<T> {\r\n  constructor(private value: T) {}\r\n  static of<T>(v: T): ApplicativeBox<T> { return new ApplicativeBox(v); }\r\n  map<R>(fn: (x: T) => R): ApplicativeBox<R> { return new ApplicativeBox(fn(this.value)); }\r\n  ap<R>(fn: ApplicativeBox<(x: T) => R>): ApplicativeBox<R> { return new ApplicativeBox(fn.value(this.value)); }\r\n}\r\nconst addNums = (a: number) => (b: number) => a + b;\r\nconst apResult = ApplicativeBox.of(3).map(addNums).ap(ApplicativeBox.of(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-functional-patterns",
      children: "TypeScript Advanced Functional Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Function Composition Pipeline ===\r\ntype Fn<T, R> = (x: T) => R;\r\nconst compose = <T, R>(...fns: Fn<any, any>[]): Fn<T, R> =>\r\n  (x: T) => fns.reduceRight((acc, fn) => fn(acc), x) as R;\r\nconst pipe2 = <T, R>(...fns: Fn<any, any>[]): Fn<T, R> =>\r\n  (x: T) => fns.reduce((acc, fn) => fn(acc), x) as R;\r\n\r\nconst double2 = (x: number) => x * 2;\r\nconst increment = (x: number) => x + 1;\r\nconst toString = (x: number) => String(x);\r\nconst processNumber = compose(String, double2, increment);\r\nconsole.log(processNumber(5)); // \"12\"\r\n\r\n// === Currying ===\r\nconst curry2 = <A, B, R>(fn: (a: A, b: B) => R) => (a: A) => (b: B) => fn(a, b);\r\nconst add2 = curry2((a: number, b: number) => a + b);\r\nconst add5 = add2(5);\r\nconsole.log(add5(3)); // 8\r\n\r\n// === Functor Pattern ===\r\ninterface Functor<T> { map<R>(fn: (x: T) => R): Functor<R> }\r\nclass Box<T> implements Functor<T> {\r\n  constructor(private value: T) {}\r\n  map<R>(fn: (x: T) => R): Box<R> { return new Box(fn(this.value)); }\r\n  fold<R>(fn: (x: T) => R): R { return fn(this.value); }\r\n}\r\nconst result = new Box(5).map(x => x * 2).map(x => x + 1).fold(x => `Value: ${x}`);\r\nconsole.log(result); // \"Value: 11\"\r\n\r\n// === Monad Pattern ===\r\nclass Maybe<T> {\r\n  private constructor(private value: T | null) {}\r\n  static just<T>(v: T): Maybe<T> { return new Maybe(v); }\r\n  static nothing<T>(): Maybe<T> { return new Maybe<T>(null); }\r\n  map<R>(fn: (x: T) => R): Maybe<R> {\r\n    return this.value === null ? Maybe.nothing() : Maybe.just(fn(this.value));\r\n  }\r\n  flatMap<R>(fn: (x: T) => Maybe<R>): Maybe<R> {\r\n    return this.value === null ? Maybe.nothing() : fn(this.value);\r\n  }\r\n  getOrElse(defaultVal: T): T { return this.value ?? defaultVal; }\r\n}\r\nconst safeDiv = (a: number, b: number): Maybe<number> =>\r\n  b === 0 ? Maybe.nothing() : Maybe.just(a / b);\r\nconsole.log(safeDiv(10, 2).map(x => x * 3).getOrElse(0)); // 15\r\n\r\n// === Partial Application ===\r\nconst partial2 = <T extends unknown[], R>(fn: (...args: T) => R, ...args: Partial<T>) =>\r\n  (...rest: T) => fn(...args, ...rest) as R;\r\n\r\n// === Throttle / Debounce ===\r\nfunction debounce<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {\r\n  let timer: ReturnType<typeof setTimeout>;\r\n  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };\r\n}\r\nfunction throttle<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {\r\n  let last = 0;\r\n  return (...args) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...args); } };\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lambdas are anonymous, single-expression functions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "map()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter()"
        }), " are lazy; list comprehensions often replace both."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "reduce()"
        }), " accumulates values cumulatively."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "partial()"
        }), " fixes function arguments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "operator"
        }), " module provides function forms of built-in operations."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function composition chains transformations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the limitations of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lambda"
        }), " compared to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "def"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map()"
        }), " differ from a list comprehension?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce(lambda a, b: a if a > b else b, numbers)"
        }), " compute?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator.itemgetter"
        }), " instead of a lambda?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compose(f, g)(x)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pipe(x, f, g)"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter"
        }), " to: given a list of strings, convert to uppercase and keep only those that start with a vowel. Then write the same with list comprehensions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce"
        }), " to compute the product of all numbers in a list. Then implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatten"
        }), " using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce(operator.add, [[1, 2], [3, 4], [5, 6]], [])"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "multiply_by(n)"
        }), " function using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "partial"
        }), ". Then use it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " to multiply every element of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[1, 2, 3, 4, 5]"
        }), " by 3, 5, and 10 in three separate calls."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a simple query pipeline for a list of dictionaries representing employee records. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "partial"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reduce"
      }), " to build composable query operations: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select(fields)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "where(predicate)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order_by(key, reverse)"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aggregate(func)"
      }), ". The pipeline should process data lazily where possible and support chaining: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query(data) | select([\"name\", \"salary\"]) | where(lambda r: r[\"salary\"] > 50000) | order_by(\"salary\")"
      }), "."]
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