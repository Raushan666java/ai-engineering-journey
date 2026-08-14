"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10234],{

/***/ 30605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_05_es_6_plus_md_cc3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-05-es-6-plus-md-cc3.json
const site_docs_courses_web_development_05_es_6_plus_md_cc3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/05-es6-plus","title":"Chapter 5 — ES6+ JavaScript","description":"Previous 06-react-basics","source":"@site/docs/courses/web-development/05-es6-plus.md","sourceDirName":"courses/web-development","slug":"/web-development/05-es6-plus","permalink":"/ai-engineering-journey/web-development/05-es6-plus","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-es6-plus","slug":"/web-development/05-es6-plus","title":"Chapter 5 — ES6+ JavaScript","sidebar_label":"Chapter 5 — ES6+ JavaScript","sidebar_position":5},"sidebar":"course-web-development","previous":{"title":"Chapter 4 → JavaScript and the DOM","permalink":"/ai-engineering-journey/web-development/04-js-dom"},"next":{"title":"Chapter 6 → React Basics","permalink":"/ai-engineering-journey/web-development/06-react-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/05-es6-plus.md


const frontMatter = {
	id: '05-es6-plus',
	slug: '/web-development/05-es6-plus',
	title: 'Chapter 5 — ES6+ JavaScript',
	sidebar_label: 'Chapter 5 — ES6+ JavaScript',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5 — ES6+ JavaScript';

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
  "value": "5.1 Block-Scoped Declarations",
  "id": "51-block-scoped-declarations",
  "level": 3
}, {
  "value": "5.2 Arrow Functions",
  "id": "52-arrow-functions",
  "level": 3
}, {
  "value": "5.3 Template Literals",
  "id": "53-template-literals",
  "level": 3
}, {
  "value": "5.4 Destructuring",
  "id": "54-destructuring",
  "level": 3
}, {
  "value": "5.5 Spread and Rest",
  "id": "55-spread-and-rest",
  "level": 3
}, {
  "value": "5.6 Classes",
  "id": "56-classes",
  "level": 3
}, {
  "value": "5.7 Modules",
  "id": "57-modules",
  "level": 3
}, {
  "value": "5.8 Promises",
  "id": "58-promises",
  "level": 3
}, {
  "value": "5.9 Async / Await",
  "id": "59-async--await",
  "level": 3
}, {
  "value": "5.10 Symbol, Map, Set, WeakMap",
  "id": "510-symbol-map-set-weakmap",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: ES Module Loader &amp; Generator Function Demo",
  "id": "typescript-es-module-loader--generator-function-demo",
  "level": 3
}, {
  "value": "TypeScript Implementation: Babel-Style Transpiler Helpers, Destructuring Analyzer, Spread/Rest Utility",
  "id": "typescript-implementation-babel-style-transpiler-helpers-destructuring-analyzer-spreadrest-utility",
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
        id: "chapter-5--es6-javascript",
        children: "Chapter 5 — ES6+ JavaScript"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/04-js-dom",
          children: "04-js-dom"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/06-react-basics",
          children: "06-react-basics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " provide block scoping and eliminate the hoisting pitfalls of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), "."]
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
        href: "../../assets/images/lessons/web-development/05-es6-plus/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/05-es6-plus/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/05-es6-plus/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/05-es6-plus/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/05-es6-plus/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/05-es6-plus/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Arrow functions offer concise syntax and inherit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " from the enclosing scope."]
      }), "\n"]
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
            children: "Block-Scoped Declarations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "var"
            }), " with block scoping and the TDZ"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " by default; only use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " when you need reassignment"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow Functions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Concise syntax with lexical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " binding"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ideal for callbacks, array methods, and avoiding ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " confusion"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template Literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String interpolation, multi-line strings, and tagged templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use backticks for any string containing variables or line breaks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructuring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract values from arrays and objects with a single statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use with function parameters for clean optional/default value handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classes & Modules"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Syntactic sugar over prototypes with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extends"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "import"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "export"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organize code into modules with named and default exports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async Patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promises and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "async"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            }), " provide composable asynchronous control flow"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "async"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            }), " over raw ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".then()"
            }), " chains for readability"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Template literals enable interpolation, multi-line strings, and custom tagged template processing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[let, const & Block Scoping]\n    B[Arrow Functions]\n    A --> B\n    C[Template Literals]\n    B --> C\n    D[Destructuring]\n    C --> D\n    E[Spread & Rest]\n    D --> E\n    F[Classes]\n    E --> F\n    G[ES Modules]\n    F --> G\n    H[Promises & Async/Await]\n    G --> H\n    I[Map, Set & Symbol]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " with proper understanding of block scoping and the temporal dead zone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write arrow functions with concise syntax and correct ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " binding."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct strings using template literals with embedded expressions and tagged templates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract values using destructuring for both objects and arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use spread and rest operators for collection manipulation and function parameter handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and extend classes with private fields, static methods, and inheritance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organize code using ES modules with static and dynamic imports."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compose asynchronous control flow using promises and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "await"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Set"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WeakMap"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Symbol"
        }), " for advanced data modeling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Destructuring extracts values from arrays and objects with a clean, readable syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/05-es6-plus.png",
        alt: "ES6+ JavaScript Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-block-scoped-declarations",
      children: "5.1 Block-Scoped Declarations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ES6 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "let"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " to address the function-scoping pitfalls of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "var"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// var ignores block scope\nif (true) {\n  var message = 'Hello';\n}\nconsole.log(message); // 'Hello' — leaks\n\n// let respects block scope\nif (true) {\n  let greeting = 'Hello';\n}\n// console.log(greeting); // ReferenceError\n\n// const requires initialization and prohibits reassignment\nconst PI = 3.14159;\n// PI = 3; // TypeError\n\n// const does not freeze object contents\nconst config = { theme: 'dark' };\nconfig.theme = 'light'; // Allowed\n// config = {}; // TypeError\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-arrow-functions",
      children: "5.2 Arrow Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Arrow functions provide concise syntax and inherit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " from the enclosing lexical scope."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Single parameter, expression body\nconst square = (n) => n * n;\n\n// Multiple parameters\nconst sum = (a, b) => a + b;\n\n// Block body with explicit return\nconst process = (items) => {\n  const filtered = items.filter((x) => x > 0);\n  return filtered.map((x) => x * 2);\n};\n\n// No parameters\nconst now = () => Date.now();\n\n// Returning an object literal (parenthesize)\nconst createUser = (name) => ({ name, role: 'user' });\n\n// Lexical this — critical for callbacks\nclass Timer {\n  constructor() {\n    this.seconds = 0;\n    setInterval(() => {\n      this.seconds++; // `this` refers to Timer instance\n    }, 1000);\n  }\n}\n\n// Arrow functions have no `arguments` object\nconst logAll = (...args) => console.log(args); // Use rest instead\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-template-literals",
      children: "5.3 Template Literals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Template literals support string interpolation, multi-line strings, and tagged templates."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const name = 'Alice';\nconst age = 30;\n\n// Interpolation\nconst greeting = `Hello, my name is ${name} and I am ${age} years old.`;\n\n// Expressions inside ${}\nconst price = 29.99;\nconst formatted = `Total: $${(price * 1.08).toFixed(2)}`;\n\n// Multi-line\nconst html = `\n  <div class=\"card\">\n    <h2>${name}</h2>\n    <p>Age: ${age}</p>\n  </div>\n`;\n\n// Tagged templates — custom processing\nfunction highlight(strings, ...values) {\n  return strings.reduce((result, str, i) => {\n    const value = values[i] ? `<strong>${values[i]}</strong>` : '';\n    return `${result}${str}${value}`;\n  }, '');\n}\n\nconst name2 = 'Bob';\nconst rendered = highlight`Hello, ${name2}!`; // 'Hello, <strong>Bob</strong>!'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-destructuring",
      children: "5.4 Destructuring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Array destructuring:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const rgb = [255, 128, 64];\nconst [red, green, blue] = rgb;\nconsole.log(red); // 255\n\n// Skipping elements\nconst [, , third] = [10, 20, 30];\n\n// Rest pattern\nconst [head, ...tail] = [1, 2, 3, 4];\n// head = 1, tail = [2, 3, 4]\n\n// Default values\nconst [a = 1, b = 2] = [10]; // a=10, b=2\n\n// Swapping\nlet x = 1, y = 2;\n[x, y] = [y, x];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object destructuring:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const user = { id: 1, name: 'Alice', email: 'alice@example.com' };\nconst { name, email } = user;\n\n// Renaming\nconst { name: fullName, email: mail } = user;\n\n// Default values\nconst { role = 'user' } = user;\n\n// Nested destructuring\nconst response = {\n  data: { items: [{ id: 1 }, { id: 2 }], total: 2 },\n};\nconst { data: { items, total } } = response;\n\n// Function parameter destructuring\nfunction renderUser({ name, email, role = 'user' }) {\n  return `${name} (${email}) — ${role}`;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-spread-and-rest",
      children: "5.5 Spread and Rest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spread"
      }), " expands iterables:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]\nconst copy = [...arr1]; // Shallow copy\nconst max = Math.max(...arr1); // Pass as arguments\n\n// Objects (ES2018)\nconst defaults = { theme: 'light', lang: 'en' };\nconst overrides = { theme: 'dark' };\nconst config = { ...defaults, ...overrides }; // { theme: 'dark', lang: 'en' }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rest"
      }), " collects remaining values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function logAll(first, ...rest) {\n  console.log(`First: ${first}`);\n  console.log(`Rest: ${rest.join(', ')}`);\n}\n\n// Destructuring with rest\nconst [winner, ...runnersUp] = ['Alice', 'Bob', 'Charlie'];\n// winner = 'Alice', runnersUp = ['Bob', 'Charlie']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-classes",
      children: "5.6 Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ES6 classes are syntactic sugar over prototype-based inheritance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n\n  speak() {\n    return `${this.name} makes a sound.`;\n  }\n\n  // Static method\n  static classify() {\n    return 'Animalia';\n  }\n}\n\nclass Dog extends Animal {\n  #breed; // Private field (ES2022)\n\n  constructor(name, breed) {\n    super(name);\n    this.#breed = breed;\n  }\n\n  // Override\n  speak() {\n    return `${this.name} barks.`;\n  }\n\n  // Private method\n  #wagTail() {\n    return 'Tail wagging';\n  }\n\n  get breed() {\n    return this.#breed;\n  }\n\n  set breed(value) {\n    if (typeof value !== 'string') throw new Error('Breed must be a string');\n    this.#breed = value;\n  }\n\n  static create(name) {\n    return new Dog(name, 'Unknown');\n  }\n}\n\nconst dog = new Dog('Rex', 'German Shepherd');\nconsole.log(dog.speak()); // 'Rex barks.'\nconsole.log(dog.breed);   // 'German Shepherd'\n// console.log(dog.#breed); // SyntaxError — private\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-modules",
      children: "5.7 Modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ES modules provide static, tree-shakeable module definitions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Named exports:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// utils/math.js\nexport const PI = 3.14159;\nexport function square(x) {\n  return x * x;\n}\nexport class Calculator {\n  add(a, b) { return a + b; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default export:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// utils/logger.js\nexport default class Logger {\n  log(message) { console.log(`[LOG] ${message}`); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Importing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Named imports\nimport { PI, square, Calculator } from './utils/math.js';\n\n// Default import\nimport Logger from './utils/logger.js';\n\n// Mixed\nimport Logger, { PI, square } from './utils/math.js';\n\n// Namespace import\nimport * as MathUtils from './utils/math.js';\n\n// Rename imports\nimport { square as sq } from './utils/math.js';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic imports"
      }), " (returns a promise):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const module = await import('./heavy-component.js');\nmodule.render();\n\n// Code splitting in practice\nbutton.addEventListener('click', async () => {\n  const { showDialog } = await import('./dialog.js');\n  showDialog('Welcome!');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-promises",
      children: "5.8 Promises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promises represent eventual completion or failure of an asynchronous operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Creating a promise\nfunction fetchUser(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id > 0) {\n        resolve({ id, name: 'Alice' });\n      } else {\n        reject(new Error('Invalid user ID'));\n      }\n    }, 1000);\n  });\n}\n\n// Consuming\nfetchUser(1)\n  .then((user) => console.log(user))\n  .catch((error) => console.error(error))\n  .finally(() => console.log('Done'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promise combinators:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const p1 = fetch('/api/users');\nconst p2 = fetch('/api/roles');\n\n// All — wait for all to settle, reject if any reject\nconst [users, roles] = await Promise.all([p1, p2]);\n\n// allSettled — wait for all, never reject\nconst results = await Promise.allSettled([p1, p2]);\nconst fulfilled = results.filter((r) => r.status === 'fulfilled').map((r) => r.value);\nconst rejected = results.filter((r) => r.status === 'rejected').map((r) => r.reason);\n\n// race — first settled (reject or resolve)\nconst fastest = await Promise.race([p1, p2]);\n\n// any — first fulfilled, reject only if all reject (ES2021)\nconst firstSuccess = await Promise.any([p1, p2]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "59-async--await",
      children: "5.9 Async / Await"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "async"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), " provides synchronous-style syntax for promise-based code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "async function loadDashboard() {\n  try {\n    const user = await fetchUser(1);\n    const posts = await fetch(`/api/users/${user.id}/posts`);\n    const data = await posts.json();\n    // Sequential — each waits for the previous\n  } catch (error) {\n    console.error('Failed to load dashboard:', error);\n  }\n}\n\n// Parallel execution with await\nasync function loadParallel() {\n  const [user, config] = await Promise.all([\n    fetchUser(1),\n    fetch('/api/config').then((r) => r.json()),\n  ]);\n  return { user, config };\n}\n\n// Top-level await (modules only)\nconst data = await fetch('/api/initial').then((r) => r.json());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "510-symbol-map-set-weakmap",
      children: "5.10 Symbol, Map, Set, WeakMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symbol"
      }), " creates unique identifiers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const sym1 = Symbol('id');\nconst sym2 = Symbol('id');\nconsole.log(sym1 === sym2); // false\n\nconst obj = {\n  [sym1]: 'secret value',\n  name: 'Alice',\n};\nObject.getOwnPropertySymbols(obj); // [Symbol(id)]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Map"
      }), " — key-value collections with any type as key:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const userRoles = new Map();\nuserRoles.set('alice', 'admin');\nuserRoles.set('bob', 'user');\nconsole.log(userRoles.get('alice')); // 'admin'\nconsole.log(userRoles.has('charlie')); // false\nconsole.log(userRoles.size); // 2\n\n// Iteration\nfor (const [user, role] of userRoles) {\n  console.log(`${user}: ${role}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Set"
      }), " — unique values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const tags = new Set(['react', 'javascript', 'react', 'css']);\nconsole.log(tags.size); // 3\ntags.add('html');\ntags.delete('css');\nconsole.log(tags.has('react')); // true\n\n// Convert to array\nconst unique = [...tags];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WeakMap"
      }), " — keys must be objects, held weakly (no memory leak):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const cache = new WeakMap();\n\nfunction process(obj) {\n  if (cache.has(obj)) return cache.get(obj);\n  const result = expensiveComputation(obj);\n  cache.set(obj, result);\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nCombine destructuring with rest: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const {a, b, ...rest} = obj"
        }), " extracts ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b"
        }), " while gathering remaining properties into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rest"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nArrow functions cannot be used as constructors and have no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arguments"
        }), " object. Use rest parameters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "...args"
        }), " instead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.all"
        }), " fails fast (rejects on first rejection). Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.allSettled"
        }), " when you need results from all promises regardless of failure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Promise.all"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Promise.allSettled"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rejects on first rejection, short-circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never rejects, returns all results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Map"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Object"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Any key type, ordered insertion, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".size"
            }), " property"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String/Symbol keys only, inherits prototype"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Set"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Array"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unique values, no index access, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".has()"
            }), " is O(1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered, allows duplicates, index access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            }), " vs prototype"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cleaner syntax, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "super"
            }), " keyword, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extends"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".prototype"
            }), " manipulation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "import"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "require"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static, tree-shakeable, async dynamic import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous, runtime resolution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declarations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " (no reassign), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "let"
            }), " (block-scoped), avoid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "var"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow Functions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(params) => expr"
            }), ", lexical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), ", no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arguments"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructuring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const {a, b} = obj"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const [x, y] = arr"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spread/Rest"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "...arr"
            }), " expands, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "...args"
            }), " collects"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise Combinators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Promise.all()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".allSettled()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".race()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".any()"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrow functions, destructuring props"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean component syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async/await with try/catch for error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readable asynchronous data fetching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spread operator for merging defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable configuration merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map for caches, Set for unique collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient lookups and deduplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES modules for splitting code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-shakeable, maintainable codebase"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. Which of the following correctly uses destructuring?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const user = {name, email}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const {name, email} = user"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const [name, email] = user"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const user = [name, email]"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) Object destructuring extracts properties by name using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ }"
            }), " on the left side of the assignment."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.allSettled"
        }), " return?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The first resolved value"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) An array of objects with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "reason"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Only rejected promises"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A single resolved value or the first rejection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "allSettled"
            }), " returns results for all promises, each with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "status: 'fulfilled'"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "status: 'rejected'"
            }), "."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. How do you make a property private in an ES2022 class?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) Prefix with underscore ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_prop"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), " keyword"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) Prefix with hash ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#prop"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const prop"
        }), " inside the constructor"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["C) The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), " prefix creates true private fields in JavaScript classes (ES2022)."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q4. What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WeakMap"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) WeakMap keys must be objects and are garbage-collected"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) WeakMap has a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".size"
        }), " property"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) WeakMap is iterable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) There is no difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["A) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WeakMap"
            }), " keys must be objects, and entries are garbage-collected when the key object is no longer referenced elsewhere."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-es-module-loader--generator-function-demo",
      children: "TypeScript: ES Module Loader & Generator Function Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ModuleSystem {\n  static async dynamicImport(modulePath: string): Promise<any> {\n    try { return await import(modulePath); }\n    catch { throw new Error(`Module ${modulePath} not found`); }\n  }\n  static treeShake<T extends Record<string, any>>(exports: T, used: (keyof T)[]): Partial<T> {\n    const result: Partial<T> = {};\n    used.forEach(k => { if (k in exports) result[k] = exports[k]; });\n    return result;\n  }\n}\n\nclass GeneratorDemo {\n  static *fibonacci(limit: number): Generator<number> {\n    let [a, b] = [0, 1];\n    while (a <= limit) { yield a; [a, b] = [b, a + b]; }\n  }\n  static *range(start: number, end: number, step: number = 1): Generator<number> {\n    for (let i = start; i <= end; i += step) yield i;\n  }\n  static *take<T>(gen: Generator<T>, n: number): Generator<T> {\n    let count = 0;\n    for (const v of gen) { if (count++ >= n) break; yield v; }\n  }\n}\n\nclass ProxyValidator {\n  static createLoggedObject<T extends Record<string, any>>(target: T): T {\n    return new Proxy(target, {\n      get(obj, prop) { console.log(`GET ${String(prop)}`); return obj[prop as keyof T]; },\n      set(obj, prop, val) { console.log(`SET ${String(prop)} = ${val}`); obj[prop as keyof T] = val; return true; },\n    });\n  }\n}\n\nconst fib = [...GeneratorDemo.take(GeneratorDemo.fibonacci(1000), 10)];\nconsole.log(\"Fibonacci:\", fib);\nconst logged = ProxyValidator.createLoggedObject({ name: \"ES6\", version: 2015 });\nconsole.log(\"Logged:\", logged.name);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-babel-style-transpiler-helpers-destructuring-analyzer-spreadrest-utility",
      children: "TypeScript Implementation: Babel-Style Transpiler Helpers, Destructuring Analyzer, Spread/Rest Utility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BabelStyleTranspiler {\n    static arrowToFunction(code: string): string {\n        return code.replace(/(\\w+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*{([^}]*)}/g, \"function $1($2) {\\n$3\\n}\");\n    }\n\n    static templateLiteralToString(code: string): string {\n        return code.replace(/`([^`]*)`/g, (match, content) => {\n            const parts = content.split(/\\$\\{([^}]+)\\}/);\n            return parts.map((p: string, i: number) =>\n                i % 2 === 0 ? JSON.stringify(p) : p\n            ).filter((p: string) => p !== '\"\"').join(\" + \");\n        });\n    }\n\n    static destructureToVar(code: string): string {\n        return code.replace(/const\\s*{([^}]+)}\\s*=\\s*([^;]+);/g, (match: string, props: string, obj: string) => {\n            return props.split(\",\").map((p: string) => {\n                const [key, alias] = p.trim().split(/\\s*:\\s*/);\n                return `const ${alias?.trim() || key.trim()} = ${obj.trim()}.${key.trim()};`;\n            }).join(\"\\n\");\n        });\n    }\n\n    static forOfToFor(code: string): string {\n        return code.replace(/for\\s*\\(\\s*(?:let|const|var)\\s+(\\w+)\\s+of\\s+(\\w+)\\s*\\)\\s*{([^}]*)}/g, (match: string, item: string, iterable: string, body: string) => {\n            return `for (let ${item}Idx = 0; ${item}Idx < ${iterable}.length; ${item}Idx++) {\\n  const ${item} = ${iterable}[${item}Idx];${body}\\n}`;\n        });\n    }\n}\n\nclass DestructuringAnalyzer {\n    static analyzePattern(code: string): { type: string; variables: string[]; depth: number; restUsed: boolean; defaults: boolean } {\n        let variables: string[] = [];\n        let depth = 0;\n        let restUsed = false;\n        let defaults = false;\n\n        const arrayMatch = code.match(/^\\s*\\[([^\\]]+)\\]\\s*=/);\n        if (arrayMatch) {\n            const items = arrayMatch[1].split(\",\").map(s => s.trim());\n            variables = items.filter(i => i !== \"\").map(i => i.replace(/\\s*=\\s*[^,]+/, \"\").replace(/^\\.\\.\\./, \"\"));\n            restUsed = items.some(i => i.startsWith(\"...\"));\n            defaults = items.some(i => i.includes(\"=\"));\n            return { type: \"array\", variables, depth: 1, restUsed, defaults };\n        }\n\n        const objMatch = code.match(/^\\s*{([^}]+)}\\s*=/);\n        if (objMatch) {\n            const items = objMatch[1].split(\",\").map(s => s.trim());\n            variables = items.map(i => {\n                const colonIdx = i.indexOf(\":\");\n                if (colonIdx > -1) {\n                    const val = i.slice(colonIdx + 1).trim();\n                    return val.replace(/\\s*=\\s*[^,]+/, \"\").replace(/^\\.\\.\\./, \"\");\n                }\n                return i.replace(/\\s*=\\s*[^,]+/, \"\").replace(/^\\.\\.\\./, \"\");\n            }).filter(Boolean);\n            restUsed = items.some(i => i.startsWith(\"...\"));\n            defaults = items.some(i => i.includes(\"=\"));\n            return { type: \"object\", variables, depth: code.includes(\"{\") ? code.split(\"{\").length - 1 : 1, restUsed, defaults };\n        }\n\n        return { type: \"none\", variables: [], depth: 0, restUsed: false, defaults: false };\n    }\n}\n\nclass SpreadRestUtility {\n    static merge<T>(...objects: Record<string, T>[]): Record<string, T> {\n        return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});\n    }\n\n    static pick<T extends Record<string, any>>(obj: T, ...keys: (keyof T)[]): Partial<T> {\n        return keys.reduce((acc, key) => { if (key in obj) acc[key] = obj[key]; return acc; }, {} as Partial<T>);\n    }\n\n    static omit<T extends Record<string, any>>(obj: T, ...keys: (keyof T)[]): Partial<T> {\n        const result = { ...obj };\n        for (const key of keys) delete result[key];\n        return result;\n    }\n\n    static head<T>(arr: T[], n: number = 1): T[] { return arr.slice(0, n); }\n    static tail<T>(arr: T[], n: number = 1): T[] { return arr.slice(-n); }\n    static rest<T>(arr: T[], n: number = 1): T[] { return arr.slice(n); }\n\n    static groupBy<T>(arr: T[], fn: (item: T) => string): Record<string, T[]> {\n        return arr.reduce((acc, item) => {\n            const key = fn(item);\n            (acc[key] = acc[key] || []).push(item);\n            return acc;\n        }, {} as Record<string, T[]>);\n    }\n\n    static pipe<T>(...fns: ((arg: T) => T)[]): (arg: T) => T {\n        return (x: T) => fns.reduce((v, fn) => fn(v), x);\n    }\n}\n\n// Demo\nconst code = \"const { name: userName, age } = user;\";\nconsole.log(\"Destructure analysis:\", DestructuringAnalyzer.analyzePattern(code));\nconsole.log(\"Transpiled:\\n\", BabelStyleTranspiler.destructureToVar(code));\nconsole.log(\"Template:\", BabelStyleTranspiler.templateLiteralToString(\"`Hello ${name}, age ${age}`\"));\nconsole.log(\"Merge:\", JSON.stringify(SpreadRestUtility.merge({ a: 1 }, { b: 2 }, { c: 3 })));\nconsole.log(\"Pick:\", JSON.stringify(SpreadRestUtility.pick({ a: 1, b: 2, c: 3 }, \"a\", \"c\")));\nconst double = (x: number) => x * 2;\nconst inc = (x: number) => x + 1;\nconsole.log(\"Pipe(inc, double)(3):\", SpreadRestUtility.pipe(inc, double)(3));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// es6 plus\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'es6 plus', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ES6 classes and ES modules provide a modern OOP and code organization model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "let"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "var"
        }), " with block scoping; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " prevents reassignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Arrow functions provide lexical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " and concise syntax but lack ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arguments"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template literals support interpolation, multi-line strings, and tagged templates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructuring enables concise extraction from arrays and objects."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spread expands iterables; rest collects remaining values."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ES6 classes support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super"
        }), ", static methods, getters/setters, and private fields (", (0,jsx_runtime.jsx)(_components.code, {
          children: "#"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ES modules use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "export"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "import"
        }), " with static analysis and dynamic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Promises and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "await"
        }), " provide composable asynchronous control flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Set"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WeakMap"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Symbol"
        }), " extend the language's data modeling capabilities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "await"
        }), " makes promise-based code read like synchronous logic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can arrow functions not be used as constructors?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.all"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise.allSettled"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WeakMap"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), " and in what scenarios is it preferable?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " keyword mean in a class context?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rewrite the following code using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "await"
        }), " instead of promise chains: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fetch('/api/user').then(r => r.json()).then(u => fetch('/api/posts/' + u.id)).then(r => r.json()).then(posts => console.log(posts)).catch(console.error)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cache"
        }), " class that uses a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), " internally with the following API: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get(key)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set(key, value, ttlSeconds)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete(key)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clear()"
        }), ". Items should auto-expire after their TTL."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a deep merge function using spread and rest that recursively merges two objects into a new object, with later properties taking precedence."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EventBus"
        }), " class (typed publish-subscribe system) using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Symbol"
        }), " that supports:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "on(event, handler)"
            }), " — subscribe with optional symbol-based wildcard patterns"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "off(event, handler)"
            }), " — unsubscribe specific handler"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "emit(event, payload)"
            }), " — publish to all matching subscribers synchronously"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "once(event, handler)"
            }), " — auto-unsubscribe after first emission"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Priority ordering: handlers with higher priority execute first"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Middleware: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use(middlewareFn)"
            }), " to intercept all events"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Context: subscribers should not be able to affect each other through shared mutable state in the payload\nDemonstrate with test assertions."
          }), "\n"]
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