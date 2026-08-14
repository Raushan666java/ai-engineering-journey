"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3846],{

/***/ 17737
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_09_functions_md_5a8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-09-functions-md-5a8.json
const site_docs_courses_python_programming_09_functions_md_5a8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/09-functions","title":"Chapter 9: Functions","description":"Previous Lambda and Functional Programming","source":"@site/docs/courses/python-programming/09-functions.md","sourceDirName":"courses/python-programming","slug":"/python-programming/09-functions","permalink":"/ai-engineering-journey/python-programming/09-functions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-functions","slug":"/python-programming/09-functions","title":"Chapter 9: Functions","sidebar_label":"Chapter 9: Functions","sidebar_position":9},"sidebar":"course-python-programming","previous":{"title":"Chapter 8: Dictionaries","permalink":"/ai-engineering-journey/python-programming/08-dictionaries"},"next":{"title":"Chapter 10: Lambda and Functional Programming","permalink":"/ai-engineering-journey/python-programming/10-lambda"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/09-functions.md


const frontMatter = {
	id: '09-functions',
	slug: '/python-programming/09-functions',
	title: 'Chapter 9: Functions',
	sidebar_label: 'Chapter 9: Functions',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Functions';

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
  "value": "9.1 Function Definition and Calling",
  "id": "91-function-definition-and-calling",
  "level": 2
}, {
  "value": "9.2 Arguments and Parameters",
  "id": "92-arguments-and-parameters",
  "level": 2
}, {
  "value": "9.2.1 Positional Arguments",
  "id": "921-positional-arguments",
  "level": 3
}, {
  "value": "9.2.2 Keyword Arguments",
  "id": "922-keyword-arguments",
  "level": 3
}, {
  "value": "9.2.3 Default Parameter Values",
  "id": "923-default-parameter-values",
  "level": 3
}, {
  "value": "9.2.4 *args → Variable Positional Arguments",
  "id": "924-args--variable-positional-arguments",
  "level": 3
}, {
  "value": "9.2.5 **kwargs → Variable Keyword Arguments",
  "id": "925-kwargs--variable-keyword-arguments",
  "level": 3
}, {
  "value": "9.2.6 Argument Unpacking",
  "id": "926-argument-unpacking",
  "level": 3
}, {
  "value": "9.2.7 Parameter Ordering",
  "id": "927-parameter-ordering",
  "level": 3
}, {
  "value": "9.3 Return Values",
  "id": "93-return-values",
  "level": 2
}, {
  "value": "9.4 Docstrings",
  "id": "94-docstrings",
  "level": 2
}, {
  "value": "9.5 Scope and the LEGB Rule",
  "id": "95-scope-and-the-legb-rule",
  "level": 2
}, {
  "value": "9.6 Type Annotations",
  "id": "96-type-annotations",
  "level": 2
}, {
  "value": "9.7 Nested Functions and Closures",
  "id": "97-nested-functions-and-closures",
  "level": 2
}, {
  "value": "9.8 First-Class Functions",
  "id": "98-first-class-functions",
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
  "value": "Python vs TypeScript Functions",
  "id": "python-vs-typescript-functions",
  "level": 3
}, {
  "value": "TypeScript Function Overloads &amp; Advanced Patterns",
  "id": "typescript-function-overloads--advanced-patterns",
  "level": 3
}, {
  "value": "TypeScript Callback &amp; Async Function Patterns",
  "id": "typescript-callback--async-function-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Advanced Patterns",
  "id": "typescript-advanced-patterns",
  "level": 3
}, {
  "value": "TypeScript Function Composition &amp; Pipeline",
  "id": "typescript-function-composition--pipeline",
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
        id: "chapter-9-functions",
        children: "Chapter 9: Functions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/08-dictionaries",
          children: "Dictionaries"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/10-lambda",
          children: "Lambda and Functional Programming"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and call functions with various parameter types"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use positional, keyword, default, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*args"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**kwargs"
        }), " parameters"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand and apply the LEGB scope resolution rule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write docstrings and type annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create nested functions and closures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predict the behaviour of mutable default arguments"
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
        href: "../../assets/images/lessons/python-programming/09-functions/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/09-functions/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/09-functions/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/09-functions/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/09-functions/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/09-functions/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/09-functions.png",
        alt: "Function Types"
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
            children: "9.1 Function Definition and Calling"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Functions are defined with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "def"
            }), "; calling a function creates a local scope."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.2 Arguments and Parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*args"
            }), " for variable positional args, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**kwargs"
            }), " for keyword args, and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "None"
            }), " for mutable defaults."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.3 Return Values"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEGB rule: Local → Enclosing → Global → Built-in resolves variable names."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.4 Docstrings"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closures capture enclosing variables by reference — watch out for late-binding in loops."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.5 Scope and the LEGB Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type annotations document expected types; mypy checks them statically."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.6 Type Annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.7 Nested Functions and Closures"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.8 First-Class Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    S0[Function Definition and Calling]\n    S1[Arguments and Parameters]\n    S2[Return Values]\n    S3[Docstrings]\n    S4[Scope and the LEGB Rule]\n    S5[Type Annotations]\n    S6[Nested Functions and Closures]\n    S7[First-Class Functions]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n    S6 --> S7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-function-definition-and-calling",
      children: "9.1 Function Definition and Calling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Functions are defined with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "def"
        }), "; calling a function creates a local scope."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Functions are defined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "def"
      }), " and called with parentheses:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def greet(name):\n    \"\"\"Return a greeting string.\"\"\"\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))  # Hello, Alice!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Functions without an explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "None"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def say_hello(name):\n    print(f\"Hello, {name}!\")\n\nresult = say_hello(\"Bob\")   # Hello, Bob!\nprint(result)                # None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-arguments-and-parameters",
      children: "9.2 Arguments and Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*args"
        }), " for variable positional args, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**kwargs"
        }), " for keyword args, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " for mutable defaults.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Mutable default arguments are evaluated once at definition time — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " and create a new object each call."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "921-positional-arguments",
      children: "9.2.1 Positional Arguments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arguments are matched to parameters by position:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def add(a, b, c):\n    return a + b + c\n\nprint(add(1, 2, 3))  # 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "922-keyword-arguments",
      children: "9.2.2 Keyword Arguments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arguments can be specified by parameter name:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(add(b=2, a=1, c=3))  # 6\nprint(add(1, c=3, b=2))    # 6  (positional before keyword)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Positional arguments must precede keyword arguments:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "add(a=1, 2, 3)   # SyntaxError: positional argument follows keyword argument\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "923-default-parameter-values",
      children: "9.2.3 Default Parameter Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(5))       # 25  (default exponent)\nprint(power(5, 3))    # 125\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Default arguments are evaluated once at definition time, not at call time:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def append_to(element, target=[]):\n    target.append(element)\n    return target\n\nprint(append_to(1))   # [1]\nprint(append_to(2))   # [1, 2]  → the default list is shared!\n\n# CORRECT pattern\ndef append_to(element, target=None):\n    if target is None:\n        target = []\n    target.append(element)\n    return target\n\nprint(append_to(1))   # [1]\nprint(append_to(2))   # [2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "924-args--variable-positional-arguments",
      children: "9.2.4 *args → Variable Positional Arguments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "*args"
      }), " captures extra positional arguments as a tuple:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sum_all(*numbers):\n    print(type(numbers))  # <class 'tuple'>\n    return sum(numbers)\n\nprint(sum_all(1, 2, 3, 4, 5))  # 15\n\ndef log(level, *messages):\n    for msg in messages:\n        print(f\"[{level}] {msg}\")\n\nlog(\"INFO\", \"Starting\", \"Processing\", \"Done\")\n# [INFO] Starting\n# [INFO] Processing\n# [INFO] Done\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "925-kwargs--variable-keyword-arguments",
      children: "9.2.5 **kwargs → Variable Keyword Arguments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "**kwargs"
      }), " captures extra keyword arguments as a dictionary:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_profile(name, **details):\n    print(f\"Name: {name}\")\n    for key, value in details.items():\n        print(f\"  {key}: {value}\")\n\ncreate_profile(\"Alice\", age=30, city=\"NYC\", occupation=\"Engineer\")\n# Name: Alice\n#   age: 30\n#   city: NYC\n#   occupation: Engineer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "926-argument-unpacking",
      children: "9.2.6 Argument Unpacking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " unpacks iterables; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**"
      }), " unpacks dictionaries:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def point(x, y, z):\n    return f\"({x}, {y}, {z})\"\n\ncoords = [10, 20, 30]\nprint(point(*coords))   # (10, 20, 30)\n\nparams = {\"x\": 5, \"y\": 15, \"z\": 25}\nprint(point(**params))  # (5, 15, 25)\n\n# Combined\nvalues = [1, 2]\nprint(point(*values, z=3))  # (1, 2, 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "927-parameter-ordering",
      children: "9.2.7 Parameter Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The complete parameter order is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def func(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), " separates positional-only (left) from positional-or-keyword (right)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " separates positional-or-keyword (left) from keyword-only (right)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def divide(a, b, /):\n    \"\"\"a and b are positional-only.\"\"\"\n    return a / b\n\nprint(divide(10, 3))   # 3.333...\n# divide(a=10, b=3)     # TypeError\n\ndef greet(*, name, greeting=\"Hello\"):\n    \"\"\"name and greeting are keyword-only.\"\"\"\n    return f\"{greeting}, {name}!\"\n\nprint(greet(name=\"Alice\"))  # Hello, Alice!\n# greet(\"Alice\")              # TypeError\n\ndef process(a, b, /, c, d, *, e, f):\n    return a + b + c + d + e + f\n\nprint(process(1, 2, 3, 4, e=5, f=6))  # 21\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-return-values",
      children: "9.3 Return Values"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " LEGB rule: Local → Enclosing → Global → Built-in resolves variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functions can return multiple values as a tuple:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def stats(numbers):\n    return min(numbers), max(numbers), sum(numbers) / len(numbers)\n\nminimum, maximum, average = stats([1, 2, 3, 4, 5])\nprint(minimum, maximum, average)  # 1 5 3.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Type annotation for return value (", (0,jsx_runtime.jsx)(_components.code, {
        children: "->"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def factorial(n: int) -> int:\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-docstrings",
      children: "9.4 Docstrings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Closures capture enclosing variables by reference — watch out for late-binding in loops."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docstrings document the function's purpose, parameters, and return value:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fibonacci(n: int) -> int:\n    \"\"\"Return the nth Fibonacci number.\n    \n    Args:\n        n: A non-negative integer.\n        \n    Returns:\n        The nth Fibonacci number where F(0)=0, F(1)=1.\n        \n    Raises:\n        ValueError: If n is negative.\n    \"\"\"\n    if n < 0:\n        raise ValueError(\"n must be non-negative\")\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n\nhelp(fibonacci)  # prints the docstring\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-scope-and-the-legb-rule",
      children: "9.5 Scope and the LEGB Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Type annotations document expected types; mypy checks them statically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python resolves variable names following the LEGB order:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L"
        }), "ocal → function scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E"
        }), "nclosing → outer function scope (for nested functions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G"
        }), "lobal → module level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B"
        }), "uilt-in → Python's built-in namespace"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = \"global\"         # G\n\ndef outer():\n    x = \"enclosing\"  # E\n    \n    def inner():\n        x = \"local\"  # L\n        print(x)\n    \n    inner()\n    print(x)\n\nouter()\nprint(x)\n# local\n# enclosing\n# global\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "global"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nonlocal"
      }), " keywords modify variables in outer scopes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1\n\ndef make_counter():\n    count = 0\n    \n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    \n    return increment\n\nc = make_counter()\nprint(c())  # 1\nprint(c())  # 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nonlocal"
      }), ", assignment in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inner"
      }), " creates a new local variable rather than modifying the enclosing scope's variable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-type-annotations",
      children: "9.6 Type Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Type annotations are not enforced at runtime — use mypy or pyright for static type checking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Type hints document expected types (not enforced at runtime):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def process(name: str, age: int = 0, *, verbose: bool = False) -> str:\n    if verbose:\n        print(f\"Processing {name}, age {age}\")\n    return f\"Hello, {name}\"\n\n# Union types\nfrom typing import Union, Optional, List, Dict, Tuple, Any\n\ndef parse(value: Union[int, str]) -> Optional[int]:\n    if isinstance(value, int):\n        return value\n    if value.isdigit():\n        return int(value)\n    return None\n\n# Python 3.10+ syntax\ndef parse_310(value: int | str) -> int | None:\n    if isinstance(value, int):\n        return value\n    if value.isdigit():\n        return int(value)\n    return None\n\n# Collections\ndef total(values: list[int]) -> int:\n    return sum(values)\n\ndef lookup(data: dict[str, int]) -> tuple[str, int] | None:\n    for k, v in data.items():\n        if v > 10:\n            return k, v\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Type checking is performed by external tools like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mypy"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pyright"
      }), ", not by the Python interpreter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-nested-functions-and-closures",
      children: "9.7 Nested Functions and Closures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A closure is a function that captures variables from its enclosing scope:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def make_multiplier(factor: float):\n    \"\"\"Return a function that multiplies its argument by factor.\"\"\"\n    def multiplier(x: float) -> float:\n        return x * factor\n    return multiplier\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))    # 10\nprint(triple(5))    # 15\nprint(double(3.5))  # 7.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Closures capture variables, not values. Late binding:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def make_functions():\n    funcs = []\n    for i in range(5):\n        funcs.append(lambda: i)  # captures i by reference\n    return funcs\n\nfor f in make_functions():\n    print(f(), end=\" \")   # 4 4 4 4 4  → all see i=4\n\n# Fix: capture the current value\ndef make_functions_fixed():\n    funcs = []\n    for i in range(5):\n        funcs.append(lambda i=i: i)  # default arg captures value\n    return funcs\n\nfor f in make_functions_fixed():\n    print(f(), end=\" \")   # 0 1 2 3 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "98-first-class-functions",
      children: "9.8 First-Class Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functions are first-class objects → they can be assigned, passed, and returned:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def square(x):\n    return x ** 2\n\nf = square         # assign\nprint(f(5))        # call via reference: 25\n\ndef apply(func, value):\n    return func(value)\n\nprint(apply(square, 4))  # 16\n\ndef get_operation(op):\n    if op == \"square\":\n        return square\n    elif op == \"cube\":\n        return lambda x: x ** 3\n    \ng = get_operation(\"cube\")\nprint(g(3))  # 27\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "def"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lambda"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Statements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single expression only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex/reusable logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple one-off operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit or None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def greet(name):\n    return f\"Hello, {name}\"\n\ndef log(level, *messages, **opts):\n    for m in messages:\n        print(f\"[{level}] {m}\")\n\n# LEGB demo\nx = \"global\"\ndef outer():\n    x = \"enclosing\"\n"
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
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route handler functions in FastAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom aggregation functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config loading with *args/**kwargs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure-based retry wrappers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the LEGB order of scope resolution?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Local, Enclosing, Global, Built-in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local, Global, Enclosing, Built-in"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in, Global, Enclosing, Local"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global, Local, Enclosing, Built-in"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*args"
      }), " capture?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keyword-only args"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["positional args as tuple ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "default args"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nothing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Why avoid mutable default arguments?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "they are slow"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["they are evaluated once and shared ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "they raise SyntaxError"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "they cannot be type-annotated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nonlocal"
      }), " do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates a global variable"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["modifies enclosing scope variable ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates a local variable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deletes a variable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is a closure?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a function with type annotations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a function capturing enclosing variables ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a lambda expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a class method"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript functions share many concepts with Python but differ in syntax:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Parameters: required, optional, default, rest\nfunction greet(\n  name: string,\n  greeting: string = \"Hello\",       // default parameter\n  title?: string,                    // optional parameter\n  ...tags: string[]                  // rest parameter (like *args)\n): string {\n  const prefix = title ? `${title} ` : \"\";\n  return `${greeting}, ${prefix}${name}!`;\n}\nconsole.log(greet(\"Alice\"));                   // Hello, Alice!\nconsole.log(greet(\"Bob\", \"Hi\", \"Dr.\"));        // Hi, Dr. Bob!\nconsole.log(greet(\"Charlie\", \"Hey\", \"Mr.\", \"guest\", \"vip\"));\n// Hey, Mr. Charlie!\n\n// Arrow functions (like lambdas)\nconst square = (x: number): number => x * x;\nconst add = (a: number, b: number): number => a + b;\n\n// TypeScript scope: similar to LEGB\nlet globalVar = \"global\";\nfunction outer(): void {\n  let outerVar = \"outer\";\n  function inner(): void {\n    let innerVar = \"inner\";\n    console.log(globalVar);  // accesses global\n    console.log(outerVar);   // closure over outer\n  }\n  inner();\n}\n\n// Closures in TypeScript\nfunction makeCounter(start: number = 0): () => number {\n  let count = start;\n  return () => count++;  // captures count by reference\n}\nconst counter = makeCounter(10);\nconsole.log(counter());  // 10\nconsole.log(counter());  // 11\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-functions",
      children: "Python vs TypeScript Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Default args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def f(x=5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "function f(x: number = 5)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable args"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*args"
            }), " (tuple)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "...args: T[]"
            }), " (array)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keyword args"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "**kwargs"
            }), " (dict)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructured object param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda"
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
            children: "Type hints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required types (strict)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doc in body"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Docstring ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\"\"...\"\"\""
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JSDoc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/** ... */"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lambda"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "def"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "() => {}"
            }), " arrow function"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-function-overloads--advanced-patterns",
      children: "TypeScript Function Overloads & Advanced Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python has *args → TypeScript: rest parameters\nfunction sumAll(...numbers: number[]): number {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));  // 10\n\n// Python: **kwargs → TypeScript: destructured object parameter\nfunction createUser(name: string, options: { age?: number; email?: string }): string {\n  const age = options.age ?? \"unknown\";\n  const email = options.email ?? \"no email\";\n  return `${name} (${age}) - ${email}`;\n}\nconsole.log(createUser(\"Alice\", { age: 30, email: \"alice@x.com\" }));\n\n// Python: positional-only (/) and keyword-only (*) → TypeScript\nfunction divide(dividend: number, divisor: number): number {\n  // No positional-only distinction in TypeScript\n  return dividend / divisor;\n}\n// Python: def divide(dividend, divisor, /):\n\n// Python: default argument evaluation (beware mutable defaults)\n// TypeScript: same issue with default objects\nfunction addItem(item: string, list: string[] = []): string[] {\n  list.push(item);\n  return list;\n}\n// Each call without list creates a new default array (same as Python with None)\n\n// Python: nonlocal → TypeScript: closures work the same\nfunction makeMultiplier(factor: number): (x: number) => number {\n  return (x: number) => x * factor;  // captures factor\n}\n\n// Python: recursion with type hints\nfunction factorial(n: number): number {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\n// Python: function annotations → TypeScript: compulsory types\nfunction process(value: string | number): string {\n  if (typeof value === \"string\") return value.toUpperCase();\n  return value.toFixed(2);  // TypeScript narrows type in each branch\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-callback--async-function-patterns",
      children: "TypeScript Callback & Async Function Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: function as argument → TypeScript: callback\nfunction processArray<T, U>(\n  items: T[],\n  callback: (item: T, index: number) => U\n): U[] {\n  return items.map(callback);\n}\nconst doubled3 = processArray([1, 2, 3], (x) => x * 2);\n\n// Python: generator vs TypeScript: callback pattern\nfunction asyncSequence<T>(\n  items: T[],\n  delay: number,\n  callback: (item: T, idx: number) => void\n): void {\n  items.forEach((item, i) => {\n    setTimeout(() => callback(item, i), delay * i);\n  });\n}\n\n// Python: nested functions → TypeScript: closures\nfunction createLogger(prefix: string) {\n  return {\n    info: (msg: string) => console.log(`[${prefix} INFO] ${msg}`),\n    error: (msg: string) => console.error(`[${prefix} ERROR] ${msg}`),\n  };\n}\nconst logger = createLogger(\"App\");\nlogger.info(\"Started\");  // [App INFO] Started\nlogger.error(\"Failed\");  // [App ERROR] Failed\n\n// Python: function attributes → TypeScript: function properties\nfunction greet3(name: string): string {\n  return `${greet3.prefix} ${name}!`;\n}\ngreet3.prefix = \"Hello\";\nconsole.log(greet3(\"World\"));  // Hello World!\n\n// Python: singledispatch → TypeScript: function overloads\nfunction format(input: string): string;\nfunction format(input: number): string;\nfunction format(input: boolean): string;\nfunction format(input: string | number | boolean): string {\n  if (typeof input === \"string\") return `\"${input}\"`;\n  if (typeof input === \"number\") return input.toFixed(2);\n  return input ? \"true\" : \"false\";\n}\nconsole.log(format(42));       // \"42.00\"\nconsole.log(format(\"hello\"));  // '\"hello\"'\n\n// Python: recursive function with type hints\nfunction deepCount(obj: Record<string, any>): number {\n  let count = 0;\n  for (const val of Object.values(obj)) {\n    if (typeof val === \"object\" && val !== null) {\n      count += deepCount(val);\n    }\n    count++;\n  }\n  return count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Overload Resolver ===\ntype OverloadFn = (...args: unknown[]) => unknown;\ninterface OverloadSignature { args: string[]; returnType: string; }\nfunction resolveOverload(fn: OverloadFn, signatures: OverloadSignature[], args: unknown[]): string {\n  for (const sig of signatures) {\n    if (sig.args.length !== args.length) continue;\n    const match = sig.args.every((type, i) => {\n      if (type === \"number\") return typeof args[i] === \"number\";\n      if (type === \"string\") return typeof args[i] === \"string\";\n      if (type === \"boolean\") return typeof args[i] === \"boolean\";\n      return true;\n    });\n    if (match) return `Matches: (${sig.args.join(\", \")}) => ${sig.returnType}`;\n  }\n  return \"No matching overload\";\n}\nconst sigs: OverloadSignature[] = [\n  { args: [\"string\"], returnType: \"number\" },\n  { args: [\"number\", \"number\"], returnType: \"number\" },\n];\nconsole.log(resolveOverload(() => {}, sigs, [\"hello\"]));  // Matches (string) => number\nconsole.log(resolveOverload(() => {}, sigs, [1, 2]));      // Matches (number, number) => number\n\n// === Default Param Analyzer ===\ninterface ParamConfig { name: string; hasDefault: boolean; defaultVal?: unknown; isRest: boolean }\nfunction analyzeParams(fn: (...args: unknown[]) => unknown): ParamConfig[] {\n  const src = fn.toString();\n  const params = src.match(/\\(([^)]*)\\)/)?.[1] ?? \"\";\n  return params.split(\",\").filter(Boolean).map((p) => {\n    const trimmed = p.trim();\n    return {\n      name: trimmed.replace(/[=?].*/, \"\").replace(/^\\.\\.\\./, \"\").trim(),\n      hasDefault: trimmed.includes(\"=\"),\n      defaultVal: trimmed.includes(\"=\") ? trimmed.split(\"=\")[1]?.trim() : undefined,\n      isRest: trimmed.startsWith(\"...\"),\n    };\n  });\n}\nfunction example(a: string, b = 10, ...rest: number[]) { return a; }\nconsole.log(analyzeParams(example));\n\n// === Rest / Spread Helper ===\nfunction mergeArrays<T>(...arrays: T[][]): T[] {\n  return arrays.reduce((acc, arr) => [...acc, ...arr], []);\n}\nfunction pickProps<T extends Record<string, unknown>>(obj: T, ...keys: (keyof T)[]): Partial<T> {\n  return keys.reduce((acc, k) => ({ ...acc, [k]: obj[k] }), {} as Partial<T>);\n}\nconsole.log(mergeArrays([1, 2], [3, 4], [5]));\nconsole.log(pickProps({ a: 1, b: 2, c: 3 }, \"a\", \"c\"));\n\n// === Partial Application (Python functools.partial equivalent) ===\nfunction partial<T extends unknown[], R>(fn: (...args: T) => R, ...bound: Partial<T>): (...rest: T) => R {\n  return (...rest: T) => fn(...bound, ...rest) as R;\n}\nconst add = (a: number, b: number, c: number) => a + b + c;\nconst add5 = partial(add, 5);\nconsole.log(add5(10, 3)); // 18\n\n// === Currying Helper ===\nfunction curry<T extends unknown[], R>(fn: (...args: T) => R): (...args: Partial<T>) => unknown {\n  return (...args: Partial<T>) => args.length >= fn.length ? fn(...args as T) : curry(fn.bind(null, ...args));\n}\nconst curriedAdd = curry((a: number, b: number, c: number) => a + b + c);\nconsole.log(curriedAdd(1)(2)(3)); // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-patterns",
      children: "TypeScript Advanced Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Generic Function Constraints ===\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nconst person = { name: \"Alice\", age: 30, city: \"Paris\" };\nconsole.log(getProperty(person, \"name\")); // Alice\n// getProperty(person, \"zip\"); // TypeScript error\n\n// === Function Composition Pipeline ===\ntype Unary<T, R> = (x: T) => R;\nfunction pipe<T, R>(...fns: Unary<any, any>[]): Unary<T, R> {\n  return (x: T) => fns.reduce((acc, fn) => fn(acc), x) as R;\n}\nconst trim = (s: string) => s.trim();\nconst upper = (s: string) => s.toUpperCase();\nconst excerpt = (s: string) => s.length > 10 ? s.slice(0, 10) + \"...\" : s;\nconst processTitle = pipe(trim, upper, excerpt);\nconsole.log(processTitle(\"  hello world example  \")); // \"HELLO WOR...\"\n\n// === Memoization (Python: functools.lru_cache) ===\nfunction memoize<T, R>(fn: (arg: T) => R): (arg: T) => R {\n  const cache = new Map<T, R>();\n  return (arg: T): R => {\n    if (cache.has(arg)) {\n      console.log(`[cache hit] ${arg}`);\n      return cache.get(arg)!;\n    }\n    const result = fn(arg);\n    cache.set(arg, result);\n    return result;\n  };\n}\nconst fib = memoize((n: number): number => {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n});\nconsole.log(fib(40)); // Fast due to memoization\n\n// === Type Guards (Python: isinstance checks) ===\ninterface Cat { type: \"cat\"; meow(): void }\ninterface Dog { type: \"dog\"; bark(): void }\ntype Animal = Cat | Dog;\nfunction isCat(animal: Animal): animal is Cat {\n  return animal.type === \"cat\";\n}\nfunction handleAnimal(animal: Animal): void {\n  if (isCat(animal)) animal.meow();\n  else animal.bark();\n}\n\n// === Callback to Promise Wrapper ===\nfunction promisify<T>(fn: (cb: (err: Error | null, result?: T) => void) => void): () => Promise<T> {\n  return () => new Promise<T>((resolve, reject) => {\n    fn((err, result) => err ? reject(err) : resolve(result!));\n  });\n}\n\n// === Async Function Pattern ===\nasync function fetchWithTimeout<T>(url: string, timeoutMs = 5000): Promise<T> {\n  const controller = new AbortController();\n  const timer = setTimeout(() => controller.abort(), timeoutMs);\n  try {\n    const response = await fetch(url, { signal: controller.signal });\n    return await response.json() as T;\n  } finally {\n    clearTimeout(timer);\n  }\n}\n\n// === Partial Application with Types ===\nfunction partialApply<T extends unknown[], R>(fn: (...args: T) => R, ...args: Partial<T>): (...rest: T) => R {\n  return (...rest: T) => fn(...args, ...rest) as R;\n}\nconst multiply = (a: number, b: number, c: number) => a * b * c;\nconst double = partialApply(multiply, 2);\nconsole.log(double(3, 4)); // 24 (2 * 3 * 4)\n\n// === Variadic Function Overloads ===\nfunction sum(...args: number[]): number;\nfunction sum(...args: string[]): string;\nfunction sum(...args: (number | string)[]): number | string {\n  if (typeof args[0] === \"number\") return (args as number[]).reduce((a, b) => a + b, 0);\n  return (args as string[]).join(\"\");\n}\nconsole.log(sum(1, 2, 3));    // 6\nconsole.log(sum(\"a\", \"b\")); // \"ab\"\n\n// === Python-style decorator via higher-order function ===\nfunction logCalls<T extends (...args: unknown[]) => unknown>(fn: T): T {\n  return ((...args: Parameters<T>) => {\n    console.log(`Called ${fn.name}(${args.map(a => JSON.stringify(a)).join(\", \")})`);\n    const result = fn(...args);\n    console.log(`Returned ${JSON.stringify(result)}`);\n    return result;\n  }) as T;\n}\nconst loggedAdd = logCalls((a: number, b: number) => a + b);\nloggedAdd(3, 4); // logs: Called (3, 4) → 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-function-composition--pipeline",
      children: "TypeScript Function Composition & Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Pipe Operator (Python: function composition) ===\nconst pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T): T => fns.reduce((acc, fn) => fn(acc), value);\nconst compose = <T>(...fns: Array<(arg: T) => T>) => (value: T): T => fns.reduceRight((acc, fn) => fn(acc), value);\n\n// === Throttle & Debounce ===\nfunction debounce<T extends unknown[]>(fn: (...args: T) => void, delay: number) {\n  let timer: ReturnType<typeof setTimeout>;\n  return (...args: T) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\nfunction throttle<T extends unknown[]>(fn: (...args: T) => void, limit: number) {\n  let inThrottle = false;\n  return (...args: T) => {\n    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => { inThrottle = false; }, limit); }\n  };\n}\n\n// === Once (Python: functools.cache with no args) ===\nfunction once<T extends unknown[], R>(fn: (...args: T) => R): (...args: T) => R {\n  let called = false, result: R;\n  return (...args: T) => { if (!called) { called = true; result = fn(...args); } return result; };\n}\n\n// === Function Wrapping (Python: @wraps equivalent) ===\nfunction wrap<T extends unknown[], R>(fn: (...args: T) => R) {\n  const wrapped = (...args: T) => fn(...args);\n  Object.defineProperty(wrapped, 'name', { value: `wrapped_${fn.name}` });\n  return wrapped;\n}\n\n// === Async Pipe ===\nasync function asyncPipe<T>(initial: T, ...fns: Array<(x: any) => Promise<any>>): Promise<T> {\n  let result = initial as any;\n  for (const fn of fns) result = await fn(result);\n  return result;\n}\n\n// === Curried Function Builder ===\nfunction curryN<T, R>(fn: (...args: T[]) => R, arity = fn.length): (...args: T[]) => R | ((...args: T[]) => R) {\n  return (...args: T[]) => {\n    if (args.length >= arity) return fn(...args);\n    return curryN((...more: T[]) => fn(...args, ...more) as R, arity - args.length) as any;\n  };\n}\n\n// === Function Identity & Tap ===\nconst identityFn = <T>(x: T): T => x;\nfunction tap<T>(fn: (x: T) => void): (x: T) => T { return (x: T) => { fn(x); return x; }; }\n\n// === Pipeline with Validation ===\nconst pipelineResult = pipe(\n  (x: number) => x * 2,\n  tap(x => console.log(`After double: ${x}`)),\n  (x: number) => x + 1,\n)(5);\nconsole.log(pipelineResult); // 11\n\n// === Strategy Pattern via Functions ===\ntype Strategy = (a: number, b: number) => number;\nconst strategies: Record<string, Strategy> = {\n  add: (a, b) => a + b,\n  multiply: (a, b) => a * b,\n  max: (a, b) => Math.max(a, b),\n  power: (a, b) => a ** b,\n};\nfunction executeStrategy(name: string, a: number, b: number): number {\n  return strategies[name]?.(a, b) ?? (() => { throw new Error(`Unknown strategy: ${name}`); })();\n}\nconsole.log(executeStrategy(\"add\", 5, 3)); // 8\nconsole.log(executeStrategy(\"power\", 2, 10)); // 1024\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parameters: positional, keyword, default, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*args"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**kwargs"
        }), ", positional-only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), "), keyword-only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default arguments are evaluated once â€\" use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " for mutable defaults."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LEGB scope: Local, Enclosing, Global, Built-in."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "global"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nonlocal"
        }), " modify variables in outer scopes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docstrings and annotations document the function contract."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Closures capture enclosing variables by reference."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What problem arises with mutable default arguments and how do you fix it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the LEGB rule resolve variable names?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*args"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**kwargs"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you use positional-only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), ") parameters?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do closures capture variables and what is the late-binding issue?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_calculator(operation)"
        }), " that returns a function performing addition, subtraction, multiplication, or division based on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operation"
        }), " string. Use closures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a recursive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "factorial(n)"
        }), " function with type annotations, a docstring, and error handling for negative inputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timer(f)"
        }), " that accepts another function and returns a new function with the same behaviour. For now, just return a wrapper that prints \"called\" before each invocation (we will generalise this in Chapter 15)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a simple function registry and pipeline system. Define a decorator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@register(name)"
      }), " that stores functions in a global registry dict. Then implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pipeline(data, *stage_names)"
      }), " that applies the registered functions in sequence, passing the output of each as the input to the next. Support error handling at each stage. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**kwargs"
      }), " to pass configuration to individual stages."]
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